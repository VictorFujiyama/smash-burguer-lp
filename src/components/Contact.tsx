import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
    return (
        <section className="p-6 sm:p-16">
            <div className="w-full">
                <div className="max-w-full mx-auto">
                    <h2 className="text-3xl font-bold text-yellow-900 mb-8">
                        Contato
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-red-400 text-xl" />
                            <span className="text-yellow-900 text-lg font-bold">
                                (14) 98132-3913
                            </span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-red-400 text-xl" />
                            <span className="text-yellow-900 text-lg font-bold">
                                Av. Nove de Julho - Centro, Lençóis Paulista - SP, 18680-120
                            </span>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={() => window.open('https://wa.me/5514981323913?text=Olá! Gostaria de fazer um pedido com vocês.', '_blank')}
                                className="cursor-pointer bg-green-500 hover:bg-green-600 text-green-950 font-bold px-8 py-4 rounded-xl transition-colors flex items-center text-lg space-x-3">
                                <FaWhatsapp className="text-3xl" />
                                <span>Pedir pelo WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
