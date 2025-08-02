document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // 1: 算天数
    // =================================================================
    
    const startDate = new Date('2025-5-8');

    startDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeDiff = today.getTime() - startDate.getTime();
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById('days-together').textContent = daysTogether;


    // =================================================================
    // 2: 生成2025年5月的日历、高亮纪念日
    // =================================================================
    
    const calendarGrid = document.getElementById('calendar-grid');
    const year = 2025;
    const month = 4; 
    const specialDay = 9; 

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    weekdays.forEach(day => {
        const weekdayCell = document.createElement('div');
        weekdayCell.classList.add('calendar-weekday');
        weekdayCell.textContent = day;
        calendarGrid.appendChild(weekdayCell);
    });

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty');
        calendarGrid.appendChild(emptyCell);
    }


    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = day;

        if (day === specialDay) {
            dayCell.classList.add('special-day');
        }

        calendarGrid.appendChild(dayCell);
    }

});


