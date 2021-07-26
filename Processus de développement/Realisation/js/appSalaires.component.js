class AppSalaires extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        {/* Site wrapper */}
        <div className="wrapper">
          <MenuSalaires />

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
                  <div className="col-3">
                    <input type="date" className="form-control " placeholder="" />
                  </div>
                  <div className=" d-flex align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={16} fill="currentColor" className="bi bi-arrow-right " viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </div>
                  <div className="col-3">
                    <input type="date" className="form-control " placeholder="" />
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
                  <div className="col-6 text-right">
                    <button type="button" className="btn btn-primary" data-toggle="modal" id="imprimerbtn">IMPRIMER</button>
                  </div>
                </div>
                <div className="card-body">
                  <CrudSalaires />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </section>
            {/* /.content */}
            
          </div>
        </div>
      </div>

    )
  }
}