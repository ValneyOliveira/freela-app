'use client'

import React, { FormEvent, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { SidebarProvider } from './ui/sidebar';
import { AppSidebar } from './AppSidebar';


export const LoginForm = () => {
    const router = useRouter();
    const { login } = useUser()

    const [email, setEmail] = useState<string>("admin@email.com");
    const [password, setPassword] = useState<string>("12345678")


    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        
        const success = login(email, password)

        if(success) {
            router.push("/dashboard")
        }
        else {
            alert("Email ou senha inválidos")
        }
    }

    return(
        <div>
           <Card className='border-blue-300 shadow-md'>
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-500 text-center" >FreelanceCRM</CardTitle>
                <CardDescription className='text-md text-center'>
                    Entre na sua conta
                </CardDescription>
            </CardHeader>

            <CardContent>
            <form>
                <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="admin@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                        Forgot your password?
                    </a>
                    </div>
                    <Input id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <Button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-400 " onClick={ handleLogin} >
                        Login
                    </Button>
                </div>
                </div>
                <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
                </div>
            </form>
        </CardContent>
      </Card>

    </div>
    )
}


export const Auth = ({children} : {children?: React.ReactNode}) => {
    const { profileData } = useUser();
    
    const router = useRouter()

    if(!profileData) {
        router.back()
    }


    return (
        <>
        {!profileData && <p></p>}

            {profileData && (
                <SidebarProvider >
                    <AppSidebar />

                    <main className='w-full h-full p-4'>        
                    { children }
                    </main>
                </SidebarProvider>
            )}
        </>
    )
}