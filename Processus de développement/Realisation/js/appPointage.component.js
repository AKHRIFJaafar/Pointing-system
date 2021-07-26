class AppPointage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>   
      {/* Site wrapper */}
      <div className="wrapper">
          <MenuPointage />

          <SideBar />

          

{/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
              </div>
            </div>{/* /.container-fluid */}
          </section>
          <section className="content">
              {/* Default box */}
              <div className="card ">
                <div className="card-header row justify-content-end align-items-center">
                  <div className="input-group col-3 mr-3 ">
                    <select className="custom-select" id="inputGroupSelect04" aria-label="">
                      <option selected>Aujourd'hui</option>
                      <option value={1}>Hier</option>
                      <option value={2}>Avant hier</option>
                    </select>
                  </div>

                </div>
              </div>
              {/* /.card */}
            </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-header row align-items-center">
                <h3 className="card-title col-6">Tous Ouvriers</h3>
              </div>
              <div className="card-body">
                <CrudPointage />
              </div>
              {/* /.card-footer*/}
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 1.1.0
          </div>
          <strong>Copyright © 2020-2021 <a href="https://solicode.co">Solicode</a>.</strong> All rights reserved.
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
                
                

                


            </div>

        )
    }
}