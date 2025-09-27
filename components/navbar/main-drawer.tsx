'use client'

import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import CloseIcon from '@mui/icons-material/Close'

import DEFAULT_MENU_IMG from '@/public/assets/images/menu-images/default-menu-image.jpg'
import SKIN_MENU_IMG from '@/public/assets/images/menu-images/skin-care.jpg'
import TREATMENTS_MENU_IMG from '@/public/assets/images/menu-images/treatments.jpg'
import PROMOTIONS_MENU_IMG from '@/public/assets/images/menu-images/skin-care-2.jpg'
import { useMediaQuery, useTheme } from '@mui/material'
import { StaticImageData } from 'next/image'

const menuItems = [
  { id: 'home', title: 'Home', IMG: DEFAULT_MENU_IMG },
  { id: 'skin-care', title: 'Skin Care', IMG: SKIN_MENU_IMG },
  { id: 'treatments', title: 'Treatments', IMG: TREATMENTS_MENU_IMG },
  { id: 'promotions', title: 'Promotions', IMG: PROMOTIONS_MENU_IMG },
  { id: 'gallery', title: 'Gallery', IMG: SKIN_MENU_IMG },
  { id: 'reviews', title: 'Reviews', IMG: SKIN_MENU_IMG },
  { id: 'about-us', title: 'About Us', IMG: SKIN_MENU_IMG },
]

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

// ====================|| DRAWER ||==================== //

export default function MainDrawer({ open, setOpen }: Props) {
  const theme = useTheme()
  const moreMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [menuImage, setMenuImage] = useState(DEFAULT_MENU_IMG)
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const handleMouseEnter = (_e: MouseEvent, img: StaticImageData) => {
    setMenuImage(img)
  }

  const handleMouseLeave = () => {
    setMenuImage(DEFAULT_MENU_IMG)
  }
  const LeftDrawerContent = (
    <Box
      sx={{ width: moreMd ? '50vw' : 250 }}
      role="menu"
      onClick={() => toggleDrawer(false)}
    >
      <IconButton sx={{ position: 'fixed', top: 20, left: 20 }}>
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <List>
          <ListItem>
            <Typography component="p" variant="h6">
              Menu
            </Typography>
          </ListItem>
          {menuItems.map((item) => {
            const { id, title, IMG } = item
            return (
              <ListItem
                key={`mein-menu-item-${id}`}
                onMouseEnter={(e) => handleMouseEnter(e, IMG)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  cursor: 'pointer',
                  '&:hover .MuiTypography-root': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemText
                  primary={title}
                  primaryTypographyProps={{
                    sx: { transition: 'color 0.3s ease' },
                  }}
                />
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
  const RightDrawerContent = (
    <Box
      sx={{
        width: '50vw',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        key={menuImage.src} // forces re-render for animation
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${menuImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 1,
          transition: 'opacity 0.6s ease-in-out',
        }}
        role="menu"
        onClick={() => toggleDrawer(false)}
      ></Box>
    </Box>
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
