'use client'

import { Dispatch, SetStateAction } from 'react'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import CloseIcon from '@mui/icons-material/Close'

import BG from '@/public/assets/images/menu-image-default.jpg'
import { useMediaQuery } from '@mui/material'

const menuItems = [
  { id: 'home', title: 'Home' },
  { id: 'skin-care', title: 'Skin Care' },
  { id: 'treatments', title: 'Treatments' },
  { id: 'promotions', title: 'Promotions' },
  { id: 'gallery', title: 'Gallery' },
  { id: 'reviews', title: 'Reviews' },
  { id: 'about-us', title: 'About Us' },
]

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

// ====================|| DRAWER ||==================== //

export default function MainDrawer({ open, setOpen }: Props) {
  const moreMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const LeftDrawerContent = (
    <Box
      sx={{ width: moreMd ? '50vw' : 250 }}
      role="menu"
      onClick={() => toggleDrawer(false)}
    >
      <IconButton sx={{ mt: 3, ml: 3 }}>
        <CloseIcon />
      </IconButton>
      <List>
        {menuItems.map((item) => {
          const { id, title } = item
          return (
            <ListItem key={`mein-menu-item-${id}`}>
              <ListItemText primary={title} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
  const RightDrawerContent = (
    <Box
      sx={{
        width: '50vw',
        height: '100%',
        backgroundImage: `url(${BG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      role="menu"
      onClick={() => toggleDrawer(false)}
    ></Box>
  )

  return (
    <>
      <Drawer
        anchor="left"
        variant={moreMd ? 'persistent' : 'temporary'}
        hideBackdrop={moreMd}
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        {LeftDrawerContent}
      </Drawer>
      {moreMd && (
        <Drawer
          anchor="right"
          variant="persistent"
          hideBackdrop
          open={open}
          onClose={() => toggleDrawer(false)}
        >
          {RightDrawerContent}
        </Drawer>
      )}
    </>
  )
}
