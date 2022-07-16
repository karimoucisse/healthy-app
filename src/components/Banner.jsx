import styled from "styled-components"
import Content from "../Content"


const BannerText = styled.div`
  position: relative;
  max-width: 500px;
  margin-right: 50px;
  @media (max-width: 1110px) {
    max-width: 100%;
    padding-right: 0;
  }
`
const Title = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2em;
  color: #333;
  @media (max-width: 1110px) {
    font-size: 30px;
  }
`
const Paragraph = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.8em;
  margin: 20px 0 ;
`

const BannerImg = styled.div`
  position: relative;
  width: 440px;
  height: 440px;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 1110px) {
    width: 100%;
    height: 50vh;
    margin: 20px 0 ;
  }
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
`
const More = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  max-width: 150px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    background-color: limegreen;
    z-index: -1;
    transition: 0.5s ease-in-out; 
  }
  &:hover:before {
    width: 100%;
  }

`
const Banner = ({index}) => {
  return (
    <>
        <BannerText>
            <Title>{Content[index].firstTitle} <br/> {Content[index].secondTitle}</Title>
            <Paragraph>
                {Content[index].paragraph}
            </Paragraph>
            <More>Voir plus</More>
        </BannerText>
        <BannerImg>
            <Img src= {`../image/photo${index+1}.jpg`}/>
        </BannerImg>
    </>
  )
}

export default Banner