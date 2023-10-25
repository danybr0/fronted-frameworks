import { FunctionComponent } from 'react'
import Rater from './Rater'

interface ExersieTwoProps {

}

const ExerciseTwo: FunctionComponent<ExersieTwoProps> = () => {
    return (
        <div className='exercise'>
            <Rater max={8} rating={7}/>
            <Rater max={5} rating={1}/>
            <Rater max={3} rating={3}/>
        </div>
    )
}

export default ExerciseTwo