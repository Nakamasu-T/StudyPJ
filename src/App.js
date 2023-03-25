import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>テスト</p>
      <button>aaa
      </button>
      <form action="/name" method= "post">
        <label>
         Name:
         <input type="text" name="name" /> 
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
