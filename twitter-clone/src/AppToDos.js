import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArr) => [toDo, ...currentArr]);// return 은 항상 새로운 객체
    setToDo('');
  };

  return (
    <div>
      <h1>
        My To Dos (
        {toDos.length}
        )
      </h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button onClick={onSubmit}>Add to ToDos</button>
      </form>
      <hr />
      <ul>
        {toDos.map((val, idx) => <li key={`toDos_${uuid()}`}>{val}</li>)}
      </ul>
    </div>
  );
}
export default App;
