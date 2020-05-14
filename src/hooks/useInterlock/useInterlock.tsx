import React, { FC, useState, useEffect } from 'react'

import { InterlockStatus } from '../../types'
import { Interlock as Lock } from '../../Interlock'
import { ActionMenu } from './ActionMenu'

type Props = {
  //text displayed on the interlock
  label: string
  //default to 'disconnected'
  defaultStatus?: InterlockStatus
  //set to true if the alarm from this interlock can be ignored
  ignorable?: boolean
  //whether ignored on load
  defaultIgnored?: boolean
  //the text displayed on the ignore button
  ignoreLabel?: string
  //the text displayed on the unignore button
  unigoreLabel?: string
  //whether the interlock is latching
  latching?: boolean
  //the text displayed on the reset button
  resetLabel?: string
}

export const useInterlock = ({
  label,
  defaultStatus = 'disconnected',
  ignorable = false,
  defaultIgnored = false,
  ignoreLabel = 'Ignore',
  unigoreLabel = 'Unignore',
  latching = true,
  resetLabel = 'Reset',
}: Props) => {
  //meta status
  const [activated, setActivated] = useState<boolean>(false)
  const [ignored, setIgnored] = useState<boolean>(defaultIgnored)
  //true status
  const [status, setStatus] = useState<InterlockStatus>(defaultStatus)
  //displayed status
  const [cachedStatus, setCachedStatus] = useState<InterlockStatus>(status)
  useEffect(() => {
    if (!activated) setCachedStatus(status)
  }, [status])
  const Interlock: FC = () => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    return (
      <div>
        <Lock
          ignored={ignored}
          button={!ignorable || latching || activated ? true : undefined}
          onClick={({ currentTarget }) => setAnchor(currentTarget)}
          label={label}
          status={cachedStatus}
        />
        {!ignorable || latching || activated ? (
          <ActionMenu
            actions={[
              {
                label: resetLabel,
                action: activated ? () => setActivated(false) : undefined,
              },
              {
                label: ignored ? unigoreLabel : ignoreLabel,
                action: () => setIgnored(!ignored),
              },
            ]}
            anchorEl={anchor}
            open={!!anchor}
            handleClose={() => setAnchor(null)}
            onClose={() => setAnchor(null)}
          />
        ) : (
          <></>
        )}
      </div>
    )
  }
  return {
    ignored,
    setStatus,
    status,
    Interlock,
    activated,
  }
}
