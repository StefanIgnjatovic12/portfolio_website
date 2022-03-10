import Navbar from './Navbar.js'
import Content from './Content.js'
import ContactForm from './ContactForm'
import '../CSS/App.css'
import ThemeMode from "./ThemeMode";


export default function App() {

    return (

        <div className="grid-container">
            <Navbar/>
            <Content/>
            <ContactForm/>

        </div>
    );
}

// const ScrollDemo = () => {
//    const myRef = useRef(null)
//
//    const executeScroll = () => myRef.current.scrollIntoView()
//    // run this function from an event handler or an effect to execute scroll
//
//    return (
//       <>
//          <div ref={myRef}>Element to scroll to</div>
//          <button onClick={executeScroll}> Click to scroll </button>
//       </>
//    )
// }


