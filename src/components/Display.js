import React from 'react'
import { useCalculatorContext } from './CalculateController'
import './Display.css'

export default function Display() {

    const { value, carryValue } = useCalculatorContext()

    return (
        <div className="container Display">
            <div className="previous">
                {carryValue}
            </div>
            <div className="current">
                {value}
            </div>
        </div>
    )
}