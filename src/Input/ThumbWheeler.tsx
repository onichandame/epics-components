import React, { FC, ComponentProps } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button
} from '@material-ui/core'

type RootProps={
  value: number;
  increment(...args: any[]): void;
  decrement(...args: any[]): void;
}

type ThumbProps={
  onClick: ComponentProps<'button'>['onClick'];
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    flexGrow: 0
  },
  button: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  dataWrapper: {
    display: 'flex',
    flexGrow: 0,
    justifyContent: 'center'
  },
  data: {
    display: 'flex',
    flexGrow: 0,
    margin: '1rem 0'
  }
}))

const Thumb: FC<ThumbProps> = ({ children, onClick }: ComponentProps<FC<ThumbProps>>) => {
  const styles = useStyles()
  return (
    <Button
      className={styles.button}
      variant={'contained'}
      color={'primary'}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export const ThumbWheeler: FC<RootProps> = ({ increment, decrement, value }: RootProps) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Thumb onClick={() => increment()}>
        &and;
      </Thumb>
      <div className={styles.dataWrapper}>
        <div className={styles.data}>
          {value}
        </div>
      </div>
      <Thumb onClick={() => decrement()}>
        &or;
      </Thumb>
    </div>
  )
}
export default ThumbWheeler
