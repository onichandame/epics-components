import React, { FC, ReactNode, ComponentProps } from 'react'
import {
  Grid,
  TextField as MTF
} from '@material-ui/core'

import { FieldLabel } from '../Common'

type Props = {
  label: ReactNode;
  value: string;
} & ComponentProps<typeof MTF>

export const TextField: FC<Props> = ({ label, value, ...other }: Props) => {
  return (
    <Grid container spacing={1} alignItems={'center'} direction={'row'}>
      <Grid item>
        <FieldLabel>
          {label}
        </FieldLabel>
      </Grid>
      <Grid item>
        <MTF
          label={value}
          variant={'outlined'}
          {...other}
        />
      </Grid>
    </Grid>
  )
}

export default TextField
