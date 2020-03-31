import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  TextField
} from '@material-ui/core'

type Props={
  label: string;
  value: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: '1.5rem',
    backgroundColor: theme.palette.background.paper
  }
}))

export const TextIndicator: FC<Props> = ({ value, ...other }: Props) => {
  const styles = useStyles()
  return (
    <TextField
      disabled
      className={styles.root}
      defaultValue={value}
      variant={'outlined'}
      {...other}
    />
  )
}
export default TextIndicator
