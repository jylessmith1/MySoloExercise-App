import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BeginnerDiff = () => {
  const [workout, setWorkout] = useState([]);
  const navigate = useNavigate();

  const easyWork = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exercises?difficulty=beginner', {

        headers: { 'X-Api-Key': 'm3ldxl7CYU8tfLZ0aEIf6w==WzDHPa9kIIXDKQSk' }
      });

      const jsonData = await response.json();

      setWorkout(jsonData);
      
    } catch (error) {
      console.error('Error fetching workout:', error);
    }
  };

  useEffect(() => {
    easyWork();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <button onClick={handleGoBack}>Go Back</button>
        {workout.length > 0 && (
          <div>
            <div className="workoutHeader">
            <h2>Workouts</h2>
            </div>
            <div className="cardContainer">
              {workout.map((exercise) => (
                <div key={exercise.id} className="card">
                  <h3>{exercise.name}</h3>
                  <p>{exercise.instructions}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BeginnerDiff;