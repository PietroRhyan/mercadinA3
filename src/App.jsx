import { BrowserRouter as Router } from 'react-router-dom'
import { PageRoutes } from "./routes"

export function App() {
  return (
    <Router>
      <PageRoutes />
    </Router>
  )
}

