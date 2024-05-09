import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactMarkdown from 'react-markdown'

import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/ProjectSidebar'
import ProjectContext from '../../Projects.Context'
import styled, { keyframes } from 'styled-components'

const Project = styled.article`
  width: 100%;
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
  padding-top: 50px;
  hgroup {
    position: relative;
  }
  img {
    margin: 0;
    vertical-align: middle;
  }
  @media screen and (min-width: 1300px) {
    padding: 100px 0 0;
    h1 {
      margin-left: 0;
      margin-top: -22px;
    }
  }
  }
  @media screen and (max-width: 600px) {
    h2 {
      margin-bottom: 20px;
    }
  }
`;

const ProjectTitle = styled.h1`
  font-size: calc(var(--h1Size) * 1.3);
  line-height: 1.05em;
  color: #282c35;
  letter-spacing: -0.01em;
  margin-bottom: 0;
  margin-top: -12px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 100%;
  padding-top: 20px;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ContentInnerContainer = styled.div`
  margin-top: 21px;
  box-sizing: border-box;
  padding-bottom: 80px;
  max-width: 740px;
  p {
    font-style: normal;
    font-weight: 400;
    line-height: 1.5em;
    font-size: calc(var(--smallBodySize) * 1.15);
    color: #3b4c56;
    margin-bottom: 40px;
    margin-top: 0px;
  }
  @media screen and (max-width: 1100px) {
    padding-left: 0;
    margin-left: 0;
    padding-bottom: 50px;

  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

const projectInfoAnim = keyframes`
  0% { opacity: 0.1; transform: translateY(80px); }
  50% { opacity: 0.3; }
  100% { opacity: 1; transform: translateY(0); }
`;

const ContentInfo = styled.div`
  padding-top: 25px;
  opacity: 0;
`;

const ContentInfoWithAnim = styled(ContentInfo)`
  animation-name: ${projectInfoAnim};
  animation: 0.35s cubic-bezier(0.37, 1.05, 1, 1);
  animation-fill-mode: forwards;
`;

const ProjectWrapper = styled.div`
  h2 {
    font-size: var(--bigBodySize);
    font-weight: 500;
    line-height: 149.7%;
    color: #282c35;
    margin: 0;
    margin-top: -6px;
    margin-bottom: 47px;
  }
`;

const projectImagesAnim = keyframes`
  0% { opacity: 0; transform: translateY(200px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ProjectImages = styled.div`
  background: rgba(148, 151, 158, 0.1);
  margin-top: 80px;
  opacity: 0;
  min-height: 600px;
  animation-name: ${projectImagesAnim};
  animation: 0.38s cubic-bezier(0.37, 1.05, 1, 1) 0.55s;
  animation-fill-mode: forwards; 
  @media screen and (max-width: 600px) {
    background: none;
  }
`;

const ProjectsImagesWithAnim = styled(ProjectImages)`
  animation: projectImagesAnim 0.38s cubic-bezier(0.37, 1.05, 1, 1) 0.55s;
  animation-fill-mode: forwards;
`;

const ProjectImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1090px;
  max-width: 100%;
  margin: auto;
  margin-top: 0px;
  position: relative;
  top: -80px;
  @media screen and (max-width: 1100px) {
    justify-content: center;
    top: -24px;
  }
`;

const ProjectImageContainer = styled.div`
  margin: 25px 0;
  max-width: 100%;
  box-sizing: border-box;
  transition: background-color 0.25s ease-in, transform 0.25s cubic-bezier(0.37, 1.05, 1, 1), box-shadow 0.1s ease;
  border-radius: 3px;
  transform: translateY(80px);
  img,
  video {
    transition: background-color 0.3s ease-in, transform 0.4s cubic-bezier(0.37, 1.05, 1, 1), opacity 0.2s ease-in;
    opacity: 0.8;
    border-radius: 3px;
    max-width: 100%;
    box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.05), 0px 1px 9px rgba(0, 0, 0, 0.06);
  }
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 5px 14px 0 rgba(97, 88, 97, 0.05);
  }
  :hover img {
    transform: scale(1.021);
  }
  @media screen and (max-width: 1100px) {
    margin: 0 0;
    padding: 10px 20px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 0;
    padding: 4px 0px;
    img,
    video {
      margin: 0 0;
      border-radius: 3px;
    }
  }
`;

const ProjectImageContainerAnim = styled(ProjectImageContainer)`
  transform: translateY(0);
  img {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const TopContainer = styled.div`
  display: flex;
  margin-left: -60px;
  width: 1290px;
  max-width: 100%;
  margin: auto;
  @media screen and (max-width: 1100px) {
    padding: 0 90px 0 40px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 600px) {
    padding: 0 22px 0 22px;
    box-sizing: border-box;
  }
`;
const TopInfo = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 100px;
  margin-right: 100px;
  @media screen and (max-width: 1100px) {
    margin-right: 0;
    margin-left: 40px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

const WebsiteLink = styled.a`
  color: #0079ff;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  background: url("/link-arrow.svg") right 12px center no-repeat;
  padding-right: 38px;
  transition: background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s;
  margin-top: 47px;
  :hover {
    background-position: right 8px center;
  }
`;

const ProjectInfo = ({ data, data: { title, website }, content }) => {
  return (
    <Layout>
      <ProjectWrapper>
        <ContentInfo>
          <TopContainer>
            <TopInfo>
              <hgroup>
                <ProjectTitle>{title}</ProjectTitle>
              </hgroup>
              <ContentContainer>
                <ContentInnerContainer>
                  {content ? <ReactMarkdown source={content} /> : 'loading'}
                  {website && (
                    <WebsiteLink
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website
                    </WebsiteLink>
                  )}
                </ContentInnerContainer>
                <Sidebar {...data} />
              </ContentContainer>
            </TopInfo>
          </TopContainer>
        </ContentInfo>
      </ProjectWrapper>
    </Layout>
  )
}
const Post = () => {
  const {
    query: { wid }
  } = useRouter()

  useEffect(() => {
    console.log('wid changed!')
    setTimeout(() => {
      document.body.classList.add(ProjectsImagesWithAnim)
    }, 0)
  }, [wid])

  const projects = useContext(ProjectContext)

  const {
    document: { data, content },
    images
  } = projects.find(w => w.slug === wid)

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Navbar />
      <Project>
        <ProjectInfo data={data} content={content} />
        <ProjectImages>
          <ProjectImage>
            <ReactMarkdown
              source={images.content}
              renderers={{ image: Img, paragraph: P }}
            />
          </ProjectImage>
        </ProjectImages>
      </Project>
      <Footer />
    </>
  )
}

const P = ({ children }) => {
  if (
    children &&
    children[0] &&
    children.length === 1 &&
    children[0].props &&
    children[0].props.src
  ) {
    // rendering media without p wrapper

    return children
  }

  return <p>{children}</p>
}

const Img = ({ alt, src }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  if (src.match(/.mp4$/)) {
    return (
      <ProjectImageContainer
        className={[inView ? ProjectImageContainerAnim : ''].join(' ')}
        ref={ref}
      >
        <video muted autoPlay src={inView ? src : ''}></video>
      </ProjectImageContainer>
    )
  }

  return (
    <NextLink href={src}>
      <a target="_blank" rel="noopener noreferrer">
        <ProjectImageContainer
          className={[inView ? ProjectImageContainerAnim : ''].join(
            ' '
          )}
          ref={ref}
        >
          <img srcSet={`${src} 2x`} alt={alt} />
        </ProjectImageContainer>
      </a>
    </NextLink>
  )
}

export default Post