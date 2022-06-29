import { useContext } from 'react'
import { BrowserDataContext } from "../browser-data-context"

const useBrowserData = () => {
  const [state, ] = useContext(BrowserDataContext)
  return {...state}
}

export default useBrowserData
