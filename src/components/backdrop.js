import React, { useEffect, useState } from "react"
import Background from "../images/background.jpg"
import WaterEffect from "./water-effect"

const Backdrop = () => {
  const containerStyle = {
    zIndex: "-1",
    overflow: "hidden"
  }

  const [isFront, setIsFront] = useState(false)

  useEffect(() => {
    if (window ?? false) {
      setIsFront(true)
    }
  }, [])

  if (!isFront) return null

  return (
    <div style={containerStyle}>
      <WaterEffect
        style={{
          height: "100vh",
          background: `url(${Background})`,
          backgroundPosition: "0px 0px"
        }}
        className="backdrop"
        dropRadius={20}
        perturbance={0.03} //intensity of animation/waves
        interactive={true}
        resolution={256} //animation speed
      >
        {({ drop }) => <button onClick={() => drop(50, 50, 20, 0.05)} />}
      </WaterEffect>
    </div>
  )
}

export default Backdrop
