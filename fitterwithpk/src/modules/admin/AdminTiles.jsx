const AdminTiles = () => {




    return (<div className="container d-flex flex-wrap">
        <div className="card ad_card col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div class="card-body">
                <h5 class="card-title">Client List</h5>
                <h6 class="card-subtitle mb-2 text-muted">Where client matters</h6>
                <p class="card-text text-center mt-3">
                    <span className="pi pi-user text-dark" style={{ fontSize: 'xx-large' }}></span>
                </p>
            </div>
        </div>
        <div className="card ad_card col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div class="card-body">
                <h5 class="card-title">Weekly Reports</h5>
                <h6 class="card-subtitle mb-2 text-muted">Where client matters</h6>
                <p class="card-text text-center mt-3">
                    <span className="pi pi-calendar text-dark" style={{ fontSize: 'xx-large' }}></span>
                </p>
            </div>
        </div>
        <div className="card ad_card col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div class="card-body">
                <h5 class="card-title">Daily Reports</h5>
                <h6 class="card-subtitle mb-2 text-muted">Where client matters</h6>
                <p class="card-text text-center mt-3">
                    <span className="pi pi-user text-dark" style={{ fontSize: 'xx-large' }}></span>
                </p>
            </div>
        </div>
        <div className="card ad_card col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div class="card-body">
                <h5 class="card-title">Settings</h5>
                <h6 class="card-subtitle mb-2 text-muted">Where client matters</h6>
                <p class="card-text text-center mt-3">
                    <span className="pi pi-cog text-dark" style={{ fontSize: 'xx-large' }}></span>
                </p>
            </div>
        </div>




    </div>)


}

export default AdminTiles;