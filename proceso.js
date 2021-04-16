function cargarDatos() {
    var respuestaa;
    var url = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
    var api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            respuestaa = JSON.parse(this.responseText);
            console.log(respuestaa);
            let resultado = document.querySelector('#respuesta1');
            resultado.innerHTML = '';
            console.log(respuestaa)
            for (let item of Object.values(respuestaa)) {
                console.log(Object.values(item));

                for (var i = 0; i < item.length; i++) {
                    console.log(item[0].strAlternate);

                    resultado.innerHTML += ` 
                    <br><br>    <br><br>     
                    <div class="col card  texto"  style="width:450px heigth:900px background-color: black">
                        
                    <br><img src="${item[i].strSportThumb}" class="card-img-top imagen" >
                            <div class="card-body">
                                <h5 class="card-title">${item[i].strFormat}</h5>
                                <p class="card-text">${item[i].strSportDescription}</p>
                            </div>
                      
                    </div>   
                   
                    `;
                }

            }
        }

    }
}


function filtrar(event) {
    var respuestaa;

    if (event.key === 'Enter') {
        let resultado = document.querySelector('#filtro');
        var respuestaa;
        var url = 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php';
        var api = new XMLHttpRequest();
        api.open('GET', url, true);
        api.send();
        api.onreadystatechange = function() {
            if (this.status == 200 && this.readyState == 4) {
                respuestaa = JSON.parse(this.responseText);
                let nombre = "";
                let html = document.querySelector('#respuesta1');
                let resultado = document.querySelector('#filtro');
                html.innerHTML = '';
                for (let item of Object.values(respuestaa)) {
                    console.log(Object.values(item));

                    for (var i = 0; i < item.length; i++) {
                        nombre = item[i].strFormat;

                        if (nombre.toLowerCase().includes(resultado.value.toLowerCase())) {

                            html.innerHTML += `        
                            <div class="col card  bg-secondary mb-3 texto" background-color: black" style="width:450px heigth:900px ">
                                
                                   <br> <img src="${item[i].strSportThumb}" class="card-img-top imagen" >
                                    <div class="card-body">
                                        <h5 class="card-title">${item[i].strFormat}</h5>
                                        <p class="card-text">${item[i].strSportDescription}</p>
                                    </div>
                              
                            </div>   
                           
                            `;
                        }

                    }
                }

            }
        }
    }
}