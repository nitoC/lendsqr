
import './styles/App.scss';
import Header from './components/accessories/header/index.tsx';
import SideBar from './components/accessories/sidebar/index.tsx';
import Dashboard from './components/components/dashboard.tsx';
import Details from './components/components/details.tsx';

function App() {
  return (
    <div className="App">
       <Header/>
       <main className='main'>
       <SideBar/>
       {
        //<Dashboard/>
       }
       <Details/>
       </main>
    </div>
  );
}

export default App;
