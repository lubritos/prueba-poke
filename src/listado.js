import { useEffect, useState } from "react";
import Card from "./components/Card";
import pokemons from "./services/pokemon";
import styled from "styled-components";

const CardsPokes = styled.div`
  width: 960px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
`;

const Listado = () => {
  const [pokes, setPokes] = useState([]);
  function mostrarPokemons() {
    pokemons.get().then((resp) => setPokes(resp.data));
  }

  useEffect(() => {
    mostrarPokemons();
  });
  return (
    <CardsPokes>
      {pokes.map((pokemon) => {
        return <Card {...pokemon} />;
      })}
    </CardsPokes>
  );
};
export default Listado;
