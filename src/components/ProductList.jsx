import React from 'react';
import { Card, CardContent, CardHeader, Button, Grid, Typography } from '@mui/material';

const ProductList = ({ products, setOrderForm }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardHeader title="Available Products" />
      <CardContent>
        {products.length === 0 ? (
          <Typography variant="body2">No products available.</Typography>
        ) : (
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card variant="outlined">
                  <CardHeader title={product.name} subheader={`$${product.price}`} />
                  <CardContent>
                    <Typography variant="body2">Quantity: {product.quantity}</Typography>
                    {setOrderForm && (
                      <Button 
                        size="small" 
                        variant="contained" 
                        onClick={() => setOrderForm({ productId: product.id, quantity: '', customerName: '', deliveryAddress: '' })}
                      >
                        Order
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductList;
