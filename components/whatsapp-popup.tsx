"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Gift, Clock } from "lucide-react"
import Link from "next/link"

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = "5511977367924"
  const whatsappMessage = "Olá! Vi o popup no site e gostaria de solicitar uma cotação gratuita de plano de saúde."

  useEffect(() => {
    // Mostra o popup após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white shadow-2xl border-0 animate-in zoom-in-95 duration-300">
        <CardContent className="p-0">
          {/* Header com gradiente */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white text-center relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center mb-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Gift className="h-8 w-8" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">🎉 Oferta Especial!</h3>
            <p className="text-green-100">Cotação 100% Gratuita</p>
          </div>

          {/* Conteúdo */}
          <div className="p-6 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Encontre o Plano Ideal para Você!</h4>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Análise gratuita do seu perfil</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Comparação de preços em tempo real</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Atendimento especializado</span>
              </div>
            </div>

            {/* Urgência */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-orange-700">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold">Promoção por tempo limitado!</span>
              </div>
            </div>

            {/* Botões */}
            <div className="space-y-3">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsVisible(false)}
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Solicitar Cotação GRÁTIS
                </Button>
              </Link>

              <button
                onClick={() => setIsVisible(false)}
                className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
              >
                Fechar (continuar navegando)
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
