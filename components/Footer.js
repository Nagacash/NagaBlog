import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Footer = () => {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container text-leftt">
                <small className="text-white font-weight-light">Copyright &copy;
                    <button className="rounded btn btn-warning m-3">

                        <a href="https://naga-clothing.com" className="text-black text-decoration-none font-weight-light">Naga Apparel</a>

                        <small>
                            <div className="text-white text-right m-1">
                                Designed by: Maurice Holda
                            </div>
                        </small>
                    </button>
                </small>


            </div>



        </footer>
    )
}

export default Footer