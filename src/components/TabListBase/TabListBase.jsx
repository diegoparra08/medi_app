import { Tab, TabGroup, TabList, Flex } from '@tremor/react'

import React, { useState } from 'react';

import {
  UserGroupIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, PencilIcon, BookOpenIcon,
  BanknotesIcon, CurrencyDollarIcon, NoSymbolIcon, PhotoIcon
} from "@heroicons/react/20/solid";

const TabListBase = () => {

  const [selectedTab, setSelectedTab] = useState(2);

  

  return (

    <div className='flex flex-row h-screen'>

      <div className='bg-customBlue4 w-1/6 flex flex-col'>

      <TabGroup className='w-full items-center justify-center'>
        <TabList
          variant='shadowed'
          className='flex flex-col w-full pt-2 px-1 space-y-1'
        >
          <Tab
            variant='dark-tremor'
            value={1}
            icon={CalendarDaysIcon}
            onClick={() => setSelectedTab(1)}
            className={` bg-white font-semibold text-customBlue5 mb-2 sm:mb-0 rounded-lg h-10 justify-center items-center`}
          // ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Doctores
          </Tab>
          <Tab
            variant='dark-tremor-input'
            value={2}
            icon={PencilIcon}
            onClick={() => setSelectedTab(2)}
            className={` bg-white font-semibold text-customBlue5 mb-2 sm:mb-0 rounded-lg h-10 justify-center items-center`}
          //className={`border border-gray-300 mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Crear Doctor
          </Tab>
          <Tab
            variant='dark-tremor-input'
            value={2}
            icon={PencilIcon}
            onClick={() => setSelectedTab(2)}
            className={` bg-white font-semibold text-customBlue5 mb-2 sm:mb-0 rounded-lg h-10  justify-center items-center`}
          //className={`border border-gray-300 mb-2 sm:mb-0 ${window.innerWidth >= 768 ? 'md:inline lg:inline' : 'text-xs'}`}
          >
            Ver Pacientes
          </Tab>

        </TabList>
      </TabGroup>
      </div>
<div className='w-5/6'>

       {/* {selectedTab === 1 ?
          (
            <Activities />
          ) : selectedTab === 2 ? (
            <CreateActivityForm />
          ) : selectedTab === 3 ? (
          <SeePatients/>
          ): null 
          }  */}
</div>
              
    </div>

  );
}

export default TabListBase;