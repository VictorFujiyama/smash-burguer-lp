import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'

interface CartItemProps {
    id: string
    name: string
    price: number
    quantity: number
    image: string
    onUpdateQuantity: (id: string, quantity: number) => void
    onRemoveItem: (id: string) => void
}

export default function CartItem({
    id,
    name,
    price,
    quantity,
    image,
    onUpdateQuantity,
    onRemoveItem
}: CartItemProps) {
    return (
        <div className="bg-yellow-800/30 rounded-xl p-3 sm:p-4 relative">
            <button
                onClick={() => onRemoveItem(id)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-300 cursor-pointer"
            >
                <FaTrash size={14} />
            </button>

            <div className="flex items-center space-x-2 sm:space-x-3 min-h-16">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                    <h3 className="text-white font-semibold">{name}</h3>
                    <p className="text-yellow-300 font-bold">
                        R$ {price.toFixed(2)}
                    </p>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                    <button
                        onClick={() => onUpdateQuantity(id, quantity - 1)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer"
                    >
                        <FaMinus size={10} />
                    </button>
                    <span className="text-white font-bold w-8 text-center translate-y-1">
                        {quantity}
                    </span>
                    <button
                        onClick={() => onUpdateQuantity(id, quantity + 1)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer"
                    >
                        <FaPlus size={10} />
                    </button>
                </div>
            </div>
        </div>
    )
}
