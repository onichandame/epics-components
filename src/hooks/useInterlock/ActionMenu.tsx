import React, { FC, ReactNode, ComponentProps } from 'react'
import { Menu, MenuItem } from '@material-ui/core'

type Props = {
  actions: {
    label: ReactNode
    action?: () => void
  }[]
  handleClose: () => void
} & ComponentProps<typeof Menu>

export const ActionMenu: FC<Props> = ({ actions, handleClose, ...other }) => {
  return (
    <Menu {...other}>
      {actions.map(({ action, label }) =>
        action ? (
          <MenuItem
            onClick={() => {
              action()
              handleClose()
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
