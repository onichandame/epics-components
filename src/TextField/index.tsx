import React, { FC, ReactNode, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  TextField as MTF
} from '@material-ui/core'

type Props = {
  label: ReactNode;
  value: string;
} & ComponentProps<typeof MTF>

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    ...theme.typography.button
  }
}))

export const TextField: FC<Props> = ({ label, value, ...other }: Props) => {
  const styles = useStyles()
  return (
    <Grid container spacing={1} alignItems={'center'} direction={'row'}>
      <Grid item className={styles.label}>
        <Typography variant={'h6'}>
          {`${label} : `}
        </Typography>
      </Grid>
      <Grid item>
        <MTF
          label={value}
          variant={'outlined'}
          {...other}
        />
      </Grid>
    </Grid>
  )
}

export default TextField
