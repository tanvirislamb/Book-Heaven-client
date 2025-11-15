export default function Comments({ comment }) {
    console.log(comment.photoURL)
    return (
        <div className="flex items-start gap-2">
            <div>
                <img src={comment.photoURL} alt="" className="w-10 h-10 object-cover rounded-full" />
            </div>
            <div className="bg-gray-50 px-3 py-1 rounded-2xl shadow-md">
                <p className="font-bold">{comment.name}</p>
                <p className="font-extralight">{comment.comment}</p>
            </div>
        </div>
    )
}