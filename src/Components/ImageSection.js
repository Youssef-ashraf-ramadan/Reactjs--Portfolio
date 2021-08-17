import React from 'react'
import styled from 'styled-components';
import resume from '../img/youssef.png';


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img  src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Youssef Ashraf</span></h4>
                <p className="paragraph">
                full-stack web developers build robust web applications that help unleash the full potential of your business. , full-stack development solutions involve all types of tools and frameworks Such as AngularJS, React, jQuery, and Vuejs others! 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Youssef Ashraf</p>
                        <p>: 20</p>
                        <p>: Egyptian </p>
                        <p>: Arabic, English </p>
                        <p>: Egypt, giza</p>
                        <p>: Freelance</p>
                    </div>
                </div>
               <a href="https://github.com/Youssef-ashraf-ramadan"><button  className="btn">Go to Github</button> </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 60%;
            border-radius:50%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
        .btn{
            width:150px;
            height:50px;
            background-Color: #008CBA;
            cursor:pointer;
        }
    }
`;
export default ImageSection;
