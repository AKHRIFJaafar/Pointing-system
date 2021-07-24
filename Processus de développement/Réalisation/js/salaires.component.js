class Salaires extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
                <tr>

              <td>
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2 mr-3 " alt="User Image" width={35} height={35}/>
              {this.props.ouvrier.nomOuvrier}
              </td>
              <td className="text-center">{this.props.ouvrier.categorie}</td>
              <td className="text-center">{this.props.ouvrier.prixHeure}</td>
              <td className="text-center">{this.props.ouvrier.prixHeure}</td>
              <td className="text-center">{this.props.ouvrier.prixHeure}</td>
                </tr>

        )
    }
}