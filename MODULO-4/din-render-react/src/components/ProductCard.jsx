import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard(props) {
    console.log(props)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{height: "300px", objectFit:"cover"}} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          ${props.price}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}
