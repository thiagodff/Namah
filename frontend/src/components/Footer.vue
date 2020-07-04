<template>
  <div class="footer-wrapper">
    <div class="wrapper">
      <div class="site">
        <div class="logo-wrapper">
          <img class="logo" src="../assets/logoFooter.svg" alt />
        </div>

        <div class="social">
          <a target="_blank" href="https://www.facebook.com">
            <img src="../assets/facebook.svg" alt />
          </a>
          <a target="_blank" href="https://www.instagram.com">
            <img src="../assets/instagram.svg" alt />
          </a>
          <a target="_blank" href="https://www.twitter.com">
            <img src="../assets/twitter.svg" alt />
          </a>
        </div>

        <div class="contacts">
          <div class="contact">
            <strong>Institucional</strong>
            <a href="#">Sobre nós</a>
            <a href="#">Contato</a>
          </div>

          <div class="contact">
            <strong>Loja</strong>
            <a href="#">Cadastre-se</a>
            <a href="#">Área do lojista</a>
          </div>

          <div class="contact">
            <strong>Atendimento</strong>
            <a href="mailto:hello@espaconamah.com.br">hello@espaconamah.com.br</a>
            <p>(31) 2515 6200</p>
          </div>
        </div>

        <div class="contact footer-newsletter">
          <strong>Assine nossa Newsletter</strong>
          <form>
            <input type="text" placeholder="Seu endereço de e-mail" />
            <button @click.prevent>ASSINAR</button>
          </form>
        </div>
      </div>

      <div class="info">
        <p class="rights">
          © 2020 Espaço Namah. Todos os direitos reservados.
          <br />CNPJ: 19.035.854/0001-31.
        </p>

        <div class="payment">
          <p>Formas de Pagamento:</p>

          <div class="payment-methods">
            <img src="../assets/visa.svg" alt />
            <img src="../assets/mastercard.svg" alt />
            <img src="../assets/card.svg" alt />
            <img src="../assets/american.svg" alt />
            <img src="../assets/boleto.svg" alt />
          </div>
        </div>

        <div class="security">
          <img src="../assets/cadeado.svg" alt />
          <p>Site seguro</p>
        </div>

        <p class="questions">
          <a href="#">Dúvidas Frequentes</a>
          |
          <a href="#">Políticas da Loja</a>
        </p>

        <p class="bigbang">
          Site por
          <a
            class="bigbang"
            href="https://www.bigbangshop.com.br/"
            target="_blank"
          >BIG BANG SHOP</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped>
.footer-wrapper {
  background: #000000;
  width: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  max-width: 1720px;
  display: flex;
  flex-direction: column;
}

.site,
.info {
  max-width: 1720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin-top: 25px;
  margin-right: 15px;
}

.site {
  margin: 15px 40px 40px 40px;
}

.social {
  margin-top: 25px;
  max-width: 160px;
  min-width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contacts {
  display: flex;
}

.rights br {
  display: none;
}

.contact {
  margin: 25px 12px 0 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 15px;
}

a,
a:visited,
p,
strong {
  color: #fff;
}

.contact strong {
  margin-bottom: 22px;
}

.contact a:last-child {
  margin-top: 12px;
}
.contact p:last-child {
  margin-top: 12px;
}

.contact form {
  display: flex;
}

.contact form input {
  height: 42px;
  max-width: 371px;
  min-width: 271px;
  padding: 14px;
  background: #ffffff;
  border: none;
}

.contact form input::placeholder {
  font-size: 15px;
  color: #333333;
}

.contact form button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  font-size: 15px;
  color: #ffffff;
  background: #000000;
  border: 1px solid #fff;
  max-width: 120px;
  min-width: 100px;
}

.info {
  margin: 25px;
  border-top: solid 1px #ffffff;
  font-size: 13px;
}

.info p a {
  text-decoration: underline;
}

.info > p {
  margin-top: 25px;

  margin-right: 15px;
}

.payment {
  margin-top: 25px;
  display: flex;
  margin-right: 15px;
  flex-wrap: wrap;
}

.payment p {
  margin-right: 10px;
}

.payment-methods img {
  margin-right: 25px;
}

.payment-methods img:last-child {
  margin-right: 0px;
}

.security {
  margin-top: 25px;
  margin-right: 15px;
  display: flex;
}

.security img {
  margin-right: 10px;
}

.bigbang {
  margin-top: 25px;
  text-decoration: none;
  font-weight: bold;
}

@media screen and (max-width: 1230px) {
  .site,
  .info {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 790px) {
  .footer-wrapper {
    margin-top: 60px;
  }
}

@media screen and (max-width: 540px) {
  .site,
  .info {
    border: none;
    margin: 0 15px;
    flex-direction: column;
  }

  .contacts {
    order: 4;
    border-top: 1px solid #ffffff;
    margin-top: 18px;
    width: 100%;
    justify-content: space-between;
  }

  .contact {
    margin: 18px 13px 0 13px;
  }

  .contact strong,
  .contact a,
  .contact p {
    font-size: 10px;
  }

  .footer-newsletter {
    order: 1;
    margin: 18px 0 0 0;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 18px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .footer-newsletter strong {
    font-size: 16px;
  }

  .footer-newsletter form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .footer-newsletter form input {
    height: 46px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-newsletter form input::placeholder {
    font-size: 12px;
    align-self: center;
  }

  .footer-newsletter form button {
    padding: 16px 32px;
    margin-top: 24px;
  }

  .logo-wrapper {
    order: 2;
  }

  .logo-wrapper img {
    height: 93px;
    margin-top: 18px;
  }

  .social {
    order: 3;
    margin-top: 24px;
  }

  .payment {
    order: 1;
    font-size: 10px;
    flex-wrap: nowrap;
    align-items: center;
    padding-bottom: 18px;
    border-bottom: 1px solid #ffffff;
    width: 100%;
    justify-content: center;
    margin: 36px 0 0 0;
  }

  .payment-methods img {
    margin-right: 15px;
  }

  .security {
    order: 2;
    font-size: 10px;
    align-items: center;
    width: 100%;
    margin: 18px 0 0 0;
    padding-left: 40px;
  }

  p.bigbang {
    order: 3;
    font-size: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin: -15px 0 0 0;
    padding-right: 40px;
  }

  p.bigbang a {
    margin: 0 0 0 5px;
  }

  p.questions {
    order: 4;
    font-size: 10px;
    margin: 18px 0;
  }

  p.rights {
    order: 5;
    font-size: 10px;
    text-align: center;
    border-top: 1px solid #ffffff;
    margin: 0 0 18px 0;
    padding-top: 18px;
    width: 100%;
  }

  p.rights br {
    display: inline;
  }
}
</style>