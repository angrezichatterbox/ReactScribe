import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"; 




function App(){
  console.log("1");
  const currentDate = new Date().toLocaleDateString();
  
  
  const today = new Date(); 
  var nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  const handlereqest = () => {
    axios 
    .get("http://127.0.0.1:8000/api/") 
    .then(response => response.json())
    console.log(response)
  }

  
  //const initialFormValues =  [
   // { Note: "", DueDate: '', Date: currentDate },
   // { Note: "", DueDate: '', Date: currentDate },
   // { Note: "", DueDate: '', Date: currentDate },
 // ];
  console.log('Hello')

  const [formValues, setFormValues] = useState(initialFormValues);


  fetch("")
  .then(response => response.json())
    console.log(response)


  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {

    setFormValues([...formValues, { Note: "", DueDate: currentDate, Date: currentDate }]);
  };

  const handleRemoveField = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    console.log('Hell')
  };

  const handleSubmit = (event) => {
  
    alert(JSON.stringify('You suck at life'));

    
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('formValues');
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1> <font size="+8">React Scribe</font></h1>
      <div className="span">
        <span>
          <button type="button" onClick={() => addFormFields()}>
          📝
          </button>
          <ul>
        {
          this.state.persons
            .map( notes =>
              <li key={notes.id}>{notes.DueDate}</li>
            )
        }
      </ul>
          
          
          <button type="button" onClick = {()=> handlereqest} >
            Feeling Lucky
          </button>

        </span>
        </div>
        <div className="span">
        <span>
        
        </span>
      </div>
      <div className="notes-container">

        {formValues.map((element, index) => (
          <div className="note-container" key={index}>
            <label htmlFor={`textbox-${index}`}><strong><font size="+3">  </font></strong></label>
            <p>{element.Date}</p>
            
            <textarea
          
            placeholder="Script destiny here! ✒️💀"
              cols="30"
              rows="10"
              id={`textbox-${index}`}
              type="text"
              name="Note"
              value={element.Note}
              onChange={(e) => handleChange(index, e)}
              key={`textarea-${index}`}
            ></textarea>
            <label htmlFor={`dueDate-${index}`}><strong>Due Date</strong></label>
            <input
            
              type="date"
              id={`dueDate-${index}`}
              name="DueDate"
              value={element.DueDate}
              onChange={(e) => handleChange(index, e)}
              
              style={
                
                {borderWidth:"3px",borderStyle:
                new Date().getTime() >= new Date(element.DueDate).getTime()
                ? "dotted"
                : "none",borderColor: '#F4442E'}}
            />

            {index ? (
              
              <button type="button" onClick={() => handleRemoveField(index)}>
                🗑️
              </button>
            ) : null}
          
          </div>
        ))}
      </div>
    </form>
  );
};

export default App;

