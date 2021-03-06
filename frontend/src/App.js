import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from "./GlobalState"
import Header from './components/header/Header';
import Pages from "./components/MainPage/Pages"
import Footer from './components/footer/Footer';
import ScrollToTop from './components/MainPage/support/ScrollTopPage';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <ScrollToTop />
          <Header />
          <Pages />
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
