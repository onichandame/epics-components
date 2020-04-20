import React, { FC, useRef, CSSProperties } from 'react'
import { generate } from 'randomstring'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  Stop
} from '@material-ui/icons'

type Props={
  value: boolean;
  label: string;
  size?: number;
  labelPosition?: 'right' | 'top' | 'bottom' | 'left';
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
    fill: theme.palette.success.light
  },
  error: {
    fill: theme.palette.error.light
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

export const BinaryIndicator: FC<Props> = ({ value, label, labelPosition = 'right', size = 1 }: Props) => {
  const styles = useStyles()
  const text = useRef<HTMLDivElement>(null)

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
              <Stop key={`filament-${generate({ length: 20 })}`} className={`${value ? styles.normal : styles.error}`}/>
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
