class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const profile = this.props.profile.substring(0, 1);
        return (
            <div className="profile shadow-sm">{profile}</div>

        )
    }
}