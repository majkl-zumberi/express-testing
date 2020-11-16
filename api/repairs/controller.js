import _ from 'lodash'
import { data, devicePrices } from './model'
import { v4 as uuid } from 'uuid'
import moment from 'moment'

export const actions = {
  get ({ querymen }, res, next) {
    try {
      let dataRes = data
      if (querymen.query) dataRes = _.filter(data, querymen.query)
      return res.json(dataRes)
    } catch (e) {
      next()
    }
  },

  show ({ params }, res, next) {
    try {
      const dataRes = _.find(data, { id: params.id })
      if (_.isEmpty(dataRes)) return res.status(404).json({ status: 'not found' })
      return res.json(dataRes)
    } catch (e) {
      next()
    }
  },

  create ({ bodymen }, res, next) {
    try {
      const obj = { ...(bodymen.body), id: uuid(), createdAt: moment().format() + 'Z' }
      const startTime = moment(obj.startTime)
      const endTime = moment(obj.endTime)
      let duration = 0
      if (startTime.dayOfYear() === endTime.dayOfYear()) {
        duration = _.round(endTime.diff(startTime) / 1000 / 60 / 60, 2)
      } else {
        const numberOfDays = endTime.diff(startTime, 'days')
        // calc working hours 9:00-13:00 14:00-18:00
        duration = (18 - startTime.hours() - 1) + _.round((0 - startTime.minutes()) / 60, 2)
        duration += (numberOfDays - 2) * 8
        duration += (endTime.hours() - 9 - 1) + _.round(endTime.minutes() / 60, 2)
      }
      obj.totalDuration = duration
      obj.totalPrice = duration * devicePrices[obj.device].price
      data.push(obj)
      return res.json(obj)
    } catch (e) {
      next()
    }
  },

  update ({ params, bodymen }, res, next) {
    let dataRes = _.find(data, { id: params.id })
    dataRes = { ...dataRes, ...(bodymen.body), updatedAt: moment().format() + 'Z' }
    _.remove(data, { id: params.id })
    data.push(dataRes)
    return res.json(dataRes)
  },

  delete ({ params }, res, next) {
    try {
      console.log('del')
      _.remove(data, { id: params.id })
      return res.json({ status: 'done' })
    } catch (e) {
      next()
    }
  }

}
