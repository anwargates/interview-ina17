import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainTemplate } from './components/templates/MainTemplate'
import Home from './pages/Home'
import { useAgentStore } from './global/store'

function App() {

  const { agents, filterRole, setAgents, setFilterRole } = useAgentStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://staging.ina17.com/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setAgents(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setAgents]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<MainTemplate />}>
          <Route
            index
            element={<Home />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
