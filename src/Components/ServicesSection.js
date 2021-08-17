import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import angular from '../img/angular.svg';
import api from '../img/api.svg';
import logo from '../img/logo.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={angular} 
                        title={'Angular developer '} 
                        paragraph={'Angular is popular because of the flexibility it brings to all types of web app development. You can develop a browser, as well as mobile and web-based apps, with AngularJS..'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={api} 
                            title={'web service'} 
                            paragraph={'Bulid RESTFull API.'}
                        />
                    </div>
                    <ServiceCard 
                        image={logo} 
                        title={'React js developer'} 
                        paragraph={'A JavaScript library, React assists in creating top-notch user interfaces. React.js development is widely preferred, as it helps deliver excellent server and client-side rendering. '}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
     
    }
`;

export default ServicesSection;
