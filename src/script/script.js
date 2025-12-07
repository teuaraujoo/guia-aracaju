// 2. Animação de entrada para a seção de pontos turísticos
const pontos = gsap.utils.toArray('#pontos > div');

    pontos.forEach(ponto => {
        gsap.from(ponto, {
            opacity: 0,
            y: 100, // Começa 100px abaixo da posição final
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ponto,
                start: 'top 85%', // A animação começa quando o topo do elemento está a 85% da altura da tela
                toggleActions: 'play none none none', // A animação executa uma vez e não reverte
            }
        });
    });

    const cards = gsap.utils.toArray('.preview');

    cards.forEach(ponto => {
        gsap.from(ponto, {
            opacity: 0,
            y: 100, 
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ponto,
                start: 'top 85%', 
                toggleActions: 'play reset play reset', 
            }
        });
    });