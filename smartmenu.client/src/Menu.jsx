import React from 'react';

function Menu() {
    const adicionarAoCarrinho = (produto, preco) => {
    };

    return (
        <main>
            <div className="container" id="clientes">
                <h2>Menu</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src="https://assets.unileversolutions.com/recipes-v2/106684.jpg" alt="X-Salada" className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "20px", overflow: "hidden" }}>X-Salada</h5>
                                <p className="card-text" style={{ height: "80px", overflow: "hidden" }}>Hambúrguer com 100g de carne</p>
                                <p className="card-text">Preço: R$ 10</p>
                                <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('X-Salada', 10)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src="https://www.assai.com.br/sites/default/files/blog/batata_frita_com_ketchup_-_tipos_de_batata_frita_no_assai_atacadista.jpg" alt="Fritas" className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "20px", overflow: "hidden" }}>Porção de batata frita</h5>
                                <p className="card-text" style={{ height: "80px", overflow: "hidden" }}>Porção de Fritas deliciosas e acompanhada com Ketchup. Porção de Fritas deliciosas e acompanhada com Ketchup.</p>
                                <p className="card-text">Preço: R$ 15</p>
                                <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('Porção de batata frita', 15)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src="https://static.itdg.com.br/images/1200-630/ee9c780da91c8377e7f6a10f30c6c1da/milk-shake-caseiro.jpg" alt="Milkshake" className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "20px", overflow: "hidden" }}>Milkshake</h5>
                                <p className="card-text" style={{ height: "80px", overflow: "hidden" }}>Milkshakes incrivelmente deliciosos com diversos sabores.</p>
                                <p className="card-text">Preço: R$ 12</p>
                                <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('Milkshake', 12)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src="https://www.designi.com.br/images/preview/10217355.jpg" alt="Fritas" className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "20px", overflow: "hidden" }}>Porção de batata frita</h5>
                                <p className="card-text" style={{ height: "80px", overflow: "hidden" }}>Porção de Fritas deliciosas e acompanhada com Ketchup.</p>
                                <p className="card-text">Preço: R$ 15</p>
                                <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('Porção de batata frita', 15)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src="https://www.selecoes.com.br/media/_versions/legacy/5/d/3306b162b662b503884c5aff2ca2ed62c3226ce0_widelg.jpg" alt="Milkshake" className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "20px", overflow: "hidden" }}>Milkshake</h5>
                                <p className="card-text" style={{ height: "80px", overflow: "hidden" }}>Milkshakes incrivelmente deliciosos</p>
                                <p className="card-text">Preço: R$ 12</p>
                                <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('Milkshake', 12)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src="https://static-images.ifood.com.br/image/upload/t_high/pratos/7d1d7624-9148-4726-b7f7-830c934d234e/202205101335_HGV6_i.jpg" alt="X-Salada" className="card-img-top" style={{ height: "230px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ height: "20px", overflow: "hidden" }}>X-Salada</h5>
                                <p className="card-text" style={{ height: "80px", overflow: "hidden" }}>Hambúrguer com 100g de carne, Tomate, Salada e Molho especial. teste teste teste teste teste teste teste teste teste teste</p>
                                <p className="card-text">Preço: R$ 10</p>
                                <button className="btn btn-outline-primary" onClick={() => adicionarAoCarrinho('X-Salada', 10)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Menu;
