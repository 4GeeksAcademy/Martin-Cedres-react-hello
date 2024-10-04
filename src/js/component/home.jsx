import React from "react";

import Navbar from "./Navbar";

import Hero from "./Hero";

import Card from "./Card";

import Footer from "./Footer";

//create your first component

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<Navbar></Navbar>
				<Hero></Hero>
				<div className="col">
					<Card title="Primera Carta" text="Este es el primer texto" image="https://picsum.photos/500/325?random=1" />
				</div>
				<div className="col">
					<Card title="Segunda Carta" text="Este es el segundo texto" image="https://picsum.photos/500/325?random=2" />
				</div>
				<div className="col">
					<Card title="Tercera Carta" text="Este es el tercer texto" image="https://picsum.photos/500/325?random=3" />
				</div>
				<div className="col">
					<Card title="Cuarta Carta" text="Este es el cuarto texto" image="https://picsum.photos/500/325?random=4" />
				</div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
