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
}

export const IndicatorGroup: FC<Props> = ({ data }: Props) => {
  return (
    <Grid container spacing={2}>
      {data.map(field => (
        <Grid key={`indi-grp-${generate({ length: 10 })}`} item>
          <BinaryIndicator size={3} {...field}/>
        </Grid>
      ))}
    </Grid>
  )
}
export default IndicatorGroup
