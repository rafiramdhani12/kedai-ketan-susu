import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/menu/menu';
import DetailMenu from './pages/menu/DetailMenu';
import Monitor from './pages/monitor';
import Saran from './pages/saran';
import ScrollToTop from './components/ScrolltoTop';
import FaQ from './components/FaQ';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/saran' element={<Saran />} />
					<Route path='/FaQ' element={<FaQ />} />
					<Route path='/monitor' element={<Monitor />} />
					<Route path='/menu/:id' element={<DetailMenu />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
