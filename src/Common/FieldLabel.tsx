import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...theme.typography.button
  }
}))

export const FieldLabel: FC = ({ children }: ComponentProps<FC>) => {
  const styles = useStyles()
  return (
    <Typography variant={'h6'} className={styles.root}>
      <Grid container direction={'row'}>
        <Grid item>
          {children}
        </Grid>
        <Grid item>
          {':'}
        </Grid>
      </Grid>
    </Typography>
  )
}
