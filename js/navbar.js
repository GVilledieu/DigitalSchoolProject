const template = document.createElement('template');
function darkLightMode () {
   if (document.querySelector("html").getAttribute("data-bs-theme").toString()==="dark"){
       document.querySelector("html").setAttribute("data-bs-theme","light")
       console.log("ça passe ici")
   } else {
       document.querySelector("html").setAttribute("data-bs-theme","dark")
   }
}


template.innerHTML = `
<nav class="navbar navbar-expand-lg" style="max-height: 100px;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="pokebowls.html">Nos Poke bowls</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="a_propos.html">À propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
        <button onclick="darkLightMode()" class="btn" type="submit">
        <img alt="dark_light" src="/src/img/dark-mode.png" style="max-height:50px;max-width: 100px">
</button>
    </div>
  </div>
</nav>
`;

document.body.append(template.content);