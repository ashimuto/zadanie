var nr=1;
function dodawanie(){
nr++;
 var nazwa = document.getElementById("nd");
 var ilosc = document.getElementById("id");
 var producent = document.getElementById("pd");
 var cena = document.getElementById("cd");
 newrow = document.createElement("tr");
 newrow.innerHTML = "<td>"+nr+"</td> <td class='nazwy'>"+nazwa.value+"</td> <td>"+ilosc.value+"</td> <td>"+producent.value+"</td> <td>"+cena.value+"</td> <td><input type='button' class='buttons' value='usuń' onclick='deleteRow(this)'></td>";
 var dodaj = document.getElementById('tabel');
 dodaj.appendChild(newrow);
 }
 function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabel").deleteRow(i);
  }

