import React from 'react';

class UploadMovie extends React.Component{

  constructor(props){
    super(props);
    // console.log(this.props);
    this.state = {
      title: '',
      release: '',
      trailer: '',
      poster: '',
      month: '',
      day: '',
      year: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.checkFilled = this.checkFilled.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  checkFilled(){
    if(this.state.month === '' || this.state.day === '' || this.state.year ==='' || this.state.title ==='' ||
    this.state.poster === '' || this.state.trailer === ''){
      return true;
    }else{
      return false;
    }
  }

  handleSubmit(){
    const release = this.state.month + this.state.day + this.state.year;
    this.props.createMovie({movie: {title: this.state.title, release: release,
      trailer: this.state.trailer, poster: this.state.poster, user_id: this.props.currentUser.id
    }}).then(() => this.props.history.push('/home'));
  }


  render(){
    // console.log(this.props);
    const er = this.state.errors;
    return(
      <div id='login-c' className="container">
        <img id='s-bi' className='fade' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519431115/Cx7osdeRz.jpg'/>
        <div id='login-fb' className="fade">
          <div className="form-top">Upload</div>
          <div className="form-body">
            <label id='form-c' className="column">
              <div className="inp-tag">movie title</div>
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="signup-input"
                placeholder='title'/>
            </label>
            <label id='form-c' className="column">
              <div className="inp-tag">trailer link</div>
              <input type="text"
                value={this.state.trailer}
                onChange={this.update('trailer')}
                className="signup-input"
                placeholder='https://www.youtube.com/embed/your_video'/>
            </label>
            <label id='form-c' className="column">
              <div className="inp-tag">poster link</div>
              <input type="text"
                value={this.state.poster}
                onChange={this.update('poster')}
                className="signup-input"
                placeholder='poster image hosting link'/>
            </label>
            <label className="release-holder">
              <div className="inp-tag">release date (enter digits only)</div>

              <div className='release'>
              <div className='col'>
              <div className="inp-tag">month</div>
              <input type="text"
                value={this.state.month}
                onChange={this.update('month')}
                className="yr-input"
                placeholder='xx'/>
              </div>
              <div className='col'>
              <div className="inp-tag">day</div>
              <input type="text"
                value={this.state.day}
                onChange={this.update('day')}
                className="yr-input"
                placeholder='xx'

                />
              </div>
              <div className='col'>

              <div className="inp-tag">year</div>
              <input type="text"
                value={this.state.year}
                onChange={this.update('year')}
                className="yr-input"
                placeholder='xxxx'

                />
              </div>
            </div>
              </label>


        </div>

        {this.checkFilled() ? <div className="f-button">upload</div> : <div className="s-button" onClick={this.handleSubmit}>upload</div>}

      </div>
      </div>
    );
  }
}

export default UploadMovie;
