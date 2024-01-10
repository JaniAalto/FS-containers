import React from 'react'
import { render, screen } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import Todo from '../Todos/Todo'

test("", () => {
  const todo = {
    text: "A test todo",
    done: false
  }
  const mockHandler = jest.fn()
  
  render(<Todo todo={todo} onClickDelete={mockHandler} onClickComplete={mockHandler} />)

  const element = screen.getByText("A test todo")
  expect(element).toBeDefined()
  const element2 = screen.getByText("This todo is not done")
  expect(element2).toBeDefined()
})

test("foo", () => {
  const result = 1

  expect(result).toBe(1)
})