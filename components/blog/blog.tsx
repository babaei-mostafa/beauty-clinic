import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import BlogCard from '@/components/UI/card/blog-card'
import PaginationComponent from '@/components/UI/pagination/pagination'
import { blogData } from './blog-data'

const LIMIT = 12

// ====================|| BLOG COMPONENT ||==================== //

export default function BlogComponent() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container rowSpacing={6} columnSpacing={4}>
        {blogData.map((item) => (
          <Grid key={`blog-${item.id}`} size={{ xs: 12, sm: 6, lg: 3 }}>
            <BlogCard {...item} />
          </Grid>
        ))}
      </Grid>
      <PaginationComponent count={240} limit={LIMIT} />
    </Container>
  )
}
