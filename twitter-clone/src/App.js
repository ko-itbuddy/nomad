import { useState, useEffect } from 'react'

function App () {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = () => setKeyword(event.target.value)
  console.log('i run all the time.')
  useEffect(() => {
    console.log('call the api ')
  }, [])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Hear...." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}
export default App
