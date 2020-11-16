export const examples = [
  `import React from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const App = () => {
    return (
        <React.Fragment>
            <EditText
            name="textbox1"
            value="Click me to edit my text"
            />
            <EditText
            name="textbox2"
            placeholder="I am a placeholder text"
            />
            <br />
            <EditTextarea
              placeholder='I am an editable textarea'
            />
        </React.Fragment>
    );
}`,
  `import React from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const App = () => {
    return (
        <React.Fragment>
            <EditText
            name="textbox1"
            style={{border: '1px solid #999'}}
            value="Click me to edit my text"
            />
            <br/>
            <EditText
            name="textbox2"
            style={{padding: '10px', fontSize: '36px'}}
            value="Click me to edit my text"
            />
            <br/>
            <EditText
            name="textbox3"
            style={{padding: '15px', fontSize: '24px', backgroundColor: "#EEE"}}
            value="Click me to edit my text"
            />
            <br/>
            <EditText
            name="textbox4"
            style={{padding: '15px', fontSize: '24px', color: "#FFF", backgroundColor: "#000"}}
            value="Click me to edit my text"
            />
            <br />
            <EditTextarea
              name='textarea1'
              rows={7}
              value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non porta massa, a interdum turpis. In imperdiet tincidunt justo nec maximus. Aliquam tempus interdum orci eget rhoncus. Cras consectetur elit quam. Aliquam ante massa, pulvinar quis tortor non, rhoncus facilisis nisi. Nam at sapien porta, congue sapien porta, suscipit dolor. Maecenas vitae efficitur neque. Donec auctor tortor in ornare convallis. Etiam venenatis ex nisi, eu commodo risus dignissim ac. Suspendisse potenti. Integer hendrerit erat dapibus orci luctus, non malesuada est ullamcorper. Vivamus mattis magna ipsum, id lobortis justo aliquet at. '
              style={{ fontSize: '16px' }}
            />
        </React.Fragment>
    );
}`,
  `import React from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const App = () => {
    return (
        <React.Fragment>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">Full Name <small>(read-only)</small>: </label></strong>
            <EditText id="fullName" name="fullName" value="James Smith" inline readonly/>
          </div>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">Email Address: </label></strong>
            <EditText name="age" type="email" style={{width: '200px'}} value="james.smith@domain.com" inline/>
          </div>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">Score: </label></strong>
            <EditText name="age" type="number" style={{width: '200px'}} value="25000" inline/>
          </div>
          <div style={{ display: 'flex' }}>
            <strong>
              <label className='mr-2' style={{ paddingTop: '2px' }}>Description: </label>
            </strong>
            <EditTextarea
              name='description'
              rows={4}
              style={{ paddingTop: 0 }}
              placeholder='Enter a description'
            />
          </div>
        </React.Fragment>
    );
}`,
  `import React from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const App = () => {
    const handleTextChange = ({name, value}) => {
        alert(name + ' saved as: ' + value);
    }
    return (
        <React.Fragment>
          <EditText
            name='textbox1'
            style={{ fontSize: '16px' }}
            onSave={handleTextChange}
            placeholder='Click to edit textbox1'
          />
          <br />
          <EditText
            name='textbox2'
            style={{ fontSize: '16px' }}
            onSave={handleTextChange}
            placeholder='Click to edit textbox2'
          />
          <br />
          <EditTextarea
            name='textarea1'
            style={{ fontSize: '16px' }}
            onSave={handleTextChange}
            placeholder='Click to edit textarea1'
          />
        </React.Fragment>
    );
}`
];