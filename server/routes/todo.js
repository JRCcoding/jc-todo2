import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import Todo from '../models/todo.js'
const router = Router()

// GET api/todo
// get all todo
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const todos = await Todo.find({})

    res.json(todos)
  })
)

// POST api/todo
// add a new todo
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const todos = await Todo.create({
      title: 'Test title',
      description: 'test description',
    })

    res.json(todos)
  })
)

// PUT api/todo/:id
// update todo
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const todos = await Todo.putUpdateTodo(req.params.id)

    res.json(todos)
  })
)

// DELETE api/todo/:id
// delete todo
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const todos = await Todo.findByIdAndDelete(req.params.id, req.body)

    res.json(todos)
  })
)

export default router
