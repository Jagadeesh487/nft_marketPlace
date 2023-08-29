import '../styles/globals.css'

//internal import
import { NavBar, Footer } from "../components/components_index";
import { NFTMarketplaceProvider } from '../context/NFTMarketplaceContext';

const Myapp = ({Component, pageProps}) =>  (
  <div>
    <NFTMarketplaceProvider>
    <NavBar/>
    <Component {...pageProps}/>
    <Footer/>
    </NFTMarketplaceProvider>
  </div>
);

export default Myapp;