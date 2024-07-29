import { Menu } from '@mui/material'
import { useState } from 'react'

const HoverNavList = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={}></Menu>
}
