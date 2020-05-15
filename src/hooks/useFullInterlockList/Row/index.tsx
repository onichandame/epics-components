import React, { FC } from 'react'
import { TableRow, TableCell } from '@material-ui/core'

import { RowProps } from '../common'
import { Status } from './Status'
import { Latched } from './Latched'
import { Ignored } from './Ignored'
import { Latching } from './Latching'

export const Row: FC<RowProps> = ({ interlock }) => {
  return (
    <TableRow>
      <TableCell>
        <Status {...{ interlock }} />
      </TableCell>
      <TableCell>
        <Latched {...{ interlock }} />
      </TableCell>
      <TableCell>
        <Ignored {...{ interlock }} />
      </TableCell>
      <TableCell>
        <Latching {...{ interlock }} />
      </TableCell>
    </TableRow>
  )
}
