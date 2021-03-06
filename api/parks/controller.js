import _ from 'lodash'
import { carPrices, data } from './model'
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
      const obj = { ...(bodymen.body), id: bodymen.body.plate, createdAt: moment().format('yyyy-MM-DDTHH:mm:ss.000[Z]') }
      const startTime = moment(obj.startTime)
      const endTime = moment(obj.endTime)
      const numberOfDays = endTime.diff(startTime, 'days')
      obj.totalDuration = numberOfDays >= 0 ? numberOfDays + 1 : numberOfDays < 0 ? NaN : numberOfDays
      obj.totalPrice = obj.totalDuration * carPrices[obj.car].price
      data.push(obj)
      return res.json(obj)
    } catch (e) {
      next()
    }
  },

  update ({ params, bodymen }, res, next) {
    let dataRes = _.find(data, { id: params.id })
    dataRes = { ...dataRes, ...(bodymen.body), updatedAt: moment().format('yyyy-MM-DDTHH:mm:ss.000[Z]') }
    const startTime = moment(dataRes.startTime)
    const endTime = moment(dataRes.endTime)
    const numberOfDays = endTime.diff(startTime, 'days')
    dataRes.totalDuration = numberOfDays >= 0 ? numberOfDays + 1 : numberOfDays < 0 ? NaN : numberOfDays
    dataRes.totalPrice = dataRes.totalDuration * carPrices[dataRes.car].price
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
