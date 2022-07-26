import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Navbar from './view/Navbar/Navbar';
import Home from './view/Home/Home';
import Auth from './view/Auth/Auth';
import PostDetails from './view/PostDetails/PostDetails';

const App = () => {

    
  const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            
            <Container maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={ <Navigate to="/posts" />} />
                    <Route path="/posts" exact element={< Home />} />
                    <Route path="/posts/search" exact element={< Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/auth" exact element={  (!user ? <Auth /> : <Navigate to="/posts" />)} />
                </Routes>
            </Container>
        </BrowserRouter>
        
    );
}
export default App;