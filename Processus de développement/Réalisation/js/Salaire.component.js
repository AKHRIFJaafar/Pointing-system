class Salaire extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
                <tr>

              <td className="d-flex align-items-center">
              <Profile profile={this.props.salaire.nomOuvrier} />
              <span className="ml-3">       
                   {this.props.salaire.nomOuvrier}
              </span>
              </td>
              <td className="text-center">{this.props.salaire.categorie}</td>
              <td className="text-center">{this.props.salaire.prixHeure}</td>
              <td className="text-center">{this.props.salaire.nombreJour}</td>
              <td className="text-center">{this.props.salaire.totalHeure*this.props.salaire.prixHeure}DH</td>
                </tr>

        )
    }
}