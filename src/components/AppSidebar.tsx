'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { File, History, Home, Menu, Settings, User, Users } from "lucide-react"
import { Button } from "./ui/button"
import { SidebarDesktopCustomButtom } from "./SidebarCustomButtom"

export function AppSidebar() {
    const { open, setOpen, isMobile, setOpenMobile} = useSidebar()
    const isActive = usePathname()

    const items = [{
        name: "Dashboard",
        icon: Home,
        href: "/dashboard",
    }, {
        name: "Clientes",
        icon: Users,
        href: "/clients",
    }, {
        name: "Propostas",
        icon: File,
        href: "/proposals",
    },{
        name: "Historico",
        icon: History,
        href: "/history",
    }, {
        name: "Profile",
        icon: User,
        href: "/profile",
    }
    // , { 
    //     name: "Settings",
    //     icon: Settings,
    //     href: "#",
    // }
]

  return (
    <Sidebar collapsible="icon">
      <SidebarContent >
        <SidebarGroup className="overflow-hidden">
            {open && (
                <SidebarGroupLabel className="mb-10">
                    <Link href={"/"} className="text-xl font-bold text-blue-500">
                        FreelanceCRM
                    </Link>
                </SidebarGroupLabel>
            )}
            <div className="absolute top-11 -right-2 z-50">
                <SidebarDesktopCustomButtom />
            </div>

            <SidebarGroupContent className="my-4">
                <SidebarMenu >
                        {!open && !isMobile && (
                            <Button type="button" onClick={() => setOpen(!open)} className="bg-inherit self-center mb-2 p-0 hover:bg-gray-300 cursor-pointer">
                                <Menu className="w-full text-gray-400" />
                            </Button>
                        )}
                    
                    {items.map((item, index) => (
                        <SidebarMenuItem key={index} >
                            <Link href={item.href}
                                    onClick={() => isMobile && setOpenMobile(false)}
                                    className={`w-full flex items-center gap-x-2 p-2 rounded-md text-sm
                                        ${isActive == item.href ? "bg-blue-500 text-white" : "bg-gray hover:bg-gray-300 opacity-90"}`}
                                >
                                    <item.icon/>
                                    {open && <span >{item.name}</span>}
                                </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}