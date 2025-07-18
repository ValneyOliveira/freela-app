import React from 'react'
import { SidebarMobileCustomButtom } from './SidebarCustomButtom'

export default function Header({ title, description, children }: {
  children?: React.ReactNode, title?: string, description?: string
}) {
  return (
    <div>
      <div className='w-full flex flex-col md:flex gap-y-4 md:flex-row md:justify-between md:items-center'>
          <div className='flex justify-between items-center gap-x-2'>
            <div>
              <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
                <span>{description}</span>
            </div>
            <SidebarMobileCustomButtom />
          </div>
          {children}
        </div>
    </div>
  )
}
