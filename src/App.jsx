import React from 'react';
import Navbar from "#components/Navbar.jsx";
import Welcome from "#components/Welcome.jsx";
import Dock from "#components/Dock.jsx";
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Contact, Finder, Resume, Safari, Terminal, Text} from "#windows/index.js";
import Images from "#windows/Images.jsx";
gsap.registerPlugin(Draggable);
const App = () => {
    return (
       <main>
           <Navbar/>
           <Welcome/>
           <Dock/>

           <Terminal/>
           <Safari/>
           <Resume/>
           <Finder/>
           <Text/>
           <Images/>
           <Contact/>


       </main>
    );
};

export default App;