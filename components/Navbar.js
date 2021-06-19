import Link from 'next/link'
// import logo from "head/logo.png";
import styled from 'styled-components'

const NavHeader = styled.header`
  width: 136px;
  @media screen and (min-width: 1300px) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  @media screen and (max-width: 600px) {
    padding: 0px 16px;
    height: 50px;
    width: 92%;

    img {
      width: 66px;
    }
  }
`;

const NavLogo  = styled.img`
  width: 66px;
`;

const NavHeaderInner = styled.div`
  width: 1300px;
  max-width: 100%;
  margin: auto;
  height: 100px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  @media screen and (min-width: 1300px) {
    width: 100%;
    margin: auto;
    height: 110px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Nav = styled.nav`
  background: transparent;
  margin-top: 15px;
  margin-left: auto;
  margin-right: 5px;
  // font-size: 1.2rem;
  font-family: "GraebenbachMonoMedium";
  position: sticky;

  a {
    text-decoration: none;
    display: flex;
    line-height: 22px;
    color: #fff;
    opacity: 0.9;
    transition: 200ms ease-in-out;
    font-size: 16px;
  }
  a:hover {
    color: #F5E022;
  }
  a + a {
    margin-left: 28px;
    // margin-right: 0px;
  }
  @media screen and (max-width: 600px) {

    a + a {
      margin-left: 38px;
    }
  }
`;

const Navbar = () => (
  <NavHeader>
    <NavHeaderInner>
      <Link href="/">
        <a>
          <NavLogo src="head/favicon.png" width="150" alt="" />
        </a>
      </Link>
      <Nav>
        <div>
          <a href="/"> EXPERIENCE</a>
          <a href="https://cartercote.com/">DESIGNS</a>
          <a href="/">ABOUT</a>
          <a
            href="mailto:cartercote06@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACT
          </a>
        </div>
      </Nav>
    </NavHeaderInner>
  </NavHeader>
)
export default Navbar