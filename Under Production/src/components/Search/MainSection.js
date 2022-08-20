import React from 'react'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'

const MainSection = () => {
  return (
      <>   <div className="bg-gray-100 flex justify-center lg:justify-between py-4 px-7 w-[100%]">
          <MainSidebar />
          <MainContent/>
          </div>
    </>
  )
}

export default MainSection