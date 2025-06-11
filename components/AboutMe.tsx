
"use client"
import React from 'react';

// Replace with your actual photo path

import profilePhoto from '../public/images/profile.jpg';
import Image from 'next/image';


const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section" id="about">
      <div className="about-me-container">
        <div className="profile-photo-container">
          <Image
            src={profilePhoto} 
            alt="John Doe - Full Stack & Blockchain Developer" 
            className="profile-photo"
            loading="lazy"
          />
          <div className="photo-overlay">
            <span>Blockchain Enthusiast</span>
            <span>Full Stack Developer</span>
          </div>
        </div>
        
        <div className="about-me-content">
          <h2 className="section-title">
            <span className="title-highlight">About</span> Me
          </h2>
          
          <p className="intro-text">
            Hi, I'm <span className="highlight">Francis</span>, a passionate <span className="highlight">Full Stack Developer</span> with a burning interest in blockchain technology and decentralized applications.
          </p>
          
          <div className="bio-section">
            <h3 className="bio-title">What Drives Me</h3>
            <p className="bio-text">
              I'm motivated by the transformative potential of blockchain technology to create transparent, secure, and decentralized systems. The idea of building applications that give power back to users excites me daily.
            </p>
            <p className="bio-text">
              With <span className="highlight">3+ years</span> of experience in full-stack development, I've developed a strong foundation that I'm now leveraging to specialize in blockchain development. I thrive on solving complex problems and creating seamless user experiences.
            </p>
          </div>
          
          <div className="blockchain-focus">
            <h3 className="focus-title">Blockchain Journey</h3>
            <p className="focus-text">
              As an <span className="highlight">aspiring blockchain developer</span>, I'm currently focused on:
            </p>
            <ul className="focus-list">
              <li>Building decentralized applications (dApps) on Ethereum and Solana</li>
              <li>Mastering smart contract development with Solidity and Rust</li>
              <li>Exploring Web3.js and Ethers.js for frontend integration</li>
              <li>Learning about DeFi protocols and NFT standards</li>
            </ul>
          </div>
          
          <div className="skills-section">
            <h3 className="skills-title">Technical Arsenal</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4 className="category-title">Blockchain</h4>
                <ul className="skill-list">
                  <li className="skill-item">Solidity</li>
                  <li className="skill-item">Hardhat</li>
                  <li className="skill-item">Truffle</li>
                  <li className="skill-item">Web3.js</li>
                  <li className="skill-item">IPFS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4 className="category-title">Frontend</h4>
                <ul className="skill-list">
                  <li className="skill-item">React</li>
                  <li className="skill-item">Next.js</li>
                  <li className="skill-item">TypeScript</li>
                  <li className="skill-item">Tailwind CSS</li>
                  <li className="skill-item">Sass</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4 className="category-title">Backend</h4>
                <ul className="skill-list">
                  <li className="skill-item">Node.js</li>
                  <li className="skill-item">Express</li>
                  <li className="skill-item">MongoDB</li>
                  <li className="skill-item">PostgreSQL</li>
                  <li className="skill-item">GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;