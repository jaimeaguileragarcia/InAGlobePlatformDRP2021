import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import UserList from './UserList'
import useFetch from './useFetch'

const Users = () => {

    const {data: users, error2} = useFetch("/users")

    return (
        <div className="users">
            <h1>Users</h1>
            <UserList users={users} title="All Users"/>
        </div>
    );
}
 
export default Users;