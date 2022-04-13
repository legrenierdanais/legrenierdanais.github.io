import React from 'react'
import Icon1 from '../../assets/building_websites.svg'
import Icon2 from '../../assets/off_road.svg'
import Icon3 from '../../assets/team_spirit.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

const Services = () => {
  return (
    <>
      <ServicesContainer id= 'services'>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1}/>
                  <ServicesH2>Reduce Expenses</ServicesH2>
                  <ServicesP>We help reduce your fees and increase your revenues</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2}/>
                  <ServicesH2>Virtual Offices</ServicesH2>
                  <ServicesP>You can access our platform online anywhere</ServicesP>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3}/>
                  <ServicesH2>Premium Benefits</ServicesH2>
                  <ServicesP>We help reduce your fees and increase your revenues</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services