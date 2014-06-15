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
	_Base._config = {
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
	_Base._el = {
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
	_Base._pages = {
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
	_Base._init = function() {

		/*test code*/
		console.log(_Base._utils.log('project initialized...'));
		
		if (_Base._config.auth != "True") {
		  _Base._config.dataLayer.push({'CV_MDR': $.cookie('duration')});
		  _Base._config.dataLayer.push({'CV_Gender': $.cookie('gender')});
		  _Base._config.dataLayer.push({'CV_Purchase': $.cookie('purchase')});
		}

		/*_Base._el.productContainer.addEventListener('click', )*/

		/*
		$(_Base._el.productContainer).click(function (e) {
			$(this).toggleClass(_Base._config.productSelectedBackColorClass);
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
	_Base._utils = {

		/*
		 * Type : Method
		 * Event : Anonymous
		 * Context : _Base._utils
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
	_Base._fn = {

		setProductTitle : function(title) {
			_Base._config.productTitle = title;
		},

		getProductTitle : function() {
			return _Base._config.productTitle;
		},

		getProductsNumber : function() {
			return _Base._el.productContainer.length;
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
		config : _Base._config,
		el : _Base._el,
		pages : _Base._pages,
		init : _Base._init,
		utils : _Base._utils,
		func : _Base._fn
	}

}(jQuery)));