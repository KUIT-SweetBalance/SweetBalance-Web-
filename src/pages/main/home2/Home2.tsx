import React, { useState } from 'react';
import TodayWeekSwitcher from './TodayWeekSwitcher';
import Home2TodayHeader from './Today/Home2TodayHeader';
import Home2WeeklyHeader from './Weekly/Home2WeeklyHeader';
import BottomNavi from '../../../components/BottomNavi/BottomNavi';
import Home2TodayBody from './Today/Home2TodayBody';
import Home2WeeklyBody from './Weekly/Home2WeeklyBody';

const Home2 = () => {
  const [selectedView, setSelectedView] = useState<'today' | 'week'>('today');

  return (
    <div className="flex flex-col mb-[90px]">
      <TodayWeekSwitcher
        selected={selectedView}
        onChange={(view) => setSelectedView(view)}
      />

      <div className="flex flex-col w-full h-[367px] bg-primary rounded-bl-[20px] rounded-br-[20px] mt-[-2px]">
        {selectedView === 'today' ? <Home2TodayHeader /> : <Home2WeeklyHeader />}
      </div>
      
      <div>
        {selectedView === 'today' ? <Home2TodayBody /> : <Home2WeeklyBody />}
      </div>

      <div>
        <BottomNavi />
      </div>
    </div>
  );
};

export default Home2;
