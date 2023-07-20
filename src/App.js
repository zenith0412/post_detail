import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Post from './components/Post'
import Comments from './components/Comments'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/Common.css'

const App = () => {
  return (
    <main className='App'>
      <BrowserRouter>
        <Navbar />
        <Post />
        <Comments />
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App