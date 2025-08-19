// Oyun verileri
const gamesData = {
    1: {
        title: "Wheel Of Fortune Mini Game",
        description: "Unity ile geliştirilmiş çarkıfelek mini oyunu. Oyuncular çarkı çevirerek çeşitli ödüller kazanabilir. Modern UI tasarımı ve akıcı animasyonlar ile eğlenceli bir deneyim sunar.",
        image: "https://via.placeholder.com/400x300/4a90e2/ffffff?text=Wheel+Of+Fortune",
        technologies: ["Unity", "C#", "2D Graphics", "UI System", "Animation", "Game Logic"],
        link: "https://github.com/Dogukaninc/WheelOfFortune"
    },
    2: {
        title: "Hyper Casual Runner",
        description: "Hyper casual tarzında koşma oyunu. Engelleri aşarak mümkün olduğunca uzağa gitmeye çalışın. Basit ama bağımlılık yapıcı oynanış ile mobil oyuncular için ideal.",
        image: "https://via.placeholder.com/400x300/9b59b6/ffffff?text=Hyper+Casual+Runner",
        technologies: ["Unity", "C#", "Mobile Development", "Physics", "Simple Controls"],
        link: "https://github.com/Dogukaninc/HyperCasualRunner"
    },
    3: {
        title: "Match And Squash",
        description: "3D eşleştirme ve ezme oyunu. Renkli küpleri eşleştirerek puan kazanın ve stratejik düşünme becerilerinizi geliştirin. 3D grafikler ve çok seviyeli oynanış.",
        image: "https://via.placeholder.com/400x300/3498db/ffffff?text=Match+And+Squash",
        technologies: ["Unity", "C#", "3D Graphics", "Match-3 Logic", "Level Design"],
        link: "https://github.com/Dogukaninc/MatchAndSquash"
    },
    4: {
        title: "2D Platformer Sample",
        description: "2D platformer oyunu için hızlı prototipleme ve öğrenme şablonu. Temel platformer mekanikleri, karakter kontrolü ve seviye tasarımı ile oyun geliştirmeye başlamak için mükemmel.",
        image: "https://via.placeholder.com/400x300/8e44ad/ffffff?text=2D+Platformer",
        technologies: ["Unity", "C#", "2D Platformer", "Character Controller", "Level Design"],
        link: "https://github.com/Dogukaninc/2D-PlatformerSample"
    }
};

// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSlider();
    initializeGameCards();
    initializeSmoothScrolling();
    initializeScrollEffects();
    initializeParallaxEffects();
});

// Navigation menüsü için hamburger menü
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Menü linklerine tıklandığında menüyü kapat
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll olduğunda navbar'ı güncelle
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(74, 144, 226, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Oyun slider'ı için fonksiyonlar
function initializeSlider() {
    const container = document.querySelector('.games-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.game-card');
    
    let currentIndex = 0;
    const cardWidth = 320; // card width + gap
    const maxIndex = cards.length - Math.floor(container.offsetWidth / cardWidth);

    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        container.style.transform = `translateX(${translateX}px)`;
        
        // Butonları güncelle
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    // Touch/swipe desteği
    let startX = 0;
    let endX = 0;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < maxIndex) {
                // Sola swipe - sonraki
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                // Sağa swipe - önceki
                currentIndex--;
            }
            updateSlider();
        }
    }

    // İlk yükleme
    updateSlider();

    // Pencere boyutu değiştiğinde slider'ı güncelle
    window.addEventListener('resize', () => {
        const newMaxIndex = cards.length - Math.floor(container.offsetWidth / cardWidth);
        if (currentIndex > newMaxIndex) {
            currentIndex = newMaxIndex;
        }
        updateSlider();
    });
}

// Oyun kartları için modal açma
function initializeGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    const modal = document.getElementById('gameModal');
    const closeModal = document.querySelector('.close-modal');

    console.log('Game cards found:', gameCards.length);
    console.log('Modal found:', modal);
    console.log('Close button found:', closeModal);

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Game card clicked!');
            const gameId = card.getAttribute('data-game');
            console.log('Game ID:', gameId);
            openGameModal(gameId);
        });
    });

    // Modal kapatma
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            console.log('Close button clicked');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Modal dışına tıklayarak kapatma
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                console.log('Modal background clicked');
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            console.log('ESC key pressed');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

// Modal açma fonksiyonu
function openGameModal(gameId) {
    console.log('Opening modal for game:', gameId);
    const gameData = gamesData[gameId];
    if (!gameData) {
        console.error('Game data not found for ID:', gameId);
        return;
    }

    const modal = document.getElementById('gameModal');
    const modalImage = document.getElementById('modalGameImage');
    const modalTitle = document.getElementById('modalGameTitle');
    const modalDescription = document.getElementById('modalGameDescription');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalLink = document.getElementById('modalGameLink');

    console.log('Modal elements found:', {
        modal: modal,
        image: modalImage,
        title: modalTitle,
        description: modalDescription,
        technologies: modalTechnologies,
        link: modalLink
    });

    // Modal içeriğini doldur
    modalImage.src = gameData.image;
    modalImage.alt = gameData.title;
    modalTitle.textContent = gameData.title;
    modalDescription.textContent = gameData.description;
    modalLink.href = gameData.link;

    // Teknolojileri ekle
    modalTechnologies.innerHTML = '';
    gameData.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        modalTechnologies.appendChild(techTag);
    });

    // Modal'ı göster
    console.log('Showing modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Smooth scrolling için
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Navbar yüksekliği
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll efektleri
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animasyon için elementleri gözlemle
    const animatedElements = document.querySelectorAll('.timeline-item, .contact-item, .game-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Parallax efektleri
function initializeParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-card');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
        });
    });
}

// Loading animasyonu
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Typing efekti için
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Hero section için typing efekti (isteğe bağlı olarak aktif edilebilir)
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     typeWriter(heroTitle, 'Hoş Geldiniz!', 150);
// }

// Hover efektleri için ek animasyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Game card hover efektleri
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button hover efektleri
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});