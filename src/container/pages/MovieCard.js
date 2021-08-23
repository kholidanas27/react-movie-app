import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/modal.css';

export class MovieCard extends Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    const { movie } = this.props;

    return (
    <div>
      <section className="text-gray-600 body-font">
                <div className="container">
                    <div className="flex justify-center py-4">
                    <div className="lg:w-1/2 md:w-1/4">
                        <div className="h-full flex-col items-center text-center">
                        <img alt="team" onClick={this.handleShowDialog} className="flex-shrink-0 rounded-lg w-40 h-50 object-cover object-center mb-4" src={movie.Poster} />
                        {this.state.isOpen && (
                        <dialog
                          className="dialog"
                          style={{ position: "absolute" }}
                          open
                          onClick={this.handleShowDialog}
                        >
                          <img
                            className="image"
                            src={movie.Poster}
                            onClick={this.handleShowDialog}
                            alt="no image"
                          />
                        </dialog>
                      )}
                        <div className="w-full">
                            <h2 className="title-font font-medium text-sm text-gray-900">{movie.Title}</h2>
                            <h3 className="text-gray-500 mb-3">{movie.Year}</h3>
                            <span className="inline-flex">
                            <Link to={'/movie/' + movie.imdbID}>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Detail</button> 
                            </Link>
                            </span>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </section>
      </div>
    );
  }
}

export default MovieCard;