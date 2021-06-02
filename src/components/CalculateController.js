import React, { useContext, useState } from 'react'

export const CalculatorContext = React.createContext()
export const useCalculatorContext = () => useContext(CalculatorContext)

export const CalculateController = ({ children }) => {
    const [value, setValue] = useState(0)
    const [carryValue, setCarryValue] = useState()
    const [operation, setOperation] = useState("")

    const onClickNumpad = (number) => {
        switch (number) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (value == 0 && value !== "0.") {
                    setValue(number)
                } else {
                    setValue(value + number)
                }
                break;
            case '.':
                if (value == 0) {
                    setValue("0" + number)
                } else {
                    setValue(value + number)
                }
                break;
            case '-/+':
                setValue(value * -1)
                break;
            case '+':
                setValue(0)
                setCarryValue(value)
                setOperation("+")
                break;
            case '-':
                setValue(0)
                setCarryValue(value)
                setOperation("-")
                break;
            case 'x':
                setValue(0)
                setCarryValue(value)
                setOperation("x")
                break;
            case '÷':
                setValue(0)
                setCarryValue(value)
                setOperation("÷")
                break;
            case '=':
                calculate();
                setCarryValue()
                setOperation("=")
                break;
            case 'AC':
                setValue(0)
                setCarryValue()
                setOperation("÷")
                break;
            case 'C':
                setValue(0)
                setOperation("÷")
                break;
        }
    }

    const calculate = () => {
        switch (operation) {
            case '+':
                setValue((+value) + (+carryValue))
                break;
            case '-':
                setValue((+carryValue) - (+value))
                break;
            case 'x':
                setValue((+value) * (+carryValue))
                break;
            case '÷':
                setValue((+carryValue) / (+value))
                break;
        }
    }

    return (
        <CalculatorContext.Provider
            value={{
                value,
                carryValue,
                onClickNumpad
            }}>
            {children}
        </CalculatorContext.Provider>
    )
}