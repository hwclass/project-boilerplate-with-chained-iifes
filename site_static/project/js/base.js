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
	func.setProductTitle('Product title');

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
	var _Base = _Base || {};

	/*
	 * Type : Object
	 * @no-event
	 * Context : _Base
	 * Info: Namespace Object for Config Subclass of Base Main Class for General Configuration
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets config values into variables and constants within itself. 
	*/
	_Base.config = {
		title : 'Ana Sayfa',
		dataLayer : [],
		auth : $.cookie('is_authenticated'),
		productSelectedBackColorClass : 'selected',
		productTitle : ''
	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : _Base
	 * Info: Namespace Object for Element Subclass of Base Main Class for Elements in the Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets elements into variables within itself. 
	*/
	_Base.el = {
		wrapperAll : document.getElementsByClassName('wrapperall'),
		wrapper : document.getElementsByClassName('wrapper'),
		productsWrapper : document.getElementsByClassName('productsWrapper'),
		productContainer : document.getElementsByClassName('productContainer'),
	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : _Base
	 * Info: Namespace Object for Element Subclass of Base Main Class for Pages within the Project General
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Sets pages context within itself. 
	*/
	_Base.pages = {
		ProductList : {},
		Checkout : {}
	}

	/*
	 * Type : Method
	 * @no-event
	 * Context : _Base
	 * Info: Initialization Method for Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Executes code within itself. 
	*/
	_Base.init = function() {

		/*test code*/
		console.log(_Base.utils.log('project initialized...'));
		
		if (_Base.config.auth != "True") {
		  _Base.config.dataLayer.push({'CV_MDR': $.cookie('duration')});
		  _Base.config.dataLayer.push({'CV_Gender': $.cookie('gender')});
		  _Base.config.dataLayer.push({'CV_Purchase': $.cookie('purchase')});
		}

		/*_Base.el.productContainer.addEventListener('click', )*/

		/*
		$(_Base.el.productContainer).click(function (e) {
			$(this).toggleClass(_Base.config.productSelectedBackColorClass);
		})
		*/
		/*test code*/

	}

	/*
	 * Type : Object
	 * @no-event
	 * Context : _Base
	 * Info: Utils object for Base & Other Pages
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Wraps utility methods within _Base. 
	*/
	_Base.utils = {

		/*
		 * Type : Method
		 * Event : Anonymous
		 * Context : _Base.utils
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
	 * Context : _Base
	 * Info: Function collection object for Base Page
	 * @no-params
	 * @no-return
	 * Steps :
	 * a) Wraps utility methods within _Base. 
	*/
	_Base.fn = {

		setProductTitle : function(title) {
			_Base.config.productTitle = title;
		},

		getProductTitle : function() {
			return _Base.config.productTitle;
		},

		getProductsNumber : function() {
			return _Base.el.productContainer.length;
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
		config : _Base.config,
		el : _Base.el,
		pages : _Base.pages,
		init : _Base.init,
		utils : _Base.utils,
		func : _Base.fn
	}

}(jQuery)));