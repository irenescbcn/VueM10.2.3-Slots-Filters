Vue.component("padre", {
    template: `
    <div>

        <modalBootstrap>
            <template v-slot:header>
                <h5 class="modal-title" id="exampleModalLabel">Hola Mundo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </template>

            <template v-slot:body>
                <div class="form-group">
                    <label for="currencyExchange" class="h3 d-flex justify-content-center">Cambio de moneda</label>
                    <input type="number" class="form-control" id="currencyExchange" aria-describedby="emailHelp" placeholder="Introduzca un número" v-model="money">
                    <p class="form-text text-center mt-2">El cambio de {{money}}€ en dólares son {{money | exchange}}$</p>
                </div>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Enviar</button>
            </template>
        
        </modalBootstrap>

    </div>
    `, 

    data(){
        return{
            money: "", 
        }
    },

    filters:{
        exchange: function(number){
            return number * 1.23
        }
    }, 

})