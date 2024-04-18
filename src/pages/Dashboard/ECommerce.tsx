import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import DefaultLayout from '../../layout/DefaultLayout';
import Period from './Period';
import ActivityCard from '../../components/Cards/ActivityCard';
import TimesheetCard from '../../components/Cards/TimesheetCard';
import WeekBarCard from '../../components/Cards/WeekBarCard';
import ProjectsCard from '../../components/Cards/ProjectsCard';
import ToDosCard from '../../components/Cards/ToDosCard';
import AppsCard from '../../components/Cards/AppsCard';

const ECommerce: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Period startDate="Mon, Apr 8, 2024" endDate="Sun, Apr 14, 2024" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <CardDataStats title="Total views" total="55%" rate="0.43%" levelUp>
            Weekly Activity
          </CardDataStats>
          <CardDataStats title="Total Profit" total="40:45:34" rate="15:40:00" levelUp>
            Worked this week
          </CardDataStats>
          <CardDataStats title="Total Product" total="2.4k" rate="2.59%" levelUp>
            Spent this week
          </CardDataStats>
          <CardDataStats title="Total Users" total="2" rate="0.95%" levelDown>
            Projects worked
          </CardDataStats>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ActivityCard />
          <TimesheetCard />
          <WeekBarCard />
          <ProjectsCard />
          <ToDosCard />
          <AppsCard />
        </div>
      </DefaultLayout>
    </>
  );
};

export default ECommerce;
