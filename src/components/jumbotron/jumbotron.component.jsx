
import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../../assets/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
     background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 350px;
    position: relative;
    z-index: -2;
    margin-bottom: 0 !important;
  }
  
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container style={{textAlign: "center"}}>
                <h1 style={{fontSize: "60px", fontWeight: "600", marginTop: "50px"}}>X-REBEL</h1>
                <p style={{fontSize: "21px"}}>Shop Our Latest Fashion</p>
            </Container>
        </Jumbo>
    </Styles>
)