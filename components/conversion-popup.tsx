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
      <Card className="max-w-lg w-full bg-white shadow-2xl border-0 animate-in zoom-in-95 duration-300">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white text-center relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center mb-3">
              <div className="bg-white/20 p-3 rounded-full">
                <MessageCircle className="h-8 w-8" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">💚 COTAÇÃO GRATUITA</h3>
          </div>

          {/* Conteúdo */}
          <div className="p-6 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">HAPVIDA NOTREDAME</h4>
            <p className="text-lg text-gray-700 mb-4">
              O melhor plano de saúde do Brasil com <strong className="text-primary">condições especiais</strong>
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-green-800">Cobertura Nacional</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <Star className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-blue-800">Sem Carência</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <MessageCircle className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-purple-800">Atendimento 24h</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <Shield className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-orange-800">Aprovação Rápida</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-4 mb-6">
              <p className="text-2xl font-bold text-primary">Planos a partir de</p>
              <p className="text-3xl font-bold text-green-600">R$ 149,90/mês</p>
              <p className="text-sm text-gray-700">Consulte condições especiais</p>
            </div>

            {/* Botão principal */}
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsVisible(false)}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                FAZER COTAÇÃO GRATUITA
              </Button>
            </Link>

            <p className="text-xs text-gray-500 mt-3">✅ Atendimento personalizado • Sem compromisso</p>

            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-gray-400 hover:text-gray-600 text-sm py-2 mt-2 transition-colors"
            >
              Fechar
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
