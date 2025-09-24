import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface HeroProps {
    onFilterChange: (filter: string) => void
    onSearchChange: (search: string) => void
}

export default function Hero({ onFilterChange, onSearchChange }: HeroProps) {
    const [activeFilter, setActiveFilter] = useState('todos')
    const [searchTerm, setSearchTerm] = useState('')

    const filters = [
        { id: 'todos', label: 'Todos' },
        { id: 'burgers', label: 'Burgers' },
        { id: 'smash', label: 'Smash' },
        { id: 'bebidas', label: 'Bebidas' }
    ]

    const handleFilterChange = (filterId: string) => {
        setActiveFilter(filterId)
        onFilterChange(filterId)
    }

    const handleSearchChange = (value: string) => {
        setSearchTerm(value)
        onSearchChange(value)
    }

    return (
        <section className="p-6 sm:p-16">
            <div className="w-full">
                <div className="flex items-start gap-12">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl font-bold text-yellow-900">
                                Bem-vindo ao nosso cardápio
                            </h1>
                            <p className="text-xl text-yellow-900">
                                Escolha seu prato favorito e faça seu pedido.
                            </p>
                        </div>

                        <div className="relative max-w-4xl">
                            <input
                                type="text"
                                placeholder="Buscar por item..."
                                value={searchTerm}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                className="w-full bg-yellow-900/40 rounded-xl px-6 py-4 text-yellow-900 placeholder-yellow-900 focus:outline-none transition-colors"
                            />
                            <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-yellow-900" />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => handleFilterChange(filter.id)}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-colors ${activeFilter === filter.id
                                        ? 'bg-yellow-500 text-yellow-900'
                                        : 'bg-yellow-800/50 text-yellow-900 hover:bg-yellow-700/60'
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-shrink-0">
                        <div className="w-80 h-80 rounded-2xl flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
                            <img src="/smash-logo.png" alt="Smash Burger Logo" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
