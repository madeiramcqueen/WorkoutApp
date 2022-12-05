import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import ExercisePage from '../ExercisePage/ExercisePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <h1 class="w3-center w3-animate-top">Welcome to your workout app!</h1>
          <Routes>
            <Route path="/workouts" element={<WorkoutPage />} />
            {/* <Route path="/exercise" element={<ExercisePage />} /> */}
            <Route path="/workouts/:workoutName" element={<ExercisePage />}
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
