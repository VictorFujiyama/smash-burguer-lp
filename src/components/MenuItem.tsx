import { FaShoppingCart } from "react-icons/fa"

interface MenuItemProps {
    id: string
    name: string
    description: string
    price: string
    image?: string
    category: string
    onAddToCart: (id: string, name: string, price: number, image: string) => void
}

export default function MenuItem({ id, name, description, price, image, category, onAddToCart }: MenuItemProps) {
    return (
        <div className="bg-yellow-900/30 rounded-2xl p-6 hover:bg-yellow-800/40 transition-colors border border-yellow-400/20 h-auto flex flex-col">
            <div className="w-full h-48 bg-yellow-800/40 rounded-xl mb-4 flex items-center justify-center flex-shrink-0">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-xl"
                    />
                ) : (
                    <div className="text-gray-400 text-6xl">
                        {category === 'bebidas' ? '🥤' : '🍔'}
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">
                    {name}
                </h3>

                <p className="text-yellow-900 text-sm leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-4 mt-auto">
                    <span className="text-2xl font-bold text-yellow-900">
                        {price}
                    </span>

                    <button
                        onClick={() => onAddToCart(id, name, parseFloat(price.replace('R$ ', '').replace(',', '.')), image || '')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer flex items-center gap-2"
                    >
                        Adicionar
                        <FaShoppingCart size={16} />

                    </button>
                </div>
            </div>
        </div>
    )
}
