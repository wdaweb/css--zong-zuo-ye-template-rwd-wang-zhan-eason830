// 右側漢堡
const x = document.querySelector('#x')
const navbar_right = document.querySelector('#navbar_right')
const hamburger_right = document.querySelector('#hamburger_right')
const img_right1 = document.querySelector('#img_right1')
const img_right2 = document.querySelector('#img_right2')
const img_right3 = document.querySelector('#img_right3')
const navbar_right_img = document.querySelector('#navbar_right_img')
const navbar_right_img1 = document.querySelector('#navbar_right_img1')
const navbar_right_img2 = document.querySelector('#navbar_right_img2')
const navbar_right_img3 = document.querySelector('#navbar_right_img3')


// 左側漢堡
const navbar_left = document.querySelector('#navbar_left')
const hamburger_left = document.querySelector('#hamburger_left')
const community_ul = document.querySelector('#community_ul')
const pages_div = document.querySelector('#pages_div')
const blog_ul = document.querySelector('#blog_ul')
const navbar_left_li3 = document.querySelector('#navbar_left_li3')
const navbar_left_li5 = document.querySelector('#navbar_left_li5')
const navbar_left_li6 = document.querySelector('#navbar_left_li6')
let i = 1
let j = 1
let k = 1
let l = 1


// navbar
const navbar =document.querySelector('.navbar')


// ssc
const ssc1 =document.querySelector('#ssc1')
const ssc2 =document.querySelector('#ssc2')
const ssc3 =document.querySelector('#ssc3')
const box_ssc =document.querySelector('#box_ssc')

const icon_play_button =document.querySelector('#icon_play_button')
const modal_ssc=document.querySelector('.modal_ssc')
const modalclose_ssc=document.querySelector('.modalclose_ssc')


// 右邊漢堡開關按鈕-------------------------------------------------------------------------------------------
x.addEventListener('click', function () {
  navbar_right.style.display = 'none';
})
hamburger_right.addEventListener('click', function () {
  navbar_right.style.display = 'flex';
})
// 右邊漢堡開關按鈕------------------------------------------------------------------------------------------
// 左邊漢堡開關按鈕-------------------------------------------------------------------------------------

// 992px以上 hover效果-------------------------------------------------------------------------------
  function li3_over(){
    
    community_ul.style.visibility = "visible"
    community_ul.style.transition = "0.5s"
    navbar_left_li3.style.borderBottom = "5px solid white"
    navbar_left_li3.style.block = "block"
    navbar_left_li3.style.transition = "0s"
    community_ul.style.top="85px"

  }

  function li3_out(){
    community_ul.style.visibility = "hidden";
    community_ul.style.transition = "1s cubic-bezier(1,0,1,-0.12)"
    navbar_left_li3.style.borderBottom = "0px solid white"
    navbar_left_li3.style.transition = "1s cubic-bezier(1,0,1,-0.12)"
    community_ul.style.top="125px"
  }

  function li5_over(){

    pages_div.style.visibility = "visible"
    pages_div.style.transition = "0.5s"
    navbar_left_li5.style.borderBottom = "5px solid white"
    navbar_left_li5.style.block = "block"
    navbar_left_li5.style.transition = "0s"
    pages_div.style.top="80px"

  
  }

  function li5_out(){
    pages_div.style.visibility = "hidden";
    pages_div.style.transition = "1s cubic-bezier(1,0,1,-0.12)"
    navbar_left_li5.style.borderBottom = "0px solid white"
    navbar_left_li5.style.transition = "1s cubic-bezier(1,0,1,-0.12)"
    pages_div.style.top="120px"
  }

  function li6_over(){
  
    blog_ul.style.visibility = "visible"
    blog_ul.style.transition = "0.5s"
    navbar_left_li6.style.borderBottom = "5px solid white"
    navbar_left_li6.style.block = "block"
    navbar_left_li6.style.transition = "0s"
    blog_ul.style.top="80px"
  }
  function li6_out(){
    blog_ul.style.visibility = "hidden";
    blog_ul.style.transition = "1s cubic-bezier(1,0,1,-0.12)"
    navbar_left_li6.style.borderBottom = "0px solid white"
    navbar_left_li6.style.transition = "1s cubic-bezier(1,0,1,-0.12)"
    blog_ul.style.top="120px"
  }
  
// 992px以上 hover效果---------------------------------------------------------------------------

