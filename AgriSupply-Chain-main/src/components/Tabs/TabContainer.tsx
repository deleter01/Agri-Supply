'use client'
import React from 'react';

export interface TabContainerProps {
    children: React.ReactNode;
    label: string;
}

const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
    return <div className='py-4 transition duration-400 ease-in-out'>
        {children}
        </div>; // Rendering children directly
};

export default TabContainer;
