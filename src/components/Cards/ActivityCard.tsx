import React from "react";
import data from "../../data/ScreenShots.json";

const ActivityCard: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="flex items-center justify-between">
        <p className="uppercase">Recent Activity</p>
        <p>&#8942;</p>
      </div>
      <div className="grid grid-cols-3 gap-6  py-4">
        {data.map((item, key) => (
          <div key={key} >
            <div className="col-span-1 flex items-center">
              <div className="relative">
                <img src={item.url} alt="" className="w-40" />
                <p className="absolute -top-2 -right-2 bg-green-500 py-0.5 px-2 rounded-2xl text-xs text-white">{item.activity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityCard;
