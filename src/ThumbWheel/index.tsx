import React, { FC, ComponentProps, useRef, useState } from 'react'
import {
  Typography,
  Grid,
  Button
} from '@material-ui/core'
import {
  KeyboardArrowUp,
  KeyboardArrowDown
} from '@material-ui/icons'

import { FieldLabel } from '../Common'

type Props = {
  defaultValue: number; // only expect number
  label?: string;
  unit?: string;
}

const StyledButton: FC<ComponentProps<typeof Button>> = ({ children }: ComponentProps<typeof Button>) => (
  <Button variant="contained" color="primary">
    {children}
  </Button>
)

export const ThumbWheel: FC<Props> = ({ defaultValue, label = '', unit = '' }: Props) => {
  const input = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<number>(defaultValue)
  const update = (action: 'increment' | 'decrement'): void => {
    if (input.current) {
      switch (action) {
        case 'increment':
          input.current.stepUp()
          break
        case 'decrement':
          input.current.stepDown()
          break
      }
      setValue(parseInt(input.current.value))
      input.current.dispatchEvent(new Event('change', { bubbles: true }))
      input.current.dispatchEvent(new Event('blur', { bubbles: true }))
    }
  }
  return (
    <>
      <input
        defaultValue={defaultValue}
        ref={input}
        disabled
        hidden={true}
        type={'number'}
      />
      <Grid container direction={'row'} alignItems={'center'} spacing={1}>
        <Grid item>
          <FieldLabel>
            {label}
          </FieldLabel>
        </Grid>
        <Grid item>

          <Grid container spacing={1} alignItems={'center'} direction={'column'}>
            <Grid item>
              <StyledButton onClick={(): void => update('increment')}>
                <KeyboardArrowUp />
              </StyledButton>
            </Grid>
            <Grid item>
              <Typography variant={'body1'}>
                {`${value}${` ${unit}`}`}
              </Typography>
            </Grid>
            <Grid item>
              <StyledButton onClick={(): void => update('decrement')}>
                <KeyboardArrowDown />
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default ThumbWheel
