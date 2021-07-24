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

    Pointer(i, status) {
        if (status != 1) {
          $.ajax({
            url: "apiPointage/updatePointage.php",
            method: "POST",
            data: {
              idPointage: i,
              presence: 1
            },
            success: function (data) {
              this.chargementDonnees()
              console.log(data)
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
              console.log(data)
            }.bind(this)
          })
        }
      }



    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }
    render() {
        let pointageArray = this.state.pointageArray.map((pointage, idPointage) => {
            return (
                <Pointage
                    key={pointage.idPointage}
                    pointage={pointage}
                    done={pointage.presence}
                    onClickPointer={this.Pointer.bind(this, pointage.idPointage, pointage.presence)}
                    />
            )
        })

        return (
               <table className="table">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Nom Complet</th>
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