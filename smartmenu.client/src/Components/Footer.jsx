import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "#f8f9fa", padding: "20px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container">
                <a id="ponto-de-destino"></a>
                <h1 style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>Carrinho de Compras</h1>
                <div id="carrinho-conteudo" style={{ marginBottom: "10px", textAlign: "center" }}></div>
                <p style={{ fontSize: "18px", textAlign: "center" }}>Total: R$ <span id="total">0.00</span></p>
                <button className="btn btn-primary" style={{ fontSize: "16px", padding: "10px 20px", display: "block", margin: "0 auto" }} onClick={() => finalizarCompra()}>Finalizar Compra</button>
            </div>

            <script src="carrinho.js"></script>
        </footer>
    );
}

export default Footer;
