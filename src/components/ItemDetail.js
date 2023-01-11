import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({products}) => {

  console.log('ITEM',products)

  return (
    <>


    <div>

    {products.map((prod)=>{
    return(
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Title>{prod.price}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
        // <ItemList products={prod} key={prod.id}/> 
        
    )
})}

   
    </div>
    </>
  )
}

export default ItemDetail