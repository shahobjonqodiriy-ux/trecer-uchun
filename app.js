// ===== GLOBAL VARIABLES =====
const TOTAL_TASKS = 18;
const START_DATE = new Date('2026-06-01');
const NOTIFICATION_TIMES = [
    { hour: 4, minute: 30, message: "Yaxshi tong! Bugun yangi imkoniyatlar kuni 🌅" },
    { hour: 12, minute: 0, message: "Ertalabki blok tugadi. Natijalarni belgilang ✅" },
    { hour: 18, minute: 0, message: "Kechki sayr vaqti. Havo oling! 🌆" },
    { hour: 21, minute: 15, message: "15 daqiqadan keyin uxlash vaqti. Bugungi natijani belgilang 🌙" }
];

let deferredPrompt;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    registerServiceWorker();
    setupPWAInstall();
    requestNotificationPermission();
    scheduleNotifications();
});

// ===== APP INITIALIZATION =====
function initializeApp() {
    updateCurrentDate();
    loadTodayTasks();
    renderCalendar();
    updateStatistics();
    updateMonthlyStats();
    showMotivationMessage();
}

// ===== DATE UTILITIES =====
function updateCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateStr = new Date().toLocaleDateString('uz-UZ', options);
    document.getElementById('currentDate').textContent = dateStr;
}

function getTodayKey() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

function isSunday(date) {
    return date.getDay() === 0;
}

// ===== TASK MANAGEMENT =====
function setupEventListeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleTaskChange);
    });
}

function handleTaskChange(event) {
    const checkbox = event.target;
    const taskItem = checkbox.closest('.task-item');
    
    if (checkbox.checked) {
        taskItem.classList.add('completed');
        playSuccessAnimation(taskItem);
    } else {
        taskItem.classList.remove('completed');
    }
    
    saveTodayTasks();
    updateStatistics();
    updateCalendar();
    updateMonthlyStats();
    showMotivationMessage();
}

function playSuccessAnimation(element) {
    element.style.transform = 'scale(1.02)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

function saveTodayTasks() {
    const today = getTodayKey();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const tasks = {};
    
    checkboxes.forEach(checkbox => {
        const taskId = checkbox.getAttribute('data-task');
        tasks[taskId] = checkbox.checked;
    });
    
    const completedCount = Object.values(tasks).filter(v => v).length;
    const percentage = Math.round((completedCount / TOTAL_TASKS) * 100);
    
    const dayData = {
        tasks: tasks,
        completed: completedCount,
        total: TOTAL_TASKS,
        percentage: percentage,
        date: today
    };
    
    localStorage.setItem(`day_${today}`, JSON.stringify(dayData));
}

function loadTodayTasks() {
    const today = getTodayKey();
    const saved = localStorage.getItem(`day_${today}`);
    
    if (saved) {
        const dayData = JSON.parse(saved);
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            const taskId = checkbox.getAttribute('data-task');
            if (dayData.tasks[taskId]) {
                checkbox.checked = true;
                checkbox.closest('.task-item').classList.add('completed');
            }
        });
    }
}

