import React from 'react'
import Icon1 from '../../assets/images/credit_card.svg'
import Icon2 from '../../assets/images/data.svg'
import Icon3 from '../../assets/images/bussines_woman.svg'
import Icon4 from '../../assets/images/online_video.svg'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='servicios'>
        <ServicesH1>Servicios</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Boletería 24hs</ServicesH2>
                <ServicesP>Ahora podes comprar tus pasajes desde la app en cualquier momento.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Plan familiar</ServicesH2>
                <ServicesP>Disfrutá tus vacaciones al máximo con quienes queres estar.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Canjea tus puntos</ServicesH2>
                <ServicesP>Con la compra de servicios acumulás puntos y participas de sorteos exclusivos.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Compartí tu experiencia</ServicesH2>
                <ServicesP>Subiendo un video de tu experiencia travel podes ganarte un smartphone.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services