import React from 'react';

const Menu = () => {
    const adicionarAoCarrinho = (item, preco) => {
        console.log(`Adicionando ${item} ao carrinho por R$${preco}`);
    };

    return (
        <div className="container btn-group-sm" id="clientes">
            <h2>Menu</h2>
            <div className="row">
                <div className="col-sm-6" style={{ width: "350px", height: "350px" }}>
                    <div className="card shadow">
                        <img src="https://assets.unileversolutions.com/recipes-v2/106684.jpg" alt="X-Salada" id="X-Salada" width="350" height="350" className="card-img-bottom img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">X-Salada</h5>
                            <p className="card-text">Hambúrguer com 100g de carne, Tomate, Salada e Molho especial.</p>
                            <p className="card-text">Preço: R$ 10</p>
                            <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('X-Salada', 10)}>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-6" style={{ width: "350px", height: "350px" }}>
                    <div className="card shadow">
                        <img src="https://www.assai.com.br/sites/default/files/blog/batata_frita_com_ketchup_-_tipos_de_batata_frita_no_assai_atacadista.jpg" alt="Fritas" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Porção de batata frita</h5>
                            <p className="card-text">Porção de Fritas deliciosas e acompanhada com Ketchup.</p>
                            <p className="card-text">Preço: R$ 15</p>
                            <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('Porção de batata frita', 15)}>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="col-sm-6" style={{ width: "350px", height: "350px" }}>
                    <div className="card shadow">
                        <img src="https://www.tripsavvy.com/thmb/Nq2VVICRAsN_H_1rVA7jEEvI53o=/4368x2912/filters:fill(auto,1)/milkshake-trio-172192393-59b594a90d327a0011babde4.jpg" alt="Milkshake" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">Milkshake</h5>
                            <p className="card-text">Milkshakes incrivelmente deliciosos com diversos sabores.</p>
                            <p className="card-text">Preço: R$ 12</p>
                            <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('Milkshake', 12)}>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
