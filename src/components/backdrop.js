import React, { useEffect, useState } from "react"
import Background from "../images/background1.jpg"
import WaterEffect from "./water-effect"

const Backdrop = () => {
  const [isFront, setIsFront] = useState(false)

  const containerStyle = {
    zIndex: "-1",
    overflow: "hidden"
  }

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
          backgroundPosition: "0px 0px",
          backgroundSize: "cover"
        }}
        className="backdrop"
        dropRadius={20}
        perturbance={0.03} //intensity of animation/waves
        interactive={true}
        resolution={512} //animation speed
      >
        {({ drop }) => <button onClick={() => drop(50, 50, 20, 0.05)} />}
      </WaterEffect>
    </div>
  )
}

export default Backdrop
