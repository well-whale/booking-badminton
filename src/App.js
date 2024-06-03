import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginAndSignupForm from './components/login/Login';
import LoginOTP from './components/login/LoginOTP';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleOAuth from './components/login/Google_OAuth';
import Header from './components/user/header/Header';
import Footer from './components/user/footer/Footer';
import Search from './components/user/search/Search';
import HomePage from './components/user/home/Home';
import CourtDetail from './components/user/courts/CourtDetail';
import ListCourt from './components/user/courts/ListCourt';
import CourtReview from './components/user/courts/CourtReview';
import TimeSlots from './components/user/time/TimeSlot';
import Payment from './components/user/payment/Payment';
function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={<>
            <Header />
            <LoginAndSignupForm />
          </>}
        />
        <Route
          path="/"
          element={<>
            <Header />
            <HomePage />
            <Footer />
          </>}
        />
        <Route
          path="googleoauth"
          element={<>
            <GoogleOAuthProvider clientId="21328047732-02qfv7vb9ku5n0ov51v8d3k8vqb7e1ab.apps.googleusercontent.com">
              <GoogleOAuth />
            </GoogleOAuthProvider>
          </>}
        />
        <Route
          path="loginotp"
          element={<LoginOTP />}
        />
        <Route
          path="view"
          element={
            <>
              <Header />
              <CourtDetail />
              <ListCourt />
              <CourtReview />
              <Footer />
            </>}
        />
        <Route
          path="booking"
          element={
            <>
              <Header />
              <TimeSlots />
            </>}
        />
        <Route 
        path="payment" 
        element={<>
        <Header/>
        <Payment />
        </>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
