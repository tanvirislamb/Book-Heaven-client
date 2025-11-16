import { Suspense, useEffect, useState } from "react"
import LatestBooks from "./LatestBooks";

export default function Latest() {

    const [latest, setLatest] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => {
                setLatest(data.slice(0, 6))
                setLoading(false)
            })

    }, [])

    return (
        <div className="max-w-[1800px] mx-auto">
            <p className="text-center font-bold text-2xl text-base-content">Latest Additions</p>
            {
                loading ? (<div className="flex justify-center pt-10 text-indigo-600">
                    <span className="loading loading-bars loading-lg"></span>
                </div>)
                    :
                    (<div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:px-10 lg:px-40 pt-10">
                        {
                            latest.map((eachbook, index) => (
                                <LatestBooks key={index} eachbook={eachbook}></LatestBooks>
                            ))
                        }
                    </div>)
            }
        </div>
    )
}