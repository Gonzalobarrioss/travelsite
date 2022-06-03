import { /*BrowserRouterHashRouter as Router*/HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Download from './pages/download'
//import SigninPage from './pages/signin'
//import About from './pages/AboutMe'

function App() {


  return (
      <Provider store={store}>
          <HashRouter base='https://gonzalobarrioss.github.io/travelsite/'>
            <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/download' element={ <Download />} />
            {/*  <Route path='/signin' element={ <SigninPage />} />
              <Route path='/cv' element={ <About />} /> */}
            </Routes>
          </HashRouter>
      </Provider>
  )
}

export default App;

