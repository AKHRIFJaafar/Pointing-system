class Pointage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      let class_name = 'ouvrier'
      class_name += this.props.pointage.presence == 1 ? ' ouvrier-success' : ' ouvrier-info';
        return (

                <tr className={class_name} >
              <td>
              <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2 mr-3 " alt="User Image" width={35} height={35}/>{this.props.pointage.nomOuvrier}
              </td>
              <td>{this.props.pointage.telephone}</td>
              <td>{this.props.pointage.nombreHeure}</td>
              <td>{new Date(this.props.pointage.heurePointage).getUTCHours()+1}:00</td>
              <td></td>
              <td onClick={this.props.onClickPointer}>
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
      </svg>
              </td>
                </tr>

        )
    }
}