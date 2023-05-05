
import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';

function App() {
  const personName = {
    firstName:"Rokibul",
    lastName:"Islam"
  }
  
  const data = {
    myName : "shahin",
    messages:20,
    isLoggedin:true
    
  }
  return (
    <div className="App">
      <Greet {...data}/>
      <Person personName={personName}/>
      
    </div>
  );
}

export default App;
