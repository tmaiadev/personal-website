import React, { Component } from 'react';
import App from '../app/app';
import './app-projects.css';
import IMAGE_SNAKE from './images/app-snake.png';
import IMAGE_TICTACTOE from './images/app-tictactoe.png';
import IMAGE_PODCATCHER from './images/app-podcatcher.png';
import IMAGE_PWASHOP from './images/app-pwashop.png';
import IMAGE_NOTES from './images/app-notes.png';
import IMAGE_VINI from './images/app-vini.png';

class AppProjects extends Component {
    state = {
        projects: [
            {
                title: 'Snake',
                description: 'Mini Game',
                image: IMAGE_SNAKE,
                link: 'https://tmaiadev-snake.netlify.com/'
            },
            {
                title: 'TicTacToe',
                description: 'Mini Game',
                image: IMAGE_TICTACTOE,
                link: 'https://tmaiadev-tictactoe.netlify.com/'
            },
            {
                title: 'Podcatcher',
                description: 'Free Podcast Player. PWA.',
                image: IMAGE_PODCATCHER,
                link: 'https://podcatcher.app/'
            },
            {
                title: 'PWA Shop',
                description: 'Open source e-commerce created with react and firebase',
                image: IMAGE_PWASHOP,
                link: 'http://pwa-shop-7c365.firebaseapp.com'
            },
            {
                title: 'Notes',
                description: 'Notes is a simple and easy way to take notes and make lists',
                link: 'https://notes-4e0e9.firebaseapp.com/',
                image: IMAGE_NOTES
            },
            {
                title: 'Vini Maia - Poeira Estelar',
                description: 'Listen to the latest album of Vini Maia',
                link: 'https://vinimaia.com.br/',
                image: IMAGE_VINI
            }
        ]
    }

    render() {
        return <App title="Projects"
                    history={this.props.history}
                    pathname="/projects">
            <div className="app-projects">
                <div className="app-projects__content">
                    <ul className="app-projects-list">
                        {this.state.projects.map((p, i) => {
                            return <li key={i}
                                       className="app-projects-list__item">
                                <div className="app-projects-list__item__icon"
                                     style={{ backgroundImage: `url(${p.image})` }} />
                                <div className="app-projects-list__item__title">
                                    <div>{p.title}</div>
                                    <div className="app-projects-list__item__title__description">
                                        {p.description}
                                    </div>
                                </div>
                                <div className="app-projects-list__item__cta">
                                    <a href={p.link}
                                    className="app-projects-list__item__cta__btn"
                                    target="_blank">
                                        GET
                                    </a>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </App>
    }
}

export default AppProjects;