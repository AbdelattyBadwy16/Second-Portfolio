let home=document.getElementById('home');
let about=document.getElementById('about');
let services=document.getElementById('services');
let port=document.getElementById('port');
let contact=document.getElementById('contact');
let homesec=document.getElementById('homesec');
let aboutsec=document.getElementById('aboutsec');
let servicessec=document.getElementById('servicesec');
let portsec=document.getElementById('portsec');
let contactsec=document.getElementById('contactsec');
let menu=document.getElementById('menu');
let slidebar=document.getElementById('slide-bar');
let dark_a=document.querySelector('.darkmood-a');
let dark_b=document.querySelector('.darkmood-b')
let dark_c=document.querySelector('.darkmood-c')
let dark_d=document.querySelector('.darkmood-d')
let dark_e=document.querySelector('.darkmood-e')
let list=document.getElementById('list');
let logo=document.getElementById('logo');
let type=document.getElementById('typing');
let color_list=document.getElementById('color-list');
let item1=document.getElementsByClassName("item");
let logg=document.getElementsByClassName('log');
let test=document.getElementById('test1');
console.log(test)
home.onclick=function(){
   
    homesec.style="display:flex";
    aboutsec.style="display:none";
    servicesec.style="display:none";
    contactsec.style="display:none";
    portsec.style="display:none";
    
}

about.onclick=function(){
   
    homesec.style="display:none";
    aboutsec.style="display:block";
    servicesec.style="display:none";
    contactsec.style="display:none";
    portsec.style="display:none";
    
}

services.onclick=function(){
   
    homesec.style="display:none";
    aboutsec.style="display:none";
    servicesec.style="display:block";
    contactsec.style="display:none";
    portsec.style="display:none";
    
}

port.onclick=function(){
   
    homesec.style="display:none";
    aboutsec.style="display:none";
    servicesec.style="display:none";
    contactsec.style="display:none";
    portsec.style="display:block";
    
}

contact.onclick=function(){
   
    homesec.style="display:none";
    aboutsec.style="display:none";
    servicesec.style="display:none";
    contactsec.style="display:block";
    portsec.style="display:none";
    
}
let x=1;

dark_a.onclick=function(){
    if(x==1){
        document.body.classList.add('dark');
        logo.style=' color:white'
        slidebar.style="background-color:#222222;";
        home.style="color:white"
        about.style="color:white"
        port.style="color:white"
        services.style="color:white"
        contact.style="color:white"
        dark_a.style="background-color:white";
        dark_b.style="background-color:white";
        dark_c.style="background-color:white";
        dark_d.style="background-color:white";
        dark_e.style="background-color:white";
   
        for(let i=0 ;i<5 ; i++){
        item1[i].style="border-bottom: 1px solid #EC1839";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color: #EC1839; border-radius: 20px;";
        }
        x=0;
    }else{
        document.body.classList.remove('dark');
        logo.style=' color:black'
        slidebar.style="background-color:white;";
        home.style="color:black"
        about.style="color:black"
        port.style="color:black"
        services.style="color:black"
        contact.style="color:black"
        dark_a.style="background-color:none";
        dark_b.style="background-color:none";
        dark_c.style="background-color:none";
        dark_d.style="background-color:none";
        dark_e.style="background-color:none";
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #e8dfec";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color:white; border-radius: 20px;";
        }
        x=1;
    }
}

dark_b.onclick=function(){
    if(x==1){
        document.body.classList.add('dark');
        logo.style=' color:white'
        slidebar.style="background-color:#222222;";
        home.style="color:white"
        about.style="color:white"
        port.style="color:white"
        services.style="color:white"
        contact.style="color:white"
        dark_a.style="background-color:white";
        dark_b.style="background-color:white";
        dark_c.style="background-color:white";
        dark_d.style="background-color:white";
        dark_e.style="background-color:white";
      
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #EC1839";
        }
        for(let i=0 ;i<5 ; i++){
                logg[i].style="background-color: #EC1839; border-radius: 20px;";
        }
        x=0;
    }else{
        document.body.classList.remove('dark');
        logo.style=' color:black'
        slidebar.style="background-color:white;";
        home.style="color:black"
        about.style="color:black"
        port.style="color:black"
        services.style="color:black"
        contact.style="color:black"
        dark_a.style="background-color:none";
        dark_b.style="background-color:none";
        dark_c.style="background-color:none";
        dark_d.style="background-color:none";
        dark_e.style="background-color:none";
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #e8dfec";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color:white; border-radius: 20px;";
        }
        x=1;
    }
}

