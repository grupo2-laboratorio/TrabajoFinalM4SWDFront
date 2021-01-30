
window.onload = function() {
    myFunction();
};

function myFunction() {

    const form = document.forms.dxc;
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        var sueldo = formData.get('sueldo');
        var saldo = formData.get('saldo');

        var div = document.getElementById('respuesta');
        var url = 'https://devops-lab4-microservicio.herokuapp.com/rest/msdxc/dxc?sueldo=' + sueldo + '&ahorro=' + saldo;
        console.log(url);
        axios.get(url)
        //axios.get('https://devops-lab4-microservicio.herokuapp.com/rest/msdxc/dxc?sueldo=6000000&ahorro=40000000')
            .then(response => {
                var dxc = response.data['dxc'];
                var saldo_dxc = response.data['saldo'];
                var impuesto_dxc = response.data['impuesto'];
                var sueldo_dxc = response.data['sueldo'];
                var ahorro_dxc = response.data['ahorro'];

                div.innerHTML = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Variable</th><th scope="col">Valor</th></tr></thead><tbody><tr><td>10%</td><td>' + dxc + '</td></tr><tr><td>Saldo</td><td>' + saldo_dxc + '</td></tr><tr><td>Impuesto</td><td>'+ impuesto_dxc + '</td></tr><tr><td>Sueldo</td><td>' + sueldo_dxc + '</td></tr><tr><td>Ahorro</td><td>' + ahorro_dxc + '</td></tr></tbody></table>';

                div.innerHTML += '<br><img src="https://64.media.tumblr.com/44b19750a163afaa3b624f96d6c26731/tumblr_mjzgl7nPLO1qzt9mco1_500.gifv" alt="description of gif" />';
            })
            .catch(e => {
                alert(e.message);
            });

    }
    form.addEventListener('submit', handleSubmit);

}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}