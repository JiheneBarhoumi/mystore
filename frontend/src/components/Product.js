import React from 'react'
import { Card ,Container} from 'react-bootstrap'

const Product = ({product}) => {
    return (
      
            <Card className='my-3 y-3 rounded'>
                 <a href={`/product/${product._id}`}>
                  <Card.Img src={product.image} variant='top'/>
                 </a>
           
            <Container>
            <Card.Body>
            <a href={`/product/${product._id}`}>
                  <Card.Title as='div'>
                    <strong>{product.name}</strong>
                  </Card.Title>
            </a>
            <Card.Text as='div'>
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>

            <Card.Text as='h3'>
               ${product.price}
            </Card.Text>

            </Card.Body>
            </Container>
            </Card>
        
    )
}

export default Product
