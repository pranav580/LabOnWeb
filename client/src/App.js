
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const handleFailure = (result)=>{
    alert(result);
  }
  const handleLogin = (googleData)  =>{
    console.log(googleData);
  }

  return ( 
    <div className="App">
      <header className='App-header'>
        <h1>React Google Login App</h1>
        <div>
          <GoogleLogin
            clientID={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText = "Log in with Google"
            onSuccess = {handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
