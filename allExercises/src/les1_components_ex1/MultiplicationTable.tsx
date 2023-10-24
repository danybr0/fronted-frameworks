import { FunctionComponent } from 'react'

import Header from './Header'
import Row from './Row'

interface MultiplicationTableProps {
    table: number
}

const MultiplicationTable: FunctionComponent<MultiplicationTableProps> = ({table}) => {

    const output = []

    for (let i = 1; i <= 10; i++) {
        output.push(<Row factor1={i} factor2={table}/>)
    }

    return (
        <div className='table'>
            <Header table={table}/>
            {output}
        </div>
    )
}

export default MultiplicationTable