// ===== STATISTICS =====
function updateStatistics() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = Math.round((completed / TOTAL_TASKS) * 100);
    
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('totalCount').textContent = TOTAL_TASKS;
    document.getElementById('percentComplete').textContent = `${percentage}%`;
    
    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${percentage}%`;
    
    // Update streak
    updateStreak();
}

function updateStreak() {
    const today = new Date();
    let streak = 0;
    let currentDate = new Date(today);
    
    // Go backwards from today
    while (true) {
        // Skip Sundays
        if (currentDate.getDay() === 0) {
            currentDate.setDate(currentDate.getDate() - 1);
            continue;
        }
        
        const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
        const dayData = localStorage.getItem(`day_${dateKey}`);
        
        if (!dayData) break;
        
        const data = JSON.parse(dayData);
        if (data.percentage >= 50) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
        
        // Stop if we go before start date
        if (currentDate < START_DATE) break;
    }
    
    document.getElementById('streakCount').textContent = `${streak}🔥`;
    
    // Save longest streak
    const longestStreak = parseInt(localStorage.getItem('longestStreak') || '0');
    if (streak > longestStreak) {
        localStorage.setItem('longestStreak', streak.toString());
    }
}

// ===== CALENDAR =====
function renderCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    // June 2026 has 30 days, starts on Monday (day 1)
    const daysInMonth = 30;
    const firstDay = 1; // Monday
    
    // Add day labels
    const dayLabels = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
    dayLabels.forEach(label => {
        const dayLabel = document.createElement('div');
        dayLabel.textContent = label;
        dayLabel.style.cssText = 'text-align: center; color: #94a3b8; font-size: 12px; font-weight: 600; padding: 8px 0;';
        calendar.appendChild(dayLabel);
    });
    
    // June 1, 2026 is a Monday (no empty cells needed)
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(2026, 5, day); // Month is 0-indexed
        const dayElement = createCalendarDay(day, date);
        calendar.appendChild(dayElement);
    }
}

function createCalendarDay(day, date) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = day;
    
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayData = localStorage.getItem(`day_${dateKey}`);
    const today = new Date();
    
    // Check if it's today
    if (date.toDateString() === today.toDateString()) {
        dayElement.classList.add('today');
    }
    
    // Check if it's Sunday (rest day)
    if (date.getDay() === 0) {
        dayElement.classList.add('rest');
        dayElement.title = 'Dam olish kuni';
        return dayElement;
    }
    
    // Check if it's in the future
    if (date > today) {
        dayElement.classList.add('future');
        return dayElement;
    }
    
    // Check if it's before start date
    if (date < START_DATE) {
        dayElement.classList.add('future');
        dayElement.style.opacity = '0.3';
        return dayElement;
    }
    
    // Apply status based on completion
    if (dayData) {
        const data = JSON.parse(dayData);
        if (data.percentage >= 80) {
            dayElement.classList.add('excellent');
            dayElement.title = `${data.percentage}% - Ajoyib!`;
        } else if (data.percentage >= 50) {
            dayElement.classList.add('good');
            dayElement.title = `${data.percentage}% - Yaxshi`;
        } else {
            dayElement.classList.add('poor');
            dayElement.title = `${data.percentage}% - Kam`;
        }
    }
    
    return dayElement;
}

function updateCalendar() {
    renderCalendar();
}

// ===== MONTHLY STATISTICS =====
function updateMonthlyStats() {
    let excellent = 0;
    let good = 0;
    let poor = 0;
    
    // Check all days in June 2026
    for (let day = 1; day <= 30; day++) {
        const date = new Date(2026, 5, day);
        
        // Skip Sundays and future dates
        if (date.getDay() === 0 || date > new Date() || date < START_DATE) continue;
        
        const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayData = localStorage.getItem(`day_${dateKey}`);
        
        if (dayData) {
            const data = JSON.parse(dayData);
            if (data.percentage >= 80) excellent++;
            else if (data.percentage >= 50) good++;
            else poor++;
        }
    }
    
    document.getElementById('monthlyExcellent').textContent = excellent;
    document.getElementById('monthlyGood').textContent = good;
    document.getElementById('monthlyPoor').textContent = poor;
    
    const longestStreak = localStorage.getItem('longestStreak') || '0';
    document.getElementById('longestStreak').textContent = `${longestStreak}🔥`;
}

// ===== MOTIVATION MESSAGES =====
function showMotivationMessage() {
    const messageBox = document.getElementById('motivationMessage');
    const streak = parseInt(document.getElementById('streakCount').textContent) || 0;
    const percentage = parseInt(document.getElementById('percentComplete').textContent) || 0;
    
    let message = '';
    
    if (streak >= 30) {
        message = '👑 BIR OY! Siz g\'olibsiz! Davom eting!';
    } else if (streak >= 14) {
        message = '🔥 IKKI HAFTA! Siz ajoyibsiz!';
    } else if (streak >= 7) {
        message = '🏆 BIR HAFTA! Zo\'r! Davom eting!';
    } else if (streak >= 3) {
        message = '💪 Uch kun ketma-ket! Ajoyib boshlanish!';
    } else if (percentage === 100) {
        message = '✨ Bugun barcha vazifalar bajarildi! Zo\'r!';
    } else if (percentage >= 80) {
        message = '🌟 Ajoyib ish! Deyarli tugadi!';
    } else if (percentage >= 50) {
        message = '💪 Yaxshi ketayapti! Davom eting!';
    } else if (percentage > 0) {
        message = '🚀 Boshlandi! Har bir qadam muhim!';
    } else {
        message = '⭐ Bugun yangi kun, yangi imkoniyat!';
    }
    
    messageBox.textContent = message;
}

// ===== SERVICE WORKER =====
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('Service Worker ro\'yxatdan o\'tdi:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker xato:', error);
            });
    }
}

// ===== PWA INSTALLATION =====
function setupPWAInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        const installButton = document.getElementById('installButton');
        installButton.style.display = 'block';
        
        installButton.addEventListener('click', () => {
            installButton.style.display = 'none';
            deferredPrompt.prompt();
            
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('PWA o\'rnatildi');
                }
                deferredPrompt = null;
            });
        });
    });
}

// ===== NOTIFICATIONS =====
function requestNotificationPermission() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Bildirishnoma ruxsati berildi');
            }
        });
    }
}

function scheduleNotifications() {
    // Check notifications every minute
    setInterval(() => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        NOTIFICATION_TIMES.forEach(time => {
            if (currentHour === time.hour && currentMinute === time.minute) {
                showNotification(time.message);
            }
        });
    }, 60000); // Check every minute
    
    // Also schedule using Notification API directly (works offline)
    scheduleLocalNotifications();
}

function scheduleLocalNotifications() {
    if ('Notification' in window && Notification.permission === 'granted') {
        const now = new Date();
        
        NOTIFICATION_TIMES.forEach(time => {
            const notificationTime = new Date();
            notificationTime.setHours(time.hour, time.minute, 0, 0);
            
            if (notificationTime > now) {
                const delay = notificationTime - now;
                setTimeout(() => {
                    showNotification(time.message);
                    // Reschedule for next day
                    setTimeout(() => scheduleLocalNotifications(), 86400000);
                }, delay);
            }
        });
    }
}

function showNotification(message) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('Kundalik Tracker', {
            body: message,
            icon: './icon.svg',
            badge: './icon.svg',
            vibrate: [200, 100, 200],
            tag: 'kundalik-reminder',
            requireInteraction: false
        });
        
        notification.onclick = () => {
            window.focus();
            notification.close();
        };
    }
}

// ===== AUTO-SAVE =====
setInterval(() => {
    updateStatistics();
}, 30000); // Update every 30 seconds

// ===== OFFLINE DETECTION =====
window.addEventListener('online', () => {
    console.log('Internet ulanish qayta tiklandi');
});

window.addEventListener('offline', () => {
    console.log('Offline rejimda');
});
