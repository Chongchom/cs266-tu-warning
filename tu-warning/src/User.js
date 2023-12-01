import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function User() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        const user = localStorage.getItem('token');
        const profile = JSON.parse(user);

        if (user !== null) {
            console.log(profile);
            setUserProfile(profile);
        } else {
            MySwal.fire({
                title: <i>Error</i>,
                icon: 'error'
            }).then(() => {
                navigate('/');
            });
        }
    }, []);

    return (
        <div>
            {userProfile ? (
                <ul>
                    {Object.keys(userProfile).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {userProfile[key]}
                        </li>
                    ))}
                </ul>
            ) : (
                'No profile available'
            )}
        </div>
    );
}
