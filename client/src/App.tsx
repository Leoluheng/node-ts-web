import React, {useEffect, useState} from 'react'

function App() {

  interface testData {
    users: []
  }

  const [backendData, setBackendData] = useState<testData | undefined>(undefined)

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof backendData?.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App