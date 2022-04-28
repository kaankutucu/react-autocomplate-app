import {useEffect, useState} from "react";
import './App.css';
import './index.css'

const data = [
    {
        id: 1,
        title:"test 1"
    },

    {
        id: 2,
        title:"Tessst 2"
    },

    {
        id: 3,
        title:"deneme 1"
    },

    {
        id: 4,
        title:"Deneme 2"
    }

]


function App() {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])


    useEffect(() => {
        if (search) {
          setResult(data.filter (item => item.title.contains(search)))
        }else {
            setResult([])
        }
    }, [search])


  return (
  <>
      <div className="search">
        <input placeholder="Search Something..." type="text" onChange={(e) => setSearch(e.target.value)}/>
      </div>
  </>
  );
}

export default App;
