import { useState } from 'react'


function App() {
 
  const players = [
    {
      name: " Lionel Messi",
      age: "36yrs",
      team: "Inter Miami",
      nationality: "Argentina",
      JerseyNum: "10",
      img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g"

    },
    {
      name: "Cristiano Ronaldo",
      age: "38yrs",
      team: "Al-Nassr Fc",
      nationality:"Portugal",
      JerseyNum: "7",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
    },
    {
      name:"Kylian Mbappe",
      age: "24yrs",
      team: "PSG",
      nationality: "France",
      JerseyNum: "7",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSm1IwsPZDVXMagZrFcX2o8neNG5SoTD1Gxnx1A_ApzHw3TBcuP"

    },
    {
      name: "Bruno Fernandes",
      age: "29yrs",
      team: "Manchester United",
      nationality: "Portugal",
      JerseyNum: "8",
      img: "https://b.fssta.com/uploads/application/soccer/headshots/1593.vresize.350.350.medium.21.png"
    }
  ]
  return (
    <div>
      {players.map(({name,age,team,nationality,JerseyNum,img},index) =>(
       <Players
       key={index}
       name={name}
       image={img}
       age={age}
       team={team}
       nationality={nationality}
       JerseyNumber={JerseyNum}
       ></Players>
      )
      )}
    
    </div>
  )
}

export default App
