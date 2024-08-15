import { Toaster } from "react-hot-toast"
import { Routers } from "./routers/Routers"

function App() {

  return (
    <>
      <Routers />
      <Toaster position="top-left" reverseOrder={true} toastOptions={{ duration: 5000 }} />
    </>
  )
}

export default App
