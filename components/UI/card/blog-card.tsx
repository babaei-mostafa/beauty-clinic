import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import FancyImg from '../fancy-img'
import { Blog } from '@/components/blog/blog'

// ====================|| BLOG CARD ====================|| //

export default function BlogCard({ image, title }: Blog) {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: 280}}>
      <FancyImg src={image} alt={title} width={280} height={180} />
      <Typography>{title}</Typography>
    </Stack>
  )
}
