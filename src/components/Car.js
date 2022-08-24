import { useState } from 'react'

const Car = () => {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red',
    owners: {
      owner1: 'Rafa',
      owner2: 'Justin',
      owner3: 'Jonathan',
    },
    accessories: [
      'Convertible',
      'Turbo',
      'SuperCharge',
      'v8',
      'Manual Transmission',
    ]
  })

  console.log(car)

  const updateColor = () => {
    setCar(prevState => ({ ...prevState, color: 'blue' }))
  }


  const updateOwner3 = () => {
    setCar(prevState => {
      return {...prevState, owners: { ...prevState.owners, owner3: 'Jiho', owner4: 'Mike' }
      }
    })
  }

  const addRadio = () => {
    setCar({ ...car, accessories: [...car.accessories, 'Car Stereo'] })
  }

  const removeRadio = () => {
    ///take copy of state(car) and hold in updatedArray
    const updatedArray = car.accessories.filter(eachItem  => eachItem !== 'Car Stereo')
    console.log(updatedArray)
    //updating state with this updateArray
    setCar({ ...car, accessories: updatedArray })
  }

  const listOfAccessories=car.accessories.map(item=> {
    return(
        <li>{item}</li>
    )
  })

return (
    <>
      <h1>my car Component {car.color} owned now by {car.owners.owner3}</h1>
      <button onClick={updateColor}>Change my Color</button>
      <button onClick={updateOwner3}>Change Owner3 to Jiho</button>
      <button onClisk={addRadio}>add Radio</button>
      <button onclick={removeRadio}>Remove Car Stereo</button>
      <ul>


        {/* /* {car.accessories.map((item) => {
          return <li>{item}</li>
        })} */}
     {listOfAccessories}
      </ul>
    </>
  )
}
export default Car
