import {Router} from 'express'
import {middleware as query} from 'querymen'
import {middleware as body} from 'bodymen'
import {actions} from './controller'
import {schema} from './model'

const router = new Router()

router.get('/', query(schema.query), actions.get)

router.get('/:id', actions.show)

router.post('/', body(schema.create), actions.create)

router.put('/:id', body(schema.update), actions.update)

router.delete('/:id', actions.delete)

export default router
