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

type Props = ComponentProps<typeof Typography>

export const FieldLabel: FC<Props> = ({ children, ...other }: Props) => {
  const styles = useStyles()
  return (
    <Typography variant={'h6'} className={styles.root} {...other}>
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
