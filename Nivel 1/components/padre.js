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
                <p>Contenido para el Modal</p>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Enviar</button>
            </template>
        
        </modalBootstrap>

    </div>
    `
})