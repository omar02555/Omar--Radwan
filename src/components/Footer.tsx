import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/omar.omarahmed.9404/',
      label: 'Facebook',
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/omar84.radwan/profilecard/?igsh=MXE4eW95ZzgwOXdpZQ==',
      label: 'Instagram',
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/omar-radwan-599b432b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i>
              omarradwan781@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-2"></i>
              (+20) 112 799 2297
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-sm text-gray-400">Follow Me</div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Omar Radwan. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </footer>
  );
};

export default Footer;