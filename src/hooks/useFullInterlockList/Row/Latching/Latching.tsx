import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'
import { Indicator, RowProps } from '../../common'
export const Latching: FC<RowProps> = ({ interlock }) => (
  <Grid
    container
    direction={'row'}
    spacing={2}
    alignItems={'center'}
    justify={'space-between'}
  >
    <Grid item>
      <Button variant={'contained'} onClick={interlock.reset}>
        Reset
      </Button>
    </Grid>
    <Grid item>
      <Button variant={'contained'} onClick={interlock.toggleLatching}>
        Toggle Latching
      </Button>
    </Grid>
    <Grid item>
      <Indicator status={interlock.latching ? 'normal' : 'disconnected'} />
    </Grid>
  </Grid>
)
