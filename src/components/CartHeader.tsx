import { FaShoppingCart, FaCheck } from 'react-icons/fa'

interface CartHeaderProps {
    showCheckout: boolean
    onClose: () => void
}

export default function CartHeader({ showCheckout, onClose }: CartHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                {showCheckout ? (
                    <>
                        <FaCheck />
                        <span>Finalizar pedido</span>
                    </>
                ) : (
                    <>
                        <FaShoppingCart />
                        <span>Carrinho</span>
                    </>
                )}
            </h2>
            <button
                onClick={onClose}
                className="text-white hover:text-yellow-300 text-2xl"
            >
                ×
            </button>
        </div>
    )
}
