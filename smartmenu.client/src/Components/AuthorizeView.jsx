/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext } from 'react';
import { Navigate } from 'react-router-dom';

const UserContext = createContext<User>({ email: '' });

interface User {
    email: string;
}

function AuthorizeView(props: { children: React.ReactNode }) {
    const [authorized, setAuthorized] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    let emptyUser: User = { email: '' };
    const [user, setUser] = useState<User>(emptyUser);

    useEffect(() => {
        let retryCount = 0;
        let maxretries = 10;
        let delay: number = 1000;

        function wait(delay: number) {
            return new Promise((resolve) => setTimeout(resolve, delay));
        }
        async function fetchWithRetry(url: string, options: any) {
            try {
                let response = await fetch(url, options);

                if (response.status === 200) {
                    console.log('Authorized');
                    let j: any = await response.json();
                    setUser({ email: j.email });
                    setAuthorized(true);
                    return response;
                } else if (response.status === 401) {
                    console.log('Unauthorized');
                    return response;
                } else {
                    throw new Error("" + response.status);
                }
            } catch (error) {
                retryCount++;
                if (retryCount < maxretries) {
                    throw error;
                } else {
                    await wait(delay);
                    return fetchWithRetry(url, options);
                }
            }
        }
        fetchWithRetry('/pingauth', {
            method: "GET",
        })
            .catch((error) => {
                console.log('Error: ', error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    } else {
        if (authorized && !loading) {
            return (
                <UserContext.Provider value={user}>
                    {props.children}
                </UserContext.Provider>
            );
        } else {
            return (
                <>
                    <Navigate to="/login" />
                </>
            );
        }
    }
}

export default AuthorizeView;
