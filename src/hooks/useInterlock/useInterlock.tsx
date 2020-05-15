import React, { FC, MouseEvent, useState, useEffect, useReducer } from 'react'

import { InterlockStatus } from '../../types'
import { Interlock as Lock } from '../../Interlock'
import { ActionMenu } from './ActionMenu'

type Props = {
  label: string
  status: InterlockStatus

  ignorable?: boolean
  defaultIgnored?: boolean
  ignoreLabel?: string
  unigoreLabel?: string

  resetLabel?: string
}

export const useInterlock = ({
  label,
  status, //true status
  ignorable = false,
  defaultIgnored = false,
  ignoreLabel = 'Ignore',
  unigoreLabel = 'Unignore',
  resetLabel = 'Reset',
}: Props) => {
  const [ignored, toggleIgnored] = useReducer(oldVal => !oldVal, defaultIgnored)

  const [latching, setLatching] = useState<boolean>(false)
  const [latched, setLatched] = useState<boolean>(false)

  const [cache, setCache] = useState<InterlockStatus>(status)
  const updateCache = () => {
    if (!latched) setCache(status)
  }
  const updateLatched = () => {
    if (latching) {
      if (status === 'error') setLatched(true)
    } else {
      setLatched(false)
    }
    updateCache()
  }
  useEffect(() => {
    updateLatched()
  }, [status])
  useEffect(() => {
    updateLatched()
  }, [latched])
  useEffect(() => {
    updateLatched()
  }, [latching])

  const reset = () => status !== 'error' && setLatched(false)

  const closedPosition = {
    x: null,
    y: null,
  }
  const [position, setPosition] = useState<{
    x: number | null
    y: number | null
  }>(closedPosition)
  const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
    ev.preventDefault()
    setPosition({
      x: ev.clientX - 2,
      y: ev.clientY - 4,
    })
  }

  const handleClose = () => setPosition(closedPosition)

  const Interlock: FC = () => {
    return (
      <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }}>
        <Lock label={label} status={cache} ignored={ignored} />
        <ActionMenu
          actions={[
            {
              label: resetLabel,
              action: latched ? reset : undefined,
            },
            {
              label: 'toggleLatching',
              action: () => setLatching(!latching),
            },
            {
              label: ignored ? unigoreLabel : ignoreLabel,
              action: ignorable ? toggleIgnored : undefined,
            },
          ]}
          keepMounted
          open={position.x !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            position.x !== null && position.y !== null
              ? { top: position.y, left: position.x }
              : undefined
          }
        />
      </div>
    )
  }
  const toggleLatching = () => setLatching(!latching)
  return {
    label,
    status,
    ignored,
    toggleIgnored,
    reset,
    Interlock,
    latching,
    setLatching,
    toggleLatching,
    latched,
  }
}
