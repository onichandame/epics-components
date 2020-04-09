import React, { FC, ComponentProps, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid
} from '@material-ui/core'
import {
  LineChart,
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
  data: ComponentProps<typeof LineChart>['data'];
  x: string;
  y: string[];
  stopOnHover?: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem'
  }
}))

const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff'
]

export const RealTimeLineChart: FC<Props> = ({
  label,
  data,
  x,
  y,
  stopOnHover = true
}: Props) => {
  const styles = useStyles()
  const [cache, setCache] = useState<Props['data']>(data)
  const [sync, setSync] = useState<boolean>(true)
  useEffect(() => {
    if (sync) { setCache(data) }
  })
  return (
    <Grid container spacing={0} className={styles.root}>
      <Grid item xs={12} className={styles.label}>
        {label}
      </Grid>
      <Grid item xs={12}>
        <ResponsiveContainer minHeight={'100px'}>
          <LineChart
            onMouseOver={(): void => { stopOnHover && setSync(false) }}
            onMouseLeave={(): void => { stopOnHover && setSync(true) }}
            data={cache}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey={x}/>
            <YAxis />
            <Tooltip />
            <Legend />
            {
              y.map((value, index) => (
                <Line isAnimationActive={true} animationDuration={500} dot={false} key={value} type={'monotone'} dataKey={value} stroke={colors[index % colors.length]}/>
              ))
            }
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  )
}
export default RealTimeLineChart
