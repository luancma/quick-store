import { Box, Button, FormControl, IconButton, InputLabel, Rating, Stack, TextField, Typography } from "@mui/material";
import { getProductDetails } from "../data/getProductDetails";
import Image from "next/image";
import { ClientComponent } from "./ClientComponent";


export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductDetails({ id: params.id });

  return (
    <Box sx={{
      width: "960px",
      margin: "auto"
    }}>
      <Stack display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
        <Box width={"50%"}>
          <Box height={"400px"}>
            <Box sx={{ margin: "auto", position: 'relative', aspectRatio: "4/4", height: "100%" }}>
              <Image
                fill
                objectFit='cover'
                src={`${product.images ? product.images[0] : "https://placehold.co/600x400"}`}
                alt='Product Image'
                loading='lazy'
              />
            </Box>
          </Box>

          <Typography gutterBottom variant="subtitle1" component="div">
            Description
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {product.description}
          </Typography>
        </Box>
        <ClientComponent product={product} />
      </Stack>
    </Box>
  );
}