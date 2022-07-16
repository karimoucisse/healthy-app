import { useState } from "react"
import styled from "styled-components"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Icons from "./components/Icons"

const Container = styled.div`
  position: relative;
  padding: 0 100px;
  min-height: 100vh;

&::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background-color: #333;
  z-index: -2;

}

@media (max-width: 1110px) {
  padding: 20px 50px;
  &::before {
    display: none;
  }
}
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1110px) {
    margin-top: 0;
    flex-direction: column-reverse;
  }
`
const App = () => {
  const [index, setIndex] = useState(0)

  return (
    <Container>
      <Header/>
      <Content>
        <Banner index= {index}/>
      </Content>
      <Icons setIndex= {setIndex} index= {index}/>
    </Container>
  )
}

export default App