import React from 'react';

class BookComponent extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book__img-container">
          <div className="book__img-container-number">{this.props.number}</div>
          <img className="book__img-container-image" src={this.props.image} alt="Logo">
          </img>
        </div>
        <div className="book__title">{this.props.title}</div>
        <div className="book__author">By {this.props.author}</div>
      </div>
    )
  }
}

export default BookComponent;

