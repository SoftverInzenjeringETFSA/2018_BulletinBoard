import React, { Component } from 'react';
import axios from 'axios';

class Image extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        rotation: 0,
        selectedFile:null,
        file:'',
        imagePreviewUrl:''
  
      }
      this.source = props.source;
      
      this.rotate = this.rotate.bind(this);
    }

     //PROŠLA VERZIJA
/* 
    fileSelectedHandler=event=>{
       this.setState({
         selectedFile:event.target.files[0]
    })
  }

    fileUploadHandler=()=>{
      const fd=new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
       axios.post('',fd) ??????
      
    }
    */

    _handleSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
      
    }
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
         imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
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
      let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{width: '100%', height: '100%'}} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview" style={{transform: `rotate(${rotation}deg)`}}  onClick={this.rotate}>
       
        {$imagePreview }
        </div>
      </div>
    )
  }
  }

  export default Image;

 


   

   
    
 /*/   render(){
      const { rotation } =  this.state;
      return <div className="App-image">
               
                <img style={{transform: `rotate(${rotation}deg)`}} src={this.source} onClick={this.rotate} width="300" height="300" />
            </div>
    }
  }

  export default Image;*/