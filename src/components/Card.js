import styled from "styled-components";
const Title = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const CardPokemon = styled.div`
  display: flex;
  flex-direction: row;
  width: 18rem;
  height: 15rem;
  margin: 1rem;
  background-color: #91cafe;
  justify-content: space-around;
  padding: 0.5rem;
  align-items: center;
  border-radius: 2rem;
`;
const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 0.5rem;
`;
const Items = styled.div`
  background-color: #7c538c;
  border-radius: 2rem;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0.5rem;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10rem;
  margin-left: 0.8rem;
`;

const Card = ({ name, ThumbnailImage }) => {
  return (
    <CardPokemon>
      <Name>
        <Title>{name}</Title>
        <Items>Abilitis</Items>
        <Items></Items>
      </Name>
      <ImgCard>
        <img src={ThumbnailImage} alt="" width={150} />
      </ImgCard>
    </CardPokemon>
  );
};
export default Card;
