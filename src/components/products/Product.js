import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { Container, Row } from 'reactstrap'

import Product_detail from '../product_detail/Product_detail';


export default function Product() {
  const [data, setData] = useState([]);
  const url= "https://658c2928859b3491d3f59b99.mockapi.io/list"
  useEffect(()=> {
    axios.get(url).then(function(res){
      setData(res.data)
    })
  }, [])
  return (
    <div>
        <Container>
          <Row>
          {data.map((item, index) =>(
            <Product_detail key={index} product ={item} />
          ) )}
          </Row>
        </Container>
    </div>
  )
}
