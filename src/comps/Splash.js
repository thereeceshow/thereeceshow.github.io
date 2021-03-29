import React, { Component } from 'react';



function Splash() {
    return (
        <div className="Splash bg-dark bg-gradient text-light">
            <div className="row"></div>
            <div className="row mt-5 d-flex justify-content-evenly d-flex">
                <h2 className="col-12 px-3">Reece Walter</h2>
                <div className="col-12 col-md-6 px-3">
                    Bacon ipsum dolor amet prosciutto chicken corned beef landjaeger tri-tip ribeye. Jerky shankle meatloaf capicola venison. Landjaeger swine spare ribs, pancetta andouille cupim sausage rump chislic ham leberkas meatball jerky shank. Meatball tri-tip chicken sirloin kevin. Drumstick pork loin burgdoggen, doner meatball pork chop landjaeger kielbasa shank.

                    Boudin jowl ham hock drumstick, picanha frankfurter flank tenderloin tail landjaeger rump bresaola venison. Shankle kevin fatback pork ribeye sausage kielbasa burgdoggen bresaola drumstick ball tip spare ribs. Hamburger pork strip steak filet mignon, brisket chicken prosciutto bacon. Salami tenderloin short loin flank frankfurter pork.

                    Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
                </div>
                <div className="col-12 col-md-6 px-5 justify-content-center"><img src="./img/coffee-code.jpg" className="img-fluid"></img></div>
            </div>
            <div className="row d-flex text-center"><button className="btn btn-lg btn-secondary mt-2">Click to Hire, or Live Forever in Regret</button></div>
        </div>
    );
}

export default Splash;