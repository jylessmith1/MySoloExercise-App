
import React, { useState } from 'react';

const IntDiff = () => {
  const [workout, setWorkout] = useState([]);

  const semiWork = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exercises?difficulty=intermediate', {

        headers: { 'X-Api-Key': 'm3ldxl7CYU8tfLZ0aEIf6w==WzDHPa9kIIXDKQSk' }
      });
      const jsonData = await response.json();

      console.log(response)

      setWorkout(jsonData);

    } catch (error) {
      console.error('Error fetching workout:', error);
    }
  };

  return (
    <div>
      <button type="submit" onClick={semiWork}>
        Intermediate Workouts
      </button>

      {workout.length > 0 && (
        <div>
          <h2>Workouts</h2>
          <ul>
            {workout.map((exercise) => (
              <li key={exercise.id}>{exercise.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IntDiff;
