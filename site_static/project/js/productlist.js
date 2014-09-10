/*DOM Ready*/
$(function($, base, undefined) {

	/*Create Empty Objects to be Inherited */
	var app, config, el, page, utils = {};
	
	/*Inheritance for Base Object*/
	app = $.extend(base);
	
	/*Inheritance for Sub Objects into Main Object*/
	//$.extend({ config : app.config, el : app.el, pages : app.pages, utils : app.utils });

	/*Initialize Document Ready Method Called _init*/
	//app.init();

}(jQuery, function($, undefined) {

	var ProductList = ProductList || {};

	ProductList.config = {
		title : 'Ana Sayfa'
	}

	Base.el = {
		wrapperAll : document.getElementsByClassName('wrapperall'),
		wrapper : document.getElementsByClassName('wrapper')
	}

	Base.pages = {
		ProductList : {},
		Checkout : {}
	}

	Base.init = function() {
		console.log(Base.utils.log('Project Initialized...'));
	}

	Base.utils = {
		log : function(message) {
			console.log(message);
		}
	}

	return {
		config : Base.config,
		el : Base.el,
		pages : Base.pages,
		init : Base.init,
		utils : Base.utils
	}

}(jQuery)));