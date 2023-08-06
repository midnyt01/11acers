import { Routes, Route } from "react-router-dom";
import LandingPage from './routes/landing-page.component';
import AboutPage from "./routes/about-me.component";
import ContactPage from './routes/contact.component';
import BlogPage from "./routes/blogs.component";
import SingleBlogPage from "./components/blogs/blogs-page.component";
import CurrentProperties from "./components/properties/current-properties-page.component";
import RentoutProperties from "./components/properties/rent-out-properties-page.component";

// 3rd party library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

// Images and Logo
// import mainLogo from "./assets/tms_logo.png"
// import logo from './logo.svg';

// Css
import './App.css';

library.add(fas, fab, far)

function App() {
  return (
    <Routes>
      {/* Common */}
      {/* <Route path="/mainlogo" element={<mainLogo />}/> */}

      {/* Pages */}
      <Route path="/" element={<LandingPage />}/>
      <Route path="/blogs" element={<BlogPage />}/>
      <Route path="/blogpage" element={<SingleBlogPage />}/>
      <Route path="/properties/current-projects" element={<CurrentProperties/>}/>
      <Route path="/properties/rentout-projects" element={<RentoutProperties/>}/>
      <Route path="/about-us" element={<AboutPage />}/>
      <Route path="/contact" element={<ContactPage />}/>

      {/* <Route path="/about" element={<AboutPage />}/> */}
    </Routes>
  );
}

export default App;