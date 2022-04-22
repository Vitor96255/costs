import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/company" exact element={<Company />} />
          <Route path="/newproject" exact element={<NewProject />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
