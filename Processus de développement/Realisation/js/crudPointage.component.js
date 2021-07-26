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

    Pointer(i, status, idOuvrier) {
        if (status != 1) {
          $.ajax({
            url: "apiPointage/updatePointage.php",
            method: "POST",
            data: {
              idPointage: i,
              idOuvrier,
              presence: 1,
              nombreHeure:8,
            },
            success: function (data) {
              this.chargementDonnees()
            }.bind(this)
          })
        } else {
          $.ajax({
            url: "apiPointage/updatePointage.php",
            method: "POST",
            data: {
                idPointage: i,
                presence: 0
            },
            success: function (data) {
              this.chargementDonnees()
            }.bind(this)
          })
        }
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
                    onClickPointer={this.Pointer.bind(this, pointage.idPointage, pointage.presence, pointage.idOuvrier)}
                    />
            )
        })
console.log(pointageArray.length, this.state.pointageArray.length);
        return (
               <table className="table">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Nom et prénom</th>
                            <th scope="col">Nombre d'heure</th>
                            <th scope="col">Heure de pointage</th>
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