import React, { Component } from 'react'
import NavbarComponent from '../../components/NavbarComponent'
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import Spinner from '../../assets/spinner.gif';
import { SearchComponent } from '../../components/SearchComponent';

export class LandingSearch extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="">
                <NavbarComponent/>
                <SearchComponent/>
                { loading ? <Spinner /> : <MoviesContainer/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(LandingSearch);
