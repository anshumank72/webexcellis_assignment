import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const [persons, setPersons] = useState([])


    const history = useHistory()

    const getData = () => {
        fetch(`${props.baseUrl}api/users`)
            .then((res) => res.json())
            .then((data) => {
                setPersons(data)
            })
    }


    useEffect(() => {
        getData()
    }, [])

    const editHandler = (person) => {
        props.setSelectedUser(person)
        history.push("./editform")
    }

    const deleteHandler = (id) => {
        fetch(`${props.baseUrl}api/users/${id}`, {
            method: 'DELETE'
        }).then(() => getData())
    }
    return (
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit / Delete</th>
                </tr>
                {persons.map((person) => {
                    return (
                        <tr key={person.id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td><button onClick={() => { editHandler(person); }}>Edit</button><button onClick={() => deleteHandler(person.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}
export default Home;