import React,{useState} from 'react';
import propTypes from 'prop-types'

const AddCategory = ( { setCategories} ) =>{
    const [inputValue, setInputValue] = useState('')
    const handelInputChange = (e) =>{
        setInputValue(
            e.target.value
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 0 ){
            setCategories( catego => [...catego, inputValue])
        }else{
            alert('Digite un valor valido no puede esatr vacio')
        }
       // console.log('Sumit hecho')
    }
    return(
        <form onSubmit={ handleSubmit }>
            <input type='text' value={inputValue}  onChange={handelInputChange} />
        </form>    
    )
}
AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
export default AddCategory