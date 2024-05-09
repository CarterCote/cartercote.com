import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from './Icon'
import styled from 'styled-components'
import { Container } from "./Layout"

const CardsContainer = styled(Container)`
  text-align: left;
`;

const ProjCard = styled.a`
    border-radius: 4px;
    width: 880px;
    max-width: 100%;
    display: flex;
    height: 440px;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    margin: auto auto 50px auto;
    transition: transform 0.24s cubic-bezier(0.18, 0.89, 0.4, 1.03), box-shadow 0.2s ease-in;
    text-decoration: none;
    :hover {
        transform: scale(1.04);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.28);
        border: 5px solid transparent;
        border-color: ${(props) => props.theme.accent};
    }
    a + a {
        margin-top: 30px;

    }
    @media screen and (max-width: 880px) {
        position: relative;
        overflow: hidden;
    }
    @media screen and (max-width: 800px) {
        height: 720px;
    }
    @media screen and (max-width: 500px) {
        height: 540px;
    }
`;

const ProjInfo = styled.div`
    margin-left: auto;
    width: 400px;
    color: white;
    padding-top: 60px;
    padding-right: 0;
    padding-bottom: 60px;
    height: 100%;
    box-sizing: border-box;
    align-items: flex-start;

    display: flex;
    flex-direction: column;
    padding-left: 60px;
    @media screen and (max-width: 880px) {
        padding: 40px 0 40px 40px;
        width: 350px;
        max-width: 100%;
        margin-left: 0;
        height: 600px;
    }
`;
const ProjDate = styled.p`
    font-family: "GraebenbachMonoRegular";
    margin: 0;
    font-size: 16px;
    opacity: 0.8;
`;
const ProjTitle = styled.h1`
    font-family: "DrukWide";
    font-weight: 600;
    font-size: 24px;
    line-height: 44px;
    margin: 0;
`;
const ProjServices = styled.div`
    font-family: "GraebenbachMonoMedium";
    font-size: 18px;
    list-style: none;
    margin-top: 40px;
    @media screen and (max-width: 600px) {
        margin-top: 15px;
    }
    li {
        opacity: 0.8;
    }
    li + li {
        margin-top: 5px;
    }
`;
const ProjTech = styled.div`
  margin-top: auto;
  display: flex;
  img {
    height: 30px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-left: -5px;
    transform: scale(0.8);
    transform-origin: left center;
  }
`;
const ProjTechIcon = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjImage = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px 0 40px 0;
  overflow: hidden;
  position: relative;
  flex: 1 1;
  img {
      max-width: 100%;
      border-radius: 3px;
      box-shadow: 0px 3.32378px 20.6857px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 800px) {
      position: absolute;
      height: 700px;
      top: 272px;
      width: 143%;
      left: -26px;
      img {
          max-width: none;
          height: 100%;
      }
  }
  @media screen and (max-width: 500px) {
      position: absolute;
      height: 420px;
      top: 220px;
      width: 143%;
      left: 0;
  }
`;

const bgColors = ['#0d1f68', '#ffb41f', '#0d1f68', '#ffb41f']

const ProjectCard = props => {
  const {
    index,
    slug,
    document: {
      data: { title, date, services, tech, featuredImg }
    }
  } = props

  return (
    <CardsContainer>
      <Link href="/project/[wid]" as={`/project/${slug}`}>
        <ProjCard style={{ background: bgColors[index % 4] }}>
          <ProjInfo>
            <ProjDate>{new Date(date).getFullYear()}</ProjDate>
            <ProjTitle>{title}</ProjTitle>
            <ProjServices>
              {services.split(', ').map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ProjServices>
            <ProjTech>
              {tech.split(', ').map(t => (
                <ProjTechIcon key={t}>
                  <Icon white>{t}</Icon>
                </ProjTechIcon>
              ))}
            </ProjTech>
          </ProjInfo>
          <ProjImage>
            <img src={featuredImg} alt={title} />
          </ProjImage>
        </ProjCard>
      </Link>
    </CardsContainer>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number,
  slug: PropTypes.string,
  document: PropTypes.shape({
    data: {
      title: PropTypes.string,
      year: PropTypes.string,
      services: PropTypes.string,
      tech: PropTypes.string,
      images: PropTypes.string
    }
  })
}

export default ProjectCard