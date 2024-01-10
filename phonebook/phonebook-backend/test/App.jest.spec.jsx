import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { DisplayedList, PersonForm } from '../frontend/src/App'


describe('<App />', () => {
  it("displays the list", async () => {
    const removeNumber = jest.fn()
    const persons = [
      {
        "name": "Miko Esimerkki",
        "number": "040-123456",
        "id": "64529a7bd17c356b03c3e475"
      },
      {
        "name": "Anna",
        "number": "23-54325353",
        "id": "6456619d0ee475c293b95d35"
      },
      {
        "name": "Uuno",
        "number": "11-111111111",
        "id": "645661c00ee475c293b95d37"
      }
    ]

    render(<DisplayedList names={persons.map(person => person.name)} numbers={persons.map(person => person.number)}
      ids={persons.map(person => person.id)} filterString={""} removeNumber={removeNumber} />)

    expect(screen.getByText("Miko Esimerkki 040-123456"))
  })

  it("new number can be added", async () => {
    const user = userEvent.setup()
    const addName = jest.fn()
    let newName = ""
    let newNumber = ""
    const handleNameChange = (event) => {
      newName = newName.concat(event.target.value)
    }
    const handleNumberChange = (event) => {
      newNumber = newNumber.concat(event.target.value)
    }

    const { container } = render(<PersonForm addName={addName} newName={newName} newNumber={newNumber}
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />)

    const input1 = container.querySelector('#nameInput')
    const input2 = container.querySelector('#numberInput')
    const sendButton = screen.getByRole('button')

    await user.type(input1, "New Name")
    await user.type(input2, "123-456789")
    await user.click(sendButton)

    expect(addName.mock.calls).toHaveLength(1)
    expect(newName).toBe("New Name")
    expect(newNumber).toBe("123-456789")
  })
})