import React from 'react'
import img from '../../assets/images/contact.jpg'
import Vid from '../../assets/video/contact.mp4'
import {FaRegEnvelope} from 'react-icons/fa'


import {
    ContactContainer, 
    ContactWrapper, 
    ContactRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    ContactVideo,
    Button
    
} from './ContactElements'

function Contact() {


  return (
    <ContactContainer id='contacto'>
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Dudas o sugerencias</TopLine>
                                <Heading>Dejanos tu mensaje</Heading>
                                <Subtitle>
                                    Queres planificar tu primer viaje y no sabes como hacerlo ?
                                    Hace clic abajo y un especialsita se comunicará contigo para asesorarte.
                                </Subtitle>
                                <BtnWrap>
                                    <Button 
                                        href='mailto:gonza.barrios.geb@gmail.com'
                                    >
                                        <FaRegEnvelope />
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <ContactVideo autoPlay loop muted src={Vid} type='video/mp4' style={{width:'100%', height: '100%'}}/>
                            </ImgWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer> 
  )
}

export default Contact