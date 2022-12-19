function login(){
    p1name = document.getElementById("input1").value;
    p2name = document.getElementById("input2").value;

    localStorage.setItem("p1name", p1name);
    localStorage.setItem("p2name", p2name);

    window.location ="gamepage.html";

    
}


