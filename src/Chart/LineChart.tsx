import React, { FC } from 'react'
import {
  LineChart as LineRechart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts'

type Data=Map<string|number, number>

type Props={
  label: string;
  data: Data;
}

export const LineChart: FC<Props> = ({ label, data }: Props) => {
  const d = []
  data.forEach((value, key) => {
    d.push({
      x: key,
      y: value
    })
  })
  return (
    <>
      {label}
      <LineRechart
        width={730}
        height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey={'x'}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type={'monotone'} dataKey={'y'} stroke={'#ff0000'}/>
      </LineRechart>
    </>
  )
}
export default LineChart
