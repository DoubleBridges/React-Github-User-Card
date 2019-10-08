import React, { useState } from 'react'


const SearchBar = (props) => {

  const [newUser, setNewUser] = useState();

  const changeHandler = e => setNewUser(e.target.value)

  return (
    <form onSubmit={() => props.submitHandler(newUser)}>
      <input
        type='text'
        value={newUser}
        placeholder='GitHub Handle'
        onChange={changeHandler}
      ></input>
      <button type='submit'>Find User</button>
      
    </form>
  )

}

export default SearchBar