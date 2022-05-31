import { /*BrowserRouterHashRouter as Router*/HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages';
//import SigninPage from './pages/signin'
//import About from './pages/AboutMe'

function App() {
  return (
      <>
          <HashRouter base='https://gonzalobarrioss.github.io/Portfolio/'>
            <Routes>
              <Route path='/' element={ <Home />} />
            {/*  <Route path='/signin' element={ <SigninPage />} />
              <Route path='/cv' element={ <About />} /> */}
            </Routes>
          </HashRouter>
      </>
  )
}

export default App;

