import Logocareer from './images/Logocareer.png';
function DashNav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-lg-4 Sticky-top">
        <div class="container-fluid">
            <img  src={Logocareer} alt="Career Guru" width="70" height="50"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active px-lg-4" aria-current="page" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-lg-4" href="aboutdash.html"><i class="fa-solid fa-address-card"></i>{'\u00A0'}About Us</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link px-lg-4"><i class="fa-regular fa-user"></i>{'\u00A0'}Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
export default DashNav;