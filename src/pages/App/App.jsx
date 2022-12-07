import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import WorkoutDetailPage from '../WorkoutDetailsPage/WorkoutDetailsPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import WorkoutList from '../WorkoutListPage/WorkoutListPage';
import { index } from '../../utilities/workouts-api'
import Timer from '../../components/Timer/Timer';

export default function App() {
  const [user, setUser] = useState(getUser());

  index().then(workouts =>
    console.log(workouts))

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<WorkoutList />} />
            <Route path="/workouts" element={<WorkoutPage />} />
            <Route path="/workouts/:workoutId" element={<WorkoutDetailPage />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
