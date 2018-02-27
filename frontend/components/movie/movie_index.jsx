import React from 'react';
import Modal from 'react-modal';
import MovieItem from './movie_item';

import {
  Link
} from 'react-router-dom';

class MovieIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      open: false,
      modal_movie_name: '',
      modal_release_date: '',
      rating: 0,
      title: '',
      release: ''

    };
    // this.showMovies = this.showMovies.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.search = this.search.bind(this);
    // this.renderRating = this.renderRating.bind(this);
  }


  search(title, rating, release){
    this.props.fetchMovies({title: title, rating: rating, release: release});
  }



  openModal(m, r) {
    console.log('haha')
    this.setState({open: true, modal_movie_name: m, modal_release_date: r });
  }

  closeModal() {
    this.setState({open: false});
    console.log('haha', this.state)

  }

  componentDidMount(){
    if(this.props.currentUser){
      this.props.fetchMovies({title: this.state.title, rating: this.state.rating, release: this.state.release}).then(() => (
        this.props.fetchRatings({user_id: this.props.currentUser.id})).then(() => this.setState({loaded: true})));
    }else{
      this.props.fetchMovies({title: this.state.title, rating: this.state.rating, release: this.state.release }).then(() => this.setState({loaded: true}));
    }
  }

  showMovies(movies){
    const ar = [];
    movies.forEach((g, idx) =>{
      ar.push(
        <MovieItem g={g} idx={idx} currentUser={this.props.currentUser} createRating={this.props.createRating} openModal={this.openModal} ratings={this.props.ratings} fetchRatings={this.props.fetchRatings}/>
      );
    });
    return(ar);
  }

  render(){
    if(!this.state.loaded){
      return(
        <div className='loading'>loading...</div>
      );
    }


    return(
      <div className='container'>
        <div className='index-container-layer'>
          <div className='index-holder'>
            <Modal isOpen={this.state.open}
              onRequestClose={this.closeModal}
              shouldCloseOnOverlayClick={true}
              ariaHideApp={false}
              className={{
                base: 'myClass',
                afterOpen: 'bmod',
                beforeClose: 'myClass_before-close'
                }}>
                <div className='frame'>
                  <div className='m-movie-name'>{this.state.movie_name}</div>
                  <div className='m-release-date'>{this.state.release_date}</div>
                  <iframe width="420" height="315" src="https://www.youtube.com/embed/R-P6p86px6U" frameBorder="0" allowFullScreen ></iframe>
                </div>
            </Modal>
            {this.props.movies.movies ? this.showMovies(this.props.movies.movies) : null}
          </div>
        </div>
      </div>
    );
  }
}


export default MovieIndex;
