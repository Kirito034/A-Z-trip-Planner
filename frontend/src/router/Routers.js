import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Budget from '../pages/budget';
import City from '../pages/City';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Traveling from '../pages/Traveling';
import SearchresultList from '../pages/SearchresultList';

const Routers = () => {
  return (
    <Routes>
    <Route path ='/' element = {<Navigate to = '/home' /> } />
    <Route path = '/home' element={<Home/>}/>
    <Route path = '/Budget' element={<Budget/>}/>
    <Route path = '/citys' element={<City/>}/>
    <Route path = '/Login' element={<Login/>}/>
    <Route path = '/Register' element={<Register/>}/>
    <Route path = '/travels' element={<Traveling/>}/>
    <Route path = '/SearchresultLists' element={<SearchresultList/>}/>
</Routes>
)
}

export default Routers