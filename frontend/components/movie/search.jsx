import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      rating: '',
      release: '',
      month: '',
      day: '',
      year: ''
    };
    this.update = this.update.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateRating(num){
    this.setState({rating: num});
  }

  render(){
    return(
        <div id='search-holder' className='column'>
          <div id='search-row' className='row'>
            <div id='left-search' className='row'>
              <div className='filter'>title</div>
                <input className='search-input' value={this.state.search} onChange={this.update('search')} placeholder='search'/>
            </div>
            <div id='right-search' className='row'>
              <div className='filter'>min rating</div>
                <div id='star-search' className='row'>
                  <div className='star' onMouseOver={() => this.updateRating(0)}></div>
                {this.state.rating >= 1 ?
                  <img onMouseOver={() => this.updateRating(1)} className='star' key={0} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
                  <img onMouseOver={() => this.updateRating(1)} className='star' key={0} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
                {this.state.rating >= 2 ?
                  <img onMouseOver={() => this.updateRating(2)} className='star' key={1} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
                  <img onMouseOver={() => this.updateRating(2)} className='star' key={1} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
                {this.state.rating >= 3 ?
                  <img onMouseOver={() => this.updateRating(3)} className='star' key={2} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
                  <img onMouseOver={() => this.updateRating(3)} className='star' key={2} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
                {this.state.rating >= 4 ?
                  <img onMouseOver={() => this.updateRating(4)} className='star' key={3} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620774/fullz.svg'/> :
                  <img onMouseOver={() => this.updateRating(4)} className='star' key={3} src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519620775/emptyz.svg'/> }
                  <div className='star'></div>
                </div>
              </div>
            </div>
            <div id='search-row' className='row'>
              <div id='left-search' className='row'>
                <div className='filter'>date</div>
                <input type="text"
                  value={this.state.month}
                  onChange={this.update('month')}
                  className="syr-input"
                  placeholder='xx'/>
                <input type="text"
                  value={this.state.day}
                  onChange={this.update('day')}
                  className="syr-input"
                  placeholder='xx'/>
              <input type="text"
                value={this.state.year}
                onChange={this.update('year')}
                className="syr-input"
                placeholder='xxxx'/>
            </div>
          <div className='s-button' onClick={() => this.props.search(this.state.search, this.state.rating, this.state.month,this.state.day,this.state.year)}>search</div>
        </div>
      </div>
    );
  }
}

export default Search;
