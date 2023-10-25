import { FunctionComponent, ReactNode } from 'react'
import Label from './Label'
import Star from './Star'

interface RaterProps {
    rating: number
    max: number
}

const Rater: FunctionComponent<RaterProps> = ({rating, max}) => {

    const output: ReactNode[] = []

    for (let index = 1; index < max; index++) {
        output.push(<Star full={index <= rating}/>)
        
    }

    return (
        <div className='rater'>
            <Label score={rating/max}/>
            {output}
        </div>
    )
}

export default Rater