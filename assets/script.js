// moment.js added for current month/day/year. Created new ID -date-display
let today = moment();
$("#date-display").text(today.format("dddd, MMMM Do"));

// Setting time for color block function usage
let time = moment();
let hour = moment().hours();

function

if planner = null



startSchedule();
saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
            var time = $(this).parent().attr("id");
            var planner = $(this).siblings(".planner").val();



// iterates across divs and sets color property
    $(document.body).click(function () {
        $("div").each(function (i) {
            if (this.style.color !== "blue") {
                this.style.color = "blue";
            } else {
                this.style.color = "";
            }
        });
    }); 

    