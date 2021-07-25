// Application
class CrudSalaires extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            salairesArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var salairesArray = null;

        // affichage de données par Ajax

        $.getJSON("/apiSalaires/getSalaires.php",
            function (data) {
                this.setState({ salairesArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }

    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }
    render() {
        let salairesArray = this.state.salairesArray.map((salaire) => {
            return (
                <Salaire
                    key={salaire.idPointage}
                    salaire={salaire}
                />
            )
        })
        return (
            <div className="container">

               <table className="table table-striped">
                    <thead className="thead text-center">
                        <tr>
                            <th scope="col">Nom d'ouvrier</th>
                            <th scope="col">Métier</th>
                            <th scope="col">Prix d'heure</th>
                            <th scope="col">Nombre de jour</th>
                            <th scope="col">Salaire Net</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salairesArray}
                    </tbody>
                </table>
            </div>
        )
    }
}