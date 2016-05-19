!
function t(e, n, r) {
	console.log("e, n, r = " + JSON.stringify(e) + '>>>' + JSON.stringify(n) + '>>>' + JSON.stringify(r))
	console.log('start ved!');
	function i(a, c) {
		//console.log('a,c=' + a + ',' + c )
		if (!n[a]) {
			if (!e[a]) {
				var s = "function" == typeof require && require;
				if (!c && s) return s(a, !0);
				if (o) return o(a, !0);
				var u = new Error("Cannot find module '" + a + "'");
				throw u.code = "MODULE_NOT_FOUND",
				u
			}
			//create an empty object passes as 1st arguement to the calling function
			var l = n[a] = {
				exports: {}
			};

			console.log('in func i, a>>' + a);
			//console.log('e>>' + JSON.stringify(e));
			//console.log('e[a][1] = ' + JSON.stringify(e[a][1][t]));
			//e>>{"1":[null,{}],"2":[null,{}],"3": ... }
			//call the function which is passed in the arguement and then call i with new arguement
			//call({},func(t),l,{},t,e,n,r )
			e[a][0].call(l.exports, function (t) {
				var n = e[a][1][t];
				return i(n ? n: t)
			},
			l, l.exports, t, e, n, r)

		}
		console.log('n[a].exports=' + n[a].exports);
		return n[a].exports
		console.log('after export!');

	}
	//Start calling the first function 1 through function i
	for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) {
		console.log('r=' + r);
		console.log('a=' + a);
		i(r[a]);
	}
	console.log('for done!');
	return i
} ({
	1 : [function (t) {
		console.log('inside one >>>' + t(98));
		//t function is called from e[a][0].call
		var e, n, r, i, o, a, c, s, u, l, p, f = [].slice;

		delete Array.prototype.toJSON,
		u = window.define,
		window.define = null,
		//pass the key of the function to be called to t which will inturn
		//call i function to execute the function related the key
		e = t(98),
		p = t(105),
		n = t(88),
		n.$ = e,
		t(44),
		t(34),
		r = t(35),
		i = t(43),
		o = t(18),
		//set the nav bar at the top
		a = t(59),
		window.define = u,
		window._heapev = {},
		e.support.cors = !0,
		e.ajaxSetup({
			headers: {
				"X-CSRF-Token": "HJRYGm4A355_iQWv5WrQY7J2"
			}
		}),
		l = n.sync,
		n.sync = function (t, e, n) {
			return null == n && (n = {}),
			null == n.crossDomain && (n.crossDomain = !0),
			null == n.xhrFields && (n.xhrFields = {
				withCredentials: !0
			}),
			l(t, e, n)
		},
		s = function () {
			console.log('in s func');
			var t, s, u;
			return t = e("body"),
			window._heapev.mode = "definition",
			window._heapev.highlighter = new i,
			window._heapev.curTooltip = new a.TooltipView,
			window._heapev.Gatekeeper = r,
			a.NavbarView.makeRoom(),
			window._heapev.navbarView = new a.NavbarView,
			t.append(window._heapev.navbarView.render().el),
			window._heapev.eventCenter = p.extend({},
			n.Events),
			window._heapev.onboardingView = new o({
				eventCenter: window._heapev.eventCenter
			}),
			s = null != (u = window.$) ? u: window.jQuery,
			(null != s ? s.fn: void 0) && c(s),
			window.addEventListener("mousedown", function (t) {
				return "normal" !== window._heapev.mode && "SELECT" === e(t.target).prop("tagName") ? (t.preventDefault(), t.stopPropagation()) : void 0
			}),
			window.addEventListener("mousedown", function (t) {
				var n, r;
				return n = e(t.target),
				n.closest(".heap-tooltip").length > 0 ? (r = window._heapev.curTooltip, null != r && -1 === n.css("cursor").indexOf("grab") ? r.draggie.disable() : r.draggie.enable()) : void 0
			},
			!0),
			window.addEventListener("mouseover", function (t) {
				var n, r;
				return n = e(t.target),
				0 !== (null != (r = n.attr("class")) ? r.indexOf("heap-") : void 0) && "normal" !== window._heapev.mode ? (t.preventDefault(), t.stopPropagation(), window._heapev.highlighter.outlineSingle(n)) : void 0
			}),
			window.addEventListener("mouseout", function (t) {
				var n;
				return n = e(t.target),
				"IFRAME" !== n.prop("tagName") ? (n.css("cursor", ""), window._heapev.highlighter.fixed ? void 0 : window._heapev.highlighter.clear()) : void 0
			}),
			window.addEventListener("click", function (n) {
				var r, i, o, c, s;
				if ((n.screenX || n.screenY) && (r = e(n.target), i = null != (o = r.attr("class")) ? o: "", -1 === i.indexOf("heap-dropdown-") && -1 === i.indexOf("heap-icon-remove") && null != (c = window._heapev.navbarView.symbolListView) && c.collapse(), !((0 === i.indexOf("heap-") || r.parents(".heap-tooltip").length > 0) && -1 === i.indexOf("heap-outline-shade") || "normal" === window._heapev.mode || window._heapev.snapshot === !0 || (n.preventDefault(), n.stopPropagation(), window._heapev.highlighter.fixed)))) return r.focus(),
				null != (s = window._heapev.curTooltip) && s.close(),
				window._heapev.curTooltip = new a.TooltipView({
					$target: r
				}),
				t.append(window._heapev.curTooltip.render().el),
				e.fn.dropdown.enable(".heap-tooltip")
			},
			!0),
			window.addEventListener("keyup", function (t) {
				var e, n, r;
				return n = 27 === t.keyCode,
				n && "definition" === window._heapev.mode && null != (r = window._heapev.curTooltip) && r.close(),
				e = 75 === t.keyCode && t.ctrlKey,
				e && window._heapev.navbarView.modeView.changeMode(),
				t.preventDefault(),
				t.stopPropagation()
			}),
			e("*").each(function () {
				var t, n;
				return t = null != (n = e(this).attr("class")) ? n: "",
				0 !== t.indexOf("heap-") ? e(this).attr("heap-ignore", "on") : void 0
			}),
			window.heapV.identify({
				email: "sathish.jayaraman@thecustomerlabs.com"
			})
		},
		c = function (t) {
			console.log('>>> in c func');
			var n, r, i, o;
			return r = !1,
			window.addEventListener("focus", function (t) {
				var n;
				return 0 === (null != (n = e(t.target).attr("class")) ? n.indexOf("heap-") : void 0) ? r = !0 : void 0
			},
			!0),
			n = function () {
				console.log('>> in n func');
				var t, e, n;
				return n = arguments[0],
				e = arguments[1],
				t = 3 <= arguments.length ? f.call(arguments, 2) : [],
				r ? r = !1 : e.apply(n, t)
			},
			i = t.fn.focus,
			t.fn.focus = function () {
				var t;
				return t = 1 <= arguments.length ? f.call(arguments, 0) : [],
				n(this, i, t)
			},
			o = t.fn.trigger,
			t.fn.trigger = function () {
				var t, e;
				return t = 1 <= arguments.length ? f.call(arguments, 0) : [],
				e = t[0],
				"focus" === e ? n(this, o, t) : o.apply(this, t)
			}
		},
		"interactive" === document.readyState ? p.defer(s) : e(s)
	},
	{}],
	2 : [function (t, e) {
		var n, r = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		};
		e.exports = n = function () {
			function t(t, e) {
				this.appId = t,
				this.userId = e,
				this.literal = r(this.literal, this),
				this.toString = r(this.toString, this)
			}
			return t.prototype.toString = function () {
				return "(" + this.appId + ", " + this.userId + ")"
			},
			t.prototype.literal = function () {
				return "'(" + this.appId + ", " + this.userId + ")'::APP_USER_ID"
			},
			t.parse = function (e) {
				var n;
				if (n = e.replace(/\s/g, "").match(/^\((\d+),(-?\d+)\)$/), null == n) throw new Error("Couldn't parse AppUserId '" + e + "'.");
				return new t(n[1], n[2])
			},
			t
		} ()
	},
	{}],
	3 : [function (t, e) {
		var n;
		n = {
			2651508483 : {
				rate: 10,
				write: !0
			},
			3557813517 : {
				rate: 10
			},
			843911945 : {
				rate: 50,
				write: !0
			}
		},
		e.exports = {
			SAMPLING_MODULO: function (t) {
				return t in n ? n[t].rate: 20
			},
			WRITE_SAMPLING: function (t) {
				var e;
				return null != (e = n[t]) ? e.write: void 0
			},
			INITIAL_NUM_LIST_EVENTS: 100,
			NUM_LIST_EVENTS: 500,
			CSV_LIST_LIMIT: 5e3,
			MAX_RETENTION_INTERVALS: 100,
			DEFAULT_RETENTION_INTERVALS: 14,
			MAX_PAGE_SIZE: 50,
			GROUP_BY_GROUPS_LIMIT: 50,
			CSV_GROUP_BY_GROUPS_LIMIT: 1e3
		}
	},
	{}],
	4 : [function (t, e) {
		e.exports = [{
			data: "first_date_in_range",
			name: "Date of Start Event",
			label: "Date of Start Event",
			types: [],
			allowedQueryTypes: ["retention"],
			noArguments: !0
		},
		{
			data: "count",
			name: "Count of...",
			label: "Count Of",
			types: ["session", "pageview", "event"]
		},
		{
			data: "hasdone",
			name: "Has done...",
			label: "User Has Done",
			groupLabel: "Whether User Has Done",
			types: ["pageview", "event"],
			noCore: !0,
			noTarget: !0
		},
		{
			data: "cohort",
			name: "In segment...",
			label: "User Is In Segment",
			groupLabel: "Whether User Is In Segment",
			types: ["user"],
			filterSymbol: function (t) {
				var e;
				return null == (null != (e = t.get("query")) ? e.over: void 0)
			},
			noCore: !0,
			noTarget: !0
		},
		{
			data: "first_date",
			name: "First date of...",
			label: "First Date of",
			groupLabel: "First Date of",
			types: ["session", "pageview", "event"],
			noTarget: !0,
			noCore: !0,
			noFilter: !0
		}]
	},
	{}],
	5 : [function (t, e) {
		var n, r, i, o = [].indexOf ||
		function (t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return - 1
		};
		i = t(105),
		n = t(25),
		r = [{
			data: n.builtin("user").serialize(),
			label: "New Users",
			listLabel: "Users"
		},
		{
			data: n.builtin("session").serialize(),
			label: "Sessions"
		},
		{
			data: n.builtin("pageview").serialize(),
			label: "Pageviews",
			library: "web"
		},
		{
			data: n.builtin("pageview").serialize(),
			label: "Screenviews",
			library: "ios"
		}],
		e.exports = {
			builtinsForTypes: function (t, e) {
				var a, c, s;
				return null == e && (e = {}),
				t = i.chain([t]).flatten(!0).map(function (t) {
					return n.builtin(t).serialize()
				}).value(),
				a = o.call(null != (c = null != (s = window.app) ? s.preloaded.libraries: void 0) ? c: [], "web") >= 0 ? "web": "ios",
				i.chain(r).filter(function (e) {
					var n;
					return n = e.data,
					o.call(t, n) >= 0 && (!e.library || e.library === a)
				}).map(function (t) {
					return i.extend({},
					t, {
						label: e.depluralize ? t.label.slice(0, -1) : t.label
					})
				}).value()
			},
			builtinForType: function (t, e) {
				return this.builtinsForTypes(t, e)[0]
			}
		}
	},
	{}],
	6 : [function (t, e) {
		var n, r = [].indexOf ||
		function (t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return - 1
		};
		e.exports = n = function () {
			function e() {}
			return e.coreObjects = ["user", "session", "pageview", "event"],
			e.operators = t(10),
			e.getOperators = function (t) {
				return null == t && (t = {}),
				null == t.type && (t.type = "str"),
				this.operators.filter(function (e) {
					var n;
					return n = t.type,
					r.call(e.types, n) >= 0
				})
			},
			e.getParentTypesIncl = function (t) {
				return "event" === t ? ["user", "session", "pageview", "event"] : "pageview" === t ? ["user", "session", "pageview"] : "session" === t ? ["user", "session"] : "user" === t ? ["user"] : void 0
			},
			e.getSubTypesExcl = function (t) {
				return "user" === t ? ["session", "pageview", "event"] : "session" === t ? ["pageview", "event"] : "pageview" === t ? ["event"] : "event" === t ? [] : void 0
			},
			e
		} ()
	},
	{}],
	7 : [function (t, e) {
		var n, r;
		r = t(105),
		n = t(103),
		e.exports = {
			user: [{
				data: "joindate",
				label: "Date Joined",
				groupLabel: "Week Joined",
				datetime: !0,
				groupable: !0,
				sort: function (t) {
					var e, r, i;
					return i = t.split(" - "),
					r = i[0],
					e = i[1],
					+n("" + r + ", " + n().format("YYYY"))
				},
				render: function (t) {
					return "" + n(t).startOf("week").format("MMM D") + " - " + n(t).endOf("week").format("MMM D")
				}
			},
			{
				data: "user_id",
				num: !0
			},
			{
				data: "handle",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "email",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "initial_referrer",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_search_keyword",
				label: "Initial Search Keyword",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_utm_source",
				label: "Initial UTM Source",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_utm_medium",
				label: "Initial UTM Medium",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_utm_term",
				label: "Initial UTM Term",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_utm_content",
				label: "Initial UTM Content",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_utm_campaign",
				label: "Initial UTM Campaign",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_landing_page",
				groupable: !0,
				typeahead: !0,
				library: "web",
				render: function (t) {
					return "/" + r.rest(t.split("/")).join("/")
				}
			},
			{
				data: "initial_browser",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "initial_phone_model",
				label: "Initial Device",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "initial_device_type",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "initial_platform",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "initial_carrier",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "initial_country",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "initial_region",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "initial_city",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "initial_ip",
				hidden: !0
			}],
			session: [{
				data: "session_id",
				label: "Session ID",
				num: !0
			},
			{
				data: "referrer",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "search_keyword",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "utm_source",
				label: "UTM Source",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "utm_medium",
				label: "UTM Medium",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "utm_term",
				label: "UTM Term",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "utm_content",
				label: "UTM Content",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "utm_campaign",
				label: "UTM Campaign",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "library",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "app_name",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "app_version",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "session_time",
				hidden: !0
			},
			{
				data: "landing_page",
				groupable: !0,
				typeahead: !0,
				library: "web",
				render: function (t) {
					return "/" + r.rest(t.split("/")).join("/")
				}
			},
			{
				data: "browser",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "phone_model",
				label: "Device",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "device_type",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "platform",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "carrier",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "country",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "region",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "city",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "ip",
				hidden: !0
			}],
			pageview: [{
				data: "domain",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "query",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "path",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "hash",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "title",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "view_controller",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "screen_a11y_id",
				label: "View Controller accessibilityIdentifier",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "screen_a11y_label",
				label: "View Controller accessibilityLabel",
				groupable: !0,
				typeahead: !0,
				library: "ios"
			},
			{
				data: "pageview_id",
				hidden: !0
			},
			{
				data: "pageview_time",
				hidden: !0
			},
			{
				data: "pageview_properties",
				hidden: !0
			}],
			event: [{
				data: "href",
				groupable: !0,
				typeahead: !0,
				library: "web"
			},
			{
				data: "target_tag",
				typeahead: !0,
				library: "web"
			},
			{
				data: "target_id",
				typeahead: !0,
				library: "web"
			},
			{
				data: "target_class",
				typeahead: !0,
				library: "web"
			},
			{
				data: "target_text",
				groupable: !0,
				typeahead: !0
			},
			{
				data: "target_selector",
				label: "Action Method",
				typeahead: !0,
				library: "ios"
			},
			{
				data: "target_view",
				label: "Target View Class",
				typeahead: !0,
				library: "ios"
			},
			{
				data: "target_ivar",
				label: "Target View Name",
				typeahead: !0,
				library: "ios"
			},
			{
				data: "target_a11y_id",
				label: "Target accessibilityIdentifier",
				typeahead: !0,
				library: "ios"
			},
			{
				data: "target_a11y_label",
				label: "Target accessibilityLabel",
				typeahead: !0,
				library: "ios"
			},
			{
				data: "hierarchy",
				hidden: !0
			},
			{
				data: "event_id",
				hidden: !0
			}]
		}
	},
	{}],
	8 : [function (t, e) {
		var n, r, i, o, a, c = [].indexOf ||
		function (t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return - 1
		};
		a = t(105),
		o = t(103),
		n = t(24),
		r = t(25),
		e.exports = i = function () {
			function e() {}
			return e.aggregations = t(4),
			e.builtin = t(5),
			e.fields = t(7),
			e.operators = t(10),
			e.dataToTitleLabel = function (t, r) {
				var i, o;
				if (null == r && (r = {}), r.unique && "user" !== t) switch (t) {
				case "session":
					return "Unique Sessions";
				case "pageview":
					return "Unique Pageviews";
				default:
					return "Unique Users who did " + t
				}
				return i = e.builtin.builtinForType(t),
				i && (r.list || r.timeBounded) ? null != (o = i.listLabel) ? o: i.label: i ? i.label: r.lowercase ? t: n.capitalize(t)
			},
			e.scalarToLabel = function (t, e) {
				var i, o, c, s, u, l, p, f, h, d, M, g, b, m, v, A, y;
				return null == e && (e = {}),
				t ? (o = p = "", l = t.id || (null != (g = t.property) ? g.id: void 0) ? (u = r.factory(t.id || (null != (b = t.property) ? b.id: void 0)), u.name({
					symbols: null != (m = window.router) ? m.symbols: void 0
				})) : null != (v = null != (A = t.property) ? A.name: void 0) ? v: t.name, t.fn && (i = a.findWhere(this.aggregations, {
					data: t.fn
				}), e.group && (h = null != i ? i.groupLabel: void 0), o = null != h ? h: null != i ? i.label: void 0), c = a.flatten(function () {
					var t, e;
					t = this.fields,
					e = [];
					for (d in t) M = t[d],
					e.push(M);
					return e
				}.call(this)), f = a.findWhere(c, {
					data: l
				}), s = this.builtin.builtinForType(l), s ? p = s.label: f ? (e.group && (h = f.groupLabel), p = null != (y = null != h ? h: f.label) ? y: n.capitalize(l.replace(/_/g, " "))) : p = l, ("" + o + " " + ((null != i ? i.noArguments: void 0) ? "": p)).trim()) : ""
			},
			e.clauseToLabel = function (t) {
				var e, n, r;
				return n = this.scalarToLabel(t.scalar),
				e = a.findWhere(this.operators, {
					data: t.op
				}),
				("" + n + " " + (null != (r = null != e ? e.label: void 0) ? r: "") + " " + this.formatClauseVal(t.val, e)).trim()
			},
			e.formatClauseVal = function (t, e) {
				var n, r;
				return t ? (n = null != (r = null != e ? e.types: void 0) ? r: [], c.call(n, "datetime") >= 0 ? o(t).format("M/D/YYYY") : t) : ""
			},
			e
		} ()
	},
	{}],
	9 : [function (t, e, n) {
		n.Aggregations = t(4),
		n.BuiltIn = t(5),
		n.Core = t(6),
		n.Fields = t(7),
		n.Format = t(8),
		n.Operators = t(10),
		n.Response = t(11),
		n.ResponseNormalized = t(12),
		n.TimePeriod = t(13),
		n.Types = t(14)
	},
	{}],
	10 : [function (t, e) {
		e.exports = [{
			data: "=",
			label: "equals",
			types: ["custom", "num", "str"]
		},
		{
			data: "!=",
			label: "does not equal",
			types: ["custom", "num", "str"]
		},
		{
			data: "contains",
			label: "contains",
			types: ["custom", "str"]
		},
		{
			data: "notcontains",
			label: "does not contain",
			types: ["custom", "str"]
		},
		{
			data: "<",
			label: "less than",
			types: ["custom", "num"]
		},
		{
			data: ">",
			label: "greater than",
			types: ["custom", "num"]
		},
		{
			data: "isdef",
			label: "is defined",
			types: ["custom", "str"]
		},
		{
			data: "notdef",
			label: "is not defined",
			types: ["custom", "str"]
		},
		{
			data: "<=",
			label: "before",
			types: ["datetime"]
		},
		{
			data: ">=",
			label: "after",
			types: ["datetime"]
		},
		{
			data: "matches",
			label: "wildcard matches",
			types: ["custom", "str"]
		}]
	},
	{}],
	11 : [function (t, e) {
		var n, r, i, o, a, c, s, u, l;
		l = t(105),
		s = t(90),
		u = t(103),
		n = t(3),
		r = t(24),
		c = t(26),
		i = t(106),
		o = t(15),
		e.exports = a = function () {
			function e() {}
			return e.fields = t(7),
			e.escapeForPg = function (t) {
				return t.replace(/'/g, "")
			},
			e.aggToGroupName = function (t) {
				var e, n;
				return e = (t.fn ? (n = i.factory(t.property.id).id(), "" + t.fn + "_" + this.escapeForPg(n)) : t.name).slice(0, 63)
			},
			e.formatRespData = function (t, e, n) {
				var r, i;
				switch (i = n.by ? this.aggToGroupName(n.by) : void 0, r = "bar" === e || "pie" === e ? this.formatRespDataBar: this.formatRespDataAgg, n.main.type) {
				case "funnel":
					return this.formatRespDataFunnel(t, e, n, i);
				case "object":
					return this.formatRespDataList(t, e, n);
				case "agg":
					return r(t, e, n, i);
				case "multi":
					return r(t, e, n, "eventName");
				case "retention":
					return this.formatRespDataRetention(t, e, n, i);
				default:
					throw Error("Unknown query type " + n.main.type)
				}
			},
			e.formatRespDataFunnel = function (t, n, r, i) {
				var o, a, c, s;
				return s = l.partition(t, function (t) {
					return null != t.step_names
				}),
				c = s[0],
				t = s[1],
				c = c[0].step_names,
				o = function (t) {
					var e, n, r, i;
					return i = /(\d+)\_(.*)/.exec(t),
					n = i[0],
					r = i[1],
					e = i[2],
					{
						key: e,
						pos: +r
					}
				},
				l.each(t, function (t) {
					var e, n, i, o, a;
					for (a = r.main.events, n = i = 0, o = a.length; o > i; n = ++i) e = a[n],
					t["" + n + "_" + c[n]] = t.funnel_results[n];
					return delete t.funnel_results
				}),
				a = function (t) {
					return null == t && (t = {}),
					l.chain(t).pairs().sortBy(function (t) {
						return o(t[0]).pos
					}).map(function (t) {
						return {
							key: o(t[0]).key,
							value: +t[1]
						}
					}).value()
				},
				t = i ? e.regroupFunnel(t, n, r, i).map(function (t) {
					return {
						name: t[i],
						values: a(l.omit(t, i))
					}
				}) : a(t[0]),
				"csv" === n ? e.formatRespDataFunnelCSV(t, n, r, i) : t
			},
			e.formatRespDataFunnelCSV = function (t, e, n, r) {
				var i, o;
				return r ? (i = l.pluck(t[0].values, "key"), i.unshift("series"), o = l.map(t, function (t) {
					var e;
					return e = l.pluck(t.values, "value"),
					e.unshift(t.name),
					e
				})) : (i = ["Step", "Number of Users"], o = l.map(t, function (t) {
					return [t.key, t.value]
				})),
				o.unshift(i),
				{
					data: o
				}
			},
			e.formatRespDataList = function (t, n, r) {
				var i, o, a, c, s;
				return i = function (t) {
					return l.chain(e.fields).pick(t).values().flatten().pluck("data").value()
				},
				c = i(["pageview", "session"]),
				s = i("session"),
				a = function (t) {
					return l.chain(t).filter(function (t) {
						return null != t.pageview_id
					}).groupBy("pageview_id").map(function (t) {
						var e;
						return e = l.findWhere(t, {
							object: "pageview"
						}),
						e || (e = l.pick(t[0], c), e.time = l.min(l.pluck(t, "time")), e.event_id = l.uniqueId("000000000")),
						e.events = t.filter(function (t) {
							return "pageview" !== t.object
						}),
						null == e.pageview_time && (e.pageview_time = l.min(l.pluck(e.events, "time"))),
						e
					}).value()
				},
				o = function (t) {
					var e;
					return "server" === t[0].library ? {
						serverSideEvent: !0,
						pageviews: t.map(function (t) {
							return l.omit(t, "session_id")
						})
					}: (e = l.findWhere(t, {
						object: "session"
					}), null == e && (e = l.pick(t[0], s)), e.pageviews = a(t), e)
				},
				l.chain(t).each(function (t) {
					return t.sessions = l.chain(t.events).filter(function (t) {
						return null != t.session_id
					}).groupBy("session_id").map(o).filter(function (t) {
						return t.pageviews.length
					}).value(),
					delete t.events
				}).filter(function (t) {
					return t.sessions.length
				}).sortBy(function (t) {
					return - t.lastseen
				}).value(),
				"csv" === n ? e.formatRespDataListCSV(t, n, r) : t
			},
			e.formatRespDataListCSV = function (t) {
				var e, n, r, i;
				return n = l.chain(t).map(function (t) {
					return l.pick(t, l.isString)
				}).map(l.keys).flatten().uniq().value(),
				e = l.chain(t).pluck("properties").map(l.keys).flatten().uniq().value(),
				r = n.concat(e),
				i = l.map(t, function (t) {
					var r, i, o, a, c, s, u, l;
					for (o = [], a = 0, s = n.length; s > a; a++) i = n[a],
					o.push(t[i]);
					for (c = 0, u = e.length; u > c; c++) r = e[c],
					o.push(null != (l = t.properties[r]) ? l: "");
					return o
				}),
				{
					data: [r].concat(i)
				}
			},
			e.formatRespDataBar = function (t, n, r, i) {
				return e.regroupAgg(t, n, r, i).map(function (t) {
					var e;
					return e = l.reduce(t.values, function (t, e) {
						return t + e.count
					},
					0),
					{
						key: t.name,
						value: e
					}
				})
			},
			e.formatRespDataAgg = function (t, n, r, i) {
				var o, a, s, u;
				return u = e.setupTimeSeries(r.over),
				s = u.group,
				a = u.emptySeries,
				o = function (t) {
					var e, n, i, o, u, p, f;
					for (e = l.values(a).map(l.clone), n = l.object(l.keys(a), e), u = 0, p = t.length; p > u; u++) i = t[u],
					o = c.adjustToLocalTimezone(i.time, r.over.offset),
					null != (f = n[s( + o)]) && (f.count += +i.count);
					return l.chain(n).pairs().sortBy(function (t) {
						return t[1].time
					}).map(function (t) {
						return {
							key: t[1].name,
							value: t[1].count
						}
					}).value()
				},
				t = i ? e.regroupAgg(t, n, r, i).map(function (t) {
					return {
						name: t.name,
						values: o(t.values)
					}
				}) : [{
					name: " ",
					values: o(t)
				}],
				"csv" === n ? e.formatRespDataAggCSV(t, n, r, i) : "table" === n ? e.formatRespDataAggTable(t, n, r, i) : t
			},
			e.formatRespDataAggTable = function (t, e, n, i) {
				var o, a, c, s, u, p, f;
				return o = null != (p = null != (f = t[0]) ? f.values: void 0) ? p: [],
				a = r.computeFormatX(l.pluck(o, "key")),
				i ? (c = l.map(o, function (t) {
					return a(t.key)
				}), c.unshift(""), s = l.pluck(t, "name"), u = l.map(t, function (t) {
					return l.pluck(t.values, "value")
				})) : (c = ["Date", "Amount"], s = l.map(o, function (t) {
					return a(t.key)
				}), u = l.map(o, function (t) {
					return [t.value]
				})),
				{
					headers: c,
					rowNames: s,
					rows: u
				}
			},
			e.formatRespDataAggCSV = function (t, e, n, i) {
				var o, a, c, s, u, p;
				return o = null != (u = null != (p = t[0]) ? p.values: void 0) ? u: [],
				a = r.computeFormatX(l.pluck(o, "key")),
				i ? (c = l.map(o, function (t) {
					return a(t.key)
				}), c.unshift("series"), s = l.map(t, function (t) {
					var e;
					return e = l.pluck(t.values, "value"),
					e.unshift(t.name),
					e
				})) : (c = ["Date", "Amount"], s = l.map(o, function (t) {
					return [a(t.key), t.value]
				})),
				s.unshift(c),
				{
					data: s
				}
			},
			e.formatRespDataRetentionCSV = function (t) {
				var e, n;
				return e = ["Segment", "Users"].concat(t.headers),
				n = t.map(function (t) {
					return l.flatten([t.name, t.total, t.percents])
				}),
				n.unshift(e),
				{
					data: n
				}
			},
			e.formatRespDataRetention = function (t, r, i, a) {
				var s, p, f, h, d, M, g, b, m, v, A, y;
				if (null == a) throw Error("Retention data must be grouped.");
				return d = t.length ? t[0].counts.length - 2 : 0,
				M = new o(i),
				M.isDateBasedRetention() && (v = M.getAbsoluteRange(), g = v.start, m = v.stop, b = v.step, h = function (t) {
					var e;
					return "None" === t[a] ? "None": (e = c.adjustToLocalTimezone(u(t[a]), i.over.offset), Math.max( + e, g))
				},
				f = l.groupBy(t, h), s = e.timeIntervals({
					start: g,
					stop: m,
					step: b
				},
				{
					isIsoWeek: !0,
					isExclusive: !0
				}), l.chain(s).reject(function (t) {
					return f[t]
				}).each(function (e) {
					var n, r;
					return r = {
						counts: function () {
							var t, e, r;
							for (r = [], n = t = 0, e = d + 1; e >= 0 ? e >= t: t >= e; n = e >= 0 ? ++t: --t) r.push(0);
							return r
						} ()
					},
					r[a] = e,
					t.push(r)
				})),
				t = e.regroupRetention(t, r, i, a, {
					dateBasedRetentionGroupFn: h
				}),
				p = null != (A = i.over.retention_buckets) ? A: n.DEFAULT_RETENTION_INTERVALS,
				t.headers = l.flatten([function () {
					y = [];
					for (var t = 0; d >= 0 ? d > t: t > d; d >= 0 ? t++:t--) y.push(t);
					return y
				}.apply(this), d === p - 1 ? ">" + (d - 1) : d]),
				"csv" === r ? e.formatRespDataRetentionCSV(t, r, i, a) : t
			},
			e.regroup = function (t, e, n, r, i, o, a, c, p) {
				var f, h, d, M, g, b, m, v, A, y, z, _, T, O;
				return null == p && (p = {}),
				A = null != (z = p.sortField) ? z: r,
				M = function () {
					if (null != (_ = n.over.group_limit)) return _;
					switch (e) {
					case "csv":
						return 1e3;
					case "retention":
						return p.dateBasedRetentionGroupFn ? 372 : 50;
					case "table":
					case "multifunnel":
						return 50;
					default:
						return 10
					}
				} (),
				"count" === (null != (T = n.by) ? T.fn: void 0) ? (g = l.chain(t).sortBy(r).pluck(r).uniq(!0).first(M - 2).last().value(), o = function (t) {
					return + t[A].replace(/(>|<)/g, "")
				},
				a = function (t) {
					return t[r] > g ? ">" + g: t[r]
				}) : p.dateBasedRetentionGroupFn ? (o = function (t) {
					return + u(new Date( + t[A]))
				},
				a = p.dateBasedRetentionGroupFn, c = null) : (null != (O = n.by) ? O.custom: void 0) && this.isNumericData(t, r) && t.length > M ? (f = l.pluck(t, r).map(function (t) {
					return + t
				}), v = s.scale.quantile().domain(f).range(function () {
					var t, e;
					for (e = [], d = t = 0; M >= 0 ? M >= t: t >= M; d = M >= 0 ? ++t: --t) e.push(d);
					return e
				} ()), m = v.quantiles().map(Math.ceil), o = function (t) {
					return + t[A].replace(/(>=|<)/g, "").split(" - ")[0]
				},
				a = function (t) {
					var e, n, i, o;
					return n = v( + t[r]),
					o = m.slice(n - 1, +n + 1 || 9e9),
					e = o[0],
					i = o[1],
					e ? i ? e === i - 1 ? "" + e: "" + e + " - " + (i - 1) : ">=" + l.last(m) : "<" + m[0]
				}) : (h = l.findWhere(l.flatten(l.values(this.fields)), {
					data: r
				}), (null != h ? h.sort: void 0) && (o = function (t) {
					return h.sort(t[A])
				}), (null != h ? h.render: void 0) && (a = function (t) {
					return h.render(t[r])
				})),
				b = l.find(t, function (t) {
					return t.isOther
				}),
				b && (t = l.without(t, b), delete b.isOther),
				t = l.chain(t).groupBy(a).map(i).sortBy(o).value(),
				M < t.length && !b && (b = "function" == typeof c ? c(l.rest(t, M)) : void 0),
				y = l.first(t, M),
				b && y.push(b),
				y
			},
			e.regroupFunnel = function (t, e, n, r) {
				var i, o, a, c, s;
				return i = r,
				c = function (t) {
					return - l.max(l.values(l.omit(t, r)))
				},
				o = function (t) {
					return function (e, n) {
						var i;
						return i = e.map(function (t) {
							var e, n;
							return l.object(function () {
								var i;
								i = [];
								for (e in t) n = t[e],
								e !== r && i.push([e, +n]);
								return i
							} ())
						}).reduce(t.sumObjects),
						i[r] = n,
						i
					}
				} (this),
				a = function (t) {
					return o(t, "Other")
				},
				t = this.regroup(t, e, n, r, o, c, i, a),
				(null != t ? t.length: void 0) ? (s = l.extend({},
				l.reduce(t, this.sumObjects)), s[r] = "TOTAL", t.unshift(s), t) : []
			},
			e.regroupAgg = function (t, e, n, r) {
				var i, o, a, c;
				return i = r,
				c = function (t) {
					return function (e) {
						return - l.pluck(e.values, "count").reduce(t.sumValues)
					}
				} (this),
				o = function (t) {
					return function (e, n) {
						return {
							name: n,
							values: l.chain(e).groupBy("time").map(t.flattenTime).value()
						}
					}
				} (this),
				a = function (t) {
					return function (e) {
						return {
							name: "Other",
							values: l.chain(e).pluck("values").flatten().groupBy("time").map(t.flattenTime).value()
						}
					}
				} (this),
				this.regroup(t, e, n, r, o, c, i, a, {
					sortField: "name"
				})
			},
			e.regroupRetention = function (t, e, n, r, i) {
				var o, a, c, s, u;
				return null == i && (i = {}),
				u = function (t, e) {
					return 0 === t ? "0.00": (100 * e / t).toFixed(2)
				},
				o = r,
				s = function (t) {
					return - t.total
				},
				a = function (t) {
					return function (e, n) {
						var r, i, o;
						return e = l.pluck(e, "counts").map(function (t) {
							return t.map(function (t) {
								return + t
							})
						}),
						i = e.map(l.first).reduce(t.sumValues),
						o = e.map(l.rest).reduce(t.sumArrays),
						r = o.map(l.partial(u, i)),
						{
							name: n,
							percents: r,
							total: i,
							values: o
						}
					}
				} (this),
				c = function (t) {
					return function (e) {
						var n, r, i;
						return r = l.pluck(e, "total").reduce(t.sumValues),
						i = l.pluck(e, "values").reduce(t.sumArrays),
						n = i.map(l.partial(u, r)),
						{
							name: "Other",
							percents: n,
							total: r,
							values: i
						}
					}
				} (this),
				l.extend(i, {
					sortField: "name"
				}),
				this.regroup(t, e, n, r, a, s, o, c, i)
			},
			e.setupTimeSeries = function (t) {
				var e, n, r, i, o, a, s, p;
				return a = t.start,
				p = t.stop,
				s = t.step,
				0 > a && (p || (p = +u().add(1, "day").startOf("day")), a += p),
				o = this.intervalName(s),
				n = "hour" === o ? "hour": "day",
				p = +u(p).subtract(1, n),
				i = function (t) {
					var e;
					switch (e = u(t), o) {
					case "month":
					case "week":
						return "" + e.get(o) + " " + e.year();
					case "day":
						return "" + e.dayOfYear() + " " + e.year();
					case "hour":
						return e.format("DDD h A YY")
					}
				},
				r = function (t) {
					switch (o) {
					case "month":
					case "week":
						return c.formatAsRange(t, a, p, o);
					case "day":
					case "hour":
						return new Date(t)
					}
				},
				e = l.chain(this.timeIntervals({
					start: a,
					stop: p,
					step: s
				})).map(function (t) {
					return [i(t), {
						name: r(t),
						count: 0,
						time: t
					}]
				}).object().value(),
				{
					emptySeries: e,
					group: i
				}
			},
			e.sumValues = function (t, e) {
				return t + e
			},
			e.sumObjects = function (t, e) {
				var n, r;
				return l.object(function () {
					var i;
					i = [];
					for (n in t) r = t[n],
					i.push([n, r + e[n]]);
					return i
				} ())
			},
			e.sumArrays = function (t, e) {
				var n, r, i, o, a;
				for (a = [], n = i = 0, o = e.length; o > i; n = ++i) r = e[n],
				a.push(r + t[n]);
				return a
			},
			e.isNumericData = function (t, e) {
				return l.chain(t).pluck(e).every(function (t) {
					return ( + t).toString() === t
				}).value()
			},
			e.flattenTime = function (t) {
				var e;
				return e = l.reduce(t, function (t, e) {
					return t + +e.count
				},
				0),
				l.extend({},
				t[0], {
					count: e
				})
			},
			e.intervalName = function (t) {
				switch (!1) {
				case ! (t <= +u.duration(1, "hour")) : return "hour";
				case ! (t <= +u.duration(1, "day")) : return "day";
				case ! (t <= +u.duration(1, "week")) : return "week";
				case ! (t <= +u.duration(1, "month")) : return "month";
				default:
					throw Error("Couldn't find interval for length: " + t + ".")
				}
			},
			e.timeIntervals = function (t, e) {
				var n, r, i, o, a, c, s, l, p, f, h;
				for (s = t.start, p = t.stop, l = t.step, h = null != e ? e: {},
				i = h.isExclusive, o = h.isIsoWeek, c = [], r = this.intervalName(l), a = "week" === r && o ? "isoWeek": r, f = u(i ? p - 1 : p).startOf(a), n = u(s).startOf(a); f.diff(n) >= 0;) c.push( + n),
				n.add(1, r);
				return c
			},
			e
		} ()
	},
	{}],
	12 : [function (t, e) {
		var n, r, i, o, a, c, s, u;
		u = t(99),
		a = t(101),
		n = t(2),
		r = t(3),
		o = t(26),
		c = function (t, e) {
			var n, r, i, o, a;
			for (a = [], n = i = 0, o = e.length; o > i; n = ++i) r = e[n],
			a.push(r + t[n]);
			return a
		},
		s = u.curry(function (t, e) {
			return 0 === t ? "0.00": (100 * e / t).toFixed(2)
		}),
		e.exports = i = function () {
			function e() {}
			return e.fields = t(7),
			e.funnelCumulativeLabel = "TOTAL",
			e.formatQueryResponse = function (t, e) {
				switch (t.meta.queryType) {
				case "graph":
					return this.formatGraphResponse(t, e);
				case "funnel":
					return this.formatFunnelResponse(t, e);
				case "user_list":
				case "singleuser":
					return this.formatUserListResponse(t);
				case "retention":
					return this.formatRetentionResponse(t);
				default:
					throw Error("Unknown query type " + t.meta.queryType)
				}
			},
			e.groupLabel = function (t, e) {
				switch (t.type) {
				case "field":
					return null != e ? e: "None";
				case "agg":
					switch (t.fn) {
					case "hasdone":
						return "" + (e ? "Has": "Has not") + " done " + t.label;
					case "cohort":
						return "" + (e ? "In": "Not in") + " " + t.label;
					case "count":
						return e;
					default:
						throw Error("groupLabel: unrecognized agg fn " + t.fn)
					}
					break;
				case "multi":
					return t.multiLabels[e];
				default:
					throw Error("groupLabel: unrecognized group by type " + t.type)
				}
			},
			e.timeLabel = function (t, e, n, r) {
				switch (t) {
				case "month":
				case "week":
					return o.formatInterval(e, n, r, t);
				case "day":
				case "hour":
					return a(e).toDate();
				default:
					throw Error("Unrecognized interval: " + t)
				}
			},
			e.formatGraphResponse = function (t) {
				var n, r, i, c, s, l;
				return c = o.intervalForStep(t.meta.over.step),
				s = a.tz(t.meta.over.start, t.meta.timeZone),
				n = function () {
					switch (c) {
					case "hour":
						return "hour";
					default:
						return "day"
					}
				} (),
				l = a.tz(t.meta.over.stop, t.meta.timeZone).subtract(1, n),
				r = function (n) {
					return u(n).map(function (n) {
						var r, i;
						return r = n.time,
						i = n.value,
						{
							key: e.timeLabel(c, a.tz(r, t.meta.timeZone), s, l),
							value: i
						}
					}).value()
				},
				t.meta.group ? (i = u.extend({},
				t.meta.group, {
					multiLabels: t.meta.labels
				}), u(t.data).map(function (t) {
					var n, o;
					return n = t.group,
					o = t.values,
					{
						name: e.groupLabel(i, n),
						values: r(o)
					}
				}).sortBy(function (t) {
					var e;
					return e = t.values,
					-u(e).pluck("value").sum()
				}).value()) : [{
					name: " ",
					values: r(t.data)
				}]
			},
			e.formatFunnelResponse = function (t) {
				var n, r, i;
				return r = function (e) {
					var n, r, i, o, a, c, s;
					for (a = u.zip(t.meta.labels, e), s = [], i = 0, o = a.length; o > i; i++) c = a[i],
					n = c[0],
					r = c[1],
					s.push({
						key: n,
						value: r
					});
					return s
				},
				t.meta.group ? (n = u(t.data).pluck("values").reduce(c), i = "count" === t.meta.group.fn ?
				function (t) {
					var e;
					return e = t.name,
					+e
				}: function (t) {
					var e;
					return e = t.values,
					-(null != e ? e[0].value: void 0)
				},
				u(t.data).map(function (n) {
					var i, o;
					return i = n.key,
					o = n.values,
					{
						name: e.groupLabel(t.meta.group, i),
						values: r(o)
					}
				}).sortBy(i).unshift({
					name: e.funnelCumulativeLabel,
					values: r(n)
				}).value()) : r(t.data)
			},
			e.formatUserListResponse = function (t) {
				var e, r, i, o, a;
				return e = function (t) {
					return function (e) {
						return u(t.fields).pick(e).values().flatten().pluck("data").concat("time").value()
					}
				} (this),
				o = e(["pageview", "session"]),
				a = e("session"),
				i = function (t, e) {
					var n;
					return n = function (e) {
						var n, r;
						return r = u.sortBy(e, "time"),
						n = u.clone(u.findWhere(r, {
							object: "pageview"
						})),
						null == n && (n = u.pick(r[0], o), n.object = "pageview", n.event_id = u.uniqueId("000000000")),
						n.pageview_time = n.time,
						n.session_time = t.time,
						n.events = u(r).filter(function (t) {
							return "pageview" !== t.object
						}).each(function (e) {
							return e.pageview_time = n.time,
							e.session_time = t.time
						}).value(),
						n
					},
					u(e).filter(function (t) {
						return null != t.pageview_id
					}).groupBy("pageview_id").map(n).value()
				},
				r = function (t) {
					var e;
					return "server" === t[0].library ? {
						serverSideEvent: !0,
						pageviews: t.map(function (t) {
							return u.omit(t, "session_id")
						})
					}: (e = u.findWhere(t, {
						object: "session"
					}), null == e && (e = u.pick(t[0], a), e.object = "session"), e.session_time = e.time, e.pageviews = i(e, t), e)
				},
				u(t.data).each(function (t) {
					var e, i, o;
					return null != t.id && (o = n.parse(t.id), i = o.userId, e = o.appId, delete t.id, t.app_id = e, t.user_id = i),
					t.sessions = u(t.events).filter(function (t) {
						return null != t.session_id
					}).groupBy("session_id").map(r).filter(function (t) {
						return t.pageviews.length
					}).value(),
					delete t.events
				}).filter(function (t) {
					return t.sessions.length
				}).sortBy(function (t) {
					return - t.lastseen
				}).value()
			},
			e.formatRetentionResponse = function (t) {
				var e, n, i, o, a, c, l, p;
				return i = t.data.length ? t.data[0].values.length - 2 : 0,
				a = function () {
					var e, r, i, a, p;
					for (i = t.data, p = [], e = 0, r = i.length; r > e; e++) a = i[e],
					n = a.key,
					l = a.values,
					c = u.first(l),
					o = u.rest(l),
					p.push({
						name: n,
						total: c,
						values: o,
						percents: o.map(s(c))
					});
					return p
				} (),
				e = r.DEFAULT_RETENTION_INTERVALS,
				a.headers = u.flatten([function () {
					p = [];
					for (var t = 0; i >= 0 ? i > t: t > i; i >= 0 ? t++:t--) p.push(t);
					return p
				}.apply(this), i === e - 1 ? ">" + (i - 1) : i]),
				a
			},
			e
		} ()
	},
	{}],
	13 : [function (t, e) {
		var n, r, i;
		i = t(105),
		r = t(103),
		e.exports = n = function () {
			function t() {}
			return t.cohortTimeConstraints = [{
				label: "at any time",
				data: 0,
				id: ""
			},
			{
				label: "in prior day",
				data: +r.duration(1, "day"),
				id: "day"
			},
			{
				label: "in prior week",
				data: +r.duration(1, "week"),
				id: "week"
			},
			{
				label: "in prior month",
				data: +r.duration(1, "month"),
				id: "month"
			}],
			t.closestTimePeriod = function (t, e) {
				var n, r, i;
				for (r = 0, i = t.length; i > r; r++) if (n = t[r], n.data >= e) return n;
				return {}
			},
			t.closestCohortTimePeriod = i.partial(t.closestTimePeriod, t.cohortTimeConstraints),
			t
		} ()
	},
	{}],
	14 : [function (t, e) {
		e.exports = [{
			data: "pageview",
			label: "View page",
			target: "Path, e.g. /login or /user/*/home.",
			library: "web"
		},
		{
			data: "click",
			target: "CSS selector",
			library: "web"
		},
		{
			data: "submit",
			target: "CSS selector",
			library: "web"
		},
		{
			data: "change",
			target: "CSS selector",
			library: "web"
		},
		{
			data: "screenview",
			label: "View screen",
			target: "View controller name",
			library: "ios"
		},
		{
			data: "selector",
			label: "Action method...",
			target: "Action method name",
			library: "ios"
		},
		{
			data: "touch",
			target: "Target view ivar",
			library: "ios"
		},
		{
			data: "fieldedit",
			label: "Edit field...",
			target: "Target field ivar",
			library: "ios"
		},
		{
			data: "combo",
			label: "Event combo..."
		}]
	},
	{}],
	15 : [function (t, e) {
		var n, r, i, o, a, c, s, u = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		},
		l = {}.hasOwnProperty,
		p = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) l.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		s = t(105),
		n = t(88),
		c = t(103),
		r = t(25),
		i = t(35),
		a = t(26),
		e.exports = o = function (t) {
			function e() {
				return this.execute = u(this.execute, this),
				this.buildQueryForPreviousTimeSpan = u(this.buildQueryForPreviousTimeSpan, this),
				this._referencedSymbolIdsWhere = u(this._referencedSymbolIdsWhere, this),
				e.__super__.constructor.apply(this, arguments)
			}
			return p(e, t),
			e.prototype.url = "/api/query",
			e.prototype.defaults = function () {
				return {
					where: {
						and: []
					}
				}
			},
			e.prototype.getType = function () {
				var t;
				return null != (t = this.get("main")) ? t.type: void 0
			},
			e.prototype.getAbsoluteRange = function () {
				var t, e, n, r;
				return r = this.get("over"),
				t = r.start,
				n = r.stop,
				e = r.step,
				n || (n = +c().add(1, "day").startOf("day")),
				0 > t && (t += n),
				{
					start: t,
					stop: n,
					step: e
				}
			},
			e.prototype.getMainSymbolIds = function () {
				var t, e, n, i;
				return t = this.get("main"),
				null == t ? [] : s.chain(null != (e = t.combo) ? e: [null != (n = t.id) ? n: null != (i = t.property) ? i.id: void 0]).map(r.factory).compact().filter(function (t) {
					return "symbol" === t.type()
				}).map(function (t) {
					return t.id()
				}).value()
			},
			e.prototype.getAggSymbolId = function () {
				var t, e, n;
				return e = this.get("main"),
				"agg" === (null != e ? e.type: void 0) && "object" === (null != (n = e.property) ? n.type: void 0) && (t = r.factory(e.property.id), "symbol" === t.type()) ? t.id() : void 0
			},
			e.prototype.addFunnel = function (t, e) {
				var n, r;
				return (null != (r = this.attributes.main) ? r.events: void 0) || this.set("main", {
					type: "funnel",
					events: []
				}),
				n = this.attributes.main.events,
				n.splice(e, 1, t)
			},
			e.prototype.foldWhere = function () {
				var t, e, n, r, i, o, a, c, u, l;
				for (n = ["type", "target", "path", "selector", "library"], t = function () {
					var t, r, i;
					for (i = [], t = 0, r = n.length; r > t; t++) e = n[t],
					i.push(this.attributes[e]);
					return i
				}.call(this), this.attributes.where = (null != (o = this.attributes.where) && null != (a = o.and) ? a.length: void 0) > 0 ? {
					and: s.compact(this.attributes.where.and.concat(t))
				}: (null != (c = this.attributes.where) && null != (u = c.or) ? u.length: void 0) > 0 ? {
					and: s.compact([{
						or: this.attributes.where.or
					}].concat(t))
				}: {
					and: s.compact(t)
				},
				l = [], r = 0, i = n.length; i > r; r++) e = n[r],
				l.push(delete this.attributes[e]);
				return l
			},
			e.prototype.setEventTarget = function (t, e) {
				return t ? "ios" === e ? this.setEventTargetiOS(t) : this.setEventTargetWeb(t) : void 0
			},
			e.prototype.setEventTargetWeb = function (t) {
				return this.set("target", {
					scalar: {
						type: "field",
						name: "hierarchy"
					},
					op: "hier",
					val: t
				})
			},
			e.prototype.setEventTargetiOS = function (t) {
				return this.set("target", {
					scalar: {
						type: "field",
						name: "target_ivar"
					},
					op: "=",
					val: t
				})
			},
			e.prototype.setEventType = function (t) {
				return this.set("type", {
					scalar: {
						type: "field",
						name: "type"
					},
					op: "=",
					val: t
				})
			},
			e.prototype.setPath = function (t, e) {
				var n, r;
				return n = "ios" === e ? "view_controller": "path",
				r = t.indexOf("*") > -1 ? "matches": "=",
				this.set("path", {
					scalar: {
						type: "field",
						name: n
					},
					op: r,
					val: t
				})
			},
			e.prototype.setSelector = function (t) {
				return this.set("selector", {
					scalar: {
						type: "field",
						name: "target_selector"
					},
					op: "=",
					val: t
				})
			},
			e.prototype.setLibrary = function (t) {
				return this.set("library", {
					scalar: {
						type: "field",
						name: "library"
					},
					op: "=",
					val: t
				})
			},
			e.prototype.setSnapshot = function (t) {
				return this.set("snapshot", t)
			},
			e.prototype.setSample = function (t) {
				var e;
				return e = s.extend({
					sample: t
				},
				this.get("over")),
				this.set("over", e)
			},
			e.prototype.setTime = function (t) {
				var e;
				return e = c().add(1, "days").startOf("day"),
				this.set("over", {
					start: c(e).subtract(t, "days") - e,
					step: +c.duration(1, "days"),
					stop: +e,
					offset: c().zone()
				})
			},
			e.prototype.setRelativeTime = function (t, e) {
				return this.set("over", {
					start: -t,
					step: +e,
					stop: +c().add(1, "days").startOf("day"),
					offset: c().zone()
				})
			},
			e.prototype.toSymbolObject = function () {
				var t, e, n;
				return t = s.chain(this.attributes).pairs().filter(function (t) {
					return t[1]
				}).reject(function (t) {
					var e;
					return 0 === (null != (e = t[1].and) ? e.length: void 0)
				}).object().value(),
				t.query = s.object(function () {
					var r;
					r = [];
					for (e in t) n = t[e],
					("main" === e || "by" === e || "where" === e || "over" === e) && r.push([e, n]);
					return r
				} ()),
				t
			},
			e.prototype.isDateBasedRetention = function () {
				var t, e;
				return "retention" === this.getType() && ("first_date" === (t = null != (e = this.get("by")) ? e.fn: void 0) || "first_date_in_range" === t)
			},
			e.prototype.referencedSymbolIds = function (t) {
				var e, n, i, o, a;
				return o = this.attributes,
				e = o.main,
				i = o.where,
				n = r.factoryPair("symbol", e.id).symbol(t),
				s.chain([null != n && null != (a = n.get("query")) ? a.where: void 0, i]).map(this._referencedSymbolIdsWhere).flatten().compact().uniq().value()
			},
			e.prototype.referencedSymbolNames = function (t) {
				return this.referencedSymbolIds(t).map(function (e) {
					return t.get(e).get("name")
				})
			},
			e.prototype._referencedSymbolIdsWhere = function (t) {
				var e, n, i, o;
				if (!t) return [];
				if (e = null != (i = t.and) ? i: t.or) return s.chain(e).map(this._referencedSymbolIdsWhere).flatten().uniq().value();
				if ("agg" !== (null != (o = t.scalar) ? o.type: void 0) || "object" !== t.scalar.property.type) return [];
				switch (n = r.factory(t.scalar.property.id), n.type()) {
				case "symbol":
					return [n.id()];
				default:
					return []
				}
			},
			e.prototype.buildQueryForPreviousTimeSpan = function () {
				var t, e, n, r, i;
				return e = this.clone(),
				n = e.get("over"),
				r = c(n.start),
				i = c(n.stop),
				t = r.diff(i),
				r.subtract(t),
				i.subtract(t),
				e.set("over", {
					start: r,
					stop: i,
					step: n.step,
					unique: n.unique
				}),
				e
			},
			e.prototype.execute = function (t) {
				var e, n, r, o, c;
				return c = null != t ? t: {},
				o = c.url,
				r = c.success,
				n = c.error,
				e = c.complete,
				i.featureFlagEnabled(window.router.envId, i.Features.QE2) && (o = "/api/query_normalized"),
				$.ajax({
					url: null != o ? o: this.url,
					type: "POST",
					data: {
						query: this.attributes,
						timezone: a.localTimezoneName()
					},
					success: r,
					error: n,
					complete: e
				})
			},
			e
		} (n.Model)
	},
	{}],
	16 : [function (t, e) {
		var n, r, i, o = {}.hasOwnProperty,
		a = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) o.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		i = t(105),
		r = t(23),
		e.exports = n = function (e) {
			function n() {
				return n.__super__.constructor.apply(this, arguments)
			}
			return a(n, e),
			n.prototype.className = "heap-onboarding-checklist",
			n.prototype.template = t(19),
			n.prototype.events = {
				"click .heap-onboarding-checklist-dismiss": "skipOnboarding"
			},
			n.prototype.initialize = function (t) {
				this.labels = t.labels
			},
			n.prototype.getRenderData = function () {
				return {
					completed: i.every(this.labels, i.property("complete")),
					labels: this.labels,
					next: i.find(i.keys(this.labels), function (t) {
						return function (e) {
							return ! t.labels[e].complete
						}
					} (this))
				}
			},
			n.prototype.skipOnboarding = function (t) {
				return t.preventDefault(),
				this.trigger("skip")
			},
			n
		} (r)
	},
	{}],
	17 : [function (t, e, n) {
		var r, i, o, a;
		r = t(98),
		a = t(105),
		o = t(20)(),
		i = {
			event: {
				label: function (t) {
					return 1 === t ? "Define 1 More Event": "Define 2 Events " + (t ? "": "(0/2)")
				},
				steps: [{
					selector: ".visualizer",
					startOn: "open_visualizer",
					pointing: "right",
					offset: {
						x: 20
					}
				},
				{
					selector: ".define.event .part:eq(1)",
					startOn: "open_event",
					offset: {
						x: -170
					}
				},
				{
					selector: ".heap-mode-control",
					startOn: "start_event_ev",
					pointing: "top",
					offset: {
						x: -16,
						y: 6
					}
				},
				{
					selector: ".define.event .part:eq(1)",
					startOn: "define_first_event",
					offset: {
						x: -120
					}
				},
				{
					selector: ".heap-dropdown.heap-symbols",
					startOn: "define_first_event_ev",
					pointing: "top"
				},
				{
					selector: ".event.gesture:eq(0)",
					startOn: "define_first_event_ios_ev",
					pointing: "left"
				}]
			},
			segment: {
				beaconLabel: "segment",
				label: "Define a User Segment",
				steps: [{
					selector: "#symbol-name",
					startOn: "open_segment",
					beaconSelector: ".define.cohort.workspace .part:eq(0) .btn-toolbar",
					beaconPosition: {
						left: "58%"
					},
					offset: {
						x: 100
					}
				},
				{
					selector: ".define.cohort.workspace .where-part",
					startOn: "start_segment",
					beaconSelector: ".define.cohort.workspace .execute.btn",
					beaconPosition: {
						left: "6%"
					},
					offset: {
						x: -100
					}
				}]
			},
			funnel: {
				beaconLabel: "funnel",
				label: "Track Conversion with a Funnel",
				steps: [{
					selector: ".funnel-part .btn-group",
					startOn: "open_funnel",
					beaconSelector: ".funnel-part .btn-group",
					beaconPosition: {
						left: "52%"
					},
					offset: {
						x: 350
					}
				},
				{
					selector: ".addpart.group-by",
					startOn: "start_funnel",
					beaconSelector: ".workspace .execute.btn",
					beaconPosition: {
						left: "6%"
					},
					offset: {
						x: 320
					}
				}]
			},
			list: {
				beaconLabel: "list",
				label: "See User Activity in the List View",
				steps: [{
					selector: ".part .btn-toolbar",
					startOn: "run_list",
					beaconSelector: ".session-container:eq(0)",
					beaconPosition: {
						top: "14px",
						left: "0px"
					}
				},
				{
					selector: ".session-container:not(.collapsed)",
					startOn: "expand_session",
					pointing: "right"
				}]
			},
			graph: {
				beaconLabel: "graph",
				label: "Visualize Trends with a Graph",
				steps: [{
					selector: ".graph-part .btn-toolbar",
					startOn: "open_graph",
					beaconSelector: ".workspace .execute.btn",
					beaconPosition: {
						left: "6%"
					},
					offset: {
						x: 350
					}
				},
				{
					selector: ".btn.save-report",
					startOn: "done_graph",
					pointing: "right",
					beaconSelector: ".btn.save-report",
					beaconPosition: {
						left: "6%"
					}
				}]
			}
		},
		n.generate = function (t, e) {
			return null == e && (e = []),
			a.chain(i).omit(e).each(function (e, n) {
				return i[n].steps = a.map(e.steps, function (e) {
					var n;
					return n = r(o).find("#" + e.startOn),
					n.find("li").remove("[class][class!='" + t + "']"),
					a.extend(e, {
						html: n.html()
					})
				})
			}).value()
		}
	},
	{}],
	18 : [function (t, e) {
		var n, r, i, o, a, c, s, u = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		},
		l = {}.hasOwnProperty,
		p = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) l.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		s = t(105),
		r = t(27),
		i = t(16),
		c = t(17),
		a = t(22),
		e.exports = o = function (t) {
			function e() {
				return this._updateState = u(this._updateState, this),
				this._skip = u(this._skip, this),
				this._setState = u(this._setState, this),
				e.__super__.constructor.apply(this, arguments)
			}
			return p(e, t),
			e.prototype.initialize = function (t) {
				var e;
				return this.eventCenter = t.eventCenter,
				this.libraries = t.libraries,
				this.omitItems = t.omitItems,
				this.state = t.state,
				this.library = s.chain(null != (e = this.libraries) ? e: ["web"]).intersection(["web", "ios"]).sort().first().value(),
				this.config = c.generate(this.library, this.omitItems),
				this.state || this._fetchState(),
				this.listenTo(this.eventCenter, "onboarding", this._updateState)
			},
			e.prototype.render = function () {
				return this.isIncomplete() && this._renderChecklist(),
				this
			},
			e.prototype.isIncomplete = function () {
				return s.some(this.config, function (t) {
					return function (e, n) {
						return t.state[n] !== !0
					}
				} (this))
			},
			e.prototype._setState = function (t, e) {
				return this.state[t] = e,
				this._saveState(t)
			},
			e.prototype._skip = function () {
				var t, e;
				for (t in this.config) this.state[t] = !0;
				return this._saveState(),
				null != (e = this.checklistView) ? e.remove() : void 0
			},
			e.prototype._updateState = function (t, e, n) {
				var r, i, o;
				return null == n && (n = !0),
				null != (o = this.tooltipView) && o.remove(),
				i = this.config[t],
				i && this.state[t] !== !0 ? (("event" !== t || n >= 2) && (n = !0), "finish" === e ? this._setState(t, n) : e ? (r = s.findWhere(i.steps, {
					startOn: e
				}), this._renderTooltip(t, r)) : void 0) : void 0
			},
			e.prototype._renderChecklist = function (t) {
				var e, r;
				return e = s.chain(this.config).map(function (e) {
					return function (n, r) {
						var i, o;
						return i = n.label,
						o = e.state[r],
						s.isFunction(i) && (i = i(o)),
						[i, {
							complete: o === !0,
							changed: r === t
						}]
					}
				} (this)).object().value(),
				null != (r = this.checklistView) && r.remove(),
				this.checklistView = new i({
					labels: e
				}),
				this.checklistView.on("skip", this._skip),
				n("body").append(this.checklistView.render().el),
				this._addBeacon()
			},
			e.prototype._renderTooltip = function (t, e) {
				var r;
				return r = n(e.selector),
				r && t === this._firstIncompleteTask() ? (this.tooltipView = new a({
					$target: r,
					html: e.html,
					offset: e.offset,
					pointing: e.pointing,
					task: t,
					onTop: this._isEV()
				}), this.tooltipView.on("skip", this._skip), n("body").append(this.tooltipView.render().el), this._addBeacon(e.beaconSelector, e.beaconPosition)) : void 0
			},
			e.prototype._addBeacon = function (t, e) {
				var r, i, o;
				return null == e && (e = {}),
				this._isEV() ? void 0 : (o = s.chain(n(".onboarding-beacon")).partition(this._typeForSidebarElem).map(n).value(), r = o[0], i = o[1], this._updateBeacon(r), i.remove(), n(t).append(this._newBeacon()).find(".onboarding-beacon").css(e))
			},
			e.prototype._updateBeacon = function (t) {
				var e, r, i;
				return r = this._firstIncompleteTask(),
				e = null != (i = this.config[r]) ? i.beaconLabel: void 0,
				this._typeForSidebarElem(t) !== e && (t.remove(), e) ? n("[data-type=" + r + "]").append(this._newBeacon()) : void 0
			},
			e.prototype._isEV = function () {
				return "https://heapanalytics.com" !== window.location.origin
			},
			e.prototype._firstIncompleteTask = function () {
				return s.find(s.keys(this.config), function (t) {
					return function (e) {
						return t.state[e] !== !0
					}
				} (this))
			},
			e.prototype._typeForSidebarElem = function (t) {
				return n(t).parent().attr("data-type")
			},
			e.prototype._newBeacon = function () {
				return n("<span/>", {
					"class": "onboarding-beacon"
				})
			},
			e.prototype._saveState = function (t) {
				var e;
				return null != (e = this.tooltipView) && e.remove(),
				this._renderChecklist(t),
				this._requestState("POST")
			},
			e.prototype._fetchState = function () {
				return this.state = {},
				this._requestState("GET", function (t) {
					return function (e) {
						return t.state = e,
						t.render(),
						t.eventCenter.trigger("onboarding", "event", "start_event_ev")
					}
				} (this))
			},
			e.prototype._requestState = function (t, e) {
				return n.ajax({
					url: "https://heapanalytics.com/api/onboarding",
					type: t,
					data: {
						state: JSON.stringify(this.state)
					},
					crossDomain: this._isEV(),
					xhrFields: {
						withCredentials: this._isEV()
					},
					success: e
				})
			},
			e
		} (r)
	},
	{}],
	19 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) {
				if (__p += "<div class='heap-onboarding-checklist-header'>\n  <div class='heap-onboarding-checklist-header-logo'></div>\n  <div class='heap-onboarding-checklist-header-title'>\n    Getting Started\n  </div>\n  <a class='heap-onboarding-checklist-dismiss' href='#'>Ã—</a>\n</div>\n<div class='heap-onboarding-checklist-contents'>\n  ", completed) __p += "\n    <p class='heap-onboarding-checklist-large'>You've completed the tour of Heap!</p>\n    <p>To get even more out of Heap, you can:\n      <ul>\n        <li>Identify your users with the <a href='/docs/custom-api#identify' target='_blank'>identify API</a>.</li>\n        <li>Track custom events with our <a href='/docs/custom-api#track' target='_blank'>client API</a> or <a href='/docs/server-side' target='_blank'>server API</a>.</li>\n        <li><a class='heap-onboarding-invite-teammates' href='#settings-modal' data-toggle='modal'>Invite teammates</a> to your account.</li>\n      </ul>\n    </p>\n    <p>Have any questions? Interested in a more in-depth, one-on-one walkthrough? <a href='javascript:void(0)' class='btn-feedback' data-dismiss='modal'>Just let us know</a>.</p>\n  ";
				else {
					__p += "\n    <ol>\n      ";
					for (var key in labels) __p += "\n        <li class='" + (null == (__t = labels[key].complete ? "item-complete": "") ? "": _.escape(__t)) + "\n          " + (null == (__t = labels[key].complete && labels[key].changed ? "item-complete-animate": "") ? "": _.escape(__t)) + "\n          " + (null == (__t = key === next ? "item-next": "") ? "": _.escape(__t)) + "'>\n          " + (null == (__t = key) ? "": _.escape(__t)) + "\n        </li>\n      ";
					__p += "\n    </ol>\n  "
				}
				__p += "\n</div>\n"
			}
			return __p
		}
	},
	{}],
	20 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div>\n  <!-- When user opens the Visualizer view. -->\n  <div id='open_visualizer'>\n    <ul>\n      <li class='web'>\n        To get started, you'll <strong>use the Event Visualizer to define events</strong>. The Event Visualizer makes setting up analytics as simple as clicking around your site.\n      </li>\n      <li class='ios'>\n        To get started, you'll <strong>use the Event Visualizer to define events</strong>. The Event Visualizer makes setting up analytics as simple as tapping around your iOS app.\n      </li>\n      <li>\n        <strong>Events</strong> are the building blocks of analysis in Heap. They represent an action a user takes in your product, such as \"Sign Up\", \"Enter Payment Info\", or \"Add Item to Cart\".\n      </li>\n      <li>\n        The best part? You don't need to write code to track these events. Since Heap captures user interactions automatically, you'll be defining most events directly from your dashboard.\n      </li>\n      <li>\n        <strong>Just follow the directions on the right</strong> to start.\n        <br>\n        Alternatively, if you need more fine-grained control in defining events, click \"Events\" in the sidebar.\n      </li>\n    </ul>\n  </div>\n  <!-- When user opens the Define Event view. -->\n  <div id='open_event'>\n    <ul>\n      <li>\n        You can use the Events view for more fine-grained control in defining events. Defining events manually requires a bit of technical knowledge, but can be very powerful.\n      </li>\n      <li class='web'>\n        For websites, you can define an event in terms of an interaction on a CSS selector, or a specific pageview.\n      </li>\n      <li class='ios'>\n        For iOS apps, you can define an event in terms of an action method, a gesture on a UIView, or a view controller appearing.\n      </li>\n      <li class='web'>\n        There are many attributes you can use to further pinpoint events of interest: the page on which an event happened, target button text, pushState events (for single-page web apps), and more.\n      </li>\n      <li class='ios'>\n        There are many attributes you can use to further pinpoint events of interest: the view controller on which an event happened, target button text, accessibility labels, instance variable names, and more.\n      </li>\n      <li>\n        Select an event type, add filters, then <strong>click Define Event.</strong> Don't worry about defining it perfectly! You can always come back later and modify the event. Your edits will be applied retroactively, meaning any reports with the event will be auto-updated.\n      </li>\n    </ul>\n  </div>\n  <!-- When user launches the web Event Visualizer. -->\n  <div id='start_event_ev'>\n    <ul>\n      <li>\n        There are two modes in the Event Visualizer: <em>definition mode</em> and <em>normal mode</em>. In definition mode, you can define an event by performing the corresponding action yourself.\n      </li>\n      <li>\n        If you need to temporarily disable the visualizer and navigate to another section of your site, you can switch to normal mode.\n        <br>\n        Try defining an event now. All you need to do is <strong>click anywhere on your page!</strong>\n      </li>\n    </ul>\n  </div>\n  <!-- When user defines their first event. -->\n  <div id='define_first_event'>\n    <ul>\n      <li>\n        Congratulations - you just defined your first event! In order to do any interesting analysis, though, we'll need at least two events. Click \"New Definition\" and then <strong>define another event.</strong>\n      </li>\n    </ul>\n  </div>\n  <div id='define_first_event_ev'>\n    <ul>\n      <li>\n        Congratulations - you just defined your first event! In order to do any interesting analysis, though, we'll need at least two events. Click on a different element to <strong>define another event.</strong>\n      </li>\n    </ul>\n  </div>\n  <div id='define_first_event_ios_ev'>\n    <ul>\n      <li>\n        Congratulations - you just defined your first event! In order to do any interesting analysis, though, we'll need at least two events. Click on a different action to <strong>define another event.</strong>\n      </li>\n    </ul>\n  </div>\n  <!-- When user opens the Define Event view. -->\n  <div id='open_segment'>\n    <ul>\n      <li>\n        <strong>Segments</strong> are simply a subset of your users. For example, you can define a \"Monthly Active Users\" segment as all users who've reviewed an item or made a purchase in the prior month.\n      </li>\n      <li>\n        Once a segment is defined, you can list all the users within it, graph the growth of the segment over time, or restrict a report to just the segment's users.\n      </li>\n      <li>\n        To start, <strong>enter a segment name</strong>.\n      </li>\n    </ul>\n  </div>\n  <!-- When user starts defining a segment by giving it a name. -->\n  <div id='start_segment'>\n    <ul>\n      <li>\n        To define a segment, you can add filters for user-level properties such as Country or Platform, or filter by whether a user has performed a certain event.\n      </li>\n      <li>\n        You can also filter based on <em>when</em> a user has performed an event (e.g. during the prior month), or the number of times they've performed it (e.g. at least two times).\n      </li>\n      <li>\n        Add some user-level filters, and then <strong>click Define Segment</strong>.\n      </li>\n    </ul>\n  </div>\n  <!-- When user opens the Analyze Funnel view. -->\n  <div id='open_funnel'>\n    <ul>\n      <li>\n        <strong>Funnels</strong> let you visualize how users progress through a sequence of events. You can use them to measure conversion rates and understand where users drop-off in your product.\n      </li>\n      <!-- :TODO: (matin): Ideally, this would be displayed alongside a live funnel viz. -->\n      <li>\n        Each funnel step counts the number of <em>unique users</em> that completed the step, after having done all the previous steps. To be counted, a user must have completed the funnel steps within the time range and in the specified order.\n      </li>\n      <li>\n        <strong>Add at least two events</strong> to start building a funnel. Select an event from the dropdown, then click + to add a second event.\n      </li>\n    </ul>\n  </div>\n  <!-- When user adds 2 steps to the funnel. -->\n  <div id='start_funnel'>\n    <ul>\n      <li class='web'>\n        You'll notice a new control: the \"Group By\" button. This lets you split out a funnel into separate user segments. For instance, grouping a funnel by Initial Referrer lets you compare conversion rates from different traffic sources.\n      </li>\n      <li class='ios'>\n        You'll notice a new control: the \"Group By\" button. This lets you split out a funnel into separate user segments. For instance, grouping a funnel by Device lets you compare conversion rates on different devices.\n      </li>\n      <li>\n        Choose a user property to group by, and then <strong>run your first funnel query!</strong>\n      </li>\n    </ul>\n  </div>\n  <!-- When user opens the Analyze List view. -->\n  <div id='run_list'>\n    <ul>\n      <li>\n        The <strong>List</strong> view lets you filter for users and see every single action they've taken. You can use it to identify high-value customers or just explore the paths users take through your product.\n      </li>\n      <li class='web'>\n        Users are displayed alongside a list of their most recent sessions. Each one contains a summary of the specific events the user performed during the session.\n        <br>\n        <strong>Click on a session below</strong> to inspect it further.\n      </li>\n      <li class='ios'>\n        Users are displayed alongside a list of their most recent sessions. Each one contains a summary of the specific events the user performed during the session.\n        <br>\n        <strong>Click on a session below</strong> to inspect it further.\n      </li>\n    </ul>\n  </div>\n  <!-- When user expands a session. -->\n  <div id='expand_session'>\n    <ul>\n      <li class='web'>\n        Upon expanding a session, you'll see a timeline of every single event a user performed during the session.\n      </li>\n      <li class='ios'>\n        Upon expanding a session, you'll see a timeline of every single event a user performed during the session.\n      </li>\n      <li>\n        Clicking an event lets you highlight matching events, inspect the event's properties, and even define the event inline.\n        <br>\n        <strong>Click on an event</strong> to try it out.\n      </li>\n    </ul>\n  </div>\n  <!-- When user opens the Analyze Graph view. -->\n  <div id='open_graph'>\n    <ul>\n      <li>\n        <strong>Graphs</strong> are a powerful way to visualize trends in your metrics. You can choose multiple events and plot their frequencies over time. Or you can select a user segment and measure its growth.\n      </li>\n      <li>\n        Filters and groups work much like they do in funnels. And once you've run a query, you can fine-tune the date range, granularity, and visualization type as needed.\n      </li>\n      <li>\n        Select at least one event and <strong>run your first graph query!</strong>\n      </li>\n    </ul>\n  </div>\n  <!-- When user finishes running a graph query. -->\n  <div id='done_graph'>\n    <ul>\n      <li>\n        Any visualization can be saved as a report. Reports appear in the Reports dropdown above, allowing for quick and easy access. Each report also has a permalink you can share with teammates.\n      </li>\n      <li>\n        <strong>Save your first report.</strong> Don't worry if it's not useful yet. You can always modify or delete reports later.\n      </li>\n    </ul>\n  </div>\n</div>\n";
			return __p
		}
	},
	{}],
	21 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-onboarding-tooltip-contents'>\n  " + (null == (__t = html) ? "": __t) + "\n</div>\n<div class='heap-onboarding-tooltip-control'>\n  <div class='heap-onboarding-tooltip-pages'></div>\n  <a class='heap-onboarding-tooltip-dismiss' href='#'>Skip the Tour</a>\n  <a class='heap-onboarding-tooltip-nextpage' href='#'>Next</a>\n</div>\n";
			return __p
		}
	},
	{}],
	22 : [function (t, e) {
		var n, r, i, o, a, c = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		},
		s = {}.hasOwnProperty,
		u = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) s.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		a = t(105),
		n = t(98),
		r = t(88),
		o = t(23),
		e.exports = i = function (e) {
			function i() {
				return this._renderPage = c(this._renderPage, this),
				i.__super__.constructor.apply(this, arguments)
			}
			return u(i, e),
			i.prototype.className = "heap-onboarding-tooltip",
			i.prototype.template = t(21),
			i.prototype.events = {
				"click .heap-onboarding-tooltip-dismiss": "skipTour",
				"click .heap-onboarding-tooltip-nextpage": "nextPage",
				"click .heap-onboarding-tooltip-page-marker": "setPage"
			},
			i.prototype.ARROW_MARGIN = 15,
			i.prototype.PAGE_MARKER_CLASS = "heap-onboarding-tooltip-page-marker",
			i.prototype.initialize = function (t) {
				switch (this.$target = t.$target, this.html = t.html, this.offset = t.offset, this.pointing = t.pointing, this.task = t.task, this.onTop = t.onTop, this.offset = a.extend({
					x: 0,
					y: 0
				},
				this.offset), this.tooltipState = new r.Model({
					page: 0
				}), this.tooltipState.on("change", this._renderPage), this.x = this.$target.offset().left + this.offset.x, this.pointing) {
				case "right":
					this.x -= 360;
					break;
				case "bottom":
				case "top":
					this.x += (this.$target.outerWidth() - 300 - 60) / 2;
					break;
				default:
					this.x += this.$target.outerWidth()
				}
				switch (this.y = this.$target.offset().top + this.offset.y, this.pointing) {
				case "top":
					return this.y += this.$target.outerHeight();
				case "bottom":
					return this.y -= 260;
				default:
					return this.y -= this.ARROW_MARGIN
				}
			},
			i.prototype.getRenderData = function () {
				return {
					html: this.html
				}
			},
			i.prototype.render = function () {
				var t, e, r, o, a, c, s;
				if (i.__super__.render.call(this), c = [this.x, this.y, this.onTop], r = c[0], o = c[1], e = c[2], this.$el.addClass(this.pointing ? "heap-onboarding-tooltip-arrow-" + this.pointing: void 0).attr("data-task", this.task).each(function () {
					return this.style.setProperty("left", "" + r + "px", "important"),
					this.style.setProperty("top", "" + o + "px", "important"),
					e ? this.style.setProperty("z-index", 2147483646, "important") : void 0
				}), this._numPages() > 1) for (t = a = 0, s = this._numPages(); s >= 0 ? s > a: a > s; t = s >= 0 ? ++a: --a) this.$(".heap-onboarding-tooltip-pages").append(n("<div/>", {
					"class": this.PAGE_MARKER_CLASS
				}));
				return this._renderPage(),
				this
			},
			i.prototype.skipTour = function (t) {
				return t.preventDefault(),
				this.trigger("skip")
			},
			i.prototype.nextPage = function (t) {
				var e;
				return t.preventDefault(),
				e = this.tooltipState.get("page"),
				e === this._numPages() - 1 ? this.remove() : this.tooltipState.set("page", ++e)
			},
			i.prototype.setPage = function (t) {
				var e;
				return e = this._markers().index(n(t.currentTarget)),
				this.tooltipState.set("page", e)
			},
			i.prototype._renderPage = function () {
				var t, e;
				return e = this.tooltipState.get("page"),
				t = e === this._numPages() - 1,
				this.$(".heap-onboarding-tooltip-nextpage").text(t ? "Got It": "Next"),
				this._pages().each(function (t) {
					return this.style.setProperty("display", t === e ? "list-item": "none", "important")
				}),
				this._markers().removeClass("" + this.PAGE_MARKER_CLASS + "-active").eq(e).addClass("" + this.PAGE_MARKER_CLASS + "-active")
			},
			i.prototype._pages = function () {
				return this.$("li")
			},
			i.prototype._numPages = function () {
				return this._pages().length
			},
			i.prototype._markers = function () {
				return this.$("." + this.PAGE_MARKER_CLASS)
			},
			i
		} (o)
	},
	{}],
	23 : [function (t, e) {
		var n, r, i, o = {}.hasOwnProperty,
		a = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) o.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		r = t(27),
		e.exports = i = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return a(e, t),
			e.prototype.render = function () {
				return e.__super__.render.call(this),
				this.$el.find("*").each(function () {
					var t, e, r;
					return t = n(this),
					e = null != (r = t.attr("class")) ? r: "",
					t.attr("class", "heap-" + t.prop("tagName").toLowerCase() + " " + e)
				}),
				this
			},
			e
		} (r)
	},
	{}],
	24 : [function (t, e) {
		var n, r, i, o;
		o = t(105),
		r = t(90),
		i = t(103),
		e.exports = n = function () {
			function t() {}
			return t.capitalize = function (t, e) {
				var n;
				return null == t && (t = ""),
				n = function (t) {
					return t.slice(0, 1).toUpperCase() + t.slice(1)
				},
				e ? n(t) : t.split(" ").map(n).join(" ")
			},
			t.computeFormatX = function (t) {
				var e, n;
				return o.isDate(t[0]) ? (n = t[0], e = t[t.length - 1], r.time.format((e - n) / ( + i.duration(1, "hours") * t.length) < 2 ? "%b %d, %I %p": "%b %d")) : o.identity
			},
			t.matchGesture = function (t) {
				var e;
				return null != t && null != (e = t.match(/UI(.*?)(Gesture|Recognizer)/)) ? e[1] : void 0
			},
			t.typeToStr = function (e) {
				var n;
				return null != (n = t.matchGesture(e)) ? n: t.capitalize(e)
			},
			t.pluralize = function (e, n, r, i) {
				var o;
				return null == r && (r = "" + n + "s"),
				o = i ? t.formatApproximateNumber: t.numberWithCommas,
				o(e) + " " + (1 === e ? n: r)
			},
			t.numberWithCommas = function (t) {
				return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			},
			t.formatApproximateNumber = function (e) {
				return e >= 1e9 ? "" + (e / 1e9).toFixed(1) + "B": e >= 1e8 ? "" + (e / 1e6).toFixed(0) + "M": e >= 1e6 ? "" + (e / 1e6).toFixed(1) + "M": e >= 1e5 ? "" + (e / 1e3).toFixed(0) + "K": e >= 1e4 ? "" + (e / 1e3).toFixed(1) + "K": t.numberWithCommas(Math.floor(e))
			},
			t.truncateStr = function (t, e) {
				return null == t && (t = ""),
				t.length <= e ? t: "" + t.slice(0, e) + "..."
			},
			t.deepCopy = function (t) {
				var e;
				return e = o.isArray(t) ? [] : {},
				$.extend(!0, e, t)
			},
			t.sortCaseInsensitive = function (t) {
				return o.sortBy(t, function (t) {
					return t.toLowerCase()
				})
			},
			t.isSingle = function (t) {
				return " " === t[0].name
			},
			t.collectionFromJSON = function (t, e) {
				return new t(e.map(function (e) {
					return new t.prototype.model(e, {
						parse: !0
					})
				}))
			},
			t.selectElement = function (t) {
				var e;
				return document.selection ? (e = document.body.createTextRange(), e.moveToElementText(t), e.select()) : window.getSelection ? (e = document.createRange(), e.selectNode(t), window.getSelection().addRange(e)) : void 0
			},
			t
		} ()
	},
	{}],
	25 : [function (t, e) {
		e.exports = t(106)
	},
	{}],
	26 : [function (t, e, n) {
		var r, i, o;
		o = t(99),
		r = t(103),
		n.timezoneNames = i = [[ - 660, -660, "Pacific/Midway", "Midway Island, Samoa"], [ - 600, -600, "Pacific/Tahiti", "Tahiti"], [ - 570, -570, "Pacific/Marquesas", "Marquesas Islands"], [ - 540, -600, "America/Adak", "Aleutian Islands"], [ - 540, -540, "Pacific/Gambier", "Gambier Islands"], [ - 480, -540, "America/Anchorage", "Alaska"], [ - 480, -480, "Pacific/Pitcairn", "Pitcairn Islands"], [ - 420, -480, "America/Los_Angeles", "Pacific Time (US & Canada)"], [ - 420, -420, "America/Phoenix", "Arizona"], [ - 360, -420, "America/Denver", "Mountain Time (US & Canada)"], [ - 360, -360, "America/Guatemala", "Central America"], [ - 360, -300, "Pacific/Easter", "Easter Island"], [ - 300, -360, "America/Chicago", "Central Time (US & Canada)"], [ - 300, -300, "America/Bogota", "Bogota, Lima, Quito, Rio Branco"], [ - 240, -300, "America/New_York", "Eastern Time (US & Canada)"], [ - 270, -270, "America/Caracas", "Caracas, La Paz"], [ - 240, -180, "America/Santiago", "Santiago"], [ - 180, -240, "America/Halifax", "Atlantic Time (Canada)"], [ - 180, -180, "America/Montevideo", "Montevideo"], [ - 180, -120, "America/Sao_Paulo", "Brasilia"], [ - 150, -210, "America/St_Johns", "Newfoundland"], [ - 120, -180, "America/Godthab", "Greenland"], [ - 120, -120, "America/Noronha", "Fernando de Noronha"], [ - 60, -60, "Atlantic/Cape_Verde", "Cape Verde Islands"], [0, -60, "Atlantic/Azores", "Azores"], [0, 0, "Etc/UTC", "Iceland, Western Africa"], [60, 0, "Europe/London", "Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London"], [60, 60, "Africa/Algiers", "Algeria"], [60, 120, "Africa/Windhoek", "Windhoek"], [120, 60, "Europe/Amsterdam", "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"], [120, 120, "Africa/Harare", "Harare, Pretoria"], [180, 120, "Europe/Athens", "Athens, Bucharest, Istanbul"], [180, 180, "Africa/Nairobi", "Nairobi"], [240, 180, "Europe/Moscow", "Moscow, St. Petersburg, Volgograd"], [240, 240, "Asia/Dubai", "Abu Dhabi, Muscat"], [270, 210, "Asia/Tehran", "Tehran"], [270, 270, "Asia/Kabul", "Kabul"], [300, 240, "Asia/Baku", "Baku"], [300, 300, "Asia/Karachi", "Islamabad, Karachi, Tashkent"], [330, 330, "Asia/Kolkata", "Chennai, Kolkata, Mumbai, New Delhi"], [345, 345, "Asia/Kathmandu", "Kathmandu"], [360, 300, "Asia/Yekaterinburg", "Yekaterinburg"], [360, 360, "Asia/Colombo", "Sri Jayawardenapura"], [390, 390, "Asia/Rangoon", "Yangon (Rangoon)"], [420, 360, "Asia/Almaty", "Almaty, Novosibirsk"], [420, 420, "Asia/Bangkok", "Bangkok, Hanoi, Jakarta"], [480, 420, "Asia/Krasnoyarsk", "Krasnoyarsk"], [480, 480, "Australia/Perth", "Perth"], [540, 480, "Asia/Irkutsk", "Irkutsk, Ulaan Bataar"], [540, 540, "Asia/Tokyo", "Osaka, Sapporo, Tokyo"], [570, 570, "Australia/Darwin", "Darwin"], [570, 630, "Australia/Adelaide", "Adelaide"], [600, 540, "Asia/Yakutsk", "Yakutsk"], [600, 600, "Australia/Brisbane", "Brisbane"], [600, 660, "Australia/Sydney", "Canberra, Melbourne, Sydney"], [630, 660, "Australia/Lord_Howe", "Lord Howe"], [660, 600, "Asia/Vladivostok", "Vladivostok"], [660, 660, "Pacific/Guadalcanal", "Solomon Islands"], [690, 690, "Pacific/Norfolk", "Norfolk Island"], [720, 660, "Asia/Magadan", "Magadan, Kamchatka"], [720, 720, "Pacific/Fiji", "Fiji, Marshall Islands"], [720, 780, "Pacific/Auckland", "Auckland, Wellington"], [765, 825, "Pacific/Chatham", "Chatham Islands"], [780, 780, "Pacific/Enderbury", "Canton and Enderbury Islands"], [840, 840, "Pacific/Kiritimati", "Kiritimati"]],
		n.formatAsRange = function (t, e, n, i, o) {
			var a, c, s, u, l, p, f;
			return null == o && (o = {}),
			null == o.includeYear && (o.includeYear = r(n).year() !== r(e).year()),
			"week" === i && o.isIsoWeek && (i = "isoWeek"),
			c = r( + t),
			l = Math.max( + c.startOf(i), e),
			s = Math.min( + c.endOf(i), n),
			f = [r(l), r(s)],
			p = f[0],
			u = f[1],
			null == o.includeMonth && (o.includeMonth = p.month() !== u.month()),
			l === s ? "" + p.format("MMM D") + ", " + p.year() : (a = "" + p.format("MMM D") + " - ", o.includeMonth && (a += u.format("MMM ")), a += u.format("D"), o.includeYear && (a += ", " + u.format("YYYY")), a)
		},
		n.formatInterval = function (t, e, n, i, a) {
			var c, s;
			return null == a && (a = {}),
			s = r.max(t.clone().startOf(i), e),
			c = r.min(t.clone().endOf(i), n),
			a = o.defaults(a, {
				includeYear: n.year() !== e.year(),
				includeMonth: s.month() !== c.month()
			}),
			s.isSame(c) ? "" + s.format("MMM D") + ", " + s.year() : ["" + s.format("MMM D") + " - ", a.includeMonth ? c.format("MMM ") : void 0, c.format("D"), a.includeYear ? ", " + c.format("YYYY") : void 0].join("")
		},
		n.adjustToLocalTimezone = function (t, e) {
			var n, i, o, a;
			return a = r.parseZone(t).zone() - e,
			o = r(t).subtract(a, "minutes"),
			n = r().isDST(),
			i = o.isDST(),
			n && !i ? o.add(60, "minutes") : !n && i && o.subtract(60, "minutes"),
			o
		},
		n.localTimezoneName = function () {
			var t, e, n, r, a, c;
			return e = -new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0)).getTimezoneOffset(),
			r = -new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0)).getTimezoneOffset(),
			n = o.find(i, function (t) {
				var n, i;
				return n = t[0],
				i = t[1],
				n === e && i === r
			}),
			null != n ? n[2] : (t = ["Could not determine time zone name user.", {
				tags: {
					time: (new Date).toISOString(),
					offset: (new Date).getTimezoneOffset()
				}
			}], (null != (a = window.Raven) ? a.captureMessage: void 0) ? (c = window.Raven).captureMessage.apply(c, t) : console.warn.apply(console, t), "America/Los_Angeles")
		},
		n.intervalForStep = function (t, e) {
			var n;
			switch (n = r.duration, !1) {
			case ! (t <= n(1, "hour")) : return "hour";
			case ! (n(1, "hour") < t && t <= n(1, "day")) : return "day";
			case ! (n(1, "day") < t && t <= n(1, "week")) : return "" + (e ? "iso": "") + "week";
			case ! (n(1, "week") < t && t <= n(31, "days")) : return "month";
			default:
				throw Error("Unrecognized stepSize " + t)
			}
		},
		n.isValidTimezone = function (t) {
			return o.any(i, {
				2 : t
			})
		}
	},
	{}],
	27 : [function (t, e) {
		var n, r, i, o = {}.hasOwnProperty,
		a = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) o.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		i = t(105),
		r = t(84),
		e.exports = n = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return a(e, t),
			e.prototype.getChildren = function () {
				return null != this._children ? this._children: this._children = []
			},
			e.prototype.setChildren = function (t) {
				var e;
				return e = i.difference(this._children, t),
				i.invoke(e, "remove"),
				this._children = t
			},
			e.prototype.addChildView = function (t) {
				return this.getChildren().push(t),
				t
			},
			e.prototype.getRenderData = function () {
				return {}
			},
			e.prototype.render = function () {
				return this.$el.html(this.template(this.getRenderData())),
				this
			},
			e.prototype.remove = function () {
				return i.invoke(this.getChildren(), "remove"),
				e.__super__.remove.call(this)
			},
			e
		} (r.View)
	},
	{}],
	28 : [function (t, e) {
		e.exports = t(27)
	},
	{}],
	29 : [function (t, e) {
		var n, r, i, o, a, c = {}.hasOwnProperty,
		s = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) c.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		a = t(105),
		i = t(9),
		r = t(28),
		e.exports = o = function (e) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return s(r, e),
			r.prototype.className = "btn-group",
			r.prototype.events = {
				"click li.leaf": "updateData",
				"click li.dropdown-submenu.no-args": "updateData"
			},
			r.prototype.template = t(30),
			r.prototype.buttonTemplate = t(31),
			r.prototype.menuTemplate = t(32),
			r.prototype.submenuTemplate = t(33),
			r.prototype.initialize = function (t) {
				var e, n, r;
				return null == t && (t = {}),
				this.fields = t.fields,
				this.data = t.data,
				this.emptyText = t.emptyText,
				this.buttonClasses = t.buttonClasses,
				this.noArgs = null != (e = a.findWhere(this.fields, {
					data: null != (n = this.data) ? n.agg: void 0
				})) ? e.noArguments: void 0,
				(null != (r = this.data) ? r.field: void 0) || this.noArgs || (this.data = {
					field: this.data
				}),
				a.each(this.fields, function (t) {
					return t.data = "" + t.data
				}),
				null == this.emptyText && (this.emptyText = "Choose"),
				null == this.buttonClasses && (this.buttonClasses = "btn-small"),
				this.extendData()
			},
			r.prototype.render = function () {
				var t, e, n, r, i, o, c;
				for (this.$el.html(this.template()), n = -1, a.each(this.fields, function (t, e) {
					return t.name ? n = e: void 0
				}), e = [], c = this.fields.slice(0, n + 1), i = 0, o = c.length; o > i; i++) r = c[i],
				e.push(this.submenuTemplate({
					sub: r
				}));
				return n > -1 && e.push("<div class='divider'></div>"),
				t = this.fields.slice(n + 1),
				e.push(this.menuTemplate({
					fields: t
				})),
				this.$("div.dropdown-menu").append(e.join("")),
				0 === this.fields.length && this.$("button").addClass("disabled"),
				this.$("button").addClass(this.buttonClasses),
				this.renderData(),
				this
			},
			r.prototype.updateData = function (t) {
				var e, r, i, o, a, c;
				if ("#" === n(t.currentTarget).find("a").attr("href") && (t.preventDefault(), !this.$(t.currentTarget).hasClass("disabled"))) {
					for (e = n(t.currentTarget).children(), this.data = {},
					c = ["field", "custom", "agg", "name"], o = 0, a = c.length; a > o; o++) r = c[o],
					i = e.attr("data-" + r),
					null != i && (this.data[r] = i);
					return this.extendData(),
					this.trigger("update")
				}
			},
			r.prototype.renderData = function () {
				var t, e;
				return this.noArgs ? t = this.data.agglabel: (t = null != (e = this.data.label) ? e: this.emptyText, this.data.agg && this.data.label && (t = "" + this.data.agglabel.replace(/\./g, "") + " " + t)),
				this.$("button").html(this.buttonTemplate({
					text: t
				})).attr("title", t),
				this.data.label || this.noArgs ? void 0 : this.$("button > span").addClass("muted")
			},
			r.prototype.extendData = function () {
				return a.extend(this.data, this.findField(this.data.field, this.data.custom)),
				this.data.agg ? a.extend(this.data, this.findAgg(this.data.agg)) : void 0
			},
			r.prototype.findField = function (t, e) {
				var n;
				return n = this.fields.filter(function (t) {
					return ! t.fields
				}),
				a.chain(this.fields).pluck("fields").compact().concat(n).flatten().find(function (n) {
					var r;
					return r = n.custom && null != e ? n.custom === "" + e: !0,
					n.data === "" + t && r
				}).value()
			},
			r.prototype.findAgg = function (t) {
				var e;
				return e = a.find(i.Aggregations, function (e) {
					return e.data === t
				}),
				null == e ? {}: {
					agglabel: e.name,
					value: e.value
				}
			},
			r
		} (r)
	},
	{}],
	30 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += '<button class="btn dropdown-toggle" data-toggle="dropdown"></button>\n<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu"></div>\n';
			return __p
		}
	},
	{}],
	31 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<span>" + (null == (__t = text) ? "": _.escape(__t)) + "</span>\n<i class='icon caretdown'></i>\n";
			return __p
		}
	},
	{}],
	32 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) {
				__p += '<ul class="dropdown-menu-scroll">\n  ';
				for (var i = 0; i < fields.length; i++) __p += '\n    <li class="leaf ',
				fields[i].disabled && (__p += " disabled "),
				__p += '">\n      <a tabindex="-1" href="' + (null == (__t = fields[i].href || "#") ? "": _.escape(__t)) + '"\n        data-field="' + (null == (__t = fields[i].data) ? "": _.escape(__t)) + '"\n        data-custom="' + (null == (__t = fields[i].custom) ? "": _.escape(__t)) + '"\n        class="' + (null == (__t = fields[i].icon ? "withicon": "") ? "": _.escape(__t)) + " " + (null == (__t = fields[i].href ? "withlink": "") ? "": _.escape(__t)) + '"\n        title="' + (null == (__t = fields[i].label) ? "": _.escape(__t)) + '">\n        ' + (null == (__t = fields[i].label) ? "": _.escape(__t)) + '\n        <i class="icon ' + (null == (__t = fields[i].icon) ? "": _.escape(__t)) + '"></i>\n      </a>\n    </li>\n  ';
				__p += "\n</ul>\n"
			}
			return __p
		}
	},
	{}],
	33 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) {
				__p += '<ul>\n  <li class="dropdown-submenu ' + (null == (__t = sub.noArguments ? "no-args": "") ? "": _.escape(__t)) + '">\n    <a tabindex="-1" href="#"\n      data-agg="' + (null == (__t = sub.noArguments ? sub.data: "") ? "": _.escape(__t)) + '"\n      data-agglabel="' + (null == (__t = sub.noArguments ? sub.name: "") ? "": _.escape(__t)) + '">\n      ' + (null == (__t = sub.name) ? "": _.escape(__t)) + '\n    </a>\n    <ul class="dropdown-menu dropdown-menu-scroll">\n      ';
				for (var i = 0; i < sub.fields.length; i++) __p += '\n        <li class="leaf ',
				sub.fields[i].disabled && (__p += " disabled "),
				__p += '">\n          <a tabindex="-1" href="#"\n             data-field="' + (null == (__t = sub.fields[i].data) ? "": _.escape(__t)) + '"\n             data-agg="' + (null == (__t = sub.data) ? "": _.escape(__t)) + '"\n             data-agglabel="' + (null == (__t = sub.name) ? "": _.escape(__t)) + '">\n            ' + (null == (__t = sub.fields[i].label) ? "": _.escape(__t)) + "\n          </a>\n        </li>\n      ";
				__p += "\n    </ul>\n  </li>\n</ul>\n"
			}
			return __p
		}
	},
	{}],
	34 : [function (t) { !
		function (t) {
			"use strict";
			function e() {
				t(r).each(function () {
					n(t(this)).removeClass("open")
				})
			}
			function n(e) {
				var n, r = e.attr("data-target");
				return r || (r = e.attr("href"), r = r && /#/.test(r) && r.replace(/.*(?=#[^\s]*$)/, "")),
				n = r && t(r),
				n && n.length || (n = e.parent()),
				n
			}
			var r = "[data-toggle=dropdown]",
			i = function (e) {
				var n = t(e).on("click.dropdown.data-api", this.toggle);
				t("html").on("click.dropdown.data-api", function () {
					n.parent().removeClass("open")
				})
			};
			i.prototype = {
				constructor: i,
				toggle: function () {
					var r, i, o = t(this);
					if (!o.is(".disabled, :disabled")) return r = n(o),
					i = r.hasClass("open"),
					e(),
					i || r.toggleClass("open"),
					o.focus(),
					!1
				},
				keydown: function (e) {
					var i, o, a, c, s;
					if (/(38|40|27)/.test(e.keyCode) && (i = t(this), e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled"))) {
						if (a = n(i), c = a.hasClass("open"), !c || c && 27 == e.keyCode) return 27 == e.which && a.find(r).focus(),
						i.click();
						o = t("[role=menu] li:not(.divider):visible a", a),
						o.length && (s = o.index(o.filter(":focus")), 38 == e.keyCode && s > 0 && s--, 40 == e.keyCode && s < o.length - 1 && s++, ~s || (s = 0), o.eq(s).focus())
					}
				}
			};
			var o = t.fn.dropdown;
			t.fn.dropdown = function (e) {
				return this.each(function () {
					var n = t(this),
					r = n.data("dropdown");
					r || n.data("dropdown", r = new i(this)),
					"string" == typeof e && r[e].call(n)
				})
			},
			t.fn.dropdown.Constructor = i,
			t.fn.dropdown.noConflict = function () {
				return t.fn.dropdown = o,
				this
			},
			t.fn.dropdown.enable = function (n) {
				t(n).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function (t) {
					t.stopPropagation()
				}).on(".dropdown-menu", function (t) {
					t.stopPropagation()
				}).on("click.dropdown.data-api", r, i.prototype.toggle).on("keydown.dropdown.data-api", r + ", [role=menu]", i.prototype.keydown)
			}
		} (t(98))
	},
	{}],
	35 : [function (t, e) {
		var n, r, i, o = [].indexOf ||
		function (t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return - 1
		};
		i = t(99),
		r = t(104),
		e.exports = n = function () {
			function t() {}
			return t.FORCED_ENABLED_FEATURES = "forced_enabled_features",
			t.FORCED_DISABLED_FEATURES = "forced_disabled_features",
			t.Features = {
				DASHBOARD: "dashboard",
				EMAILED_REPORTS: "emailed_reports",
				FIRST_DATE_AGGREGATIONS: "first_date_aggregations",
				FRESH_PAINT: "fresh_paint",
				QE2: "qe2",
				SAMPLING: "sampling",
				SAMPLING_MANDATORY: "sampling_mandatory",
				TIME_ZONES: "time_zones"
			},
			t.featureFlagEnabled = function (e, n) {
				var i, a, c, s, u, l, p;
				if (i = "11", a = "236035469", null != (c = r.get(t.FORCED_ENABLED_FEATURES)) ? c[n] : void 0) return ! 0;
				if (null != (s = r.get(t.FORCED_DISABLED_FEATURES)) ? s[n] : void 0) return ! 1;
				switch (n) {
				case t.Features.DASHBOARD:
					return e === i || e === a;
				case t.Features.EMAILED_REPORTS:
					return e === i || e === a || "3377671278" === e || "3989851015" === e || "2865075391" === e || "359333202" === e || "2076281301" === e || "948379898" === e;
				case t.Features.FIRST_DATE_AGGREGATIONS:
					return e === i || e === a;
				case t.Features.FRESH_PAINT:
					return "free" === (u = "undefined" != typeof window && null !== window && null != (l = window._preloaded) && null != (p = l.appData) ? p.paymentPlan: void 0) || "startup" === u || "growth" === u || e === i || e === a || "3377671278" === e || "3989851015" === e || "2865075391" === e || "359333202" === e || "2076281301" === e || "948379898" === e;
				case t.Features.QE2:
					return o.call([], e) >= 0;
				case t.Features.SAMPLING:
					return e === i || "2495417586" === e || "3183525499" === e || "2300008851" === e || "549213928" === e || "994434072" === e || "1845649449" === e || "3458955194" === e || "1631824435" === e || "1468385363" === e || "301277078" === e || "3902997412" === e || "848089309" === e || "3974426721" === e || "62525193" === e || "185442208" === e || "1646711747" === e || "997778463" === e || "1856189423" === e || "2734638415" === e || "908411473" === e || "2602093906" === e || "1394282863" === e || "546860163" === e || "1714017845" === e;
				case t.Features.SAMPLING_MANDATORY:
					return "3557813517" === e;
				case t.Features.TIME_ZONES:
					return e === i || e === a || "3377671278" === e || "3989851015" === e || "2865075391" === e || "359333202" === e || "2076281301" === e || "948379898" === e;
				default:
					return ! 1
				}
			},
			t.resetFeatures = function () {
				return r.clearAll(),
				"Features have been reset."
			},
			t.enableFeature = function (e) {
				return this._mutateLocalObject(t.FORCED_ENABLED_FEATURES, e, !0),
				this._mutateLocalObject(t.FORCED_DISABLED_FEATURES, e, !1),
				"Feature " + e + " is now enabled permanently."
			},
			t.disableFeature = function (e) {
				return this._mutateLocalObject(t.FORCED_ENABLED_FEATURES, e, !1),
				this._mutateLocalObject(t.FORCED_DISABLED_FEATURES, e, !0),
				"Feature " + e + " is now disabled permanently."
			},
			t._mutateLocalObject = function (t, e, n) {
				var o, a;
				return null == r.get(t) && r.set(t, {}),
				a = {},
				a[e] = n,
				o = i.extend({},
				r.get(t), a),
				r.set(t, o)
			},
			t
		} ()
	},
	{}],
	36 : [function (t, e) {
		function n(t) {
			if (this.options = {
				selector: "*",
				mouseEvents: ["click", "dblclick", "mousedown", "mouseup"],
				usePolyfillIf: function () {
					if ("Microsoft Internet Explorer" == navigator.appName) {
						var t = navigator.userAgent;
						if (null != t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) {
							var e = parseFloat(RegExp.$1);
							if (11 > e) return ! 0
						}
					}
					return ! 1
				}
			},
			t) {
				var e = this;
				r.each(t, function (t, n) {
					e.options[t] = n
				})
			}
			this.options.usePolyfillIf() && this.register_mouse_events()
		}
		var r = t(98);
		n.initialize = function (t) {
			return null == n.singleton && (n.singleton = new n(t)),
			n.singleton
		},
		n.prototype.register_mouse_events = function () {
			r(document).on(this.options.mouseEvents.join(" "), this.options.selector, function (t) {
				if ("none" == r(this).css("pointer-events")) {
					var e = r(this).css("display");
					r(this).css("display", "none");
					var n = document.elementFromPoint(t.clientX, t.clientY);
					return e ? r(this).css("display", e) : r(this).css("display", ""),
					t.target = n,
					r(n).trigger(t),
					!1
				}
				return ! 0
			})
		},
		e.exports = n
	},
	{}],
	37 : [function (t, e, n) {
		var r, i, o, a = {}.hasOwnProperty,
		c = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) a.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		r = t(88),
		i = t(45),
		n.Symbols = o = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return c(e, t),
			e.prototype.model = i.Symbol,
			e.prototype.url = "https://heapanalytics.com/api/symbol",
			e
		} (r.Collection)
	},
	{}],
	38 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='dom-labelled " + (null == (__t = id) ? "": _.escape(__t)) + "'><p>" + (null == (__t = title) ? "": _.escape(__t)) + "</p></div>\n";
			return __p
		}
	},
	{}],
	39 : [function (t, e) {
		var n, r, i, o;
		n = t(98),
		o = t(105),
		i = t(97),
		e.exports = r = function () {
			function e(t, e) {
				this.id = null != t ? t: i(),
				this.css = null != e ? e: {},
				o.defaults(this.css, {
					position: "absolute",
					background: "-webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785), color-stop(100%,#FFC542))",
					border: "1px solid #E3BE23"
				})
			}
			return e.prototype.template = t(38),
			e.prototype.label = function (t, e) {
				var r, i, a, c;
				return c = t.offset(),
				a = this.template({
					id: this.id,
					title: e
				}),
				r = n(a),
				r.appendTo(document.body),
				i = o.defaults(o.clone(this.css), {
					left: c.left,
					top: c.top - r.height() - 4
				}),
				r.css(i)
			},
			e.prototype.clear = function () {
				return n("." + this.id).remove()
			},
			e
		} ()
	},
	{}],
	40 : [function (t, e) {
		var n;
		e.exports = n = function () {
			function t() {}
			return t.LOAD = "properties_listing_load",
			t
		} ()
	},
	{}],
	41 : [function (t, e, n) {
		n.CustomPropertiesEvent = t(40),
		n.TooltipEvent = t(42)
	},
	{}],
	42 : [function (t, e) {
		var n;
		e.exports = n = function () {
			function t() {}
			return t.SNAPSHOT_MODE = {
				ENTER: "tooltip_snapshot_mode_enter",
				EXIT: "tooltip_snapshot_mode_exit"
			},
			t.CLOSE = "tooltip_close",
			t.ERROR = {
				SHOW: "tooltip_error_show"
			},
			t.SWITCH_VIEW = {
				DEFINITION: "tooltip_switch_view_definition",
				PROPERTIES: "tooltip_switch_view_properties"
			},
			t
		} ()
	},
	{}],
	43 : [function (t, e) {
		var n, r, i, o, a, c, s, u, l;
		n = t(98),
		l = t(105),
		a = t(88),
		u = t(97),
		s = t(53),
		o = n(window),
		i = n(document),
		r = n("body"),
		e.exports = c = function () {
			function t(t) {
				this.id = null != t ? t: u()
			}
			return t.prototype.THICK = 2,
			t.prototype.LABEL_PADDING = 6,
			t.prototype.outlineSingle = function (t) {
				return this.fixed ? void 0 : (this.clear(), this.outline(t))
			},
			t.prototype.outlineMulti = function (t, e) {
				var r, i;
				return null == e && (e = {}),
				i = l.bind(this.shade, this),
				r = l.bind(this.label, this),
				this.clear(),
				n(t).each(function () {
					return i(n(this))
				}).each(function () {
					return e.label ? r(n(this), e.label) : void 0
				}),
				this.fixed = !0
			},
			t.prototype.clear = function () {
				return this.fixed = !1,
				n(".heap-outline." + this.id).remove(),
				n(".heap-outline-shade." + this.id).remove(),
				n(".heap-outline-label." + this.id).remove()
			},
			t.prototype.outline = function (t) {
				var e, n, r, i, o, a, c, u;
				return u = s.Display.getDims(t),
				a = u.x,
				c = u.y,
				o = u.w,
				e = u.h,
				t.cssImportant("cursor", "default"),
				r = "IFRAME" === t.prop("tagName"),
				i = {
					isIframe: r,
					fixed: s.Display.isFixed(t)
				},
				this.drawHoverElem("heap-outline", a - this.THICK, c - this.THICK, o + 2 * this.THICK, this.THICK, i),
				this.drawHoverElem("heap-outline", a + o, c - this.THICK, this.THICK, e + 2 * this.THICK, i),
				this.drawHoverElem("heap-outline", a - this.THICK, c + e, o + 2 * this.THICK, this.THICK, i),
				this.drawHoverElem("heap-outline", a - this.THICK, c, this.THICK, e + this.THICK, i),
				n = "Elements inside an iframe can't be targeted with the Event Visualizer.",
				t.attr("src") && (n += " To track items inside an iframe, load the Event Visualizer on the iframe's URL directly: " + t.attr("src") + "."),
				r ? this.label(t, n, {
					title: !0
				}) : void 0
			},
			t.prototype.shade = function (t) {
				var e, n, r, i, o, a;
				return a = s.Display.getDims(t),
				i = a.x,
				o = a.y,
				r = a.w,
				e = a.h,
				n = {
					fixed: s.Display.isFixed(t)
				},
				this.drawHoverElem("heap-outline-shade", i - this.THICK, o - this.THICK, r, e, n)
			},
			t.prototype.label = function (t, e, n) {
				var r, i, o, a, c, u;
				return null == n && (n = {}),
				u = s.Display.getDims(t),
				a = u.x,
				c = u.y,
				o = u.w,
				r = u.h,
				i = {
					fixed: s.Display.isFixed(t),
					padding: this.LABEL_PADDING
				},
				this.drawHoverElem("heap-outline-label", a, c, o, r, i).text(e).attr("title", n.title ? e: void 0)
			},
			t.prototype.drawHoverElem = function (t, e, a, c, u, l) {
				var p, f, h;
				return null == l && (l = {}),
				l.fixed ? (t += " " + t + "-fixed", a -= o.scrollTop()) : "relative" === r.css("position") && (a -= s.Constants.NAV_HEIGHT),
				l.isIframe && (t += " heap-iframe"),
				f = null != (h = l.padding) ? h: 0,
				c = Math.min(c - 2 * f, i.width() - e),
				u = Math.min(u, i.height() - a),
				p = "" + t + " " + this.id,
				n("<div/>", {
					"class": p
				}).cssImportant({
					left: "" + e + "px",
					top: "" + a + "px",
					width: "" + c + "px",
					"max-width": "" + c + "px",
					height: "" + u + "px",
					"max-height": "" + u + "px"
				}).appendTo("body")
			},
			t
		} ()
	},
	{}],
	44 : [function (t) {
		var e, n, r;
		e = t(98),
		r = t(105),
		n = t(53),
		e.fn.cssImportant = function (t, e) {
			return this.each(function () {
				var n, i, o;
				if (r.isObject(t)) {
					o = [];
					for (n in t) i = t[n],
					o.push(this.style.setProperty(n, i, "important"));
					return o
				}
				return this.style.setProperty(t, e, "important")
			})
		},
		e.fn.setUserSelect = function (t) {
			return this.cssImportant({
				"-webkit-user-select": t,
				"-moz-user-select": t,
				"user-select": t
			})
		},
		e.fn.pushDown = function (t) {
			var e, r, i;
			return i = this.css("display"),
			this.hide(),
			r = this.css("top"),
			e = n.Display.increasePixels(r, t),
			e !== r && this.css("top", e),
			this.css("display", i)
		},
		e.fn.cssSelector = function () {
			var t, i, o, a, c, s, u, l, p, f, h, d;
			if (u = this[0], f = u.localName || u.tagName || u.nodeName, !f) return "";
			if (i = e(u), l = i.attr("id"), p = n.Constants.ILLEGAL_ID_REGEXES.filter(function (t) {
				return null != l ? l.match(t) : void 0
			}).length > 0, l && !p) return "#" + l;
			if (c = r.compact(e.trim(i.attr("class")).split(/\s+/)), s = r.size(c) > 0 ? "." + c.join(".") : void 0, d = void 0, o = i.parent(), a = o.children(), h = !1, s && 1 === a.filter(s).length ? d = s: 1 === a.filter(f).length ? d = f: (d = ":nth-child(" + (e(this).index() + 1) + ")", h = !0), !h) {
				for (t = o.parent(); 1 === t.length && 1 === t.find(d).length;) o = t,
				t = t.parent();
				if (0 === t.length) return d
			}
			return "" + o.cssSelector() + (h ? " > ": " ") + d
		}
	},
	{}],
	45 : [function (t, e, n) {
		n.Symbol = t(46)
	},
	{}],
	46 : [function (t, e) {
		var n, r, i, o, a, c = {}.hasOwnProperty,
		s = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) c.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		a = t(99),
		n = t(98),
		r = t(88),
		o = t(53),
		e.exports = i = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return s(e, t),
			e.prototype.urlRoot = "https://heapanalytics.com/api/symbol",
			e.prototype.defaults = function () {
				return {
					query: {
						main: {
							type: "object",
							id: o.EventIdentifier.builtin("event").serialize()
						},
						where: {
							and: []
						},
						library: {
							scalar: {
								type: "field",
								name: "library"
							},
							op: "=",
							val: "web"
						}
					}
				}
			},
			e.prototype.setEventType = function (t) {
				return this.set("type", {
					scalar: {
						type: "field",
						name: "type"
					},
					op: "=",
					val: t
				})
			},
			e.prototype.setEventTarget = function (t) {
				return this.set("target", {
					scalar: {
						type: "field",
						name: "hierarchy"
					},
					op: "hier",
					val: t
				})
			},
			e.prototype.setPath = function (t) {
				var e;
				return e = this.get("query"),
				e.where.and.push({
					scalar: {
						type: "field",
						name: "path"
					},
					op: "=",
					val: t
				}),
				this.set("query", e),
				this._triggerQueryChange()
			},
			e.prototype.setText = function (t) {
				var e;
				return e = this.get("query"),
				e.where.and.push({
					scalar: {
						type: "field",
						name: "target_text"
					},
					op: "contains",
					val: t
				}),
				this.set("query", e),
				this._triggerQueryChange()
			},
			e.prototype.getHref = function () {
				var t, e, n, r;
				return t = null != (n = this.attributes.query) && null != (r = n.where) ? r.and: void 0,
				e = a.find(t, function (t) {
					return "href" === t.scalar.name
				}),
				e ? e.val: null
			},
			e.prototype.setHref = function (t) {
				var e;
				return e = this.get("query"),
				e.where.and.push({
					scalar: {
						type: "field",
						name: "href"
					},
					op: "=",
					val: t
				}),
				this.set("query", e),
				this._triggerQueryChange()
			},
			e.prototype.setSnapshot = function (t) {
				return this.set("snapshot", t)
			},
			e.prototype.getPath = function () {
				var t, e, n;
				return (t = null != (e = this.attributes.query) && null != (n = e.where) ? n.and: void 0) ? a.find(t, function (t) {
					return "path" === t.scalar.name
				}) : void 0
			},
			e.prototype.queryString = function () {
				var t, e, n, r;
				return t = o.Formatting.capitalize(this.attributes.type.val),
				e = this.getTargetSelector({
					noAttrs: !0
				}),
				e && (t += " on " + e),
				n = this.formatClause(null != (r = this.attributes.query) ? r.where: void 0),
				n && (t += ", where " + n),
				t
			},
			e.prototype.getTargetSelector = function (t) {
				var e, n, r, i, c, s, u, l;
				return null == t && (t = {}),
				(i = this.attributes.target) ? (c = function (t) {
					return "target_tag" === t.scalar.name ? t.val: "target_id" === t.scalar.name ? "#" + t.val: "target_class" === t.scalar.name ? "." + t.val.replace(/\s/g, ".").replace(/%/g, "") : void 0
				},
				r = "hier" === i.op ? i.val: a.sortBy(i.and, function (t) {
					return t.scalar.name
				}).reverse().map(c).join(""), n = null != (u = this.attributes.query) && null != (l = u.where) ? l.and: void 0, t.noAttrs || !n ? r: (e = "", s = a.find(n, function (t) {
					return "target_text" === t.scalar.name
				}), s && (e += ":contains(" + o.Formatting.escape(s.val) + ")"), "" + r + e)) : ""
			},
			e.prototype.matchingElements = function () {
				var t, e;
				return t = this.getHref(),
				e = this.getTargetSelector(),
				n(e).filter(function (e, r) {
					return a.isEmpty(t) ? !0 : n(r).parents().add(r).filter("[href=" + o.Formatting.escape(t) + "]").length > 0
				})
			},
			e.prototype.formatClause = function (t) {
				var e, n, r, i, c, s, u;
				if (t) return e = a.keys(t)[0],
				"and" === e || "or" === e ?
				function () {
					var n, r, o, a;
					for (o = t[e], a = [], n = 0, r = o.length; r > n; n++) i = o[n],
					a.push(this.formatClause(i));
					return a
				}.call(this).join(" " + e + " ") : (n = null != (s = t.scalar.name) ? s: t.scalar.property.name, n = o.Formatting.capitalize(a.last(n.split("_"))), r = function () {
					switch (t.op) {
					case "notcontains":
						return "does not contain";
					case "isdef":
						return "is defined";
					case "notdef":
						return "is not defined";
					default:
						return t.op
					}
				} (), c = "isdef" === (u = t.op) || "notdef" === u ? "": t.val, "" + n + " " + r + " " + c)
			},
			e.prototype._triggerQueryChange = function () {
				return this.trigger("change change:query")
			},
			e
		} (r.Model)
	},
	{}],
	47 : [function (t, e) {
		e.exports = {
			ILLEGAL_ID_REGEXES: [/^ember[\d]+/, /^yui_[_\d]+/],
			NAV_HEIGHT: 51,
			WEB_EVENTS: ["change", "click", "submit"]
		}
	},
	{}],
	48 : [function (t, e) {
		var n, r, i;
		n = t(98),
		i = t(105),
		r = t(47),
		e.exports = {
			increasePixels: function (t, e) {
				var n;
				return null == t && (t = ""),
				t.match(/-?\d+(px)?$/) ? "" + ( + (null != (n = t.slice(0, -2)) ? n: 0) + e) + "px": t
			},
			getDims: function (t) {
				return {
					w: t.outerWidth(),
					h: t.outerHeight(),
					x: t.offset().left,
					y: t.offset().top
				}
			},
			toSelector: function (t) {
				var e, o, a, c, s, u, l, p, f;
				p = t.prop("tagName").toLowerCase(),
				c = t.attr("id"),
				s = r.ILLEGAL_ID_REGEXES.filter(function (t) {
					return null != c ? c.match(t) : void 0
				}).length > 0,
				e = i.compact(null != (f = t.attr("class")) ? f.split(" ") : void 0),
				l = p,
				c && !s && (l += "#" + c),
				u = function (t) {
					return t.length ? "" + l + "." + t.join(".") : l
				};
				try {
					a = u(e),
					n(a)
				} catch(h) {
					o = h,
					e = e.filter(this.isValidAttr),
					a = u(e)
				}
				return a
			},
			isFixed: function (t) {
				return t.parents().addBack().filter(function () {
					return "fixed" === n(this).css("position")
				}).length > 0
			},
			isValidAttr: function (t) {
				return /^[\w-]+$/g.test(t)
			}
		}
	},
	{}],
	49 : [function (t, e) {
		var n, r;
		n = t(98),
		r = t(105),
		e.exports = {
			withFocusedSelector: function (t) {
				var e, i, o, a, c;
				return c = null,
				i = null,
				e = function () {
					var t;
					return t = n(document.activeElement),
					c = "input" === t.prop("tagName").toLowerCase() && "text" === t.attr("type") ? r.pick(document.activeElement, "selectionStart", "selectionEnd") : void 0,
					i = n(document.activeElement).cssSelector()
				},
				o = function () {
					return null != c && n(i).prop(c),
					n(i).focus()
				},
				e(),
				a = t(i),
				o(),
				a
			},
			elementValue: function (t) {
				var e;
				switch (e = function (t) {
					var e;
					return null != (e = t.innerText) ? e: t.textContent
				},
				t.tagName.toLowerCase()) {
				case "input":
					switch (t.type) {
					case "checkbox":
						return t.checked;
					case "radio":
						return t.checked;
					default:
						return t.value
					}
					break;
				default:
					return e(t)
				}
			},
			ancestralHref: function (t) {
				var e, r, i;
				for (e = n(t), r = null; e && "BODY" !== (i = e.prop("tagName")) && "HTML" !== i;) {
					if (r = e.attr("href"), null != r) return r;
					e = e.parent()
				}
				return r
			}
		}
	},
	{}],
	50 : [function (t, e) {
		e.exports = t(106)
	},
	{}],
	51 : [function (t, e) {
		e.exports = {
			curPageMatchesPath: function (t) {
				var e, n, r, i;
				if (!t) return ! 0;
				switch (e = document.location.pathname, n = t.op, i = t.val, n) {
				case "=":
					return i === e;
				case "!=":
					return i !== e;
				case "contains":
					return e.indexOf(i) > -1;
				case "notcontains":
					return - 1 === e.indexOf(i);
				case "matches":
					return r = new RegExp(i.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace("*", ".*")),
					null != e.match(r);
				default:
					return ! 0
				}
			}
		}
	},
	{}],
	52 : [function (t, e) {
		e.exports = {
			escape: function (t) {
				return '"' + t.replace(/"/g, '\\"') + '"'
			},
			capitalize: function (t, e) {
				var n;
				return null == t && (t = ""),
				n = function (t) {
					return t.slice(0, 1).toUpperCase() + t.slice(1)
				},
				e ? n(t) : t.split(" ").map(n).join(" ")
			},
			numberWithCommas: function (t) {
				return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			},
			formatApproximateNumber: function (t) {
				return t > 1e9 ? "" + (t / 1e9).toFixed(1) + "B": t > 1e6 ? "" + (t / 1e6).toFixed(1) + "M": t > 1e4 ? "" + (t / 1e3).toFixed(1) + "K": this.numberWithCommas(Math.floor(t))
			}
		}
	},
	{}],
	53 : [function (t, e, n) {
		n.Constants = t(47),
		n.Display = t(48),
		n.EventIdentifier = t(50),
		n.Dom = t(49),
		n.Events = t(51),
		n.Formatting = t(52),
		n.Snapshot = t(54)
	},
	{}],
	54 : [function (t, e) {
		var n, r;
		n = t(98),
		r = t(53),
		e.exports = {
			preview: function (t, e) {
				var i;
				try {
					switch (t) {
					case "selector":
						return r.Dom.elementValue(n(e)[0]);
					case "javascript":
						return eval.call(window, e);
					default:
						throw new Error("PatternMatchError")
					}
				} catch(o) {
					return i = o,
					i.toString()
				}
			}
		}
	},
	{}],
	55 : [function (t, e) {
		var n, r, i, o, a, c, s, u, l, p, f, h, d, M, g = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		},
		b = {}.hasOwnProperty,
		m = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) b.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		M = t(105),
		M = t(107)(M),
		d = t(99),
		r = t(88),
		l = t(84),
		p = t(87),
		o = t(39),
		s = t(41),
		u = t(43),
		f = t(42),
		h = t(53),
		a = t(29),
		c = t(57),
		t(44),
		e.exports = i = function (e) {
			function i() {
				return this.updateProperty = g(this.updateProperty, this),
				this.unHideLoadedSnapshot = g(this.unHideLoadedSnapshot, this),
				this.selectElement = g(this.selectElement, this),
				this.outlineElement = g(this.outlineElement, this),
				this.loadProperty = g(this.loadProperty, this),
				this.initialize = g(this.initialize, this),
				i.__super__.constructor.apply(this, arguments)
			}
			return m(i, e),
			i.prototype.events = {
				"click .heap-tooltip-show-event-definition": "cancel",
				"click .heap-tooltip-create-custom-property": "define",
				"click .heap-tooltip-element-selector": "beginSelectElement",
				"click .heap-tooltip-update-custom-property": "updateProperty"
			},
			i.prototype.modelEvents = {
				change: "render",
				"change:type": function () {
					return "value" in this.model.changedAttributes() ? void 0 : this.model.set("value", null)
				}
			},
			i.prototype.regions = {
				propertyTypeRegion: ".heap-tooltip-property-type-region"
			},
			i.prototype.bindings = {
				".heap-tooltip-property-name": "name",
				".heap-tooltip-property-value": "value"
			},
			i.prototype.template = t(67),
			i.prototype.templateHelpers = function () {
				return {
					isUpdating: function (t) {
						return function () {
							return t.isUpdating()
						}
					} (this),
					label: function () {
						switch (this.type) {
						case "selector":
							return "Element";
						case "javascript":
							return "Script"
						}
					},
					placeholder: function () {
						switch (this.type) {
						case "selector":
							return "DOM element selector";
						case "javascript":
							return "JavaScript expression"
						}
					},
					preview: function () {
						return h.Snapshot.preview(this.type, this.value)
					}
				}
			},
			i.prototype.initialize = function (t) {
				var e;
				return e = t.symbol,
				this.props = {
					symbol: e
				},
				this.model = function () {
					var t;
					return new(t = function (t) {
						function e() {
							return e.__super__.constructor.apply(this, arguments)
						}
						return m(e, t),
						e.prototype.validate = function (t) {
							return M.all(["type", "name", "value"], function (e) {
								return null != t[e] && t[e].length > 0
							}) ? void 0 : "Please fill in all fields."
						},
						e
					} (r.Model))({
						type: null,
						name: null,
						value: null,
						updating: {
							type: null,
							index: null,
							value: null
						}
					})
				} (),
				c.reqres.setHandler(s.CustomPropertiesEvent.LOAD, this.loadProperty),
				this.highlighter = new u("snapshot-edit"),
				this.domLabeller = new o,
				i.__super__.initialize.apply(this, arguments)
			},
			i.prototype.render = function () {
				var t, e;
				return e = function (t) {
					return function () {
						var e, r, o;
						if (t.highlighter.clear(), t.domLabeller.clear(), "selector" === t.model.get("type") && null != t.model.get("value")) try {
							e = t.model.get("name"),
							r = n(t.model.get("value")),
							t.highlighter.outline(r),
							null != e && t.domLabeller.label(r, e)
						} catch(a) {
							o = a
						}
						return i.__super__.render.apply(t, arguments),
						t.stickit()
					}
				} (this),
				t = n(document.activeElement),
				"input" === t.prop("tagName").toLowerCase() && "text" === t.attr("type") ? h.Dom.withFocusedSelector(function (t) {
					return e(),
					n(t).hasClass("heap-tooltip-input-text") ? n(t).cssImportant("transition-duration", "0s, 0s") : void 0
				}) : e(),
				this
			},
			i.prototype.onRender = function () {
				return this.propertyTypeView = new a({
					data: this.model.get("type"),
					fields: [{
						label: "text in element",
						data: "selector"
					},
					{
						label: "value of JavaScript",
						data: "javascript"
					}],
					emptyText: "Add from..."
				}),
				this.listenTo(this.propertyTypeView, "update", function () {
					var t, e;
					return this.model.set("type", null != (t = this.propertyTypeView) && null != (e = t.data) ? e.data: void 0),
					this.propertyTypeView.renderData()
				}),
				this.propertyTypeRegion.show(this.propertyTypeView)
			},
			i.prototype.remove = function () {
				return this.highlighter.clear(),
				this.domLabeller.clear(),
				i.__super__.remove.apply(this, arguments)
			},
			i.prototype.beginSelectElement = function () {
				return this.model.set("value", null),
				this.enterSnapshotMode()
			},
			i.prototype.cancel = function () {
				return this.isUpdating() && this.unHideLoadedSnapshot(),
				this.switchToDefinitionView()
			},
			i.prototype.createProperty = function (t, e, n) {
				var r;
				return null == e && (e = ""),
				null == n && (n = ""),
				r = {},
				r[t] = [],
				r[t].push([e, n]),
				this.props.symbol.setSnapshot(d.merge({},
				this.props.symbol.get("snapshot"), r, function (t, e) {
					return M.isArray(t) ? t.concat(e) : void 0
				}))
			},
			i.prototype.define = function () {
				return this.model.isValid() ? (this.createProperty(this.model.get("type"), this.model.get("name"), this.model.get("value")), this.switchToDefinitionView()) : c.request(f.ERROR.SHOW, this.model.validationError)
			},
			i.prototype.enterSnapshotMode = function () {
				return c.request(s.TooltipEvent.SNAPSHOT_MODE.ENTER).done(function (t) {
					return function () {
						return t.highlighter.clear(),
						window.addEventListener("mouseover", t.outlineElement),
						window.addEventListener("click", t.selectElement)
					}
				} (this))
			},
			i.prototype.exitSnapshotMode = function () {
				return c.request(s.TooltipEvent.SNAPSHOT_MODE.EXIT).done(function (t) {
					return function () {
						return window.removeEventListener("mouseover", t.outlineElement),
						window.removeEventListener("click", t.selectElement)
					}
				} (this))
			},
			i.prototype.hideLoadedSnapshot = function () {
				return this.isUpdating() ? (this.props.symbol.get("snapshot")[this.model.get("updating").type][this.model.get("updating").index][1] = null, this.props.symbol.trigger("change:snapshot change")) : void 0
			},
			i.prototype.isUpdating = function () {
				var t, e;
				return null != (null != (t = this.model.get("updating")) ? t.type: void 0) && null != (null != (e = this.model.get("updating")) ? e.index: void 0)
			},
			i.prototype.loadProperty = function (t) {
				var e, r, i, o, a;
				return i = t.type,
				e = t.index,
				a = this.props.symbol.get("snapshot")[i][e],
				r = a[0],
				o = a[1],
				this.model.set({
					type: i,
					name: r,
					value: o,
					updating: {
						type: i,
						index: e,
						value: o
					}
				}),
				M.delay(function (t) {
					return function () {
						return t.hideLoadedSnapshot()
					}
				} (this), 400),
				n.Deferred().resolve()
			},
			i.prototype.outlineElement = function (t) {
				var e, r;
				return e = n(t.target),
				"IFRAME" !== e.prop("tagName") && 0 !== (null != (r = e.attr("class")) ? r.indexOf("heap-") : void 0) && "normal" !== window._heapev.mode ? (t.preventDefault(), t.stopPropagation(), this.highlighter.outlineSingle(e)) : void 0
			},
			i.prototype.selectElement = function (t) {
				var e, r, i;
				if ((t.screenX || t.screenY) && (e = n(t.target), r = null != (i = e.attr("class")) ? i: "", (!(0 === r.indexOf("heap-") || e.parents(".heap-tooltip").length > 0) || -1 !== r.indexOf("heap-outline-shade")) && "normal" !== window._heapev.mode)) return t.preventDefault(),
				t.stopPropagation(),
				this.exitSnapshotMode(),
				this.highlighter.outline(e),
				this.model.set("value", e.cssSelector())
			},
			i.prototype.switchToDefinitionView = function () {
				return c.request(s.TooltipEvent.ERROR.CLEAR),
				c.request(s.TooltipEvent.SWITCH_VIEW.DEFINITION).done(function (t) {
					return function () {
						return t.model.set(M.nullify(t.model.attributes))
					}
				} (this))
			},
			i.prototype.unHideLoadedSnapshot = function () {
				return this.isUpdating() ? (this.props.symbol.get("snapshot")[this.model.get("updating").type][this.model.get("updating").index][1] = this.model.get("updating").value, this.props.symbol.trigger("change:snapshot change")) : void 0
			},
			i.prototype.updateProperty = function () {
				var t;
				return t = d.cloneDeep(this.props.symbol.get("snapshot")),
				t[this.model.get("updating").type].splice(this.model.get("updating").index, 1),
				this.props.symbol.attributes.snapshot = t,
				this.define()
			},
			i
		} (l.LayoutView)
	},
	{}],
	56 : [function (t, e) {
		var n, r, i, o, a, c, s, u, l, p, f, h, d, M = {}.hasOwnProperty,
		g = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) M.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		d = t(105),
		s = t(84),
		h = t(99),
		r = t(39),
		a = t(41),
		c = t(43),
		f = t(53),
		u = t(61),
		l = t(63),
		p = t(65),
		i = t(57),
		e.exports = o = function (e) {
			function o() {
				return o.__super__.constructor.apply(this, arguments)
			}
			return g(o, e),
			o.prototype.events = {
				"change .heap-tooltip-input-text": "setSymbolName",
				"click .heap-tooltip-define": "defineEvent",
				"click .heap-tooltip-create-custom-property": "showPropertiesView"
			},
			o.prototype.regions = {
				moreOptionsRegion: ".more-options-region",
				propertiesListingRegion: ".heap-tooltip-properties-listing-region",
				statsRegion: ".heap-tooltip-stats-region"
			},
			o.prototype.template = t(68),
			o.prototype.optionTemplate = t(82),
			o.prototype.templateHelpers = function () {
				return {
					optionTemplate: this.optionTemplate,
					options: [{
						classname: "limit-page",
						section: "Limit to current page"
					},
					{
						classname: "ignore-containers",
						section: "Ignore containers"
					}]
				}
			},
			o.prototype.initialize = function (t) {
				var e, n;
				return null == t && (t = {}),
				this.$target = t.$target,
				this.symbol = t.symbol,
				this._highlighter = new c("snapshot-all"),
				this._domLabeller = new r,
				this.$target && (this.eventType = this.computeEventType(this.$target), this.$target.is('input[type="submit"], button[type="submit"]') && (n = this.$target.parents("form").first(), e = n.find('input[type="submit"], button[type="submit"]'), 1 === e.length ? (this.eventType = "submit", this.$target = n) : this.eventType = "click")),
				this.events["change .heap-tooltip-input-checkbox"] = d.debounce(this.populateSymbol, 500),
				d.each(["change:type", "change:target", "change:query"], function (t) {
					return function (e) {
						return t.listenTo(t.symbol, e, function () {
							return t.statsRegion.show(new p({
								symbol: t.symbol
							}))
						})
					}
				} (this)),
				this.listenTo(this.symbol, "change:snapshot", function (t) {
					return function () {
						return t.renderSnapshot()
					}
				} (this))
			},
			o.prototype.onRender = function () {
				return this.moreOptionsView = new u({
					$target: this.$target
				}),
				this.moreOptionsRegion.show(this.moreOptionsView),
				this.propertiesListingView = new l({
					symbol: this.symbol
				}),
				this.propertiesListingRegion.show(this.propertiesListingView),
				this.populateSymbol()
			},
			o.prototype.onBeforeDestroy = function () {
				return this._highlighter.clear(),
				this._domLabeller.clear()
			},
			o.prototype.renderSnapshot = function () {
				var t, e, r, i, o, a;
				return this._highlighter.clear(),
				this._domLabeller.clear(),
				d(null != (r = null != (i = this.symbol.get("snapshot")) ? i.selector: void 0) ? r: []).chain().filter(function (t) {
					var e, n;
					return e = t[0],
					n = t[1],
					null != n
				}).each(function (t) {
					return function (e) {
						var r, i, o;
						return i = e[0],
						o = e[1],
						r = n(o),
						t._domLabeller.label(r, i),
						t._highlighter.outline(r)
					}
				} (this)),
				e = !d.isEmpty(d.chain(null != (o = null != (a = this.symbol) ? a.get("snapshot") : void 0) ? o: {}).values().flatten().value()),
				t = this.$(".heap-tooltip-properties-separator"),
				t.cssImportant("display", e ? "block": "none"),
				this.$(".heap-tooltip-margin-uncollapser").cssImportant("display", e ? "none": "block")
			},
			o.prototype.computeEventType = function (t) {
				return t.is("input, textarea, select") ? "change": "click"
			},
			o.prototype.computeSelector = function (t) {
				var e, r, i, o, a, c, s;
				for (c = f.Display.toSelector(t), e = t.parent(), a = n(c).length;
				"BODY" !== e.prop("tagName") && 1 !== a;) i = "" + f.Display.toSelector(e) + " " + c,
				r = n(i).length,
				a > r && (c = i, a = r),
				e = e.parent();
				return s = this.setTargetSelector(),
				this.$(".heap-tooltip-ignore-containers input:checked").length ? c = s: (o = c.split(" "), o.splice(o.length - 1, 1, s), c = o.join(" ")),
				c
			},
			o.prototype.defineEvent = function () {
				var t, e;
				return this.symbol.get("name") ? (t = this.symbol.get("snapshot"), null != t && (e = d.all(t, function (t) {
					var e;
					return e = d.map(t, d.first),
					d(e).size() === d(e).chain().compact().uniq().size().value()
				}), e ? this.symbol.attributes.snapshot = this.unflattenSnapshot(t) : i.request(a.TooltipEvent.ERROR.SHOW, "Please fill in all Name fields uniquely.")), this.symbol.save({},
				{
					success: function (e) {
						return function () {
							var n;
							return e.symbol.attributes.snapshot = t,
							n = window._heapev.navbarView.symbolListView,
							n.addSymbol(e.symbol),
							i.request(a.TooltipEvent.CLOSE).done(function () {
								return window._heapev.navbarView.showMsg('Successfully defined "' + e.symbol.get("name") + '"!'),
								window._heapev.eventCenter.trigger("onboarding", "event", "finish", n.collection.length),
								1 === n.collection.length && window._heapev.eventCenter.trigger("onboarding", "event", "define_first_event_ev"),
								e.destroy()
							})
						}
					} (this),
					error: function (e) {
						return function () {
							return e.symbol.attributes.snapshot = t,
							i.request(a.TooltipEvent.ERROR.SHOW, "An event with that name already exists.")
						}
					} (this)
				})) : i.request(a.TooltipEvent.ERROR.SHOW, "Please fill in the Name field below.")
			},
			o.prototype.getParts = function (t) {
				var e;
				return {
					target: t.replace(/\[href=".*"\]/g, "").replace(/:contains\(.*\)/g, ""),
					text: null != (e = t.match(/:contains\("(.*)"\)/)) ? e[1] : void 0
				}
			},
			o.prototype.populateSymbol = function () {
				return this.selector = this.computeSelector(this.$target),
				this.setSymbol(this.selector),
				window._heapev.highlighter.outlineMulti(this.symbol.matchingElements())
			},
			o.prototype.setSymbol = function (t) {
				var e, n, r, i;
				return this.symbol.attributes = this.symbol.defaults(),
				this.setSymbolName(),
				i = this.getParts(t),
				n = i.target,
				r = i.text,
				e = this.targetText("href"),
				this.symbol.setEventType(this.eventType),
				this.symbol.setEventTarget(n),
				null != r && this.symbol.setText(r),
				e && this.symbol.setHref(e),
				this.$(".heap-tooltip-limit-page input:checked").length ? this.symbol.setPath(window.location.pathname) : void 0
			},
			o.prototype.setSymbolName = function () {
				return this.symbol.set("name", this.$(".heap-tooltip-name input").val())
			},
			o.prototype.setTargetSelector = function () {
				var t, e, n, r, i;
				return r = this.targetText("tag"),
				n = this.targetText("id"),
				n && (r += "#" + n),
				t = this.targetTextMulti("classes"),
				t = null != t ? t.filter(f.Display.isValidAttr) : void 0,
				t.length && (r += "." + t.join(".")),
				e = this.targetText("href"),
				e && (r += "[href=" + f.Formatting.escape(e) + "]"),
				i = this.targetText("text"),
				i && (r += ":contains(" + f.Formatting.escape(i) + ")"),
				r
			},
			o.prototype.showPropertiesView = function () {
				return i.request(a.TooltipEvent.SWITCH_VIEW.PROPERTIES)
			},
			o.prototype.targetText = function (t) {
				return this.$(".heap-tooltip-" + t + " input:checked").closest("label").text().trim()
			},
			o.prototype.targetTextMulti = function (t) {
				return this.$(".heap-tooltip-" + t + " input:checked").closest("label").map(function () {
					return n(this).text().trim()
				}).get()
			},
			o.prototype.unflattenSnapshot = function (t) {
				return h.mapValues(t, function (t) {
					return d.object(t)
				})
			},
			o
		} (s.LayoutView)
	},
	{}],
	57 : [function (t, e) {
		var n, r, i, o = {}.hasOwnProperty,
		a = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) o.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		r = t(84),
		n = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return a(e, t),
			e
		} (r.Application),
		i = new n({
			channelName: "heap-event-visualizer"
		}),
		i.start(),
		e.exports = i
	},
	{}],
	58 : [function (t, e) {
		var n, r, i = {}.hasOwnProperty,
		o = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) i.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		r = t(84),
		e.exports = n = function (e) {
			function n() {
				return n.__super__.constructor.apply(this, arguments)
			}
			return o(n, e),
			n.prototype.events = function () {
				return {
					"click .heap-tooltip-expandable-toggle": "expandOrShrink"
				}
			},
			n.prototype.template = t(69),
			n.prototype.templateHelpers = function () {
				return {
					closedBody: null,
					openBody: null,
					content: null
				}
			},
			n.prototype.expandOrShrink = function () {
				return this.$el.toggleClass("heap-tooltip-expandable-expanded")
			},
			n
		} (r.CompositeView)
	},
	{}],
	59 : [function (t, e, n) {
		n.ModeView = t(60),
		n.NavbarView = t(62),
		n.StatsView = t(65),
		n.SymbolListView = t(66),
		n.TooltipView = t(83)
	},
	{}],
	60 : [function (t, e) {
		var n, r, i, o, a = {}.hasOwnProperty,
		c = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) a.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		o = t(105),
		r = t(88),
		e.exports = i = function (e) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return c(r, e),
			r.prototype.className = "heap-mode-control",
			r.prototype.template = t(70),
			r.prototype.events = {
				"click .heap-mode": "changeMode",
				"click .heap-mode-help": "changeMode"
			},
			r.prototype.render = function () {
				return this.$el.html(this.template()),
				this
			},
			r.prototype.changeMode = function (t) {
				var e, r;
				return null != t && t.preventDefault(),
				e = this.$(".heap-mode:not(.heap-mode-active)"),
				this.$(".heap-mode").removeClass("heap-mode-active"),
				e.addClass("heap-mode-active"),
				window._heapev.mode = e.data("mode"),
				r = "definition" === window._heapev.mode ? "none": "initial",
				n("body").setUserSelect(r),
				window._heapev.curTooltip.close()
			},
			r
		} (r.View)
	},
	{}],
	61 : [function (t, e) {
		var n, r, i, o, a, c = {}.hasOwnProperty,
		s = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) c.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		a = t(105),
		n = t(88),
		o = t(53),
		r = t(58),
		e.exports = i = function (e) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return s(r, e),
			r.prototype.childView = n.Marionette.ItemView.extend({
				template: t(81)
			}),
			r.prototype.templateHelpers = function () {
				return a.extend(r.__super__.templateHelpers.call(this), {
					closedBody: "More Options",
					openBody: "Fewer Options"
				})
			},
			r.prototype.initialize = function (t) {
				var e, i;
				return this.$target = t.$target,
				this.collection = new n.Collection(a.chain([{
					label: "ID",
					sections: null != (e = this.$target.attr("id")) ? e.trim() : void 0,
					checked: !0
				},
				{
					label: "Classes",
					sections: a.compact(null != (i = this.$target.attr("class")) ? i.split(" ") : void 0),
					checked: !0
				},
				{
					label: "Tag",
					sections: this.$target.prop("tagName").toLowerCase(),
					checked: !0
				},
				{
					label: "Href",
					sections: o.Dom.ancestralHref(this.$target[0])
				},
				{
					label: "Text",
					sections: this.$target.text().trim().replace(/\n/gm, " ").slice(0, 255)
				}]).map(function (t) {
					return t.sections = a.isArray(t.sections) ? t.sections: [t.sections],
					a.extend({
						label: null,
						classname: null,
						checked: null
					},
					t)
				}).filter(function (t) {
					return a.compact(t.sections).length
				}).value()),
				r.__super__.initialize.apply(this, arguments)
			},
			r
		} (r)
	},
	{}],
	62 : [function (t, e) {
		var n, r, i, o, a, c, s, u, l = {}.hasOwnProperty,
		p = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) l.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		},
		f = [].indexOf ||
		function (t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return - 1
		};
		n = t(98),
		u = t(105),
		r = t(88),
		i = t(37),
		o = t(60),
		c = t(66),
		s = t(53),
		e.exports = a = function (e) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return p(r, e),
			r.prototype.className = "heap-navbar",
			r.prototype.template = t(71),
			r.prototype.errorTemplate = t(72),
			r.prototype.events = {
				"click .heap-exit-link": "exitVed"
			},
			r.prototype.render = function () {
				return this.$el.html(this.template()),
				this.symbols = new i.Symbols,
				this.symbols.fetch({
					success: function (t) {
						return function (e) {
							var n, r;
							return t.modeView = new o,
							t.$(".heap-logo").after(t.modeView.render().el),
							r = e.filter(function (t) {
								var e, n;
								return e = null != (n = t.get("type")) ? n.val: void 0,
								f.call(s.Constants.WEB_EVENTS, e) >= 0
							}),
							n = new i.Symbols(r),
							t.symbolListView = new c({
								collection: n
							}),
							t.symbolListView.setElement(t.$(".heap-symbols")).render()
						}
					} (this),
					error: function (t) {
						return function () {
							return window._heapev.mode = "normal",
							t.$(".heap-ved-controls").remove(),
							t.$(".heap-logo").after(t.errorTemplate()),
							t.clearEVCookie()
						}
					} (this)
				}),
				this
			},
			r.prototype.exitVed = function (t) {
				return t.preventDefault(),
				this.clearEVCookie(),
				window.location.href = "https://heapanalytics.com/ved/end?domain=" + this.currentDomain()
			},
			r.prototype.showMsg = function (t) {
				return this.$(".heap-ved-message").cssImportant("opacity", "1").text(t).delay(5e3).animate({
					opacity: 0
				},
				{
					duration: 600
				})
			},
			r.prototype.currentDomain = function () {
				var t;
				return null != (t = document.domain.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)) ? t[0] : void 0
			},
			r.prototype.clearEVCookie = function () {
				var t, e, n;
				return e = this.currentDomain(),
				t = e ? ";domain=." + e: "",
				n = "https:" === document.location.protocol ? ";secure": "",
				document.cookie = "_hp_ved=;expires=" + new Date(0).toGMTString() + t + ";path=/" + n
			},
			r.makeRoom = function () {
				var t, e;
				return t = n("body"),
				t.setUserSelect("none").cssImportant({
					"margin-top": s.Display.increasePixels(t.css("margin-top"), s.Constants.NAV_HEIGHT),
					"overflow-y": "visible"
				}),
				n("*").filter(function () {
					return "fixed" === n(this).css("position")
				}).each(function () {
					return n(this).pushDown(s.Constants.NAV_HEIGHT)
				}),
				e = function (t) {
					var r;
					return r = t.css("position"),
					"absolute" === r ? t.pushDown(s.Constants.NAV_HEIGHT) : "fixed" !== r && "relative" !== r ? t.children().each(function () {
						return e(n(this))
					}) : void 0
				},
				"absolute" === t.css("position") && t.cssImportant({
					position: "static"
				}),
				e(t)
			},
			r
		} (r.View)
	},
	{}],
	63 : [function (t, e) {
		var n, r, i, o, a, c, s, u = {}.hasOwnProperty,
		l = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) u.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		s = t(99),
		o = t(84),
		i = t(41),
		r = t(57),
		c = t(53),
		e.exports = a = function (e) {
			function o() {
				return o.__super__.constructor.apply(this, arguments)
			}
			return l(o, e),
			o.prototype.events = {
				"click .heap-tooltip-property-remove": "removeProperty",
				"click .heap-tooltip-property-update": "updateProperty"
			},
			o.prototype.modelEvents = {
				"change:snapshot": "render"
			},
			o.prototype.template = t(73),
			o.prototype.templateHelpers = function () {
				var t;
				return {
					explainType: function (t) {
						switch (t) {
						case "selector":
							return "text in element";
						case "javascript":
							return "value of JavaScript";
						default:
							throw new Error("PatternNotMatchedError")
						}
					},
					snapshotWithPreview: s.mapValues(null != (t = this.model.get("snapshot")) ? t: {},
					function (t, e) {
						return t.map(function (t) {
							var n, r, i;
							return n = t[0],
							i = t[1],
							r = c.Snapshot.preview(e, i),
							[n, i, r]
						})
					})
				}
			},
			o.prototype.initialize = function (t) {
				var e;
				return e = t.symbol,
				this.model = e,
				o.__super__.initialize.apply(this, arguments)
			},
			o.prototype.propertyFromClick = function (t) {
				var e, r, i, o;
				return e = n(t.target),
				r = e.closest(".heap-tooltip-section").find(".heap-property-description"),
				o = r.attr("data-property-type"),
				i = this.$("[data-property-type=" + o + "]").index(r),
				{
					type: o,
					index: i
				}
			},
			o.prototype.removeProperty = function (t) {
				var e, n, r, i, o;
				return i = this.propertyFromClick(t),
				r = i.type,
				e = i.index,
				n = s.cloneDeep(null != (o = this.model.get("snapshot")) ? o: {}),
				n[r] = s.without(n[r], n[r][e]),
				this.model.setSnapshot(n)
			},
			o.prototype.updateProperty = function (t) {
				var e, n, o;
				return o = this.propertyFromClick(t),
				n = o.type,
				e = o.index,
				r.request(i.CustomPropertiesEvent.LOAD, {
					type: n,
					index: e
				}).done(function () {
					return r.request(i.TooltipEvent.SWITCH_VIEW.PROPERTIES)
				})
			},
			o
		} (o.ItemView)
	},
	{}],
	64 : [function (t, e) {
		var n, r, i, o, a = {}.hasOwnProperty,
		c = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) a.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		o = t(105),
		r = t(84),
		e.exports = i = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return c(e, t),
			e.prototype.initialize = function (t) {
				return this.el = t.el,
				this.$el.children().css("display", "table-cell"),
				this.$el.children().slice(1).css("opacity", 0)
			},
			e.prototype.switchTo = function (t) {
				var e;
				return e = this.$el.children().index(t),
				n.when(this.$el.children().not(t).animate({
					opacity: 0
				},
				{
					queue: !1
				},
				this.$el.animate({
					marginLeft: "-" + e + "00%"
				},
				{
					queue: !1
				},
				t.animate({
					opacity: 1
				},
				{
					queue: !1
				}))))
			},
			e
		} (r.LayoutView)
	},
	{}],
	65 : [function (t, e) {
		var n, r, i, o, a, c, s, u = {}.hasOwnProperty,
		l = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) u.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		s = t(105),
		a = t(90),
		r = t(84),
		c = t(103),
		o = t(53),
		e.exports = i = function (e) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return l(r, e),
			r.prototype.msgTemplate = t(76),
			r.prototype.loadingTemplate = t(75),
			r.prototype.statsTemplate = t(74),
			r.prototype.initialize = function (t) {
				return null == t && (t = {}),
				this.symbol = t.symbol,
				this.width = t.width,
				this.height = t.height,
				this.transitionTime = t.transitionTime,
				null == this.width && (this.width = 100),
				null == this.height && (this.height = 42),
				null == this.transitionTime && (this.transitionTime = 500),
				null != this.margin ? this.margin: this.margin = {
					top: 8,
					right: 2,
					bottom: 2,
					left: 2
				}
			},
			r.prototype.render = function () {
				return this.$el.html(this.loadingTemplate()),
				this.curRequest = n.ajax({
					url: "https://heapanalytics.com/api/ved/stats",
					type: "POST",
					data: {
						symbol: this.symbol.attributes,
						offset: c().zone()
					},
					crossDomain: !0,
					xhrFields: {
						withCredentials: !0
					},
					success: function (t) {
						return function (e) {
							var n, r, i;
							return n = e.sparkline,
							r = e.users,
							n.length ? (t.formatData(n, r), t.$el.html(t.statsTemplate(t.data)), "click" !== (null != (i = t.symbol.get("type")) ? i.val: void 0) && t.$('*[class^="heap-tooltip-stats-users-"]').addClass("heap-tooltip-stats-users-longtext"), t.renderLine()) : t.renderMsg("No users did this in the past week.")
						}
					} (this),
					error: function (t) {
						return function (e) {
							return "abort" !== e.statusText ? t.renderError("We're sorry, something went wrong.") : void 0
						}
					} (this)
				}),
				this
			},
			r.prototype.formatData = function (t, e) {
				var n, r, i, u, l;
				for (r = [], i = c().startOf("day"), n = c().subtract(6, "days").startOf("day"); i.diff(n) >= 0;) r.push({
					count: 0,
					time: +n
				}),
				n.add(1, "day");
				return t = t.map(function (t) {
					var e, n, r, i;
					return n = c.parseZone(t.time).zone() - c().zone(),
					e = c().isDST(),
					i = c(t.time).isDST(),
					e && !i ? n -= 60 : !e && i && (n += 60),
					r = +c(t.time).subtract(n, "minutes"),
					{
						count: t.count,
						time: r
					}
				}),
				e.count = +(null != (u = e.count) ? u: 0),
				e.first = +(null != (l = e.first) ? l: 0),
				this.data = {
					users: {
						isPageview: e.isPageview,
						count: o.Formatting.formatApproximateNumber(Math.max(e.count, 1)),
						percent: (e.count / e.first * 100).toFixed(1)
					},
					sparkline: s.chain(t.concat(r)).groupBy(function (t) {
						return + c(t.time)
					}).pairs().map(function (t) {
						return {
							time: t[0],
							count: a.sum(t[1], function (t) {
								return t.count
							})
						}
					}).sortBy("time").value(),
					actionText: this.actionText(this.symbol)
				}
			},
			r.prototype.actionText = function (t) {
				var e, n;
				switch (e = null != (n = t.get("type")) ? n.val: void 0) {
				case "submit":
					return "submitted this form";
				case "change":
					return "changed <br> this field";
				default:
					return "did this"
				}
			},
			r.prototype.renderLine = function () {
				var t, e, n, r, i, o, c, s, u;
				return e = this.data.sparkline,
				c = this.width - this.margin.left - this.margin.right,
				r = this.height - this.margin.top - this.margin.bottom,
				s = a.time.scale().range([0, c]),
				u = a.scale.linear().range([r, 0]),
				i = a.svg.line().x(function (t) {
					return s(t.time)
				}).y(function (t) {
					return u(t.count)
				}),
				t = a.svg.area().x(function (t) {
					return s(t.time)
				}).y0(function () {
					return u(0)
				}).y1(function (t) {
					return u(t.count)
				}),
				n = this.$(".heap-tooltip-stats-sparkline")[0],
				o = a.select(n).append("svg").attr("class", "heap-tooltip-stats-sparkline-svg").attr("width", c + this.margin.left + this.margin.right).attr("height", r + this.margin.top + this.margin.bottom).append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")"),
				s.domain(a.extent(e, function (t) {
					return t.time
				})),
				u.domain([0, a.max(e, function (t) {
					return t.count
				})]),
				o.append("svg:clipPath").attr("id", "heap-tooltip-stats-sparkline-svg-transition").append("rect").attr("fill", "none").attr("x", "0").attr("y", "-1").attr("width", "0").attr("height", this.height).transition().duration(this.transitionTime).attr("width", this.width),
				o.append("path").datum(e).attr("clip-path", "url(#heap-tooltip-stats-sparkline-svg-transition)").attr("class", "heap-tooltip-stats-sparkline-svg-area").attr("d", t),
				o.append("path").datum(e).attr("clip-path", "url(#heap-tooltip-stats-sparkline-svg-transition)").attr("class", "heap-tooltip-stats-sparkline-svg-line").attr("d", i)
			},
			r.prototype.renderMsg = function (t) {
				return this.$el.html(this.msgTemplate({
					msg: t
				}))
			},
			r.prototype.renderError = function (t) {
				return this.$el.html(this.msgTemplate({
					msg: t
				})).find(".heap-tooltip-stats-msg").addClass("heap-tooltip-stats-error")
			},
			r.prototype.onDestroy = function () {
				var t;
				return null != (t = this.curRequest) ? t.abort() : void 0
			},
			r
		} (r.View)
	},
	{}],
	66 : [function (t, e) {
		var n, r, i, o, a, c = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		},
		s = {}.hasOwnProperty,
		u = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) s.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		},
		l = [].indexOf ||
		function (t) {
			for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
			return - 1
		};
		n = t(98),
		a = t(105),
		r = t(88),
		o = t(53),
		e.exports = i = function (e) {
			function r() {
				return this.renderSymbol = c(this.renderSymbol, this),
				r.__super__.constructor.apply(this, arguments)
			}
			return u(r, e),
			r.prototype.template = t(79),
			r.prototype.symbolTemplate = t(78),
			r.prototype.emptyTemplate = t(77),
			r.prototype.events = {
				"click .heap-dropdown-label": "toggleOpen",
				"click .heap-icon-remove": "deleteSymbol",
				"mouseenter .heap-dropdown-menu-item": "revealSymbol",
				"mouseleave .heap-dropdown-menu-item": "hideSymbol"
			},
			r.prototype.initialize = function () {
				return this.bindHandlers()
			},
			r.prototype.render = function () {
				return this.$el.html(this.template()),
				this.collection.comparator = function (t) {
					return t.get("name").toLowerCase()
				},
				this.collection.sort(),
				this.collection.each(function (t) {
					return function (e) {
						var n, r;
						if (n = null != (r = e.get("type")) ? r.val: void 0, !(l.call(o.Constants.WEB_EVENTS, n) < 0)) return t.$(".heap-dropdown-menu").append(t.renderSymbol(e))
					}
				} (this)),
				this.collection.length || this.$(".heap-dropdown-menu").html(this.emptyTemplate()),
				this
			},
			r.prototype.renderSymbol = function (t) {
				return this.symbolTemplate({
					name: t.get("name"),
					query: t.queryString()
				})
			},
			r.prototype.addSymbol = function (t) {
				return this.collection.push(t)
			},
			r.prototype.revealSymbol = function (t) {
				var e, r, i;
				return this.hideSymbol(),
				i = this.getSymbolAt(n(t.currentTarget)),
				e = i.matchingElements(),
				r = null != i ? i.getPath() : void 0,
				e && o.Events.curPageMatchesPath(r) ? window._heapev.highlighter.outlineMulti(e, {
					label: i.get("name")
				}) : void 0
			},
			r.prototype.hideSymbol = function () {
				return window._heapev.highlighter.clear()
			},
			r.prototype.deleteSymbol = function (t) {
				var e, r;
				return t.preventDefault(),
				t.stopPropagation(),
				e = n(t.currentTarget).parent(),
				r = this.getSymbolAt(e),
				r.destroy(),
				this.collection.remove(r),
				e.remove()
			},
			r.prototype.getSymbolAt = function (t) {
				var e;
				return e = this.$(".heap-dropdown-menu-item").index(t),
				this.collection.at(e)
			},
			r.prototype.bindHandlers = function () {
				return this.collection.bind("add remove", function (t) {
					return function () {
						return t.render()
					}
				} (this))
			},
			r.prototype.toggleOpen = function (t) {
				return t.preventDefault(),
				this.$el.toggleClass("heap-dropdown-open")
			},
			r.prototype.collapse = function () {
				return this.$el.hasClass("heap-dropdown-open") ? (this.$el.removeClass("heap-dropdown-open"), window._heapev.highlighter.clear()) : void 0
			},
			r
		} (r.View)
	},
	{}],
	67 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-full-width-button heap-tooltip-show-event-definition'>\n  <div class='heap-tooltip-full-width-button-body'><i class='heap-icon heap-icon-normal heap-icon-chevronleft'></i>Back to Event Definition</div>\n</div>\n\n<div class='heap-tooltip-section heap-tooltip-property-type'>\n  <div class='heap-tooltip-label'>\n    Type\n  </div>\n\n  <div class='heap-tooltip-property-type-region'></div>\n</div>\n\n",
			type && (__p += "\n  <div class='heap-tooltip-section heap-tooltip-property-definition'>\n    <div class='heap-tooltip-label'>\n      Name\n    </div>\n\n    <div class='heap-tooltip-labelinput'>\n      <input type='text' class='heap-tooltip-input-text heap-tooltip-property-name' placeholder='Property name'>\n    </div>\n  </div>\n\n  <div class='heap-tooltip-section heap-tooltip-property-definition'>\n    <div class='heap-tooltip-label'>\n      " + (null == (__t = label()) ? "": _.escape(__t)) + "\n    </div>\n    <div class='heap-tooltip-labelinput'>\n      <div class='input-append'>\n        <input type='text' class='heap-tooltip-input-text heap-tooltip-property-value' placeholder='" + (null == (__t = placeholder()) ? "": _.escape(__t)) + "'>\n        ", "selector" === type && (__p += "\n          <button class='heap-tooltip-element-selector btn' type='button'>\n            <i class='heap-icon heap-icon-normal heap-icon-hair-cross'></i>\n          </button>\n        "), __p += "\n      </div>\n    </div>\n  </div>\n\n  ", value && (__p += "\n    <div class='heap-tooltip-section heap-tooltip-explanation'>\n      On this page, the value of <strong>" + (null == (__t = name ? name: "the property") ? "": _.escape(__t)) + "</strong> is:\n      <div class='heap-property-preview' title='" + (null == (__t = preview) ? "": _.escape(__t)) + "'>" + (null == (__t = preview()) ? "": _.escape(__t)) + "</div>\n    </div>\n  "), __p += "\n"),
			__p += "\n\n<div class='heap-tooltip-btn-group'>\n  ",
			__p += isUpdating() ? "\n    <button class='heap-tooltip-btn heap-tooltip-define heap-tooltip-update-custom-property'>Update Property</button>\n  ": "\n    <button class='heap-tooltip-btn heap-tooltip-define heap-tooltip-create-custom-property'>Add Custom Property</button>\n  ",
			__p += "\n</div>\n";
			return __p
		}
	},
	{}],
	68 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) {
				__p += "<div class='heap-tooltip-close'>Ã—</div>\n\n<div class='heap-tooltip-section heap-tooltip-stats-region'></div>\n\n<div class='heap-tooltip-separator'></div>\n\n<div class='heap-tooltip-section heap-tooltip-name'>\n  <div class='heap-tooltip-label'>Name</div>\n  <input type='text' class='heap-tooltip-input-text' placeholder='e.g. Log In'>\n</div>\n";
				for (var i = 0; i < options.length; i++) __p += "\n" + (null == (__t = optionTemplate(options[i])) ? "": __t) + "\n";
				__p += "\n<div class='heap-tooltip-expandable more-options-region'></div>\n\n<div class='heap-tooltip-margin-uncollapser'></div>\n\n<div class='heap-tooltip-separator heap-tooltip-properties-separator'></div>\n\n<div class='heap-tooltip-properties-listing-region'></div>\n\n<div class='heap-tooltip-full-width-button heap-tooltip-create-custom-property'>\n  <div class='heap-tooltip-full-width-button-body'> + Add Custom Property...</div>\n</div>\n\n<div class='heap-tooltip-btn-group'>\n  <button class='heap-tooltip-btn heap-tooltip-define'>Define Event</button>\n</div>\n"
			}
			return __p
		}
	},
	{}],
	69 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-expandable-toggle heap-tooltip-expandable-closed'>\n  <i class='heap-icon heap-icon-normal heap-icon-triangleright'></i>\n  <div class='heap-tooltip-expandable-closed-body'>\n    " + (null == (__t = closedBody) ? "": _.escape(__t)) + "\n  </div>\n</div>\n<div class='heap-tooltip-expandable-toggle heap-tooltip-expandable-open'>\n  <i class='heap-icon heap-icon-normal heap-icon-triangledown'></i>\n  <div class='heap-tooltip-expandable-open-body'>\n    " + (null == (__t = openBody) ? "": _.escape(__t)) + "\n  </div>\n</div>\n" + (null == (__t = content) ? "": __t) + "\n";
			return __p
		}
	},
	{}],
	70 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-mode-switch'>\n  <a class='heap-mode heap-mode-active' data-mode='definition' href='#'>Definition Mode</a>\n  <a class='heap-mode' data-mode='normal' href='#'>Normal Mode</a>\n</div>\n<span class='heap-mode-help'>Ctrl + K</span>\n";
			return __p
		}
	},
	{}],
	71 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-navbar-inner'>\n  <div class='heap-logo'></div>\n  <div class='heap-ved-controls'>\n    <div class='heap-dropdown heap-symbols'></div>\n    <div class='heap-dropdown'>\n      <a class='heap-dropdown-label heap-exit-link' href='#'>\n        <i class='heap-icon heap-icon-logout'></i>Exit\n      </a>\n    </div>\n  </div>\n  <span class='heap-ved-message'></span>\n</div>\n";
			return __p
		}
	},
	{}],
	72 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-error-message'>\n  The Event Visualizer was unable to load properly. Check the following, then <a class='heap-exit-link' href='#'>exit and try again</a>:\n  <ol class='heap-error-message-list'>\n    <li class='heap-error-message-list-item'>Make sure third-party cookies are enabled in your browser.</li>\n    <li class='heap-error-message-list-item'>Make sure no ad blockers are blocking Heap.</li>\n    <li class='heap-error-message-list-item'>Make sure you're still logged into Heap.</li>\n  </ol>\n</div>\n";
			return __p
		}
	},
	{}],
	73 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "",
			_(["selector", "javascript"]).each(function (t) {
				__p += "\n  ",
				_.each(snapshotWithPreview[t], function (e) {
					var n = e[0],
					r = e[1],
					i = e[2];
					__p += "\n    <div class='heap-tooltip-section'>\n      <div class='heap-tooltip-label heap-tooltip-property-actions'>\n        <i class='heap-icon heap-icon-normal heap-icon-pencil heap-tooltip-property-update'></i>\n        <div class='heap-tooltip-property-remove'>Ã—</div>\n      </div>\n      <div class='heap-tooltip-labelinput'>\n        <div class='heap-property-description' data-property-type='" + (null == (__t = t) ? "": _.escape(__t)) + "'>\n          <div class='heap-property-value'\n               title='" + (null == (__t = n) ? "": _.escape(__t)) + ": " + (null == (__t = i) ? "": _.escape(__t)) + "&#13;&#13;Each time this event happens, the property " + (null == (__t = n) ? "": _.escape(__t)) + " will be set to the " + (null == (__t = explainType(t)) ? "": _.escape(__t)) + ' "' + (null == (__t = r) ? "": _.escape(__t)) + "\".'>\n            <span><b>" + (null == (__t = n) ? "": _.escape(__t)) + ":</b> " + (null == (__t = i) ? "": _.escape(__t)) + "</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
				}),
				__p += "\n"
			}),
			__p += "\n";
			return __p
		}
	},
	{}],
	74 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-stats-sparkline'></div>\n<div class='heap-tooltip-stats-users'>\n  <div class='heap-tooltip-stats-users-count'>\n    " + (null == (__t = users.count) ? "": _.escape(__t)) + "\n    " + (null == (__t = 1 === +users.count ? "user": "users") ? "": _.escape(__t)) + "\n    " + (null == (__t = actionText) ? "": __t) + "\n  </div>\n  <div class='heap-tooltip-stats-users-percent'>\n    ",
			isNaN(users.percent) || (__p += "\n      " + (null == (__t = users.percent) ? "": _.escape(__t)) + "% of " + (null == (__t = users.isPageview ? "page": "") ? "": _.escape(__t)) + " visitors\n    "),
			__p += "\n  </div>\n  <div class='heap-tooltip-stats-users-week'>\n    (within the past week)\n  </div>\n</div>\n";
			return __p
		}
	},
	{}],
	75 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-stats-loading'>\n  <img class='heap-tooltip-stats-loading-gif' src='https://heapanalytics.com/img/loading_circles_ved.gif'>\n  <div class='heap-tooltip-stats-loading-text'>Loading</div>\n</div>\n";
			return __p
		}
	},
	{}],
	76 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-stats-msg'>\n  " + (null == (__t = msg) ? "": _.escape(__t)) + "\n</div>\n";
			return __p
		}
	},
	{}],
	77 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<li class='heap-dropdown-menu-item-static'>\n  You haven't defined any events yet.\n</li>\n";
			return __p
		}
	},
	{}],
	78 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<li class='heap-dropdown-menu-item'>\n  <strong class='heap-dropdown-menu-item-name'>" + (null == (__t = name) ? "": _.escape(__t)) + "</strong>:\n  <span class='heap-dropdown-menu-item-query' title='" + (null == (__t = query) ? "": _.escape(__t)) + "'>" + (null == (__t = query) ? "": _.escape(__t)) + "</span>\n  <i class='heap-icon heap-icon-normal heap-icon-remove'></i>\n</li>\n";
			return __p
		}
	},
	{}],
	79 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<a class='heap-dropdown-label' href='#'>\n  <i class='heap-icon heap-icon-cursor'></i>Events\n</a>\n<ul class='heap-dropdown-menu'></ul>\n";
			return __p
		}
	},
	{}],
	80 : [function (require, module, exports) {
		require(105);
		module.exports = function (obj) {
			{
				var __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-section heap-tooltip-error'></div>\n\n<div class='heap-sliding-views'>\n  <div class='heap-tooltip-event-definition-region'></div>\n  <div class='heap-tooltip-custom-properties-region'></div>\n</div>\n";
			return __p
		}
	},
	{}],
	81 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) {
				__p += "<div class='heap-tooltip-section heap-tooltip-" + (null == (__t = label.toLowerCase()) ? "": _.escape(__t)) + "'>\n  <div class='heap-tooltip-label'>" + (null == (__t = label) ? "": _.escape(__t)) + "</div>\n  <div class='heap-tooltip-labelinput'>\n    ";
				for (var i = 0; i < sections.length; i++) __p += "\n      <label class='heap-tooltip-input-check' title='" + (null == (__t = sections[i]) ? "": _.escape(__t)) + "'>\n        <input type='checkbox' class='heap-tooltip-input-checkbox' value='" + (null == (__t = sections[i]) ? "": _.escape(__t)) + "' " + (null == (__t = checked ? "checked": "") ? "": _.escape(__t)) + ">" + (null == (__t = sections[i]) ? "": _.escape(__t)) + "\n      </label>\n    ";
				__p += "\n  </div>\n</div>\n"
			}
			return __p
		}
	},
	{}],
	82 : [function (require, module, exports) {
		var _ = require(105);
		module.exports = function (obj) {
			{
				var __t, __p = "";
				Array.prototype.join
			}
			with(obj || {}) __p += "<div class='heap-tooltip-section heap-tooltip-" + (null == (__t = classname) ? "": _.escape(__t)) + "'>\n  <div class='heap-tooltip-input'>\n    <label class='heap-tooltip-input-check'>\n      <input type='checkbox' class='heap-tooltip-input-checkbox' value='" + (null == (__t = section) ? "": _.escape(__t)) + "'>" + (null == (__t = section) ? "": _.escape(__t)) + "\n    </label>\n  </div>\n</div>\n";
			return __p
		}
	},
	{}],
	83 : [function (t, e) {
		var n, r, i, o, a, c, s, u, l, p, f, h, d, M = {}.hasOwnProperty,
		g = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) M.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		n = t(98),
		d = t(105),
		i = t(91),
		s = t(84),
		l = t(36),
		c = t(41),
		u = t(45),
		h = t(53),
		r = t(55),
		a = t(56),
		p = t(64),
		o = t(57),
		t(44),
		e.exports = f = function (e) {
			function s() {
				return s.__super__.constructor.apply(this, arguments)
			}
			return g(s, e),
			s.prototype.className = "heap-tooltip",
			s.prototype.events = {
				"click .heap-tooltip-close": "close"
			},
			s.prototype.regions = {
				customPropertiesRegion: ".heap-tooltip-custom-properties-region",
				eventDefinitionRegion: ".heap-tooltip-event-definition-region"
			},
			s.prototype.template = t(80),
			s.prototype.initialize = function (t) {
				var e;
				return null == t && (t = {}),
				this.$target = t.$target,
				this.margin = t.margin,
				e = t.width,
				this.symbol = new u.Symbol,
				null == this.margin && (this.margin = 20),
				null == this.width && (this.width = 260),
				null == this.height && (this.height = 330),
				l.initialize({
					selector: ".heap-tooltip",
					mouseEvents: ["click", "mouseover"]
				}),
				o.reqres.setHandler(c.TooltipEvent.SNAPSHOT_MODE.ENTER, function (t) {
					return function () {
						return t.enterSnapshotMode()
					}
				} (this)),
				o.reqres.setHandler(c.TooltipEvent.SNAPSHOT_MODE.EXIT, function (t) {
					return function () {
						return t.exitSnapshotMode()
					}
				} (this)),
				o.reqres.setHandler(c.TooltipEvent.CLOSE, function (t) {
					return function () {
						return t.close()
					}
				} (this)),
				o.reqres.setHandler(c.TooltipEvent.ERROR.CLEAR, function (t) {
					return function () {
						return t.clearError()
					}
				} (this)),
				o.reqres.setHandler(c.TooltipEvent.ERROR.SHOW, function (t) {
					return function (e) {
						return t.showError(e)
					}
				} (this)),
				o.reqres.setHandler(c.TooltipEvent.SWITCH_VIEW.DEFINITION, function (t) {
					return function () {
						return t.switchToDefinitionView()
					}
				} (this)),
				o.reqres.setHandler(c.TooltipEvent.SWITCH_VIEW.PROPERTIES, function (t) {
					return function () {
						return t.switchToPropertiesView()
					}
				} (this))
			},
			s.prototype.render = function () {
				var t, e, r, i, o, a;
				return a = h.Display.getDims(this.$target),
				i = a.x,
				o = a.y,
				r = a.w,
				e = a.h,
				t = n(window),
				i = t.width() < i + r + this.width + 2 * this.margin ? Math.max(this.margin, i - (this.width + 3 * this.margin)) : Math.min(t.width() - (this.width + this.margin), i + r + this.margin),
				i < this.width + 2 * this.margin && (o < t.scrollTop() + t.height() / 2 ? o += e + this.margin: o -= this.height + 3 * this.margin),
				o = Math.min(o, t.height() + t.scrollTop() + h.Constants.NAV_HEIGHT - (this.height + 3 * this.margin)),
				h.Display.isFixed(this.$target) && (this.$el.addClass("heap-tooltip-fixed"), o -= t.scrollTop()),
				this.$el.html(this.template()).css({
					left: "" + i + "px",
					top: "" + o + "px"
				}).cssImportant({
					width: "" + this.width + "px"
				}),
				s.__super__.render.apply(this, arguments)
			},
			s.prototype.onRender = function () {
				return this.draggie = new i(this.el),
				this.draggie.enable(),
				this.eventDefinitionView = new a({
					$target: this.$target,
					symbol: this.symbol
				}),
				this.eventDefinitionRegion.show(this.eventDefinitionView),
				this.customPropertiesView = new r({
					symbol: this.symbol
				}),
				this.customPropertiesRegion.show(this.customPropertiesView),
				this.slidingMultiView = new p({
					el: this.$(".heap-sliding-views")
				})
			},
			s.prototype.clearError = function () {
				return this.$(".heap-tooltip-error").cssImportant("display", "none"),
				n.Deferred().resolve()
			},
			s.prototype.close = function () {
				return window._heapev.highlighter.clear(),
				this.destroy(),
				n.Deferred().resolve()
			},
			s.prototype.enterSnapshotMode = function () {
				return this.$el.cssImportant({
					opacity: .4,
					"pointer-events": "none"
				}),
				window._heapev.highlighter.clear(),
				window._heapev.snapshot = !0,
				n.Deferred().resolve()
			},
			s.prototype.exitSnapshotMode = function () {
				return this.$el.cssImportant({
					opacity: 1,
					"pointer-events": "auto"
				}),
				window._heapev.highlighter.outlineMulti(this.eventDefinitionView.selector),
				window._heapev.snapshot = !1,
				n.Deferred().resolve()
			},
			s.prototype.showError = function (t) {
				return this.$(".heap-tooltip-error").cssImportant("display", "block").text(t),
				n.Deferred().resolve()
			},
			s.prototype.switchToDefinitionView = function () {
				return this.slidingMultiView.switchTo(this.$(".heap-tooltip-event-definition-region"))
			},
			s.prototype.switchToPropertiesView = function () {
				return this.slidingMultiView.switchTo(this.$(".heap-tooltip-custom-properties-region"))
			},
			s
		} (s.LayoutView)
	},
	{}],
	84 : [function (t, e, n) { !
		function (r, i) {
			if ("function" == typeof define && define.amd) define(["backbone", "underscore", "backbone.wreqr", "backbone.babysitter"], function (t, e) {
				return r.Marionette = r.Mn = i(r, t, e)
			});
			else if ("undefined" != typeof n) {
				{
					var o = t(88),
					a = t(105);
					t(86),
					t(85)
				}
				e.exports = i(r, o, a)
			} else r.Marionette = r.Mn = i(r, r.Backbone, r._)
		} (this, function (t, e, n) {
			"use strict";
			var r = t.Marionette,
			i = t.Mn,
			o = e.Marionette = {};
			o.VERSION = "2.4.2",
			o.noConflict = function () {
				return t.Marionette = r,
				t.Mn = i,
				this
			},
			o.Deferred = e.$.Deferred,
			o.FEATURES = {},
			o.isEnabled = function (t) {
				return !! o.FEATURES[t]
			},
			o.extend = e.Model.extend,
			o.isNodeAttached = function (t) {
				return e.$.contains(document.documentElement, t)
			},
			o.mergeOptions = function (t, e) {
				t && n.extend(this, n.pick(t, e))
			},
			o.getOption = function (t, e) {
				return t && e ? t.options && void 0 !== t.options[e] ? t.options[e] : t[e] : void 0
			},
			o.proxyGetOption = function (t) {
				return o.getOption(this, t)
			},
			o._getValue = function (t, e, r) {
				return n.isFunction(t) && (t = r ? t.apply(e, r) : t.call(e)),
				t
			},
			o.normalizeMethods = function (t) {
				return n.reduce(t, function (t, e, r) {
					return n.isFunction(e) || (e = this[e]),
					e && (t[r] = e),
					t
				},
				{},
				this)
			},
			o.normalizeUIString = function (t, e) {
				return t.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (t) {
					return e[t.slice(4)]
				})
			},
			o.normalizeUIKeys = function (t, e) {
				return n.reduce(t, function (t, n, r) {
					var i = o.normalizeUIString(r, e);
					return t[i] = n,
					t
				},
				{})
			},
			o.normalizeUIValues = function (t, e, r) {
				return n.each(t, function (i, a) {
					n.isString(i) ? t[a] = o.normalizeUIString(i, e) : n.isObject(i) && n.isArray(r) && (n.extend(i, o.normalizeUIValues(n.pick(i, r), e)), n.each(r, function (t) {
						var r = i[t];
						n.isString(r) && (i[t] = o.normalizeUIString(r, e))
					}))
				}),
				t
			},
			o.actAsCollection = function (t, e) {
				var r = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
				n.each(r, function (r) {
					t[r] = function () {
						var t = n.values(n.result(this, e)),
						i = [t].concat(n.toArray(arguments));
						return n[r].apply(n, i)
					}
				})
			};
			var a = o.deprecate = function (t, e) {
				n.isObject(t) && (t = t.prev + " is going to be removed in the future. Please use " + t.next + " instead." + (t.url ? " See: " + t.url: "")),
				void 0 !== e && e || a._cache[t] || (a._warn("Deprecation warning: " + t), a._cache[t] = !0)
			};
			a._warn = "undefined" != typeof console && (console.warn || console.log) ||
			function () {},
			a._cache = {},
			o._triggerMethod = function () {
				function t(t, e, n) {
					return n.toUpperCase()
				}
				var e = /(^|:)(\w)/gi;
				return function (r, i, o) {
					var a = arguments.length < 3;
					a && (o = i, i = o[0]);
					var c, s = "on" + i.replace(e, t),
					u = r[s];
					return n.isFunction(u) && (c = u.apply(r, a ? n.rest(o) : o)),
					n.isFunction(r.trigger) && (a + o.length > 1 ? r.trigger.apply(r, a ? o: [i].concat(n.drop(o, 0))) : r.trigger(i)),
					c
				}
			} (),
			o.triggerMethod = function () {
				return o._triggerMethod(this, arguments)
			},
			o.triggerMethodOn = function (t) {
				var e = n.isFunction(t.triggerMethod) ? t.triggerMethod: o.triggerMethod;
				return e.apply(t, n.rest(arguments))
			},
			o.MonitorDOMRefresh = function (t) {
				function e() {
					t._isShown = !0,
					i()
				}
				function r() {
					t._isRendered = !0,
					i()
				}
				function i() {
					t._isShown && t._isRendered && o.isNodeAttached(t.el) && n.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh")
				}
				t.on({
					show: e,
					render: r
				})
			},
			function (t) {
				function e(e, r, i, o) {
					var a = o.split(/\s+/);
					n.each(a, function (n) {
						var o = e[n];
						if (!o) throw new t.Error('Method "' + n + '" was configured as an event handler, but does not exist.');
						e.listenTo(r, i, o)
					})
				}
				function r(t, e, n, r) {
					t.listenTo(e, n, r)
				}
				function i(t, e, r, i) {
					var o = i.split(/\s+/);
					n.each(o, function (n) {
						var i = t[n];
						t.stopListening(e, r, i)
					})
				}
				function o(t, e, n, r) {
					t.stopListening(e, n, r)
				}
				function a(e, r, i, o, a) {
					if (r && i) {
						if (!n.isObject(i)) throw new t.Error({
							message: "Bindings must be an object or function.",
							url: "marionette.functions.html#marionettebindentityevents"
						});
						i = t._getValue(i, e),
						n.each(i, function (t, i) {
							n.isFunction(t) ? o(e, r, i, t) : a(e, r, i, t)
						})
					}
				}
				t.bindEntityEvents = function (t, n, i) {
					a(t, n, i, r, e)
				},
				t.unbindEntityEvents = function (t, e, n) {
					a(t, e, n, o, i)
				},
				t.proxyBindEntityEvents = function (e, n) {
					return t.bindEntityEvents(this, e, n)
				},
				t.proxyUnbindEntityEvents = function (e, n) {
					return t.unbindEntityEvents(this, e, n)
				}
			} (o);
			var c = ["description", "fileName", "lineNumber", "name", "message", "number"];
			return o.Error = o.extend.call(Error, {
				urlRoot: "http://marionettejs.com/docs/v" + o.VERSION + "/",
				constructor: function (t, e) {
					n.isObject(t) ? (e = t, t = e.message) : e || (e = {});
					var r = Error.call(this, t);
					n.extend(this, n.pick(r, c), n.pick(e, c)),
					this.captureStackTrace(),
					e.url && (this.url = this.urlRoot + e.url)
				},
				captureStackTrace: function () {
					Error.captureStackTrace && Error.captureStackTrace(this, o.Error)
				},
				toString: function () {
					return this.name + ": " + this.message + (this.url ? " See: " + this.url: "")
				}
			}),
			o.Error.extend = o.extend,
			o.Callbacks = function () {
				this._deferred = o.Deferred(),
				this._callbacks = []
			},
			n.extend(o.Callbacks.prototype, {
				add: function (t, e) {
					var r = n.result(this._deferred, "promise");
					this._callbacks.push({
						cb: t,
						ctx: e
					}),
					r.then(function (n) {
						e && (n.context = e),
						t.call(n.context, n.options)
					})
				},
				run: function (t, e) {
					this._deferred.resolve({
						options: t,
						context: e
					})
				},
				reset: function () {
					var t = this._callbacks;
					this._deferred = o.Deferred(),
					this._callbacks = [],
					n.each(t, function (t) {
						this.add(t.cb, t.ctx)
					},
					this)
				}
			}),
			o.Controller = function (t) {
				this.options = t || {},
				n.isFunction(this.initialize) && this.initialize(this.options)
			},
			o.Controller.extend = o.extend,
			n.extend(o.Controller.prototype, e.Events, {
				destroy: function () {
					return o._triggerMethod(this, "before:destroy", arguments),
					o._triggerMethod(this, "destroy", arguments),
					this.stopListening(),
					this.off(),
					this
				},
				triggerMethod: o.triggerMethod,
				mergeOptions: o.mergeOptions,
				getOption: o.proxyGetOption
			}),
			o.Object = function (t) {
				this.options = n.extend({},
				n.result(this, "options"), t),
				this.initialize.apply(this, arguments)
			},
			o.Object.extend = o.extend,
			n.extend(o.Object.prototype, e.Events, {
				initialize: function () {},
				destroy: function () {
					return this.triggerMethod("before:destroy"),
					this.triggerMethod("destroy"),
					this.stopListening(),
					this
				},
				triggerMethod: o.triggerMethod,
				mergeOptions: o.mergeOptions,
				getOption: o.proxyGetOption,
				bindEntityEvents: o.proxyBindEntityEvents,
				unbindEntityEvents: o.proxyUnbindEntityEvents
			}),
			o.Region = o.Object.extend({
				constructor: function (t) {
					if (this.options = t || {},
					this.el = this.getOption("el"), this.el = this.el instanceof e.$ ? this.el[0] : this.el, !this.el) throw new o.Error({
						name: "NoElError",
						message: 'An "el" must be specified for a region.'
					});
					this.$el = this.getEl(this.el),
					o.Object.call(this, t)
				},
				show: function (t, e) {
					if (this._ensureElement()) {
						this._ensureViewIsIntact(t);
						var r = e || {},
						i = t !== this.currentView,
						a = !!r.preventDestroy,
						c = !!r.forceShow,
						s = !!this.currentView,
						u = i && !a,
						l = i || c;
						if (s && this.triggerMethod("before:swapOut", this.currentView, this, e), this.currentView && delete this.currentView._parent, u ? this.empty() : s && l && this.currentView.off("destroy", this.empty, this), l) {
							t.once("destroy", this.empty, this),
							t.render(),
							t._parent = this,
							s && this.triggerMethod("before:swap", t, this, e),
							this.triggerMethod("before:show", t, this, e),
							o.triggerMethodOn(t, "before:show", t, this, e),
							s && this.triggerMethod("swapOut", this.currentView, this, e);
							var p = o.isNodeAttached(this.el),
							f = [],
							h = n.extend({
								triggerBeforeAttach: this.triggerBeforeAttach,
								triggerAttach: this.triggerAttach
							},
							r);
							return p && h.triggerBeforeAttach && (f = this._displayedViews(t), this._triggerAttach(f, "before:")),
							this.attachHtml(t),
							this.currentView = t,
							p && h.triggerAttach && (f = this._displayedViews(t), this._triggerAttach(f)),
							s && this.triggerMethod("swap", t, this, e),
							this.triggerMethod("show", t, this, e),
							o.triggerMethodOn(t, "show", t, this, e),
							this
						}
						return this
					}
				},
				triggerBeforeAttach: !0,
				triggerAttach: !0,
				_triggerAttach: function (t, e) {
					var r = (e || "") + "attach";
					n.each(t, function (t) {
						o.triggerMethodOn(t, r, t, this)
					},
					this)
				},
				_displayedViews: function (t) {
					return n.union([t], n.result(t, "_getNestedViews") || [])
				},
				_ensureElement: function () {
					if (n.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
						if (this.getOption("allowMissingEl")) return ! 1;
						throw new o.Error('An "el" ' + this.$el.selector + " must exist in DOM")
					}
					return ! 0
				},
				_ensureViewIsIntact: function (t) {
					if (!t) throw new o.Error({
						name: "ViewNotValid",
						message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
					});
					if (t.isDestroyed) throw new o.Error({
						name: "ViewDestroyedError",
						message: 'View (cid: "' + t.cid + '") has already been destroyed and cannot be used.'
					})
				},
				getEl: function (t) {
					return e.$(t, o._getValue(this.options.parentEl, this))
				},
				attachHtml: function (t) {
					this.$el.contents().detach(),
					this.el.appendChild(t.el)
				},
				empty: function (t) {
					var e = this.currentView,
					n = o._getValue(t, "preventDestroy", this);
					return e ? (e.off("destroy", this.empty, this), this.triggerMethod("before:empty", e), n || this._destroyView(), this.triggerMethod("empty", e), delete this.currentView, n && this.$el.contents().detach(), this) : void 0
				},
				_destroyView: function () {
					var t = this.currentView;
					t.destroy && !t.isDestroyed ? t.destroy() : t.remove && (t.remove(), t.isDestroyed = !0)
				},
				attachView: function (t) {
					return this.currentView = t,
					this
				},
				hasView: function () {
					return !! this.currentView
				},
				reset: function () {
					return this.empty(),
					this.$el && (this.el = this.$el.selector),
					delete this.$el,
					this
				}
			},
			{
				buildRegion: function (t, e) {
					if (n.isString(t)) return this._buildRegionFromSelector(t, e);
					if (t.selector || t.el || t.regionClass) return this._buildRegionFromObject(t, e);
					if (n.isFunction(t)) return this._buildRegionFromRegionClass(t);
					throw new o.Error({
						message: "Improper region configuration type.",
						url: "marionette.region.html#region-configuration-types"
					})
				},
				_buildRegionFromSelector: function (t, e) {
					return new e({
						el: t
					})
				},
				_buildRegionFromObject: function (t, e) {
					var r = t.regionClass || e,
					i = n.omit(t, "selector", "regionClass");
					return t.selector && !i.el && (i.el = t.selector),
					new r(i)
				},
				_buildRegionFromRegionClass: function (t) {
					return new t
				}
			}),
			o.RegionManager = o.Controller.extend({
				constructor: function (t) {
					this._regions = {},
					this.length = 0,
					o.Controller.call(this, t),
					this.addRegions(this.getOption("regions"))
				},
				addRegions: function (t, e) {
					return t = o._getValue(t, this, arguments),
					n.reduce(t, function (t, r, i) {
						return n.isString(r) && (r = {
							selector: r
						}),
						r.selector && (r = n.defaults({},
						r, e)),
						t[i] = this.addRegion(i, r),
						t
					},
					{},
					this)
				},
				addRegion: function (t, e) {
					var n;
					return n = e instanceof o.Region ? e: o.Region.buildRegion(e, o.Region),
					this.triggerMethod("before:add:region", t, n),
					n._parent = this,
					this._store(t, n),
					this.triggerMethod("add:region", t, n),
					n
				},
				get: function (t) {
					return this._regions[t]
				},
				getRegions: function () {
					return n.clone(this._regions)
				},
				removeRegion: function (t) {
					var e = this._regions[t];
					return this._remove(t, e),
					e
				},
				removeRegions: function () {
					var t = this.getRegions();
					return n.each(this._regions, function (t, e) {
						this._remove(e, t)
					},
					this),
					t
				},
				emptyRegions: function () {
					var t = this.getRegions();
					return n.invoke(t, "empty"),
					t
				},
				destroy: function () {
					return this.removeRegions(),
					o.Controller.prototype.destroy.apply(this, arguments)
				},
				_store: function (t, e) {
					this._regions[t] || this.length++,
					this._regions[t] = e
				},
				_remove: function (t, e) {
					this.triggerMethod("before:remove:region", t, e),
					e.empty(),
					e.stopListening(),
					delete e._parent,
					delete this._regions[t],
					this.length--,
					this.triggerMethod("remove:region", t, e)
				}
			}),
			o.actAsCollection(o.RegionManager.prototype, "_regions"),
			o.TemplateCache = function (t) {
				this.templateId = t
			},
			n.extend(o.TemplateCache, {
				templateCaches: {},
				get: function (t, e) {
					var n = this.templateCaches[t];
					return n || (n = new o.TemplateCache(t), this.templateCaches[t] = n),
					n.load(e)
				},
				clear: function () {
					var t, e = n.toArray(arguments),
					r = e.length;
					if (r > 0) for (t = 0; r > t; t++) delete this.templateCaches[e[t]];
					else this.templateCaches = {}
				}
			}),
			n.extend(o.TemplateCache.prototype, {
				load: function (t) {
					if (this.compiledTemplate) return this.compiledTemplate;
					var e = this.loadTemplate(this.templateId, t);
					return this.compiledTemplate = this.compileTemplate(e, t),
					this.compiledTemplate
				},
				loadTemplate: function (t) {
					var n = e.$(t).html();
					if (!n || 0 === n.length) throw new o.Error({
						name: "NoTemplateError",
						message: 'Could not find template: "' + t + '"'
					});
					return n
				},
				compileTemplate: function (t, e) {
					return n.template(t, e)
				}
			}),
			o.Renderer = {
				render: function (t, e) {
					if (!t) throw new o.Error({
						name: "TemplateNotFoundError",
						message: "Cannot render the template since its false, null or undefined."
					});
					var r = n.isFunction(t) ? t: o.TemplateCache.get(t);
					return r(e)
				}
			},
			o.View = e.View.extend({
				isDestroyed: !1,
				constructor: function (t) {
					n.bindAll(this, "render"),
					t = o._getValue(t, this),
					this.options = n.extend({},
					n.result(this, "options"), t),
					this._behaviors = o.Behaviors(this),
					e.View.call(this, this.options),
					o.MonitorDOMRefresh(this)
				},
				getTemplate: function () {
					return this.getOption("template")
				},
				serializeModel: function (t) {
					return t.toJSON.apply(t, n.rest(arguments))
				},
				mixinTemplateHelpers: function (t) {
					t = t || {};
					var e = this.getOption("templateHelpers");
					return e = o._getValue(e, this),
					n.extend(t, e)
				},
				normalizeUIKeys: function (t) {
					var e = n.result(this, "_uiBindings");
					return o.normalizeUIKeys(t, e || n.result(this, "ui"))
				},
				normalizeUIValues: function (t, e) {
					var r = n.result(this, "ui"),
					i = n.result(this, "_uiBindings");
					return o.normalizeUIValues(t, i || r, e)
				},
				configureTriggers: function () {
					if (this.triggers) {
						var t = this.normalizeUIKeys(n.result(this, "triggers"));
						return n.reduce(t, function (t, e, n) {
							return t[n] = this._buildViewTrigger(e),
							t
						},
						{},
						this)
					}
				},
				delegateEvents: function (t) {
					return this._delegateDOMEvents(t),
					this.bindEntityEvents(this.model, this.getOption("modelEvents")),
					this.bindEntityEvents(this.collection, this.getOption("collectionEvents")),
					n.each(this._behaviors, function (t) {
						t.bindEntityEvents(this.model, t.getOption("modelEvents")),
						t.bindEntityEvents(this.collection, t.getOption("collectionEvents"))
					},
					this),
					this
				},
				_delegateDOMEvents: function (t) {
					var r = o._getValue(t || this.events, this);
					r = this.normalizeUIKeys(r),
					n.isUndefined(t) && (this.events = r);
					var i = {},
					a = n.result(this, "behaviorEvents") || {},
					c = this.configureTriggers(),
					s = n.result(this, "behaviorTriggers") || {};
					n.extend(i, a, r, c, s),
					e.View.prototype.delegateEvents.call(this, i)
				},
				undelegateEvents: function () {
					return e.View.prototype.undelegateEvents.apply(this, arguments),
					this.unbindEntityEvents(this.model, this.getOption("modelEvents")),
					this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")),
					n.each(this._behaviors, function (t) {
						t.unbindEntityEvents(this.model, t.getOption("modelEvents")),
						t.unbindEntityEvents(this.collection, t.getOption("collectionEvents"))
					},
					this),
					this
				},
				_ensureViewIsIntact: function () {
					if (this.isDestroyed) throw new o.Error({
						name: "ViewDestroyedError",
						message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
					})
				},
				destroy: function () {
					if (this.isDestroyed) return this;
					var t = n.toArray(arguments);
					return this.triggerMethod.apply(this, ["before:destroy"].concat(t)),
					this.isDestroyed = !0,
					this.triggerMethod.apply(this, ["destroy"].concat(t)),
					this.unbindUIElements(),
					this.isRendered = !1,
					this.remove(),
					n.invoke(this._behaviors, "destroy", t),
					this
				},
				bindUIElements: function () {
					this._bindUIElements(),
					n.invoke(this._behaviors, this._bindUIElements)
				},
				_bindUIElements: function () {
					if (this.ui) {
						this._uiBindings || (this._uiBindings = this.ui);
						var t = n.result(this, "_uiBindings");
						this.ui = {},
						n.each(t, function (t, e) {
							this.ui[e] = this.$(t)
						},
						this)
					}
				},
				unbindUIElements: function () {
					this._unbindUIElements(),
					n.invoke(this._behaviors, this._unbindUIElements)
				},
				_unbindUIElements: function () {
					this.ui && this._uiBindings && (n.each(this.ui, function (t, e) {
						delete this.ui[e]
					},
					this), this.ui = this._uiBindings, delete this._uiBindings)
				},
				_buildViewTrigger: function (t) {
					var e = n.isObject(t),
					r = n.defaults({},
					e ? t: {},
					{
						preventDefault: !0,
						stopPropagation: !0
					}),
					i = e ? r.event: t;
					return function (t) {
						t && (t.preventDefault && r.preventDefault && t.preventDefault(), t.stopPropagation && r.stopPropagation && t.stopPropagation());
						var e = {
							view: this,
							model: this.model,
							collection: this.collection
						};
						this.triggerMethod(i, e)
					}
				},
				setElement: function () {
					var t = e.View.prototype.setElement.apply(this, arguments);
					return n.invoke(this._behaviors, "proxyViewProperties", this),
					t
				},
				triggerMethod: function () {
					var t = o._triggerMethod(this, arguments);
					return this._triggerEventOnBehaviors(arguments),
					this._triggerEventOnParentLayout(arguments[0], n.rest(arguments)),
					t
				},
				_triggerEventOnBehaviors: function (t) {
					for (var e = o._triggerMethod, n = this._behaviors, r = 0, i = n && n.length; i > r; r++) e(n[r], t)
				},
				_triggerEventOnParentLayout: function (t, e) {
					var r = this._parentLayoutView();
					if (r) {
						var i = o.getOption(r, "childViewEventPrefix"),
						a = i + ":" + t;
						o._triggerMethod(r, [a, this].concat(e));
						var c = o.getOption(r, "childEvents"),
						s = r.normalizeMethods(c);
						s && n.isFunction(s[t]) && s[t].apply(r, [this].concat(e))
					}
				},
				_getImmediateChildren: function () {
					return []
				},
				_getNestedViews: function () {
					var t = this._getImmediateChildren();
					return t.length ? n.reduce(t, function (t, e) {
						return e._getNestedViews ? t.concat(e._getNestedViews()) : t
					},
					t) : t
				},
				_getAncestors: function () {
					for (var t = [], e = this._parent; e;) t.push(e),
					e = e._parent;
					return t
				},
				_parentLayoutView: function () {
					var t = this._getAncestors();
					return n.find(t, function (t) {
						return t instanceof o.LayoutView
					})
				},
				normalizeMethods: o.normalizeMethods,
				mergeOptions: o.mergeOptions,
				getOption: o.proxyGetOption,
				bindEntityEvents: o.proxyBindEntityEvents,
				unbindEntityEvents: o.proxyUnbindEntityEvents
			}),
			o.ItemView = o.View.extend({
				constructor: function () {
					o.View.apply(this, arguments)
				},
				serializeData: function () {
					if (!this.model && !this.collection) return {};
					var t = [this.model || this.collection];
					return arguments.length && t.push.apply(t, arguments),
					this.model ? this.serializeModel.apply(this, t) : {
						items: this.serializeCollection.apply(this, t)
					}
				},
				serializeCollection: function (t) {
					return t.toJSON.apply(t, n.rest(arguments))
				},
				render: function () {
					return this._ensureViewIsIntact(),
					this.triggerMethod("before:render", this),
					this._renderTemplate(),
					this.isRendered = !0,
					this.bindUIElements(),
					this.triggerMethod("render", this),
					this
				},
				_renderTemplate: function () {
					var t = this.getTemplate();
					if (t !== !1) {
						if (!t) throw new o.Error({
							name: "UndefinedTemplateError",
							message: "Cannot render the template since it is null or undefined."
						});
						var e = this.mixinTemplateHelpers(this.serializeData()),
						n = o.Renderer.render(t, e, this);
						return this.attachElContent(n),
						this
					}
				},
				attachElContent: function (t) {
					return this.$el.html(t),
					this
				}
			}),
			o.CollectionView = o.View.extend({
				childViewEventPrefix: "childview",
				sort: !0,
				constructor: function () {
					this.once("render", this._initialEvents),
					this._initChildViewStorage(),
					o.View.apply(this, arguments),
					this.on({
						"before:show": this._onBeforeShowCalled,
						show: this._onShowCalled,
						"before:attach": this._onBeforeAttachCalled,
						attach: this._onAttachCalled
					}),
					this.initRenderBuffer()
				},
				initRenderBuffer: function () {
					this._bufferedChildren = []
				},
				startBuffering: function () {
					this.initRenderBuffer(),
					this.isBuffering = !0
				},
				endBuffering: function () {
					var t, e = this._isShown && o.isNodeAttached(this.el);
					this.isBuffering = !1,
					this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "before:show"),
					e && this._triggerBeforeAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "before:attach")),
					this.attachBuffer(this, this._createBuffer()),
					e && this._triggerAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "attach")),
					this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "show"),
					this.initRenderBuffer()
				},
				_triggerMethodMany: function (t, e, r) {
					var i = n.drop(arguments, 3);
					n.each(t, function (t) {
						o.triggerMethodOn.apply(t, [t, r, t, e].concat(i))
					})
				},
				_initialEvents: function () {
					this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
				},
				_onCollectionAdd: function (t, e, r) {
					var i;
					if (i = void 0 !== r.at ? r.at: n.indexOf(this._filteredSortedModels(), t), this._shouldAddChild(t, i)) {
						this.destroyEmptyView();
						var o = this.getChildView(t);
						this.addChild(t, o, i)
					}
				},
				_onCollectionRemove: function (t) {
					var e = this.children.findByModel(t);
					this.removeChildView(e),
					this.checkEmpty()
				},
				_onBeforeShowCalled: function () {
					this._triggerBeforeAttach = this._triggerAttach = !1,
					this.children.each(function (t) {
						o.triggerMethodOn(t, "before:show", t)
					})
				},
				_onShowCalled: function () {
					this.children.each(function (t) {
						o.triggerMethodOn(t, "show", t)
					})
				},
				_onBeforeAttachCalled: function () {
					this._triggerBeforeAttach = !0
				},
				_onAttachCalled: function () {
					this._triggerAttach = !0
				},
				render: function () {
					return this._ensureViewIsIntact(),
					this.triggerMethod("before:render", this),
					this._renderChildren(),
					this.isRendered = !0,
					this.triggerMethod("render", this),
					this
				},
				reorder: function () {
					var t = this.children,
					e = this._filteredSortedModels(),
					r = n.find(e, function (e) {
						return ! t.findByModel(e)
					});
					if (r) this.render();
					else {
						var i = n.map(e, function (e, n) {
							var r = t.findByModel(e);
							return r._index = n,
							r.el
						});
						this.triggerMethod("before:reorder"),
						this._appendReorderedChildren(i),
						this.triggerMethod("reorder")
					}
				},
				resortView: function () {
					o.getOption(this, "reorderOnSort") ? this.reorder() : this.render()
				},
				_sortViews: function () {
					var t = this._filteredSortedModels(),
					e = n.find(t, function (t, e) {
						var n = this.children.findByModel(t);
						return ! n || n._index !== e
					},
					this);
					e && this.resortView()
				},
				_emptyViewIndex: -1,
				_appendReorderedChildren: function (t) {
					this.$el.append(t)
				},
				_renderChildren: function () {
					this.destroyEmptyView(),
					this.destroyChildren({
						checkEmpty: !1
					}),
					this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this), this.children.isEmpty() && this.showEmptyView())
				},
				showCollection: function () {
					var t, e = this._filteredSortedModels();
					n.each(e, function (e, n) {
						t = this.getChildView(e),
						this.addChild(e, t, n)
					},
					this)
				},
				_filteredSortedModels: function () {
					var t, e = this.getViewComparator();
					return t = e ? n.isString(e) || 1 === e.length ? this.collection.sortBy(e, this) : n.clone(this.collection.models).sort(n.bind(e, this)) : this.collection.models,
					this.getOption("filter") && (t = n.filter(t, function (t, e) {
						return this._shouldAddChild(t, e)
					},
					this)),
					t
				},
				showEmptyView: function () {
					var t = this.getEmptyView();
					if (t && !this._showingEmptyView) {
						this.triggerMethod("before:render:empty"),
						this._showingEmptyView = !0;
						var n = new e.Model;
						this.addEmptyView(n, t),
						this.triggerMethod("render:empty")
					}
				},
				destroyEmptyView: function () {
					this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty"))
				},
				getEmptyView: function () {
					return this.getOption("emptyView")
				},
				addEmptyView: function (t, e) {
					var r, i = this._isShown && !this.isBuffering && o.isNodeAttached(this.el),
					a = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
					n.isFunction(a) && (a = a.call(this, t, this._emptyViewIndex));
					var c = this.buildChildView(t, e, a);
					c._parent = this,
					this.proxyChildEvents(c),
					this._isShown && o.triggerMethodOn(c, "before:show", c),
					this.children.add(c),
					i && this._triggerBeforeAttach && (r = [c].concat(c._getNestedViews()), c.once("render", function () {
						this._triggerMethodMany(r, this, "before:attach")
					},
					this)),
					this.renderChildView(c, this._emptyViewIndex),
					i && this._triggerAttach && (r = [c].concat(c._getNestedViews()), this._triggerMethodMany(r, this, "attach")),
					this._isShown && o.triggerMethodOn(c, "show", c)
				},
				getChildView: function () {
					var t = this.getOption("childView");
					if (!t) throw new o.Error({
						name: "NoChildViewError",
						message: 'A "childView" must be specified'
					});
					return t
				},
				addChild: function (t, e, n) {
					var r = this.getOption("childViewOptions");
					r = o._getValue(r, this, [t, n]);
					var i = this.buildChildView(t, e, r);
					return this._updateIndices(i, !0, n),
					this.triggerMethod("before:add:child", i),
					this._addChildView(i, n),
					this.triggerMethod("add:child", i),
					i._parent = this,
					i
				},
				_updateIndices: function (t, e, n) {
					this.getOption("sort") && (e && (t._index = n), this.children.each(function (n) {
						n._index >= t._index && (n._index += e ? 1 : -1)
					}))
				},
				_addChildView: function (t, e) {
					var n, r = this._isShown && !this.isBuffering && o.isNodeAttached(this.el);
					this.proxyChildEvents(t),
					this._isShown && !this.isBuffering && o.triggerMethodOn(t, "before:show", t),
					this.children.add(t),
					r && this._triggerBeforeAttach && (n = [t].concat(t._getNestedViews()), t.once("render", function () {
						this._triggerMethodMany(n, this, "before:attach")
					},
					this)),
					this.renderChildView(t, e),
					r && this._triggerAttach && (n = [t].concat(t._getNestedViews()), this._triggerMethodMany(n, this, "attach")),
					this._isShown && !this.isBuffering && o.triggerMethodOn(t, "show", t)
				},
				renderChildView: function (t, e) {
					return t.render(),
					this.attachHtml(this, t, e),
					t
				},
				buildChildView: function (t, e, r) {
					var i = n.extend({
						model: t
					},
					r);
					return new e(i)
				},
				removeChildView: function (t) {
					return t && (this.triggerMethod("before:remove:child", t), t.destroy ? t.destroy() : t.remove && t.remove(), delete t._parent, this.stopListening(t), this.children.remove(t), this.triggerMethod("remove:child", t), this._updateIndices(t, !1)),
					t
				},
				isEmpty: function () {
					return ! this.collection || 0 === this.collection.length
				},
				checkEmpty: function () {
					this.isEmpty(this.collection) && this.showEmptyView()
				},
				attachBuffer: function (t, e) {
					t.$el.append(e)
				},
				_createBuffer: function () {
					var t = document.createDocumentFragment();
					return n.each(this._bufferedChildren, function (e) {
						t.appendChild(e.el)
					}),
					t
				},
				attachHtml: function (t, e, n) {
					t.isBuffering ? t._bufferedChildren.splice(n, 0, e) : t._insertBefore(e, n) || t._insertAfter(e)
				},
				_insertBefore: function (t, e) {
					var n, r = this.getOption("sort") && e < this.children.length - 1;
					return r && (n = this.children.find(function (t) {
						return t._index === e + 1
					})),
					n ? (n.$el.before(t.el), !0) : !1
				},
				_insertAfter: function (t) {
					this.$el.append(t.el)
				},
				_initChildViewStorage: function () {
					this.children = new e.ChildViewContainer
				},
				destroy: function () {
					return this.isDestroyed ? this: (this.triggerMethod("before:destroy:collection"), this.destroyChildren({
						checkEmpty: !1
					}), this.triggerMethod("destroy:collection"), o.View.prototype.destroy.apply(this, arguments))
				},
				destroyChildren: function (t) {
					var e = t || {},
					r = !0,
					i = this.children.map(n.identity);
					return n.isUndefined(e.checkEmpty) || (r = e.checkEmpty),
					this.children.each(this.removeChildView, this),
					r && this.checkEmpty(),
					i
				},
				_shouldAddChild: function (t, e) {
					var r = this.getOption("filter");
					return ! n.isFunction(r) || r.call(this, t, e, this.collection)
				},
				proxyChildEvents: function (t) {
					var e = this.getOption("childViewEventPrefix");
					this.listenTo(t, "all", function () {
						var r = n.toArray(arguments),
						i = r[0],
						o = this.normalizeMethods(n.result(this, "childEvents"));
						r[0] = e + ":" + i,
						r.splice(1, 0, t),
						"undefined" != typeof o && n.isFunction(o[i]) && o[i].apply(this, r.slice(1)),
						this.triggerMethod.apply(this, r)
					})
				},
				_getImmediateChildren: function () {
					return n.values(this.children._views)
				},
				getViewComparator: function () {
					return this.getOption("viewComparator")
				}
			}),
			o.CompositeView = o.CollectionView.extend({
				constructor: function () {
					o.CollectionView.apply(this, arguments)
				},
				_initialEvents: function () {
					this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
				},
				getChildView: function () {
					var t = this.getOption("childView") || this.constructor;
					return t
				},
				serializeData: function () {
					var t = {};
					return this.model && (t = n.partial(this.serializeModel, this.model).apply(this, arguments)),
					t
				},
				render: function () {
					return this._ensureViewIsIntact(),
					this._isRendering = !0,
					this.resetChildViewContainer(),
					this.triggerMethod("before:render", this),
					this._renderTemplate(),
					this._renderChildren(),
					this._isRendering = !1,
					this.isRendered = !0,
					this.triggerMethod("render", this),
					this
				},
				_renderChildren: function () { (this.isRendered || this._isRendering) && o.CollectionView.prototype._renderChildren.call(this)
				},
				_renderTemplate: function () {
					var t = {};
					t = this.serializeData(),
					t = this.mixinTemplateHelpers(t),
					this.triggerMethod("before:render:template");
					var e = this.getTemplate(),
					n = o.Renderer.render(e, t, this);
					this.attachElContent(n),
					this.bindUIElements(),
					this.triggerMethod("render:template")
				},
				attachElContent: function (t) {
					return this.$el.html(t),
					this
				},
				attachBuffer: function (t, e) {
					var n = this.getChildViewContainer(t);
					n.append(e)
				},
				_insertAfter: function (t) {
					var e = this.getChildViewContainer(this, t);
					e.append(t.el)
				},
				_appendReorderedChildren: function (t) {
					var e = this.getChildViewContainer(this);
					e.append(t)
				},
				getChildViewContainer: function (t) {
					if (t.$childViewContainer) return t.$childViewContainer;
					var e, n = o.getOption(t, "childViewContainer");
					if (n) {
						var r = o._getValue(n, t);
						if (e = "@" === r.charAt(0) && t.ui ? t.ui[r.substr(4)] : t.$(r), e.length <= 0) throw new o.Error({
							name: "ChildViewContainerMissingError",
							message: 'The specified "childViewContainer" was not found: ' + t.childViewContainer
						})
					} else e = t.$el;
					return t.$childViewContainer = e,
					e
				},
				resetChildViewContainer: function () {
					this.$childViewContainer && (this.$childViewContainer = void 0)
				}
			}),
			o.LayoutView = o.ItemView.extend({
				regionClass: o.Region,
				options: {
					destroyImmediate: !1
				},
				childViewEventPrefix: "childview",
				constructor: function (t) {
					t = t || {},
					this._firstRender = !0,
					this._initializeRegions(t),
					o.ItemView.call(this, t)
				},
				render: function () {
					return this._ensureViewIsIntact(),
					this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(),
					o.ItemView.prototype.render.apply(this, arguments)
				},
				destroy: function () {
					return this.isDestroyed ? this: (this.getOption("destroyImmediate") === !0 && this.$el.remove(), this.regionManager.destroy(), o.ItemView.prototype.destroy.apply(this, arguments))
				},
				showChildView: function (t, e) {
					return this.getRegion(t).show(e)
				},
				getChildView: function (t) {
					return this.getRegion(t).currentView
				},
				addRegion: function (t, e) {
					var n = {};
					return n[t] = e,
					this._buildRegions(n)[t]
				},
				addRegions: function (t) {
					return this.regions = n.extend({},
					this.regions, t),
					this._buildRegions(t)
				},
				removeRegion: function (t) {
					return delete this.regions[t],
					this.regionManager.removeRegion(t)
				},
				getRegion: function (t) {
					return this.regionManager.get(t)
				},
				getRegions: function () {
					return this.regionManager.getRegions()
				},
				_buildRegions: function (t) {
					var e = {
						regionClass: this.getOption("regionClass"),
						parentEl: n.partial(n.result, this, "el")
					};
					return this.regionManager.addRegions(t, e)
				},
				_initializeRegions: function (t) {
					var e;
					this._initRegionManager(),
					e = o._getValue(this.regions, this, [t]) || {};
					var r = this.getOption.call(t, "regions");
					r = o._getValue(r, this, [t]),
					n.extend(e, r),
					e = this.normalizeUIValues(e, ["selector", "el"]),
					this.addRegions(e)
				},
				_reInitializeRegions: function () {
					this.regionManager.invoke("reset")
				},
				getRegionManager: function () {
					return new o.RegionManager
				},
				_initRegionManager: function () {
					this.regionManager = this.getRegionManager(),
					this.regionManager._parent = this,
					this.listenTo(this.regionManager, "before:add:region", function (t) {
						this.triggerMethod("before:add:region", t)
					}),
					this.listenTo(this.regionManager, "add:region", function (t, e) {
						this[t] = e,
						this.triggerMethod("add:region", t, e)
					}),
					this.listenTo(this.regionManager, "before:remove:region", function (t) {
						this.triggerMethod("before:remove:region", t)
					}),
					this.listenTo(this.regionManager, "remove:region", function (t, e) {
						delete this[t],
						this.triggerMethod("remove:region", t, e)
					})
				},
				_getImmediateChildren: function () {
					return n.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
				}
			}),
			o.Behavior = o.Object.extend({
				constructor: function (t, e) {
					this.view = e,
					this.defaults = n.result(this, "defaults") || {},
					this.options = n.extend({},
					this.defaults, t),
					this.ui = n.extend({},
					n.result(e, "ui"), n.result(this, "ui")),
					o.Object.apply(this, arguments)
				},
				$: function () {
					return this.view.$.apply(this.view, arguments)
				},
				destroy: function () {
					return this.stopListening(),
					this
				},
				proxyViewProperties: function (t) {
					this.$el = t.$el,
					this.el = t.el
				}
			}),
			o.Behaviors = function (t, e) {
				function n(t, r) {
					return e.isObject(t.behaviors) ? (r = n.parseBehaviors(t, r || e.result(t, "behaviors")), n.wrap(t, r, e.keys(a)), r) : {}
				}
				function r(t, e) {
					this._view = t,
					this._behaviors = e,
					this._triggers = {}
				}
				function i(t) {
					return t._uiBindings || t.ui
				}
				var o = /^(\S+)\s*(.*)$/,
				a = {
					behaviorTriggers: function (t, e) {
						var n = new r(this, e);
						return n.buildBehaviorTriggers()
					},
					behaviorEvents: function (n, r) {
						var a = {};
						return e.each(r, function (n, r) {
							var c = {},
							s = e.clone(e.result(n, "events")) || {};
							s = t.normalizeUIKeys(s, i(n));
							var u = 0;
							e.each(s, function (t, i) {
								var a = i.match(o),
								s = a[1] + "." + [this.cid, r, u++, " "].join(""),
								l = a[2],
								p = s + l,
								f = e.isFunction(t) ? t: n[t];
								c[p] = e.bind(f, n)
							},
							this),
							a = e.extend(a, c)
						},
						this),
						a
					}
				};
				return e.extend(n, {
					behaviorsLookup: function () {
						throw new t.Error({
							message: "You must define where your behaviors are stored.",
							url: "marionette.behaviors.html#behaviorslookup"
						})
					},
					getBehaviorClass: function (e, r) {
						return e.behaviorClass ? e.behaviorClass: t._getValue(n.behaviorsLookup, this, [e, r])[r]
					},
					parseBehaviors: function (t, r) {
						return e.chain(r).map(function (r, i) {
							var o = n.getBehaviorClass(r, i),
							a = new o(r, t),
							c = n.parseBehaviors(t, e.result(a, "behaviors"));
							return [a].concat(c)
						}).flatten().value()
					},
					wrap: function (t, n, r) {
						e.each(r, function (r) {
							t[r] = e.partial(a[r], t[r], n)
						})
					}
				}),
				e.extend(r.prototype, {
					buildBehaviorTriggers: function () {
						return e.each(this._behaviors, this._buildTriggerHandlersForBehavior, this),
						this._triggers
					},
					_buildTriggerHandlersForBehavior: function (n, r) {
						var o = e.clone(e.result(n, "triggers")) || {};
						o = t.normalizeUIKeys(o, i(n)),
						e.each(o, e.bind(this._setHandlerForBehavior, this, n, r))
					},
					_setHandlerForBehavior: function (t, e, n, r) {
						var i = r.replace(/^\S+/, function (t) {
							return t + ".behaviortriggers" + e
						});
						this._triggers[i] = this._view._buildViewTrigger(n)
					}
				}),
				n
			} (o, n),
			o.AppRouter = e.Router.extend({
				constructor: function (t) {
					this.options = t || {},
					e.Router.apply(this, arguments);
					var n = this.getOption("appRoutes"),
					r = this._getController();
					this.processAppRoutes(r, n),
					this.on("route", this._processOnRoute, this)
				},
				appRoute: function (t, e) {
					var n = this._getController();
					this._addAppRoute(n, t, e)
				},
				_processOnRoute: function (t, e) {
					if (n.isFunction(this.onRoute)) {
						var r = n.invert(this.getOption("appRoutes"))[t];
						this.onRoute(t, r, e)
					}
				},
				processAppRoutes: function (t, e) {
					if (e) {
						var r = n.keys(e).reverse();
						n.each(r, function (n) {
							this._addAppRoute(t, n, e[n])
						},
						this)
					}
				},
				_getController: function () {
					return this.getOption("controller")
				},
				_addAppRoute: function (t, e, r) {
					var i = t[r];
					if (!i) throw new o.Error('Method "' + r + '" was not found on the controller');
					this.route(e, r, n.bind(i, t))
				},
				mergeOptions: o.mergeOptions,
				getOption: o.proxyGetOption,
				triggerMethod: o.triggerMethod,
				bindEntityEvents: o.proxyBindEntityEvents,
				unbindEntityEvents: o.proxyUnbindEntityEvents
			}),
			o.Application = o.Object.extend({
				constructor: function (t) {
					this._initializeRegions(t),
					this._initCallbacks = new o.Callbacks,
					this.submodules = {},
					n.extend(this, t),
					this._initChannel(),
					o.Object.call(this, t)
				},
				execute: function () {
					this.commands.execute.apply(this.commands, arguments)
				},
				request: function () {
					return this.reqres.request.apply(this.reqres, arguments)
				},
				addInitializer: function (t) {
					this._initCallbacks.add(t)
				},
				start: function (t) {
					this.triggerMethod("before:start", t),
					this._initCallbacks.run(t, this),
					this.triggerMethod("start", t)
				},
				addRegions: function (t) {
					return this._regionManager.addRegions(t)
				},
				emptyRegions: function () {
					return this._regionManager.emptyRegions()
				},
				removeRegion: function (t) {
					return this._regionManager.removeRegion(t)
				},
				getRegion: function (t) {
					return this._regionManager.get(t)
				},
				getRegions: function () {
					return this._regionManager.getRegions()
				},
				module: function (t, e) {
					var r = o.Module.getClass(e),
					i = n.toArray(arguments);
					return i.unshift(this),
					r.create.apply(r, i)
				},
				getRegionManager: function () {
					return new o.RegionManager
				},
				_initializeRegions: function (t) {
					var e = n.isFunction(this.regions) ? this.regions(t) : this.regions || {};
					this._initRegionManager();
					var r = o.getOption(t, "regions");
					return n.isFunction(r) && (r = r.call(this, t)),
					n.extend(e, r),
					this.addRegions(e),
					this
				},
				_initRegionManager: function () {
					this._regionManager = this.getRegionManager(),
					this._regionManager._parent = this,
					this.listenTo(this._regionManager, "before:add:region", function () {
						o._triggerMethod(this, "before:add:region", arguments)
					}),
					this.listenTo(this._regionManager, "add:region", function (t, e) {
						this[t] = e,
						o._triggerMethod(this, "add:region", arguments)
					}),
					this.listenTo(this._regionManager, "before:remove:region", function () {
						o._triggerMethod(this, "before:remove:region", arguments)
					}),
					this.listenTo(this._regionManager, "remove:region", function (t) {
						delete this[t],
						o._triggerMethod(this, "remove:region", arguments)
					})
				},
				_initChannel: function () {
					this.channelName = n.result(this, "channelName") || "global",
					this.channel = n.result(this, "channel") || e.Wreqr.radio.channel(this.channelName),
					this.vent = n.result(this, "vent") || this.channel.vent,
					this.commands = n.result(this, "commands") || this.channel.commands,
					this.reqres = n.result(this, "reqres") || this.channel.reqres
				}
			}),
			o.Module = function (t, e, r) {
				this.moduleName = t,
				this.options = n.extend({},
				this.options, r),
				this.initialize = r.initialize || this.initialize,
				this.submodules = {},
				this._setupInitializersAndFinalizers(),
				this.app = e,
				n.isFunction(this.initialize) && this.initialize(t, e, this.options)
			},
			o.Module.extend = o.extend,
			n.extend(o.Module.prototype, e.Events, {
				startWithParent: !0,
				initialize: function () {},
				addInitializer: function (t) {
					this._initializerCallbacks.add(t)
				},
				addFinalizer: function (t) {
					this._finalizerCallbacks.add(t)
				},
				start: function (t) {
					this._isInitialized || (n.each(this.submodules, function (e) {
						e.startWithParent && e.start(t)
					}), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
				},
				stop: function () {
					this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), n.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), this.triggerMethod("stop"))
				},
				addDefinition: function (t, e) {
					this._runModuleDefinition(t, e)
				},
				_runModuleDefinition: function (t, r) {
					if (t) {
						var i = n.flatten([this, this.app, e, o, e.$, n, r]);
						t.apply(this, i)
					}
				},
				_setupInitializersAndFinalizers: function () {
					this._initializerCallbacks = new o.Callbacks,
					this._finalizerCallbacks = new o.Callbacks
				},
				triggerMethod: o.triggerMethod
			}),
			n.extend(o.Module, {
				create: function (t, e, r) {
					var i = t,
					o = n.drop(arguments, 3);
					e = e.split(".");
					var a = e.length,
					c = [];
					return c[a - 1] = r,
					n.each(e, function (e, n) {
						var a = i;
						i = this._getModule(a, e, t, r),
						this._addModuleDefinition(a, i, c[n], o)
					},
					this),
					i
				},
				_getModule: function (t, e, r, i) {
					var o = n.extend({},
					i),
					a = this.getClass(i),
					c = t[e];
					return c || (c = new a(e, r, o), t[e] = c, t.submodules[e] = c),
					c
				},
				getClass: function (t) {
					var e = o.Module;
					return t ? t.prototype instanceof e ? t: t.moduleClass || e: e
				},
				_addModuleDefinition: function (t, e, n, r) {
					var i = this._getDefine(n),
					o = this._getStartWithParent(n, e);
					i && e.addDefinition(i, r),
					this._addStartWithParent(t, e, o)
				},
				_getStartWithParent: function (t, e) {
					var r;
					return n.isFunction(t) && t.prototype instanceof o.Module ? (r = e.constructor.prototype.startWithParent, n.isUndefined(r) ? !0 : r) : n.isObject(t) ? (r = t.startWithParent, n.isUndefined(r) ? !0 : r) : !0
				},
				_getDefine: function (t) {
					return ! n.isFunction(t) || t.prototype instanceof o.Module ? n.isObject(t) ? t.define: null: t
				},
				_addStartWithParent: function (t, e, n) {
					e.startWithParent = e.startWithParent && n,
					e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function (t) {
						e.startWithParent && e.start(t)
					}))
				}
			}),
			o
		})
	},
	{}],
	85 : [function (t, e, n) { !
		function (r, i) {
			if ("function" == typeof define && define.amd) define(["backbone", "underscore"], function (t, e) {
				return i(t, e)
			});
			else if ("undefined" != typeof n) {
				var o = t(88),
				a = t(105);
				e.exports = i(o, a)
			} else i(r.Backbone, r._)
		} (this, function (t, e) {
			"use strict";
			var n = t.ChildViewContainer;
			return t.ChildViewContainer = function (t, e) {
				var n = function (t) {
					this._views = {},
					this._indexByModel = {},
					this._indexByCustom = {},
					this._updateLength(),
					e.each(t, this.add, this)
				};
				e.extend(n.prototype, {
					add: function (t, e) {
						var n = t.cid;
						return this._views[n] = t,
						t.model && (this._indexByModel[t.model.cid] = n),
						e && (this._indexByCustom[e] = n),
						this._updateLength(),
						this
					},
					findByModel: function (t) {
						return this.findByModelCid(t.cid)
					},
					findByModelCid: function (t) {
						var e = this._indexByModel[t];
						return this.findByCid(e)
					},
					findByCustom: function (t) {
						var e = this._indexByCustom[t];
						return this.findByCid(e)
					},
					findByIndex: function (t) {
						return e.values(this._views)[t]
					},
					findByCid: function (t) {
						return this._views[t]
					},
					remove: function (t) {
						var n = t.cid;
						return t.model && delete this._indexByModel[t.model.cid],
						e.any(this._indexByCustom, function (t, e) {
							return t === n ? (delete this._indexByCustom[e], !0) : void 0
						},
						this),
						delete this._views[n],
						this._updateLength(),
						this
					},
					call: function (t) {
						this.apply(t, e.tail(arguments))
					},
					apply: function (t, n) {
						e.each(this._views, function (r) {
							e.isFunction(r[t]) && r[t].apply(r, n || [])
						})
					},
					_updateLength: function () {
						this.length = e.size(this._views)
					}
				});
				var r = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce"];
				return e.each(r, function (t) {
					n.prototype[t] = function () {
						var n = e.values(this._views),
						r = [n].concat(e.toArray(arguments));
						return e[t].apply(e, r)
					}
				}),
				n
			} (t, e),
			t.ChildViewContainer.VERSION = "0.1.8",
			t.ChildViewContainer.noConflict = function () {
				return t.ChildViewContainer = n,
				this
			},
			t.ChildViewContainer
		})
	},
	{}],
	86 : [function (t, e, n) { !
		function (r, i) {
			if ("function" == typeof define && define.amd) define(["backbone", "underscore"], function (t, e) {
				return i(t, e)
			});
			else if ("undefined" != typeof n) {
				var o = t(88),
				a = t(105);
				e.exports = i(o, a)
			} else i(r.Backbone, r._)
		} (this, function (t, e) {
			"use strict";
			var n = t.Wreqr,
			r = t.Wreqr = {};
			return t.Wreqr.VERSION = "1.3.3",
			t.Wreqr.noConflict = function () {
				return t.Wreqr = n,
				this
			},
			r.Handlers = function (t, e) {
				var n = function (t) {
					this.options = t,
					this._wreqrHandlers = {},
					e.isFunction(this.initialize) && this.initialize(t)
				};
				return n.extend = t.Model.extend,
				e.extend(n.prototype, t.Events, {
					setHandlers: function (t) {
						e.each(t, function (t, n) {
							var r = null;
							e.isObject(t) && !e.isFunction(t) && (r = t.context, t = t.callback),
							this.setHandler(n, t, r)
						},
						this)
					},
					setHandler: function (t, e, n) {
						var r = {
							callback: e,
							context: n
						};
						this._wreqrHandlers[t] = r,
						this.trigger("handler:add", t, e, n)
					},
					hasHandler: function (t) {
						return !! this._wreqrHandlers[t]
					},
					getHandler: function (t) {
						var e = this._wreqrHandlers[t];
						if (e) return function () {
							return e.callback.apply(e.context, arguments)
						}
					},
					removeHandler: function (t) {
						delete this._wreqrHandlers[t]
					},
					removeAllHandlers: function () {
						this._wreqrHandlers = {}
					}
				}),
				n
			} (t, e),
			r.CommandStorage = function () {
				var n = function (t) {
					this.options = t,
					this._commands = {},
					e.isFunction(this.initialize) && this.initialize(t)
				};
				return e.extend(n.prototype, t.Events, {
					getCommands: function (t) {
						var e = this._commands[t];
						return e || (e = {
							command: t,
							instances: []
						},
						this._commands[t] = e),
						e
					},
					addCommand: function (t, e) {
						var n = this.getCommands(t);
						n.instances.push(e)
					},
					clearCommands: function (t) {
						var e = this.getCommands(t);
						e.instances = []
					}
				}),
				n
			} (),
			r.Commands = function (t, e) {
				return t.Handlers.extend({
					storageType: t.CommandStorage,
					constructor: function (e) {
						this.options = e || {},
						this._initializeStorage(this.options),
						this.on("handler:add", this._executeCommands, this),
						t.Handlers.prototype.constructor.apply(this, arguments)
					},
					execute: function (t) {
						t = arguments[0];
						var n = e.rest(arguments);
						this.hasHandler(t) ? this.getHandler(t).apply(this, n) : this.storage.addCommand(t, n)
					},
					_executeCommands: function (t, n, r) {
						var i = this.storage.getCommands(t);
						e.each(i.instances, function (t) {
							n.apply(r, t)
						}),
						this.storage.clearCommands(t)
					},
					_initializeStorage: function (t) {
						var n, r = t.storageType || this.storageType;
						n = e.isFunction(r) ? new r: r,
						this.storage = n
					}
				})
			} (r, e),
			r.RequestResponse = function (t, e) {
				return t.Handlers.extend({
					request: function (t) {
						return this.hasHandler(t) ? this.getHandler(t).apply(this, e.rest(arguments)) : void 0
					}
				})
			} (r, e),
			r.EventAggregator = function (t, e) {
				var n = function () {};
				return n.extend = t.Model.extend,
				e.extend(n.prototype, t.Events),
				n
			} (t, e),
			r.Channel = function () {
				var n = function (e) {
					this.vent = new t.Wreqr.EventAggregator,
					this.reqres = new t.Wreqr.RequestResponse,
					this.commands = new t.Wreqr.Commands,
					this.channelName = e
				};
				return e.extend(n.prototype, {
					reset: function () {
						return this.vent.off(),
						this.vent.stopListening(),
						this.reqres.removeAllHandlers(),
						this.commands.removeAllHandlers(),
						this
					},
					connectEvents: function (t, e) {
						return this._connect("vent", t, e),
						this
					},
					connectCommands: function (t, e) {
						return this._connect("commands", t, e),
						this
					},
					connectRequests: function (t, e) {
						return this._connect("reqres", t, e),
						this
					},
					_connect: function (t, n, r) {
						if (n) {
							r = r || this;
							var i = "vent" === t ? "on": "setHandler";
							e.each(n, function (n, o) {
								this[t][i](o, e.bind(n, r))
							},
							this)
						}
					}
				}),
				n
			} (r),
			r.radio = function (t, e) {
				var n = function () {
					this._channels = {},
					this.vent = {},
					this.commands = {},
					this.reqres = {},
					this._proxyMethods()
				};
				e.extend(n.prototype, {
					channel: function (t) {
						if (!t) throw new Error("Channel must receive a name");
						return this._getChannel(t)
					},
					_getChannel: function (e) {
						var n = this._channels[e];
						return n || (n = new t.Channel(e), this._channels[e] = n),
						n
					},
					_proxyMethods: function () {
						e.each(["vent", "commands", "reqres"], function (t) {
							e.each(r[t], function (e) {
								this[t][e] = i(this, t, e)
							},
							this)
						},
						this)
					}
				});
				var r = {
					vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
					commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
					reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
				},
				i = function (t, n, r) {
					return function (i) {
						var o = t._getChannel(i)[n];
						return o[r].apply(o, e.rest(arguments))
					}
				};
				return new n
			} (r, e),
			t.Wreqr
		})
	},
	{}],
	87 : [function (t, e, n) { !
		function (e) {
			"function" == typeof define && define.amd ? define(["underscore", "backbone", "exports"], e) : "object" == typeof n ? e(t(105), t(88), n) : e(_, Backbone, {})
		} (function (t, e, n) {
			n._handlers = [],
			n.addHandler = function (e) {
				e = t.map(t.flatten([e]), function (e) {
					return t.extend({
						updateModel: !0,
						updateView: !0,
						updateMethod: "text"
					},
					e)
				}),
				this._handlers = this._handlers.concat(e)
			},
			n.ViewMixin = {
				_modelBindings: null,
				unstickit: function (e, n) {
					if (t.isObject(n)) return void t.each(t.keys(n), function (t) {
						this.unstickit(e, t)
					},
					this);
					var r = [],
					i = [];
					t.each(this._modelBindings, function (t, o) {
						e && t.model !== e || n && t.config.selector != n || (i.push(t.config._destroy), t.model.off(t.event, t.fn), r.push(t.model), delete this._modelBindings[o])
					},
					this),
					t.invoke(t.uniq(r), "trigger", "stickit:unstuck", this.cid),
					t.each(t.uniq(i), function (t) {
						t.call(this)
					},
					this),
					this._modelBindings = t.compact(this._modelBindings),
					this.$el.off(".stickit" + (e ? "." + e.cid: ""), n)
				},
				stickit: function (e, n) {
					var r = e || this.model,
					i = n || t.result(this, "bindings") || {};
					this._modelBindings || (this._modelBindings = []),
					this.addBinding(r, i);
					var o = this.remove;
					o.stickitWrapped || (this.remove = function () {
						var t = this;
						return this.unstickit(),
						o && (t = o.apply(this, arguments)),
						t
					}),
					this.remove.stickitWrapped = !0
				},
				addBinding: function (e, n, r) {
					var o, d, M, g, b, m = e || this.model,
					v = ".stickit." + m.cid,
					A = r || {},
					y = t.uniqueId();
					if (!t.isString(n)) {
						var z = n;
						return void t.each(z, function (t, e) {
							this.addBinding(m, e, z[e])
						},
						this)
					}
					b = n,
					o = ":el" === b ? this.$el: this.$(b),
					this.unstickit(m, b),
					o.length && (t.isString(A) && (A = {
						observe: A
					}), t.isFunction(A.observe) && (A.observe = A.observe.call(this)), g = l(o, A), g.selector = b, M = g.observe, g.bindId = y, g.view = this, d = t.extend({
						stickitChange: g
					},
					g.setOptions), g._destroy = function () {
						i(this, g.destroy, o, m, g)
					},
					p(this, o, g, m, M), f(this, o, g, m, M), M && (t.each(g.events, function (e) {
						var n = e + v,
						r = function (e) {
							var n = g.getVal.call(this, o, e, g, t.rest(arguments));
							a(this, g.updateModel, n, e, g) && s(m, M, n, d, this, g)
						};
						r = t.bind(r, this),
						":el" === b ? this.$el.on(n, r) : this.$el.on(n, b, r)
					},
					this), t.each(t.flatten([M]), function (t) {
						c(m, this, "change:" + t, g, function (t, e, n) {
							var r = n && n.stickitChange && n.stickitChange.bindId || null;
							r !== y && h(this, o, g, u(t, M, g, this), t)
						})
					},
					this), h(this, o, g, u(m, M, g, this), m, !0)), i(this, g.initialize, o, m, g))
				}
			},
			t.extend(e.View.prototype, n.ViewMixin);
			var r = function (e, n) {
				var r = (n || "").split("."),
				i = t.reduce(r, function (t, e) {
					return t[e]
				},
				e);
				return null == i ? e: i
			},
			i = function (e, n) {
				return n ? (t.isString(n) ? r(e, n) : n).apply(e, t.rest(arguments, 2)) : void 0
			},
			o = function (t) {
				return t.find("option").not(function () {
					return ! this.selected
				})
			},
			a = function (e, n) {
				return t.isBoolean(n) ? n: t.isFunction(n) || t.isString(n) ? i.apply(this, arguments) : !1
			},
			c = function (t, e, n, r, i) {
				t.on(n, i, e),
				e._modelBindings.push({
					model: t,
					event: n,
					fn: i,
					config: r
				})
			},
			s = function (e, n, r, o, a, c) {
				var s = {};
				c.onSet && (r = i(a, c.onSet, r, c)),
				c.set ? i(a, c.set, n, r, o, c) : (s[n] = r, t.isArray(n) && t.isArray(r) && (s = t.reduce(n, function (e, n, i) {
					return e[n] = t.has(r, i) ? r[i] : null,
					e
				},
				{})), e.set(s, o))
			},
			u = function (e, n, r, o) {
				var a, c = function (t) {
					return e[r.escape ? "escape": "get"](t)
				},
				s = function (t) {
					return null == t ? "": t
				};
				return a = t.isArray(n) ? t.map(n, c) : c(n),
				r.onGet && (a = i(o, r.onGet, a, r)),
				t.isArray(a) ? t.map(a, s) : s(a)
			},
			l = n.getConfiguration = function (e, r) {
				var i = [{
					updateModel: !1,
					updateMethod: "text",
					update: function (t, e, n, r) {
						t[r.updateMethod] && t[r.updateMethod](e)
					},
					getVal: function (t, e, n) {
						return t[n.updateMethod]()
					}
				}];
				i = i.concat(t.filter(n._handlers, function (t) {
					return e.is(t.selector)
				})),
				i.push(r);
				var o = t.extend.apply(t, i);
				return o.visible && !t.has(o, "updateView") ? o.updateView = !1 : t.has(o, "updateView") || (o.updateView = !0),
				o
			},
			p = function (e, n, r, i, o) {
				var a = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"];
				t.each(r.attributes || [], function (s) {
					var l, p, f = "";
					s = t.clone(s),
					l = s.observe || (s.observe = o),
					p = function () {
						var r = t.indexOf(a, s.name, !0) > -1 ? "prop": "attr",
						o = u(i, l, s, e);
						"class" === s.name ? (n.removeClass(f).addClass(o), f = o) : n[r](s.name, o)
					},
					t.each(t.flatten([l]), function (t) {
						c(i, e, "change:" + t, r, p)
					}),
					p()
				})
			},
			f = function (e, n, r, o, a) {
				if (null != r.visible) {
					var s = function () {
						var c = r.visible,
						s = r.visibleFn,
						l = u(o, a, r, e),
						p = !!l;
						(t.isFunction(c) || t.isString(c)) && (p = !!i(e, c, l, r)),
						s ? i(e, s, n, p, r) : n.toggle(p)
					};
					t.each(t.flatten([a]), function (t) {
						c(o, e, "change:" + t, r, s)
					}),
					s()
				}
			},
			h = function (t, e, n, r, o, c) {
				a(t, n.updateView, r, n) && (i(t, n.update, e, r, o, n), c || i(t, n.afterUpdate, e, r, n))
			};
			return n.addHandler([{
				selector: '[contenteditable="true"]',
				updateMethod: "html",
				events: ["input", "change"]
			},
			{
				selector: "input",
				events: ["propertychange", "input", "change"],
				update: function (t, e) {
					t.val(e)
				},
				getVal: function (t) {
					return t.val()
				}
			},
			{
				selector: "textarea",
				events: ["propertychange", "input", "change"],
				update: function (t, e) {
					t.val(e)
				},
				getVal: function (t) {
					return t.val()
				}
			},
			{
				selector: 'input[type="radio"]',
				events: ["change"],
				update: function (t, e) {
					t.filter('[value="' + e + '"]').prop("checked", !0)
				},
				getVal: function (t) {
					return t.filter(":checked").val()
				}
			},
			{
				selector: 'input[type="checkbox"]',
				events: ["change"],
				update: function (n, r) {
					if (n.length > 1) r || (r = []),
					n.each(function (n, i) {
						var o = e.$(i),
						a = t.contains(r, o.val());
						o.prop("checked", a)
					});
					else {
						var i = t.isBoolean(r) ? r: r === n.val();
						n.prop("checked", i)
					}
				},
				getVal: function (n) {
					var r;
					if (n.length > 1) r = t.reduce(n, function (t, n) {
						var r = e.$(n);
						return r.prop("checked") && t.push(r.val()),
						t
					},
					[]);
					else {
						r = n.prop("checked");
						var i = n.val();
						"on" !== i && null != i && (r = r ? n.val() : null)
					}
					return r
				}
			},
			{
				selector: "select",
				events: ["change"],
				update: function (n, o, a, c) {
					var s, u = c.selectOptions,
					l = u && u.collection || void 0,
					p = n.prop("multiple");
					if (!u) {
						u = {};
						var f = function (t) {
							return t.map(function () {
								return {
									value: this.value,
									label: this.text
								}
							}).get()
						};
						n.find("optgroup").length ? (l = {
							opt_labels: []
						},
						n.find("> option").length && (l.opt_labels.push(void 0), t.each(n.find("> option"), function (t) {
							l[void 0] = f(e.$(t))
						})), t.each(n.find("optgroup"), function (t) {
							var n = e.$(t).attr("label");
							l.opt_labels.push(n),
							l[n] = f(e.$(t).find("option"))
						})) : l = f(n.find("option"))
					}
					u.valuePath = u.valuePath || "value",
					u.labelPath = u.labelPath || "label";
					var h = function (n, i, o) {
						t.each(n, function (n) {
							var a = e.$("<option/>"),
							c = n,
							s = function (e, n) {
								a.text(e),
								c = n,
								a.data("stickit_bind_val", c),
								t.isArray(c) || t.isObject(c) || a.val(c)
							};
							"__default__" === n ? s(u.defaultOption.label, u.defaultOption.value) : s(r(n, u.labelPath), r(n, u.valuePath)),
							!p && null != c && null != o && c === o || t.isObject(o) && t.isEqual(c, o) ? a.prop("selected", !0) : p && t.isArray(o) && t.each(o, function (e) {
								t.isObject(e) && (e = r(e, u.valuePath)),
								(e === c || t.isObject(e) && t.isEqual(c, e)) && a.prop("selected", !0)
							}),
							i.append(a)
						})
					};
					n.find("*").remove();
					var d = function (t, e) {
						var n = window;
						return 0 === e.indexOf("this.") && (n = t),
						e = e.replace(/^[a-z]*\.(.+)$/, "$1"),
						r(n, e)
					};
					if (s = t.isString(l) ? d(this, l) : t.isFunction(l) ? i(this, l, n, c) : l, s instanceof e.Collection && (s = s.toJSON()), u.defaultOption && h(["__default__"], n), t.isArray(s)) h(s, n, o);
					else if (s.opt_labels) t.each(s.opt_labels, function (t) {
						var r = e.$("<optgroup/>").attr("label", t);
						h(s[t], r, o),
						n.append(r)
					});
					else {
						var M, g = [];
						for (var b in s) M = {},
						M[u.valuePath] = b,
						M[u.labelPath] = s[b],
						g.push(M);
						h(t.sortBy(g, u.comparator || u.labelPath), n, o)
					}
				},
				getVal: function (t) {
					var n;
					return n = t.prop("multiple") ? e.$(o(t).map(function () {
						return e.$(this).data("stickit_bind_val")
					})).get() : o(t).data("stickit_bind_val")
				}
			}]),
			e.Stickit = n,
			e.Stickit
		})
	},
	{}],
	88 : [function (t, e, n) { !
		function (e, r) {
			if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function (t, n, i) {
				e.Backbone = r(e, i, t, n)
			});
			else if ("undefined" != typeof n) {
				var i = t(89);
				"undefined" != typeof window && null !== window ? r(e, n, i, window.$) : r(e, n, i)
			} else e.Backbone = r(e, {},
			e._, e.jQuery || e.Zepto || e.ender || e.$)
		} (this, function (t, e, n, r) {
			{
				var i = t.Backbone,
				o = [],
				a = (o.push, o.slice);
				o.splice
			}
			e.VERSION = "1.1.2",
			e.$ = r,
			e.noConflict = function () {
				return t.Backbone = i,
				this
			},
			e.emulateHTTP = !1,
			e.emulateJSON = !1;
			var c = e.Events = {
				on: function (t, e, n) {
					if (!u(this, "on", t, [e, n]) || !e) return this;
					this._events || (this._events = {});
					var r = this._events[t] || (this._events[t] = []);
					return r.push({
						callback: e,
						context: n,
						ctx: n || this
					}),
					this
				},
				once: function (t, e, r) {
					if (!u(this, "once", t, [e, r]) || !e) return this;
					var i = this,
					o = n.once(function () {
						i.off(t, o),
						e.apply(this, arguments)
					});
					return o._callback = e,
					this.on(t, o, r)
				},
				off: function (t, e, r) {
					var i, o, a, c, s, l, p, f;
					if (!this._events || !u(this, "off", t, [e, r])) return this;
					if (!t && !e && !r) return this._events = void 0,
					this;
					for (c = t ? [t] : n.keys(this._events), s = 0, l = c.length; l > s; s++) if (t = c[s], a = this._events[t]) {
						if (this._events[t] = i = [], e || r) for (p = 0, f = a.length; f > p; p++) o = a[p],
						(e && e !== o.callback && e !== o.callback._callback || r && r !== o.context) && i.push(o);
						i.length || delete this._events[t]
					}
					return this
				},
				trigger: function (t) {
					if (!this._events) return this;
					var e = a.call(arguments, 1);
					if (!u(this, "trigger", t, e)) return this;
					var n = this._events[t],
					r = this._events.all;
					return n && l(n, e),
					r && l(r, arguments),
					this
				},
				stopListening: function (t, e, r) {
					var i = this._listeningTo;
					if (!i) return this;
					var o = !e && !r;
					r || "object" != typeof e || (r = this),
					t && ((i = {})[t._listenId] = t);
					for (var a in i) t = i[a],
					t.off(e, r, this),
					(o || n.isEmpty(t._events)) && delete this._listeningTo[a];
					return this
				}
			},
			s = /\s+/,
			u = function (t, e, n, r) {
				if (!n) return ! 0;
				if ("object" == typeof n) {
					for (var i in n) t[e].apply(t, [i, n[i]].concat(r));
					return ! 1
				}
				if (s.test(n)) {
					for (var o = n.split(s), a = 0, c = o.length; c > a; a++) t[e].apply(t, [o[a]].concat(r));
					return ! 1
				}
				return ! 0
			},
			l = function (t, e) {
				var n, r = -1,
				i = t.length,
				o = e[0],
				a = e[1],
				c = e[2];
				switch (e.length) {
				case 0:
					for (; ++r < i;)(n = t[r]).callback.call(n.ctx);
					return;
				case 1:
					for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o);
					return;
				case 2:
					for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o, a);
					return;
				case 3:
					for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o, a, c);
					return;
				default:
					for (; ++r < i;)(n = t[r]).callback.apply(n.ctx, e);
					return
				}
			},
			p = {
				listenTo: "on",
				listenToOnce: "once"
			};
			n.each(p, function (t, e) {
				c[e] = function (e, r, i) {
					var o = this._listeningTo || (this._listeningTo = {}),
					a = e._listenId || (e._listenId = n.uniqueId("l"));
					return o[a] = e,
					i || "object" != typeof r || (i = this),
					e[t](r, i, this),
					this
				}
			}),
			c.bind = c.on,
			c.unbind = c.off,
			n.extend(e, c);
			var f = e.Model = function (t, e) {
				var r = t || {};
				e || (e = {}),
				this.cid = n.uniqueId("c"),
				this.attributes = {},
				e.collection && (this.collection = e.collection),
				e.parse && (r = this.parse(r, e) || {}),
				r = n.defaults({},
				r, n.result(this, "defaults")),
				this.set(r, e),
				this.changed = {},
				this.initialize.apply(this, arguments)
			};
			n.extend(f.prototype, c, {
				changed: null,
				validationError: null,
				idAttribute: "id",
				initialize: function () {},
				toJSON: function () {
					return n.clone(this.attributes)
				},
				sync: function () {
					return e.sync.apply(this, arguments)
				},
				get: function (t) {
					return this.attributes[t]
				},
				escape: function (t) {
					return n.escape(this.get(t))
				},
				has: function (t) {
					return null != this.get(t)
				},
				set: function (t, e, r) {
					var i, o, a, c, s, u, l, p;
					if (null == t) return this;
					if ("object" == typeof t ? (o = t, r = e) : (o = {})[t] = e, r || (r = {}), !this._validate(o, r)) return ! 1;
					a = r.unset,
					s = r.silent,
					c = [],
					u = this._changing,
					this._changing = !0,
					u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}),
					p = this.attributes,
					l = this._previousAttributes,
					this.idAttribute in o && (this.id = o[this.idAttribute]);
					for (i in o) e = o[i],
					n.isEqual(p[i], e) || c.push(i),
					n.isEqual(l[i], e) ? delete this.changed[i] : this.changed[i] = e,
					a ? delete p[i] : p[i] = e;
					if (!s) {
						c.length && (this._pending = r);
						for (var f = 0, h = c.length; h > f; f++) this.trigger("change:" + c[f], this, p[c[f]], r)
					}
					if (u) return this;
					if (!s) for (; this._pending;) r = this._pending,
					this._pending = !1,
					this.trigger("change", this, r);
					return this._pending = !1,
					this._changing = !1,
					this
				},
				unset: function (t, e) {
					return this.set(t, void 0, n.extend({},
					e, {
						unset: !0
					}))
				},
				clear: function (t) {
					var e = {};
					for (var r in this.attributes) e[r] = void 0;
					return this.set(e, n.extend({},
					t, {
						unset: !0
					}))
				},
				hasChanged: function (t) {
					return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
				},
				changedAttributes: function (t) {
					if (!t) return this.hasChanged() ? n.clone(this.changed) : !1;
					var e, r = !1,
					i = this._changing ? this._previousAttributes: this.attributes;
					for (var o in t) n.isEqual(i[o], e = t[o]) || ((r || (r = {}))[o] = e);
					return r
				},
				previous: function (t) {
					return null != t && this._previousAttributes ? this._previousAttributes[t] : null
				},
				previousAttributes: function () {
					return n.clone(this._previousAttributes)
				},
				fetch: function (t) {
					t = t ? n.clone(t) : {},
					void 0 === t.parse && (t.parse = !0);
					var e = this,
					r = t.success;
					return t.success = function (n) {
						return e.set(e.parse(n, t), t) ? (r && r(e, n, t), void e.trigger("sync", e, n, t)) : !1
					},
					R(this, t),
					this.sync("read", this, t)
				},
				save: function (t, e, r) {
					var i, o, a, c = this.attributes;
					if (null == t || "object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r = n.extend({
						validate: !0
					},
					r), i && !r.wait) {
						if (!this.set(i, r)) return ! 1
					} else if (!this._validate(i, r)) return ! 1;
					i && r.wait && (this.attributes = n.extend({},
					c, i)),
					void 0 === r.parse && (r.parse = !0);
					var s = this,
					u = r.success;
					return r.success = function (t) {
						s.attributes = c;
						var e = s.parse(t, r);
						return r.wait && (e = n.extend(i || {},
						e)),
						n.isObject(e) && !s.set(e, r) ? !1 : (u && u(s, t, r), void s.trigger("sync", s, t, r))
					},
					R(this, r),
					o = this.isNew() ? "create": r.patch ? "patch": "update",
					"patch" === o && (r.attrs = i),
					a = this.sync(o, this, r),
					i && r.wait && (this.attributes = c),
					a
				},
				destroy: function (t) {
					t = t ? n.clone(t) : {};
					var e = this,
					r = t.success,
					i = function () {
						e.trigger("destroy", e, e.collection, t)
					};
					if (t.success = function (n) { (t.wait || e.isNew()) && i(),
						r && r(e, n, t),
						e.isNew() || e.trigger("sync", e, n, t)
					},
					this.isNew()) return t.success(),
					!1;
					R(this, t);
					var o = this.sync("delete", this, t);
					return t.wait || i(),
					o
				},
				url: function () {
					var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || X();
					return this.isNew() ? t: t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
				},
				parse: function (t) {
					return t
				},
				clone: function () {
					return new this.constructor(this.attributes)
				},
				isNew: function () {
					return ! this.has(this.idAttribute)
				},
				isValid: function (t) {
					return this._validate({},
					n.extend(t || {},
					{
						validate: !0
					}))
				},
				_validate: function (t, e) {
					if (!e.validate || !this.validate) return ! 0;
					t = n.extend({},
					this.attributes, t);
					var r = this.validationError = this.validate(t, e) || null;
					return r ? (this.trigger("invalid", this, r, n.extend(e, {
						validationError: r
					})), !1) : !0
				}
			});
			var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
			n.each(h, function (t) {
				f.prototype[t] = function () {
					var e = a.call(arguments);
					return e.unshift(this.attributes),
					n[t].apply(n, e)
				}
			});
			var d = e.Collection = function (t, e) {
				e || (e = {}),
				e.model && (this.model = e.model),
				void 0 !== e.comparator && (this.comparator = e.comparator),
				this._reset(),
				this.initialize.apply(this, arguments),
				t && this.reset(t, n.extend({
					silent: !0
				},
				e))
			},
			M = {
				add: !0,
				remove: !0,
				merge: !0
			},
			g = {
				add: !0,
				remove: !1
			};
			n.extend(d.prototype, c, {
				model: f,
				initialize: function () {},
				toJSON: function (t) {
					return this.map(function (e) {
						return e.toJSON(t)
					})
				},
				sync: function () {
					return e.sync.apply(this, arguments)
				},
				add: function (t, e) {
					return this.set(t, n.extend({
						merge: !1
					},
					e, g))
				},
				remove: function (t, e) {
					var r = !n.isArray(t);
					t = r ? [t] : n.clone(t),
					e || (e = {});
					var i, o, a, c;
					for (i = 0, o = t.length; o > i; i++) c = t[i] = this.get(t[i]),
					c && (delete this._byId[c.id], delete this._byId[c.cid], a = this.indexOf(c), this.models.splice(a, 1), this.length--, e.silent || (e.index = a, c.trigger("remove", c, this, e)), this._removeReference(c, e));
					return r ? t[0] : t
				},
				set: function (t, e) {
					e = n.defaults({},
					e, M),
					e.parse && (t = this.parse(t, e));
					var r = !n.isArray(t);
					t = r ? t ? [t] : [] : n.clone(t);
					var i, o, a, c, s, u, l, p = e.at,
					h = this.model,
					d = this.comparator && null == p && e.sort !== !1,
					g = n.isString(this.comparator) ? this.comparator: null,
					b = [],
					m = [],
					v = {},
					A = e.add,
					y = e.merge,
					z = e.remove,
					_ = !d && A && z ? [] : !1;
					for (i = 0, o = t.length; o > i; i++) {
						if (s = t[i] || {},
						a = s instanceof f ? c = s: s[h.prototype.idAttribute || "id"], u = this.get(a)) z && (v[u.cid] = !0),
						y && (s = s === c ? c.attributes: s, e.parse && (s = u.parse(s, e)), u.set(s, e), d && !l && u.hasChanged(g) && (l = !0)),
						t[i] = u;
						else if (A) {
							if (c = t[i] = this._prepareModel(s, e), !c) continue;
							b.push(c),
							this._addReference(c, e)
						}
						c = u || c,
						!_ || !c.isNew() && v[c.id] || _.push(c),
						v[c.id] = !0
					}
					if (z) {
						for (i = 0, o = this.length; o > i; ++i) v[(c = this.models[i]).cid] || m.push(c);
						m.length && this.remove(m, e)
					}
					if (b.length || _ && _.length) if (d && (l = !0), this.length += b.length, null != p) for (i = 0, o = b.length; o > i; i++) this.models.splice(p + i, 0, b[i]);
					else {
						_ && (this.models.length = 0);
						var T = _ || b;
						for (i = 0, o = T.length; o > i; i++) this.models.push(T[i])
					}
					if (l && this.sort({
						silent: !0
					}), !e.silent) {
						for (i = 0, o = b.length; o > i; i++)(c = b[i]).trigger("add", c, this, e);
						(l || _ && _.length) && this.trigger("sort", this, e)
					}
					return r ? t[0] : t
				},
				reset: function (t, e) {
					e || (e = {});
					for (var r = 0, i = this.models.length; i > r; r++) this._removeReference(this.models[r], e);
					return e.previousModels = this.models,
					this._reset(),
					t = this.add(t, n.extend({
						silent: !0
					},
					e)),
					e.silent || this.trigger("reset", this, e),
					t
				},
				push: function (t, e) {
					return this.add(t, n.extend({
						at: this.length
					},
					e))
				},
				pop: function (t) {
					var e = this.at(this.length - 1);
					return this.remove(e, t),
					e
				},
				unshift: function (t, e) {
					return this.add(t, n.extend({
						at: 0
					},
					e))
				},
				shift: function (t) {
					var e = this.at(0);
					return this.remove(e, t),
					e
				},
				slice: function () {
					return a.apply(this.models, arguments)
				},
				get: function (t) {
					return null == t ? void 0 : this._byId[t] || this._byId[t.id] || this._byId[t.cid]
				},
				at: function (t) {
					return this.models[t]
				},
				where: function (t, e) {
					return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find": "filter"](function (e) {
						for (var n in t) if (t[n] !== e.get(n)) return ! 1;
						return ! 0
					})
				},
				findWhere: function (t) {
					return this.where(t, !0)
				},
				sort: function (t) {
					if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
					return t || (t = {}),
					n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
					t.silent || this.trigger("sort", this, t),
					this
				},
				pluck: function (t) {
					return n.invoke(this.models, "get", t)
				},
				fetch: function (t) {
					t = t ? n.clone(t) : {},
					void 0 === t.parse && (t.parse = !0);
					var e = t.success,
					r = this;
					return t.success = function (n) {
						var i = t.reset ? "reset": "set";
						r[i](n, t),
						e && e(r, n, t),
						r.trigger("sync", r, n, t)
					},
					R(this, t),
					this.sync("read", this, t)
				},
				create: function (t, e) {
					if (e = e ? n.clone(e) : {},
					!(t = this._prepareModel(t, e))) return ! 1;
					e.wait || this.add(t, e);
					var r = this,
					i = e.success;
					return e.success = function (t, n) {
						e.wait && r.add(t, e),
						i && i(t, n, e)
					},
					t.save(null, e),
					t
				},
				parse: function (t) {
					return t
				},
				clone: function () {
					return new this.constructor(this.models)
				},
				_reset: function () {
					this.length = 0,
					this.models = [],
					this._byId = {}
				},
				_prepareModel: function (t, e) {
					if (t instanceof f) return t;
					e = e ? n.clone(e) : {},
					e.collection = this;
					var r = new this.model(t, e);
					return r.validationError ? (this.trigger("invalid", this, r.validationError, e), !1) : r
				},
				_addReference: function (t) {
					this._byId[t.cid] = t,
					null != t.id && (this._byId[t.id] = t),
					t.collection || (t.collection = this),
					t.on("all", this._onModelEvent, this)
				},
				_removeReference: function (t) {
					this === t.collection && delete t.collection,
					t.off("all", this._onModelEvent, this)
				},
				_onModelEvent: function (t, e, n, r) { ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, r), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
				}
			});
			var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
			n.each(b, function (t) {
				d.prototype[t] = function () {
					var e = a.call(arguments);
					return e.unshift(this.models),
					n[t].apply(n, e)
				}
			});
			var m = ["groupBy", "countBy", "sortBy", "indexBy"];
			n.each(m, function (t) {
				d.prototype[t] = function (e, r) {
					var i = n.isFunction(e) ? e: function (t) {
						return t.get(e)
					};
					return n[t](this.models, i, r)
				}
			});
			var v = e.View = function (t) {
				this.cid = n.uniqueId("view"),
				t || (t = {}),
				n.extend(this, n.pick(t, y)),
				this._ensureElement(),
				this.initialize.apply(this, arguments),
				this.delegateEvents()
			},
			A = /^(\S+)\s*(.*)$/,
			y = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
			n.extend(v.prototype, c, {
				tagName: "div",
				$: function (t) {
					return this.$el.find(t)
				},
				initialize: function () {},
				render: function () {
					return this
				},
				remove: function () {
					return this.$el.remove(),
					this.stopListening(),
					this
				},
				setElement: function (t, n) {
					return this.$el && this.undelegateEvents(),
					this.$el = t instanceof e.$ ? t: e.$(t),
					this.el = this.$el[0],
					n !== !1 && this.delegateEvents(),
					this
				},
				delegateEvents: function (t) {
					if (!t && !(t = n.result(this, "events"))) return this;
					this.undelegateEvents();
					for (var e in t) {
						var r = t[e];
						if (n.isFunction(r) || (r = this[t[e]]), r) {
							var i = e.match(A),
							o = i[1],
							a = i[2];
							r = n.bind(r, this),
							o += ".delegateEvents" + this.cid,
							"" === a ? this.$el.on(o, r) : this.$el.on(o, a, r)
						}
					}
					return this
				},
				undelegateEvents: function () {
					return this.$el.off(".delegateEvents" + this.cid),
					this
				},
				_ensureElement: function () {
					if (this.el) this.setElement(n.result(this, "el"), !1);
					else {
						var t = n.extend({},
						n.result(this, "attributes"));
						this.id && (t.id = n.result(this, "id")),
						this.className && (t["class"] = n.result(this, "className"));
						var r = e.$("<" + n.result(this, "tagName") + ">").attr(t);
						this.setElement(r, !1)
					}
				}
			}),
			e.sync = function (t, r, i) {
				var o = _[t];
				n.defaults(i || (i = {}), {
					emulateHTTP: e.emulateHTTP,
					emulateJSON: e.emulateJSON
				});
				var a = {
					type: o,
					dataType: "json"
				};
				if (i.url || (a.url = n.result(r, "url") || X()), null != i.data || !r || "create" !== t && "update" !== t && "patch" !== t || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
					model: a.data
				}: {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
					a.type = "POST",
					i.emulateJSON && (a.data._method = o);
					var c = i.beforeSend;
					i.beforeSend = function (t) {
						return t.setRequestHeader("X-HTTP-Method-Override", o),
						c ? c.apply(this, arguments) : void 0
					}
				}
				"GET" === a.type || i.emulateJSON || (a.processData = !1),
				"PATCH" === a.type && z && (a.xhr = function () {
					return new ActiveXObject("Microsoft.XMLHTTP")
				});
				var s = i.xhr = e.ajax(n.extend(a, i));
				return r.trigger("request", r, s, i),
				s
			};
			var z = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
			_ = {
				create: "POST",
				update: "PUT",
				patch: "PATCH",
				"delete": "DELETE",
				read: "GET"
			};
			e.ajax = function () {
				return e.$.ajax.apply(e.$, arguments)
			};
			var T = e.Router = function (t) {
				t || (t = {}),
				t.routes && (this.routes = t.routes),
				this._bindRoutes(),
				this.initialize.apply(this, arguments)
			},
			O = /\((.*?)\)/g,
			L = /(\(\?)?:\w+/g,
			w = /\*\w+/g,
			N = /[\-{}\[\]+?.,\\\^$|#\s]/g;
			n.extend(T.prototype, c, {
				initialize: function () {},
				route: function (t, r, i) {
					n.isRegExp(t) || (t = this._routeToRegExp(t)),
					n.isFunction(r) && (i = r, r = ""),
					i || (i = this[r]);
					var o = this;
					return e.history.route(t, function (n) {
						var a = o._extractParameters(t, n);
						o.execute(i, a),
						o.trigger.apply(o, ["route:" + r].concat(a)),
						o.trigger("route", r, a),
						e.history.trigger("route", o, r, a)
					}),
					this
				},
				execute: function (t, e) {
					t && t.apply(this, e)
				},
				navigate: function (t, n) {
					return e.history.navigate(t, n),
					this
				},
				_bindRoutes: function () {
					if (this.routes) {
						this.routes = n.result(this, "routes");
						for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
					}
				},
				_routeToRegExp: function (t) {
					return t = t.replace(N, "\\$&").replace(O, "(?:$1)?").replace(L, function (t, e) {
						return e ? t: "([^/?]+)"
					}).replace(w, "([^?]*?)"),
					new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
				},
				_extractParameters: function (t, e) {
					var r = t.exec(e).slice(1);
					return n.map(r, function (t, e) {
						return e === r.length - 1 ? t || null: t ? decodeURIComponent(t) : null
					})
				}
			});
			var q = e.History = function () {
				this.handlers = [],
				n.bindAll(this, "checkUrl"),
				"undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			x = /^[#\/]|\s+$/g,
			S = /^\/+|\/+$/g,
			W = /msie [\w.]+/,
			E = /\/$/,
			B = /#.*$/;
			q.started = !1,
			n.extend(q.prototype, c, {
				interval: 50,
				atRoot: function () {
					return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
				},
				getHash: function (t) {
					var e = (t || this).location.href.match(/#(.*)$/);
					return e ? e[1] : ""
				},
				getFragment: function (t, e) {
					if (null == t) if (this._hasPushState || !this._wantsHashChange || e) {
						t = decodeURI(this.location.pathname + this.location.search);
						var n = this.root.replace(E, "");
						t.indexOf(n) || (t = t.slice(n.length))
					} else t = this.getHash();
					return t.replace(x, "")
				},
				start: function (t) {
					if (q.started) throw new Error("Backbone.history has already been started");
					q.started = !0,
					this.options = n.extend({
						root: "/"
					},
					this.options, t),
					this.root = this.options.root,
					this._wantsHashChange = this.options.hashChange !== !1,
					this._wantsPushState = !!this.options.pushState,
					this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
					var r = this.getFragment(),
					i = document.documentMode,
					o = W.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
					if (this.root = ("/" + this.root + "/").replace(S, "/"), o && this._wantsHashChange) {
						var a = e.$('<iframe src="javascript:0" tabindex="-1">');
						this.iframe = a.hide().appendTo("body")[0].contentWindow,
						this.navigate(r)
					}
					this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
					this.fragment = r;
					var c = this.location;
					if (this._wantsHashChange && this._wantsPushState) {
						if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0),
						this.location.replace(this.root + "#" + this.fragment),
						!0;
						this._hasPushState && this.atRoot() && c.hash && (this.fragment = this.getHash().replace(x, ""), this.history.replaceState({},
						document.title, this.root + this.fragment))
					}
					return this.options.silent ? void 0 : this.loadUrl()
				},
				stop: function () {
					e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
					this._checkUrlInterval && clearInterval(this._checkUrlInterval),
					q.started = !1
				},
				route: function (t, e) {
					this.handlers.unshift({
						route: t,
						callback: e
					})
				},
				checkUrl: function () {
					var t = this.getFragment();
					return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
					t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
				},
				loadUrl: function (t) {
					return t = this.fragment = this.getFragment(t),
					n.any(this.handlers, function (e) {
						return e.route.test(t) ? (e.callback(t), !0) : void 0
					})
				},
				navigate: function (t, e) {
					if (!q.started) return ! 1;
					e && e !== !0 || (e = {
						trigger: !!e
					});
					var n = this.root + (t = this.getFragment(t || ""));
					if (t = t.replace(B, ""), this.fragment !== t) {
						if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState": "pushState"]({},
						document.title, n);
						else {
							if (!this._wantsHashChange) return this.location.assign(n);
							this._updateHash(this.location, t, e.replace),
							this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
						}
						return e.trigger ? this.loadUrl(t) : void 0
					}
				},
				_updateHash: function (t, e, n) {
					if (n) {
						var r = t.href.replace(/(javascript:|#).*$/, "");
						t.replace(r + "#" + e)
					} else t.hash = "#" + e
				}
			}),
			e.history = new q;
			var C = function (t, e) {
				var r, i = this;
				r = t && n.has(t, "constructor") ? t.constructor: function () {
					return i.apply(this, arguments)
				},
				n.extend(r, i, e);
				var o = function () {
					this.constructor = r
				};
				return o.prototype = i.prototype,
				r.prototype = new o,
				t && n.extend(r.prototype, t),
				r.__super__ = i.prototype,
				r
			};
			f.extend = d.extend = T.extend = v.extend = q.extend = C;
			var X = function () {
				throw new Error('A "url" property or function must be specified')
			},
			R = function (t, e) {
				var n = e.error;
				e.error = function (r) {
					n && n(t, r, e),
					t.trigger("error", t, r, e)
				}
			};
			return e
		})
	},
	{}],
	89 : [function (t, e, n) { (function () {
		console.log('in 89th func');
			var t = this,
			r = t._,
			i = Array.prototype,
			o = Object.prototype,
			a = Function.prototype,
			c = i.push,
			s = i.slice,
			u = i.concat,
			l = o.toString,
			p = o.hasOwnProperty,
			f = Array.isArray,
			h = Object.keys,
			d = a.bind,
			M = function (t) {
				return t instanceof M ? t: this instanceof M ? void(this._wrapped = t) : new M(t)
			};
			console.log('aftr M = ' + M);
			"undefined" != typeof n ? ("undefined" != typeof e && e.exports && (n = e.exports = M), n._ = M) : t._ = M,
			M.VERSION = "1.7.0";
			var g = function (t, e, n) {
				if (void 0 === e) return t;
				switch (null == n ? 3 : n) {
				case 1:
					return function (n) {
						return t.call(e, n)
					};
				case 2:
					return function (n, r) {
						return t.call(e, n, r)
					};
				case 3:
					return function (n, r, i) {
						return t.call(e, n, r, i)
					};
				case 4:
					return function (n, r, i, o) {
						return t.call(e, n, r, i, o)
					}
				}
				return function () {
					return t.apply(e, arguments)
				}
			};
			M.iteratee = function (t, e, n) {
				return null == t ? M.identity: M.isFunction(t) ? g(t, e, n) : M.isObject(t) ? M.matches(t) : M.property(t)
			},
			M.each = M.forEach = function (t, e, n) {
				if (null == t) return t;
				e = g(e, n);
				var r, i = t.length;
				if (i === +i) for (r = 0; i > r; r++) e(t[r], r, t);
				else {
					var o = M.keys(t);
					for (r = 0, i = o.length; i > r; r++) e(t[o[r]], o[r], t)
				}
				return t
			},
			M.map = M.collect = function (t, e, n) {
				if (null == t) return [];
				e = M.iteratee(e, n);
				for (var r, i = t.length !== +t.length && M.keys(t), o = (i || t).length, a = Array(o), c = 0; o > c; c++) r = i ? i[c] : c,
				a[c] = e(t[r], r, t);
				return a
			};
			var b = "Reduce of empty array with no initial value";
			M.reduce = M.foldl = M.inject = function (t, e, n, r) {
				null == t && (t = []),
				e = g(e, r, 4);
				var i, o = t.length !== +t.length && M.keys(t),
				a = (o || t).length,
				c = 0;
				if (arguments.length < 3) {
					if (!a) throw new TypeError(b);
					n = t[o ? o[c++] : c++]
				}
				for (; a > c; c++) i = o ? o[c] : c,
				n = e(n, t[i], i, t);
				return n
			},
			M.reduceRight = M.foldr = function (t, e, n, r) {
				null == t && (t = []),
				e = g(e, r, 4);
				var i, o = t.length !== +t.length && M.keys(t),
				a = (o || t).length;
				if (arguments.length < 3) {
					if (!a) throw new TypeError(b);
					n = t[o ? o[--a] : --a]
				}
				for (; a--;) i = o ? o[a] : a,
				n = e(n, t[i], i, t);
				return n
			},
			M.find = M.detect = function (t, e, n) {
				var r;
				return e = M.iteratee(e, n),
				M.some(t, function (t, n, i) {
					return e(t, n, i) ? (r = t, !0) : void 0
				}),
				r
			},
			M.filter = M.select = function (t, e, n) {
				var r = [];
				return null == t ? r: (e = M.iteratee(e, n), M.each(t, function (t, n, i) {
					e(t, n, i) && r.push(t)
				}), r)
			},
			M.reject = function (t, e, n) {
				return M.filter(t, M.negate(M.iteratee(e)), n)
			},
			M.every = M.all = function (t, e, n) {
				if (null == t) return ! 0;
				e = M.iteratee(e, n);
				var r, i, o = t.length !== +t.length && M.keys(t),
				a = (o || t).length;
				for (r = 0; a > r; r++) if (i = o ? o[r] : r, !e(t[i], i, t)) return ! 1;
				return ! 0
			},
			M.some = M.any = function (t, e, n) {
				if (null == t) return ! 1;
				e = M.iteratee(e, n);
				var r, i, o = t.length !== +t.length && M.keys(t),
				a = (o || t).length;
				for (r = 0; a > r; r++) if (i = o ? o[r] : r, e(t[i], i, t)) return ! 0;
				return ! 1
			},
			M.contains = M.include = function (t, e) {
				return null == t ? !1 : (t.length !== +t.length && (t = M.values(t)), M.indexOf(t, e) >= 0)
			},
			M.invoke = function (t, e) {
				var n = s.call(arguments, 2),
				r = M.isFunction(e);
				return M.map(t, function (t) {
					return (r ? e: t[e]).apply(t, n)
				})
			},
			M.pluck = function (t, e) {
				return M.map(t, M.property(e))
			},
			M.where = function (t, e) {
				return M.filter(t, M.matches(e))
			},
			M.findWhere = function (t, e) {
				return M.find(t, M.matches(e))
			},
			M.max = function (t, e, n) {
				var r, i, o = -1 / 0,
				a = -1 / 0;
				if (null == e && null != t) {
					t = t.length === +t.length ? t: M.values(t);
					for (var c = 0, s = t.length; s > c; c++) r = t[c],
					r > o && (o = r)
				} else e = M.iteratee(e, n),
				M.each(t, function (t, n, r) {
					i = e(t, n, r),
					(i > a || i === -1 / 0 && o === -1 / 0) && (o = t, a = i)
				});
				return o
			},
			M.min = function (t, e, n) {
				var r, i, o = 1 / 0,
				a = 1 / 0;
				if (null == e && null != t) {
					t = t.length === +t.length ? t: M.values(t);
					for (var c = 0, s = t.length; s > c; c++) r = t[c],
					o > r && (o = r)
				} else e = M.iteratee(e, n),
				M.each(t, function (t, n, r) {
					i = e(t, n, r),
					(a > i || 1 / 0 === i && 1 / 0 === o) && (o = t, a = i)
				});
				return o
			},
			M.shuffle = function (t) {
				for (var e, n = t && t.length === +t.length ? t: M.values(t), r = n.length, i = Array(r), o = 0; r > o; o++) e = M.random(0, o),
				e !== o && (i[o] = i[e]),
				i[e] = n[o];
				return i
			},
			M.sample = function (t, e, n) {
				return null == e || n ? (t.length !== +t.length && (t = M.values(t)), t[M.random(t.length - 1)]) : M.shuffle(t).slice(0, Math.max(0, e))
			},
			M.sortBy = function (t, e, n) {
				return e = M.iteratee(e, n),
				M.pluck(M.map(t, function (t, n, r) {
					return {
						value: t,
						index: n,
						criteria: e(t, n, r)
					}
				}).sort(function (t, e) {
					var n = t.criteria,
					r = e.criteria;
					if (n !== r) {
						if (n > r || void 0 === n) return 1;
						if (r > n || void 0 === r) return - 1
					}
					return t.index - e.index
				}), "value")
			};
			var m = function (t) {
				return function (e, n, r) {
					var i = {};
					return n = M.iteratee(n, r),
					M.each(e, function (r, o) {
						var a = n(r, o, e);
						t(i, r, a)
					}),
					i
				}
			};
			M.groupBy = m(function (t, e, n) {
				M.has(t, n) ? t[n].push(e) : t[n] = [e]
			}),
			M.indexBy = m(function (t, e, n) {
				t[n] = e
			}),
			M.countBy = m(function (t, e, n) {
				M.has(t, n) ? t[n]++:t[n] = 1
			}),
			M.sortedIndex = function (t, e, n, r) {
				n = M.iteratee(n, r, 1);
				for (var i = n(e), o = 0, a = t.length; a > o;) {
					var c = o + a >>> 1;
					n(t[c]) < i ? o = c + 1 : a = c
				}
				return o
			},
			M.toArray = function (t) {
				return t ? M.isArray(t) ? s.call(t) : t.length === +t.length ? M.map(t, M.identity) : M.values(t) : []
			},
			M.size = function (t) {
				return null == t ? 0 : t.length === +t.length ? t.length: M.keys(t).length
			},
			M.partition = function (t, e, n) {
				e = M.iteratee(e, n);
				var r = [],
				i = [];
				return M.each(t, function (t, n, o) { (e(t, n, o) ? r: i).push(t)
				}),
				[r, i]
			},
			M.first = M.head = M.take = function (t, e, n) {
				return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : s.call(t, 0, e)
			},
			M.initial = function (t, e, n) {
				return s.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
			},
			M.last = function (t, e, n) {
				return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
			},
			M.rest = M.tail = M.drop = function (t, e, n) {
				return s.call(t, null == e || n ? 1 : e)
			},
			M.compact = function (t) {
				return M.filter(t, M.identity)
			};
			var v = function (t, e, n, r) {
				if (e && M.every(t, M.isArray)) return u.apply(r, t);
				for (var i = 0, o = t.length; o > i; i++) {
					var a = t[i];
					M.isArray(a) || M.isArguments(a) ? e ? c.apply(r, a) : v(a, e, n, r) : n || r.push(a)
				}
				return r
			};
			M.flatten = function (t, e) {
				return v(t, e, !1, [])
			},
			M.without = function (t) {
				return M.difference(t, s.call(arguments, 1))
			},
			M.uniq = M.unique = function (t, e, n, r) {
				if (null == t) return [];
				M.isBoolean(e) || (r = n, n = e, e = !1),
				null != n && (n = M.iteratee(n, r));
				for (var i = [], o = [], a = 0, c = t.length; c > a; a++) {
					var s = t[a];
					if (e) a && o === s || i.push(s),
					o = s;
					else if (n) {
						var u = n(s, a, t);
						M.indexOf(o, u) < 0 && (o.push(u), i.push(s))
					} else M.indexOf(i, s) < 0 && i.push(s)
				}
				return i
			},
			M.union = function () {
				return M.uniq(v(arguments, !0, !0, []))
			},
			M.intersection = function (t) {
				if (null == t) return [];
				for (var e = [], n = arguments.length, r = 0, i = t.length; i > r; r++) {
					var o = t[r];
					if (!M.contains(e, o)) {
						for (var a = 1; n > a && M.contains(arguments[a], o); a++);
						a === n && e.push(o)
					}
				}
				return e
			},
			M.difference = function (t) {
				var e = v(s.call(arguments, 1), !0, !0, []);
				return M.filter(t, function (t) {
					return ! M.contains(e, t)
				})
			},
			M.zip = function (t) {
				if (null == t) return [];
				for (var e = M.max(arguments, "length").length, n = Array(e), r = 0; e > r; r++) n[r] = M.pluck(arguments, r);
				return n
			},
			M.object = function (t, e) {
				if (null == t) return {};
				for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
				return n
			},
			M.indexOf = function (t, e, n) {
				if (null == t) return - 1;
				var r = 0,
				i = t.length;
				if (n) {
					if ("number" != typeof n) return r = M.sortedIndex(t, e),
					t[r] === e ? r: -1;
					r = 0 > n ? Math.max(0, i + n) : n
				}
				for (; i > r; r++) if (t[r] === e) return r;
				return - 1
			},
			M.lastIndexOf = function (t, e, n) {
				if (null == t) return - 1;
				var r = t.length;
				for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;) if (t[r] === e) return r;
				return - 1
			},
			M.range = function (t, e, n) {
				arguments.length <= 1 && (e = t || 0, t = 0),
				n = n || 1;
				for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; r > o; o++, t += n) i[o] = t;
				return i
			};
			var A = function () {};
			M.bind = function (t, e) {
				var n, r;
				if (d && t.bind === d) return d.apply(t, s.call(arguments, 1));
				if (!M.isFunction(t)) throw new TypeError("Bind must be called on a function");
				return n = s.call(arguments, 2),
				r = function () {
					if (! (this instanceof r)) return t.apply(e, n.concat(s.call(arguments)));
					A.prototype = t.prototype;
					var i = new A;
					A.prototype = null;
					var o = t.apply(i, n.concat(s.call(arguments)));
					return M.isObject(o) ? o: i
				}
			},
			M.partial = function (t) {
				var e = s.call(arguments, 1);
				return function () {
					for (var n = 0, r = e.slice(), i = 0, o = r.length; o > i; i++) r[i] === M && (r[i] = arguments[n++]);
					for (; n < arguments.length;) r.push(arguments[n++]);
					return t.apply(this, r)
				}
			},
			M.bindAll = function (t) {
				var e, n, r = arguments.length;
				if (1 >= r) throw new Error("bindAll must be passed function names");
				for (e = 1; r > e; e++) n = arguments[e],
				t[n] = M.bind(t[n], t);
				return t
			},
			M.memoize = function (t, e) {
				var n = function (r) {
					var i = n.cache,
					o = e ? e.apply(this, arguments) : r;
					return M.has(i, o) || (i[o] = t.apply(this, arguments)),
					i[o]
				};
				return n.cache = {},
				n
			},
			M.delay = function (t, e) {
				var n = s.call(arguments, 2);
				return setTimeout(function () {
					return t.apply(null, n)
				},
				e)
			},
			M.defer = function (t) {
				return M.delay.apply(M, [t, 1].concat(s.call(arguments, 1)))
			},
			M.throttle = function (t, e, n) {
				var r, i, o, a = null,
				c = 0;
				n || (n = {});
				var s = function () {
					c = n.leading === !1 ? 0 : M.now(),
					a = null,
					o = t.apply(r, i),
					a || (r = i = null)
				};
				return function () {
					var u = M.now();
					c || n.leading !== !1 || (c = u);
					var l = e - (u - c);
					return r = this,
					i = arguments,
					0 >= l || l > e ? (clearTimeout(a), a = null, c = u, o = t.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(s, l)),
					o
				}
			},
			M.debounce = function (t, e, n) {
				var r, i, o, a, c, s = function () {
					var u = M.now() - a;
					e > u && u > 0 ? r = setTimeout(s, e - u) : (r = null, n || (c = t.apply(o, i), r || (o = i = null)))
				};
				return function () {
					o = this,
					i = arguments,
					a = M.now();
					var u = n && !r;
					return r || (r = setTimeout(s, e)),
					u && (c = t.apply(o, i), o = i = null),
					c
				}
			},
			M.wrap = function (t, e) {
				return M.partial(e, t)
			},
			M.negate = function (t) {
				return function () {
					return ! t.apply(this, arguments)
				}
			},
			M.compose = function () {
				var t = arguments,
				e = t.length - 1;
				return function () {
					for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
					return r
				}
			},
			M.after = function (t, e) {
				return function () {
					return--t < 1 ? e.apply(this, arguments) : void 0
				}
			},
			M.before = function (t, e) {
				var n;
				return function () {
					return--t > 0 ? n = e.apply(this, arguments) : e = null,
					n
				}
			},
			M.once = M.partial(M.before, 2),
			M.keys = function (t) {
				if (!M.isObject(t)) return [];
				if (h) return h(t);
				var e = [];
				for (var n in t) M.has(t, n) && e.push(n);
				return e
			},
			M.values = function (t) {
				for (var e = M.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
				return r
			},
			M.pairs = function (t) {
				for (var e = M.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = [e[i], t[e[i]]];
				return r
			},
			M.invert = function (t) {
				for (var e = {}, n = M.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
				return e
			},
			M.functions = M.methods = function (t) {
				var e = [];
				for (var n in t) M.isFunction(t[n]) && e.push(n);
				return e.sort()
			},
			M.extend = function (t) {
				if (!M.isObject(t)) return t;
				for (var e, n, r = 1, i = arguments.length; i > r; r++) {
					e = arguments[r];
					for (n in e) p.call(e, n) && (t[n] = e[n])
				}
				return t
			},
			M.pick = function (t, e, n) {
				var r, i = {};
				if (null == t) return i;
				if (M.isFunction(e)) {
					e = g(e, n);
					for (r in t) {
						var o = t[r];
						e(o, r, t) && (i[r] = o)
					}
				} else {
					var a = u.apply([], s.call(arguments, 1));
					t = new Object(t);
					for (var c = 0, l = a.length; l > c; c++) r = a[c],
					r in t && (i[r] = t[r])
				}
				return i
			},
			M.omit = function (t, e, n) {
				if (M.isFunction(e)) e = M.negate(e);
				else {
					var r = M.map(u.apply([], s.call(arguments, 1)), String);
					e = function (t, e) {
						return ! M.contains(r, e)
					}
				}
				return M.pick(t, e, n)
			},
			M.defaults = function (t) {
				if (!M.isObject(t)) return t;
				for (var e = 1, n = arguments.length; n > e; e++) {
					var r = arguments[e];
					for (var i in r) void 0 === t[i] && (t[i] = r[i])
				}
				return t
			},
			M.clone = function (t) {
				return M.isObject(t) ? M.isArray(t) ? t.slice() : M.extend({},
				t) : t
			},
			M.tap = function (t, e) {
				return e(t),
				t
			};
			var y = function (t, e, n, r) {
				if (t === e) return 0 !== t || 1 / t === 1 / e;
				if (null == t || null == e) return t === e;
				t instanceof M && (t = t._wrapped),
				e instanceof M && (e = e._wrapped);
				var i = l.call(t);
				if (i !== l.call(e)) return ! 1;
				switch (i) {
				case "[object RegExp]":
				case "[object String]":
					return "" + t == "" + e;
				case "[object Number]":
					return + t !== +t ? +e !== +e: 0 === +t ? 1 / +t === 1 / e: +t === +e;
				case "[object Date]":
				case "[object Boolean]":
					return + t === +e
				}
				if ("object" != typeof t || "object" != typeof e) return ! 1;
				for (var o = n.length; o--;) if (n[o] === t) return r[o] === e;
				var a = t.constructor,
				c = e.constructor;
				if (a !== c && "constructor" in t && "constructor" in e && !(M.isFunction(a) && a instanceof a && M.isFunction(c) && c instanceof c)) return ! 1;
				n.push(t),
				r.push(e);
				var s, u;
				if ("[object Array]" === i) {
					if (s = t.length, u = s === e.length) for (; s--&&(u = y(t[s], e[s], n, r)););
				} else {
					var p, f = M.keys(t);
					if (s = f.length, u = M.keys(e).length === s) for (; s--&&(p = f[s], u = M.has(e, p) && y(t[p], e[p], n, r)););
				}
				return n.pop(),
				r.pop(),
				u
			};
			M.isEqual = function (t, e) {
				return y(t, e, [], [])
			},
			M.isEmpty = function (t) {
				if (null == t) return ! 0;
				if (M.isArray(t) || M.isString(t) || M.isArguments(t)) return 0 === t.length;
				for (var e in t) if (M.has(t, e)) return ! 1;
				return ! 0
			},
			M.isElement = function (t) {
				return ! (!t || 1 !== t.nodeType)
			},
			M.isArray = f ||
			function (t) {
				return "[object Array]" === l.call(t)
			},
			M.isObject = function (t) {
				var e = typeof t;
				return "function" === e || "object" === e && !!t
			},
			M.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
				M["is" + t] = function (e) {
					return l.call(e) === "[object " + t + "]"
				}
			}),
			M.isArguments(arguments) || (M.isArguments = function (t) {
				return M.has(t, "callee")
			}),
			"function" != typeof / . / &&(M.isFunction = function (t) {
				return "function" == typeof t || !1
			}),
			M.isFinite = function (t) {
				return isFinite(t) && !isNaN(parseFloat(t))
			},
			M.isNaN = function (t) {
				return M.isNumber(t) && t !== +t
			},
			M.isBoolean = function (t) {
				return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
			},
			M.isNull = function (t) {
				return null === t
			},
			M.isUndefined = function (t) {
				return void 0 === t
			},
			M.has = function (t, e) {
				return null != t && p.call(t, e)
			},
			M.noConflict = function () {
				return t._ = r,
				this
			},
			M.identity = function (t) {
				return t
			},
			M.constant = function (t) {
				return function () {
					return t
				}
			},
			M.noop = function () {},
			M.property = function (t) {
				return function (e) {
					return e[t]
				}
			},
			M.matches = function (t) {
				var e = M.pairs(t),
				n = e.length;
				return function (t) {
					if (null == t) return ! n;
					t = new Object(t);
					for (var r = 0; n > r; r++) {
						var i = e[r],
						o = i[0];
						if (i[1] !== t[o] || !(o in t)) return ! 1
					}
					return ! 0
				}
			},
			M.times = function (t, e, n) {
				var r = Array(Math.max(0, t));
				e = g(e, n, 1);
				for (var i = 0; t > i; i++) r[i] = e(i);
				return r
			},
			M.random = function (t, e) {
				return null == e && (e = t, t = 0),
				t + Math.floor(Math.random() * (e - t + 1))
			},
			M.now = Date.now ||
			function () {
				return (new Date).getTime()
			};
			var z = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"`": "&#x60;"
			},
			_ = M.invert(z),
			T = function (t) {
				var e = function (e) {
					return t[e]
				},
				n = "(?:" + M.keys(t).join("|") + ")",
				r = RegExp(n),
				i = RegExp(n, "g");
				return function (t) {
					return t = null == t ? "": "" + t,
					r.test(t) ? t.replace(i, e) : t
				}
			};
			M.escape = T(z),
			M.unescape = T(_),
			M.result = function (t, e) {
				if (null == t) return void 0;
				var n = t[e];
				return M.isFunction(n) ? t[e]() : n
			};
			var O = 0;
			M.uniqueId = function (t) {
				var e = ++O + "";
				return t ? t + e: e
			},
			M.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var L = /(.)^/,
			w = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			N = /\\|'|\r|\n|\u2028|\u2029/g,
			q = function (t) {
				return "\\" + w[t]
			};
			M.template = function (t, e, n) { ! e && n && (e = n),
				e = M.defaults({},
				e, M.templateSettings);
				var r = RegExp([(e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source].join("|") + "|$", "g"),
				i = 0,
				o = "__p+='";
				t.replace(r, function (e, n, r, a, c) {
					return o += t.slice(i, c).replace(N, q),
					i = c + e.length,
					n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": a && (o += "';\n" + a + "\n__p+='"),
					e
				}),
				o += "';\n",
				e.variable || (o = "with(obj||{}){\n" + o + "}\n"),
				o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
				try {
					var a = new Function(e.variable || "obj", "_", o)
				} catch(c) {
					throw c.source = o,
					c
				}
				var s = function (t) {
					return a.call(this, t, M)
				},
				u = e.variable || "obj";
				return s.source = "function(" + u + "){\n" + o + "}",
				s
			},
			M.chain = function (t) {
				var e = M(t);
				return e._chain = !0,
				e
			};
			var x = function (t) {
				return this._chain ? M(t).chain() : t
			};
			M.mixin = function (t) {
				M.each(M.functions(t), function (e) {
					var n = M[e] = t[e];
					M.prototype[e] = function () {
						var t = [this._wrapped];
						return c.apply(t, arguments),
						x.call(this, n.apply(M, t))
					}
				})
			},
			M.mixin(M),
			M.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
				var e = i[t];
				M.prototype[t] = function () {
					var n = this._wrapped;
					return e.apply(n, arguments),
					"shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
					x.call(this, n)
				}
			}),
			M.each(["concat", "join", "slice"], function (t) {
				var e = i[t];
				M.prototype[t] = function () {
					return x.call(this, e.apply(this._wrapped, arguments))
				}
			}),
			M.prototype.value = function () {
				return this._wrapped
			},
			"function" == typeof define && define.amd && define("underscore", [], function () {
				return M
			})
		}).call(this)
	},
	{}],
	90 : [function (t, e) { !
		function () {
			function t(t, e) {
				return e > t ? -1 : t > e ? 1 : t >= e ? 0 : 0 / 0
			}
			function n(t) {
				return null === t ? 0 / 0 : +t
			}
			function r(t) {
				return ! isNaN(t)
			}
			function i(t) {
				return {
					left: function (e, n, r, i) {
						for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); i > r;) {
							var o = r + i >>> 1;
							t(e[o], n) < 0 ? r = o + 1 : i = o
						}
						return r
					},
					right: function (e, n, r, i) {
						for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); i > r;) {
							var o = r + i >>> 1;
							t(e[o], n) > 0 ? i = o: r = o + 1
						}
						return r
					}
				}
			}
			function o(t) {
				return t.length
			}
			function a(t) {
				for (var e = 1; t * e % 1;) e *= 10;
				return e
			}
			function c(t, e) {
				for (var n in e) Object.defineProperty(t.prototype, n, {
					value: e[n],
					enumerable: !1
				})
			}
			function s() {
				this._ = Object.create(null)
			}
			function u(t) {
				return (t += "") === mc || t[0] === vc ? vc + t: t
			}
			function l(t) {
				return (t += "")[0] === vc ? t.slice(1) : t
			}
			function p(t) {
				return u(t) in this._
			}
			function f(t) {
				return (t = u(t)) in this._ && delete this._[t]
			}
			function h() {
				var t = [];
				for (var e in this._) t.push(l(e));
				return t
			}
			function d() {
				var t = 0;
				for (var e in this._)++t;
				return t
			}
			function M() {
				for (var t in this._) return ! 1;
				return ! 0
			}
			function g() {
				this._ = Object.create(null)
			}
			function b(t, e, n) {
				return function () {
					var r = n.apply(e, arguments);
					return r === e ? t: r
				}
			}
			function m(t, e) {
				if (e in t) return e;
				e = e.charAt(0).toUpperCase() + e.slice(1);
				for (var n = 0, r = Ac.length; r > n; ++n) {
					var i = Ac[n] + e;
					if (i in t) return i
				}
			}
			function v() {}
			function A() {}
			function y(t) {
				function e() {
					for (var e, r = n, i = -1, o = r.length; ++i < o;)(e = r[i].on) && e.apply(this, arguments);
					return t
				}
				var n = [],
				r = new s;
				return e.on = function (e, i) {
					var o, a = r.get(e);
					return arguments.length < 2 ? a && a.on: (a && (a.on = null, n = n.slice(0, o = n.indexOf(a)).concat(n.slice(o + 1)), r.remove(e)), i && n.push(r.set(e, {
						on: i
					})), t)
				},
				e
			}
			function z() {
				rc.event.preventDefault()
			}
			function _() {
				for (var t, e = rc.event; t = e.sourceEvent;) e = t;
				return e
			}
			function T(t) {
				for (var e = new A, n = 0, r = arguments.length; ++n < r;) e[arguments[n]] = y(e);
				return e.of = function (n, r) {
					return function (i) {
						try {
							var o = i.sourceEvent = rc.event;
							i.target = t,
							rc.event = i,
							e[i.type].apply(n, r)
						} finally {
							rc.event = o
						}
					}
				},
				e
			}
			function O(t) {
				return zc(t, wc),
				t
			}
			function L(t) {
				return "function" == typeof t ? t: function () {
					return _c(t, this)
				}
			}
			function w(t) {
				return "function" == typeof t ? t: function () {
					return Tc(t, this)
				}
			}
			function N(t, e) {
				function n() {
					this.removeAttribute(t)
				}
				function r() {
					this.removeAttributeNS(t.space, t.local)
				}
				function i() {
					this.setAttribute(t, e)
				}
				function o() {
					this.setAttributeNS(t.space, t.local, e)
				}
				function a() {
					var n = e.apply(this, arguments);
					null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
				}
				function c() {
					var n = e.apply(this, arguments);
					null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
				}
				return t = rc.ns.qualify(t),
				null == e ? t.local ? r: n: "function" == typeof e ? t.local ? c: a: t.local ? o: i
			}
			function q(t) {
				return t.trim().replace(/\s+/g, " ")
			}
			function x(t) {
				return new RegExp("(?:^|\\s+)" + rc.requote(t) + "(?:\\s+|$)", "g")
			}
			function S(t) {
				return (t + "").trim().split(/^|\s+/)
			}
			function W(t, e) {
				function n() {
					for (var n = -1; ++n < i;) t[n](this, e)
				}
				function r() {
					for (var n = -1, r = e.apply(this, arguments); ++n < i;) t[n](this, r)
				}
				t = S(t).map(E);
				var i = t.length;
				return "function" == typeof e ? r: n
			}
			function E(t) {
				var e = x(t);
				return function (n, r) {
					if (i = n.classList) return r ? i.add(t) : i.remove(t);
					var i = n.getAttribute("class") || "";
					r ? (e.lastIndex = 0, e.test(i) || n.setAttribute("class", q(i + " " + t))) : n.setAttribute("class", q(i.replace(e, " ")))
				}
			}
			function B(t, e, n) {
				function r() {
					this.style.removeProperty(t)
				}
				function i() {
					this.style.setProperty(t, e, n)
				}
				function o() {
					var r = e.apply(this, arguments);
					null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
				}
				return null == e ? r: "function" == typeof e ? o: i
			}
			function C(t, e) {
				function n() {
					delete this[t]
				}
				function r() {
					this[t] = e
				}
				function i() {
					var n = e.apply(this, arguments);
					null == n ? delete this[t] : this[t] = n
				}
				return null == e ? n: "function" == typeof e ? i: r
			}
			function X(t) {
				return "function" == typeof t ? t: (t = rc.ns.qualify(t)).local ?
				function () {
					return this.ownerDocument.createElementNS(t.space, t.local)
				}: function () {
					return this.ownerDocument.createElementNS(this.namespaceURI, t)
				}
			}
			function R() {
				var t = this.parentNode;
				t && t.removeChild(this)
			}
			function k(t) {
				return {
					__data__: t
				}
			}
			function D(t) {
				return function () {
					return Lc(this, t)
				}
			}
			function P(e) {
				return arguments.length || (e = t),
				function (t, n) {
					return t && n ? e(t.__data__, n.__data__) : !t - !n
				}
			}
			function I(t, e) {
				for (var n = 0, r = t.length; r > n; n++) for (var i, o = t[n], a = 0, c = o.length; c > a; a++)(i = o[a]) && e(i, a, n);
				return t
			}
			function j(t) {
				return zc(t, qc),
				t
			}
			function H(t) {
				var e, n;
				return function (r, i, o) {
					var a, c = t[o].update,
					s = c.length;
					for (o != n && (n = o, e = 0), i >= e && (e = i + 1); ! (a = c[e]) && ++e < s;);
					return a
				}
			}
			function U(t, e, n) {
				function r() {
					var e = this[a];
					e && (this.removeEventListener(t, e, e.$), delete this[a])
				}
				function i() {
					var i = s(e, oc(arguments));
					r.call(this),
					this.addEventListener(t, this[a] = i, i.$ = n),
					i._ = e
				}
				function o() {
					var e, n = new RegExp("^__on([^.]+)" + rc.requote(t) + "$");
					for (var r in this) if (e = r.match(n)) {
						var i = this[r];
						this.removeEventListener(e[1], i, i.$),
						delete this[r]
					}
				}
				var a = "__on" + t,
				c = t.indexOf("."),
				s = F;
				c > 0 && (t = t.slice(0, c));
				var u = Sc.get(t);
				return u && (t = u, s = V),
				c ? e ? i: r: e ? v: o
			}
			function F(t, e) {
				return function (n) {
					var r = rc.event;
					rc.event = n,
					e[0] = this.__data__;
					try {
						t.apply(this, e)
					} finally {
						rc.event = r
					}
				}
			}
			function V(t, e) {
				var n = F(t, e);
				return function (t) {
					var e = this,
					r = t.relatedTarget;
					r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
				}
			}
			function G() {
				var t = ".dragsuppress-" + ++Ec,
				e = "click" + t,
				n = rc.select(sc).on("touchmove" + t, z).on("dragstart" + t, z).on("selectstart" + t, z);
				if (Wc) {
					var r = cc.style,
					i = r[Wc];
					r[Wc] = "none"
				}
				return function (o) {
					if (n.on(t, null), Wc && (r[Wc] = i), o) {
						var a = function () {
							n.on(e, null)
						};
						n.on(e, function () {
							z(),
							a()
						},
						!0),
						setTimeout(a, 0)
					}
				}
			}
			function Y(t, e) {
				e.changedTouches && (e = e.changedTouches[0]);
				var n = t.ownerSVGElement || t;
				if (n.createSVGPoint) {
					var r = n.createSVGPoint();
					if (0 > Bc && (sc.scrollX || sc.scrollY)) {
						n = rc.select("body").append("svg").style({
							position: "absolute",
							top: 0,
							left: 0,
							margin: 0,
							padding: 0,
							border: "none"
						},
						"important");
						var i = n[0][0].getScreenCTM();
						Bc = !(i.f || i.e),
						n.remove()
					}
					return Bc ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY),
					r = r.matrixTransform(t.getScreenCTM().inverse()),
					[r.x, r.y]
				}
				var o = t.getBoundingClientRect();
				return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop]
			}
			function K() {
				return rc.event.changedTouches[0].identifier
			}
			function $() {
				return rc.event.target
			}
			function Q() {
				return sc
			}
			function J(t) {
				return t > 0 ? 1 : 0 > t ? -1 : 0
			}
			function Z(t, e, n) {
				return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
			}
			function te(t) {
				return t > 1 ? 0 : -1 > t ? Rc: Math.acos(t)
			}
			function ee(t) {
				return t > 1 ? Pc: -1 > t ? -Pc: Math.asin(t)
			}
			function ne(t) {
				return ((t = Math.exp(t)) - 1 / t) / 2
			}
			function re(t) {
				return ((t = Math.exp(t)) + 1 / t) / 2
			}
			function ie(t) {
				return ((t = Math.exp(2 * t)) - 1) / (t + 1)
			}
			function oe(t) {
				return (t = Math.sin(t / 2)) * t
			}
			function ae() {}
			function ce(t, e, n) {
				return this instanceof ce ? (this.h = +t, this.s = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof ce ? new ce(t.h, t.s, t.l) : ye("" + t, ze, ce) : new ce(t, e, n)
			}
			function se(t, e, n) {
				function r(t) {
					return t > 360 ? t -= 360 : 0 > t && (t += 360),
					60 > t ? o + (a - o) * t / 60 : 180 > t ? a: 240 > t ? o + (a - o) * (240 - t) / 60 : o
				}
				function i(t) {
					return Math.round(255 * r(t))
				}
				var o, a;
				return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t,
				e = isNaN(e) ? 0 : 0 > e ? 0 : e > 1 ? 1 : e,
				n = 0 > n ? 0 : n > 1 ? 1 : n,
				a = .5 >= n ? n * (1 + e) : n + e - n * e,
				o = 2 * n - a,
				new be(i(t + 120), i(t), i(t - 120))
			}
			function ue(t, e, n) {
				return this instanceof ue ? (this.h = +t, this.c = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof ue ? new ue(t.h, t.c, t.l) : t instanceof pe ? he(t.l, t.a, t.b) : he((t = _e((t = rc.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new ue(t, e, n)
			}
			function le(t, e, n) {
				return isNaN(t) && (t = 0),
				isNaN(e) && (e = 0),
				new pe(n, Math.cos(t *= Ic) * e, Math.sin(t) * e)
			}
			function pe(t, e, n) {
				return this instanceof pe ? (this.l = +t, this.a = +e, void(this.b = +n)) : arguments.length < 2 ? t instanceof pe ? new pe(t.l, t.a, t.b) : t instanceof ue ? le(t.h, t.c, t.l) : _e((t = be(t)).r, t.g, t.b) : new pe(t, e, n)
			}
			function fe(t, e, n) {
				var r = (t + 16) / 116,
				i = r + e / 500,
				o = r - n / 200;
				return i = de(i) * Jc,
				r = de(r) * Zc,
				o = de(o) * ts,
				new be(ge(3.2404542 * i - 1.5371385 * r - .4985314 * o), ge( - .969266 * i + 1.8760108 * r + .041556 * o), ge(.0556434 * i - .2040259 * r + 1.0572252 * o))
			}
			function he(t, e, n) {
				return t > 0 ? new ue(Math.atan2(n, e) * jc, Math.sqrt(e * e + n * n), t) : new ue(0 / 0, 0 / 0, t)
			}
			function de(t) {
				return t > .206893034 ? t * t * t: (t - 4 / 29) / 7.787037
			}
			function Me(t) {
				return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
			}
			function ge(t) {
				return Math.round(255 * (.00304 >= t ? 12.92 * t: 1.055 * Math.pow(t, 1 / 2.4) - .055))
			}
			function be(t, e, n) {
				return this instanceof be ? (this.r = ~~t, this.g = ~~e, void(this.b = ~~n)) : arguments.length < 2 ? t instanceof be ? new be(t.r, t.g, t.b) : ye("" + t, be, se) : new be(t, e, n)
			}
			function me(t) {
				return new be(t >> 16, t >> 8 & 255, 255 & t)
			}
			function ve(t) {
				return me(t) + ""
			}
			function Ae(t) {
				return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
			}
			function ye(t, e, n) {
				var r, i, o, a = 0,
				c = 0,
				s = 0;
				if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (i = r[2].split(","), r[1]) {
				case "hsl":
					return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
				case "rgb":
					return e(Oe(i[0]), Oe(i[1]), Oe(i[2]))
				}
				return (o = rs.get(t)) ? e(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & o) >> 4, a = a >> 4 | a, c = 240 & o, c = c >> 4 | c, s = 15 & o, s = s << 4 | s) : 7 === t.length && (a = (16711680 & o) >> 16, c = (65280 & o) >> 8, s = 255 & o)), e(a, c, s))
			}
			function ze(t, e, n) {
				var r, i, o = Math.min(t /= 255, e /= 255, n /= 255),
				a = Math.max(t, e, n),
				c = a - o,
				s = (a + o) / 2;
				return c ? (i = .5 > s ? c / (a + o) : c / (2 - a - o), r = t == a ? (e - n) / c + (n > e ? 6 : 0) : e == a ? (n - t) / c + 2 : (t - e) / c + 4, r *= 60) : (r = 0 / 0, i = s > 0 && 1 > s ? 0 : r),
				new ce(r, i, s)
			}
			function _e(t, e, n) {
				t = Te(t),
				e = Te(e),
				n = Te(n);
				var r = Me((.4124564 * t + .3575761 * e + .1804375 * n) / Jc),
				i = Me((.2126729 * t + .7151522 * e + .072175 * n) / Zc),
				o = Me((.0193339 * t + .119192 * e + .9503041 * n) / ts);
				return pe(116 * i - 16, 500 * (r - i), 200 * (i - o))
			}
			function Te(t) {
				return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
			}
			function Oe(t) {
				var e = parseFloat(t);
				return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
			}
			function Le(t) {
				return "function" == typeof t ? t: function () {
					return t
				}
			}
			function we(t) {
				return t
			}
			function Ne(t) {
				return function (e, n, r) {
					return 2 === arguments.length && "function" == typeof n && (r = n, n = null),
					qe(e, n, t, r)
				}
			}
			function qe(t, e, n, r) {
				function i() {
					var t, e = s.status;
					if (!e && Se(s) || e >= 200 && 300 > e || 304 === e) {
						try {
							t = n.call(o, s)
						} catch(r) {
							return void a.error.call(o, r)
						}
						a.load.call(o, t)
					} else a.error.call(o, s)
				}
				var o = {},
				a = rc.dispatch("beforesend", "progress", "load", "error"),
				c = {},
				s = new XMLHttpRequest,
				u = null;
				return ! sc.XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest),
				"onload" in s ? s.onload = s.onerror = i: s.onreadystatechange = function () {
					s.readyState > 3 && i()
				},
				s.onprogress = function (t) {
					var e = rc.event;
					rc.event = t;
					try {
						a.progress.call(o, s)
					} finally {
						rc.event = e
					}
				},
				o.header = function (t, e) {
					return t = (t + "").toLowerCase(),
					arguments.length < 2 ? c[t] : (null == e ? delete c[t] : c[t] = e + "", o)
				},
				o.mimeType = function (t) {
					return arguments.length ? (e = null == t ? null: t + "", o) : e
				},
				o.responseType = function (t) {
					return arguments.length ? (u = t, o) : u
				},
				o.response = function (t) {
					return n = t,
					o
				},
				["get", "post"].forEach(function (t) {
					o[t] = function () {
						return o.send.apply(o, [t].concat(oc(arguments)))
					}
				}),
				o.send = function (n, r, i) {
					if (2 === arguments.length && "function" == typeof r && (i = r, r = null), s.open(n, t, !0), null == e || "accept" in c || (c.accept = e + ",*/*"), s.setRequestHeader) for (var l in c) s.setRequestHeader(l, c[l]);
					return null != e && s.overrideMimeType && s.overrideMimeType(e),
					null != u && (s.responseType = u),
					null != i && o.on("error", i).on("load", function (t) {
						i(null, t)
					}),
					a.beforesend.call(o, s),
					s.send(null == r ? null: r),
					o
				},
				o.abort = function () {
					return s.abort(),
					o
				},
				rc.rebind(o, a, "on"),
				null == r ? o: o.get(xe(r))
			}
			function xe(t) {
				return 1 === t.length ?
				function (e, n) {
					t(null == e ? n: null)
				}: t
			}
			function Se(t) {
				var e = t.responseType;
				return e && "text" !== e ? t.response: t.responseText
			}
			function We() {
				var t = Ee(),
				e = Be() - t;
				e > 24 ? (isFinite(e) && (clearTimeout(cs), cs = setTimeout(We, e)), as = 0) : (as = 1, us(We))
			}
			function Ee() {
				var t = Date.now();
				for (ss = is; ss;) t >= ss.t && (ss.f = ss.c(t - ss.t)),
				ss = ss.n;
				return t
			}
			function Be() {
				for (var t, e = is, n = 1 / 0; e;) e.f ? e = t ? t.n = e.n: is = e.n: (e.t < n && (n = e.t), e = (t = e).n);
				return os = t,
				n
			}
			function Ce(t, e) {
				return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
			}
			function Xe(t, e) {
				var n = Math.pow(10, 3 * bc(8 - e));
				return {
					scale: e > 8 ?
					function (t) {
						return t / n
					}: function (t) {
						return t * n
					},
					symbol: t
				}
			}
			function Re(t) {
				var e = t.decimal,
				n = t.thousands,
				r = t.grouping,
				i = t.currency,
				o = r && n ?
				function (t, e) {
					for (var i = t.length, o = [], a = 0, c = r[0], s = 0; i > 0 && c > 0 && (s + c + 1 > e && (c = Math.max(1, e - s)), o.push(t.substring(i -= c, i + c)), !((s += c + 1) > e));) c = r[a = (a + 1) % r.length];
					return o.reverse().join(n)
				}: we;
				return function (t) {
					var n = ps.exec(t),
					r = n[1] || " ",
					a = n[2] || ">",
					c = n[3] || "-",
					s = n[4] || "",
					u = n[5],
					l = +n[6],
					p = n[7],
					f = n[8],
					h = n[9],
					d = 1,
					M = "",
					g = "",
					b = !1,
					m = !0;
					switch (f && (f = +f.substring(1)), (u || "0" === r && "=" === a) && (u = r = "0", a = "="), h) {
					case "n":
						p = !0,
						h = "g";
						break;
					case "%":
						d = 100,
						g = "%",
						h = "f";
						break;
					case "p":
						d = 100,
						g = "%",
						h = "r";
						break;
					case "b":
					case "o":
					case "x":
					case "X":
						"#" === s && (M = "0" + h.toLowerCase());
					case "c":
						m = !1;
					case "d":
						b = !0,
						f = 0;
						break;
					case "s":
						d = -1,
						h = "r"
					}
					"$" === s && (M = i[0], g = i[1]),
					"r" != h || f || (h = "g"),
					null != f && ("g" == h ? f = Math.max(1, Math.min(21, f)) : ("e" == h || "f" == h) && (f = Math.max(0, Math.min(20, f)))),
					h = fs.get(h) || ke;
					var v = u && p;
					return function (t) {
						var n = g;
						if (b && t % 1) return "";
						var i = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === c ? "": c;
						if (0 > d) {
							var s = rc.formatPrefix(t, f);
							t = s.scale(t),
							n = s.symbol + g
						} else t *= d;
						t = h(t, f);
						var A, y, z = t.lastIndexOf(".");
						if (0 > z) {
							var _ = m ? t.lastIndexOf("e") : -1;
							0 > _ ? (A = t, y = "") : (A = t.substring(0, _), y = t.substring(_))
						} else A = t.substring(0, z),
						y = e + t.substring(z + 1); ! u && p && (A = o(A, 1 / 0));
						var T = M.length + A.length + y.length + (v ? 0 : i.length),
						O = l > T ? new Array(T = l - T + 1).join(r) : "";
						return v && (A = o(O + A, O.length ? l - y.length: 1 / 0)),
						i += M,
						t = A + y,
						("<" === a ? i + t + O: ">" === a ? O + i + t: "^" === a ? O.substring(0, T >>= 1) + i + t + O.substring(T) : i + (v ? t: O + t)) + n
					}
				}
			}
			function ke(t) {
				return t + ""
			}
			function De() {
				this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
			}
			function Pe(t, e, n) {
				function r(e) {
					var n = t(e),
					r = o(n, 1);
					return r - e > e - n ? n: r
				}
				function i(n) {
					return e(n = t(new ds(n - 1)), 1),
					n
				}
				function o(t, n) {
					return e(t = new ds( + t), n),
					t
				}
				function a(t, r, o) {
					var a = i(t),
					c = [];
					if (o > 1) for (; r > a;) n(a) % o || c.push(new Date( + a)),
					e(a, 1);
					else for (; r > a;) c.push(new Date( + a)),
					e(a, 1);
					return c
				}
				function c(t, e, n) {
					try {
						ds = De;
						var r = new De;
						return r._ = t,
						a(r, e, n)
					} finally {
						ds = Date
					}
				}
				t.floor = t,
				t.round = r,
				t.ceil = i,
				t.offset = o,
				t.range = a;
				var s = t.utc = Ie(t);
				return s.floor = s,
				s.round = Ie(r),
				s.ceil = Ie(i),
				s.offset = Ie(o),
				s.range = c,
				t
			}
			function Ie(t) {
				return function (e, n) {
					try {
						ds = De;
						var r = new De;
						return r._ = e,
						t(r, n)._
					} finally {
						ds = Date
					}
				}
			}
			function je(t) {
				function e(t) {
					function e(e) {
						for (var n, i, o, a = [], c = -1, s = 0; ++c < r;) 37 === t.charCodeAt(c) && (a.push(t.slice(s, c)), null != (i = gs[n = t.charAt(++c)]) && (n = t.charAt(++c)), (o = N[n]) && (n = o(e, null == i ? "e" === n ? " ": "0": i)), a.push(n), s = c + 1);
						return a.push(t.slice(s, c)),
						a.join("")
					}
					var r = t.length;
					return e.parse = function (e) {
						var r = {
							y: 1900,
							m: 0,
							d: 1,
							H: 0,
							M: 0,
							S: 0,
							L: 0,
							Z: null
						},
						i = n(r, t, e, 0);
						if (i != e.length) return null;
						"p" in r && (r.H = r.H%12 + 12*r.p);
						var o = null != r.Z && ds !== De,
						a = new(o ? De: ds);
						return "j" in r ? a.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d),
						a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z%100, r.S, r.L),
						o ? a._: a
					},
					e.toString = function () {
						return t
					},
					e
				}
				function n(t, e, n, r) {
					for (var i, o, a, c = 0, s = e.length, u = n.length; s > c;) {
						if (r >= u) return - 1;
						if (i = e.charCodeAt(c++), 37 === i) {
							if (a = e.charAt(c++), o = q[a in gs ? e.charAt(c++) : a], !o || (r = o(t, n, r)) < 0) return - 1
						} else if (i != n.charCodeAt(r++)) return - 1
					}
					return r
				}
				function r(t, e, n) {
					z.lastIndex = 0;
					var r = z.exec(e.slice(n));
					return r ? (t.w = _.get(r[0].toLowerCase()), n + r[0].length) : -1
				}
				function i(t, e, n) {
					A.lastIndex = 0;
					var r = A.exec(e.slice(n));
					return r ? (t.w = y.get(r[0].toLowerCase()), n + r[0].length) : -1
				}
				function o(t, e, n) {
					L.lastIndex = 0;
					var r = L.exec(e.slice(n));
					return r ? (t.m = w.get(r[0].toLowerCase()), n + r[0].length) : -1
				}
				function a(t, e, n) {
					T.lastIndex = 0;
					var r = T.exec(e.slice(n));
					return r ? (t.m = O.get(r[0].toLowerCase()), n + r[0].length) : -1
				}
				function c(t, e, r) {
					return n(t, N.c.toString(), e, r)
				}
				function s(t, e, r) {
					return n(t, N.x.toString(), e, r)
				}
				function u(t, e, r) {
					return n(t, N.X.toString(), e, r)
				}
				function l(t, e, n) {
					var r = v.get(e.slice(n, n += 2).toLowerCase());
					return null == r ? -1 : (t.p = r, n)
				}
				var p = t.dateTime,
				f = t.date,
				h = t.time,
				d = t.periods,
				M = t.days,
				g = t.shortDays,
				b = t.months,
				m = t.shortMonths;
				e.utc = function (t) {
					function n(t) {
						try {
							ds = De;
							var e = new ds;
							return e._ = t,
							r(e)
						} finally {
							ds = Date
						}
					}
					var r = e(t);
					return n.parse = function (t) {
						try {
							ds = De;
							var e = r.parse(t);
							return e && e._
						} finally {
							ds = Date
						}
					},
					n.toString = r.toString,
					n
				},
				e.multi = e.utc.multi = un;
				var v = rc.map(),
				A = Ue(M),
				y = Fe(M),
				z = Ue(g),
				_ = Fe(g),
				T = Ue(b),
				O = Fe(b),
				L = Ue(m),
				w = Fe(m);
				d.forEach(function (t, e) {
					v.set(t.toLowerCase(), e)
				});
				var N = {
					a: function (t) {
						return g[t.getDay()]
					},
					A: function (t) {
						return M[t.getDay()]
					},
					b: function (t) {
						return m[t.getMonth()]
					},
					B: function (t) {
						return b[t.getMonth()]
					},
					c: e(p),
					d: function (t, e) {
						return He(t.getDate(), e, 2)
					},
					e: function (t, e) {
						return He(t.getDate(), e, 2)
					},
					H: function (t, e) {
						return He(t.getHours(), e, 2)
					},
					I: function (t, e) {
						return He(t.getHours()%12 || 12, e, 2)
					},
					j: function (t, e) {
						return He(1 + hs.dayOfYear(t), e, 3)
					},
					L: function (t, e) {
						return He(t.getMilliseconds(), e, 3)
					},
					m: function (t, e) {
						return He(t.getMonth() + 1, e, 2)
					},
					M: function (t, e) {
						return He(t.getMinutes(), e, 2)
					},
					p: function (t) {
						return d[ + (t.getHours() >= 12)]
					},
					S: function (t, e) {
						return He(t.getSeconds(), e, 2)
					},
					U: function (t, e) {
						return He(hs.sundayOfYear(t), e, 2)
					},
					w: function (t) {
						return t.getDay()
					},
					W: function (t, e) {
						return He(hs.mondayOfYear(t), e, 2)
					},
					x: e(f),
					X: e(h),
					y: function (t, e) {
						return He(t.getFullYear()%100, e, 2)
					},
					Y: function (t, e) {
						return He(t.getFullYear()%1e4, e, 4)
					},
					Z: cn,
					"%": function () {
						return "%"
					}
				},
				q = {
					a: r,
					A: i,
					b: o,
					B: a,
					c: c,
					d: tn,
					e: tn,
					H: nn,
					I: nn,
					j: en,
					L: an,
					m: Ze,
					M: rn,
					p: l,
					S: on,
					U: Ge,
					w: Ve,
					W: Ye,
					x: s,
					X: u,
					y: $e,
					Y: Ke,
					Z: Qe,
					"%": sn
				};
				return e
			}
			function He(t, e, n) {
				var r = 0 > t ? "-": "",
				i = (r ? -t: t) + "",
				o = i.length;
				return r + (n > o ? new Array(n - o + 1).join(e) + i: i)
			}
			function Ue(t) {
				return new RegExp("^(?:" + t.map(rc.requote).join("|") + ")", "i")
			}
			function Fe(t) {
				for (var e = new s, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
				return e
			}
			function Ve(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 1));
				return r ? (t.w = +r[0], n + r[0].length) : -1
			}
			function Ge(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n));
				return r ? (t.U = +r[0], n + r[0].length) : -1
			}
			function Ye(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n));
				return r ? (t.W = +r[0], n + r[0].length) : -1
			}
			function Ke(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 4));
				return r ? (t.y = +r[0], n + r[0].length) : -1
			}
			function $e(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 2));
				return r ? (t.y = Je( + r[0]), n + r[0].length) : -1
			}
			function Qe(t, e, n) {
				return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
			}
			function Je(t) {
				return t + (t > 68 ? 1900 : 2e3)
			}
			function Ze(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 2));
				return r ? (t.m = r[0] - 1, n + r[0].length) : -1
			}
			function tn(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 2));
				return r ? (t.d = +r[0], n + r[0].length) : -1
			}
			function en(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 3));
				return r ? (t.j = +r[0], n + r[0].length) : -1
			}
			function nn(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 2));
				return r ? (t.H = +r[0], n + r[0].length) : -1
			}
			function rn(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 2));
				return r ? (t.M = +r[0], n + r[0].length) : -1
			}
			function on(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 2));
				return r ? (t.S = +r[0], n + r[0].length) : -1
			}
			function an(t, e, n) {
				bs.lastIndex = 0;
				var r = bs.exec(e.slice(n, n + 3));
				return r ? (t.L = +r[0], n + r[0].length) : -1
			}
			function cn(t) {
				var e = t.getTimezoneOffset(),
				n = e > 0 ? "-": "+",
				r = bc(e) / 60 | 0,
				i = bc(e)%60;
				return n + He(r, "0", 2) + He(i, "0", 2)
			}
			function sn(t, e, n) {
				ms.lastIndex = 0;
				var r = ms.exec(e.slice(n, n + 1));
				return r ? n + r[0].length: -1
			}
			function un(t) {
				for (var e = t.length, n = -1; ++n < e;) t[n][0] = this(t[n][0]);
				return function (e) {
					for (var n = 0, r = t[n]; ! r[1](e);) r = t[++n];
					return r[0](e)
				}
			}
			function ln() {}
			function pn(t, e, n) {
				var r = n.s = t + e,
				i = r - t,
				o = r - i;
				n.t = t - o + (e - i)
			}
			function fn(t, e) {
				t && zs.hasOwnProperty(t.type) && zs[t.type](t, e)
			}
			function hn(t, e, n) {
				var r, i = -1,
				o = t.length - n;
				for (e.lineStart(); ++i < o;) r = t[i],
				e.point(r[0], r[1], r[2]);
				e.lineEnd()
			}
			function dn(t, e) {
				var n = -1,
				r = t.length;
				for (e.polygonStart(); ++n < r;) hn(t[n], e, 1);
				e.polygonEnd()
			}
			function Mn() {
				function t(t, e) {
					t *= Ic,
					e = e * Ic / 2 + Rc / 4;
					var n = t - r,
					a = n >= 0 ? 1 : -1,
					c = a * n,
					s = Math.cos(e),
					u = Math.sin(e),
					l = o * u,
					p = i * s + l * Math.cos(c),
					f = l * a * Math.sin(c);
					Ts.add(Math.atan2(f, p)),
					r = t,
					i = s,
					o = u
				}
				var e, n, r, i, o;
				Os.point = function (a, c) {
					Os.point = t,
					r = (e = a) * Ic,
					i = Math.cos(c = (n = c) * Ic / 2 + Rc / 4),
					o = Math.sin(c)
				},
				Os.lineEnd = function () {
					t(e, n)
				}
			}
			function gn(t) {
				var e = t[0],
				n = t[1],
				r = Math.cos(n);
				return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
			}
			function bn(t, e) {
				return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
			}
			function mn(t, e) {
				return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
			}
			function vn(t, e) {
				t[0] += e[0],
				t[1] += e[1],
				t[2] += e[2]
			}
			function An(t, e) {
				return [t[0] * e, t[1] * e, t[2] * e]
			}
			function yn(t) {
				var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
				t[0] /= e,
				t[1] /= e,
				t[2] /= e
			}
			function zn(t) {
				return [Math.atan2(t[1], t[0]), ee(t[2])]
			}
			function _n(t, e) {
				return bc(t[0] - e[0]) < Cc && bc(t[1] - e[1]) < Cc
			}
			function Tn(t, e) {
				t *= Ic;
				var n = Math.cos(e *= Ic);
				On(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
			}
			function On(t, e, n) {++Ls,
				Ns += (t - Ns) / Ls,
				qs += (e - qs) / Ls,
				xs += (n - xs) / Ls
			}
			function Ln() {
				function t(t, i) {
					t *= Ic;
					var o = Math.cos(i *= Ic),
					a = o * Math.cos(t),
					c = o * Math.sin(t),
					s = Math.sin(i),
					u = Math.atan2(Math.sqrt((u = n * s - r * c) * u + (u = r * a - e * s) * u + (u = e * c - n * a) * u), e * a + n * c + r * s);
					ws += u,
					Ss += u * (e + (e = a)),
					Ws += u * (n + (n = c)),
					Es += u * (r + (r = s)),
					On(e, n, r)
				}
				var e, n, r;
				Rs.point = function (i, o) {
					i *= Ic;
					var a = Math.cos(o *= Ic);
					e = a * Math.cos(i),
					n = a * Math.sin(i),
					r = Math.sin(o),
					Rs.point = t,
					On(e, n, r)
				}
			}
			function wn() {
				Rs.point = Tn
			}
			function Nn() {
				function t(t, e) {
					t *= Ic;
					var n = Math.cos(e *= Ic),
					a = n * Math.cos(t),
					c = n * Math.sin(t),
					s = Math.sin(e),
					u = i * s - o * c,
					l = o * a - r * s,
					p = r * c - i * a,
					f = Math.sqrt(u * u + l * l + p * p),
					h = r * a + i * c + o * s,
					d = f && -te(h) / f,
					M = Math.atan2(f, h);
					Bs += d * u,
					Cs += d * l,
					Xs += d * p,
					ws += M,
					Ss += M * (r + (r = a)),
					Ws += M * (i + (i = c)),
					Es += M * (o + (o = s)),
					On(r, i, o)
				}
				var e, n, r, i, o;
				Rs.point = function (a, c) {
					e = a,
					n = c,
					Rs.point = t,
					a *= Ic;
					var s = Math.cos(c *= Ic);
					r = s * Math.cos(a),
					i = s * Math.sin(a),
					o = Math.sin(c),
					On(r, i, o)
				},
				Rs.lineEnd = function () {
					t(e, n),
					Rs.lineEnd = wn,
					Rs.point = Tn
				}
			}
			function qn(t, e) {
				function n(n, r) {
					return n = t(n, r),
					e(n[0], n[1])
				}
				return t.invert && e.invert && (n.invert = function (n, r) {
					return n = e.invert(n, r),
					n && t.invert(n[0], n[1])
				}),
				n
			}
			function xn() {
				return ! 0
			}
			function Sn(t, e, n, r, i) {
				var o = [],
				a = [];
				if (t.forEach(function (t) {
					if (! ((e = t.length - 1) <= 0)) {
						var e, n = t[0],
						r = t[e];
						if (_n(n, r)) {
							i.lineStart();
							for (var c = 0; e > c; ++c) i.point((n = t[c])[0], n[1]);
							return void i.lineEnd()
						}
						var s = new En(n, t, null, !0),
						u = new En(n, null, s, !1);
						s.o = u,
						o.push(s),
						a.push(u),
						s = new En(r, t, null, !1),
						u = new En(r, null, s, !0),
						s.o = u,
						o.push(s),
						a.push(u)
					}
				}), a.sort(e), Wn(o), Wn(a), o.length) {
					for (var c = 0, s = n, u = a.length; u > c; ++c) a[c].e = s = !s;
					for (var l, p, f = o[0];;) {
						for (var h = f, d = !0; h.v;) if ((h = h.n) === f) return;
						l = h.z,
						i.lineStart();
						do {
							if (h.v = h.o.v = !0, h.e) {
								if (d) for (var c = 0, u = l.length; u > c; ++c) i.point((p = l[c])[0], p[1]);
								else r(h.x, h.n.x, 1, i);
								h = h.n
							} else {
								if (d) {
									l = h.p.z;
									for (var c = l.length - 1; c >= 0; --c) i.point((p = l[c])[0], p[1])
								} else r(h.x, h.p.x, -1, i);
								h = h.p
							}
							h = h.o, l = h.z, d = !d
						} while (!h.v);
						i.lineEnd()
					}
				}
			}
			function Wn(t) {
				if (e = t.length) {
					for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r],
					n.p = i,
					i = n;
					i.n = n = t[0],
					n.p = i
				}
			}
			function En(t, e, n, r) {
				this.x = t,
				this.z = e,
				this.o = n,
				this.e = r,
				this.v = !1,
				this.n = this.p = null
			}
			function Bn(t, e, n, r) {
				return function (i, o) {
					function a(e, n) {
						var r = i(e, n);
						t(e = r[0], n = r[1]) && o.point(e, n)
					}
					function c(t, e) {
						var n = i(t, e);
						g.point(n[0], n[1])
					}
					function s() {
						m.point = c,
						g.lineStart()
					}
					function u() {
						m.point = a,
						g.lineEnd()
					}
					function l(t, e) {
						M.push([t, e]);
						var n = i(t, e);
						A.point(n[0], n[1])
					}
					function p() {
						A.lineStart(),
						M = []
					}
					function f() {
						l(M[0][0], M[0][1]),
						A.lineEnd();
						var t, e = A.clean(),
						n = v.buffer(),
						r = n.length;
						if (M.pop(), d.push(M), M = null, r) if (1 & e) {
							t = n[0];
							var i, r = t.length - 1,
							a = -1;
							if (r > 0) {
								for (y || (o.polygonStart(), y = !0), o.lineStart(); ++a < r;) o.point((i = t[a])[0], i[1]);
								o.lineEnd()
							}
						} else r > 1 && 2 & e && n.push(n.pop().concat(n.shift())),
						h.push(n.filter(Cn))
					}
					var h, d, M, g = e(o),
					b = i.invert(r[0], r[1]),
					m = {
						point: a,
						lineStart: s,
						lineEnd: u,
						polygonStart: function () {
							m.point = l,
							m.lineStart = p,
							m.lineEnd = f,
							h = [],
							d = []
						},
						polygonEnd: function () {
							m.point = a,
							m.lineStart = s,
							m.lineEnd = u,
							h = rc.merge(h);
							var t = In(b, d);
							h.length ? (y || (o.polygonStart(), y = !0), Sn(h, Rn, t, n, o)) : t && (y || (o.polygonStart(), y = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()),
							y && (o.polygonEnd(), y = !1),
							h = d = null
						},
						sphere: function () {
							o.polygonStart(),
							o.lineStart(),
							n(null, null, 1, o),
							o.lineEnd(),
							o.polygonEnd()
						}
					},
					v = Xn(),
					A = e(v),
					y = !1;
					return m
				}
			}
			function Cn(t) {
				return t.length > 1
			}
			function Xn() {
				var t, e = [];
				return {
					lineStart: function () {
						e.push(t = [])
					},
					point: function (e, n) {
						t.push([e, n])
					},
					lineEnd: v,
					buffer: function () {
						var n = e;
						return e = [],
						t = null,
						n
					},
					rejoin: function () {
						e.length > 1 && e.push(e.pop().concat(e.shift()))
					}
				}
			}
			function Rn(t, e) {
				return ((t = t.x)[0] < 0 ? t[1] - Pc - Cc: Pc - t[1]) - ((e = e.x)[0] < 0 ? e[1] - Pc - Cc: Pc - e[1])
			}
			function kn(t) {
				var e, n = 0 / 0,
				r = 0 / 0,
				i = 0 / 0;
				return {
					lineStart: function () {
						t.lineStart(),
						e = 1
					},
					point: function (o, a) {
						var c = o > 0 ? Rc: -Rc,
						s = bc(o - n);
						bc(s - Rc) < Cc ? (t.point(n, r = (r + a) / 2 > 0 ? Pc: -Pc), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(c, r), t.point(o, r), e = 0) : i !== c && s >= Rc && (bc(n - i) < Cc && (n -= i * Cc), bc(o - c) < Cc && (o -= c * Cc), r = Dn(n, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(c, r), e = 0),
						t.point(n = o, r = a),
						i = c
					},
					lineEnd: function () {
						t.lineEnd(),
						n = r = 0 / 0
					},
					clean: function () {
						return 2 - e
					}
				}
			}
			function Dn(t, e, n, r) {
				var i, o, a = Math.sin(t - n);
				return bc(a) > Cc ? Math.atan((Math.sin(e) * (o = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(e)) * Math.sin(t)) / (i * o * a)) : (e + r) / 2
			}
			function Pn(t, e, n, r) {
				var i;
				if (null == t) i = n * Pc,
				r.point( - Rc, i),
				r.point(0, i),
				r.point(Rc, i),
				r.point(Rc, 0),
				r.point(Rc, -i),
				r.point(0, -i),
				r.point( - Rc, -i),
				r.point( - Rc, 0),
				r.point( - Rc, i);
				else if (bc(t[0] - e[0]) > Cc) {
					var o = t[0] < e[0] ? Rc: -Rc;
					i = n * o / 2,
					r.point( - o, i),
					r.point(0, i),
					r.point(o, i)
				} else r.point(e[0], e[1])
			}
			function In(t, e) {
				var n = t[0],
				r = t[1],
				i = [Math.sin(n), -Math.cos(n), 0],
				o = 0,
				a = 0;
				Ts.reset();
				for (var c = 0, s = e.length; s > c; ++c) {
					var u = e[c],
					l = u.length;
					if (l) for (var p = u[0], f = p[0], h = p[1] / 2 + Rc / 4, d = Math.sin(h), M = Math.cos(h), g = 1;;) {
						g === l && (g = 0),
						t = u[g];
						var b = t[0],
						m = t[1] / 2 + Rc / 4,
						v = Math.sin(m),
						A = Math.cos(m),
						y = b - f,
						z = y >= 0 ? 1 : -1,
						_ = z * y,
						T = _ > Rc,
						O = d * v;
						if (Ts.add(Math.atan2(O * z * Math.sin(_), M * A + O * Math.cos(_))), o += T ? y + z * kc: y, T ^ f >= n ^ b >= n) {
							var L = mn(gn(p), gn(t));
							yn(L);
							var w = mn(i, L);
							yn(w);
							var N = (T ^ y >= 0 ? -1 : 1) * ee(w[2]);
							(r > N || r === N && (L[0] || L[1])) && (a += T ^ y >= 0 ? 1 : -1)
						}
						if (!g++) break;
						f = b,
						d = v,
						M = A,
						p = t
					}
				}
				return ( - Cc > o || Cc > o && 0 > Ts) ^ 1 & a
			}
			function jn(t) {
				function e(t, e) {
					return Math.cos(t) * Math.cos(e) > o
				}
				function n(t) {
					var n, o, s, u, l;
					return {
						lineStart: function () {
							u = s = !1,
							l = 1
						},
						point: function (p, f) {
							var h, d = [p, f],
							M = e(p, f),
							g = a ? M ? 0 : i(p, f) : M ? i(p + (0 > p ? Rc: -Rc), f) : 0;
							if (!n && (u = s = M) && t.lineStart(), M !== s && (h = r(n, d), (_n(n, h) || _n(d, h)) && (d[0] += Cc, d[1] += Cc, M = e(d[0], d[1]))), M !== s) l = 0,
							M ? (t.lineStart(), h = r(d, n), t.point(h[0], h[1])) : (h = r(n, d), t.point(h[0], h[1]), t.lineEnd()),
							n = h;
							else if (c && n && a ^ M) {
								var b;
								g & o || !(b = r(d, n, !0)) || (l = 0, a ? (t.lineStart(), t.point(b[0][0], b[0][1]), t.point(b[1][0], b[1][1]), t.lineEnd()) : (t.point(b[1][0], b[1][1]), t.lineEnd(), t.lineStart(), t.point(b[0][0], b[0][1])))
							} ! M || n && _n(n, d) || t.point(d[0], d[1]),
							n = d,
							s = M,
							o = g
						},
						lineEnd: function () {
							s && t.lineEnd(),
							n = null
						},
						clean: function () {
							return l | (u && s) << 1
						}
					}
				}
				function r(t, e, n) {
					var r = gn(t),
					i = gn(e),
					a = [1, 0, 0],
					c = mn(r, i),
					s = bn(c, c),
					u = c[0],
					l = s - u * u;
					if (!l) return ! n && t;
					var p = o * s / l,
					f = -o * u / l,
					h = mn(a, c),
					d = An(a, p),
					M = An(c, f);
					vn(d, M);
					var g = h,
					b = bn(d, g),
					m = bn(g, g),
					v = b * b - m * (bn(d, d) - 1);
					if (! (0 > v)) {
						var A = Math.sqrt(v),
						y = An(g, ( - b - A) / m);
						if (vn(y, d), y = zn(y), !n) return y;
						var z, _ = t[0],
						T = e[0],
						O = t[1],
						L = e[1];
						_ > T && (z = _, _ = T, T = z);
						var w = T - _,
						N = bc(w - Rc) < Cc,
						q = N || Cc > w;
						if (!N && O > L && (z = O, O = L, L = z), q ? N ? O + L > 0 ^ y[1] < (bc(y[0] - _) < Cc ? O: L) : O <= y[1] && y[1] <= L: w > Rc ^ (_ <= y[0] && y[0] <= T)) {
							var x = An(g, ( - b + A) / m);
							return vn(x, d),
							[y, zn(x)]
						}
					}
				}
				function i(e, n) {
					var r = a ? t: Rc - t,
					i = 0;
					return - r > e ? i |= 1 : e > r && (i |= 2),
					-r > n ? i |= 4 : n > r && (i |= 8),
					i
				}
				var o = Math.cos(t),
				a = o > 0,
				c = bc(o) > Cc,
				s = Mr(t, 6 * Ic);
				return Bn(e, n, s, a ? [0, -t] : [ - Rc, t - Rc])
			}
			function Hn(t, e, n, r) {
				return function (i) {
					var o, a = i.a,
					c = i.b,
					s = a.x,
					u = a.y,
					l = c.x,
					p = c.y,
					f = 0,
					h = 1,
					d = l - s,
					M = p - u;
					if (o = t - s, d || !(o > 0)) {
						if (o /= d, 0 > d) {
							if (f > o) return;
							h > o && (h = o)
						} else if (d > 0) {
							if (o > h) return;
							o > f && (f = o)
						}
						if (o = n - s, d || !(0 > o)) {
							if (o /= d, 0 > d) {
								if (o > h) return;
								o > f && (f = o)
							} else if (d > 0) {
								if (f > o) return;
								h > o && (h = o)
							}
							if (o = e - u, M || !(o > 0)) {
								if (o /= M, 0 > M) {
									if (f > o) return;
									h > o && (h = o)
								} else if (M > 0) {
									if (o > h) return;
									o > f && (f = o)
								}
								if (o = r - u, M || !(0 > o)) {
									if (o /= M, 0 > M) {
										if (o > h) return;
										o > f && (f = o)
									} else if (M > 0) {
										if (f > o) return;
										h > o && (h = o)
									}
									return f > 0 && (i.a = {
										x: s + f * d,
										y: u + f * M
									}),
									1 > h && (i.b = {
										x: s + h * d,
										y: u + h * M
									}),
									i
								}
							}
						}
					}
				}
			}
			function Un(t, e, n, r) {
				function i(r, i) {
					return bc(r[0] - t) < Cc ? i > 0 ? 0 : 3 : bc(r[0] - n) < Cc ? i > 0 ? 2 : 1 : bc(r[1] - e) < Cc ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
				}
				function o(t, e) {
					return a(t.x, e.x)
				}
				function a(t, e) {
					var n = i(t, 1),
					r = i(e, 1);
					return n !== r ? n - r: 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
				}
				return function (c) {
					function s(t) {
						for (var e = 0, n = g.length, r = t[1], i = 0; n > i; ++i) for (var o, a = 1, c = g[i], s = c.length, u = c[0]; s > a; ++a) o = c[a],
						u[1] <= r ? o[1] > r && Z(u, o, t) > 0 && ++e: o[1] <= r && Z(u, o, t) < 0 && --e,
						u = o;
						return 0 !== e
					}
					function u(o, c, s, u) {
						var l = 0,
						p = 0;
						if (null == o || (l = i(o, s)) !== (p = i(c, s)) || a(o, c) < 0 ^ s > 0) {
							do u.point(0 === l || 3 === l ? t: n, l > 1 ? r: e);
							while ((l = (l + s + 4) % 4) !== p)
						} else u.point(c[0], c[1])
					}
					function l(i, o) {
						return i >= t && n >= i && o >= e && r >= o
					}
					function p(t, e) {
						l(t, e) && c.point(t, e)
					}
					function f() {
						q.point = d,
						g && g.push(b = []),
						T = !0,
						_ = !1,
						y = z = 0 / 0
					}
					function h() {
						M && (d(m, v), A && _ && w.rejoin(), M.push(w.buffer())),
						q.point = p,
						_ && c.lineEnd()
					}
					function d(t, e) {
						t = Math.max( - Ds, Math.min(Ds, t)),
						e = Math.max( - Ds, Math.min(Ds, e));
						var n = l(t, e);
						if (g && b.push([t, e]), T) m = t,
						v = e,
						A = n,
						T = !1,
						n && (c.lineStart(), c.point(t, e));
						else if (n && _) c.point(t, e);
						else {
							var r = {
								a: {
									x: y,
									y: z
								},
								b: {
									x: t,
									y: e
								}
							};
							N(r) ? (_ || (c.lineStart(), c.point(r.a.x, r.a.y)), c.point(r.b.x, r.b.y), n || c.lineEnd(), O = !1) : n && (c.lineStart(), c.point(t, e), O = !1)
						}
						y = t,
						z = e,
						_ = n
					}
					var M, g, b, m, v, A, y, z, _, T, O, L = c,
					w = Xn(),
					N = Hn(t, e, n, r),
					q = {
						point: p,
						lineStart: f,
						lineEnd: h,
						polygonStart: function () {
							c = w,
							M = [],
							g = [],
							O = !0
						},
						polygonEnd: function () {
							c = L,
							M = rc.merge(M);
							var e = s([t, r]),
							n = O && e,
							i = M.length;
							(n || i) && (c.polygonStart(), n && (c.lineStart(), u(null, null, 1, c), c.lineEnd()), i && Sn(M, o, e, u, c), c.polygonEnd()),
							M = g = b = null
						}
					};
					return q
				}
			}
			function Fn(t) {
				var e = 0,
				n = Rc / 3,
				r = cr(t),
				i = r(e, n);
				return i.parallels = function (t) {
					return arguments.length ? r(e = t[0] * Rc / 180, n = t[1] * Rc / 180) : [e / Rc * 180, n / Rc * 180]
				},
				i
			}
			function Vn(t, e) {
				function n(t, e) {
					var n = Math.sqrt(o - 2 * i * Math.sin(e)) / i;
					return [n * Math.sin(t *= i), a - n * Math.cos(t)]
				}
				var r = Math.sin(t),
				i = (r + Math.sin(e)) / 2,
				o = 1 + r * (2 * i - r),
				a = Math.sqrt(o) / i;
				return n.invert = function (t, e) {
					var n = a - e;
					return [Math.atan2(t, n) / i, ee((o - (t * t + n * n) * i * i) / (2 * i))]
				},
				n
			}
			function Gn() {
				function t(t, e) {
					Is += i * t - r * e,
					r = t,
					i = e
				}
				var e, n, r, i;
				Vs.point = function (o, a) {
					Vs.point = t,
					e = r = o,
					n = i = a
				},
				Vs.lineEnd = function () {
					t(e, n)
				}
			}
			function Yn(t, e) {
				js > t && (js = t),
				t > Us && (Us = t),
				Hs > e && (Hs = e),
				e > Fs && (Fs = e)
			}
			function Kn() {
				function t(t, e) {
					a.push("M", t, ",", e, o)
				}
				function e(t, e) {
					a.push("M", t, ",", e),
					c.point = n
				}
				function n(t, e) {
					a.push("L", t, ",", e)
				}
				function r() {
					c.point = t
				}
				function i() {
					a.push("Z")
				}
				var o = $n(4.5),
				a = [],
				c = {
					point: t,
					lineStart: function () {
						c.point = e
					},
					lineEnd: r,
					polygonStart: function () {
						c.lineEnd = i
					},
					polygonEnd: function () {
						c.lineEnd = r,
						c.point = t
					},
					pointRadius: function (t) {
						return o = $n(t),
						c
					},
					result: function () {
						if (a.length) {
							var t = a.join("");
							return a = [],
							t
						}
					}
				};
				return c
			}
			function $n(t) {
				return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
			}
			function Qn(t, e) {
				Ns += t,
				qs += e,
				++xs
			}
			function Jn() {
				function t(t, r) {
					var i = t - e,
					o = r - n,
					a = Math.sqrt(i * i + o * o);
					Ss += a * (e + t) / 2,
					Ws += a * (n + r) / 2,
					Es += a,
					Qn(e = t, n = r)
				}
				var e, n;
				Ys.point = function (r, i) {
					Ys.point = t,
					Qn(e = r, n = i)
				}
			}
			function Zn() {
				Ys.point = Qn
			}
			function tr() {
				function t(t, e) {
					var n = t - r,
					o = e - i,
					a = Math.sqrt(n * n + o * o);
					Ss += a * (r + t) / 2,
					Ws += a * (i + e) / 2,
					Es += a,
					a = i * t - r * e,
					Bs += a * (r + t),
					Cs += a * (i + e),
					Xs += 3 * a,
					Qn(r = t, i = e)
				}
				var e, n, r, i;
				Ys.point = function (o, a) {
					Ys.point = t,
					Qn(e = r = o, n = i = a)
				},
				Ys.lineEnd = function () {
					t(e, n)
				}
			}
			function er(t) {
				function e(e, n) {
					t.moveTo(e + a, n),
					t.arc(e, n, a, 0, kc)
				}
				function n(e, n) {
					t.moveTo(e, n),
					c.point = r
				}
				function r(e, n) {
					t.lineTo(e, n)
				}
				function i() {
					c.point = e
				}
				function o() {
					t.closePath()
				}
				var a = 4.5,
				c = {
					point: e,
					lineStart: function () {
						c.point = n
					},
					lineEnd: i,
					polygonStart: function () {
						c.lineEnd = o
					},
					polygonEnd: function () {
						c.lineEnd = i,
						c.point = e
					},
					pointRadius: function (t) {
						return a = t,
						c
					},
					result: v
				};
				return c
			}
			function nr(t) {
				function e(t) {
					return (c ? r: n)(t)
				}
				function n(e) {
					return or(e, function (n, r) {
						n = t(n, r),
						e.point(n[0], n[1])
					})
				}
				function r(e) {
					function n(n, r) {
						n = t(n, r),
						e.point(n[0], n[1])
					}
					function r() {
						v = 0 / 0,
						T.point = o,
						e.lineStart()
					}
					function o(n, r) {
						var o = gn([n, r]),
						a = t(n, r);
						i(v, A, m, y, z, _, v = a[0], A = a[1], m = n, y = o[0], z = o[1], _ = o[2], c, e),
						e.point(v, A)
					}
					function a() {
						T.point = n,
						e.lineEnd()
					}
					function s() {
						r(),
						T.point = u,
						T.lineEnd = l
					}
					function u(t, e) {
						o(p = t, f = e),
						h = v,
						d = A,
						M = y,
						g = z,
						b = _,
						T.point = o
					}
					function l() {
						i(v, A, m, y, z, _, h, d, p, M, g, b, c, e),
						T.lineEnd = a,
						a()
					}
					var p, f, h, d, M, g, b, m, v, A, y, z, _, T = {
						point: n,
						lineStart: r,
						lineEnd: a,
						polygonStart: function () {
							e.polygonStart(),
							T.lineStart = s
						},
						polygonEnd: function () {
							e.polygonEnd(),
							T.lineStart = r
						}
					};
					return T
				}
				function i(e, n, r, c, s, u, l, p, f, h, d, M, g, b) {
					var m = l - e,
					v = p - n,
					A = m * m + v * v;
					if (A > 4 * o && g--) {
						var y = c + h,
						z = s + d,
						_ = u + M,
						T = Math.sqrt(y * y + z * z + _ * _),
						O = Math.asin(_ /= T),
						L = bc(bc(_) - 1) < Cc || bc(r - f) < Cc ? (r + f) / 2 : Math.atan2(z, y),
						w = t(L, O),
						N = w[0],
						q = w[1],
						x = N - e,
						S = q - n,
						W = v * x - m * S;
						(W * W / A > o || bc((m * x + v * S) / A - .5) > .3 || a > c * h + s * d + u * M) && (i(e, n, r, c, s, u, N, q, L, y /= T, z /= T, _, g, b), b.point(N, q), i(N, q, L, y, z, _, l, p, f, h, d, M, g, b))
					}
				}
				var o = .5,
				a = Math.cos(30 * Ic),
				c = 16;
				return e.precision = function (t) {
					return arguments.length ? (c = (o = t * t) > 0 && 16, e) : Math.sqrt(o)
				},
				e
			}
			function rr(t) {
				var e = nr(function (e, n) {
					return t([e * jc, n * jc])
				});
				return function (t) {
					return sr(e(t))
				}
			}
			function ir(t) {
				this.stream = t
			}
			function or(t, e) {
				return {
					point: e,
					sphere: function () {
						t.sphere()
					},
					lineStart: function () {
						t.lineStart()
					},
					lineEnd: function () {
						t.lineEnd()
					},
					polygonStart: function () {
						t.polygonStart()
					},
					polygonEnd: function () {
						t.polygonEnd()
					}
				}
			}
			function ar(t) {
				return cr(function () {
					return t
				})()
			}
			function cr(t) {
				function e(t) {
					return t = c(t[0] * Ic, t[1] * Ic),
					[t[0] * f + s, u - t[1] * f]
				}
				function n(t) {
					return t = c.invert((t[0] - s) / f, (u - t[1]) / f),
					t && [t[0] * jc, t[1] * jc]
				}
				function r() {
					c = qn(a = pr(b, m, v), o);
					var t = o(M, g);
					return s = h - t[0] * f,
					u = d + t[1] * f,
					i()
				}
				function i() {
					return l && (l.valid = !1, l = null),
					e
				}
				var o, a, c, s, u, l, p = nr(function (t, e) {
					return t = o(t, e),
					[t[0] * f + s, u - t[1] * f]
				}),
				f = 150,
				h = 480,
				d = 250,
				M = 0,
				g = 0,
				b = 0,
				m = 0,
				v = 0,
				A = ks,
				y = we,
				z = null,
				_ = null;
				return e.stream = function (t) {
					return l && (l.valid = !1),
					l = sr(A(a, p(y(t)))),
					l.valid = !0,
					l
				},
				e.clipAngle = function (t) {
					return arguments.length ? (A = null == t ? (z = t, ks) : jn((z = +t) * Ic), i()) : z
				},
				e.clipExtent = function (t) {
					return arguments.length ? (_ = t, y = t ? Un(t[0][0], t[0][1], t[1][0], t[1][1]) : we, i()) : _
				},
				e.scale = function (t) {
					return arguments.length ? (f = +t, r()) : f
				},
				e.translate = function (t) {
					return arguments.length ? (h = +t[0], d = +t[1], r()) : [h, d]
				},
				e.center = function (t) {
					return arguments.length ? (M=t[0]%360*Ic,g=t[1]%360*Ic,r()) : [M*jc,g*jc]
				},
				e.rotate = function (t) {
					return arguments.length ? (b=t[0]%360*Ic,m=t[1]%360*Ic,v=t.length>2?t[2]%360*Ic:0,r()) : [b*jc,m*jc,v*jc]
				},
				rc.rebind(e, p, "precision"),
				function () {
					return o = t.apply(this, arguments),
					e.invert = o.invert && n,
					r()
				}
			}
			function sr(t) {
				return or(t, function (e, n) {
					t.point(e * Ic, n * Ic)
				})
			}
			function ur(t, e) {
				return [t, e]
			}
			function lr(t, e) {
				return [t > Rc ? t - kc: -Rc > t ? t + kc: t, e]
			}
			function pr(t, e, n) {
				return t ? e || n ? qn(hr(t), dr(e, n)) : hr(t) : e || n ? dr(e, n) : lr
			}
			function fr(t) {
				return function (e, n) {
					return e += t,
					[e > Rc ? e - kc: -Rc > e ? e + kc: e, n]
				}
			}
			function hr(t) {
				var e = fr(t);
				return e.invert = fr( - t),
				e
			}
			function dr(t, e) {
				function n(t, e) {
					var n = Math.cos(e),
					c = Math.cos(t) * n,
					s = Math.sin(t) * n,
					u = Math.sin(e),
					l = u * r + c * i;
					return [Math.atan2(s * o - l * a, c * r - u * i), ee(l * o + s * a)]
				}
				var r = Math.cos(t),
				i = Math.sin(t),
				o = Math.cos(e),
				a = Math.sin(e);
				return n.invert = function (t, e) {
					var n = Math.cos(e),
					c = Math.cos(t) * n,
					s = Math.sin(t) * n,
					u = Math.sin(e),
					l = u * o - s * a;
					return [Math.atan2(s * o + u * a, c * r + l * i), ee(l * r - c * i)]
				},
				n
			}
			function Mr(t, e) {
				var n = Math.cos(t),
				r = Math.sin(t);
				return function (i, o, a, c) {
					var s = a * e;
					null != i ? (i = gr(n, i), o = gr(n, o), (a > 0 ? o > i: i > o) && (i += a * kc)) : (i = t + a * kc, o = t - .5 * s);
					for (var u, l = i; a > 0 ? l > o: o > l; l -= s) c.point((u = zn([n, -r * Math.cos(l), -r * Math.sin(l)]))[0], u[1])
				}
			}
			function gr(t, e) {
				var n = gn(e);
				n[0] -= t,
				yn(n);
				var r = te( - n[1]);
				return (( - n[2] < 0 ? -r: r) + 2 * Math.PI - Cc) % (2 * Math.PI)
			}
			function br(t, e, n) {
				var r = rc.range(t, e - Cc, n).concat(e);
				return function (t) {
					return r.map(function (e) {
						return [t, e]
					})
				}
			}
			function mr(t, e, n) {
				var r = rc.range(t, e - Cc, n).concat(e);
				return function (t) {
					return r.map(function (e) {
						return [e, t]
					})
				}
			}
			function vr(t) {
				return t.source
			}
			function Ar(t) {
				return t.target
			}
			function yr(t, e, n, r) {
				var i = Math.cos(e),
				o = Math.sin(e),
				a = Math.cos(r),
				c = Math.sin(r),
				s = i * Math.cos(t),
				u = i * Math.sin(t),
				l = a * Math.cos(n),
				p = a * Math.sin(n),
				f = 2 * Math.asin(Math.sqrt(oe(r - e) + i * a * oe(n - t))),
				h = 1 / Math.sin(f),
				d = f ?
				function (t) {
					var e = Math.sin(t *= f) * h,
					n = Math.sin(f - t) * h,
					r = n * s + e * l,
					i = n * u + e * p,
					a = n * o + e * c;
					return [Math.atan2(i, r) * jc, Math.atan2(a, Math.sqrt(r * r + i * i)) * jc]
				}: function () {
					return [t * jc, e * jc]
				};
				return d.distance = f,
				d
			}
			function zr() {
				function t(t, i) {
					var o = Math.sin(i *= Ic),
					a = Math.cos(i),
					c = bc((t *= Ic) - e),
					s = Math.cos(c);
					Ks += Math.atan2(Math.sqrt((c = a * Math.sin(c)) * c + (c = r * o - n * a * s) * c), n * o + r * a * s),
					e = t,
					n = o,
					r = a
				}
				var e, n, r;
				$s.point = function (i, o) {
					e = i * Ic,
					n = Math.sin(o *= Ic),
					r = Math.cos(o),
					$s.point = t
				},
				$s.lineEnd = function () {
					$s.point = $s.lineEnd = v
				}
			}
			function _r(t, e) {
				function n(e, n) {
					var r = Math.cos(e),
					i = Math.cos(n),
					o = t(r * i);
					return [o * i * Math.sin(e), o * Math.sin(n)]
				}
				return n.invert = function (t, n) {
					var r = Math.sqrt(t * t + n * n),
					i = e(r),
					o = Math.sin(i),
					a = Math.cos(i);
					return [Math.atan2(t * o, r * a), Math.asin(r && n * o / r)]
				},
				n
			}
			function Tr(t, e) {
				function n(t, e) {
					a > 0 ? -Pc + Cc > e && (e = -Pc + Cc) : e > Pc - Cc && (e = Pc - Cc);
					var n = a / Math.pow(i(e), o);
					return [n * Math.sin(o * t), a - n * Math.cos(o * t)]
				}
				var r = Math.cos(t),
				i = function (t) {
					return Math.tan(Rc / 4 + t / 2)
				},
				o = t === e ? Math.sin(t) : Math.log(r / Math.cos(e)) / Math.log(i(e) / i(t)),
				a = r * Math.pow(i(t), o) / o;
				return o ? (n.invert = function (t, e) {
					var n = a - e,
					r = J(o) * Math.sqrt(t * t + n * n);
					return [Math.atan2(t, n) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - Pc]
				},
				n) : Lr
			}
			function Or(t, e) {
				function n(t, e) {
					var n = o - e;
					return [n * Math.sin(i * t), o - n * Math.cos(i * t)]
				}
				var r = Math.cos(t),
				i = t === e ? Math.sin(t) : (r - Math.cos(e)) / (e - t),
				o = r / i + t;
				return bc(i) < Cc ? ur: (n.invert = function (t, e) {
					var n = o - e;
					return [Math.atan2(t, n) / i, o - J(i) * Math.sqrt(t * t + n * n)]
				},
				n)
			}
			function Lr(t, e) {
				return [t, Math.log(Math.tan(Rc / 4 + e / 2))]
			}
			function wr(t) {
				var e, n = ar(t),
				r = n.scale,
				i = n.translate,
				o = n.clipExtent;
				return n.scale = function () {
					var t = r.apply(n, arguments);
					return t === n ? e ? n.clipExtent(null) : n: t
				},
				n.translate = function () {
					var t = i.apply(n, arguments);
					return t === n ? e ? n.clipExtent(null) : n: t
				},
				n.clipExtent = function (t) {
					var a = o.apply(n, arguments);
					if (a === n) {
						if (e = null == t) {
							var c = Rc * r(),
							s = i();
							o([[s[0] - c, s[1] - c], [s[0] + c, s[1] + c]])
						}
					} else e && (a = null);
					return a
				},
				n.clipExtent(null)
			}
			function Nr(t, e) {
				return [Math.log(Math.tan(Rc / 4 + e / 2)), -t]
			}
			function qr(t) {
				return t[0]
			}
			function xr(t) {
				return t[1]
			}
			function Sr(t) {
				for (var e = t.length, n = [0, 1], r = 2, i = 2; e > i; i++) {
					for (; r > 1 && Z(t[n[r - 2]], t[n[r - 1]], t[i]) <= 0;)--r;
					n[r++] = i
				}
				return n.slice(0, r)
			}
			function Wr(t, e) {
				return t[0] - e[0] || t[1] - e[1]
			}
			function Er(t, e, n) {
				return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
			}
			function Br(t, e, n, r) {
				var i = t[0],
				o = n[0],
				a = e[0] - i,
				c = r[0] - o,
				s = t[1],
				u = n[1],
				l = e[1] - s,
				p = r[1] - u,
				f = (c * (s - u) - p * (i - o)) / (p * a - c * l);
				return [i + f * a, s + f * l]
			}
			function Cr(t) {
				var e = t[0],
				n = t[t.length - 1];
				return ! (e[0] - n[0] || e[1] - n[1])
			}
			function Xr() {
				ri(this),
				this.edge = this.site = this.circle = null
			}
			function Rr(t) {
				var e = su.pop() || new Xr;
				return e.site = t,
				e
			}
			function kr(t) {
				Yr(t),
				ou.remove(t),
				su.push(t),
				ri(t)
			}
			function Dr(t) {
				var e = t.circle,
				n = e.x,
				r = e.cy,
				i = {
					x: n,
					y: r
				},
				o = t.P,
				a = t.N,
				c = [t];
				kr(t);
				for (var s = o; s.circle && bc(n - s.circle.x) < Cc && bc(r - s.circle.cy) < Cc;) o = s.P,
				c.unshift(s),
				kr(s),
				s = o;
				c.unshift(s),
				Yr(s);
				for (var u = a; u.circle && bc(n - u.circle.x) < Cc && bc(r - u.circle.cy) < Cc;) a = u.N,
				c.push(u),
				kr(u),
				u = a;
				c.push(u),
				Yr(u);
				var l, p = c.length;
				for (l = 1; p > l; ++l) u = c[l],
				s = c[l - 1],
				ti(u.edge, s.site, u.site, i);
				s = c[0],
				u = c[p - 1],
				u.edge = Jr(s.site, u.site, null, i),
				Gr(s),
				Gr(u)
			}
			function Pr(t) {
				for (var e, n, r, i, o = t.x, a = t.y, c = ou._; c;) if (r = Ir(c, a) - o, r > Cc) c = c.L;
				else {
					if (i = o - jr(c, a), !(i > Cc)) {
						r > -Cc ? (e = c.P, n = c) : i > -Cc ? (e = c, n = c.N) : e = n = c;
						break
					}
					if (!c.R) {
						e = c;
						break
					}
					c = c.R
				}
				var s = Rr(t);
				if (ou.insert(e, s), e || n) {
					if (e === n) return Yr(e),
					n = Rr(e.site),
					ou.insert(s, n),
					s.edge = n.edge = Jr(e.site, s.site),
					Gr(e),
					void Gr(n);
					if (!n) return void(s.edge = Jr(e.site, s.site));
					Yr(e),
					Yr(n);
					var u = e.site,
					l = u.x,
					p = u.y,
					f = t.x - l,
					h = t.y - p,
					d = n.site,
					M = d.x - l,
					g = d.y - p,
					b = 2 * (f * g - h * M),
					m = f * f + h * h,
					v = M * M + g * g,
					A = {
						x: (g * m - h * v) / b + l,
						y: (f * v - M * m) / b + p
					};
					ti(n.edge, u, d, A),
					s.edge = Jr(u, t, null, A),
					n.edge = Jr(t, d, null, A),
					Gr(e),
					Gr(n)
				}
			}
			function Ir(t, e) {
				var n = t.site,
				r = n.x,
				i = n.y,
				o = i - e;
				if (!o) return r;
				var a = t.P;
				if (!a) return - 1 / 0;
				n = a.site;
				var c = n.x,
				s = n.y,
				u = s - e;
				if (!u) return c;
				var l = c - r,
				p = 1 / o - 1 / u,
				f = l / u;
				return p ? ( - f + Math.sqrt(f * f - 2 * p * (l * l / ( - 2 * u) - s + u / 2 + i - o / 2))) / p + r: (r + c) / 2
			}
			function jr(t, e) {
				var n = t.N;
				if (n) return Ir(n, e);
				var r = t.site;
				return r.y === e ? r.x: 1 / 0
			}
			function Hr(t) {
				this.site = t,
				this.edges = []
			}
			function Ur(t) {
				for (var e, n, r, i, o, a, c, s, u, l, p = t[0][0], f = t[1][0], h = t[0][1], d = t[1][1], M = iu, g = M.length; g--;) if (o = M[g], o && o.prepare()) for (c = o.edges, s = c.length, a = 0; s > a;) l = c[a].end(),
				r = l.x,
				i = l.y,
				u = c[++a % s].start(),
				e = u.x,
				n = u.y,
				(bc(r - e) > Cc || bc(i - n) > Cc) && (c.splice(a, 0, new ei(Zr(o.site, l, bc(r - p) < Cc && d - i > Cc ? {
					x: p,
					y: bc(e - p) < Cc ? n: d
				}: bc(i - d) < Cc && f - r > Cc ? {
					x: bc(n - d) < Cc ? e: f,
					y: d
				}: bc(r - f) < Cc && i - h > Cc ? {
					x: f,
					y: bc(e - f) < Cc ? n: h
				}: bc(i - h) < Cc && r - p > Cc ? {
					x: bc(n - h) < Cc ? e: p,
					y: h
				}: null), o.site, null)), ++s)
			}
			function Fr(t, e) {
				return e.angle - t.angle
			}
			function Vr() {
				ri(this),
				this.x = this.y = this.arc = this.site = this.cy = null
			}
			function Gr(t) {
				var e = t.P,
				n = t.N;
				if (e && n) {
					var r = e.site,
					i = t.site,
					o = n.site;
					if (r !== o) {
						var a = i.x,
						c = i.y,
						s = r.x - a,
						u = r.y - c,
						l = o.x - a,
						p = o.y - c,
						f = 2 * (s * p - u * l);
						if (! (f >= -Xc)) {
							var h = s * s + u * u,
							d = l * l + p * p,
							M = (p * h - u * d) / f,
							g = (s * d - l * h) / f,
							p = g + c,
							b = uu.pop() || new Vr;
							b.arc = t,
							b.site = i,
							b.x = M + a,
							b.y = p + Math.sqrt(M * M + g * g),
							b.cy = p,
							t.circle = b;
							for (var m = null, v = cu._; v;) if (b.y < v.y || b.y === v.y && b.x <= v.x) {
								if (!v.L) {
									m = v.P;
									break
								}
								v = v.L
							} else {
								if (!v.R) {
									m = v;
									break
								}
								v = v.R
							}
							cu.insert(m, b),
							m || (au = b)
						}
					}
				}
			}
			function Yr(t) {
				var e = t.circle;
				e && (e.P || (au = e.N), cu.remove(e), uu.push(e), ri(e), t.circle = null)
			}
			function Kr(t) {
				for (var e, n = ru, r = Hn(t[0][0], t[0][1], t[1][0], t[1][1]), i = n.length; i--;) e = n[i],
				(!$r(e, t) || !r(e) || bc(e.a.x - e.b.x) < Cc && bc(e.a.y - e.b.y) < Cc) && (e.a = e.b = null, n.splice(i, 1))
			}
			function $r(t, e) {
				var n = t.b;
				if (n) return ! 0;
				var r, i, o = t.a,
				a = e[0][0],
				c = e[1][0],
				s = e[0][1],
				u = e[1][1],
				l = t.l,
				p = t.r,
				f = l.x,
				h = l.y,
				d = p.x,
				M = p.y,
				g = (f + d) / 2,
				b = (h + M) / 2;
				if (M === h) {
					if (a > g || g >= c) return;
					if (f > d) {
						if (o) {
							if (o.y >= u) return
						} else o = {
							x: g,
							y: s
						};
						n = {
							x: g,
							y: u
						}
					} else {
						if (o) {
							if (o.y < s) return
						} else o = {
							x: g,
							y: u
						};
						n = {
							x: g,
							y: s
						}
					}
				} else if (r = (f - d) / (M - h), i = b - r * g, -1 > r || r > 1) if (f > d) {
					if (o) {
						if (o.y >= u) return
					} else o = {
						x: (s - i) / r,
						y: s
					};
					n = {
						x: (u - i) / r,
						y: u
					}
				} else {
					if (o) {
						if (o.y < s) return
					} else o = {
						x: (u - i) / r,
						y: u
					};
					n = {
						x: (s - i) / r,
						y: s
					}
				} else if (M > h) {
					if (o) {
						if (o.x >= c) return
					} else o = {
						x: a,
						y: r * a + i
					};
					n = {
						x: c,
						y: r * c + i
					}
				} else {
					if (o) {
						if (o.x < a) return
					} else o = {
						x: c,
						y: r * c + i
					};
					n = {
						x: a,
						y: r * a + i
					}
				}
				return t.a = o,
				t.b = n,
				!0
			}
			function Qr(t, e) {
				this.l = t,
				this.r = e,
				this.a = this.b = null
			}
			function Jr(t, e, n, r) {
				var i = new Qr(t, e);
				return ru.push(i),
				n && ti(i, t, e, n),
				r && ti(i, e, t, r),
				iu[t.i].edges.push(new ei(i, t, e)),
				iu[e.i].edges.push(new ei(i, e, t)),
				i
			}
			function Zr(t, e, n) {
				var r = new Qr(t, null);
				return r.a = e,
				r.b = n,
				ru.push(r),
				r
			}
			function ti(t, e, n, r) {
				t.a || t.b ? t.l === n ? t.b = r: t.a = r: (t.a = r, t.l = e, t.r = n)
			}
			function ei(t, e, n) {
				var r = t.a,
				i = t.b;
				this.edge = t,
				this.site = e,
				this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
			}
			function ni() {
				this._ = null
			}
			function ri(t) {
				t.U = t.C = t.L = t.R = t.P = t.N = null
			}
			function ii(t, e) {
				var n = e,
				r = e.R,
				i = n.U;
				i ? i.L === n ? i.L = r: i.R = r: t._ = r,
				r.U = i,
				n.U = r,
				n.R = r.L,
				n.R && (n.R.U = n),
				r.L = n
			}
			function oi(t, e) {
				var n = e,
				r = e.L,
				i = n.U;
				i ? i.L === n ? i.L = r: i.R = r: t._ = r,
				r.U = i,
				n.U = r,
				n.L = r.R,
				n.L && (n.L.U = n),
				r.R = n
			}
			function ai(t) {
				for (; t.L;) t = t.L;
				return t
			}
			function ci(t, e) {
				var n, r, i, o = t.sort(si).pop();
				for (ru = [], iu = new Array(t.length), ou = new ni, cu = new ni;;) if (i = au, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x))(o.x !== n || o.y !== r) && (iu[o.i] = new Hr(o), Pr(o), n = o.x, r = o.y),
				o = t.pop();
				else {
					if (!i) break;
					Dr(i.arc)
				}
				e && (Kr(e), Ur(e));
				var a = {
					cells: iu,
					edges: ru
				};
				return ou = cu = ru = iu = null,
				a
			}
			function si(t, e) {
				return e.y - t.y || e.x - t.x
			}
			function ui(t, e, n) {
				return (t.x - n.x) * (e.y - t.y) - (t.x - e.x) * (n.y - t.y)
			}
			function li(t) {
				return t.x
			}
			function pi(t) {
				return t.y
			}
			function fi() {
				return {
					leaf: !0,
					nodes: [],
					point: null,
					x: null,
					y: null
				}
			}
			function hi(t, e, n, r, i, o) {
				if (!t(e, n, r, i, o)) {
					var a = .5 * (n + i),
					c = .5 * (r + o),
					s = e.nodes;
					s[0] && hi(t, s[0], n, r, a, c),
					s[1] && hi(t, s[1], a, r, i, c),
					s[2] && hi(t, s[2], n, c, a, o),
					s[3] && hi(t, s[3], a, c, i, o)
				}
			}
			function di(t, e, n, r, i, o, a) {
				var c, s = 1 / 0;
				return function u(t, l, p, f, h) {
					if (! (l > o || p > a || r > f || i > h)) {
						if (d = t.point) {
							var d, M = e - d[0],
							g = n - d[1],
							b = M * M + g * g;
							if (s > b) {
								var m = Math.sqrt(s = b);
								r = e - m,
								i = n - m,
								o = e + m,
								a = n + m,
								c = d
							}
						}
						for (var v = t.nodes, A = .5 * (l + f), y = .5 * (p + h), z = e >= A, _ = n >= y, T = _ << 1 | z, O = T + 4; O > T; ++T) if (t = v[3 & T]) switch (3 & T) {
						case 0:
							u(t, l, p, A, y);
							break;
						case 1:
							u(t, A, p, f, y);
							break;
						case 2:
							u(t, l, y, A, h);
							break;
						case 3:
							u(t, A, y, f, h)
						}
					}
				} (t, r, i, o, a),
				c
			}
			function Mi(t, e) {
				t = rc.rgb(t),
				e = rc.rgb(e);
				var n = t.r,
				r = t.g,
				i = t.b,
				o = e.r - n,
				a = e.g - r,
				c = e.b - i;
				return function (t) {
					return "#" + Ae(Math.round(n + o * t)) + Ae(Math.round(r + a * t)) + Ae(Math.round(i + c * t))
				}
			}
			function gi(t, e) {
				var n, r = {},
				i = {};
				for (n in t) n in e ? r[n] = vi(t[n], e[n]) : i[n] = t[n];
				for (n in e) n in t || (i[n] = e[n]);
				return function (t) {
					for (n in r) i[n] = r[n](t);
					return i
				}
			}
			function bi(t, e) {
				return t = +t,
				e = +e,
				function (n) {
					return t * (1 - n) + e * n
				}
			}
			function mi(t, e) {
				var n, r, i, o = pu.lastIndex = fu.lastIndex = 0,
				a = -1,
				c = [],
				s = [];
				for (t += "", e += "";
				(n = pu.exec(t)) && (r = fu.exec(e));)(i = r.index) > o && (i = e.slice(o, i), c[a] ? c[a] += i: c[++a] = i),
				(n = n[0]) === (r = r[0]) ? c[a] ? c[a] += r: c[++a] = r: (c[++a] = null, s.push({
					i: a,
					x: bi(n, r)
				})),
				o = fu.lastIndex;
				return o < e.length && (i = e.slice(o), c[a] ? c[a] += i: c[++a] = i),
				c.length < 2 ? s[0] ? (e = s[0].x, function (t) {
					return e(t) + ""
				}) : function () {
					return e
				}: (e = s.length, function (t) {
					for (var n, r = 0; e > r; ++r) c[(n = s[r]).i] = n.x(t);
					return c.join("")
				})
			}
			function vi(t, e) {
				for (var n, r = rc.interpolators.length; --r >= 0 && !(n = rc.interpolators[r](t, e)););
				return n
			}
			function Ai(t, e) {
				var n, r = [],
				i = [],
				o = t.length,
				a = e.length,
				c = Math.min(t.length, e.length);
				for (n = 0; c > n; ++n) r.push(vi(t[n], e[n]));
				for (; o > n; ++n) i[n] = t[n];
				for (; a > n; ++n) i[n] = e[n];
				return function (t) {
					for (n = 0; c > n; ++n) i[n] = r[n](t);
					return i
				}
			}
			function yi(t) {
				return function (e) {
					return 0 >= e ? 0 : e >= 1 ? 1 : t(e)
				}
			}
			function zi(t) {
				return function (e) {
					return 1 - t(1 - e)
				}
			}
			function _i(t) {
				return function (e) {
					return.5 * (.5 > e ? t(2 * e) : 2 - t(2 - 2 * e))
				}
			}
			function Ti(t) {
				return t * t
			}
			function Oi(t) {
				return t * t * t
			}
			function Li(t) {
				if (0 >= t) return 0;
				if (t >= 1) return 1;
				var e = t * t,
				n = e * t;
				return 4 * (.5 > t ? n: 3 * (t - e) + n - .75)
			}
			function wi(t) {
				return function (e) {
					return Math.pow(e, t)
				}
			}
			function Ni(t) {
				return 1 - Math.cos(t * Pc)
			}
			function qi(t) {
				return Math.pow(2, 10 * (t - 1))
			}
			function xi(t) {
				return 1 - Math.sqrt(1 - t * t)
			}
			function Si(t, e) {
				var n;
				return arguments.length < 2 && (e = .45),
				arguments.length ? n = e / kc * Math.asin(1 / t) : (t = 1, n = e / 4),
				function (r) {
					return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - n) * kc / e)
				}
			}
			function Wi(t) {
				return t || (t = 1.70158),
				function (e) {
					return e * e * ((t + 1) * e - t)
				}
			}
			function Ei(t) {
				return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			}
			function Bi(t, e) {
				t = rc.hcl(t),
				e = rc.hcl(e);
				var n = t.h,
				r = t.c,
				i = t.l,
				o = e.h - n,
				a = e.c - r,
				c = e.l - i;
				return isNaN(a) && (a = 0, r = isNaN(r) ? e.c: r),
				isNaN(o) ? (o = 0, n = isNaN(n) ? e.h: n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
				function (t) {
					return le(n + o * t, r + a * t, i + c * t) + ""
				}
			}
			function Ci(t, e) {
				t = rc.hsl(t),
				e = rc.hsl(e);
				var n = t.h,
				r = t.s,
				i = t.l,
				o = e.h - n,
				a = e.s - r,
				c = e.l - i;
				return isNaN(a) && (a = 0, r = isNaN(r) ? e.s: r),
				isNaN(o) ? (o = 0, n = isNaN(n) ? e.h: n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
				function (t) {
					return se(n + o * t, r + a * t, i + c * t) + ""
				}
			}
			function Xi(t, e) {
				t = rc.lab(t),
				e = rc.lab(e);
				var n = t.l,
				r = t.a,
				i = t.b,
				o = e.l - n,
				a = e.a - r,
				c = e.b - i;
				return function (t) {
					return fe(n + o * t, r + a * t, i + c * t) + ""
				}
			}
			function Ri(t, e) {
				return e -= t,
				function (n) {
					return Math.round(t + e * n)
				}
			}
			function ki(t) {
				var e = [t.a, t.b],
				n = [t.c, t.d],
				r = Pi(e),
				i = Di(e, n),
				o = Pi(Ii(n, e, -i)) || 0;
				e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, r *= -1, i *= -1),
				this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2( - n[0], n[1])) * jc,
				this.translate = [t.e, t.f],
				this.scale = [r, o],
				this.skew = o ? Math.atan2(i, o) * jc: 0
			}
			function Di(t, e) {
				return t[0] * e[0] + t[1] * e[1]
			}
			function Pi(t) {
				var e = Math.sqrt(Di(t, t));
				return e && (t[0] /= e, t[1] /= e),
				e
			}
			function Ii(t, e, n) {
				return t[0] += n * e[0],
				t[1] += n * e[1],
				t
			}
			function ji(t, e) {
				var n, r = [],
				i = [],
				o = rc.transform(t),
				a = rc.transform(e),
				c = o.translate,
				s = a.translate,
				u = o.rotate,
				l = a.rotate,
				p = o.skew,
				f = a.skew,
				h = o.scale,
				d = a.scale;
				return c[0] != s[0] || c[1] != s[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
					i: 1,
					x: bi(c[0], s[0])
				},
				{
					i: 3,
					x: bi(c[1], s[1])
				})) : r.push(s[0] || s[1] ? "translate(" + s + ")": ""),
				u != l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), i.push({
					i: r.push(r.pop() + "rotate(", null, ")") - 2,
					x: bi(u, l)
				})) : l && r.push(r.pop() + "rotate(" + l + ")"),
				p != f ? i.push({
					i: r.push(r.pop() + "skewX(", null, ")") - 2,
					x: bi(p, f)
				}) : f && r.push(r.pop() + "skewX(" + f + ")"),
				h[0] != d[0] || h[1] != d[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
					i: n - 4,
					x: bi(h[0], d[0])
				},
				{
					i: n - 2,
					x: bi(h[1], d[1])
				})) : (1 != d[0] || 1 != d[1]) && r.push(r.pop() + "scale(" + d + ")"),
				n = i.length,
				function (t) {
					for (var e, o = -1; ++o < n;) r[(e = i[o]).i] = e.x(t);
					return r.join("")
				}
			}
			function Hi(t, e) {
				return e = (e -= t = +t) || 1 / e,
				function (n) {
					return (n - t) / e
				}
			}
			function Ui(t, e) {
				return e = (e -= t = +t) || 1 / e,
				function (n) {
					return Math.max(0, Math.min(1, (n - t) / e))
				}
			}
			function Fi(t) {
				for (var e = t.source, n = t.target, r = Gi(e, n), i = [e]; e !== r;) e = e.parent,
				i.push(e);
				for (var o = i.length; n !== r;) i.splice(o, 0, n),
				n = n.parent;
				return i
			}
			function Vi(t) {
				for (var e = [], n = t.parent; null != n;) e.push(t),
				t = n,
				n = n.parent;
				return e.push(t),
				e
			}
			function Gi(t, e) {
				if (t === e) return t;
				for (var n = Vi(t), r = Vi(e), i = n.pop(), o = r.pop(), a = null; i === o;) a = i,
				i = n.pop(),
				o = r.pop();
				return a
			}
			function Yi(t) {
				t.fixed |= 2
			}
			function Ki(t) {
				t.fixed &= -7
			}
			function $i(t) {
				t.fixed |= 4,
				t.px = t.x,
				t.py = t.y
			}
			function Qi(t) {
				t.fixed &= -5
			}
			function Ji(t, e, n) {
				var r = 0,
				i = 0;
				if (t.charge = 0, !t.leaf) for (var o, a = t.nodes, c = a.length, s = -1; ++s < c;) o = a[s],
				null != o && (Ji(o, e, n), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
				if (t.point) {
					t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
					var u = e * n[t.point.index];
					t.charge += t.pointCharge = u,
					r += u * t.point.x,
					i += u * t.point.y
				}
				t.cx = r / t.charge,
				t.cy = i / t.charge
			}
			function Zi(t, e) {
				return rc.rebind(t, e, "sort", "children", "value"),
				t.nodes = t,
				t.links = oo,
				t
			}
			function to(t, e) {
				for (var n = [t]; null != (t = n.pop());) if (e(t), (i = t.children) && (r = i.length)) for (var r, i; --r >= 0;) n.push(i[r])
			}
			function eo(t, e) {
				for (var n = [t], r = []; null != (t = n.pop());) if (r.push(t), (o = t.children) && (i = o.length)) for (var i, o, a = -1; ++a < i;) n.push(o[a]);
				for (; null != (t = r.pop());) e(t)
			}
			function no(t) {
				return t.children
			}
			function ro(t) {
				return t.value
			}
			function io(t, e) {
				return e.value - t.value
			}
			function oo(t) {
				return rc.merge(t.map(function (t) {
					return (t.children || []).map(function (e) {
						return {
							source: t,
							target: e
						}
					})
				}))
			}
			function ao(t) {
				return t.x
			}
			function co(t) {
				return t.y
			}
			function so(t, e, n) {
				t.y0 = e,
				t.y = n
			}
			function uo(t) {
				return rc.range(t.length)
			}
			function lo(t) {
				for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
				return r
			}
			function po(t) {
				for (var e, n = 1, r = 0, i = t[0][1], o = t.length; o > n; ++n)(e = t[n][1]) > i && (r = n, i = e);
				return r
			}
			function fo(t) {
				return t.reduce(ho, 0)
			}
			function ho(t, e) {
				return t + e[1]
			}
			function Mo(t, e) {
				return go(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
			}
			function go(t, e) {
				for (var n = -1, r = +t[0], i = (t[1] - r) / e, o = []; ++n <= e;) o[n] = i * n + r;
				return o
			}
			function bo(t) {
				return [rc.min(t), rc.max(t)]
			}
			function mo(t, e) {
				return t.value - e.value
			}
			function vo(t, e) {
				var n = t._pack_next;
				t._pack_next = e,
				e._pack_prev = t,
				e._pack_next = n,
				n._pack_prev = e
			}
			function Ao(t, e) {
				t._pack_next = e,
				e._pack_prev = t
			}
			function yo(t, e) {
				var n = e.x - t.x,
				r = e.y - t.y,
				i = t.r + e.r;
				return.999 * i * i > n * n + r * r
			}
			function zo(t) {
				function e(t) {
					l = Math.min(t.x - t.r, l),
					p = Math.max(t.x + t.r, p),
					f = Math.min(t.y - t.r, f),
					h = Math.max(t.y + t.r, h)
				}
				if ((n = t.children) && (u = n.length)) {
					var n, r, i, o, a, c, s, u, l = 1 / 0,
					p = -1 / 0,
					f = 1 / 0,
					h = -1 / 0;
					if (n.forEach(_o), r = n[0], r.x = -r.r, r.y = 0, e(r), u > 1 && (i = n[1], i.x = i.r, i.y = 0, e(i), u > 2)) for (o = n[2], Lo(r, i, o), e(o), vo(r, o), r._pack_prev = o, vo(o, i), i = r._pack_next, a = 3; u > a; a++) {
						Lo(r, i, o = n[a]);
						var d = 0,
						M = 1,
						g = 1;
						for (c = i._pack_next; c !== i; c = c._pack_next, M++) if (yo(c, o)) {
							d = 1;
							break
						}
						if (1 == d) for (s = r._pack_prev; s !== c._pack_prev && !yo(s, o); s = s._pack_prev, g++);
						d ? (g > M || M == g && i.r < r.r ? Ao(r, i = c) : Ao(r = s, i), a--) : (vo(r, o), i = o, e(o))
					}
					var b = (l + p) / 2,
					m = (f + h) / 2,
					v = 0;
					for (a = 0; u > a; a++) o = n[a],
					o.x -= b,
					o.y -= m,
					v = Math.max(v, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
					t.r = v,
					n.forEach(To)
				}
			}
			function _o(t) {
				t._pack_next = t._pack_prev = t
			}
			function To(t) {
				delete t._pack_next,
				delete t._pack_prev
			}
			function Oo(t, e, n, r) {
				var i = t.children;
				if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, i) for (var o = -1, a = i.length; ++o < a;) Oo(i[o], e, n, r)
			}
			function Lo(t, e, n) {
				var r = t.r + n.r,
				i = e.x - t.x,
				o = e.y - t.y;
				if (r && (i || o)) {
					var a = e.r + n.r,
					c = i * i + o * o;
					a *= a,
					r *= r;
					var s = .5 + (r - a) / (2 * c),
					u = Math.sqrt(Math.max(0, 2 * a * (r + c) - (r -= c) * r - a * a)) / (2 * c);
					n.x = t.x + s * i + u * o,
					n.y = t.y + s * o - u * i
				} else n.x = t.x + r,
				n.y = t.y
			}
			function wo(t, e) {
				return t.parent == e.parent ? 1 : 2
			}
			function No(t) {
				var e = t.children;
				return e.length ? e[0] : t.t
			}
			function qo(t) {
				var e, n = t.children;
				return (e = n.length) ? n[e - 1] : t.t
			}
			function xo(t, e, n) {
				var r = n / (e.i - t.i);
				e.c -= r,
				e.s += n,
				t.c += r,
				e.z += n,
				e.m += n
			}
			function So(t) {
				for (var e, n = 0, r = 0, i = t.children, o = i.length; --o >= 0;) e = i[o],
				e.z += n,
				e.m += n,
				n += e.s + (r += e.c)
			}
			function Wo(t, e, n) {
				return t.a.parent === e.parent ? t.a: n
			}
			function Eo(t) {
				return 1 + rc.max(t, function (t) {
					return t.y
				})
			}
			function Bo(t) {
				return t.reduce(function (t, e) {
					return t + e.x
				},
				0) / t.length
			}
			function Co(t) {
				var e = t.children;
				return e && e.length ? Co(e[0]) : t
			}
			function Xo(t) {
				var e, n = t.children;
				return n && (e = n.length) ? Xo(n[e - 1]) : t
			}
			function Ro(t) {
				return {
					x: t.x,
					y: t.y,
					dx: t.dx,
					dy: t.dy
				}
			}
			function ko(t, e) {
				var n = t.x + e[3],
				r = t.y + e[0],
				i = t.dx - e[1] - e[3],
				o = t.dy - e[0] - e[2];
				return 0 > i && (n += i / 2, i = 0),
				0 > o && (r += o / 2, o = 0),
				{
					x: n,
					y: r,
					dx: i,
					dy: o
				}
			}
			function Do(t) {
				var e = t[0],
				n = t[t.length - 1];
				return n > e ? [e, n] : [n, e]
			}
			function Po(t) {
				return t.rangeExtent ? t.rangeExtent() : Do(t.range())
			}
			function Io(t, e, n, r) {
				var i = n(t[0], t[1]),
				o = r(e[0], e[1]);
				return function (t) {
					return o(i(t))
				}
			}
			function jo(t, e) {
				var n, r = 0,
				i = t.length - 1,
				o = t[r],
				a = t[i];
				return o > a && (n = r, r = i, i = n, n = o, o = a, a = n),
				t[r] = e.floor(o),
				t[i] = e.ceil(a),
				t
			}
			function Ho(t) {
				return t ? {
					floor: function (e) {
						return Math.floor(e / t) * t
					},
					ceil: function (e) {
						return Math.ceil(e / t) * t
					}
				}: _u
			}
			function Uo(t, e, n, r) {
				var i = [],
				o = [],
				a = 0,
				c = Math.min(t.length, e.length) - 1;
				for (t[c] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a <= c;) i.push(n(t[a - 1], t[a])),
				o.push(r(e[a - 1], e[a]));
				return function (e) {
					var n = rc.bisect(t, e, 1, c) - 1;
					return o[n](i[n](e))
				}
			}
			function Fo(t, e, n, r) {
				function i() {
					var i = Math.min(t.length, e.length) > 2 ? Uo: Io,
					s = r ? Ui: Hi;
					return a = i(t, e, s, n),
					c = i(e, t, s, vi),
					o
				}
				function o(t) {
					return a(t)
				}
				var a, c;
				return o.invert = function (t) {
					return c(t)
				},
				o.domain = function (e) {
					return arguments.length ? (t = e.map(Number), i()) : t
				},
				o.range = function (t) {
					return arguments.length ? (e = t, i()) : e
				},
				o.rangeRound = function (t) {
					return o.range(t).interpolate(Ri)
				},
				o.clamp = function (t) {
					return arguments.length ? (r = t, i()) : r
				},
				o.interpolate = function (t) {
					return arguments.length ? (n = t, i()) : n
				},
				o.ticks = function (e) {
					return Ko(t, e)
				},
				o.tickFormat = function (e, n) {
					return $o(t, e, n)
				},
				o.nice = function (e) {
					return Go(t, e),
					i()
				},
				o.copy = function () {
					return Fo(t, e, n, r)
				},
				i()
			}
			function Vo(t, e) {
				return rc.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
			}
			function Go(t, e) {
				return jo(t, Ho(Yo(t, e)[2]))
			}
			function Yo(t, e) {
				null == e && (e = 10);
				var n = Do(t),
				r = n[1] - n[0],
				i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
				o = e / r * i;
				return.15 >= o ? i *= 10 : .35 >= o ? i *= 5 : .75 >= o && (i *= 2),
				n[0] = Math.ceil(n[0] / i) * i,
				n[1] = Math.floor(n[1] / i) * i + .5 * i,
				n[2] = i,
				n
			}
			function Ko(t, e) {
				return rc.range.apply(rc, Yo(t, e))
			}
			function $o(t, e, n) {
				var r = Yo(t, e);
				if (n) {
					var i = ps.exec(n);
					if (i.shift(), "s" === i[8]) {
						var o = rc.formatPrefix(Math.max(bc(r[0]), bc(r[1])));
						return i[7] || (i[7] = "." + Qo(o.scale(r[2]))),
						i[8] = "f",
						n = rc.format(i.join("")),
						function (t) {
							return n(o.scale(t)) + o.symbol
						}
					}
					i[7] || (i[7] = "." + Jo(i[8], r)),
					n = i.join("")
				} else n = ",." + Qo(r[2]) + "f";
				return rc.format(n)
			}
			function Qo(t) {
				return - Math.floor(Math.log(t) / Math.LN10 + .01)
			}
			function Jo(t, e) {
				var n = Qo(e[2]);
				return t in Tu ? Math.abs(n - Qo(Math.max(bc(e[0]), bc(e[1])))) + +("e" !== t) : n - 2 * ("%" === t)
			}
			function Zo(t, e, n, r) {
				function i(t) {
					return (n ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e)
				}
				function o(t) {
					return n ? Math.pow(e, t) : -Math.pow(e, -t)
				}
				function a(e) {
					return t(i(e))
				}
				return a.invert = function (e) {
					return o(t.invert(e))
				},
				a.domain = function (e) {
					return arguments.length ? (n = e[0] >= 0, t.domain((r = e.map(Number)).map(i)), a) : r
				},
				a.base = function (n) {
					return arguments.length ? (e = +n, t.domain(r.map(i)), a) : e
				},
				a.nice = function () {
					var e = jo(r.map(i), n ? Math: Lu);
					return t.domain(e),
					r = e.map(o),
					a
				},
				a.ticks = function () {
					var t = Do(r),
					a = [],
					c = t[0],
					s = t[1],
					u = Math.floor(i(c)),
					l = Math.ceil(i(s)),
					p = e % 1 ? 2 : e;
					if (isFinite(l - u)) {
						if (n) {
							for (; l > u; u++) for (var f = 1; p > f; f++) a.push(o(u) * f);
							a.push(o(u))
						} else for (a.push(o(u)); u++<l;) for (var f = p - 1; f > 0; f--) a.push(o(u) * f);
						for (u = 0; a[u] < c; u++);
						for (l = a.length; a[l - 1] > s; l--);
						a = a.slice(u, l)
					}
					return a
				},
				a.tickFormat = function (t, e) {
					if (!arguments.length) return Ou;
					arguments.length < 2 ? e = Ou: "function" != typeof e && (e = rc.format(e));
					var r, c = Math.max(.1, t / a.ticks().length),
					s = n ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
					return function (t) {
						return t / o(s(i(t) + r)) <= c ? e(t) : ""
					}
				},
				a.copy = function () {
					return Zo(t.copy(), e, n, r)
				},
				Vo(a, t)
			}
			function ta(t, e, n) {
				function r(e) {
					return t(i(e))
				}
				var i = ea(e),
				o = ea(1 / e);
				return r.invert = function (e) {
					return o(t.invert(e))
				},
				r.domain = function (e) {
					return arguments.length ? (t.domain((n = e.map(Number)).map(i)), r) : n
				},
				r.ticks = function (t) {
					return Ko(n, t)
				},
				r.tickFormat = function (t, e) {
					return $o(n, t, e)
				},
				r.nice = function (t) {
					return r.domain(Go(n, t))
				},
				r.exponent = function (a) {
					return arguments.length ? (i = ea(e = a), o = ea(1 / e), t.domain(n.map(i)), r) : e
				},
				r.copy = function () {
					return ta(t.copy(), e, n)
				},
				Vo(r, t)
			}
			function ea(t) {
				return function (e) {
					return 0 > e ? -Math.pow( - e, t) : Math.pow(e, t)
				}
			}
			function na(t, e) {
				function n(n) {
					return o[((i.get(n) || ("range" === e.t ? i.set(n, t.push(n)) : 0 / 0)) - 1) % o.length]
				}
				function r(e, n) {
					return rc.range(t.length).map(function (t) {
						return e + n * t
					})
				}
				var i, o, a;
				return n.domain = function (r) {
					if (!arguments.length) return t;
					t = [],
					i = new s;
					for (var o, a = -1, c = r.length; ++a < c;) i.has(o = r[a]) || i.set(o, t.push(o));
					return n[e.t].apply(n, e.a)
				},
				n.range = function (t) {
					return arguments.length ? (o = t, a = 0, e = {
						t: "range",
						a: arguments
					},
					n) : o
				},
				n.rangePoints = function (i, c) {
					arguments.length < 2 && (c = 0);
					var s = i[0],
					u = i[1],
					l = t.length < 2 ? (s = (s + u) / 2, 0) : (u - s) / (t.length - 1 + c);
					return o = r(s + l * c / 2, l),
					a = 0,
					e = {
						t: "rangePoints",
						a: arguments
					},
					n
				},
				n.rangeRoundPoints = function (i, c) {
					arguments.length < 2 && (c = 0);
					var s = i[0],
					u = i[1],
					l = t.length < 2 ? (s = u = Math.round((s + u) / 2), 0) : (u - s) / (t.length - 1 + c) | 0;
					return o = r(s + Math.round(l * c / 2 + (u - s - (t.length - 1 + c) * l) / 2), l),
					a = 0,
					e = {
						t: "rangeRoundPoints",
						a: arguments
					},
					n
				},
				n.rangeBands = function (i, c, s) {
					arguments.length < 2 && (c = 0),
					arguments.length < 3 && (s = c);
					var u = i[1] < i[0],
					l = i[u - 0],
					p = i[1 - u],
					f = (p - l) / (t.length - c + 2 * s);
					return o = r(l + f * s, f),
					u && o.reverse(),
					a = f * (1 - c),
					e = {
						t: "rangeBands",
						a: arguments
					},
					n
				},
				n.rangeRoundBands = function (i, c, s) {
					arguments.length < 2 && (c = 0),
					arguments.length < 3 && (s = c);
					var u = i[1] < i[0],
					l = i[u - 0],
					p = i[1 - u],
					f = Math.floor((p - l) / (t.length - c + 2 * s));
					return o = r(l + Math.round((p - l - (t.length - c) * f) / 2), f),
					u && o.reverse(),
					a = Math.round(f * (1 - c)),
					e = {
						t: "rangeRoundBands",
						a: arguments
					},
					n
				},
				n.rangeBand = function () {
					return a
				},
				n.rangeExtent = function () {
					return Do(e.a[0])
				},
				n.copy = function () {
					return na(t, e)
				},
				n.domain(t)
			}
			function ra(e, i) {
				function o() {
					var t = 0,
					n = i.length;
					for (c = []; ++t < n;) c[t - 1] = rc.quantile(e, t / n);
					return a
				}
				function a(t) {
					return isNaN(t = +t) ? void 0 : i[rc.bisect(c, t)]
				}
				var c;
				return a.domain = function (i) {
					return arguments.length ? (e = i.map(n).filter(r).sort(t), o()) : e
				},
				a.range = function (t) {
					return arguments.length ? (i = t, o()) : i
				},
				a.quantiles = function () {
					return c
				},
				a.invertExtent = function (t) {
					return t = i.indexOf(t),
					0 > t ? [0 / 0, 0 / 0] : [t > 0 ? c[t - 1] : e[0], t < c.length ? c[t] : e[e.length - 1]]
				},
				a.copy = function () {
					return ra(e, i)
				},
				o()
			}
			function ia(t, e, n) {
				function r(e) {
					return n[Math.max(0, Math.min(a, Math.floor(o * (e - t))))]
				}
				function i() {
					return o = n.length / (e - t),
					a = n.length - 1,
					r
				}
				var o, a;
				return r.domain = function (n) {
					return arguments.length ? (t = +n[0], e = +n[n.length - 1], i()) : [t, e]
				},
				r.range = function (t) {
					return arguments.length ? (n = t, i()) : n
				},
				r.invertExtent = function (e) {
					return e = n.indexOf(e),
					e = 0 > e ? 0 / 0 : e / o + t,
					[e, e + 1 / o]
				},
				r.copy = function () {
					return ia(t, e, n)
				},
				i()
			}
			function oa(t, e) {
				function n(n) {
					return n >= n ? e[rc.bisect(t, n)] : void 0
				}
				return n.domain = function (e) {
					return arguments.length ? (t = e, n) : t
				},
				n.range = function (t) {
					return arguments.length ? (e = t, n) : e
				},
				n.invertExtent = function (n) {
					return n = e.indexOf(n),
					[t[n - 1], t[n]]
				},
				n.copy = function () {
					return oa(t, e)
				},
				n
			}
			function aa(t) {
				function e(t) {
					return + t
				}
				return e.invert = e,
				e.domain = e.range = function (n) {
					return arguments.length ? (t = n.map(e), e) : t
				},
				e.ticks = function (e) {
					return Ko(t, e)
				},
				e.tickFormat = function (e, n) {
					return $o(t, e, n)
				},
				e.copy = function () {
					return aa(t)
				},
				e
			}
			function ca() {
				return 0
			}
			function sa(t) {
				return t.innerRadius
			}
			function ua(t) {
				return t.outerRadius
			}
			function la(t) {
				return t.startAngle
			}
			function pa(t) {
				return t.endAngle
			}
			function fa(t) {
				return t && t.padAngle
			}
			function ha(t, e, n, r) {
				return (t - n) * e - (e - r) * t > 0 ? 0 : 1
			}
			function da(t, e, n, r, i) {
				var o = t[0] - e[0],
				a = t[1] - e[1],
				c = (i ? r: -r) / Math.sqrt(o * o + a * a),
				s = c * a,
				u = -c * o,
				l = t[0] + s,
				p = t[1] + u,
				f = e[0] + s,
				h = e[1] + u,
				d = (l + f) / 2,
				M = (p + h) / 2,
				g = f - l,
				b = h - p,
				m = g * g + b * b,
				v = n - r,
				A = l * h - f * p,
				y = (0 > b ? -1 : 1) * Math.sqrt(v * v * m - A * A),
				z = (A * b - g * y) / m,
				_ = ( - A * g - b * y) / m,
				T = (A * b + g * y) / m,
				O = ( - A * g + b * y) / m,
				L = z - d,
				w = _ - M,
				N = T - d,
				q = O - M;
				return L * L + w * w > N * N + q * q && (z = T, _ = O),
				[[z - s, _ - u], [z * n / v, _ * n / v]]
			}
			function Ma(t) {
				function e(e) {
					function a() {
						u.push("M", o(t(l), c))
					}
					for (var s, u = [], l = [], p = -1, f = e.length, h = Le(n), d = Le(r); ++p < f;) i.call(this, s = e[p], p) ? l.push([ + h.call(this, s, p), +d.call(this, s, p)]) : l.length && (a(), l = []);
					return l.length && a(),
					u.length ? u.join("") : null
				}
				var n = qr,
				r = xr,
				i = xn,
				o = ga,
				a = o.key,
				c = .7;
				return e.x = function (t) {
					return arguments.length ? (n = t, e) : n
				},
				e.y = function (t) {
					return arguments.length ? (r = t, e) : r
				},
				e.defined = function (t) {
					return arguments.length ? (i = t, e) : i
				},
				e.interpolate = function (t) {
					return arguments.length ? (a = "function" == typeof t ? o = t: (o = Wu.get(t) || ga).key, e) : a
				},
				e.tension = function (t) {
					return arguments.length ? (c = t, e) : c
				},
				e
			}
			function ga(t) {
				return t.join("L")
			}
			function ba(t) {
				return ga(t) + "Z"
			}
			function ma(t) {
				for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
				return n > 1 && i.push("H", r[0]),
				i.join("")
			}
			function va(t) {
				for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("V", (r = t[e])[1], "H", r[0]);
				return i.join("")
			}
			function Aa(t) {
				for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r = t[e])[0], "V", r[1]);
				return i.join("")
			}
			function ya(t, e) {
				return t.length < 4 ? ga(t) : t[1] + Ta(t.slice(1, -1), Oa(t, e))
			}
			function za(t, e) {
				return t.length < 3 ? ga(t) : t[0] + Ta((t.push(t[0]), t), Oa([t[t.length - 2]].concat(t, [t[1]]), e))
			}
			function _a(t, e) {
				return t.length < 3 ? ga(t) : t[0] + Ta(t, Oa(t, e))
			}
			function Ta(t, e) {
				if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return ga(t);
				var n = t.length != e.length,
				r = "",
				i = t[0],
				o = t[1],
				a = e[0],
				c = a,
				s = 1;
				if (n && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], s = 2), e.length > 1) {
					c = e[1],
					o = t[s],
					s++,
					r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - c[0]) + "," + (o[1] - c[1]) + "," + o[0] + "," + o[1];
					for (var u = 2; u < e.length; u++, s++) o = t[s],
					c = e[u],
					r += "S" + (o[0] - c[0]) + "," + (o[1] - c[1]) + "," + o[0] + "," + o[1]
				}
				if (n) {
					var l = t[s];
					r += "Q" + (o[0] + 2 * c[0] / 3) + "," + (o[1] + 2 * c[1] / 3) + "," + l[0] + "," + l[1]
				}
				return r
			}
			function Oa(t, e) {
				for (var n, r = [], i = (1 - e) / 2, o = t[0], a = t[1], c = 1, s = t.length; ++c < s;) n = o,
				o = a,
				a = t[c],
				r.push([i * (a[0] - n[0]), i * (a[1] - n[1])]);
				return r
			}
			function La(t) {
				if (t.length < 3) return ga(t);
				var e = 1,
				n = t.length,
				r = t[0],
				i = r[0],
				o = r[1],
				a = [i, i, i, (r = t[1])[0]],
				c = [o, o, o, r[1]],
				s = [i, ",", o, "L", xa(Cu, a), ",", xa(Cu, c)];
				for (t.push(t[n - 1]); ++e <= n;) r = t[e],
				a.shift(),
				a.push(r[0]),
				c.shift(),
				c.push(r[1]),
				Sa(s, a, c);
				return t.pop(),
				s.push("L", r),
				s.join("")
			}
			function wa(t) {
				if (t.length < 4) return ga(t);
				for (var e, n = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) e = t[r],
				o.push(e[0]),
				a.push(e[1]);
				for (n.push(xa(Cu, o) + "," + xa(Cu, a)), --r; ++r < i;) e = t[r],
				o.shift(),
				o.push(e[0]),
				a.shift(),
				a.push(e[1]),
				Sa(n, o, a);
				return n.join("")
			}
			function Na(t) {
				for (var e, n, r = -1, i = t.length, o = i + 4, a = [], c = []; ++r < 4;) n = t[r % i],
				a.push(n[0]),
				c.push(n[1]);
				for (e = [xa(Cu, a), ",", xa(Cu, c)], --r; ++r < o;) n = t[r % i],
				a.shift(),
				a.push(n[0]),
				c.shift(),
				c.push(n[1]),
				Sa(e, a, c);
				return e.join("")
			}
			function qa(t, e) {
				var n = t.length - 1;
				if (n) for (var r, i, o = t[0][0], a = t[0][1], c = t[n][0] - o, s = t[n][1] - a, u = -1; ++u <= n;) r = t[u],
				i = u / n,
				r[0] = e * r[0] + (1 - e) * (o + i * c),
				r[1] = e * r[1] + (1 - e) * (a + i * s);
				return La(t)
			}
			function xa(t, e) {
				return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
			}
			function Sa(t, e, n) {
				t.push("C", xa(Eu, e), ",", xa(Eu, n), ",", xa(Bu, e), ",", xa(Bu, n), ",", xa(Cu, e), ",", xa(Cu, n))
			}
			function Wa(t, e) {
				return (e[1] - t[1]) / (e[0] - t[0])
			}
			function Ea(t) {
				for (var e = 0, n = t.length - 1, r = [], i = t[0], o = t[1], a = r[0] = Wa(i, o); ++e < n;) r[e] = (a + (a = Wa(i = o, o = t[e + 1]))) / 2;
				return r[e] = a,
				r
			}
			function Ba(t) {
				for (var e, n, r, i, o = [], a = Ea(t), c = -1, s = t.length - 1; ++c < s;) e = Wa(t[c], t[c + 1]),
				bc(e) < Cc ? a[c] = a[c + 1] = 0 : (n = a[c] / e, r = a[c + 1] / e, i = n * n + r * r, i > 9 && (i = 3 * e / Math.sqrt(i), a[c] = i * n, a[c + 1] = i * r));
				for (c = -1; ++c <= s;) i = (t[Math.min(s, c + 1)][0] - t[Math.max(0, c - 1)][0]) / (6 * (1 + a[c] * a[c])),
				o.push([i || 0, a[c] * i || 0]);
				return o
			}
			function Ca(t) {
				return t.length < 3 ? ga(t) : t[0] + Ta(t, Ba(t))
			}
			function Xa(t) {
				for (var e, n, r, i = -1, o = t.length; ++i < o;) e = t[i],
				n = e[0],
				r = e[1] - Pc,
				e[0] = n * Math.cos(r),
				e[1] = n * Math.sin(r);
				return t
			}
			function Ra(t) {
				function e(e) {
					function s() {
						M.push("M", c(t(b), p), l, u(t(g.reverse()), p), "Z")
					}
					for (var f, h, d, M = [], g = [], b = [], m = -1, v = e.length, A = Le(n), y = Le(i), z = n === r ?
					function () {
						return h
					}: Le(r), _ = i === o ?
					function () {
						return d
					}: Le(o); ++m < v;) a.call(this, f = e[m], m) ? (g.push([h = +A.call(this, f, m), d = +y.call(this, f, m)]), b.push([ + z.call(this, f, m), +_.call(this, f, m)])) : g.length && (s(), g = [], b = []);
					return g.length && s(),
					M.length ? M.join("") : null
				}
				var n = qr,
				r = qr,
				i = 0,
				o = xr,
				a = xn,
				c = ga,
				s = c.key,
				u = c,
				l = "L",
				p = .7;
				return e.x = function (t) {
					return arguments.length ? (n = r = t, e) : r
				},
				e.x0 = function (t) {
					return arguments.length ? (n = t, e) : n
				},
				e.x1 = function (t) {
					return arguments.length ? (r = t, e) : r
				},
				e.y = function (t) {
					return arguments.length ? (i = o = t, e) : o
				},
				e.y0 = function (t) {
					return arguments.length ? (i = t, e) : i
				},
				e.y1 = function (t) {
					return arguments.length ? (o = t, e) : o
				},
				e.defined = function (t) {
					return arguments.length ? (a = t, e) : a
				},
				e.interpolate = function (t) {
					return arguments.length ? (s = "function" == typeof t ? c = t: (c = Wu.get(t) || ga).key, u = c.reverse || c, l = c.closed ? "M": "L", e) : s
				},
				e.tension = function (t) {
					return arguments.length ? (p = t, e) : p
				},
				e
			}
			function ka(t) {
				return t.radius
			}
			function Da(t) {
				return [t.x, t.y]
			}
			function Pa(t) {
				return function () {
					var e = t.apply(this, arguments),
					n = e[0],
					r = e[1] - Pc;
					return [n * Math.cos(r), n * Math.sin(r)]
				}
			}
			function Ia() {
				return 64
			}
			function ja() {
				return "circle"
			}
			function Ha(t) {
				var e = Math.sqrt(t / Rc);
				return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
			}
			function Ua(t) {
				return function () {
					var e, n;
					(e = this[t]) && (n = e[e.active]) && (--e.count ? (delete e[e.active], e.active += .5) : delete this[t], n.event && n.event.interrupt.call(this, this.__data__, n.index))
				}
			}
			function Fa(t, e, n) {
				return zc(t, ju),
				t.namespace = e,
				t.id = n,
				t
			}
			function Va(t, e, n, r) {
				var i = t.id,
				o = t.namespace;
				return I(t, "function" == typeof n ?
				function (t, a, c) {
					t[o][i].tween.set(e, r(n.call(t, t.__data__, a, c)))
				}: (n = r(n), function (t) {
					t[o][i].tween.set(e, n)
				}))
			}
			function Ga(t) {
				return null == t && (t = ""),
				function () {
					this.textContent = t
				}
			}
			function Ya(t) {
				return null == t ? "__transition__": "__transition_" + t + "__"
			}
			function Ka(t, e, n, r, i) {
				var o = t[n] || (t[n] = {
					active: 0,
					count: 0
				}),
				a = o[r];
				if (!a) {
					var c = i.time;
					a = o[r] = {
						tween: new s,
						time: c,
						delay: i.delay,
						duration: i.duration,
						ease: i.ease,
						index: e
					},
					i = null,
					++o.count,
					rc.timer(function (i) {
						function s(n) {
							if (o.active > r) return l();
							var i = o[o.active];
							i && (--o.count, delete o[o.active], i.event && i.event.interrupt.call(t, t.__data__, i.index)),
							o.active = r,
							a.event && a.event.start.call(t, t.__data__, e),
							a.tween.forEach(function (n, r) { (r = r.call(t, t.__data__, e)) && M.push(r)
							}),
							f = a.ease,
							p = a.duration,
							rc.timer(function () {
								return d.c = u(n || 1) ? xn: u,
								1
							},
							0, c)
						}
						function u(n) {
							if (o.active !== r) return 1;
							for (var i = n / p, c = f(i), s = M.length; s > 0;) M[--s].call(t, c);
							return i >= 1 ? (a.event && a.event.end.call(t, t.__data__, e), l()) : void 0
						}
						function l() {
							return--o.count ? delete o[r] : delete t[n],
							1
						}
						var p, f, h = a.delay,
						d = ss,
						M = [];
						return d.t = h + c,
						i >= h ? s(i - h) : void(d.c = s)
					},
					0, c)
				}
			}
			function $a(t, e, n) {
				t.attr("transform", function (t) {
					var r = e(t);
					return "translate(" + (isFinite(r) ? r: n(t)) + ",0)"
				})
			}
			function Qa(t, e, n) {
				t.attr("transform", function (t) {
					var r = e(t);
					return "translate(0," + (isFinite(r) ? r: n(t)) + ")"
				})
			}
			function Ja(t) {
				return t.toISOString()
			}
			function Za(t, e, n) {
				function r(e) {
					return t(e)
				}
				function i(t, n) {
					var r = t[1] - t[0],
					i = r / n,
					o = rc.bisect(Qu, i);
					return o == Qu.length ? [e.year, Yo(t.map(function (t) {
						return t / 31536e6
					}), n)[2]] : o ? e[i / Qu[o - 1] < Qu[o] / i ? o - 1 : o] : [tl, Yo(t, n)[2]]
				}
				return r.invert = function (e) {
					return tc(t.invert(e))
				},
				r.domain = function (e) {
					return arguments.length ? (t.domain(e), r) : t.domain().map(tc)
				},
				r.nice = function (t, e) {
					function n(n) {
						return ! isNaN(n) && !t.range(n, tc( + n + 1), e).length
					}
					var o = r.domain(),
					a = Do(o),
					c = null == t ? i(a, 10) : "number" == typeof t && i(a, t);
					return c && (t = c[0], e = c[1]),
					r.domain(jo(o, e > 1 ? {
						floor: function (e) {
							for (; n(e = t.floor(e));) e = tc(e - 1);
							return e
						},
						ceil: function (e) {
							for (; n(e = t.ceil(e));) e = tc( + e + 1);
							return e
						}
					}: t))
				},
				r.ticks = function (t, e) {
					var n = Do(r.domain()),
					o = null == t ? i(n, 10) : "number" == typeof t ? i(n, t) : !t.range && [{
						range: t
					},
					e];
					return o && (t = o[0], e = o[1]),
					t.range(n[0], tc( + n[1] + 1), 1 > e ? 1 : e)
				},
				r.tickFormat = function () {
					return n
				},
				r.copy = function () {
					return Za(t.copy(), e, n)
				},
				Vo(r, t)
			}
			function tc(t) {
				return new Date(t)
			}
			function ec(t) {
				return JSON.parse(t.responseText)
			}
			function nc(t) {
				var e = ac.createRange();
				return e.selectNode(ac.body),
				e.createContextualFragment(t.responseText)
			}
			var rc = {
				version: "3.5.2"
			};
			Date.now || (Date.now = function () {
				return + new Date
			});
			var ic = [].slice,
			oc = function (t) {
				return ic.call(t)
			},
			ac = document,
			cc = ac.documentElement,
			sc = window;
			try {
				oc(cc.childNodes)[0].nodeType
			} catch(uc) {
				oc = function (t) {
					for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
					return n
				}
			}
			try {
				ac.createElement("div").style.setProperty("opacity", 0, "")
			} catch(lc) {
				var pc = sc.Element.prototype,
				fc = pc.setAttribute,
				hc = pc.setAttributeNS,
				dc = sc.CSSStyleDeclaration.prototype,
				Mc = dc.setProperty;
				pc.setAttribute = function (t, e) {
					fc.call(this, t, e + "")
				},
				pc.setAttributeNS = function (t, e, n) {
					hc.call(this, t, e, n + "")
				},
				dc.setProperty = function (t, e, n) {
					Mc.call(this, t, e + "", n)
				}
			}
			rc.ascending = t,
			rc.descending = function (t, e) {
				return t > e ? -1 : e > t ? 1 : e >= t ? 0 : 0 / 0
			},
			rc.min = function (t, e) {
				var n, r, i = -1,
				o = t.length;
				if (1 === arguments.length) {
					for (; ++i < o;) if (null != (r = t[i]) && r >= r) {
						n = r;
						break
					}
					for (; ++i < o;) null != (r = t[i]) && n > r && (n = r)
				} else {
					for (; ++i < o;) if (null != (r = e.call(t, t[i], i)) && r >= r) {
						n = r;
						break
					}
					for (; ++i < o;) null != (r = e.call(t, t[i], i)) && n > r && (n = r)
				}
				return n
			},
			rc.max = function (t, e) {
				var n, r, i = -1,
				o = t.length;
				if (1 === arguments.length) {
					for (; ++i < o;) if (null != (r = t[i]) && r >= r) {
						n = r;
						break
					}
					for (; ++i < o;) null != (r = t[i]) && r > n && (n = r)
				} else {
					for (; ++i < o;) if (null != (r = e.call(t, t[i], i)) && r >= r) {
						n = r;
						break
					}
					for (; ++i < o;) null != (r = e.call(t, t[i], i)) && r > n && (n = r)
				}
				return n
			},
			rc.extent = function (t, e) {
				var n, r, i, o = -1,
				a = t.length;
				if (1 === arguments.length) {
					for (; ++o < a;) if (null != (r = t[o]) && r >= r) {
						n = i = r;
						break
					}
					for (; ++o < a;) null != (r = t[o]) && (n > r && (n = r), r > i && (i = r))
				} else {
					for (; ++o < a;) if (null != (r = e.call(t, t[o], o)) && r >= r) {
						n = i = r;
						break
					}
					for (; ++o < a;) null != (r = e.call(t, t[o], o)) && (n > r && (n = r), r > i && (i = r))
				}
				return [n, i]
			},
			rc.sum = function (t, e) {
				var n, i = 0,
				o = t.length,
				a = -1;
				if (1 === arguments.length) for (; ++a < o;) r(n = +t[a]) && (i += n);
				else for (; ++a < o;) r(n = +e.call(t, t[a], a)) && (i += n);
				return i
			},
			rc.mean = function (t, e) {
				var i, o = 0,
				a = t.length,
				c = -1,
				s = a;
				if (1 === arguments.length) for (; ++c < a;) r(i = n(t[c])) ? o += i: --s;
				else for (; ++c < a;) r(i = n(e.call(t, t[c], c))) ? o += i: --s;
				return s ? o / s: void 0
			},
			rc.quantile = function (t, e) {
				var n = (t.length - 1) * e + 1,
				r = Math.floor(n),
				i = +t[r - 1],
				o = n - r;
				return o ? i + o * (t[r] - i) : i
			},
			rc.median = function (e, i) {
				var o, a = [],
				c = e.length,
				s = -1;
				if (1 === arguments.length) for (; ++s < c;) r(o = n(e[s])) && a.push(o);
				else for (; ++s < c;) r(o = n(i.call(e, e[s], s))) && a.push(o);
				return a.length ? rc.quantile(a.sort(t), .5) : void 0
			},
			rc.variance = function (t, e) {
				var i, o, a = t.length,
				c = 0,
				s = 0,
				u = -1,
				l = 0;
				if (1 === arguments.length) for (; ++u < a;) r(i = n(t[u])) && (o = i - c, c += o / ++l, s += o * (i - c));
				else for (; ++u < a;) r(i = n(e.call(t, t[u], u))) && (o = i - c, c += o / ++l, s += o * (i - c));
				return l > 1 ? s / (l - 1) : void 0
			},
			rc.deviation = function () {
				var t = rc.variance.apply(this, arguments);
				return t ? Math.sqrt(t) : t
			};
			var gc = i(t);
			rc.bisectLeft = gc.left,
			rc.bisect = rc.bisectRight = gc.right,
			rc.bisector = function (e) {
				return i(1 === e.length ?
				function (n, r) {
					return t(e(n), r)
				}: e)
			},
			rc.shuffle = function (t, e, n) { (o = arguments.length) < 3 && (n = t.length, 2 > o && (e = 0));
				for (var r, i, o = n - e; o;) i = Math.random() * o--|0,
				r = t[o + e],
				t[o + e] = t[i + e],
				t[i + e] = r;
				return t
			},
			rc.permute = function (t, e) {
				for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
				return r
			},
			rc.pairs = function (t) {
				for (var e, n = 0, r = t.length - 1, i = t[0], o = new Array(0 > r ? 0 : r); r > n;) o[n] = [e = i, i = t[++n]];
				return o
			},
			rc.zip = function () {
				if (! (r = arguments.length)) return [];
				for (var t = -1, e = rc.min(arguments, o), n = new Array(e); ++t < e;) for (var r, i = -1, a = n[t] = new Array(r); ++i < r;) a[i] = arguments[i][t];
				return n
			},
			rc.transpose = function (t) {
				return rc.zip.apply(rc, t)
			},
			rc.keys = function (t) {
				var e = [];
				for (var n in t) e.push(n);
				return e
			},
			rc.values = function (t) {
				var e = [];
				for (var n in t) e.push(t[n]);
				return e
			},
			rc.entries = function (t) {
				var e = [];
				for (var n in t) e.push({
					key: n,
					value: t[n]
				});
				return e
			},
			rc.merge = function (t) {
				for (var e, n, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
				for (n = new Array(a); --i >= 0;) for (r = t[i], e = r.length; --e >= 0;) n[--a] = r[e];
				return n
			};
			var bc = Math.abs;
			rc.range = function (t, e, n) {
				if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n === 1 / 0) throw new Error("infinite range");
				var r, i = [],
				o = a(bc(n)),
				c = -1;
				if (t *= o, e *= o, n *= o, 0 > n) for (;
				(r = t + n * ++c) > e;) i.push(r / o);
				else for (;
				(r = t + n * ++c) < e;) i.push(r / o);
				return i
			},
			rc.map = function (t, e) {
				var n = new s;
				if (t instanceof s) t.forEach(function (t, e) {
					n.set(t, e)
				});
				else if (Array.isArray(t)) {
					var r, i = -1,
					o = t.length;
					if (1 === arguments.length) for (; ++i < o;) n.set(i, t[i]);
					else for (; ++i < o;) n.set(e.call(t, r = t[i], i), r)
				} else for (var a in t) n.set(a, t[a]);
				return n
			};
			var mc = "__proto__",
			vc = "\x00";
			c(s, {
				has: p,
				get: function (t) {
					return this._[u(t)]
				},
				set: function (t, e) {
					return this._[u(t)] = e
				},
				remove: f,
				keys: h,
				values: function () {
					var t = [];
					for (var e in this._) t.push(this._[e]);
					return t
				},
				entries: function () {
					var t = [];
					for (var e in this._) t.push({
						key: l(e),
						value: this._[e]
					});
					return t
				},
				size: d,
				empty: M,
				forEach: function (t) {
					for (var e in this._) t.call(this, l(e), this._[e])
				}
			}),
			rc.nest = function () {
				function t(e, a, c) {
					if (c >= o.length) return r ? r.call(i, a) : n ? a.sort(n) : a;
					for (var u, l, p, f, h = -1, d = a.length, M = o[c++], g = new s; ++h < d;)(f = g.get(u = M(l = a[h]))) ? f.push(l) : g.set(u, [l]);
					return e ? (l = e(), p = function (n, r) {
						l.set(n, t(e, r, c))
					}) : (l = {},
					p = function (n, r) {
						l[n] = t(e, r, c)
					}),
					g.forEach(p),
					l
				}
				function e(t, n) {
					if (n >= o.length) return t;
					var r = [],
					i = a[n++];
					return t.forEach(function (t, i) {
						r.push({
							key: t,
							values: e(i, n)
						})
					}),
					i ? r.sort(function (t, e) {
						return i(t.key, e.key)
					}) : r
				}
				var n, r, i = {},
				o = [],
				a = [];
				return i.map = function (e, n) {
					return t(n, e, 0)
				},
				i.entries = function (n) {
					return e(t(rc.map, n, 0), 0)
				},
				i.key = function (t) {
					return o.push(t),
					i
				},
				i.sortKeys = function (t) {
					return a[o.length - 1] = t,
					i
				},
				i.sortValues = function (t) {
					return n = t,
					i
				},
				i.rollup = function (t) {
					return r = t,
					i
				},
				i
			},
			rc.set = function (t) {
				var e = new g;
				if (t) for (var n = 0, r = t.length; r > n; ++n) e.add(t[n]);
				return e
			},
			c(g, {
				has: p,
				add: function (t) {
					return this._[u(t += "")] = !0,
					t
				},
				remove: f,
				values: h,
				size: d,
				empty: M,
				forEach: function (t) {
					for (var e in this._) t.call(this, l(e))
				}
			}),
			rc.behavior = {},
			rc.rebind = function (t, e) {
				for (var n, r = 1, i = arguments.length; ++r < i;) t[n = arguments[r]] = b(t, e, e[n]);
				return t
			};
			var Ac = ["webkit", "ms", "moz", "Moz", "o", "O"];
			rc.dispatch = function () {
				for (var t = new A, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = y(t);
				return t
			},
			A.prototype.on = function (t, e) {
				var n = t.indexOf("."),
				r = "";
				if (n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
				if (2 === arguments.length) {
					if (null == e) for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
					return this
				}
			},
			rc.event = null,
			rc.requote = function (t) {
				return t.replace(yc, "\\$&")
			};
			var yc = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
			zc = {}.__proto__ ?
			function (t, e) {
				t.__proto__ = e
			}: function (t, e) {
				for (var n in e) t[n] = e[n]
			},
			_c = function (t, e) {
				return e.querySelector(t)
			},
			Tc = function (t, e) {
				return e.querySelectorAll(t)
			},
			Oc = cc.matches || cc[m(cc, "matchesSelector")],
			Lc = function (t, e) {
				return Oc.call(t, e)
			};
			"function" == typeof Sizzle && (_c = function (t, e) {
				return Sizzle(t, e)[0] || null
			},
			Tc = Sizzle, Lc = Sizzle.matchesSelector),
			rc.selection = function () {
				return xc
			};
			var wc = rc.selection.prototype = [];
			wc.select = function (t) {
				var e, n, r, i, o = [];
				t = L(t);
				for (var a = -1, c = this.length; ++a < c;) {
					o.push(e = []),
					e.parentNode = (r = this[a]).parentNode;
					for (var s = -1, u = r.length; ++s < u;)(i = r[s]) ? (e.push(n = t.call(i, i.__data__, s, a)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
				}
				return O(o)
			},
			wc.selectAll = function (t) {
				var e, n, r = [];
				t = w(t);
				for (var i = -1, o = this.length; ++i < o;) for (var a = this[i], c = -1, s = a.length; ++c < s;)(n = a[c]) && (r.push(e = oc(t.call(n, n.__data__, c, i))), e.parentNode = n);
				return O(r)
			};
			var Nc = {
				svg: "http://www.w3.org/2000/svg",
				xhtml: "http://www.w3.org/1999/xhtml",
				xlink: "http://www.w3.org/1999/xlink",
				xml: "http://www.w3.org/XML/1998/namespace",
				xmlns: "http://www.w3.org/2000/xmlns/"
			};
			rc.ns = {
				prefix: Nc,
				qualify: function (t) {
					var e = t.indexOf(":"),
					n = t;
					return e >= 0 && (n = t.slice(0, e), t = t.slice(e + 1)),
					Nc.hasOwnProperty(n) ? {
						space: Nc[n],
						local: t
					}: t
				}
			},
			wc.attr = function (t, e) {
				if (arguments.length < 2) {
					if ("string" == typeof t) {
						var n = this.node();
						return t = rc.ns.qualify(t),
						t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
					}
					for (e in t) this.each(N(e, t[e]));
					return this
				}
				return this.each(N(t, e))
			},
			wc.classed = function (t, e) {
				if (arguments.length < 2) {
					if ("string" == typeof t) {
						var n = this.node(),
						r = (t = S(t)).length,
						i = -1;
						if (e = n.classList) {
							for (; ++i < r;) if (!e.contains(t[i])) return ! 1
						} else for (e = n.getAttribute("class"); ++i < r;) if (!x(t[i]).test(e)) return ! 1;
						return ! 0
					}
					for (e in t) this.each(W(e, t[e]));
					return this
				}
				return this.each(W(t, e))
			},
			wc.style = function (t, e, n) {
				var r = arguments.length;
				if (3 > r) {
					if ("string" != typeof t) {
						2 > r && (e = "");
						for (n in t) this.each(B(n, t[n], e));
						return this
					}
					if (2 > r) return sc.getComputedStyle(this.node(), null).getPropertyValue(t);
					n = ""
				}
				return this.each(B(t, e, n))
			},
			wc.property = function (t, e) {
				if (arguments.length < 2) {
					if ("string" == typeof t) return this.node()[t];
					for (e in t) this.each(C(e, t[e]));
					return this
				}
				return this.each(C(t, e))
			},
			wc.text = function (t) {
				return arguments.length ? this.each("function" == typeof t ?
				function () {
					var e = t.apply(this, arguments);
					this.textContent = null == e ? "": e
				}: null == t ?
				function () {
					this.textContent = ""
				}: function () {
					this.textContent = t
				}) : this.node().textContent
			},
			wc.html = function (t) {
				return arguments.length ? this.each("function" == typeof t ?
				function () {
					var e = t.apply(this, arguments);
					this.innerHTML = null == e ? "": e
				}: null == t ?
				function () {
					this.innerHTML = ""
				}: function () {
					this.innerHTML = t
				}) : this.node().innerHTML
			},
			wc.append = function (t) {
				return t = X(t),
				this.select(function () {
					return this.appendChild(t.apply(this, arguments))
				})
			},
			wc.insert = function (t, e) {
				return t = X(t),
				e = L(e),
				this.select(function () {
					return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
				})
			},
			wc.remove = function () {
				return this.each(R)
			},
			wc.data = function (t, e) {
				function n(t, n) {
					var r, i, o, a = t.length,
					p = n.length,
					f = Math.min(a, p),
					h = new Array(p),
					d = new Array(p),
					M = new Array(a);
					if (e) {
						var g, b = new s,
						m = new Array(a);
						for (r = -1; ++r < a;) b.has(g = e.call(i = t[r], i.__data__, r)) ? M[r] = i: b.set(g, i),
						m[r] = g;
						for (r = -1; ++r < p;)(i = b.get(g = e.call(n, o = n[r], r))) ? i !== !0 && (h[r] = i, i.__data__ = o) : d[r] = k(o),
						b.set(g, !0);
						for (r = -1; ++r < a;) b.get(m[r]) !== !0 && (M[r] = t[r])
					} else {
						for (r = -1; ++r < f;) i = t[r],
						o = n[r],
						i ? (i.__data__ = o, h[r] = i) : d[r] = k(o);
						for (; p > r; ++r) d[r] = k(n[r]);
						for (; a > r; ++r) M[r] = t[r]
					}
					d.update = h,
					d.parentNode = h.parentNode = M.parentNode = t.parentNode,
					c.push(d),
					u.push(h),
					l.push(M)
				}
				var r, i, o = -1,
				a = this.length;
				if (!arguments.length) {
					for (t = new Array(a = (r = this[0]).length); ++o < a;)(i = r[o]) && (t[o] = i.__data__);
					return t
				}
				var c = j([]),
				u = O([]),
				l = O([]);
				if ("function" == typeof t) for (; ++o < a;) n(r = this[o], t.call(r, r.parentNode.__data__, o));
				else for (; ++o < a;) n(r = this[o], t);
				return u.enter = function () {
					return c
				},
				u.exit = function () {
					return l
				},
				u
			},
			wc.datum = function (t) {
				return arguments.length ? this.property("__data__", t) : this.property("__data__")
			},
			wc.filter = function (t) {
				var e, n, r, i = [];
				"function" != typeof t && (t = D(t));
				for (var o = 0, a = this.length; a > o; o++) {
					i.push(e = []),
					e.parentNode = (n = this[o]).parentNode;
					for (var c = 0, s = n.length; s > c; c++)(r = n[c]) && t.call(r, r.__data__, c, o) && e.push(r)
				}
				return O(i)
			},
			wc.order = function () {
				for (var t = -1, e = this.length; ++t < e;) for (var n, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(n = r[i]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
				return this
			},
			wc.sort = function (t) {
				t = P.apply(this, arguments);
				for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
				return this.order()
			},
			wc.each = function (t) {
				return I(this, function (e, n, r) {
					t.call(e, e.__data__, n, r)
				})
			},
			wc.call = function (t) {
				var e = oc(arguments);
				return t.apply(e[0] = this, e),
				this
			},
			wc.empty = function () {
				return ! this.node()
			},
			wc.node = function () {
				for (var t = 0, e = this.length; e > t; t++) for (var n = this[t], r = 0, i = n.length; i > r; r++) {
					var o = n[r];
					if (o) return o
				}
				return null
			},
			wc.size = function () {
				var t = 0;
				return I(this, function () {++t
				}),
				t
			};
			var qc = [];
			rc.selection.enter = j,
			rc.selection.enter.prototype = qc,
			qc.append = wc.append,
			qc.empty = wc.empty,
			qc.node = wc.node,
			qc.call = wc.call,
			qc.size = wc.size,
			qc.select = function (t) {
				for (var e, n, r, i, o, a = [], c = -1, s = this.length; ++c < s;) {
					r = (i = this[c]).update,
					a.push(e = []),
					e.parentNode = i.parentNode;
					for (var u = -1, l = i.length; ++u < l;)(o = i[u]) ? (e.push(r[u] = n = t.call(i.parentNode, o.__data__, u, c)), n.__data__ = o.__data__) : e.push(null)
				}
				return O(a)
			},
			qc.insert = function (t, e) {
				return arguments.length < 2 && (e = H(this)),
				wc.insert.call(this, t, e)
			},
			rc.select = function (t) {
				var e = ["string" == typeof t ? _c(t, ac) : t];
				return e.parentNode = cc,
				O([e])
			},
			rc.selectAll = function (t) {
				var e = oc("string" == typeof t ? Tc(t, ac) : t);
				return e.parentNode = cc,
				O([e])
			};
			var xc = rc.select(cc);
			wc.on = function (t, e, n) {
				var r = arguments.length;
				if (3 > r) {
					if ("string" != typeof t) {
						2 > r && (e = !1);
						for (n in t) this.each(U(n, t[n], e));
						return this
					}
					if (2 > r) return (r = this.node()["__on" + t]) && r._;
					n = !1
				}
				return this.each(U(t, e, n))
			};
			var Sc = rc.map({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			});
			Sc.forEach(function (t) {
				"on" + t in ac && Sc.remove(t)
			});
			var Wc = "onselectstart" in ac ? null: m(cc.style, "userSelect"),
			Ec = 0;
			rc.mouse = function (t) {
				return Y(t, _())
			};
			var Bc = /WebKit/.test(sc.navigator.userAgent) ? -1 : 0;
			rc.touch = function (t, e, n) {
				if (arguments.length < 3 && (n = e, e = _().changedTouches), e) for (var r, i = 0, o = e.length; o > i; ++i) if ((r = e[i]).identifier === n) return Y(t, r)
			},
			rc.behavior.drag = function () {
				function t() {
					this.on("mousedown.drag", i).on("touchstart.drag", o)
				}
				function e(t, e, i, o, a) {
					return function () {
						function c() {
							var t, n, r = e(f, M);
							r && (t = r[0] - v[0], n = r[1] - v[1], d |= t | n, v = r, h({
								type: "drag",
								x: r[0] + u[0],
								y: r[1] + u[1],
								dx: t,
								dy: n
							}))
						}
						function s() {
							e(f, M) && (b.on(o + g, null).on(a + g, null), m(d && rc.event.target === p), h({
								type: "dragend"
							}))
						}
						var u, l = this,
						p = rc.event.target,
						f = l.parentNode,
						h = n.of(l, arguments),
						d = 0,
						M = t(),
						g = ".drag" + (null == M ? "": "-" + M),
						b = rc.select(i()).on(o + g, c).on(a + g, s),
						m = G(),
						v = e(f, M);
						r ? (u = r.apply(l, arguments), u = [u.x - v[0], u.y - v[1]]) : u = [0, 0],
						h({
							type: "dragstart"
						})
					}
				}
				var n = T(t, "drag", "dragstart", "dragend"),
				r = null,
				i = e(v, rc.mouse, Q, "mousemove", "mouseup"),
				o = e(K, rc.touch, $, "touchmove", "touchend");
				return t.origin = function (e) {
					return arguments.length ? (r = e, t) : r
				},
				rc.rebind(t, n, "on")
			},
			rc.touches = function (t, e) {
				return arguments.length < 2 && (e = _().touches),
				e ? oc(e).map(function (e) {
					var n = Y(t, e);
					return n.identifier = e.identifier,
					n
				}) : []
			};
			var Cc = 1e-6,
			Xc = Cc * Cc,
			Rc = Math.PI,
			kc = 2 * Rc,
			Dc = kc - Cc,
			Pc = Rc / 2,
			Ic = Rc / 180,
			jc = 180 / Rc,
			Hc = Math.SQRT2,
			Uc = 2,
			Fc = 4;
			rc.interpolateZoom = function (t, e) {
				function n(t) {
					var e = t * m;
					if (b) {
						var n = re(M),
						a = o / (Uc * f) * (n * ie(Hc * e + M) - ne(M));
						return [r + a * u, i + a * l, o * n / re(Hc * e + M)]
					}
					return [r + t * u, i + t * l, o * Math.exp(Hc * e)]
				}
				var r = t[0],
				i = t[1],
				o = t[2],
				a = e[0],
				c = e[1],
				s = e[2],
				u = a - r,
				l = c - i,
				p = u * u + l * l,
				f = Math.sqrt(p),
				h = (s * s - o * o + Fc * p) / (2 * o * Uc * f),
				d = (s * s - o * o - Fc * p) / (2 * s * Uc * f),
				M = Math.log(Math.sqrt(h * h + 1) - h),
				g = Math.log(Math.sqrt(d * d + 1) - d),
				b = g - M,
				m = (b || Math.log(s / o)) / Hc;
				return n.duration = 1e3 * m,
				n
			},
			rc.behavior.zoom = function () {
				function t(t) {
					t.on(x, l).on(Yc + ".zoom", f).on("dblclick.zoom", h).on(E, p)
				}
				function e(t) {
					return [(t[0] - O.x) / O.k, (t[1] - O.y) / O.k]
				}
				function n(t) {
					return [t[0] * O.k + O.x, t[1] * O.k + O.y]
				}
				function r(t) {
					O.k = Math.max(w[0], Math.min(w[1], t))
				}
				function i(t, e) {
					e = n(e),
					O.x += t[0] - e[0],
					O.y += t[1] - e[1]
				}
				function o(e, n, o, a) {
					e.__chart__ = {
						x: O.x,
						y: O.y,
						k: O.k
					},
					r(Math.pow(2, a)),
					i(M = n, o),
					e = rc.select(e),
					N > 0 && (e = e.transition().duration(N)),
					e.call(t.event)
				}
				function a() {
					A && A.domain(v.range().map(function (t) {
						return (t - O.x) / O.k
					}).map(v.invert)),
					_ && _.domain(y.range().map(function (t) {
						return (t - O.y) / O.k
					}).map(y.invert))
				}
				function c(t) {
					q++||t({
						type: "zoomstart"
					})
				}
				function s(t) {
					a(),
					t({
						type: "zoom",
						scale: O.k,
						translate: [O.x, O.y]
					})
				}
				function u(t) {--q || t({
						type: "zoomend"
					}),
					M = null
				}
				function l() {
					function t() {
						l = 1,
						i(rc.mouse(r), f),
						s(a)
					}
					function n() {
						p.on(S, null).on(W, null),
						h(l && rc.event.target === o),
						u(a)
					}
					var r = this,
					o = rc.event.target,
					a = B.of(r, arguments),
					l = 0,
					p = rc.select(sc).on(S, t).on(W, n),
					f = e(rc.mouse(r)),
					h = G();
					Iu.call(r),
					c(a)
				}
				function p() {
					function t() {
						var t = rc.touches(d);
						return h = O.k,
						t.forEach(function (t) {
							t.identifier in g && (g[t.identifier] = e(t))
						}),
						t
					}
					function n() {
						var e = rc.event.target;
						rc.select(e).on(A, a).on(y, f),
						_.push(e);
						for (var n = rc.event.changedTouches, r = 0, i = n.length; i > r; ++r) g[n[r].identifier] = null;
						var c = t(),
						s = Date.now();
						if (1 === c.length) {
							if (500 > s - m) {
								var u = c[0];
								o(d, u, g[u.identifier], Math.floor(Math.log(O.k) / Math.LN2) + 1),
								z()
							}
							m = s
						} else if (c.length > 1) {
							var u = c[0],
							l = c[1],
							p = u[0] - l[0],
							h = u[1] - l[1];
							b = p * p + h * h
						}
					}
					function a() {
						var t, e, n, o, a = rc.touches(d);
						Iu.call(d);
						for (var c = 0, u = a.length; u > c; ++c, o = null) if (n = a[c], o = g[n.identifier]) {
							if (e) break;
							t = n,
							e = o
						}
						if (o) {
							var l = (l = n[0] - t[0]) * l + (l = n[1] - t[1]) * l,
							p = b && Math.sqrt(l / b);
							t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2],
							e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2],
							r(p * h)
						}
						m = null,
						i(t, e),
						s(M)
					}
					function f() {
						if (rc.event.touches.length) {
							for (var e = rc.event.changedTouches, n = 0, r = e.length; r > n; ++n) delete g[e[n].identifier];
							for (var i in g) return void t()
						}
						rc.selectAll(_).on(v, null),
						T.on(x, l).on(E, p),
						L(),
						u(M)
					}
					var h, d = this,
					M = B.of(d, arguments),
					g = {},
					b = 0,
					v = ".zoom-" + rc.event.changedTouches[0].identifier,
					A = "touchmove" + v,
					y = "touchend" + v,
					_ = [],
					T = rc.select(d),
					L = G();
					n(),
					c(M),
					T.on(x, null).on(E, n)
				}
				function f() {
					var t = B.of(this, arguments);
					b ? clearTimeout(b) : (d = e(M = g || rc.mouse(this)), Iu.call(this), c(t)),
					b = setTimeout(function () {
						b = null,
						u(t)
					},
					50),
					z(),
					r(Math.pow(2, .002 * Vc()) * O.k),
					i(M, d),
					s(t)
				}
				function h() {
					var t = rc.mouse(this),
					n = Math.log(O.k) / Math.LN2;
					o(this, t, e(t), rc.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1)
				}
				var d, M, g, b, m, v, A, y, _, O = {
					x: 0,
					y: 0,
					k: 1
				},
				L = [960, 500],
				w = Gc,
				N = 250,
				q = 0,
				x = "mousedown.zoom",
				S = "mousemove.zoom",
				W = "mouseup.zoom",
				E = "touchstart.zoom",
				B = T(t, "zoomstart", "zoom", "zoomend");
				return t.event = function (t) {
					t.each(function () {
						var t = B.of(this, arguments),
						e = O;
						Du ? rc.select(this).transition().each("start.zoom", function () {
							O = this.__chart__ || {
								x: 0,
								y: 0,
								k: 1
							},
							c(t)
						}).tween("zoom:zoom", function () {
							var n = L[0],
							r = L[1],
							i = M ? M[0] : n / 2,
							o = M ? M[1] : r / 2,
							a = rc.interpolateZoom([(i - O.x) / O.k, (o - O.y) / O.k, n / O.k], [(i - e.x) / e.k, (o - e.y) / e.k, n / e.k]);
							return function (e) {
								var r = a(e),
								c = n / r[2];
								this.__chart__ = O = {
									x: i - r[0] * c,
									y: o - r[1] * c,
									k: c
								},
								s(t)
							}
						}).each("interrupt.zoom", function () {
							u(t)
						}).each("end.zoom", function () {
							u(t)
						}) : (this.__chart__ = O, c(t), s(t), u(t))
					})
				},
				t.translate = function (e) {
					return arguments.length ? (O = {
						x: +e[0],
						y: +e[1],
						k: O.k
					},
					a(), t) : [O.x, O.y]
				},
				t.scale = function (e) {
					return arguments.length ? (O = {
						x: O.x,
						y: O.y,
						k: +e
					},
					a(), t) : O.k
				},
				t.scaleExtent = function (e) {
					return arguments.length ? (w = null == e ? Gc: [ + e[0], +e[1]], t) : w
				},
				t.center = function (e) {
					return arguments.length ? (g = e && [ + e[0], +e[1]], t) : g
				},
				t.size = function (e) {
					return arguments.length ? (L = e && [ + e[0], +e[1]], t) : L
				},
				t.duration = function (e) {
					return arguments.length ? (N = +e, t) : N
				},
				t.x = function (e) {
					return arguments.length ? (A = e, v = e.copy(), O = {
						x: 0,
						y: 0,
						k: 1
					},
					t) : A
				},
				t.y = function (e) {
					return arguments.length ? (_ = e, y = e.copy(), O = {
						x: 0,
						y: 0,
						k: 1
					},
					t) : _
				},
				rc.rebind(t, B, "on")
			};
			var Vc, Gc = [0, 1 / 0],
			Yc = "onwheel" in ac ? (Vc = function () {
				return - rc.event.deltaY * (rc.event.deltaMode ? 120 : 1)
			},
			"wheel") : "onmousewheel" in ac ? (Vc = function () {
				return rc.event.wheelDelta
			},
			"mousewheel") : (Vc = function () {
				return - rc.event.detail
			},
			"MozMousePixelScroll");
			rc.color = ae,
			ae.prototype.toString = function () {
				return this.rgb() + ""
			},
			rc.hsl = ce;
			var Kc = ce.prototype = new ae;
			Kc.brighter = function (t) {
				return t = Math.pow(.7, arguments.length ? t: 1),
				new ce(this.h, this.s, this.l / t)
			},
			Kc.darker = function (t) {
				return t = Math.pow(.7, arguments.length ? t: 1),
				new ce(this.h, this.s, t * this.l)
			},
			Kc.rgb = function () {
				return se(this.h, this.s, this.l)
			},
			rc.hcl = ue;
			var $c = ue.prototype = new ae;
			$c.brighter = function (t) {
				return new ue(this.h, this.c, Math.min(100, this.l + Qc * (arguments.length ? t: 1)))
			},
			$c.darker = function (t) {
				return new ue(this.h, this.c, Math.max(0, this.l - Qc * (arguments.length ? t: 1)))
			},
			$c.rgb = function () {
				return le(this.h, this.c, this.l).rgb()
			},
			rc.lab = pe;
			var Qc = 18,
			Jc = .95047,
			Zc = 1,
			ts = 1.08883,
			es = pe.prototype = new ae;
			es.brighter = function (t) {
				return new pe(Math.min(100, this.l + Qc * (arguments.length ? t: 1)), this.a, this.b)
			},
			es.darker = function (t) {
				return new pe(Math.max(0, this.l - Qc * (arguments.length ? t: 1)), this.a, this.b)
			},
			es.rgb = function () {
				return fe(this.l, this.a, this.b)
			},
			rc.rgb = be;
			var ns = be.prototype = new ae;
			ns.brighter = function (t) {
				t = Math.pow(.7, arguments.length ? t: 1);
				var e = this.r,
				n = this.g,
				r = this.b,
				i = 30;
				return e || n || r ? (e && i > e && (e = i), n && i > n && (n = i), r && i > r && (r = i), new be(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new be(i, i, i)
			},
			ns.darker = function (t) {
				return t = Math.pow(.7, arguments.length ? t: 1),
				new be(t * this.r, t * this.g, t * this.b)
			},
			ns.hsl = function () {
				return ze(this.r, this.g, this.b)
			},
			ns.toString = function () {
				return "#" + Ae(this.r) + Ae(this.g) + Ae(this.b)
			};
			var rs = rc.map({
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgreen: 25600,
				darkgrey: 11119017,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				green: 32768,
				greenyellow: 11403055,
				grey: 8421504,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgreen: 9498256,
				lightgrey: 13882323,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074
			});
			rs.forEach(function (t, e) {
				rs.set(t, me(e))
			}),
			rc.functor = Le,
			rc.xhr = Ne(we),
			rc.dsv = function (t, e) {
				function n(t, n, o) {
					arguments.length < 3 && (o = n, n = null);
					var a = qe(t, e, null == n ? r: i(n), o);
					return a.row = function (t) {
						return arguments.length ? a.response(null == (n = t) ? r: i(t)) : n
					},
					a
				}
				function r(t) {
					return n.parse(t.responseText)
				}
				function i(t) {
					return function (e) {
						return n.parse(e.responseText, t)
					}
				}
				function o(e) {
					return e.map(a).join(t)
				}
				function a(t) {
					return c.test(t) ? '"' + t.replace(/\"/g, '""') + '"': t
				}
				var c = new RegExp('["' + t + "\n]"),
				s = t.charCodeAt(0);
				return n.parse = function (t, e) {
					var r;
					return n.parseRows(t, function (t, n) {
						if (r) return r(t, n - 1);
						var i = new Function("d", "return {" + t.map(function (t, e) {
							return JSON.stringify(t) + ": d[" + e + "]"
						}).join(",") + "}");
						r = e ?
						function (t, n) {
							return e(i(t), n)
						}: i
					})
				},
				n.parseRows = function (t, e) {
					function n() {
						if (l >= u) return a;
						if (i) return i = !1,
						o;
						var e = l;
						if (34 === t.charCodeAt(e)) {
							for (var n = e; n++<u;) if (34 === t.charCodeAt(n)) {
								if (34 !== t.charCodeAt(n + 1)) break; ++n
							}
							l = n + 2;
							var r = t.charCodeAt(n + 1);
							return 13 === r ? (i = !0, 10 === t.charCodeAt(n + 2) && ++l) : 10 === r && (i = !0),
							t.slice(e + 1, n).replace(/""/g, '"')
						}
						for (; u > l;) {
							var r = t.charCodeAt(l++),
							c = 1;
							if (10 === r) i = !0;
							else if (13 === r) i = !0,
							10 === t.charCodeAt(l) && (++l, ++c);
							else if (r !== s) continue;
							return t.slice(e, l - c)
						}
						return t.slice(e)
					}
					for (var r, i, o = {}, a = {}, c = [], u = t.length, l = 0, p = 0;
					(r = n()) !== a;) {
						for (var f = []; r !== o && r !== a;) f.push(r),
						r = n();
						e && null == (f = e(f, p++)) || c.push(f)
					}
					return c
				},
				n.format = function (e) {
					if (Array.isArray(e[0])) return n.formatRows(e);
					var r = new g,
					i = [];
					return e.forEach(function (t) {
						for (var e in t) r.has(e) || i.push(r.add(e))
					}),
					[i.map(a).join(t)].concat(e.map(function (e) {
						return i.map(function (t) {
							return a(e[t])
						}).join(t)
					})).join("\n")
				},
				n.formatRows = function (t) {
					return t.map(o).join("\n")
				},
				n
			},
			rc.csv = rc.dsv(",", "text/csv"),
			rc.tsv = rc.dsv("	", "text/tab-separated-values");
			var is, os, as, cs, ss, us = sc[m(sc, "requestAnimationFrame")] ||
			function (t) {
				setTimeout(t, 17)
			};
			rc.timer = function (t, e, n) {
				var r = arguments.length;
				2 > r && (e = 0),
				3 > r && (n = Date.now());
				var i = n + e,
				o = {
					c: t,
					t: i,
					f: !1,
					n: null
				};
				os ? os.n = o: is = o,
				os = o,
				as || (cs = clearTimeout(cs), as = 1, us(We))
			},
			rc.timer.flush = function () {
				Ee(),
				Be()
			},
			rc.round = function (t, e) {
				return e ? Math.round(t * (e = Math.pow(10, e))) / e: Math.round(t)
			};
			var ls = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Xe);
			rc.formatPrefix = function (t, e) {
				var n = 0;
				return t && (0 > t && (t *= -1), e && (t = rc.round(t, Ce(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max( - 24, Math.min(24, 3 * Math.floor((n - 1) / 3)))),
				ls[8 + n / 3]
			};
			var ps = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
			fs = rc.map({
				b: function (t) {
					return t.toString(2)
				},
				c: function (t) {
					return String.fromCharCode(t)
				},
				o: function (t) {
					return t.toString(8)
				},
				x: function (t) {
					return t.toString(16)
				},
				X: function (t) {
					return t.toString(16).toUpperCase()
				},
				g: function (t, e) {
					return t.toPrecision(e)
				},
				e: function (t, e) {
					return t.toExponential(e)
				},
				f: function (t, e) {
					return t.toFixed(e)
				},
				r: function (t, e) {
					return (t = rc.round(t, Ce(t, e))).toFixed(Math.max(0, Math.min(20, Ce(t * (1 + 1e-15), e))))
				}
			}),
			hs = rc.time = {},
			ds = Date;
			De.prototype = {
				getDate: function () {
					return this._.getUTCDate()
				},
				getDay: function () {
					return this._.getUTCDay()
				},
				getFullYear: function () {
					return this._.getUTCFullYear()
				},
				getHours: function () {
					return this._.getUTCHours()
				},
				getMilliseconds: function () {
					return this._.getUTCMilliseconds()
				},
				getMinutes: function () {
					return this._.getUTCMinutes()
				},
				getMonth: function () {
					return this._.getUTCMonth()
				},
				getSeconds: function () {
					return this._.getUTCSeconds()
				},
				getTime: function () {
					return this._.getTime()
				},
				getTimezoneOffset: function () {
					return 0
				},
				valueOf: function () {
					return this._.valueOf()
				},
				setDate: function () {
					Ms.setUTCDate.apply(this._, arguments)
				},
				setDay: function () {
					Ms.setUTCDay.apply(this._, arguments)
				},
				setFullYear: function () {
					Ms.setUTCFullYear.apply(this._, arguments)
				},
				setHours: function () {
					Ms.setUTCHours.apply(this._, arguments)
				},
				setMilliseconds: function () {
					Ms.setUTCMilliseconds.apply(this._, arguments)
				},
				setMinutes: function () {
					Ms.setUTCMinutes.apply(this._, arguments)
				},
				setMonth: function () {
					Ms.setUTCMonth.apply(this._, arguments)
				},
				setSeconds: function () {
					Ms.setUTCSeconds.apply(this._, arguments)
				},
				setTime: function () {
					Ms.setTime.apply(this._, arguments)
				}
			};
			var Ms = Date.prototype;
			hs.year = Pe(function (t) {
				return t = hs.day(t),
				t.setMonth(0, 1),
				t
			},
			function (t, e) {
				t.setFullYear(t.getFullYear() + e)
			},
			function (t) {
				return t.getFullYear()
			}),
			hs.years = hs.year.range,
			hs.years.utc = hs.year.utc.range,
			hs.day = Pe(function (t) {
				var e = new ds(2e3, 0);
				return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
				e
			},
			function (t, e) {
				t.setDate(t.getDate() + e)
			},
			function (t) {
				return t.getDate() - 1
			}),
			hs.days = hs.day.range,
			hs.days.utc = hs.day.utc.range,
			hs.dayOfYear = function (t) {
				var e = hs.year(t);
				return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
			},
			["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (t, e) {
				e = 7 - e;
				var n = hs[t] = Pe(function (t) {
					return (t = hs.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7),
					t
				},
				function (t, e) {
					t.setDate(t.getDate() + 7 * Math.floor(e))
				},
				function (t) {
					var n = hs.year(t).getDay();
					return Math.floor((hs.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
				});
				hs[t + "s"] = n.range,
				hs[t + "s"].utc = n.utc.range,
				hs[t + "OfYear"] = function (t) {
					var n = hs.year(t).getDay();
					return Math.floor((hs.dayOfYear(t) + (n + e) % 7) / 7)
				}
			}),
			hs.week = hs.sunday,
			hs.weeks = hs.sunday.range,
			hs.weeks.utc = hs.sunday.utc.range,
			hs.weekOfYear = hs.sundayOfYear;
			var gs = {
				"-": "",
				_: " ",
				0 : "0"
			},
			bs = /^\s*\d+/,
			ms = /^%/;
			rc.locale = function (t) {
				return {
					numberFormat: Re(t),
					timeFormat: je(t)
				}
			};
			var vs = rc.locale({
				decimal: ".",
				thousands: ",",
				grouping: [3],
				currency: ["$", ""],
				dateTime: "%a %b %e %X %Y",
				date: "%m/%d/%Y",
				time: "%H:%M:%S",
				periods: ["AM", "PM"],
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
			});
			rc.format = vs.numberFormat,
			rc.geo = {},
			ln.prototype = {
				s: 0,
				t: 0,
				add: function (t) {
					pn(t, this.t, As),
					pn(As.s, this.s, this),
					this.s ? this.t += As.t: this.s = As.t
				},
				reset: function () {
					this.s = this.t = 0
				},
				valueOf: function () {
					return this.s
				}
			};
			var As = new ln;
			rc.geo.stream = function (t, e) {
				t && ys.hasOwnProperty(t.type) ? ys[t.type](t, e) : fn(t, e)
			};
			var ys = {
				Feature: function (t, e) {
					fn(t.geometry, e)
				},
				FeatureCollection: function (t, e) {
					for (var n = t.features, r = -1, i = n.length; ++r < i;) fn(n[r].geometry, e)
				}
			},
			zs = {
				Sphere: function (t, e) {
					e.sphere()
				},
				Point: function (t, e) {
					t = t.coordinates,
					e.point(t[0], t[1], t[2])
				},
				MultiPoint: function (t, e) {
					for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r],
					e.point(t[0], t[1], t[2])
				},
				LineString: function (t, e) {
					hn(t.coordinates, e, 0)
				},
				MultiLineString: function (t, e) {
					for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) hn(n[r], e, 0)
				},
				Polygon: function (t, e) {
					dn(t.coordinates, e)
				},
				MultiPolygon: function (t, e) {
					for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) dn(n[r], e)
				},
				GeometryCollection: function (t, e) {
					for (var n = t.geometries, r = -1, i = n.length; ++r < i;) fn(n[r], e)
				}
			};
			rc.geo.area = function (t) {
				return _s = 0,
				rc.geo.stream(t, Os),
				_s
			};
			var _s, Ts = new ln,
			Os = {
				sphere: function () {
					_s += 4 * Rc
				},
				point: v,
				lineStart: v,
				lineEnd: v,
				polygonStart: function () {
					Ts.reset(),
					Os.lineStart = Mn
				},
				polygonEnd: function () {
					var t = 2 * Ts;
					_s += 0 > t ? 4 * Rc + t: t,
					Os.lineStart = Os.lineEnd = Os.point = v
				}
			};
			rc.geo.bounds = function () {
				function t(t, e) {
					v.push(A = [l = t, f = t]),
					p > e && (p = e),
					e > h && (h = e)
				}
				function e(e, n) {
					var r = gn([e * Ic, n * Ic]);
					if (b) {
						var i = mn(b, r),
						o = [i[1], -i[0], 0],
						a = mn(o, i);
						yn(a),
						a = zn(a);
						var s = e - d,
						u = s > 0 ? 1 : -1,
						M = a[0] * jc * u,
						g = bc(s) > 180;
						if (g ^ (M > u * d && u * e > M)) {
							var m = a[1] * jc;
							m > h && (h = m)
						} else if (M = (M+360)%360-180,g^(M>u*d&&u*e>M)) {
							var m = -a[1] * jc;
							p > m && (p = m)
						} else p > n && (p = n),
						n > h && (h = n);
						g ? d > e ? c(l, e) > c(l, f) && (f = e) : c(e, f) > c(l, f) && (l = e) : f >= l ? (l > e && (l = e), e > f && (f = e)) : e > d ? c(l, e) > c(l, f) && (f = e) : c(e, f) > c(l, f) && (l = e)
					} else t(e, n);
					b = r,
					d = e
				}
				function n() {
					y.point = e
				}
				function r() {
					A[0] = l,
					A[1] = f,
					y.point = t,
					b = null
				}
				function i(t, n) {
					if (b) {
						var r = t - d;
						m += bc(r) > 180 ? r + (r > 0 ? 360 : -360) : r
					} else M = t,
					g = n;
					Os.point(t, n),
					e(t, n)
				}
				function o() {
					Os.lineStart()
				}
				function a() {
					i(M, g),
					Os.lineEnd(),
					bc(m) > Cc && (l = -(f = 180)),
					A[0] = l,
					A[1] = f,
					b = null
				}
				function c(t, e) {
					return (e -= t) < 0 ? e + 360 : e
				}
				function s(t, e) {
					return t[0] - e[0]
				}
				function u(t, e) {
					return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
				}
				var l, p, f, h, d, M, g, b, m, v, A, y = {
					point: t,
					lineStart: n,
					lineEnd: r,
					polygonStart: function () {
						y.point = i,
						y.lineStart = o,
						y.lineEnd = a,
						m = 0,
						Os.polygonStart()
					},
					polygonEnd: function () {
						Os.polygonEnd(),
						y.point = t,
						y.lineStart = n,
						y.lineEnd = r,
						0 > Ts ? (l = -(f = 180), p = -(h = 90)) : m > Cc ? h = 90 : -Cc > m && (p = -90),
						A[0] = l,
						A[1] = f
					}
				};
				return function (t) {
					h = f = -(l = p = 1 / 0),
					v = [],
					rc.geo.stream(t, y);
					var e = v.length;
					if (e) {
						v.sort(s);
						for (var n, r = 1, i = v[0], o = [i]; e > r; ++r) n = v[r],
						u(n[0], i) || u(n[1], i) ? (c(i[0], n[1]) > c(i[0], i[1]) && (i[1] = n[1]), c(n[0], i[1]) > c(i[0], i[1]) && (i[0] = n[0])) : o.push(i = n);
						for (var a, n, d = -1 / 0, e = o.length - 1, r = 0, i = o[e]; e >= r; i = n, ++r) n = o[r],
						(a = c(i[1], n[0])) > d && (d = a, l = n[0], f = i[1])
					}
					return v = A = null,
					1 / 0 === l || 1 / 0 === p ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[l, p], [f, h]]
				}
			} (),
			rc.geo.centroid = function (t) {
				Ls = ws = Ns = qs = xs = Ss = Ws = Es = Bs = Cs = Xs = 0,
				rc.geo.stream(t, Rs);
				var e = Bs,
				n = Cs,
				r = Xs,
				i = e * e + n * n + r * r;
				return Xc > i && (e = Ss, n = Ws, r = Es, Cc > ws && (e = Ns, n = qs, r = xs), i = e * e + n * n + r * r, Xc > i) ? [0 / 0, 0 / 0] : [Math.atan2(n, e) * jc, ee(r / Math.sqrt(i)) * jc]
			};
			var Ls, ws, Ns, qs, xs, Ss, Ws, Es, Bs, Cs, Xs, Rs = {
				sphere: v,
				point: Tn,
				lineStart: Ln,
				lineEnd: wn,
				polygonStart: function () {
					Rs.lineStart = Nn
				},
				polygonEnd: function () {
					Rs.lineStart = Ln
				}
			},
			ks = Bn(xn, kn, Pn, [ - Rc, -Rc / 2]),
			Ds = 1e9;
			rc.geo.clipExtent = function () {
				var t, e, n, r, i, o, a = {
					stream: function (t) {
						return i && (i.valid = !1),
						i = o(t),
						i.valid = !0,
						i
					},
					extent: function (c) {
						return arguments.length ? (o = Un(t = +c[0][0], e = +c[0][1], n = +c[1][0], r = +c[1][1]), i && (i.valid = !1, i = null), a) : [[t, e], [n, r]]
					}
				};
				return a.extent([[0, 0], [960, 500]])
			},
			(rc.geo.conicEqualArea = function () {
				return Fn(Vn)
			}).raw = Vn,
			rc.geo.albers = function () {
				return rc.geo.conicEqualArea().rotate([96, 0]).center([ - .6, 38.7]).parallels([29.5, 45.5]).scale(1070)
			},
			rc.geo.albersUsa = function () {
				function t(t) {
					var o = t[0],
					a = t[1];
					return e = null,
					n(o, a),
					e || (r(o, a), e) || i(o, a),
					e
				}
				var e, n, r, i, o = rc.geo.albers(),
				a = rc.geo.conicEqualArea().rotate([154, 0]).center([ - 2, 58.5]).parallels([55, 65]),
				c = rc.geo.conicEqualArea().rotate([157, 0]).center([ - 3, 19.9]).parallels([8, 18]),
				s = {
					point: function (t, n) {
						e = [t, n]
					}
				};
				return t.invert = function (t) {
					var e = o.scale(),
					n = o.translate(),
					r = (t[0] - n[0]) / e,
					i = (t[1] - n[1]) / e;
					return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? a: i >= .166 && .234 > i && r >= -.214 && -.115 > r ? c: o).invert(t)
				},
				t.stream = function (t) {
					var e = o.stream(t),
					n = a.stream(t),
					r = c.stream(t);
					return {
						point: function (t, i) {
							e.point(t, i),
							n.point(t, i),
							r.point(t, i)
						},
						sphere: function () {
							e.sphere(),
							n.sphere(),
							r.sphere()
						},
						lineStart: function () {
							e.lineStart(),
							n.lineStart(),
							r.lineStart()
						},
						lineEnd: function () {
							e.lineEnd(),
							n.lineEnd(),
							r.lineEnd()
						},
						polygonStart: function () {
							e.polygonStart(),
							n.polygonStart(),
							r.polygonStart()
						},
						polygonEnd: function () {
							e.polygonEnd(),
							n.polygonEnd(),
							r.polygonEnd()
						}
					}
				},
				t.precision = function (e) {
					return arguments.length ? (o.precision(e), a.precision(e), c.precision(e), t) : o.precision()
				},
				t.scale = function (e) {
					return arguments.length ? (o.scale(e), a.scale(.35 * e), c.scale(e), t.translate(o.translate())) : o.scale()
				},
				t.translate = function (e) {
					if (!arguments.length) return o.translate();
					var u = o.scale(),
					l = +e[0],
					p = +e[1];
					return n = o.translate(e).clipExtent([[l - .455 * u, p - .238 * u], [l + .455 * u, p + .238 * u]]).stream(s).point,
					r = a.translate([l - .307 * u, p + .201 * u]).clipExtent([[l - .425 * u + Cc, p + .12 * u + Cc], [l - .214 * u - Cc, p + .234 * u - Cc]]).stream(s).point,
					i = c.translate([l - .205 * u, p + .212 * u]).clipExtent([[l - .214 * u + Cc, p + .166 * u + Cc], [l - .115 * u - Cc, p + .234 * u - Cc]]).stream(s).point,
					t
				},
				t.scale(1070)
			};
			var Ps, Is, js, Hs, Us, Fs, Vs = {
				point: v,
				lineStart: v,
				lineEnd: v,
				polygonStart: function () {
					Is = 0,
					Vs.lineStart = Gn
				},
				polygonEnd: function () {
					Vs.lineStart = Vs.lineEnd = Vs.point = v,
					Ps += bc(Is / 2)
				}
			},
			Gs = {
				point: Yn,
				lineStart: v,
				lineEnd: v,
				polygonStart: v,
				polygonEnd: v
			},
			Ys = {
				point: Qn,
				lineStart: Jn,
				lineEnd: Zn,
				polygonStart: function () {
					Ys.lineStart = tr
				},
				polygonEnd: function () {
					Ys.point = Qn,
					Ys.lineStart = Jn,
					Ys.lineEnd = Zn
				}
			};
			rc.geo.path = function () {
				function t(t) {
					return t && ("function" == typeof c && o.pointRadius( + c.apply(this, arguments)), a && a.valid || (a = i(o)), rc.geo.stream(t, a)),
					o.result()
				}
				function e() {
					return a = null,
					t
				}
				var n, r, i, o, a, c = 4.5;
				return t.area = function (t) {
					return Ps = 0,
					rc.geo.stream(t, i(Vs)),
					Ps
				},
				t.centroid = function (t) {
					return Ns = qs = xs = Ss = Ws = Es = Bs = Cs = Xs = 0,
					rc.geo.stream(t, i(Ys)),
					Xs ? [Bs / Xs, Cs / Xs] : Es ? [Ss / Es, Ws / Es] : xs ? [Ns / xs, qs / xs] : [0 / 0, 0 / 0]
				},
				t.bounds = function (t) {
					return Us = Fs = -(js = Hs = 1 / 0),
					rc.geo.stream(t, i(Gs)),
					[[js, Hs], [Us, Fs]]
				},
				t.projection = function (t) {
					return arguments.length ? (i = (n = t) ? t.stream || rr(t) : we, e()) : n
				},
				t.context = function (t) {
					return arguments.length ? (o = null == (r = t) ? new Kn: new er(t), "function" != typeof c && o.pointRadius(c), e()) : r
				},
				t.pointRadius = function (e) {
					return arguments.length ? (c = "function" == typeof e ? e: (o.pointRadius( + e), +e), t) : c
				},
				t.projection(rc.geo.albersUsa()).context(null)
			},
			rc.geo.transform = function (t) {
				return {
					stream: function (e) {
						var n = new ir(e);
						for (var r in t) n[r] = t[r];
						return n
					}
				}
			},
			ir.prototype = {
				point: function (t, e) {
					this.stream.point(t, e)
				},
				sphere: function () {
					this.stream.sphere()
				},
				lineStart: function () {
					this.stream.lineStart()
				},
				lineEnd: function () {
					this.stream.lineEnd()
				},
				polygonStart: function () {
					this.stream.polygonStart()
				},
				polygonEnd: function () {
					this.stream.polygonEnd()
				}
			},
			rc.geo.projection = ar,
			rc.geo.projectionMutator = cr,
			(rc.geo.equirectangular = function () {
				return ar(ur)
			}).raw = ur.invert = ur,
			rc.geo.rotation = function (t) {
				function e(e) {
					return e = t(e[0] * Ic, e[1] * Ic),
					e[0] *= jc,
					e[1] *= jc,
					e
				}
				return t = pr(t[0]%360*Ic,t[1]*Ic,t.length>2?t[2]*Ic:0),
				e.invert = function (e) {
					return e = t.invert(e[0] * Ic, e[1] * Ic),
					e[0] *= jc,
					e[1] *= jc,
					e
				},
				e
			},
			lr.invert = ur,
			rc.geo.circle = function () {
				function t() {
					var t = "function" == typeof r ? r.apply(this, arguments) : r,
					e = pr( - t[0] * Ic, -t[1] * Ic, 0).invert,
					i = [];
					return n(null, null, 1, {
						point: function (t, n) {
							i.push(t = e(t, n)),
							t[0] *= jc,
							t[1] *= jc
						}
					}),
					{
						type: "Polygon",
						coordinates: [i]
					}
				}
				var e, n, r = [0, 0],
				i = 6;
				return t.origin = function (e) {
					return arguments.length ? (r = e, t) : r
				},
				t.angle = function (r) {
					return arguments.length ? (n = Mr((e = +r) * Ic, i * Ic), t) : e
				},
				t.precision = function (r) {
					return arguments.length ? (n = Mr(e * Ic, (i = +r) * Ic), t) : i
				},
				t.angle(90)
			},
			rc.geo.distance = function (t, e) {
				var n, r = (e[0] - t[0]) * Ic,
				i = t[1] * Ic,
				o = e[1] * Ic,
				a = Math.sin(r),
				c = Math.cos(r),
				s = Math.sin(i),
				u = Math.cos(i),
				l = Math.sin(o),
				p = Math.cos(o);
				return Math.atan2(Math.sqrt((n = p * a) * n + (n = u * l - s * p * c) * n), s * l + u * p * c)
			},
			rc.geo.graticule = function () {
				function t() {
					return {
						type: "MultiLineString",
						coordinates: e()
					}
				}
				function e() {
					return rc.range(Math.ceil(o / g) * g, i, g).map(f).concat(rc.range(Math.ceil(u / b) * b, s, b).map(h)).concat(rc.range(Math.ceil(r / d) * d, n, d).filter(function (t) {
						return bc(t % g) > Cc
					}).map(l)).concat(rc.range(Math.ceil(c / M) * M, a, M).filter(function (t) {
						return bc(t % b) > Cc
					}).map(p))
				}
				var n, r, i, o, a, c, s, u, l, p, f, h, d = 10,
				M = d,
				g = 90,
				b = 360,
				m = 2.5;
				return t.lines = function () {
					return e().map(function (t) {
						return {
							type: "LineString",
							coordinates: t
						}
					})
				},
				t.outline = function () {
					return {
						type: "Polygon",
						coordinates: [f(o).concat(h(s).slice(1), f(i).reverse().slice(1), h(u).reverse().slice(1))]
					}
				},
				t.extent = function (e) {
					return arguments.length ? t.majorExtent(e).minorExtent(e) : t.minorExtent()
				},
				t.majorExtent = function (e) {
					return arguments.length ? (o = +e[0][0], i = +e[1][0], u = +e[0][1], s = +e[1][1], o > i && (e = o, o = i, i = e), u > s && (e = u, u = s, s = e), t.precision(m)) : [[o, u], [i, s]]
				},
				t.minorExtent = function (e) {
					return arguments.length ? (r = +e[0][0], n = +e[1][0], c = +e[0][1], a = +e[1][1], r > n && (e = r, r = n, n = e), c > a && (e = c, c = a, a = e), t.precision(m)) : [[r, c], [n, a]]
				},
				t.step = function (e) {
					return arguments.length ? t.majorStep(e).minorStep(e) : t.minorStep()
				},
				t.majorStep = function (e) {
					return arguments.length ? (g = +e[0], b = +e[1], t) : [g, b]
				},
				t.minorStep = function (e) {
					return arguments.length ? (d = +e[0], M = +e[1], t) : [d, M]
				},
				t.precision = function (e) {
					return arguments.length ? (m = +e, l = br(c, a, 90), p = mr(r, n, m), f = br(u, s, 90), h = mr(o, i, m), t) : m
				},
				t.majorExtent([[ - 180, -90 + Cc], [180, 90 - Cc]]).minorExtent([[ - 180, -80 - Cc], [180, 80 + Cc]])
			},
			rc.geo.greatArc = function () {
				function t() {
					return {
						type: "LineString",
						coordinates: [e || r.apply(this, arguments), n || i.apply(this, arguments)]
					}
				}
				var e, n, r = vr,
				i = Ar;
				return t.distance = function () {
					return rc.geo.distance(e || r.apply(this, arguments), n || i.apply(this, arguments))
				},
				t.source = function (n) {
					return arguments.length ? (r = n, e = "function" == typeof n ? null: n, t) : r
				},
				t.target = function (e) {
					return arguments.length ? (i = e, n = "function" == typeof e ? null: e, t) : i
				},
				t.precision = function () {
					return arguments.length ? t: 0
				},
				t
			},
			rc.geo.interpolate = function (t, e) {
				return yr(t[0] * Ic, t[1] * Ic, e[0] * Ic, e[1] * Ic)
			},
			rc.geo.length = function (t) {
				return Ks = 0,
				rc.geo.stream(t, $s),
				Ks
			};
			var Ks, $s = {
				sphere: v,
				point: v,
				lineStart: zr,
				lineEnd: v,
				polygonStart: v,
				polygonEnd: v
			},
			Qs = _r(function (t) {
				return Math.sqrt(2 / (1 + t))
			},
			function (t) {
				return 2 * Math.asin(t / 2)
			});
			(rc.geo.azimuthalEqualArea = function () {
				return ar(Qs)
			}).raw = Qs;
			var Js = _r(function (t) {
				var e = Math.acos(t);
				return e && e / Math.sin(e)
			},
			we);
			(rc.geo.azimuthalEquidistant = function () {
				return ar(Js)
			}).raw = Js,
			(rc.geo.conicConformal = function () {
				return Fn(Tr)
			}).raw = Tr,
			(rc.geo.conicEquidistant = function () {
				return Fn(Or)
			}).raw = Or;
			var Zs = _r(function (t) {
				return 1 / t
			},
			Math.atan);
			(rc.geo.gnomonic = function () {
				return ar(Zs)
			}).raw = Zs,
			Lr.invert = function (t, e) {
				return [t, 2 * Math.atan(Math.exp(e)) - Pc]
			},
			(rc.geo.mercator = function () {
				return wr(Lr)
			}).raw = Lr;
			var tu = _r(function () {
				return 1
			},
			Math.asin);
			(rc.geo.orthographic = function () {
				return ar(tu)
			}).raw = tu;
			var eu = _r(function (t) {
				return 1 / (1 + t)
			},
			function (t) {
				return 2 * Math.atan(t)
			});
			(rc.geo.stereographic = function () {
				return ar(eu)
			}).raw = eu,
			Nr.invert = function (t, e) {
				return [ - e, 2 * Math.atan(Math.exp(t)) - Pc]
			},
			(rc.geo.transverseMercator = function () {
				var t = wr(Nr),
				e = t.center,
				n = t.rotate;
				return t.center = function (t) {
					return t ? e([ - t[1], t[0]]) : (t = e(), [t[1], -t[0]])
				},
				t.rotate = function (t) {
					return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = n(), [t[0], t[1], t[2] - 90])
				},
				n([0, 0, 90])
			}).raw = Nr,
			rc.geom = {},
			rc.geom.hull = function (t) {
				function e(t) {
					if (t.length < 3) return [];
					var e, i = Le(n),
					o = Le(r),
					a = t.length,
					c = [],
					s = [];
					for (e = 0; a > e; e++) c.push([ + i.call(this, t[e], e), +o.call(this, t[e], e), e]);
					for (c.sort(Wr), e = 0; a > e; e++) s.push([c[e][0], -c[e][1]]);
					var u = Sr(c),
					l = Sr(s),
					p = l[0] === u[0],
					f = l[l.length - 1] === u[u.length - 1],
					h = [];
					for (e = u.length - 1; e >= 0; --e) h.push(t[c[u[e]][2]]);
					for (e = +p; e < l.length - f; ++e) h.push(t[c[l[e]][2]]);
					return h
				}
				var n = qr,
				r = xr;
				return arguments.length ? e(t) : (e.x = function (t) {
					return arguments.length ? (n = t, e) : n
				},
				e.y = function (t) {
					return arguments.length ? (r = t, e) : r
				},
				e)
			},
			rc.geom.polygon = function (t) {
				return zc(t, nu),
				t
			};
			var nu = rc.geom.polygon.prototype = [];
			nu.area = function () {
				for (var t, e = -1, n = this.length, r = this[n - 1], i = 0; ++e < n;) t = r,
				r = this[e],
				i += t[1] * r[0] - t[0] * r[1];
				return.5 * i
			},
			nu.centroid = function (t) {
				var e, n, r = -1,
				i = this.length,
				o = 0,
				a = 0,
				c = this[i - 1];
				for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) e = c,
				c = this[r],
				n = e[0] * c[1] - c[0] * e[1],
				o += (e[0] + c[0]) * n,
				a += (e[1] + c[1]) * n;
				return [o * t, a * t]
			},
			nu.clip = function (t) {
				for (var e, n, r, i, o, a, c = Cr(t), s = -1, u = this.length - Cr(this), l = this[u - 1]; ++s < u;) {
					for (e = t.slice(), t.length = 0, i = this[s], o = e[(r = e.length - c) - 1], n = -1; ++n < r;) a = e[n],
					Er(a, l, i) ? (Er(o, l, i) || t.push(Br(o, a, l, i)), t.push(a)) : Er(o, l, i) && t.push(Br(o, a, l, i)),
					o = a;
					c && t.push(t[0]),
					l = i
				}
				return t
			};
			var ru, iu, ou, au, cu, su = [],
			uu = [];
			Hr.prototype.prepare = function () {
				for (var t, e = this.edges, n = e.length; n--;) t = e[n].edge,
				t.b && t.a || e.splice(n, 1);
				return e.sort(Fr),
				e.length
			},
			ei.prototype = {
				start: function () {
					return this.edge.l === this.site ? this.edge.a: this.edge.b
				},
				end: function () {
					return this.edge.l === this.site ? this.edge.b: this.edge.a
				}
			},
			ni.prototype = {
				insert: function (t, e) {
					var n, r, i;
					if (t) {
						if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
							for (t = t.R; t.L;) t = t.L;
							t.L = e
						} else t.R = e;
						n = t
					} else this._ ? (t = ai(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
					for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) r = n.U,
					n === r.L ? (i = r.R, i && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (ii(this, n), t = n, n = t.U), n.C = !1, r.C = !0, oi(this, r))) : (i = r.L, i && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (oi(this, n), t = n, n = t.U), n.C = !1, r.C = !0, ii(this, r))),
					n = t.U;
					this._.C = !1
				},
				remove: function (t) {
					t.N && (t.N.P = t.P),
					t.P && (t.P.N = t.N),
					t.N = t.P = null;
					var e, n, r, i = t.U,
					o = t.L,
					a = t.R;
					if (n = o ? a ? ai(a) : o: a, i ? i.L === t ? i.L = n: i.R = n: this._ = n, o && a ? (r = n.C, n.C = t.C, n.L = o, o.U = n, n !== a ? (i = n.U, n.U = t.U, t = n.R, i.L = t, n.R = a, a.U = n) : (n.U = i, i = n, t = n.R)) : (r = t.C, t = n), t && (t.U = i), !r) {
						if (t && t.C) return void(t.C = !1);
						do {
							if (t === this._) break;
							if (t === i.L) {
								if (e = i.R, e.C && (e.C = !1, i.C = !0, ii(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
									e.R && e.R.C || (e.L.C = !1, e.C = !0, oi(this, e), e = i.R),
									e.C = i.C,
									i.C = e.R.C = !1,
									ii(this, i),
									t = this._;
									break
								}
							} else if (e = i.L, e.C && (e.C = !1, i.C = !0, oi(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
								e.L && e.L.C || (e.R.C = !1, e.C = !0, ii(this, e), e = i.L),
								e.C = i.C,
								i.C = e.L.C = !1,
								oi(this, i),
								t = this._;
								break
							}
							e.C = !0, t = i, i = i.U
						} while (!t.C);
						t && (t.C = !1)
					}
				}
			},
			rc.geom.voronoi = function (t) {
				function e(t) {
					var e = new Array(t.length),
					r = c[0][0],
					i = c[0][1],
					o = c[1][0],
					a = c[1][1];
					return ci(n(t), c).cells.forEach(function (n, c) {
						var s = n.edges,
						u = n.site,
						l = e[c] = s.length ? s.map(function (t) {
							var e = t.start();
							return [e.x, e.y]
						}) : u.x >= r && u.x <= o && u.y >= i && u.y <= a ? [[r, a], [o, a], [o, i], [r, i]] : [];
						l.point = t[c]
					}),
					e
				}
				function n(t) {
					return t.map(function (t, e) {
						return {
							x: Math.round(o(t, e) / Cc) * Cc,
							y: Math.round(a(t, e) / Cc) * Cc,
							i: e
						}
					})
				}
				var r = qr,
				i = xr,
				o = r,
				a = i,
				c = lu;
				return t ? e(t) : (e.links = function (t) {
					return ci(n(t)).edges.filter(function (t) {
						return t.l && t.r
					}).map(function (e) {
						return {
							source: t[e.l.i],
							target: t[e.r.i]
						}
					})
				},
				e.triangles = function (t) {
					var e = [];
					return ci(n(t)).cells.forEach(function (n, r) {
						for (var i, o, a = n.site, c = n.edges.sort(Fr), s = -1, u = c.length, l = c[u - 1].edge, p = l.l === a ? l.r: l.l; ++s < u;) i = l,
						o = p,
						l = c[s].edge,
						p = l.l === a ? l.r: l.l,
						r < o.i && r < p.i && ui(a, o, p) < 0 && e.push([t[r], t[o.i], t[p.i]])
					}),
					e
				},
				e.x = function (t) {
					return arguments.length ? (o = Le(r = t), e) : r
				},
				e.y = function (t) {
					return arguments.length ? (a = Le(i = t), e) : i
				},
				e.clipExtent = function (t) {
					return arguments.length ? (c = null == t ? lu: t, e) : c === lu ? null: c
				},
				e.size = function (t) {
					return arguments.length ? e.clipExtent(t && [[0, 0], t]) : c === lu ? null: c && c[1]
				},
				e)
			};
			var lu = [[ - 1e6, -1e6], [1e6, 1e6]];
			rc.geom.delaunay = function (t) {
				return rc.geom.voronoi().triangles(t)
			},
			rc.geom.quadtree = function (t, e, n, r, i) {
				function o(t) {
					function o(t, e, n, r, i, o, a, c) {
						if (!isNaN(n) && !isNaN(r)) if (t.leaf) {
							var s = t.x,
							l = t.y;
							if (null != s) if (bc(s - n) + bc(l - r) < .01) u(t, e, n, r, i, o, a, c);
							else {
								var p = t.point;
								t.x = t.y = t.point = null,
								u(t, p, s, l, i, o, a, c),
								u(t, e, n, r, i, o, a, c)
							} else t.x = n,
							t.y = r,
							t.point = e
						} else u(t, e, n, r, i, o, a, c)
					}
					function u(t, e, n, r, i, a, c, s) {
						var u = .5 * (i + c),
						l = .5 * (a + s),
						p = n >= u,
						f = r >= l,
						h = f << 1 | p;
						t.leaf = !1,
						t = t.nodes[h] || (t.nodes[h] = fi()),
						p ? i = u: c = u,
						f ? a = l: s = l,
						o(t, e, n, r, i, a, c, s)
					}
					var l, p, f, h, d, M, g, b, m, v = Le(c),
					A = Le(s);
					if (null != e) M = e,
					g = n,
					b = r,
					m = i;
					else if (b = m = -(M = g = 1 / 0), p = [], f = [], d = t.length, a) for (h = 0; d > h; ++h) l = t[h],
					l.x < M && (M = l.x),
					l.y < g && (g = l.y),
					l.x > b && (b = l.x),
					l.y > m && (m = l.y),
					p.push(l.x),
					f.push(l.y);
					else for (h = 0; d > h; ++h) {
						var y = +v(l = t[h], h),
						z = +A(l, h);
						M > y && (M = y),
						g > z && (g = z),
						y > b && (b = y),
						z > m && (m = z),
						p.push(y),
						f.push(z)
					}
					var _ = b - M,
					T = m - g;
					_ > T ? m = g + _: b = M + T;
					var O = fi();
					if (O.add = function (t) {
						o(O, t, +v(t, ++h), +A(t, h), M, g, b, m)
					},
					O.visit = function (t) {
						hi(t, O, M, g, b, m)
					},
					O.find = function (t) {
						return di(O, t[0], t[1], M, g, b, m)
					},
					h = -1, null == e) {
						for (; ++h < d;) o(O, t[h], p[h], f[h], M, g, b, m); --h
					} else t.forEach(O.add);
					return p = f = t = l = null,
					O
				}
				var a, c = qr,
				s = xr;
				return (a = arguments.length) ? (c = li, s = pi, 3 === a && (i = n, r = e, n = e = 0), o(t)) : (o.x = function (t) {
					return arguments.length ? (c = t, o) : c
				},
				o.y = function (t) {
					return arguments.length ? (s = t, o) : s
				},
				o.extent = function (t) {
					return arguments.length ? (null == t ? e = n = r = i = null: (e = +t[0][0], n = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == e ? null: [[e, n], [r, i]]
				},
				o.size = function (t) {
					return arguments.length ? (null == t ? e = n = r = i = null: (e = n = 0, r = +t[0], i = +t[1]), o) : null == e ? null: [r - e, i - n]
				},
				o)
			},
			rc.interpolateRgb = Mi,
			rc.interpolateObject = gi,
			rc.interpolateNumber = bi,
			rc.interpolateString = mi;
			var pu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
			fu = new RegExp(pu.source, "g");
			rc.interpolate = vi,
			rc.interpolators = [function (t, e) {
				var n = typeof e;
				return ("string" === n ? rs.has(e) || /^(#|rgb\(|hsl\()/.test(e) ? Mi: mi: e instanceof ae ? Mi: Array.isArray(e) ? Ai: "object" === n && isNaN(e) ? gi: bi)(t, e)
			}],
			rc.interpolateArray = Ai;
			var hu = function () {
				return we
			},
			du = rc.map({
				linear: hu,
				poly: wi,
				quad: function () {
					return Ti
				},
				cubic: function () {
					return Oi
				},
				sin: function () {
					return Ni
				},
				exp: function () {
					return qi
				},
				circle: function () {
					return xi
				},
				elastic: Si,
				back: Wi,
				bounce: function () {
					return Ei
				}
			}),
			Mu = rc.map({
				"in": we,
				out: zi,
				"in-out": _i,
				"out-in": function (t) {
					return _i(zi(t))
				}
			});
			rc.ease = function (t) {
				var e = t.indexOf("-"),
				n = e >= 0 ? t.slice(0, e) : t,
				r = e >= 0 ? t.slice(e + 1) : "in";
				return n = du.get(n) || hu,
				r = Mu.get(r) || we,
				yi(r(n.apply(null, ic.call(arguments, 1))))
			},
			rc.interpolateHcl = Bi,
			rc.interpolateHsl = Ci,
			rc.interpolateLab = Xi,
			rc.interpolateRound = Ri,
			rc.transform = function (t) {
				var e = ac.createElementNS(rc.ns.prefix.svg, "g");
				return (rc.transform = function (t) {
					if (null != t) {
						e.setAttribute("transform", t);
						var n = e.transform.baseVal.consolidate()
					}
					return new ki(n ? n.matrix: gu)
				})(t)
			},
			ki.prototype.toString = function () {
				return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
			};
			var gu = {
				a: 1,
				b: 0,
				c: 0,
				d: 1,
				e: 0,
				f: 0
			};
			rc.interpolateTransform = ji,
			rc.layout = {},
			rc.layout.bundle = function () {
				return function (t) {
					for (var e = [], n = -1, r = t.length; ++n < r;) e.push(Fi(t[n]));
					return e
				}
			},
			rc.layout.chord = function () {
				function t() {
					var t, u, p, f, h, d = {},
					M = [],
					g = rc.range(o),
					b = [];
					for (n = [], r = [], t = 0, f = -1; ++f < o;) {
						for (u = 0, h = -1; ++h < o;) u += i[f][h];
						M.push(u),
						b.push(rc.range(o)),
						t += u
					}
					for (a && g.sort(function (t, e) {
						return a(M[t], M[e])
					}), c && b.forEach(function (t, e) {
						t.sort(function (t, n) {
							return c(i[e][t], i[e][n])
						})
					}), t = (kc - l * o) / t, u = 0, f = -1; ++f < o;) {
						for (p = u, h = -1; ++h < o;) {
							var m = g[f],
							v = b[m][h],
							A = i[m][v],
							y = u,
							z = u += A * t;
							d[m + "-" + v] = {
								index: m,
								subindex: v,
								startAngle: y,
								endAngle: z,
								value: A
							}
						}
						r[m] = {
							index: m,
							startAngle: p,
							endAngle: u,
							value: (u - p) / t
						},
						u += l
					}
					for (f = -1; ++f < o;) for (h = f - 1; ++h < o;) {
						var _ = d[f + "-" + h],
						T = d[h + "-" + f];
						(_.value || T.value) && n.push(_.value < T.value ? {
							source: T,
							target: _
						}: {
							source: _,
							target: T
						})
					}
					s && e()
				}
				function e() {
					n.sort(function (t, e) {
						return s((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
					})
				}
				var n, r, i, o, a, c, s, u = {},
				l = 0;
				return u.matrix = function (t) {
					return arguments.length ? (o = (i = t) && i.length, n = r = null, u) : i
				},
				u.padding = function (t) {
					return arguments.length ? (l = t, n = r = null, u) : l
				},
				u.sortGroups = function (t) {
					return arguments.length ? (a = t, n = r = null, u) : a
				},
				u.sortSubgroups = function (t) {
					return arguments.length ? (c = t, n = null, u) : c
				},
				u.sortChords = function (t) {
					return arguments.length ? (s = t, n && e(), u) : s
				},
				u.chords = function () {
					return n || t(),
					n
				},
				u.groups = function () {
					return r || t(),
					r
				},
				u
			},
			rc.layout.force = function () {
				function t(t) {
					return function (e, n, r, i) {
						if (e.point !== t) {
							var o = e.cx - t.x,
							a = e.cy - t.y,
							c = i - n,
							s = o * o + a * a;
							if (s > c * c / g) {
								if (d > s) {
									var u = e.charge / s;
									t.px -= o * u,
									t.py -= a * u
								}
								return ! 0
							}
							if (e.point && s && d > s) {
								var u = e.pointCharge / s;
								t.px -= o * u,
								t.py -= a * u
							}
						}
						return ! e.charge
					}
				}
				function e(t) {
					t.px = rc.event.x,
					t.py = rc.event.y,
					c.resume()
				}
				var n, r, i, o, a, c = {},
				s = rc.dispatch("start", "tick", "end"),
				u = [1, 1],
				l = .9,
				p = bu,
				f = mu,
				h = -30,
				d = vu,
				M = .1,
				g = .64,
				b = [],
				m = [];
				return c.tick = function () {
					if ((r *= .99) < .005) return s.end({
						type: "end",
						alpha: r = 0
					}),
					!0;
					var e, n, c, p, f, d, g, v, A, y = b.length,
					z = m.length;
					for (n = 0; z > n; ++n) c = m[n],
					p = c.source,
					f = c.target,
					v = f.x - p.x,
					A = f.y - p.y,
					(d = v * v + A * A) && (d = r * o[n] * ((d = Math.sqrt(d)) - i[n]) / d, v *= d, A *= d, f.x -= v * (g = p.weight / (f.weight + p.weight)), f.y -= A * g, p.x += v * (g = 1 - g), p.y += A * g);
					if ((g = r * M) && (v = u[0] / 2, A = u[1] / 2, n = -1, g)) for (; ++n < y;) c = b[n],
					c.x += (v - c.x) * g,
					c.y += (A - c.y) * g;
					if (h) for (Ji(e = rc.geom.quadtree(b), r, a), n = -1; ++n < y;)(c = b[n]).fixed || e.visit(t(c));
					for (n = -1; ++n < y;) c = b[n],
					c.fixed ? (c.x = c.px, c.y = c.py) : (c.x -= (c.px - (c.px = c.x)) * l, c.y -= (c.py - (c.py = c.y)) * l);
					s.tick({
						type: "tick",
						alpha: r
					})
				},
				c.nodes = function (t) {
					return arguments.length ? (b = t, c) : b
				},
				c.links = function (t) {
					return arguments.length ? (m = t, c) : m
				},
				c.size = function (t) {
					return arguments.length ? (u = t, c) : u
				},
				c.linkDistance = function (t) {
					return arguments.length ? (p = "function" == typeof t ? t: +t, c) : p
				},
				c.distance = c.linkDistance,
				c.linkStrength = function (t) {
					return arguments.length ? (f = "function" == typeof t ? t: +t, c) : f
				},
				c.friction = function (t) {
					return arguments.length ? (l = +t, c) : l
				},
				c.charge = function (t) {
					return arguments.length ? (h = "function" == typeof t ? t: +t, c) : h
				},
				c.chargeDistance = function (t) {
					return arguments.length ? (d = t * t, c) : Math.sqrt(d)
				},
				c.gravity = function (t) {
					return arguments.length ? (M = +t, c) : M
				},
				c.theta = function (t) {
					return arguments.length ? (g = t * t, c) : Math.sqrt(g)
				},
				c.alpha = function (t) {
					return arguments.length ? (t = +t, r ? r = t > 0 ? t: 0 : t > 0 && (s.start({
						type: "start",
						alpha: r = t
					}), rc.timer(c.tick)), c) : r
				},
				c.start = function () {
					function t(t, r) {
						if (!n) {
							for (n = new Array(s), c = 0; s > c; ++c) n[c] = [];
							for (c = 0; u > c; ++c) {
								var i = m[c];
								n[i.source.index].push(i.target),
								n[i.target.index].push(i.source)
							}
						}
						for (var o, a = n[e], c = -1, u = a.length; ++c < u;) if (!isNaN(o = a[c][t])) return o;
						return Math.random() * r
					}
					var e, n, r, s = b.length,
					l = m.length,
					d = u[0],
					M = u[1];
					for (e = 0; s > e; ++e)(r = b[e]).index = e,
					r.weight = 0;
					for (e = 0; l > e; ++e) r = m[e],
					"number" == typeof r.source && (r.source = b[r.source]),
					"number" == typeof r.target && (r.target = b[r.target]),
					++r.source.weight,
					++r.target.weight;
					for (e = 0; s > e; ++e) r = b[e],
					isNaN(r.x) && (r.x = t("x", d)),
					isNaN(r.y) && (r.y = t("y", M)),
					isNaN(r.px) && (r.px = r.x),
					isNaN(r.py) && (r.py = r.y);
					if (i = [], "function" == typeof p) for (e = 0; l > e; ++e) i[e] = +p.call(this, m[e], e);
					else for (e = 0; l > e; ++e) i[e] = p;
					if (o = [], "function" == typeof f) for (e = 0; l > e; ++e) o[e] = +f.call(this, m[e], e);
					else for (e = 0; l > e; ++e) o[e] = f;
					if (a = [], "function" == typeof h) for (e = 0; s > e; ++e) a[e] = +h.call(this, b[e], e);
					else for (e = 0; s > e; ++e) a[e] = h;
					return c.resume()
				},
				c.resume = function () {
					return c.alpha(.1)
				},
				c.stop = function () {
					return c.alpha(0)
				},
				c.drag = function () {
					return n || (n = rc.behavior.drag().origin(we).on("dragstart.force", Yi).on("drag.force", e).on("dragend.force", Ki)),
					arguments.length ? void this.on("mouseover.force", $i).on("mouseout.force", Qi).call(n) : n
				},
				rc.rebind(c, s, "on")
			};
			var bu = 20,
			mu = 1,
			vu = 1 / 0;
			rc.layout.hierarchy = function () {
				function t(i) {
					var o, a = [i],
					c = [];
					for (i.depth = 0; null != (o = a.pop());) if (c.push(o), (u = n.call(t, o, o.depth)) && (s = u.length)) {
						for (var s, u, l; --s >= 0;) a.push(l = u[s]),
						l.parent = o,
						l.depth = o.depth + 1;
						r && (o.value = 0),
						o.children = u
					} else r && (o.value = +r.call(t, o, o.depth) || 0),
					delete o.children;
					return eo(i, function (t) {
						var n, i;
						e && (n = t.children) && n.sort(e),
						r && (i = t.parent) && (i.value += t.value)
					}),
					c
				}
				var e = io,
				n = no,
				r = ro;
				return t.sort = function (n) {
					return arguments.length ? (e = n, t) : e
				},
				t.children = function (e) {
					return arguments.length ? (n = e, t) : n
				},
				t.value = function (e) {
					return arguments.length ? (r = e, t) : r
				},
				t.revalue = function (e) {
					return r && (to(e, function (t) {
						t.children && (t.value = 0)
					}), eo(e, function (e) {
						var n;
						e.children || (e.value = +r.call(t, e, e.depth) || 0),
						(n = e.parent) && (n.value += e.value)
					})),
					e
				},
				t
			},
			rc.layout.partition = function () {
				function t(e, n, r, i) {
					var o = e.children;
					if (e.x = n, e.y = e.depth * i, e.dx = r, e.dy = i, o && (a = o.length)) {
						var a, c, s, u = -1;
						for (r = e.value ? r / e.value: 0; ++u < a;) t(c = o[u], n, s = c.value * r, i),
						n += s
					}
				}
				function e(t) {
					var n = t.children,
					r = 0;
					if (n && (i = n.length)) for (var i, o = -1; ++o < i;) r = Math.max(r, e(n[o]));
					return 1 + r
				}
				function n(n, o) {
					var a = r.call(this, n, o);
					return t(a[0], 0, i[0], i[1] / e(a[0])),
					a
				}
				var r = rc.layout.hierarchy(),
				i = [1, 1];
				return n.size = function (t) {
					return arguments.length ? (i = t, n) : i
				},
				Zi(n, r)
			},
			rc.layout.pie = function () {
				function t(a) {
					var c, s = a.length,
					u = a.map(function (n, r) {
						return + e.call(t, n, r)
					}),
					l = +("function" == typeof r ? r.apply(this, arguments) : r),
					p = ("function" == typeof i ? i.apply(this, arguments) : i) - l,
					f = Math.min(Math.abs(p) / s, +("function" == typeof o ? o.apply(this, arguments) : o)),
					h = f * (0 > p ? -1 : 1),
					d = (p - s * h) / rc.sum(u),
					M = rc.range(s),
					g = [];
					return null != n && M.sort(n === Au ?
					function (t, e) {
						return u[e] - u[t]
					}: function (t, e) {
						return n(a[t], a[e])
					}),
					M.forEach(function (t) {
						g[t] = {
							data: a[t],
							value: c = u[t],
							startAngle: l,
							endAngle: l += c * d + h,
							padAngle: f
						}
					}),
					g
				}
				var e = Number,
				n = Au,
				r = 0,
				i = kc,
				o = 0;
				return t.value = function (n) {
					return arguments.length ? (e = n, t) : e
				},
				t.sort = function (e) {
					return arguments.length ? (n = e, t) : n
				},
				t.startAngle = function (e) {
					return arguments.length ? (r = e, t) : r
				},
				t.endAngle = function (e) {
					return arguments.length ? (i = e, t) : i
				},
				t.padAngle = function (e) {
					return arguments.length ? (o = e, t) : o
				},
				t
			};
			var Au = {};
			rc.layout.stack = function () {
				function t(c, s) {
					if (! (f = c.length)) return c;
					var u = c.map(function (n, r) {
						return e.call(t, n, r)
					}),
					l = u.map(function (e) {
						return e.map(function (e, n) {
							return [o.call(t, e, n), a.call(t, e, n)]
						})
					}),
					p = n.call(t, l, s);
					u = rc.permute(u, p),
					l = rc.permute(l, p);
					var f, h, d, M, g = r.call(t, l, s),
					b = u[0].length;
					for (d = 0; b > d; ++d) for (i.call(t, u[0][d], M = g[d], l[0][d][1]), h = 1; f > h; ++h) i.call(t, u[h][d], M += l[h - 1][d][1], l[h][d][1]);
					return c
				}
				var e = we,
				n = uo,
				r = lo,
				i = so,
				o = ao,
				a = co;
				return t.values = function (n) {
					return arguments.length ? (e = n, t) : e
				},
				t.order = function (e) {
					return arguments.length ? (n = "function" == typeof e ? e: yu.get(e) || uo, t) : n
				},
				t.offset = function (e) {
					return arguments.length ? (r = "function" == typeof e ? e: zu.get(e) || lo, t) : r
				},
				t.x = function (e) {
					return arguments.length ? (o = e, t) : o
				},
				t.y = function (e) {
					return arguments.length ? (a = e, t) : a
				},
				t.out = function (e) {
					return arguments.length ? (i = e, t) : i
				},
				t
			};
			var yu = rc.map({
				"inside-out": function (t) {
					var e, n, r = t.length,
					i = t.map(po),
					o = t.map(fo),
					a = rc.range(r).sort(function (t, e) {
						return i[t] - i[e]
					}),
					c = 0,
					s = 0,
					u = [],
					l = [];
					for (e = 0; r > e; ++e) n = a[e],
					s > c ? (c += o[n], u.push(n)) : (s += o[n], l.push(n));
					return l.reverse().concat(u)
				},
				reverse: function (t) {
					return rc.range(t.length).reverse()
				},
				"default": uo
			}),
			zu = rc.map({
				silhouette: function (t) {
					var e, n, r, i = t.length,
					o = t[0].length,
					a = [],
					c = 0,
					s = [];
					for (n = 0; o > n; ++n) {
						for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
						r > c && (c = r),
						a.push(r)
					}
					for (n = 0; o > n; ++n) s[n] = (c - a[n]) / 2;
					return s
				},
				wiggle: function (t) {
					var e, n, r, i, o, a, c, s, u, l = t.length,
					p = t[0],
					f = p.length,
					h = [];
					for (h[0] = s = u = 0, n = 1; f > n; ++n) {
						for (e = 0, i = 0; l > e; ++e) i += t[e][n][1];
						for (e = 0, o = 0, c = p[n][0] - p[n - 1][0]; l > e; ++e) {
							for (r = 0, a = (t[e][n][1] - t[e][n - 1][1]) / (2 * c); e > r; ++r) a += (t[r][n][1] - t[r][n - 1][1]) / c;
							o += a * t[e][n][1]
						}
						h[n] = s -= i ? o / i * c: 0,
						u > s && (u = s)
					}
					for (n = 0; f > n; ++n) h[n] -= u;
					return h
				},
				expand: function (t) {
					var e, n, r, i = t.length,
					o = t[0].length,
					a = 1 / i,
					c = [];
					for (n = 0; o > n; ++n) {
						for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
						if (r) for (e = 0; i > e; e++) t[e][n][1] /= r;
						else for (e = 0; i > e; e++) t[e][n][1] = a
					}
					for (n = 0; o > n; ++n) c[n] = 0;
					return c
				},
				zero: lo
			});
			rc.layout.histogram = function () {
				function t(t, o) {
					for (var a, c, s = [], u = t.map(n, this), l = r.call(this, u, o), p = i.call(this, l, u, o), o = -1, f = u.length, h = p.length - 1, d = e ? 1 : 1 / f; ++o < h;) a = s[o] = [],
					a.dx = p[o + 1] - (a.x = p[o]),
					a.y = 0;
					if (h > 0) for (o = -1; ++o < f;) c = u[o],
					c >= l[0] && c <= l[1] && (a = s[rc.bisect(p, c, 1, h) - 1], a.y += d, a.push(t[o]));
					return s
				}
				var e = !0,
				n = Number,
				r = bo,
				i = Mo;
				return t.value = function (e) {
					return arguments.length ? (n = e, t) : n
				},
				t.range = function (e) {
					return arguments.length ? (r = Le(e), t) : r
				},
				t.bins = function (e) {
					return arguments.length ? (i = "number" == typeof e ?
					function (t) {
						return go(t, e)
					}: Le(e), t) : i
				},
				t.frequency = function (n) {
					return arguments.length ? (e = !!n, t) : e
				},
				t
			},
			rc.layout.pack = function () {
				function t(t, o) {
					var a = n.call(this, t, o),
					c = a[0],
					s = i[0],
					u = i[1],
					l = null == e ? Math.sqrt: "function" == typeof e ? e: function () {
						return e
					};
					if (c.x = c.y = 0, eo(c, function (t) {
						t.r = +l(t.value)
					}), eo(c, zo), r) {
						var p = r * (e ? 1 : Math.max(2 * c.r / s, 2 * c.r / u)) / 2;
						eo(c, function (t) {
							t.r += p
						}),
						eo(c, zo),
						eo(c, function (t) {
							t.r -= p
						})
					}
					return Oo(c, s / 2, u / 2, e ? 1 : 1 / Math.max(2 * c.r / s, 2 * c.r / u)),
					a
				}
				var e, n = rc.layout.hierarchy().sort(mo),
				r = 0,
				i = [1, 1];
				return t.size = function (e) {
					return arguments.length ? (i = e, t) : i
				},
				t.radius = function (n) {
					return arguments.length ? (e = null == n || "function" == typeof n ? n: +n, t) : e
				},
				t.padding = function (e) {
					return arguments.length ? (r = +e, t) : r
				},
				Zi(t, n)
			},
			rc.layout.tree = function () {
				function t(t, i) {
					var l = a.call(this, t, i),
					p = l[0],
					f = e(p);
					if (eo(f, n), f.parent.m = -f.z, to(f, r), u) to(p, o);
					else {
						var h = p,
						d = p,
						M = p;
						to(p, function (t) {
							t.x < h.x && (h = t),
							t.x > d.x && (d = t),
							t.depth > M.depth && (M = t)
						});
						var g = c(h, d) / 2 - h.x,
						b = s[0] / (d.x + c(d, h) / 2 + g),
						m = s[1] / (M.depth || 1);
						to(p, function (t) {
							t.x = (t.x + g) * b,
							t.y = t.depth * m
						})
					}
					return l
				}
				function e(t) {
					for (var e, n = {
						A: null,
						children: [t]
					},
					r = [n]; null != (e = r.pop());) for (var i, o = e.children, a = 0, c = o.length; c > a; ++a) r.push((o[a] = i = {
						_: o[a],
						parent: e,
						children: (i = o[a].children) && i.slice() || [],
						A: null,
						a: null,
						z: 0,
						m: 0,
						c: 0,
						s: 0,
						t: null,
						i: a
					}).a = i);
					return n.children[0]
				}
				function n(t) {
					var e = t.children,
					n = t.parent.children,
					r = t.i ? n[t.i - 1] : null;
					if (e.length) {
						So(t);
						var o = (e[0].z + e[e.length - 1].z) / 2;
						r ? (t.z = r.z + c(t._, r._), t.m = t.z - o) : t.z = o
					} else r && (t.z = r.z + c(t._, r._));
					t.parent.A = i(t, r, t.parent.A || n[0])
				}
				function r(t) {
					t._.x = t.z + t.parent.m,
					t.m += t.parent.m
				}
				function i(t, e, n) {
					if (e) {
						for (var r, i = t, o = t, a = e, s = i.parent.children[0], u = i.m, l = o.m, p = a.m, f = s.m; a = qo(a), i = No(i), a && i;) s = No(s),
						o = qo(o),
						o.a = t,
						r = a.z + p - i.z - u + c(a._, i._),
						r > 0 && (xo(Wo(a, t, n), t, r), u += r, l += r),
						p += a.m,
						u += i.m,
						f += s.m,
						l += o.m;
						a && !qo(o) && (o.t = a, o.m += p - l),
						i && !No(s) && (s.t = i, s.m += u - f, n = t)
					}
					return n
				}
				function o(t) {
					t.x *= s[0],
					t.y = t.depth * s[1]
				}
				var a = rc.layout.hierarchy().sort(null).value(null),
				c = wo,
				s = [1, 1],
				u = null;
				return t.separation = function (e) {
					return arguments.length ? (c = e, t) : c
				},
				t.size = function (e) {
					return arguments.length ? (u = null == (s = e) ? o: null, t) : u ? null: s
				},
				t.nodeSize = function (e) {
					return arguments.length ? (u = null == (s = e) ? null: o, t) : u ? s: null
				},
				Zi(t, a)
			},
			rc.layout.cluster = function () {
				function t(t, o) {
					var a, c = e.call(this, t, o),
					s = c[0],
					u = 0;
					eo(s, function (t) {
						var e = t.children;
						e && e.length ? (t.x = Bo(e), t.y = Eo(e)) : (t.x = a ? u += n(t, a) : 0, t.y = 0, a = t)
					});
					var l = Co(s),
					p = Xo(s),
					f = l.x - n(l, p) / 2,
					h = p.x + n(p, l) / 2;
					return eo(s, i ?
					function (t) {
						t.x = (t.x - s.x) * r[0],
						t.y = (s.y - t.y) * r[1]
					}: function (t) {
						t.x = (t.x - f) / (h - f) * r[0],
						t.y = (1 - (s.y ? t.y / s.y: 1)) * r[1]
					}),
					c
				}
				var e = rc.layout.hierarchy().sort(null).value(null),
				n = wo,
				r = [1, 1],
				i = !1;
				return t.separation = function (e) {
					return arguments.length ? (n = e, t) : n
				},
				t.size = function (e) {
					return arguments.length ? (i = null == (r = e), t) : i ? null: r
				},
				t.nodeSize = function (e) {
					return arguments.length ? (i = null != (r = e), t) : i ? r: null
				},
				Zi(t, e)
			},
			rc.layout.treemap = function () {
				function t(t, e) {
					for (var n, r, i = -1, o = t.length; ++i < o;) r = (n = t[i]).value * (0 > e ? 0 : e),
					n.area = isNaN(r) || 0 >= r ? 0 : r
				}
				function e(n) {
					var o = n.children;
					if (o && o.length) {
						var a, c, s, u = p(n),
						l = [],
						f = o.slice(),
						d = 1 / 0,
						M = "slice" === h ? u.dx: "dice" === h ? u.dy: "slice-dice" === h ? 1 & n.depth ? u.dy: u.dx: Math.min(u.dx, u.dy);
						for (t(f, u.dx * u.dy / n.value), l.area = 0;
						(s = f.length) > 0;) l.push(a = f[s - 1]),
						l.area += a.area,
						"squarify" !== h || (c = r(l, M)) <= d ? (f.pop(), d = c) : (l.area -= l.pop().area, i(l, M, u, !1), M = Math.min(u.dx, u.dy), l.length = l.area = 0, d = 1 / 0);
						l.length && (i(l, M, u, !0), l.length = l.area = 0),
						o.forEach(e)
					}
				}
				function n(e) {
					var r = e.children;
					if (r && r.length) {
						var o, a = p(e),
						c = r.slice(),
						s = [];
						for (t(c, a.dx * a.dy / e.value), s.area = 0; o = c.pop();) s.push(o),
						s.area += o.area,
						null != o.z && (i(s, o.z ? a.dx: a.dy, a, !c.length), s.length = s.area = 0);
						r.forEach(n)
					}
				}
				function r(t, e) {
					for (var n, r = t.area, i = 0, o = 1 / 0, a = -1, c = t.length; ++a < c;)(n = t[a].area) && (o > n && (o = n), n > i && (i = n));
					return r *= r,
					e *= e,
					r ? Math.max(e * i * d / r, r / (e * o * d)) : 1 / 0
				}
				function i(t, e, n, r) {
					var i, o = -1,
					a = t.length,
					c = n.x,
					u = n.y,
					l = e ? s(t.area / e) : 0;
					if (e == n.dx) {
						for ((r || l > n.dy) && (l = n.dy); ++o < a;) i = t[o],
						i.x = c,
						i.y = u,
						i.dy = l,
						c += i.dx = Math.min(n.x + n.dx - c, l ? s(i.area / l) : 0);
						i.z = !0,
						i.dx += n.x + n.dx - c,
						n.y += l,
						n.dy -= l
					} else {
						for ((r || l > n.dx) && (l = n.dx); ++o < a;) i = t[o],
						i.x = c,
						i.y = u,
						i.dx = l,
						u += i.dy = Math.min(n.y + n.dy - u, l ? s(i.area / l) : 0);
						i.z = !1,
						i.dy += n.y + n.dy - u,
						n.x += l,
						n.dx -= l
					}
				}
				function o(r) {
					var i = a || c(r),
					o = i[0];
					return o.x = 0,
					o.y = 0,
					o.dx = u[0],
					o.dy = u[1],
					a && c.revalue(o),
					t([o], o.dx * o.dy / o.value),
					(a ? n: e)(o),
					f && (a = i),
					i
				}
				var a, c = rc.layout.hierarchy(),
				s = Math.round,
				u = [1, 1],
				l = null,
				p = Ro,
				f = !1,
				h = "squarify",
				d = .5 * (1 + Math.sqrt(5));
				return o.size = function (t) {
					return arguments.length ? (u = t, o) : u
				},
				o.padding = function (t) {
					function e(e) {
						var n = t.call(o, e, e.depth);
						return null == n ? Ro(e) : ko(e, "number" == typeof n ? [n, n, n, n] : n)
					}
					function n(e) {
						return ko(e, t)
					}
					if (!arguments.length) return l;
					var r;
					return p = null == (l = t) ? Ro: "function" == (r = typeof t) ? e: "number" === r ? (t = [t, t, t, t], n) : n,
					o
				},
				o.round = function (t) {
					return arguments.length ? (s = t ? Math.round: Number, o) : s != Number
				},
				o.sticky = function (t) {
					return arguments.length ? (f = t, a = null, o) : f
				},
				o.ratio = function (t) {
					return arguments.length ? (d = t, o) : d
				},
				o.mode = function (t) {
					return arguments.length ? (h = t + "", o) : h
				},
				Zi(o, c)
			},
			rc.random = {
				normal: function (t, e) {
					var n = arguments.length;
					return 2 > n && (e = 1),
					1 > n && (t = 0),
					function () {
						var n, r, i;
						do n = 2 * Math.random() - 1,
						r = 2 * Math.random() - 1,
						i = n * n + r * r;
						while (!i || i > 1);
						return t + e * n * Math.sqrt( - 2 * Math.log(i) / i)
					}
				},
				logNormal: function () {
					var t = rc.random.normal.apply(rc, arguments);
					return function () {
						return Math.exp(t())
					}
				},
				bates: function (t) {
					var e = rc.random.irwinHall(t);
					return function () {
						return e() / t
					}
				},
				irwinHall: function (t) {
					return function () {
						for (var e = 0, n = 0; t > n; n++) e += Math.random();
						return e
					}
				}
			},
			rc.scale = {};
			var _u = {
				floor: we,
				ceil: we
			};
			rc.scale.linear = function () {
				return Fo([0, 1], [0, 1], vi, !1)
			};
			var Tu = {
				s: 1,
				g: 1,
				p: 1,
				r: 1,
				e: 1
			};
			rc.scale.log = function () {
				return Zo(rc.scale.linear().domain([0, 1]), 10, !0, [1, 10])
			};
			var Ou = rc.format(".0e"),
			Lu = {
				floor: function (t) {
					return - Math.ceil( - t)
				},
				ceil: function (t) {
					return - Math.floor( - t)
				}
			};
			rc.scale.pow = function () {
				return ta(rc.scale.linear(), 1, [0, 1])
			},
			rc.scale.sqrt = function () {
				return rc.scale.pow().exponent(.5)
			},
			rc.scale.ordinal = function () {
				return na([], {
					t: "range",
					a: [[]]
				})
			},
			rc.scale.category10 = function () {
				return rc.scale.ordinal().range(wu)
			},
			rc.scale.category20 = function () {
				return rc.scale.ordinal().range(Nu)
			},
			rc.scale.category20b = function () {
				return rc.scale.ordinal().range(qu)
			},
			rc.scale.category20c = function () {
				return rc.scale.ordinal().range(xu)
			};
			var wu = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ve),
			Nu = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ve),
			qu = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ve),
			xu = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ve);
			rc.scale.quantile = function () {
				return ra([], [])
			},
			rc.scale.quantize = function () {
				return ia(0, 1, [0, 1])
			},
			rc.scale.threshold = function () {
				return oa([.5], [0, 1])
			},
			rc.scale.identity = function () {
				return aa([0, 1])
			},
			rc.svg = {},
			rc.svg.arc = function () {
				function t() {
					var t = Math.max(0, +n.apply(this, arguments)),
					u = Math.max(0, +r.apply(this, arguments)),
					l = a.apply(this, arguments) - Pc,
					p = c.apply(this, arguments) - Pc,
					f = Math.abs(p - l),
					h = l > p ? 0 : 1;
					if (t > u && (d = u, u = t, t = d), f >= Dc) return e(u, h) + (t ? e(t, 1 - h) : "") + "Z";
					var d, M, g, b, m, v, A, y, z, _, T, O, L = 0,
					w = 0,
					N = [];
					if ((b = ( + s.apply(this, arguments) || 0) / 2) && (g = o === Su ? Math.sqrt(t * t + u * u) : +o.apply(this, arguments), h || (w *= -1), u && (w = ee(g / u * Math.sin(b))), t && (L = ee(g / t * Math.sin(b)))), u) {
						m = u * Math.cos(l + w),
						v = u * Math.sin(l + w),
						A = u * Math.cos(p - w),
						y = u * Math.sin(p - w);
						var q = Math.abs(p - l - 2 * w) <= Rc ? 0 : 1;
						if (w && ha(m, v, A, y) === h ^ q) {
							var x = (l + p) / 2;
							m = u * Math.cos(x),
							v = u * Math.sin(x),
							A = y = null
						}
					} else m = v = 0;
					if (t) {
						z = t * Math.cos(p - L),
						_ = t * Math.sin(p - L),
						T = t * Math.cos(l + L),
						O = t * Math.sin(l + L);
						var S = Math.abs(l - p + 2 * L) <= Rc ? 0 : 1;
						if (L && ha(z, _, T, O) === 1 - h ^ S) {
							var W = (l + p) / 2;
							z = t * Math.cos(W),
							_ = t * Math.sin(W),
							T = O = null
						}
					} else z = _ = 0;
					if ((d = Math.min(Math.abs(u - t) / 2, +i.apply(this, arguments))) > .001) {
						M = u > t ^ h ? 0 : 1;
						var E = null == T ? [z, _] : null == A ? [m, v] : Br([m, v], [T, O], [A, y], [z, _]),
						B = m - E[0],
						C = v - E[1],
						X = A - E[0],
						R = y - E[1],
						k = 1 / Math.sin(Math.acos((B * X + C * R) / (Math.sqrt(B * B + C * C) * Math.sqrt(X * X + R * R))) / 2),
						D = Math.sqrt(E[0] * E[0] + E[1] * E[1]);
						if (null != A) {
							var P = Math.min(d, (u - D) / (k + 1)),
							I = da(null == T ? [z, _] : [T, O], [m, v], u, P, h),
							j = da([A, y], [z, _], u, P, h);
							d === P ? N.push("M", I[0], "A", P, ",", P, " 0 0,", M, " ", I[1], "A", u, ",", u, " 0 ", 1 - h ^ ha(I[1][0], I[1][1], j[1][0], j[1][1]), ",", h, " ", j[1], "A", P, ",", P, " 0 0,", M, " ", j[0]) : N.push("M", I[0], "A", P, ",", P, " 0 1,", M, " ", j[0])
						} else N.push("M", m, ",", v);
						if (null != T) {
							var H = Math.min(d, (t - D) / (k - 1)),
							U = da([m, v], [T, O], t, -H, h),
							F = da([z, _], null == A ? [m, v] : [A, y], t, -H, h);
							d === H ? N.push("L", F[0], "A", H, ",", H, " 0 0,", M, " ", F[1], "A", t, ",", t, " 0 ", h ^ ha(F[1][0], F[1][1], U[1][0], U[1][1]), ",", 1 - h, " ", U[1], "A", H, ",", H, " 0 0,", M, " ", U[0]) : N.push("L", F[0], "A", H, ",", H, " 0 0,", M, " ", U[0])
						} else N.push("L", z, ",", _)
					} else N.push("M", m, ",", v),
					null != A && N.push("A", u, ",", u, " 0 ", q, ",", h, " ", A, ",", y),
					N.push("L", z, ",", _),
					null != T && N.push("A", t, ",", t, " 0 ", S, ",", 1 - h, " ", T, ",", O);
					return N.push("Z"),
					N.join("")
				}
				function e(t, e) {
					return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
				}
				var n = sa,
				r = ua,
				i = ca,
				o = Su,
				a = la,
				c = pa,
				s = fa;
				return t.innerRadius = function (e) {
					return arguments.length ? (n = Le(e), t) : n
				},
				t.outerRadius = function (e) {
					return arguments.length ? (r = Le(e), t) : r
				},
				t.cornerRadius = function (e) {
					return arguments.length ? (i = Le(e), t) : i
				},
				t.padRadius = function (e) {
					return arguments.length ? (o = e == Su ? Su: Le(e), t) : o
				},
				t.startAngle = function (e) {
					return arguments.length ? (a = Le(e), t) : a
				},
				t.endAngle = function (e) {
					return arguments.length ? (c = Le(e), t) : c
				},
				t.padAngle = function (e) {
					return arguments.length ? (s = Le(e), t) : s
				},
				t.centroid = function () {
					var t = ( + n.apply(this, arguments) + +r.apply(this, arguments)) / 2,
					e = ( + a.apply(this, arguments) + +c.apply(this, arguments)) / 2 - Pc;
					return [Math.cos(e) * t, Math.sin(e) * t]
				},
				t
			};
			var Su = "auto";
			rc.svg.line = function () {
				return Ma(we)
			};
			var Wu = rc.map({
				linear: ga,
				"linear-closed": ba,
				step: ma,
				"step-before": va,
				"step-after": Aa,
				basis: La,
				"basis-open": wa,
				"basis-closed": Na,
				bundle: qa,
				cardinal: _a,
				"cardinal-open": ya,
				"cardinal-closed": za,
				monotone: Ca
			});
			Wu.forEach(function (t, e) {
				e.key = t,
				e.closed = /-closed$/.test(t)
			});
			var Eu = [0, 2 / 3, 1 / 3, 0],
			Bu = [0, 1 / 3, 2 / 3, 0],
			Cu = [0, 1 / 6, 2 / 3, 1 / 6];
			rc.svg.line.radial = function () {
				var t = Ma(Xa);
				return t.radius = t.x,
				delete t.x,
				t.angle = t.y,
				delete t.y,
				t
			},
			va.reverse = Aa,
			Aa.reverse = va,
			rc.svg.area = function () {
				return Ra(we)
			},
			rc.svg.area.radial = function () {
				var t = Ra(Xa);
				return t.radius = t.x,
				delete t.x,
				t.innerRadius = t.x0,
				delete t.x0,
				t.outerRadius = t.x1,
				delete t.x1,
				t.angle = t.y,
				delete t.y,
				t.startAngle = t.y0,
				delete t.y0,
				t.endAngle = t.y1,
				delete t.y1,
				t
			},
			rc.svg.chord = function () {
				function t(t, c) {
					var s = e(this, o, t, c),
					u = e(this, a, t, c);
					return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (n(s, u) ? i(s.r, s.p1, s.r, s.p0) : i(s.r, s.p1, u.r, u.p0) + r(u.r, u.p1, u.a1 - u.a0) + i(u.r, u.p1, s.r, s.p0)) + "Z"
				}
				function e(t, e, n, r) {
					var i = e.call(t, n, r),
					o = c.call(t, i, r),
					a = s.call(t, i, r) - Pc,
					l = u.call(t, i, r) - Pc;
					return {
						r: o,
						a0: a,
						a1: l,
						p0: [o * Math.cos(a), o * Math.sin(a)],
						p1: [o * Math.cos(l), o * Math.sin(l)]
					}
				}
				function n(t, e) {
					return t.a0 == e.a0 && t.a1 == e.a1
				}
				function r(t, e, n) {
					return "A" + t + "," + t + " 0 " + +(n > Rc) + ",1 " + e
				}
				function i(t, e, n, r) {
					return "Q 0,0 " + r
				}
				var o = vr,
				a = Ar,
				c = ka,
				s = la,
				u = pa;
				return t.radius = function (e) {
					return arguments.length ? (c = Le(e), t) : c
				},
				t.source = function (e) {
					return arguments.length ? (o = Le(e), t) : o
				},
				t.target = function (e) {
					return arguments.length ? (a = Le(e), t) : a
				},
				t.startAngle = function (e) {
					return arguments.length ? (s = Le(e), t) : s
				},
				t.endAngle = function (e) {
					return arguments.length ? (u = Le(e), t) : u
				},
				t
			},
			rc.svg.diagonal = function () {
				function t(t, i) {
					var o = e.call(this, t, i),
					a = n.call(this, t, i),
					c = (o.y + a.y) / 2,
					s = [o, {
						x: o.x,
						y: c
					},
					{
						x: a.x,
						y: c
					},
					a];
					return s = s.map(r),
					"M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
				}
				var e = vr,
				n = Ar,
				r = Da;
				return t.source = function (n) {
					return arguments.length ? (e = Le(n), t) : e
				},
				t.target = function (e) {
					return arguments.length ? (n = Le(e), t) : n
				},
				t.projection = function (e) {
					return arguments.length ? (r = e, t) : r
				},
				t
			},
			rc.svg.diagonal.radial = function () {
				var t = rc.svg.diagonal(),
				e = Da,
				n = t.projection;
				return t.projection = function (t) {
					return arguments.length ? n(Pa(e = t)) : e
				},
				t
			},
			rc.svg.symbol = function () {
				function t(t, r) {
					return (Xu.get(e.call(this, t, r)) || Ha)(n.call(this, t, r))
				}
				var e = ja,
				n = Ia;
				return t.type = function (n) {
					return arguments.length ? (e = Le(n), t) : e
				},
				t.size = function (e) {
					return arguments.length ? (n = Le(e), t) : n
				},
				t
			};
			var Xu = rc.map({
				circle: Ha,
				cross: function (t) {
					var e = Math.sqrt(t / 5) / 2;
					return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
				},
				diamond: function (t) {
					var e = Math.sqrt(t / (2 * ku)),
					n = e * ku;
					return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
				},
				square: function (t) {
					var e = Math.sqrt(t) / 2;
					return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
				},
				"triangle-down": function (t) {
					var e = Math.sqrt(t / Ru),
					n = e * Ru / 2;
					return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
				},
				"triangle-up": function (t) {
					var e = Math.sqrt(t / Ru),
					n = e * Ru / 2;
					return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
				}
			});
			rc.svg.symbolTypes = Xu.keys();
			var Ru = Math.sqrt(3),
			ku = Math.tan(30 * Ic);
			wc.transition = function (t) {
				for (var e, n, r = Du || ++Hu, i = Ya(t), o = [], a = Pu || {
					time: Date.now(),
					ease: Li,
					delay: 0,
					duration: 250
				},
				c = -1, s = this.length; ++c < s;) {
					o.push(e = []);
					for (var u = this[c], l = -1, p = u.length; ++l < p;)(n = u[l]) && Ka(n, l, i, r, a),
					e.push(n)
				}
				return Fa(o, i, r)
			},
			wc.interrupt = function (t) {
				return this.each(null == t ? Iu: Ua(Ya(t)))
			};
			var Du, Pu, Iu = Ua(Ya()),
			ju = [],
			Hu = 0;
			ju.call = wc.call,
			ju.empty = wc.empty,
			ju.node = wc.node,
			ju.size = wc.size,
			rc.transition = function (t, e) {
				return t && t.transition ? Du ? t.transition(e) : t: xc.transition(t)
			},
			rc.transition.prototype = ju,
			ju.select = function (t) {
				var e, n, r, i = this.id,
				o = this.namespace,
				a = [];
				t = L(t);
				for (var c = -1, s = this.length; ++c < s;) {
					a.push(e = []);
					for (var u = this[c], l = -1, p = u.length; ++l < p;)(r = u[l]) && (n = t.call(r, r.__data__, l, c)) ? ("__data__" in r && (n.__data__ = r.__data__), Ka(n, l, o, i, r[o][i]), e.push(n)) : e.push(null)
				}
				return Fa(a, o, i)
			},
			ju.selectAll = function (t) {
				var e, n, r, i, o, a = this.id,
				c = this.namespace,
				s = [];
				t = w(t);
				for (var u = -1, l = this.length; ++u < l;) for (var p = this[u], f = -1, h = p.length; ++f < h;) if (r = p[f]) {
					o = r[c][a],
					n = t.call(r, r.__data__, f, u),
					s.push(e = []);
					for (var d = -1, M = n.length; ++d < M;)(i = n[d]) && Ka(i, d, c, a, o),
					e.push(i)
				}
				return Fa(s, c, a)
			},
			ju.filter = function (t) {
				var e, n, r, i = [];
				"function" != typeof t && (t = D(t));
				for (var o = 0, a = this.length; a > o; o++) {
					i.push(e = []);
					for (var n = this[o], c = 0, s = n.length; s > c; c++)(r = n[c]) && t.call(r, r.__data__, c, o) && e.push(r)
				}
				return Fa(i, this.namespace, this.id)
			},
			ju.tween = function (t, e) {
				var n = this.id,
				r = this.namespace;
				return arguments.length < 2 ? this.node()[r][n].tween.get(t) : I(this, null == e ?
				function (e) {
					e[r][n].tween.remove(t)
				}: function (i) {
					i[r][n].tween.set(t, e)
				})
			},
			ju.attr = function (t, e) {
				function n() {
					this.removeAttribute(c)
				}
				function r() {
					this.removeAttributeNS(c.space, c.local)
				}
				function i(t) {
					return null == t ? n: (t += "", function () {
						var e, n = this.getAttribute(c);
						return n !== t && (e = a(n, t), function (t) {
							this.setAttribute(c, e(t))
						})
					})
				}
				function o(t) {
					return null == t ? r: (t += "", function () {
						var e, n = this.getAttributeNS(c.space, c.local);
						return n !== t && (e = a(n, t), function (t) {
							this.setAttributeNS(c.space, c.local, e(t))
						})
					})
				}
				if (arguments.length < 2) {
					for (e in t) this.attr(e, t[e]);
					return this
				}
				var a = "transform" == t ? ji: vi,
				c = rc.ns.qualify(t);
				return Va(this, "attr." + t, e, c.local ? o: i)
			},
			ju.attrTween = function (t, e) {
				function n(t, n) {
					var r = e.call(this, t, n, this.getAttribute(i));
					return r &&
					function (t) {
						this.setAttribute(i, r(t))
					}
				}
				function r(t, n) {
					var r = e.call(this, t, n, this.getAttributeNS(i.space, i.local));
					return r &&
					function (t) {
						this.setAttributeNS(i.space, i.local, r(t))
					}
				}
				var i = rc.ns.qualify(t);
				return this.tween("attr." + t, i.local ? r: n)
			},
			ju.style = function (t, e, n) {
				function r() {
					this.style.removeProperty(t)
				}
				function i(e) {
					return null == e ? r: (e += "", function () {
						var r, i = sc.getComputedStyle(this, null).getPropertyValue(t);
						return i !== e && (r = vi(i, e), function (e) {
							this.style.setProperty(t, r(e), n)
						})
					})
				}
				var o = arguments.length;
				if (3 > o) {
					if ("string" != typeof t) {
						2 > o && (e = "");
						for (n in t) this.style(n, t[n], e);
						return this
					}
					n = ""
				}
				return Va(this, "style." + t, e, i)
			},
			ju.styleTween = function (t, e, n) {
				function r(r, i) {
					var o = e.call(this, r, i, sc.getComputedStyle(this, null).getPropertyValue(t));
					return o &&
					function (e) {
						this.style.setProperty(t, o(e), n)
					}
				}
				return arguments.length < 3 && (n = ""),
				this.tween("style." + t, r)
			},
			ju.text = function (t) {
				return Va(this, "text", t, Ga)
			},
			ju.remove = function () {
				var t = this.namespace;
				return this.each("end.transition", function () {
					var e;
					this[t].count < 2 && (e = this.parentNode) && e.removeChild(this)
				})
			},
			ju.ease = function (t) {
				var e = this.id,
				n = this.namespace;
				return arguments.length < 1 ? this.node()[n][e].ease: ("function" != typeof t && (t = rc.ease.apply(rc, arguments)), I(this, function (r) {
					r[n][e].ease = t
				}))
			},
			ju.delay = function (t) {
				var e = this.id,
				n = this.namespace;
				return arguments.length < 1 ? this.node()[n][e].delay: I(this, "function" == typeof t ?
				function (r, i, o) {
					r[n][e].delay = +t.call(r, r.__data__, i, o)
				}: (t = +t, function (r) {
					r[n][e].delay = t
				}))
			},
			ju.duration = function (t) {
				var e = this.id,
				n = this.namespace;
				return arguments.length < 1 ? this.node()[n][e].duration: I(this, "function" == typeof t ?
				function (r, i, o) {
					r[n][e].duration = Math.max(1, t.call(r, r.__data__, i, o))
				}: (t = Math.max(1, t), function (r) {
					r[n][e].duration = t
				}))
			},
			ju.each = function (t, e) {
				var n = this.id,
				r = this.namespace;
				if (arguments.length < 2) {
					var i = Pu,
					o = Du;
					try {
						Du = n,
						I(this, function (e, i, o) {
							Pu = e[r][n],
							t.call(e, e.__data__, i, o)
						})
					} finally {
						Pu = i,
						Du = o
					}
				} else I(this, function (i) {
					var o = i[r][n];
					(o.event || (o.event = rc.dispatch("start", "end", "interrupt"))).on(t, e)
				});
				return this
			},
			ju.transition = function () {
				for (var t, e, n, r, i = this.id, o = ++Hu, a = this.namespace, c = [], s = 0, u = this.length; u > s; s++) {
					c.push(t = []);
					for (var e = this[s], l = 0, p = e.length; p > l; l++)(n = e[l]) && (r = n[a][i], Ka(n, l, a, o, {
						time: r.time,
						ease: r.ease,
						delay: r.delay + r.duration,
						duration: r.duration
					})),
					t.push(n)
				}
				return Fa(c, a, o)
			},
			rc.svg.axis = function () {
				function t(t) {
					t.each(function () {
						var t, u = rc.select(this),
						l = this.__chart__ || n,
						p = this.__chart__ = n.copy(),
						f = null == s ? p.ticks ? p.ticks.apply(p, c) : p.domain() : s,
						h = null == e ? p.tickFormat ? p.tickFormat.apply(p, c) : we: e,
						d = u.selectAll(".tick").data(f, p),
						M = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Cc),
						g = rc.transition(d.exit()).style("opacity", Cc).remove(),
						b = rc.transition(d.order()).style("opacity", 1),
						m = Math.max(i, 0) + a,
						v = Po(p),
						A = u.selectAll(".domain").data([0]),
						y = (A.enter().append("path").attr("class", "domain"), rc.transition(A));
						M.append("line"),
						M.append("text");
						var z, _, T, O, L = M.select("line"),
						w = b.select("line"),
						N = d.select("text").text(h),
						q = M.select("text"),
						x = b.select("text"),
						S = "top" === r || "left" === r ? -1 : 1;
						if ("bottom" === r || "top" === r ? (t = $a, z = "x", T = "y", _ = "x2", O = "y2", N.attr("dy", 0 > S ? "0em": ".71em").style("text-anchor", "middle"), y.attr("d", "M" + v[0] + "," + S * o + "V0H" + v[1] + "V" + S * o)) : (t = Qa, z = "y", T = "x", _ = "y2", O = "x2", N.attr("dy", ".32em").style("text-anchor", 0 > S ? "end": "start"), y.attr("d", "M" + S * o + "," + v[0] + "H0V" + v[1] + "H" + S * o)), L.attr(O, S * i), q.attr(T, S * m), w.attr(_, 0).attr(O, S * i), x.attr(z, 0).attr(T, S * m), p.rangeBand) {
							var W = p,
							E = W.rangeBand() / 2;
							l = p = function (t) {
								return W(t) + E
							}
						} else l.rangeBand ? l = p: g.call(t, p, l);
						M.call(t, l, p),
						b.call(t, p, p)
					})
				}
				var e, n = rc.scale.linear(),
				r = Uu,
				i = 6,
				o = 6,
				a = 3,
				c = [10],
				s = null;
				return t.scale = function (e) {
					return arguments.length ? (n = e, t) : n
				},
				t.orient = function (e) {
					return arguments.length ? (r = e in Fu ? e + "": Uu, t) : r
				},
				t.ticks = function () {
					return arguments.length ? (c = arguments, t) : c
				},
				t.tickValues = function (e) {
					return arguments.length ? (s = e, t) : s
				},
				t.tickFormat = function (n) {
					return arguments.length ? (e = n, t) : e
				},
				t.tickSize = function (e) {
					var n = arguments.length;
					return n ? (i = +e, o = +arguments[n - 1], t) : i
				},
				t.innerTickSize = function (e) {
					return arguments.length ? (i = +e, t) : i
				},
				t.outerTickSize = function (e) {
					return arguments.length ? (o = +e, t) : o
				},
				t.tickPadding = function (e) {
					return arguments.length ? (a = +e, t) : a
				},
				t.tickSubdivide = function () {
					return arguments.length && t
				},
				t
			};
			var Uu = "bottom",
			Fu = {
				top: 1,
				right: 1,
				bottom: 1,
				left: 1
			};
			rc.svg.brush = function () {
				function t(o) {
					o.each(function () {
						var o = rc.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i),
						a = o.selectAll(".background").data([0]);
						a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
						o.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
						var c = o.selectAll(".resize").data(d, we);
						c.exit().remove(),
						c.enter().append("g").attr("class", function (t) {
							return "resize " + t
						}).style("cursor", function (t) {
							return Vu[t]
						}).append("rect").attr("x", function (t) {
							return /[ew]$/.test(t) ? -3 : null
						}).attr("y", function (t) {
							return /^[ns]/.test(t) ? -3 : null
						}).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
						c.style("display", t.empty() ? "none": null);
						var l, p = rc.transition(o),
						f = rc.transition(a);
						s && (l = Po(s), f.attr("x", l[0]).attr("width", l[1] - l[0]), n(p)),
						u && (l = Po(u), f.attr("y", l[0]).attr("height", l[1] - l[0]), r(p)),
						e(p)
					})
				}
				function e(t) {
					t.selectAll(".resize").attr("transform", function (t) {
						return "translate(" + l[ + /e$/.test(t)] + "," + p[ + /^s/.test(t)] + ")"
					})
				}
				function n(t) {
					t.select(".extent").attr("x", l[0]),
					t.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
				}
				function r(t) {
					t.select(".extent").attr("y", p[0]),
					t.selectAll(".extent,.e>rect,.w>rect").attr("height", p[1] - p[0])
				}
				function i() {
					function i() {
						32 == rc.event.keyCode && (N || (m = null, x[0] -= l[1], x[1] -= p[1], N = 2), z())
					}
					function d() {
						32 == rc.event.keyCode && 2 == N && (x[0] += l[1], x[1] += p[1], N = 0, z())
					}
					function M() {
						var t = rc.mouse(A),
						i = !1;
						v && (t[0] += v[0], t[1] += v[1]),
						N || (rc.event.altKey ? (m || (m = [(l[0] + l[1]) / 2, (p[0] + p[1]) / 2]), x[0] = l[ + (t[0] < m[0])], x[1] = p[ + (t[1] < m[1])]) : m = null),
						L && g(t, s, 0) && (n(T), i = !0),
						w && g(t, u, 1) && (r(T), i = !0),
						i && (e(T), _({
							type: "brush",
							mode: N ? "move": "resize"
						}))
					}
					function g(t, e, n) {
						var r, i, c = Po(e),
						s = c[0],
						u = c[1],
						d = x[n],
						M = n ? p: l,
						g = M[1] - M[0];
						return N && (s -= d, u -= g + d),
						r = (n ? h: f) ? Math.max(s, Math.min(u, t[n])) : t[n],
						N ? i = (r += d) + g: (m && (d = Math.max(s, Math.min(u, 2 * m[n] - r))), r > d ? (i = r, r = d) : i = d),
						M[0] != r || M[1] != i ? (n ? a = null: o = null, M[0] = r, M[1] = i, !0) : void 0
					}
					function b() {
						M(),
						T.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none": null),
						rc.select("body").style("cursor", null),
						S.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null),
						q(),
						_({
							type: "brushend"
						})
					}
					var m, v, A = this,
					y = rc.select(rc.event.target),
					_ = c.of(A, arguments),
					T = rc.select(A),
					O = y.datum(),
					L = !/^(n|s)$/.test(O) && s,
					w = !/^(e|w)$/.test(O) && u,
					N = y.classed("extent"),
					q = G(),
					x = rc.mouse(A),
					S = rc.select(sc).on("keydown.brush", i).on("keyup.brush", d);
					if (rc.event.changedTouches ? S.on("touchmove.brush", M).on("touchend.brush", b) : S.on("mousemove.brush", M).on("mouseup.brush", b), T.interrupt().selectAll("*").interrupt(), N) x[0] = l[0] - x[0],
					x[1] = p[0] - x[1];
					else if (O) {
						var W = +/w$/.test(O),
						E = +/^n/.test(O);
						v = [l[1 - W] - x[0], p[1 - E] - x[1]],
						x[0] = l[W],
						x[1] = p[E]
					} else rc.event.altKey && (m = x.slice());
					T.style("pointer-events", "none").selectAll(".resize").style("display", null),
					rc.select("body").style("cursor", y.style("cursor")),
					_({
						type: "brushstart"
					}),
					M()
				}
				var o, a, c = T(t, "brushstart", "brush", "brushend"),
				s = null,
				u = null,
				l = [0, 0],
				p = [0, 0],
				f = !0,
				h = !0,
				d = Gu[0];
				return t.event = function (t) {
					t.each(function () {
						var t = c.of(this, arguments),
						e = {
							x: l,
							y: p,
							i: o,
							j: a
						},
						n = this.__chart__ || e;
						this.__chart__ = e,
						Du ? rc.select(this).transition().each("start.brush", function () {
							o = n.i,
							a = n.j,
							l = n.x,
							p = n.y,
							t({
								type: "brushstart"
							})
						}).tween("brush:brush", function () {
							var n = Ai(l, e.x),
							r = Ai(p, e.y);
							return o = a = null,
							function (i) {
								l = e.x = n(i),
								p = e.y = r(i),
								t({
									type: "brush",
									mode: "resize"
								})
							}
						}).each("end.brush", function () {
							o = e.i,
							a = e.j,
							t({
								type: "brush",
								mode: "resize"
							}),
							t({
								type: "brushend"
							})
						}) : (t({
							type: "brushstart"
						}), t({
							type: "brush",
							mode: "resize"
						}), t({
							type: "brushend"
						}))
					})
				},
				t.x = function (e) {
					return arguments.length ? (s = e, d = Gu[!s << 1 | !u], t) : s
				},
				t.y = function (e) {
					return arguments.length ? (u = e, d = Gu[!s << 1 | !u], t) : u
				},
				t.clamp = function (e) {
					return arguments.length ? (s && u ? (f = !!e[0], h = !!e[1]) : s ? f = !!e: u && (h = !!e), t) : s && u ? [f, h] : s ? f: u ? h: null
				},
				t.extent = function (e) {
					var n, r, i, c, f;
					return arguments.length ? (s && (n = e[0], r = e[1], u && (n = n[0], r = r[0]), o = [n, r], s.invert && (n = s(n), r = s(r)), n > r && (f = n, n = r, r = f), (n != l[0] || r != l[1]) && (l = [n, r])), u && (i = e[0], c = e[1], s && (i = i[1], c = c[1]), a = [i, c], u.invert && (i = u(i), c = u(c)), i > c && (f = i, i = c, c = f), (i != p[0] || c != p[1]) && (p = [i, c])), t) : (s && (o ? (n = o[0], r = o[1]) : (n = l[0], r = l[1], s.invert && (n = s.invert(n), r = s.invert(r)), n > r && (f = n, n = r, r = f))), u && (a ? (i = a[0], c = a[1]) : (i = p[0], c = p[1], u.invert && (i = u.invert(i), c = u.invert(c)), i > c && (f = i, i = c, c = f))), s && u ? [[n, i], [r, c]] : s ? [n, r] : u && [i, c])
				},
				t.clear = function () {
					return t.empty() || (l = [0, 0], p = [0, 0], o = a = null),
					t
				},
				t.empty = function () {
					return !! s && l[0] == l[1] || !!u && p[0] == p[1]
				},
				rc.rebind(t, c, "on")
			};
			var Vu = {
				n: "ns-resize",
				e: "ew-resize",
				s: "ns-resize",
				w: "ew-resize",
				nw: "nwse-resize",
				ne: "nesw-resize",
				se: "nwse-resize",
				sw: "nesw-resize"
			},
			Gu = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
			Yu = hs.format = vs.timeFormat,
			Ku = Yu.utc,
			$u = Ku("%Y-%m-%dT%H:%M:%S.%LZ");
			Yu.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ja: $u,
			Ja.parse = function (t) {
				var e = new Date(t);
				return isNaN(e) ? null: e
			},
			Ja.toString = $u.toString,
			hs.second = Pe(function (t) {
				return new ds(1e3 * Math.floor(t / 1e3))
			},
			function (t, e) {
				t.setTime(t.getTime() + 1e3 * Math.floor(e))
			},
			function (t) {
				return t.getSeconds()
			}),
			hs.seconds = hs.second.range,
			hs.seconds.utc = hs.second.utc.range,
			hs.minute = Pe(function (t) {
				return new ds(6e4 * Math.floor(t / 6e4))
			},
			function (t, e) {
				t.setTime(t.getTime() + 6e4 * Math.floor(e))
			},
			function (t) {
				return t.getMinutes()
			}),
			hs.minutes = hs.minute.range,
			hs.minutes.utc = hs.minute.utc.range,
			hs.hour = Pe(function (t) {
				var e = t.getTimezoneOffset() / 60;
				return new ds(36e5 * (Math.floor(t / 36e5 - e) + e))
			},
			function (t, e) {
				t.setTime(t.getTime() + 36e5 * Math.floor(e))
			},
			function (t) {
				return t.getHours()
			}),
			hs.hours = hs.hour.range,
			hs.hours.utc = hs.hour.utc.range,
			hs.month = Pe(function (t) {
				return t = hs.day(t),
				t.setDate(1),
				t
			},
			function (t, e) {
				t.setMonth(t.getMonth() + e)
			},
			function (t) {
				return t.getMonth()
			}),
			hs.months = hs.month.range,
			hs.months.utc = hs.month.utc.range;
			var Qu = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
			Ju = [[hs.second, 1], [hs.second, 5], [hs.second, 15], [hs.second, 30], [hs.minute, 1], [hs.minute, 5], [hs.minute, 15], [hs.minute, 30], [hs.hour, 1], [hs.hour, 3], [hs.hour, 6], [hs.hour, 12], [hs.day, 1], [hs.day, 2], [hs.week, 1], [hs.month, 1], [hs.month, 3], [hs.year, 1]],
			Zu = Yu.multi([[".%L", function (t) {
				return t.getMilliseconds()
			}], [":%S", function (t) {
				return t.getSeconds()
			}], ["%I:%M", function (t) {
				return t.getMinutes()
			}], ["%I %p", function (t) {
				return t.getHours()
			}], ["%a %d", function (t) {
				return t.getDay() && 1 != t.getDate()
			}], ["%b %d", function (t) {
				return 1 != t.getDate()
			}], ["%B", function (t) {
				return t.getMonth()
			}], ["%Y", xn]]),
			tl = {
				range: function (t, e, n) {
					return rc.range(Math.ceil(t / n) * n, +e, n).map(tc)
				},
				floor: we,
				ceil: we
			};
			Ju.year = hs.year,
			hs.scale = function () {
				return Za(rc.scale.linear(), Ju, Zu)
			};
			var el = Ju.map(function (t) {
				return [t[0].utc, t[1]]
			}),
			nl = Ku.multi([[".%L", function (t) {
				return t.getUTCMilliseconds()
			}], [":%S", function (t) {
				return t.getUTCSeconds()
			}], ["%I:%M", function (t) {
				return t.getUTCMinutes()
			}], ["%I %p", function (t) {
				return t.getUTCHours()
			}], ["%a %d", function (t) {
				return t.getUTCDay() && 1 != t.getUTCDate()
			}], ["%b %d", function (t) {
				return 1 != t.getUTCDate()
			}], ["%B", function (t) {
				return t.getUTCMonth()
			}], ["%Y", xn]]);
			el.year = hs.year.utc,
			hs.scale.utc = function () {
				return Za(rc.scale.linear(), el, nl)
			},
			rc.text = Ne(function (t) {
				return t.responseText
			}),
			rc.json = function (t, e) {
				return qe(t, "application/json", ec, e)
			},
			rc.html = function (t, e) {
				return qe(t, "text/html", nc, e)
			},
			rc.xml = Ne(function (t) {
				return t.responseXML
			}),
			"function" == typeof define && define.amd ? define(rc) : "object" == typeof e && e.exports && (e.exports = rc),
			this.d3 = rc
		} ()
	},
	{}],
	91 : [function (t, e, n) { !
		function (r) {
			"use strict";
			function i(t, e) {
				for (var n in e) t[n] = e[n];
				return t
			}
			function o() {}
			function a(t, e, n, a, c) {
				function u(t, e) {
					this.element = "string" == typeof t ? s.querySelector(t) : t,
					this.options = i({},
					this.options),
					i(this.options, e),
					this._create()
				}
				function f() {
					return ! 1
				}
				function h(t, e) {
					t.x = void 0 !== e.pageX ? e.pageX: e.clientX,
					t.y = void 0 !== e.pageY ? e.pageY: e.clientY
				}
				function M(t, e, n) {
					return n = n || "round",
					e ? Math[n](t / e) * e: t
				}
				var g = a("transform"),
				b = !!a("perspective");
				i(u.prototype, e.prototype),
				u.prototype.options = {},
				u.prototype._create = function () {
					this.position = {},
					this._getPosition(),
					this.startPoint = {
						x: 0,
						y: 0
					},
					this.dragPoint = {
						x: 0,
						y: 0
					},
					this.startPosition = i({},
					this.position);
					var t = l(this.element);
					"relative" !== t.position && "absolute" !== t.position && (this.element.style.position = "relative"),
					this.enable(),
					this.setHandles()
				},
				u.prototype.setHandles = function () {
					this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
					for (var t = 0, e = this.handles.length; e > t; t++) {
						var i = this.handles[t];
						r.navigator.pointerEnabled ? (n.bind(i, "pointerdown", this), i.style.touchAction = "none") : r.navigator.msPointerEnabled ? (n.bind(i, "MSPointerDown", this), i.style.msTouchAction = "none") : (n.bind(i, "mousedown", this), n.bind(i, "touchstart", this), v(i))
					}
				};
				var m = "attachEvent" in s.documentElement,
				v = m ?
				function (t) {
					"IMG" === t.nodeName && (t.ondragstart = f);
					for (var e = t.querySelectorAll("img"), n = 0, r = e.length; r > n; n++) {
						var i = e[n];
						i.ondragstart = f
					}
				}: o;
				u.prototype._getPosition = function () {
					var t = l(this.element),
					e = parseInt(t.left, 10),
					n = parseInt(t.top, 10);
					this.position.x = isNaN(e) ? 0 : e,
					this.position.y = isNaN(n) ? 0 : n,
					this._addTransformPosition(t)
				},
				u.prototype._addTransformPosition = function (t) {
					if (g) {
						var e = t[g];
						if (0 === e.indexOf("matrix")) {
							var n = e.split(","),
							r = 0 === e.indexOf("matrix3d") ? 12 : 4,
							i = parseInt(n[r], 10),
							o = parseInt(n[r + 1], 10);
							this.position.x += i,
							this.position.y += o
						}
					}
				},
				u.prototype.handleEvent = function (t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				},
				u.prototype.getTouch = function (t) {
					for (var e = 0, n = t.length; n > e; e++) {
						var r = t[e];
						if (r.identifier === this.pointerIdentifier) return r
					}
				},
				u.prototype.onmousedown = function (t) {
					var e = t.button;
					e && 0 !== e && 1 !== e || this.dragStart(t, t)
				},
				u.prototype.ontouchstart = function (t) {
					this.isDragging || this.dragStart(t, t.changedTouches[0])
				},
				u.prototype.onMSPointerDown = u.prototype.onpointerdown = function (t) {
					this.isDragging || this.dragStart(t, t)
				};
				var A = {
					mousedown: ["mousemove", "mouseup"],
					touchstart: ["touchmove", "touchend", "touchcancel"],
					pointerdown: ["pointermove", "pointerup", "pointercancel"],
					MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
				};
				u.prototype.dragStart = function (e, n) {
					this.isEnabled && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.pointerIdentifier = void 0 !== n.pointerId ? n.pointerId: n.identifier, this._getPosition(), this.measureContainment(), h(this.startPoint, n), this.startPosition.x = this.position.x, this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, this.dragPoint.y = 0, this._bindEvents({
						events: A[e.type],
						node: e.preventDefault ? r: s
					}), t.add(this.element, "is-dragging"), this.isDragging = !0, this.emitEvent("dragStart", [this, e, n]), this.animate())
				},
				u.prototype._bindEvents = function (t) {
					for (var e = 0, r = t.events.length; r > e; e++) {
						var i = t.events[e];
						n.bind(t.node, i, this)
					}
					this._boundEvents = t
				},
				u.prototype._unbindEvents = function () {
					var t = this._boundEvents;
					if (t && t.events) {
						for (var e = 0, r = t.events.length; r > e; e++) {
							var i = t.events[e];
							n.unbind(t.node, i, this)
						}
						delete this._boundEvents
					}
				},
				u.prototype.measureContainment = function () {
					var t = this.options.containment;
					if (t) {
						this.size = c(this.element);
						var e = this.element.getBoundingClientRect(),
						n = p(t) ? t: "string" == typeof t ? s.querySelector(t) : this.element.parentNode;
						this.containerSize = c(n);
						var r = n.getBoundingClientRect();
						this.relativeStartPosition = {
							x: e.left - r.left,
							y: e.top - r.top
						}
					}
				},
				u.prototype.onmousemove = function (t) {
					this.dragMove(t, t)
				},
				u.prototype.onMSPointerMove = u.prototype.onpointermove = function (t) {
					t.pointerId === this.pointerIdentifier && this.dragMove(t, t)
				},
				u.prototype.ontouchmove = function (t) {
					var e = this.getTouch(t.changedTouches);
					e && this.dragMove(t, e)
				},
				u.prototype.dragMove = function (t, e) {
					h(this.dragPoint, e);
					var n = this.dragPoint.x - this.startPoint.x,
					r = this.dragPoint.y - this.startPoint.y,
					i = this.options.grid,
					o = i && i[0],
					a = i && i[1];
					n = M(n, o),
					r = M(r, a),
					n = this.containDrag("x", n, o),
					r = this.containDrag("y", r, a),
					n = "y" === this.options.axis ? 0 : n,
					r = "x" === this.options.axis ? 0 : r,
					this.position.x = this.startPosition.x + n,
					this.position.y = this.startPosition.y + r,
					this.dragPoint.x = n,
					this.dragPoint.y = r,
					this.emitEvent("dragMove", [this, t, e])
				},
				u.prototype.containDrag = function (t, e, n) {
					if (!this.options.containment) return e;
					var r = "x" === t ? "width": "height",
					i = this.relativeStartPosition[t],
					o = M( - i, n, "ceil"),
					a = this.containerSize[r] - i - this.size[r];
					return a = M(a, n, "floor"),
					Math.min(a, Math.max(o, e))
				},
				u.prototype.onmouseup = function (t) {
					this.dragEnd(t, t)
				},
				u.prototype.onMSPointerUp = u.prototype.onpointerup = function (t) {
					t.pointerId === this.pointerIdentifier && this.dragEnd(t, t)
				},
				u.prototype.ontouchend = function (t) {
					var e = this.getTouch(t.changedTouches);
					e && this.dragEnd(t, e)
				},
				u.prototype.dragEnd = function (e, n) {
					this.isDragging = !1,
					delete this.pointerIdentifier,
					g && (this.element.style[g] = "", this.setLeftTop()),
					this._unbindEvents(),
					t.remove(this.element, "is-dragging"),
					this.emitEvent("dragEnd", [this, e, n])
				},
				u.prototype.onMSPointerCancel = u.prototype.onpointercancel = function (t) {
					t.pointerId === this.pointerIdentifier && this.dragEnd(t, t)
				},
				u.prototype.ontouchcancel = function (t) {
					var e = this.getTouch(t.changedTouches);
					this.dragEnd(t, e)
				},
				u.prototype.animate = function () {
					if (this.isDragging) {
						this.positionDrag();
						var t = this;
						d(function () {
							t.animate()
						})
					}
				};
				var y = b ?
				function (t, e) {
					return "translate3d( " + t + "px, " + e + "px, 0)"
				}: function (t, e) {
					return "translate( " + t + "px, " + e + "px)"
				};
				return u.prototype.setLeftTop = function () {
					this.element.style.left = this.position.x + "px",
					this.element.style.top = this.position.y + "px"
				},
				u.prototype.positionDrag = g ?
				function () {
					this.element.style[g] = y(this.dragPoint.x, this.dragPoint.y)
				}: u.prototype.setLeftTop,
				u.prototype.enable = function () {
					this.isEnabled = !0
				},
				u.prototype.disable = function () {
					this.isEnabled = !1,
					this.isDragging && this.dragEnd()
				},
				u
			}
			for (var c, s = r.document, u = s.defaultView, l = u && u.getComputedStyle ?
			function (t) {
				return u.getComputedStyle(t, null)
			}: function (t) {
				return t.currentStyle
			},
			p = "object" == typeof HTMLElement ?
			function (t) {
				return t instanceof HTMLElement
			}: function (t) {
				return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
			},
			f = 0, h = "webkit moz ms o".split(" "), d = r.requestAnimationFrame, M = r.cancelAnimationFrame, g = 0; g < h.length && (!d || !M); g++) c = h[g],
			d = d || r[c + "RequestAnimationFrame"],
			M = M || r[c + "CancelAnimationFrame"] || r[c + "CancelRequestAnimationFrame"];
			d && M || (d = function (t) {
				var e = (new Date).getTime(),
				n = Math.max(0, 16 - (e - f)),
				i = r.setTimeout(function () {
					t(e + n)
				},
				n);
				return f = e + n,
				i
			},
			M = function (t) {
				r.clearTimeout(t)
			}),
			"function" == typeof define && define.amd ? define(["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-style-property/get-style-property", "get-size/get-size"], a) : "object" == typeof n ? e.exports = a(t(92), t(96), t(94), t(93), t(95)) : r.Draggabilly = a(r.classie, r.EventEmitter, r.eventie, r.getStyleProperty, r.getSize)
		} (window)
	},
	{}],
	92 : [function (t, e, n) { !
		function (t) {
			"use strict";
			function r(t) {
				return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
			}
			function i(t, e) {
				var n = o(t, e) ? c: a;
				n(t, e)
			}
			var o, a, c;
			"classList" in document.documentElement ? (o = function (t, e) {
				return t.classList.contains(e)
			},
			a = function (t, e) {
				t.classList.add(e)
			},
			c = function (t, e) {
				t.classList.remove(e)
			}) : (o = function (t, e) {
				return r(e).test(t.className)
			},
			a = function (t, e) {
				o(t, e) || (t.className = t.className + " " + e)
			},
			c = function (t, e) {
				t.className = t.className.replace(r(e), " ")
			});
			var s = {
				hasClass: o,
				addClass: a,
				removeClass: c,
				toggleClass: i,
				has: o,
				add: a,
				remove: c,
				toggle: i
			};
			"function" == typeof define && define.amd ? define(s) : "object" == typeof n ? e.exports = s: t.classie = s
		} (window)
	},
	{}],
	93 : [function (t, e, n) { !
		function (t) {
			"use strict";
			function r(t) {
				if (t) {
					if ("string" == typeof o[t]) return t;
					t = t.charAt(0).toUpperCase() + t.slice(1);
					for (var e, n = 0, r = i.length; r > n; n++) if (e = i[n] + t, "string" == typeof o[e]) return e
				}
			}
			var i = "Webkit Moz ms Ms O".split(" "),
			o = document.documentElement.style;
			"function" == typeof define && define.amd ? define(function () {
				return r
			}) : "object" == typeof n ? e.exports = r: t.getStyleProperty = r
		} (window)
	},
	{}],
	94 : [function (t, e, n) { !
		function (t) {
			"use strict";
			function r(e) {
				var n = t.event;
				return n.target = n.target || n.srcElement || e,
				n
			}
			var i = document.documentElement,
			o = function () {};
			i.addEventListener ? o = function (t, e, n) {
				t.addEventListener(e, n, !1)
			}: i.attachEvent && (o = function (t, e, n) {
				t[e + n] = n.handleEvent ?
				function () {
					var e = r(t);
					n.handleEvent.call(n, e)
				}: function () {
					var e = r(t);
					n.call(t, e)
				},
				t.attachEvent("on" + e, t[e + n])
			});
			var a = function () {};
			i.removeEventListener ? a = function (t, e, n) {
				t.removeEventListener(e, n, !1)
			}: i.detachEvent && (a = function (t, e, n) {
				t.detachEvent("on" + e, t[e + n]);
				try {
					delete t[e + n]
				} catch(r) {
					t[e + n] = void 0
				}
			});
			var c = {
				bind: o,
				unbind: a
			};
			"function" == typeof define && define.amd ? define(c) : "object" == typeof n ? e.exports = c: t.eventie = c
		} (this)
	},
	{}],
	95 : [function (t, e, n) { !
		function (r) {
			"use strict";
			function i(t) {
				var e = parseFloat(t),
				n = -1 === t.indexOf("%") && !isNaN(e);
				return n && e
			}
			function o() {
				for (var t = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				},
				e = 0, n = u.length; n > e; e++) {
					var r = u[e];
					t[r] = 0
				}
				return t
			}
			function a(t) {
				function e(t) {
					if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
						var e = s(t);
						if ("none" === e.display) return o();
						var c = {};
						c.width = t.offsetWidth,
						c.height = t.offsetHeight;
						for (var l = c.isBorderBox = !(!a || !e[a] || "border-box" !== e[a]), p = 0, f = u.length; f > p; p++) {
							var h = u[p],
							d = e[h];
							d = n(t, d);
							var M = parseFloat(d);
							c[h] = isNaN(M) ? 0 : M
						}
						var g = c.paddingLeft + c.paddingRight,
						b = c.paddingTop + c.paddingBottom,
						m = c.marginLeft + c.marginRight,
						v = c.marginTop + c.marginBottom,
						A = c.borderLeftWidth + c.borderRightWidth,
						y = c.borderTopWidth + c.borderBottomWidth,
						z = l && r,
						_ = i(e.width);
						_ !== !1 && (c.width = _ + (z ? 0 : g + A));
						var T = i(e.height);
						return T !== !1 && (c.height = T + (z ? 0 : b + y)),
						c.innerWidth = c.width - (g + A),
						c.innerHeight = c.height - (b + y),
						c.outerWidth = c.width + m,
						c.outerHeight = c.height + v,
						c
					}
				}
				function n(t, e) {
					if (c || -1 === e.indexOf("%")) return e;
					var n = t.style,
					r = n.left,
					i = t.runtimeStyle,
					o = i && i.left;
					return o && (i.left = t.currentStyle.left),
					n.left = e,
					e = n.pixelLeft,
					n.left = r,
					o && (i.left = o),
					e
				}
				var r, a = t("boxSizing");
				return function () {
					if (a) {
						var t = document.createElement("div");
						t.style.width = "200px",
						t.style.padding = "1px 2px 3px 4px",
						t.style.borderStyle = "solid",
						t.style.borderWidth = "1px 2px 3px 4px",
						t.style[a] = "border-box";
						var e = document.body || document.documentElement;
						e.appendChild(t);
						var n = s(t);
						r = 200 === i(n.width),
						e.removeChild(t)
					}
				} (),
				e
			}
			var c = r.getComputedStyle,
			s = c ?
			function (t) {
				return c(t, null)
			}: function (t) {
				return t.currentStyle
			},
			u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
			"function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], a) : "object" == typeof n ? e.exports = a(t(93)) : r.getSize = a(r.getStyleProperty)
		} (window)
	},
	{}],
	96 : [function (t, e) { (function () {
			"use strict";
			function t() {}
			function n(t, e) {
				for (var n = t.length; n--;) if (t[n].listener === e) return n;
				return - 1
			}
			function r(t) {
				return function () {
					return this[t].apply(this, arguments)
				}
			}
			var i = t.prototype,
			o = this,
			a = o.EventEmitter;
			i.getListeners = function (t) {
				var e, n, r = this._getEvents();
				if (t instanceof RegExp) {
					e = {};
					for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
				} else e = r[t] || (r[t] = []);
				return e
			},
			i.flattenListeners = function (t) {
				var e, n = [];
				for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
				return n
			},
			i.getListenersAsObject = function (t) {
				var e, n = this.getListeners(t);
				return n instanceof Array && (e = {},
				e[t] = n),
				e || n
			},
			i.addListener = function (t, e) {
				var r, i = this.getListenersAsObject(t),
				o = "object" == typeof e;
				for (r in i) i.hasOwnProperty(r) && -1 === n(i[r], e) && i[r].push(o ? e: {
					listener: e,
					once: !1
				});
				return this
			},
			i.on = r("addListener"),
			i.addOnceListener = function (t, e) {
				return this.addListener(t, {
					listener: e,
					once: !0
				})
			},
			i.once = r("addOnceListener"),
			i.defineEvent = function (t) {
				return this.getListeners(t),
				this
			},
			i.defineEvents = function (t) {
				for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
				return this
			},
			i.removeListener = function (t, e) {
				var r, i, o = this.getListenersAsObject(t);
				for (i in o) o.hasOwnProperty(i) && (r = n(o[i], e), -1 !== r && o[i].splice(r, 1));
				return this
			},
			i.off = r("removeListener"),
			i.addListeners = function (t, e) {
				return this.manipulateListeners(!1, t, e)
			},
			i.removeListeners = function (t, e) {
				return this.manipulateListeners(!0, t, e)
			},
			i.manipulateListeners = function (t, e, n) {
				var r, i, o = t ? this.removeListener: this.addListener,
				a = t ? this.removeListeners: this.addListeners;
				if ("object" != typeof e || e instanceof RegExp) for (r = n.length; r--;) o.call(this, e, n[r]);
				else for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
				return this
			},
			i.removeEvent = function (t) {
				var e, n = typeof t,
				r = this._getEvents();
				if ("string" === n) delete r[t];
				else if (t instanceof RegExp) for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
				else delete this._events;
				return this
			},
			i.removeAllListeners = r("removeEvent"),
			i.emitEvent = function (t, e) {
				var n, r, i, o, a = this.getListenersAsObject(t);
				for (i in a) if (a.hasOwnProperty(i)) for (r = a[i].length; r--;) n = a[i][r],
				n.once === !0 && this.removeListener(t, n.listener),
				o = n.listener.apply(this, e || []),
				o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
				return this
			},
			i.trigger = r("emitEvent"),
			i.emit = function (t) {
				var e = Array.prototype.slice.call(arguments, 1);
				return this.emitEvent(t, e)
			},
			i.setOnceReturnValue = function (t) {
				return this._onceReturnValue = t,
				this
			},
			i._getOnceReturnValue = function () {
				return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue: !0
			},
			i._getEvents = function () {
				return this._events || (this._events = {})
			},
			t.noConflict = function () {
				return o.EventEmitter = a,
				t
			},
			"function" == typeof define && define.amd ? define(function () {
				return t
			}) : "object" == typeof e && e.exports ? e.exports = t: o.EventEmitter = t
		}).call(this)
	},
	{}],
	97 : [function (t, e) {
		var n = e.exports = function (t, e) {
			if (e || (e = 16), void 0 === t && (t = 128), 0 >= t) return "0";
			for (var r = Math.log(Math.pow(2, t)) / Math.log(e), i = 2; 1 / 0 === r; i *= 2) r = Math.log(Math.pow(2, t / i)) / Math.log(e) * i;
			for (var o = r - Math.floor(r), a = "", i = 0; i < Math.floor(r); i++) {
				var c = Math.floor(Math.random() * e).toString(e);
				a = c + a
			}
			if (o) {
				var s = Math.pow(e, o),
				c = Math.floor(Math.random() * s).toString(e);
				a = c + a
			}
			var u = parseInt(a, e);
			return 1 / 0 !== u && u >= Math.pow(2, t) ? n(t, e) : a
		};
		n.rack = function (t, e, r) {
			var i = function (i) {
				var a = 0;
				do {
					if (a++>10) {
						if (!r) throw new Error("too many ID collisions, use more bits");
						t += r
					}
					var c = n(t, e)
				} while (Object.hasOwnProperty.call(o, c));
				return o[c] = i,
				c
			},
			o = i.hats = {};
			return i.get = function (t) {
				return i.hats[t]
			},
			i.set = function (t, e) {
				return i.hats[t] = e,
				i
			},
			i.bits = t || 128,
			i.base = e || 16,
			i
		}
	},
	{}],
	98 : [function (t, e) {
		console.log('in the 98th function! e.exports = ' + e.exports);
		 !
		function (t, n) {
			"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (t) {
				if (!t.document) throw new Error("jQuery requires a window with a document");
				return n(t)
			}: n(t)
			console.log('in im, e.exports=' + JSON.stringify(e.exports));
		} ("undefined" != typeof window ? window: this, function (t, e) {
			console.log('in 98 next');
			function n(t) {
				var e = t.length,
				n = Z.type(t);
				//console.log('98 e = '+ JSON.stringify(t));

				return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
			}
			console.log('98 aftr n');
			function r(t, e, n) {
				if (Z.isFunction(e)) return Z.grep(t, function (t, r) {
					return !! e.call(t, r, t) !== n
				});
				if (e.nodeType) return Z.grep(t, function (t) {
					return t === e !== n
				});
				if ("string" == typeof e) {
					if (ce.test(e)) return Z.filter(e, t, n);
					e = Z.filter(e, t)
				}
				return Z.grep(t, function (t) {
					return V.call(e, t) >= 0 !== n
				})
			}
			console.log('aftr r');
			function i(t, e) {
				for (;
				(t = t[e]) && 1 !== t.nodeType;);
				return t
			}
			console.log('after i')
			function o(t) {
				var e = de[t] = {};
				return Z.each(t.match(he) || [], function (t, n) {
					e[n] = !0
				}),
				e
			}
			function a() {
				Q.removeEventListener("DOMContentLoaded", a, !1),
				t.removeEventListener("load", a, !1),
				Z.ready()
			}
			function c() {
				Object.defineProperty(this.cache = {},
				0, {
					get: function () {
						return {}
					}
				}),
				this.expando = Z.expando + Math.random()
			}
			function s(t, e, n) {
				var r;
				if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(Ae, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: ve.test(n) ? Z.parseJSON(n) : n
					} catch(i) {}
					me.set(t, e, n)
				} else n = void 0;
				return n
			}
			function u() {
				return ! 0
			}
			function l() {
				return ! 1
			}
			function p() {
				try {
					return Q.activeElement
				} catch(t) {}
			}
			function f(t, e) {
				return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
			}
			function h(t) {
				return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
				t
			}
			function d(t) {
				var e = Xe.exec(t.type);
				return e ? t.type = e[1] : t.removeAttribute("type"),
				t
			}
			function M(t, e) {
				for (var n = 0, r = t.length; r > n; n++) be.set(t[n], "globalEval", !e || be.get(e[n], "globalEval"))
			}
			function g(t, e) {
				var n, r, i, o, a, c, s, u;
				if (1 === e.nodeType) {
					if (be.hasData(t) && (o = be.access(t), a = be.set(e, o), u = o.events)) {
						delete a.handle,
						a.events = {};
						for (i in u) for (n = 0, r = u[i].length; r > n; n++) Z.event.add(e, i, u[i][n])
					}
					me.hasData(t) && (c = me.access(t), s = Z.extend({},
					c), me.set(e, s))
				}
			}
			function b(t, e) {
				var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
				return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
			}
			function m(t, e) {
				var n = e.nodeName.toLowerCase();
				"input" === n && Te.test(t.type) ? e.checked = t.checked: ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
			}
			function v(e, n) {
				var r, i = Z(n.createElement(e)).appendTo(n.body),
				o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display: Z.css(i[0], "display");
				return i.detach(),
				o
			}
			function A(t) {
				var e = Q,
				n = Pe[t];
				return n || (n = v(t, e), "none" !== n && n || (De = (De || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = De[0].contentDocument, e.write(), e.close(), n = v(t, e), De.detach()), Pe[t] = n),
				n
			}
			function y(t, e, n) {
				var r, i, o, a, c = t.style;
				return n = n || He(t),
				n && (a = n.getPropertyValue(e) || n[e]),
				n && ("" !== a || Z.contains(t.ownerDocument, t) || (a = Z.style(t, e)), je.test(a) && Ie.test(e) && (r = c.width, i = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = a, a = n.width, c.width = r, c.minWidth = i, c.maxWidth = o)),
				void 0 !== a ? a + "": a
			}
			function z(t, e) {
				return {
					get: function () {
						return t() ? void delete this.get: (this.get = e).apply(this, arguments)
					}
				}
			}
			function _(t, e) {
				if (e in t) return e;
				for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Ke.length; i--;) if (e = Ke[i] + n, e in t) return e;
				return r
			}
			function T(t, e, n) {
				var r = Fe.exec(e);
				return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
			}
			function O(t, e, n, r, i) {
				for (var o = n === (r ? "border": "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += Z.css(t, n + ze[o], !0, i)),
				r ? ("content" === n && (a -= Z.css(t, "padding" + ze[o], !0, i)), "margin" !== n && (a -= Z.css(t, "border" + ze[o] + "Width", !0, i))) : (a += Z.css(t, "padding" + ze[o], !0, i), "padding" !== n && (a += Z.css(t, "border" + ze[o] + "Width", !0, i)));
				return a
			}
			function L(t, e, n) {
				var r = !0,
				i = "width" === e ? t.offsetWidth: t.offsetHeight,
				o = He(t),
				a = "border-box" === Z.css(t, "boxSizing", !1, o);
				if (0 >= i || null == i) {
					if (i = y(t, e, o), (0 > i || null == i) && (i = t.style[e]), je.test(i)) return i;
					r = a && ($.boxSizingReliable() || i === t.style[e]),
					i = parseFloat(i) || 0
				}
				return i + O(t, e, n || (a ? "border": "content"), r, o) + "px"
			}
			function w(t, e) {
				for (var n, r, i, o = [], a = 0, c = t.length; c > a; a++) r = t[a],
				r.style && (o[a] = be.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && _e(r) && (o[a] = be.access(r, "olddisplay", A(r.nodeName)))) : (i = _e(r), "none" === n && i || be.set(r, "olddisplay", i ? n: Z.css(r, "display"))));
				for (a = 0; c > a; a++) r = t[a],
				r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "": "none"));
				return t
			}
			function N(t, e, n, r, i) {
				return new N.prototype.init(t, e, n, r, i)
			}
			function q() {
				return setTimeout(function () {
					$e = void 0
				}),
				$e = Z.now()
			}
			function x(t, e) {
				var n, r = 0,
				i = {
					height: t
				};
				for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = ze[r],
				i["margin" + n] = i["padding" + n] = t;
				return e && (i.opacity = i.width = t),
				i
			}
			function S(t, e, n) {
				for (var r, i = (nn[e] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, e, t)) return r
			}
			function W(t, e, n) {
				var r, i, o, a, c, s, u, l, p = this,
				f = {},
				h = t.style,
				d = t.nodeType && _e(t),
				M = be.get(t, "fxshow");
				n.queue || (c = Z._queueHooks(t, "fx"), null == c.unqueued && (c.unqueued = 0, s = c.empty.fire, c.empty.fire = function () {
					c.unqueued || s()
				}), c.unqueued++, p.always(function () {
					p.always(function () {
						c.unqueued--,
						Z.queue(t, "fx").length || c.empty.fire()
					})
				})),
				1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = Z.css(t, "display"), l = "none" === u ? be.get(t, "olddisplay") || A(t.nodeName) : u, "inline" === l && "none" === Z.css(t, "float") && (h.display = "inline-block")),
				n.overflow && (h.overflow = "hidden", p.always(function () {
					h.overflow = n.overflow[0],
					h.overflowX = n.overflow[1],
					h.overflowY = n.overflow[2]
				}));
				for (r in e) if (i = e[r], Je.exec(i)) {
					if (delete e[r], o = o || "toggle" === i, i === (d ? "hide": "show")) {
						if ("show" !== i || !M || void 0 === M[r]) continue;
						d = !0
					}
					f[r] = M && M[r] || Z.style(t, r)
				} else u = void 0;
				if (Z.isEmptyObject(f))"inline" === ("none" === u ? A(t.nodeName) : u) && (h.display = u);
				else {
					M ? "hidden" in M && (d = M.hidden) : M = be.access(t, "fxshow", {}),
					o && (M.hidden = !d),
					d ? Z(t).show() : p.done(function () {
						Z(t).hide()
					}),
					p.done(function () {
						var e;
						be.remove(t, "fxshow");
						for (e in f) Z.style(t, e, f[e])
					});
					for (r in f) a = S(d ? M[r] : 0, r, p),
					r in M || (M[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
				}
			}
			function E(t, e) {
				var n, r, i, o, a;
				for (n in t) if (r = Z.camelCase(n), i = e[r], o = t[n], Z.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = Z.cssHooks[r], a && "expand" in a) {
					o = a.expand(o),
					delete t[r];
					for (n in o) n in t || (t[n] = o[n], e[n] = i)
				} else e[r] = i
			}
			console.log('before E');
			function B(t, e, n) {
				var r, i, o = 0,
				a = en.length,
				c = Z.Deferred().always(function () {
					delete s.elem
				}),
				s = function () {
					if (i) return ! 1;
					for (var e = $e || q(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, s = u.tweens.length; s > a; a++) u.tweens[a].run(o);
					return c.notifyWith(t, [u, o, n]),
					1 > o && s ? n: (c.resolveWith(t, [u]), !1)
				},
				u = c.promise({
					elem: t,
					props: Z.extend({},
					e),
					opts: Z.extend(!0, {
						specialEasing: {}
					},
					n),
					originalProperties: e,
					originalOptions: n,
					startTime: $e || q(),
					duration: n.duration,
					tweens: [],
					createTween: function (e, n) {
						var r = Z.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
						return u.tweens.push(r),
						r
					},
					stop: function (e) {
						var n = 0,
						r = e ? u.tweens.length: 0;
						if (i) return this;
						for (i = !0; r > n; n++) u.tweens[n].run(1);
						return e ? c.resolveWith(t, [u, e]) : c.rejectWith(t, [u, e]),
						this
					}
				}),
				l = u.props;
				for (E(l, u.opts.specialEasing); a > o; o++) if (r = en[o].call(u, t, l, u.opts)) return r;
				return Z.map(l, S, u),
				Z.isFunction(u.opts.start) && u.opts.start.call(t, u),
				Z.fx.timer(Z.extend(s, {
					elem: t,
					anim: u,
					queue: u.opts.queue
				})),
				u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
			}
			function C(t) {
				return function (e, n) {
					"string" != typeof e && (n = e, e = "*");
					var r, i = 0,
					o = e.toLowerCase().match(he) || [];
					if (Z.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
				}
			}
			function X(t, e, n, r) {
				function i(c) {
					var s;
					return o[c] = !0,
					Z.each(t[c] || [], function (t, c) {
						var u = c(e, n, r);
						return "string" != typeof u || a || o[u] ? a ? !(s = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
					}),
					s
				}
				var o = {},
				a = t === zn;
				return i(e.dataTypes[0]) || !o["*"] && i("*")
			}
			function R(t, e) {
				var n, r, i = Z.ajaxSettings.flatOptions || {};
				for (n in e) void 0 !== e[n] && ((i[n] ? t: r || (r = {}))[n] = e[n]);
				return r && Z.extend(!0, t, r),
				t
			}
			function k(t, e, n) {
				for (var r, i, o, a, c = t.contents, s = t.dataTypes;
				"*" === s[0];) s.shift(),
				void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
				if (r) for (i in c) if (c[i] && c[i].test(r)) {
					s.unshift(i);
					break
				}
				if (s[0] in n) o = s[0];
				else {
					for (i in n) {
						if (!s[0] || t.converters[i + " " + s[0]]) {
							o = i;
							break
						}
						a || (a = i)
					}
					o = o || a
				}
				return o ? (o !== s[0] && s.unshift(o), n[o]) : void 0
			}
			function D(t, e, n, r) {
				console.log('inside D');
				var i, o, a, c, s, u = {},
				l = t.dataTypes.slice();
				if (l[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
				for (o = l.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !s && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), s = o, o = l.shift()) if ("*" === o) o = s;
				else if ("*" !== s && s !== o) {
					if (a = u[s + " " + o] || u["* " + o], !a) for (i in u) if (c = i.split(" "), c[1] === o && (a = u[s + " " + c[0]] || u["* " + c[0]])) {
						a === !0 ? a = u[i] : u[i] !== !0 && (o = c[0], l.unshift(c[1]));
						break
					}
					if (a !== !0) if (a && t["throws"]) e = a(e);
					else try {
						e = a(e)
					} catch(p) {
						return {
							state: "parsererror",
							error: a ? p: "No conversion from " + s + " to " + o
						}
					}
				}
				return {
					state: "success",
					data: e
				}

			}
			console.log('b4 D');
			function P(t, e, n, r) {
				var i;
				if (Z.isArray(e)) Z.each(e, function (e, i) {
					n || Ln.test(t) ? r(t, i) : P(t + "[" + ("object" == typeof i ? e: "") + "]", i, n, r)
				});
				else if (n || "object" !== Z.type(e)) r(t, e);
				else for (i in e) P(t + "[" + i + "]", e[i], n, r)
			}
			function I(t) {
				return Z.isWindow(t) ? t: 9 === t.nodeType && t.defaultView
			}
			console.log('aftr I');
			var j = [],
			H = j.slice,
			U = j.concat,
			F = j.push,
			V = j.indexOf,
			G = {},
			Y = G.toString,
			K = G.hasOwnProperty,
			$ = {},
			Q = t.document,
			J = "2.1.1",
			Z = function (t, e) {
				//console.log('in Z func');
				return new Z.fn.init(t, e)
			},
			te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ee = /^-ms-/,
			ne = /-([\da-z])/gi,
			re = function (t, e) {
				return e.toUpperCase()
			};
			console.log('after all dec starting J');
			Z.fn = Z.prototype = {

				jquery: J,
				constructor: Z,
				selector: "",
				length: 0,
				toArray: function () {
					return H.call(this)
				},
				get: function (t) {
					return null != t ? 0 > t ? this[t + this.length] : this[t] : H.call(this)
				},
				pushStack: function (t) {
					var e = Z.merge(this.constructor(), t);
					return e.prevObject = this,
					e.context = this.context,
					e
				},
				each: function (t, e) {
					return Z.each(this, t, e)
				},
				map: function (t) {
					return this.pushStack(Z.map(this, function (e, n) {
						return t.call(e, n, e)
					}))
				},
				slice: function () {
					return this.pushStack(H.apply(this, arguments))
				},
				first: function () {
					return this.eq(0)
				},
				last: function () {
					return this.eq( - 1)
				},
				eq: function (t) {
					var e = this.length,
					n = +t + (0 > t ? e: 0);
					return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
				},
				end: function () {
					return this.prevObject || this.constructor(null)
				},
				push: F,
				sort: j.sort,
				splice: j.splice
			},
			Z.extend = Z.fn.extend = function () {
				var t, e, n, r, i, o, a = arguments[0] || {},
				c = 1,
				s = arguments.length,
				u = !1;
				for ("boolean" == typeof a && (u = a, a = arguments[c] || {},
				c++), "object" == typeof a || Z.isFunction(a) || (a = {}), c === s && (a = this, c--); s > c; c++) if (null != (t = arguments[c])) for (e in t) n = a[e],
				r = t[e],
				a !== r && (u && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n: []) : o = n && Z.isPlainObject(n) ? n: {},
				a[e] = Z.extend(u, o, r)) : void 0 !== r && (a[e] = r));
				return a
			},
			Z.extend({
				expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function (t) {
					throw new Error(t)
				},
				noop: function () {},
				isFunction: function (t) {
					return "function" === Z.type(t)
				},
				isArray: Array.isArray,
				isWindow: function (t) {
					return null != t && t === t.window
				},
				isNumeric: function (t) {
					return ! Z.isArray(t) && t - parseFloat(t) >= 0
				},
				isPlainObject: function (t) {
					return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !K.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
				},
				isEmptyObject: function (t) {
					var e;
					for (e in t) return ! 1;
					return ! 0
				},
				type: function (t) {
					return null == t ? t + "": "object" == typeof t || "function" == typeof t ? G[Y.call(t)] || "object": typeof t
				},
				globalEval: function (t) {
					var e, n = eval;
					t = Z.trim(t),
					t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
				},
				camelCase: function (t) {
					return t.replace(ee, "ms-").replace(ne, re)
				},
				nodeName: function (t, e) {
					return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
				},
				each: function (t, e, r) {
					var i, o = 0,
					a = t.length,
					c = n(t);
					if (r) {
						if (c) for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
						else for (o in t) if (i = e.apply(t[o], r), i === !1) break
					} else if (c) for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
					else for (o in t) if (i = e.call(t[o], o, t[o]), i === !1) break;
					return t
				},
				trim: function (t) {
					return null == t ? "": (t + "").replace(te, "")
				},
				makeArray: function (t, e) {
					var r = e || [];
					return null != t && (n(Object(t)) ? Z.merge(r, "string" == typeof t ? [t] : t) : F.call(r, t)),
					r
				},
				inArray: function (t, e, n) {
					return null == e ? -1 : V.call(e, t, n)
				},
				merge: function (t, e) {
					for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
					return t.length = i,
					t
				},
				grep: function (t, e, n) {
					for (var r, i = [], o = 0, a = t.length, c = !n; a > o; o++) r = !e(t[o], o),
					r !== c && i.push(t[o]);
					return i
				},
				map: function (t, e, r) {
					var i, o = 0,
					a = t.length,
					c = n(t),
					s = [];
					if (c) for (; a > o; o++) i = e(t[o], o, r),
					null != i && s.push(i);
					else for (o in t) i = e(t[o], o, r),
					null != i && s.push(i);
					return U.apply([], s)
				},
				guid: 1,
				proxy: function (t, e) {
					var n, r, i;
					return "string" == typeof e && (n = t[e], e = t, t = n),
					Z.isFunction(t) ? (r = H.call(arguments, 2), i = function () {
						return t.apply(e || this, r.concat(H.call(arguments)))
					},
					i.guid = t.guid = t.guid || Z.guid++, i) : void 0
				},
				now: Date.now,
				support: $
			}),
			Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
				//console.log('in Z each');
				G["[object " + e + "]"] = e.toLowerCase()
				//console.log('each G=' + JSON.stringify(G));
			});
			var ie = function (t) {
				console.log('in ie var func');
				function e(t, e, n, r) {
					//console.log('inside e');
					var i, o, a, c, s, u, p, h, d, M;
					if ((e ? e.ownerDocument || e: P) !== W && S(e), e = e || W, n = n || [], !t || "string" != typeof t) return n;
					if (1 !== (c = e.nodeType) && 9 !== c) return [];
					if (B && !r) {
						if (i = me.exec(t)) if (a = i[1]) {
							if (9 === c) {
								if (o = e.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o),
								n
							} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && k(e, o) && o.id === a) return n.push(o),
							n
						} else {
							if (i[2]) return Z.apply(n, e.getElementsByTagName(t)),
							n;
							if ((a = i[3]) && y.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)),
							n
						}
						if (y.qsa && (!C || !C.test(t))) {
							if (h = p = D, d = e, M = 9 === c && t, 1 === c && "object" !== e.nodeName.toLowerCase()) {
								for (u = O(t), (p = e.getAttribute("id")) ? h = p.replace(Ae, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", s = u.length; s--;) u[s] = h + f(u[s]);
								d = ve.test(t) && l(e.parentNode) || e,
								M = u.join(",")
							}
							if (M) try {
								return Z.apply(n, d.querySelectorAll(M)),
								n
							} catch(g) {} finally {
								p || e.removeAttribute("id")
							}
						}
					}
					return w(t.replace(se, "$1"), e, n, r)
				}
				function n() {
					function t(n, r) {
						return e.push(n + " ") > z.cacheLength && delete t[e.shift()],
						t[n + " "] = r
					}
					var e = [];
					return t
				}
				function r(t) {
					return t[D] = !0,
					t
				}
				function i(t) {
					var e = W.createElement("div");
					try {
						return !! t(e)
					} catch(n) {
						return ! 1
					} finally {
						e.parentNode && e.parentNode.removeChild(e),
						e = null
					}
				}
				function o(t, e) {
					for (var n = t.split("|"), r = t.length; r--;) z.attrHandle[n[r]] = e
				}
				function a(t, e) {
					var n = e && t,
					r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
					if (r) return r;
					if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
					return t ? 1 : -1
				}
				function c(t) {
					return function (e) {
						var n = e.nodeName.toLowerCase();
						return "input" === n && e.type === t
					}
				}
				function s(t) {
					return function (e) {
						var n = e.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && e.type === t
					}
				}
				function u(t) {
					return r(function (e) {
						return e = +e,
						r(function (n, r) {
							for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}
				function l(t) {
					return t && typeof t.getElementsByTagName !== G && t
				}
				function p() {}
				function f(t) {
					for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
					return r
				}
				function h(t, e, n) {
					var r = e.dir,
					i = n && "parentNode" === r,
					o = j++;
					return e.first ?
					function (e, n, o) {
						for (; e = e[r];) if (1 === e.nodeType || i) return t(e, n, o)
					}: function (e, n, a) {
						var c, s, u = [I, o];
						if (a) {
							for (; e = e[r];) if ((1 === e.nodeType || i) && t(e, n, a)) return ! 0
						} else for (; e = e[r];) if (1 === e.nodeType || i) {
							if (s = e[D] || (e[D] = {}), (c = s[r]) && c[0] === I && c[1] === o) return u[2] = c[2];
							if (s[r] = u, u[2] = t(e, n, a)) return ! 0
						}
					}
				}
				function d(t) {
					return t.length > 1 ?
					function (e, n, r) {
						for (var i = t.length; i--;) if (!t[i](e, n, r)) return ! 1;
						return ! 0
					}: t[0]
				}
				function M(t, n, r) {
					for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
					return r
				}
				function g(t, e, n, r, i) {
					for (var o, a = [], c = 0, s = t.length, u = null != e; s > c; c++)(o = t[c]) && (!n || n(o, r, i)) && (a.push(o), u && e.push(c));
					return a
				}
				function b(t, e, n, i, o, a) {
					return i && !i[D] && (i = b(i)),
					o && !o[D] && (o = b(o, a)),
					r(function (r, a, c, s) {
						var u, l, p, f = [],
						h = [],
						d = a.length,
						b = r || M(e || "*", c.nodeType ? [c] : c, []),
						m = !t || !r && e ? b: g(b, f, t, c, s),
						v = n ? o || (r ? t: d || i) ? [] : a: m;
						if (n && n(m, v, c, s), i) for (u = g(v, h), i(u, [], c, s), l = u.length; l--;)(p = u[l]) && (v[h[l]] = !(m[h[l]] = p));
						if (r) {
							if (o || t) {
								if (o) {
									for (u = [], l = v.length; l--;)(p = v[l]) && u.push(m[l] = p);
									o(null, v = [], u, s)
								}
								for (l = v.length; l--;)(p = v[l]) && (u = o ? ee.call(r, p) : f[l]) > -1 && (r[u] = !(a[u] = p))
							}
						} else v = g(v === a ? v.splice(d, v.length) : v),
						o ? o(null, a, v, s) : Z.apply(a, v)
					})
				}
				function m(t) {
					for (var e, n, r, i = t.length, o = z.relative[t[0].type], a = o || z.relative[" "], c = o ? 1 : 0, s = h(function (t) {
						return t === e
					},
					a, !0), u = h(function (t) {
						return ee.call(e, t) > -1
					},
					a, !0), l = [function (t, n, r) {
						return ! o && (r || n !== N) || ((e = n).nodeType ? s(t, n, r) : u(t, n, r))
					}]; i > c; c++) if (n = z.relative[t[c].type]) l = [h(d(l), n)];
					else {
						if (n = z.filter[t[c].type].apply(null, t[c].matches), n[D]) {
							for (r = ++c; i > r && !z.relative[t[r].type]; r++);
							return b(c > 1 && d(l), c > 1 && f(t.slice(0, c - 1).concat({
								value: " " === t[c - 2].type ? "*": ""
							})).replace(se, "$1"), n, r > c && m(t.slice(c, r)), i > r && m(t = t.slice(r)), i > r && f(t))
						}
						l.push(n)
					}
					return d(l)
				}
				function v(t, n) {
					var i = n.length > 0,
					o = t.length > 0,
					a = function (r, a, c, s, u) {
						var l, p, f, h = 0,
						d = "0",
						M = r && [],
						b = [],
						m = N,
						v = r || o && z.find.TAG("*", u),
						A = I += null == m ? 1 : Math.random() || .1,
						y = v.length;
						for (u && (N = a !== W && a); d !== y && null != (l = v[d]); d++) {
							if (o && l) {
								for (p = 0; f = t[p++];) if (f(l, a, c)) {
									s.push(l);
									break
								}
								u && (I = A)
							}
							i && ((l = !f && l) && h--, r && M.push(l))
						}
						if (h += d, i && d !== h) {
							for (p = 0; f = n[p++];) f(M, b, a, c);
							if (r) {
								if (h > 0) for (; d--;) M[d] || b[d] || (b[d] = Q.call(s));
								b = g(b)
							}
							Z.apply(s, b),
							u && !r && b.length > 0 && h + n.length > 1 && e.uniqueSort(s)
						}
						return u && (I = A, N = m),
						M
					};
					return i ? r(a) : a
				}
				var A, y, z, _, T, O, L, w, N, q, x, S, W, E, B, C, X, R, k, D = "sizzle" + -new Date,
				P = t.document,
				I = 0,
				j = 0,
				H = n(),
				U = n(),
				F = n(),
				V = function (t, e) {
					return t === e && (x = !0),
					0
				},
				G = "undefined",
				Y = 1 << 31,
				K = {}.hasOwnProperty,
				$ = [],
				Q = $.pop,
				J = $.push,
				Z = $.push,
				te = $.slice,
				ee = $.indexOf ||
				function (t) {
					for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
					return - 1
				},
				ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				re = "[\\x20\\t\\r\\n\\f]",
				ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				oe = ie.replace("w", "w#"),
				ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
				ce = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
				se = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
				ue = new RegExp("^" + re + "*," + re + "*"),
				le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
				pe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
				fe = new RegExp(ce),
				he = new RegExp("^" + oe + "$"),
				de = {
					ID: new RegExp("^#(" + ie + ")"),
					CLASS: new RegExp("^\\.(" + ie + ")"),
					TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + ae),
					PSEUDO: new RegExp("^" + ce),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ne + ")$", "i"),
					needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
				},
				Me = /^(?:input|select|textarea|button)$/i,
				ge = /^h\d$/i,
				be = /^[^{]+\{\s*\[native \w/,
				me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ve = /[+~]/,
				Ae = /'|\\/g,
				ye = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
				ze = function (t, e, n) {
					var r = "0x" + e - 65536;
					return r !== r || n ? e: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				};
				try {
					Z.apply($ = te.call(P.childNodes), P.childNodes),
					$[P.childNodes.length].nodeType
				} catch(_e) {
					Z = {
						apply: $.length ?
						function (t, e) {
							J.apply(t, te.call(e))
						}: function (t, e) {
							for (var n = t.length, r = 0; t[n++] = e[r++];);
							t.length = n - 1
						}
					}
				}
				y = e.support = {},
				T = e.isXML = function (t) {
					var e = t && (t.ownerDocument || t).documentElement;
					return e ? "HTML" !== e.nodeName: !1
				},
				S = e.setDocument = function (t) {
					var e, n = t ? t.ownerDocument || t: P,
					r = n.defaultView;
					return n !== W && 9 === n.nodeType && n.documentElement ? (W = n, E = n.documentElement, B = !T(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
						S()
					},
					!1) : r.attachEvent && r.attachEvent("onunload", function () {
						S()
					})), y.attributes = i(function (t) {
						return t.className = "i",
						!t.getAttribute("className")
					}), y.getElementsByTagName = i(function (t) {
						return t.appendChild(n.createComment("")),
						!t.getElementsByTagName("*").length
					}), y.getElementsByClassName = be.test(n.getElementsByClassName) && i(function (t) {
						return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
						t.firstChild.className = "i",
						2 === t.getElementsByClassName("i").length
					}), y.getById = i(function (t) {
						return E.appendChild(t).id = D,
						!n.getElementsByName || !n.getElementsByName(D).length
					}), y.getById ? (z.find.ID = function (t, e) {
						if (typeof e.getElementById !== G && B) {
							var n = e.getElementById(t);
							return n && n.parentNode ? [n] : []
						}
					},
					z.filter.ID = function (t) {
						var e = t.replace(ye, ze);
						return function (t) {
							return t.getAttribute("id") === e
						}
					}) : (delete z.find.ID, z.filter.ID = function (t) {
						var e = t.replace(ye, ze);
						return function (t) {
							var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
							return n && n.value === e
						}
					}), z.find.TAG = y.getElementsByTagName ?
					function (t, e) {
						return typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t) : void 0
					}: function (t, e) {
						var n, r = [],
						i = 0,
						o = e.getElementsByTagName(t);
						if ("*" === t) {
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					},
					z.find.CLASS = y.getElementsByClassName &&
					function (t, e) {
						return typeof e.getElementsByClassName !== G && B ? e.getElementsByClassName(t) : void 0
					},
					X = [], C = [], (y.qsa = be.test(n.querySelectorAll)) && (i(function (t) {
						t.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
						t.querySelectorAll("[msallowclip^='']").length && C.push("[*^$]=" + re + "*(?:''|\"\")"),
						t.querySelectorAll("[selected]").length || C.push("\\[" + re + "*(?:value|" + ne + ")"),
						t.querySelectorAll(":checked").length || C.push(":checked")
					}), i(function (t) {
						var e = n.createElement("input");
						e.setAttribute("type", "hidden"),
						t.appendChild(e).setAttribute("name", "D"),
						t.querySelectorAll("[name=d]").length && C.push("name" + re + "*[*^$|!~]?="),
						t.querySelectorAll(":enabled").length || C.push(":enabled", ":disabled"),
						t.querySelectorAll("*,:x"),
						C.push(",.*:")
					})), (y.matchesSelector = be.test(R = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && i(function (t) {
						y.disconnectedMatch = R.call(t, "div"),
						R.call(t, "[s!='']:x"),
						X.push("!=", ce)
					}), C = C.length && new RegExp(C.join("|")), X = X.length && new RegExp(X.join("|")), e = be.test(E.compareDocumentPosition), k = e || be.test(E.contains) ?
					function (t, e) {
						var n = 9 === t.nodeType ? t.documentElement: t,
						r = e && e.parentNode;
						return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
					}: function (t, e) {
						if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
						return ! 1
					},
					V = e ?
					function (t, e) {
						if (t === e) return x = !0,
						0;
						var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
						return r ? r: (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & r || !y.sortDetached && e.compareDocumentPosition(t) === r ? t === n || t.ownerDocument === P && k(P, t) ? -1 : e === n || e.ownerDocument === P && k(P, e) ? 1 : q ? ee.call(q, t) - ee.call(q, e) : 0 : 4 & r ? -1 : 1)
					}: function (t, e) {
						if (t === e) return x = !0,
						0;
						var r, i = 0,
						o = t.parentNode,
						c = e.parentNode,
						s = [t],
						u = [e];
						if (!o || !c) return t === n ? -1 : e === n ? 1 : o ? -1 : c ? 1 : q ? ee.call(q, t) - ee.call(q, e) : 0;
						if (o === c) return a(t, e);
						for (r = t; r = r.parentNode;) s.unshift(r);
						for (r = e; r = r.parentNode;) u.unshift(r);
						for (; s[i] === u[i];) i++;
						return i ? a(s[i], u[i]) : s[i] === P ? -1 : u[i] === P ? 1 : 0
					},
					n) : W
				},
				e.matches = function (t, n) {
					return e(t, null, null, n)
				},
				e.matchesSelector = function (t, n) {
					if ((t.ownerDocument || t) !== W && S(t), n = n.replace(pe, "='$1']"), !(!y.matchesSelector || !B || X && X.test(n) || C && C.test(n))) try {
						var r = R.call(t, n);
						if (r || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
					} catch(i) {}
					return e(n, W, null, [t]).length > 0
				},
				e.contains = function (t, e) {
					return (t.ownerDocument || t) !== W && S(t),
					k(t, e)
				},
				e.attr = function (t, e) { (t.ownerDocument || t) !== W && S(t);
					var n = z.attrHandle[e.toLowerCase()],
					r = n && K.call(z.attrHandle, e.toLowerCase()) ? n(t, e, !B) : void 0;
					return void 0 !== r ? r: y.attributes || !B ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value: null
				},
				e.error = function (t) {
					throw new Error("Syntax error, unrecognized expression: " + t)
				},
				e.uniqueSort = function (t) {
					var e, n = [],
					r = 0,
					i = 0;
					if (x = !y.detectDuplicates, q = !y.sortStable && t.slice(0), t.sort(V), x) {
						for (; e = t[i++];) e === t[i] && (r = n.push(i));
						for (; r--;) t.splice(n[r], 1)
					}
					return q = null,
					t
				},
				_ = e.getText = function (t) {
					var e, n = "",
					r = 0,
					i = t.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof t.textContent) return t.textContent;
							for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
						} else if (3 === i || 4 === i) return t.nodeValue
					} else for (; e = t[r++];) n += _(e);
					return n
				},
				z = e.selectors = {
					cacheLength: 50,
					createPseudo: r,
					match: de,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function (t) {
							return t[1] = t[1].replace(ye, ze),
							t[3] = (t[3] || t[4] || t[5] || "").replace(ye, ze),
							"~=" === t[2] && (t[3] = " " + t[3] + " "),
							t.slice(0, 4)
						},
						CHILD: function (t) {
							return t[1] = t[1].toLowerCase(),
							"nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
							t
						},
						PSEUDO: function (t) {
							var e, n = !t[6] && t[2];
							return de.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && fe.test(n) && (e = O(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
						}
					},
					filter: {
						TAG: function (t) {
							var e = t.replace(ye, ze).toLowerCase();
							return "*" === t ?
							function () {
								return ! 0
							}: function (t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							}
						},
						CLASS: function (t) {
							var e = H[t + " "];
							return e || (e = new RegExp("(^|" + re + ")" + t + "(" + re + "|$)")) && H(t, function (t) {
								return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "")
							})
						},
						ATTR: function (t, n, r) {
							return function (i) {
								var o = e.attr(i, t);
								return null == o ? "!=" === n: n ? (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-": !1) : !0
							}
						},
						CHILD: function (t, e, n, r, i) {
							var o = "nth" !== t.slice(0, 3),
							a = "last" !== t.slice( - 4),
							c = "of-type" === e;
							return 1 === r && 0 === i ?
							function (t) {
								return !! t.parentNode
							}: function (e, n, s) {
								var u, l, p, f, h, d, M = o !== a ? "nextSibling": "previousSibling",
								g = e.parentNode,
								b = c && e.nodeName.toLowerCase(),
								m = !s && !c;
								if (g) {
									if (o) {
										for (; M;) {
											for (p = e; p = p[M];) if (c ? p.nodeName.toLowerCase() === b: 1 === p.nodeType) return ! 1;
											d = M = "only" === t && !d && "nextSibling"
										}
										return ! 0
									}
									if (d = [a ? g.firstChild: g.lastChild], a && m) {
										for (l = g[D] || (g[D] = {}), u = l[t] || [], h = u[0] === I && u[1], f = u[0] === I && u[2], p = h && g.childNodes[h]; p = ++h && p && p[M] || (f = h = 0) || d.pop();) if (1 === p.nodeType && ++f && p === e) {
											l[t] = [I, h, f];
											break
										}
									} else if (m && (u = (e[D] || (e[D] = {}))[t]) && u[0] === I) f = u[1];
									else for (;
									(p = ++h && p && p[M] || (f = h = 0) || d.pop()) && ((c ? p.nodeName.toLowerCase() !== b: 1 !== p.nodeType) || !++f || (m && ((p[D] || (p[D] = {}))[t] = [I, f]), p !== e)););
									return f -= i,
									f === r || f % r === 0 && f / r >= 0
								}
							}
						},
						PSEUDO: function (t, n) {
							var i, o = z.pseudos[t] || z.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
							return o[D] ? o(n) : o.length > 1 ? (i = [t, t, "", n], z.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
								for (var r, i = o(t, n), a = i.length; a--;) r = ee.call(t, i[a]),
								t[r] = !(e[r] = i[a])
							}) : function (t) {
								return o(t, 0, i)
							}) : o
						}
					},
					pseudos: {
						not: r(function (t) {
							var e = [],
							n = [],
							i = L(t.replace(se, "$1"));
							return i[D] ? r(function (t, e, n, r) {
								for (var o, a = i(t, null, r, []), c = t.length; c--;)(o = a[c]) && (t[c] = !(e[c] = o))
							}) : function (t, r, o) {
								return e[0] = t,
								i(e, null, o, n),
								!n.pop()
							}
						}),
						has: r(function (t) {
							return function (n) {
								return e(t, n).length > 0
							}
						}),
						contains: r(function (t) {
							return function (e) {
								return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
							}
						}),
						lang: r(function (t) {
							return he.test(t || "") || e.error("unsupported lang: " + t),
							t = t.replace(ye, ze).toLowerCase(),
							function (e) {
								var n;
								do
								if (n = B ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(),
								n === t || 0 === n.indexOf(t + "-");
								while ((e = e.parentNode) && 1 === e.nodeType);
								return ! 1
							}
						}),
						target: function (e) {
							var n = t.location && t.location.hash;
							return n && n.slice(1) === e.id
						},
						root: function (t) {
							return t === E
						},
						focus: function (t) {
							return t === W.activeElement && (!W.hasFocus || W.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
						},
						enabled: function (t) {
							return t.disabled === !1
						},
						disabled: function (t) {
							return t.disabled === !0
						},
						checked: function (t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && !!t.checked || "option" === e && !!t.selected
						},
						selected: function (t) {
							return t.parentNode && t.parentNode.selectedIndex,
							t.selected === !0
						},
						empty: function (t) {
							for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
							return ! 0
						},
						parent: function (t) {
							return ! z.pseudos.empty(t)
						},
						header: function (t) {
							return ge.test(t.nodeName)
						},
						input: function (t) {
							return Me.test(t.nodeName)
						},
						button: function (t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && "button" === t.type || "button" === e
						},
						text: function (t) {
							var e;
							return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: u(function () {
							return [0]
						}),
						last: u(function (t, e) {
							return [e - 1]
						}),
						eq: u(function (t, e, n) {
							return [0 > n ? n + e: n]
						}),
						even: u(function (t, e) {
							for (var n = 0; e > n; n += 2) t.push(n);
							return t
						}),
						odd: u(function (t, e) {
							for (var n = 1; e > n; n += 2) t.push(n);
							return t
						}),
						lt: u(function (t, e, n) {
							for (var r = 0 > n ? n + e: n; --r >= 0;) t.push(r);
							return t
						}),
						gt: u(function (t, e, n) {
							for (var r = 0 > n ? n + e: n; ++r < e;) t.push(r);
							return t
						})
					}
				},
				z.pseudos.nth = z.pseudos.eq;
				for (A in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) z.pseudos[A] = c(A);
				for (A in {
					submit: !0,
					reset: !0
				}) z.pseudos[A] = s(A);
				return p.prototype = z.filters = z.pseudos,
				z.setFilters = new p,
				O = e.tokenize = function (t, n) {
					var r, i, o, a, c, s, u, l = U[t + " "];
					if (l) return n ? 0 : l.slice(0);
					for (c = t, s = [], u = z.preFilter; c;) { (!r || (i = ue.exec(c))) && (i && (c = c.slice(i[0].length) || c), s.push(o = [])),
						r = !1,
						(i = le.exec(c)) && (r = i.shift(), o.push({
							value: r,
							type: i[0].replace(se, " ")
						}), c = c.slice(r.length));
						for (a in z.filter) ! (i = de[a].exec(c)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
							value: r,
							type: a,
							matches: i
						}), c = c.slice(r.length));
						if (!r) break
					}
					return n ? c.length: c ? e.error(t) : U(t, s).slice(0)
				},
				L = e.compile = function (t, e) {
					var n, r = [],
					i = [],
					o = F[t + " "];
					if (!o) {
						for (e || (e = O(t)), n = e.length; n--;) o = m(e[n]),
						o[D] ? r.push(o) : i.push(o);
						o = F(t, v(i, r)),
						o.selector = t
					}
					return o
				},
				w = e.select = function (t, e, n, r) {
					var i, o, a, c, s, u = "function" == typeof t && t,
					p = !r && O(t = u.selector || t);
					if (n = n || [], 1 === p.length) {
						if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && y.getById && 9 === e.nodeType && B && z.relative[o[1].type]) {
							if (e = (z.find.ID(a.matches[0].replace(ye, ze), e) || [])[0], !e) return n;
							u && (e = e.parentNode),
							t = t.slice(o.shift().value.length)
						}
						for (i = de.needsContext.test(t) ? 0 : o.length; i--&&(a = o[i], !z.relative[c = a.type]);) if ((s = z.find[c]) && (r = s(a.matches[0].replace(ye, ze), ve.test(o[0].type) && l(e.parentNode) || e))) {
							if (o.splice(i, 1), t = r.length && f(o), !t) return Z.apply(n, r),
							n;
							break
						}
					}
					return (u || L(t, p))(r, e, !B, n, ve.test(t) && l(e.parentNode) || e),
					n
				},
				y.sortStable = D.split("").sort(V).join("") === D,
				y.detectDuplicates = !!x,
				S(),
				y.sortDetached = i(function (t) {
					return 1 & t.compareDocumentPosition(W.createElement("div"))
				}),
				i(function (t) {
					return t.innerHTML = "<a href='#'></a>",
					"#" === t.firstChild.getAttribute("href")
				}) || o("type|href|height|width", function (t, e, n) {
					return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
				}),
				y.attributes && i(function (t) {
					return t.innerHTML = "<input/>",
					t.firstChild.setAttribute("value", ""),
					"" === t.firstChild.getAttribute("value")
				}) || o("value", function (t, e, n) {
					return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
				}),
				i(function (t) {
					return null == t.getAttribute("disabled")
				}) || o(ne, function (t, e, n) {
					var r;
					return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value: null
				}),
				e
			} (t);
			console.log('after ie');
			Z.find = ie,
			Z.expr = ie.selectors,
			Z.expr[":"] = Z.expr.pseudos,
			Z.unique = ie.uniqueSort,
			Z.text = ie.getText,
			Z.isXMLDoc = ie.isXML,
			Z.contains = ie.contains;
			var oe = Z.expr.match.needsContext,
			ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			ce = /^.[^:#\[\.,]*$/;
			Z.filter = function (t, e, n) {
				var r = e[0];
				return n && (t = ":not(" + t + ")"),
				1 === e.length && 1 === r.nodeType ? Z.find.matchesSelector(r, t) ? [r] : [] : Z.find.matches(t, Z.grep(e, function (t) {
					return 1 === t.nodeType
				}))
			},
			Z.fn.extend({
				find: function (t) {
					var e, n = this.length,
					r = [],
					i = this;
					if ("string" != typeof t) return this.pushStack(Z(t).filter(function () {
						for (e = 0; n > e; e++) if (Z.contains(i[e], this)) return ! 0
					}));
					for (e = 0; n > e; e++) Z.find(t, i[e], r);
					return r = this.pushStack(n > 1 ? Z.unique(r) : r),
					r.selector = this.selector ? this.selector + " " + t: t,
					r
				},
				filter: function (t) {
					return this.pushStack(r(this, t || [], !1))
				},
				not: function (t) {
					return this.pushStack(r(this, t || [], !0))
				},
				is: function (t) {
					return !! r(this, "string" == typeof t && oe.test(t) ? Z(t) : t || [], !1).length
				}
			});
			var se, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			le = Z.fn.init = function (t, e) {
				var n, r;
				if (!t) return this;
				if ("string" == typeof t) {
					if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ue.exec(t), !n || !n[1] && e) return ! e || e.jquery ? (e || se).find(t) : this.constructor(e).find(t);
					if (n[1]) {
						if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e: Q, !0)), ae.test(n[1]) && Z.isPlainObject(e)) for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
						return this
					}
					return r = Q.getElementById(n[2]),
					r && r.parentNode && (this.length = 1, this[0] = r),
					this.context = Q,
					this.selector = t,
					this
				}
				return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof se.ready ? se.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
			};
			console.log('after le');
			le.prototype = Z.fn,
			se = Z(Q);
			var pe = /^(?:parents|prev(?:Until|All))/,
			fe = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
			Z.extend({
				dir: function (t, e, n) {
					for (var r = [], i = void 0 !== n;
					(t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
						if (i && Z(t).is(n)) break;
						r.push(t)
					}
					return r
				},
				sibling: function (t, e) {
					for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
					return n
				}
			}),
			Z.fn.extend({
				has: function (t) {
					var e = Z(t, this),
					n = e.length;
					return this.filter(function () {
						for (var t = 0; n > t; t++) if (Z.contains(this, e[t])) return ! 0
					})
				},
				closest: function (t, e) {
					for (var n, r = 0, i = this.length, o = [], a = oe.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
						o.push(n);
						break
					}
					return this.pushStack(o.length > 1 ? Z.unique(o) : o)
				},
				index: function (t) {
					return t ? "string" == typeof t ? V.call(Z(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
				},
				add: function (t, e) {
					return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
				},
				addBack: function (t) {
					return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
				}
			}),
			Z.each({
				parent: function (t) {
					var e = t.parentNode;
					return e && 11 !== e.nodeType ? e: null
				},
				parents: function (t) {
					return Z.dir(t, "parentNode")
				},
				parentsUntil: function (t, e, n) {
					return Z.dir(t, "parentNode", n)
				},
				next: function (t) {
					return i(t, "nextSibling")
				},
				prev: function (t) {
					return i(t, "previousSibling")
				},
				nextAll: function (t) {
					return Z.dir(t, "nextSibling")
				},
				prevAll: function (t) {
					return Z.dir(t, "previousSibling")
				},
				nextUntil: function (t, e, n) {
					return Z.dir(t, "nextSibling", n)
				},
				prevUntil: function (t, e, n) {
					return Z.dir(t, "previousSibling", n)
				},
				siblings: function (t) {
					return Z.sibling((t.parentNode || {}).firstChild, t)
				},
				children: function (t) {
					return Z.sibling(t.firstChild)
				},
				contents: function (t) {
					return t.contentDocument || Z.merge([], t.childNodes)
				}
			},
			function (t, e) {
				Z.fn[t] = function (n, r) {
					var i = Z.map(this, e, n);
					return "Until" !== t.slice( - 5) && (r = n),
					r && "string" == typeof r && (i = Z.filter(r, i)),
					this.length > 1 && (fe[t] || Z.unique(i), pe.test(t) && i.reverse()),
					this.pushStack(i)
				}
			}
			);
			var he = /\S+/g,
			de = {};
			console.log('after de!');
			Z.Callbacks = function (t) {
				console.log('inside Z.Callback');
				t = "string" == typeof t ? de[t] || o(t) : Z.extend({},
				t);
				var e, n, r, i, a, c, s = [],
				u = !t.once && [],
				l = function (o) {
					for (e = t.memory && o, n = !0, c = i || 0, i = 0, a = s.length, r = !0; s && a > c; c++) if (s[c].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
						e = !1;
						break
					}
					r = !1,
					s && (u ? u.length && l(u.shift()) : e ? s = [] : p.disable())
				},
				p = {
					add: function () {
						if (s) {
							var n = s.length; !
							function o(e) {
								Z.each(e, function (e, n) {
									var r = Z.type(n);
									"function" === r ? t.unique && p.has(n) || s.push(n) : n && n.length && "string" !== r && o(n)
								})
							} (arguments),
							r ? a = s.length: e && (i = n, l(e))
						}
						return this
					},
					remove: function () {
						return s && Z.each(arguments, function (t, e) {
							for (var n;
							(n = Z.inArray(e, s, n)) > -1;) s.splice(n, 1),
							r && (a >= n && a--, c >= n && c--)
						}),
						this
					},
					has: function (t) {
						return t ? Z.inArray(t, s) > -1 : !(!s || !s.length)
					},
					empty: function () {
						return s = [],
						a = 0,
						this
					},
					disable: function () {
						return s = u = e = void 0,
						this
					},
					disabled: function () {
						return ! s
					},
					lock: function () {
						return u = void 0,
						e || p.disable(),
						this
					},
					locked: function () {
						return ! u
					},
					fireWith: function (t, e) {
						return ! s || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? u.push(e) : l(e)),
						this
					},
					fire: function () {
						return p.fireWith(this, arguments),
						this
					},
					fired: function () {
						return !! n
					}
				};
				console.log('after p dec');
				return p
			},
			Z.extend({
				Deferred: function (t) {
					var e = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
					n = "pending",
					r = {
						state: function () {
							return n
						},
						always: function () {
							return i.done(arguments).fail(arguments),
							this
						},
						then: function () {
							var t = arguments;
							return Z.Deferred(function (n) {
								Z.each(e, function (e, o) {
									var a = Z.isFunction(t[e]) && t[e];
									i[o[1]](function () {
										var t = a && a.apply(this, arguments);
										t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
									})
								}),
								t = null
							}).promise()
						},
						promise: function (t) {
							return null != t ? Z.extend(t, r) : r
						}
					},
					i = {};
					return r.pipe = r.then,
					Z.each(e, function (t, o) {
						var a = o[2],
						c = o[3];
						r[o[1]] = a.add,
						c && a.add(function () {
							n = c
						},
						e[1 ^ t][2].disable, e[2][2].lock),
						i[o[0]] = function () {
							return i[o[0] + "With"](this === i ? r: this, arguments),
							this
						},
						i[o[0] + "With"] = a.fireWith
					}),
					r.promise(i),
					t && t.call(i, i),
					i
				},
				when: function (t) {
					var e, n, r, i = 0,
					o = H.call(arguments),
					a = o.length,
					c = 1 !== a || t && Z.isFunction(t.promise) ? a: 0,
					s = 1 === c ? t: Z.Deferred(),
					u = function (t, n, r) {
						return function (i) {
							n[t] = this,
							r[t] = arguments.length > 1 ? H.call(arguments) : i,
							r === e ? s.notifyWith(n, r) : --c || s.resolveWith(n, r)
						}
					};
					if (a > 1) for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(s.reject).progress(u(i, n, e)) : --c;
					return c || s.resolveWith(r, o),
					s.promise()
				}
			});
			var Me;
			console.log('after Me');
			Z.fn.ready = function (t) {
				return Z.ready.promise().done(t),
				this
			},
			Z.extend({
				isReady: !1,
				readyWait: 1,
				holdReady: function (t) {
					t ? Z.readyWait++:Z.ready(!0)
				},
				ready: function (t) { (t === !0 ? --Z.readyWait: Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (Me.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
				}
			}),
			Z.ready.promise = function (e) {
				return Me || (Me = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))),
				Me.promise(e)
			},
			Z.ready.promise();
			var ge = Z.access = function (t, e, n, r, i, o, a) {
				var c = 0,
				s = t.length,
				u = null == n;
				if ("object" === Z.type(n)) {
					i = !0;
					for (c in n) Z.access(t, e, c, n[c], !0, o, a)
				} else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
					return u.call(Z(t), n)
				})), e)) for (; s > c; c++) e(t[c], n, a ? r: r.call(t[c], c, e(t[c], n)));
				return i ? t: u ? e.call(t) : s ? e(t[0], n) : o
			};
			Z.acceptData = function (t) {
				return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
			},
			c.uid = 1,
			c.accepts = Z.acceptData,
			c.prototype = {
				key: function (t) {
					if (!c.accepts(t)) return 0;
					var e = {},
					n = t[this.expando];
					if (!n) {
						n = c.uid++;
						try {
							e[this.expando] = {
								value: n
							},
							Object.defineProperties(t, e)
						} catch(r) {
							e[this.expando] = n,
							Z.extend(t, e)
						}
					}
					return this.cache[n] || (this.cache[n] = {}),
					n
				},
				set: function (t, e, n) {
					var r, i = this.key(t),
					o = this.cache[i];
					if ("string" == typeof e) o[e] = n;
					else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], e);
					else for (r in e) o[r] = e[r];
					return o
				},
				get: function (t, e) {
					var n = this.cache[this.key(t)];
					return void 0 === e ? n: n[e]
				},
				access: function (t, e, n) {
					var r;
					return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r: this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n: e)
				},
				remove: function (t, e) {
					var n, r, i, o = this.key(t),
					a = this.cache[o];
					if (void 0 === e) this.cache[o] = {};
					else {
						Z.isArray(e) ? r = e.concat(e.map(Z.camelCase)) : (i = Z.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(he) || [])),
						n = r.length;
						for (; n--;) delete a[r[n]]
					}
				},
				hasData: function (t) {
					return ! Z.isEmptyObject(this.cache[t[this.expando]] || {})
				},
				discard: function (t) {
					t[this.expando] && delete this.cache[t[this.expando]]
				}
			};
			var be = new c,
			me = new c,
			ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Ae = /([A-Z])/g;
			Z.extend({
				hasData: function (t) {
					return me.hasData(t) || be.hasData(t)
				},
				data: function (t, e, n) {
					return me.access(t, e, n)
				},
				removeData: function (t, e) {
					me.remove(t, e)
				},
				_data: function (t, e, n) {
					return be.access(t, e, n)
				},
				_removeData: function (t, e) {
					be.remove(t, e)
				}
			}),
			Z.fn.extend({
				data: function (t, e) {
					var n, r, i, o = this[0],
					a = o && o.attributes;
					if (void 0 === t) {
						if (this.length && (i = me.get(o), 1 === o.nodeType && !be.get(o, "hasDataAttrs"))) {
							for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), s(o, r, i[r])));
							be.set(o, "hasDataAttrs", !0)
						}
						return i
					}
					return "object" == typeof t ? this.each(function () {
						me.set(this, t)
					}) : ge(this, function (e) {
						var n, r = Z.camelCase(t);
						if (o && void 0 === e) {
							if (n = me.get(o, t), void 0 !== n) return n;
							if (n = me.get(o, r), void 0 !== n) return n;
							if (n = s(o, r, void 0), void 0 !== n) return n
						} else this.each(function () {
							var n = me.get(this, r);
							me.set(this, r, e),
							-1 !== t.indexOf("-") && void 0 !== n && me.set(this, t, e)
						})
					},
					null, e, arguments.length > 1, null, !0)
				},
				removeData: function (t) {
					return this.each(function () {
						me.remove(this, t)
					})
				}
			}),
			Z.extend({
				queue: function (t, e, n) {
					var r;
					return t ? (e = (e || "fx") + "queue", r = be.get(t, e), n && (!r || Z.isArray(n) ? r = be.access(t, e, Z.makeArray(n)) : r.push(n)), r || []) : void 0
				},
				dequeue: function (t, e) {
					e = e || "fx";
					var n = Z.queue(t, e),
					r = n.length,
					i = n.shift(),
					o = Z._queueHooks(t, e),
					a = function () {
						Z.dequeue(t, e)
					};
					"inprogress" === i && (i = n.shift(), r--),
					i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)),
					!r && o && o.empty.fire()
				},
				_queueHooks: function (t, e) {
					var n = e + "queueHooks";
					return be.get(t, n) || be.access(t, n, {
						empty: Z.Callbacks("once memory").add(function () {
							be.remove(t, [e + "queue", n])
						})
					})
				}
			}),
			Z.fn.extend({
				queue: function (t, e) {
					var n = 2;
					return "string" != typeof t && (e = t, t = "fx", n--),
					arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this: this.each(function () {
						var n = Z.queue(this, t, e);
						Z._queueHooks(this, t),
						"fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
					})
				},
				dequeue: function (t) {
					return this.each(function () {
						Z.dequeue(this, t)
					})
				},
				clearQueue: function (t) {
					return this.queue(t || "fx", [])
				},
				promise: function (t, e) {
					var n, r = 1,
					i = Z.Deferred(),
					o = this,
					a = this.length,
					c = function () {--r || i.resolveWith(o, [o])
					};
					for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = be.get(o[a], t + "queueHooks"),
					n && n.empty && (r++, n.empty.add(c));
					return c(),
					i.promise(e)
				}
			});
			var ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			ze = ["Top", "Right", "Bottom", "Left"],
			_e = function (t, e) {
				return t = e || t,
				"none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
			},
			Te = /^(?:checkbox|radio)$/i; !
			function () {
				var t = Q.createDocumentFragment(),
				e = t.appendChild(Q.createElement("div")),
				n = Q.createElement("input");
				n.setAttribute("type", "radio"),
				n.setAttribute("checked", "checked"),
				n.setAttribute("name", "t"),
				e.appendChild(n),
				$.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
				e.innerHTML = "<textarea>x</textarea>",
				$.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
			} ();
			var Oe = "undefined";
			$.focusinBubbles = "onfocusin" in t;
			var Le = /^key/,
			we = /^(?:mouse|pointer|contextmenu)|click/,
			Ne = /^(?:focusinfocus|focusoutblur)$/,
			qe = /^([^.]*)(?:\.(.+)|)$/;
			Z.event = {
				global: {},
				add: function (t, e, n, r, i) {
					var o, a, c, s, u, l, p, f, h, d, M, g = be.get(t);
					if (g) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (s = g.events) || (s = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
						return typeof Z !== Oe && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
					}), e = (e || "").match(he) || [""], u = e.length; u--;) c = qe.exec(e[u]) || [],
					h = M = c[1],
					d = (c[2] || "").split(".").sort(),
					h && (p = Z.event.special[h] || {},
					h = (i ? p.delegateType: p.bindType) || h, p = Z.event.special[h] || {},
					l = Z.extend({
						type: h,
						origType: M,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && Z.expr.match.needsContext.test(i),
						namespace: d.join(".")
					},
					o), (f = s[h]) || (f = s[h] = [], f.delegateCount = 0, p.setup && p.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(h, a, !1)), p.add && (p.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, l) : f.push(l), Z.event.global[h] = !0)
				},
				remove: function (t, e, n, r, i) {
					var o, a, c, s, u, l, p, f, h, d, M, g = be.hasData(t) && be.get(t);
					if (g && (s = g.events)) {
						for (e = (e || "").match(he) || [""], u = e.length; u--;) if (c = qe.exec(e[u]) || [], h = M = c[1], d = (c[2] || "").split(".").sort(), h) {
							for (p = Z.event.special[h] || {},
							h = (r ? p.delegateType: p.bindType) || h, f = s[h] || [], c = c[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) l = f[o],
							!i && M !== l.origType || n && n.guid !== l.guid || c && !c.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, p.remove && p.remove.call(t, l));
							a && !f.length && (p.teardown && p.teardown.call(t, d, g.handle) !== !1 || Z.removeEvent(t, h, g.handle), delete s[h])
						} else for (h in s) Z.event.remove(t, h + e[u], n, r, !0);
						Z.isEmptyObject(s) && (delete g.handle, be.remove(t, "events"))
					}
				},
				trigger: function (e, n, r, i) {
					var o, a, c, s, u, l, p, f = [r || Q],
					h = K.call(e, "type") ? e.type: e,
					d = K.call(e, "namespace") ? e.namespace.split(".") : [];
					if (a = c = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Ne.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (d = h.split("."), h = d.shift(), d.sort()), u = h.indexOf(":") < 0 && "on" + h, e = e[Z.expando] ? e: new Z.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : Z.makeArray(n, [e]), p = Z.event.special[h] || {},
					i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
						if (!i && !p.noBubble && !Z.isWindow(r)) {
							for (s = p.delegateType || h, Ne.test(s + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
							c = a;
							c === (r.ownerDocument || Q) && f.push(c.defaultView || c.parentWindow || t)
						}
						for (o = 0;
						(a = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? s: p.bindType || h,
						l = (be.get(a, "events") || {})[e.type] && be.get(a, "handle"),
						l && l.apply(a, n),
						l = u && a[u],
						l && l.apply && Z.acceptData(a) && (e.result = l.apply(a, n), e.result === !1 && e.preventDefault());
						return e.type = h,
						i || e.isDefaultPrevented() || p._default && p._default.apply(f.pop(), n) !== !1 || !Z.acceptData(r) || u && Z.isFunction(r[h]) && !Z.isWindow(r) && (c = r[u], c && (r[u] = null), Z.event.triggered = h, r[h](), Z.event.triggered = void 0, c && (r[u] = c)),
						e.result
					}
				},
				dispatch: function (t) {
					t = Z.event.fix(t);
					var e, n, r, i, o, a = [],
					c = H.call(arguments),
					s = (be.get(this, "events") || {})[t.type] || [],
					u = Z.event.special[t.type] || {};
					if (c[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
						for (a = Z.event.handlers.call(this, t, s), e = 0;
						(i = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
						return u.postDispatch && u.postDispatch.call(this, t),
						t.result
					}
				},
				handlers: function (t, e) {
					var n, r, i, o, a = [],
					c = e.delegateCount,
					s = t.target;
					if (c && s.nodeType && (!t.button || "click" !== t.type)) for (; s !== this; s = s.parentNode || this) if (s.disabled !== !0 || "click" !== t.type) {
						for (r = [], n = 0; c > n; n++) o = e[n],
						i = o.selector + " ",
						void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(s) >= 0 : Z.find(i, this, null, [s]).length),
						r[i] && r.push(o);
						r.length && a.push({
							elem: s,
							handlers: r
						})
					}
					return c < e.length && a.push({
						elem: this,
						handlers: e.slice(c)
					}),
					a
				},
				props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function (t, e) {
						return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
						t
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function (t, e) {
						var n, r, i, o = e.button;
						return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
						t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
						t
					}
				},
				fix: function (t) {
					if (t[Z.expando]) return t;
					var e, n, r, i = t.type,
					o = t,
					a = this.fixHooks[i];
					for (a || (this.fixHooks[i] = a = we.test(i) ? this.mouseHooks: Le.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, t = new Z.Event(o), e = r.length; e--;) n = r[e],
					t[n] = o[n];
					return t.target || (t.target = Q),
					3 === t.target.nodeType && (t.target = t.target.parentNode),
					a.filter ? a.filter(t, o) : t
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						trigger: function () {
							return this !== p() && this.focus ? (this.focus(), !1) : void 0
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function () {
							return this === p() && this.blur ? (this.blur(), !1) : void 0
						},
						delegateType: "focusout"
					},
					click: {
						trigger: function () {
							return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
						},
						_default: function (t) {
							return Z.nodeName(t.target, "a")
						}
					},
					beforeunload: {
						postDispatch: function (t) {
							void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
						}
					}
				},
				simulate: function (t, e, n, r) {
					var i = Z.extend(new Z.Event, n, {
						type: t,
						isSimulated: !0,
						originalEvent: {}
					});
					r ? Z.event.trigger(i, null, e) : Z.event.dispatch.call(e, i),
					i.isDefaultPrevented() && n.preventDefault()
				}
			},
			Z.removeEvent = function (t, e, n) {
				t.removeEventListener && t.removeEventListener(e, n, !1)
			},
			Z.Event = function (t, e) {
				return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u: l) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
			},
			Z.Event.prototype = {
				isDefaultPrevented: l,
				isPropagationStopped: l,
				isImmediatePropagationStopped: l,
				preventDefault: function () {
					var t = this.originalEvent;
					this.isDefaultPrevented = u,
					t && t.preventDefault && t.preventDefault()
				},
				stopPropagation: function () {
					var t = this.originalEvent;
					this.isPropagationStopped = u,
					t && t.stopPropagation && t.stopPropagation()
				},
				stopImmediatePropagation: function () {
					var t = this.originalEvent;
					this.isImmediatePropagationStopped = u,
					t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
					this.stopPropagation()
				}
			},
			Z.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			},
			function (t, e) {
				Z.event.special[t] = {
					delegateType: e,
					bindType: e,
					handle: function (t) {
						var n, r = this,
						i = t.relatedTarget,
						o = t.handleObj;
						return (!i || i !== r && !Z.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e),
						n
					}
				}
			}),
			$.focusinBubbles || Z.each({
				focus: "focusin",
				blur: "focusout"
			},
			function (t, e) {
				var n = function (t) {
					Z.event.simulate(e, t.target, Z.event.fix(t), !0)
				};
				Z.event.special[e] = {
					setup: function () {
						var r = this.ownerDocument || this,
						i = be.access(r, e);
						i || r.addEventListener(t, n, !0),
						be.access(r, e, (i || 0) + 1)
					},
					teardown: function () {
						var r = this.ownerDocument || this,
						i = be.access(r, e) - 1;
						i ? be.access(r, e, i) : (r.removeEventListener(t, n, !0), be.remove(r, e))
					}
				}
			}),
			Z.fn.extend({
				on: function (t, e, n, r, i) {
					var o, a;
					if ("object" == typeof t) {
						"string" != typeof e && (n = n || e, e = void 0);
						for (a in t) this.on(a, e, n, t[a], i);
						return this
					}
					if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = l;
					else if (!r) return this;
					return 1 === i && (o = r, r = function (t) {
						return Z().off(t),
						o.apply(this, arguments)
					},
					r.guid = o.guid || (o.guid = Z.guid++)),
					this.each(function () {
						Z.event.add(this, t, r, n, e)
					})
				},
				one: function (t, e, n, r) {
					return this.on(t, e, n, r, 1)
				},
				off: function (t, e, n) {
					var r, i;
					if (t && t.preventDefault && t.handleObj) return r = t.handleObj,
					Z(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
					this;
					if ("object" == typeof t) {
						for (i in t) this.off(i, e, t[i]);
						return this
					}
					return (e === !1 || "function" == typeof e) && (n = e, e = void 0),
					n === !1 && (n = l),
					this.each(function () {
						Z.event.remove(this, t, n, e)
					})
				},
				trigger: function (t, e) {
					return this.each(function () {
						Z.event.trigger(t, e, this)
					})
				},
				triggerHandler: function (t, e) {
					var n = this[0];
					return n ? Z.event.trigger(t, e, n, !0) : void 0
				}
			});
			var xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Se = /<([\w:]+)/,
			We = /<|&#?\w+;/,
			Ee = /<(?:script|style|link)/i,
			Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ce = /^$|\/(?:java|ecma)script/i,
			Xe = /^true\/(.*)/,
			Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			ke = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
			ke.optgroup = ke.option,
			ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead,
			ke.th = ke.td,
			Z.extend({
				clone: function (t, e, n) {
					var r, i, o, a, c = t.cloneNode(!0),
					s = Z.contains(t.ownerDocument, t);
					if (! ($.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t))) for (a = b(c), o = b(t), r = 0, i = o.length; i > r; r++) m(o[r], a[r]);
					if (e) if (n) for (o = o || b(t), a = a || b(c), r = 0, i = o.length; i > r; r++) g(o[r], a[r]);
					else g(t, c);
					return a = b(c, "script"),
					a.length > 0 && M(a, !s && b(t, "script")),
					c
				},
				buildFragment: function (t, e, n, r) {
					for (var i, o, a, c, s, u, l = e.createDocumentFragment(), p = [], f = 0, h = t.length; h > f; f++) if (i = t[f], i || 0 === i) if ("object" === Z.type(i)) Z.merge(p, i.nodeType ? [i] : i);
					else if (We.test(i)) {
						for (o = o || l.appendChild(e.createElement("div")), a = (Se.exec(i) || ["", ""])[1].toLowerCase(), c = ke[a] || ke._default, o.innerHTML = c[1] + i.replace(xe, "<$1></$2>") + c[2], u = c[0]; u--;) o = o.lastChild;
						Z.merge(p, o.childNodes),
						o = l.firstChild,
						o.textContent = ""
					} else p.push(e.createTextNode(i));
					for (l.textContent = "", f = 0; i = p[f++];) if ((!r || -1 === Z.inArray(i, r)) && (s = Z.contains(i.ownerDocument, i), o = b(l.appendChild(i), "script"), s && M(o), n)) for (u = 0; i = o[u++];) Ce.test(i.type || "") && n.push(i);
					return l
				},
				cleanData: function (t) {
					for (var e, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = t[a]); a++) {
						if (Z.acceptData(n) && (i = n[be.expando], i && (e = be.cache[i]))) {
							if (e.events) for (r in e.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle);
							be.cache[i] && delete be.cache[i]
						}
						delete me.cache[n[me.expando]]
					}
				}
			}),
			Z.fn.extend({
				text: function (t) {
					return ge(this, function (t) {
						return void 0 === t ? Z.text(this) : this.empty().each(function () { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
						})
					},
					null, t, arguments.length)
				},
				append: function () {
					return this.domManip(arguments, function (t) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var e = f(this, t);
							e.appendChild(t)
						}
					})
				},
				prepend: function () {
					return this.domManip(arguments, function (t) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var e = f(this, t);
							e.insertBefore(t, e.firstChild)
						}
					})
				},
				before: function () {
					return this.domManip(arguments, function (t) {
						this.parentNode && this.parentNode.insertBefore(t, this)
					})
				},
				after: function () {
					return this.domManip(arguments, function (t) {
						this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
					})
				},
				remove: function (t, e) {
					for (var n, r = t ? Z.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || Z.cleanData(b(n)),
					n.parentNode && (e && Z.contains(n.ownerDocument, n) && M(b(n, "script")), n.parentNode.removeChild(n));
					return this
				},
				empty: function () {
					for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(b(t, !1)), t.textContent = "");
					return this
				},
				clone: function (t, e) {
					return t = null == t ? !1 : t,
					e = null == e ? t: e,
					this.map(function () {
						return Z.clone(this, t, e)
					})
				},
				html: function (t) {
					return ge(this, function (t) {
						var e = this[0] || {},
						n = 0,
						r = this.length;
						if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
						if ("string" == typeof t && !Ee.test(t) && !ke[(Se.exec(t) || ["", ""])[1].toLowerCase()]) {
							t = t.replace(xe, "<$1></$2>");
							try {
								for (; r > n; n++) e = this[n] || {},
								1 === e.nodeType && (Z.cleanData(b(e, !1)), e.innerHTML = t);
								e = 0
							} catch(i) {}
						}
						e && this.empty().append(t)
					},
					null, t, arguments.length)
				},
				replaceWith: function () {
					var t = arguments[0];
					return this.domManip(arguments, function (e) {
						t = this.parentNode,
						Z.cleanData(b(this)),
						t && t.replaceChild(e, this)
					}),
					t && (t.length || t.nodeType) ? this: this.remove()
				},
				detach: function (t) {
					return this.remove(t, !0)
				},
				domManip: function (t, e) {
					t = U.apply([], t);
					var n, r, i, o, a, c, s = 0,
					u = this.length,
					l = this,
					p = u - 1,
					f = t[0],
					M = Z.isFunction(f);
					if (M || u > 1 && "string" == typeof f && !$.checkClone && Be.test(f)) return this.each(function (n) {
						var r = l.eq(n);
						M && (t[0] = f.call(this, n, r.html())),
						r.domManip(t, e)
					});
					if (u && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
						for (i = Z.map(b(n, "script"), h), o = i.length; u > s; s++) a = n,
						s !== p && (a = Z.clone(a, !0, !0), o && Z.merge(i, b(a, "script"))),
						e.call(this[s], a, s);
						if (o) for (c = i[i.length - 1].ownerDocument, Z.map(i, d), s = 0; o > s; s++) a = i[s],
						Ce.test(a.type || "") && !be.access(a, "globalEval") && Z.contains(c, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Re, "")))
					}
					return this
				}
			}),
			Z.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			},
			function (t, e) {
				Z.fn[t] = function (t) {
					for (var n, r = [], i = Z(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this: this.clone(!0),
					Z(i[a])[e](n),
					F.apply(r, n.get());
					return this.pushStack(r)
				}
			});
			var De, Pe = {},
			Ie = /^margin/,
			je = new RegExp("^(" + ye + ")(?!px)[a-z%]+$", "i"),
			He = function (t) {
				return t.ownerDocument.defaultView.getComputedStyle(t, null)
			}; !
			function () {
				function e() {
					a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
					a.innerHTML = "",
					i.appendChild(o);
					var e = t.getComputedStyle(a, null);
					n = "1%" !== e.top,
					r = "4px" === e.width,
					i.removeChild(o)
				}
				var n, r, i = Q.documentElement,
				o = Q.createElement("div"),
				a = Q.createElement("div");
				a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", $.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && Z.extend($, {
					pixelPosition: function () {
						return e(),
						n
					},
					boxSizingReliable: function () {
						return null == r && e(),
						r
					},
					reliableMarginRight: function () {
						var e, n = a.appendChild(Q.createElement("div"));
						return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
						n.style.marginRight = n.style.width = "0",
						a.style.width = "1px",
						i.appendChild(o),
						e = !parseFloat(t.getComputedStyle(n, null).marginRight),
						i.removeChild(o),
						e
					}
				}))
			} (),
			Z.swap = function (t, e, n, r) {
				var i, o, a = {};
				for (o in e) a[o] = t.style[o],
				t.style[o] = e[o];
				i = n.apply(t, r || []);
				for (o in e) t.style[o] = a[o];
				return i
			};
			var Ue = /^(none|table(?!-c[ea]).+)/,
			Fe = new RegExp("^(" + ye + ")(.*)$", "i"),
			Ve = new RegExp("^([+-])=(" + ye + ")", "i"),
			Ge = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ye = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Ke = ["Webkit", "O", "Moz", "ms"];
			Z.extend({
				cssHooks: {
					opacity: {
						get: function (t, e) {
							if (e) {
								var n = y(t, "opacity");
								return "" === n ? "1": n
							}
						}
					}
				},
				cssNumber: {
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {
					"float": "cssFloat"
				},
				style: function (t, e, n, r) {
					if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
						var i, o, a, c = Z.camelCase(e),
						s = t.style;
						return e = Z.cssProps[c] || (Z.cssProps[c] = _(s, c)),
						a = Z.cssHooks[e] || Z.cssHooks[c],
						void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i: s[e] : (o = typeof n, "string" === o && (i = Ve.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[c] || (n += "px"), $.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (s[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (s[e] = n)), void 0)
					}
				},
				css: function (t, e, n, r) {
					var i, o, a, c = Z.camelCase(e);
					return e = Z.cssProps[c] || (Z.cssProps[c] = _(t.style, c)),
					a = Z.cssHooks[e] || Z.cssHooks[c],
					a && "get" in a && (i = a.get(t, !0, n)),
					void 0 === i && (i = y(t, e, r)),
					"normal" === i && e in Ye && (i = Ye[e]),
					"" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
				}
			}),
			Z.each(["height", "width"], function (t, e) {
				Z.cssHooks[e] = {
					get: function (t, n, r) {
						return n ? Ue.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Ge, function () {
							return L(t, e, r)
						}) : L(t, e, r) : void 0
					},
					set: function (t, n, r) {
						var i = r && He(t);
						return T(t, n, r ? O(t, e, r, "border-box" === Z.css(t, "boxSizing", !1, i), i) : 0)
					}
				}
			}),
			Z.cssHooks.marginRight = z($.reliableMarginRight, function (t, e) {
				return e ? Z.swap(t, {
					display: "inline-block"
				},
				y, [t, "marginRight"]) : void 0
			}),
			Z.each({
				margin: "",
				padding: "",
				border: "Width"
			},
			function (t, e) {
				Z.cssHooks[t + e] = {
					expand: function (n) {
						for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + ze[r] + e] = o[r] || o[r - 2] || o[0];
						return i
					}
				},
				Ie.test(t) || (Z.cssHooks[t + e].set = T)
			}),
			Z.fn.extend({
				css: function (t, e) {
					return ge(this, function (t, e, n) {
						var r, i, o = {},
						a = 0;
						if (Z.isArray(e)) {
							for (r = He(t), i = e.length; i > a; a++) o[e[a]] = Z.css(t, e[a], !1, r);
							return o
						}
						return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
					},
					t, e, arguments.length > 1)
				},
				show: function () {
					return w(this, !0)
				},
				hide: function () {
					return w(this)
				},
				toggle: function (t) {
					return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
						_e(this) ? Z(this).show() : Z(this).hide()
					})
				}
			}),
			Z.Tween = N,
			N.prototype = {
				constructor: N,
				init: function (t, e, n, r, i, o) {
					this.elem = t,
					this.prop = n,
					this.easing = i || "swing",
					this.options = e,
					this.start = this.now = this.cur(),
					this.end = r,
					this.unit = o || (Z.cssNumber[n] ? "": "px")
				},
				cur: function () {
					var t = N.propHooks[this.prop];
					return t && t.get ? t.get(this) : N.propHooks._default.get(this)
				},
				run: function (t) {
					var e, n = N.propHooks[this.prop];
					return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
					this.now = (this.end - this.start) * e + this.start,
					this.options.step && this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : N.propHooks._default.set(this),
					this
				}
			},
			N.prototype.init.prototype = N.prototype,
			N.propHooks = {
				_default: {
					get: function (t) {
						var e;
						return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
					},
					set: function (t) {
						Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
					}
				}
			},
			N.propHooks.scrollTop = N.propHooks.scrollLeft = {
				set: function (t) {
					t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
				}
			},
			Z.easing = {
				linear: function (t) {
					return t
				},
				swing: function (t) {
					return.5 - Math.cos(t * Math.PI) / 2
				}
			},
			Z.fx = N.prototype.init,
			Z.fx.step = {};
			var $e, Qe, Je = /^(?:toggle|show|hide)$/,
			Ze = new RegExp("^(?:([+-])=|)(" + ye + ")([a-z%]*)$", "i"),
			tn = /queueHooks$/,
			en = [W],
			nn = {
				"*": [function (t, e) {
					var n = this.createTween(t, e),
					r = n.cur(),
					i = Ze.exec(e),
					o = i && i[3] || (Z.cssNumber[t] ? "": "px"),
					a = (Z.cssNumber[t] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, t)),
					c = 1,
					s = 20;
					if (a && a[3] !== o) {
						o = o || a[3],
						i = i || [],
						a = +r || 1;
						do c = c || ".5",
						a /= c,
						Z.style(n.elem, t, a + o);
						while (c !== (c = n.cur() / r) && 1 !== c && --s)
					}
					return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
					n
				}]
			};
			Z.Animation = Z.extend(B, {
				tweener: function (t, e) {
					Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
					for (var n, r = 0, i = t.length; i > r; r++) n = t[r],
					nn[n] = nn[n] || [],
					nn[n].unshift(e)
				},
				prefilter: function (t, e) {
					e ? en.unshift(t) : en.push(t)
				}
			}),
			Z.speed = function (t, e, n) {
				var r = t && "object" == typeof t ? Z.extend({},
				t) : {
					complete: n || !n && e || Z.isFunction(t) && t,
					duration: t,
					easing: n && e || e && !Z.isFunction(e) && e
				};
				return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default,
				(null == r.queue || r.queue === !0) && (r.queue = "fx"),
				r.old = r.complete,
				r.complete = function () {
					Z.isFunction(r.old) && r.old.call(this),
					r.queue && Z.dequeue(this, r.queue)
				},
				r
			},
			Z.fn.extend({
				fadeTo: function (t, e, n, r) {
					return this.filter(_e).css("opacity", 0).show().end().animate({
						opacity: e
					},
					t, n, r)
				},
				animate: function (t, e, n, r) {
					var i = Z.isEmptyObject(t),
					o = Z.speed(e, n, r),
					a = function () {
						var e = B(this, Z.extend({},
						t), o);
						(i || be.get(this, "finish")) && e.stop(!0)
					};
					return a.finish = a,
					i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
				},
				stop: function (t, e, n) {
					var r = function (t) {
						var e = t.stop;
						delete t.stop,
						e(n)
					};
					return "string" != typeof t && (n = e, e = t, t = void 0),
					e && t !== !1 && this.queue(t || "fx", []),
					this.each(function () {
						var e = !0,
						i = null != t && t + "queueHooks",
						o = Z.timers,
						a = be.get(this);
						if (i) a[i] && a[i].stop && r(a[i]);
						else for (i in a) a[i] && a[i].stop && tn.test(i) && r(a[i]);
						for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
						(e || !n) && Z.dequeue(this, t)
					})
				},
				finish: function (t) {
					return t !== !1 && (t = t || "fx"),
					this.each(function () {
						var e, n = be.get(this),
						r = n[t + "queue"],
						i = n[t + "queueHooks"],
						o = Z.timers,
						a = r ? r.length: 0;
						for (n.finish = !0, Z.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
						for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
						delete n.finish
					})
				}
			}),
			Z.each(["toggle", "show", "hide"], function (t, e) {
				var n = Z.fn[e];
				Z.fn[e] = function (t, r, i) {
					return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(x(e, !0), t, r, i)
				}
			}),
			Z.each({
				slideDown: x("show"),
				slideUp: x("hide"),
				slideToggle: x("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			},
			function (t, e) {
				Z.fn[t] = function (t, n, r) {
					return this.animate(e, t, n, r)
				}
			}),
			Z.timers = [],
			Z.fx.tick = function () {
				var t, e = 0,
				n = Z.timers;
				for ($e = Z.now(); e < n.length; e++) t = n[e],
				t() || n[e] !== t || n.splice(e--, 1);
				n.length || Z.fx.stop(),
				$e = void 0
			},
			Z.fx.timer = function (t) {
				Z.timers.push(t),
				t() ? Z.fx.start() : Z.timers.pop()
			},
			Z.fx.interval = 13,
			Z.fx.start = function () {
				Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
			},
			Z.fx.stop = function () {
				clearInterval(Qe),
				Qe = null
			},
			Z.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			},
			Z.fn.delay = function (t, e) {
				return t = Z.fx ? Z.fx.speeds[t] || t: t,
				e = e || "fx",
				this.queue(e, function (e, n) {
					var r = setTimeout(e, t);
					n.stop = function () {
						clearTimeout(r)
					}
				})
			},
			function () {
				var t = Q.createElement("input"),
				e = Q.createElement("select"),
				n = e.appendChild(Q.createElement("option"));
				t.type = "checkbox",
				$.checkOn = "" !== t.value,
				$.optSelected = n.selected,
				e.disabled = !0,
				$.optDisabled = !n.disabled,
				t = Q.createElement("input"),
				t.value = "t",
				t.type = "radio",
				$.radioValue = "t" === t.value
			} ();
			var rn, on, an = Z.expr.attrHandle;
			Z.fn.extend({
				attr: function (t, e) {
					return ge(this, Z.attr, t, e, arguments.length > 1)
				},
				removeAttr: function (t) {
					return this.each(function () {
						Z.removeAttr(this, t)
					})
				}
			}),
			Z.extend({
				attr: function (t, e, n) {
					var r, i, o = t.nodeType;
					if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Oe ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), r = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? on: rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i: (i = Z.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i: (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
				},
				removeAttr: function (t, e) {
					var n, r, i = 0,
					o = e && e.match(he);
					if (o && 1 === t.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n,
					Z.expr.match.bool.test(n) && (t[r] = !1),
					t.removeAttribute(n)
				},
				attrHooks: {
					type: {
						set: function (t, e) {
							if (!$.radioValue && "radio" === e && Z.nodeName(t, "input")) {
								var n = t.value;
								return t.setAttribute("type", e),
								n && (t.value = n),
								e
							}
						}
					}
				}
			}),
			on = {
				set: function (t, e, n) {
					return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n),
					n
				}
			},
			Z.each(Z.expr.match.bool.source.match(/\w+/g), function (t, e) {
				var n = an[e] || Z.find.attr;
				an[e] = function (t, e, r) {
					var i, o;
					return r || (o = an[e], an[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, an[e] = o),
					i
				}
			});
			var cn = /^(?:input|select|textarea|button)$/i;
			Z.fn.extend({
				prop: function (t, e) {
					return ge(this, Z.prop, t, e, arguments.length > 1)
				},
				removeProp: function (t) {
					return this.each(function () {
						delete this[Z.propFix[t] || t]
					})
				}
			}),
			Z.extend({
				propFix: {
					"for": "htmlFor",
					"class": "className"
				},
				prop: function (t, e, n) {
					var r, i, o, a = t.nodeType;
					if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(t),
					o && (e = Z.propFix[e] || e, i = Z.propHooks[e]),
					void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r: t[e] = n: i && "get" in i && null !== (r = i.get(t, e)) ? r: t[e]
				},
				propHooks: {
					tabIndex: {
						get: function (t) {
							return t.hasAttribute("tabindex") || cn.test(t.nodeName) || t.href ? t.tabIndex: -1
						}
					}
				}
			}),
			$.optSelected || (Z.propHooks.selected = {
				get: function (t) {
					var e = t.parentNode;
					return e && e.parentNode && e.parentNode.selectedIndex,
					null
				}
			}),
			Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
				Z.propFix[this.toLowerCase()] = this
			});
			var sn = /[\t\r\n\f]/g;
			Z.fn.extend({
				addClass: function (t) {
					var e, n, r, i, o, a, c = "string" == typeof t && t,
					s = 0,
					u = this.length;
					if (Z.isFunction(t)) return this.each(function (e) {
						Z(this).addClass(t.call(this, e, this.className))
					});
					if (c) for (e = (t || "").match(he) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(sn, " ") : " ")) {
						for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						a = Z.trim(r),
						n.className !== a && (n.className = a)
					}
					return this
				},
				removeClass: function (t) {
					var e, n, r, i, o, a, c = 0 === arguments.length || "string" == typeof t && t,
					s = 0,
					u = this.length;
					if (Z.isFunction(t)) return this.each(function (e) {
						Z(this).removeClass(t.call(this, e, this.className))
					});
					if (c) for (e = (t || "").match(he) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(sn, " ") : "")) {
						for (o = 0; i = e[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
						a = t ? Z.trim(r) : "",
						n.className !== a && (n.className = a)
					}
					return this
				},
				toggleClass: function (t, e) {
					var n = typeof t;
					return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ?
					function (n) {
						Z(this).toggleClass(t.call(this, n, this.className, e), e)
					}: function () {
						if ("string" === n) for (var e, r = 0, i = Z(this), o = t.match(he) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
						else(n === Oe || "boolean" === n) && (this.className && be.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "": be.get(this, "__className__") || "")
					})
				},
				hasClass: function (t) {
					for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(sn, " ").indexOf(e) >= 0) return ! 0;
					return ! 1
				}
			});
			var un = /\r/g;
			Z.fn.extend({
				val: function (t) {
					var e, n, r, i = this[0]; {
						if (arguments.length) return r = Z.isFunction(t),
						this.each(function (n) {
							var i;
							1 === this.nodeType && (i = r ? t.call(this, n, Z(this).val()) : t, null == i ? i = "": "number" == typeof i ? i += "": Z.isArray(i) && (i = Z.map(i, function (t) {
								return null == t ? "": t + ""
							})), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
						});
						if (i) return e = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()],
						e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(un, "") : null == n ? "": n)
					}
				}
			}),
			Z.extend({
				valHooks: {
					option: {
						get: function (t) {
							var e = Z.find.attr(t, "value");
							return null != e ? e: Z.trim(Z.text(t))
						}
					},
					select: {
						get: function (t) {
							for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null: [], c = o ? i + 1 : r.length, s = 0 > i ? c: o ? i: 0; c > s; s++) if (n = r[s], !(!n.selected && s !== i || ($.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
								if (e = Z(n).val(), o) return e;
								a.push(e)
							}
							return a
						},
						set: function (t, e) {
							for (var n, r, i = t.options, o = Z.makeArray(e), a = i.length; a--;) r = i[a],
							(r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
							return n || (t.selectedIndex = -1),
							o
						}
					}
				}
			}),
			Z.each(["radio", "checkbox"], function () {
				Z.valHooks[this] = {
					set: function (t, e) {
						return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
					}
				},
				$.checkOn || (Z.valHooks[this].get = function (t) {
					return null === t.getAttribute("value") ? "on": t.value
				})
			}),
			Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
				Z.fn[e] = function (t, n) {
					return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
				}
			}),
			Z.fn.extend({
				hover: function (t, e) {
					return this.mouseenter(t).mouseleave(e || t)
				},
				bind: function (t, e, n) {
					return this.on(t, null, e, n)
				},
				unbind: function (t, e) {
					return this.off(t, null, e)
				},
				delegate: function (t, e, n, r) {
					return this.on(e, t, n, r)
				},
				undelegate: function (t, e, n) {
					return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
				}
			});
			var ln = Z.now(),
			pn = /\?/;
			Z.parseJSON = function (t) {
				return JSON.parse(t + "")
			},
			Z.parseXML = function (t) {
				var e, n;
				if (!t || "string" != typeof t) return null;
				try {
					n = new DOMParser,
					e = n.parseFromString(t, "text/xml")
				} catch(r) {
					e = void 0
				}
				return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t),
				e
			};
			var fn, hn, dn = /#.*$/,
			Mn = /([?&])_=[^&]*/,
			gn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			mn = /^(?:GET|HEAD)$/,
			vn = /^\/\//,
			An = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			yn = {},
			zn = {},
			_n = "*/".concat("*");
			try {
				hn = location.href
			} catch(Tn) {
				hn = Q.createElement("a"),
				hn.href = "",
				hn = hn.href
			}
			fn = An.exec(hn.toLowerCase()) || [],
			Z.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: hn,
					type: "GET",
					isLocal: bn.test(fn[1]),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": _n,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /xml/,
						html: /html/,
						json: /json/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": Z.parseJSON,
						"text xml": Z.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function (t, e) {
					return e ? R(R(t, Z.ajaxSettings), e) : R(Z.ajaxSettings, t)
				},
				ajaxPrefilter: C(yn),
				ajaxTransport: C(zn),
				ajax: function (t, e) {
					function n(t, e, n, a) {
						var s, l, b, m, A, z = e;
						2 !== v && (v = 2, c && clearTimeout(c), r = void 0, o = a || "", y.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, n && (m = k(p, y, n)), m = D(p, m, y, s), s ? (p.ifModified && (A = y.getResponseHeader("Last-Modified"), A && (Z.lastModified[i] = A), A = y.getResponseHeader("etag"), A && (Z.etag[i] = A)), 204 === t || "HEAD" === p.type ? z = "nocontent": 304 === t ? z = "notmodified": (z = m.state, l = m.data, b = m.error, s = !b)) : (b = z, (t || !z) && (z = "error", 0 > t && (t = 0))), y.status = t, y.statusText = (e || z) + "", s ? d.resolveWith(f, [l, z, y]) : d.rejectWith(f, [y, z, b]), y.statusCode(g), g = void 0, u && h.trigger(s ? "ajaxSuccess": "ajaxError", [y, p, s ? l: b]), M.fireWith(f, [y, z]), u && (h.trigger("ajaxComplete", [y, p]), --Z.active || Z.event.trigger("ajaxStop")))
					}
					"object" == typeof t && (e = t, t = void 0),
					e = e || {};
					var r, i, o, a, c, s, u, l, p = Z.ajaxSetup({},
					e),
					f = p.context || p,
					h = p.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
					d = Z.Deferred(),
					M = Z.Callbacks("once memory"),
					g = p.statusCode || {},
					b = {},
					m = {},
					v = 0,
					A = "canceled",
					y = {
						readyState: 0,
						getResponseHeader: function (t) {
							var e;
							if (2 === v) {
								if (!a) for (a = {}; e = gn.exec(o);) a[e[1].toLowerCase()] = e[2];
								e = a[t.toLowerCase()]
							}
							return null == e ? null: e
						},
						getAllResponseHeaders: function () {
							return 2 === v ? o: null
						},
						setRequestHeader: function (t, e) {
							var n = t.toLowerCase();
							return v || (t = m[n] = m[n] || t, b[t] = e),
							this
						},
						overrideMimeType: function (t) {
							return v || (p.mimeType = t),
							this
						},
						statusCode: function (t) {
							var e;
							if (t) if (2 > v) for (e in t) g[e] = [g[e], t[e]];
							else y.always(t[y.status]);
							return this
						},
						abort: function (t) {
							var e = t || A;
							return r && r.abort(e),
							n(0, e),
							this
						}
					};
					if (d.promise(y).complete = M.add, y.success = y.done, y.error = y.fail, p.url = ((t || p.url || hn) + "").replace(dn, "").replace(vn, fn[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(he) || [""], null == p.crossDomain && (s = An.exec(p.url.toLowerCase()), p.crossDomain = !(!s || s[1] === fn[1] && s[2] === fn[2] && (s[3] || ("http:" === s[1] ? "80": "443")) === (fn[3] || ("http:" === fn[1] ? "80": "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)), X(yn, p, e, y), 2 === v) return y;
					u = p.global,
					u && 0 === Z.active++&&Z.event.trigger("ajaxStart"),
					p.type = p.type.toUpperCase(),
					p.hasContent = !mn.test(p.type),
					i = p.url,
					p.hasContent || (p.data && (i = p.url += (pn.test(i) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = Mn.test(i) ? i.replace(Mn, "$1_=" + ln++) : i + (pn.test(i) ? "&": "?") + "_=" + ln++)),
					p.ifModified && (Z.lastModified[i] && y.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && y.setRequestHeader("If-None-Match", Z.etag[i])),
					(p.data && p.hasContent && p.contentType !== !1 || e.contentType) && y.setRequestHeader("Content-Type", p.contentType),
					y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + _n + "; q=0.01": "") : p.accepts["*"]);
					for (l in p.headers) y.setRequestHeader(l, p.headers[l]);
					if (p.beforeSend && (p.beforeSend.call(f, y, p) === !1 || 2 === v)) return y.abort();
					A = "abort";
					for (l in {
						success: 1,
						error: 1,
						complete: 1
					}) y[l](p[l]);
					if (r = X(zn, p, e, y)) {
						y.readyState = 1,
						u && h.trigger("ajaxSend", [y, p]),
						p.async && p.timeout > 0 && (c = setTimeout(function () {
							y.abort("timeout")
						},
						p.timeout));
						try {
							v = 1,
							r.send(b, n)
						} catch(z) {
							if (! (2 > v)) throw z;
							n( - 1, z)
						}
					} else n( - 1, "No Transport");
					return y
				},
				getJSON: function (t, e, n) {
					return Z.get(t, e, n, "json")
				},
				getScript: function (t, e) {
					return Z.get(t, void 0, e, "script")
				}
			}),
			Z.each(["get", "post"], function (t, e) {
				Z[e] = function (t, n, r, i) {
					return Z.isFunction(n) && (i = i || r, r = n, n = void 0),
					Z.ajax({
						url: t,
						type: e,
						dataType: i,
						data: n,
						success: r
					})
				}
			}),
			Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
				Z.fn[e] = function (t) {
					return this.on(e, t)
				}
			}),
			Z._evalUrl = function (t) {
				return Z.ajax({
					url: t,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				})
			},
			Z.fn.extend({
				wrapAll: function (t) {
					var e;
					return Z.isFunction(t) ? this.each(function (e) {
						Z(this).wrapAll(t.call(this, e))
					}) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
						for (var t = this; t.firstElementChild;) t = t.firstElementChild;
						return t
					}).append(this)), this)
				},
				wrapInner: function (t) {
					return this.each(Z.isFunction(t) ?
					function (e) {
						Z(this).wrapInner(t.call(this, e))
					}: function () {
						var e = Z(this),
						n = e.contents();
						n.length ? n.wrapAll(t) : e.append(t)
					})
				},
				wrap: function (t) {
					var e = Z.isFunction(t);
					return this.each(function (n) {
						Z(this).wrapAll(e ? t.call(this, n) : t)
					})
				},
				unwrap: function () {
					return this.parent().each(function () {
						Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
					}).end()
				}
			}),
			Z.expr.filters.hidden = function (t) {
				return t.offsetWidth <= 0 && t.offsetHeight <= 0
			},
			Z.expr.filters.visible = function (t) {
				return ! Z.expr.filters.hidden(t)
			};
			var On = / /g,
			Ln = /\[\]$/,
			wn = /\r?\n/g,
			Nn = /^(?:submit|button|image|reset|file)$/i,
			qn = /^(?:input|select|textarea|keygen)/i;
			Z.param = function (t, e) {
				var n, r = [],
				i = function (t, e) {
					e = Z.isFunction(e) ? e() : null == e ? "": e,
					r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
				};
				if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function () {
					i(this.name, this.value)
				});
				else for (n in t) P(n, t[n], e, i);
				return r.join("&").replace(On, "+")
			},
			Z.fn.extend({
				serialize: function () {
					return Z.param(this.serializeArray())
				},
				serializeArray: function () {
					return this.map(function () {
						var t = Z.prop(this, "elements");
						return t ? Z.makeArray(t) : this
					}).filter(function () {
						var t = this.type;
						return this.name && !Z(this).is(":disabled") && qn.test(this.nodeName) && !Nn.test(t) && (this.checked || !Te.test(t))
					}).map(function (t, e) {
						var n = Z(this).val();
						return null == n ? null: Z.isArray(n) ? Z.map(n, function (t) {
							return {
								name: e.name,
								value: t.replace(wn, "\r\n")
							}
						}) : {
							name: e.name,
							value: n.replace(wn, "\r\n")
						}
					}).get()
				}
			}),
			Z.ajaxSettings.xhr = function () {
				try {
					return new XMLHttpRequest
				} catch(t) {}
			};
			var xn = 0,
			Sn = {},
			Wn = {
				0 : 200,
				1223 : 204
			},
			En = Z.ajaxSettings.xhr();
			t.ActiveXObject && Z(t).on("unload", function () {
				for (var t in Sn) Sn[t]()
			}),
			$.cors = !!En && "withCredentials" in En,
			$.ajax = En = !!En,
			Z.ajaxTransport(function (t) {
				var e;
				return $.cors || En && !t.crossDomain ? {
					send: function (n, r) {
						var i, o = t.xhr(),
						a = ++xn;
						if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (i in t.xhrFields) o[i] = t.xhrFields[i];
						t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
						t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
						for (i in n) o.setRequestHeader(i, n[i]);
						e = function (t) {
							return function () {
								e && (delete Sn[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Wn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
									text: o.responseText
								}: void 0, o.getAllResponseHeaders()))
							}
						},
						o.onload = e(),
						o.onerror = e("error"),
						e = Sn[a] = e("abort");
						try {
							o.send(t.hasContent && t.data || null)
						} catch(c) {
							if (e) throw c
						}
					},
					abort: function () {
						e && e()
					}
				}: void 0
			}),
			Z.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /(?:java|ecma)script/
				},
				converters: {
					"text script": function (t) {
						return Z.globalEval(t),
						t
					}
				}
			}),
			Z.ajaxPrefilter("script", function (t) {
				void 0 === t.cache && (t.cache = !1),
				t.crossDomain && (t.type = "GET")
			}),
			Z.ajaxTransport("script", function (t) {
				if (t.crossDomain) {
					var e, n;
					return {
						send: function (r, i) {
							e = Z("<script>").prop({
								async: !0,
								charset: t.scriptCharset,
								src: t.url
							}).on("load error", n = function (t) {
								e.remove(),
								n = null,
								t && i("error" === t.type ? 404 : 200, t.type)
							}),
							Q.head.appendChild(e[0])
						},
						abort: function () {
							n && n()
						}
					}
				}
			});
			var Bn = [],
			Cn = /(=)\?(?=&|$)|\?\?/;
			Z.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function () {
					var t = Bn.pop() || Z.expando + "_" + ln++;
					return this[t] = !0,
					t
				}
			}),
			Z.ajaxPrefilter("json jsonp", function (e, n, r) {
				var i, o, a, c = e.jsonp !== !1 && (Cn.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Cn.test(e.data) && "data");
				return c || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, c ? e[c] = e[c].replace(Cn, "$1" + i) : e.jsonp !== !1 && (e.url += (pn.test(e.url) ? "&": "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
					return a || Z.error(i + " was not called"),
					a[0]
				},
				e.dataTypes[0] = "json", o = t[i], t[i] = function () {
					a = arguments
				},
				r.always(function () {
					t[i] = o,
					e[i] && (e.jsonpCallback = n.jsonpCallback, Bn.push(i)),
					a && Z.isFunction(o) && o(a[0]),
					a = o = void 0
				}), "script") : void 0
			}),
			Z.parseHTML = function (t, e, n) {
				if (!t || "string" != typeof t) return null;
				"boolean" == typeof e && (n = e, e = !1),
				e = e || Q;
				var r = ae.exec(t),
				i = !n && [];
				return r ? [e.createElement(r[1])] : (r = Z.buildFragment([t], e, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
			};
			var Xn = Z.fn.load;
			Z.fn.load = function (t, e, n) {
				if ("string" != typeof t && Xn) return Xn.apply(this, arguments);
				var r, i, o, a = this,
				c = t.indexOf(" ");
				return c >= 0 && (r = Z.trim(t.slice(c)), t = t.slice(0, c)),
				Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"),
				a.length > 0 && Z.ajax({
					url: t,
					type: i,
					dataType: "html",
					data: e
				}).done(function (t) {
					o = arguments,
					a.html(r ? Z("<div>").append(Z.parseHTML(t)).find(r) : t)
				}).complete(n &&
				function (t, e) {
					a.each(n, o || [t.responseText, e, t])
				}),
				this
			},
			Z.expr.filters.animated = function (t) {
				return Z.grep(Z.timers, function (e) {
					return t === e.elem
				}).length
			};
			var Rn = t.document.documentElement;
			Z.offset = {
				setOffset: function (t, e, n) {
					var r, i, o, a, c, s, u, l = Z.css(t, "position"),
					p = Z(t),
					f = {};
					"static" === l && (t.style.position = "relative"),
					c = p.offset(),
					o = Z.css(t, "top"),
					s = Z.css(t, "left"),
					u = ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1,
					u ? (r = p.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0),
					Z.isFunction(e) && (e = e.call(t, n, c)),
					null != e.top && (f.top = e.top - c.top + a),
					null != e.left && (f.left = e.left - c.left + i),
					"using" in e ? e.using.call(t, f) : p.css(f)
				}
			},
			Z.fn.extend({
				offset: function (t) {
					if (arguments.length) return void 0 === t ? this: this.each(function (e) {
						Z.offset.setOffset(this, t, e)
					});
					var e, n, r = this[0],
					i = {
						top: 0,
						left: 0
					},
					o = r && r.ownerDocument;
					if (o) return e = o.documentElement,
					Z.contains(e, r) ? (typeof r.getBoundingClientRect !== Oe && (i = r.getBoundingClientRect()), n = I(o), {
						top: i.top + n.pageYOffset - e.clientTop,
						left: i.left + n.pageXOffset - e.clientLeft
					}) : i
				},
				position: function () {
					if (this[0]) {
						var t, e, n = this[0],
						r = {
							top: 0,
							left: 0
						};
						return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (r = t.offset()), r.top += Z.css(t[0], "borderTopWidth", !0), r.left += Z.css(t[0], "borderLeftWidth", !0)),
						{
							top: e.top - r.top - Z.css(n, "marginTop", !0),
							left: e.left - r.left - Z.css(n, "marginLeft", !0)
						}
					}
				},
				offsetParent: function () {
					return this.map(function () {
						for (var t = this.offsetParent || Rn; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
						return t || Rn
					})
				}
			}),
			Z.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			},
			function (e, n) {
				var r = "pageYOffset" === n;
				Z.fn[e] = function (i) {
					return ge(this, function (e, i, o) {
						var a = I(e);
						return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset: o, r ? o: t.pageYOffset) : e[i] = o)
					},
					e, i, arguments.length, null)
				}
			}),
			Z.each(["top", "left"], function (t, e) {
				Z.cssHooks[e] = z($.pixelPosition, function (t, n) {
					return n ? (n = y(t, e), je.test(n) ? Z(t).position()[e] + "px": n) : void 0
				})
			}),
			Z.each({
				Height: "height",
				Width: "width"
			},
			function (t, e) {
				Z.each({
					padding: "inner" + t,
					content: e,
					"": "outer" + t
				},
				function (n, r) {
					Z.fn[r] = function (r, i) {
						var o = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || i === !0 ? "margin": "border");
						return ge(this, function (e, n, r) {
							var i;
							return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? Z.css(e, n, a) : Z.style(e, n, r, a)
						},
						e, o ? r: void 0, o, null)
					}
				})
			}),
			Z.fn.size = function () {
				return this.length
			},
			Z.fn.andSelf = Z.fn.addBack,
			"function" == typeof define && define.amd && define("jquery", [], function () {
				return Z
			});
			var kn = t.jQuery,
			Dn = t.$;
			return Z.noConflict = function (e) {
				return t.$ === Z && (t.$ = Dn),
				e && t.jQuery === Z && (t.jQuery = kn),
				Z
			},
			typeof e === Oe && (t.jQuery = t.$ = Z),
			Z
		})
	},
	{}],
	99 : [function (t, e, n) { (function (t) { (function () {
				function r(t, e) {
					if (t !== e) {
						var n = null === t,
						r = t === T,
						i = t === t,
						o = null === e,
						a = e === T,
						c = e === e;
						if (t > e && !o || !i || n && !a && c || r && c) return 1;
						if (e > t && !n || !c || o && !r && i || a && i) return - 1
					}
					return 0
				}
				function i(t, e, n) {
					for (var r = t.length, i = n ? r: -1; n ? i--:++i < r;) if (e(t[i], i, t)) return i;
					return - 1
				}
				function o(t, e, n) {
					if (e !== e) return M(t, n);
					for (var r = n - 1, i = t.length; ++r < i;) if (t[r] === e) return r;
					return - 1
				}
				function a(t) {
					return "function" == typeof t || !1
				}
				function c(t) {
					return "string" == typeof t ? t: null == t ? "": t + ""
				}
				function s(t, e) {
					for (var n = -1, r = t.length; ++n < r && e.indexOf(t.charAt(n)) > -1;);
					return n
				}
				function u(t, e) {
					for (var n = t.length; n--&&e.indexOf(t.charAt(n)) > -1;);
					return n
				}
				function l(t, e) {
					return r(t.criteria, e.criteria) || t.index - e.index
				}
				function p(t, e, n) {
					for (var i = -1, o = t.criteria, a = e.criteria, c = o.length, s = n.length; ++i < c;) {
						var u = r(o[i], a[i]);
						if (u) return i >= s ? u: u * (n[i] ? 1 : -1)
					}
					return t.index - e.index
				}
				function f(t) {
					return Fe[t]
				}
				function h(t) {
					return Ve[t]
				}
				function d(t) {
					return "\\" + Ke[t]
				}
				function M(t, e, n) {
					for (var r = t.length, i = e + (n ? 0 : -1); n ? i--:++i < r;) {
						var o = t[i];
						if (o !== o) return i
					}
					return - 1
				}
				function g(t) {
					return !! t && "object" == typeof t
				}
				function b(t) {
					return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
				}
				function m(t, e) {
					for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) t[n] === e && (t[n] = H, o[++i] = n);
					return o
				}
				function v(t, e) {
					for (var n, r = -1, i = t.length, o = -1, a = []; ++r < i;) {
						var c = t[r],
						s = e ? e(c, r, t) : c;
						r && n === s || (n = s, a[++o] = c)
					}
					return a
				}
				function A(t) {
					for (var e = -1, n = t.length; ++e < n && b(t.charCodeAt(e)););
					return e
				}
				function y(t) {
					for (var e = t.length; e--&&b(t.charCodeAt(e)););
					return e
				}
				function z(t) {
					return Ge[t]
				}
				function _(t) {
					function e(t) {
						if (g(t) && !ws(t) && !(t instanceof $)) {
							if (t instanceof b) return t;
							if (Ka.call(t, "__chain__") && Ka.call(t, "__wrapped__")) return ui(t)
						}
						return new b(t)
					}
					function n() {}
					function b(t, e, n) {
						this.__wrapped__ = t,
						this.__actions__ = n || [],
						this.__chain__ = !!e
					}
					function $(t) {
						this.__wrapped__ = t,
						this.__actions__ = null,
						this.__dir__ = 1,
						this.__dropCount__ = 0,
						this.__filtered__ = !1,
						this.__iteratees__ = null,
						this.__takeCount__ = Oc,
						this.__views__ = null
					}
					function te() {
						var t = this.__actions__,
						e = this.__iteratees__,
						n = this.__views__,
						r = new $(this.__wrapped__);
						return r.__actions__ = t ? tn(t) : null,
						r.__dir__ = this.__dir__,
						r.__filtered__ = this.__filtered__,
						r.__iteratees__ = e ? tn(e) : null,
						r.__takeCount__ = this.__takeCount__,
						r.__views__ = n ? tn(n) : null,
						r
					}
					function ne() {
						if (this.__filtered__) {
							var t = new $(this);
							t.__dir__ = -1,
							t.__filtered__ = !0
						} else t = this.clone(),
						t.__dir__ *= -1;
						return t
					}
					function Fe() {
						var t = this.__wrapped__.value();
						if (!ws(t)) return nr(t, this.__actions__);
						var e = this.__dir__,
						n = 0 > e,
						r = jr(0, t.length, this.__views__),
						i = r.start,
						o = r.end,
						a = o - i,
						c = n ? o: i - 1,
						s = vc(a, this.__takeCount__),
						u = this.__iteratees__,
						l = u ? u.length: 0,
						p = 0,
						f = [];
						t: for (; a--&&s > p;) {
							c += e;
							for (var h = -1, d = t[c]; ++h < l;) {
								var M = u[h],
								g = M.iteratee,
								b = M.type;
								if (b == D) {
									if (M.done && (n ? c > M.index: c < M.index) && (M.count = 0, M.done = !1), M.index = c, !M.done) {
										var m = M.limit;
										if (! (M.done = m > -1 ? M.count++>=m: !g(d))) continue t
									}
								} else {
									var v = g(d);
									if (b == I) d = v;
									else if (!v) {
										if (b == P) continue t;
										break t
									}
								}
							}
							f[p++] = d
						}
						return f
					}
					function Ve() {
						this.__data__ = {}
					}
					function Ge(t) {
						return this.has(t) && delete this.__data__[t]
					}
					function Ye(t) {
						return "__proto__" == t ? T: this.__data__[t]
					}
					function Ke(t) {
						return "__proto__" != t && Ka.call(this.__data__, t)
					}
					function $e(t, e) {
						return "__proto__" != t && (this.__data__[t] = e),
						this
					}
					function Qe(t) {
						var e = t ? t.length: 0;
						for (this.data = {
							hash: dc(null),
							set: new sc
						}; e--;) this.push(t[e])
					}
					function Je(t, e) {
						var n = t.data,
						r = "string" == typeof e || qo(e) ? n.set.has(e) : n.hash[e];
						return r ? 0 : -1
					}
					function Ze(t) {
						var e = this.data;
						"string" == typeof t || qo(t) ? e.set.add(t) : e.hash[t] = !0
					}
					function tn(t, e) {
						var n = -1,
						r = t.length;
						for (e || (e = Ba(r)); ++n < r;) e[n] = t[n];
						return e
					}
					function en(t, e) {
						for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
						return t
					}
					function on(t, e) {
						for (var n = t.length; n--&&e(t[n], n, t) !== !1;);
						return t
					}
					function an(t, e) {
						for (var n = -1, r = t.length; ++n < r;) if (!e(t[n], n, t)) return ! 1;
						return ! 0
					}
					function cn(t, e, n, r) {
						for (var i = -1, o = t.length, a = r, c = a; ++i < o;) {
							var s = t[i],
							u = +e(s);
							n(u, a) && (a = u, c = s)
						}
						return c
					}
					function sn(t, e) {
						for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) {
							var a = t[n];
							e(a, n, t) && (o[++i] = a)
						}
						return o
					}
					function un(t, e) {
						for (var n = -1, r = t.length, i = Ba(r); ++n < r;) i[n] = e(t[n], n, t);
						return i
					}
					function ln(t, e, n, r) {
						var i = -1,
						o = t.length;
						for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
						return n
					}
					function pn(t, e, n, r) {
						var i = t.length;
						for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
						return n
					}
					function fn(t, e) {
						for (var n = -1, r = t.length; ++n < r;) if (e(t[n], n, t)) return ! 0;
						return ! 1
					}
					function hn(t) {
						for (var e = t.length, n = 0; e--;) n += +t[e] || 0;
						return n
					}
					function dn(t, e) {
						return t === T ? e: t
					}
					function Mn(t, e, n, r) {
						return t !== T && Ka.call(r, n) ? t: e
					}
					function gn(t, e, n) {
						for (var r = -1, i = Ds(e), o = i.length; ++r < o;) {
							var a = i[r],
							c = t[a],
							s = n(c, e[a], a, t, e);
							(s === s ? s === c: c !== c) && (c !== T || a in t) || (t[a] = s)
						}
						return t
					}
					function bn(t, e) {
						return null == e ? t: vn(e, Ds(e), t)
					}
					function mn(t, e) {
						for (var n = -1, r = null == t, i = !r && Gr(t), o = i ? t.length: 0, a = e.length, c = Ba(a); ++n < a;) {
							var s = e[n];
							c[n] = i ? Yr(s, o) ? t[s] : T: r ? T: t[s]
						}
						return c
					}
					function vn(t, e, n) {
						n || (n = {});
						for (var r = -1, i = e.length; ++r < i;) {
							var o = e[r];
							n[o] = t[o]
						}
						return n
					}
					function An(t, e, n) {
						var r = typeof t;
						return "function" == r ? e === T ? t: or(t, e, n) : null == t ? ya: "object" == r ? Dn(t) : e === T ? wa(t) : Pn(t, e)
					}
					function yn(t, e, n, r, i, o, a) {
						var c;
						if (n && (c = i ? n(t, r, i) : n(t)), c !== T) return c;
						if (!qo(t)) return t;
						var s = ws(t);
						if (s) {
							if (c = Hr(t), !e) return tn(t, c)
						} else {
							var u = Qa.call(t),
							l = u == K;
							if (u != J && u != U && (!l || i)) return He[u] ? Fr(t, u, e) : i ? t: {};
							if (c = Ur(l ? {}: t), !e) return bn(c, t)
						}
						o || (o = []),
						a || (a = []);
						for (var p = o.length; p--;) if (o[p] == t) return a[p];
						return o.push(t),
						a.push(c),
						(s ? en: Sn)(t, function (r, i) {
							c[i] = yn(r, e, n, i, t, o, a)
						}),
						c
					}
					function zn(t, e, n) {
						if ("function" != typeof t) throw new Ha(j);
						return uc(function () {
							t.apply(T, n)
						},
						e)
					}
					function _n(t, e) {
						var n = t ? t.length: 0,
						r = [];
						if (!n) return r;
						var i = -1,
						a = Dr(),
						c = a == o,
						s = c && e.length >= 200 ? Pc(e) : null,
						u = e.length;
						s && (a = Je, c = !1, e = s);
						t: for (; ++i < n;) {
							var l = t[i];
							if (c && l === l) {
								for (var p = u; p--;) if (e[p] === l) continue t;
								r.push(l)
							} else a(e, l, 0) < 0 && r.push(l)
						}
						return r
					}
					function Tn(t, e) {
						var n = !0;
						return Cc(t, function (t, r, i) {
							return n = !!e(t, r, i)
						}),
						n
					}
					function On(t, e, n, r) {
						var i = r,
						o = i;
						return Cc(t, function (t, a, c) {
							var s = +e(t, a, c);
							(n(s, i) || s === r && s === o) && (i = s, o = t)
						}),
						o
					}
					function Ln(t, e, n, r) {
						var i = t.length;
						for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > i ? 0 : i + n), r = r === T || r > i ? i: +r || 0, 0 > r && (r += i), i = n > r ? 0 : r >>> 0, n >>>= 0; i > n;) t[n++] = e;
						return t
					}
					function wn(t, e) {
						var n = [];
						return Cc(t, function (t, r, i) {
							e(t, r, i) && n.push(t)
						}),
						n
					}
					function Nn(t, e, n, r) {
						var i;
						return n(t, function (t, n, o) {
							return e(t, n, o) ? (i = r ? n: t, !1) : void 0
						}),
						i
					}
					function qn(t, e, n) {
						for (var r = -1, i = t.length, o = -1, a = []; ++r < i;) {
							var c = t[r];
							if (g(c) && Gr(c) && (n || ws(c) || zo(c))) {
								e && (c = qn(c, e, n));
								for (var s = -1, u = c.length; ++s < u;) a[++o] = c[s]
							} else n || (a[++o] = c)
						}
						return a
					}
					function xn(t, e) {
						return Rc(t, e, Yo)
					}
					function Sn(t, e) {
						return Rc(t, e, Ds)
					}
					function Wn(t, e) {
						return kc(t, e, Ds)
					}
					function En(t, e) {
						for (var n = -1, r = e.length, i = -1, o = []; ++n < r;) {
							var a = e[n];
							qs(t[a]) && (o[++i] = a)
						}
						return o
					}
					function Bn(t, e, n) {
						if (null != t) {
							n !== T && n in ci(t) && (e = [n]);
							for (var r = 0, i = e.length; null != t && i > r;) t = t[e[r++]];
							return r && r == i ? t: T
						}
					}
					function Cn(t, e, n, r, i, o) {
						return t === e ? !0 : null == t || null == e || !qo(t) && !g(e) ? t !== t && e !== e: Xn(t, e, Cn, n, r, i, o)
					}
					function Xn(t, e, n, r, i, o, a) {
						var c = ws(t),
						s = ws(e),
						u = F,
						l = F;
						c || (u = Qa.call(t), u == U ? u = J: u != J && (c = Ro(t))),
						s || (l = Qa.call(e), l == U ? l = J: l != J && (s = Ro(e)));
						var p = u == J,
						f = l == J,
						h = u == l;
						if (h && !c && !p) return Cr(t, e, u);
						if (!i) {
							var d = p && Ka.call(t, "__wrapped__"),
							M = f && Ka.call(e, "__wrapped__");
							if (d || M) return n(d ? t.value() : t, M ? e.value() : e, r, i, o, a)
						}
						if (!h) return ! 1;
						o || (o = []),
						a || (a = []);
						for (var g = o.length; g--;) if (o[g] == t) return a[g] == e;
						o.push(t),
						a.push(e);
						var b = (c ? Br: Xr)(t, e, n, r, i, o, a);
						return o.pop(),
						a.pop(),
						b
					}
					function Rn(t, e, n) {
						var r = e.length,
						i = r,
						o = !n;
						if (null == t) return ! i;
						for (t = ci(t); r--;) {
							var a = e[r];
							if (o && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return ! 1
						}
						for (; ++r < i;) {
							a = e[r];
							var c = a[0],
							s = t[c],
							u = a[1];
							if (o && a[2]) {
								if (s === T && !(c in t)) return ! 1
							} else {
								var l = n ? n(s, u, c) : T;
								if (! (l === T ? Cn(u, s, n, !0) : l)) return ! 1
							}
						}
						return ! 0
					}
					function kn(t, e) {
						var n = -1,
						r = Gr(t) ? Ba(t.length) : [];
						return Cc(t, function (t, i, o) {
							r[++n] = e(t, i, o)
						}),
						r
					}
					function Dn(t) {
						var e = Pr(t);
						if (1 == e.length && e[0][2]) {
							var n = e[0][0],
							r = e[0][1];
							return function (t) {
								return null == t ? !1 : t[n] === r && (r !== T || n in ci(t))
							}
						}
						return function (t) {
							return Rn(t, e)
						}
					}
					function Pn(t, e) {
						var n = ws(t),
						r = $r(t) && Zr(e),
						i = t + "";
						return t = si(t),
						function (o) {
							if (null == o) return ! 1;
							var a = i;
							if (o = ci(o), !(!n && r || a in o)) {
								if (o = 1 == t.length ? o: Bn(o, Yn(t, 0, -1)), null == o) return ! 1;
								a = zi(t),
								o = ci(o)
							}
							return o[a] === e ? e !== T || a in o: Cn(e, o[a], T, !0)
						}
					}
					function In(t, e, n, r, i) {
						if (!qo(t)) return t;
						var o = Gr(e) && (ws(e) || Ro(e)),
						a = o ? null: Ds(e);
						return en(a || e, function (c, s) {
							if (a && (s = c, c = e[s]), g(c)) r || (r = []),
							i || (i = []),
							jn(t, e, s, In, n, r, i);
							else {
								var u = t[s],
								l = n ? n(u, c, s, t, e) : T,
								p = l === T;
								p && (l = c),
								l === T && (!o || s in t) || !p && (l === l ? l === u: u !== u) || (t[s] = l)
							}
						}),
						t
					}
					function jn(t, e, n, r, i, o, a) {
						for (var c = o.length, s = e[n]; c--;) if (o[c] == s) return void(t[n] = a[c]);
						var u = t[n],
						l = i ? i(u, s, n, t, e) : T,
						p = l === T;
						p && (l = s, Gr(s) && (ws(s) || Ro(s)) ? l = ws(u) ? u: Gr(u) ? tn(u) : [] : xs(s) || zo(s) ? l = zo(u) ? jo(u) : xs(u) ? u: {}: p = !1),
						o.push(s),
						a.push(l),
						p ? t[n] = r(l, s, i, o, a) : (l === l ? l !== u: u === u) && (t[n] = l)
					}
					function Hn(t) {
						return function (e) {
							return null == e ? T: e[t]
						}
					}
					function Un(t) {
						var e = t + "";
						return t = si(t),
						function (n) {
							return Bn(n, t, e)
						}
					}
					function Fn(t, e) {
						for (var n = t ? e.length: 0; n--;) {
							var r = e[n];
							if (r != i && Yr(r)) {
								var i = r;
								lc.call(t, r, 1)
							}
						}
						return t
					}
					function Vn(t, e) {
						return t + ic(_c() * (e - t + 1))
					}
					function Gn(t, e, n, r, i) {
						return i(t, function (t, i, o) {
							n = r ? (r = !1, t) : e(n, t, i, o)
						}),
						n
					}
					function Yn(t, e, n) {
						var r = -1,
						i = t.length;
						e = null == e ? 0 : +e || 0,
						0 > e && (e = -e > i ? 0 : i + e),
						n = n === T || n > i ? i: +n || 0,
						0 > n && (n += i),
						i = e > n ? 0 : n - e >>> 0,
						e >>>= 0;
						for (var o = Ba(i); ++r < i;) o[r] = t[r + e];
						return o
					}
					function Kn(t, e) {
						var n;
						return Cc(t, function (t, r, i) {
							return n = e(t, r, i),
							!n
						}),
						!!n
					}
					function $n(t, e) {
						var n = t.length;
						for (t.sort(e); n--;) t[n] = t[n].value;
						return t
					}
					function Qn(t, e, n) {
						var r = Rr(),
						i = -1;
						e = un(e, function (t) {
							return r(t)
						});
						var o = kn(t, function (t) {
							var n = un(e, function (e) {
								return e(t)
							});
							return {
								criteria: n,
								index: ++i,
								value: t
							}
						});
						return $n(o, function (t, e) {
							return p(t, e, n)
						})
					}
					function Jn(t, e) {
						var n = 0;
						return Cc(t, function (t, r, i) {
							n += +e(t, r, i) || 0
						}),
						n
					}
					function Zn(t, e) {
						var n = -1,
						r = Dr(),
						i = t.length,
						a = r == o,
						c = a && i >= 200,
						s = c ? Pc() : null,
						u = [];
						s ? (r = Je, a = !1) : (c = !1, s = e ? [] : u);
						t: for (; ++n < i;) {
							var l = t[n],
							p = e ? e(l, n, t) : l;
							if (a && l === l) {
								for (var f = s.length; f--;) if (s[f] === p) continue t;
								e && s.push(p),
								u.push(l)
							} else r(s, p, 0) < 0 && ((e || c) && s.push(p), u.push(l))
						}
						return u
					}
					function tr(t, e) {
						for (var n = -1, r = e.length, i = Ba(r); ++n < r;) i[n] = t[e[n]];
						return i
					}
					function er(t, e, n, r) {
						for (var i = t.length, o = r ? i: -1;
						(r ? o--:++o < i) && e(t[o], o, t););
						return n ? Yn(t, r ? 0 : o, r ? o + 1 : i) : Yn(t, r ? o + 1 : 0, r ? i: o)
					}
					function nr(t, e) {
						var n = t;
						n instanceof $ && (n = n.value());
						for (var r = -1, i = e.length; ++r < i;) {
							var o = [n],
							a = e[r];
							cc.apply(o, a.args),
							n = a.func.apply(a.thisArg, o)
						}
						return n
					}
					function rr(t, e, n) {
						var r = 0,
						i = t ? t.length: r;
						if ("number" == typeof e && e === e && Nc >= i) {
							for (; i > r;) {
								var o = r + i >>> 1,
								a = t[o];
								(n ? e >= a: e > a) && null !== a ? r = o + 1 : i = o
							}
							return i
						}
						return ir(t, e, ya, n)
					}
					function ir(t, e, n, r) {
						e = n(e);
						for (var i = 0, o = t ? t.length: 0, a = e !== e, c = null === e, s = e === T; o > i;) {
							var u = ic((i + o) / 2),
							l = n(t[u]),
							p = l !== T,
							f = l === l;
							if (a) var h = f || r;
							else h = c ? f && p && (r || null != l) : s ? f && (r || p) : null == l ? !1 : r ? e >= l: e > l;
							h ? i = u + 1 : o = u
						}
						return vc(o, wc)
					}
					function or(t, e, n) {
						if ("function" != typeof t) return ya;
						if (e === T) return t;
						switch (n) {
						case 1:
							return function (n) {
								return t.call(e, n)
							};
						case 3:
							return function (n, r, i) {
								return t.call(e, n, r, i)
							};
						case 4:
							return function (n, r, i, o) {
								return t.call(e, n, r, i, o)
							};
						case 5:
							return function (n, r, i, o, a) {
								return t.call(e, n, r, i, o, a)
							}
						}
						return function () {
							return t.apply(e, arguments)
						}
					}
					function ar(t) {
						return ec.call(t, 0)
					}
					function cr(t, e, n) {
						for (var r = n.length, i = -1, o = mc(t.length - r, 0), a = -1, c = e.length, s = Ba(o + c); ++a < c;) s[a] = e[a];
						for (; ++i < r;) s[n[i]] = t[i];
						for (; o--;) s[a++] = t[i++];
						return s
					}
					function sr(t, e, n) {
						for (var r = -1, i = n.length, o = -1, a = mc(t.length - i, 0), c = -1, s = e.length, u = Ba(a + s); ++o < a;) u[o] = t[o];
						for (var l = o; ++c < s;) u[l + c] = e[c];
						for (; ++r < i;) u[l + n[r]] = t[o++];
						return u
					}
					function ur(t, e) {
						return function (n, r, i) {
							var o = e ? e() : {};
							if (r = Rr(r, i, 3), ws(n)) for (var a = -1, c = n.length; ++a < c;) {
								var s = n[a];
								t(o, s, r(s, a, n), n)
							} else Cc(n, function (e, n, i) {
								t(o, e, r(e, n, i), i)
							});
							return o
						}
					}
					function lr(t) {
						return ho(function (e, n) {
							var r = -1,
							i = null == e ? 0 : n.length,
							o = i > 2 ? n[i - 2] : T,
							a = i > 2 ? n[2] : T,
							c = i > 1 ? n[i - 1] : T;
							for ("function" == typeof o ? (o = or(o, c, 5), i -= 2) : (o = "function" == typeof c ? c: T, i -= o ? 1 : 0), a && Kr(n[0], n[1], a) && (o = 3 > i ? T: o, i = 1); ++r < i;) {
								var s = n[r];
								s && t(e, s, o)
							}
							return e
						})
					}
					function pr(t, e) {
						return function (n, r) {
							var i = n ? jc(n) : 0;
							if (!Jr(i)) return t(n, r);
							for (var o = e ? i: -1, a = ci(n);
							(e ? o--:++o < i) && r(a[o], o, a) !== !1;);
							return n
						}
					}
					function fr(t) {
						return function (e, n, r) {
							for (var i = ci(e), o = r(e), a = o.length, c = t ? a: -1; t ? c--:++c < a;) {
								var s = o[c];
								if (n(i[s], s, i) === !1) break
							}
							return e
						}
					}
					function hr(t, e) {
						function n() {
							var i = this && this !== nn && this instanceof n ? r: t;
							return i.apply(e, arguments)
						}
						var r = Mr(t);
						return n
					}
					function dr(t) {
						return function (e) {
							for (var n = -1, r = ma(ia(e)), i = r.length, o = ""; ++n < i;) o = t(o, r[n], n);
							return o
						}
					}
					function Mr(t) {
						return function () {
							var e = arguments;
							switch (e.length) {
							case 0:
								return new t;
							case 1:
								return new t(e[0]);
							case 2:
								return new t(e[0], e[1]);
							case 3:
								return new t(e[0], e[1], e[2]);
							case 4:
								return new t(e[0], e[1], e[2], e[3]);
							case 5:
								return new t(e[0], e[1], e[2], e[3], e[4])
							}
							var n = Bc(t.prototype),
							r = t.apply(n, e);
							return qo(r) ? r: n
						}
					}
					function gr(t) {
						function e(n, r, i) {
							i && Kr(n, r, i) && (r = null);
							var o = Er(n, t, null, null, null, null, null, r);
							return o.placeholder = e.placeholder,
							o
						}
						return e
					}
					function br(t, e) {
						return function (n, r, i) {
							if (i && Kr(n, r, i) && (r = null), r = Rr(r, i, 3), 1 == r.length) {
								n = ai(n);
								var o = cn(n, r, t, e);
								if (!n.length || o !== e) return o
							}
							return On(n, r, t, e)
						}
					}
					function mr(t, e) {
						return function (n, r, o) {
							if (r = Rr(r, o, 3), ws(n)) {
								var a = i(n, r, e);
								return a > -1 ? n[a] : T
							}
							return Nn(n, r, t)
						}
					}
					function vr(t) {
						return function (e, n, r) {
							return e && e.length ? (n = Rr(n, r, 3), i(e, n, t)) : -1
						}
					}
					function Ar(t) {
						return function (e, n, r) {
							return n = Rr(n, r, 3),
							Nn(e, n, t, !0)
						}
					}
					function yr(t) {
						return function () {
							for (var e, n = arguments.length, r = t ? n: -1, i = 0, o = Ba(n); t ? r--:++r < n;) {
								var a = o[i++] = arguments[r];
								if ("function" != typeof a) throw new Ha(j); ! e && b.prototype.thru && "wrapper" == kr(a) && (e = new b([]))
							}
							for (r = e ? -1 : n; ++r < n;) {
								a = o[r];
								var c = kr(a),
								s = "wrapper" == c ? Ic(a) : null;
								e = s && Qr(s[0]) && s[1] == (E | q | S | B) && !s[4].length && 1 == s[9] ? e[kr(s[0])].apply(e, s[3]) : 1 == a.length && Qr(a) ? e[c]() : e.thru(a)
							}
							return function () {
								var t = arguments;
								if (e && 1 == t.length && ws(t[0])) return e.plant(t[0]).value();
								for (var r = 0, i = n ? o[r].apply(this, t) : t[0]; ++r < n;) i = o[r].call(this, i);
								return i
							}
						}
					}
					function zr(t, e) {
						return function (n, r, i) {
							return "function" == typeof r && i === T && ws(n) ? t(n, r) : e(n, or(r, i, 3))
						}
					}
					function _r(t) {
						return function (e, n, r) {
							return ("function" != typeof n || r !== T) && (n = or(n, r, 3)),
							t(e, n, Yo)
						}
					}
					function Tr(t) {
						return function (e, n, r) {
							return ("function" != typeof n || r !== T) && (n = or(n, r, 3)),
							t(e, n)
						}
					}
					function Or(t) {
						return function (e, n, r) {
							var i = {};
							return n = Rr(n, r, 3),
							Sn(e, function (e, r, o) {
								var a = n(e, r, o);
								r = t ? a: r,
								e = t ? e: a,
								i[r] = e
							}),
							i
						}
					}
					function Lr(t) {
						return function (e, n, r) {
							return e = c(e),
							(t ? e: "") + xr(e, n, r) + (t ? "": e)
						}
					}
					function wr(t) {
						var e = ho(function (n, r) {
							var i = m(r, e.placeholder);
							return Er(n, t, null, r, i)
						});
						return e
					}
					function Nr(t, e) {
						return function (n, r, i, o) {
							var a = arguments.length < 3;
							return "function" == typeof r && o === T && ws(n) ? t(n, r, i, a) : Gn(n, Rr(r, o, 4), i, a, e)
						}
					}
					function qr(t, e, n, r, i, o, a, c, s, u) {
						function l() {
							for (var v = arguments.length, A = v, y = Ba(v); A--;) y[A] = arguments[A];
							if (r && (y = cr(y, r, i)), o && (y = sr(y, o, a)), d || g) {
								var z = l.placeholder,
								_ = m(y, z);
								if (v -= _.length, u > v) {
									var O = c ? tn(c) : null,
									N = mc(u - v, 0),
									q = d ? _: null,
									x = d ? null: _,
									E = d ? y: null,
									B = d ? null: y;
									e |= d ? S: W,
									e &= ~ (d ? W: S),
									M || (e &= ~ (L | w));
									var C = [t, e, n, E, q, B, x, O, s, N],
									X = qr.apply(T, C);
									return Qr(t) && Hc(X, C),
									X.placeholder = z,
									X
								}
							}
							var R = f ? n: this,
							k = h ? R[t] : t;
							return c && (y = ri(y, c)),
							p && s < y.length && (y.length = s),
							this && this !== nn && this instanceof l && (k = b || Mr(t)),
							k.apply(R, y)
						}
						var p = e & E,
						f = e & L,
						h = e & w,
						d = e & q,
						M = e & N,
						g = e & x,
						b = h ? null: Mr(t);
						return l
					}
					function xr(t, e, n) {
						var r = t.length;
						if (e = +e, r >= e || !gc(e)) return "";
						var i = e - r;
						return n = null == n ? " ": n + "",
						la(n, nc(i / n.length)).slice(0, i)
					}
					function Sr(t, e, n, r) {
						function i() {
							for (var e = -1, c = arguments.length, s = -1, u = r.length, l = Ba(c + u); ++s < u;) l[s] = r[s];
							for (; c--;) l[s++] = arguments[++e];
							var p = this && this !== nn && this instanceof i ? a: t;
							return p.apply(o ? n: this, l)
						}
						var o = e & L,
						a = Mr(t);
						return i
					}
					function Wr(t) {
						return function (e, n, r, i) {
							var o = Rr(r);
							return null == r && o === An ? rr(e, n, t) : ir(e, n, o(r, i, 1), t)
						}
					}
					function Er(t, e, n, r, i, o, a, c) {
						var s = e & w;
						if (!s && "function" != typeof t) throw new Ha(j);
						var u = r ? r.length: 0;
						if (u || (e &= ~ (S | W), r = i = null), u -= i ? i.length: 0, e & W) {
							var l = r,
							p = i;
							r = i = null
						}
						var f = s ? null: Ic(t),
						h = [t, e, n, r, i, l, p, o, a, c];
						if (f && (ti(h, f), e = h[1], c = h[9]), h[9] = null == c ? s ? 0 : t.length: mc(c - u, 0) || 0, e == L) var d = hr(h[0], h[2]);
						else d = e != S && e != (L | S) || h[4].length ? qr.apply(T, h) : Sr.apply(T, h);
						var M = f ? Dc: Hc;
						return M(d, h)
					}
					function Br(t, e, n, r, i, o, a) {
						var c = -1,
						s = t.length,
						u = e.length;
						if (s != u && !(i && u > s)) return ! 1;
						for (; ++c < s;) {
							var l = t[c],
							p = e[c],
							f = r ? r(i ? p: l, i ? l: p, c) : T;
							if (f !== T) {
								if (f) continue;
								return ! 1
							}
							if (i) {
								if (!fn(e, function (t) {
									return l === t || n(l, t, r, i, o, a)
								})) return ! 1
							} else if (l !== p && !n(l, p, r, i, o, a)) return ! 1
						}
						return ! 0
					}
					function Cr(t, e, n) {
						switch (n) {
						case V:
						case G:
							return + t == +e;
						case Y:
							return t.name == e.name && t.message == e.message;
						case Q:
							return t != +t ? e != +e: t == +e;
						case Z:
						case ee:
							return t == e + ""
						}
						return ! 1
					}
					function Xr(t, e, n, r, i, o, a) {
						var c = Ds(t),
						s = c.length,
						u = Ds(e),
						l = u.length;
						if (s != l && !i) return ! 1;
						for (var p = s; p--;) {
							var f = c[p];
							if (! (i ? f in e: Ka.call(e, f))) return ! 1
						}
						for (var h = i; ++p < s;) {
							f = c[p];
							var d = t[f],
							M = e[f],
							g = r ? r(i ? M: d, i ? d: M, f) : T;
							if (! (g === T ? n(d, M, r, i, o, a) : g)) return ! 1;
							h || (h = "constructor" == f)
						}
						if (!h) {
							var b = t.constructor,
							m = e.constructor;
							if (b != m && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof m && m instanceof m)) return ! 1
						}
						return ! 0
					}
					function Rr(t, n, r) {
						var i = e.callback || va;
						return i = i === va ? An: i,
						r ? i(t, n, r) : i
					}
					function kr(t) {
						for (var e = t.name, n = Wc[e], r = n ? n.length: 0; r--;) {
							var i = n[r],
							o = i.func;
							if (null == o || o == t) return i.name
						}
						return e
					}
					function Dr(t, n, r) {
						var i = e.indexOf || Ai;
						return i = i === Ai ? o: i,
						t ? i(t, n, r) : i
					}
					function Pr(t) {
						for (var e = Ko(t), n = e.length; n--;) e[n][2] = Zr(e[n][1]);
						return e
					}
					function Ir(t, e) {
						var n = null == t ? T: t[e];
						return Wo(n) ? n: T
					}
					function jr(t, e, n) {
						for (var r = -1, i = n ? n.length: 0; ++r < i;) {
							var o = n[r],
							a = o.size;
							switch (o.type) {
							case "drop":
								t += a;
								break;
							case "dropRight":
								e -= a;
								break;
							case "take":
								e = vc(e, t + a);
								break;
							case "takeRight":
								t = mc(t, e - a)
							}
						}
						return {
							start: t,
							end: e
						}
					}
					function Hr(t) {
						var e = t.length,
						n = new t.constructor(e);
						return e && "string" == typeof t[0] && Ka.call(t, "index") && (n.index = t.index, n.input = t.input),
						n
					}
					function Ur(t) {
						var e = t.constructor;
						return "function" == typeof e && e instanceof e || (e = Pa),
						new e
					}
					function Fr(t, e, n) {
						var r = t.constructor;
						switch (e) {
						case re:
							return ar(t);
						case V:
						case G:
							return new r( + t);
						case ie:
						case oe:
						case ae:
						case ce:
						case se:
						case ue:
						case le:
						case pe:
						case fe:
							var i = t.buffer;
							return new r(n ? ar(i) : i, t.byteOffset, t.length);
						case Q:
						case ee:
							return new r(t);
						case Z:
							var o = new r(t.source, Se.exec(t));
							o.lastIndex = t.lastIndex
						}
						return o
					}
					function Vr(t, e, n) {
						null == t || $r(e, t) || (e = si(e), t = 1 == e.length ? t: Bn(t, Yn(e, 0, -1)), e = zi(e));
						var r = null == t ? t: t[e];
						return null == r ? T: r.apply(t, n)
					}
					function Gr(t) {
						return null != t && Jr(jc(t))
					}
					function Yr(t, e) {
						return t = "number" == typeof t || Be.test(t) ? +t: -1,
						e = null == e ? xc: e,
						t > -1 && t % 1 == 0 && e > t
					}
					function Kr(t, e, n) {
						if (!qo(n)) return ! 1;
						var r = typeof e;
						if ("number" == r ? Gr(n) && Yr(e, n.length) : "string" == r && e in n) {
							var i = n[e];
							return t === t ? t === i: i !== i
						}
						return ! 1
					}
					function $r(t, e) {
						var n = typeof t;
						if ("string" == n && Te.test(t) || "number" == n) return ! 0;
						if (ws(t)) return ! 1;
						var r = !_e.test(t);
						return r || null != e && t in ci(e)
					}
					function Qr(t) {
						var n = kr(t);
						if (! (n in $.prototype)) return ! 1;
						var r = e[n];
						if (t === r) return ! 0;
						var i = Ic(r);
						return !! i && t === i[0]
					}
					function Jr(t) {
						return "number" == typeof t && t > -1 && t % 1 == 0 && xc >= t
					}
					function Zr(t) {
						return t === t && !qo(t)
					}
					function ti(t, e) {
						var n = t[1],
						r = e[1],
						i = n | r,
						o = E > i,
						a = r == E && n == q || r == E && n == B && t[7].length <= e[8] || r == (E | B) && n == q;
						if (!o && !a) return t;
						r & L && (t[2] = e[2], i |= n & L ? 0 : N);
						var c = e[3];
						if (c) {
							var s = t[3];
							t[3] = s ? cr(s, c, e[4]) : tn(c),
							t[4] = s ? m(t[3], H) : tn(e[4])
						}
						return c = e[5],
						c && (s = t[5], t[5] = s ? sr(s, c, e[6]) : tn(c), t[6] = s ? m(t[5], H) : tn(e[6])),
						c = e[7],
						c && (t[7] = tn(c)),
						r & E && (t[8] = null == t[8] ? e[8] : vc(t[8], e[8])),
						null == t[9] && (t[9] = e[9]),
						t[0] = e[0],
						t[1] = i,
						t
					}
					function ei(t, e) {
						t = ci(t);
						for (var n = -1, r = e.length, i = {}; ++n < r;) {
							var o = e[n];
							o in t && (i[o] = t[o])
						}
						return i
					}
					function ni(t, e) {
						var n = {};
						return xn(t, function (t, r, i) {
							e(t, r, i) && (n[r] = t)
						}),
						n
					}
					function ri(t, e) {
						for (var n = t.length, r = vc(e.length, n), i = tn(t); r--;) {
							var o = e[r];
							t[r] = Yr(o, n) ? i[o] : T
						}
						return t
					}
					function ii(t) {
						{
							var n;
							e.support
						}
						if (!g(t) || Qa.call(t) != J || !Ka.call(t, "constructor") && (n = t.constructor, "function" == typeof n && !(n instanceof n))) return ! 1;
						var r;
						return xn(t, function (t, e) {
							r = e
						}),
						r === T || Ka.call(t, r)
					}
					function oi(t) {
						for (var e = Yo(t), n = e.length, r = n && t.length, i = !!r && Jr(r) && (ws(t) || zo(t)), o = -1, a = []; ++o < n;) {
							var c = e[o];
							(i && Yr(c, r) || Ka.call(t, c)) && a.push(c)
						}
						return a
					}
					function ai(t) {
						return null == t ? [] : Gr(t) ? qo(t) ? t: Pa(t) : Zo(t)
					}
					function ci(t) {
						return qo(t) ? t: Pa(t)
					}
					function si(t) {
						if (ws(t)) return t;
						var e = [];
						return c(t).replace(Oe, function (t, n, r, i) {
							e.push(r ? i.replace(qe, "$1") : n || t)
						}),
						e
					}
					function ui(t) {
						return t instanceof $ ? t.clone() : new b(t.__wrapped__, t.__chain__, tn(t.__actions__))
					}
					function li(t, e, n) {
						e = (n ? Kr(t, e, n) : null == e) ? 1 : mc( + e || 1, 1);
						for (var r = 0, i = t ? t.length: 0, o = -1, a = Ba(nc(i / e)); i > r;) a[++o] = Yn(t, r, r += e);
						return a
					}
					function pi(t) {
						for (var e = -1, n = t ? t.length: 0, r = -1, i = []; ++e < n;) {
							var o = t[e];
							o && (i[++r] = o)
						}
						return i
					}
					function fi(t, e, n) {
						var r = t ? t.length: 0;
						return r ? ((n ? Kr(t, e, n) : null == e) && (e = 1), Yn(t, 0 > e ? 0 : e)) : []
					}
					function hi(t, e, n) {
						var r = t ? t.length: 0;
						return r ? ((n ? Kr(t, e, n) : null == e) && (e = 1), e = r - ( + e || 0), Yn(t, 0, 0 > e ? 0 : e)) : []
					}
					function di(t, e, n) {
						return t && t.length ? er(t, Rr(e, n, 3), !0, !0) : []
					}
					function Mi(t, e, n) {
						return t && t.length ? er(t, Rr(e, n, 3), !0) : []
					}
					function gi(t, e, n, r) {
						var i = t ? t.length: 0;
						return i ? (n && "number" != typeof n && Kr(t, e, n) && (n = 0, r = i), Ln(t, e, n, r)) : []
					}
					function bi(t) {
						return t ? t[0] : T
					}
					function mi(t, e, n) {
						var r = t ? t.length: 0;
						return n && Kr(t, e, n) && (e = !1),
						r ? qn(t, e) : []
					}
					function vi(t) {
						var e = t ? t.length: 0;
						return e ? qn(t, !0) : []
					}
					function Ai(t, e, n) {
						var r = t ? t.length: 0;
						if (!r) return - 1;
						if ("number" == typeof n) n = 0 > n ? mc(r + n, 0) : n;
						else if (n) {
							var i = rr(t, e),
							a = t[i];
							return (e === e ? e === a: a !== a) ? i: -1
						}
						return o(t, e, n || 0)
					}
					function yi(t) {
						return hi(t, 1)
					}
					function zi(t) {
						var e = t ? t.length: 0;
						return e ? t[e - 1] : T
					}
					function _i(t, e, n) {
						var r = t ? t.length: 0;
						if (!r) return - 1;
						var i = r;
						if ("number" == typeof n) i = (0 > n ? mc(r + n, 0) : vc(n || 0, r - 1)) + 1;
						else if (n) {
							i = rr(t, e, !0) - 1;
							var o = t[i];
							return (e === e ? e === o: o !== o) ? i: -1
						}
						if (e !== e) return M(t, i, !0);
						for (; i--;) if (t[i] === e) return i;
						return - 1
					}
					function Ti() {
						var t = arguments,
						e = t[0];
						if (!e || !e.length) return e;
						for (var n = 0, r = Dr(), i = t.length; ++n < i;) for (var o = 0, a = t[n];
						(o = r(e, a, o)) > -1;) lc.call(e, o, 1);
						return e
					}
					function Oi(t, e, n) {
						var r = [];
						if (!t || !t.length) return r;
						var i = -1,
						o = [],
						a = t.length;
						for (e = Rr(e, n, 3); ++i < a;) {
							var c = t[i];
							e(c, i, t) && (r.push(c), o.push(i))
						}
						return Fn(t, o),
						r
					}
					function Li(t) {
						return fi(t, 1)
					}
					function wi(t, e, n) {
						var r = t ? t.length: 0;
						return r ? (n && "number" != typeof n && Kr(t, e, n) && (e = 0, n = r), Yn(t, e, n)) : []
					}
					function Ni(t, e, n) {
						var r = t ? t.length: 0;
						return r ? ((n ? Kr(t, e, n) : null == e) && (e = 1), Yn(t, 0, 0 > e ? 0 : e)) : []
					}
					function qi(t, e, n) {
						var r = t ? t.length: 0;
						return r ? ((n ? Kr(t, e, n) : null == e) && (e = 1), e = r - ( + e || 0), Yn(t, 0 > e ? 0 : e)) : []
					}
					function xi(t, e, n) {
						return t && t.length ? er(t, Rr(e, n, 3), !1, !0) : []
					}
					function Si(t, e, n) {
						return t && t.length ? er(t, Rr(e, n, 3)) : []
					}
					function Wi(t, e, n, r) {
						var i = t ? t.length: 0;
						if (!i) return [];
						null != e && "boolean" != typeof e && (r = n, n = Kr(t, e, r) ? null: e, e = !1);
						var a = Rr();
						return (null != n || a !== An) && (n = a(n, r, 3)),
						e && Dr() == o ? v(t, n) : Zn(t, n)
					}
					function Ei(t) {
						if (!t || !t.length) return [];
						var e = -1,
						n = 0;
						t = sn(t, function (t) {
							return Gr(t) ? (n = mc(t.length, n), !0) : void 0
						});
						for (var r = Ba(n); ++e < n;) r[e] = un(t, Hn(e));
						return r
					}
					function Bi(t, e, n) {
						var r = t ? t.length: 0;
						if (!r) return [];
						var i = Ei(t);
						return null == e ? i: (e = or(e, n, 4), un(i, function (t) {
							return ln(t, e, T, !0)
						}))
					}
					function Ci() {
						for (var t = -1, e = arguments.length; ++t < e;) {
							var n = arguments[t];
							if (Gr(n)) var r = r ? _n(r, n).concat(_n(n, r)) : n
						}
						return r ? Zn(r) : []
					}
					function Xi(t, e) {
						var n = -1,
						r = t ? t.length: 0,
						i = {};
						for (!r || e || ws(t[0]) || (e = []); ++n < r;) {
							var o = t[n];
							e ? i[o] = e[n] : o && (i[o[0]] = o[1])
						}
						return i
					}
					function Ri(t) {
						var n = e(t);
						return n.__chain__ = !0,
						n
					}
					function ki(t, e, n) {
						return e.call(n, t),
						t
					}
					function Di(t, e, n) {
						return e.call(n, t)
					}
					function Pi() {
						return Ri(this)
					}
					function Ii() {
						return new b(this.value(), this.__chain__)
					}
					function ji(t) {
						for (var e, r = this; r instanceof n;) {
							var i = ui(r);
							e ? o.__wrapped__ = i: e = i;
							var o = i;
							r = r.__wrapped__
						}
						return o.__wrapped__ = t,
						e
					}
					function Hi() {
						var t = this.__wrapped__;
						return t instanceof $ ? (this.__actions__.length && (t = new $(this)), new b(t.reverse(), this.__chain__)) : this.thru(function (t) {
							return t.reverse()
						})
					}
					function Ui() {
						return this.value() + ""
					}
					function Fi() {
						return nr(this.__wrapped__, this.__actions__)
					}
					function Vi(t, e, n) {
						var r = ws(t) ? an: Tn;
						return n && Kr(t, e, n) && (e = null),
						("function" != typeof e || n !== T) && (e = Rr(e, n, 3)),
						r(t, e)
					}
					function Gi(t, e, n) {
						var r = ws(t) ? sn: wn;
						return e = Rr(e, n, 3),
						r(t, e)
					}
					function Yi(t, e) {
						return rs(t, Dn(e))
					}
					function Ki(t, e, n, r) {
						var i = t ? jc(t) : 0;
						return Jr(i) || (t = Zo(t), i = t.length),
						i ? (n = "number" != typeof n || r && Kr(e, n, r) ? 0 : 0 > n ? mc(i + n, 0) : n || 0, "string" == typeof t || !ws(t) && Xo(t) ? i > n && t.indexOf(e, n) > -1 : Dr(t, e, n) > -1) : !1
					}
					function $i(t, e, n) {
						var r = ws(t) ? un: kn;
						return e = Rr(e, n, 3),
						r(t, e)
					}
					function Qi(t, e) {
						return $i(t, wa(e))
					}
					function Ji(t, e, n) {
						var r = ws(t) ? sn: wn;
						return e = Rr(e, n, 3),
						r(t, function (t, n, r) {
							return ! e(t, n, r)
						})
					}
					function Zi(t, e, n) {
						if (n ? Kr(t, e, n) : null == e) {
							t = ai(t);
							var r = t.length;
							return r > 0 ? t[Vn(0, r - 1)] : T
						}
						var i = -1,
						o = Io(t),
						r = o.length,
						a = r - 1;
						for (e = vc(0 > e ? 0 : +e || 0, r); ++i < e;) {
							var c = Vn(i, a),
							s = o[c];
							o[c] = o[i],
							o[i] = s
						}
						return o.length = e,
						o
					}
					function to(t) {
						return Zi(t, Oc)
					}
					function eo(t) {
						var e = t ? jc(t) : 0;
						return Jr(e) ? e: Ds(t).length
					}
					function no(t, e, n) {
						var r = ws(t) ? fn: Kn;
						return n && Kr(t, e, n) && (e = null),
						("function" != typeof e || n !== T) && (e = Rr(e, n, 3)),
						r(t, e)
					}
					function ro(t, e, n) {
						if (null == t) return [];
						n && Kr(t, e, n) && (e = null);
						var r = -1;
						e = Rr(e, n, 3);
						var i = kn(t, function (t, n, i) {
							return {
								criteria: e(t, n, i),
								index: ++r,
								value: t
							}
						});
						return $n(i, l)
					}
					function io(t, e, n, r) {
						return null == t ? [] : (r && Kr(e, n, r) && (n = null), ws(e) || (e = null == e ? [] : [e]), ws(n) || (n = null == n ? [] : [n]), Qn(t, e, n))
					}
					function oo(t, e) {
						return Gi(t, Dn(e))
					}
					function ao(t, e) {
						if ("function" != typeof e) {
							if ("function" != typeof t) throw new Ha(j);
							var n = t;
							t = e,
							e = n
						}
						return t = gc(t = +t) ? t: 0,
						function () {
							return--t < 1 ? e.apply(this, arguments) : void 0
						}
					}
					function co(t, e, n) {
						return n && Kr(t, e, n) && (e = null),
						e = t && null == e ? t.length: mc( + e || 0, 0),
						Er(t, E, null, null, null, null, e)
					}
					function so(t, e) {
						var n;
						if ("function" != typeof e) {
							if ("function" != typeof t) throw new Ha(j);
							var r = t;
							t = e,
							e = r
						}
						return function () {
							return--t > 0 && (n = e.apply(this, arguments)),
							1 >= t && (e = null),
							n
						}
					}
					function uo(t, e, n) {
						function r() {
							f && rc(f),
							s && rc(s),
							s = f = h = T
						}
						function i() {
							var n = e - (ds() - l);
							if (0 >= n || n > e) {
								s && rc(s);
								var r = h;
								s = f = h = T,
								r && (d = ds(), u = t.apply(p, c), f || s || (c = p = null))
							} else f = uc(i, n)
						}
						function o() {
							f && rc(f),
							s = f = h = T,
							(g || M !== e) && (d = ds(), u = t.apply(p, c), f || s || (c = p = null))
						}
						function a() {
							if (c = arguments, l = ds(), p = this, h = g && (f || !b), M === !1) var n = b && !f;
							else {
								s || b || (d = l);
								var r = M - (l - d),
								a = 0 >= r || r > M;
								a ? (s && (s = rc(s)), d = l, u = t.apply(p, c)) : s || (s = uc(o, r))
							}
							return a && f ? f = rc(f) : f || e === M || (f = uc(i, e)),
							n && (a = !0, u = t.apply(p, c)),
							!a || f || s || (c = p = null),
							u
						}
						var c, s, u, l, p, f, h, d = 0,
						M = !1,
						g = !0;
						if ("function" != typeof t) throw new Ha(j);
						if (e = 0 > e ? 0 : +e || 0, n === !0) {
							var b = !0;
							g = !1
						} else qo(n) && (b = n.leading, M = "maxWait" in n && mc( + n.maxWait || 0, e), g = "trailing" in n ? n.trailing: g);
						return a.cancel = r,
						a
					}
					function lo(t, e) {
						if ("function" != typeof t || e && "function" != typeof e) throw new Ha(j);
						var n = function () {
							var r = arguments,
							i = e ? e.apply(this, r) : r[0],
							o = n.cache;
							if (o.has(i)) return o.get(i);
							var a = t.apply(this, r);
							return n.cache = o.set(i, a),
							a
						};
						return n.cache = new lo.Cache,
						n
					}
					function po(t) {
						if ("function" != typeof t) throw new Ha(j);
						return function () {
							return ! t.apply(this, arguments)
						}
					}
					function fo(t) {
						return so(2, t)
					}
					function ho(t, e) {
						if ("function" != typeof t) throw new Ha(j);
						return e = mc(e === T ? t.length - 1 : +e || 0, 0),
						function () {
							for (var n = arguments, r = -1, i = mc(n.length - e, 0), o = Ba(i); ++r < i;) o[r] = n[e + r];
							switch (e) {
							case 0:
								return t.call(this, o);
							case 1:
								return t.call(this, n[0], o);
							case 2:
								return t.call(this, n[0], n[1], o)
							}
							var a = Ba(e + 1);
							for (r = -1; ++r < e;) a[r] = n[r];
							return a[e] = o,
							t.apply(this, a)
						}
					}
					function Mo(t) {
						if ("function" != typeof t) throw new Ha(j);
						return function (e) {
							return t.apply(this, e)
						}
					}
					function go(t, e, n) {
						var r = !0,
						i = !0;
						if ("function" != typeof t) throw new Ha(j);
						return n === !1 ? r = !1 : qo(n) && (r = "leading" in n ? !!n.leading: r, i = "trailing" in n ? !!n.trailing: i),
						Ue.leading = r,
						Ue.maxWait = +e,
						Ue.trailing = i,
						uo(t, e, Ue)
					}
					function bo(t, e) {
						return e = null == e ? ya: e,
						Er(e, S, null, [t], [])
					}
					function mo(t, e, n, r) {
						return e && "boolean" != typeof e && Kr(t, e, n) ? e = !1 : "function" == typeof e && (r = n, n = e, e = !1),
						"function" == typeof n ? yn(t, e, or(n, r, 1)) : yn(t, e)
					}
					function vo(t, e, n) {
						return "function" == typeof e ? yn(t, !0, or(e, n, 1)) : yn(t, !0)
					}
					function Ao(t, e) {
						return t > e
					}
					function yo(t, e) {
						return t >= e
					}
					function zo(t) {
						return g(t) && Gr(t) && Qa.call(t) == U
					}
					function _o(t) {
						return t === !0 || t === !1 || g(t) && Qa.call(t) == V
					}
					function To(t) {
						return g(t) && Qa.call(t) == G
					}
					function Oo(t) {
						return !! t && 1 === t.nodeType && g(t) && Qa.call(t).indexOf("Element") > -1
					}
					function Lo(t) {
						return null == t ? !0 : Gr(t) && (ws(t) || Xo(t) || zo(t) || g(t) && qs(t.splice)) ? !t.length: !Ds(t).length
					}
					function wo(t, e, n, r) {
						n = "function" == typeof n ? or(n, r, 3) : T;
						var i = n ? n(t, e) : T;
						return i === T ? Cn(t, e, n) : !!i
					}
					function No(t) {
						return g(t) && "string" == typeof t.message && Qa.call(t) == Y
					}
					function qo(t) {
						var e = typeof t;
						return !! t && ("object" == e || "function" == e)
					}
					function xo(t, e, n, r) {
						return n = "function" == typeof n ? or(n, r, 3) : T,
						Rn(t, Pr(e), n)
					}
					function So(t) {
						return Bo(t) && t != +t
					}
					function Wo(t) {
						return null == t ? !1 : Qa.call(t) == K ? Za.test(Ya.call(t)) : g(t) && Ee.test(t)
					}
					function Eo(t) {
						return null === t
					}
					function Bo(t) {
						return "number" == typeof t || g(t) && Qa.call(t) == Q
					}
					function Co(t) {
						return g(t) && Qa.call(t) == Z
					}
					function Xo(t) {
						return "string" == typeof t || g(t) && Qa.call(t) == ee
					}
					function Ro(t) {
						return g(t) && Jr(t.length) && !!je[Qa.call(t)]
					}
					function ko(t) {
						return t === T
					}
					function Do(t, e) {
						return e > t
					}
					function Po(t, e) {
						return e >= t
					}
					function Io(t) {
						var e = t ? jc(t) : 0;
						return Jr(e) ? e ? tn(t) : [] : Zo(t)
					}
					function jo(t) {
						return vn(t, Yo(t))
					}
					function Ho(t, e, n) {
						var r = Bc(t);
						return n && Kr(t, e, n) && (e = null),
						e ? bn(r, e) : r
					}
					function Uo(t) {
						return En(t, Yo(t))
					}
					function Fo(t, e, n) {
						var r = null == t ? T: Bn(t, si(e), e + "");
						return r === T ? n: r
					}
					function Vo(t, e) {
						if (null == t) return ! 1;
						var n = Ka.call(t, e);
						if (!n && !$r(e)) {
							if (e = si(e), t = 1 == e.length ? t: Bn(t, Yn(e, 0, -1)), null == t) return ! 1;
							e = zi(e),
							n = Ka.call(t, e)
						}
						return n || Jr(t.length) && Yr(e, t.length) && (ws(t) || zo(t))
					}
					function Go(t, e, n) {
						n && Kr(t, e, n) && (e = null);
						for (var r = -1, i = Ds(t), o = i.length, a = {}; ++r < o;) {
							var c = i[r],
							s = t[c];
							e ? Ka.call(a, s) ? a[s].push(c) : a[s] = [c] : a[s] = c
						}
						return a
					}
					function Yo(t) {
						if (null == t) return [];
						qo(t) || (t = Pa(t));
						var e = t.length;
						e = e && Jr(e) && (ws(t) || zo(t)) && e || 0;
						for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, o = Ba(e), a = e > 0; ++r < e;) o[r] = r + "";
						for (var c in t) a && Yr(c, e) || "constructor" == c && (i || !Ka.call(t, c)) || o.push(c);
						return o
					}
					function Ko(t) {
						t = ci(t);
						for (var e = -1, n = Ds(t), r = n.length, i = Ba(r); ++e < r;) {
							var o = n[e];
							i[e] = [o, t[o]]
						}
						return i
					}
					function $o(t, e, n) {
						var r = null == t ? T: t[e];
						return r === T && (null == t || $r(e, t) || (e = si(e), t = 1 == e.length ? t: Bn(t, Yn(e, 0, -1)), r = null == t ? T: t[zi(e)]), r = r === T ? n: r),
						qs(r) ? r.call(t) : r
					}
					function Qo(t, e, n) {
						if (null == t) return t;
						var r = e + "";
						e = null != t[r] || $r(e, t) ? [r] : si(e);
						for (var i = -1, o = e.length, a = o - 1, c = t; null != c && ++i < o;) {
							var s = e[i];
							qo(c) && (i == a ? c[s] = n: null == c[s] && (c[s] = Yr(e[i + 1]) ? [] : {})),
							c = c[s]
						}
						return t
					}
					function Jo(t, e, n, r) {
						var i = ws(t) || Ro(t);
						if (e = Rr(e, r, 4), null == n) if (i || qo(t)) {
							var o = t.constructor;
							n = i ? ws(t) ? new o: [] : Bc(qs(o) ? o.prototype: null)
						} else n = {};
						return (i ? en: Sn)(t, function (t, r, i) {
							return e(n, t, r, i)
						}),
						n
					}
					function Zo(t) {
						return tr(t, Ds(t))
					}
					function ta(t) {
						return tr(t, Yo(t))
					}
					function ea(t, e, n) {
						return e = +e || 0,
						"undefined" == typeof n ? (n = e, e = 0) : n = +n || 0,
						t >= vc(e, n) && t < mc(e, n)
					}
					function na(t, e, n) {
						n && Kr(t, e, n) && (e = n = null);
						var r = null == t,
						i = null == e;
						if (null == n && (i && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, i = !0)), r && i && (e = 1, i = !1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
							var o = _c();
							return vc(t + o * (e - t + ac("1e-" + ((o + "").length - 1))), e)
						}
						return Vn(t, e)
					}
					function ra(t) {
						return t = c(t),
						t && t.charAt(0).toUpperCase() + t.slice(1)
					}
					function ia(t) {
						return t = c(t),
						t && t.replace(Ce, f).replace(Ne, "")
					}
					function oa(t, e, n) {
						t = c(t),
						e += "";
						var r = t.length;
						return n = n === T ? r: vc(0 > n ? 0 : +n || 0, r),
						n -= e.length,
						n >= 0 && t.indexOf(e, n) == n
					}
					function aa(t) {
						return t = c(t),
						t && ve.test(t) ? t.replace(be, h) : t
					}
					function ca(t) {
						return t = c(t),
						t && we.test(t) ? t.replace(Le, "\\$&") : t
					}
					function sa(t, e, n) {
						t = c(t),
						e = +e;
						var r = t.length;
						if (r >= e || !gc(e)) return t;
						var i = (e - r) / 2,
						o = ic(i),
						a = nc(i);
						return n = xr("", a, n),
						n.slice(0, o) + t + n
					}
					function ua(t, e, n) {
						return n && Kr(t, e, n) && (e = 0),
						zc(t, e)
					}
					function la(t, e) {
						var n = "";
						if (t = c(t), e = +e, 1 > e || !t || !gc(e)) return n;
						do e % 2 && (n += t),
						e = ic(e / 2),
						t += t;
						while (e);
						return n
					}
					function pa(t, e, n) {
						return t = c(t),
						n = null == n ? 0 : vc(0 > n ? 0 : +n || 0, t.length),
						t.lastIndexOf(e, n) == n
					}
					function fa(t, n, r) {
						var i = e.templateSettings;
						r && Kr(t, n, r) && (n = r = null),
						t = c(t),
						n = gn(bn({},
						r || n), i, Mn);
						var o, a, s = gn(bn({},
						n.imports), i.imports, Mn),
						u = Ds(s),
						l = tr(s, u),
						p = 0,
						f = n.interpolate || Xe,
						h = "__p += '",
						M = Ia((n.escape || Xe).source + "|" + f.source + "|" + (f === ze ? xe: Xe).source + "|" + (n.evaluate || Xe).source + "|$", "g"),
						g = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL: "lodash.templateSources[" + ++Ie + "]") + "\n";
						t.replace(M, function (e, n, r, i, c, s) {
							return r || (r = i),
							h += t.slice(p, s).replace(Re, d),
							n && (o = !0, h += "' +\n__e(" + n + ") +\n'"),
							c && (a = !0, h += "';\n" + c + ";\n__p += '"),
							r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
							p = s + e.length,
							e
						}),
						h += "';\n";
						var b = n.variable;
						b || (h = "with (obj) {\n" + h + "\n}\n"),
						h = (a ? h.replace(he, "") : h).replace(de, "$1").replace(Me, "$1;"),
						h = "function(" + (b || "obj") + ") {\n" + (b ? "": "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape": "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n": ";\n") + h + "return __p\n}";
						var m = Qs(function () {
							return Ra(u, g + "return " + h).apply(T, l)
						});
						if (m.source = h, No(m)) throw m;
						return m
					}
					function ha(t, e, n) {
						var r = t;
						return (t = c(t)) ? (n ? Kr(r, e, n) : null == e) ? t.slice(A(t), y(t) + 1) : (e += "", t.slice(s(t, e), u(t, e) + 1)) : t
					}
					function da(t, e, n) {
						var r = t;
						return t = c(t),
						t ? t.slice((n ? Kr(r, e, n) : null == e) ? A(t) : s(t, e + "")) : t
					}
					function Ma(t, e, n) {
						var r = t;
						return t = c(t),
						t ? (n ? Kr(r, e, n) : null == e) ? t.slice(0, y(t) + 1) : t.slice(0, u(t, e + "") + 1) : t
					}
					function ga(t, e, n) {
						n && Kr(t, e, n) && (e = null);
						var r = C,
						i = X;
						if (null != e) if (qo(e)) {
							var o = "separator" in e ? e.separator: o;
							r = "length" in e ? +e.length || 0 : r,
							i = "omission" in e ? c(e.omission) : i
						} else r = +e || 0;
						if (t = c(t), r >= t.length) return t;
						var a = r - i.length;
						if (1 > a) return i;
						var s = t.slice(0, a);
						if (null == o) return s + i;
						if (Co(o)) {
							if (t.slice(a).search(o)) {
								var u, l, p = t.slice(0, a);
								for (o.global || (o = Ia(o.source, (Se.exec(o) || "") + "g")), o.lastIndex = 0; u = o.exec(p);) l = u.index;
								s = s.slice(0, null == l ? a: l)
							}
						} else if (t.indexOf(o, a) != a) {
							var f = s.lastIndexOf(o);
							f > -1 && (s = s.slice(0, f))
						}
						return s + i
					}
					function ba(t) {
						return t = c(t),
						t && me.test(t) ? t.replace(ge, z) : t
					}
					function ma(t, e, n) {
						return n && Kr(t, e, n) && (e = null),
						t = c(t),
						t.match(e || ke) || []
					}
					function va(t, e, n) {
						return n && Kr(t, e, n) && (e = null),
						g(t) ? za(t) : An(t, e)
					}
					function Aa(t) {
						return function () {
							return t
						}
					}
					function ya(t) {
						return t
					}
					function za(t) {
						return Dn(yn(t, !0))
					}
					function _a(t, e) {
						return Pn(t, yn(e, !0))
					}
					function Ta(t, e, n) {
						if (null == n) {
							var r = qo(e),
							i = r ? Ds(e) : null,
							o = i && i.length ? En(e, i) : null;
							(o ? o.length: r) || (o = !1, n = e, e = t, t = this)
						}
						o || (o = En(e, Ds(e)));
						var a = !0,
						c = -1,
						s = qs(t),
						u = o.length;
						n === !1 ? a = !1 : qo(n) && "chain" in n && (a = n.chain);
						for (; ++c < u;) {
							var l = o[c],
							p = e[l];
							t[l] = p,
							s && (t.prototype[l] = function (e) {
								return function () {
									var n = this.__chain__;
									if (a || n) {
										var r = t(this.__wrapped__),
										i = r.__actions__ = tn(this.__actions__);
										return i.push({
											func: e,
											args: arguments,
											thisArg: t
										}),
										r.__chain__ = n,
										r
									}
									var o = [this.value()];
									return cc.apply(o, arguments),
									e.apply(t, o)
								}
							} (p))
						}
						return t
					}
					function Oa() {
						return t._ = Ja,
						this
					}
					function La() {}
					function wa(t) {
						return $r(t) ? Hn(t) : Un(t)
					}
					function Na(t) {
						return function (e) {
							return Bn(t, si(e), e + "")
						}
					}
					function qa(t, e, n) {
						n && Kr(t, e, n) && (e = n = null),
						t = +t || 0,
						n = null == n ? 1 : +n || 0,
						null == e ? (e = t, t = 0) : e = +e || 0;
						for (var r = -1, i = mc(nc((e - t) / (n || 1)), 0), o = Ba(i); ++r < i;) o[r] = t,
						t += n;
						return o
					}
					function xa(t, e, n) {
						if (t = ic(t), 1 > t || !gc(t)) return [];
						var r = -1,
						i = Ba(vc(t, Lc));
						for (e = or(e, n, 1); ++r < t;) Lc > r ? i[r] = e(r) : e(r);
						return i
					}
					function Sa(t) {
						var e = ++$a;
						return c(t) + e
					}
					function Wa(t, e) {
						return ( + t || 0) + ( + e || 0)
					}
					function Ea(t, e, n) {
						n && Kr(t, e, n) && (e = null);
						var r = Rr(),
						i = null == e;
						return i && r === An || (i = !1, e = r(e, n, 3)),
						i ? hn(ws(t) ? t: ai(t)) : Jn(t, e)
					}
					t = t ? rn.defaults(nn.Object(), t, rn.pick(nn, Pe)) : nn;
					var Ba = t.Array,
					Ca = t.Date,
					Xa = t.Error,
					Ra = t.Function,
					ka = t.Math,
					Da = t.Number,
					Pa = t.Object,
					Ia = t.RegExp,
					ja = t.String,
					Ha = t.TypeError,
					Ua = Ba.prototype,
					Fa = Pa.prototype,
					Va = ja.prototype,
					Ga = (Ga = t.window) ? Ga.document: null,
					Ya = Ra.prototype.toString,
					Ka = Fa.hasOwnProperty,
					$a = 0,
					Qa = Fa.toString,
					Ja = t._,
					Za = Ia("^" + ca(Ya.call(Ka)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
					tc = Ir(t, "ArrayBuffer"),
					ec = Ir(tc && new tc(0), "slice"),
					nc = ka.ceil,
					rc = t.clearTimeout,
					ic = ka.floor,
					oc = Ir(Pa, "getPrototypeOf"),
					ac = t.parseFloat,
					cc = Ua.push,
					sc = Ir(t, "Set"),
					uc = t.setTimeout,
					lc = Ua.splice,
					pc = Ir(t, "Uint8Array"),
					fc = Ir(t, "WeakMap"),
					hc = function () {
						try {
							var e = Ir(t, "Float64Array"),
							n = new e(new tc(10), 0, 1) && e
						} catch(r) {}
						return n || null
					} (),
					dc = Ir(Pa, "create"),
					Mc = Ir(Ba, "isArray"),
					gc = t.isFinite,
					bc = Ir(Pa, "keys"),
					mc = ka.max,
					vc = ka.min,
					Ac = Ir(Ca, "now"),
					yc = Ir(Da, "isFinite"),
					zc = t.parseInt,
					_c = ka.random,
					Tc = Da.NEGATIVE_INFINITY,
					Oc = Da.POSITIVE_INFINITY,
					Lc = 4294967295,
					wc = Lc - 1,
					Nc = Lc >>> 1,
					qc = hc ? hc.BYTES_PER_ELEMENT: 0,
					xc = 9007199254740991,
					Sc = fc && new fc,
					Wc = {},
					Ec = e.support = {}; !
					function (t) {
						var e = function () {
							this.x = t
						},
						n = [];
						e.prototype = {
							valueOf: t,
							y: t
						};
						for (var r in new e) n.push(r);
						try {
							Ec.dom = 11 === Ga.createDocumentFragment().nodeType
						} catch(i) {
							Ec.dom = !1
						}
					} (1, 0),
					e.templateSettings = {
						escape: Ae,
						evaluate: ye,
						interpolate: ze,
						variable: "",
						imports: {
							_: e
						}
					};
					var Bc = function () {
						function t() {}
						return function (e) {
							if (qo(e)) {
								t.prototype = e;
								var n = new t;
								t.prototype = null
							}
							return n || {}
						}
					} (),
					Cc = pr(Sn),
					Xc = pr(Wn, !0),
					Rc = fr(),
					kc = fr(!0),
					Dc = Sc ?
					function (t, e) {
						return Sc.set(t, e),
						t
					}: ya;
					ec || (ar = tc && pc ?
					function (t) {
						var e = t.byteLength,
						n = hc ? ic(e / qc) : 0,
						r = n * qc,
						i = new tc(e);
						if (n) {
							var o = new hc(i, 0, n);
							o.set(new hc(t, 0, n))
						}
						return e != r && (o = new pc(i, r), o.set(new pc(t, r))),
						i
					}: Aa(null));
					var Pc = dc && sc ?
					function (t) {
						return new Qe(t)
					}: Aa(null),
					Ic = Sc ?
					function (t) {
						return Sc.get(t)
					}: La,
					jc = Hn("length"),
					Hc = function () {
						var t = 0,
						e = 0;
						return function (n, r) {
							var i = ds(),
							o = k - (i - e);
							if (e = i, o > 0) {
								if (++t >= R) return n
							} else t = 0;
							return Dc(n, r)
						}
					} (),
					Uc = ho(function (t, e) {
						return Gr(t) ? _n(t, qn(e, !1, !0)) : []
					}),
					Fc = vr(),
					Vc = vr(!0),
					Gc = ho(function (t) {
						for (var e = t.length, n = e, r = Ba(p), i = Dr(), a = i == o, c = []; n--;) {
							var s = t[n] = Gr(s = t[n]) ? s: [];
							r[n] = a && s.length >= 120 ? Pc(n && s) : null
						}
						var u = t[0],
						l = -1,
						p = u ? u.length: 0,
						f = r[0];
						t: for (; ++l < p;) if (s = u[l], (f ? Je(f, s) : i(c, s, 0)) < 0) {
							for (var n = e; --n;) {
								var h = r[n];
								if ((h ? Je(h, s) : i(t[n], s, 0)) < 0) continue t
							}
							f && f.push(s),
							c.push(s)
						}
						return c
					}),
					Yc = ho(function (t, e) {
						e = qn(e);
						var n = mn(t, e);
						return Fn(t, e.sort(r)),
						n
					}),
					Kc = Wr(),
					$c = Wr(!0),
					Qc = ho(function (t) {
						return Zn(qn(t, !1, !0))
					}),
					Jc = ho(function (t, e) {
						return Gr(t) ? _n(t, e) : []
					}),
					Zc = ho(Ei),
					ts = ho(function (t) {
						var e = t.length,
						n = e > 2 ? t[e - 2] : T,
						r = e > 1 ? t[e - 1] : T;
						return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof r ? (--e, r) : T, r = T),
						t.length = e,
						Bi(t, n, r)
					}),
					es = ho(function (t, e) {
						return mn(t, qn(e))
					}),
					ns = ur(function (t, e, n) {
						Ka.call(t, n) ? ++t[n] : t[n] = 1
					}),
					rs = mr(Cc),
					is = mr(Xc, !0),
					os = zr(en, Cc),
					as = zr(on, Xc),
					cs = ur(function (t, e, n) {
						Ka.call(t, n) ? t[n].push(e) : t[n] = [e]
					}),
					ss = ur(function (t, e, n) {
						t[n] = e
					}),
					us = ho(function (t, e, n) {
						var r = -1,
						i = "function" == typeof e,
						o = $r(e),
						a = Gr(t) ? Ba(t.length) : [];
						return Cc(t, function (t) {
							var c = i ? e: o && null != t ? t[e] : null;
							a[++r] = c ? c.apply(t, n) : Vr(t, e, n)
						}),
						a
					}),
					ls = ur(function (t, e, n) {
						t[n ? 0 : 1].push(e)
					},
					function () {
						return [[], []]
					}),
					ps = Nr(ln, Cc),
					fs = Nr(pn, Xc),
					hs = ho(function (t, e) {
						if (null == t) return [];
						var n = e[2];
						return n && Kr(e[0], e[1], n) && (e.length = 1),
						Qn(t, qn(e), [])
					}),
					ds = Ac ||
					function () {
						return (new Ca).getTime()
					},
					Ms = ho(function (t, e, n) {
						var r = L;
						if (n.length) {
							var i = m(n, Ms.placeholder);
							r |= S
						}
						return Er(t, r, e, n, i)
					}),
					gs = ho(function (t, e) {
						e = e.length ? qn(e) : Uo(t);
						for (var n = -1, r = e.length; ++n < r;) {
							var i = e[n];
							t[i] = Er(t[i], L, t)
						}
						return t
					}),
					bs = ho(function (t, e, n) {
						var r = L | w;
						if (n.length) {
							var i = m(n, bs.placeholder);
							r |= S
						}
						return Er(e, r, t, n, i)
					}),
					ms = gr(q),
					vs = gr(x),
					As = ho(function (t, e) {
						return zn(t, 1, e)
					}),
					ys = ho(function (t, e, n) {
						return zn(t, e, n)
					}),
					zs = yr(),
					_s = yr(!0),
					Ts = wr(S),
					Os = wr(W),
					Ls = ho(function (t, e) {
						return Er(t, B, null, null, null, qn(e))
					}),
					ws = Mc ||
					function (t) {
						return g(t) && Jr(t.length) && Qa.call(t) == F
					};
					Ec.dom || (Oo = function (t) {
						return !! t && 1 === t.nodeType && g(t) && !xs(t)
					});
					var Ns = yc ||
					function (t) {
						return "number" == typeof t && gc(t)
					},
					qs = a(/x/) || pc && !a(pc) ?
					function (t) {
						return Qa.call(t) == K
					}: a,
					xs = oc ?
					function (t) {
						if (!t || Qa.call(t) != J) return ! 1;
						var e = Ir(t, "valueOf"),
						n = e && (n = oc(e)) && oc(n);
						return n ? t == n || oc(t) == n: ii(t)
					}: ii,
					Ss = lr(function (t, e, n) {
						return n ? gn(t, e, n) : bn(t, e)
					}),
					Ws = ho(function (t) {
						var e = t[0];
						return null == e ? e: (t.push(dn), Ss.apply(T, t))
					}),
					Es = Ar(Sn),
					Bs = Ar(Wn),
					Cs = _r(Rc),
					Xs = _r(kc),
					Rs = Tr(Sn),
					ks = Tr(Wn),
					Ds = bc ?
					function (t) {
						var e = null == t ? null: t.constructor;
						return "function" == typeof e && e.prototype === t || "function" != typeof t && Gr(t) ? oi(t) : qo(t) ? bc(t) : []
					}: oi,
					Ps = Or(!0),
					Is = Or(),
					js = lr(In),
					Hs = ho(function (t, e) {
						if (null == t) return {};
						if ("function" != typeof e[0]) {
							var e = un(qn(e), ja);
							return ei(t, _n(Yo(t), e))
						}
						var n = or(e[0], e[1], 3);
						return ni(t, function (t, e, r) {
							return ! n(t, e, r)
						})
					}),
					Us = ho(function (t, e) {
						return null == t ? {}: "function" == typeof e[0] ? ni(t, or(e[0], e[1], 3)) : ei(t, qn(e))
					}),
					Fs = dr(function (t, e, n) {
						return e = e.toLowerCase(),
						t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
					}),
					Vs = dr(function (t, e, n) {
						return t + (n ? "-": "") + e.toLowerCase()
					}),
					Gs = Lr(),
					Ys = Lr(!0);
					8 != zc(De + "08") && (ua = function (t, e, n) {
						return (n ? Kr(t, e, n) : null == e) ? e = 0 : e && (e = +e),
						t = ha(t),
						zc(t, e || (We.test(t) ? 16 : 10))
					});
					var Ks = dr(function (t, e, n) {
						return t + (n ? "_": "") + e.toLowerCase()
					}),
					$s = dr(function (t, e, n) {
						return t + (n ? " ": "") + (e.charAt(0).toUpperCase() + e.slice(1))
					}),
					Qs = ho(function (t, e) {
						try {
							return t.apply(T, e)
						} catch(n) {
							return No(n) ? n: new Xa(n)
						}
					}),
					Js = ho(function (t, e) {
						return function (n) {
							return Vr(n, t, e)
						}
					}),
					Zs = ho(function (t, e) {
						return function (n) {
							return Vr(t, n, e)
						}
					}),
					tu = br(Ao, Tc),
					eu = br(Do, Oc);
					return e.prototype = n.prototype,
					b.prototype = Bc(n.prototype),
					b.prototype.constructor = b,
					$.prototype = Bc(n.prototype),
					$.prototype.constructor = $,
					Ve.prototype["delete"] = Ge,
					Ve.prototype.get = Ye,
					Ve.prototype.has = Ke,
					Ve.prototype.set = $e,
					Qe.prototype.push = Ze,
					lo.Cache = Ve,
					e.after = ao,
					e.ary = co,
					e.assign = Ss,
					e.at = es,
					e.before = so,
					e.bind = Ms,
					e.bindAll = gs,
					e.bindKey = bs,
					e.callback = va,
					e.chain = Ri,
					e.chunk = li,
					e.compact = pi,
					e.constant = Aa,
					e.countBy = ns,
					e.create = Ho,
					e.curry = ms,
					e.curryRight = vs,
					e.debounce = uo,
					e.defaults = Ws,
					e.defer = As,
					e.delay = ys,
					e.difference = Uc,
					e.drop = fi,
					e.dropRight = hi,
					e.dropRightWhile = di,
					e.dropWhile = Mi,
					e.fill = gi,
					e.filter = Gi,
					e.flatten = mi,
					e.flattenDeep = vi,
					e.flow = zs,
					e.flowRight = _s,
					e.forEach = os,
					e.forEachRight = as,
					e.forIn = Cs,
					e.forInRight = Xs,
					e.forOwn = Rs,
					e.forOwnRight = ks,
					e.functions = Uo,
					e.groupBy = cs,
					e.indexBy = ss,
					e.initial = yi,
					e.intersection = Gc,
					e.invert = Go,
					e.invoke = us,
					e.keys = Ds,
					e.keysIn = Yo,
					e.map = $i,
					e.mapKeys = Ps,
					e.mapValues = Is,
					e.matches = za,
					e.matchesProperty = _a,
					e.memoize = lo,
					e.merge = js,
					e.method = Js,
					e.methodOf = Zs,
					e.mixin = Ta,
					e.negate = po,
					e.omit = Hs,
					e.once = fo,
					e.pairs = Ko,
					e.partial = Ts,
					e.partialRight = Os,
					e.partition = ls,
					e.pick = Us,
					e.pluck = Qi,
					e.property = wa,
					e.propertyOf = Na,
					e.pull = Ti,
					e.pullAt = Yc,
					e.range = qa,
					e.rearg = Ls,
					e.reject = Ji,
					e.remove = Oi,
					e.rest = Li,
					e.restParam = ho,
					e.set = Qo,
					e.shuffle = to,
					e.slice = wi,
					e.sortBy = ro,
					e.sortByAll = hs,
					e.sortByOrder = io,
					e.spread = Mo,
					e.take = Ni,
					e.takeRight = qi,
					e.takeRightWhile = xi,
					e.takeWhile = Si,
					e.tap = ki,
					e.throttle = go,
					e.thru = Di,
					e.times = xa,
					e.toArray = Io,
					e.toPlainObject = jo,
					e.transform = Jo,
					e.union = Qc,
					e.uniq = Wi,
					e.unzip = Ei,
					e.unzipWith = Bi,
					e.values = Zo,
					e.valuesIn = ta,
					e.where = oo,
					e.without = Jc,
					e.wrap = bo,
					e.xor = Ci,
					e.zip = Zc,
					e.zipObject = Xi,
					e.zipWith = ts,
					e.backflow = _s,
					e.collect = $i,
					e.compose = _s,
					e.each = os,
					e.eachRight = as,
					e.extend = Ss,
					e.iteratee = va,
					e.methods = Uo,
					e.object = Xi,
					e.select = Gi,
					e.tail = Li,
					e.unique = Wi,
					Ta(e, e),
					e.add = Wa,
					e.attempt = Qs,
					e.camelCase = Fs,
					e.capitalize = ra,
					e.clone = mo,
					e.cloneDeep = vo,
					e.deburr = ia,
					e.endsWith = oa,
					e.escape = aa,
					e.escapeRegExp = ca,
					e.every = Vi,
					e.find = rs,
					e.findIndex = Fc,
					e.findKey = Es,
					e.findLast = is,
					e.findLastIndex = Vc,
					e.findLastKey = Bs,
					e.findWhere = Yi,
					e.first = bi,
					e.get = Fo,
					e.gt = Ao,
					e.gte = yo,
					e.has = Vo,
					e.identity = ya,
					e.includes = Ki,
					e.indexOf = Ai,
					e.inRange = ea,
					e.isArguments = zo,
					e.isArray = ws,
					e.isBoolean = _o,
					e.isDate = To,
					e.isElement = Oo,
					e.isEmpty = Lo,
					e.isEqual = wo,
					e.isError = No,
					e.isFinite = Ns,
					e.isFunction = qs,
					e.isMatch = xo,
					e.isNaN = So,
					e.isNative = Wo,
					e.isNull = Eo,
					e.isNumber = Bo,
					e.isObject = qo,
					e.isPlainObject = xs,
					e.isRegExp = Co,
					e.isString = Xo,
					e.isTypedArray = Ro,
					e.isUndefined = ko,
					e.kebabCase = Vs,
					e.last = zi,
					e.lastIndexOf = _i,
					e.lt = Do,
					e.lte = Po,
					e.max = tu,
					e.min = eu,
					e.noConflict = Oa,
					e.noop = La,
					e.now = ds,
					e.pad = sa,
					e.padLeft = Gs,
					e.padRight = Ys,
					e.parseInt = ua,
					e.random = na,
					e.reduce = ps,
					e.reduceRight = fs,
					e.repeat = la,
					e.result = $o,
					e.runInContext = _,
					e.size = eo,
					e.snakeCase = Ks,
					e.some = no,
					e.sortedIndex = Kc,
					e.sortedLastIndex = $c,
					e.startCase = $s,
					e.startsWith = pa,
					e.sum = Ea,
					e.template = fa,
					e.trim = ha,
					e.trimLeft = da,
					e.trimRight = Ma,
					e.trunc = ga,
					e.unescape = ba,
					e.uniqueId = Sa,
					e.words = ma,
					e.all = Vi,
					e.any = no,
					e.contains = Ki,
					e.eq = wo,
					e.detect = rs,
					e.foldl = ps,
					e.foldr = fs,
					e.head = bi,
					e.include = Ki,
					e.inject = ps,
					Ta(e, function () {
						var t = {};
						return Sn(e, function (n, r) {
							e.prototype[r] || (t[r] = n)
						}),
						t
					} (), !1),
					e.sample = Zi,
					e.prototype.sample = function (t) {
						return this.__chain__ || null != t ? this.thru(function (e) {
							return Zi(e, t)
						}) : Zi(this.value())
					},
					e.VERSION = O,
					en(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
						e[t].placeholder = e
					}),
					en(["dropWhile", "filter", "map", "takeWhile"], function (t, e) {
						var n = e != I,
						r = e == D;
						$.prototype[t] = function (t, i) {
							var o = this.__filtered__,
							a = o && r ? new $(this) : this.clone(),
							c = a.__iteratees__ || (a.__iteratees__ = []);
							return c.push({
								done: !1,
								count: 0,
								index: 0,
								iteratee: Rr(t, i, 1),
								limit: -1,
								type: e
							}),
							a.__filtered__ = o || n,
							a
						}
					}),
					en(["drop", "take"], function (t, e) {
						var n = t + "While";
						$.prototype[t] = function (n) {
							var r = this.__filtered__,
							i = r && !e ? this.dropWhile() : this.clone();
							if (n = null == n ? 1 : mc(ic(n) || 0, 0), r) e ? i.__takeCount__ = vc(i.__takeCount__, n) : zi(i.__iteratees__).limit = n;
							else {
								var o = i.__views__ || (i.__views__ = []);
								o.push({
									size: n,
									type: t + (i.__dir__ < 0 ? "Right": "")
								})
							}
							return i
						},
						$.prototype[t + "Right"] = function (e) {
							return this.reverse()[t](e).reverse()
						},
						$.prototype[t + "RightWhile"] = function (t, e) {
							return this.reverse()[n](t, e).reverse()
						}
					}),
					en(["first", "last"], function (t, e) {
						var n = "take" + (e ? "Right": "");
						$.prototype[t] = function () {
							return this[n](1).value()[0]
						}
					}),
					en(["initial", "rest"], function (t, e) {
						var n = "drop" + (e ? "": "Right");
						$.prototype[t] = function () {
							return this[n](1)
						}
					}),
					en(["pluck", "where"], function (t, e) {
						var n = e ? "filter": "map",
						r = e ? Dn: wa;
						$.prototype[t] = function (t) {
							return this[n](r(t))
						}
					}),
					$.prototype.compact = function () {
						return this.filter(ya)
					},
					$.prototype.reject = function (t, e) {
						return t = Rr(t, e, 1),
						this.filter(function (e) {
							return ! t(e)
						})
					},
					$.prototype.slice = function (t, e) {
						t = null == t ? 0 : +t || 0;
						var n = this;
						return 0 > t ? n = this.takeRight( - t) : t && (n = this.drop(t)),
						e !== T && (e = +e || 0, n = 0 > e ? n.dropRight( - e) : n.take(e - t)),
						n
					},
					$.prototype.toArray = function () {
						return this.drop(0)
					},
					Sn($.prototype, function (t, n) {
						var r = e[n];
						if (r) {
							var i = /^(?:filter|map|reject)|While$/.test(n),
							o = /^(?:first|last)$/.test(n);
							e.prototype[n] = function () {
								var n = arguments,
								a = this.__chain__,
								c = this.__wrapped__,
								s = !!this.__actions__.length,
								u = c instanceof $,
								l = n[0],
								p = u || ws(c);
								p && i && "function" == typeof l && 1 != l.length && (u = p = !1);
								var f = u && !s;
								if (o && !a) return f ? t.call(c) : r.call(e, this.value());
								var h = function (t) {
									var i = [t];
									return cc.apply(i, n),
									r.apply(e, i)
								};
								if (p) {
									var d = f ? c: new $(this),
									M = t.apply(d, n);
									if (!o && (s || M.__actions__)) {
										var g = M.__actions__ || (M.__actions__ = []);
										g.push({
											func: Di,
											args: [h],
											thisArg: e
										})
									}
									return new b(M, a)
								}
								return this.thru(h)
							}
						}
					}),
					en(["concat", "join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
						var n = (/^(?:replace|split)$/.test(t) ? Va: Ua)[t],
						r = /^(?:push|sort|unshift)$/.test(t) ? "tap": "thru",
						i = /^(?:join|pop|replace|shift)$/.test(t);
						e.prototype[t] = function () {
							var t = arguments;
							return i && !this.__chain__ ? n.apply(this.value(), t) : this[r](function (e) {
								return n.apply(e, t)
							})
						}
					}),
					Sn($.prototype, function (t, n) {
						var r = e[n];
						if (r) {
							var i = r.name,
							o = Wc[i] || (Wc[i] = []);
							o.push({
								name: n,
								func: r
							})
						}
					}),
					Wc[qr(null, w).name] = [{
						name: "wrapper",
						func: null
					}],
					$.prototype.clone = te,
					$.prototype.reverse = ne,
					$.prototype.value = Fe,
					e.prototype.chain = Pi,
					e.prototype.commit = Ii,
					e.prototype.plant = ji,
					e.prototype.reverse = Hi,
					e.prototype.toString = Ui,
					e.prototype.run = e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = Fi,
					e.prototype.collect = e.prototype.map,
					e.prototype.head = e.prototype.first,
					e.prototype.select = e.prototype.filter,
					e.prototype.tail = e.prototype.rest,
					e
				}
				var T, O = "3.9.3",
				L = 1,
				w = 2,
				N = 4,
				q = 8,
				x = 16,
				S = 32,
				W = 64,
				E = 128,
				B = 256,
				C = 30,
				X = "...",
				R = 150,
				k = 16,
				D = 0,
				P = 1,
				I = 2,
				j = "Expected a function",
				H = "__lodash_placeholder__",
				U = "[object Arguments]",
				F = "[object Array]",
				V = "[object Boolean]",
				G = "[object Date]",
				Y = "[object Error]",
				K = "[object Function]",
				$ = "[object Map]",
				Q = "[object Number]",
				J = "[object Object]",
				Z = "[object RegExp]",
				te = "[object Set]",
				ee = "[object String]",
				ne = "[object WeakMap]",
				re = "[object ArrayBuffer]",
				ie = "[object Float32Array]",
				oe = "[object Float64Array]",
				ae = "[object Int8Array]",
				ce = "[object Int16Array]",
				se = "[object Int32Array]",
				ue = "[object Uint8Array]",
				le = "[object Uint8ClampedArray]",
				pe = "[object Uint16Array]",
				fe = "[object Uint32Array]",
				he = /\b__p \+= '';/g,
				de = /\b(__p \+=) '' \+/g,
				Me = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
				ge = /&(?:amp|lt|gt|quot|#39|#96);/g,
				be = /[&<>"'`]/g,
				me = RegExp(ge.source),
				ve = RegExp(be.source),
				Ae = /<%-([\s\S]+?)%>/g,
				ye = /<%([\s\S]+?)%>/g,
				ze = /<%=([\s\S]+?)%>/g,
				_e = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
				Te = /^\w*$/,
				Oe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
				Le = /[.*+?^${}()|[\]\/\\]/g,
				we = RegExp(Le.source),
				Ne = /[\u0300-\u036f\ufe20-\ufe23]/g,
				qe = /\\(\\)?/g,
				xe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
				Se = /\w*$/,
				We = /^0[xX]/,
				Ee = /^\[object .+?Constructor\]$/,
				Be = /^\d+$/,
				Ce = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
				Xe = /($^)/,
				Re = /['\n\r\u2028\u2029\\]/g,
				ke = function () {
					var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
					e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
					return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
				} (),
				De = " 	\fÂ ï»¿\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€",
				Pe = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "document", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "window"],
				Ie = -1,
				je = {};
				je[ie] = je[oe] = je[ae] = je[ce] = je[se] = je[ue] = je[le] = je[pe] = je[fe] = !0,
				je[U] = je[F] = je[re] = je[V] = je[G] = je[Y] = je[K] = je[$] = je[Q] = je[J] = je[Z] = je[te] = je[ee] = je[ne] = !1;
				var He = {};
				He[U] = He[F] = He[re] = He[V] = He[G] = He[ie] = He[oe] = He[ae] = He[ce] = He[se] = He[Q] = He[J] = He[Z] = He[ee] = He[ue] = He[le] = He[pe] = He[fe] = !0,
				He[Y] = He[K] = He[$] = He[te] = He[ne] = !1;
				var Ue = {
					leading: !1,
					maxWait: 0,
					trailing: !1
				},
				Fe = {
					"Ã€": "A",
					"Ã": "A",
					"Ã‚": "A",
					"Ãƒ": "A",
					"Ã„": "A",
					"Ã…": "A",
					"Ã ": "a",
					"Ã¡": "a",
					"Ã¢": "a",
					"Ã£": "a",
					"Ã¤": "a",
					"Ã¥": "a",
					"Ã‡": "C",
					"Ã§": "c",
					"Ã": "D",
					"Ã°": "d",
					"Ãˆ": "E",
					"Ã‰": "E",
					"ÃŠ": "E",
					"Ã‹": "E",
					"Ã¨": "e",
					"Ã©": "e",
					"Ãª": "e",
					"Ã«": "e",
					"ÃŒ": "I",
					"Ã": "I",
					"ÃŽ": "I",
					"Ã": "I",
					"Ã¬": "i",
					"Ã­": "i",
					"Ã®": "i",
					"Ã¯": "i",
					"Ã‘": "N",
					"Ã±": "n",
					"Ã’": "O",
					"Ã“": "O",
					"Ã”": "O",
					"Ã•": "O",
					"Ã–": "O",
					"Ã˜": "O",
					"Ã²": "o",
					"Ã³": "o",
					"Ã´": "o",
					"Ãµ": "o",
					"Ã¶": "o",
					"Ã¸": "o",
					"Ã™": "U",
					"Ãš": "U",
					"Ã›": "U",
					"Ãœ": "U",
					"Ã¹": "u",
					"Ãº": "u",
					"Ã»": "u",
					"Ã¼": "u",
					"Ã": "Y",
					"Ã½": "y",
					"Ã¿": "y",
					"Ã†": "Ae",
					"Ã¦": "ae",
					"Ãž": "Th",
					"Ã¾": "th",
					"ÃŸ": "ss"
				},
				Ve = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;",
					"`": "&#96;"
				},
				Ge = {
					"&amp;": "&",
					"&lt;": "<",
					"&gt;": ">",
					"&quot;": '"',
					"&#39;": "'",
					"&#96;": "`"
				},
				Ye = {
					"function": !0,
					object: !0
				},
				Ke = {
					"\\": "\\",
					"'": "'",
					"\n": "n",
					"\r": "r",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				$e = Ye[typeof n] && n && !n.nodeType && n,
				Qe = Ye[typeof e] && e && !e.nodeType && e,
				Je = $e && Qe && "object" == typeof t && t && t.Object && t,
				Ze = Ye[typeof self] && self && self.Object && self,
				tn = Ye[typeof window] && window && window.Object && window,
				en = Qe && Qe.exports === $e && $e,
				nn = Je || tn !== (this && this.window) && tn || Ze || this,
				rn = _();
				"function" == typeof define && "object" == typeof define.amd && define.amd ? (nn._ = rn, define(function () {
					return rn
				})) : $e && Qe ? en ? (Qe.exports = rn)._ = rn: $e._ = rn: nn._ = rn
			}).call(this)
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	100 : [function (t, e) {
		e.exports = {
			version: "2014j",
			zones: ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q", "Africa/Accra|LMT GMT GHST|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE", "Africa/Addis_Ababa|LMT EAT BEAT BEAUT|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0", "Africa/Bangui|LMT WAT|-d.A -10|01|-22y0d.A", "Africa/Bissau|LMT WAT GMT|12.k 10 0|012|-2ldWV.E 2xonV.E", "Africa/Blantyre|LMT CAT|-2a.k -20|01|-2GJea.k", "Africa/Cairo|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0 1o10 jz0 gN0 pb0 1qN0 dX0 e10 xz0 1o10 bb0 e10 An0 1o10 5z0 e10 FX0 1o10 2L0 e10 IL0 1C10 Lz0 1wp0 TX0 1qN0 WL0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0", "Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|012121212121212121312121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0 11A0 5c0 e00 17A0 WM0 2o0 e00 1ao0 19A0 1g00 16M0 1iM0 1400 1lA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qo0 1200 1kM0 14M0 1i00", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1y7p0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Africa/El_Aaiun|LMT WAT WET WEST|Q.M 10 0 -10|0123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0 11A0 5c0 e00 17A0 WM0 2o0 e00 1ao0 19A0 1g00 16M0 1iM0 1400 1lA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qo0 1200 1kM0 14M0 1i00", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0", "Africa/Juba|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0", "Africa/Monrovia|MMT LRT GMT|H.8 I.u 0|012|-23Lzg.Q 29s01.m", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00", "Africa/Windhoek|SWAT SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0", "America/Adak|NST NWT NPT BST BDT AHST HAST HADT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Anchorage|CAT CAWT CAPT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Anguilla|LMT AST|46.4 40|01|-2kNvR.U", "America/Antigua|LMT EST AST|47.c 50 40|012|-2kNvQ.M 1yxAQ.M", "America/Araguaina|LMT BRT BRST|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0", "America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0", "America/Argentina/Catamarca|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Cordoba|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0", "America/Argentina/Jujuy|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 g0p0 10M0 j3c0 uL0", "America/Argentina/La_Rioja|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Mendoza|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|0121212121212121212121212121212121212121213434345656543235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 g0p0 10M0 agM0 Op0 7TX0 uL0", "America/Argentina/Rio_Gallegos|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Salta|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0", "America/Argentina/San_Juan|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ak00 m10 8lb0 uL0", "America/Argentina/San_Luis|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456536353465653|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 kin0 10M0 ak00 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0", "America/Argentina/Tucuman|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|012121212121212121212121212121212121212121343434345434323534343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 4N0 8BX0 uL0 1qN0 WL0", "America/Argentina/Ushuaia|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ajA0 8p0 8zb0 uL0", "America/Aruba|LMT ANT AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d", "America/Asuncion|AMT PYT PYT PYST|3O.E 40 30 30|012131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0", "America/Bahia|LMT BRT BRST|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0", "America/Belem|LMT BRT BRST|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0", "America/Belize|LMT CST CHDT CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0", "America/Boa_Vista|LMT AMT AMST|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0", "America/Bogota|BMT COT COST|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Cambridge_Bay|zzz MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Campo_Grande|LMT AMT AMST|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Caracas|CMT VET VET|4r.E 4u 40|0121|-2kV7w.k 28KM2.k 1IwOu", "America/Cayenne|LMT GFT GFT|3t.k 40 30|012|-2mrwu.E 2gWou.E", "America/Cayman|KMT EST|57.b 50|01|-2l1uQ.N", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0", "America/Creston|MST PST|70 80|010|-29DR0 43B0", "America/Cuiaba|LMT AMT AMST|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0", "America/Danmarkshavn|LMT WGT WGST GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0", "America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Eirunepe|LMT ACT ACST AMT|4D.s 50 40 40|0121212121212121212121212121212131|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0", "America/Ensenada|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Fortaleza|LMT BRT BRST|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Godthab|LMT WGT WGST|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0", "America/Guayaquil|QMT ECT|5e 50|01|-1yVSK", "America/Guyana|LMT GBGT GYT GYT GYT|3Q.E 3J 3J 30 40|01234|-2dvU7.k 24JzQ.k mlc0 Bxbf", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Inuvik|zzz PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Iqaluit|zzz EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/La_Paz|CMT BOST BOT|4w.A 3w.A 40|012|-1x37r.o 13b0", "America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp0 1Vb0 3dB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Maceio|LMT BRT BRST|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0", "America/Manaus|LMT AMT AMST|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Metlakatla|PST PWT PPT PDT|80 70 70 70|0120303030303030303030303030303030|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Miquelon|LMT AST PMST PMDT|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Montevideo|MMT UYT UYHST UYST UYT UYHST|3I.I 3u 30 20 30 2u|012121212121212121212121213434343434345454543453434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10", "America/Montreal|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-28tR0 bV0 2m30 1in0 121u 1nb0 1g10 11z0 1o0u 11zu 1o0u 11zu 3VAu Rzu 1qMu WLu 1qMu WLu 1qKu WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kO0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Noronha|LMT FNT FNST|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o", "America/Pangnirtung|zzz AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Paramaribo|LMT PMT PMT NEGT SRT SRT|3E.E 3E.Q 3E.A 3u 3u 30|012345|-2nDUj.k Wqo0.c qanX.I 1dmLN.o lzc0", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Porto_Acre|LMT ACT ACST AMT|4v.c 50 40 40|01212121212121212121212121212131|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0", "America/Porto_Velho|LMT AMT AMST|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Rankin_Inlet|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Recife|LMT BRT BRST|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0", "America/Resolute|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Santa_Isabel|LMT MST PST PDT PWT PPT|7D.s 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0", "America/Santarem|LMT AMT AMST BRT|3C.M 40 30 30|0121212121212121212121212121213|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0", "America/Santiago|SMT CLT CLT CLST CLST|4G.K 50 40 40 30|010203131313131313124242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424|-2q5Th.e fNch.e 5gLG.K 21bh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9UK0 1Je0 Qen0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0", "America/Santo_Domingo|SDMT EST EDT EHDT AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00", "America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0", "America/Scoresbysund|LMT CGT CGST EGST EGT|1r.Q 20 10 0 10|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 1Be0 xDz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Yellowknife|zzz MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Antarctica/Casey|zzz AWST CAST|0 -80 -b0|012121|-2q00 1DjS0 T90 40P0 KL0", "Antarctica/Davis|zzz DAVT DAVT|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0", "Antarctica/DumontDUrville|zzz PMT DDUT|0 -a0 -a0|0102|-U0o0 cfq0 bFm0", "Antarctica/Macquarie|AEST AEDT zzz MIST|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0", "Antarctica/Mawson|zzz MAWT MAWT|0 -60 -50|012|-CEo0 2fyk0", "Antarctica/McMurdo|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00", "Antarctica/Palmer|zzz ARST ART ART ARST CLT CLST|0 30 40 30 20 40 30|012121212123435656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0", "Antarctica/Rothera|zzz ROTT|0 30|01|gOo0", "Antarctica/Syowa|zzz SYOT|0 -30|01|-vs00", "Antarctica/Troll|zzz UTC CEST|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Antarctica/Vostok|zzz VOST|0 -60|01|-tjA0", "Arctic/Longyearbyen|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Aden|LMT AST|-2X.S -30|01|-MG2X.S", "Asia/Almaty|LMT ALMT ALMT ALMST|-57.M -50 -60 -70|0123232323232323232323232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3Cl0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Asia/Anadyr|LMT ANAT ANAT ANAST ANAST ANAST ANAT|-bN.U -c0 -d0 -e0 -d0 -c0 -b0|01232414141414141414141561414141414141414141414141414141414141561|-1PcbN.U eUnN.U 23CL0 1db0 1cN0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0", "Asia/Aqtau|LMT FORT FORT SHET SHET SHEST AQTT AQTST AQTST AQTT|-3l.4 -40 -50 -50 -60 -60 -50 -60 -50 -40|012345353535353535353536767676898989898989898989896|-1Pc3l.4 eUnl.4 1jcL0 JDc0 1cL0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cN0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 RW0", "Asia/Aqtobe|LMT AKTT AKTT AKTST AKTT AQTT AQTST|-3M.E -40 -50 -60 -60 -50 -60|01234323232323232323232565656565656565656565656565|-1Pc3M.E eUnM.E 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0", "Asia/Ashgabat|LMT ASHT ASHT ASHST ASHST TMT TMT|-3R.w -40 -50 -60 -50 -40 -50|012323232323232323232324156|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 ba0 xC0", "Asia/Baghdad|BMT AST ADT|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0", "Asia/Bahrain|LMT GST AST|-3m.k -40 -30|012|-21Jfm.k 27BXm.k", "Asia/Baku|LMT BAKT BAKT BAKST BAKST AZST AZT AZT AZST|-3j.o -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245657878787878787878787878787878787878787878787878787878787878787878787878787878787878787|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 10K0 c30 1cJ0 1cL0 8wu0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0", "Asia/Bishkek|LMT FRUT FRUT FRUST FRUST KGT KGST KGT|-4W.o -50 -60 -70 -60 -50 -60 -60|01232323232323232323232456565656565656565656565656567|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11c0 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 T8u", "Asia/Brunei|LMT BNT BNT|-7D.E -7u -80|012|-1KITD.E gDc9.E", "Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0", "Asia/Chita|LMT YAKT YAKT YAKST YAKST YAKT IRKT|-7x.Q -80 -90 -a0 -90 -a0 -80|012323232323232323232324123232323232323232323232323232323232323256|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Choibalsan|LMT ULAT ULAT CHOST CHOT CHOT|-7C -70 -80 -a0 -90 -80|012343434343434343434343434343434343434343434345|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0", "Asia/Chongqing|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0", "Asia/Colombo|MMT IST IHST IST LKT LKT|-5j.w -5u -60 -6u -6u -60|01231451|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu", "Asia/Dacca|HMT BURT IST DACT BDT BDST|-5R.k -6u -5u -60 -60 -70|01213454|-18LFR.k 1unn.k HB0 m6n0 LqMu 1x6n0 1i00", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0", "Asia/Dili|LMT TLT JST TLT WITA|-8m.k -80 -90 -90 -80|012343|-2le8m.k 1dnXm.k 8HA0 1ew00 Xld0", "Asia/Dubai|LMT GST|-3F.c -40|01|-21JfF.c", "Asia/Dushanbe|LMT DUST DUST DUSST DUSST TJT|-4z.c -50 -60 -70 -60 -50|0123232323232323232323245|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 14N0", "Asia/Gaza|EET EET EEST IST IDT|-20 -30 -30 -20 -30|010101010102020202020202020202023434343434343434343434343430202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0", "Asia/Hebron|EET EET EEST IST IDT|-20 -30 -30 -20 -30|01010101010202020202020202020202343434343434343434343434343020202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0", "Asia/Ho_Chi_Minh|LMT PLMT ICT IDT JST|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0", "Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0", "Asia/Hovd|LMT HOVT HOVT HOVST|-66.A -60 -70 -80|01232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0", "Asia/Irkutsk|IMT IRKT IRKT IRKST IRKST IRKT|-6V.5 -70 -80 -90 -80 -90|012323232323232323232324123232323232323232323232323232323232323252|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Istanbul|IMT EET EEST TRST TRT|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1df0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu", "Asia/Jayapura|LMT WIT ACST|-9m.M -90 -9u|0121|-1uu9m.M sMMm.M L4nu", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0", "Asia/Kabul|AFT AFT|-40 -4u|01|-10Qs0", "Asia/Kamchatka|LMT PETT PETT PETST PETST|-ay.A -b0 -c0 -d0 -c0|01232323232323232323232412323232323232323232323232323232323232412|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0", "Asia/Karachi|LMT IST IST KART PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy01 1cL0 dK0X 11b0 1610 1jX0", "Asia/Kashgar|LMT XJT|-5O.k -60|01|-1GgtO.k", "Asia/Kathmandu|LMT IST NPT|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g", "Asia/Khandyga|LMT YAKT YAKT YAKST YAKST VLAT VLAST VLAT YAKT|-92.d -80 -90 -a0 -90 -a0 -b0 -b0 -a0|01232323232323232323232412323232323232323232323232565656565656565782|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0", "Asia/Krasnoyarsk|LMT KRAT KRAT KRAST KRAST KRAT|-6b.q -60 -70 -80 -70 -80|012323232323232323232324123232323232323232323232323232323232323252|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Kuala_Lumpur|SMT MALT MALST MALT MALT JST MYT|-6T.p -70 -7k -7k -7u -90 -80|01234546|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu 1so1u", "Asia/Kuching|LMT BORT BORT BORTST JST MYT|-7l.k -7u -80 -8k -90 -80|01232323232323232425|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0 1so10", "Asia/Kuwait|LMT AST|-3b.U -30|01|-MG3b.U", "Asia/Macao|LMT MOT MOST CST|-7y.k -80 -90 -80|0121212121212121212121212121212121212121213|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0 KEp0", "Asia/Magadan|LMT MAGT MAGT MAGST MAGST MAGT|-a3.c -a0 -b0 -c0 -b0 -c0|012323232323232323232324123232323232323232323232323232323232323251|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Makassar|LMT MMT WITA JST|-7V.A -7V.A -80 -90|01232|-21JjV.A vfc0 myLV.A 8ML0", "Asia/Manila|PHT PHST JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0", "Asia/Muscat|LMT GST|-3S.o -40|01|-21JfS.o", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Asia/Novokuznetsk|LMT KRAT KRAT KRAST KRAST NOVST NOVT NOVT|-5M.M -60 -70 -80 -70 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232325672|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0 8Hz0", "Asia/Novosibirsk|LMT NOVT NOVT NOVST NOVST|-5v.E -60 -70 -80 -70|0123232323232323232323241232341414141414141414141414141414141414121|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Omsk|LMT OMST OMST OMSST OMSST OMST|-4R.u -50 -60 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232323252|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Oral|LMT URAT URAT URAST URAT URAST ORAT ORAST ORAT|-3p.o -40 -50 -60 -60 -50 -40 -50 -50|012343232323232323251516767676767676767676767676768|-1Pc3p.o eUnp.o 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 RW0", "Asia/Pontianak|LMT PMT WIB JST WIB WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu", "Asia/Pyongyang|LMT KST JCST JST KST|-8n -8u -90 -90 -90|01234|-2um8n 97XR 12FXu jdA0", "Asia/Qatar|LMT GST AST|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8", "Asia/Qyzylorda|LMT KIZT KIZT KIZST KIZT QYZT QYZT QYZST|-4l.Q -40 -50 -60 -60 -50 -60 -70|012343232323232323232325676767676767676767676767676|-1Pc4l.Q eUol.Q 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 dC0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0", "Asia/Rangoon|RMT BURT JST MMT|-6o.E -6u -90 -6u|0123|-21Jio.E SmnS.E 7j9u", "Asia/Riyadh|LMT AST|-36.Q -30|01|-TvD6.Q", "Asia/Sakhalin|LMT JCST JST SAKT SAKST SAKST SAKT|-9u.M -90 -90 -b0 -c0 -b0 -a0|0123434343434343434343435634343434343565656565656565656565656565636|-2AGVu.M 1iaMu.M je00 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o10 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Samarkand|LMT SAMT SAMT SAMST TAST UZST UZT|-4r.R -40 -50 -60 -60 -60 -50|01234323232323232323232356|-1Pc4r.R eUor.R 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11x0 bf0", "Asia/Seoul|LMT KST JCST JST KST KDT KDT|-8r.Q -8u -90 -90 -90 -9u -a0|01234151515151515146464|-2um8r.Q 97XV.Q 12FXu jjA0 kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0", "Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0", "Asia/Srednekolymsk|LMT MAGT MAGT MAGST MAGST MAGT SRET|-ae.Q -a0 -b0 -c0 -b0 -c0 -b0|012323232323232323232324123232323232323232323232323232323232323256|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Taipei|JWST JST CST CDT|-80 -90 -80 -90|01232323232323232323232323232323232323232|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0", "Asia/Tashkent|LMT TAST TAST TASST TASST UZST UZT|-4B.b -50 -60 -70 -60 -60 -50|01232323232323232323232456|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11y0 bf0", "Asia/Tbilisi|TBMT TBIT TBIT TBIST TBIST GEST GET GET GEST|-2X.b -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565787878787878787878567|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 3y0 19f0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cM0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0", "Asia/Tehran|LMT TMT IRST IRST IRDT IRDT|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0", "Asia/Thimbu|LMT IST BTT|-5W.A -5u -60|012|-Su5W.A 1BGMs.A", "Asia/Tokyo|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0", "Asia/Ulaanbaatar|LMT ULAT ULAT ULAST|-77.w -70 -80 -90|01232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0", "Asia/Ust-Nera|LMT YAKT YAKT MAGST MAGT MAGST MAGT MAGT VLAT VLAT|-9w.S -80 -90 -c0 -b0 -b0 -a0 -c0 -b0 -a0|0123434343434343434343456434343434343434343434343434343434343434789|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0", "Asia/Vladivostok|LMT VLAT VLAT VLAST VLAST VLAT|-8L.v -90 -a0 -b0 -a0 -b0|012323232323232323232324123232323232323232323232323232323232323252|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Yakutsk|LMT YAKT YAKT YAKST YAKST YAKT|-8C.W -80 -90 -a0 -90 -a0|012323232323232323232324123232323232323232323232323232323232323252|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Yekaterinburg|LMT PMT SVET SVET SVEST SVEST YEKT YEKST YEKT|-42.x -3J.5 -40 -50 -60 -50 -50 -60 -60|0123434343434343434343435267676767676767676767676767676767676767686|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Asia/Yerevan|LMT YERT YERT YERST YERST AMST AMT AMT AMST|-2W -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565657878787878787878787878787878787|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1am0 2r0 1cJ0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fb0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Atlantic/Azores|HMT AZOT AZOST AZOMT AZOT AZOST WET|1S.w 20 10 0 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545456545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Atlantic/Canary|LMT CANT WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Atlantic/Cape_Verde|LMT CVT CVST CVT|1y.4 20 10 10|01213|-2xomp.U 1qOMp.U 7zX0 1djf0", "Atlantic/Faeroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Atlantic/Madeira|FMT MADT MADST MADMT WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Atlantic/Reykjavik|RMT IST ISST GMT|1r.M 10 0 0|01212121212121212121212121212121212121212121212121212121212121213|-2uWmw.c mfaw.c 1Bd0 ML0 1LB0 NLX0 1pe0 zd0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0", "Atlantic/South_Georgia|GST|20|0|", "Atlantic/Stanley|SMT FKT FKST FKT FKST|3P.o 40 30 30 20|0121212121212134343212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 U10 1qM0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10", "Australia/ACT|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0", "Australia/Eucla|ACWST ACWDT|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/LHI|AEST LHST LHDT LHDT|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Chile/EasterIsland|EMT EASST EAST EAST EASST|7h.s 60 70 60 50|012121212121212121212121212121213434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-1uSgG.w nHUG.w op0 9UK0 RXB0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1wn0 Rd0 1zb0 Op0 1zb0 Rd0 1wn0 Rd0", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "EST|EST|50|0|", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Eire|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Etc/GMT+0|GMT|0|0|", "Etc/GMT+1|GMT+1|10|0|", "Etc/GMT+10|GMT+10|a0|0|", "Etc/GMT+11|GMT+11|b0|0|", "Etc/GMT+12|GMT+12|c0|0|", "Etc/GMT+2|GMT+2|20|0|", "Etc/GMT+3|GMT+3|30|0|", "Etc/GMT+4|GMT+4|40|0|", "Etc/GMT+5|GMT+5|50|0|", "Etc/GMT+6|GMT+6|60|0|", "Etc/GMT+7|GMT+7|70|0|", "Etc/GMT+8|GMT+8|80|0|", "Etc/GMT+9|GMT+9|90|0|", "Etc/GMT-1|GMT-1|-10|0|", "Etc/GMT-10|GMT-10|-a0|0|", "Etc/GMT-11|GMT-11|-b0|0|", "Etc/GMT-12|GMT-12|-c0|0|", "Etc/GMT-13|GMT-13|-d0|0|", "Etc/GMT-14|GMT-14|-e0|0|", "Etc/GMT-2|GMT-2|-20|0|", "Etc/GMT-3|GMT-3|-30|0|", "Etc/GMT-4|GMT-4|-40|0|", "Etc/GMT-5|GMT-5|-50|0|", "Etc/GMT-6|GMT-6|-60|0|", "Etc/GMT-7|GMT-7|-70|0|", "Etc/GMT-8|GMT-8|-80|0|", "Etc/GMT-9|GMT-9|-90|0|", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Amsterdam|AMT NST NEST NET CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Belfast|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Bratislava|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Busingen|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|0123232323232323232345454676767676767676767623232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1ty0 2bD0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET FET|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454545454676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1cJ0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|01010101010101010101010121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-28dd0 11A0 1go0 19A0 1co0 1dA0 b1A0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 iyo0 Rc0 18o0 1hc0 1io0 1a00 14o0 5aL0 MM0 1vc0 17A0 1i00 1bc0 1eo0 17d0 1in0 17A0 6hA0 10N0 XIL0 1a10 1in0 17d0 19X0 1cN0 1fz0 1a10 1fX0 1cp0 1cO0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 1cM0 1cM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1cp0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST FET|-1O -20 -30 -20 -10 -40 -30 -30|012343432525252525252525252616161616161616161616161616161616161616172|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cK0 1cM0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hy0", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Moscow|MMT MMT MST MDST MSD MSK MSM EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c20 imv.j 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 16K0 1iO0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1C10 Lz0 1zd0 On0 1C10 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Samara|LMT SAMT SAMT KUYT KUYST MSD MSK EEST KUYT SAMST SAMST|-3k.k -30 -40 -40 -50 -40 -30 -30 -30 -50 -40|012343434343434343435656782929292929292929292929292929292929292a12|-22WNk.k qHak.k bcn0 1Qqo0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cN0 8o0 14j0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646464647373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Volgograd|LMT TSAT STAT STAT VOLT VOLST VOLST VOLT MSK MSK|-2V.E -30 -30 -40 -40 -50 -40 -30 -40 -30|012345454545454545454676748989898989898989898989898989898989898989|-21IqV.E cLXV.E cEM0 1gqn0 Lco0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 2pz0 1cJ0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "Europe/Zaporozhye|CUT EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "HST|HST|a0|0|", "Indian/Chagos|LMT IOT IOT|-4N.E -50 -60|012|-2xosN.E 3AGLN.E", "Indian/Christmas|CXT|-70|0|", "Indian/Cocos|CCT|-6u|0|", "Indian/Kerguelen|zzz TFT|0 -50|01|-MG00", "Indian/Mahe|LMT SCT|-3F.M -40|01|-2yO3F.M", "Indian/Maldives|MMT MVT|-4S -50|01|-olgS", "Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0", "Indian/Reunion|LMT RET|-3F.Q -40|01|-2mDDF.Q", "Kwajalein|MHT KWAT MHT|-b0 c0 -c0|012|-AX0 W9X0", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "MST|MST|70|0|", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "NZ-CHAT|CHAST CHAST CHADT|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Apia|LMT WSST SST SDT WSDT WSST|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00", "Pacific/Bougainville|PGT JST BST|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0", "Pacific/Chuuk|CHUT|-a0|0|", "Pacific/Efate|LMT VUT VUST|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0", "Pacific/Enderbury|PHOT PHOT PHOT|c0 b0 -d0|012|nIc0 B8n0", "Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0", "Pacific/Fiji|LMT FJT FJST|-bT.I -c0 -d0|012121212121212121212121212121212121212121212121212121212121212|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0", "Pacific/Funafuti|TVT|-c0|0|", "Pacific/Galapagos|LMT ECT GALT|5W.o 50 60|012|-1yVS1.A 2dTz1.A", "Pacific/Gambier|LMT GAMT|8X.M 90|01|-2jof0.c", "Pacific/Guadalcanal|LMT SBT|-aD.M -b0|01|-2joyD.M", "Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0", "Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0", "Pacific/Kiritimati|LINT LINT LINT|aE a0 -e0|012|nIaE B8nk", "Pacific/Kosrae|KOST KOST|-b0 -c0|010|-AX0 1bdz0", "Pacific/Majuro|MHT MHT|-b0 -c0|01|-AX0", "Pacific/Marquesas|LMT MART|9i 9u|01|-2joeG", "Pacific/Midway|NST NDT BST SST|b0 a0 b0 b0|01023|-x3N0 An0 pJd0 EyM0", "Pacific/Nauru|LMT NRT JST NRT|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu", "Pacific/Niue|NUT NUT NUT|bk bu b0|012|-KfME 17y0a", "Pacific/Norfolk|NMT NFT|-bc -bu|01|-Kgbc", "Pacific/Noumea|LMT NCT NCST|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0", "Pacific/Pago_Pago|LMT NST BST SST|bm.M b0 b0 b0|0123|-2nDMB.c 2gVzB.c EyM0", "Pacific/Palau|PWT|-90|0|", "Pacific/Pitcairn|PNT PST|8u 80|01|18Vku", "Pacific/Pohnpei|PONT|-b0|0|", "Pacific/Port_Moresby|PGT|-a0|0|", "Pacific/Rarotonga|CKT CKHST CKT|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu", "Pacific/Saipan|MPT MPT ChST|-90 -a0 -a0|012|-AV0 1g2n0", "Pacific/Tahiti|LMT TAHT|9W.g a0|01|-2joe1.I", "Pacific/Tarawa|GILT|-c0|0|", "Pacific/Tongatapu|TOT TOT TOST|-ck -d0 -e0|01212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0", "Pacific/Wake|WAKT|-c0|0|", "Pacific/Wallis|WFT|-c0|0|", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],
			links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Sao_Tome", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Addis_Ababa|Africa/Asmara", "Africa/Addis_Ababa|Africa/Asmera", "Africa/Addis_Ababa|Africa/Dar_es_Salaam", "Africa/Addis_Ababa|Africa/Djibouti", "Africa/Addis_Ababa|Africa/Kampala", "Africa/Addis_Ababa|Africa/Mogadishu", "Africa/Addis_Ababa|Africa/Nairobi", "Africa/Addis_Ababa|Indian/Antananarivo", "Africa/Addis_Ababa|Indian/Comoro", "Africa/Addis_Ababa|Indian/Mayotte", "Africa/Bangui|Africa/Brazzaville", "Africa/Bangui|Africa/Douala", "Africa/Bangui|Africa/Kinshasa", "Africa/Bangui|Africa/Lagos", "Africa/Bangui|Africa/Libreville", "Africa/Bangui|Africa/Luanda", "Africa/Bangui|Africa/Malabo", "Africa/Bangui|Africa/Niamey", "Africa/Bangui|Africa/Porto-Novo", "Africa/Blantyre|Africa/Bujumbura", "Africa/Blantyre|Africa/Gaborone", "Africa/Blantyre|Africa/Harare", "Africa/Blantyre|Africa/Kigali", "Africa/Blantyre|Africa/Lubumbashi", "Africa/Blantyre|Africa/Lusaka", "Africa/Blantyre|Africa/Maputo", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Juba|Africa/Khartoum", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Anguilla|America/Dominica", "America/Anguilla|America/Grenada", "America/Anguilla|America/Guadeloupe", "America/Anguilla|America/Marigot", "America/Anguilla|America/Montserrat", "America/Anguilla|America/Port_of_Spain", "America/Anguilla|America/St_Barthelemy", "America/Anguilla|America/St_Kitts", "America/Anguilla|America/St_Lucia", "America/Anguilla|America/St_Thomas", "America/Anguilla|America/St_Vincent", "America/Anguilla|America/Tortola", "America/Anguilla|America/Virgin", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Aruba|America/Curacao", "America/Aruba|America/Kralendijk", "America/Aruba|America/Lower_Princes", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Ensenada|America/Tijuana", "America/Ensenada|Mexico/BajaNorte", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Phoenix|US/Arizona", "America/Porto_Acre|America/Rio_Branco", "America/Porto_Acre|Brazil/Acre", "America/Regina|Canada/East-Saskatchewan", "America/Regina|Canada/Saskatchewan", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Antarctica/McMurdo|Antarctica/South_Pole", "Antarctica/McMurdo|NZ", "Antarctica/McMurdo|Pacific/Auckland", "Arctic/Longyearbyen|Atlantic/Jan_Mayen", "Arctic/Longyearbyen|Europe/Oslo", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Calcutta|Asia/Kolkata", "Asia/Chongqing|Asia/Chungking", "Asia/Chongqing|Asia/Harbin", "Asia/Chongqing|Asia/Shanghai", "Asia/Chongqing|PRC", "Asia/Dacca|Asia/Dhaka", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Istanbul|Europe/Istanbul", "Asia/Istanbul|Turkey", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kashgar|Asia/Urumqi", "Asia/Kathmandu|Asia/Katmandu", "Asia/Macao|Asia/Macau", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Seoul|ROK", "Asia/Singapore|Singapore", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimbu|Asia/Thimphu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Atlantic/Faeroe|Atlantic/Faroe", "Atlantic/Reykjavik|Iceland", "Australia/ACT|Australia/Canberra", "Australia/ACT|Australia/NSW", "Australia/ACT|Australia/Sydney", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/LHI|Australia/Lord_Howe", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Chile/EasterIsland|Pacific/Easter", "Eire|Europe/Dublin", "Etc/GMT+0|Etc/GMT", "Etc/GMT+0|Etc/GMT-0", "Etc/GMT+0|Etc/GMT0", "Etc/GMT+0|Etc/Greenwich", "Etc/GMT+0|GMT", "Etc/GMT+0|GMT+0", "Etc/GMT+0|GMT-0", "Etc/GMT+0|GMT0", "Etc/GMT+0|Greenwich", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belfast|Europe/Guernsey", "Europe/Belfast|Europe/Isle_of_Man", "Europe/Belfast|Europe/Jersey", "Europe/Belfast|Europe/London", "Europe/Belfast|GB", "Europe/Belfast|GB-Eire", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Bratislava|Europe/Prague", "Europe/Busingen|Europe/Vaduz", "Europe/Busingen|Europe/Zurich", "Europe/Chisinau|Europe/Tiraspol", "Europe/Helsinki|Europe/Mariehamn", "Europe/Lisbon|Portugal", "Europe/Moscow|W-SU", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Kwajalein|Pacific/Kwajalein", "NZ-CHAT|Pacific/Chatham", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pohnpei|Pacific/Ponape"]
		}
	},
	{}],
	101 : [function (t, e) {
		var n = e.exports = t(102);
		n.tz.load(t(100))
	},
	{}],
	102 : [function (t, e, n) { !
		function (r, i) {
			"use strict";
			"function" == typeof define && define.amd ? define(["moment"], i) : "object" == typeof n ? e.exports = i(t(103)) : i(r.moment)
		} (this, function (t) {
			"use strict";
			function e(t) {
				return t > 96 ? t - 87 : t > 64 ? t - 29 : t - 48
			}
			function n(t) {
				var n, r = 0,
				i = t.split("."),
				o = i[0],
				a = i[1] || "",
				c = 1,
				s = 0,
				u = 1;
				for (45 === t.charCodeAt(0) && (r = 1, u = -1), r; r < o.length; r++) n = e(o.charCodeAt(r)),
				s = 60 * s + n;
				for (r = 0; r < a.length; r++) c /= 60,
				n = e(a.charCodeAt(r)),
				s += n * c;
				return s * u
			}
			function r(t) {
				for (var e = 0; e < t.length; e++) t[e] = n(t[e])
			}
			function i(t, e) {
				for (var n = 0; e > n; n++) t[n] = Math.round((t[n - 1] || 0) + 6e4 * t[n]);
				t[e - 1] = 1 / 0
			}
			function o(t, e) {
				var n, r = [];
				for (n = 0; n < e.length; n++) r[n] = t[e[n]];
				return r
			}
			function a(t) {
				var e = t.split("|"),
				n = e[2].split(" "),
				a = e[3].split(""),
				c = e[4].split(" ");
				return r(n),
				r(a),
				r(c),
				i(c, a.length),
				{
					name: e[0],
					abbrs: o(e[1].split(" "), a),
					offsets: o(n, a),
					untils: c
				}
			}
			function c(t) {
				t && this._set(a(t))
			}
			function s(t) {
				return (t || "").toLowerCase().replace(/\//g, "_")
			}
			function u(t) {
				var e, n, r;
				for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) n = new c(t[e]),
				r = s(n.name),
				T[r] = n,
				h(r)
			}
			function l(t) {
				return T[s(t)] || null
			}
			function p() {
				var t, e = [];
				for (t in T) T.hasOwnProperty(t) && T[t] && e.push(T[t].name);
				return e.sort()
			}
			function f(t) {
				var e, n;
				for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) n = t[e].split("|"),
				M(n[0], n[1]),
				M(n[1], n[0])
			}
			function h(t) {
				if (O[t]) {
					var e, n = T[t],
					r = O[t];
					for (e = 0; e < r.length; e++) d(n, r[e]);
					O[t] = null
				}
			}
			function d(t, e) {
				var n = T[s(e)] = new c;
				n._set(t),
				n.name = e
			}
			function M(t, e) {
				t = s(t),
				T[t] ? d(T[t], e) : (O[t] = O[t] || [], O[t].push(e))
			}
			function g(t) {
				u(t.zones),
				f(t.links),
				A.dataVersion = t.version
			}
			function b(t) {
				return b.didShowError || (b.didShowError = !0, v("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")),
				!!l(t)
			}
			function m(t) {
				return ! (!t._a || void 0 !== t._tzm)
			}
			function v(t) {
				"undefined" != typeof console && "function" == typeof console.error && console.error(t)
			}
			function A(e) {
				var n = Array.prototype.slice.call(arguments, 0, -1),
				r = arguments[arguments.length - 1],
				i = l(r),
				o = t.utc.apply(null, n);
				return i && !t.isMoment(e) && m(o) && o.add(i.parse(o), "minutes"),
				o.tz(r),
				o
			}
			function y(t) {
				return function () {
					return this._z ? this._z.abbr(this) : t.call(this)
				}
			}
			function z(t) {
				return function () {
					return this._z = null,
					t.apply(this, arguments)
				}
			}
			if (void 0 !== t.tz) return t;
			var _ = "0.3.0",
			T = {},
			O = {},
			L = t.version.split("."),
			w = +L[0],
			N = +L[1];
			(2 > w || 2 === w && 6 > N) && v("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + t.version + ". See momentjs.com"),
			c.prototype = {
				_set: function (t) {
					this.name = t.name,
					this.abbrs = t.abbrs,
					this.untils = t.untils,
					this.offsets = t.offsets
				},
				_index: function (t) {
					var e, n = +t,
					r = this.untils;
					for (e = 0; e < r.length; e++) if (n < r[e]) return e
				},
				parse: function (t) {
					var e, n, r, i, o = +t,
					a = this.offsets,
					c = this.untils,
					s = c.length - 1;
					for (i = 0; s > i; i++) if (e = a[i], n = a[i + 1], r = a[i ? i - 1 : i], n > e && A.moveAmbiguousForward ? e = n: e > r && A.moveInvalidForward && (e = r), o < c[i] - 6e4 * e) return a[i];
					return a[s]
				},
				abbr: function (t) {
					return this.abbrs[this._index(t)]
				},
				offset: function (t) {
					return this.offsets[this._index(t)]
				}
			},
			A.version = _,
			A.dataVersion = "",
			A._zones = T,
			A._links = O,
			A.add = u,
			A.link = f,
			A.load = g,
			A.zone = l,
			A.zoneExists = b,
			A.names = p,
			A.Zone = c,
			A.unpack = a,
			A.unpackBase60 = n,
			A.needsOffset = m,
			A.moveInvalidForward = !0,
			A.moveAmbiguousForward = !1;
			var q = t.fn;
			t.tz = A,
			t.defaultZone = null,
			t.updateOffset = function (e, n) {
				var r;
				void 0 === e._z && (e._z = t.defaultZone),
				e._z && (r = e._z.offset(e), Math.abs(r) < 16 && (r /= 60), void 0 !== e.utcOffset ? e.utcOffset( - r, n) : e.zone(r, n))
			},
			q.tz = function (e) {
				return e ? (this._z = l(e), this._z ? t.updateOffset(this) : v("Moment Timezone has no data for " + e + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name: void 0
			},
			q.zoneName = y(q.zoneName),
			q.zoneAbbr = y(q.zoneAbbr),
			q.utc = z(q.utc),
			t.tz.setDefault = function (e) {
				return (2 > w || 2 === w && 9 > N) && v("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + t.version + "."),
				t.defaultZone = e ? l(e) : null,
				t
			};
			var x = t.momentProperties;
			return "[object Array]" === Object.prototype.toString.call(x) ? (x.push("_z"), x.push("_a")) : x && (x._z = null),
			t
		})
	},
	{}],
	103 : [function (t, e) { (function (n) { (function (r) {
				function i(t, e, n) {
					switch (arguments.length) {
					case 2:
						return null != t ? t: e;
					case 3:
						return null != t ? t: null != e ? e: n;
					default:
						throw new Error("Implement me")
					}
				}
				function o(t, e) {
					return xe.call(t, e)
				}
				function a() {
					return {
						empty: !1,
						unusedTokens: [],
						unusedInput: [],
						overflow: -2,
						charsLeftOver: 0,
						nullInput: !1,
						invalidMonth: null,
						invalidFormat: !1,
						userInvalidated: !1,
						iso: !1
					}
				}
				function c(t) {
					Te.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
				}
				function s(t, e) {
					var n = !0;
					return b(function () {
						return n && (c(t), n = !1),
						e.apply(this, arguments)
					},
					e)
				}
				function u(t, e) {
					zn[t] || (c(e), zn[t] = !0)
				}
				function l(t, e) {
					return function (n) {
						return A(t.call(this, n), e)
					}
				}
				function p(t, e) {
					return function (n) {
						return this.localeData().ordinal(t.call(this, n), e)
					}
				}
				function f(t, e) {
					var n, r, i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
					o = t.clone().add(i, "months");
					return 0 > e - o ? (n = t.clone().add(i - 1, "months"), r = (e - o) / (o - n)) : (n = t.clone().add(i + 1, "months"), r = (e - o) / (n - o)),
					-(i + r)
				}
				function h(t, e, n) {
					var r;
					return null == n ? e: null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (r = t.isPM(n), r && 12 > e && (e += 12), r || 12 !== e || (e = 0), e) : e
				}
				function d() {}
				function M(t, e) {
					e !== !1 && X(t),
					m(this, t),
					this._d = new Date( + t._d),
					Tn === !1 && (Tn = !0, Te.updateOffset(this), Tn = !1)
				}
				function g(t) {
					var e = q(t),
					n = e.year || 0,
					r = e.quarter || 0,
					i = e.month || 0,
					o = e.week || 0,
					a = e.day || 0,
					c = e.hour || 0,
					s = e.minute || 0,
					u = e.second || 0,
					l = e.millisecond || 0;
					this._milliseconds = +l + 1e3 * u + 6e4 * s + 36e5 * c,
					this._days = +a + 7 * o,
					this._months = +i + 3 * r + 12 * n,
					this._data = {},
					this._locale = Te.localeData(),
					this._bubble()
				}
				function b(t, e) {
					for (var n in e) o(e, n) && (t[n] = e[n]);
					return o(e, "toString") && (t.toString = e.toString),
					o(e, "valueOf") && (t.valueOf = e.valueOf),
					t
				}
				function m(t, e) {
					var n, r, i;
					if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), De.length > 0) for (n in De) r = De[n],
					i = e[r],
					"undefined" != typeof i && (t[r] = i);
					return t
				}
				function v(t) {
					return 0 > t ? Math.ceil(t) : Math.floor(t)
				}
				function A(t, e, n) {
					for (var r = "" + Math.abs(t), i = t >= 0; r.length < e;) r = "0" + r;
					return (i ? n ? "+": "": "-") + r
				}
				function y(t, e) {
					var n = {
						milliseconds: 0,
						months: 0
					};
					return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
					t.clone().add(n.months, "M").isAfter(e) && --n.months,
					n.milliseconds = +e - +t.clone().add(n.months, "M"),
					n
				}
				function z(t, e) {
					var n;
					return e = I(e, t),
					t.isBefore(e) ? n = y(t, e) : (n = y(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months),
					n
				}
				function _(t, e) {
					return function (n, r) {
						var i, o;
						return null === r || isNaN( + r) || (u(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = r, r = o),
						n = "string" == typeof n ? +n: n,
						i = Te.duration(n, r),
						T(this, i, t),
						this
					}
				}
				function T(t, e, n, r) {
					var i = e._milliseconds,
					o = e._days,
					a = e._months;
					r = null == r ? !0 : r,
					i && t._d.setTime( + t._d + i * n),
					o && me(t, "Date", be(t, "Date") + o * n),
					a && ge(t, be(t, "Month") + a * n),
					r && Te.updateOffset(t, o || a)
				}
				function O(t) {
					return "[object Array]" === Object.prototype.toString.call(t)
				}
				function L(t) {
					return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
				}
				function w(t, e, n) {
					var r, i = Math.min(t.length, e.length),
					o = Math.abs(t.length - e.length),
					a = 0;
					for (r = 0; i > r; r++)(n && t[r] !== e[r] || !n && S(t[r]) !== S(e[r])) && a++;
					return a + o
				}
				function N(t) {
					if (t) {
						var e = t.toLowerCase().replace(/(.)s$/, "$1");
						t = Mn[t] || gn[e] || e
					}
					return t
				}
				function q(t) {
					var e, n, r = {};
					for (n in t) o(t, n) && (e = N(n), e && (r[e] = t[n]));
					return r
				}
				function x(t) {
					var e, n;
					if (0 === t.indexOf("week")) e = 7,
					n = "day";
					else {
						if (0 !== t.indexOf("month")) return;
						e = 12,
						n = "month"
					}
					Te[t] = function (i, o) {
						var a, c, s = Te._locale[t],
						u = [];
						if ("number" == typeof i && (o = i, i = r), c = function (t) {
							var e = Te().utc().set(n, t);
							return s.call(Te._locale, e, i || "")
						},
						null != o) return c(o);
						for (a = 0; e > a; a++) u.push(c(a));
						return u
					}
				}
				function S(t) {
					var e = +t,
					n = 0;
					return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)),
					n
				}
				function W(t, e) {
					return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
				}
				function E(t, e, n) {
					return fe(Te([t, 11, 31 + e - n]), e, n).week
				}
				function B(t) {
					return C(t) ? 366 : 365
				}
				function C(t) {
					return t % 4 === 0 && t%100 !== 0 || t%400 === 0
				}
				function X(t) {
					var e;
					t._a && -2 === t._pf.overflow && (e = t._a[We] < 0 || t._a[We] > 11 ? We: t._a[Ee] < 1 || t._a[Ee] > W(t._a[Se], t._a[We]) ? Ee: t._a[Be] < 0 || t._a[Be] > 24 || 24 === t._a[Be] && (0 !== t._a[Ce] || 0 !== t._a[Xe] || 0 !== t._a[Re]) ? Be: t._a[Ce] < 0 || t._a[Ce] > 59 ? Ce: t._a[Xe] < 0 || t._a[Xe] > 59 ? Xe: t._a[Re] < 0 || t._a[Re] > 999 ? Re: -1, t._pf._overflowDayOfYear && (Se > e || e > Ee) && (e = Ee), t._pf.overflow = e)
				}
				function R(t) {
					return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === r)),
					t._isValid
				}
				function k(t) {
					return t ? t.toLowerCase().replace("_", "-") : t
				}
				function D(t) {
					for (var e, n, r, i, o = 0; o < t.length;) {
						for (i = k(t[o]).split("-"), e = i.length, n = k(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
							if (r = P(i.slice(0, e).join("-"))) return r;
							if (n && n.length >= e && w(i, n, !0) >= e - 1) break;
							e--
						}
						o++
					}
					return null
				}
				function P(e) {
					var n = null;
					if (!ke[e] && Pe) try {
						n = Te.locale(),
						t("./locale/" + e),
						Te.locale(n)
					} catch(r) {}
					return ke[e]
				}
				function I(t, e) {
					var n, r;
					return e._isUTC ? (n = e.clone(), r = (Te.isMoment(t) || L(t) ? +t: +Te(t)) - +n, n._d.setTime( + n._d + r), Te.updateOffset(n, !1), n) : Te(t).local()
				}
				function j(t) {
					return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
				}
				function H(t) {
					var e, n, r = t.match(Ue);
					for (e = 0, n = r.length; n > e; e++) r[e] = yn[r[e]] ? yn[r[e]] : j(r[e]);
					return function (i) {
						var o = "";
						for (e = 0; n > e; e++) o += r[e] instanceof Function ? r[e].call(i, t) : r[e];
						return o
					}
				}
				function U(t, e) {
					return t.isValid() ? (e = F(e, t.localeData()), bn[e] || (bn[e] = H(e)), bn[e](t)) : t.localeData().invalidDate()
				}
				function F(t, e) {
					function n(t) {
						return e.longDateFormat(t) || t
					}
					var r = 5;
					for (Fe.lastIndex = 0; r >= 0 && Fe.test(t);) t = t.replace(Fe, n),
					Fe.lastIndex = 0,
					r -= 1;
					return t
				}
				function V(t, e) {
					var n, r = e._strict;
					switch (t) {
					case "Q":
						return nn;
					case "DDDD":
						return on;
					case "YYYY":
					case "GGGG":
					case "gggg":
						return r ? an: Ye;
					case "Y":
					case "G":
					case "g":
						return sn;
					case "YYYYYY":
					case "YYYYY":
					case "GGGGG":
					case "ggggg":
						return r ? cn: Ke;
					case "S":
						if (r) return nn;
					case "SS":
						if (r) return rn;
					case "SSS":
						if (r) return on;
					case "DDD":
						return Ge;
					case "MMM":
					case "MMMM":
					case "dd":
					case "ddd":
					case "dddd":
						return Qe;
					case "a":
					case "A":
						return e._locale._meridiemParse;
					case "x":
						return tn;
					case "X":
						return en;
					case "Z":
					case "ZZ":
						return Je;
					case "T":
						return Ze;
					case "SSSS":
						return $e;
					case "MM":
					case "DD":
					case "YY":
					case "GG":
					case "gg":
					case "HH":
					case "hh":
					case "mm":
					case "ss":
					case "ww":
					case "WW":
						return r ? rn: Ve;
					case "M":
					case "D":
					case "d":
					case "H":
					case "h":
					case "m":
					case "s":
					case "w":
					case "W":
					case "e":
					case "E":
						return Ve;
					case "Do":
						return r ? e._locale._ordinalParse: e._locale._ordinalParseLenient;
					default:
						return n = new RegExp(ee(te(t.replace("\\", "")), "i"))
					}
				}
				function G(t) {
					t = t || "";
					var e = t.match(Je) || [],
					n = e[e.length - 1] || [],
					r = (n + "").match(hn) || ["-", 0, 0],
					i = +(60 * r[1]) + S(r[2]);
					return "+" === r[0] ? i: -i
				}
				function Y(t, e, n) {
					var r, i = n._a;
					switch (t) {
					case "Q":
						null != e && (i[We] = 3 * (S(e) - 1));
						break;
					case "M":
					case "MM":
						null != e && (i[We] = S(e) - 1);
						break;
					case "MMM":
					case "MMMM":
						r = n._locale.monthsParse(e, t, n._strict),
						null != r ? i[We] = r: n._pf.invalidMonth = e;
						break;
					case "D":
					case "DD":
						null != e && (i[Ee] = S(e));
						break;
					case "Do":
						null != e && (i[Ee] = S(parseInt(e.match(/\d{1,2}/)[0], 10)));
						break;
					case "DDD":
					case "DDDD":
						null != e && (n._dayOfYear = S(e));
						break;
					case "YY":
						i[Se] = Te.parseTwoDigitYear(e);
						break;
					case "YYYY":
					case "YYYYY":
					case "YYYYYY":
						i[Se] = S(e);
						break;
					case "a":
					case "A":
						n._meridiem = e;
						break;
					case "h":
					case "hh":
						n._pf.bigHour = !0;
					case "H":
					case "HH":
						i[Be] = S(e);
						break;
					case "m":
					case "mm":
						i[Ce] = S(e);
						break;
					case "s":
					case "ss":
						i[Xe] = S(e);
						break;
					case "S":
					case "SS":
					case "SSS":
					case "SSSS":
						i[Re] = S(1e3 * ("0." + e));
						break;
					case "x":
						n._d = new Date(S(e));
						break;
					case "X":
						n._d = new Date(1e3 * parseFloat(e));
						break;
					case "Z":
					case "ZZ":
						n._useUTC = !0,
						n._tzm = G(e);
						break;
					case "dd":
					case "ddd":
					case "dddd":
						r = n._locale.weekdaysParse(e),
						null != r ? (n._w = n._w || {},
						n._w.d = r) : n._pf.invalidWeekday = e;
						break;
					case "w":
					case "ww":
					case "W":
					case "WW":
					case "d":
					case "e":
					case "E":
						t = t.substr(0, 1);
					case "gggg":
					case "GGGG":
					case "GGGGG":
						t = t.substr(0, 2),
						e && (n._w = n._w || {},
						n._w[t] = S(e));
						break;
					case "gg":
					case "GG":
						n._w = n._w || {},
						n._w[t] = Te.parseTwoDigitYear(e)
					}
				}
				function K(t) {
					var e, n, r, o, a, c, s;
					e = t._w,
					null != e.GG || null != e.W || null != e.E ? (a = 1, c = 4, n = i(e.GG, t._a[Se], fe(Te(), 1, 4).year), r = i(e.W, 1), o = i(e.E, 1)) : (a = t._locale._week.dow, c = t._locale._week.doy, n = i(e.gg, t._a[Se], fe(Te(), a, c).year), r = i(e.w, 1), null != e.d ? (o = e.d, a > o && ++r) : o = null != e.e ? e.e + a: a),
					s = he(n, r, o, c, a),
					t._a[Se] = s.year,
					t._dayOfYear = s.dayOfYear
				}
				function $(t) {
					var e, n, r, o, a = [];
					if (!t._d) {
						for (r = J(t), t._w && null == t._a[Ee] && null == t._a[We] && K(t), t._dayOfYear && (o = i(t._a[Se], r[Se]), t._dayOfYear > B(o) && (t._pf._overflowDayOfYear = !0), n = se(o, 0, t._dayOfYear), t._a[We] = n.getUTCMonth(), t._a[Ee] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = a[e] = r[e];
						for (; 7 > e; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
						24 === t._a[Be] && 0 === t._a[Ce] && 0 === t._a[Xe] && 0 === t._a[Re] && (t._nextDay = !0, t._a[Be] = 0),
						t._d = (t._useUTC ? se: ce).apply(null, a),
						null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
						t._nextDay && (t._a[Be] = 24)
					}
				}
				function Q(t) {
					var e;
					t._d || (e = q(t._i), t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], $(t))
				}
				function J(t) {
					var e = new Date;
					return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
				}
				function Z(t) {
					if (t._f === Te.ISO_8601) return void re(t);
					t._a = [],
					t._pf.empty = !0;
					var e, n, i, o, a, c = "" + t._i,
					s = c.length,
					u = 0;
					for (i = F(t._f, t._locale).match(Ue) || [], e = 0; e < i.length; e++) o = i[e],
					n = (c.match(V(o, t)) || [])[0],
					n && (a = c.substr(0, c.indexOf(n)), a.length > 0 && t._pf.unusedInput.push(a), c = c.slice(c.indexOf(n) + n.length), u += n.length),
					yn[o] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(o), Y(o, n, t)) : t._strict && !n && t._pf.unusedTokens.push(o);
					t._pf.charsLeftOver = s - u,
					c.length > 0 && t._pf.unusedInput.push(c),
					t._pf.bigHour === !0 && t._a[Be] <= 12 && (t._pf.bigHour = r),
					t._a[Be] = h(t._locale, t._a[Be], t._meridiem),
					$(t),
					X(t)
				}
				function te(t) {
					return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, r, i) {
						return e || n || r || i
					})
				}
				function ee(t) {
					return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
				}
				function ne(t) {
					var e, n, r, i, o;
					if (0 === t._f.length) return t._pf.invalidFormat = !0,
					void(t._d = new Date(0 / 0));
					for (i = 0; i < t._f.length; i++) o = 0,
					e = m({},
					t),
					null != t._useUTC && (e._useUTC = t._useUTC),
					e._pf = a(),
					e._f = t._f[i],
					Z(e),
					R(e) && (o += e._pf.charsLeftOver, o += 10 * e._pf.unusedTokens.length, e._pf.score = o, (null == r || r > o) && (r = o, n = e));
					b(t, n || e)
				}
				function re(t) {
					var e, n, r = t._i,
					i = un.exec(r);
					if (i) {
						for (t._pf.iso = !0, e = 0, n = pn.length; n > e; e++) if (pn[e][1].exec(r)) {
							t._f = pn[e][0] + (i[6] || " ");
							break
						}
						for (e = 0, n = fn.length; n > e; e++) if (fn[e][1].exec(r)) {
							t._f += fn[e][0];
							break
						}
						r.match(Je) && (t._f += "Z"),
						Z(t)
					} else t._isValid = !1
				}
				function ie(t) {
					re(t),
					t._isValid === !1 && (delete t._isValid, Te.createFromInputFallback(t))
				}
				function oe(t, e) {
					var n, r = [];
					for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
					return r
				}
				function ae(t) {
					var e, n = t._i;
					n === r ? t._d = new Date: L(n) ? t._d = new Date( + n) : null !== (e = Ie.exec(n)) ? t._d = new Date( + e[1]) : "string" == typeof n ? ie(t) : O(n) ? (t._a = oe(n.slice(0), function (t) {
						return parseInt(t, 10)
					}), $(t)) : "object" == typeof n ? Q(t) : "number" == typeof n ? t._d = new Date(n) : Te.createFromInputFallback(t)
				}
				function ce(t, e, n, r, i, o, a) {
					var c = new Date(t, e, n, r, i, o, a);
					return 1970 > t && c.setFullYear(t),
					c
				}
				function se(t) {
					var e = new Date(Date.UTC.apply(null, arguments));
					return 1970 > t && e.setUTCFullYear(t),
					e
				}
				function ue(t, e) {
					if ("string" == typeof t) if (isNaN(t)) {
						if (t = e.weekdaysParse(t), "number" != typeof t) return null
					} else t = parseInt(t, 10);
					return t
				}
				function le(t, e, n, r, i) {
					return i.relativeTime(e || 1, !!n, t, r)
				}
				function pe(t, e, n) {
					var r = Te.duration(t).abs(),
					i = qe(r.as("s")),
					o = qe(r.as("m")),
					a = qe(r.as("h")),
					c = qe(r.as("d")),
					s = qe(r.as("M")),
					u = qe(r.as("y")),
					l = i < mn.s && ["s", i] || 1 === o && ["m"] || o < mn.m && ["mm", o] || 1 === a && ["h"] || a < mn.h && ["hh", a] || 1 === c && ["d"] || c < mn.d && ["dd", c] || 1 === s && ["M"] || s < mn.M && ["MM", s] || 1 === u && ["y"] || ["yy", u];
					return l[2] = e,
					l[3] = +t > 0,
					l[4] = n,
					le.apply({},
					l)
				}
				function fe(t, e, n) {
					var r, i = n - e,
					o = n - t.day();
					return o > i && (o -= 7),
					i - 7 > o && (o += 7),
					r = Te(t).add(o, "d"),
					{
						week: Math.ceil(r.dayOfYear() / 7),
						year: r.year()
					}
				}
				function he(t, e, n, r, i) {
					var o, a, c = se(t, 0, 1).getUTCDay();
					return c = 0 === c ? 7 : c,
					n = null != n ? n: i,
					o = i - c + (c > r ? 7 : 0) - (i > c ? 7 : 0),
					a = 7 * (e - 1) + (n - i) + o + 1,
					{
						year: a > 0 ? t: t - 1,
						dayOfYear: a > 0 ? a: B(t - 1) + a
					}
				}
				function de(t) {
					var e, n = t._i,
					i = t._f;
					return t._locale = t._locale || Te.localeData(t._l),
					null === n || i === r && "" === n ? Te.invalid({
						nullInput: !0
					}) : ("string" == typeof n && (t._i = n = t._locale.preparse(n)), Te.isMoment(n) ? new M(n, !0) : (i ? O(i) ? ne(t) : Z(t) : ae(t), e = new M(t), e._nextDay && (e.add(1, "d"), e._nextDay = r), e))
				}
				function Me(t, e) {
					var n, r;
					if (1 === e.length && O(e[0]) && (e = e[0]), !e.length) return Te();
					for (n = e[0], r = 1; r < e.length; ++r) e[r][t](n) && (n = e[r]);
					return n
				}
				function ge(t, e) {
					var n;
					return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t: (n = Math.min(t.date(), W(t.year(), e)), t._d["set" + (t._isUTC ? "UTC": "") + "Month"](e, n), t)
				}
				function be(t, e) {
					return t._d["get" + (t._isUTC ? "UTC": "") + e]()
				}
				function me(t, e, n) {
					return "Month" === e ? ge(t, n) : t._d["set" + (t._isUTC ? "UTC": "") + e](n)
				}
				function ve(t, e) {
					return function (n) {
						return null != n ? (me(this, t, n), Te.updateOffset(this, e), this) : be(this, t)
					}
				}
				function Ae(t) {
					return 400 * t / 146097
				}
				function ye(t) {
					return 146097 * t / 400
				}
				function ze(t) {
					Te.duration.fn[t] = function () {
						return this._data[t]
					}
				}
				function _e(t) {
					"undefined" == typeof ender && (Oe = Ne.moment, Ne.moment = t ? s("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", Te) : Te)
				}
				for (var Te, Oe, Le, we = "2.9.0", Ne = "undefined" == typeof n || "undefined" != typeof window && window !== n.window ? this: n, qe = Math.round, xe = Object.prototype.hasOwnProperty, Se = 0, We = 1, Ee = 2, Be = 3, Ce = 4, Xe = 5, Re = 6, ke = {},
				De = [], Pe = "undefined" != typeof e && e && e.exports, Ie = /^\/?Date\((\-?\d+)/i, je = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, He = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Ue = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Fe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ve = /\d\d?/, Ge = /\d{1,3}/, Ye = /\d{1,4}/, Ke = /[+\-]?\d{1,6}/, $e = /\d+/, Qe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Je = /Z|[\+\-]\d\d:?\d\d/gi, Ze = /T/i, tn = /[\+\-]?\d+/, en = /[\+\-]?\d+(\.\d{1,3})?/, nn = /\d/, rn = /\d\d/, on = /\d{3}/, an = /\d{4}/, cn = /[+-]?\d{6}/, sn = /[+-]?\d+/, un = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ln = "YYYY-MM-DDTHH:mm:ssZ", pn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], fn = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], hn = /([\+\-]|\d\d)/gi, dn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
					Milliseconds: 1,
					Seconds: 1e3,
					Minutes: 6e4,
					Hours: 36e5,
					Days: 864e5,
					Months: 2592e6,
					Years: 31536e6
				}), Mn = {
					ms: "millisecond",
					s: "second",
					m: "minute",
					h: "hour",
					d: "day",
					D: "date",
					w: "week",
					W: "isoWeek",
					M: "month",
					Q: "quarter",
					y: "year",
					DDD: "dayOfYear",
					e: "weekday",
					E: "isoWeekday",
					gg: "weekYear",
					GG: "isoWeekYear"
				},
				gn = {
					dayofyear: "dayOfYear",
					isoweekday: "isoWeekday",
					isoweek: "isoWeek",
					weekyear: "weekYear",
					isoweekyear: "isoWeekYear"
				},
				bn = {},
				mn = {
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					M: 11
				},
				vn = "DDD w W M D d".split(" "), An = "M D H h m s w W".split(" "), yn = {
					M: function () {
						return this.month() + 1
					},
					MMM: function (t) {
						return this.localeData().monthsShort(this, t)
					},
					MMMM: function (t) {
						return this.localeData().months(this, t)
					},
					D: function () {
						return this.date()
					},
					DDD: function () {
						return this.dayOfYear()
					},
					d: function () {
						return this.day()
					},
					dd: function (t) {
						return this.localeData().weekdaysMin(this, t)
					},
					ddd: function (t) {
						return this.localeData().weekdaysShort(this, t)
					},
					dddd: function (t) {
						return this.localeData().weekdays(this, t)
					},
					w: function () {
						return this.week()
					},
					W: function () {
						return this.isoWeek()
					},
					YY: function () {
						return A(this.year()%100, 2)
					},
					YYYY: function () {
						return A(this.year(), 4)
					},
					YYYYY: function () {
						return A(this.year(), 5)
					},
					YYYYYY: function () {
						var t = this.year(),
						e = t >= 0 ? "+": "-";
						return e + A(Math.abs(t), 6)
					},
					gg: function () {
						return A(this.weekYear()%100, 2)
					},
					gggg: function () {
						return A(this.weekYear(), 4)
					},
					ggggg: function () {
						return A(this.weekYear(), 5)
					},
					GG: function () {
						return A(this.isoWeekYear()%100, 2)
					},
					GGGG: function () {
						return A(this.isoWeekYear(), 4)
					},
					GGGGG: function () {
						return A(this.isoWeekYear(), 5)
					},
					e: function () {
						return this.weekday()
					},
					E: function () {
						return this.isoWeekday()
					},
					a: function () {
						return this.localeData().meridiem(this.hours(), this.minutes(), !0)
					},
					A: function () {
						return this.localeData().meridiem(this.hours(), this.minutes(), !1)
					},
					H: function () {
						return this.hours()
					},
					h: function () {
						return this.hours()%12 || 12
					},
					m: function () {
						return this.minutes()
					},
					s: function () {
						return this.seconds()
					},
					S: function () {
						return S(this.milliseconds() / 100)
					},
					SS: function () {
						return A(S(this.milliseconds() / 10), 2)
					},
					SSS: function () {
						return A(this.milliseconds(), 3)
					},
					SSSS: function () {
						return A(this.milliseconds(), 3)
					},
					Z: function () {
						var t = this.utcOffset(),
						e = "+";
						return 0 > t && (t = -t, e = "-"),
						e + A(S(t / 60), 2) + ":" + A(S(t)%60, 2)
					},
					ZZ: function () {
						var t = this.utcOffset(),
						e = "+";
						return 0 > t && (t = -t, e = "-"),
						e + A(S(t / 60), 2) + A(S(t)%60, 2)
					},
					z: function () {
						return this.zoneAbbr()
					},
					zz: function () {
						return this.zoneName()
					},
					x: function () {
						return this.valueOf()
					},
					X: function () {
						return this.unix()
					},
					Q: function () {
						return this.quarter()
					}
				},
				zn = {},
				_n = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], Tn = !1; vn.length;) Le = vn.pop(),
				yn[Le + "o"] = p(yn[Le], Le);
				for (; An.length;) Le = An.pop(),
				yn[Le + Le] = l(yn[Le], 2);
				yn.DDDD = l(yn.DDD, 3),
				b(d.prototype, {
					set: function (t) {
						var e, n;
						for (n in t) e = t[n],
						"function" == typeof e ? this[n] = e: this["_" + n] = e;
						this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
					},
					_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					months: function (t) {
						return this._months[t.month()]
					},
					_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					monthsShort: function (t) {
						return this._monthsShort[t.month()]
					},
					monthsParse: function (t, e, n) {
						var r, i, o;
						for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
							if (i = Te.utc([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
							if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
							if (!n && this._monthsParse[r].test(t)) return r
						}
					},
					_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdays: function (t) {
						return this._weekdays[t.day()]
					},
					_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysShort: function (t) {
						return this._weekdaysShort[t.day()]
					},
					_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					weekdaysMin: function (t) {
						return this._weekdaysMin[t.day()]
					},
					weekdaysParse: function (t) {
						var e, n, r;
						for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (n = Te([2e3, 1]).day(e), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
					},
					_longDateFormat: {
						LTS: "h:mm:ss A",
						LT: "h:mm A",
						L: "MM/DD/YYYY",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY LT",
						LLLL: "dddd, MMMM D, YYYY LT"
					},
					longDateFormat: function (t) {
						var e = this._longDateFormat[t];
						return ! e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
							return t.slice(1)
						}), this._longDateFormat[t] = e),
						e
					},
					isPM: function (t) {
						return "p" === (t + "").toLowerCase().charAt(0)
					},
					_meridiemParse: /[ap]\.?m?\.?/i,
					meridiem: function (t, e, n) {
						return t > 11 ? n ? "pm": "PM": n ? "am": "AM"
					},
					_calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					calendar: function (t, e, n) {
						var r = this._calendar[t];
						return "function" == typeof r ? r.apply(e, [n]) : r
					},
					_relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					relativeTime: function (t, e, n, r) {
						var i = this._relativeTime[n];
						return "function" == typeof i ? i(t, e, n, r) : i.replace(/%d/i, t)
					},
					pastFuture: function (t, e) {
						var n = this._relativeTime[t > 0 ? "future": "past"];
						return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
					},
					ordinal: function (t) {
						return this._ordinal.replace("%d", t)
					},
					_ordinal: "%d",
					_ordinalParse: /\d{1,2}/,
					preparse: function (t) {
						return t
					},
					postformat: function (t) {
						return t
					},
					week: function (t) {
						return fe(t, this._week.dow, this._week.doy).week
					},
					_week: {
						dow: 0,
						doy: 6
					},
					firstDayOfWeek: function () {
						return this._week.dow
					},
					firstDayOfYear: function () {
						return this._week.doy
					},
					_invalidDate: "Invalid date",
					invalidDate: function () {
						return this._invalidDate
					}
				}),
				Te = function (t, e, n, i) {
					var o;
					return "boolean" == typeof n && (i = n, n = r),
					o = {},
					o._isAMomentObject = !0,
					o._i = t,
					o._f = e,
					o._l = n,
					o._strict = i,
					o._isUTC = !1,
					o._pf = a(),
					de(o)
				},
				Te.suppressDeprecationWarnings = !1,
				Te.createFromInputFallback = s("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
					t._d = new Date(t._i + (t._useUTC ? " UTC": ""))
				}),
				Te.min = function () {
					var t = [].slice.call(arguments, 0);
					return Me("isBefore", t)
				},
				Te.max = function () {
					var t = [].slice.call(arguments, 0);
					return Me("isAfter", t)
				},
				Te.utc = function (t, e, n, i) {
					var o;
					return "boolean" == typeof n && (i = n, n = r),
					o = {},
					o._isAMomentObject = !0,
					o._useUTC = !0,
					o._isUTC = !0,
					o._l = n,
					o._i = t,
					o._f = e,
					o._strict = i,
					o._pf = a(),
					de(o).utc()
				},
				Te.unix = function (t) {
					return Te(1e3 * t)
				},
				Te.duration = function (t, e) {
					var n, r, i, a, c = t,
					s = null;
					return Te.isDuration(t) ? c = {
						ms: t._milliseconds,
						d: t._days,
						M: t._months
					}: "number" == typeof t ? (c = {},
					e ? c[e] = t: c.milliseconds = t) : (s = je.exec(t)) ? (n = "-" === s[1] ? -1 : 1, c = {
						y: 0,
						d: S(s[Ee]) * n,
						h: S(s[Be]) * n,
						m: S(s[Ce]) * n,
						s: S(s[Xe]) * n,
						ms: S(s[Re]) * n
					}) : (s = He.exec(t)) ? (n = "-" === s[1] ? -1 : 1, i = function (t) {
						var e = t && parseFloat(t.replace(",", "."));
						return (isNaN(e) ? 0 : e) * n
					},
					c = {
						y: i(s[2]),
						M: i(s[3]),
						d: i(s[4]),
						h: i(s[5]),
						m: i(s[6]),
						s: i(s[7]),
						w: i(s[8])
					}) : null == c ? c = {}: "object" == typeof c && ("from" in c || "to" in c) && (a = z(Te(c.from), Te(c.to)), c = {},
					c.ms = a.milliseconds, c.M = a.months),
					r = new g(c),
					Te.isDuration(t) && o(t, "_locale") && (r._locale = t._locale),
					r
				},
				Te.version = we,
				Te.defaultFormat = ln,
				Te.ISO_8601 = function () {},
				Te.momentProperties = De,
				Te.updateOffset = function () {},
				Te.relativeTimeThreshold = function (t, e) {
					return mn[t] === r ? !1 : e === r ? mn[t] : (mn[t] = e, !0)
				},
				Te.lang = s("moment.lang is deprecated. Use moment.locale instead.", function (t, e) {
					return Te.locale(t, e)
				}),
				Te.locale = function (t, e) {
					var n;
					return t && (n = "undefined" != typeof e ? Te.defineLocale(t, e) : Te.localeData(t), n && (Te.duration._locale = Te._locale = n)),
					Te._locale._abbr
				},
				Te.defineLocale = function (t, e) {
					return null !== e ? (e.abbr = t, ke[t] || (ke[t] = new d), ke[t].set(e), Te.locale(t), ke[t]) : (delete ke[t], null)
				},
				Te.langData = s("moment.langData is deprecated. Use moment.localeData instead.", function (t) {
					return Te.localeData(t)
				}),
				Te.localeData = function (t) {
					var e;
					if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Te._locale;
					if (!O(t)) {
						if (e = P(t)) return e;
						t = [t]
					}
					return D(t)
				},
				Te.isMoment = function (t) {
					return t instanceof M || null != t && o(t, "_isAMomentObject")
				},
				Te.isDuration = function (t) {
					return t instanceof g
				};
				for (Le = _n.length - 1; Le >= 0; --Le) x(_n[Le]);
				Te.normalizeUnits = function (t) {
					return N(t)
				},
				Te.invalid = function (t) {
					var e = Te.utc(0 / 0);
					return null != t ? b(e._pf, t) : e._pf.userInvalidated = !0,
					e
				},
				Te.parseZone = function () {
					return Te.apply(null, arguments).parseZone()
				},
				Te.parseTwoDigitYear = function (t) {
					return S(t) + (S(t) > 68 ? 1900 : 2e3)
				},
				Te.isDate = L,
				b(Te.fn = M.prototype, {
					clone: function () {
						return Te(this)
					},
					valueOf: function () {
						return + this._d - 6e4 * (this._offset || 0)
					},
					unix: function () {
						return Math.floor( + this / 1e3)
					},
					toString: function () {
						return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
					},
					toDate: function () {
						return this._offset ? new Date( + this) : this._d
					},
					toISOString: function () {
						var t = Te(this).utc();
						return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : U(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : U(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
					},
					toArray: function () {
						var t = this;
						return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
					},
					isValid: function () {
						return R(this)
					},
					isDSTShifted: function () {
						return this._a ? this.isValid() && w(this._a, (this._isUTC ? Te.utc(this._a) : Te(this._a)).toArray()) > 0 : !1
					},
					parsingFlags: function () {
						return b({},
						this._pf)
					},
					invalidAt: function () {
						return this._pf.overflow
					},
					utc: function (t) {
						return this.utcOffset(0, t)
					},
					local: function (t) {
						return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(this._dateUtcOffset(), "m")),
						this
					},
					format: function (t) {
						var e = U(this, t || Te.defaultFormat);
						return this.localeData().postformat(e)
					},
					add: _(1, "add"),
					subtract: _( - 1, "subtract"),
					diff: function (t, e, n) {
						var r, i, o = I(t, this),
						a = 6e4 * (o.utcOffset() - this.utcOffset());
						return e = N(e),
						"year" === e || "month" === e || "quarter" === e ? (i = f(this, o), "quarter" === e ? i /= 3 : "year" === e && (i /= 12)) : (r = this - o, i = "second" === e ? r / 1e3: "minute" === e ? r / 6e4: "hour" === e ? r / 36e5: "day" === e ? (r - a) / 864e5: "week" === e ? (r - a) / 6048e5: r),
						n ? i: v(i)
					},
					from: function (t, e) {
						return Te.duration({
							to: this,
							from: t
						}).locale(this.locale()).humanize(!e)
					},
					fromNow: function (t) {
						return this.from(Te(), t)
					},
					calendar: function (t) {
						var e = t || Te(),
						n = I(e, this).startOf("day"),
						r = this.diff(n, "days", !0),
						i = -6 > r ? "sameElse": -1 > r ? "lastWeek": 0 > r ? "lastDay": 1 > r ? "sameDay": 2 > r ? "nextDay": 7 > r ? "nextWeek": "sameElse";
						return this.format(this.localeData().calendar(i, this, Te(e)))
					},
					isLeapYear: function () {
						return C(this.year())
					},
					isDST: function () {
						return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
					},
					day: function (t) {
						var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
						return null != t ? (t = ue(t, this.localeData()), this.add(t - e, "d")) : e
					},
					month: ve("Month", !0),
					startOf: function (t) {
						switch (t = N(t)) {
						case "year":
							this.month(0);
						case "quarter":
						case "month":
							this.date(1);
						case "week":
						case "isoWeek":
						case "day":
							this.hours(0);
						case "hour":
							this.minutes(0);
						case "minute":
							this.seconds(0);
						case "second":
							this.milliseconds(0)
						}
						return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1),
						"quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
						this
					},
					endOf: function (t) {
						return t = N(t),
						t === r || "millisecond" === t ? this: this.startOf(t).add(1, "isoWeek" === t ? "week": t).subtract(1, "ms")
					},
					isAfter: function (t, e) {
						var n;
						return e = N("undefined" != typeof e ? e: "millisecond"),
						"millisecond" === e ? (t = Te.isMoment(t) ? t: Te(t), +this > +t) : (n = Te.isMoment(t) ? +t: +Te(t), n < +this.clone().startOf(e))
					},
					isBefore: function (t, e) {
						var n;
						return e = N("undefined" != typeof e ? e: "millisecond"),
						"millisecond" === e ? (t = Te.isMoment(t) ? t: Te(t), +t > +this) : (n = Te.isMoment(t) ? +t: +Te(t), +this.clone().endOf(e) < n)
					},
					isBetween: function (t, e, n) {
						return this.isAfter(t, n) && this.isBefore(e, n)
					},
					isSame: function (t, e) {
						var n;
						return e = N(e || "millisecond"),
						"millisecond" === e ? (t = Te.isMoment(t) ? t: Te(t), +this === +t) : (n = +Te(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
					},
					min: s("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (t) {
						return t = Te.apply(null, arguments),
						this > t ? this: t
					}),
					max: s("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (t) {
						return t = Te.apply(null, arguments),
						t > this ? this: t
					}),
					zone: s("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (t, e) {
						return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
					}),
					utcOffset: function (t, e) {
						var n, r = this._offset || 0;
						return null != t ? ("string" == typeof t && (t = G(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (n = this._dateUtcOffset()), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), r !== t && (!e || this._changeInProgress ? T(this, Te.duration(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, Te.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r: this._dateUtcOffset()
					},
					isLocal: function () {
						return ! this._isUTC
					},
					isUtcOffset: function () {
						return this._isUTC
					},
					isUtc: function () {
						return this._isUTC && 0 === this._offset
					},
					zoneAbbr: function () {
						return this._isUTC ? "UTC": ""
					},
					zoneName: function () {
						return this._isUTC ? "Coordinated Universal Time": ""
					},
					parseZone: function () {
						return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(G(this._i)),
						this
					},
					hasAlignedHourOffset: function (t) {
						return t = t ? Te(t).utcOffset() : 0,
						(this.utcOffset() - t)%60 === 0
					},
					daysInMonth: function () {
						return W(this.year(), this.month())
					},
					dayOfYear: function (t) {
						var e = qe((Te(this).startOf("day") - Te(this).startOf("year")) / 864e5) + 1;
						return null == t ? e: this.add(t - e, "d")
					},
					quarter: function (t) {
						return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
					},
					weekYear: function (t) {
						var e = fe(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
						return null == t ? e: this.add(t - e, "y")
					},
					isoWeekYear: function (t) {
						var e = fe(this, 1, 4).year;
						return null == t ? e: this.add(t - e, "y")
					},
					week: function (t) {
						var e = this.localeData().week(this);
						return null == t ? e: this.add(7 * (t - e), "d")
					},
					isoWeek: function (t) {
						var e = fe(this, 1, 4).week;
						return null == t ? e: this.add(7 * (t - e), "d")
					},
					weekday: function (t) {
						var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
						return null == t ? e: this.add(t - e, "d")
					},
					isoWeekday: function (t) {
						return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t: t - 7)
					},
					isoWeeksInYear: function () {
						return E(this.year(), 1, 4)
					},
					weeksInYear: function () {
						var t = this.localeData()._week;
						return E(this.year(), t.dow, t.doy)
					},
					get: function (t) {
						return t = N(t),
						this[t]()
					},
					set: function (t, e) {
						var n;
						if ("object" == typeof t) for (n in t) this.set(n, t[n]);
						else t = N(t),
						"function" == typeof this[t] && this[t](e);
						return this
					},
					locale: function (t) {
						var e;
						return t === r ? this._locale._abbr: (e = Te.localeData(t), null != e && (this._locale = e), this)
					},
					lang: s("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
						return t === r ? this.localeData() : this.locale(t)
					}),
					localeData: function () {
						return this._locale
					},
					_dateUtcOffset: function () {
						return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
					}
				}),
				Te.fn.millisecond = Te.fn.milliseconds = ve("Milliseconds", !1),
				Te.fn.second = Te.fn.seconds = ve("Seconds", !1),
				Te.fn.minute = Te.fn.minutes = ve("Minutes", !1),
				Te.fn.hour = Te.fn.hours = ve("Hours", !0),
				Te.fn.date = ve("Date", !0),
				Te.fn.dates = s("dates accessor is deprecated. Use date instead.", ve("Date", !0)),
				Te.fn.year = ve("FullYear", !0),
				Te.fn.years = s("years accessor is deprecated. Use year instead.", ve("FullYear", !0)),
				Te.fn.days = Te.fn.day,
				Te.fn.months = Te.fn.month,
				Te.fn.weeks = Te.fn.week,
				Te.fn.isoWeeks = Te.fn.isoWeek,
				Te.fn.quarters = Te.fn.quarter,
				Te.fn.toJSON = Te.fn.toISOString,
				Te.fn.isUTC = Te.fn.isUtc,
				b(Te.duration.fn = g.prototype, {
					_bubble: function () {
						var t, e, n, r = this._milliseconds,
						i = this._days,
						o = this._months,
						a = this._data,
						c = 0;
						a.milliseconds = r%1e3,
						t = v(r / 1e3),
						a.seconds = t%60,
						e = v(t / 60),
						a.minutes = e%60,
						n = v(e / 60),
						a.hours = n%24,
						i += v(n / 24),
						c = v(Ae(i)),
						i -= v(ye(c)),
						o += v(i / 30),
						i %= 30,
						c += v(o / 12),
						o %= 12,
						a.days = i,
						a.months = o,
						a.years = c
					},
					abs: function () {
						return this._milliseconds = Math.abs(this._milliseconds),
						this._days = Math.abs(this._days),
						this._months = Math.abs(this._months),
						this._data.milliseconds = Math.abs(this._data.milliseconds),
						this._data.seconds = Math.abs(this._data.seconds),
						this._data.minutes = Math.abs(this._data.minutes),
						this._data.hours = Math.abs(this._data.hours),
						this._data.months = Math.abs(this._data.months),
						this._data.years = Math.abs(this._data.years),
						this
					},
					weeks: function () {
						return v(this.days() / 7)
					},
					valueOf: function () {

						return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12)
					},
					humanize: function (t) {
						var e = pe(this, !t, this.localeData());
						return t && (e = this.localeData().pastFuture( + this, e)),
						this.localeData().postformat(e)
					},
					add: function (t, e) {
						var n = Te.duration(t, e);
						return this._milliseconds += n._milliseconds,
						this._days += n._days,
						this._months += n._months,
						this._bubble(),
						this
					},
					subtract: function (t, e) {
						var n = Te.duration(t, e);
						return this._milliseconds -= n._milliseconds,
						this._days -= n._days,
						this._months -= n._months,
						this._bubble(),
						this
					},
					get: function (t) {
						return t = N(t),
						this[t.toLowerCase() + "s"]()
					},
					as: function (t) {
						var e, n;
						if (t = N(t), "month" === t || "year" === t) return e = this._days + this._milliseconds / 864e5,
						n = this._months + 12 * Ae(e),
						"month" === t ? n: n / 12;
						switch (e = this._days + Math.round(ye(this._months / 12)), t) {
						case "week":
							return e / 7 + this._milliseconds / 6048e5;
						case "day":
							return e + this._milliseconds / 864e5;
						case "hour":
							return 24 * e + this._milliseconds / 36e5;
						case "minute":
							return 24 * e * 60 + this._milliseconds / 6e4;
						case "second":
							return 24 * e * 60 * 60 + this._milliseconds / 1e3;
						case "millisecond":
							return Math.floor(24 * e * 60 * 60 * 1e3) + this._milliseconds;
						default:
							throw new Error("Unknown unit " + t)
						}
					},
					lang: Te.fn.lang,
					locale: Te.fn.locale,
					toIsoString: s("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
						return this.toISOString()
					}),
					toISOString: function () {
						var t = Math.abs(this.years()),
						e = Math.abs(this.months()),
						n = Math.abs(this.days()),
						r = Math.abs(this.hours()),
						i = Math.abs(this.minutes()),
						o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
						return this.asSeconds() ? (this.asSeconds() < 0 ? "-": "") + "P" + (t ? t + "Y": "") + (e ? e + "M": "") + (n ? n + "D": "") + (r || i || o ? "T": "") + (r ? r + "H": "") + (i ? i + "M": "") + (o ? o + "S": "") : "P0D"
					},
					localeData: function () {
						return this._locale
					},
					toJSON: function () {
						return this.toISOString()
					}
				}),
				Te.duration.fn.toString = Te.duration.fn.toISOString;
				for (Le in dn) o(dn, Le) && ze(Le.toLowerCase());
				Te.duration.fn.asMilliseconds = function () {
					return this.as("ms")
				},
				Te.duration.fn.asSeconds = function () {
					return this.as("s")
				},
				Te.duration.fn.asMinutes = function () {
					return this.as("m")
				},
				Te.duration.fn.asHours = function () {
					return this.as("h")
				},
				Te.duration.fn.asDays = function () {
					return this.as("d")
				},
				Te.duration.fn.asWeeks = function () {
					return this.as("weeks")
				},
				Te.duration.fn.asMonths = function () {
					return this.as("M")
				},
				Te.duration.fn.asYears = function () {
					return this.as("y")
				},
				Te.locale("en", {
					ordinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function (t) {
						var e = t%10,
						n = 1 === S(t%100 / 10) ? "th": 1 === e ? "st": 2 === e ? "nd": 3 === e ? "rd": "th";
						return t + n
					}
				}),
				Pe ? e.exports = Te: "function" == typeof define && define.amd ? (define(function (t, e, n) {
					return n.config && n.config() && n.config().noGlobal === !0 && (Ne.moment = Oe),
					Te
				}), _e(!0)) : _e()
			}).call(this)
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	104 : [function (t, e) { !
		function (t, n) {
			var r = {
				version: "2.3.0",
				areas: {},
				apis: {},
				inherit: function (t, e) {
					for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
					return e
				},
				stringify: function (t) {
					return void 0 === t || "function" == typeof t ? t + "": JSON.stringify(t)
				},
				parse: function (t) {
					try {
						return JSON.parse(t)
					} catch(e) {
						return t
					}
				},
				fn: function (t, e) {
					r.storeAPI[t] = e;
					for (var n in r.apis) r.apis[n][t] = e
				},
				get: function (t, e) {
					return t.getItem(e)
				},
				set: function (t, e, n) {
					t.setItem(e, n)
				},
				remove: function (t, e) {
					t.removeItem(e)
				},
				key: function (t, e) {
					return t.key(e)
				},
				length: function (t) {
					return t.length
				},
				clear: function (t) {
					t.clear()
				},
				Store: function (t, e, n) {
					var i = r.inherit(r.storeAPI, function (t, e, n) {
						return 0 === arguments.length ? i.getAll() : void 0 !== e ? i.set(t, e, n) : "string" == typeof t ? i.get(t) : t ? i.setAll(t, e) : i.clear()
					});
					i._id = t;
					try {
						var o = "_safariPrivate_";
						e.setItem(o, "sucks"),
						i._area = e,
						e.removeItem(o)
					} catch(a) {}
					return i._area || (i._area = r.inherit(r.storageAPI, {
						items: {},
						name: "fake"
					})),
					i._ns = n || "",
					r.areas[t] || (r.areas[t] = i._area),
					r.apis[i._ns + i._id] || (r.apis[i._ns + i._id] = i),
					i
				},
				storeAPI: {
					area: function (t, e) {
						var n = this[t];
						return n && n.area || (n = r.Store(t, e, this._ns), this[t] || (this[t] = n)),
						n
					},
					namespace: function (t, e) {
						if (!t) return this._ns ? this._ns.substring(0, this._ns.length - 1) : "";
						var n = t,
						i = this[n];
						return i && i.namespace || (i = r.Store(this._id, this._area, this._ns + n + "."), this[n] || (this[n] = i), e || i.area("session", r.areas.session)),
						i
					},
					isFake: function () {
						return "fake" === this._area.name
					},
					toString: function () {
						return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]"
					},
					has: function (t) {
						return this._area.has ? this._area.has(this._in(t)) : !!(this._in(t) in this._area)
					},
					size: function () {
						return this.keys().length
					},
					each: function (t, e) {
						for (var n = 0, i = r.length(this._area); i > n; n++) {
							var o = this._out(r.key(this._area, n));
							if (void 0 !== o && t.call(this, o, e || this.get(o)) === !1) break;
							i > r.length(this._area) && (i--, n--)
						}
						return e || this
					},
					keys: function () {
						return this.each(function (t, e) {
							e.push(t)
						},
						[])
					},
					get: function (t, e) {
						var n = r.get(this._area, this._in(t));
						return null !== n ? r.parse(n) : e || n
					},
					getAll: function () {
						return this.each(function (t, e) {
							e[t] = this.get(t)
						},
						{})
					},
					set: function (t, e, n) {
						var i = this.get(t);
						return null != i && n === !1 ? e: r.set(this._area, this._in(t), r.stringify(e), n) || i
					},
					setAll: function (t, e) {
						var n, r;
						for (var i in t) r = t[i],
						this.set(i, r, e) !== r && (n = !0);
						return n
					},
					remove: function (t) {
						var e = this.get(t);
						return r.remove(this._area, this._in(t)),
						e
					},
					clear: function () {
						return this._ns ? this.each(function (t) {
							r.remove(this._area, this._in(t))
						},
						1) : r.clear(this._area),
						this
					},
					clearAll: function () {
						var t = this._area;
						for (var e in r.areas) r.areas.hasOwnProperty(e) && (this._area = r.areas[e], this.clear());
						return this._area = t,
						this
					},
					_in: function (t) {
						return "string" != typeof t && (t = r.stringify(t)),
						this._ns ? this._ns + t: t
					},
					_out: function (t) {
						return this._ns ? t && 0 === t.indexOf(this._ns) ? t.substring(this._ns.length) : void 0 : t
					}
				},
				storageAPI: {
					length: 0,
					has: function (t) {
						return this.items.hasOwnProperty(t)
					},
					key: function (t) {
						var e = 0;
						for (var n in this.items) if (this.has(n) && t === e++) return n
					},
					setItem: function (t, e) {
						this.has(t) || this.length++,
						this.items[t] = e
					},
					removeItem: function (t) {
						this.has(t) && (delete this.items[t], this.length--)
					},
					getItem: function (t) {
						return this.has(t) ? this.items[t] : null
					},
					clear: function () {
						for (var t in this.list) this.removeItem(t)
					},
					toString: function () {
						return this.length + " items in " + this.name + "Storage"
					}
				}
			};
			t.store && (r.conflict = t.store);
			var i = r.Store("local", function () {
				try {
					return localStorage
				} catch(t) {}
			} ());
			i.local = i,
			i._ = r,
			i.area("session", function () {
				try {
					return sessionStorage
				} catch(t) {}
			} ()),
			t.store = i,
			"function" == typeof n && void 0 !== n.amd ? n(function () {
				return i
			}) : "undefined" != typeof e && e.exports && (e.exports = i)
		} (this, this.define)
	},
	{}],
	105 : [function (t, e) {
		e.exports = t(89)
	},
	{}],
	106 : [function (t, e) {
		var n, r, i, o, a = function (t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		},
		c = [].slice,
		s = {}.hasOwnProperty,
		u = function (t, e) {
			function n() {
				this.constructor = t
			}
			for (var r in e) s.call(e, r) && (t[r] = e[r]);
			return n.prototype = e.prototype,
			t.prototype = new n,
			t.__super__ = e.prototype,
			t
		};
		o = t(105),
		e.exports = n = function () {
			function t(t, e) {
				this.serialize = a(this.serialize, this),
				this.toString = a(this.toString, this),
				this.id = a(this.id, this),
				this.type = a(this.type, this),
				this._type = t,
				this._id = e
			}
			return t.stringSeparator = ":",
			t.prototype.type = function () {
				return this._type
			},
			t.prototype.id = function () {
				return this._id
			},
			t.prototype.toString = function () {
				return "<EventIdentifier '" + this.serialize() + "'>"
			},
			t.prototype.serialize = function () {
				return "" + this.type() + ":" + this.id()
			},
			t.prototype.name = function () {
				throw Error("Must be subclassed")
			},
			t.factory = function (e) {
				var n, r, i, o;
				if (e) return o = e.split(t.stringSeparator),
				i = o[0],
				r = 2 <= o.length ? c.call(o, 1) : [],
				n = r.join(t.stringSeparator),
				t.factoryPair(i, n)
			},
			t.factoryPair = function (t, e) {
				switch (t) {
				case "builtin":
				case "custom":
					return new r(t, e);
				case "symbol":
					return new i(t, e);
				default:
					return null
				}
			},
			t.builtin = function (e) {
				return t.factoryPair("builtin", e)
			},
			t
		} (),
		r = function (t) {
			function e() {
				return this.name = a(this.name, this),
				e.__super__.constructor.apply(this, arguments)
			}
			return u(e, t),
			e.prototype.name = function () {
				return this.id()
			},
			e
		} (n),
		i = function (t) {
			function e() {
				return this.symbol = a(this.symbol, this),
				this.name = a(this.name, this),
				e.__super__.constructor.apply(this, arguments)
			}
			return u(e, t),
			e.prototype.name = function (t) {
				var e, n, r;
				return n = t.symbols,
				e = this.symbol(n),
				null != (r = null != e && "function" == typeof e.get ? e.get("name") : void 0) ? r: null != e ? e.name: void 0
			},
			e.prototype.symbol = function (t) {
				return null != t.findWhere ? t.findWhere({
					id: this.id()
				}) : o.findWhere(t, {
					id: this.id()
				})
			},
			e
		} (n)
	},
	{}],
	107 : [function (t, e) {
		e.exports = function (t) {
			return t.mixin({
				decapitalize: function (t) {
					return "" + t[0].toLowerCase() + t.slice(1)
				},
				grouped: function (e, n) {
					var r;
					return r = Math.ceil(e.length / n),
					t.range(r).map(function (t) {
						var r, i;
						return r = n * t,
						i = n * (t + 1),
						e.slice(r, i)
					})
				},
				mapKeys: function (e, n) {
					return t(e).chain().pairs().map(function (t) {
						var e, r;
						return e = t[0],
						r = t[1],
						[n(e), r]
					}).object().value()
				},
				nullify: function (e) {
					return t.isObject(e) ? t(e).chain().map(function (e, n) {
						return [n, t.nullify(e)]
					}).object().value() : null
				},
				duplicates: function (e) {
					return t(e).chain().countBy().filter(function (t) {
						return t > 1
					}).keys().value()
				},
				sliding: function (e, n) {
					var r, i, o, a, c;
					if (0 >= n || n > e.length) throw RangeError("Invalid size " + n + " for list of length " + e.length);
					for (a = t.range(e.length - n + 1), c = [], i = 0, o = a.length; o > i; i++) r = a[i],
					c.push(e.slice(r, r + n));
					return c
				}
			}),
			t
		}
	},
	{}]
},
{},
[1]);
//# sourceMappingURL=ved.js.map
