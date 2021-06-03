
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import User from './components/User';
import AddNewToDo from './components/AddNewToDo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <User></User>
        <AddNewToDo></AddNewToDo>
        <Calendar></Calendar>
        <Projects></Projects>
      </Sidebar>
      <Main>
        <Todos></Todos>
        <EditTodo></EditTodo>
      </Main>
    </div>
  );
}

export default App;
