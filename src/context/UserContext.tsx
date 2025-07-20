'use client'

import React, { createContext, SetStateAction, Dispatch, useState, useContext, useEffect } from 'react';
import { UserType } from '@/types';


const initialUser: UserType = {
    id: 1,
    name: "João Silva",
    email: "",
    phone: "+55 11 91234-5678",
    location: "São Paulo, SP",
    avatar: "https://example.com/avatar.jpg",
}

type UserContextType = {
    profileData: UserType | null;
    setProfileData: Dispatch<SetStateAction<UserType | null>>;
    updateProfile: (newUser: UserType) => void;
    deleteAccount: () => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;

}

const UserContext = createContext<UserContextType >({} as UserContextType );


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [profileData, setProfileData] = useState<UserType | null>(null);
   
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setProfileData(JSON.parse(storedUser))
        }
    }, [])


    const login = (email: string, password: string): boolean => {
        if (email === 'admin@email.com' && password === '12345678') {
            const user = { 
                id: 1,
                name: "João Silva",
                email: email,
                phone: "+55 11 91234-5678",
                location: "São Paulo, SP",
                avatar: "https://example.com/avatar.jpg" 
            }

            setProfileData(user)
            localStorage.setItem('user', JSON.stringify(user))
            return true
        }
        return false
    }
    const logout = () => {
        setProfileData(null)
        localStorage.removeItem('user')
    }

    const updateProfile = (newData: UserType) => {
        setProfileData(newData)
        localStorage.setItem('user', JSON.stringify(newData))
    }
    const deleteAccount = () => {
        logout()
    }

    return (
        <UserContext.Provider value={{ profileData, setProfileData, deleteAccount, updateProfile, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);