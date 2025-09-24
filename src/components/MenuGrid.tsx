import { useMemo } from 'react'
import MenuItem from './MenuItem'

interface MenuGridProps {
    activeFilter: string
    searchTerm: string
    onAddToCart: (id: string, name: string, price: number, image: string) => void
}

const menuItems = [
    {
        id: '1',
        name: 'Burger Clássico',
        description: 'Pão, blend 160g, queijo, alface, tomate e molho da casa.',
        price: 'R$ 24,90',
        image: '/burger-classico.png',
        category: 'burgers'
    },
    {
        id: '2',
        name: 'Burger Bacon',
        description: 'Pão, blend 160g, bacon crocante, queijo, alface e molho especial.',
        price: 'R$ 28,90',
        image: '/burger-bacon.png',
        category: 'burgers'
    },
    {
        id: '3',
        name: 'Sanduíche do Chef',
        description: 'Pão artesanal, blend 200g, queijo gorgonzola, rúcula e molho de mostarda.',
        price: 'R$ 32,90',
        image: '/sanduiche-do-chef.png',
        category: 'burgers'
    },
    {
        id: '4',
        name: 'Wrap Tropical',
        description: 'Tortilla, frango grelhado, abacaxi, alface e molho teriyaki.',
        price: 'R$ 26,90',
        image: '/wrap-tropical.png',
        category: 'smash'
    },
    {
        id: '5',
        name: 'Burger Vegano Premium',
        description: 'Pão vegano, hambúrguer de quinoa, queijo vegano, alface e tomate.',
        price: 'R$ 29,90',
        image: '/burger-vegano-premium.png',
        category: 'burgers'
    },
    {
        id: '6',
        name: 'Chapa Quente',
        description: 'Pão de forma, presunto, queijo, tomate e orégano na chapa.',
        price: 'R$ 18,90',
        image: '/chapa-quente.png',
        category: 'smash'
    },
    {
        id: '7',
        name: 'Coca Cola Lata',
        description: 'Refrigerante gelado 350ml.',
        price: 'R$ 5,90',
        image: '/coca-cola-lata.png',
        category: 'bebidas'
    },
    {
        id: '8',
        name: 'Guaraná Lata',
        description: 'Refrigerante gelado 350ml.',
        price: 'R$ 5,90',
        image: '/guarana-lata.png',
        category: 'bebidas'
    }
]

export default function MenuGrid({ activeFilter, searchTerm, onAddToCart }: MenuGridProps) {
    const filteredItems = useMemo(() => {
        return menuItems.filter(item => {
            const matchesCategory = activeFilter === 'todos' || item.category === activeFilter

            const matchesSearch = searchTerm === '' ||
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())

            return matchesCategory && matchesSearch
        })
    }, [activeFilter, searchTerm])

    return (
        <section className="px-6 sm:px-16">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {filteredItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