// 992px以下 click效果-----------------------------------------------------------------------------



  function hamburger_left_click(){
    if (i % 2 == 1) {
      navbar_left.style.display = 'block'
      
      i = 1
      i++
    } else if (i % 2 == 0) {
      navbar_left.style.display = 'none'
  
      i++
    }
  }
  
  
  function navbar_left_li3_click(){
    if (j % 2 == 1) {
      community_ul.style.display = "block"
      pages_div.style.display = "none"
      blog_ul.style.display = "none"
  
      j++
      
    }
    else if (j % 2 == 0) {
      community_ul.style.display = "none"
  
      j--
    }
  }
  
  function navbar_left_li5_click(){
    if (k % 2 == 1) {
      pages_div.style.display = "block"
      community_ul.style.display = "none"
      blog_ul.style.display = "none"
  
  
      k++
      
    }
    else if (k % 2 == 0) {
      pages_div.style.display = "none"
      k--
    }
  }
  
  function navbar_left_li6_click(){
    if (l % 2 == 1) {
      blog_ul.style.display = "block"
      community_ul.style.display = "none"
      pages_div.style.display = "none"
  
      l++
      
    }
    else if (l % 2 == 0) {
      blog_ul.style.display = "none"
  
      l--
    }
  }

// 992px以下 click效果-----------------------------------------------------------------------------

// 下拉navbar有background黑色------------------------------------------------------------------
  function navbar_scroll(){
    if(window.scrollY>navbar.clientHeight/2 ){
      navbar.classList.remove('transparent')
      navbar.classList.add('black')
      navbar.classList.add('height110')
    }else{
      navbar.classList.remove('height110')
      navbar.classList.remove('black')
      navbar.classList.add('transparent')
    }
  }







// 下拉navbar有background黑色------------------------------------------------------------------



// 列表hover,click 效果 配合 RWD----------------------------------------------------------------------

  if (window.innerWidth >= 992){

    navbar_left.style.display = 'block'

    
    navbar.classList.remove('black')
    window.addEventListener('scroll',navbar_scroll)


    community_ul.style.display = "block"
    community_ul.style.visibility = "hidden";      
    navbar_left_li3.addEventListener('mouseover', li3_over)
    navbar_left_li3.addEventListener('mouseout', li3_out)
    
    pages_div.style.display="flex"
    pages_div.style.visibility = "hidden";
    navbar_left_li5.addEventListener('mouseover',li5_over)
    navbar_left_li5.addEventListener('mouseout',li5_out)
    
    blog_ul.style.display = "block"
    blog_ul.style.visibility = "hidden";
    navbar_left_li6.addEventListener('mouseover', li6_over)
    navbar_left_li6.addEventListener('mouseout',li6_out)
    
    hamburger_left.removeEventListener('click', hamburger_left_click)
    navbar_left_li3.removeEventListener('click',navbar_left_li3_click)
    navbar_left_li5.removeEventListener('click', navbar_left_li5_click)
    navbar_left_li6.removeEventListener('click',navbar_left_li6_click)
    

  }
    
  if(window.innerWidth<992){

    navbar_left.style.display = 'none'

    window.removeEventListener('scroll',navbar_scroll)
    navbar.classList.add('black')
    navbar.classList.remove('transparent')
    navbar.classList.remove('height110')


    community_ul.style.visibility = "visible"
    community_ul.style.display = "none"
    navbar_left_li3.removeEventListener('mouseover', li3_over)
    navbar_left_li3.removeEventListener('mouseout', li3_out)

    pages_div.style.visibility = "visible"
    pages_div.style.display = "none"
    navbar_left_li5.removeEventListener('mouseover',li5_over)
    navbar_left_li5.removeEventListener('mouseout',li5_out)


    blog_ul.style.visibility = "visible";
    blog_ul.style.display = "none"
    navbar_left_li6.removeEventListener('mouseover', li6_over)
    navbar_left_li6.removeEventListener('mouseout',li6_out)


    hamburger_left.addEventListener('click', hamburger_left_click)
    navbar_left_li3.addEventListener('click',navbar_left_li3_click)
    navbar_left_li5.addEventListener('click', navbar_left_li5_click)
    navbar_left_li6.addEventListener('click',navbar_left_li6_click)
  }



  window.addEventListener('resize',function(){

    if (window.innerWidth >= 992){

      navbar_left.style.display = 'block'

      navbar.classList.remove('black')
      window.addEventListener('scroll',navbar_scroll)


      community_ul.style.display = "block"
      community_ul.style.visibility = "hidden";      
      navbar_left_li3.addEventListener('mouseover', li3_over)
      navbar_left_li3.addEventListener('mouseout', li3_out)
      
      pages_div.style.display="flex"
      pages_div.style.visibility = "hidden";
      navbar_left_li5.addEventListener('mouseover',li5_over)
      navbar_left_li5.addEventListener('mouseout',li5_out)
      
      blog_ul.style.display = "block"
      blog_ul.style.visibility = "hidden";
      navbar_left_li6.addEventListener('mouseover', li6_over)
      navbar_left_li6.addEventListener('mouseout',li6_out)
      
      hamburger_left.removeEventListener('click', hamburger_left_click)
      navbar_left_li3.removeEventListener('click',navbar_left_li3_click)
      navbar_left_li5.removeEventListener('click', navbar_left_li5_click)
      navbar_left_li6.removeEventListener('click',navbar_left_li6_click)
      
    


    }
      
    if(window.innerWidth<992){

      navbar_left.style.display = 'none'

      window.removeEventListener('scroll',navbar_scroll)
      navbar.classList.add('black')
      navbar.classList.remove('transparent')
      navbar.classList.remove('height110')
  


      community_ul.style.visibility = "visible"
      community_ul.style.display = "none"
      navbar_left_li3.removeEventListener('mouseover', li3_over)
      navbar_left_li3.removeEventListener('mouseout', li3_out)
  
      pages_div.style.visibility = "visible"
      pages_div.style.display = "none"
      navbar_left_li5.removeEventListener('mouseover',li5_over)
      navbar_left_li5.removeEventListener('mouseout',li5_out)
  
  
      blog_ul.style.visibility = "visible";
      blog_ul.style.display = "none"
      navbar_left_li6.removeEventListener('mouseover', li6_over)
      navbar_left_li6.removeEventListener('mouseout',li6_out)


      hamburger_left.addEventListener('click', hamburger_left_click)
      navbar_left_li3.addEventListener('click',navbar_left_li3_click)
      navbar_left_li5.addEventListener('click', navbar_left_li5_click)
      navbar_left_li6.addEventListener('click',navbar_left_li6_click)
    }
    
  })

