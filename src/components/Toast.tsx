import { useEffect, useState } from 'react'
import { FaCheck, FaShoppingCart } from 'react-icons/fa'

interface ToastItem {
    id: string
    message: string
    timestamp: number
}

interface ToastProps {
    toasts: ToastItem[]
    onRemoveToast: (id: string) => void
    onOpenCart?: () => void
}

export default function Toast({ toasts, onRemoveToast, onOpenCart }: ToastProps) {
    const [toastTimestamps, setToastTimestamps] = useState<Map<string, number>>(new Map())

    useEffect(() => {
        toasts.forEach(toast => {
            if (!toastTimestamps.has(toast.id)) {
                const timestamp = Date.now()
                setToastTimestamps(prev => new Map(prev).set(toast.id, timestamp))

                const timer = setTimeout(() => {
                    onRemoveToast(toast.id)
                    setToastTimestamps(prev => {
                        const newMap = new Map(prev)
                        newMap.delete(toast.id)
                        return newMap
                    })
                }, 3000)

                return () => clearTimeout(timer)
            }
        })
    }, [toasts, onRemoveToast, toastTimestamps])

    const handleMouseEnter = () => {
    }

    const handleMouseLeave = (toastId: string) => {
        const timestamp = toastTimestamps.get(toastId)
        if (timestamp) {
            const elapsed = Date.now() - timestamp
            const remaining = 3000 - elapsed

            if (remaining <= 0) {
                onRemoveToast(toastId)
                setToastTimestamps(prev => {
                    const newMap = new Map(prev)
                    newMap.delete(toastId)
                    return newMap
                })
            } else {
                setTimeout(() => {
                    onRemoveToast(toastId)
                    setToastTimestamps(prev => {
                        const newMap = new Map(prev)
                        newMap.delete(toastId)
                        return newMap
                    })
                }, remaining)
            }
        }
    }

    if (toasts.length === 0) return null

    return (
        <div className="fixed top-20 right-4 z-50 space-y-2">
            {toasts.map((toast, index) => (
                <div
                    key={toast.id}
                    onClick={() => {
                        onOpenCart?.()
                        toasts.forEach(t => onRemoveToast(t.id))
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => handleMouseLeave(toast.id)}
                    className="bg-green-500 text-black p-4 pr-16 rounded-xl shadow-lg flex items-center space-x-3 max-w-sm animate-slide-in cursor-pointer hover:bg-green-600 transition-colors relative"
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
                    <div className="absolute bottom-2 right-2 bg-green-600 rounded-full px-2 py-1 flex items-center space-x-1">
                        <span className="text-white text-xs font-semibold">Abrir</span>
                        <FaShoppingCart className="text-white text-xs" />
                    </div>
                </div>
            ))}
        </div>
    )
}