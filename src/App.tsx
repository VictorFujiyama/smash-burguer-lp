import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Toast from './components/Toast'

interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
    image: string
}

export default function App() {
    const [activeFilter, setActiveFilter] = useState('todos')
    const [searchTerm, setSearchTerm] = useState('')
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [toasts, setToasts] = useState<Array<{ id: string, message: string, timestamp: number }>>([])
    const [cartAnimation, setCartAnimation] = useState(false)

    const addToCart = (id: string, name: string, price: number, image: string) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === id)
            if (existingItem) {
                return prev.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prev, { id, name, price, quantity: 1, image }]
            }
        })

        const toastId = Date.now().toString()
        setToasts(prev => [...prev, { id: toastId, message: name, timestamp: Date.now() }])
        setCartAnimation(true)

        setTimeout(() => setCartAnimation(false), 600)
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            setCartItems(prev => prev.filter(item => item.id !== id))
        } else {
            setCartItems(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            )
        }
    }

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id))
    }

    const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-red-300 to-yellow-500 flex flex-col">
            <Header
                onCartClick={() => setIsCartOpen(true)}
                cartItemsCount={cartItemsCount}
                cartAnimation={cartAnimation}
            />
            <Hero
                onFilterChange={setActiveFilter}
                onSearchChange={setSearchTerm}
            />
            <MenuGrid
                activeFilter={activeFilter}
                searchTerm={searchTerm}
                onAddToCart={addToCart}
            />
            <Contact />
            <Footer />
            <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
            />
            <Toast
                toasts={toasts}
                onRemoveToast={removeToast}
                onOpenCart={() => setIsCartOpen(true)}
            />
        </div>
    )
}
