import React, { useState } from 'react'
import { addUser } from '../UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-dark text-light p-4 rounded'>
                <h3 className='mb-3'>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name" className='form-label'>Name: </label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            placeholder='Enter Name'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            placeholder='Enter Email'
                            onChange={e => setEmail(e.target.value)}
                        /> 
                    </div><br />
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}
