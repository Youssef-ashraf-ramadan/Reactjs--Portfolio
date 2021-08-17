import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                 
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Full Stack web Developer'}
                        subTitle={'Freelancer'}
                        text={'Full stack Web developer with 2+ years experience of developing web pages from initial concept to final, polished deliverable.'} 
                    />
                    <ResumeItem 
                        year={'2021 - 2022'} 
                        title={'Ui UX design specialist'}
                        text={'Creating user-centered designs by understanding business requirements and user feedbackCreating user flows, wireframes, prototypes and mockups. Translating requirements into style guides, design systems, design patterns and attractive user interfaces'} 
                    />
                     <ResumeItem 
                        year={'2022 - 2023'} 
                        title={'Trainig & Instant'}
                        text={ 'Lead in the design, development, and implementation of the graphic, layout, and production communication materials Responsible about UI and UX Some tasks at back end. Angular development'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2024'} 
                        title={'Student at faculty of commerce at Helwan university '}
                        subTitle={'E-Commerce & technology'}
                        text={' Architectural framework of e-commerce means the synthesizing of various existing resources like DBMS, data repository, computer languages, software agent-based transactions, monitors or communication protocols to facilitate the integration of data and software for better applications. '} 
                    />
                 
                  
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);

    }
`;
export default Resume
