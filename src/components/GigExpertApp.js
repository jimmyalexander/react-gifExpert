import React, { useState } from 'react'
import AddCategory from './AddCategory'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samuraix', 'Dragon Ball'])
   /*  const handleAdd = () => {
       setCategories(
        [ ...categories , 'Hunter']
       ) 
       setCategories(cate =>{return [...cate, 'Hunter']})
    } */
       return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } categories={categories} />
            <hr />
            <ol>
               {
                   categories.map(item => {
                       return  <li key={ item }>{ item } </li>
                   })
               }
            </ol>
        </>
    )
}
export default GifExpertApp