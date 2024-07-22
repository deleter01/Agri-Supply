'use client'
import React from 'react';

interface TabProps {
    activeTab: string;
    label: string;
    onClick: (label: string) => void;
    className?: string;
}

const Tab: React.FC<TabProps> = ({ activeTab, label, onClick, className }) => {
    const handleClick = () => {
        onClick(label);
    };

    const tabClassName = `hover:cursor-pointer w-1/3 md:w-[120px] h-16 px-4 py-2 flex flex-col justify-end items-center gap-1 hover:bg-surface-100 dark:hover:bg-surfacedark-100 tab-list-item${activeTab === label ? ' tab-list-active' : ''}${className ? ` ${className}` : ''}`;

    return (
        <li className={tabClassName} onClick={handleClick}>
            {label}
        </li>
    );
};

export default Tab;
