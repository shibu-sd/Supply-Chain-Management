import React from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const OrderManagement = ({ orders, updateOrderStatus }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardHeader title="Manage Orders" />
      <CardContent>
        <Grid container spacing={2}>
          {orders.map(order => (
            <Grid item xs={12} sm={6} md={4} key={order.id}>
              <Card variant="outlined">
                <CardHeader title={`Order #${order.id}`} subheader={order.customerName} />
                <CardContent>
                  <Typography variant="body2">Product ID: {order.productId}</Typography>
                  <Typography variant="body2">Quantity: {order.quantity}</Typography>
                  <Typography variant="body2">Delivery Address: {order.deliveryAddress}</Typography>
                  <Typography variant="body2">Status: {order.status}</Typography>
                  
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    >
                      <MenuItem value="Processing">Processing</MenuItem>
                      <MenuItem value="Shipped">Shipped</MenuItem>
                      <MenuItem value="Delivered">Delivered</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrderManagement;
