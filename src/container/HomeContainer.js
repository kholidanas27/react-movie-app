import React, { Component } from 'react'
import { NavbarComponent } from '../components/NavbarComponent';
import { connect } from 'react-redux';
import MoviesContainer from './../container/pages/MoviesContainer';

export class HomeContainer extends Component {
    render() {
        return (
            <div>
                <NavbarComponent/>
                <MoviesContainer/> 
                <section className="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Selamat datang di Movies App</h1>
                    <p class="mb-8 leading-relaxed">Temukan film favorit mu melalui kolom pencarian diatas </p>
                    
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(HomeContainer);

