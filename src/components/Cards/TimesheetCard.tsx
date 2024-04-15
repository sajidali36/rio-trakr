import React from 'react'

interface Time {
  projectName: string,
  date: string,
  startTime: string,
  stopTime: string,
  duration: string
}


const timeData: Time[] = [
  {
    projectName: 'Development',
    date: 'Tue, Apr 9, 2024',
    startTime: '11:10 am',
    stopTime: '	11:20 am',
    duration: '0:10:55'
  },
  {
    projectName: 'Development',
    date: 'Tue, Apr 9, 2024',
    startTime: '11:30 am',
    stopTime: '	11:40 am',
    duration: '0:10:45'
  },
];

const TimesheetCard: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="flex items-center justify-between">
        <p className="uppercase">Timesheet</p>
        <p>&#8942;</p>
      </div>

      <div className="grid grid-cols-6 border-stroke py-4.5 dark:border-strokedark sm:grid-cols-8">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Project</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Date</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Start time</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Stoptime</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Duration</p>
        </div>
      </div>

      {timeData.map((item, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 dark:border-strokedark sm:grid-cols-8"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {item.projectName}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {item.date}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${item.startTime}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.stopTime}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm">${item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TimesheetCard
