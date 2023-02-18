import axios from 'axios';
import React, { useState } from 'react'
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    return (
        <div className='container'>
            <form onSubmit={onSubmitHandler} className='form-signup'>
                <h2>Product Manager</h2>
                <div className='form-group'>
                    <p className='d-flex'>
                        <label className='p-2'>Title</label>
                        <input type="text" onChange={e => setTitle(e.target.value)} value={title} className='form-control'/>
                    </p>
                    <p className='d-flex'>
                        <label className='p-2'>Price</label>
                        <input type="number" onChange={e => setPrice(e.target.value)} value={price} className='form-control' />
                    </p>
                    <p>
                        <label>Description</label>
                        <textarea type="text" onChange={e => setDescription(e.target.value)} value={description}  className='form-control'/>
                    </p>
                </div>
                <input type="submit" className='btn btn-success btn-block' value='Enviar'/>
            </form>
        </div>
    )
}
