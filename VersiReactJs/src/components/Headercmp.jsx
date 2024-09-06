import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    render() {
        return (
            <header className="pb-6 bg-white lg:pb-0">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src="img_src/fixlogo.png" alt="Logo" className="h-8 w-auto" />
                        </div>

                        {/* Navigation */}
                        <nav className="hidden lg:flex space-x-10">
                            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Home
                            </a>
                            <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                About
                            </a>
                            <a href="/drama-list" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Drama List
                            </a>
                            <a href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                onClick={this.toggleMenu} 
                                type="button" 
                                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded={this.state.menuOpen}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Icon for menu button */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={this.state.menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {this.state.menuOpen && (
                        <nav className="lg:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                <a href="/" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Home</a>
                                <a href="/about" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">About</a>
                                <a href="/drama-list" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Drama List</a>
                                <a href="/contact" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Contact</a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        );
    }
}

export default Header;
