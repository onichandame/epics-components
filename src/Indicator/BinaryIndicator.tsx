import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

type Props={
  value: boolean;
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper
  },
  bulb: {
    fontSize: '2rem',
    verticalAlign: 'middle',
    lineHeight: '1.5rem'
  },
  normal: {
    color: theme.palette.success.light
  },
  error: {
    color: theme.palette.error.light
  },
  label: {
    fontWeight: 'bold',
    marginLeft: '.5rem',
    fontSize: '1.5rem',
    verticalAlign: 'middle',
    lineHeight: '1.5rem'
  }
}))

export const BinaryIndicator: FC<Props> = ({ value, label }: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <div className={`${styles.bulb} ${value ? styles.normal : styles.error}`}>
        ⬤
      </div>
      <div className={styles.label}>
        {label}
      </div>
    </div>
  )
}
export default BinaryIndicator
