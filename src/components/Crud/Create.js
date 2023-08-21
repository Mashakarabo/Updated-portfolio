import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [project, setproject] = useState('');
    const [framework, setframework] = useState('');
    const [url, seturl] = useState('');
    const postData = () => {
        axios.post(`https://mocki.io/v1/bbf045c1-037d-4a1e-a2c4-929ef86fdee7`,{
        project,
        framework,
        url
    })

}
    return (
        <div>
            <Form className="create-form">

                <Form.Field>
                    <label>Project</label>
                    <input placeholder='Project Name' onChange={(e) => setproject(e.target.value)}/>
                </Form.Field>


                <Form.Field>
                    <label>Framework</label>
                    <input placeholder='Enter framework' onChange={(e) => setframework(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>URL</label>
                    <input placeholder='Enter URL' onChange={(e) => seturl(e.target.value)}/>
                </Form.Field>

            
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}