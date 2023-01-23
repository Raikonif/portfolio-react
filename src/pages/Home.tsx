import React, { useEffect, useState } from "react";
import { getPokemon } from "./pokemon/pokeApi";
import Card from "~/components/Card";
import { TestingService } from "../services/testing.service";

const Home = () => {
	const [poke, setPoke] = useState({} as any);
	const fetchPoke = async () => {
		const { data } = await TestingService();
		setPoke(data);
	};
	useEffect(() => {
		try {
			fetchPoke();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<div>
			<div className="">{JSON.stringify(poke)}</div>
			<h1>Pokemons Home</h1>
			{/* <Card  /> */}
		</div>
	);
};

export default Home;
