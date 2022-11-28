import './App.css';
import UserList from './pages/UserList';
import { useSelector } from 'react-redux';
import spinner from "./assets/loading-14.gif"

function App() {
  const loading = useSelector((state) => state.users.loading)

  return (
    <div className="App mt-5">
      <h1 className="title">React Js Practical Example</h1>
      {loading ? <img src={spinner} alt="spinner" /> : <UserList />}
    </div>
  );
}

export default App;
