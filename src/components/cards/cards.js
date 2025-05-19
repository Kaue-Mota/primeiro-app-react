import Card from "../card/card";
import Button from "../button/button";
const cardsTitles = [
  "Card 1",
  "Card 2",
  "Card 3",
];

const showCardColor = (color) => {
console.log(color);

}


const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>
      <div>
        {cardsTitles.map((title, index) => (
          <Card key={index} showCardColor={showCardColor} >
            <h3>{title}</h3>
            <p>Esse é o meu card</p>
            <Button label="Clique aqui" />
          </Card>
        ))}

        <Card color="blue" showCardColor={showCardColor}>
          <h3>card fundo azul</h3>
          <p>Esse é o meu card</p>
          <Button label="Clique aqui" />
        </Card>
      </div>
    </div>
  );
};

export default Cards;
