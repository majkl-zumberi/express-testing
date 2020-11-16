import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { actions } from './controller'
import { schema } from './model'
import { token } from '../../services/passport'

const router = new Router()

router.get('/', token({ required: true }), query(schema.query), actions.get)
router.get('/schema', token({ required: true }), actions.getSchema)

router.get('/:id', token({ required: true }), actions.show)

router.post('/', token({ required: true }), body(schema.create), actions.create)

router.put('/:id', token({ required: true }), body(schema.update), actions.update)

router.delete('/:id', token({ required: true }), actions.delete)

export default router
