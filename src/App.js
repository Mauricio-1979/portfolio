import { About, Footer, Header, Skills, Work} from './container';
import { NavBar } from './components';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  );
}

export default App;
