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

interface CheckoutFormProps {
    formData: FormData
    onFormDataChange: (data: FormData) => void
}

export default function CheckoutForm({ formData, onFormDataChange }: CheckoutFormProps) {
    const handleChange = (field: keyof FormData, value: string) => {
        onFormDataChange({
            ...formData,
            [field]: value
        })
    }

    return (
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 cart-scrollbar">
            <form className="space-y-4">
                <div>
                    <label className="block text-white font-semibold mb-2">Tipo de entrega</label>
                    <div className="relative">
                        <select
                            value={formData.deliveryType}
                            onChange={(e) => handleChange('deliveryType', e.target.value)}
                            className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                        >
                            <option value="retirar">Retirar no local</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">Forma de pagamento</label>
                    <div className="relative">
                        <select
                            value={formData.paymentMethod}
                            onChange={(e) => handleChange('paymentMethod', e.target.value)}
                            className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                        >
                            <option value="dinheiro">Dinheiro</option>
                            <option value="cartao">Cartão</option>
                            <option value="pix">PIX</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">Nome</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Seu nome"
                        className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">Telefone</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Ex: (14) 99999-0000"
                        className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                    />
                </div>

                {formData.deliveryType === 'delivery' && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-white font-semibold mb-2">CEP</label>
                            <input
                                type="text"
                                value={formData.cep}
                                onChange={(e) => handleChange('cep', e.target.value)}
                                placeholder="00000-000"
                                className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="sm:col-span-2">
                                <label className="block text-white font-semibold mb-2">Endereço</label>
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => handleChange('address', e.target.value)}
                                    placeholder="Rua, Avenida, etc."
                                    className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                                />
                            </div>
                            <div>
                                <label className="block text-white font-semibold mb-2">Número</label>
                                <input
                                    type="text"
                                    value={formData.number}
                                    onChange={(e) => handleChange('number', e.target.value)}
                                    placeholder="123"
                                    className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2">Bairro</label>
                            <input
                                type="text"
                                value={formData.neighborhood}
                                onChange={(e) => handleChange('neighborhood', e.target.value)}
                                placeholder="Nome do bairro"
                                className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                    </div>
                )}

                <div>
                    <label className="block text-white font-semibold mb-2">Observações</label>
                    <textarea
                        value={formData.observations}
                        onChange={(e) => handleChange('observations', e.target.value)}
                        placeholder="Alguma observação?"
                        rows={3}
                        className="w-full bg-yellow-800/50 border border-yellow-600/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 resize-none"
                    />
                </div>
            </form>
        </div>
    )
}
