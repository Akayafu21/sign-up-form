const Input = document.getElementById('input');
const Butt = document.getElementById('butt');

const PHstyle = document.createElement('style');
PHstyle.type = "text/css"
const {
    sheet 
} = document.head.appendChild(PHstyle);

const rule = sheet.insertRule('#email::placeholder {}')
const change = sheet.rules[rule].style;





Input.children[0].children[0].addEventListener('focusout',()=>{
    let check = Input.children[0].children[0].value;
    if(check === ''){
        Warning(0);
        Placeholder(0,'');
    }else {
        Clear(0);
    }
    
})

Input.children[1].children[0].addEventListener('focusout',()=>{
    let check = Input.children[1].children[0].value;
    if(check === ''){
        Warning(1);
        Placeholder(1,'');
    }else {
        Clear(1);
    }
    
})

Input.children[2].children[0].addEventListener('focusout',()=>{
    let check = Input.children[2].children[0].value;
    let mail = Match(check);
    if(check === '' || mail === null){
        
        Warning(2);
        Placeholder(2,'email@example/com');
        change.color = "var(--Red)"
    }else {
        Clear(2);
    }
    
})

Input.children[3].children[0].addEventListener('focusout',()=>{
    let check = Input.children[3].children[0].value;
    if(check === ''){
        Warning(3);
        Placeholder(3,'');
    }else {
        Clear(3);
    }
    
})

Butt.addEventListener('click',()=>{
    let check1 = Input.children[0].children[0].value;
    let check2 = Input.children[1].children[0].value;
    let check3 = Input.children[2].children[0].value;
    let check4 = Input.children[3].children[0].value;
    console.log(check1)
    if (check1 === ''){
        Warning(0);
    }
    if (check2 === ''){
        Warning(1);
    }
    if (check3 === ''){
        Warning(2);
    }
    if (check4 === ''){
        Warning(3);
    }

})




Warning =(child)=>{
    Input.children[child].children[0].style.outline = "3px solid var(--Red)"
    Input.children[child].children[1].style.display = "flex"
    Input.children[child].children[2].style.display = "inline"
}

Clear = (child) =>{
    Input.children[child].children[0].style.outline = "2px solid var(--Grayish-Blue)"
    Input.children[child].children[1].style.display = "none"
    Input.children[child].children[2].style.display = "none"
}

Placeholder = (child,text) =>{
    Input.children[child].children[0].placeholder = text
}

Match = (mail) => {
    var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mail.match(mailformat)
}