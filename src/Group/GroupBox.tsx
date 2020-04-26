import React, { FC, ComponentProps, ReactNode } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid
} from '@material-ui/core'

type Props={
  label?: ReactNode;
  children?: ComponentProps<typeof Grid>['children'];
  style?: ComponentProps<typeof Grid>['style'];
  className?: ComponentProps<typeof Grid>['className'];
}

const useStyles = makeStyles(() => ({
  root: {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '.5rem'
  }
}))

export const GroupBox: FC<Props> = ({ children, label = '', style, className }: Props) => {
  const styles = useStyles()
  return (
    <Grid
      container
      component={'fieldset'}
      className={clsx(styles.root, className)}
      style={style}
    >
      <Grid item component={'legend'}>
        {label}
      </Grid>
      {children}
    </Grid>
  )
}
