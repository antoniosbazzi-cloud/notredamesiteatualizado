"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, X, CheckCircle, Clock, Phone, MessageCircle } from "lucide-react"

export default function CartaPermanenciaInfo() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "5511977367924"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre carta de permanência e migração de planos de saúde."

  return (
    <>
      {/* Botão circular para abrir o modal */}
      <div
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <FileText className="h-8 w-8 text-white" />
      </div>

      {/* Modal com informações */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white shadow-2xl border-0">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-6 text-white relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8" />
                  <div>
                    <h2 className="text-2xl font-bold">Carta de Permanência</h2>
                    <p className="text-blue-100">NotreDame Intermédica</p>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 space-y-6">
                {/* O que é */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />O que é a Carta de Permanência?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A carta de permanência NotreDame Intermédica é um documento exigido pela operadora quando o
                    beneficiário deseja migrar para um novo plano ou efetuar o cancelamento. Na carta constam todas as
                    informações do cliente, tempo de contrato e é importante para auxiliar na migração ou cancelamento
                    do serviço.
                  </p>
                </div>

                {/* Como solicitar */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    Como Solicitar
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-3">
                      A carta pode ser solicitada apenas pelo <strong>titular do plano</strong> através de:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>
                          <strong>Telefone:</strong> 4090-1750 (região metropolitana)
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>
                          <strong>0800:</strong> 0800 409 1750 (demais localidades)
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>
                          <strong>Site:</strong> Área do cliente GNDI
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Quando pedir */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-2" />
                    Quando Solicitar
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Para Migração</h4>
                      <p className="text-gray-700 text-sm">
                        Apresente na nova operadora em até 60 dias para ter acesso à redução de carências.
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Para Cancelamento</h4>
                      <p className="text-gray-700 text-sm">
                        Evita problemas futuros relacionados ao período de continuidade no serviço.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carências */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Prazos de Carência NotreDame</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Urgência/Emergência</span>
                      <span className="font-semibold text-green-600">24 horas</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Consultas e exames simples</span>
                      <span className="font-semibold text-blue-600">30 dias</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Terapias simples</span>
                      <span className="font-semibold text-orange-600">180 dias</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Demais procedimentos</span>
                      <span className="font-semibold text-orange-600">180 dias</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Parto a termo</span>
                      <span className="font-semibold text-purple-600">300 dias</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Cobertura Parcial Temporária</span>
                      <span className="font-semibold text-red-600">720 dias</span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dúvidas Frequentes</h3>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-1">Por quanto tempo posso usar a carta?</h4>
                      <p className="text-gray-600 text-sm">Geralmente de 30 a 60 dias após a emissão.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-1">Posso cancelar a qualquer momento?</h4>
                      <p className="text-gray-600 text-sm">
                        Sim, mas deve respeitar o prazo de vigência estipulado pela operadora.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Precisa de Ajuda com sua Migração?</h3>
                  <p className="text-gray-700 mb-4">
                    Nossa equipe especializada pode te ajudar com todo o processo de migração e solicitação da carta de
                    permanência.
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-3 rounded-full">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Falar com Especialista
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
