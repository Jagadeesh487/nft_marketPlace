import '../styles/globals.css'

//internal import
import { NavBar, Footer } from "../components/components_index";

const Myapp = ({Component, pageProps}) =>  (
  <div>
    <NavBar/>
    <Component {...pageProps}/>
    <Footer/>
  </div>
);

export default Myapp;