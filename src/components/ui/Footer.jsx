import React from "react";
import "./Footer.css"; // Import the CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-column">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            G.S KINTEKO Primary School provides a nurturing and engaging learning environment, fostering creativity, critical thinking, and a love for learning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            {["Welcome", "Admissions", "Academics", "Map", "Contact"].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(" ", "")}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <ul>
            <li>Email: info@gs_kinteko.com</li>
            <li>Phone: +250 993 999 001</li>
            <li>Address: GS Kinteko, Butare, Rwanda</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
          <a key={index} href="#" target="_blank" rel="noopener noreferrer">
            <Icon />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} G.S KINTEKO Primary School. All Rights Reserved.
      </div>
    </footer>
  );
}
