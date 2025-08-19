"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function ConversionPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = "5511977367924"
  const whatsappMessage = "Olá! Vi o site e gostaria de fazer uma cotação do Hapvida NotreDame. Pode me ajudar?"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white shadow-2xl border-0 animate-in zoom-in-95 duration-300">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-primary to-blue-600 p-4 text-white text-center relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors bg-white/20 rounded-full p-1"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center mb-2">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="h-6 w-6" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">💚 COTAÇÃO GRATUITA</h3>
          </div>

          <div className="p-4 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-2">HAPVIDA NOTREDAME</h4>
            <p className="text-base text-gray-700 mb-3">
              O melhor plano de saúde do Brasil com <strong className="text-primary">condições especiais</strong>
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <Shield className="h-5 w-5 text-green-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-green-800">Cobertura Nacional</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                <Star className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-blue-800">Sem Carência</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-2">
                <MessageCircle className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-purple-800">Atendimento 24h</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                <Shield className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-orange-800">Aprovação Rápida</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-3 mb-4">
              <p className="text-lg font-bold text-primary">Planos a partir de</p>
              <p className="text-2xl font-bold text-green-600">R$ 149,90/mês</p>
              <p className="text-xs text-gray-700">Consulte condições especiais</p>
            </div>

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
                <MessageCircle className="h-5 w-5 mr-2" />
                FAZER COTAÇÃO GRATUITA
              </Button>
            </Link>

            <p className="text-xs text-gray-500 mt-2">✅ Atendimento personalizado • Sem compromisso</p>

            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 mt-2 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              ✕ Fechar
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
