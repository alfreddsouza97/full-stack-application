import { BrowserRouter, useNavigate, Route, Routes} from "react-router-dom"

import React, { Suspense } from "react"
// import Landing from "./components/Landing"
// import Dashboard from "./components/Dashboard"
import "./index.css/"

//React.lazy imports components from backend only when needed

const ContactMe = React.lazy(()=>

  import("./components/ContactMe")
)


const Landing = React.lazy(()=>

  import("./components/Landing")
)

const FetchData = React.lazy(()=>

import("./components/FetchData"))

const VideoPlayer = React.lazy(()=>

import("./components/VideoPlayer"))


function App() {
  

  return (

    <div className="main">


      <div>


       <h1 style={{ background:"white", padding: "20px", fontFamily: "fantasy"}}><center>My Web Page</center></h1>

       <h3>This Project makes use of Context API </h3>
      </div>


      <BrowserRouter>


        <Appbar/>



        <Routes>


          <Route path="/"  element={<Suspense fallback="loading...."><Landing/></Suspense>}/>
          <Route path="/contact-me" element={<Suspense fallback="loading..."><ContactMe/></Suspense>}/>

          <Route path="/fetch-data" element={<Suspense fallback="loading...."><FetchData/></Suspense>}/>

          <Route path="/video-player" element={<Suspense fallback="loading...."><VideoPlayer/></Suspense>}/>
        </Routes>
      
      
      
      
      </BrowserRouter>
{/* 
      <br />

      <br />

      <br /> */}
{/* 
      // <br />

      // <br />

      // <br /> */}

      <div>

        <h1 style={{background: "white", fontFamily: "sans-serif"}}>Makes use of ReactJS, JSON, Axios, useEffect, useState, Context API, JavaScript, XML, CSS</h1>

        <h2 style={{fontFamily: "fantasy", background: "yellow"}}>Website created by Alfred Marshall Dsouza</h2>
      </div>


      




    </div>


   
  )
}


function Appbar(){

  const navigate = useNavigate();



  return <div>

   <button onClick={()=>navigate("/")}>Landing Page</button>


    <button onClick={()=> navigate("/contact-me")}>Contact Me</button>

    <button onClick={()=>navigate("/fetch-data")}>Fetch Data from Backend</button>

    <button onClick={()=>navigate("/video-player")}>Video Player</button>




    


  </div>
}
export default App
