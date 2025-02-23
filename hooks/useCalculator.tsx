import { useEffect, useRef, useState } from "react"

// Enumerador que define los operadores matemáticos disponibles.
enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

// Hook personalizado para manejar la lógica de la calculadora.
export const useCalculator = () => {
    // Estado que almacena la fórmula matemática visible en pantalla.
    const [formula, setFormula] = useState('0');

    // Estado para almacenar el número actual ingresado por el usuario.
    const [number, setNumber] = useState('0');

    // Estado que almacena el número previo ingresado antes de una operación.
    const [prevNumber, setPrevNumber] = useState('0');

    // Referencia para almacenar la última operación realizada.
    const lastOperation = useRef<Operator>();

    // useEffect que actualiza la fórmula en pantalla cada vez que cambia el número actual.
    useEffect(() => {
        if (lastOperation.current) {
            // Obtiene la primera parte de la fórmula (número inicial antes de la operación).
            const firstFormulaPart = formula.split(' ').at(0);
            // Actualiza la fórmula agregando la operación y el número actual.
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            // Si no hay operación pendiente, solo se muestra el número actual.
            setFormula(number);
        }
    }, [number]);

    // useEffect que actualiza el número previo cada vez que cambia la fórmula.
    useEffect(() => {
       const subResult = calculateResult();
       setPrevNumber(`${subResult}`);
    }, [formula]);

    // Función para limpiar la calculadora y reiniciar los valores.
    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined;
    };

    // Función para cambiar el signo del número actual (+/-).
    const toggleSing = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }
        setNumber('-' + number);
    };

    // Función para eliminar el último dígito ingresado.
    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;

        // Verifica si el número es negativo y lo separa del signo.
        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        // Si hay más de un dígito, elimina el último.
        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        // Si solo hay un dígito, lo reemplaza con "0".
        setNumber('0');
    };

    // Función que almacena el número actual como número previo antes de realizar una operación.
    const setLastNumber = () => {
        // Calcula el resultado parcial antes de la nueva operación.
        calculateResultado();

        // Si el número termina en ".", lo elimina.
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0');
    };

    // Funciones para realizar operaciones matemáticas y guardar la operación en curso.
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    };

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    };

    // Función que calcula el resultado de la operación actual.
    const calculateResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        // Si no hay segundo número, retorna el primero.
        if (isNaN(num2)) return num1;

        // Realiza la operación matemática según el operador almacenado.
        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            default:
                throw new Error(`Operation ${operation} not implemented`);
        }
    };

    // Función que ejecuta el cálculo final y actualiza la fórmula con el resultado.
    const calculateResultado = () => {
        const result = calculateResult();
        setFormula(`${result}`);

        // Resetea la última operación realizada.
        lastOperation.current = undefined;
        setPrevNumber('0');
    };

    // Función que construye el número actual a medida que el usuario ingresa dígitos.
    const buildNumber = (numberString: string) => {
        console.log({ numberString });

        // Evita ingresar múltiples puntos decimales.
        if (number.includes('.') && numberString === '.') return;

        // Si el número actual empieza con "0" o "-0", se evalúan ciertos casos.
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Permite agregar ceros después de un punto decimal.
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Si se ingresa un número distinto de cero sin punto decimal, se reemplaza el "0" inicial.
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evita ingresar múltiples ceros seguidos al inicio.
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        // Agrega el nuevo número al final del número actual.
        setNumber(number + numberString);
    };

    return {
        // Propiedades expuestas para ser usadas en la calculadora.
        formula,
        number,
        prevNumber,

        // Métodos disponibles para realizar operaciones.
        buildNumber,
        clean,
        toggleSing,
        deleteLast,

        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
        calculateResultado,
    };
};
