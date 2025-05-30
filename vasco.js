document.addEventListener('DOMContentLoaded', function() {
    // Menu ativo
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.botao').forEach(btn => {
        if (btn.getAttribute('href') === currentPage) {
            btn.classList.add('active');
        }
    });

    // Efeito hover nos botões
    const botoes = document.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '#fff';
                this.style.color = '#000';
            }
        });
        
        botao.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '#333';
                this.style.color = '#fff';
            }
        });
    });

    // Modal para imagens
    document.querySelectorAll('.img-destaque').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}" style="max-width: 100%;">
                    <p style="text-align: center; margin-top: 10px;">${this.alt}</p>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close').addEventListener('click', function() {
                modal.remove();
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === this) modal.remove();
            });
        });
    });
});

// Função de compartilhamento
function compartilharVasco() {
    if (navigator.share) {
        navigator.share({
            title: 'Vasco da Gama - O Gigante da Colina',
            text: 'Conheça a história do glorioso Vasco da Gama!',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores sem suporte
        alert('Compartilhe o Vasco! Link: ' + window.location.href);
    }
}