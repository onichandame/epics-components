import React, { FC, useEffect, useRef } from 'react'
import { generate } from 'randomstring'
import { makeStyles, Theme } from '@material-ui/core/styles'

type Props={
  value: boolean;
  label: string;
  size?: number;
}

const useFilamentStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    transform: 'rotate(-90deg)'

  }
}))

const Filament: FC = () => {
  const styles = useFilamentStyles()
  const filament = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (filament && filament.current) {
      filament.current.style.marginLeft = `${filament.current.clientHeight * 0.4}px`
    }
  })
  return (
    <div ref={filament} className={styles.root}>
      █
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper
  },
  bulb: {
    display: 'flex'
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

export const BinaryIndicator: FC<Props> = ({ value, label, size = 1 }: Props) => {
  const styles = useStyles()
  const text = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (text.current) {
      text.current.style.marginLeft = `${text.current.clientHeight * 0.5}px` || '.5rem'
    }
  })
  return (
    <div className={styles.root}>
      <div className={`${value ? styles.normal : styles.error} ${styles.bulb}`}>
        {
          Array.from(Array(size)).map(() => (
            <Filament key={`filament-${generate({ length: 20 })}`}/>
          ))
        }
      </div>
      <div ref={text} className={styles.label}>
        {label}
      </div>
    </div>
  )
}
export default BinaryIndicator
