import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import BlogCard from '../UI/card/blog-card'

export interface Blog {
  id: string
  title: string
  image: string
  short_description: string
  date: string
}

const blogData: Blog[] = [
  {
    id: '1',
    title: 'How to Support Your Bodys Biggest Organ (the Skin)',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Learn all about your superhero skin and how to give it what it needs.',
    date: '',
  },
  {
    id: '2',
    title:
      'Hydrating and Moisturizing Arent the Same for Your Skin — Heres Why',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'The key to happy skin is moisturizing it correctly, but whats the difference',
    date: '',
  },
  {
    id: '3',
    title: 'Letter From the Editor: Getting Real About Skin Care',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Lets ditch the filters, the “poreless” ideal, and the pressure for perfect skin.',
    date: '',
  },
  {
    id: '4',
    title: 'Are You a Skin Care Pro?',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'These 5 questions will help you maximize your skin care chops.',
    date: '',
  },
  {
    id: '5',
    title: 'Healthlines Evidence-Based Skin Care Ingredients Dictionary',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Get the A-Z details on more than 100 skin care ingredients.',
    date: '',
  },
  {
    id: '6',
    title: 'Present Tense: How to See the Skin as a Window to Your Inner World',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description: 'Your skin and your inner world are intimately linked.',
    date: '',
  },
  {
    id: '7',
    title: 'Vanessa Lachey and Her Journey with Hives',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Actress Vanessa Lachey talks with Healthline about her lifelong experience with hives, how it has interfered with her work in',
    date: '',
  },
  {
    id: '8',
    title: 'The Fitzpatrick Scale doesnt cover all the bases',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'The Fitzpatrick Scale doesnt cover all the bases. Heres why.',
    date: '',
  },
  {
    id: '9',
    title: 'Hormonal Acne Can Happen at Any Age. Heres How to Deal',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Hormonal acne isnt just for teens. Heres what you can do about it.',
    date: '',
  },
  {
    id: '10',
    title:
      'Considering Cosmetic Procedures to Ease Signs of Aging? Do This First',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Aging is a part of life, but how you approach it is up to you.',
    date: '',
  },
  {
    id: '11',
    title: 'Dermatologists Share Skin Care Tips for Menopause and Beyond',
    image:
      'https://media.post.rvohealth.io/wp-content/uploads/2022/06/female-rubbing-sunscreen-on-skin-732-549-feature-thumb-732x549.jpg',
    short_description:
      'Are you experiencing menopause-related skin effects? These expert tips have your skin care covered.',
    date: '',
  },
]

// ====================|| BLOG COMPONENT ||==================== //

export default function BlogComponent() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {blogData.map((item) => (
          <Grid key={`blog-${item.id}`} size={{ xs: 12, md: 4 }}>
            <BlogCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
