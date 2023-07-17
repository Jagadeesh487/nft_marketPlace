import '../styles/globals.css'

//internal import
import { NavBar } from "../components/components_index";

const Myapp = ({Component, pageProps}) =>  (
  <div>
    <NavBar/>
    <Component {...pageProps}/>
  </div>
);

export default Myapp;