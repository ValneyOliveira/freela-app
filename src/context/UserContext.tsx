'use client'

import React, { createContext, SetStateAction, Dispatch, useState, useContext } from 'react';
import { UserType } from '@/types';

const initialUser: UserType = {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    phone: "+55 11 91234-5678",
    location: "São Paulo, SP",
    avatar: "https://example.com/avatar.jpg",
}

type UserContextType = {
    profileData: UserType | null;
    setProfileData: Dispatch<SetStateAction<UserType | null>>;
    updateProfile: (newUser: UserType) => void;
    deleteAccount: () => void;
}

const UserContext = createContext<UserContextType >( {} as UserContextType );


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [profileData, setProfileData] = useState<UserType | null>(initialUser);
   
    const updateProfile = (newData: UserType) => {
        setProfileData(newData)
    }

    const deleteAccount = () => {
        // console.log("Account deleted");
    }

    return (
        <UserContext.Provider value={{ profileData, setProfileData, deleteAccount, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);