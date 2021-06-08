import React from "react";

// Styles
import "rsuite/dist/styles/rsuite-default.css";
import "./styles/style.scss";

// Router
import { Route, Switch } from "react-router-dom";

// Pages and Components
import Home from "./pages/Home";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Checkout from "./pages/Checkout";
import WishList from "./pages/WishList";
import SearchResult from "./pages/SearchResult";
import FilterResult from "./pages/FilterResult";
import Profile from "./pages/Profile";

const App = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/product/:id">
					<Detail />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
				<Route exact path="/create">
					<Create />
				</Route>
				<Route exact path="/wishlist">
					<WishList />
				</Route>
				<Route exact path="/checkout">
					<Checkout />
				</Route>
				<Route exact path="/search">
					<SearchResult />
				</Route>
				<Route exact path="/filter">
					<FilterResult />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
