// moment.js added for current month/day/year. Created new ID -date-display
//might need moment functionality
let today = moment();
$('#date-display').text(today.format('dddd, MMMM Do'));

// Setting time for color block function usage
let time = moment();
let hour = moment().hours();

function startSchedule() {
    $('.input-group mb-3').each(function () {
        let id = $(this).attr('id')
        let planner = localStorage.getItem(id);
        if (planner != 'null') {
            $(this).find('.form-control').valueOf(planner);
        }

    });
}
//jQuery event handling, 
startSchedule();
let saveBtn = $('.saveBtn');
saveBtn.on('click', function() {
    let time = $(this).parent().attr("id");
    let planner = $(this).siblings('.form-control').val();
    console.log(time);
    console.log(planner);
    localStorage.setItem(time, planner);
});

function colorBlock() {
    hour = time.hours();
    $('.input-group mb-3').each(function() {
        let thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour) {
            $(this).addClass('future')
            console.log(time);
        } else if (thisHour === hour) {
            $(this).addClass('present'); 
            console.log(time);
        } else if (thisHour === hour) {
            $(this).addClass('past');
        }
    })
}

colorBlock();
