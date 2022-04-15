import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard';
import Layout from './Component/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
