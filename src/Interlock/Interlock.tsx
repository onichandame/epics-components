import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Block } from '@material-ui/icons'

import { InterlockStatus as Status } from '../types'

type Props = {
  label: string
  status: Status
  ignored?: boolean
} & ComponentProps<typeof ListItem>

const useIconStyles = makeStyles((theme: Theme) => ({
  error: {
    color: theme.palette.error.light,
  },
  normal: {
    color: theme.palette.success.light,
  },
  disconnected: {
    color: theme.palette.grey[400],
  },
}))

const Icon: FC<{ ignored: boolean }> = ({ ignored, ...other }) => {
  const styles = useIconStyles()
  return ignored ? <Block className={styles.disconnected} {...other} /> : <></>
}

const useInterlockStyles = makeStyles((theme: Theme) => ({
  normal: {
    backgroundColor: theme.palette.success.dark,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  disconnected: {
    background: theme.palette.grey[700],
  },
  label: {
    color: '#ffffff',
  },
}))

export const Interlock: FC<Props> = ({
  label,
  status,
  ignored = false,
  ...other
}) => {
  const styles = useInterlockStyles()
  return (
    <ListItem
      className={
        status === 'normal'
          ? styles.normal
          : status === 'error'
          ? styles.error
          : styles.disconnected
      }
      {...other}
    >
      <ListItemIcon>
        <Icon ignored={ignored} />
      </ListItemIcon>
      <ListItemText primary={label} className={styles.label} />
    </ListItem>
  )
}
