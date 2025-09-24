import { useEffect } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

interface ToastItem {
    id: string
    message: string
    timestamp: number
}

interface ToastProps {
    toasts: ToastItem[]
    onRemoveToast: (id: string) => void
}

export default function Toast({ toasts, onRemoveToast }: ToastProps) {
    useEffect(() => {
        toasts.forEach(toast => {
            const timer = setTimeout(() => {
                onRemoveToast(toast.id)
            }, 2000)

            return () => clearTimeout(timer)
        })
    }, [toasts, onRemoveToast])

    if (toasts.length === 0) return null

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {toasts.map((toast, index) => (
                <div
                    key={toast.id}
                    className="bg-green-500 text-black px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-sm animate-slide-in"
                    style={{
                        transform: `translateY(${index * 10}px)`,
                        zIndex: 50 - index
                    }}
                >
                    <div className="bg-green-600 rounded-full p-2">
                        <FaCheck className="text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">Adicionado ao carrinho!</p>
                        <p className="text-sm text-black">{toast.message}</p>
                    </div>
                    <button
                        onClick={() => onRemoveToast(toast.id)}
                        className="text-black font-bold hover:text-green-200 transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>
            ))}
        </div>
    )
}
