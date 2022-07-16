import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
 
`
const Logo = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 30px;
  color: #333;
`
const LogoSpan = styled.span`
  color: limegreen;
`
const List = styled.ul`
  position: relative;
  display: flex;
  gap: 10px;
`
const Element = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  font-size: 18px;
  padding: 0 15px;
  cursor: pointer;
  color: #333;
  &:nth-child(3) {
    color: white;
  }
  &:nth-child(4) {
    color: white;
  }
`
const Header = () => {
  return (
    <Container>
      <Logo>Green<LogoSpan>Foods</LogoSpan></Logo>
      <List>
        <Element>Accueil</Element>
        <Element>Menu</Element>
        <Element>à propos</Element>
        <Element>Contact</Element>
      </List>
    </Container>
  )
}

export default Header