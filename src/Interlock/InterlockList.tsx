import React, { FC, ComponentProps } from 'react'
import { generate } from 'randomstring'
import {
  List
} from '@material-ui/core'

import { Interlock } from './Interlock'

type Props = {
  entries: ComponentProps<typeof Interlock>[];
} & ComponentProps<typeof List>

export const InterlockList: FC<Props> = ({ entries, dense = true, ...other }: Props) => {
  return (
    <List dense={dense} {...other}>
      {
        entries.map(entry => (
          <Interlock key={`interlock-list-item-${generate({ length: 20 })}`} {...entry}/>
        ))
      }
    </List>
  )
}
