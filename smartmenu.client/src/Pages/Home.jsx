import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className=" py-5">
          <div className="container">
            <h1>Crie Seu Cardápio Conosco!</h1>
            <br />
            <div className="">
              <a href="/CardapioAdmin" className="btn btn-primary">
                Criar Cardápio
              </a>
            </div>
          </div>
        </section>
        <main>
          <section className="container">
            <h1 className="text-center mt-5 mb-4">O que é Smart Menu?</h1>
            <p className="text-center">
              O Smart Menu é um serviço de cardápio digital que se baseia na
              modernidade e praticidade para restaurantes, sejam eles pequenos
              ou grandes. Em vez de oferecer cardápios físicos tradicionais em
              papel, o Smart Menu utiliza a tecnologia para disponibilizar o
              cardápio aos clientes por meio de dispositivos eletrônicos, como
              smartphones e tablets, acessíveis por meio de um QRcode.
            </p>
            <br />
            <div className="row">
              <div className="container ">
                <div className="col">
                  <div className="card mb-4 shadow">
                    <img
                      src="https://cdn.abrahao.com.br/base/a97/a7b/113/porque-ter-cardapio-digital.jpg"
                      alt="Tablet"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Agilidade e Praticidade:</h5>
                      <p className="card-text">
                        Os clientes podem acessar o cardápio em tempo real, em
                        seus próprios dispositivos, economizando tempo e
                        otimizando o trabalho de toda a equipe do restaurante.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="col">
                  <div className="card mb-4 shadow">
                    <img
                      src="src/assets/imagens/cardapios_sazonais.jpg"
                      alt="Celular"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Atualização Facilitada:</h5>
                      <p className="card-text">
                        Atualize facilmente seus cardápios digitais para
                        mudanças sazonais, promoções ou disponibilidade de
                        itens, aproveitando oportunidades para alavancar o
                        faturamento.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <br />
                  <div className="card mb-4 shadow">
                    <img
                      src="src/assets/imagens/auto_atendimento.jpg"
                      alt="QR"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Integração com Pedidos e Pagamentos:
                      </h5>
                      <p className="card-text">
                        Otimize pedidos e pagamentos diretamente por meio de
                        aplicativo, entregando uma experiência rápida e eficaz
                        com alta taxa de conversão.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <br />
                  <div className="card mb-4 shadow">
                    <img
                      src="src/assets/imagens/reducao_de_custo.jpg"
                      alt="QR"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Redução de Custos:</h5>
                      <p className="card-text">
                        Evita a necessidade de imprimir mapas financeiros em
                        papel, o que pode ser caro e prejudicial ao meio
                        ambiente.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="col">
                  <div className="card mb-4 shadow">
                    <img
                      src="src/assets/imagens/avaliacao_de_atendimento.jpg"
                      alt="QR"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Feedback dos Clientes:</h5>
                      <p className="card-text">
                        Colete avaliações e comentários de seus clientes, sobre
                        a experiência que viveram no estabelecimento, o que pode
                        ser útil para melhorar a qualidade do serviço.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="col">
                  <div className="card mb-4 shadow">
                    <img
                      src="src/assets/imagens/obter_insights.jpg"
                      alt="QR"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <a id="destino-clientes"></a>
                      <h5 className="card-title">Rastreamento de Dados:</h5>
                      <p className="card-text">
                        Os restaurantes podem coletar dados sobre os pedidos e
                        preferências dos clientes, o que pode ser relevante para
                        análises de negócios e estratégias de marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
