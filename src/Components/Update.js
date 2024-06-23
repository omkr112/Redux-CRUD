import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUser } from '../UserReducer';

export default function Update() {

    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name,email} = existingUser[0];

    const [uname,setName] = useState(name);
    const [uemail,setEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate('/');
    }
    return (
<div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-dark text-light p-4 rounded'>
                <h3 className='mb-3'>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="name" className='form-label'>Name: </label>
                        <input 
                            type="text" 
                            name='name' 
                            className='form-control' 
                            placeholder='Enter Name'
                            value={uname} 
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
                            value={uemail} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div><br />
                    <button type="submit" className="btn btn-primary w-100">Update</button>
                </form>
            </div>
        </div>
    )
}
