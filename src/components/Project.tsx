import React from "react";
import faceEmotion from "../assets/images/faceEmotion.jpg"
import ondoc from "../assets/images/ondoc.png"
import stock from "../assets/images/stock1.png"
import pern from "../assets/images/pernmock1.png"
import ai from "../assets/images/ai.png"
import expense from "../assets/images/expense.png"
// import notion from "../assets/images/notion.png"
import vsextension from "../assets/images/vsextension.png"
import Exploryaar from "../assets/images/Exploryaar.jpg"
import Plantonia from "../assets/images/Plantonia.jpg"
import Webclash from "../assets/images/Webclash.jpg"
import Portfolio from "../assets/images/Portfolio.jpg"


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={faceEmotion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Face emotion recognition</h2></a>
                <p>Tech stack: Python, OpenCV, Tensorflow, CNN, Keras. Numpy</p>
                <p>Developed a face emotion recognition system using computer vision and machine learning. Utilized deep learning models to detect and classify emotions in real-time from facial expressions, improving user engagement in applications like customer feedback analysis.</p>
                
            </div>
            <div className="project">
                <a href="https://github.com/KhushiJaiswal09/Plantonia" target="_blank" rel="noreferrer"><img src={Plantonia} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KhushiJaiswal09/Plantonia" target="_blank" rel="noreferrer"><h2>Plantonia</h2></a>
                <p>Tech Stack: HTML, CSS, SCSS, JavaScript, Bootstrap, PHP, SQLite, WAMP</p>
                <p>Created a platform for promoting environmental awareness and sustainable living. Integrated WAMP and SQLite for backend management, enabling users to share eco-friendly ideas, tips, and solutions. The platform fosters community engagement and encourages adopting sustainable practices.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KhushiJaiswal09/Web-Clash/tree/main/WEB-CLASH-main" target="_blank" rel="noreferrer"><img src={Webclash} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KhushiJaiswal09/Web-Clash/tree/main/WEB-CLASH-main" target="_blank" rel="noreferrer"><h2>Web Clash</h2></a>
                <p>HTML, CSS, JavaScript, Bootstrap, PHP, MongoDB</p>
                <p>Created a website development service for small businesses, providing customizable templates and affordable solutions. The platform streamlined the website creation process, enabling non-technical users to enhance their digital presence efficiently, helping businesses grow and engage with online customers.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KhushiJaiswal09/Portfolio/tree/main/Portfolio_website" target="_blank" rel="noreferrer"><img src={Portfolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KhushiJaiswal09/Portfolio/tree/main/Portfolio_website" target="_blank" rel="noreferrer"><h2>Portfolio maker</h2></a>
                <p>Tech Stack: Streamlit, Prophet, Plotly, Python.</p>
                <p>Stock price prediction Streamlit app using Prophet model for forecasting stock prices and visualizing forecasted data with Plotly in Python.</p>
            </div>

            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={Exploryaar} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>ExplorYaar</h2></a>
                <p>Tech Stack: React, MongoDB, AWS, </p>
                <p>Built a travel planning platform using React, Flask, and Amazon services like SageMaker for AI, Location Service for mapping, and DynamoDB for database. Integrated AI for personalized recommendations and deployed with Docker for scalability.</p>
            </div>
       
              {/* 
                          <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={ai} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Sign language gesture recognition</h2></a>
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