import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ExpertDiff = () => {
    const [workout, setWorkout] = useState([]);
    const navigate = useNavigate();

    const hardWork = async () => {
        try {
            const response = await fetch('https://api.api-ninjas.com/v1/exercises?difficulty=expert', {

                headers: { 'X-Api-Key': 'm3ldxl7CYU8tfLZ0aEIf6w==WzDHPa9kIIXDKQSk' }
            });

            const jsonData = await response.json();

            console.log(response)

            setWorkout(jsonData);

        } catch (error) {
            console.error('Error fetching workout:', error);
        }
    };
    useEffect(() => {
        hardWork()
    }, [])

    const handleGoBack = () => {
        navigate(-1);
    };


    return (
        <>
            <div className='beginContainer'>
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
                                    <h4>{exercise.type} -
                                        {exercise.equipment}</h4>
                                    <h5>{exercise.muscle}</h5>
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

export default ExpertDiff;