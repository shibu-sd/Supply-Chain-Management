import React from 'react';
import { TextField, Button, Card, CardContent, CardHeader } from '@mui/material';

const OrderForm = ({ orderForm, setOrderForm, placeOrder, products }) => {
  const handleSubmit = () => {
    const product = products.find((p) => p.id === parseInt(orderForm.productId));
    
    if (product && product.quantity >= parseInt(orderForm.quantity)) {
      const newOrder = {
        id: Date.now(),
        ...orderForm,
        status: 'Processing',
      };
      placeOrder(newOrder);

      alert('Order placed successfully! Your order is now being processed.');

      setOrderForm({
        productId: '',
        quantity: '',
        customerName: '',
        deliveryAddress: '',
      });
    } else {
      alert('Insufficient stock or invalid product');
    }
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardHeader title="Place Order" />
      <CardContent>
        <TextField
          label="Product ID"
          variant="outlined"
          fullWidth
          value={orderForm.productId}
          onChange={(e) => setOrderForm({ ...orderForm, productId: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Quantity"
          type="number"
          variant="outlined"
          fullWidth
          value={orderForm.quantity}
          onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Customer Name"
          variant="outlined"
          fullWidth
          value={orderForm.customerName}
          onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Delivery Address"
          variant="outlined"
          fullWidth
          value={orderForm.deliveryAddress}
          onChange={(e) => setOrderForm({ ...orderForm, deliveryAddress: e.target.value })}
          margin="normal"
        />
        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleSubmit} 
          sx={{ marginTop: 2 }}
        >
          Place Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderForm;
