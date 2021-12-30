// it is a template
import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
const Section = (prop) => {
  const { id, title, desc, bgImg, range, time, topSpeed, peakPower,
    leftBtnText, rightBtnText } = prop;
  console.log(`id is `, id)
  const [hover, setHover] = useState(false)
  return (
    <div id={`ID-${id}`}>
      <Wrap bgImage={bgImg}
        onClick={() => setHover(!hover)}

      >
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{desc} .</p>
          </ItemText>
        </Fade>
        {
          range &&
          (<div className="InfoContain">
            <div className="info" style={{ transform: `${hover ? 'translateX(-10%)' : 'translateX(100%)'}` }}>
              <li><span> Range </span> <span> {range} miles</span></li>
              <li><span> Time </span> <span> {time}s</span></li>
              <li><span> Top Speed </span> <span> {topSpeed}miph</span></li>
              <li><span> Peak Power </span> <span> {peakPower}hp</span></li>
            </div>
          </div>)
        }
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>
                {leftBtnText}
              </LeftButton>
              {rightBtnText &&
                <RightButton>
                  {rightBtnText}
                </RightButton>
              }
            </ButtonGroup>
          </Fade>
          <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
      </Wrap>
    </div>

  )
}

export default Section;

const Wrap = styled.div`
 max-width: 100vw ;
 height: 100vh;
 overflow: hidden;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image: ${(props) => `url('/images/${props.bgImage}')`};

 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  text-transform: capitalize;
`
const Buttons = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonGroup = styled.div`
  margin: 5px 10px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const LeftButton = styled.div`
  background: rgb(23, 26, 32);
  height:38.5px;
  width: 226.5px;
  color: white;
  display: grid;
  place-items: center;
  border-radius: 25px;
  opacity: 0.85;
  text-transform: capitalize;
  cursor: pointer;
  font-size: .9rem;
  margin: .7rem;
  &:hover{
  background: #171a20a4;
  transform: scale(1.05);
  }
  &:active{
  transition: transform 50ms ease-out;
  transform: scale(0.95);
  }
`
const RightButton = styled(LeftButton)`
  background-color: white;
  color: #393c41;
  &:hover{
    background: #ffffffb2;
  }
`

const DownArrow = styled.img`
 margin-top: 20px;
 height: 40px;
 animation: animateDown 1.5s infinite ;
`