// 左邊漢堡開關按鈕--------------------------------------------
// 列表hover,click 效果 配合 RWD----------------------------------------------------------------------





// 右側漢堡，圖片換下一張----------------------------------------------------------


  function img1(){
    if(img_right1.checked){
      navbar_right_img1.style.top="-31px"
      navbar_right_img1.style.left="0px"
      navbar_right_img1.style.zIndex="5"
      navbar_right_img1.style.opacity="1"
  
      navbar_right_img2.style.top="-31px"
      navbar_right_img2.style.left="0px"
      navbar_right_img2.style.zIndex="1"
      navbar_right_img2.style.opacity="0.5"
  
      navbar_right_img3.style.top="-31px"
      navbar_right_img3.style.left="0px"
      navbar_right_img3.style.zIndex="1"
      navbar_right_img3.style.opacity="0.5"
    }  
  }


  function img2(){ 
    if(img_right2.checked){
      navbar_right_img2.style.top="-31px"
      navbar_right_img2.style.left="0px"
      navbar_right_img2.style.zIndex="5"
      navbar_right_img2.style.opacity="1"
  
      navbar_right_img1.style.top="-31px"
      navbar_right_img1.style.left="0px"
      navbar_right_img1.style.zIndex="1"
      navbar_right_img1.style.opacity="0.5"
  
      navbar_right_img3.style.top="-31px"
      navbar_right_img3.style.left="0px"
      navbar_right_img3.style.zIndex="1"
      navbar_right_img3.style.opacity="0.5"
    }  
  }

  function img3(){ 
    if(img_right3.checked){
      navbar_right_img3.style.top="-31px"
      navbar_right_img3.style.left="0px"
      navbar_right_img3.style.zIndex="5"
      navbar_right_img3.style.opacity="1"
  
      navbar_right_img2.style.top="-31px"
      navbar_right_img2.style.left="0px"
      navbar_right_img2.style.zIndex="1"
      navbar_right_img2.style.opacity="0.5"
  
      navbar_right_img1.style.top="-31px"
      navbar_right_img1.style.left="0px"
      navbar_right_img1.style.zIndex="1"
      navbar_right_img1.style.opacity="0.5"
    }  
  }


  function img11(){ 
    if(img_right1.checked){
      navbar_right_img1.style.top="-31px"
      navbar_right_img1.style.left="35px"
      navbar_right_img1.style.zIndex="5"
      navbar_right_img1.style.opacity="1"
  
      navbar_right_img2.style.top="-31px"
      navbar_right_img2.style.left="75px"
      navbar_right_img2.style.zIndex="1"
      navbar_right_img2.style.opacity="0.5"
  
      navbar_right_img3.style.top="-31px"
      navbar_right_img3.style.left="-10px"
      navbar_right_img3.style.zIndex="1"
      navbar_right_img3.style.opacity="0.5"
    }  
  }

  function img22(){ 
    if(img_right2.checked){
      navbar_right_img2.style.top="-31px"
      navbar_right_img2.style.left="35px"
      navbar_right_img2.style.zIndex="5"
      navbar_right_img2.style.opacity="1"
  
      navbar_right_img1.style.top="-31px"
      navbar_right_img1.style.left="75px"
      navbar_right_img1.style.zIndex="1"
      navbar_right_img1.style.opacity="0.5"
  
      navbar_right_img3.style.top="-31px"
      navbar_right_img3.style.left="-10px"
      navbar_right_img3.style.zIndex="1"
      navbar_right_img3.style.opacity="0.5"
    }  
  }

  function img33(){ 
    if(img_right3.checked){
      navbar_right_img3.style.top="-31px"
      navbar_right_img3.style.left="35px"
      navbar_right_img3.style.zIndex="5"
      navbar_right_img3.style.opacity="1"
  
      navbar_right_img2.style.top="-31px"
      navbar_right_img2.style.left="75px"
      navbar_right_img2.style.zIndex="1"
      navbar_right_img2.style.opacity="0.5"
  
      navbar_right_img1.style.top="-31px"
      navbar_right_img1.style.left="-10px"
      navbar_right_img1.style.zIndex="1"
      navbar_right_img1.style.opacity="0.5"
    }  
  }





  window.addEventListener('resize',function(){

    

if(window.innerWidth<580){
  img1();
  img2();
  img3();

  img_right1.addEventListener('click',img1)
  img_right2.addEventListener('click',img2)
  img_right3.addEventListener('click',img3)
  
  
img_right1.removeEventListener('click',img11)
img_right2.removeEventListener('click',img22)
img_right3.removeEventListener('click',img33)
  }
  
  
  
  if(window.innerWidth>580){
    img11();
    img22();
    img33();




    img_right1.removeEventListener('click',img1)
img_right2.removeEventListener('click',img2)
img_right3.removeEventListener('click',img3)
  
    img_right1.addEventListener('click',img11)
    img_right2.addEventListener('click',img22)
    
    img_right3.addEventListener('click',img33)
    }

  
  })



