'use client'
import React from 'react'
// import { Tabs } from 'flowbite';
// import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
// import { Tabs, TabsOptions, InstanceOptions, TabsInterface } from 'flowbite';
import Tabs from '../Tabs/Tabs';
import TabContainer from '../Tabs/TabContainer';
// import type { InstanceOptions } from 'flowbite';
export default function Productinfo() {


  return (

        <div className='flex items-center justify-center '>
            <Tabs >
                <TabContainer label="Basic">
                    <p>Basic Informatin </p>
                </TabContainer>
                <TabContainer label="History">
                    <p>Past History</p>
                </TabContainer>
                <TabContainer label="More">
                    <p>Advanced Data</p>
                </TabContainer>
            </Tabs>
        </div>

  )
}
