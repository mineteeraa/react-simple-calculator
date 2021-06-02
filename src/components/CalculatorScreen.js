import React from 'react'
import { CalculateController } from './CalculateController'
import Numpad from './Numpad'
import { withController } from '../hoc/withController'
import Display from './Display'

function CalculatorScreen() {
    return (
        <div>
            <Display />
            <Numpad />
            <p>Created by Mine</p>
        </div>
    )
}

export default withController(CalculateController)(
    CalculatorScreen
)