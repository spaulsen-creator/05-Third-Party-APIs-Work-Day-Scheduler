// moment.js added for current month/day/year. Created new ID -date-display
//might need moment functionality
let today = moment();
//Displays the text of id
$('#currentDay').text(today.format('dddd, MMMM Do'));

// Setting time for color block function usage
let time = moment();
let hour = moment().hours();


function startSchedule() {
    $('.time-block').each(function () {
        let id = $(this).attr('id');
        let planner = localStorage.getItem('id');

        if (planner !== 'null') {
            $(this).children('.planner').val(planner);
        }

    });
}
//jQuery event handling, 
startSchedule();
$('.saveBtn').click(function() {
    let time = $(this).parent().attr('id');
    
    let planner = $(this).siblings('.planner').val();
    
    //console.log(time);
    //console.log(planner);
    localStorage.setItem(time, planner);
});

function colorBlock() {
    hour = time.hours();
    $('.time-block').each(function () {
        let thisHour = parseInt($(this).attr('id'));
        hour = parseInt(hour);

        if (thisHour > hour) {
            $(this).addClass('future')
            //console.log(time);

        } else if (thisHour === hour) {
            $(this).addClass('present'); 
            //console.log(time);

        } else {
            $(this).addClass('past');
        }
    })

    clear.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });


}


colorBlock();


