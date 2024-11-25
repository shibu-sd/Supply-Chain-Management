import React from 'react';
import { TextField, Button, Card, CardContent, CardHeader } from '@mui/material';

const AddProductForm = ({ newProduct, setNewProduct, addProduct }) => {
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.quantity || !newProduct.supplier) {
      alert('Please fill in all product details');
      return;
    }

    const product = {
      id: Date.now(),
      ...newProduct,
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity),
    };

    addProduct(product);
    setNewProduct({ name: '', price: '', quantity: '', supplier: '' });
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardHeader title="Add New Product" />
      <CardContent>
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Price"
          type="number"
          variant="outlined"
          fullWidth
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Quantity"
          type="number"
          variant="outlined"
          fullWidth
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Supplier"
          variant="outlined"
          fullWidth
          value={newProduct.supplier}
          onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
          margin="normal"
        />
        <Button 
          variant="contained" 
          fullWidth 
          onClick={handleAddProduct} 
          sx={{ marginTop: 2 }}
        >
          Add Product
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddProductForm;
