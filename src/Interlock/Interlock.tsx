import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  CheckCircle,
  Cancel,
  Block
} from '@material-ui/icons'

type Status='normal'|'error'|'disconnected'

type IconProps={
  status: Status;
}

type Props={
  label: string;
} & IconProps

const useIconStyles = makeStyles((theme: Theme) => ({
  error: {
    color: theme.palette.error.light
  },
  normal: {
    color: theme.palette.success.light
  },
  disconnected: {
    color: theme.palette.grey[400]
  }
}))

const Icon: FC<IconProps> = ({ status }: IconProps) => {
  const styles = useIconStyles()
  switch (status) {
    case 'normal':
      return <CheckCircle className={styles.normal}/>
    case 'error':
      return <Cancel className={styles.error}/>
    default:
      return <Block className={styles.disconnected}/>
  }
}

const useInterlockStyles = makeStyles((theme: Theme) => ({
  normal: {
    backgroundColor: theme.palette.success.dark
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  disconnected: {
    background: theme.palette.grey[700]
  },
  label: {
    color: '#ffffff'
  }
}))

export const Interlock: FC<Props> = ({ label, status }: Props) => {
  const styles = useInterlockStyles()
  return (
    <ListItem className={status === 'normal' ? styles.normal : (status === 'error' ? styles.error : styles.disconnected)}>
      <ListItemIcon>
        <Icon status={status}/>
      </ListItemIcon>
      <ListItemText primary={label} className={styles.label}/>
    </ListItem>
  )
}