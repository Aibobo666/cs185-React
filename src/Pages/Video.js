import React from 'react'
import './VideoElements.css'

class Video extends React.Component {

    VideoClickOn(a){
        document.getElementById("videoModal").classList.add('open');
        document.getElementById("og-video").src = a.target.src;
        var tar = document.getElementById("videoModal");
	    tar.addEventListener("click", (e)=> {
            if(e.target.classList.contains("modal_v")) document.getElementById("videoModal").classList.remove('open');
        });
    }
    render(){
        return(
            <div>
                <div className="video-gallery">
                    <div className="video-container">
                        <video className="MP4" onClick={this.VideoClickOn} src="video/beach.mp4" ></video>
                    </div>
                    <div className="video-container"> 
                        <video className="MP4" onClick={this.VideoClickOn} src="video/snow.mp4"></video>
                    </div>
                    <div className="video-container">
                        <video className="MP4" onClick={this.VideoClickOn} src="video/surfing.mp4"></video>
                    </div>
                </div>
                <div id="videoModal" className="modal_v">
                    <video id="og-video" controls className='modal-video'>
                        <source src type="video/mp4" />
                    </video>
                </div>
          </div>
        )
    }
}

export default Video
