
import './App.css';
import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
// import { Greet } from './components/Greet';
// import Person from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  // const personName = {
  //   firstName:"Rokibul",
  //   lastName:"Islam"
  // }
  
  // const data = {
  //   myName : "shahin",
  //   messages:20,
  //   isLoggedin:true
  // }

  // const nameList =[
  //   {
  //     first:"Bapon",
  //     last:"Da"
  //   },
  //   {
  //     first:"Swadesh",
  //     last:"Karmokar"
  //   },
  //   {
  //     first:"Shahinul",
  //     last:"Islam"
  //   },
  //   {
  //     first:"Rokibul",
  //     last:"Islam"
  //   },
  // ]
  return (
    <div className="App">
      {/* <Greet {...data}/> */}
      {/* <Person personName={personName}/> */}
      {/* <PersonList nameList={nameList}/> */}
      {/* <Status status="loading"/> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Ths oscar should went to leonardo di caprio</Heading>
      </Oscar> */}
    <Button handleClick={(event,id)=>{
      console.log("button clicked", event.target,id);
    }}/>
      
    </div>
  );
}

export default App;
