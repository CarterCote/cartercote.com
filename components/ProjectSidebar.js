import Icon from './Icon'
import styled from 'styled-components'

/* sidebar */

const SidebarContainer = styled.div`
    min-width: 220px;
    margin-left: auto;
    margin-top: 38px;
    p {
        margin-top: 0;
    }
    ul {
        padding-left: 0;
        margin: 0;
      }
    @media screen and (max-width: 1100px) {
        margin-left: 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0;
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin-top: 0;
    }
`;
const ProjSection = styled.div`
    min-width: 100px;
    div + div {
        margin-top: 46px;
    }
    @media screen and (max-width: 1100px) {
        div + div {
            margin-top: 0;
        }
    }
    @media screen and (max-width: 600px) {
        div + div {
            margin-top: 30px;
        }
    }
    .techStack img:first-of-type {
        margin-left: -4px;
      }
      
      .techStack img {
        margin-right: 3px;
      }
`;
  
const Title = styled.p`
    color: #9699a3;
    font-size: var(--sidebarSize);
    margin-bottom: 5px;
    opacity: 0.9;
`;
  
const ListItem = styled.li`
    color: rgba(55, 56, 60, 0.88);
    font-size: var(--sidebarSize);
    list-style: none;
    padding-left: 0;
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
    a {
        color: #0079ff;
        font-weight: 500;
        text-decoration: none;
        background: url("./link-arrow.svg") right 12px center no-repeat;
        padding-right: 38px;
        transition: background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s;
    }
    a:hover {
        background-position: right 8px center;
    }  
`;

const TextItem = styled.p`
    color: rgba(55, 56, 60, 0.88);
    font-size: var(--sidebarSize);
    list-style: none;
    padding-left: 0;
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
    a {
        color: #0079ff;
        font-weight: 500;
        text-decoration: none;
        background: url("./link-arrow.svg") right 12px center no-repeat;
        padding-right: 38px;
        transition: background-position cubic-bezier(0.39, 0.58, 0.57, 1) 0.07s;
    }
    a:hover {
        background-position: right 8px center;
    }  
`;

const Sidebar = ({ year, client, services, tech, website }) => (
  <SidebarContainer>
    {client && (
      <Section>
        <Title>Client</Title>
        <TextItem>{client}</TextItem>
      </Section>
    )}
    {services && (
      <Section>
        <Title>Services</Title>
        <ul>
          {services.split(', ').map(s => (
            <ListItem key={s}>
              {s}
            </ListItem>
          ))}
        </ul>
      </Section>
    )}
    {tech && (
      <TechSection>
        {tech.split(', ').map(t => (
          <Icon key={t}>{t}</Icon>
        ))}
      </TechSection>
    )}
  </SidebarContainer>
)

const Section = ({ children }) => (
  <ProjSection>{children}</ProjSection>
)
const TechSection = ({ children }) => (
    <ProjSection className="techStack">{children}</ProjSection>
)

export default Sidebar