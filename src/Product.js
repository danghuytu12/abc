import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function Product({ title, price, rating, image, id }) {



    return (
        <Container>
            <Image  src={image}/>
            <Title>
                {title}
            </Title>
            <Price>
                Giá sản phẩm: {price}  đ
            </Price>

            <Rating>
                
            </Rating>
            <ActionSection>
                

            </ActionSection>
            <ActionSection>
                <AddToCartButton

                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span``
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
