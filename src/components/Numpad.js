import React from 'react'
import './Numpad.css'
import { useCalculatorContext } from './CalculateController'

export default function Numpad() {

    const { onClickNumpad } = useCalculatorContext()

    return (
        <>
            <div className="row">
                <input value="AC" onClick={() => onClickNumpad("AC")} className="Button RedButton" type="button" />
                <input value="C" onClick={() => onClickNumpad("C")} className="Button GrayButton" type="button" />
                <input value="-/+" onClick={() => onClickNumpad("-/+")} className="Button GrayButton" type="button" style={{padding: '27.3px'}} />
                <input value="÷" onClick={() => onClickNumpad("÷")} className="Button BlackButton" type="button" />
            </div>
            <div className="row">
                <input value="7" onClick={() => onClickNumpad("7")} className="Button GrayButton" type="button" />
                <input value="8" onClick={() => onClickNumpad("8")} className="Button GrayButton" type="button" />
                <input value="9" onClick={() => onClickNumpad("9")} className="Button GrayButton" type="button" />
                <input value="x" type="button" onClick={() => onClickNumpad("x")} className="Button BlackButton" />
            </div>
            <div className="row">
                <input value="4" onClick={() => onClickNumpad("4")} className="Button GrayButton" type="button" />
                <input value="5" onClick={() => onClickNumpad("5")} className="Button GrayButton" type="button" />
                <input value="6" onClick={() => onClickNumpad("6")} className="Button GrayButton" type="button" />
                <input value="-" onClick={() => onClickNumpad("-")} className="Button BlackButton" type="button" />
            </div>
            <div className="row">
                <input value="1" onClick={() => onClickNumpad("1")} className="Button GrayButton" type="button" />
                <input value="2" onClick={() => onClickNumpad("2")} className="Button GrayButton" type="button" />
                <input value="3" onClick={() => onClickNumpad("3")} className="Button GrayButton" type="button" />
                <input value="+" onClick={() => onClickNumpad("+")} className="Button BlackButton" type="button" />
            </div>
            <div className="row">
                <input value="0" onClick={() => onClickNumpad("0")} className="Button GrayButton" type="button" />
                <input value="." onClick={() => onClickNumpad(".")} className="Button GrayButton" type="button" />
                <input value="=" onClick={() => onClickNumpad("=")} className="Button GreenButton" type="button" />
            </div>
        </>
    )
}