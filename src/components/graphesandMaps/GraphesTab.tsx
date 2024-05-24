
import React, { useState } from 'react';
import Covidgraph from './Covidgraph';
import CovidCaseGraph from './CovidCaseGraph';
import CovidRecoveryGraph from './CovidRecoveryGraph';
import CovidDeathGraph from './CovidDeathGraph';

interface Tab {
  name: string;
  content: React.ReactNode;
}
const GraphesTab:React.FC = () =>{
    const tabs: Tab[] = [
      {
        name: 'All Data',
        content: <Covidgraph />,
      },
      {
        name: 'Covid Cases',
        content: <CovidCaseGraph />,
      },
      {
        name: 'Recovered Cases',
        content: <CovidRecoveryGraph />,
      },
      {
        name: 'Death Cases',
        content: <CovidDeathGraph />,
      },
    ];
  
    const [activeTab, setActiveTab] = useState<number>(0);
  
    return (
      <div className="w-full bg-yellow-100 ">
        <h1 className='pt-10 text-center font-bold text-2xl underline'>Charts</h1>
        <nav className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 mb-4 border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-6 hover:text-blue-500 focus:outline-none ${
                activeTab === index
                  ? 'text-blue-600 border-b-2 border-blue-600 font-normal'
                  : 'text-gray-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
        <div className="">
          {tabs[activeTab] && tabs[activeTab].content}
        </div>
      </div>
    );
  };

export default GraphesTab
