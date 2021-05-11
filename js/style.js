
//navigation
function loadHeaderFooter(){
	$( "header nav" ).load( "header.html" );
	$( "footer" ).load( "footer.html" );
}

//datepicker
function datepicker(){
    $( ".i-date" ).datepicker({
        format: 'yyyy.mm.dd',
        autoclose: true,
        todayHighlight: true,
        startDate: 'today',
        daysOfWeekDisabled : [0,6]
    });
    $( ".i-birthday" ).datepicker({
        format: 'yyyy.mm.dd',
        autoclose: true,
        todayHighlight: true
    });
}

$( document ).ready( function(){
	loadHeaderFooter();
});

