import { useAuth, useUser } from '@clerk/react';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'sonner';

const UserSyncHandler = () => {

    const [synced, setSynced] = useState(false);

    const {
        isLoaded,
        isSignedIn,
        getToken
    } = useAuth();

    const { user } = useUser();

    const { baseURL } = useContext(AppContext);

    useEffect(() => {

        const saveUser = async () => {

            if (!isLoaded || !isSignedIn || !user || synced) {
                return;
            }

            try {

                const token = await getToken();

                console.log("Clerk token exists:", !!token);
                console.log("User ID:", user.id);
                console.log("Base URL:", baseURL);

                const userData = {
                    clerkId: user.id,
                    email: user.primaryEmailAddress?.emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    photoUrl: user.imageUrl
                };

                await axios.post(
                    `${baseURL}/users`,
                    userData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setSynced(true);

            } catch (error) {

                console.error("User sync error:", error);
                console.error("Status:", error.response?.status);
                console.error("Response:", error.response?.data);

                toast.error(
                    error.response?.data?.message ||
                    error.message ||
                    "Failed to sync user"
                );
            }
        };

        saveUser();

    }, [
        isLoaded,
        isSignedIn,
        getToken,
        user,
        synced,
        baseURL
    ]);

    return null;
};

export default UserSyncHandler;

