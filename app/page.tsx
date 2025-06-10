'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import htmlIcon from '@/public/icons/html.svg';
import cssIcon from '@/public/icons/css.svg';
import jsIcon from '@/public/icons/javascript.svg';
import reactIcon from '@/public/icons/react.svg';
import nodeIcon from '@/public/icons/nodejs.svg';
import mongoIcon from '@/public/icons/mongodb.svg';
import sqlIcon from '@/public/icons/mysql.svg';
import nextIcon from '@/public/icons/nextjs.svg';
import tsIcon from '@/public/icons/typescript.svg';
import gitIcon from '@/public/icons/git.svg';

const Home: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const icons = [htmlIcon, cssIcon, jsIcon, reactIcon, nodeIcon, mongoIcon, sqlIcon, nextIcon, tsIcon, gitIcon];

  return (
    <section className="home">
      <div className="home__intro">
        <div className="home__text">
          <h1>Hi, I'm Francis Muiruri</h1>
          <p>A passionate full-stack developer specialized in building robust, user-centric web applications with modern technologies.</p>
          <p>I focus on creating performant, responsive, and accessible solutions from frontend to backend.</p>
        </div>
        <div className="home__photo-container">
          <div className="home__photo-glow">
            <Image 
              src="/images/francis.jpg" 
              alt="Francis Muiruri" 
              fill
              className="home__photo"
              priority
            />
          </div>
        </div>
      </div>

      <div 
        className="home__skills"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`home__skills-marquee ${isHovering ? 'paused' : ''}`}>
          {[...icons, ...icons].map((icon, i) => (
            <div key={i} className="home__skill-icon-container">
              <Image 
                src={icon} 
                alt="tech skill" 
                width={50} 
                height={50} 
                className="home__skill-icon"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;