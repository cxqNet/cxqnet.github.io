document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // 功能1: 计算已经在一起的天数
    // =================================================================
    
    // !!! 重要: 请在这里设置你们真正在一起的日期 !!!
    const startDate = new Date('2025-05-09'); // 格式: YYYY-MM-DD

    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // 更新页面上的天数
    document.getElementById('days-together').textContent = daysTogether;


    // =================================================================
    // 功能2: 生成2025年5月的日历并高亮纪念日
    // =================================================================
    
    const calendarGrid = document.getElementById('calendar-grid');
    const year = 2025;
    const month = 4; // JavaScript中月份从0开始，所以5月是4
    const specialDay = 9; // 你们的纪念日

    // 获取当月第一天是星期几 (0=周日, 1=周一, ..., 6=周六)
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    // 获取当月有多少天
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 1. 添加星期标题
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    weekdays.forEach(day => {
        const weekdayCell = document.createElement('div');
        weekdayCell.classList.add('calendar-weekday');
        weekdayCell.textContent = day;
        calendarGrid.appendChild(weekdayCell);
    });

    // 2. 添加日历前面的空白格子
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty');
        calendarGrid.appendChild(emptyCell);
    }

    // 3. 添加当月的每一天
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = day;

        // 如果是特殊纪念日，添加特殊样式
        if (day === specialDay) {
            dayCell.classList.add('special-day');
        }

        calendarGrid.appendChild(dayCell);
    }

});
