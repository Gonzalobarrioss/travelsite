import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre nosotros</FooterLinkTitle>
                        <FooterLink to='/'>Quienes somos</FooterLink>
                        <FooterLink to='/'>Testimonios</FooterLink>
                        <FooterLink to='/'>Terminos de servicio</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contactenos</FooterLinkTitle>
                        <FooterLink to='/'>Contacto</FooterLink>
                        <FooterLink to='/'>Soporte</FooterLink>
                        <FooterLink to='/'>Sponsors</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Envia tu video</FooterLink>
                        <FooterLink to='/'>Agencia</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Redes sociales</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        TRAVEL
                    </SocialLogo>
                    <WebsiteRights>Gonzalo Barrios {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.instagram.com/ponja__' target='_blank' aria-label='Instagram' color='#c32aa3'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='//www.facebook.com/' target='_blank' aria-label='Facebook' color='#1877f2'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='//www.youtube.com/' target='_blank' aria-label='Youtube' color='#ff0000'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='//www.twitter.com/ponja_mw' target='_blank' aria-label='Twitter' color='#1da1f2'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/gonzaloezequielbarrios/' target='_blank' aria-label='LinkedIn' color='#0000ff'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer