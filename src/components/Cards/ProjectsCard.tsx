import React from 'react'

interface Project {
  projectName: string,
  time: string
}


const projectData: Project[] = [
  {
    projectName: 'Development',
    time: '0:10:55'
  },
  {
    projectName: 'Development',
    time: '0:10:45'
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
              <p className="bg-green-500 text-white py-0.5 px-2 rounded-2xl">55%</p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm">${item.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCard;
