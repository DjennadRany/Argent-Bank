import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header.jsx'; // Correction du chemin
import Footer from './components/common/Footer/Footer.jsx'; // Correction du chemin
import HomePage from './pages/homePage/HomePage.jsx'; // Correction du chemin
import UserProfile from './pages/profilePage/ProfilePage.jsx'; // Correction du chemin
import SignInPage from './pages/signupPage/SignupPage.jsx'; // Correction du chemin
import TransactionPage from './pages/transactionPage/TransactionPage.jsx'; // Ajouté si nécessaire
import LoginPage from './pages/loginPage/LoginPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;