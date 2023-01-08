import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({product}) => {

  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item

