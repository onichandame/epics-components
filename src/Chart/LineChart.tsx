import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  LineChart as LineRechart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts'

type Props={
  label: string;
  data: ComponentProps<typeof LineRechart>['data'];
  x: string;
  y: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  },
  label: {
    display: 'flex',
    flexGrow: 0,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  chart: {
    display: 'flex',
    flexGrow: 0
  }
}))

export const LineChart: FC<Props> = ({
  label,
  data,
  x,
  y
}: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <h2 className={styles.label}>
        {label}
      </h2>
      <ResponsiveContainer className={styles.chart}>
        <LineRechart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey={x}/>
          <YAxis />
          <Tooltip />
          <Legend />
          {
            y.map(value => (
              <Line key={value} type={'monotone'} dataKey={value} stroke={`#${(Math.random() * 0xffffff << 0).toString(16)}`}/>
            ))
          }
        </LineRechart>
      </ResponsiveContainer>
    </div>
  )
}
export default LineChart
