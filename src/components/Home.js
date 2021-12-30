import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Section from './Section.jsx';
import carInfo from '../common/carInfo'
const Home = () => {

 return (
  <div>
   <Container>
    {
     carInfo.map((elem, index) => {
      const { id, title, description, image,
       range, time, topSpeed, peakPower } = elem;
      return (
       <Section
        id = {id}
        title={title}
        desc={description}
        bgImg={image}
        range = {range}
        time = {time}
        topSpeed = {topSpeed}
        peakPower = {peakPower}

        leftBtnText={'Order Online'}
        rightBtnText={'Check Inventory'}
       />
      )
     })
    }
   </Container>
  </div>
 )
}

export default Home

const Container = styled.div`
 height: 100vh;
`