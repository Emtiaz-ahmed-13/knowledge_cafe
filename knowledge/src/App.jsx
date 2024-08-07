import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookmarks,setbookmarks] = useState([]);

  const handleAddToBookmarks = blog=>{
    const newBookmarks = [...bookmarks,blog]
    setbookmarks(newBookmarks)

  }


  return (
    <>
    <Header />
    <main className="md:flex max-w-7xl mx-auto">
      <Blogs 
      handleAddToBookmarks=
      {handleAddToBookmarks} 
      />
      <Bookmarks bookmarks={bookmarks}  />

    </main>


    </>
  )
}

export default App
