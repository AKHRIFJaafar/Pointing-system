// Application
class CrudSalaires extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ouvriersArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var ouvriersArray = null;

        // affichage de données par Ajax

        $.getJSON("/api/getOuvriers.php",
            function (data) {
                this.setState({ ouvriersArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add ouvrier
    addOuvrier(e) {
        $.ajax({
            url: "/api/addOuvrier.php",
            method: "POST",
            data: {
                nomOuvrier: addNomOuvrier.value,
                numCIN: addNumCIN.value,
                prixHeure: addPrixHeure.value,
                categorie: addCategorie.value,
                telephone: addTelephone.value,
                nomChantier: addNomChantier.value,

            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove ouvrier
    removeOuvrier(i) {
        $.ajax({
            url: "/api/deleteOuvrier.php",
            method: "POST",
            data: {
                idOuvrier: i
            },
            success: function (data) {
                //   $(this).parent().remove();
                this.chargementDonnees()
            }.bind(this)
        })

    }
    //update ouvrier
    updateOuvrier(i) {
        $.ajax({
            url: "api/updateOuvrier.php",
            method: "POST",
            data: {
                idOuvrier : i,
                nomOuvrier : "bonjour",
                numCIN : updateNumCIN.value,
                prixHeure : updatePrixHeure.value,
                categorie : updateCategorie.value,
                telephone : updateTelephone.value,
                nomChantier : updateNomChantier.value,
            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter1").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }






    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }

    render() {
        let ouvriersArray = this.state.ouvriersArray.map((ouvrier) => {
            return (
                <Ouvrier
                    key={ouvrier.idOuvrier}
                    ouvrier={ouvrier}
                    onClickClose={this.removeOuvrier.bind(this, ouvrier.idOuvrier)}
                    onClickUpdate= {this.updateOuvrier.bind(this,ouvrier.idOuvrier)}
                />
            )
        })

        return (
            <div className="container">
                {/* ADD Model */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter Ouvrier</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-add"
                                    className="form-horizontal"
                                    onSubmit={this.addOuvrier.bind(this)}>


                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputName4">Nom Ouvrier</label>
                                            <input type="text" className="form-control nomOuvrier" id="addNomOuvrier" placeholder="Entrer le nom" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">N° CIN</label>
                                            <input type="text" className="form-control numCIN" id="addNumCIN" placeholder="Enter le CIN" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Prix Heure</label>
                                            <input type="number" className="form-control prixHeure" id="addPrixHeure" placeholder="Enter le prix" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Catégorie</label>
                                            <input type="type" className="form-control categorie" id="addCategorie" placeholder="Enter catégorie" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Téléphone</label>
                                            <input type="number" className="form-control telephone" id="addTelephone" placeholder="Enter téléphone" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Nom Chantier</label>
                                            <input type="type" className="form-control nomChantier" id="addNomChantier" placeholder="Choisir le chantier" />
                                        </div>
                                    </div>

                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                        <button type="submit" className="btn btn-primary submit ">AJOUTER OUVRIER</button>
 
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>





                {/* Edit Model */}
                <div className="modal fade" id="exampleModalCenter1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Editer Ouvrier</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-edit"
                                    className="form-horizontal"
                                    onSubmit={this.updateOuvrier.bind(this)}>


                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputName4">Nom Ouvrier</label>
                                            <input type="text" className="form-control nomOuvrier" id="updateNomOuvrier" placeholder="Entrer le nom" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">N° CIN</label>
                                            <input type="text" className="form-control numCIN" id="updateNumCIN" placeholder="Enter le CIN" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Prix Heure</label>
                                            <input type="number" className="form-control prixHeure" id="updatePrixHeure" placeholder="Enter le prix" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Catégorie</label>
                                            <input type="type" className="form-control categorie" id="updateCategorie" placeholder="Enter catégorie" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Téléphone</label>
                                            <input type="number" className="form-control telephone" id="updateTelephone" placeholder="Enter téléphone" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Nom Chantier</label>
                                            <input type="type" className="form-control nomChantier" id="updateNomChantier" placeholder="Choisir le chantier" />
                                        </div>
                                    </div>

                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                        <button type="submit" className="btn btn-success submit ">ENREGISTER EDIT</button>
 
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>



               <table className="table table-hover">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Nom Comlet</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">Prix Heure</th>
                            <th scope="col">Nombre Jour</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ouvriersArray}
                    </tbody>
                </table>
            </div>
        )
    }
}