import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/Images/Logo.png'; // Make sure your logo is in the correct path

const StyledNav = styled.nav`
  padding: 1rem 2rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 125px;
  margin-right: 0.75rem;
`;

const BusinessName = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    color: #888;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: #d3d3d3;
  }
`;

function Navbar() {
  return (
    <>
    <StyledNav>
      <LogoSection>
        <LogoImg src={logo} alt="Business Logo" />
        <BusinessName to="/">Stamp In Time Photography LLC</BusinessName>
      </LogoSection>

      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/components/PhotoGallery">Portfolio</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/biolinks">Bio Links</StyledLink>
      </NavLinks>
    </StyledNav>
    </>
  );
}

export default Navbar;
