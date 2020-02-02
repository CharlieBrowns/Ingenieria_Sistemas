(function() {
    
    
    var myTabs = document.querySelectorAll("ul.isi__tabs > li");
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++ ) {
            myTabs[i].classList.remove("isi__tab_active");
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add("isi__tab_active");
        tabClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".isi__tab_pane");
        for ( var j = 0; j < myContentPanes.length; j++) {
            myContentPanes[j].classList.remove("active");
        }
        var anchorReference = tabClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (var i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
    
    
    
    var myLaboTabs = document.querySelectorAll("ul.isi__labotabs > li");
    function myLaboTabClicks(tabClickEvent) {
        for (var i = 0; i < myLaboTabs.length; i++ ) {
            myLaboTabs[i].classList.remove("isi__active");
        }
        var clickedLaboTab = tabClickEvent.currentTarget;
        clickedLaboTab.classList.add("isi__active");
        tabClickEvent.preventDefault();
        var myContentLaboPanes = document.querySelectorAll(".isi__laboPane");
        for ( var k = 0; k < myContentLaboPanes.length; k++) {
            myContentLaboPanes[k].classList.remove("isi__pane_active");
        }
        var anchorLaboReference = tabClickEvent.target;
        var activeLaboPaneId = anchorLaboReference.getAttribute("href");
        var activeLaboPane = document.querySelector(activeLaboPaneId);
        activeLaboPane.classList.add("isi__pane_active");
    }
    for (var j = 0; j < myLaboTabs.length; j++) {
		myLaboTabs[j].addEventListener("click", myLaboTabClicks)
	}
    
    

    
    
    
}());