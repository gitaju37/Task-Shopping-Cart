import { useContext } from "react"

import MyContext from "./Context/MyContext"
import Card from "./Card"
const Content = () => {
    const { Products } = useContext( MyContext )
  return (
      <div className="card-container">
          {
              Products.map( ( Products) => {
                  return <Card Product={Products} key={Products.id}  />
              })
          }
      
    </div>
  )
}

export default Content
