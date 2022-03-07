const btnMobile = document.getElementById('btn-mobile');
      function abrirMenu(){
         let menu = document.getElementById('menu-mobile');
         menu.classList.toggle("active");
      }

      btnMobile.addEventListener('click',abrirMenu);