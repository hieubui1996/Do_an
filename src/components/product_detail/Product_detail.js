import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';

export default function Product_detail(props) {
  const { product } = props;
  return (
    
      <Col sm={6} md={4} lg={3}>
        <div className='product-detail'>
          <Link to ={`/product-detal/${product.id}`}>
            <Card>
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {product.name}
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </Link>
        </div>
      </Col>
    
  )
}
