import React, {useState} from 'react';
import { Buttons} from '../components/button';
import{ TitleCalc,Row}from './style';
import {Input} from '../components/input'

const Calc = () =>{

    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const [result,setResult]=useState('0');

    const handleClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('')
        setResult('0')
    }

    const handleAddNumber = (num) => {
        console.log(num);
       
        setCurrentNumber(prev=>`${prev === '0'? '' : prev}${num}`)
        
       
    }

    const handleSumNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('')
            setOperation('+');
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setResult(String(sum));
            setOperation('');
            setFirstNumber('0');

            
        }
    }

    const handleSubNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('')
            setOperation('-');
        } else {
            const sub = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sub));
            setResult(String(sub));
            setOperation('');
            setFirstNumber('0');
            
            
        }
    }

    const handleDivNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('')
            setOperation('/');
        } else {
            const div = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(div));
            setResult(String(div));
            setOperation('');
            setFirstNumber('0');
            
            
        }
    }

    const handleMultNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('')
            setOperation('*');
        } else {
            const multi = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(multi));
            setResult(String(multi));
            setOperation('');
            setFirstNumber('0');
            
            
        }
    }

    const handleDelNumbers = () => {
            setCurrentNumber(currentNumber.substring(0,currentNumber.length-1));
            setOperation('del')
            if(currentNumber ===''){
                setOperation('')
                setCurrentNumber('0');

            }
    } 

    const handlePercentNumbers = () => {
        if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('')
            setOperation('%');
        } else {
            let percent;
            switch (operation){
                case "+":
                    percent = Number(firstNumber)+((Number(firstNumber) *Number(currentNumber))/100);
                    break;
                case "-":
                    percent = Number(firstNumber)-((Number(firstNumber) *Number(currentNumber))/100);
                    break;

                case "/":
                    percent = Number(firstNumber)/(Number(currentNumber)/100);
                    break;
                case "*":
                    percent = Number(firstNumber)*(Number(currentNumber)/100);
                    break;
                    default:
                        break;
            }
            setCurrentNumber(String(percent));
            setResult(String(percent));
            setOperation('');
            setFirstNumber('0');
            
            
        }
        
    } 
     
          
        

    const handleEquals = () =>{

        if (firstNumber !== '0'&& operation !== '' && currentNumber !=='0'){
            switch (operation){
                case "+":
                    handleSumNumbers();
                    break;
                case "-":
                    handleSubNumbers();
                    break;

                case "/":
                    handleDivNumbers();
                    break;
                case "*":
                    handleMultNumbers();
                    break;
                case "del":
                    handleDelNumbers();
                    break;
                case "%":
                    handlePercentNumbers();
                    break;
                    default:
                        break;
            }
        }
    }
    return(<>
        
            <TitleCalc>Calculadora</TitleCalc>
            <Input value={currentNumber} result={result}/>
            
                <Row>
                    <Buttons variant="secondary" label="C" onClick={handleClear}/>
                    <Buttons variant="secondary" label="π" onClick={()=>handleAddNumber('3.141592653')}/>
                    <Buttons variant="secondary" label="%" onClick={handlePercentNumbers}/>
                    <Buttons variant="secondary" label="x" onClick={handleMultNumbers}/>
                    
                </Row>
                <Row>
                    <Buttons label="7" onClick={()=>handleAddNumber('7')}/>
                    <Buttons label="8" onClick={()=>handleAddNumber('8')}/>
                    <Buttons label="9"onClick={()=>handleAddNumber('9')}/>
                    <Buttons variant="secondary" label="/"onClick={handleDivNumbers}/>
                   
                    
                </Row>

                
                <Row>
                    <Buttons label="4" onClick={()=>handleAddNumber('4')}/>
                    <Buttons label="5" onClick={()=>handleAddNumber('5')}/>
                    <Buttons label="6" onClick={()=>handleAddNumber('6')}/>
                    <Buttons variant="secondary" label="-"onClick={handleSubNumbers}/>
                </Row>
               
                <Row>
                    <Buttons label="1" onClick={()=>handleAddNumber('1')}/>
                    <Buttons label="2" onClick={()=>handleAddNumber('2')}/>
                    <Buttons label="3" onClick={()=>handleAddNumber('3')}/>
                    <Buttons variant="secondary" label="+" onClick={handleSumNumbers}/>
                </Row>
                <Row>
                    <Buttons label="0" onClick={()=>handleAddNumber('0')}/>
                    <Buttons label="." onClick={()=>handleAddNumber('.')}/>
                    <Buttons variant="secondary" label="del" onClick={handleDelNumbers}/>
                    <Buttons variant="secondary" label="=" onClick={handleEquals}/>
                </Row>
                
            
            
            
        
        </>)

}
export{Calc}