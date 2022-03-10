import Home from "./pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
  const [users, setUsers] = useState([])
  const URL = "https://raw.githubusercontent.com/srijanDubey/chitkara-test-api-mock/main/data.json"
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = () => {
    setIsLoading(true)
    axios.get(URL)
      .then(res => res.data)
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {isLoading ? <span>Loading...</span> : <Home users={users} />}
    </>
  );
}

export default App;
