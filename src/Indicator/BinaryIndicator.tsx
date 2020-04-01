import React, { FC, useEffect, useRef } from 'react'
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
    textAlign: 'center',
    transform: 'rotate(-90deg)'
  },
  normal: {
    color: theme.palette.success.light
  },
  error: {
    color: theme.palette.error.light
  },
  label: {
    fontWeight: 'bold'
  }
}))

export const BinaryIndicator: FC<Props> = ({ value, label }: Props) => {
  const styles = useStyles()
  const bulb = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (text.current && bulb.current) {
      text.current.style.marginLeft = `${bulb.current.clientHeight * 0.5}px` || '.5rem'
    }
  })
  return (
    <div className={styles.root}>
      <div ref={bulb} className={`${styles.bulb} ${value ? styles.normal : styles.error}`}>
        █
      </div>
      <div ref={text} className={styles.label}>
        {label}
      </div>
    </div>
  )
}
export default BinaryIndicator
