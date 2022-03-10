import '../CSS/Navbar.css'
import Scroll, {Element, Link} from 'react-scroll'
import ThemeMode from "./ThemeMode";

const ScrollLink = Scroll.ScrollLink

export default function Navbar() {
    return (
        <Element id="scrollToTop">
            <nav id='test' className="navbar">

                <ul className="navbar-list">

                    <li className="navbar-links">
                        <Link
                            to="scrollToTop"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="navbar-links">
                        <Link
                            to="scrollToSkills"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            Skills
                        </Link>
                    </li>

                    <li className="navbar-links">
                        <Link
                            to="scrollToProjects"
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            Projects
                        </Link>
                    </li>

                    <li className="navbar-links">
                        <Link
                            to="scrollToContact"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="navbar-links">
                        <ThemeMode

                        />



                    </li>
                </ul>
            </nav>
        </Element>
    )
}

// <ScrollLink
//        to="example-destination"
//        spy={true}
//        smooth={true}
//        duration={500}
//        className='some-class'
//        activeClass='some-active-class'
//      >
//        Link Text Goes Here
//      </ScrollLink>