import React from 'react';
import '../assets/footer.css'


export default function Footer() {
    return (
        <footer className="footer ">
            <div className="footer-content">
            
                <div className="footer-links">
                    <nav>
                        <ul>
                            <li> <a href="https://github.com/Hassan1ahmad" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-github"></i>
                    </a></li>
                            <li> <a href="https://www.instagram.com/hassanopahmadxd/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                    </a></li>
                            <li>  <a href="https://linkedin.com/in/hassan-ahmad-" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                    </a></li>
                            <li><a href="mailto:hassan1ahmad999@gmail.com">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Hassan Ahmad. All Rights Reserved.
            </div>
        </footer>
    );
}
