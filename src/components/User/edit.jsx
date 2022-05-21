import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import './form.css'

const Edit = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        department: '',
    })

    const {id} = useParams()

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }))
    }

    const handleEmailInputChange = (event) => {
        event.persist()
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }))
    }

    const handleDepartmentInputChange = (event) => {
        event.persist()
        setValues((values) => ({
            ...values,
            department: event.target.value,
        }))
    }
//updating a user using the backend endpoint
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://crud-backend-assessment.herokuapp.com/users/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }).then(() => {
            // alert('User updated')
            console.log(JSON.stringify(values))
        })
    };
//returns a form where the user can update a user
    return (
        <div className="create">
            <h2>Update a new User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={values.name}
                    onChange={handleNameInputChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    required
                    value={values.email}
                    onChange={handleEmailInputChange}
                />
                <label>Department:</label>
                <input
                    type="text"
                    required
                    value={values.department}
                    onChange={handleDepartmentInputChange}
                />
                <button>Update User</button>
            </form>
        </div>



    )
}

export default Edit