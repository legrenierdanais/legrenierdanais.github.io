import React from 'react'
import Video from '../../assets/building_websites.svg'
import { Button } from '../ButtonElements'
import { ContentBg, ContentBody, ContentBtnWrapper, ContentContainer, ContentH1, ContentP, VideoBg } from './ContentElements'

const ContentSection = () => {
  
  return (
    <ContentContainer id='home'>
        <ContentBg>
            <VideoBg playsInline autoplay loop muted src={Video} type='video/mp4' />
        </ContentBg>
        <ContentBody>
            <ContentH1>Virtual Banking Made Easy</ContentH1>
            <ContentP>
                Sign up for a new account today and receive €250 in credit towards your next payment.
            </ContentP>
            <ContentBtnWrapper>
                <Button to='signup' primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Get started</Button>
            </ContentBtnWrapper>
        </ContentBody>
    </ContentContainer>
  )
}

export default ContentSection