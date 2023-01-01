let menu=document.querySelector('#side-bar');
let navbar=document.getElementsByClassName('navbar')[0];
let search_form=document.getElementsByClassName('search-from')[0];
let search_cancel=document.querySelector('#search-cancel');
let searchbtn = document.getElementById('search-btn');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');
menu.onclick = ()=>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('navbar-active');
}
searchbtn.addEventListener('click',()=>{

    search_form.classList.add('search-from-active');
});
search_cancel.addEventListener('click',()=>{
    search_form.classList.remove('search-from-active');
});
window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    section.forEach(sec =>{
  
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
  
    });
  
  }
