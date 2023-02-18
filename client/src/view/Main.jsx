import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../components/Products';
export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <div>
            <Products/>
        </div>
    )
}