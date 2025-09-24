import { FaShoppingCart, FaTrash, FaMinus, FaPlus } from 'react-icons/fa'

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

interface CartProps {
    isOpen: boolean
    onClose: () => void
    items: CartItem[]
    onUpdateQuantity: (id: string, quantity: number) => void
    onRemoveItem: (id: string) => void
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={onClose}
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-yellow-900/95 backdrop-blur-sm border-l border-yellow-400/20 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-3 sm:p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                            <FaShoppingCart />
                            <span>Carrinho</span>
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-yellow-300 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4">
                        {items.length === 0 ? (
                            <p className="text-white/60 text-center py-8">
                                Seu carrinho está vazio
                            </p>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="bg-yellow-800/30 rounded-xl p-4 relative">
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                                    >
                                        <FaTrash size={14} />
                                    </button>

                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold">{item.name}</h3>
                                            <p className="text-yellow-300 font-bold">
                                                R$ {item.price.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="flex items-centerimage.png sm:space-x-2">
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                className="bg-yellow-600 hover:bg-yellow-700 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                                            >
                                                <FaMinus size={12} />
                                            </button>
                                            <span className="text-white font-bold w-8 text-center translate-y-1">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                className="bg-yellow-600 hover:bg-yellow-700 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                                            >
                                                <FaPlus size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="border-t border-yellow-400/20 pt-4">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-white text-xl font-bold">Total:</span>
                                <span className="text-yellow-300 text-2xl font-bold">
                                    R$ {total.toFixed(2)}
                                </span>
                            </div>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer">
                                Finalizar Pedido
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
