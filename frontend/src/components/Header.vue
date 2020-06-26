<template>
  <div class="header-wrapper">
    <header>
      <ul>
        <a href="#">
          <li>INÍCIO</li>
        </a>
        <a href="#blog">
          <li>BLOG</li>
        </a>
        <a href="#shop">
          <li>LOJA</li>
        </a>
        <a href="#podcasts">
          <li>PODCASTS</li>
        </a>
        <a href="#courses">
          <li>CURSOS</li>
        </a>
        <a href="#contact">
          <li>CONTATO</li>
        </a>
      </ul>

      <a href="#" class="logo">
        <img src="../assets/logo.svg" alt="logo" />
      </a>

      <nav>
        <div class="death-space"></div>

        <a href="#">
          <img src="../assets/lupa.svg" alt="search" />
        </a>

        <a href="#">
          <img src="../assets/person.svg" alt="perfil" />
        </a>

        <a href="#">
          <img src="../assets/box.svg" alt="shop" />
        </a>

        <a href="#">
          <img src="../assets/like.svg" alt="like" />
        </a>

        <a href="#cart">
          <div class="cart">
            <span class="itens">99</span>
            <img src="../assets/cart.svg" alt="cart" />
          </div>
        </a>

        <a href="#">
          <img src="../assets/logout.svg" alt="logout" />
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.header-wrapper {
  width: 100%;
  padding: 0 30px;
  border-bottom: 1px solid #c4c4c4;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 10;
}

header {
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  max-width: 1820px;
  height: 100px;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  max-width: 615px;
  min-width: 500px;
  justify-content: space-between;
  flex: 1;
}

ul li {
  color: #666666;
}

a.logo img {
  padding: 0 60px;
  flex: 1;
}

nav {
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 615px;
  min-width: 500px;
  justify-content: space-between;
  align-items: center;
}

div.death-space {
  max-width: 115px;
}

div.cart {
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

div.cart span {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #74a8a0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
}
</style>