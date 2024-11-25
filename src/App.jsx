import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import AddProductForm from './components/AddProductForm';
import OrderManagement from './components/OrderManagement';
import About from './components/About';

// Industry 4.0 Supply Chain Management Application
// Leveraging digital transformation in manufacturing and logistics

const SupplyChainApp = () => {
  // State management for dynamic data handling
  const [activeTab, setActiveTab] = useState('consumer');
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Intel Core i5-13400F', 
      price: 180, 
      quantity: 50, 
      supplier: 'Intel',
      specs: 'High-performance processor, 6 cores, 12 threads'
    },
    { 
      id: 2, 
      name: 'AMD Ryzen 5 7600X', 
      price: 220, 
      quantity: 25, 
      supplier: 'AMD',
      specs: 'Advanced CPU, 6 cores, high clock speed'
    },
    { 
      id: 3, 
      name: 'Qualcomm Snapdragon 8', 
      price: 120, 
      quantity: 40, 
      supplier: 'Qualcomm',
      specs: 'Mobile processor, optimal performance'
    }
  ]);
  
  const [orders, setOrders] = useState([]);
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    supplier: '',
    specs: ''
  });
  
  const [orderForm, setOrderForm] = useState({
    productId: '',
    quantity: '',
    customerName: '',
    deliveryAddress: ''
  });

  return (
    <Container 
      sx={{ 
        backgroundColor: '#f4f4f4', 
        minHeight: '100vh', 
        padding: 3 
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          fontWeight: 'bold', 
          color: '#2c3e50',
          marginBottom: 3 
        }}
      >
        Industry 4.0 - Supply Chain Management System
      </Typography>

      <Tabs 
        value={activeTab} 
        onChange={(e, newValue) => setActiveTab(newValue)} 
        indicatorColor="primary" 
        textColor="primary"
        aria-label="Supply Chain Roles"
        sx={{ 
          marginBottom: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }} 
      >
        <Tab label="Consumer Interface" value="consumer" />
        <Tab label="Producer Dashboard" value="producer" />
        <Tab label="About" value="about" />
      </Tabs>

      {activeTab === 'consumer' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ProductList 
            products={products} 
            setOrderForm={setOrderForm} 
          />
          <OrderForm 
            orderForm={orderForm} 
            setOrderForm={setOrderForm} 
            placeOrder={(order) => {
              const updatedOrders = [...orders, { 
                ...order, 
                id: orders.length + 1,
                timestamp: new Date().toISOString(),
                status: 'Pending'
              }];
              setOrders(updatedOrders);
            }}
            products={products}
          />
        </Box>
      )}

      {activeTab === 'producer' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <AddProductForm 
            newProduct={newProduct} 
            setNewProduct={setNewProduct} 
            addProduct={(product) => {
              const updatedProducts = [...products, {
                ...product,
                id: products.length + 1
              }];
              setProducts(updatedProducts);
            }}
          />
          <ProductList products={products} />
          <OrderManagement 
            orders={orders} 
            updateOrderStatus={(orderId, newStatus) => {
              const updatedOrders = orders.map(order => 
                order.id === orderId ? { ...order, status: newStatus } : order
              );
              setOrders(updatedOrders);
            }} 
          />
        </Box>
      )}

      {activeTab === 'about' && (
        <Box sx={{ 
          padding: 3, 
          backgroundColor: 'white', 
          borderRadius: 2,
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <About />
        </Box>
      )}
    </Container>
  );
};

export default SupplyChainApp;