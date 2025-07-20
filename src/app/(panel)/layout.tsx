'use client'

import React, { useEffect } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const page = ({children} : {children: React.ReactNode}) => {
  const router = useRouter()
  const { profileData, isHydrated  } = useUser()

  useEffect(() => {
    if(isHydrated && !profileData?.email) {
      router.replace('/')
    }
  }, [isHydrated, profileData])

  if(!isHydrated) {
    return <span></span>;
  }

  return (
    <>
    {profileData?.email && (
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