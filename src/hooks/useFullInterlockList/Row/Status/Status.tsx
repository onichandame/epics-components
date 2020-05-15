import React, { FC } from 'react'
import { Grid } from '@material-ui/core'

import { Indicator, RowProps } from '../../common'

export const Status: FC<RowProps> = ({ interlock }) => {
  return (
    <Grid
      container
      direction={'row'}
      spacing={2}
      alignItems={'center'}
      justify={'space-between'}
    >
      <Grid item>{interlock.label}</Grid>
      <Grid item>
        <Indicator status={interlock.status} />
      </Grid>
    </Grid>
  )
}
