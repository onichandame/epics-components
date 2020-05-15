import React, { FC } from 'react'
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'

import { useInterlockList } from '../useInterlockList'
import { Row } from './Row'

type Props = Parameters<typeof useInterlockList>[0]

export const useFullInterlockList = (props: Props) => {
  const { interlocks } = useInterlockList(props)
  const FullInterlockList: FC = () => {
    return (
      <TableContainer component={Paper}>
        <Table size={'medium'}>
          <TableHead>
            <TableRow>
              <TableCell align={'right'}>Status</TableCell>
              <TableCell>Latched</TableCell>
              <TableCell>Ignored</TableCell>
              <TableCell align={'right'}>Latching</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interlocks.map(interlock => (
              <Row interlock={interlock} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  return {
    FullInterlockList,
    interlocks,
  }
}
