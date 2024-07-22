'use client'
import React, { useState } from 'react';
import TabContainer, { TabContainerProps } from './TabContainer';
import Tab from './Tab';

interface TabsProps {
    children: React.ReactElement<TabContainerProps>[] | any[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<string>('Basic');

    const onClickTabItem = (tab: string) => {
        setActiveTab(tab);
    };

    const isUniqueLabel = (tabs: React.ReactElement<TabContainerProps>[]) => {
        let lastLabel: string | undefined;
        tabs.forEach(tab => {
            const { label } = tab.props;
            if (label === lastLabel) {
                throw new Error('Tabs do not have unique labels');
            }
            lastLabel = label;
        });
    };

    isUniqueLabel(children);

    return (
        <div className="tabs flex flex-col w-full md:w-[360px]">
            
            <div className="relative flex flex-row items-center">
                <ol className="relative flex flex-row items-center">
                    {React.Children.map(children, (child) => {
                        const { label } = child.props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div role="indicator" className="absolute left-0 bottom-0 transition-all duration-200 ease-in-out bg-purple-600 dark:bg-purple-200 w-[40px] ml-[10%] md:ml-[40px] h-0.5 rounded-t-full"></div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700"></hr>
            <div className="tab-content flex flex-col">
                    {React.Children.map(children, (child) => {
                        const { label } = child.props;
                        if (label !== activeTab) return null;
                        return <TabContainer {...child.props} />;
                    })}
            </div>
        </div>
    );
};

export default Tabs;
