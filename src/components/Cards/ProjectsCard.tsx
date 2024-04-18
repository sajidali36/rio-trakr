import React from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

interface Project {
  projectName: string
  activity: string
  time: string
  barLength: number
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


const projectData: Project[] = [
  {
    projectName: 'Development',
    activity: '55%',
    time: '0:08:55',
    barLength: 60
  },
  {
    projectName: 'Development',
    activity: '56%',
    time: '0:10:45',
    barLength: 80
  },
];

const ProjectsCard: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="flex items-center justify-between">
        <p className="uppercase">Projects</p>
        <p>&#8942;</p>
      </div>

      <div className="grid grid-cols-6 border-stroke py-4.5 dark:border-strokedark sm:grid-cols-8">
        <div className="col-span-5 flex items-center">
          <p className="font-medium">Project</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Time</p>
        </div>
      </div>

      {projectData.map((item, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 dark:border-strokedark sm:grid-cols-8"
          key={key}
        >
          <div className="col-span-5 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {item.projectName}
              </p>
              <p className="bg-green-500 text-white py-0.5 px-2 rounded-2xl text-xs">{item.activity}</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm">${item.time}</p>
          </div>
          <div className="col-span-2 mt-2">
            <BorderLinearProgress variant="determinate" value={item.barLength} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCard;
