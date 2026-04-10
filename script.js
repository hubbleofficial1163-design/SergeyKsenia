// Скрипт для свадебного сайта
document.addEventListener('DOMContentLoaded', function() {
    console.log('Свадебный сайт загружен');
    
    // Таймер
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    
    // Инициализация формы RSVP
    initRSVPForm();
});

// Таймер отсчета до свадьбы
function updateCountdown() {
    // Фиксируем дату свадьбы: 4 августа 2026 года, 15:00 по МОСКВЕ (UTC+3)
    const weddingDate = new Date('2026-08-04T16:30:00+03:00');
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Остальной код без изменений...
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days.toString();
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
}

// Музыкальный плеер
// function initMusicPlayer() {
//     const playButton = document.getElementById('playButton');
//     const weddingMusic = document.getElementById('weddingMusic');
//     const circlePlayer = document.querySelector('.circle-player');
    
//     if (!playButton || !weddingMusic || !circlePlayer) return;
    
//     let isPlaying = false;
    
//     playButton.addEventListener('click', function() {
//         if (isPlaying) {
//             weddingMusic.pause();
//             weddingMusic.currentTime = 0;
//             playButton.classList.remove('playing');
//             circlePlayer.classList.remove('music-playing');
//             isPlaying = false;
//         } else {
//             weddingMusic.play()
//                 .then(() => {
//                     playButton.classList.add('playing');
//                     circlePlayer.classList.add('music-playing');
//                     isPlaying = true;
//                 })
//                 .catch(error => {
//                     console.log('Для воспроизведения нажмите еще раз');
//                     playButton.classList.add('playing');
//                     circlePlayer.classList.add('music-playing');
//                     isPlaying = true;
//                 });
//         }
//     });
    
//     document.addEventListener('visibilitychange', function() {
//         if (document.hidden && isPlaying) {
//             weddingMusic.pause();
//             weddingMusic.currentTime = 0;
//             isPlaying = false;
//             playButton.classList.remove('playing');
//             circlePlayer.classList.remove('music-playing');
//         }
//     });
// }

// ========== МОДАЛЬНОЕ ОКНО ==========
function showModal(title, message, isError = false) {
    const existingModal = document.getElementById('customModal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'customModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    const icon = isError ? '❌' : '✅';
    const titleColor = isError ? '#721c24' : '#155724';
    const btnColor = isError ? '#dc3545' : '#28a745';

    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 30px 40px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            animation: slideUp 0.3s ease;
            border-top: 4px solid ${btnColor};
        ">
            <div style="font-size: 4rem; margin-bottom: 15px;">${icon}</div>
            <h3 style="
                font-family: 'Dancing Script', cursive;
                font-size: 1.8rem;
                color: ${titleColor};
                margin-bottom: 15px;
            ">${title}</h3>
            <p style="
                font-family: 'Cormorant Garamond', serif;
                font-size: 1.2rem;
                color: #4a5345;
                margin-bottom: 25px;
                line-height: 1.5;
            ">${message}</p>
            <button onclick="this.closest('#customModal').remove()" style="
                background: ${btnColor};
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 50px;
                font-family: 'Cormorant Garamond', serif;
                font-size: 1.1rem;
                cursor: pointer;
                transition: all 0.3s;
            " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                Закрыть
            </button>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    if (!isError) {
        setTimeout(() => {
            if (modal.parentElement) modal.remove();
        }, 5000);
    }
}

const SCRIPT_URL = 'https://script.google.com/macros/s3-k_YOsmo-9Hee2Xqn-AdShmzfPv/exec';

function showModal(title, message, isError = false) {
    const existingModal = document.getElementById('customModal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'customModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    const icon = isError ? '❌' : '✅';
    const btnColor = isError ? '#dc3545' : '#28a745';

    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px 40px; max-width: 400px; width: 90%; text-align: center; border-top: 4px solid ${btnColor};">
            <div style="font-size: 4rem; margin-bottom: 15px;">${icon}</div>
            <h3 style="font-family: 'Dancing Script', cursive; font-size: 1.8rem; margin-bottom: 15px;">${title}</h3>
            <p style="font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; margin-bottom: 25px;">${message}</p>
            <button onclick="this.closest('#customModal').remove()" style="background: ${btnColor}; color: white; border: none; padding: 12px 30px; border-radius: 50px; cursor: pointer;">Закрыть</button>
        </div>
    `;
    document.body.appendChild(modal);
    if (!isError) setTimeout(() => modal.remove(), 5000);
}

document.querySelector('.rsvp-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-button');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Отправка...';

    try {
        const name = e.target.querySelector('input[type="text"]').value.trim();
        const phone = e.target.querySelector('input[type="tel"]').value.trim();
        const guests = e.target.querySelector('.form-select').value;
        const attendance = e.target.querySelector('input[name="attendance"]:checked')?.value;

        if (!name || !phone) throw new Error('Заполните имя и телефон');
        if (!attendance) throw new Error('Выберите вариант присутствия');

        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('guests', guests);
        formData.append('attendance', attendance);

        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString()
        });
        const result = await response.json();

        if (result.result === 'success') {
            showModal('Спасибо!', 'Ваш ответ успешно отправлен! Ждём вас! 🎉', false);
            e.target.reset();
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        showModal('Ошибка', error.message, true);
    } finally {
        btn.disabled = false;
        btn.textContent = originalText;
    }
});

// Исправление для мобильного viewport
function setMobileHeroHeight() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const vh = window.innerHeight;
    hero.style.height = vh + 'px';
    hero.style.minHeight = vh + 'px';
}

setMobileHeroHeight();
window.addEventListener('resize', setMobileHeroHeight);
window.addEventListener('orientationchange', () => setTimeout(setMobileHeroHeight, 100));
