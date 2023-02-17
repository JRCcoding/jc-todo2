import {
  find,
  create,
  findByIdAndUpdate,
  findByIdAndRemove,
} from '../models/todo'

// find method will return all todo in collection
export function getAllTodo(req, res) {
  find()
    .then((todo) => res.json(todo))
    .catch((err) =>
      res.status(404).json({ message: 'Todo not found', error: err.message })
    )
}

// create method will add a new todo
export function postCreateTodo(req, res) {
  create(req.body)
    .then((data) => res.json({ message: 'Todo added!', data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: 'Failed to add todo', error: err.message })
    )
}

// findByIdAndUpdate method will update specific todo
export function putUpdateTodo(req, res) {
  findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: 'Todo updated!', data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: 'Failed to update todo', error: err.message })
    )
}

// findByIdAndRemove will remove specific todo
export function deleteTodo(req, res) {
  findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({ message: 'Todo deleted!', data }))
    .catch((err) =>
      res.status(404).json({ message: 'Todo not found', error: err.message })
    )
}
