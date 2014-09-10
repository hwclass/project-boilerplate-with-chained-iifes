/*DOM Ready*/
$(function($, base, undefined) {

	/*Create Empty Objects to be Inherited */
	var app, config, el, page, utils, func = {};
	
	/*Inheritance for Base Object*/
	app = $.extend(base);
	
	/*Inheritance for Sub Objects into Main Object*/
	config = $.extend(app.config);
	el = $.extend(app.el);
	pages = $.extend(app.pages);
	utils = $.extend(app.utils);
	func = $.extend(app.func);

	/*Initialize Document Ready Calls Private _init Method*/
	app.init();

	/*Log Config Title onto Console*/
	utils.log(config.title);

	/*Get the Wrapper Element and Log it onto the Console*/
	//utils.log($(el.wrapperAll));

	/*Set The Product Titles*/
	func.setProductTitle('>Product Title<');

	/*Get The Product Titles*/
	utils.log(func.getProductTitle());

	/*Get The Products Number*/
	utils.log(func.getProductsNumber());

}(jQuery, function($, undefined) {

	/*
	 * Type : Object
	 * @no-event
	 * Context : window
	 * Info: Namespace Object for Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets a namespace object into window. 
	*/
	var base = base || {};

	/*
	 * Type : Object
	 * @no-event
	 * Context : base
	 * Info: Namespace Object for Config Subclass of Base Main Class for General Configuration
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets config values into variables and constants within itself. 
	*/
	base.config = {
		title : 'Base View',
		dataLayer : [],
		auth : $.cookie('is_authenticated'),
		productSelectedBackColorClass : 'selected',
		productTitle : ''
	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : base
	 * Info: Namespace Object for Element Subclass of Base Main Class for Elements in the Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets elements into variables within itself. 
	*/
	base.el = {
		wrapperAll : document.getElementsByClassName('wrapperall'),
		wrapper : document.getElementsByClassName('wrapper'),
		productsWrapper : document.getElementsByClassName('productsWrapper'),
		productContainer : document.getElementsByClassName('productContainer'),
	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : base
	 * Info: Namespace Object for Element Subclass of Base Main Class for Pages within the Project General
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets pages context within itself. 
	*/
	base.pages = {
		ProductList : {},
		Checkout : {}
	}

	/*
	 * Type : Method
	 * @no-event
	 * Context : base
	 * Info: Initialization Method for Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Executes code within itself. 
	*/
	base.init = function() {

		/*test code*/
		base.utils.log('Project Initialized...');
		
		if (base.config.auth != "True") {
		  base.config.dataLayer.push({'CV_MDR': $.cookie('duration')});
		  base.config.dataLayer.push({'CV_Gender': $.cookie('gender')});
		  base.config.dataLayer.push({'CV_Purchase': $.cookie('purchase')});
		}

		/*base.el.productContainer.addEventListener('click', )*/

		/*
		$(base.el.productContainer).click(function (e) {
			$(this).toggleClass(base.config.productSelectedBackColorClass);
		})
		*/
		/*test code*/

	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : base
	 * Info: Utils object for Base & Other Pages
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Wraps utility methods within base. 
	*/
	base.utils = {

		/*
		 * Type : Method
		 * Event : Anonymous
		 * Context : base.utils
		 * Info: Logs onto console.
		 * Params : messages (String)
		 * @no-return
		 * Steps :
		 * a) Logs message onto console. 
		*/
		log : function(message) {
			console.log(message);
		}

	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : base
	 * Info: Function collection object for Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Wraps utility methods within base. 
	*/
	base.fn = {

		setProductTitle : function(title) {
			base.config.productTitle = title;
		},

		getProductTitle : function() {
			return base.config.productTitle;
		},

		getProductsNumber : function() {
			return base.el.productContainer.length;
		}

	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : window
	 * Info: Identifies globals  
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Identifies globals within window. 
	*/
	return {
		config : base.config,
		el : base.el,
		pages : base.pages,
		init : base.init,
		utils : base.utils,
		func : base.fn
	}

}(jQuery)));