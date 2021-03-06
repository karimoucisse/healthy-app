import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  @media (max-width: 1110px) {
    padding: 0;
  }
`
const Logo = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 30px;
  color: #333;
  cursor: pointer;
`
const LogoSpan = styled.span`
  color: limegreen;
`
const List = styled.ul`
  position: relative;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 23px;
  @media (max-width: 1110px) {
    display: initial;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #fff;
    z-index: 10000;
    padding: 100px 0;
  }
`
const Element = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  list-style-type: none;
  text-transform: uppercase;
  font-size: 18px ;
  padding: 8px 15px;
  cursor: pointer;
  color: #333;
  text-align: center;
  &:nth-child(${(props) => props.number}) {
    &::before {
      width: 100%;
    }
  }
  &:nth-child(3) {
    color: white;
  }
  &:nth-child(4) {
    color: white;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    background-color: limegreen;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }
  &:hover:before {
    width: 100%;
  }

  @media (max-width: 1110px) {
    padding: 20px;
    color: #333 !important;
    font-size: 36px;
    text-align: center;
  }
`
const MenuIcon = styled.span`
  display: none;
  @media (max-width: 1110px) {
    display: initial;
    position: fixed;
    right: 50px;
    cursor: pointer;
    padding: 8px;
    z-index: 10000;
  }
`
const Header = () => {

  const [number, setNumber] = useState(1)

  return (
    <Container>
      <Logo>Green<LogoSpan>Foods</LogoSpan></Logo>
      <List>
        <Element 
          onClick={() => setNumber(1)}
          number= {number}
          >Accueil</Element>
        <Element 
          onClick={() => setNumber(2)}
          number= {number}
          >Menu</Element>
        <Element 
          onClick={() => setNumber(3)}
          number= {number}
          >?? propos</Element>
        <Element 
          onClick={() => setNumber(4)}
          number= {number}
          >Contact</Element>
      </List>
      <MenuIcon/>
    </Container>
  )
}

export default Header