'use client'

import React from 'react'
import { useSidebar } from './ui/sidebar'
import { Button } from './ui/button';
import { ArrowLeft, Menu } from 'lucide-react';

export const SidebarDesktopCustomButtom = () => {
  const { open, setOpen, isMobile } = useSidebar();

  return (
    <div>
      {open && !isMobile && (
        <Button type="button" onClick={() => setOpen(!open)} className="bg-gray-200 mb-2 p-0 hover:bg-gray-300 cursor-pointer">
          <ArrowLeft className="w-full text-gray-800" />
        </Button>
      )}
    </div>
  )
}

export const SidebarMobileCustomButtom = () => {
  const { isMobile, setOpenMobile, openMobile } = useSidebar();

  return (
    <div>
      {isMobile && (
        <Button type="button" onClick={() => setOpenMobile(!openMobile)} className="bg-inherit mb-2 p-0 hover:bg-gray-300 cursor-pointer border shadow-md">
          <Menu className="w-full text-gray-400" />
        </Button>
      )}
    </div>
    )
}