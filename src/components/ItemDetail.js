import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useCart } from './GenericProvider';

const ItemDetail = ({product}) => {

  const  { addToCart } = useCart()

  const onAddCart = (quantity) => {

    addToCart(product, quantity)
   console.log(addToCart);
  
  
      
  }
  

  return (
    <>

    <div>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>{product.price}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <ItemCount stock={product.stock} initial={1} onAddCart={onAddCart} />

      </Card.Body>
    </Card>

    </div>
    </>
  )
}

export default ItemDetail