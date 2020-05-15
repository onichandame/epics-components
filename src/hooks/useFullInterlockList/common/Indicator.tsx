import React, { FC, ComponentProps } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { Interlock } from '../../../Interlock'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: theme.spacing(8),
  },
}))

export const Indicator: FC<{
  status: ComponentProps<typeof Interlock>['status']
}> = ({ status }) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Interlock label={''} status={status} />
    </div>
  )
}