dark_c.onclick=function(){
    if(x==1){
        document.body.classList.add('dark');
        logo.style=' color:white'
        slidebar.style="background-color:#222222;";
        home.style="color:white"
        about.style="color:white"
        port.style="color:white"
        services.style="color:white"
        contact.style="color:white"
        dark_a.style="background-color:white";
        dark_b.style="background-color:white";
        dark_c.style="background-color:white";
        dark_d.style="background-color:white";
        dark_e.style="background-color:white";
   
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #EC1839";
        }
        for(let i=0 ;i<5 ; i++){
                logg[i].style="background-color: #EC1839; border-radius: 20px;";
        }
        x=0;
    }else{
        document.body.classList.remove('dark');
        logo.style=' color:black'
        slidebar.style="background-color:white;";
        home.style="color:black"
        about.style="color:black"
        port.style="color:black"
        services.style="color:black"
        contact.style="color:black"
        dark_a.style="background-color:none";
        dark_b.style="background-color:none";
        dark_c.style="background-color:none";
        dark_d.style="background-color:none";
        dark_e.style="background-color:none";
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #e8dfec";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color:white; border-radius: 20px;";
        }
        x=1;
    }
}


dark_d.onclick=function(){
    if(x==1){
        document.body.classList.add('dark');
        logo.style=' color:white'
        slidebar.style="background-color:#222222;";
        home.style="color:white"
        about.style="color:white"
        port.style="color:white"
        services.style="color:white"
        contact.style="color:white"
        dark_a.style="background-color:white";
        dark_b.style="background-color:white";
        dark_c.style="background-color:white";
        dark_d.style="background-color:white";
        dark_e.style="background-color:white";
   
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #EC1839";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color: #EC1839; border-radius: 20px;";
        }
        x=0;
    }else{
        document.body.classList.remove('dark');
        logo.style=' color:black'
        slidebar.style="background-color:white;";
        home.style="color:black"
        about.style="color:black"
        port.style="color:black"
        services.style="color:black"
        contact.style="color:black"
        dark_a.style="background-color:none";
        dark_b.style="background-color:none";
        dark_c.style="background-color:none";
        dark_d.style="background-color:none";
        dark_e.style="background-color:none";
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #e8dfec";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color:white; border-radius: 20px;";
        }
        x=1;
    }
}


dark_e.onclick=function(){
    if(x==1){
        document.body.classList.add('dark');
        logo.style=' color:white'
        slidebar.style="background-color:#222222;";
        home.style="color:white"
        about.style="color:white"
        port.style="color:white"
        services.style="color:white"
        contact.style="color:white"
        dark_a.style="background-color:white";
        dark_b.style="background-color:white";
        dark_c.style="background-color:white";
        dark_d.style="background-color:white";
        dark_e.style="background-color:white";
      ;
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #EC1839";
        }
        for(let i=0 ;i<5 ; i++){
                logg[i].style="background-color: #EC1839; border-radius: 20px;";
        }
        x=0;
    }else{
        document.body.classList.remove('dark');
        logo.style=' color:black'
        slidebar.style="background-color:white;";
        home.style="color:black"
        about.style="color:black"
        port.style="color:black"
        services.style="color:black"
        contact.style="color:black"
        dark_a.style="background-color:none";
        dark_b.style="background-color:none";
        dark_c.style="background-color:none";
        dark_d.style="background-color:none";
        dark_e.style="background-color:none";
        for(let i=0 ;i<5 ; i++){
            item1[i].style="border-bottom: 1px solid #e8dfec";
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color:white; border-radius: 20px;";
        }
        x=1;
    }
}





let b='Web Developer' , a='Web Desinger', c='SoftWare Enginner';

let index=1;
let temp=0;
function typing(){
    if(temp==0){
    document.getElementById('typing').textContent = a.slice(0,index++);
    if(index>a.length){
        index=0;
        temp=1;
    }
    }else if(temp==1){
        document.getElementById('typing').textContent = b.slice(0,index++);
        if(index>b.length){
            index=0;
            temp=2;
        }
    }else if(temp==2){
        document.getElementById('typing').textContent = c.slice(0,index++);
        if(index>c.length){
            index=0;
            temp=0;
        }
    }
}

setInterval(function(){
    typing();
},200);

