import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  const [inputValue, setValue] = useState('')

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories => [inputValue, ...categories])
      setValue('')

    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
      
        <input 
            type='text'
            value = {inputValue}
            onChange={handleInputChange}
        />

        </form>
    </div>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  
  }
