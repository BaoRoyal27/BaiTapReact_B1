import React from 'react'

const Header = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className=" container container-fluid">
                        <div >
                            <a className="navbar-brand text-light fw-bold" href="#">Start Bootstrap</a>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            <a className="nav-link active text-light fw-bold" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-light" href="#">About</a>
                            <a className="nav-link text-light" href="#">Service</a>
                            <a className="nav-link text-light" href="#">Contact</a>
                            </div>
                        </div>
                        <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                </div>
            </nav>
  )
}

export default Header