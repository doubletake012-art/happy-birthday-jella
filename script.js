function showMessage() {
    // Ipakita ang message
    document.getElementById("message").style.display = "block";
    
    // Itago ang button
    document.getElementById("surprise-btn").style.display = "none";

    // Itago ang subtitle
    document.getElementById("subtitle").style.display = "none";

    // Itago ang image
    document.getElementById("birthday-img").style.display = "none";
}
function goNextPage() {
    // Redirect sa bagong page (halimbawa: nextpage.html)
    window.location.href = "nextpage.html";
}

    });
}