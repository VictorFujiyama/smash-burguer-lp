import { FaShoppingCart } from "react-icons/fa";

interface HeaderProps {
    onCartClick: () => void
    cartItemsCount: number
    cartAnimation: boolean
}

export default function Header({ onCartClick, cartItemsCount, cartAnimation }: HeaderProps) {
    return (
        <header className="bg-yellow-900/30 backdrop-blur-sm border-b border-yellow-400/20">
            <div className="w-full p-4 px-4 sm:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <img src="/smash-logo.png" alt="Smash Burger Logo" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="sm:flex hidden text-yellow-900 text-4xl font-bold -translate-y-[2px] select-none">Smash Burger LP</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onCartClick}
                            className={`cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-yellow-900 px-4 py-2 rounded-2xl font-semibold transition-colors flex items-center justify-center space-x-2 relative ${cartAnimation ? 'animate-pulse-cart' : ''
                                }`}
                        >
                            <FaShoppingCart size={24} />
                            <span className="text-lg">Carrinho</span>
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                                    {cartItemsCount}
                                </span>
                            )}
                        </button>

                    </div>
                </div>
            </div>
        </header>
    )
}
