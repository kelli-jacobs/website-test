import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="bg-dark text-black py-4 gradient-container footer-compact">
      <div className="container text-center footer-compact">
        <div className="mb-1 text-black">
            <a href="https://facebook.com/stampintimephotography" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                <FaFacebookF size={20} />
            </a>

            <a href="https://instagram.com/stamp.in.time.photography" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                <FaInstagram size={20} />
            </a>

            <a href="mailto:stampintimephotography@gmail.com" className="text-dark mx-2">
            <FaEnvelope size={20} />
            </a>            
            <a href="https://book.usesession.com/i/D52C_t-I5" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
            <FaGlobe size={20} />
            </a>

        </div>
        <p className="mb-0 text-dark">&copy; 2025 Stamp In Time Photography LLC | All Rights Reserved.</p>
      </div>
          <a href="https://book.usesession.com/t/_DXpSEnul4" target="_blank" rel="noopener noreferrer">
      <img class="pretorian" src={`${baseUrl}Images/Logo.png`} alt="scavenger hunt image" draggable="false" />
    </a>
      
    </footer>
  );
}

export default Footer;
