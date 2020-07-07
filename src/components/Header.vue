<template>
  <div class="header-wrapper">
    <header>
      <ul class="navigation">
        <li>
          <a href="#">INÍCIO</a>
        </li>
        <a href="#blog">
          <li>BLOG</li>
        </a>
        <li>
          <a href="#shop">LOJA</a>
        </li>
        <li>
          <a href="#podcasts">PODCASTS</a>
        </li>
        <li>
          <a href="#courses">CURSOS</a>
        </li>
        <li>
          <a href="#contact">CONTATO</a>
        </li>
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

      <div class="mobile">
        <a href="#">
          <img src="../assets/person.svg" alt="perfil" />
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

        <input id="menu-hamburguer" type="checkbox" />

        <label for="menu-hamburguer">
          <div class="menu">
            <span class="hamburguer"></span>
          </div>
        </label>

        <div class="dropdown">
          <div class="dropdown-wrapper">
            <div class="navigation-dropdown">
              <a href="#">INÍCIO</a>

              <a href="#blog">BLOG</a>

              <a href="#shop">LOJA</a>

              <a href="#podcasts">PODCASTS</a>

              <a href="#courses">CURSOS</a>

              <a href="#contact">CONTATO</a>
            </div>

            <div class="navigation-dropdown-menu">
              <a href="#">
                <img src="../assets/lupa.svg" alt="search" />
              </a>

              <a href="#">
                <img src="../assets/box.svg" alt="shop" />
              </a>

              <a href="#">
                <img src="../assets/logout.svg" alt="logout" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mobile {
  display: none;
}

div.header-wrapper {
  width: 100%;
  padding: 0 30px;
  border-bottom: 1px solid #c4c4c4;
  position: fixed;
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

a {
  color: #666666;
}

a:visited {
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

@media screen and (max-width: 1330px) {
  .navigation,
  .header-wrapper nav {
    display: none;
  }

  a.logo img {
    padding-left: 0;
  }

  .mobile {
    display: flex;
  }

  .mobile a {
    margin-right: 30px;
  }

  .menu {
    cursor: pointer;
    height: 30px;
    width: 30px;
  }

  .menu .hamburguer {
    display: block;
    position: relative;
    width: 30px;
    height: 2px;
    background: #666666;
    top: 10px;
    transition: 0.3s ease-in-out;
  }

  .menu .hamburguer:after,
  .menu .hamburguer:before {
    background: #666666;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
  }

  .menu .hamburguer:after {
    bottom: -10px;
  }

  .menu .hamburguer:before {
    top: -10px;
  }

  input#menu-hamburguer {
    display: none;
  }

  .dropdown {
    position: absolute;
    width: 0;
    height: 0;
    top: 70px;
    right: 30px;
    transition: all 0.3s;
  }

  .dropdown-wrapper {
    display: none;
    position: relative;
    padding: 30px;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  input#menu-hamburguer:checked ~ .dropdown {
    display: flex;
    width: 300px;
    height: 100vh;
    top: 70px;
    right: 30px;
    background: #fff;
  }

  input#menu-hamburguer:checked ~ .dropdown .dropdown-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .dropdown-wrapper a {
    margin-bottom: 15px;
    margin-left: 30px;
  }

  .navigation-dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navigation-dropdown-menu {
    position: relative;
    border-top: 1px solid #666666;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    margin-bottom: -20px;
  }

  input#menu-hamburguer:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input#menu-hamburguer:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }

  input#menu-hamburguer:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }
}

@media screen and (max-width: 600px) {
  .header-wrapper {
    height: 70px;
  }

  .header-wrapper header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile > a > img,
  .mobile > a > div > img {
    height: 18px;
  }

  a.logo img {
    height: 40px;
    padding-right: 60px;
  }

  .menu .hamburguer {
    width: 18px;
    height: 1px;
    margin-top: 5px;
  }

  .menu .hamburguer:after {
    bottom: -5px;
  }

  .menu .hamburguer:before {
    top: -5px;
  }
}
</style>