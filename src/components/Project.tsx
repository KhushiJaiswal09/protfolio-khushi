import React from "react";
import kennel from "../assets/images/kennelmock.png"
import ondoc from "../assets/images/ondoc.png"
import stock from "../assets/images/stock1.png"
import pern from "../assets/images/pernmock1.png"
import ai from "../assets/images/ai.png"
import expense from "../assets/images/expense.png"
// import notion from "../assets/images/notion.png"
import vsextension from "../assets/images/vsextension.png"

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Muskan-1003/Kennel" target="_blank" rel="noreferrer"><img src={kennel} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/Kennel" target="_blank" rel="noreferrer"><h2>Kennel</h2></a>
                <p>Tech stack:React.js, Node.js, Redux, Tailwind CSS, Shadcn, MongoDB, Cloudinary, Express, Socket.io,Git</p>
                <p>Developed a responsive full-stack platform for pet adoption, featuring advanced search, real-time chat, and efficient image management. Integrated Redux for state management and Google Places API for location-based recommendations, enhancing user experience.</p>
                
            </div>
            <div className="project">
                <a href="https://github.com/Muskan-1003/On-Doc" target="_blank" rel="noreferrer"><img src={ondoc} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/On-Doc" target="_blank" rel="noreferrer"><h2>On-Doc</h2></a>
                <p>Tech Stack: React.js, Node.js, Redux, Tailwind CSS, Shadcn, MongoDB, Cloudinary, Express, Socket.io, Python</p>
                <p>Created a robust full-stack platform for managing doctor appointments with real-time communication, AI-driven diagnostics, and a responsive UI. Integrated advanced AI algorithms and Awan LLM chatbot to enhance medical decision-making and patient engagement.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Muskan-1003/Blog-App-Postgres" target="_blank" rel="noreferrer"><img src={pern} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/Blog-App-Postgres" target="_blank" rel="noreferrer"><h2>Pen&Pixel</h2></a>
                <p>React.js,Node.js, Tailwind CSS, Shadcn, PostgresSQL, Express</p>
                <p>Designed a comprehensive full-stack blog application utilizing PostgreSQL as the relational database. The app allows users to create, read, update, and delete blog posts, providing a seamless experience across both the backend and frontend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Muskan-1003/Stock-Prediction" target="_blank" rel="noreferrer"><img src={stock} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/Stock-Prediction" target="_blank" rel="noreferrer"><h2>Stock Prediction Forecast App</h2></a>
                <p>Tech Stack: Streamlit, Prophet, Plotly, Python.</p>
<p>Stock price prediction Streamlit app using Prophet model for forecasting stock prices and visualizing forecasted data with Plotly in Python.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Muskan-1003/hand_gesture_recogniton" target="_blank" rel="noreferrer"><img src={ai} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/hand_gesture_recogniton" target="_blank" rel="noreferrer"><h2>Sign language gesture recognition</h2></a>
                <p>Tech Stack: Python, TensorFlow, MediaPipe, OpenCV, NumPy, Keras</p>
                <p>Built an ASL detector using TensorFlow, MediaPipe, and OpenCV for real-time gesture recognition, achieving over 90% accuracy. Optimized for speed, processing video input in under 30ms, to assist communication for individuals with hearing impairments.</p>
    
            </div>
            <div className="project">
                <a href="https://github.com/Muskan-1003/Expense-Tracker" target="_blank" rel="noreferrer"><img src={expense} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/Expense-Tracker" target="_blank" rel="noreferrer"><h2>Expense Tracker</h2></a>
                <p>Tech Stack: React, Hooks, Context API.</p>
                <p>Developed a robust expense tracker using React, hooks, and Context API for state management, enabling users to monitor daily financial transactions with real-time updates and ensuring high usability and reliability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Muskan-1003/snippet-manager-VS-Code-Extension" target="_blank" rel="noreferrer"><img src={vsextension} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Muskan-1003/snippet-manager-VS-Code-Extension" target="_blank" rel="noreferrer"><h2>Snippet Manager: VScode Extension</h2></a>
                <p>Tech Stack: JavaScript, Node.js, VS Code API</p>
                <p>The Snippet Manager VS Code extension allows developers to create, organize, and insert custom code snippets with unique prefixes, enhancing coding efficiency within the Visual Studio Code editor.</p>
            </div>
       
              {/*  <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;