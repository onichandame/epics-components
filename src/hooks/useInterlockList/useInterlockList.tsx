import React from 'react'
import { List } from '@material-ui/core'

import { useInterlock } from '../useInterlock/useInterlock'

type Props = {
  entries: Parameters<typeof useInterlock>[0][]
}

export const useInterlockList = ({ entries }: Props) => {
  let interlocks = entries.map(interlock => useInterlock(interlock))
  const InterlockList = () => (
    <List dense>
      {interlocks.map(({ Interlock }) => (
        <Interlock />
      ))}
    </List>
  )
  const resetAll = () => {
    interlocks.forEach(interlock => {
      interlock.reset()
    })
  }

  const ignoreAll = () => {
    interlocks.forEach(interlock => {
      interlock.ignored || interlock.toggleIgnored()
    })
  }
  const unignoreAll = () => {
    interlocks.forEach(interlock => {
      interlock.ignored && interlock.toggleIgnored()
    })
  }
  return {
    InterlockList,
    resetAll,
    ignoreAll,
    unignoreAll,
    interlocks,
  }
}
