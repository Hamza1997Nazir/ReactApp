import React, { useState } from 'react'; // now using State instead of Component as we dont need it
import './App.css';
import Person from './Person/Person';
//class App extends Component { // for using hooks below
const app = props => { // now we don't need state
  const [personsState,setPersonsState] = useState({ // usestate is a built in func
    persons: [
      {name: 'Hamza', age: 25},
      {name: 'Ham', age:22},
      {name:'Cat',age:3}
    ],
    otherState: 'other value'
  }
  );
  

  const switchNameHandler = (name2, name1) =>{
    //alert('This has been clicked');
    //console.log('Clicked !!');
    // Dont do this ===> this.state.persons[0].name = 'Nazi';
    setPersonsState({ 
      persons: [
      {name: name1, age: 25},
      {name: name2, age:2},
      {name:'Persian Cat',age:50}
    ],
    otherState: 'Same val as before'
  })
  }

  const nameChangeHandler1 = (event) =>{
    setPersonsState({ 
      persons: [
      {name: 'Halo', age: 25},
      {name: event.target.value, age:2},
      {name: 'Hola',age:50}
    ],
    otherState: 'Same val as before'
  })
  }

  const nameChangeHandler2 = (event) =>{
    setPersonsState({ 
      persons: [
      {name: 'Halo', age: 25},
      {name: 'So waht is htis', age:2},
      {name: event.target.value,age:50}
    ],
    otherState: 'Same val as before'
  })
  }

  console.log(personsState);

   return (
      <div className="App">
        <h1>Hi, This is edited</h1>
        <p>This is the Paragraph</p>
        <button onClick={switchNameHandler.bind(this,'Caballo','leon')}>Switch Name</button> 
        <Person
         name ={personsState.persons[0].name}
         age ={personsState.persons[0].age}
         click = {switchNameHandler.bind(this,'aaaaa','bbbbb')}
         />
        <Person name ={personsState.persons[1].name}
         age ={personsState.persons[1].age}
         changed={nameChangeHandler1}>
            So this is my cat
            </Person>
        <Person name ={personsState.persons[2].name} age ={personsState.persons[2].age}  changed={nameChangeHandler2}/>
      </div>
    );
   // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'React inside a React'));
  
}

export default app;

