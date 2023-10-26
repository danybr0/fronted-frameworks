import Exercise from "./les1_components/exercise.tsx"
import ExerciseOne from "./les1_components_ex1/ExerciseOne.tsx"
import ExerciseTwo from "./les1_components_ex2/ExerciseTwo.tsx"
import ExerciseThree from "./les1_components_ex3/ExerciseThree.tsx"


function App() {

  return (
    <>
      <Exercise title={'Exercise 1: Multiplication Table'}>
        <ExerciseOne/>
      </Exercise>
      <Exercise title={'Exercise 2: Rater'} background={'#77EEEE'}>
        <ExerciseTwo/>
      </Exercise>
      <Exercise title={'Exercise 3: Progress Bar'}>
        <ExerciseThree/>
      </Exercise>
      <Exercise title={'Exercise 4: Number Grid'} background={'#77EEEE'}/>
      <Exercise title={'Exercise 5: Comment Card'}/>
    </>
  )
}

export default App
