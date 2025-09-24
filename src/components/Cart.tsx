import { useState, useEffect } from 'react'
import CartHeader from './CartHeader'
import CheckoutForm from './CheckoutForm'
import CartSummary from './CartSummary'
import CartItem from './CartItem'

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
    const [showCheckout, setShowCheckout] = useState(false)
    const [formData, setFormData] = useState({
        deliveryType: 'retirar',
        paymentMethod: 'dinheiro',
        name: '',
        phone: '',
        cep: '',
        address: '',
        number: '',
        neighborhood: '',
        observations: ''
    })

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('cart-open')
        } else {
            document.body.classList.remove('cart-open')
        }

        return () => {
            document.body.classList.remove('cart-open')
        }
    }, [isOpen])

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
                    <CartHeader showCheckout={showCheckout} onClose={onClose} />

                    {showCheckout ? (
                        <CheckoutForm formData={formData} onFormDataChange={setFormData} />
                    ) : (
                        <div className="flex-1 overflow-y-auto space-y-4 pr-2 cart-scrollbar">
                            {items.length === 0 ? (
                                <p className="text-white/60 text-center py-8">
                                    Seu carrinho está vazio
                                </p>
                            ) : (
                                items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        image={item.image}
                                        onUpdateQuantity={onUpdateQuantity}
                                        onRemoveItem={onRemoveItem}
                                    />
                                ))
                            )}
                        </div>
                    )}

                    <CartSummary
                        showCheckout={showCheckout}
                        total={total}
                        items={items}
                        formData={formData}
                        onConfirmOrder={() => {
                            const orderText = `*PEDIDO SMASH BURGUER LP*
                                        
*Cliente:* ${formData.name}
*Telefone:* ${formData.phone}
*Tipo de entrega:* ${formData.deliveryType === 'retirar' ? 'Retirar no local' : 'Delivery'}
${formData.deliveryType === 'delivery' && (formData.cep || formData.address || formData.number || formData.neighborhood) ?
                                    `*Endereço de entrega:*
${formData.cep ? `CEP: ${formData.cep}` : ''}
${formData.address ? `${formData.address}${formData.number ? `, ${formData.number}` : ''}` : ''}
${formData.neighborhood ? `Bairro: ${formData.neighborhood}` : ''}` : ''}
*Forma de pagamento:* ${formData.paymentMethod === 'dinheiro' ? 'Dinheiro' : formData.paymentMethod === 'cartao' ? 'Cartão' : 'PIX'}

*ITENS:*
${items.map(item => `• ${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`).join('\n')}

*TOTAL: R$ ${total.toFixed(2)}*

${formData.observations ? `*Observações:* ${formData.observations}` : ''}`

                            const whatsappUrl = `https://wa.me/5514981323913?text=${encodeURIComponent(orderText)}`
                            window.open(whatsappUrl, '_blank')
                            setShowCheckout(false)
                            onClose()
                        }}
                        onBack={() => setShowCheckout(false)}
                        onFinalizeOrder={() => setShowCheckout(true)}
                    />
                </div>
            </div>
        </>
    )
}
