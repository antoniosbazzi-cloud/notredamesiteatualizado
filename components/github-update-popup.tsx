"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, X, Phone, Check, Shield, Clock } from "lucide-react"

export default function NotreDameUpdatePopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostra o popup após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5511977367924" // +55 11 97736-7924
    const message = "Olá! Gostaria de conhecer os planos Hapvida NotreDame e fazer uma cotação personalizada"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <Card className="max-w-lg w-full shadow-2xl border-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        <CardContent className="p-0">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 p-8 text-white text-center relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/20 hover:bg-white/30 rounded-full p-2"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 rounded-full p-3">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4 tracking-wide">COTAÇÃO GRATUITA</h3>

            <div className="mb-8">
              <p className="text-blue-100 mb-3 text-lg">Planos a partir de:</p>
              <div className="text-6xl font-bold mb-2 text-white drop-shadow-lg">R$ 149,90</div>
              <div className="text-xl text-blue-100 mb-3">/mês</div>
              <p className="text-sm text-blue-200 bg-white/10 rounded-full px-4 py-2 inline-block">
                Condições especiais disponíveis
              </p>
            </div>

            <div className="text-left space-y-4 mb-8">
              <p className="text-blue-100 font-semibold mb-4 text-center text-lg">Benefícios Inclusos:</p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-white text-lg">Cobertura nacional completa</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <span className="text-white text-lg">Atendimento 24h disponível</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-white text-lg">Telemedicina incluída</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-white text-blue-700 hover:bg-blue-50 text-lg py-6 rounded-2xl shadow-xl font-bold mb-6 transition-all duration-200 hover:scale-105"
              onClick={handleWhatsAppRedirect}
            >
              <Phone className="h-5 w-5 mr-3" />
              SOLICITAR COTAÇÃO GRATUITA
            </Button>

            <p className="text-sm text-blue-200">✓ Atendimento personalizado ✓ Sem compromisso ✓ Resposta imediata</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
