import Youtube from './Youtube'
function App() {
  let username="srikanth";
  return (
    <>
    <h1>hello world{1+2}</h1>
    <h1>{username}</h1>
    {/* <h1>{if(username=="srikanth")?"yes":"no"}</h1>  */}

    {/* this doesnt make sense because react try to convert this tags as objects with some properties but this cant be evautaed as property */}
    <Youtube></Youtube>
     </>
    
  )
}

export default App
