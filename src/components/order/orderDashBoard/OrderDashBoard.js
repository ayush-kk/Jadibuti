import AdminDashBoard from "../../admin/AdminDashBoard";

function OrderDashBoard() {
    return (
        <div className="container">
            <AdminDashBoard />
            <div>
                <div className="card-columns">



                    <div className="card" style={{ width: "350px" }}>
                        {/* <img class="mx-auto d-block" src="http://cdn.onlinewebfonts.com/svg/img_568656.png" alt="Card image" style={{ width: '50%' }} /> */}
                        <div class="card-body text-center">
                            <h4 class="card-title">{p.userName}</h4>
                            <p class="card-text">{p.userType}</p>
                            <Link to={`/users/viewUser/${p.userId}`} className="btn btn-primary stretched-link">See Profile</Link>
                        </div>
                    </div>


                </div>

            </div>
        </div>


    )
}