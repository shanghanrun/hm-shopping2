import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {Container, Row, Col} from 'react-bootstrap';

const ProductAll = () => {
  const [products, setProducts] = useState([])
  const getProducts=async()=>{
    let url = `http://localhost:5000/products`
    let response = await fetch(url);
    let data = await response.json()
    console.log('products : ', data)
    setProducts(data)
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
	<div>
    <Container>
      <Row>
        {products.map((product,i) =>(
          <Col lg={3} key={i}>
            <Card item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default ProductAll