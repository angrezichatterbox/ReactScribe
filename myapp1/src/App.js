import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from "date-fns";

const App = () => {
  const currentDate = new Date().toLocaleDateString();

  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/');
        const apiData = response.data;

        console.log('API Data:', apiData);

        if (Array.isArray(apiData) && apiData.length > 0) {
          const convertedData = apiData.map((item) => ({
            id: item.id,
            Note: item.notes || '',       
            DueDate: item.duedate || '',  
            Date: item.date1 || currentDate,
          }));

          console.log('Converted Data:', convertedData);

          setFormValues(convertedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentDate]);

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { Note: '', DueDate: '', Date: currentDate }]);
  };

  const handleRemoveField = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleDeleteNote = async (i) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/${formValues[i].id}/`);
      console.log('Delete Note Response:', response.data);

      if (response.status === 204) {
        const newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const prepareSubmitData = (data) => {
    return {
      id: data.id,
      notes: data.Note,
      duedate: format(new Date(data.DueDate), "yyyy-MM-dd"),
      date1: format(new Date(data.Date), "yyyy-MM-dd")  
    };
  };

  const handleSubmit = async (index) => {
    try {
      if (formValues[index].id) {
       
        await axios.put(`http://127.0.0.1:8000/api/${formValues[index].id}/`, prepareSubmitData(formValues[index]));
      } else {
        
        const response = await axios.post("http://127.0.0.1:8000/api/", prepareSubmitData(formValues[index]));
        
        const updatedFormValues = [...formValues];
        updatedFormValues[index].id = response.data.id;
        setFormValues(updatedFormValues);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1><font size="+8">React Scribe</font></h1>
      <div className="span">
        <span>
          <button type="button" onClick={() => addFormFields()}>📝</button>
          <button type="button">Feeling Lucky</button>
        </span>
      </div>
      <div className="span">
        <span></span>
      </div>
      <div className="notes-container">
        {formValues.map((element, index) => (
          <div className="note-container" key={index}>
            <label><strong>Date: </strong>{element.Date}</label>
            <textarea
              placeholder="Script destiny here! ✒️💀"
              cols="30"
              rows="10"
              type="text"
              name="Note"
              value={element.Note}
              onChange={(e) => handleChange(index, e)}
            ></textarea>
            <label><strong>Due Date: </strong></label>
            <input
              type="date"
              name="DueDate"
              value={element.DueDate}
              onChange={(e) => handleChange(index, e)}
              style={{
                borderWidth: '3px',
                borderStyle: new Date().getTime() >= new Date(element.DueDate).getTime() ? 'dotted' : 'none',
                borderColor: '#F4442E',
              }}
            />
        
            <button type="button" onClick={() => handleDeleteNote(index)}>🗑️</button>
            <button type="button" onClick={() => handleSubmit(index)}>✔️</button>
          </div>
        ))}
      </div>
      <div>
      
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
