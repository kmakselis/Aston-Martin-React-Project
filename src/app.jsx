import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './pages/home-page';
import ModelsPage from './pages/models-page';
import ContactsPage from './pages/contacts-page';
import ErrorPage from './pages/error-page';
import CartContext from './contexts/cart-context';

const App = () => (
  <BrowserRouter>
    <CartContext.Provider value="test context value">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </CartContext.Provider>
  </BrowserRouter>
);

export default App;
