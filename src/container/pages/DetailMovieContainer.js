import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarComponent from '../../components/NavbarComponent'
import { fetchMovie, setLoading } from './../../actions/searchActions';

export  class DetailMovieContainer extends Component {
    componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
            <div>
                <NavbarComponent/>
               <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="poster" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={movie.Poster}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{movie.Genre}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{movie.Title}</h1>
                        <div className="flex mb-4">
                        <span className="flex items-center">
                            {movie.Rated}
                            <span className="text-gray-600 ml-3">{movie.imdbRating}</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                            {movie.Released}
                        </span>
                        </div>
                        <p className="leading-relaxed">{movie.Plot}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3 text-semibold">Director : {movie.Director}</span>
                        </div>
                        <div className="flex ml-6 items-center">
                            <span className="mr-3">Writer : {movie.Writer}</span>
                        </div>
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-sm text-gray-900">{movie.Actors}</span>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                        <a href={'https://www.imdb.com/title/' + movie.imdbID}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        IMDB
                        </a>
                        </button>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                        <Link to="/"
                            rel="noopener noreferrer"
                        >
                        Kembali
                        </Link>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 
            </div>
        );

    let content = movieInfo;
    return <div>{content}</div>;
    }
}
const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(DetailMovieContainer);
