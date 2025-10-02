import Link from 'next/link'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'

import FancyImg from '@/components/UI/fancy-img'
import { Blog } from '@/types/blog'

// ====================|| BLOG CARD ||==================== //

export default function BlogCard({ image, title, id }: Blog) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea
        component={Link}
        href={`/blog/${id}`}
        sx={{ flexGrow: 1 }}
      >
        <Image src={image} alt={title} width={345} height={200} />
        <CardContent>
          <Typography
            variant="h6"
            component="h3"
            align="center"
            fontWeight={500}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // <Link href=>
    //   <Stack spacing={2} justifyContent="center" alignItems="center">
    //     <FancyImg src={image} alt={title} width={280} height={180} />
    //     <Typography
    //       sx={{ textAlign: 'center', fontWeight: 500, fontSize: '18px' }}
    //     >
    //       {title}
    //     </Typography>
    //   </Stack>
    // </Link>
  )
}
