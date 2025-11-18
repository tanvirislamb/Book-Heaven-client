import axios from "axios"
import { useEffect, useState } from "react"
import Topratingbooks from "./Topratingbooks"

export default function TopBooks() {
    const [TopBooks, setTopbooks] = useState([])

    useEffect(() => {
        axios('https://book-heaven-liard.vercel.app/books/top')
            .then(data => {
                setTopbooks(data.data)
            })
    }, [])

    return (
        <div className="max-w-[1600px] mx-auto">
            <p className="text-center font-bold text-2xl text-base-content">Books of The Week</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 justify-center md:mx-20 lg:mx-50 mt-10">
                {
                    TopBooks.map((topbook, index) => (
                        <Topratingbooks key={index} topbook={topbook}></Topratingbooks>
                    ))
                }
            </div>
        </div>
    )
}