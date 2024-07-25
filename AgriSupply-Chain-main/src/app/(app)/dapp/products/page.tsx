import React from 'react'
import Dashbordlayout from '../(app)/dapp/dashboard/layout'
import { Input } from '@/components/ui/input'
import { DataTableUsers } from './productsTable'

export default function Users() {
  return (
    <Dashbordlayout >
     
        <section className="container px-2 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <DataTableUsers/>             
            </div>
        </section>
    </Dashbordlayout>
  )
}
