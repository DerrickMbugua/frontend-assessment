import React, { useState } from 'react'
import './form.css'

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        department: '',
    })

    
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

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://crud-backend-assessment.herokuapp.com/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }).then(() => {
            alert('New User Added')
        })
    };

    return (
        <div className="create">
            <h2>Add a new User</h2>
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
                <button>Add User</button>
            </form>
        </div>



    )
}

export default Create