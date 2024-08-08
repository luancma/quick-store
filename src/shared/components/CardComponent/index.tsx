'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductProps } from '@/shared/data/product';
import { Box, Rating, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export function CardComponent({
  id,
  title,
  price,
  brand,
  rating,
  images,
}: Partial<ProductProps>) {
  const router = useRouter()

  const handleOpenProductDetails = () => {
    router.push(`/product/${id}`)
  }
  
  return (
    <Card sx={{ width: "100%", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
      <Stack onClick={handleOpenProductDetails}>
        <Box sx={{ position: 'relative', aspectRatio: "4/4" }}>
          <Image
            fill
            objectFit='cover'
            src={`${images ? images[0] : "https://placehold.co/600x400"}`}
            alt='Product Image'
            loading='lazy'
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
          />
          <Typography variant="body2" color="text.secondary">
            Price: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(price))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brand: {brand}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
}
