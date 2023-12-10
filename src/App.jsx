import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Home from './Components/Pages/Home';
import { Appcontext } from './Components/Hooks/Context';
import Questions from './Components/Quiz/Question';
import Results from './Components/Pages/Results';

function App() {
  const client = new QueryClient();
  const [counter, setCounter] = useState(0);
  return (
    <Appcontext.Provider value={{ counter, setCounter }}>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/Results" element={<Results />} />
            <Route path="/Question/:id" element={<Questions />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Appcontext.Provider>
  );
}

export default App;
