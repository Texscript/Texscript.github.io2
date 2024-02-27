

bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");

function mostrar_buscador(){
    bars_search.style.top = "160px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}

document.getElementById("icon-search").addEventListener("click" , mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click" , ocultar_buscador);


  function ocultar_buscador(){
    bars_search.style.top = "-80px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none"
  }
  
             document.getElementById("inputSearch").addEventListener("keyup" , buscador_interno);

            function buscador_interno(){
              filter = inputSearch.value.toUpperCase();
              li = box_search.getElementsByTagName("li");

              for (i = 0; i <li.length; i++){

                 a = li[i].getElementsByTagName("a")[0];
                 textValue = a.textContent || a.innerText;

                 if(textValue.toUpperCase().indexOf(filter) > -1){

                   li[i].style.display = "";
                   box_search.style.display = "block";

                   if (inputSearch.value === "" ){
                       box_search.style.display = "none";
                   }

                 }else{
                    li[i].style.display = "none";
                 }
                  
              }
            }
