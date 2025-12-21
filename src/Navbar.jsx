import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledNav = styled.nav`
  padding: 1rem 2rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 80px;
  margin-right: 0.75rem;
`;

const BusinessName = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    color: #888;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    width: 100%;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: black;

  &:hover {
    color: #d3d3d3;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = `${import.meta.env.BASE_URL}Images/Logo.png`;

  return (
    <StyledNav>
      <LogoSection>
        <LogoImg src={logo} alt="Business Logo" />
        <BusinessName to="/">Stamp In Time Photography LLC</BusinessName>
      </LogoSection>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Hamburger>

      <NavLinks open={menuOpen}>
        <StyledLink to="/" onClick={() => setMenuOpen(false)}>Home</StyledLink>
        <StyledLink to="/components/PhotoGallery" onClick={() => setMenuOpen(false)}>Portfolio</StyledLink>
        <StyledLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</StyledLink>
        <StyledLink to="/biolinks" onClick={() => setMenuOpen(false)}>Bio Links</StyledLink>
      </NavLinks>
    </StyledNav>
  );
}

export default Navbar;
