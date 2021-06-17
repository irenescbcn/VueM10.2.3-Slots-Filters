Vue.component ("modalBootstrap", {
    template:
        `
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Haz clic aquí
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <slot name="header"></slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                    </div>
                </div>
            </div> 
        </div>  `,
    })