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
import Link from 'next/link'

const menuItems = [
  { id: 'home', title: 'Home', url: '/', IMG: DEFAULT_MENU_IMG },
  { id: 'skin-care', title: 'Skin Care', url: '/', IMG: SKIN_MENU_IMG },
  { id: 'treatments', title: 'Treatments', url: '/', IMG: TREATMENTS_MENU_IMG },
  { id: 'promotions', title: 'Promotions', url: '/', IMG: PROMOTIONS_MENU_IMG },
  { id: 'blog', title: 'Blog', url: '/blog', IMG: SKIN_MENU_IMG },
  { id: 'gallery', title: 'Gallery', url: '/', IMG: SKIN_MENU_IMG },
  { id: 'reviews', title: 'Reviews', url: '/', IMG: SKIN_MENU_IMG },
  { id: 'about-us', title: 'About Us', url: '/about', IMG: SKIN_MENU_IMG },
  { id: 'login', title: 'Login', url: '/auth/login', IMG: SKIN_MENU_IMG },
]

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

// ====================|| DRAWER ||==================== //

export default function MainDrawer({ open, setOpen }: Props) {
  const theme = useTheme()
  const moreMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [hoveredImage, setHoveredImage] = useState<StaticImageData | null>(null)

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  const handleMouseEnter = (_e: MouseEvent, img: StaticImageData) => {
    setHoveredImage(img)
  }

  const handleMouseLeave = () => {
    setHoveredImage(null)
  }

  const LeftDrawerContent = (
    <Box
      sx={{
        width: moreMd ? '50vw' : 250,
        opacity: open ? 1 : 0,
        transition: 'opacity 1.5s ease-in-out',
      }}
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
            const { id, title, IMG, url } = item
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
                <Link href={url}>
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      sx: { transition: 'color 0.3s ease' },
                    }}
                  />
                </Link>
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
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: `url(${DEFAULT_MENU_IMG.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black z-10 opacity-30"></div>
      {/* Default background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${DEFAULT_MENU_IMG.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="menu"
        onClick={() => toggleDrawer(false)}
      ></Box>

      {/* Overlay background images */}
      {menuItems.map((item) => (
        <Box
          key={`menu-item-${item.id}-background-image`}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${item.IMG.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: hoveredImage?.src === item.IMG.src ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out',
          }}
          role="menu"
          onClick={() => toggleDrawer(false)}
        ></Box>
      ))}
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
