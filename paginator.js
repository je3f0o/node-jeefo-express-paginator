/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : paginate.js
* Purpose    :
* Created at : 2015-05-20
* Updated at : 2015-10-03
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

module.exports = function (req, res, next) {
	req.get_pagination = function (options) {
		var page_query_str, items_per_page, items_per_page_str;
		options = options || {};

		page_query_str     = options.page_query_str || "page";
		items_per_page_str = options.items_per_page_str || "limit";

		var page       = parseInt(req.query[page_query_str], 10);
		items_per_page = options.items_per_page || parseInt(req.query[items_per_page_str], 10) || 10;

		page = page > 0 ? page - 1 : 0;

		return {
			offset : page * items_per_page,
			max    : items_per_page
		};
	};

	next();
};
