import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    street:"",
    city:"",
    state:"",
    zip:""
  })

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData((prev)=>({
      ...prev, [name]:type==="checkbox"?checked:value //ternary operator to check if the type is checkbox or not and then set the value accordingly 
    }));
  }

  return (
    <div className="flex flex-col items-center">
      <form>
        <label htmlFor='firstName'>First Name: </label>
        <br/>

        <input
        type="text"
        name='firstName'
        id='firstName'
        placeholder='Pratyush'
        value={formData.firstName}
        onChange={changeHandler}
        className='outline'/>
<br/>
<br/>

<label htmlFor='firstName'>Last Name: </label>
        <br/>

        <input
        type="text"
        name='lastName'
        id='lastName'
        placeholder='Sinha'
        value={formData.lastName}
        onChange={changeHandler}
        className='outline'/>
<br/>
<br/>
<label htmlFor='firstName'>First Name: </label>
        <br/>

        <input
        type="text"
        name='firstName'
        id='firstName'
        placeholder='Pratyush'
        value={formData.firstName}
        onChange={changeHandler}
        className='outline'/>
<br/>
<br/>
<label htmlFor='firstName'>First Name: </label>
        <br/>

        <input
        type="text"
        name='firstName'
        id='firstName'
        placeholder='Pratyush'
        value={formData.firstName}
        onChange={changeHandler}
        className='outline'/>
<br/>
<br/>

<label htmlFor='firstName'>First Name: </label>
        <br/>

        <input
        type="text"
        name='firstName'
        id='firstName'
        placeholder='Pratyush'
        value={formData.firstName}
        onChange={changeHandler}
        className='outline'/>

<br/>
<br/>
      </form>
    </div>
  );
}

export default App;
