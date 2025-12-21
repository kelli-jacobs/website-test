import React from 'react';
import "./styles/biolinks.css";

function BioLinks() {
  const baseUrl = import.meta.env.BASE_URL;

  const links = [
    { label: 'Book a Session', url: 'https://book.usesession.com/i/D52C_t-I5' },
    { label: 'Instagram', url: 'https://instagram.com/stamp.in.time.photography' },
    { label: 'Facebook', url: 'https://facebook.com/stampintimephotography' },
    { label: 'Portfolio', url: '/components/photogallery' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <div className="gradient-container text-center py-5">
      <img
        src={`${baseUrl}Images/portraits/5451-52.jpg`}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <img
        src={`${baseUrl}Images/portraits/5475-30.jpg`}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <img
        src={`${baseUrl}Images/portraits/5469-19.jpg`}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <img
        src={`${baseUrl}Images/portraits/Nikki-2.jpg`}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <img
        src={`${baseUrl}Images/portraits/5446-4.jpg`}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <img
        src={`${baseUrl}Images/portraits/5322-47.jpg`}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h2 className="mb-3 links">All The Links</h2>
      <p className="lead mb-4">Photographer | Storyteller | Memory Catcher</p>

      <div className="d-flex flex-column align-items-center">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-75 my-2"
            style={{ maxWidth: '400px' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default BioLinks;
