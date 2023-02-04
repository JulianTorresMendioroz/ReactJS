import React from 'react'
import { useCart } from './GenericProvider';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export const Cart = () => {

  const  { cart, totalPrice, deleteProduct } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <>
    <div>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Title>{item.price}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="success">Eliminar producto{deleteProduct()}</Button>
       
      
      </Card.Body>
    </Card>

    </div>
       
        <h1>PRECIO TOTAL: {totalPrice()}</h1>
  
        
        </>
      ))}
    
    </div>
  )
}
