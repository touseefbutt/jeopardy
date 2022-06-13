import './App.css';
import { useState } from 'react'
//axios
import axios from 'axios'

function App() {
    const[question, setQuestion] = useState([]);
    const [cat, setCat] = useState([])
    const [ans, setAns] = useState([])

    const handleClick = async ()=>{
      const baseUrl = 'https://jservice.io/api/random';
      const randomQuestion = await axios.get(baseUrl);
      // console.log(randomQuestion.data[0].category.title)
      setQuestion(randomQuestion.data[0])
      // console.log(randomQuestion.data[0].category)
      setCat(randomQuestion.data[0].category)
    }

    const revealQuestion = async () =>{
      const baseUrl = 'https://jservice.io/api/random';
      const randomQuestion = await axios.get(baseUrl);
      // console.log(randomQuestion.data[0].category.title)
       <h3 className='color'>setAns(randomQuestion.data[0].answer)</h3>
    }
    // const score = (e) =>{
    //   let pScore = question.value;
    //   let sum = question.value + pScore;
    //   console.log(sum);
    // }

  return (
    <div className="App">
      <h1 className='color heading'>Welcome to Jeopardy </h1>
      <h1 className='color'><span className='sub-heading'>Score:</span>{question.value}</h1>
      <div>
        <button type='submit' className='btn btn-decrease '>Decrease</button>
        <button type='submit' className='btn btn-increase '>Increase</button>
        <button type='submit' className='btn btn-reset '>Reset</button>
      </div>
      <div>
        <h1><span className='sub-heading'>Let's play!</span></h1>
      </div>
      <div>
        <button type='submit' className='btn btn-get-question' onClick={handleClick}>Get Question</button>
      </div>
      <div>
        <h2 className='color'><span className='sub-headings'>Category:</span>{cat.title}</h2>
        <h2 className='color'><span className='sub-headings'>Points:</span> {question.value}</h2>
        <h2 className='color'><span className='sub-headings'>Answer:</span> {question.answer}</h2>
        {/* <h2 className='color'><span className='sub-headings'>Answer:</span> {question.question}</h2> */}

      </div>
      <div>
        <button type='submit' className='btn btn-show-answer color' onClick={revealQuestion}>Click to Reveal Question</button>
        <h3 className='color'></h3>
      </div>
    </div>
  );
}

export default App;
