import React from 'react';
import './App.css';
// import Loader from './components/Loader/Loader';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import VisionSection from './components/VisionSection/VisionSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import ElectrovoltAppFeatures from './components/ElectrovoltAppFeatures/ElectrovoltAppFeatures';
import PartnerSection from './components/PartnerSection/PartnerSection';
import Footer from './components/Footer/Footer';

const App = () => {

  // const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  // // Handle unmounting of the Loader component
  // const handleUnload = () => {
  //   setIsLoaderVisible(false);
  // };

  return (
    <div>
      {/* Only show the Loader if isLoaderVisible is true */}
      {/* {isLoaderVisible && <Loader onUnload={handleUnload} />} */}

      {/* The rest of your app content */}
      {/* {!isLoaderVisible && ( */}
      <>
        <Nav />
        <Hero />
        <VisionSection> </VisionSection>
        <SolutionsSection></SolutionsSection>
        <ElectrovoltAppFeatures></ElectrovoltAppFeatures>
        <PartnerSection></PartnerSection>
        <Footer />
      </>
      {/* )} */}
    </div>
  );
};

export default App;
