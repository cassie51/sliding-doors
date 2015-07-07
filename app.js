/*

    this function will animate a box off the screen
    it is given:

        * coordinate - from where to animate (X coord)
        * box - an element on the screen to animate
        * direction - -1 or +1
*/

function animateSqaureAwayFromCoordinateOffTheScreen(coordinate, box, direction){
    var screenWidth = $('body').width()

    if(direction>0){
        var animDistance = screenWidth - coordinate;
        box.css({
            left:coordinate + 'px'
        })
        box.animate({
            left:'+=' + animDistance
        })
    }
    else
    {
        var doorWidth = box.width()
        box.css({
            left:(coordinate-doorWidth) + 'px'
        })
        box.animate({
            left:'-=' + coordinate
        })
    }

}

function initializeApplication(){

    var leftDoor = $('#left')
    var rightDoor = $('#right')

    $('body').click(function(e){
        var pageCoordinate = e.pageX
        animateSqaureAwayFromCoordinateOffTheScreen(pageCoordinate, leftDoor, -1)
        animateSqaureAwayFromCoordinateOffTheScreen(pageCoordinate, rightDoor, 1)
    })
}

$(initializeApplication)