if(window.innerWidth<580){

img_right1.addEventListener('click',img1)
img_right2.addEventListener('click',img2)
img_right3.addEventListener('click',img3)


img_right1.removeEventListener('click',img11)
img_right2.removeEventListener('click',img22)
img_right3.removeEventListener('click',img33)

}



if(window.innerWidth>580){

  img_right1.addEventListener('click',img11)
img_right2.addEventListener('click',img22)
img_right3.addEventListener('click',img33)

img_right1.removeEventListener('click',img1)
img_right2.removeEventListener('click',img2)
img_right3.removeEventListener('click',img3)
  
  }










// 右側漢堡，圖片換下一張----------------------------------------------------------

// SSC-----------------------------------------------
function ssc1_move(){
  if(ssc1.checked){
    box_ssc.style.transform="translate3d(0,0,0)"
  }  
}
function ssc2_move(){
  if(ssc2.checked){
    let pp =box_ssc.clientWidth;
  
    box_ssc.style.transform=`translate3d(-${pp}px,0,0)`
  }  
}
function ssc2_move2(){
  if(ssc2.checked){
    let pp =box_ssc.clientWidth;
  
    box_ssc.style.transform=`translate3d(-${pp/2}px,0,0)`
  }  
}
function ssc3_move(){
  if(ssc3.checked){
    let pp =box_ssc.clientWidth;
    console.log(pp)
    box_ssc.style.transform=`translate3d(-${2*pp}px,0,0)`
  }  
}
ssc1.addEventListener('click', ssc1_move)
ssc3.addEventListener('click', ssc3_move)
if(window.innerWidth<580){
  ssc2.removeEventListener('click',ssc2_move2)
ssc2.addEventListener('click',ssc2_move)
}
if(window.innerWidth>580){
  ssc2.removeEventListener('click',ssc2_move)
  ssc2.addEventListener('click',ssc2_move2)
}
window.addEventListener('resize',function(){
  if(window.innerWidth<580){
    ssc2.removeEventListener('click',ssc2_move2)
  ssc2.addEventListener('click',ssc2_move)
  }
  if(window.innerWidth>580){
    ssc1.checked=true
    box_ssc.style.transform="translate3d(0,0,0)"
    ssc2.removeEventListener('click',ssc2_move)
    ssc2.addEventListener('click',ssc2_move2)
  }
})


// 影片---------------------------------------
icon_play_button.addEventListener('click',function(){
  modal_ssc.classList.remove("hide_ssc")
})
modalclose_ssc.addEventListener('click',function(){
  modal_ssc.classList.add("hide_ssc")
})

modal_ssc.addEventListener('click',function(){
  modal_ssc.classList.add("hide_ssc")
})
// SSC-----------------------------------------------