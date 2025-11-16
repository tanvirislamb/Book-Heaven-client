export default function Loading({ message = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 h-screen">
            <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-base-content font-medium text-lg">{message}</p>
        </div>
    );
}
