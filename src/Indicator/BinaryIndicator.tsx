import React, { FC, useEffect, useRef, CSSProperties } from 'react'
import { generate } from 'randomstring'
import { makeStyles, Theme } from '@material-ui/core/styles'

type Props={
  value: boolean;
  label: string;
  size?: number;
  labelPosition?: 'right' | 'top' | 'bottom' | 'left';
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
      filament.current.style.marginLeft = `${filament.current.clientHeight * 0.1}px`
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
    display: 'inline-flex',
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper
  },
  lampshape: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

export const BinaryIndicator: FC<Props> = ({ value, label, labelPosition = 'right', size = 1 }: Props) => {
  const styles = useStyles()
  const text = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (text.current) {
      text.current.style.marginLeft = `${text.current.clientHeight * 0.5}px` || '.5rem'
      text.current.style.marginRight = `${text.current.clientHeight * 0.5}px` || '.5rem'
    }
  })
  let direction: CSSProperties['flexDirection']
  switch (labelPosition) {
    case 'top':
      direction = 'column-reverse'
      break
    case 'right':
      direction = 'row'
      break
    case 'bottom':
      direction = 'column'
      break
    case 'left':
      direction = 'row-reverse'
      break
    default:
      direction = 'column-reverse'
      break
  }
  return (
    <div className={styles.root} style={{ flexDirection: direction }}>
      <div className={styles.lampshape}>
        <div className={`${styles.bulb} ${value ? styles.normal : styles.error}`}>
          {
            Array.from(Array(size)).map(() => (
              <Filament key={`filament-${generate({ length: 20 })}`}/>
            ))
          }
        </div>
      </div>
      <div ref={text} className={styles.label}>
        {label}
      </div>
    </div>
  )
}
export default BinaryIndicator
