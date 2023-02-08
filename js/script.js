function horloge(){
    const auj = new Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let date = auj.toLocaleDateString('fr-FR',options);
    let heure = auj.toLocaleTimeString('fr-FR');
    document.getElementById("lheure").innerHTML= date + `<br /><br />` + heure;}
    setInterval(horloge,1000);