import React, { Component } from 'react'
import SearchComponent from './SearchComponent'

export class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <header className="text-gray-600 body-font font-semibold shadow-sm">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://img.icons8.com/nolan/64/disney-movies-.png" className="w-10 h-10"/>
                    <span className="ml-3 text-xl">Movies App</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <SearchComponent/>
                    </nav>
                </div>
                </header>
            </div>
        )
    }
}
export default NavbarComponent;
