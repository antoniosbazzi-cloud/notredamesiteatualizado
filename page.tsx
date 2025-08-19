"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Shield, Star, Users, Building, Heart, Award, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HapvidaNotreDameLanding() {
  const whatsappNumber = "5511977367924" // Número real da ALB Consultoria
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos Hapvida NotreDame."
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 relative overflow-hidden">
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          title="Falar no WhatsApp"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fale Conosco!</h3>
                  <p className="text-sm text-gray-600">ALB Consultoria</p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                🎉 <strong>Oferta Especial Hapvida NotreDame!</strong>
              </p>
              <p className="text-gray-600 text-sm mb-4">Solicite sua cotação agora e garanta:</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>✅ Condições exclusivas</li>
                <li>✅ Sem taxa de adesão</li>
                <li>✅ Atendimento personalizado</li>
                <li>✅ Resposta em até 2 horas</li>
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </button>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-medium transition-colors duration-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-300/30 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-red-300/25 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/30 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-red-300/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-28 h-28 bg-blue-300/25 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "5s" }}
        ></div>

        <div
          className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-red-400/20 to-blue-400/20 rotate-45 animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute bottom-1/2 right-1/2 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-red-400/20 rounded-full animate-ping"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>

      {/* Menu de Navegação no Topo */}
      <nav className="py-4 px-4 relative z-10 bg-white/20 backdrop-blur-sm border-b border-white/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="#vantagens"
              className="text-lg font-semibold text-gray-700 hover:text-red-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50"
            >
              Vantagens
            </a>
            <a
              href="#relatos"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50"
            >
              Relatos
            </a>
            <a
              href="#planos"
              className="text-lg font-semibold text-gray-700 hover:text-red-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50"
            >
              Planos
            </a>
            <a
              href="#contato"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Seção Principal */}
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
              <Image
                src="/favicon.png"
                alt="ALB Consultoria de Benefícios"
                width={60}
                height={60}
                className="opacity-90"
              />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800">ALB Consultoria</h2>
              <p className="text-lg text-gray-600">de Benefícios</p>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Planos de Saúde <br />
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Hapvida NotreDame
            </span>
          </h1>

          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A <strong>Hapvida NotreDame</strong> é o <strong>maior grupo de saúde do Brasil</strong>, resultado da
              fusão entre duas gigantes do setor. Com mais de <strong>1.000 unidades próprias</strong> e atendimento a
              mais de 16 milhões de beneficiários.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <span className="font-semibold text-red-600">✓ Maior rede do país</span> •
              <span className="font-semibold text-blue-600 ml-2">✓ Atendimento 24h</span> •
              <span className="font-semibold text-red-600 ml-2">✓ Tecnologia de ponta</span>
            </p>
          </div>

          {/* Botão WhatsApp Principal */}
          <div className="mb-8" id="contato">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white text-2xl px-16 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 animate-pulse"
              >
                <MessageCircle className="h-8 w-8 mr-4" />
                Solicitar Cotação Hapvida NotreDame
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">✓ Condições especiais ✓ Sem compromisso ✓ Resposta imediata</p>
          </div>

          <div className="mb-12" id="vantagens">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Por que escolher a Hapvida NotreDame?</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Maior Rede do Brasil</h4>
                <p className="text-gray-600">
                  Mais de 1.000 unidades próprias em todo o país, incluindo hospitais, clínicas, laboratórios e centros
                  de diagnóstico.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Cuidado Completo</h4>
                <p className="text-gray-600">
                  Modelo integrado que une a tradição da NotreDame com a inovação da Hapvida, oferecendo cuidado
                  completo.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Líder Nacional</h4>
                <p className="text-gray-600">
                  O maior grupo de saúde do Brasil, atendendo mais de 16 milhões de beneficiários com excelência
                  comprovada.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12" id="relatos">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Clientes Hapvida NotreDame:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">"A fusão criou o melhor plano de saúde do Brasil!"</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <p className="font-semibold text-gray-900">Maria Silva</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">"Agora tenho acesso à maior rede de saúde do país!"</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      J
                    </div>
                    <p className="font-semibold text-gray-900">João Santos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">"Qualidade Hapvida + tradição NotreDame!"</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      A
                    </div>
                    <p className="font-semibold text-gray-900">Ana Costa</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">"Atendimento rápido e sem burocracia!"</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      C
                    </div>
                    <p className="font-semibold text-gray-900">Carlos Lima</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">"Melhor plano de saúde que já tive!"</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      L
                    </div>
                    <p className="font-semibold text-gray-900">Lucia Ferreira</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">"Atendimento personalizado e eficiente!"</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      R
                    </div>
                    <p className="font-semibold text-gray-900">Roberto Silva</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-red-600">Mais de 500 clientes</span> já contrataram Hapvida NotreDame
              conosco. Nossa parceria exclusiva com o <strong>maior grupo de saúde do Brasil</strong> garante condições
              especiais.
            </p>
            <p className="text-base text-gray-600">
              <strong>Consultoria especializada</strong> • <strong>Melhores preços</strong> •{" "}
              <strong>Suporte completo</strong>
            </p>
          </div>

          <div className="mb-12" id="planos">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Planos Hapvida NotreDame Disponíveis</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Individual/Familiar</h4>
                <p className="text-gray-600">
                  Planos completos para você e sua família com acesso total à maior rede de saúde do Brasil.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Empresarial</h4>
                <p className="text-gray-600">
                  Soluções corporativas com a força da Hapvida NotreDame para empresas de todos os portes.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Por Adesão</h4>
                <p className="text-gray-600">
                  Planos por adesão com mensalidades reduzidas e acesso à excelência Hapvida NotreDame.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-gray-200 py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 ALB Consultoria de Benefícios - Especialista em Hapvida NotreDame</p>
          <p className="text-gray-600 mt-2">CNPJ: 47.368.612/0001-03</p>
        </div>
      </footer>
    </div>
  )
}
