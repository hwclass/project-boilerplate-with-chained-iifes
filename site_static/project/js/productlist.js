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

	ProductList._config = {
		title : 'Ana Sayfa'
	}

	Base._el = {
		wrapperAll : document.getElementsByClassName('wrapperall'),
		wrapper : document.getElementsByClassName('wrapper')
	}

	Base._pages = {
		ProductList : {},
		Checkout : {}
	}

	Base._init = function() {
		console.log(Base._utils.log('project initialized...'));
	}

	Base._utils = {
		log : function(message) {
			console.log(message);
		}
	}

	return {
		config : Base._config,
		el : Base._el,
		pages : Base._pages,
		init : Base._init,
		utils : Base._utils
	}

}(jQuery)));