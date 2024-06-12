const sparkline = function(t) {
	var e = {};

	function r(n) {
		if (e[n]) return e[n].exports;
		var o = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
	}
	return r.m = t, r.c = e, r.d = function(t, e, n) {
		r.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, r.t = function(t, e) {
		if (1 & e && (t = r(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var o in t) r.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, r.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return r.d(e, "a", e), e
	}, r.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, r.p = "", r(r.s = 1)
}([function(t, e, r) {
	var n = r(2),
		o = r(3),
		i = r(4);
	t.exports = function(t) {
		return n(t) || o(t) || i()
	}
}, function(t, e, r) {
	"use strict";
	r.r(e), r.d(e, "sparkline", function() {
		return c
	});
	var n = r(0),
		o = r.n(n);

	function i(t, e, r, n) {
		return parseFloat((e - n * e / t + r).toFixed(2))
	}

	function a(t) {
		return t.value
	}

	function u(t, e) {
		var r = document.createElementNS("http://www.w3.org/2000/svg", t);
		for (var n in e) r.setAttribute(n, e[n]);
		return r
	}

	function c(t, e, r) {
		var n;
		if (n = t, o()(n.querySelectorAll("*")).forEach(function(t) {
				return n.removeChild(t)
			}), !(e.length <= 1)) {
			r = r || {}, "number" == typeof e[0] && (e = e.map(function(t) {
				return {
					value: t
				}
			}));
			let c = r.onmousemove,
				l = r.onmouseout,
				s = "interactive" in r ? r.interactive : !!c,
				f = r.spotRadius || 2,
				p = 2 * f,
				d = r.cursorWidth || 2,
				v = parseFloat(t.attributes["stroke-width"].value),
				b = r.fetch || a,
				h = e.map(function(t) {
					return b(t)
				}),
				y = parseFloat(t.attributes.width.value) - 2 * p,
				x = parseFloat(t.attributes.height.value),
				m = x - 2 * v - p,
				g = Math.max.apply(Math, o()(h)),
				A = -1e3,
				w = h.length - 1,
				j = y / w,
				k = [],
				O = i(g, m, v + f, h[0]),
				S = "M".concat(p, " ").concat(O);
			h.forEach(function(t, r) {
				var n = r * j + p,
					o = i(g, m, v + f, t);
				k.push(Object.assign({}, e[r], {
					index: r,
					x: n,
					y: o
				})), S += " L ".concat(n, " ").concat(o)
			});
			var M = u("path", {
					class: "sparkline--line",
					d: S,
					fill: "none"
				}),
				C = u("path", {
					class: "sparkline--fill",
					d: "".concat(S, " V ").concat(x, " L ").concat(p, " ").concat(x, " Z"),
					stroke: "none"
				});
			if (t.appendChild(C), t.appendChild(M), s) {
				var E = u("line", {
						class: "sparkline--cursor",
						x1: A,
						x2: A,
						y1: 0,
						y2: x,
						"stroke-width": d
					}),
					_ = u("circle", {
						class: "sparkline--spot",
						cx: A,
						cy: A,
						r: f
					});
				t.appendChild(E), t.appendChild(_);
				var F = u("rect", {
					width: t.attributes.width.value,
					height: t.attributes.height.value,
					style: "fill: transparent; stroke: transparent",
					class: "sparkline--interaction-layer"
				});
				t.appendChild(F), F.addEventListener("mouseout", function(t) {
					E.setAttribute("x1", A), E.setAttribute("x2", A), _.setAttribute("cx", A), l && l(t)
				}), F.addEventListener("mousemove", function(t) {
					const scaleX = F.getBoundingClientRect().width / F.getAttribute("width");
					console.log(scaleX)
					var e = t.offsetX / scaleX,
						r = k.find(function(t) {
							return t.x >= e
						});
					r || (r = k[w]);
					var n, o = k[k.indexOf(r) - 1],
						i = (n = o ? o.x + (r.x - o.x) / 2 <= e ? r : o : r).x,
						a = n.y;
					_.setAttribute("cx", i), _.setAttribute("cy", a), E.setAttribute("x1", i), E.setAttribute("x2", i), c && c(t, n)
				})
			}
		}
	}
	e.default = c
}, function(t, e) {
	t.exports = function(t) {
		if (Array.isArray(t)) {
			for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
			return r
		}
	}
}, function(t, e) {
	t.exports = function(t) {
		if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
	}
}, function(t, e) {
	t.exports = function() {
		throw new TypeError("Invalid attempt to spread non-iterable instance")
	}
}]);