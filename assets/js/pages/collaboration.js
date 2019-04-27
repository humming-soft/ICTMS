var Js = function() {

    var _componentFullCalendarStyling = function(eventColors) {
        if (!$().fullCalendar) {
            console.warn('Warning - fullcalendar.min.js is not loaded.');
            return;
        }
        $('.fullcalendar-event-colors').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            defaultDate: new Date(),
            editable: true,
            events: eventColors,
            isRTL: $('html').attr('dir') == 'rtl' ? true : false
        });
    };
    return {
        init: function() {
            var eventColors = [
                {
                    title: 'Weekly Meeting',
                    start: '2019-04-18',
                    color: '#EF5350'
                },
                {
                    title: 'Steering Committee Meeting',
                    start: '2019-04-29',
                    color: '#26A69A'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2014-11-09T16:00:00',
                    color: '#26A69A'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2014-11-16T16:00:00',
                    color: '#5C6BC0'
                },
                {
                    title: 'Conference',
                    start: '2014-11-11',
                    end: '2014-11-13',
                    color: '#546E7A'
                }
            ];
            _componentFullCalendarStyling(eventColors);
        }
    }
}();