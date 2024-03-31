import { useEffect, useState } from 'kaioken'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const openOptions =() =>{
    chrome.runtime.openOptionsPage();
  }

  // first mount
  useEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCount(result.count || 0)
    })
  }, [])

  useEffect(() => {
    chrome.storage.sync.set({ count })
    chrome.runtime.sendMessage({ type: 'COUNT', count })
  }, [count])

  return (
    <main className="w-full h-full min-h-[10rem] min-w-[20rem] flex flex-col items-start justify-start p-4">
      <span className="font-bold font-mono text-center text-primary/80">
        this is the popup page!
      </span>
      <div className="w-full flex flex-col justify-between items-center p-2">
        <span className="text-center font-serif font-bold text-primary/80">Counter</span>
        <div className='w-full flex items-center justify-between'>
          <button
            onclick={decrement}
            className="bg-primary/5 py-2 px-4 border border-primary/30 shadow drop-shadow hover:border-primary transition-colors"
          >
            -
          </button>
          <span>{count}</span>
          <button
            onclick={increment}
            className="bg-primary/5 py-2 px-4 border border-primary/30 shadow drop-shadow hover:border-primary transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <button className='bg-primary/5 py-2 px-4 border border-primary/30 shadow drop-shadow hover:border-primary transition-colors mt-2 mx-auto' onclick={openOptions}>open options page _↗ </button>
    </main>
  )
}

export default App
