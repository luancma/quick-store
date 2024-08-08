'use client'
import { ProductProps } from "@/shared/data/product";
import { addToCartAction } from "@/shared/store/cart/cartReducer";
import { useCartDrawer } from "@/shared/store/cartContext";
import { Box, Typography, Rating, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export const ClientComponent = ({ product }: { product: ProductProps }) => {

  const handleInsertIntoCart = () => {
    return fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: product.id,
            quantity: 1,
          },
        ]
      })
    }).then(response => response.json()).then(data => {
      console.log(data);
    })
  }

  const { dispatch } = useCartDrawer();
  const handleAddToCart = () => {
    dispatch(addToCartAction({
      ...product,
      quantity: 1
    }));
    handleInsertIntoCart();
  };
  return (
    <Box>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        Brand: {product.brand}
      </Typography>
      <Rating name="simple-controlled" value={product.rating} />
      <Typography gutterBottom variant="h4" component="div">
        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(Number(product.price))}
      </Typography>
      {product.availabilityStatus ? (
        <Typography gutterBottom variant="body2" component="div">
          Stock Available
        </Typography>
      ) : null}
      <Box>
        <Button onClick={handleAddToCart} variant="outlined" startIcon={<AddShoppingCartIcon />}>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}