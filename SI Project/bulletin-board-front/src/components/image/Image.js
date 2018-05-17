import React, { Component } from 'react';
import axios from 'axios';

class Image extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        rotation: 0,
        selectedFile:null
      }
      this.source = props.source;
      
      this.rotate = this.rotate.bind(this);
    }

    fileSelectedHandler=event=>{
       this.setState({
         selectedFile:event.target.files[0]
    })
  }

    fileUploadHandler=()=>{
      const fd=new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
       axios.post('',fd)
      
    }
    
    rotate(){
      let newRotation = this.state.rotation + 90;
      if(newRotation >= 360){
        newRotation =- 360;
      }
      this.setState({
        rotation: newRotation,
      })
    }
    
    render(){
      const { rotation } =  this.state;
      return <div className="App-image">
               <input type="file" onChange={this.fileSelectedHandler}/>
               <button onClick={this.fileUploadHandler}>Upload</button>
                <img style={{transform: `rotate(${rotation}deg)`}} src={this.source} onClick={this.rotate} width="300" height="300" />
            </div>
    }
  }

  export default Image;