import Button from "../Button"

const Signin = () => {
    return (
        <div>
            <form>
                <div class="form-col">
                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control" id="validationServer01" placeholder="seu e-mail" />
                    </div>

                    <div class="col-md-4 mb-3">
                        <input type="text" class="form-control" id="validationServer01" placeholder="sua senha" />
                    </div>

                    <div class='col-md-4 mb-3'>
                        <Button type="submit" class="btn btn-primary">Entrar</Button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Signin