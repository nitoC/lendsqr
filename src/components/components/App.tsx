import "../../styles/App.scss";
import Header from "../accessories/header/index.tsx";
import SideBar from "../accessories/sidebar/index.tsx";
import Dashboard from "./dashboard.tsx";
import Details from "./details.tsx";
import { useEffect, useState, memo } from "react";
import Login from "./login.tsx";

function App() {
  const [payload, setpayload] = useState([]);
  const [user, setuser] = useState({});
  const [details, setdetails] = useState({});
  const [page, setpage] = useState("login");

  const handlePage = (val) => {
    console.log("page set");
    setpage(val);
  };
  const handleDetails = (val) => {
    console.log("page detail handle");
    setdetails(val);
    setpage('details')
  };
  const login = (val) => {
    console.log("logging");
    setuser(val);
  };
  //fetch users data from mock api
  useEffect(() => {
    let fetchdata = async () => {
      try {
        let data = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        let pay = await data.json();
        //   console.log( pay)
        localStorage.setItem("users", JSON.stringify(pay));
        setpayload(JSON.parse(localStorage.getItem("users")));
      } catch (err) {
        if (err) console.log(err.message);
      }
    };
    fetchdata();
  }, []);
  //fetch users data from mock api
  return (
    <div className="myApp">
      {page === "login" && (
        <Login page={handlePage} users={payload} auth={login} />
      )}
      {page === "dashboard" && (
        <>
          <Header user={user} />
          <main className="main">
            <SideBar />
            <Dashboard handleDetails={handleDetails} users={payload}  page={handlePage}/>
          </main>
        </>
      )}
       {page === "details" && (
         <>
         <Header user={user} />
        <main className="main">
        <SideBar />
            <Details details={details} page={handlePage}/>
            </main>
        </>
      )}

    </div>
  );
}

export default App;
