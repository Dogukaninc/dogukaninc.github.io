# 🎮 Game Developer Portfolyo Sitesi

Modern, responsive ve şık bir Game Developer portfolyo sitesi. Unity ve diğer oyun geliştirme teknolojileri için özel olarak tasarlanmıştır.

## ✨ Özellikler

- 🎨 Modern ve responsive tasarım
- 🎮 Oyun slider'ı (kaydırmalı galeri)
- 📱 Mobil uyumlu
- 🔍 Oyun detay modal'ları
- 📊 Deneyim timeline'ı
- 🎯 Smooth scrolling
- 🌟 Scroll animasyonları
- 📧 İletişim bölümü

## 🚀 Kurulum

1. Bu dosyaları GitHub Pages repository'nize yükleyin
2. `index.html` dosyasını ana sayfa olarak ayarlayın
3. Sitenizi özelleştirin (aşağıdaki talimatları takip edin)

## 🎨 Özelleştirme

### 1. Kişisel Bilgiler

`index.html` dosyasında şu bölümleri güncelleyin:

```html
<!-- Başlık -->
<title>Doğukan İncirbölen - Game Developer</title>

<!-- Hero Section -->
<h1 class="hero-title">Hoş Geldiniz!</h1>
<p class="hero-subtitle">Ben Doğukan İncirbölen, tutkulu bir Game Developer'ım.</p>
```

### 2. Oyunlarınızı Ekleyin

`script.js` dosyasındaki `gamesData` objesini güncelleyin:

```javascript
const gamesData = {
    1: {
        title: "Oyun Adınız",
        description: "Oyun açıklamanız",
        image: "oyun-gorseli.jpg", // Kendi görselinizi ekleyin
        technologies: ["Unity", "C#", "Diğer teknolojiler"],
        link: "https://oyun-linkiniz.com"
    },
    // Daha fazla oyun ekleyin...
};
```

### 3. Oyun Görselleri

Oyun kartlarındaki görselleri değiştirmek için:

1. Görsellerinizi `images/` klasörüne yükleyin
2. HTML'deki placeholder linklerini güncelleyin:

```html
<img src="images/oyun-gorseli.jpg" alt="Oyun Adı">
```

### 4. Deneyimlerinizi Güncelleyin

`index.html` dosyasındaki experience section'ını düzenleyin:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-date">2023 - Günümüz</div>
        <h3>Pozisyonunuz</h3>
        <p class="company">Şirket Adı</p>
        <p>Açıklama</p>
        <div class="skills">
            <span class="skill-tag">Unity</span>
            <span class="skill-tag">C#</span>
        </div>
    </div>
</div>
```

### 5. İletişim Bilgileri

Contact section'ındaki bilgileri güncelleyin:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>email@adresiniz.com</p>
    </div>
</div>
```

## 🎯 Özelleştirme Seçenekleri

### Renk Teması

`styles.css` dosyasında ana renkleri değiştirebilirsiniz:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
}
```

### Font Değiştirme

Google Fonts'tan yeni font seçebilirsiniz:

```html
<link href="https://fonts.googleapis.com/css2?family=YeniFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'YeniFont', sans-serif;
}
```

### Animasyon Hızı

Animasyon hızlarını `styles.css` dosyasında ayarlayabilirsiniz:

```css
.game-card {
    transition: all 0.3s ease; /* Hızı değiştirin */
}
```

## 📱 Mobil Optimizasyon

Site otomatik olarak mobil cihazlara uyumludur. Ek özelleştirmeler için:

```css
@media (max-width: 768px) {
    /* Mobil özel stiller */
}
```

## 🔧 Teknik Detaylar

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript**: ES6+, Intersection Observer API
- **Responsive**: Mobile-first approach
- **Performance**: Optimized images, lazy loading

## 📂 Dosya Yapısı

```
portfolio/
├── index.html          # Ana sayfa
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── README.md           # Bu dosya
└── images/             # Görseller (oluşturun)
    ├── game1.jpg
    ├── game2.jpg
    └── ...
```

## 🚀 GitHub Pages'e Yükleme

1. GitHub'da yeni bir repository oluşturun
2. Repository adını `kullaniciadi.github.io` olarak ayarlayın
3. Dosyaları yükleyin
4. Settings > Pages > Source: Deploy from a branch
5. Branch: main, folder: / (root)
6. Save'e tıklayın

## 🎨 Ek Özellikler

### Typing Efekti

Hero section'da typing efekti eklemek için `script.js` dosyasının sonundaki yorumu kaldırın:

```javascript
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    typeWriter(heroTitle, 'Hoş Geldiniz!', 150);
}
```

### Parallax Efekti

Parallax efektini kapatmak için `script.js` dosyasındaki ilgili bölümü yorum satırı yapın.

## 📞 Destek

Herhangi bir sorunuz varsa veya özelleştirme konusunda yardıma ihtiyacınız olursa:

- GitHub Issues kullanın
- Email: dogukan.incirbolen@example.com

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not**: Bu site Game Developer'lar için özel olarak tasarlanmıştır. Unity, Unreal Engine ve diğer oyun geliştirme teknolojileri için optimize edilmiştir. 