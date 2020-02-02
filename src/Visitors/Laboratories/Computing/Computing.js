import React, { Component } from 'react'
import BackgroundLab from '../components/BackgroundLab'
import BossLab from '../components/BossLab'
import MisionVisionLab from '../components/MisionVisionLab'

export default class Computing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            background : {
                title: 'INFORMÁTICA',
                description: 'LA INFORMÁTICA ES IMPORTANTE PERO NO PARA LAS MATEMÁTICAS',
                question: '¿Qué es la Informática?',
                icon: 'fas fa-laptop-code',
                image: 'http://localhost:4000/archives/code.png',
                video: 'http://localhost:4000/archives/video/video.mp4'
            },
            boss : {
                photo: 'http://localhost:4000/archives/harry.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit minima dignissimos enim perferendis ullam, quis iure esse natus ipsa iste reiciendis error laudantium dolor quo sapiente, sequi sit voluptate?' 
            }
        }
    }

    render() {
        return (
            <div>
                {console.log("en el compting", this.state.title)}
                <BackgroundLab
                    title={this.state.background.title}
                    description={this.state.background.description}
                    question={this.state.background.question}
                    icon={this.state.background.icon}
                    image={this.state.background.image}
                    video={this.state.background.video} />

                <main>
                    <hr />
                    <BossLab 
                        photo={this.state.boss.photo}
                        description={this.state.boss.description}/>
                    
                    <MisionVisionLab />
                </main>
            </div>
        )
    }
}

