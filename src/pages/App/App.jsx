import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import AddExercise from '../AddExercise/AddExercise';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import { show } from '../../utilities/users-api';

  //TODO figure out how to call user by email
async function getUserModel() {
  return await show('638e5816cd864b2b1b88932c')
}

function App() {
  const [user, setUser] = useState(getUser());
  
  const userModel = getUserModel()
  console.log(userModel)


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <h1 className="w3-center w3-animate-top">Welcome to your workout app!</h1>
          <Routes>
            <Route path="/" element={<WorkoutList user={user} setUser={setUser} />} />
            <Route path="/workouts" element={<WorkoutPage user={user} setUser={setUser} />} />
            {/* <Route path="/exercise" element={<ExercisePage />} /> */}
            <Route path="/workouts/:exerciseName" element={<AddExercise user={user} setUser={setUser} />}
            />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
