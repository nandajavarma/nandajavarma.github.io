console.log("I am loaded");

$(".expandContent").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    console.log($header.i);
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        if ($content.is(":visible")) {
            $("i").removeClass("fa fa-chevron-circle-down");
            $("i").addClass("fa fa-chevron-circle-up");
        }
        else {
            $("i").removeClass("fa fa-chevron-circle-up");
            $("i").addClass("fa fa-chevron-circle-down");
        }
        // $header.text(function () {
        //     //change text based on condition
        //     return $content.is(":visible") ? "Collapse" : "Expand";
        // });
    });

});
