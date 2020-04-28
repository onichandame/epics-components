import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  CheckCircle,
  Cancel,
  Block,
  SvgIconComponent
} from '@material-ui/icons'

type Status='normal'|'error'|'disconnected'

type IconProps={
  status: Status;
} & ComponentProps<SvgIconComponent>

type Props={
  label: string;
} & IconProps & ComponentProps<typeof ListItem>

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

const Icon: FC<IconProps> = ({ status, ...other }: IconProps) => {
  const styles = useIconStyles()
  switch (status) {
    case 'normal':
      return <CheckCircle className={styles.normal} {...other}/>
    case 'error':
      return <Cancel className={styles.error} {...other}/>
    default:
      return <Block className={styles.disconnected} {...other}/>
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

export const Interlock: FC<Props> = ({ label, status, ...other }: Props) => {
  const styles = useInterlockStyles()
  return (
    <ListItem className={status === 'normal' ? styles.normal : (status === 'error' ? styles.error : styles.disconnected)} {...other}>
      <ListItemIcon>
        <Icon status={status}/>
      </ListItemIcon>
      <ListItemText primary={label} className={styles.label}/>
    </ListItem>
  )
}
