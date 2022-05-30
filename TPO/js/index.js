var header=  document.getElementById("idheader")

var cad = `
<div class="header-container">

<img class="logo" src="./img/Cake-Chocolate-icon.png" sizes="5x5">
<h1 class="marca"><b>NoheliasGourmet</b></h1>

<nav class="nav-conteiner">
 <ul  class="nav-items">
    <li><a class="nav" href="index.html">Home</a></li>
    <li><a class="nav"  href="registro.html">Registro</a></li>
    <li><a class="nav"  href="contacto.html">Contacto</a></li>
    <li><a class="nav"  href="location.html">Location</a></li>
</ul>
</nav>
<span class="btn-menu">
<i class="fa-solid fa-ellipsis-vertical"></i>
</div> `

header.innerHTML=cad;

cad =` 
<div class="redes-container">
<ul>
<li><a href="https://www.facebook.com" class="facebook"><i class="fa fa-facebook"></i></a></li>
<li><a href="https://www.instagram.com" class="instagram"><i class="fa fa-instagram"></i></a></li>
<li><a href="https://www.twitter.com" class="twitter"><i class="fa fa-twitter"></i></a></li>
<li><a href="https://www.pinterest.com" class="pinterest"><i class="fa fa-pinterest-p"></i></a></li>
<li><a href="https://www.whatsapp.com" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>
</ul>
</div>

<a class= "derecho">Copyright ©2022 NoheliasGourmet. Derechos Reservados</a>


`

document.getElementById("idfooter").innerHTML=cad;
