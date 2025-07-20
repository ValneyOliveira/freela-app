'use client'

import React, { useEffect } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const page = ({children} : {children: React.ReactNode}) => {
  const router = useRouter()
  const { profileData } = useUser()

  useEffect(() => {
    if(!profileData) {
      router.replace('/')
    }
  })

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

export default page