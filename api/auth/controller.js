import Promise from 'bluebird'
import * as User from '../users/model'
import {sign} from '../../services/jwt'

const actions = {}

actions.login = ({ user }, res, next) => Promise.all([sign(user.id), User.view(user)])
  .then(([token, userView]) => res.send({
    token,
    user: userView
  }))
  .catch(next)

actions.checkJWT = (req, res) => res.sendStatus(200)

export default actions
