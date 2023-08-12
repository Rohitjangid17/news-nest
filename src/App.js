import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = (props) => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={10} country='in' category='general' />
          </>
        } />

        <Route exact path="/general" element={
          <>
            <Navbar />
            <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />
          </>
        } />

        <Route exact path="/business" element={
          <>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />
          </>
        } />

        <Route exact path="/entertainment" element={
          <>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />
          </>
        } />

        <Route exact path="/health" element={
          <>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />
          </>
        } />

        <Route exact path="/science" element={
          <>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />
          </>
        } />

        <Route exact path="/sports" element={
          <>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />
          </>
        } />

        <Route exact path="/technology" element={
          <>
            <Navbar />
            <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />
          </>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;