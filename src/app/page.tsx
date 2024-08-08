import { CardComponent } from '@/shared/components/CardComponent';
import { ProductProps } from '@/shared/data/product';
import { Box, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import styles from './page.module.css'
import Checkbox from '@mui/material/Checkbox';
import { getCategories } from '@/shared/data/categories';
import { DrawerCart } from '@/shared/components/DrawerCart';

interface HomeProps {
  products: ProductProps[];
}

async function getData(): Promise<HomeProps> {
  const res = await fetch('https://dummyjson.com/products?limit=10&delay=5000', {
    next: {
      revalidate: 60 * 60,
      tags: ['products']
    }
  })
  const products = await res.json()
  return products
}

export default async function Home() {
  const { products } = await getData()
  const categories = await getCategories()

  return (
    <Stack display={"flex"} flexDirection={"row"}>
      <Box width={400}>
        <Typography variant="h5" align="left">Filters</Typography>
        <FormGroup>
          {
            categories?.map((category) => (
              <FormControlLabel control={<Checkbox />} label={category} key={category} />
            ))
          }
        </FormGroup>
      </Box>

      <Box width={"100%"}>
        <Typography variant="h5" align="left">Recommendations</Typography>
        <Box className={styles['products-grid']}>
          {products.map((product) => (
            <CardComponent {...product} key={product.id} />
          ))}
        </Box>
      </Box>
    </Stack>
  )
}
