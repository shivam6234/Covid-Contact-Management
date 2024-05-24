import React, { useState } from 'react';
import GraphesTab from '../graphesandMaps/GraphesTab';
import Mapss from '../graphesandMaps/Mapss';


interface Tab {
  name: string;
  content: React.ReactNode;
}

const ChartsandMap: React.FC = () => {
  const tabs: Tab[] = [
    {
      name: 'Charts',
      content: <div><GraphesTab/></div>,
    },
    {
      name: 'Map',
      content: <div><Mapss/></div>,
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full bg-yellow-100">
      <nav className="flex justify-around border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-4 px-6 block hover:text-blue-500 focus:outline-none ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
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

export default ChartsandMap;
