
import './styles/App.scss';
import Header from './components/accessories/header/index.tsx';
import SideBar from './components/accessories/sidebar/index.tsx';
import Dashboard from './components/components/dashboard.tsx';
import Details from './components/components/details.tsx';
import { useEffect, useState, memo } from 'react';

function App() {
  const [payload, setpayload] = useState([])
  const [user, setuser] = useState({});
  const [page, setpage] = useState('login');


  const login = (val)=>{
      let userData = payload.filter(a => val===a.email );
      setuser(userData)
  }
  //fetch users data from mock api
  useEffect(() => {
    let fetchdata = async() => {
     try{
       let data= await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
       let pay = await data.json();
    //   console.log( pay)
       localStorage.setItem('users',JSON.stringify(pay))
       setpayload(JSON.parse(localStorage.getItem('users')));
      }catch(err){
        if(err) console.log(err.message)
      }
    }
    fetchdata()
    
  }, [])
  //fetch users data from mock api
  return (
    <div className="App">
      
       <Header avatar={user}/>
       <main className='main'>
       <SideBar/>
       {
        //<Details />
       }
       
       <Dashboard users={payload}/>
       </main>
    </div>
  );
}

export default App;
