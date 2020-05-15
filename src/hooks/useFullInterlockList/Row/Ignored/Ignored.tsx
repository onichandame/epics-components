import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'

import { Indicator, RowProps } from '../../common'

export const Ignored: FC<RowProps> = ({ interlock }) => (
  <Grid
    container
    direction={'row'}
    spacing={2}
    alignItems={'center'}
    justify={'space-between'}
  >
    <Grid item>
      <Indicator status={interlock.ignored ? 'normal' : 'disconnected'} />
    </Grid>
    <Grid item>
      <Button variant={'contained'} onClick={interlock.toggleIgnored}>
        {interlock.ignored ? 'Unignore' : 'Ignore'}
      </Button>
    </Grid>
  </Grid>
)
