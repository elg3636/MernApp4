
import '../styling/App.css';

/** import to make a router , browser router to keep UI synced with URL*/
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CheckUserExist } from '../helper/helper';

/** import all components for the app */
import Main from './MainPage';
import Quiz from './Quiz';
import Result from './Result';



/** Route used to define different routes of the app */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result/></CheckUserExist>
  },
  
])

/** function to provide all the routes */
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;