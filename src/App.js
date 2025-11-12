import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAccueil from './components/HeaderAccueil';
import HeaderRecherche from './components/HeaderRecherche';
import Annonces from './components/Annonces';
import Footer from './components/Footer';
import Recherche from './components/Recherche';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Page d'accueil avec HeaderAccueil */}
          <Route path="/" element={
            <>
              <HeaderAccueil />
              <Annonces />
              <Footer />
            </>
          } />
          
          {/* Page recherche avec HeaderRecherche */}
          <Route path="/recherche" element={
            <>
              <HeaderRecherche />
              <Recherche />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;