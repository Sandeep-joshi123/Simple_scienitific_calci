let result = document.getElementById('ip');
let btns = document.getElementById('btnchilds');

btns.addEventListener('click',(event)=>{
   
    let tar = event.target.innerText;
   
    switch(tar){
        case 'AC': emptyOP();
        break;

        case 'C': popOutput();
        break;
        
        case '=': resultOutput();
        break;
        
        case '^2': square();
        break;
        
        case '^3': cube();
        break;
        
        case "!": facto(result.value);
        break;
        
        case 'sin': sine();
        break;
        
        case 'cos': cosine();
        break;
        
        case 'tan': tangent();
        break;
        
        case 'tan^-1': tanInverse();
        break;

        case 'cos^-1': cosInverse();
        break;

        case 'sin^-1': sinInverse();
        break;

        case 'log(10)': logarithm();
        break;
        
        case 'e': e();
        break;
        
        case '√': root();
        break;
        case'3√': cuberoot();
        break;
        
        case 'deg>rad': degTorad();
        break;
        
        case 'rad>deg': radTodeg();
        break;
        
        case 'Alog(10)': antilog();
        break;
    
        case 'ln': loge();
        break;
        
        case 'Alog(e)': Antilog();
        break;
        
        case 'x^-1': inversepower();
        break;

        case 'π': PI();
        break;

        case 'know me': result.value='';
        break;

        case 'Thank you for visiting': result.value='Thank you for visiting';
        break;
        
        default: result.value+=tar;
        break;
    }
})

function PI(){
    let str= result.value;
    result.value = 3.142;
}

function emptyOP(){
    result.value='';
}

function popOutput(){
    let str = result.value.toString();
    console.log(str);
    result.value = str.slice(0,-1);
}

function resultOutput(){
    let str= result.value;
    let res= eval(str);
    result.value= res;
}

function square(){
    let str= result.value;
    result.value= str*str;
}

function cube(){
    let str= result.value;
    result.value=str*str*str;
}

function facto(num){
    let p=1;
    while(num>=1){
        p*=num; 
        num--;
    }
    result.value=p;
}


function  sine(){
    let str = result.value;
   let res = Math.sin(str);
   result.value=res;
}

function  cosine(){
    let str = result.value;
   let res = Math.cos(str);
   result.value=res;
}

function  tangent(){
    let str = result.value;
   let res = Math.tan(str);
   result.value=res;
}

function logarithm(){
    let str = result.value;
    result.value=Math.log10(str);
}

function e(){
    result.value=2.718281828459045;
}

function root(){
    let str=result.value;
    let res = str**0.5;
    result.value=res;
}

function cuberoot(){
    let str=result.value;
    let res = str**(1/3);
    result.value=res;
}

function degTorad(){
    let str= result.value;
    let rad=str*(3.142/180);
    result.value=rad;
}

function radTodeg(){
    let str= result.value;
    let deg=str*(180/3.142);
    result.value=deg;
}

function antilog(){
    let str= result.value;
    res=Math.pow(10,str);
    result.value=res;
}


function loge(){
    let str = result.value;
    let res= Math.log(str);
    result.value=res;
}

function Antilog(){
    let str = result.value;
    let res = Math.exp(str);
    result.value=res;
}

function inversepower(){
    let str= result.value;
    let res = str**(-1);
    result.value=res;
}

function tanInverse(){
    let str = result.value;
   let res = Math.atan(str);
   result.value=res;
}

function cosInverse(){
    let str = result.value;
   let res = Math.acos(str);
   result.value=res;
}

function sinInverse(){
    let str = result.value;
    let res = Math.asin(str);
    result.value=res;
}

function power() {
    let str = result.value;
    let parts = str.split('^');  // Split the input at '^'
    if (parts.length === 2) {  // Ensure there are two parts (base and exponent)
        let base = parseFloat(parts[0]);
        let exponent = parseFloat(parts[1]);
        if (!isNaN(base) && !isNaN(exponent)) {
            result.value = Math.pow(base, exponent);  // Calculate base^exponent
        } else {
            result.value = 'Error';  // Handle invalid input
        }
    } else {
        result.value = 'Error';  // Handle invalid input
    }
}
