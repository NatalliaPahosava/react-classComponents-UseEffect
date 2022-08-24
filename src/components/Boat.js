import { useEffect, useState } from 'react'

export const Coffees = () => {
    const [rendered, setRendered] = useState(false)
    const [coffees,setCoffees]=useState([])
    const [temp,setTemp]=useState(true)


// without dependencies this will run on every re-render
//     useEffect(() => {
//     console.log('run my use effect')
    // })
 const temperature = temp? 'hot':'iced'

/// with empty array will only run on first render/load/mount
useEffect(() => {
    console.log('getting data once')
    const getData= async ()=>{
     const res= await fetch('https://api.sampleapis.com/coffee/hot')
     const data =await res.json() 
     setCoffees(data)
    }
    getData()
},[])

//only firing when Temp state chages
useEffect(()=>{
console.log('listening to temp')
const getData= async ()=>{
     const res= await fetch(`https://api.sampleapis.com/coffee/${temperature}`)
     const data =await res.json() 
 setCoffees(data)
}
getData()
},[temp,rendered])


const allCoffees= coffees.map(each => <p>{each.title}</p>)

return(
    <>
      <h1>Boat component-useEffect</h1>
      <h2>My coffees are {temp}</h2>
      <span>listOfAccessories {rendered && 'button was clicked'}</span>
      <button onClick={()=>setRendered(true)}>Render again</button>
      <button onClick={()=> setTemp(!temp)}>GetCoffees</button>
      {allCoffees}
    </>
  )
}

