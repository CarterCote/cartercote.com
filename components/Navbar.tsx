import { FaBars, FaTimes, FaMagento } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Container } from "./Layout";
import Progress from "./Progress";
// import logo from "../../assets/images/logo2.png";
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 1.2rem;
  font-family: "GraebenbachMonoMedium";
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 40px 0 20px 0;
  z-index: 1;
  width: 100%;
  max-width: 10%;
  margin-right: 0;
  margin-left: auto;
  padding-right: 0px;
  padding-left: 0px;

`;


const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  ${'' /* display: flex; */}
  align-items: right;
  list-style: none;
  margin-top: 10px;
  text-align: right;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0d1f68;
  }
`;

const NavItem = styled.li`
  height: 25px;

  border-bottom: 2px solid transparent;
  &:hover {
    ${'' /* border-bottom: 1px solid #4b59f7; */}
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export default function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            {/* <NavLogo to='/' onClick={closeMobileMenu}>
              <img src={logo} alt="" style={{width: "6%"}}/>
            </NavLogo> */}
            {/* <MobileIcon onClick={handleClick}> */}
            <MobileIcon>

              {/* {click ? <FaTimes /> : <FaBars />} */}
            </MobileIcon>
            {/* <NavMenu onClick={handleClick} click={click} class="flex-column"> */}
            <NavMenu>
              <NavItem>
                {/* <NavLinks to='/' onClick={closeMobileMenu}> */}
                <NavLinks to='/' >
                  EXPERIENCE
                </NavLinks>
              </NavItem>
              <NavItem>
                    <NavLinks to='/designs' >
                  MY DESIGNS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact' >
                  ABOUT ME
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact' >
                  CONTACT ME
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}