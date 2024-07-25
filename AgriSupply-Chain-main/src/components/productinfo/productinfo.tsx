'use client'
import React from 'react'
// import Tabs from '../Tabs/Tabs';
// import TabContainer from '../Tabs/TabContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Productinfo() {


  return (

        <div className='flex items-center justify-center '>
            <Tabs defaultValue="info" className="w-[400px]">
            <TabsList className='inline-flex space-x-12'>
                <TabsTrigger value="info">Basic Information</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="more">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="info">Make changes to your account here.</TabsContent>
            <TabsContent value="history">Change your password here.</TabsContent>
            <TabsContent value="more">Advace Data</TabsContent>
            </Tabs>

        </div>

  )
}
