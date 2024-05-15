import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import ProductList from './ProductList';
import TablePage from './TablePage'; // Assuming you have a TablePage component
import AddProduct from './AddProduct'; // Assuming you have an AddProduct component

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const token = localStorage.getItem("token");
  const LogOut = async () => {
    if (window.confirm("Confirm You Want to Log Out")) {
      await localStorage.removeItem("token");
      logout(); // Assuming logout is a function provided by your authentication context to clear user session or state
      navigate("/");
    }
  };
  
  return (
    <>
      <AppBar position="static" className="header" sx={{ height: 100 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button onClick={() => navigate("/table")} startIcon={<TableChartIcon />} color="inherit" sx={{ textDecoration: 'none' }}>
            Table Page
          </Button>
          <Button onClick={() => navigate("/productlist")} startIcon={<ProductList />} color="inherit" sx={{ textDecoration: 'none' }}>
            Product List
          </Button>
          <Button onClick={() => navigate("/add-product")} startIcon={<AddCircleOutlineIcon />} color="inherit" sx={{ textDecoration: 'none' }}>
            Add Product
          </Button>
          <Button onClick={LogOut} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container className="dashboard-container" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} className="main-content">
            <Routes>
              <Route path="/table" element={<TablePage />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
