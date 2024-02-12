import Header from "./components/Header"
import Result from "./components/Result";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {
  const [userInput, setUserInput]=useState({
    "initialInvestment":10000,
    "annualInvestment":1200,
    "expectedReturn":6,
    "duration":10
    });
  const isValidInput= userInput.duration>=1;
function handleChange(inputIdentifier, newValue)
{
setUserInput((prevInputValue)=>
{
    return {...prevInputValue,
        [inputIdentifier]: +newValue}
})
}
  return  <>
   <Header/>
   <UserInput onChange={handleChange} userInput={userInput}/>
   {!isValidInput && <p className="center">Please enter valid input data.</p>}
  {isValidInput && <Result input={userInput}/>} 
  </>
   
  
}

export default App
