import React from 'react';

class Welcome extends React.Component{

  render(){
    return(
      <div id='welcome-c' className='container'>
        <div id='w-message' className='fade' >WELCOME to NetMix!</div>
        <img id='w-bi' className='fade' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519384964/tumblr_static_2012_movies_collage_copy_2.jpg'/>
      </div>
    );
  }
}

export default Welcome;
