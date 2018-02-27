import React from 'react';

class MovieItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currRating: 0,
      submitted: false
    };
    this.rateMovie = this.rateMovie.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.rate = this.rate.bind(this);
  }

  rate(rating){
    this.props.createRating({rating:{user_id: this.props.currentUser.id, movie_id: this.props.g.id, rating: this.state.currRating}}).then(() => this.props.fetchRatings({user_id: this.props.currentUser.id}).then(() => this.setState({submitted: true, currRating: 0})));
  }

  updateRating(rating){
    this.setState({currRating: rating});
  }

  rateMovie(id){
    // console.log(this.props)
    if(!this.props.currentUser){
      return(
        <div id='s-bar' className='hidden-bar'>

        <div className='n-user'>sign up to rate!</div>
        </div>
      );
    }else if (this.props.ratings && !this.state.submitted) {
      // console.log(this.props.rating)
      // if(!this.props.currentUser.rating || !this.props.currentUser.rating[id]){
      if(!this.props.ratings.rating || !this.props.ratings.rating[id]){
      return(
        <div id='s-bar' className='hidden-bar'>
        <div className='row'>
          {this.state.currRating >= 1 ?
            <img onClick={() => this.rate(1)} onMouseOver={() => this.updateRating(1)} className='star' key={0} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
            <img onClick={() => this.rate(1)} onMouseOver={() => this.updateRating(1)} className='star' key={0} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
          {this.state.currRating >= 2 ?
            <img onClick={() => this.rate(2)} onMouseOver={() => this.updateRating(2)} className='star' key={1} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
            <img onClick={() => this.rate(2)} onMouseOver={() => this.updateRating(2)} className='star' key={1} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
          {this.state.currRating >= 3 ?
            <img onClick={() => this.rate(3)} onMouseOver={() => this.updateRating(3)} className='star' key={2} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
            <img onClick={() => this.rate(3)} onMouseOver={() => this.updateRating(3)} className='star' key={2} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
          {this.state.currRating >= 4 ?
            <img onClick={() => this.rate(4)} onMouseOver={() => this.updateRating(4)} className='star' key={3} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
            <img onClick={() => this.rate(4)} onMouseOver={() => this.updateRating(4)} className='star' key={3} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
        </div>
        <div className='y-rating'>submit rating: {parseFloat(this.state.currRating).toFixed(1)}</div>

      </div>
      );
    }else if (this.props.ratings.rating[id]) {
      // console.log(this.props.ratings.rating)
    // else if (this.props.currentUser.rating[id]) {
      // console.log(this.props.currentUser.rating[id])
      return(
        <div id='s-bar' className='hidden-bar'>
          <div className='row'>{this.renderRating(this.props.ratings.rating[id].rating)}</div>
          <div className='y-rating'>your rating: {parseFloat(this.props.ratings.rating[id].rating).toFixed(1)}</div>
        </div>

      );
    }
    }else if (this.state.submitted) {
      return(
      <div id='s-bar' className='bar'>
        <div className='y-rating'>thanks for rating!</div>
      </div>
    );
    }
  }

  renderRating(rating){
    // console.log(rating);
    const r = (4-rating).toFixed(1);
    // console.log(r);
    const ar = [];
    const empty = <img className='star' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1516259491/starsd.svg'/>;
    const full = <img className='star' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1516259476/star_3.svg'/>;
    const half = <img className='star' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1516259474/favorite.svg'/>;
    for(var i = 0; i < Math.floor(rating); i ++){
      ar.push(
        <img className='star' key={i} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/>
      );
    }
    if(r.slice(-1) !== '0'){
      // console.log(4 - r, r);
      ar.push(
        <img className='star' key={ar.length + 1} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/halfz.svg'/>
      );
    }
    for(var n = ar.length; n < 4; n++){
      ar.push(
        <img className='star' key={ar.length + 1} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/>
      );
    }
    // for(var i = rating; i < 4; i ++){
    //   ar.push(<img className='star' key={i} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1516259491/starsd.svg'/>);
    // }
    return(
      ar
    );
  }



  render(){
    // console.log(this.props, this.state);
    const g = this.props.g;
    const idx = this.props.idx;
    return(
      <div id='i-movie-item' className='fade' key={idx}>
        <div id='r-bar' className='bar'>
          <div className='row'>
          {this.renderRating(g.avg)}
        </div>
          {g.avg ? <div className='r-avg'>average rating: {parseFloat(g.avg).toFixed(1)}</div> : <div className='r-avg'>no ratings</div>}
        </div>
          {this.rateMovie(g.id)}
        <img className='i-movie-poster' src={g.poster}/>
        <div id='i-movie-title'>{g.title}</div>
        <div id='i-bar' className='hidden-bar'>
          <div className='row'>released: {g.release}</div>
            <div className='row'>
              <div id='watch' className='icon' onClick={() => this.props.openModal(g.title, g.release)}><img src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519445886/human-eye-shape.svg' className='icon'/></div>
                {g.trailer.slice(0, 30) === 'https://www.youtube.com/embed/' ?
              <div id='watch' className='icon' onClick={() => this.props.openModal(g.title, g.release)}><img src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519444507/trailer_1.svg' className='icon'/></div> :
              <a id='watch' className='icon' target='_blank' href={g.trailer}><img src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519444507/trailer_1.svg' className='s-icon'/></a>}
            </div>
          </div>
      </div>
    );
  }
}

export default MovieItem;
