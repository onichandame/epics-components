import React, { FC, ComponentProps } from 'react'
import { generate } from 'randomstring'
import {
  Grid
} from '@material-ui/core'

const Item: FC = ({ children }: ComponentProps<FC>) => (
  <Grid item>
    {children}
  </Grid>
)

export const ButtonPanel: FC = ({ children }: ComponentProps<FC>) => {
  return (
    <Grid container justify={'center'} spacing={5}>
      {
        Array.isArray(children)
          ? children.map(row => (
            <Item key={`but-pan-${generate({ length: 10 })}`}>
              {row}
            </Item>
          ))
          : (
            <Item>
              {children}
            </Item>
          )
      }
    </Grid>
  )
}
export default ButtonPanel
