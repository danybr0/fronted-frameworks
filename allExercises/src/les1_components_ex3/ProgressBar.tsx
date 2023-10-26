import { FunctionComponent } from 'react'
import Bar from './Bar'
import Label from './Label'

interface ProgressBarProps {
    percentage: number
    color: string
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({percentage, color}) => {
    return (
        <>
            <svg height="80" width="400">
        
                {/*De volledig bar, 100%*/}
                <Bar percentage={100} color={'lightgrey'}/>
                <Bar percentage={percentage} color={color}/>
                <Label percentage={percentage} color={color}/>
            </svg>
        </>
    )
}

export default ProgressBar