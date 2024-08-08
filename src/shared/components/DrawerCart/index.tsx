import { openCartAction } from "@/shared/store/cart/cartReducer";
import { useCartDrawer } from "@/shared/store/cartContext";
import { Box, Divider, Button, Drawer, Typography } from "@mui/material";
import React from "react";

export function DrawerCart() {
  const { cartState, dispatch } = useCartDrawer();

  const toggleDrawer = () => () => {
    dispatch(openCartAction());
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer()}>
        <Typography variant="h4">Cart</Typography>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={cartState.isOpen} onClose={toggleDrawer()}>
        {DrawerList}
      </Drawer>
    </div>
  );
}