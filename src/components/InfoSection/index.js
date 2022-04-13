import React from 'react'
import { Button } from '../ButtonElements'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({id, imgStart, topLine, headline, description, buttonLabel, img, alt, dark}) => {
  return (
    <>
      <InfoContainer dark={dark} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading dark={dark}>{headline}</Heading>
                        <Subtitle dark={dark}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80} dark={dark ? 1 : 0}>
                                {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={img} alt={alt}/>
                    </ImgWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection