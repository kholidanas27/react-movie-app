import React, { Component } from 'react'

import { connect } from 'react-redux';

import {
    searchMovie,
    fetchMovies,
    setLoading
} from '../actions/searchActions';

export class SearchComponent extends Component {
    onChange = e => {
    // let matches = []
    // if (e.length>0) {
    //     matchs = movies.filter(movies => {
    //         const regex = new RegExp(`${e}`, "gi");
    //         return movies.Title.match(regex)
    //     })
    //     }
    //     console.log('matches', matches)
    this.props.searchMovie(e.target.value);
    };

    
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    };

    render() {
        return (
            <div>
                <form id="searchForm" onSubmit={this.onSubmit}>
                <div class="border rounded overflow-hidden flex">
                        <input type="text"
                            name="searchText"
                            onChange={this.onChange} className="form-control px-5 py-2" placeholder="Cari Film..." />
                        <button className="flex items-center justify-center px-4 border-l bg-indigo-500 hover:bg-indigo-600" type="submit">
                        <svg class="h-4 w-4 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                        </button>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchComponent); 