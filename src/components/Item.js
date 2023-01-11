import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({product}) => {

  console.log('ITEM',product)

  return (
    <>
    <div>
     <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Link to={'/products/' + product.id}>
        <Button variant="primary">Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Item

