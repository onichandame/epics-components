import React, { FC, ReactNode, ComponentProps } from 'react'
import { Menu, MenuItem } from '@material-ui/core'

type Props = {
  actions: {
    label: ReactNode
    action?: () => void
  }[]
} & ComponentProps<typeof Menu>

export const ActionMenu: FC<Props> = ({ actions, ...other }) => {
  return (
    <Menu {...other}>
      {actions.map(({ action, label }) =>
        action ? (
          <MenuItem
            onClick={() => {
              action()
              other.onClose && other.onClose({}, 'backdropClick')
            }}
          >
            {label}
          </MenuItem>
        ) : (
          <></>
        )
      )}
    </Menu>
  )
}
