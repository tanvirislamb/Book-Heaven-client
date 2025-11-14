export default function Loading({ message = "Loading..." }) {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/70 z-50">
            <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-700 font-medium text-lg">{message}</p>
        </div>
    );
}
