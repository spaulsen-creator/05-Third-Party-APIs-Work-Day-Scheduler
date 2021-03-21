// moment.js added for current month/day/year. Created new ID -date-display
//might need moment functionality
let today = moment();
//Displays the text of id
$('#currentDay').text(today.format('dddd, MMMM Do'));

// Setting time for color block function usage
let time = moment();
let hour = moment().hours();

//jQuery usage 
function startSchedule() {
    $('.time-block').each(function () {
        //Grabs 'id' time in html
        let id = $(this).attr('id');
        let planner = localStorage.getItem(id);

        if (planner !== 'null') {
            $(this).children('.planner').val(planner);
        }

    });
}

startSchedule();
let saveBtn = $('.saveBtn');
//Logs user data in local storage
saveBtn.on('click', function() {
    let time = $(this).parent().attr('id');
    
    let planner = $(this).siblings('.planner').val();
    
    console.log(time);
    console.log(planner);
    localStorage.setItem(time, planner);
});
//Row data changed by id/hour data for color display
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
//Clear dtat field function added for UI/UX
    clear.addEventListener('click', function() {
        localStorage.clear();
        location.reload();
    });


}


colorBlock();


