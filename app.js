$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        dayClick: function(date, jsEvent, view) {
            // モーダルを表示
            $('#eventModal').show();
            $('#eventForm').data('date', date.format());  // クリックした日付をフォームに記録
        }
    });

    // モーダルを閉じる
    $('.close').on('click', function() {
        $('#eventModal').hide();
    });

    // 予定追加フォーム送信時
    $('#eventForm').on('submit', function(event) {
        event.preventDefault();  // フォーム送信を防ぐ

        // 入力データ取得
        var eventName = $('#eventName').val();
        var eventDetails = $('#eventDetails').val();
        var eventTime = $('#eventTime').val();
        var eventColor = $('#eventColor').val();
        var eventDate = $('#eventForm').data('date') + 'T' + eventTime + ':00';

        // 予定をFullCalendarに追加
        $('#calendar').fullCalendar('renderEvent', {
            title: eventName,
            start: eventDate,
            description: eventDetails,
            color: eventColor
        });

        // モーダルを閉じる
        $('#eventModal').hide();

        // フォームをリセット
        $('#eventForm')[0].reset();
    });
});
