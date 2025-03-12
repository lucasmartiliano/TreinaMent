openMenu.addEventListener('click', () => {
    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    openMenu.style.display = 'none'

    setTimeout (() => {
    menu.style.opacity = '1'

    menu.style.right = '0'
    }, 10)
})

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout (() => {
        menu.removeAttribute('style')
        openMenu.removeAttribute('style')
    }, 200)
})

function enviarParaWhatsapp(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let cnpj_pf = document.getElementById("cnpj_pf").value;
    let info = document.getElementById("info").value;
    
    let mensagem = `Olá, meu nome é ${nome}.\nEmail: ${email}\nWhatsApp: ${whatsapp}\nCNPJ/CPF: ${cnpj_pf}\nInformações adicionais: ${info}`;
    
    let numeroWhatsapp = "8293408102";
    let url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
}
