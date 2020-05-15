import React, { FC, ComponentProps } from 'react'
import { List } from '@material-ui/core'

import { Interlock } from './Interlock'

type Props = {
  entries: ComponentProps<typeof Interlock>[]
}

export const InterlockList: FC<Props> = ({ entries, ...other }: Props) => {
  return (
    <List dense={true} {...other}>
      {entries.map(entry => (
        <Interlock {...entry} />
      ))}
    </List>
  )
}
