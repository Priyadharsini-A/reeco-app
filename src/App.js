import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import OrderBar from './components/OrderBar';
import InfoBar from './components/InfoBar';
import ProductList from './components/ProductList';


function App() {
  return (
    <>
    <AppBar/>
    <OrderBar/>    
    <InfoBar/>   
    <ProductList/>
    
    </>
  );
}

export default App;
