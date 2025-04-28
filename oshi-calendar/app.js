$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: [
            {
                title: '推しのライブイベント',
                start: '2025-05-10T19:00:00',
                description: '詳細な説明',
                color: '#ff5733' // 推しカラー（色指定）
            }
        ],
        dayClick: function(date, jsEvent, view) {
            alert('選択した日付: ' + date.format());
        }
    });
});
