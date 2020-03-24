import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <div className="isi__video">
                <video controls  >
                    <source src="http://localhost:4000/archives/video/video.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}
