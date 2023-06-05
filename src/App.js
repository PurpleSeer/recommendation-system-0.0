import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import { SearchContext, UserContext } from './context';
import Search from './components/pages/Search';
import Profile from './components/pages/Profile';



function App() {

  const [me, setMe] = useState({})
  const [searchQuery, setSearchQuery] = useState({ searchQuery: '' })

  return (
    <UserContext.Provider value={{
      me,
      setMe
    }}>
      <SearchContext.Provider value={{
        searchQuery,
        setSearchQuery
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path='/search' element={<Search />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </UserContext.Provider>

  )

}


export default App;