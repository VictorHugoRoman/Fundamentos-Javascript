var target = null;

    //MutationObserver crea una instancia con la que podemos disponer para ver que nodos son las añadidos dinamicamente
     //configuracion para el observador
    var config = { attributes: true, childList: true, characterData: true };
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            let clase = mutation.target.lastChild.className;
            if (clase == "k-animation-container") {
                console.log(mutation.target.lastChild);
                if (mutation.target.lastChild.children[0].children.length >= 1) {
                    if (mutation.target.lastChild.children[0].childElementCount > 0) {//chcar si aqui los cuentea
                        console.log(mutation.target.lastChild.children[0].children[0]);//elementos dentro del ul
                    } 
                   
                }
                //if (mutation.target.lastChild.children[0].children[2].getAttribute("data-command-parameter") == "XLS") {
                //    console.log(mutation.type);
                //}
                
                //console.log();// $($(target.firstElementChild.nextElementSibling)[0]).children()[2]
            }
        });
    });
   

//una manera mas sencilla de ver cada nodo que c va insertando
//eta funcion detecta los nodos LI q se van insertando en un Menu
$(document).on('DOMNodeInserted', function (e) {
  if (e.target.nodeName == "LI" && e.target.childElementCount > 0) {
    let nodo = e.target.children[0];//guardamos los nodos hijos de LI
  if (nodo.nodeName == "A") {//si es <a/>                           
    let fileType = nodo.getAttribute("data-command-parameter"); 
  if (fileType == "XLS")
    $(e.target).hide();                            
  }
}                  
});
