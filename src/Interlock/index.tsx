import React, { FC } from 'react'
import { generate } from 'randomstring'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import {
  CheckCircle,
  Cancel
} from '@material-ui/icons'

type Entry={
  label: string;
  status: 'normal'|'error';
}[]

interface Props {
  label?: string;
  entries: Entry;
}

const useNormalIconStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.success.light
  }
}))

const NormalIcon: FC = () => {
  const styles = useNormalIconStyles()
  return (
    <CheckCircle className={styles.root} />
  )
}

const useErrorIconStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.error.light
  }
}))

const ErrorIcon: FC = () => {
  const styles = useErrorIconStyles()
  return (
    <Cancel className={styles.root} />
  )
}

const useInterlockStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '.25rem',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 0
  },
  list: {
    color: '#ffffff'
  },
  normal: {
    backgroundColor: theme.palette.success.dark
  },
  error: {
    backgroundColor: theme.palette.error.dark
  }
}))

export const Interlock: FC<Props> = ({ label, entries }: Props) => {
  const styles = useInterlockStyles()
  return (
    <Grid container spacing={1} direction={'row'} alignItems={'center'} className={styles.root}>
      <Grid item>
        <Typography variant={'h6'}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <List dense={true} component={'ol'} className={styles.list}>
          {
            entries.map(entry => (
              <ListItem key={`interlock-list-item-${generate({ length: 20 })}`} className={entry.status === 'normal' ? styles.normal : styles.error}>
                <ListItemIcon>
                  {
                    entry.status === 'normal'
                      ? <NormalIcon />
                      : <ErrorIcon />
                  }
                </ListItemIcon>
                <ListItemText primary={entry.label}/>
              </ListItem>
            ))
          }
        </List>
      </Grid>
    </Grid>
  )
}
