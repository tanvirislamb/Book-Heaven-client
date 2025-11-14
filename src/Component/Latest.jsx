import { useEffect, useState } from "react"
import LatestBooks from "./LatestBooks";

export default function Latest() {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => {
                setLatest(data.slice(0, 6))
            })
    }, [])

    return (
        <div className="max-w-[1800px] mx-auto">
            <p className="text-center font-bold text-2xl">Latest Additions</p>

            <div className="grid grid-cols-3 gap-4 px-40 pt-10">
                {
                    latest.map((eachbook, index) => (<LatestBooks key={index} eachbook={eachbook}></LatestBooks>))
                }
            </div>
        </div>
    )
}