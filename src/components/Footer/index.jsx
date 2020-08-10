import React from "react";
import { FaCreditCard, FaCarSide } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdReplay } from "react-icons/md";
import "./styles.css";

const HelpInfo = () => (
  <div className="footer-help-info-container">
    <div className="footer-help-info-item footer-links">
      <MdReplay size="30px" />
      <p>DEVOLUÇÃO FÁCIL E GRATUITA</p>
    </div>
    <div className="footer-help-info-item footer-links">
      <FaCreditCard size="30px" />
      <p>PAGAMENTO SEGURO</p>
    </div>
    <div className="footer-help-info-item footer-links">
      <FaCarSide size="30px" />
      <p>FRETE GRÁTIS</p>
    </div>
    <div className="footer-help-info-item footer-links">
      <FiHelpCircle size="30px" />
      <p>PRECISA DE AJUDA?</p>
    </div>
  </div>
);

const StoreInfo = () => (
  <div className="footer-store-info">
    <div className="footer-store-info-item">
      <h3>Sobre a Fashion Store</h3>
      <ul>
        <li className="footer-links">Pessoas</li>
        <li className="footer-links">Produtos</li>
        <li className="footer-links">Carreira</li>
        <li className="footer-links">Proteção da marca</li>
      </ul>
    </div>
    <div className="footer-store-info-item">
      <h3>Loja</h3>
      <ul>
        <li className="footer-links">Coleção Homens</li>
        <li className="footer-links">Coleção Mulheres</li>
        <li className="footer-links">Coleção Crianças</li>
        <li className="footer-links">Loja de Calçados</li>
      </ul>
    </div>
    <div className="footer-store-info-item">
      <h3>Ajuda & Contato</h3>
      <p className="footer-store-info-item-faq footer-links">FAQ</p>
      <p>POR TELEFONE</p>
      <p>(99) 9999-9999</p>
    </div>
  </div>
);

const SpecialLinks = () => (
  <div className="footer-special-links">
    <ul>
      <li className="footer-links">Guia de tamanhos</li>
      <li className="footer-links">Política de privacidade</li>
      <li className="footer-links">Termos e Condições </li>
      <li className="footer-links">Mapa da página </li>
    </ul>
  </div>
);

function Footer() {
  return (
    <footer>
      <HelpInfo />
      <StoreInfo />
      <SpecialLinks />
    </footer>
  );
}

export default Footer;
