import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Budget from '../pages/budget';
import CityPage from '../pages/City';  // Correct import for CityPage
import Login from '../pages/Login';
import Register from '../pages/Register';
import Traveling from '../pages/Traveling';
import SearchresultList from '../pages/SearchresultList';
import FilteredOptionsCard from '../pages/FilteredOptionsCard';
import SearchForm from '../pages/SearchForm';
import TravelCard from '../pages/TravelCard';
import Header from '../components/Header/Header';
import NewCard from '../pages/NewCard'
// import TravelCard from '../pages/TravelCard';
import SelectOptions from '../pages/SelectOptions'
import Payment from '../pages/Payment';
import Makepayment from '../pages/Makepayment'

const Routers = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/cities' element={<CityPage />} />  {/* Correct route for CityPage */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/travels' element={<Traveling />} />
      <Route path='/searchresultlists' element={<SearchresultList />} />
      <Route path='/budget' element={<Budget />} />
      <Route path='/filteredoptionscard' element={<FilteredOptionsCard />} />
      <Route path='/searchform' element={<SearchForm />} />
      <Route path='/travelcard' element={<TravelCard />} />
      <Route path="/hotel" element={ <NewCard />} />
      <Route path="/select-option" element={<SelectOptions />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/makepayment" element={<Makepayment/>} />
      
      {/* Redirect to home if the route does not match */}
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};

export default Routers;
