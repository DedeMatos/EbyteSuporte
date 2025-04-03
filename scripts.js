document.getElementById("link-wpp").addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = "5575992733386";
    const message = encodeURIComponent("suporte");
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    const webFallbackURL = `https://wa.me/${phoneNumber}?text=${message}`;
    const fallbackURL = "qrcode.html";
    
    let opened = false;

    const newWindow = window.open(whatsappURL, "_self");
    if (newWindow) {
        opened = true;
    }
    
    setTimeout(() => {
        if (!opened) {
            window.location.href = fallbackURL;
        }
    }, 2000);
});