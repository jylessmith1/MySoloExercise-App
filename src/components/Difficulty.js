import ExpertDiff from './ExpertDiff'
import IntDiff from './IntDiff';
import BeginnerDiff from './beginnerDif';


const Difficulty = ({ beginner, intermediate, expert }) => {

  const workoutSection = {
    display: "flex",
    justifyContent: "spaceAround"

  }

  const individualbutton = {
    color: "lightgreen"
  }

  return (
    <div>
      <section style={workoutSection}>
        <p style={individualbutton}><BeginnerDiff /> </p>

        <p style={individualbutton} ><IntDiff /> </p>

        <p style={individualbutton}><ExpertDiff /> </p>

      </section>
    </div>
  );

}

export default Difficulty

//<Link to= "/beginnerDif">Beginner Workouts</Link>
//<Link to= "/IntDiff">Intermediate Workouts</Link>
//<Link to= "/ExpertDiff">Expert Workouts</Link>