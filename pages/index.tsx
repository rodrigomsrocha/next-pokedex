import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PokemonPreview } from "../src/components/PokemonsPreview/PokemonPreview";

const Pokedex = require("pokeapi-js-wrapper");

import styles from "../styles/index.module.scss";

type PokemonInfo = {
  name: string;
  id: string;
  img: string;
};

type Pokemons = {
  pokemons: PokemonInfo[];
};

export default function Home({ pokemons }: Pokemons) {
  return (
    <div>
      <Head>
        <title>Pokedex | Pokemons</title>
      </Head>

      <main className={styles.container}>
        {pokemons.map((pokemon) => (
          <PokemonPreview
            key={pokemon.id}
            name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            id={pokemon.id}
            img={pokemon.img}
          />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const P = new Pokedex.Pokedex();
  const interval = {
    offset: 0,
    limit: 12,
  };

  const { results } = await P.getPokemonsList(interval);
  const pokemonsResults = await results.map(async (pokemon) => {
    const { name } = pokemon;
    const info = await P.getPokemonByName(name);
    return {
      name: info.name,
      id: info.id.toString(),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`,
    };
  });
  const pokemons = await Promise.all(pokemonsResults);

  return {
    props: {
      pokemons,
    },
  };
};
