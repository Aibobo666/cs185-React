import React from 'react'
import './ImageElements.css';


class Image extends React.Component {
    
    imgClickOn(a){
        document.getElementById("modal").classList.add('open');
        document.getElementById("modal-img").src = a.target.src;
        var tar = document.getElementById("modal");
	    tar.addEventListener("click", (e) =>{
            if(e.target.classList.contains('modal')) document.getElementById("modal").classList.remove('open');
        });
    }
    
    // componentDidMount() {
    //     window.addEventListener('scroll', this.scrollFunction);
    // }

    // scrollFunction(){
    //     var myButton = document.getElementById("myBtn");
    //     if(document.body.scrollTop > 0.25*(document.body.scrollHeight) || 
    //         document.documentElement.scrollTop > 0.25*(document.documentElement.scrollHeight)){
    //             myButton.style.display = "block";
    //         }else{
    //             myButton.style.display = "none";
    //         }
    // }
    
    topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render(){
        return (
            <div>
                <button id="myBtn" title="GO-top" onClick={this.topFunction}>TOP</button>

                <div className="gallery">
                    <div className="img-container">
                        <img onClick={this.imgClickOn} src="img/godFather.jpg" alt="godFather" />
                    </div>
                    <div className="img-container">
                        <img onClick={this.imgClickOn} src="img/greenbook.jpg" alt="greenbook" />
                    </div>
                    <div className="img-container">
                        <img onClick={this.imgClickOn} src="img/interstella.jpg" alt="interstella" />
                    </div>
                    <div className="img-container">
                        <img onClick={this.imgClickOn} src="img/moonlight.jpg" alt="moonlight" />
                    </div>
                    <div className="img-container">
                        <img onClick={this.imgClickOn} src="img/pulpFiction.jpg" alt="pulpFiction" />
                    </div>
                    <div className="img-container">
                        <img onClick={this.imgClickOn} src="img/titanic.jpg" alt="titanic" />
                    </div>       
                </div>
        
                <div className="modal" id='modal'>
                    <img src="img/godFather.jpg" alt="" className="modal-img" id='modal-img' />
                </div>
            </div>    
            )
    }

}

export default Image
