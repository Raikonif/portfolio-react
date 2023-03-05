import React, { useEffect, useState } from "react";
import { getPokemon } from "./pokemon/pokeApi";
import Card from "~/components/Card";
import { TestingService } from "../services/testing.service";
import ApiService from "../services/index";
import Navbar from "~/layouts/portfolio/Navbar";

function Home() {
  const [info, setInfo] = useState({} as any);
  const fetchInfo = async () => {
    const response = await ApiService.getResource("/posts/1");
    return response.data;
  };
  useEffect(() => {
    try {
      setInfo(fetchInfo());
      console.log(info);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <section className="">
        <div className="">{JSON.stringify(info)}</div>
        <h1>Pokemons Home</h1>
        {/* <Card  /> */}
      </section>
    </div>
  );
}

export default Home;
