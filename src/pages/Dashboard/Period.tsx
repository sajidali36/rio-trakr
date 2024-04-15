interface Props {
  startDate: string,
  endDate: string
}

const Period: React.FC<Props> = ({ startDate, endDate }) => {
  return (
    <>
      <div className="font-normal text-4xl">Dashboard</div>
      <p className="mb-10">{startDate} - {endDate}</p>
    </>
  )
}

export default Period;
