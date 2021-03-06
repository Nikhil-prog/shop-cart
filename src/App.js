import './App.css';
import React from 'react';
import homeScreen from './screen/homeScreen';
import productScreen from './screen/productScreen';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import cartScreen from './screen/cartScreen';

function App() {

	/******************************Sider Bar******************************/
	const sideBarOpen = () => {
		document.querySelector('.sidebar').classList.add('open');
	};

	const sideBarClose = () => {
		document.querySelector('.sidebar').classList.remove('open');
	};
	/******************************Main App******************************/
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className="grid-container">

				<header className="header">
					<div className="brand">
						<button onClick={sideBarOpen}>
							&#9776;
						</button>
						<Link to="/shop-cart/">Shop Cart</Link>
					</div>
					<div className="header-links">
						<Link to="/shop-cart/cart/">Cart</Link>
						<a href="signin.html">Sign in</a>
					</div>
				</header >

				<aside className="sidebar">
					<h2 className="sidebar-heading">Categories</h2>
					<button className="sidebar-close-button" onClick={sideBarClose}>x</button>
					<ul>
						<li>
							<Link to="/shop-cart/category/electronics">Electronics</Link>
						</li>
						<li>
							<Link to={"/shop-cart/category/furnitures"}>Furnitures</Link>
						</li>
						<li>
							<Link to={"/shop-cart/category/kitchen_products"}> Kitchen Products</Link>
						</li>
					</ul>
				</aside>

				<main className="main">
					<div className="content">
						<Route path="/shop-cart" exact={true} component={homeScreen} />
						<Route path="/shop-cart/category/:categories?" component={homeScreen} />
						<Route path="/shop-cart/product/:id" component={productScreen} />
						<Route path="/shop-cart/cart/:id?" component={cartScreen} />
					</div>
				</main>

				<footer className="footer">
					All rights reserved.
				</footer>

			</div >
		</BrowserRouter>
	);
}

export default App;