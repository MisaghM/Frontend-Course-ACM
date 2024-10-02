import Logo from 'assets/images/logo.png'

function Hero() {
  return (
    <div id="main-search">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col col-xl-7 col-xxl-6 d-flex flex-column justify-content-center align-items-center">
            <img src={Logo} alt="Mizdooni" height="200" width="248" />
            <h1 className="text-white mt-1 display-2">Welcome!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
