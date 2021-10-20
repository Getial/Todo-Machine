import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider} from '../TodoContext'

// const defaultTodos = [
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Tomar agua', completed: false },
//   { text: 'Leer una hora', completed: false }, 
//   { text: 'Sacar a pasear al perro', completed: true }, 
//   { text: 'Meditar 30 minutos', completed: true }, 
//   { text: 'Regar las plantas', completed: true }, 
//   { text: 'Tomar el curso de react', completed: true },
//   { text: 'example1', completed: false }, 
//   { text: 'example2', completed: false }, 
//   { text: 'example3', completed: false }, 
//   { text: 'example4', completed: false }, 
//   { text: 'example5', completed: false }, 
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
