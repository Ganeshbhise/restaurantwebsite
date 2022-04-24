let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
jQuery("#form-in").on('submit', function(e){
  jQuery.ajax({
    url:'order.html',
    type:'get',
    data: jQuery('#form-in').serialize(),
    success: function(result){
      alert("Order Placed");
      jQuery('#form-in')[0].reset();
    },
  
  })
  e.preventDefault();
})

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();