import React from "react"
import Logo from "../../images/living-skin-logo.png"
import { Helmet } from "react-helmet"
import "./content.css"

function Content() {
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
      fontSize: "34pt",
    },
    heading2: {
      fontFamily: "Ogg Regular",
      fontSize: "24pt",
      lineHeight: "1.2",
      marginRight: "60px",
    },
    heading3: {
      fontFamily: "Ogg Regular",
      fontSize: "18pt",
      lineHeight: "1.2",
    },
    inputField: {
      background: "rgba(255,255,255,0.3)",
      color: "rgba(255,255,255,1)",
      margin: "-2px",
      padding: "5px",
      width: "101%",
      border: "0",
    },
    inputArea: {
      pointerEvents: "auto",
      color: "white",
      border: "2px solid white",
      width: "100%",
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
      borderBottom: "1px solid white",
    },
    content: {
      height: "220px",
    },
    logoStyle: {
      height: "220px",
      marginBottom: "24px",
    },
  }

  let content = (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 d-flex justify-content-center"
          style={styles.logoStyle}
        >
          <img
            alt="Living Skin"
            src={Logo}
            className="img-fluid"
            style={{ width: "350px", height: "160px" }}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3 ml-2 mr-2">
          <div class="klaviyo-form-YhbDY7"></div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )

  return (
    <div style={styles.container} className="d-flex align-items-center">
      <Helmet>
        <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WMSPCB"></script>
        <title>Living Skin</title>
      </Helmet>
      {content}
    </div>
  )
}

export default Content
