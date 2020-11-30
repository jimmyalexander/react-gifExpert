import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'
import GifExpertApp from './GigExpertApp'

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category )
    
    return (
        <div>
            <h3 className='animate__animated animate__backInDown' >{ category }</h3>
            { loading && <p className='animate__animated animate__flash' >Cargando..</p>}
                <div className='card-grid' >
                    {
                        images.map( img =>(
                            <GifGridItem key={ img.id } { ...img } />
                        ))
                    }
                </div>
        </div> 
    )
}
export default GifExpertApp