import ReactDOM from 'react-dom';
import React from "react"
import App from './App';
import './index.css';
import { Zoom } from 'react-preloaders2';

ReactDOM.render(
    <React.Fragment>
      <App/>
      <Zoom background="blur" color={'#f7f7f7'}/>
    </React.Fragment>, document.querySelector('#root')
)