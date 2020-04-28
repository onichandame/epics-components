import React, { FC, useRef, ReactNode } from 'react'
import {
  Grid,
  TextField as MTF
} from '@material-ui/core'

import { FieldLabel } from '../Common'

type Props = {
  label: ReactNode;
  readValue: ReactNode;
}

export const TextField: FC<Props> = ({ label, readValue }: Props) => {
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
        />
      </Grid>
    </Grid>
  )
}

export default TextField
