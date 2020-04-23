import React, { FC, useRef, ReactNode, ComponentProps } from 'react'
import {
  Grid,
  TextField as MTF
} from '@material-ui/core'

import { FieldLabel } from '../Common'

type Props = {
  label: ReactNode;
  readValue: ReactNode;
} & ComponentProps<typeof MTF>

export const TextField: FC<Props> = ({ label, readValue, ...other }: Props) => {
  const input = useRef<HTMLInputElement>(null)
  return (
    <Grid container spacing={1} alignItems={'center'} direction={'row'}>
      <Grid item>
        <FieldLabel>
          {label}
        </FieldLabel>
      </Grid>
      <Grid item>
        <MTF
          ref={input}
          variant={'outlined'}
          label={readValue}
          {...other}
        />
      </Grid>
    </Grid>
  )
}

export default TextField
