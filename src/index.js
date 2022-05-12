import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../src/assets/font/css/font-awesome.css";
import Layout from "./components/Layout/layout";
import {BrowserRouter, Switch} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter><Switch><Layout><App /></Layout></Switch></BrowserRouter>, document.getElementById('root'));