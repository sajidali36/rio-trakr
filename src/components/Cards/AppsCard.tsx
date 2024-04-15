import React from 'react'

const AppsCard: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="flex items-center justify-between">
        <p className="uppercase">Apps & Urls</p>
        <p>&#8942;</p>
      </div>
      <div className="flex items-center justify-center h-100">
        <p>No Apps and Urls tracked yet this week.</p>
      </div>
    </div>
  )
}

export default AppsCard
