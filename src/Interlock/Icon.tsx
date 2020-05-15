import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ListItemIcon } from '@material-ui/core'
import { Block } from '@material-ui/icons'

type Props = {
  ignored: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.grey[400],
  },
}))

export const Icon: FC<Props> = ({ ignored }) => {
  const styles = useStyles()
  return ignored ? (
    <ListItemIcon>
      <Block className={styles.root} />
    </ListItemIcon>
  ) : (
    <></>
  )
}
