import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import Period from './Period';
import ActivityCard from '../../components/Cards/ActivityCard';
import TimesheetCard from '../../components/Cards/TimesheetCard';

const ECommerce: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Period startDate="Mon, Apr 8, 2024" endDate="Sun, Apr 14, 2024" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <CardDataStats title="Total views" total="55%" rate="0.43%" levelUp>
            Weekly Activity
          </CardDataStats>
          <CardDataStats title="Total Profit" total="30:45:34" rate="15:40:00" levelUp>
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
          <ChartThree />
          <MapOne />
          <div className="col-span-12 xl:col-span-8">
            <TableOne />
          </div>
          <ChatCard />
        </div>
      </DefaultLayout>
    </>
  );
};

export default ECommerce;
