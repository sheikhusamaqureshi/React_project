
import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form jama ho gya')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='enter your name'></input>
        <button>Submit</button>

      </form>
      
    </div>
  )
}

export default App
