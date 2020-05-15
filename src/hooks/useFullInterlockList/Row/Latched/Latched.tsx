import React, { FC } from 'react'

import { Indicator, RowProps } from '../../common'

export const Latched: FC<RowProps> = ({ interlock }) => (
  <Indicator status={interlock.latched ? 'normal' : 'disconnected'} />
)
