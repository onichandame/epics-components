import React, { FC, ComponentProps, useRef, useReducer } from 'react'
import {
  Typography,
  Grid,
  Button
} from '@material-ui/core'
import {
  KeyboardArrowUp,
  KeyboardArrowDown
} from '@material-ui/icons'

type Props = {
  defaultValue: number;
  unit?: string;
  step?: number;
  incrementalStep?: number;
  decrementalStep?: number;
} & ComponentProps<'input'>

const StyledButton: FC<ComponentProps<typeof Button>> = ({ children, ...other }: ComponentProps<typeof Button>) => (
  <Button variant="contained" color="primary" {...other}>
    {children}
  </Button>
)

export const ThumbWheeler: FC<Props> = ({ defaultValue, incrementalStep, decrementalStep, unit = '', step = 1, ...other }: Props) => {
  const input = useRef<HTMLInputElement>(null)
  const reduce = (oldval: number, action: 'increment' | 'decrement'): number => {
    return action === 'increment' ? oldval + (incrementalStep || step) : oldval - (decrementalStep || step)
  }
  const [value, update] = useReducer(reduce, defaultValue)
  return (
    <>
      <input
        ref={input}
        disabled
        hidden={true}
        type={'number'}
        value={value}
        {...other}
        onChange={(): void => alert(input.current && input.current.value)}
      />
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
    </>
  )
}
export default ThumbWheeler
