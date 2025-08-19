import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Shield, Star, Phone, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import CartaPermanenciaInfo from "@/components/carta-permanencia-info"
import NotreDameUpdatePopup from "@/components/github-update-popup"

export default function HapvidaNotreDameLanding() {
  const whatsappNumber = "5511977367924"
  const professionalMessage = "Olá! Gostaria de conhecer os planos Hapvida NotreDame e fazer uma cotação personalizada."

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <NotreDameUpdatePopup />

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            {/* Logo ALB Consultoria */}
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <img src="/favicon.png" alt="ALB Consultoria" className="h-12 w-12" />
              <div className="text-left">
                <h2 className="text-xl font-bold text-gray-800">ALB Consultoria</h2>
                <p className="text-sm text-gray-600">de Benefícios</p>
              </div>
            </div>

            {/* Separador */}
            <div className="hidden md:block text-2xl text-gray-400">×</div>

            {/* Logo Hapvida NotreDame */}
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <img src="/images/hapvida-notredame-logo.png" alt="Hapvida NotreDame" className="h-16 md:h-20" />
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-primary">HAPVIDA NOTREDAME</span>
            <br />O melhor{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              plano de saúde
            </span>{" "}
            do Brasil
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 font-semibold">
            Cobertura nacional completa com a <strong className="text-primary">maior rede credenciada</strong> do país
          </p>

          {/* Oferta principal */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 mb-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">💙 COTAÇÃO GRATUITA</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg">Planos a partir de:</p>
                <p className="text-3xl font-bold">R$ 149,90/mês</p>
                <p className="text-blue-200">Condições especiais disponíveis</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-lg">Benefícios inclusos:</p>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Cobertura nacional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Sem carência</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Atendimento 24h</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-16 py-8 rounded-full shadow-2xl font-bold"
              >
                <MessageCircle className="h-8 w-8 mr-4" />
                SOLICITAR COTAÇÃO GRATUITA
              </Button>
            </Link>

            <p className="text-sm text-blue-100 mt-4">
              ✓ Atendimento personalizado ✓ Sem compromisso ✓ Resposta imediata
            </p>
          </div>
        </div>
      </section>

      {/* Seção de benefícios */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher <span className="text-primary">Hapvida NotreDame?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Maior Rede do Brasil</h3>
                <p className="text-gray-600">Mais de 4.000 hospitais e 60.000 médicos em todo o país</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl">
              <CardContent className="pt-8">
                <CartaPermanenciaInfo />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Migração Facilitada</h3>
                <p className="text-gray-600">Ajudamos com carta de permanência e migração de planos</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Melhor Custo-Benefício</h3>
                <p className="text-gray-600">Plano completo com o melhor preço do mercado</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de benefícios premium */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-4">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hapvida NotreDame: <span className="text-primary">Líder em Saúde</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8">
              Junte-se a milhões de brasileiros que confiam na maior rede de saúde do país
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">15 milhões</div>
                <p className="text-gray-700">de beneficiários atendidos</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-secondary mb-2">4.000+</div>
                <p className="text-gray-700">hospitais credenciados</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">60.000+</div>
                <p className="text-gray-700">médicos especialistas</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 mb-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Benefícios Exclusivos</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Cobertura nacional completa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Atendimento 24h emergencial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Telemedicina incluída</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Medicina preventiva</span>
                </div>
              </div>
            </div>

            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-blue-700 hover:to-orange-600 text-white text-lg px-12 py-6 rounded-full shadow-xl font-bold"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                SOLICITAR COTAÇÃO GRATUITA
              </Button>
            </Link>

            <p className="text-sm text-gray-600 mt-4">
              ✓ Cotação sem compromisso ✓ Atendimento personalizado ✓ Melhores condições do mercado
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Mais de <span className="text-primary">50.000 clientes</span> satisfeitos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Silva", text: "Consegui 50% de desconto e estou economizando R$ 150 por mês!", rating: 5 },
              { name: "João Santos", text: "Atendimento excelente e aprovação super rápida!", rating: 5 },
              { name: "Ana Costa", text: "Melhor plano que já tive, recomendo para todos!", rating: 5 },
              { name: "Carlos Lima", text: "Sem carência e posso usar imediatamente. Perfeito!", rating: 5 },
              {
                name: "Lucia Ferreira",
                text: "Rede médica incrível, encontro especialista em qualquer lugar!",
                rating: 5,
              },
              { name: "Roberto Silva", text: "Economizei mais de R$ 2.000 no primeiro ano!", rating: 5 },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 font-medium">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Dúvidas Frequentes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Como funciona o desconto?</h3>
              <p className="text-gray-600">
                O desconto de 50% é aplicado na mensalidade durante todo o primeiro ano do contrato.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Posso usar imediatamente?</h3>
              <p className="text-gray-600">Sim! Sem carência para consultas, exames e emergências.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Qual a rede credenciada?</h3>
              <p className="text-gray-600">Mais de 4.000 hospitais e 60.000 médicos em todo o Brasil.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Como contratar?</h3>
              <p className="text-gray-600">Clique no botão do WhatsApp e nossa equipe te ajuda em 2 minutos!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FALE CONOSCO AGORA!</h2>
          <p className="text-lg md:text-xl mb-8">
            Descubra o plano ideal para você e sua família.
            <br />
            <strong>Atendimento especializado e personalizado!</strong>
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-6 rounded-full shadow-xl font-bold"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                FALAR NO WHATSAPP
              </Button>
            </Link>

            <Link href={`tel:${whatsappNumber}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-12 py-6 rounded-full shadow-xl bg-transparent font-bold"
              >
                <Phone className="h-6 w-6 mr-3" />
                LIGAR AGORA
              </Button>
            </Link>
          </div>

          <p className="text-sm text-blue-100">✓ Atendimento imediato ✓ Consultoria especializada ✓ Sem compromisso</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 ALB Consultoria de Benefícios. Todos os direitos reservados.</p>
          <p className="text-gray-300 mt-2">CNPJ: 47.368.612/0001-03</p>
          <p className="text-sm text-gray-400 mt-4">
            Representante autorizado Hapvida NotreDame • Ofertas sujeitas à análise e aprovação
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl border-0 w-16 h-16"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </Link>
    </div>
  )
}
