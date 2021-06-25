import React from 'react'
import { Container,Jumbotron } from 'react-bootstrap'

import Layout from '../../components/Layout'

/**
* @author
* @function 
**/

const Home = (props) => {
  return(
      <>
      
    <Container className="text-center">
        <Jumbotron style={{background: "#fff"}}>
            <h1>
                Welcome to the Admin Dashboard
            </h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Pers
            </p>
        </Jumbotron>
    </Container>
    </>
   )

 }

export default Home;