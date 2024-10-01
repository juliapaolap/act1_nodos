let indentificador, etiqueta, clase, nombre;
//getElementById
indentificador =document.getElementById("titulo");
console.log(indentificador.innerText);//console.log muestra los elementos en la consola de inspección de el DOM

//getElementByTagName
seccion = document.getElementsByTagName("section");//Traer seccion por su tag
console.log(seccion[0].innerText);//Llamar solo al texto de la primera sección

etiqueta = document.getElementsByTagName("p");//Traer parrafo por su tag
console.log(etiqueta[0].innerText);//Llamar solo al texto de el primer parrafo
//Cualquier cambio en el arreglo cambiara el numero de objeto segun la jerarquia de DOM

//getElementByClassName
clase = document.getElementsByClassName("parrafo");//Traer la clase parrafo por su nombre
console.log(clase[1].innerText);//Llamar solo al texto de el segundo elemento con esa clase

//gatElementByName
nombre = document.getElementsByName("subtitulo");
console.log(nombre[1].textContent);

//Crear Nodo en el DOM 
let elemento, contenido;
elemento= document.createElement("p");
contenido= document.createTextNode("Nuevo Parrafo");
elemento.appendChild(contenido);
etiqueta[2].appendChild(elemento);
seccion[1].insertBefore(elemento,etiqueta[2]);
//etiqueta[2].insertAdjacentElement("beforebegin",elemento);  //Antes de empezar
//etiqueta[2].insertAdjacentElement("afterbegin",elemento);  //Despues de empezar
//etiqueta[2].insertAdjacentElement("beforeend",elemento);   //Antes de terminar
etiqueta[2].insertAdjacentElement("afterend",elemento);  //Despues de terminar

//Reemplazar Nodo
elemento= document.createElement("p");
contenido= document.createTextNode("Remplazo de texto");
elemento.setAttribute("class","parrafo2");
elemento.appendChild(contenido);
seccion[1].replaceChild(elemento,clase[0]);

//Eliminar un Nodo
seccion[0].removeChild(nombre[0]);

//Crear Nodo dentro de otro nodo
elemento = document.createElement("article")
contenido= document.createTextNode("Articulo de sección")
elemento.appendChild(contenido);
document.getElementById("nodo").appendChild(elemento);
//seccion[2].appendChild("Elemento2");
//Insertar nodo
document.getElementById("contenido").innerHTML='Información <br/> <p class="nuevo"> otro parrafo en el nodo <p>';
document.getElementById("enlace").innerHTML="Google";
//Cambiar atributos de un nodo
etiqueta[0].setAttribute("class","parrafo nuevo");
seccion[2].setAttribute("class","contenido");
seccion[3].setAttribute("class","contenido");

//Estilos 
document.getElementById("titulo").style.background='#54984f';//Cambiar color de fondo de el elemento titulo
document.getElementById("contenido").style.borderBlockColor='#0012e5';
document.getElementById("contenido").style.background='#8d94e6';
document.getElementById("contenido").style.lineHeight='50px';


//   ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// CRECIÓN DE NODOS "mi foto"
let section, content_section, article, content_article, image;
section = document.createElement("section");
content_section = document.createElement("h1");
content_h1 = document.createTextNode("Conoceme");
content_section.appendChild(content_h1);
section.appendChild(content_section);
seccion[3].insertAdjacentElement("afterend",section);  //Despues de terminar
//Crear articles 
article= document.createElement("article");
content_article= document.createTextNode("Mi Foto");
article.appendChild(content_article);
section.appendChild(article);
article= document.createElement("article");
image= document.createElement("img");
image.setAttribute('src','./imagen/m.png');
article.appendChild(image);
section.appendChild(article);

section = document.createElement("section");
content_section = document.createElement("h1");
content_h1 = document.createTextNode("Conoceme");
content_section.appendChild(content_h1)
section.appendChild(content_section);
seccion[3].insertAdjacentElement("afterend",section);  //Despues de terminar
//Crear articles 
article= document.createElement("article");
content_article= document.createTextNode("Mi Foto");
article.appendChild(content_article);
section.appendChild(article);
article= document.createElement("article");
image= document.createElement("img");
image.setAttribute('src','./imagen/m.png');
article.appendChild(image);
section.appendChild(article);

//Cambiar estilo de nodos 
seccion[4].setAttribute("class","section_desing");
seccion[5].setAttribute("class","section_desing");
article1 = document.getElementsByTagName("article");
article1[0].setAttribute("class","article_desing");

