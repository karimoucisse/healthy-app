import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`
const IconsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
`
const Github = styled(GitHubIcon) `
  font-size: 35px !important;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`
const Linkedin = styled(LinkedInIcon) `
  font-size: 35px !important;
  cursor: pointer;
  transition: .5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`
const LeftArrow = styled(KeyboardArrowLeftIcon) `
  font-size: 40px !important;
  border: 1px solid #333;
  cursor: pointer;
  filter: invert(1);
  transition: 0.5s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 1110px) {
    filter: invert(0);
  }                           
`
const RightArrow = styled(KeyboardArrowRightIcon) `
  font-size: 40px !important;
  border: 1px solid #333;
  cursor: pointer;
  filter: invert(1);
  transition: 0.5s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 1110px) {
    filter: invert(0);
  }
`
const Controls = styled.div`
  display: flex;
  gap: 30px;
`
const Icons = ({index, setIndex}) => {

    const onArrowClick = (direction) => {
        if(direction === "left") {
            index !== 0 ? setIndex(index - 1) : setIndex(2)
        } else {
            index !== 2 ? setIndex(index + 1) : setIndex(0)
        }
    }
  return (
    <Container>
        <IconsContainer>
         <Github/>
         <Linkedin/>
        </IconsContainer>
        <Controls>
         <LeftArrow onClick={() => onArrowClick("left")}/>
         <RightArrow onClick={() => onArrowClick("right")}/>
        </Controls>
    </Container>
  )
}

export default Icons