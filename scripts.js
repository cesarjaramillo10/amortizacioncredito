const tablita=document.querySelector(".tabla");
const button=document.querySelector(".boton");
const cantidad=document.querySelector(".canti");
const meses=document.querySelector(".meses");
const tasa=document.querySelector(".tasa");
const mainn=document.querySelector("main");
let x =0;


button.addEventListener("click",crearTabla);


function crearTabla(){
    
    var mon=parseInt(cantidad.value);
    var mes=parseInt(meses.value);
    var tasaa=parseInt(tasa.value);
    var num=((tasaa/100)*mon)/(1-(1+(tasaa/100))** -mes);
    let si=mon;
    let inte=0;
    let ac=0;
    let sf=mon;

    if(isNaN(tasaa)==true || isNaN(mes)==true || isNaN(mon)==true){
        alert("faltan datos por llenar");

    }
    else{

        pad2=document.createElement("tr");
        pad2.setAttribute('class','encabezado');
        enc1=document.createElement("td");
        enc1.textContent="Meses";
        enc2=document.createElement("td");
        enc2.textContent="Saldo";
        enc3=document.createElement("td");
        enc3.textContent="Cuota fija";
        enc4=document.createElement("td");
        enc4.textContent="Interes";
        enc5=document.createElement("td");
        enc5.textContent="Abono a Capital";
        enc6=document.createElement("td");
        enc6.textContent="Saldo final";
        pad2.appendChild(enc1);
        pad2.appendChild(enc2);
        pad2.appendChild(enc3);
        pad2.appendChild(enc4);
        pad2.appendChild(enc5);
        pad2.appendChild(enc6);
        tablita.appendChild(pad2);
   
        for(x==0;x<mes+1;x++){

            if(x==0){
                si=0;
                inte=0;
                ac=0;
                sf=mon;
            }
            else{
                si=sf;
                inte=si*(tasaa/100);
                ac=num-inte;
                sf=si-ac
            }

            pad=document.createElement("tr");
            uno=document.createElement("td");
            uno.textContent=x;
            
            dos=document.createElement("td");
            dos.textContent=new Intl.NumberFormat('es-ES').format(si);
            
            tres=document.createElement("td");
            tres.textContent=new Intl.NumberFormat('es-ES').format(num);

            cuatro=document.createElement("td");
            cuatro.textContent=new Intl.NumberFormat('es-ES').format(inte);

            cinco=document.createElement("td");
            cinco.textContent=new Intl.NumberFormat('es-ES').format(ac);

            seis=document.createElement("td");
            seis.textContent=new Intl.NumberFormat('es-ES').format(sf);

            pad.appendChild(uno);
            pad.appendChild(dos);
            pad.appendChild(tres);
            pad.appendChild(cuatro);
            pad.appendChild(cinco);
            pad.appendChild(seis);
            tablita.appendChild(pad);
        
        }
       
    }
    
     
}
