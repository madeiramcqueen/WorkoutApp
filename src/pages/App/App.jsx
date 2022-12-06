import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import AddExercise from '../AddExercise/AddExercise';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import { index } from '../../utilities/workouts-api'

function App() {
  const [user, setUser] = useState(getUser());

  index().then(workouts =>
    console.log(workouts))

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
