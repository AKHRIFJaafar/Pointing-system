class CrudProduct extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productsArray: []
    };
  }
  componentDidMount() {
    this.chargementDonnees();
  }
  chargementDonnees() {

    var productsArray = null;

    // affichage de données par Ajax

    $.getJSON("api/getProduct.php",
      function (data) {
        this.setState({ productsArray: data });
      }.bind(this))
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      });
  }
  //add product
  add(e) {
    $.ajax({
      url: "../api/addProduct.php",
      method: "POST",
      data: {
        productname : InputName.value,
        productcolor : InputColor.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModalCenter").modal('hide');
      }.bind(this)
    })
    e.preventDefault();
  }
  // delete product
  delete(i) {
    $.ajax({
      url: "/api/deleteProduct.php",
      method: "POST",
      data: {
        id: i
      },
      success: function (data) {
        $(this).parent().remove();
        this.chargementDonnees()
      }.bind(this)
    })

  }

  update(i) {
    $.ajax({
      url: "api/updateProduct.php",
      method: "POST",
      data: {
        id: i,
        productname: InputName.value,
        productcolor: InputColor.value,
      },
      success: function (data) {
        this.chargementDonnees()
        $("#exampleModalCenter1").modal('hide');
      }.bind(this)
    })
  }

  onChangeInput(e) {
    // this.setState({value: e.target.value})
  }

  render() {
    let productsArray = this.state.productsArray.map((product) => {
      return (
        <ProductLine
          key = {product.id}
          product = {product}
          onClickClose={this.delete.bind(this, product.id)}
          onClickproduct={this.update.bind(this, product.id)}
        />
      )
    })

    return (
      <div className="container">
        <div className="alert alert alert-primary" role="alert">
          <h4 className="text-primary text-center">PRODUCTS MANAGER</h4>
        </div>
        <div className="col-3 mb-3 mt-3">
          <button type="button" className="btn btn-primary add-btn" data-toggle="modal" data-target="#exampleModalCenter" id="addnewbtn">ADD PRODUCT</button>
        </div>
        {/* ADD Model */}
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">ADD PRODUCT</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="add-form" onSubmit={this.add.bind(this)}>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="inputName4">Product Name</label>
                      <input type="text" className="form-control productname" id="InputName" placeholder="Product name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="inputLast4">Product Color</label>
                      <input type="text" className="form-control productcolor" id="InputColor" placeholder="Product color" />
                    </div>
                    <button type="submit" className="btn btn-primary submit">ADD PRODUCT</button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        {/* Edit a Former */}
        <div className="modal fade " id="exampleModalCenter1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered show-edit" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">EDIT PRODUCT</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="edit-form">
                  <input type="hidden" name="id" defaultValue className="id" />
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="inputName4">Product Name</label>
                      <input type="text" className="form-control productname" id="InputName" placeholder="Product name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12">
                      <label htmlFor="inputLast4">Product Color</label>
                      <input type="text" className="form-control productcolor" id="InputColor" placeholder="Product color" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">SAVE EDIT</button>
                </form>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
        {/* table */}
        <table className="table" id="userstable">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Color</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody >
            {productsArray}
          </tbody>
        </table>
      </div>
    )
  }
}