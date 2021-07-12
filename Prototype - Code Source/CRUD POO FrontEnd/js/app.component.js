class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>   
      {/* Site wrapper */}
      <div className="wrapper">
          <Menu />

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
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tous Ouvriers</h3>

              </div>
              <div className="card-body">
                <CrudProduct />
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Footer
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
            <b>Version</b> 3.1.0
          </div>
          <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
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