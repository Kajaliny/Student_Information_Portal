import logo from './logo.svg';
import './App.css';
import {students} from './data/StudentsDb';
import  StudentTable  from './components/StudentTable';
function App() {
  return (
    <div className="App">
      <h1>Students Information Portal</h1>
      <hr/>
      <table>
        <body>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </body>
      </table>
    </div>
  );
}

export default App;
