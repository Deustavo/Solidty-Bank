import React from "react"
import { useHistory } from "react-router-dom"

import LogoSRC from "../../assets/main-logo.svg"

const Logo: React.FC = () => {
  const history = useHistory()

  return <img onClick={() => history.push("/")} src={LogoSRC} alt="Solidty Bank" />
}

export default Logo
