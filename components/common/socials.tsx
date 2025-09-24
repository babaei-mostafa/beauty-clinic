import Stack from '@mui/material/Stack'
import InstagramIcon from '@mui/icons-material/Instagram'

import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkIconButton from '@/components/UI/button/link-icon-btn'

interface Social {
  name: string
  url: string
  icon: React.ElementType
}

const socialsData: Social[] = [
  { name: 'instagram', url: 'https://instagram.com', icon: InstagramIcon },
  { name: 'facebook', url: 'https://facebook.com', icon: FacebookIcon },
  { name: 'telegram', url: 'https://telegram.me', icon: TelegramIcon },
  { name: 'whatsapp', url: 'https://whatsapp.com', icon: WhatsAppIcon },
]

// ====================|| SOCIALS ||==================== //

export default function Socials() {
  return (
    <Stack direction="row">
      {socialsData.map((social) => (
        <LinkIconButton key={`social-${social.name}`} href={social.url}>
          <social.icon fontSize="small" />
        </LinkIconButton>
      ))}
    </Stack>
  )
}
