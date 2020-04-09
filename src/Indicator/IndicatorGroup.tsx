import React, { FC } from 'react'
import {
  Grid
} from '@material-ui/core'

import { generate } from 'randomstring'

import BinaryIndicator from './BinaryIndicator'

type Field={
  value: boolean;
  label: string;
}

type Props={
  data: Field[];
  size?: number;
}

export const IndicatorGroup: FC<Props> = ({ data, size = 5 }: Props) => {
  return (
    <Grid container spacing={1}>
      {data.map(field => (
        <Grid key={`indi-grp-${generate({ length: 10 })}`} item>
          <BinaryIndicator labelPosition={'bottom'} size={size} {...field}/>
        </Grid>
      ))}
    </Grid>
  )
}
export default IndicatorGroup
