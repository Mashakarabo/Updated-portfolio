import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import './create.css';



export default function Create() {

    const[project,setproject] = useState('');
    const[framework,setframework] = useState('');
    const[url,seturl] = useState('');

    const addproject = () =>{

        axios.post('http://localhost:3001/create',{
            project: project,
            framework: framework,
            url: url
        }).then(()=>{
            console.log('success');
        });

    };


 return (
    <>
    <div className='create-details'>
        <div className='dash-heading'>
        <h2>Dashboard |</h2>
        </div>
        <div className='welcome-message'>
            <h2>| Masha Karabo</h2>
        </div>
    </div>
        <div className='login'>
            
            <Form className="create-form">

                <Form.Field>
                    <label>Project</label><br/><br/>
                    <input placeholder='Project Name' style={{backgroundColor:"white", width:"100%",borderRadius: "0",color:"black"}}  onChange={(e) => setproject(e.target.value)}/>
                </Form.Field><br/><br/>


                <Form.Field>
                    <label>Framework</label><br/><br/>
                    <input placeholder='Enter framework' style={{backgroundColor:"white", width:"100%",borderRadius: "0",color:"black"}}  onChange={(e) => setframework(e.target.value)}/>
                </Form.Field><br/><br/>

                <Form.Field>
                    <label>URL</label><br/><br/>
                    <input placeholder='Enter URL' style={{backgroundColor:"white", width:"100%",borderRadius: "0",color:"black"}}  onChange={(e) => seturl(e.target.value)}/>
                </Form.Field><br/><br/>

            
                <Button type='submit' onClick={addproject}>Submit</Button>
            </Form>
        </div>
        </>
    )
}