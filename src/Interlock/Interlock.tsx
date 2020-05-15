import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ListItem, ListItemText } from '@material-ui/core'
import clsx from 'clsx'

import { InterlockStatus as Status } from '../types'
import { Icon } from './Icon'

type Props = {
  label: string
  status: Status

  ignored?: boolean
} & Omit<ComponentProps<typeof ListItem>, 'button'>

const useStyles = makeStyles((theme: Theme) => ({
  normal: {
    backgroundColor: theme.palette.success.dark,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  disconnected: {
    background: theme.palette.grey[700],
  },
  button: {
    ...theme.typography.button,
  },
}))

export const Interlock: FC<Props> = ({
  label,
  status,

  ignored = false,
  ...other
}) => {
  const styles = useStyles()
  return (
    <ListItem
      className={clsx(
        styles.button,
        status === 'normal'
          ? styles.normal
          : status === 'error'
          ? styles.error
          : styles.disconnected
      )}
      button={false as true}
      {...other}
    >
      <Icon ignored={ignored} />
      <ListItemText primary={label} />
    </ListItem>
  )
}
