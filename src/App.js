import React from 'react';


import Main from './pages/Main/Main';
import FullPost from "./pages/FullPost/FullPost";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component{
    constructor(props) {
            super(props);
/*
            console.log(window.location.pathname)
*/
        }
    render(){
        return (
            <>
                <BrowserRouter>
                    <Route path="/" exact component={Main}/>
                    <Route path="/fullPost/:id" exact component={FullPost}/>
                </BrowserRouter>

            </>
        )
    }

}

export default App;