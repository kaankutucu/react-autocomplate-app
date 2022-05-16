import {useEffect, useState, useRef} from "react";
import './App.css';
import './index.css'
import {isLabelWithInternallyDisabledControl} from "@testing-library/user-event/dist/utils";

const data = [
    {
        id: 1,
        title: "test 1"
    },

    {
        id: 2,
        title: "Tessst 2"
    },

    {
        id: 3,
        title: "deneme 1"
    },

    {
        id: 4,
        title: "Deneme 2"
    }

]


function App() {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState(false)
    const searchRef = useRef()
    const isTyping = search.replace(/\s+/, '').length > 0;
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    } ,[])

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains (e.target)) {
            setSearch(' ')
        }
    }

    useEffect(() => {
        if (isTyping) {
            const filteredResult = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            setResult(filteredResult.length > 0 ? filteredResult : false)
        } else {
            setResult(false)
        }
    }, [search])


    return (
        <>
            <div className="search" ref={searchRef}>
                <input value={search} className={isTyping ? 'typing' : null} placeholder="Search Something..." type="text"
                       onChange={(e) => setSearch(e.target.value)}/>
                {isTyping && (
                    <div className="search-result">
                        {result && result.map(
                            item => (
                                <div key={item.id} className="search-result-item">
                                    {item.title}
                                </div>
                            )
                        )}

                        {
                            !result && (
                                <div className="result-not-found">
                                    "{search}" is not founda.
                                </div>
                            )
                        }

                    </div>
                )}
            </div>
        </>
    );
}

export default App;
