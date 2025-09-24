import { FaCheck, FaArrowLeft } from 'react-icons/fa'

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

interface FormData {
    deliveryType: string
    paymentMethod: string
    name: string
    phone: string
    cep: string
    address: string
    number: string
    neighborhood: string
    observations: string
}

interface CartSummaryProps {
    showCheckout: boolean
    total: number
    items: CartItem[]
    formData: FormData
    onConfirmOrder: () => void
    onBack: () => void
    onFinalizeOrder: () => void
}

export default function CartSummary({
    showCheckout,
    total,
    items,
    onConfirmOrder,
    onBack,
    onFinalizeOrder
}: CartSummaryProps) {
    if (showCheckout) {
        return (
            <div className="border-t border-yellow-400/20 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-white text-xl font-bold">Total:</span>
                    <span className="text-yellow-300 text-2xl font-bold">
                        R$ {total.toFixed(2)}
                    </span>
                </div>
                <div className="space-y-3">
                    <button
                        onClick={onConfirmOrder}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer flex items-center justify-center space-x-2"
                    >
                        <FaCheck />
                        <span>Confirmar pedido</span>
                    </button>
                    <button
                        onClick={onBack}
                        className="w-full bg-yellow-800/50 hover:bg-yellow-700/50 text-white py-3 rounded-xl font-bold transition-colors cursor-pointer flex items-center justify-center space-x-2"
                    >
                        <FaArrowLeft />
                        <span>Voltar</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        items.length > 0 && (
            <div className="border-t border-yellow-400/20 pt-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-xl font-bold">Total:</span>
                    <span className="text-yellow-300 text-2xl font-bold">
                        R$ {total.toFixed(2)}
                    </span>
                </div>
                <button
                    onClick={onFinalizeOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer"
                >
                    Finalizar Pedido
                </button>
            </div>
        )
    )
}
