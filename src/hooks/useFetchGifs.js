import { useState, useEffect } from 'react';
import { getFifs } from '../helpers/getFifs';

export const useFetchGifs = (category) => {
   
const [state, setState ] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getFifs( category ).then( imgs => {


            setState({
                data: imgs,
                loading: false
            })


        }) 
    }, [category])

    return state;
}