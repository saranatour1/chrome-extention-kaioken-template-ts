import '../../globals.css'
import { useEffect, useState } from "kaioken";
function App() {
  const [count, setCount] =useState(0)

  useEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCount(result.count || 0)
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        setCount(request.count || 0)
      }
    })
  }, [])

  return (
    <main className="grid place-content-center w-full h-full min-h-screen max-w-full">
      <h3 className="font-serif font-bold text-3xl text-center text-primary/80">options page</h3>
      <h4 className="font-serif font-bold text-xl text-center text-primary/80">Count from Popup: {count}</h4>
    </main>
  );
}

export default App;