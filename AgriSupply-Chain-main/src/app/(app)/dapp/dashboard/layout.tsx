'use client'
import React from 'react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from './sidebar/sidebar';
import SidebarToggle from './sidebar/components/sidebar-toggle';
import Navbar from './navbar/navbar';
import useToggleStore from './sidebar/components/sidebarStore';

interface DashbordLayoutProps {
    children: React.ReactNode;
}

export default function Dashbordlayout({ children }: DashbordLayoutProps) {

  const { sidebarOpen, toggleSidebar } = useToggleStore();

  return (
    <div className='h-screen w-full relative flex overflow-hidden bg-zinc-400'>
      
      <Sidebar />
      <SidebarToggle />
      
      <div className={`flex flex-col justify-between ${sidebarOpen ? 'w-11/12' : 'w-full h-full'}`}>
        <Navbar />
        <main className="max-w-full h-full flex relative overflow-y-hidden">
          <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            {children}
            
          </div>
        </main>
      </div>
    </div>
  )
}
