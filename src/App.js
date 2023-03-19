import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes/Routes';

function App() {
  return (
     <div>
      <RouterProvider router={Routes}></RouterProvider>
     </div>
  );
}

export default App;
