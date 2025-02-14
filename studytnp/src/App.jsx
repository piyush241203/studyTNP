// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <Benefits />
//         <Collaboration />
//         <Services />
//         <Pricing />
//         <Roadmap />
//         <Footer />
//       </div>

//       <ButtonGradient /> 
//     </>
//   );
// };

// export default App;










import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./components/Home";
import CourseVideo from "./components/CourseVideo";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseVideo />} />
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;
