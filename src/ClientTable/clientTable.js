import React from 'react';
import UserList from "../utils/UserList";
export default function f(user) {
    return(
        <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Last Name</td>
                <td>Email</td>
            </tr>
            <UserList/>
        </table>
    )
}