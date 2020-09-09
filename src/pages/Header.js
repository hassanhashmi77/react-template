import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (


            <header id="header">
                <h1 id="logo"><a href="index.html">Landed</a></h1>
                <nav id="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="http://react-template2020.surge.sh/">Layouts</a>
                            <ul>
                                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                <li><a href="right-sidebar.html">Right Sidebar</a></li>
                                <li><a href="no-sidebar.html">No Sidebar</a></li>
                                <li>
                                    <a href="http://react-template2020.surge.sh/">Submenu</a>
                                    <ul>
                                        <li><a href="http://react-template2020.surge.sh/">Option 1</a></li>
                                        <li><a href="http://react-template2020.surge.sh/">Option 2</a></li>
                                        <li><a href="http://react-template2020.surge.sh/">Option 3</a></li>
                                        <li><a href="http://react-template2020.surge.sh/">Option 4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="elements.html">Elements</a></li>
                        <li><a href="http://react-template2020.surge.sh/" class="button primary">Sign Up</a></li>
                    </ul>
                </nav>
            </header>



        );
    }
}
export default Header;