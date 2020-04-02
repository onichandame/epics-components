import React, { FC, ComponentProps } from 'react'
import { generate } from 'randomstring'
import { makeStyles, Theme } from '@material-ui/core/styles'
import {
  List,
  ListItem
} from '@material-ui/core'

import { BinaryIndicator } from '../Indicator'

type Props={
  readonly data: ComponentProps<typeof BinaryIndicator>[];
  columns?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper
  }
}))

export const IndicatorPanel: FC<Props> = ({ data, columns = 2 }: Props) => {
  const partition = (): Props['data'][] => {
    const result = new Array<Props['data']>(columns)
    let remain = data.length
    let start = 0
    for (let i = 0; i < columns; ++i) {
      const end = start + Math.ceil(remain / (columns - i))
      result.push(data.slice(start, end))
      start = end
      remain = data.length - end
    }
    return result
  }
  const styles = useStyles()
  return (
    <div className={styles.root}>
      {
        partition().map(list => (
          <List key={`indicator-panel-list-${generate({ length: 10 })}`}>
            {
              list.map(item => (
                <ListItem key={`indicator-panel-list-item-${generate({ length: 10 })}`}>
                  <BinaryIndicator {...item}/>
                </ListItem>
              ))
            }
          </List>
        ))
      }
    </div>
  )
}
export default IndicatorPanel
