import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/menu/menu';
import DetailMenu from './pages/menu/DetailMenu';
import Monitor from './pages/monitor';
import Saran from './pages/saran';
import Model from './pages/Model';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/model' element={<Model />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/saran' element={<Saran />} />
					<Route path='/monitor' element={<Monitor />} />
					<Route path='/menu/:id' element={<DetailMenu />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
