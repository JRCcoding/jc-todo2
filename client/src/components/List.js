import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Button } from 'react-bootstrap'
// if params not working? 1/2
// import { useParams } from 'react-router-dom'

const List = ({ todo }) => {
  const [todos, setTodos] = useState()
  // if params not working? 2/2
  // const { id } = useParams()

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get('/api/todo')

      setTodos(data)
    }
    fetchTodos()
  })

  function handleComplete(e) {
    axios.put(`/todo/${e.target.id}`, { completed: 'yes' })
  }

  function handleDelete(e) {
    axios.delete(`http://localhost:10000/api/todo/${e.target.id}`)

    setTodos((data) => {
      return data.filter((todo) => todo._id !== e.target.name)
    })
  }
  return (
    <div>
      {todos &&
        todos.reverse().map((todo) => (
          <div className='todos' key={todo}>
            <Row>
              <Col className='text-white'>{todo.title}</Col>
              <Col>{todo.description}</Col>
              <Col>
                <Button>Completed</Button>
              </Col>
              <Col>
                <Button onClick={handleDelete}>Delete</Button>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  )
}

export default List
