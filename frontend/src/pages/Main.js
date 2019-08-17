import React from 'react';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/41703972?v=4" alt="" />
                    <footer>
                        <strong>Matheus Ribeiro</strong>
                        <p>Frontend and Backend Developer</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/41703972?v=4" alt="" />
                    <footer>
                        <strong>Matheus Ribeiro</strong>
                        <p>Frontend and Backend Developer</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/41703972?v=4" alt="" />
                    <footer>
                        <strong>Matheus Ribeiro</strong>
                        <p>Frontend and Backend Developer</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}