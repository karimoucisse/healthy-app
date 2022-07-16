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

`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`
const App = () => {
  return (
    <Container>
      <Header/>
      <Content>
        <Banner/>
      </Content>
      <Icons/>
    </Container>
  )
}

export default App