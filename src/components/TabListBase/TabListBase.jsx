import { Tab, TabGroup, TabList } from '@tremor/react'
import React, { useState } from 'react';

import ViewAllDoctors from '../../views/AdminDashboard/ViewAllDoctors';
import RegisterDoctor from '../../views/AdminDashboard/RegisterDoctor';
import About from '../../views/About/About';

import { UserGroupIcon, PlusCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

const TabListBase = () => {

  const [selectedTab, setSelectedTab] = useState(1);
  const [menuHidden, setMenuHidden] = useState(true)

  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
  };

  const handleTabClick = (tabNumber) => {
    setSelectedTab(tabNumber);
    setMenuHidden(true);
  };


  return (



    <div className='relative flex flex-col items-center md:flex-row h-screen'>


      <div className="block pl-10 mt-5 mb-5 w-full items-start md:hidden z-10">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-customBlue4 border-customBlue4">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>

      <div className={`w-2/3 h-full md:w-1/6 bg-customBlue4 opacity-[97%] md:opacity-100 md:flex md:flex-col md:h-full absolute md:relative top-0 left-0 z-20 ${menuHidden ? 'hidden' : ''}`}>
        <TabGroup className='w-full h-full items-center justify-center'>
          <TabList
            variant='shadowed'
            className='flex flex-col h-full w-full pt-5 pb-1 md:pt-5 px-2 space-y-1 justify-start items-center'
          >
            <Tab
              value={1}
              onClick={() => handleTabClick(1)}
              className={` bg-white font-semibold text-customBlue5 md:mb-2 rounded-lg w-full h-10 md:my-0 pl-4 items-center justify-normal`}
            >
              <span className={`flex items-center`}>
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Ver doctores
              </span>
            </Tab>

            <Tab
              variant='dark-tremor-input'
              value={2}
              onClick={() => handleTabClick(2)}
              className={`bg-white font-semibold text-customBlue5 md:mb-2  rounded-lg w-full h-10 md:my-0  pl-4 items-center justify-normal`}
            >
              <span className={`flex items-center`}>
                <PlusCircleIcon className="h-5 w-5 mr-2" />
                Crear Doctor
              </span>
            </Tab>
            <Tab
              variant='dark-tremor-input'
              value={3}
              onClick={() => handleTabClick(3)}
              className={` bg-white font-semibold text-customBlue5 md:mb-2 rounded-lg w-full h-10 pl-4 items-center justify-normal`}
            >
              <span className={`flex items-center`}>
                <InformationCircleIcon className="h-5 w-5 mr-2" />
                About
              </span>
            </Tab>

          </TabList>
        </TabGroup>
      </div>
      <div className='mb-auto md:mt-0 w-5/6'>

        {selectedTab === 1 ? (
          <ViewAllDoctors />
        ) : selectedTab === 2 ? (
          <RegisterDoctor />
        ) : selectedTab === 3 ? (
          <About />
        ) : null}
      </div>

    </div>

  );
}

export default TabListBase;




