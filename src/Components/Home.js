import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../UserReducer';

export default function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({id}));
    }
    return (
        <div className='container my-4'>
            <h2 className='text-center mb-4'>CRUD App with Redux</h2>
            <div className='d-flex justify-content-end mb-3'>
                <Link to="/create" className='btn btn-primary'>Create</Link>
            </div>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-outline-secondary btn-sm'>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-outline-danger btn-sm ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
