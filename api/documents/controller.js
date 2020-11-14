import _ from 'lodash'
import { data } from './model'
import { v4 as uuid } from 'uuid'

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
      const obj = { ...(bodymen.body), id: uuid(), createdAt: _.now() }
      data.push(obj)
      return res.json(obj)
    } catch (e) {
      next()
    }
  },

  update ({ params, bodymen }, res, next) {
    let dataRes = _.find(data, { id: params.id })
    dataRes = { ...dataRes, ...(bodymen.body), updatedAt: _.now() }
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
