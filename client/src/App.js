
import './App.css';

function App() {
  return (
    <div className="App">
      <form name='form1' method="get" action="req_data">
        <label for="fname">First name:</label> <br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"/>
        <button type="submit" onClick={
          ()=>{console.log();}
        }>Submit</button>
      </form>
    </div>
  );
}

export default App;
