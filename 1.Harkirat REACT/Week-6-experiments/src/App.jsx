import { useState } from 'react'

function App() {

  const [title, setTitle] = useState('Hello pratyush');

  const handleClick = () => {
    setTitle(Math.random());
  }

//update the last app to alow user to update the title of the first header whith a math.random number
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Header title={title} setTitle={setTitle}/>
      <Header title="Hello pratyush2" />
    </div>
  )
}
function Header({title,setTitle}){
  const handleUpdateTitle = () => {
    setTitle(Math.random());
  }
  return (
    <div>
      <div>{title}</div>
      {/* <button onClick={handleUpdateTitle}>Update title</button> */}
    </div>
  )
}
export default App
