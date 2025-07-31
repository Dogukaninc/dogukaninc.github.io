// Oyun verileri
const gamesData = {
    1: {
        title: "Space Shooter",
        description: "Uzayda geçen aksiyon dolu bir shooter oyunu. Düşman uzay gemilerini yok ederek puan kazanın ve hayatta kalmaya çalışın.",
        image: "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Space+Shooter",
        technologies: ["Unity", "C#", "2D Graphics", "Audio System"],
        link: "https://example.com/space-shooter"
    },
    2: {
        title: "Platform Runner",
        description: "Platform üzerinde koşma ve zıplama oyunu. Engelleri aşarak mümkün olduğunca uzağa gitmeye çalışın.",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Platform+Runner",
        technologies: ["Unity", "C#", "Physics System", "Animation"],
        link: "https://example.com/platform-runner"
    },
    3: {
        title: "Puzzle Adventure",
        description: "Beyin jimnastiği gerektiren puzzle oyunu. Mantık ve strateji kullanarak bulmacaları çözün.",
        image: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=Puzzle+Adventure",
        technologies: ["Unity", "C#", "UI System", "Save System"],
        link: "https://example.com/puzzle-adventure"
    },
    4: {
        title: "Racing Game",
        description: "Hızlı ve heyecanlı yarış oyunu. Diğer yarışçıları geçerek birinci olmaya çalışın.",
        image: "https://via.placeholder.com/300x200/27ae60/ffffff?text=Racing+Game",
        technologies: ["Unity", "C#", "3D Graphics", "Multiplayer"],
        link: "https://example.com/racing-game"
    }
};

// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSlider();
    initializeGameCards();
    initializeSmoothScrolling();
    initializeScrollEffects();
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
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
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

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.getAttribute('data-game');
            openGameModal(gameId);
        });
    });

    // Modal kapatma
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Modal dışına tıklayarak kapatma
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Modal açma fonksiyonu
function openGameModal(gameId) {
    const gameData = gamesData[gameId];
    if (!gameData) return;

    const modal = document.getElementById('gameModal');
    const modalImage = document.getElementById('modalGameImage');
    const modalTitle = document.getElementById('modalGameTitle');
    const modalDescription = document.getElementById('modalGameDescription');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalLink = document.getElementById('modalGameLink');

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
    modal.style.display = 'block';
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

// Loading animasyonu
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax efekti için
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Typing efekti için (isteğe bağlı)
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