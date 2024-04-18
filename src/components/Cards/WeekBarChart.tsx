import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

type Data = {
  day: string;
  minutes: number;
};

const parseTimeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const data: Data[] = [
  { day: 'Mon', minutes: parseTimeToMinutes('0:03') },
  { day: 'Tue', minutes: parseTimeToMinutes('0:01') },
  { day: 'Wed', minutes: parseTimeToMinutes('0:12') },
  { day: 'Thu', minutes: parseTimeToMinutes('0:09') },
  { day: 'Fri', minutes: parseTimeToMinutes('0:12') },
  { day: 'Sat', minutes: parseTimeToMinutes('0:00') },
  { day: 'Sun', minutes: parseTimeToMinutes('0:00') },
];


const WeekBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="minutes" fill="#1a90ff" name="Time in Minutes">
          <LabelList dataKey="minutes" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeekBarChart;
