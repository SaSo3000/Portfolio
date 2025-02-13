import React from 'react';
import './App.css';
import { Linkedin, Github } from 'lucide-react';
import linkedinImage from './images/linkedin2-removebg-preview (4).jpg';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 via-purple-700 to-pink-600 text-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-indigo-900 bg-opacity-90 shadow-md py-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 text-white">
          <button onClick={() => scrollToSection('about')} className="hover:text-pink-500">
            About Me
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-pink-500">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-pink-500">
            Projects
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center mt-24">
        <div className="rounded-full w-44 h-44 mx-auto mb-4 bg-gray-300 shadow-lg overflow-hidden">
          <img src={linkedinImage} alt="Saunak Patel" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold">Saunak Patel</h1>
        <p className="text-lg text-gray-300">Innovative IoT & Embedded Systems Developer</p>
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/saunak-patel-789b18226"
            target="_blank"
            rel="noreferrer"
            className="linkedin-container"
          >
            <Linkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/SaSo3000"
            target="_blank"
            rel="noreferrer"
            className="github-container"
          >
            <Github className="github" ></Github>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">About Me</h2>
        <p>
          Innovative IoT and Embedded Systems Developer with experience in full-stack web development. Passionate
          about building secure, efficient, and scalable solutions that merge software and hardware.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Skills</h2>
        <ol className="grid grid-cols-2 gap-4">
          <li><b>Cloud:</b> AWS(practitioner level) </li>
          <li><b>Languages:</b> Python, C/C++, JavaScript, MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
          <li><b>Embedded Boards:</b> Raspberry Pi 4B, ESP8266/32, FRDM K64F</li>
          <li><b>Notions In:</b> RTOS, GPIO Control, RFID Modules, Circuit Design</li>
          <li><b>Designing Tools:</b> Linux, OpenCV, Git, Visual Studio Code, Arduino- IDE</li>
          <li><b>Busses and Protocols:</b> MQTT, I2C, SPI, UART</li>
        </ol>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Projects</h2>
        <div className="space-y-6">
        <div>
            <h3 className="text-xl font-semibold text-indigo-700">Robocar Project: AI-Powered Autonomous Vehicle</h3>
            <p>
            <br></br><b>Technologies:</b> Raspberry Pi 4B, ESP8266, MQTT, Python, OpenCV, PyTorch, Embedded C<br></br>
             <br></br> Robocar is a project I have built using Raspberry pi 4B and esp8266; using my own Image Recognition model to predict the direction of an Arrow. <br></br><br></br><b>Raspberry Pi 4B (Publisher):</b> Captures images, processes them using a trained image recognition model, and publishes direction commands via MQTT. 
              <br></br><br></br><b>ESP8266 (Subscriber):</b> Receives MQTT messages and controls motor actions accordingly.<br></br><br></br>
              Optimized the system for low-latency communication and efficient power consumption.
              Ensured real-time decision-making with a lightweight neural network for edge computing.</p>
            <div className='a_div'>
            <a href="https://drive.google.com/file/d/11Dg36v12CPLEaDVuqVjbhEM2xePOUNFd/view?usp=sharing" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Project
            </a>
            <a href="https://github.com/SaSo3000/RoboCar.git" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Code
            </a>
            </div>
          </div>
        <div>
            <h3 className="text-xl font-semibold text-indigo-700">Smart Door Lock System</h3>
            <p>
            <br></br><b>Technologies:</b> Raspberry Pi 4B, mfrc522 RFID Tag Reader, I2S Display, Reset button, Python, OpenCV, numpy, (Pre built) face_recognition model<br></br>
              <br></br>Smart Door Lock System which is based on 2 factor verification process using RFID Tag/Scanner and Face Recognition using Raspberry PI 4B. I have also used I2C Display to display instrunctions to the user.<br></br>
            <br></br><b>RFID-Based Access Control:</b> Users must scan an authorized RFID tag to initiate authentication.<br></br>
            <br></br><b>Face Recognition Verification:</b> Captures and processes the user's face using OpenCV and a trained deep learning model.<br></br>
            <br></br><b>Raspberry Pi 4B as the Central Controller:</b>  Simply handles image processing, authentication logic, and door control.<br></br></p>
            <div className='a_div'>
            <a href="https://drive.google.com/file/d/19AW0RwjG6dtWLq08F3wCH_p6qo-7dBF_/view?usp=sharing" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Project
            </a>
            <a href="https://github.com/SaSo3000/Smart_Door-Lock-System.git" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Code
            </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">EandE Boiler Services Website</h3>
            <p>A static ReactJS website to expand the online reach of a boiler services for our family business.</p>
            <div className='a_div'>
            <a href="https://saso3000.github.io/EandE/" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Project
            </a>
            <a href="https://github.com/SaSo3000/EandE-client.git" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Code
            </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">Full Stack E-commerce Website</h3>
            <p>A full-stack e-commerce platform using ReactJS and NodeJS with JWT-based security feature.</p>
            <div className='a_div'>
            <a href="https://ecom-client-eight.vercel.app/" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Project
            </a>
            <a href="https://github.com/SaSo3000/ecomClient.git" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Front-end Code
            </a>
            <a href="https://github.com/SaSo3000/ecomApi.git" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">
              View Back-end Code
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 mb-6 text-gray-300">
        <p>Saunak Patel | saunak3000@gmail.com | +1 (437) 429 2259</p>
        <p className="text-sm mt-2">Looking forward to collaborating on innovative projects!</p>
      </footer>
    </div>
  );
};

export default Portfolio;
