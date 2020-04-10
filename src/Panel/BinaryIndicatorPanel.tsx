import React, { FC, ComponentProps } from 'react'
import { generate } from 'randomstring'
import {
  Grid
} from '@material-ui/core'

import { BinaryIndicator } from '../Indicator'

type Props={
  readonly data: ComponentProps<typeof BinaryIndicator>[];
}

export const IndicatorPanel: FC<Props> = ({ data }: Props) => {
  return (
    <Grid container>
      {
        data.map(field => (
          <Grid item key={`grid-bin-${generate({ length: 10 })}`}>
            <BinaryIndicator {...field}/>
          </Grid>
        ))
      }

    </Grid>
  )
}
export default IndicatorPanel
