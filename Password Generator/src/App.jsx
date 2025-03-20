import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_+={}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }
    , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101) // you can select fixed range of copy
    window.navigator.clipboard.writeText(password)
  }, [])

  
  
  useEffect(() =>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, setPassword])


  return (
    <div className='w-full max-w-xl my-8 mx-auto shadow-md rounded-lg px-4 py-3  text-orange-500  bg-gray-600'> 
        <h1 className='text-center pb-5 text-2xl text-white font-bold'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
          type = "text"
          value = {password}
          onChange={passwordGenerator}
          className='outline-none w-full py-1 px-3 text-black'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          className='btn shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
            <div className='flex items-center gap-x-1'>
              <input
              type = "range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input 
              type = "checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
            
              onChange={() => {
                setNumberAllowed((prev)=> !prev)
              }}
              />
              <label htmlFor='numberInput'>Number</label>
              <input 
              type = "checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev)=> !prev)
              }}
              />
              <label htmlFor='charInput'>Special Char</label>
            </div>
        </div>
    </div>
  )
}

export default App
