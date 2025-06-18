
        // Crear globos
        function createBalloons() {
            const colors = ['#ff69b4', '#ff8c00', '#ffd700', '#9370db', '#00bfff', '#98fb98'];
            const container = document.getElementById('balloons-container');
            
            for (let i = 0; i < 15; i++) {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
                balloon.style.left = `${Math.random() * 100}%`;
                balloon.style.top = `${Math.random() * 100}%`;
                balloon.style.opacity = '0.7';
                balloon.style.animationDuration = `${6 + Math.random() * 6}s`;
                balloon.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(balloon);
            }
        }
        
        // Crear confeti
        function createConfetti() {
            const colors = ['#ff0000', '#ff69b4', '#ff8c00', '#ffd700', '#9370db', '#00bfff', '#98fb98'];
            const container = document.getElementById('confetti-container');
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.top = '-10px';
                confetti.style.animationDuration = `${3 + Math.random() * 4}s`;
                confetti.style.animationDelay = `${Math.random() * 5}s`;
                confetti.style.width = `${5 + Math.random() * 10}px`;
                confetti.style.height = `${5 + Math.random() * 10}px`;
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                container.appendChild(confetti);
            }
        }
        
        // Botón de sorpresa
        document.getElementById('surprise-btn').addEventListener('click', function() {
            const message = document.getElementById('surprise-message');
            message.classList.toggle('hidden');
            
            if (!message.classList.contains('hidden')) {
                createConfetti();
                this.textContent = '¡Más sorpresas!';
            }
        });
        
        // Inicializar
        window.addEventListener('load', function() {
            createBalloons();
            
            // Efecto de escritura
            const title = document.querySelector('.title');
            const originalText = title.textContent;
            title.textContent = '';
            
            let i = 0;
            const typingEffect = setInterval(() => {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 150);
        });