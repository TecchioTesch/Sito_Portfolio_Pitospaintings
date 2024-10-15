var grids = document.querySelectorAll(".grid");

grids.forEach((grid) =>  {
    var msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 25
      });
    
      imagesLoaded( grid ).on( 'progress', function() {
        // layout Masonry after each image loads
        msnry.layout();
      });
})
