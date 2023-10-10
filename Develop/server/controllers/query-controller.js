import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from './queries';

function UserProfile() {
    const { loading, error, data } = useQuery(GET_ME);

    if (loading) return <p>Loading... </p>;
    if (error) return <p>Error: {error.message}</p>;

    const user = data.me;

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <p>Email: {user.email} </p>
            {/*OTHERS*/}

        </div>

    );

}

export default UserProfile; 