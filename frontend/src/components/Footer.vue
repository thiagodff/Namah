<template>
  <div class="footer-wrapper">
    <div class="wrapper">
      <div class="site">
        <img class="logo" src="../assets/logoFooter.svg" alt />

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

        <div class="contact">
          <strong>Assine nossa Newsletter</strong>
          <form>
            <input type="text" placeholder="Seu endereço de e-mail" />
            <button @click.prevent>ASSINAR</button>
          </form>
        </div>
      </div>

      <div class="info">
        <p>© 2020 Espaço Namah. Todos os direitos reservados. CNPJ: 19.035.854/0001-31.</p>

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

        <p>
          <a href="#">Dúvidas Frequentes</a>
          |
          <a href="#">Políticas da Loja</a>
        </p>

        <p>
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
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  width: 1720px;
  display: flex;
  flex-direction: column;
}

.logo {
  margin-right: 15px;
}

.site,
.info {
  max-width: 1720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site {
  margin: 40px;
}

.social {
  max-width: 160px;
  min-width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact {
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
  padding-top: 25px;
}

.info p a {
  text-decoration: underline;
}

.info > p {
  margin-right: 15px;
}

.payment {
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
  margin-right: 15px;
  display: flex;
}

.security img {
  margin-right: 10px;
}

.bigbang {
  text-decoration: none;
  font-weight: bold;
}
</style>