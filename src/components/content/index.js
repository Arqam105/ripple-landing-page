import React, { useState } from "react"
import Logo from "../../images/logo.png"
import "./content.css"

function Content(props) {
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
    console.log(event.target.value)
  }

  const styles = {
    container: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: "10",
      width: "100%",
      height: "100%",
      color: "white",
    },
    heading1: {
      fontFamily: "Ogg Regular",
      fontSize: "34pt"
    },
    heading2: {
      fontFamily: "Ogg Regular",
      fontSize: "24pt",
      lineHeight: "1.2",
      marginRight: "60px"
    },
    heading3: {
      fontFamily: "Ogg Regular",
      fontSize: "18pt",
      lineHeight: "1.2"
    },
    inputField: {
      background: "rgba(255,255,255,0.3)",
      color: "rgba(255,255,255,1)",
      margin: "-2px",
      padding: "5px",
      width: "101%",
      border: "0"
    },
    inputArea: {
      pointerEvents: "auto",
      color: "white",
      border: "2px solid white",
      width: "100%",
      color: "white"
    },
    buttonStyle: {
      pointerEvents: "auto",
      fontStyle: "bold",
      fontWeight: "550",
      letterSpacing: "0.2pt",
      padding: "5px 2px 0px 2px",
      background: "transparent",
      color: "white",
      border: "0",
      borderBottom: "1px solid white"
    },
    content: {
      height: "220px",
    },
    logoStyle: {
      height: "220px",
      marginBottom: "22px"
    }
  }

  let content
  props.email === "" ? content =
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center" style={styles.logoStyle}>
          <img src={Logo} className="img-fluid" style={{ width: "350px", height: "160px" }} />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3 ml-2 mr-2">
          <div style={styles.content}>
            <label style={styles.heading2} >Be the first to get access.</label><br /><br />
            <div style={styles.inputArea}>
              <input
                style={styles.inputField}
                type="text"
                id="user-email"
                placeholder="Email address"
                onChange={(event) => handleChange(event)}
              />
            </div><br />
            <button style={styles.buttonStyle} onClick={() => props.setEmail(input)}>
              Submit
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>

    : content =
    <div className="container">
      <div className="row">
        <div className="col-md-7 d-flex justify-content-center" style={styles.logoStyle}>
          <img src={Logo} className="img-fluid" style={{ width: "350px", height: "160px" }} />
        </div>
        <div className="col-md-3 ml-2 mr-2">
          <div style={styles.content}>
            <label style={styles.heading2} >Thank you!</label><br /><br />
            <label style={styles.heading3} >
              You'll be the first to get access to our page.
              We'll be in touch soon.
            </label>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>


  return (
    <div style={styles.container} className="d-flex align-items-center">{content}</div>
  )
}

export default Content