// Application
class CrudOuvrier extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ouvriersArray: [],
            ouvrier:{},
        };
        this.showUpdateModel = this.showUpdateModel.bind(this);
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
    showUpdateModel(ouvrier) {
        this.setState({ouvrier: ouvrier})


    }

        //update ouvrier
        updateOuvrier () {
            console.log(this.state.ouvrier)
            $.ajax({
                url: "api/updateOuvrier.php",
                method: "POST",
                data: {
                    idOuvrier : this.state.ouvrier.idOuvrier,
                    nomOuvrier :  updateNomOuvrier.value,
                    numCIN :  updateNumCIN.value,
                    prixHeure :  updatePrixHeure.value,
                    categorie :  updateCategorie.value,
                    telephone : updateTelephone.value,
                    nomChantier :  updateNomChantier.value
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
                    onClickUpdate= {this.showUpdateModel.bind(this,ouvrier)}
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
                                            <input type="text" value={this.state.ouvrier.nomOuvrier} onChange={(e) => this.setState({ ouvrier: { ...this.state.ouvrier, nomOuvrier: e.target.value } })} className="form-control nomOuvrier" id="updateNomOuvrier" placeholder="Entrer le nom" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">N° CIN</label>
                                            <input type="text" value={this.state.ouvrier.numCIN} onChange={(e) => this.setState({ ouvrier: { ...this.state.ouvrier, numCIN: e.target.value } })} className="form-control numCIN" id="updateNumCIN" placeholder="Enter le CIN" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Prix Heure</label>
                                            <input type="number" value={this.state.ouvrier.prixHeure} onChange={(e) => this.setState({ ouvrier: { ...this.state.ouvrier, prixHeure: e.target.value } })} className="form-control prixHeure" id="updatePrixHeure" placeholder="Enter le prix" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Catégorie</label>
                                            <input type="type" value={this.state.ouvrier.categorie} onChange={(e) => this.setState({ ouvrier: { ...this.state.ouvrier, categorie: e.target.value } })} className="form-control categorie" id="updateCategorie" placeholder="Enter catégorie" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Téléphone</label>
                                            <input type="number" value={this.state.ouvrier.telephone} onChange={(e) => this.setState({ ouvrier: { ...this.state.ouvrier, telephone: e.target.value } })} className="form-control telephone" id="updateTelephone" placeholder="Enter téléphone" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Nom Chantier</label>
                                            <input type="type" value={this.state.ouvrier.nomChantier} onChange={(e) => this.setState({ ouvrier: { ...this.state.ouvrier, nomChantier: e.target.value } })} className="form-control nomChantier" id="updateNomChantier" placeholder="Choisir le chantier" />
                                        </div>
                                    </div>

                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                        <button type="submit" className="btn btn-success submit">ENREGISTER EDIT</button>
 
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>

<div className="table-responsive">
               <table className="table table-striped ">
                    <thead className="thead text-center">
                        <tr>
                            <th scope="col">Nom d'ouvrier</th>
                            <th scope="col">N° Téléphone</th>
                            <th scope="col">Prix d'heure</th>
                            <th scope="col">Métier</th>
                            <th scope="col"></th>
                            <th scope="col"></th>


                        </tr>
                    </thead>
                    <tbody>
                        {ouvriersArray}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}