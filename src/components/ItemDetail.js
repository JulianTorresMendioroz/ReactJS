import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {

  console.log('ITEM',product)

  const onAddCart = (quantity) => {

    alert(`Compraste ${quantity} productos`)
      
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
        <ItemCount stock={5} initial={1} onAddCart={onAddCart} />

      </Card.Body>
    </Card>

    </div>
    </>
  )
}

export default ItemDetail