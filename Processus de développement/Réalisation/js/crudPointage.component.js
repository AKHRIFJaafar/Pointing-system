// Application
class CrudPointage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pointageArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var pointageArray = null;

        // affichage de données par Ajax

        $.getJSON("/apiPointage/getPointage.php",
            function (data) {
                this.setState({ pointageArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add Pointage
    addPointage(e) {
        $.ajax({
            url: "/apiPointage/addPointage.php",
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
    removePointage(i) {
        $.ajax({
            url: "/apiPointage/deleteOuvrier.php",
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
    updatePointage(i) {
        $.ajax({
            url: "apiPointage/updatePointage.php",
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
        let pointageArray = this.state.pointageArray.map((pointage) => {
            return (
                <Pointage
                    key={pointage.idPointage}
                    pointage={pointage}
                    onClickClose={this.removePointage.bind(this, pointage.idPointage)}
                    onClickUpdate= {this.updatePointage.bind(this,pointage.idPointage)}
                />
            )
        })

        return (
               <table className="table table-hover">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Nom Comlet</th>
                            <th scope="col">N° Téléphone</th>
                            <th scope="col">Nombre Heure</th>
                            <th scope="col">Heure Pointage</th>
                            <th scope="col"></th>
                            <th scope="col"></th>


                        </tr>
                    </thead>
                    <tbody>
                        {pointageArray}
                    </tbody>
                </table>
        )
    }
}