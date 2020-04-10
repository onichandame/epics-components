import React, { FC, ComponentProps } from 'react'
import {
  TextField
} from '@material-ui/core'

type Props = ComponentProps<typeof TextField>

export const TextInput: FC<Props> = ({ variant = 'outlined', ...other }: Props) => {
  return (
    <TextField variant={variant} {...other}/>
  )
}

export default TextInput
