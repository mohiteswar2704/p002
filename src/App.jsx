import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state= {data: {
            name:"Mohiteswar Rayaprolu",
            role:"Student",
            bio: "Enthusiastic learner and aspiring developer.",
            status: [{label:"posts", value:"84"},
                {label:"followers", value:"2.5k"},
                {label:"following", value:"190"}]
        }};
    } 
    render() {
        const {data}= this.state;
        const BASEURL=import.meta.env.BASE_URL;
        return (
            <div className='app'>
                <div className='profile'>
                    <img src={BASEURL+"image.jpg"} alt='image' />
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                        </div>
                   
                </div>
                <div className='status'>
                {data.status.map((d, index) => (
                    <div key={index} className='status-item'>
                        <legend className='value'>{d.value}</legend>
                        <legend className='label'>{d.label}</legend>
                    </div>
                ))}
                    
                </div>
            </div>
        );
    }
}


export default App;
