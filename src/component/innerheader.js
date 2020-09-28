import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import $ from 'jquery';

class InnerHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            customsizevalue:null
        }
    }
    handleChange=(e)=>{
        const value = e.target.value
        this.setState({ customsizevalue: value.trim().substr(0,4) });
        if(value.trim().substr(0,4) >0){
            $('.customsize a').attr('data-value',value.trim().substr(0,4));
            $('.customsize a').html(value.trim().substr(0,4)+'PX');
        }
        else{
            $('.customsize a').attr('data-value','0');
            $('.customsize a').html('0PX');
        }
    }
    forceDownload=(gh)=>{
        var url='https://lh3.googleusercontent.com/-2gKs8y2mQ3k/AAAAAAAAAAI/AAAAAAAAAgs/rSNK9GTVy80/s'+gh+'/photo.jpg';
        var fileName = 'sagarmistry('+gh+')'
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    }
  render() {
    return (
      <>
      {/* <ipl-progress-indicator style={{display:'none'}} ><div className="indicator-container"><div className="first-indicator"></div><div className="second-indicator"></div></div> <div className="tip-wrapper"><div className="logo-frame">
        <div className="row">
    <div className="col">
      <div className="panelprogress scale-transition ">
          <img src="https://lh3.googleusercontent.com/-2gKs8y2mQ3k/AAAAAAAAAAI/AAAAAAAAAgs/rSNK9GTVy80/s150/photo.jpg" className="circle responsive-img pulse z-depth-3"/>
        <span className="black-text">Sagar Mistry</span>
      </div>
    </div>
  </div>
    </div></div> </ipl-progress-indicator> */}
	<div id="modal1" className="modal" >
    <div className="modal-content">
      <h4>Download Image</h4>
		<div className="sizebtn" >
			<a className="waves-effect waves-light btn blue darken-4" download data-value="512" target="_blank" onClick={()=>this.forceDownload(512)}>512px</a>
			<a className="waves-effect waves-light btn blue darken-4" download data-value="256"  target="_blank" onClick={()=>this.forceDownload(256)}>256px</a>
			<a className="waves-effect waves-light btn blue darken-4" download data-value="128" target="_blank" onClick={()=>this.forceDownload(128)}>128px</a>
			<a className="waves-effect waves-light btn blue darken-4" download data-value="64" target="_blank" onClick={()=>this.forceDownload(64)}>64px</a>
			<a className="waves-effect waves-light btn blue darken-3"  download data-value="32" target="_blank" onClick={()=>this.forceDownload(32)}>32px</a>
			<a className="waves-effect waves-light btn blue darken-2" download data-value="24" target="_blank" onClick={()=>this.forceDownload(24)}>24px</a>
			<a className="waves-effect waves-light btn blue darken-1" download data-value="16" target="_blank" onClick={()=>this.forceDownload(16)}>16px</a>
              <div className="row">
                <div className="col s12 customsize">
                    <label>Custom Size:</label>
                  <input placeholder="XXXX" id="sizepx" type="number" min="1" max="5" maxLength="4" onChange={this.handleChange} name='customsizevalue' value={this.state.customsizevalue}/>
                   <a className={`waves-effect waves-light btn blue darken-4 ${this.state.customsizevalue === null || this.state.customsizevalue === '' ?'disabled':''}`} download data-value="" target="_blank" onClick={()=>this.forceDownload(this.state.customsizevalue !== null ?this.state.customsizevalue:512)}>XXXpx</a>
                </div>
              </div>
		</div>
    </div>
  </div>
  </>

    );
  }
}

export default InnerHeader;