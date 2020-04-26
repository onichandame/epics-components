import React, { FC, ComponentProps, ReactNode } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

type Props={
  label?: ReactNode;
} & ComponentProps<'fieldset'>

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderStyle: 'solid',
    borderWidth: '2px',
    padding: theme.spacing(2),
    borderColor: theme.palette.grey[400],
    borderRadius: '.5rem'
  }
}))

export const GroupBox: FC<Props> = ({ children, label = '', ...other }: Props) => {
  const styles = useStyles()
  return (
    <fieldset
      className={styles.root}
      {...other}
    >
      <legend>
        {label}
      </legend>
      {children}
    </fieldset>
  )
}
