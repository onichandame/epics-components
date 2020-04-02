import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '1rem 0',
    backgroundColor: theme.palette.background.paper
  }
}))

export const ButtonPanelRow: FC = ({ children }: ComponentProps<FC>) => {
  const styles = useStyles()
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}

type Props={
  children: typeof ButtonPanelRow[];
}

export const ButtonPanel: FC<Props> = ({ children }: Props) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      {children.map(row => (row))}
    </div>
  )
}
export default ButtonPanel
