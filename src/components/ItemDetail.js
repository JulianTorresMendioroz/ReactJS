import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) => {

  console.log('ITEM',product)

  return (
    <>

    <div>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>{product.price}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>

      </Card.Body>
    </Card>

    </div>
    </>
  )
}

export default ItemDetail