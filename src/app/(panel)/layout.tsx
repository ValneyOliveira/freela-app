import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const page = ({children} : {children: React.ReactNode}) => {
  return (
    <SidebarProvider >
      <AppSidebar />

      <main className='w-full h-full p-4'>        
        { children }
      </main>

    </SidebarProvider>
  )
}

export default page