import _ from 'lodash'
import {data} from '../document/model'
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcryptjs'

export const actions = {
  get ({ querymen }, res, next) {
    try {
      let dataRes = data
      if (querymen.body) dataRes = _.filter(data, querymen.query)
      return res.json(dataRes)
    } catch (e) {
      next()
    }
  },
  async create ({ bodymen }, res, next) {
    try {
      const password = await bcrypt.hash(bodymen.body.password, 4)

        .catch(next)
      const obj = { ...(bodymen.body), id: uuid(), createdAt: _.now(), password }
      data.push(obj)
      return res.json(obj)
    } catch (e) {
      next()
    }
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
