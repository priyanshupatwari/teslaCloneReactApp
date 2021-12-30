import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import carInfo from '../common/carInfo'

const cars = carInfo.map((car) => car.title)
const uniqueCars = [...new Set(cars)];

export default function Header() {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <>
      <Container>
        <a style={{ width: '160px', height: '25px', zIndex:'11'}}>
          <img src="/images/logo.svg" alt="" style={{ width: '100%', height: '100%' }} />
        </a>
        <Menu>
          {
            uniqueCars.map(
              (elem, index) => <p key={index}><a href="">{elem}</a></p>
            )
          }
        </Menu>
        <RightMenu>
          <p><a href="">Shop</a></p>
          <p><a href="">Acoount</a></p>
          <CustomMenu>
            <MenuIcon onClick={() => setToggleShow(true)} />
          </CustomMenu>
        </RightMenu>
      </Container>

      <BurgerNav show={toggleShow} >
        <CloseWrapper>
          <CloseIcon onClick={() => setToggleShow(false)} />
        </CloseWrapper>
        {
          uniqueCars.map(
            (elem, index) => <li key={index}><a href="">{elem}</a></li>
          )
        }

      </BurgerNav>
    </>
  )
}
// DESKTOP first
const Container = styled.section`
 min-height: 60px;
 width: 100vw;

 position: fixed;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding:0 20px;

 background-color: rgba(255, 255, 255, 0.6);
 -webkit-backdrop-filter: blur(8px);
 backdrop-filter: blur(8px);
 /* background: inherit; */
 
 box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.7);
 overflow: hidden;
 z-index: 10;

 &::after{
  content: '';
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 100px rgba(0,0,0, .4);
  filter: blur(8px);
  margin: -30px; 
  z-index: 9;
 }

`
const Menu = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 flex:1;
 margin: 0 1rem;
 display: none;
 z-index: 11;
 p{
  text-transform: capitalize;
 }
 @media(min-width:1100px){
  display: flex;
 }

`
const RightMenu = styled.div`
 padding: 0 15px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 z-index: 11;
 p{
  padding: 0 7px;
 } 
`
const CustomMenu = styled.div`
 margin-left: 10px;
 cursor: pointer;
  display: block;
 /* @media(min-width:1100px){
  display: none;
 } */
`

const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;

 box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
 background-color: rgba(255, 255, 255, 0.9);
 -webkit-backdrop-filter: blur(3px);
 backdrop-filter: blur(3px); 

 width: 300px;
 z-index:30;
 list-style: none;
 padding: 20px;

 display: flex;
 flex-direction: column;
 text-align: start;
 /* @media(min-width:1100px){
  transform: translateX(100%);
 } */
 transition: transform .2s ease-out;
 transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(100%)'};
 li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    text-transform: capitalize;
    transition: transform 0.4s ;
    &:hover{
      transform:translateX(7px);
    }
    a{
     font-weight: 500;
    }
 }
`
const CloseWrapper = styled.div`
 display: flex;
 justify-content: flex-end;
 cursor: pointer;
`
