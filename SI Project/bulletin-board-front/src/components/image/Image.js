import React, { Component } from 'react';

class Image extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        rotation: 0
      }
      this.source = props.source;
      
      this.rotate = this.rotate.bind(this);
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
                <img style={{transform: `rotate(${rotation}deg)`}} src={this.source} onClick={this.rotate} width="300" height="300" />
            </div>
    }
  }

  export default Image;