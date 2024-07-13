<template>
  <header>
    <div class="header-inner">
      <div class="header-brand">
        <img src="../assets/headerlogo.png" alt="">
        <div>
          <div class="brandname">Universitas Terbuka</div>
          <div class="brandname-sub">Making Higher Education Open to All</div>
        </div>
      </div>
      <nav>
        <div class="menus">
          <router-link class="menu-item" to="/"><img src="../assets/petugas.svg" alt=""><span>PETUGAS</span></router-link>
          <router-link class="menu-item" to="/"><img src="../assets/PJLUO.svg" alt=""><span>PJLUO</span></router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<style>
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.header-brand {
  display: flex;
  gap: 30px;
}

.brandname {
  font-weight: 600;
  font-size: 19px;
}

.brandname-sub {
  color: #5F5B53;
  margin-top: -5px;
  margin-left: 1px;
}

.menus {
  display: flex;
  gap: 3rem;
}

.menu-item {
  display: inline-flex;
  font-weight: 600;
  gap: 10px;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
}

.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>