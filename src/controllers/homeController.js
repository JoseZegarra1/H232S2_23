
export const renderHome = (req, res) => {
    res.render("home", { title: "Home Page" }); 
  };

  export const renderAboutUs = (req, res) => {
    res.render("aboutUs", { title: "About Us Page" });
  };
  
  export const renderReservation = (req, res) => {
    res.render("reservation", { title: "Reservation Page" });
  };
