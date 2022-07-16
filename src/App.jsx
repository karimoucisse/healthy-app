import styled from "styled-components"
import Header from "./components/Header"

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
const App = () => {
  return (
    <Container>
      <Header/>
    </Container>
  )
}

export default App