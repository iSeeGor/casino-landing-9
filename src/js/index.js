document.addEventListener('DOMContentLoaded', function(){
	
	// lazy
	let lazyLoadInstance = new LazyLoad({
		// Your custom settings go here
	});

	// Tabs init
		siteTabs();


	
});

const siteTabs = () => {

	let myTabs = document.querySelectorAll(".tabs .tabs__button");

	function myTabClicks(tabClickEvent) {
		for (let i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		let clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		let myContentPanes = document.querySelectorAll(".tabs .tabs__content");
		for (let i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		let anchorReference = tabClickEvent.target;
		let activePaneId = anchorReference.getAttribute("href");
		let activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (let i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
}