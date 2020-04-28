import React, { FC, ComponentProps, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid
} from '@material-ui/core'
import {
  LineChart as MLC,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts'

type Props = {
  label: string;
  data: ComponentProps<typeof MLC>['data'];
  abscissa: string;
  ordinates: string[];
  pauseOnHover?: boolean;
  aspect?: ComponentProps<typeof ResponsiveContainer>['aspect'];
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

export const LineChart: FC<Props> = ({
  label,
  data,
  abscissa,
  ordinates,
  pauseOnHover = true,
  aspect
}: Props) => {
  const styles = useStyles()
  const [cache, setCache] = useState<Props['data']>(data)
  const [sync, setSync] = useState<boolean>(true)
  useEffect(() => {
    if (sync) { setCache(data) }
  }, [data])
  return (
    <Grid container spacing={0} className={styles.root}>
      <Grid item xs={12} className={styles.label}>
        {label}
      </Grid>
      <Grid item xs={12}>
        {// width set to 100 will break responsiveness
        }
        <ResponsiveContainer width={'99%'} minHeight={'100px'} aspect={aspect}>
          <MLC
            onMouseOver={(): void => { pauseOnHover && setSync(false) }}
            onMouseLeave={(): void => { pauseOnHover && setSync(true) }}
            data={cache}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey={abscissa}/>
            <YAxis />
            <Tooltip />
            <Legend />
            {
              ordinates.map((value, index) => (
                <Line isAnimationActive={true} animationDuration={500} dot={false} key={value} type={'monotone'} dataKey={value} stroke={colors[index % colors.length]}/>
              ))
            }
          </MLC>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  )
}
