import React from 'react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from './sidebar/sidebar';
import SidebarToggle from './sidebar/components/sidebar-toggle';
import Navbar from './navbar/navbar';

interface DashbordLayoutProps {
    children: React.ReactNode;
}

export default function Dashbordlayout({ children }: DashbordLayoutProps) {
  return (
    <main className='flex h-screen'>
      <Navbar
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
      <Sidebar />
      <SidebarToggle />
      {children}
    </main>
  )
}
