! function(a, b) {
  function c(a) {
      var b = a.length,
          c = ia.type(a);
      return ia.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
  }

  function d(a) {
      var b = xa[a] = {};
      return ia.each(a.match(ka) || [], function(a, c) {
          b[c] = !0
      }), b
  }

  function e(a, c, d, e) {
      if (ia.acceptData(a)) {
          var f, g, h = ia.expando,
              i = "string" == typeof c,
              j = a.nodeType,
              k = j ? ia.cache : a,
              l = j ? a[h] : a[h] && h;
          if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = _.pop() || ia.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = ia.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = ia.extend(k[l], c) : k[l].data = ia.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[ia.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[ia.camelCase(c)])) : g = f, g
      }
  }

  function f(a, b, c) {
      if (ia.acceptData(a)) {
          var d, e, f, g = a.nodeType,
              i = g ? ia.cache : a,
              j = g ? a[ia.expando] : ia.expando;
          if (i[j]) {
              if (b && (f = c ? i[j] : i[j].data)) {
                  ia.isArray(b) ? b = b.concat(ia.map(b, ia.camelCase)) : b in f ? b = [b] : (b = ia.camelCase(b), b = b in f ? [b] : b.split(" "));
                  for (d = 0, e = b.length; e > d; d++) delete f[b[d]];
                  if (!(c ? h : ia.isEmptyObject)(f)) return
              }(c || (delete i[j].data, h(i[j]))) && (g ? ia.cleanData([a], !0) : ia.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
          }
      }
  }

  function g(a, c, d) {
      if (d === b && 1 === a.nodeType) {
          var e = "data-" + c.replace(za, "-$1").toLowerCase();
          if (d = a.getAttribute(e), "string" == typeof d) {
              try {
                  d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : ya.test(d) ? ia.parseJSON(d) : d
              } catch (f) {}
              ia.data(a, c, d)
          } else d = b
      }
      return d
  }

  function h(a) {
      var b;
      for (b in a)
          if (("data" !== b || !ia.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
      return !0
  }

  function i() {
      return !0
  }

  function j() {
      return !1
  }

  function k(a, b) {
      do a = a[b]; while (a && 1 !== a.nodeType);
      return a
  }

  function l(a, b, c) {
      if (b = b || 0, ia.isFunction(b)) return ia.grep(a, function(a, d) {
          var e = !!b.call(a, d, a);
          return e === c
      });
      if (b.nodeType) return ia.grep(a, function(a) {
          return a === b === c
      });
      if ("string" == typeof b) {
          var d = ia.grep(a, function(a) {
              return 1 === a.nodeType
          });
          if (Ra.test(b)) return ia.filter(b, d, !c);
          b = ia.filter(b, d)
      }
      return ia.grep(a, function(a) {
          return ia.inArray(a, b) >= 0 === c
      })
  }

  function m(a) {
      var b = Ua.split("|"),
          c = a.createDocumentFragment();
      if (c.createElement)
          for (; b.length;) c.createElement(b.pop());
      return c
  }

  function n(a, b) {
      return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
  }

  function o(a) {
      var b = a.getAttributeNode("type");
      return a.type = (b && b.specified) + "/" + a.type, a
  }

  function p(a) {
      var b = eb.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function q(a, b) {
      for (var c, d = 0; null != (c = a[d]); d++) ia._data(c, "globalEval", !b || ia._data(b[d], "globalEval"))
  }

  function r(a, b) {
      if (1 === b.nodeType && ia.hasData(a)) {
          var c, d, e, f = ia._data(a),
              g = ia._data(b, f),
              h = f.events;
          if (h) {
              delete g.handle, g.events = {};
              for (c in h)
                  for (d = 0, e = h[c].length; e > d; d++) ia.event.add(b, c, h[c][d])
          }
          g.data && (g.data = ia.extend({}, g.data))
      }
  }

  function s(a, b) {
      var c, d, e;
      if (1 === b.nodeType) {
          if (c = b.nodeName.toLowerCase(), !ia.support.noCloneEvent && b[ia.expando]) {
              e = ia._data(b);
              for (d in e.events) ia.removeEvent(b, d, e.handle);
              b.removeAttribute(ia.expando)
          }
          "script" === c && b.text !== a.text ? (o(b).text = a.text, p(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ia.support.html5Clone && a.innerHTML && !ia.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
      }
  }

  function t(a, c) {
      var d, e, f = 0,
          g = typeof a.getElementsByTagName !== V ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== V ? a.querySelectorAll(c || "*") : b;
      if (!g)
          for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ia.nodeName(e, c) ? g.push(e) : ia.merge(g, t(e, c));
      return c === b || c && ia.nodeName(a, c) ? ia.merge([a], g) : g
  }

  function u(a) {
      bb.test(a.type) && (a.defaultChecked = a.checked)
  }

  function v(a, b) {
      if (b in a) return b;
      for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yb.length; e--;)
          if (b = yb[e] + c, b in a) return b;
      return d
  }

  function w(a, b) {
      return a = b || a, "none" === ia.css(a, "display") || !ia.contains(a.ownerDocument, a)
  }

  function x(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ia._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && w(d) && (f[g] = ia._data(d, "olddisplay", B(d.nodeName)))) : f[g] || (e = w(d), (c && "none" !== c || !e) && ia._data(d, "olddisplay", e ? c : ia.css(d, "display"))));
      for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
      return a
  }

  function y(a, b, c) {
      var d = rb.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function z(a, b, c, d, e) {
      for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ia.css(a, c + xb[f], !0, e)), d ? ("content" === c && (g -= ia.css(a, "padding" + xb[f], !0, e)), "margin" !== c && (g -= ia.css(a, "border" + xb[f] + "Width", !0, e))) : (g += ia.css(a, "padding" + xb[f], !0, e), "padding" !== c && (g += ia.css(a, "border" + xb[f] + "Width", !0, e)));
      return g
  }

  function A(a, b, c) {
      var d = !0,
          e = "width" === b ? a.offsetWidth : a.offsetHeight,
          f = kb(a),
          g = ia.support.boxSizing && "border-box" === ia.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
          if (e = lb(a, b, f), (0 > e || null == e) && (e = a.style[b]), sb.test(e)) return e;
          d = g && (ia.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
      }
      return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function B(a) {
      var b = W,
          c = ub[a];
      return c || (c = C(a, b), "none" !== c && c || (jb = (jb || ia("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jb[0].contentWindow || jb[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = C(a, b), jb.detach()), ub[a] = c), c
  }

  function C(a, b) {
      var c = ia(b.createElement(a)).appendTo(b.body),
          d = ia.css(c[0], "display");
      return c.remove(), d
  }

  function D(a, b, c, d) {
      var e;
      if (ia.isArray(b)) ia.each(b, function(b, e) {
          c || Ab.test(a) ? d(a, e) : D(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
      });
      else if (c || "object" !== ia.type(b)) d(a, b);
      else
          for (e in b) D(a + "[" + e + "]", b[e], c, d)
  }

  function E(a) {
      return function(b, c) {
          "string" != typeof b && (c = b, b = "*");
          var d, e = 0,
              f = b.toLowerCase().match(ka) || [];
          if (ia.isFunction(c))
              for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
      }
  }

  function F(a, c, d, e) {
      function f(i) {
          var j;
          return g[i] = !0, ia.each(a[i] || [], function(a, i) {
              var k = i(c, d, e);
              return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
          }), j
      }
      var g = {},
          h = a === Rb;
      return f(c.dataTypes[0]) || !g["*"] && f("*")
  }

  function G(a, c) {
      var d, e, f = ia.ajaxSettings.flatOptions || {};
      for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
      return d && ia.extend(!0, a, d), a
  }

  function H(a, c, d) {
      var e, f, g, h, i = a.contents,
          j = a.dataTypes,
          k = a.responseFields;
      for (h in k) h in d && (c[k[h]] = d[h]);
      for (;
          "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
      if (f)
          for (h in i)
              if (i[h] && i[h].test(f)) {
                  j.unshift(h);
                  break
              } if (j[0] in d) g = j[0];
      else {
          for (h in d) {
              if (!j[0] || a.converters[h + " " + j[0]]) {
                  g = h;
                  break
              }
              e || (e = h)
          }
          g = g || e
      }
      return g ? (g !== j[0] && j.unshift(g), d[g]) : b
  }

  function I(a, b) {
      var c, d, e, f, g = {},
          h = 0,
          i = a.dataTypes.slice(),
          j = i[0];
      if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1])
          for (e in a.converters) g[e.toLowerCase()] = a.converters[e];
      for (; d = i[++h];)
          if ("*" !== d) {
              if ("*" !== j && j !== d) {
                  if (e = g[j + " " + d] || g["* " + d], !e)
                      for (c in g)
                          if (f = c.split(" "), f[1] === d && (e = g[j + " " + f[0]] || g["* " + f[0]])) {
                              e === !0 ? e = g[c] : g[c] !== !0 && (d = f[0], i.splice(h--, 0, d));
                              break
                          } if (e !== !0)
                      if (e && a["throws"]) b = e(b);
                      else try {
                          b = e(b)
                      } catch (k) {
                          return {
                              state: "parsererror",
                              error: e ? k : "No conversion from " + j + " to " + d
                          }
                      }
              }
              j = d
          } return {
          state: "success",
          data: b
      }
  }

  function J() {
      try {
          return new a.XMLHttpRequest
      } catch (b) {}
  }

  function K() {
      try {
          return new a.ActiveXObject("Microsoft.XMLHTTP")
      } catch (b) {}
  }

  function L() {
      return setTimeout(function() {
          $b = b
      }), $b = ia.now()
  }

  function M(a, b) {
      ia.each(b, function(b, c) {
          for (var d = (ec[b] || []).concat(ec["*"]), e = 0, f = d.length; f > e; e++)
              if (d[e].call(a, b, c)) return
      })
  }

  function N(a, b, c) {
      var d, e, f = 0,
          g = dc.length,
          h = ia.Deferred().always(function() {
              delete i.elem
          }),
          i = function() {
              if (e) return !1;
              for (var b = $b || L(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
              return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
          },
          j = h.promise({
              elem: a,
              props: ia.extend({}, b),
              opts: ia.extend(!0, {
                  specialEasing: {}
              }, c),
              originalProperties: b,
              originalOptions: c,
              startTime: $b || L(),
              duration: c.duration,
              tweens: [],
              createTween: function(b, c) {
                  var d = ia.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                  return j.tweens.push(d), d
              },
              stop: function(b) {
                  var c = 0,
                      d = b ? j.tweens.length : 0;
                  if (e) return this;
                  for (e = !0; d > c; c++) j.tweens[c].run(1);
                  return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
              }
          }),
          k = j.props;
      for (O(k, j.opts.specialEasing); g > f; f++)
          if (d = dc[f].call(j, a, k, j.opts)) return d;
      return M(j, k), ia.isFunction(j.opts.start) && j.opts.start.call(a, j), ia.fx.timer(ia.extend(i, {
          elem: a,
          anim: j,
          queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function O(a, b) {
      var c, d, e, f, g;
      for (e in a)
          if (d = ia.camelCase(e), f = b[d], c = a[e], ia.isArray(c) && (f = c[1], c = a[e] = c[0]), e !== d && (a[d] = c, delete a[e]), g = ia.cssHooks[d], g && "expand" in g) {
              c = g.expand(c), delete a[d];
              for (e in c) e in a || (a[e] = c[e], b[e] = f)
          } else b[d] = f
  }

  function P(a, b, c) {
      var d, e, f, g, h, i, j, k, l, m = this,
          n = a.style,
          o = {},
          p = [],
          q = a.nodeType && w(a);
      c.queue || (k = ia._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
          k.unqueued || l()
      }), k.unqueued++, m.always(function() {
          m.always(function() {
              k.unqueued--, ia.queue(a, "fx").length || k.empty.fire()
          })
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === ia.css(a, "display") && "none" === ia.css(a, "float") && (ia.support.inlineBlockNeedsLayout && "inline" !== B(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ia.support.shrinkWrapBlocks || m.always(function() {
          n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
      }));
      for (e in b)
          if (g = b[e], ac.exec(g)) {
              if (delete b[e], i = i || "toggle" === g, g === (q ? "hide" : "show")) continue;
              p.push(e)
          } if (f = p.length) {
          h = ia._data(a, "fxshow") || ia._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? ia(a).show() : m.done(function() {
              ia(a).hide()
          }), m.done(function() {
              var b;
              ia._removeData(a, "fxshow");
              for (b in o) ia.style(a, b, o[b])
          });
          for (e = 0; f > e; e++) d = p[e], j = m.createTween(d, q ? h[d] : 0), o[d] = h[d] || ia.style(a, d), d in h || (h[d] = j.start, q && (j.end = j.start, j.start = "width" === d || "height" === d ? 1 : 0))
      }
  }

  function Q(a, b, c, d, e) {
      return new Q.prototype.init(a, b, c, d, e)
  }

  function R(a, b) {
      var c, d = {
              height: a
          },
          e = 0;
      for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xb[e], d["margin" + c] = d["padding" + c] = a;
      return b && (d.opacity = d.width = a), d
  }

  function S(a) {
      return ia.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  var T, U, V = typeof b,
      W = a.document,
      X = a.location,
      Y = a.jQuery,
      Z = a.$,
      $ = {},
      _ = [],
      aa = "1.9.1",
      ba = _.concat,
      ca = _.push,
      da = _.slice,
      ea = _.indexOf,
      fa = $.toString,
      ga = $.hasOwnProperty,
      ha = aa.trim,
      ia = function(a, b) {
          return new ia.fn.init(a, b, U)
      },
      ja = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ka = /\S+/g,
      la = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ma = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      na = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      oa = /^[\],:{}\s]*$/,
      pa = /(?:^|:|,)(?:\s*\[)+/g,
      qa = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      ra = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      sa = /^-ms-/,
      ta = /-([\da-z])/gi,
      ua = function(a, b) {
          return b.toUpperCase()
      },
      va = function(a) {
          (W.addEventListener || "load" === a.type || "complete" === W.readyState) && (wa(), ia.ready())
      },
      wa = function() {
          W.addEventListener ? (W.removeEventListener("DOMContentLoaded", va, !1), a.removeEventListener("load", va, !1)) : (W.detachEvent("onreadystatechange", va), a.detachEvent("onload", va))
      };
  ia.fn = ia.prototype = {
      jquery: aa,
      constructor: ia,
      init: function(a, c, d) {
          var e, f;
          if (!a) return this;
          if ("string" == typeof a) {
              if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ma.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
              if (e[1]) {
                  if (c = c instanceof ia ? c[0] : c, ia.merge(this, ia.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : W, !0)), na.test(e[1]) && ia.isPlainObject(c))
                      for (e in c) ia.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                  return this
              }
              if (f = W.getElementById(e[2]), f && f.parentNode) {
                  if (f.id !== e[2]) return d.find(a);
                  this.length = 1, this[0] = f
              }
              return this.context = W, this.selector = a, this
          }
          return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ia.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ia.makeArray(a, this))
      },
      selector: "",
      length: 0,
      size: function() {
          return this.length
      },
      toArray: function() {
          return da.call(this)
      },
      get: function(a) {
          return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
      },
      pushStack: function(a) {
          var b = ia.merge(this.constructor(), a);
          return b.prevObject = this, b.context = this.context, b
      },
      each: function(a, b) {
          return ia.each(this, a, b)
      },
      ready: function(a) {
          return ia.ready.promise().done(a), this
      },
      slice: function() {
          return this.pushStack(da.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(a) {
          var b = this.length,
              c = +a + (0 > a ? b : 0);
          return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
      },
      map: function(a) {
          return this.pushStack(ia.map(this, function(b, c) {
              return a.call(b, c, b)
          }))
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: ca,
      sort: [].sort,
      splice: [].splice
  }, ia.fn.init.prototype = ia.fn, ia.extend = ia.fn.extend = function() {
      var a, c, d, e, f, g, h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
      for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ia.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
          if (null != (f = arguments[i]))
              for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ia.isPlainObject(d) || (c = ia.isArray(d))) ? (c ? (c = !1, g = a && ia.isArray(a) ? a : []) : g = a && ia.isPlainObject(a) ? a : {}, h[e] = ia.extend(k, g, d)) : d !== b && (h[e] = d));
      return h
  }, ia.extend({
      noConflict: function(b) {
          return a.$ === ia && (a.$ = Z), b && a.jQuery === ia && (a.jQuery = Y), ia
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
          a ? ia.readyWait++ : ia.ready(!0)
      },
      ready: function(a) {
          if (a === !0 ? !--ia.readyWait : !ia.isReady) {
              if (!W.body) return setTimeout(ia.ready);
              ia.isReady = !0, a !== !0 && --ia.readyWait > 0 || (T.resolveWith(W, [ia]), ia.fn.trigger && ia(W).trigger("ready").off("ready"))
          }
      },
      isFunction: function(a) {
          return "function" === ia.type(a)
      },
      isArray: Array.isArray || function(a) {
          return "array" === ia.type(a)
      },
      isWindow: function(a) {
          return null != a && a == a.window
      },
      isNumeric: function(a) {
          return !isNaN(parseFloat(a)) && isFinite(a)
      },
      type: function(a) {
          return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? $[fa.call(a)] || "object" : typeof a
      },
      isPlainObject: function(a) {
          if (!a || "object" !== ia.type(a) || a.nodeType || ia.isWindow(a)) return !1;
          try {
              if (a.constructor && !ga.call(a, "constructor") && !ga.call(a.constructor.prototype, "isPrototypeOf")) return !1
          } catch (c) {
              return !1
          }
          var d;
          for (d in a);
          return d === b || ga.call(a, d)
      },
      isEmptyObject: function(a) {
          var b;
          for (b in a) return !1;
          return !0
      },
      error: function(a) {
          throw Error(a)
      },
      parseHTML: function(a, b, c) {
          if (!a || "string" != typeof a) return null;
          "boolean" == typeof b && (c = b, b = !1), b = b || W;
          var d = na.exec(a),
              e = !c && [];
          return d ? [b.createElement(d[1])] : (d = ia.buildFragment([a], b, e), e && ia(e).remove(), ia.merge([], d.childNodes))
      },
      parseJSON: function(c) {
          return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = ia.trim(c), c && oa.test(c.replace(qa, "@").replace(ra, "]").replace(pa, ""))) ? Function("return " + c)() : (ia.error("Invalid JSON: " + c), b)
      },
      parseXML: function(c) {
          var d, e;
          if (!c || "string" != typeof c) return null;
          try {
              a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
          } catch (f) {
              d = b
          }
          return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ia.error("Invalid XML: " + c), d
      },
      noop: function() {},
      globalEval: function(b) {
          b && ia.trim(b) && (a.execScript || function(b) {
              a.eval.call(a, b)
          })(b)
      },
      camelCase: function(a) {
          return a.replace(sa, "ms-").replace(ta, ua)
      },
      nodeName: function(a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(a, b, d) {
          var e, f = 0,
              g = a.length,
              h = c(a);
          if (d) {
              if (h)
                  for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
              else
                  for (f in a)
                      if (e = b.apply(a[f], d), e === !1) break
          } else if (h)
              for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
          else
              for (f in a)
                  if (e = b.call(a[f], f, a[f]), e === !1) break;
          return a
      },
      trim: ha && !ha.call("\ufeff ") ? function(a) {
          return null == a ? "" : ha.call(a)
      } : function(a) {
          return null == a ? "" : (a + "").replace(la, "")
      },
      makeArray: function(a, b) {
          var d = b || [];
          return null != a && (c(Object(a)) ? ia.merge(d, "string" == typeof a ? [a] : a) : ca.call(d, a)), d
      },
      inArray: function(a, b, c) {
          var d;
          if (b) {
              if (ea) return ea.call(b, a, c);
              for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                  if (c in b && b[c] === a) return c
          }
          return -1
      },
      merge: function(a, c) {
          var d = c.length,
              e = a.length,
              f = 0;
          if ("number" == typeof d)
              for (; d > f; f++) a[e++] = c[f];
          else
              for (; c[f] !== b;) a[e++] = c[f++];
          return a.length = e, a
      },
      grep: function(a, b, c) {
          var d, e = [],
              f = 0,
              g = a.length;
          for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
          return e
      },
      map: function(a, b, d) {
          var e, f = 0,
              g = a.length,
              h = c(a),
              i = [];
          if (h)
              for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
          else
              for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
          return ba.apply([], i)
      },
      guid: 1,
      proxy: function(a, c) {
          var d, e, f;
          return "string" == typeof c && (f = a[c], c = a, a = f), ia.isFunction(a) ? (d = da.call(arguments, 2), e = function() {
              return a.apply(c || this, d.concat(da.call(arguments)))
          }, e.guid = a.guid = a.guid || ia.guid++, e) : b
      },
      access: function(a, c, d, e, f, g, h) {
          var i = 0,
              j = a.length,
              k = null == d;
          if ("object" === ia.type(d)) {
              f = !0;
              for (i in d) ia.access(a, c, i, d[i], !0, g, h)
          } else if (e !== b && (f = !0, ia.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                  return k.call(ia(a), c)
              })), c))
              for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
          return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
      },
      now: function() {
          return (new Date).getTime()
      }
  }), ia.ready.promise = function(b) {
      if (!T)
          if (T = ia.Deferred(), "complete" === W.readyState) setTimeout(ia.ready);
          else if (W.addEventListener) W.addEventListener("DOMContentLoaded", va, !1), a.addEventListener("load", va, !1);
      else {
          W.attachEvent("onreadystatechange", va), a.attachEvent("onload", va);
          var c = !1;
          try {
              c = null == a.frameElement && W.documentElement
          } catch (d) {}
          c && c.doScroll && function e() {
              if (!ia.isReady) {
                  try {
                      c.doScroll("left")
                  } catch (a) {
                      return setTimeout(e, 50)
                  }
                  wa(), ia.ready()
              }
          }()
      }
      return T.promise(b)
  }, ia.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
      $["[object " + b + "]"] = b.toLowerCase()
  }), U = ia(W);
  var xa = {};
  ia.Callbacks = function(a) {
      a = "string" == typeof a ? xa[a] || d(a) : ia.extend({}, a);
      var c, e, f, g, h, i, j = [],
          k = !a.once && [],
          l = function(b) {
              for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                  if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                      e = !1;
                      break
                  } c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
          },
          m = {
              add: function() {
                  if (j) {
                      var b = j.length;
                      ! function d(b) {
                          ia.each(b, function(b, c) {
                              var e = ia.type(c);
                              "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                          })
                      }(arguments), c ? g = j.length : e && (i = b, l(e))
                  }
                  return this
              },
              remove: function() {
                  return j && ia.each(arguments, function(a, b) {
                      for (var d;
                          (d = ia.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                  }), this
              },
              has: function(a) {
                  return a ? ia.inArray(a, j) > -1 : !(!j || !j.length)
              },
              empty: function() {
                  return j = [], this
              },
              disable: function() {
                  return j = k = e = b, this
              },
              disabled: function() {
                  return !j
              },
              lock: function() {
                  return k = b, e || m.disable(), this
              },
              locked: function() {
                  return !k
              },
              fireWith: function(a, b) {
                  return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
              },
              fire: function() {
                  return m.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!f
              }
          };
      return m
  }, ia.extend({
      Deferred: function(a) {
          var b = [
                  ["resolve", "done", ia.Callbacks("once memory"), "resolved"],
                  ["reject", "fail", ia.Callbacks("once memory"), "rejected"],
                  ["notify", "progress", ia.Callbacks("memory")]
              ],
              c = "pending",
              d = {
                  state: function() {
                      return c
                  },
                  always: function() {
                      return e.done(arguments).fail(arguments), this
                  },
                  then: function() {
                      var a = arguments;
                      return ia.Deferred(function(c) {
                          ia.each(b, function(b, f) {
                              var g = f[0],
                                  h = ia.isFunction(a[b]) && a[b];
                              e[f[1]](function() {
                                  var a = h && h.apply(this, arguments);
                                  a && ia.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                              })
                          }), a = null
                      }).promise()
                  },
                  promise: function(a) {
                      return null != a ? ia.extend(a, d) : d
                  }
              },
              e = {};
          return d.pipe = d.then, ia.each(b, function(a, f) {
              var g = f[2],
                  h = f[3];
              d[f[1]] = g.add, h && g.add(function() {
                  c = h
              }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                  return e[f[0] + "With"](this === e ? d : this, arguments), this
              }, e[f[0] + "With"] = g.fireWith
          }), d.promise(e), a && a.call(e, e), e
      },
      when: function(a) {
          var b, c, d, e = 0,
              f = da.call(arguments),
              g = f.length,
              h = 1 !== g || a && ia.isFunction(a.promise) ? g : 0,
              i = 1 === h ? a : ia.Deferred(),
              j = function(a, c, d) {
                  return function(e) {
                      c[a] = this, d[a] = arguments.length > 1 ? da.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                  }
              };
          if (g > 1)
              for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && ia.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
          return h || i.resolveWith(d, f), i.promise()
      }
  }), ia.support = function() {
      var b, c, d, e, f, g, h, i, j, k, l = W.createElement("div");
      if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*"), d = l.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
      f = W.createElement("select"), h = f.appendChild(W.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
          getSetAttribute: "t" !== l.className,
          leadingWhitespace: 3 === l.firstChild.nodeType,
          tbody: !l.getElementsByTagName("tbody").length,
          htmlSerialize: !!l.getElementsByTagName("link").length,
          style: /top/.test(d.getAttribute("style")),
          hrefNormalized: "/a" === d.getAttribute("href"),
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: !!e.value,
          optSelected: h.selected,
          enctype: !!W.createElement("form").enctype,
          html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === W.compatMode,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1
      }, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
      try {
          delete l.test
      } catch (m) {
          b.deleteExpando = !1
      }
      e = W.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = W.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
          b.noCloneEvent = !1
      }), l.cloneNode(!0).click());
      for (k in {
              submit: !0,
              change: !0,
              focusin: !0
          }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
      return l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, ia(function() {
          var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
              g = W.getElementsByTagName("body")[0];
          g && (c = W.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === l.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
              width: "4px"
          }).width, d = l.appendChild(W.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== V && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
      }), c = f = g = h = d = e = null, b
  }();
  var ya = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      za = /([A-Z])/g;
  ia.extend({
      cache: {},
      expando: "jQuery" + (aa + Math.random()).replace(/\D/g, ""),
      noData: {
          embed: !0,
          object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
          applet: !0
      },
      hasData: function(a) {
          return a = a.nodeType ? ia.cache[a[ia.expando]] : a[ia.expando], !!a && !h(a)
      },
      data: function(a, b, c) {
          return e(a, b, c)
      },
      removeData: function(a, b) {
          return f(a, b)
      },
      _data: function(a, b, c) {
          return e(a, b, c, !0)
      },
      _removeData: function(a, b) {
          return f(a, b, !0)
      },
      acceptData: function(a) {
          if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
          var b = a.nodeName && ia.noData[a.nodeName.toLowerCase()];
          return !b || b !== !0 && a.getAttribute("classid") === b
      }
  }), ia.fn.extend({
      data: function(a, c) {
          var d, e, f = this[0],
              h = 0,
              i = null;
          if (a === b) {
              if (this.length && (i = ia.data(f), 1 === f.nodeType && !ia._data(f, "parsedAttrs"))) {
                  for (d = f.attributes; d.length > h; h++) e = d[h].name, e.indexOf("data-") || (e = ia.camelCase(e.slice(5)), g(f, e, i[e]));
                  ia._data(f, "parsedAttrs", !0)
              }
              return i
          }
          return "object" == typeof a ? this.each(function() {
              ia.data(this, a)
          }) : ia.access(this, function(c) {
              return c === b ? f ? g(f, a, ia.data(f, a)) : null : (this.each(function() {
                  ia.data(this, a, c)
              }), b)
          }, null, c, arguments.length > 1, null, !0)
      },
      removeData: function(a) {
          return this.each(function() {
              ia.removeData(this, a)
          })
      }
  }), ia.extend({
      queue: function(a, c, d) {
          var e;
          return a ? (c = (c || "fx") + "queue", e = ia._data(a, c), d && (!e || ia.isArray(d) ? e = ia._data(a, c, ia.makeArray(d)) : e.push(d)), e || []) : b
      },
      dequeue: function(a, b) {
          b = b || "fx";
          var c = ia.queue(a, b),
              d = c.length,
              e = c.shift(),
              f = ia._queueHooks(a, b),
              g = function() {
                  ia.dequeue(a, b)
              };
          "inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
          var c = b + "queueHooks";
          return ia._data(a, c) || ia._data(a, c, {
              empty: ia.Callbacks("once memory").add(function() {
                  ia._removeData(a, b + "queue"), ia._removeData(a, c)
              })
          })
      }
  }), ia.fn.extend({
      queue: function(a, c) {
          var d = 2;
          return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? ia.queue(this[0], a) : c === b ? this : this.each(function() {
              var b = ia.queue(this, a, c);
              ia._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ia.dequeue(this, a)
          })
      },
      dequeue: function(a) {
          return this.each(function() {
              ia.dequeue(this, a)
          })
      },
      delay: function(a, b) {
          return a = ia.fx ? ia.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
              var d = setTimeout(b, a);
              c.stop = function() {
                  clearTimeout(d)
              }
          })
      },
      clearQueue: function(a) {
          return this.queue(a || "fx", [])
      },
      promise: function(a, c) {
          var d, e = 1,
              f = ia.Deferred(),
              g = this,
              h = this.length,
              i = function() {
                  --e || f.resolveWith(g, [g])
              };
          for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ia._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
          return i(), f.promise(c)
      }
  });
  var Aa, Ba, Ca = /[\t\r\n]/g,
      Da = /\r/g,
      Ea = /^(?:input|select|textarea|button|object)$/i,
      Fa = /^(?:a|area)$/i,
      Ga = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
      Ha = /^(?:checked|selected)$/i,
      Ia = ia.support.getSetAttribute,
      Ja = ia.support.input;
  ia.fn.extend({
      attr: function(a, b) {
          return ia.access(this, ia.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
          return this.each(function() {
              ia.removeAttr(this, a)
          })
      },
      prop: function(a, b) {
          return ia.access(this, ia.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
          return a = ia.propFix[a] || a, this.each(function() {
              try {
                  this[a] = b, delete this[a]
              } catch (c) {}
          })
      },
      addClass: function(a) {
          var b, c, d, e, f, g = 0,
              h = this.length,
              i = "string" == typeof a && a;
          if (ia.isFunction(a)) return this.each(function(b) {
              ia(this).addClass(a.call(this, b, this.className))
          });
          if (i)
              for (b = (a || "").match(ka) || []; h > g; g++)
                  if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ca, " ") : " ")) {
                      for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                      c.className = ia.trim(d)
                  } return this
      },
      removeClass: function(a) {
          var b, c, d, e, f, g = 0,
              h = this.length,
              i = 0 === arguments.length || "string" == typeof a && a;
          if (ia.isFunction(a)) return this.each(function(b) {
              ia(this).removeClass(a.call(this, b, this.className))
          });
          if (i)
              for (b = (a || "").match(ka) || []; h > g; g++)
                  if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ca, " ") : "")) {
                      for (f = 0; e = b[f++];)
                          for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                      c.className = a ? ia.trim(d) : ""
                  } return this
      },
      toggleClass: function(a, b) {
          var c = typeof a,
              d = "boolean" == typeof b;
          return ia.isFunction(a) ? this.each(function(c) {
              ia(this).toggleClass(a.call(this, c, this.className, b), b)
          }) : this.each(function() {
              if ("string" === c)
                  for (var e, f = 0, g = ia(this), h = b, i = a.match(ka) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
              else(c === V || "boolean" === c) && (this.className && ia._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ia._data(this, "__className__") || "")
          })
      },
      hasClass: function(a) {
          for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
              if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ca, " ").indexOf(b) >= 0) return !0;
          return !1
      },
      val: function(a) {
          var c, d, e, f = this[0];
          return arguments.length ? (e = ia.isFunction(a), this.each(function(c) {
              var f, g = ia(this);
              1 === this.nodeType && (f = e ? a.call(this, c, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ia.isArray(f) && (f = ia.map(f, function(a) {
                  return null == a ? "" : a + ""
              })), d = ia.valHooks[this.type] || ia.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
          })) : f ? (d = ia.valHooks[f.type] || ia.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Da, "") : null == c ? "" : c)) : void 0
      }
  }), ia.extend({
      valHooks: {
          option: {
              get: function(a) {
                  var b = a.attributes.value;
                  return !b || b.specified ? a.value : a.text
              }
          },
          select: {
              get: function(a) {
                  for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                      if (c = d[i], !(!c.selected && i !== e || (ia.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ia.nodeName(c.parentNode, "optgroup"))) {
                          if (b = ia(c).val(), f) return b;
                          g.push(b)
                      } return g
              },
              set: function(a, b) {
                  var c = ia.makeArray(b);
                  return ia(a).find("option").each(function() {
                      this.selected = ia.inArray(ia(this).val(), c) >= 0
                  }), c.length || (a.selectedIndex = -1), c
              }
          }
      },
      attr: function(a, c, d) {
          var e, f, g, h = a.nodeType;
          return a && 3 !== h && 8 !== h && 2 !== h ? typeof a.getAttribute === V ? ia.prop(a, c, d) : (f = 1 !== h || !ia.isXMLDoc(a), f && (c = c.toLowerCase(), e = ia.attrHooks[c] || (Ga.test(c) ? Ba : Aa)), d === b ? e && f && "get" in e && null !== (g = e.get(a, c)) ? g : (typeof a.getAttribute !== V && (g = a.getAttribute(c)), null == g ? b : g) : null !== d ? e && f && "set" in e && (g = e.set(a, d, c)) !== b ? g : (a.setAttribute(c, d + ""), d) : (ia.removeAttr(a, c), b)) : void 0
      },
      removeAttr: function(a, b) {
          var c, d, e = 0,
              f = b && b.match(ka);
          if (f && 1 === a.nodeType)
              for (; c = f[e++];) d = ia.propFix[c] || c, Ga.test(c) ? !Ia && Ha.test(c) ? a[ia.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : ia.attr(a, c, ""), a.removeAttribute(Ia ? c : d)
      },
      attrHooks: {
          type: {
              set: function(a, b) {
                  if (!ia.support.radioValue && "radio" === b && ia.nodeName(a, "input")) {
                      var c = a.value;
                      return a.setAttribute("type", b), c && (a.value = c), b
                  }
              }
          }
      },
      propFix: {
          tabindex: "tabIndex",
          readonly: "readOnly",
          "for": "htmlFor",
          "class": "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable"
      },
      prop: function(a, c, d) {
          var e, f, g, h = a.nodeType;
          return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !ia.isXMLDoc(a), g && (c = ia.propFix[c] || c, f = ia.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
      },
      propHooks: {
          tabIndex: {
              get: function(a) {
                  var c = a.getAttributeNode("tabindex");
                  return c && c.specified ? parseInt(c.value, 10) : Ea.test(a.nodeName) || Fa.test(a.nodeName) && a.href ? 0 : b
              }
          }
      }
  }), Ba = {
      get: function(a, c) {
          var d = ia.prop(a, c),
              e = "boolean" == typeof d && a.getAttribute(c),
              f = "boolean" == typeof d ? Ja && Ia ? null != e : Ha.test(c) ? a[ia.camelCase("default-" + c)] : !!e : a.getAttributeNode(c);
          return f && f.value !== !1 ? c.toLowerCase() : b;
      },
      set: function(a, b, c) {
          return b === !1 ? ia.removeAttr(a, c) : Ja && Ia || !Ha.test(c) ? a.setAttribute(!Ia && ia.propFix[c] || c, c) : a[ia.camelCase("default-" + c)] = a[c] = !0, c
      }
  }, Ja && Ia || (ia.attrHooks.value = {
      get: function(a, c) {
          var d = a.getAttributeNode(c);
          return ia.nodeName(a, "input") ? a.defaultValue : d && d.specified ? d.value : b
      },
      set: function(a, c, d) {
          return ia.nodeName(a, "input") ? (a.defaultValue = c, b) : Aa && Aa.set(a, c, d)
      }
  }), Ia || (Aa = ia.valHooks.button = {
      get: function(a, c) {
          var d = a.getAttributeNode(c);
          return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : b
      },
      set: function(a, c, d) {
          var e = a.getAttributeNode(d);
          return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
      }
  }, ia.attrHooks.contenteditable = {
      get: Aa.get,
      set: function(a, b, c) {
          Aa.set(a, "" === b ? !1 : b, c)
      }
  }, ia.each(["width", "height"], function(a, c) {
      ia.attrHooks[c] = ia.extend(ia.attrHooks[c], {
          set: function(a, d) {
              return "" === d ? (a.setAttribute(c, "auto"), d) : b
          }
      })
  })), ia.support.hrefNormalized || (ia.each(["href", "src", "width", "height"], function(a, c) {
      ia.attrHooks[c] = ia.extend(ia.attrHooks[c], {
          get: function(a) {
              var d = a.getAttribute(c, 2);
              return null == d ? b : d
          }
      })
  }), ia.each(["href", "src"], function(a, b) {
      ia.propHooks[b] = {
          get: function(a) {
              return a.getAttribute(b, 4)
          }
      }
  })), ia.support.style || (ia.attrHooks.style = {
      get: function(a) {
          return a.style.cssText || b
      },
      set: function(a, b) {
          return a.style.cssText = b + ""
      }
  }), ia.support.optSelected || (ia.propHooks.selected = ia.extend(ia.propHooks.selected, {
      get: function(a) {
          var b = a.parentNode;
          return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
      }
  })), ia.support.enctype || (ia.propFix.enctype = "encoding"), ia.support.checkOn || ia.each(["radio", "checkbox"], function() {
      ia.valHooks[this] = {
          get: function(a) {
              return null === a.getAttribute("value") ? "on" : a.value
          }
      }
  }), ia.each(["radio", "checkbox"], function() {
      ia.valHooks[this] = ia.extend(ia.valHooks[this], {
          set: function(a, c) {
              return ia.isArray(c) ? a.checked = ia.inArray(ia(a).val(), c) >= 0 : b
          }
      })
  });
  var Ka = /^(?:input|select|textarea)$/i,
      La = /^key/,
      Ma = /^(?:mouse|contextmenu)|click/,
      Na = /^(?:focusinfocus|focusoutblur)$/,
      Oa = /^([^.]*)(?:\.(.+)|)$/;
  ia.event = {
          global: {},
          add: function(a, c, d, e, f) {
              var g, h, i, j, k, l, m, n, o, p, q, r = ia._data(a);
              if (r) {
                  for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ia.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                          return typeof ia === V || a && ia.event.triggered === a.type ? b : ia.event.dispatch.apply(l.elem, arguments)
                      }, l.elem = a), c = (c || "").match(ka) || [""], i = c.length; i--;) g = Oa.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), k = ia.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ia.event.special[o] || {}, m = ia.extend({
                      type: o,
                      origType: q,
                      data: e,
                      handler: d,
                      guid: d.guid,
                      selector: f,
                      needsContext: f && ia.expr.match.needsContext.test(f),
                      namespace: p.join(".")
                  }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ia.event.global[o] = !0;
                  a = null
              }
          },
          remove: function(a, b, c, d, e) {
              var f, g, h, i, j, k, l, m, n, o, p, q = ia.hasData(a) && ia._data(a);
              if (q && (k = q.events)) {
                  for (b = (b || "").match(ka) || [""], j = b.length; j--;)
                      if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                          for (l = ia.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                          i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ia.removeEvent(a, n, q.handle), delete k[n])
                      } else
                          for (n in k) ia.event.remove(a, n + b[j], c, d, !0);
                  ia.isEmptyObject(k) && (delete q.handle, ia._removeData(a, "events"))
              }
          },
          trigger: function(c, d, e, f) {
              var g, h, i, j, k, l, m, n = [e || W],
                  o = ga.call(c, "type") ? c.type : c,
                  p = ga.call(c, "namespace") ? c.namespace.split(".") : [];
              if (i = l = e = e || W, 3 !== e.nodeType && 8 !== e.nodeType && !Na.test(o + ia.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[ia.expando] ? c : new ia.Event(o, "object" == typeof c && c), c.isTrigger = !0, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ia.makeArray(d, [c]), k = ia.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                  if (!f && !k.noBubble && !ia.isWindow(e)) {
                      for (j = k.delegateType || o, Na.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                      l === (e.ownerDocument || W) && n.push(l.defaultView || l.parentWindow || a)
                  }
                  for (m = 0;
                      (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ia._data(i, "events") || {})[c.type] && ia._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ia.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                  if (c.type = o, !(f || c.isDefaultPrevented() || k._default && k._default.apply(e.ownerDocument, d) !== !1 || "click" === o && ia.nodeName(e, "a") || !ia.acceptData(e) || !h || !e[o] || ia.isWindow(e))) {
                      l = e[h], l && (e[h] = null), ia.event.triggered = o;
                      try {
                          e[o]()
                      } catch (q) {}
                      ia.event.triggered = b, l && (e[h] = l)
                  }
                  return c.result
              }
          },
          dispatch: function(a) {
              a = ia.event.fix(a);
              var c, d, e, f, g, h = [],
                  i = da.call(arguments),
                  j = (ia._data(this, "events") || {})[a.type] || [],
                  k = ia.event.special[a.type] || {};
              if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                  for (h = ia.event.handlers.call(this, a, j), c = 0;
                      (f = h[c++]) && !a.isPropagationStopped();)
                      for (a.currentTarget = f.elem, g = 0;
                          (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ia.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                  return k.postDispatch && k.postDispatch.call(this, a), a.result
              }
          },
          handlers: function(a, c) {
              var d, e, f, g, h = [],
                  i = c.delegateCount,
                  j = a.target;
              if (i && j.nodeType && (!a.button || "click" !== a.type))
                  for (; j != this; j = j.parentNode || this)
                      if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                          for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ia(d, this).index(j) >= 0 : ia.find(d, this, null, [j]).length), f[d] && f.push(e);
                          f.length && h.push({
                              elem: j,
                              handlers: f
                          })
                      } return c.length > i && h.push({
                  elem: this,
                  handlers: c.slice(i)
              }), h
          },
          fix: function(a) {
              if (a[ia.expando]) return a;
              var b, c, d, e = a.type,
                  f = a,
                  g = this.fixHooks[e];
              for (g || (this.fixHooks[e] = g = Ma.test(e) ? this.mouseHooks : La.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ia.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
              return a.target || (a.target = f.srcElement || W), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
          },
          props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
          fixHooks: {},
          keyHooks: {
              props: "char charCode key keyCode".split(" "),
              filter: function(a, b) {
                  return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
              }
          },
          mouseHooks: {
              props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
              filter: function(a, c) {
                  var d, e, f, g = c.button,
                      h = c.fromElement;
                  return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || W, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
              }
          },
          special: {
              load: {
                  noBubble: !0
              },
              click: {
                  trigger: function() {
                      return ia.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                  }
              },
              focus: {
                  trigger: function() {
                      if (this !== W.activeElement && this.focus) try {
                          return this.focus(), !1
                      } catch (a) {}
                  },
                  delegateType: "focusin"
              },
              blur: {
                  trigger: function() {
                      return this === W.activeElement && this.blur ? (this.blur(), !1) : b
                  },
                  delegateType: "focusout"
              },
              beforeunload: {
                  postDispatch: function(a) {
                      a.result !== b && (a.originalEvent.returnValue = a.result)
                  }
              }
          },
          simulate: function(a, b, c, d) {
              var e = ia.extend(new ia.Event, c, {
                  type: a,
                  isSimulated: !0,
                  originalEvent: {}
              });
              d ? ia.event.trigger(e, null, b) : ia.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
          }
      }, ia.removeEvent = W.removeEventListener ? function(a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1)
      } : function(a, b, c) {
          var d = "on" + b;
          a.detachEvent && (typeof a[d] === V && (a[d] = null), a.detachEvent(d, c))
      }, ia.Event = function(a, c) {
          return this instanceof ia.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && ia.extend(this, c), this.timeStamp = a && a.timeStamp || ia.now(), this[ia.expando] = !0, b) : new ia.Event(a, c)
      }, ia.Event.prototype = {
          isDefaultPrevented: j,
          isPropagationStopped: j,
          isImmediatePropagationStopped: j,
          preventDefault: function() {
              var a = this.originalEvent;
              this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
          },
          stopPropagation: function() {
              var a = this.originalEvent;
              this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
          },
          stopImmediatePropagation: function() {
              this.isImmediatePropagationStopped = i, this.stopPropagation()
          }
      }, ia.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout"
      }, function(a, b) {
          ia.event.special[a] = {
              delegateType: b,
              bindType: b,
              handle: function(a) {
                  var c, d = this,
                      e = a.relatedTarget,
                      f = a.handleObj;
                  return (!e || e !== d && !ia.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
              }
          }
      }), ia.support.submitBubbles || (ia.event.special.submit = {
          setup: function() {
              return ia.nodeName(this, "form") ? !1 : (ia.event.add(this, "click._submit keypress._submit", function(a) {
                  var c = a.target,
                      d = ia.nodeName(c, "input") || ia.nodeName(c, "button") ? c.form : b;
                  d && !ia._data(d, "submitBubbles") && (ia.event.add(d, "submit._submit", function(a) {
                      a._submit_bubble = !0
                  }), ia._data(d, "submitBubbles", !0))
              }), b)
          },
          postDispatch: function(a) {
              a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ia.event.simulate("submit", this.parentNode, a, !0))
          },
          teardown: function() {
              return ia.nodeName(this, "form") ? !1 : (ia.event.remove(this, "._submit"), b)
          }
      }), ia.support.changeBubbles || (ia.event.special.change = {
          setup: function() {
              return Ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ia.event.add(this, "propertychange._change", function(a) {
                  "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
              }), ia.event.add(this, "click._change", function(a) {
                  this._just_changed && !a.isTrigger && (this._just_changed = !1), ia.event.simulate("change", this, a, !0)
              })), !1) : (ia.event.add(this, "beforeactivate._change", function(a) {
                  var b = a.target;
                  Ka.test(b.nodeName) && !ia._data(b, "changeBubbles") && (ia.event.add(b, "change._change", function(a) {
                      !this.parentNode || a.isSimulated || a.isTrigger || ia.event.simulate("change", this.parentNode, a, !0)
                  }), ia._data(b, "changeBubbles", !0))
              }), b)
          },
          handle: function(a) {
              var c = a.target;
              return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
          },
          teardown: function() {
              return ia.event.remove(this, "._change"), !Ka.test(this.nodeName)
          }
      }), ia.support.focusinBubbles || ia.each({
          focus: "focusin",
          blur: "focusout"
      }, function(a, b) {
          var c = 0,
              d = function(a) {
                  ia.event.simulate(b, a.target, ia.event.fix(a), !0)
              };
          ia.event.special[b] = {
              setup: function() {
                  0 === c++ && W.addEventListener(a, d, !0)
              },
              teardown: function() {
                  0 === --c && W.removeEventListener(a, d, !0)
              }
          }
      }), ia.fn.extend({
          on: function(a, c, d, e, f) {
              var g, h;
              if ("object" == typeof a) {
                  "string" != typeof c && (d = d || c, c = b);
                  for (g in a) this.on(g, c, d, a[g], f);
                  return this
              }
              if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
              else if (!e) return this;
              return 1 === f && (h = e, e = function(a) {
                  return ia().off(a), h.apply(this, arguments)
              }, e.guid = h.guid || (h.guid = ia.guid++)), this.each(function() {
                  ia.event.add(this, a, e, d, c)
              })
          },
          one: function(a, b, c, d) {
              return this.on(a, b, c, d, 1)
          },
          off: function(a, c, d) {
              var e, f;
              if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ia(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
              if ("object" == typeof a) {
                  for (f in a) this.off(f, c, a[f]);
                  return this
              }
              return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
                  ia.event.remove(this, a, d, c)
              })
          },
          bind: function(a, b, c) {
              return this.on(a, null, b, c)
          },
          unbind: function(a, b) {
              return this.off(a, null, b)
          },
          delegate: function(a, b, c, d) {
              return this.on(b, a, c, d)
          },
          undelegate: function(a, b, c) {
              return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
          },
          trigger: function(a, b) {
              return this.each(function() {
                  ia.event.trigger(a, b, this)
              })
          },
          triggerHandler: function(a, c) {
              var d = this[0];
              return d ? ia.event.trigger(a, c, d, !0) : b
          }
      }),
      function(a, b) {
          function c(a) {
              return oa.test(a + "")
          }

          function d() {
              var a, b = [];
              return a = function(c, d) {
                  return b.push(c += " ") > y.cacheLength && delete a[b.shift()], a[c] = d
              }
          }

          function e(a) {
              return a[N] = !0, a
          }

          function f(a) {
              var b = F.createElement("div");
              try {
                  return a(b)
              } catch (c) {
                  return !1
              } finally {
                  b = null
              }
          }

          function g(a, b, c, d) {
              var e, f, g, h, i, j, k, n, o, p;
              if ((b ? b.ownerDocument || b : O) !== F && E(b), b = b || F, c = c || [], !a || "string" != typeof a) return c;
              if (1 !== (h = b.nodeType) && 9 !== h) return [];
              if (!H && !d) {
                  if (e = pa.exec(a))
                      if (g = e[1]) {
                          if (9 === h) {
                              if (f = b.getElementById(g), !f || !f.parentNode) return c;
                              if (f.id === g) return c.push(f), c
                          } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f), c
                      } else {
                          if (e[2]) return Z.apply(c, $.call(b.getElementsByTagName(a), 0)), c;
                          if ((g = e[3]) && P.getByClassName && b.getElementsByClassName) return Z.apply(c, $.call(b.getElementsByClassName(g), 0)), c
                      } if (P.qsa && !I.test(a)) {
                      if (k = !0, n = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                          for (j = l(a), (k = b.getAttribute("id")) ? n = k.replace(sa, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                          o = na.test(a) && b.parentNode || b, p = j.join(",")
                      }
                      if (p) try {
                          return Z.apply(c, $.call(o.querySelectorAll(p), 0)), c
                      } catch (q) {} finally {
                          k || b.removeAttribute("id")
                      }
                  }
              }
              return u(a.replace(ga, "$1"), b, c, d)
          }

          function h(a, b) {
              var c = b && a,
                  d = c && (~b.sourceIndex || W) - (~a.sourceIndex || W);
              if (d) return d;
              if (c)
                  for (; c = c.nextSibling;)
                      if (c === b) return -1;
              return a ? 1 : -1
          }

          function i(a) {
              return function(b) {
                  var c = b.nodeName.toLowerCase();
                  return "input" === c && b.type === a
              }
          }

          function j(a) {
              return function(b) {
                  var c = b.nodeName.toLowerCase();
                  return ("input" === c || "button" === c) && b.type === a
              }
          }

          function k(a) {
              return e(function(b) {
                  return b = +b, e(function(c, d) {
                      for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                  })
              })
          }

          function l(a, b) {
              var c, d, e, f, h, i, j, k = T[a + " "];
              if (k) return b ? 0 : k.slice(0);
              for (h = a, i = [], j = y.preFilter; h;) {
                  (!c || (d = ha.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = ja.exec(h)) && (c = d.shift(), e.push({
                      value: c,
                      type: d[0].replace(ga, " ")
                  }), h = h.slice(c.length));
                  for (f in y.filter) !(d = ma[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({
                      value: c,
                      type: f,
                      matches: d
                  }), h = h.slice(c.length));
                  if (!c) break
              }
              return b ? h.length : h ? g.error(a) : T(a, i).slice(0)
          }

          function m(a) {
              for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
              return d
          }

          function n(a, b, c) {
              var d = b.dir,
                  e = c && "parentNode" === d,
                  f = R++;
              return b.first ? function(b, c, f) {
                  for (; b = b[d];)
                      if (1 === b.nodeType || e) return a(b, c, f)
              } : function(b, c, g) {
                  var h, i, j, k = Q + " " + f;
                  if (g) {
                      for (; b = b[d];)
                          if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                  } else
                      for (; b = b[d];)
                          if (1 === b.nodeType || e)
                              if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                  if ((h = i[1]) === !0 || h === x) return h === !0
                              } else if (i = j[d] = [k], i[1] = a(b, c, g) || x, i[1] === !0) return !0
              }
          }

          function o(a) {
              return a.length > 1 ? function(b, c, d) {
                  for (var e = a.length; e--;)
                      if (!a[e](b, c, d)) return !1;
                  return !0
              } : a[0]
          }

          function p(a, b, c, d, e) {
              for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
              return g
          }

          function q(a, b, c, d, f, g) {
              return d && !d[N] && (d = q(d)), f && !f[N] && (f = q(f, g)), e(function(e, g, h, i) {
                  var j, k, l, m = [],
                      n = [],
                      o = g.length,
                      q = e || t(b || "*", h.nodeType ? [h] : h, []),
                      r = !a || !e && b ? q : p(q, m, a, h, i),
                      s = c ? f || (e ? a : o || d) ? [] : g : r;
                  if (c && c(r, s, h, i), d)
                      for (j = p(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                  if (e) {
                      if (f || a) {
                          if (f) {
                              for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                              f(null, s = [], j, i)
                          }
                          for (k = s.length; k--;)(l = s[k]) && (j = f ? _.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                      }
                  } else s = p(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : Z.apply(g, s)
              })
          }

          function r(a) {
              for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                      return a === b
                  }, g, !0), j = n(function(a) {
                      return _.call(b, a) > -1
                  }, g, !0), k = [function(a, c, d) {
                      return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                  }]; e > h; h++)
                  if (c = y.relative[a[h].type]) k = [n(o(k), c)];
                  else {
                      if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                          for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                          return q(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)).replace(ga, "$1"), c, d > h && r(a.slice(h, d)), e > d && r(a = a.slice(d)), e > d && m(a))
                      }
                      k.push(c)
                  } return o(k)
          }

          function s(a, b) {
              var c = 0,
                  d = b.length > 0,
                  f = a.length > 0,
                  h = function(e, h, i, j, k) {
                      var l, m, n, o = [],
                          q = 0,
                          r = "0",
                          s = e && [],
                          t = null != k,
                          u = D,
                          v = e || f && y.find.TAG("*", k && h.parentNode || h),
                          w = Q += null == u ? 1 : Math.random() || .1;
                      for (t && (D = h !== F && h, x = c); null != (l = v[r]); r++) {
                          if (f && l) {
                              for (m = 0; n = a[m++];)
                                  if (n(l, h, i)) {
                                      j.push(l);
                                      break
                                  } t && (Q = w, x = ++c)
                          }
                          d && ((l = !n && l) && q--, e && s.push(l))
                      }
                      if (q += r, d && r !== q) {
                          for (m = 0; n = b[m++];) n(s, o, h, i);
                          if (e) {
                              if (q > 0)
                                  for (; r--;) s[r] || o[r] || (o[r] = Y.call(j));
                              o = p(o)
                          }
                          Z.apply(j, o), t && !e && o.length > 0 && q + b.length > 1 && g.uniqueSort(j)
                      }
                      return t && (Q = w, D = u), s
                  };
              return d ? e(h) : h
          }

          function t(a, b, c) {
              for (var d = 0, e = b.length; e > d; d++) g(a, b[d], c);
              return c
          }

          function u(a, b, c, d) {
              var e, f, g, h, i, j = l(a);
              if (!d && 1 === j.length) {
                  if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && !H && y.relative[f[1].type]) {
                      if (b = y.find.ID(g.matches[0].replace(ua, va), b)[0], !b) return c;
                      a = a.slice(f.shift().value.length)
                  }
                  for (e = ma.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                      if ((i = y.find[h]) && (d = i(g.matches[0].replace(ua, va), na.test(f[0].type) && b.parentNode || b))) {
                          if (f.splice(e, 1), a = d.length && m(f), !a) return Z.apply(c, $.call(d, 0)), c;
                          break
                      }
              }
              return B(a, j)(d, b, H, c, na.test(a)), c
          }

          function v() {}
          var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
              O = a.document,
              P = {},
              Q = 0,
              R = 0,
              S = d(),
              T = d(),
              U = d(),
              V = typeof b,
              W = 1 << 31,
              X = [],
              Y = X.pop,
              Z = X.push,
              $ = X.slice,
              _ = X.indexOf || function(a) {
                  for (var b = 0, c = this.length; c > b; b++)
                      if (this[b] === a) return b;
                  return -1
              },
              aa = "[\\x20\\t\\r\\n\\f]",
              ba = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
              ca = ba.replace("w", "w#"),
              da = "([*^$|!~]?=)",
              ea = "\\[" + aa + "*(" + ba + ")" + aa + "*(?:" + da + aa + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ca + ")|)|)" + aa + "*\\]",
              fa = ":(" + ba + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ea.replace(3, 8) + ")*)|.*)\\)|)",
              ga = RegExp("^" + aa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + aa + "+$", "g"),
              ha = RegExp("^" + aa + "*," + aa + "*"),
              ja = RegExp("^" + aa + "*([\\x20\\t\\r\\n\\f>+~])" + aa + "*"),
              ka = RegExp(fa),
              la = RegExp("^" + ca + "$"),
              ma = {
                  ID: RegExp("^#(" + ba + ")"),
                  CLASS: RegExp("^\\.(" + ba + ")"),
                  NAME: RegExp("^\\[name=['\"]?(" + ba + ")['\"]?\\]"),
                  TAG: RegExp("^(" + ba.replace("w", "w*") + ")"),
                  ATTR: RegExp("^" + ea),
                  PSEUDO: RegExp("^" + fa),
                  CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + aa + "*(even|odd|(([+-]|)(\\d*)n|)" + aa + "*(?:([+-]|)" + aa + "*(\\d+)|))" + aa + "*\\)|)", "i"),
                  needsContext: RegExp("^" + aa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + aa + "*((?:-\\d)?\\d*)" + aa + "*\\)|)(?=[^-]|$)", "i")
              },
              na = /[\x20\t\r\n\f]*[+~]/,
              oa = /^[^{]+\{\s*\[native code/,
              pa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              qa = /^(?:input|select|textarea|button)$/i,
              ra = /^h\d$/i,
              sa = /'|\\/g,
              ta = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              ua = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
              va = function(a, b) {
                  var c = "0x" + b - 65536;
                  return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
              };
          try {
              $.call(O.documentElement.childNodes, 0)[0].nodeType
          } catch (wa) {
              $ = function(a) {
                  for (var b, c = []; b = this[a++];) c.push(b);
                  return c
              }
          }
          A = g.isXML = function(a) {
              var b = a && (a.ownerDocument || a).documentElement;
              return b ? "HTML" !== b.nodeName : !1
          }, E = g.setDocument = function(a) {
              var d = a ? a.ownerDocument || a : O;
              return d !== F && 9 === d.nodeType && d.documentElement ? (F = d, G = d.documentElement, H = A(d), P.tagNameNoComments = f(function(a) {
                  return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
              }), P.attributes = f(function(a) {
                  a.innerHTML = "<select></select>";
                  var b = typeof a.lastChild.getAttribute("multiple");
                  return "boolean" !== b && "string" !== b
              }), P.getByClassName = f(function(a) {
                  return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
              }), P.getByName = f(function(a) {
                  a.id = N + 0, a.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>", G.insertBefore(a, G.firstChild);
                  var b = d.getElementsByName && d.getElementsByName(N).length === 2 + d.getElementsByName(N + 0).length;
                  return P.getIdNotName = !d.getElementById(N), G.removeChild(a), b
              }), y.attrHandle = f(function(a) {
                  return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== V && "#" === a.firstChild.getAttribute("href")
              }) ? {} : {
                  href: function(a) {
                      return a.getAttribute("href", 2)
                  },
                  type: function(a) {
                      return a.getAttribute("type")
                  }
              }, P.getIdNotName ? (y.find.ID = function(a, b) {
                  if (typeof b.getElementById !== V && !H) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : []
                  }
              }, y.filter.ID = function(a) {
                  var b = a.replace(ua, va);
                  return function(a) {
                      return a.getAttribute("id") === b
                  }
              }) : (y.find.ID = function(a, c) {
                  if (typeof c.getElementById !== V && !H) {
                      var d = c.getElementById(a);
                      return d ? d.id === a || typeof d.getAttributeNode !== V && d.getAttributeNode("id").value === a ? [d] : b : []
                  }
              }, y.filter.ID = function(a) {
                  var b = a.replace(ua, va);
                  return function(a) {
                      var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                      return c && c.value === b
                  }
              }), y.find.TAG = P.tagNameNoComments ? function(a, c) {
                  return typeof c.getElementsByTagName !== V ? c.getElementsByTagName(a) : b
              } : function(a, b) {
                  var c, d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                  if ("*" === a) {
                      for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                      return d
                  }
                  return f
              }, y.find.NAME = P.getByName && function(a, c) {
                  return typeof c.getElementsByName !== V ? c.getElementsByName(name) : b
              }, y.find.CLASS = P.getByClassName && function(a, c) {
                  return typeof c.getElementsByClassName === V || H ? b : c.getElementsByClassName(a)
              }, J = [], I = [":focus"], (P.qsa = c(d.querySelectorAll)) && (f(function(a) {
                  a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || I.push("\\[" + aa + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || I.push(":checked")
              }), f(function(a) {
                  a.innerHTML = "<input type='hidden' i=''/>", a.querySelectorAll("[i^='']").length && I.push("[*^$]=" + aa + "*(?:\"\"|'')"), a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), I.push(",.*:")
              })), (P.matchesSelector = c(K = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function(a) {
                  P.disconnectedMatch = K.call(a, "div"), K.call(a, "[s!='']:x"), J.push("!=", fa)
              }), I = RegExp(I.join("|")), J = RegExp(J.join("|")), L = c(G.contains) || G.compareDocumentPosition ? function(a, b) {
                  var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                  return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
              } : function(a, b) {
                  if (b)
                      for (; b = b.parentNode;)
                          if (b === a) return !0;
                  return !1
              }, M = G.compareDocumentPosition ? function(a, b) {
                  var c;
                  return a === b ? (C = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & c || a.parentNode && 11 === a.parentNode.nodeType ? a === d || L(O, a) ? -1 : b === d || L(O, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
              } : function(a, b) {
                  var c, e = 0,
                      f = a.parentNode,
                      g = b.parentNode,
                      i = [a],
                      j = [b];
                  if (a === b) return C = !0, 0;
                  if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : 0;
                  if (f === g) return h(a, b);
                  for (c = a; c = c.parentNode;) i.unshift(c);
                  for (c = b; c = c.parentNode;) j.unshift(c);
                  for (; i[e] === j[e];) e++;
                  return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
              }, C = !1, [0, 0].sort(M), P.detectDuplicates = C, F) : F
          }, g.matches = function(a, b) {
              return g(a, null, null, b)
          }, g.matchesSelector = function(a, b) {
              if ((a.ownerDocument || a) !== F && E(a), b = b.replace(ta, "='$1']"), !(!P.matchesSelector || H || J && J.test(b) || I.test(b))) try {
                  var c = K.call(a, b);
                  if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
              } catch (d) {}
              return g(b, F, null, [a]).length > 0
          }, g.contains = function(a, b) {
              return (a.ownerDocument || a) !== F && E(a), L(a, b)
          }, g.attr = function(a, b) {
              var c;
              return (a.ownerDocument || a) !== F && E(a), H || (b = b.toLowerCase()), (c = y.attrHandle[b]) ? c(a) : H || P.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b : c && c.specified ? c.value : null
          }, g.error = function(a) {
              throw Error("Syntax error, unrecognized expression: " + a)
          }, g.uniqueSort = function(a) {
              var b, c = [],
                  d = 1,
                  e = 0;
              if (C = !P.detectDuplicates, a.sort(M), C) {
                  for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                  for (; e--;) a.splice(c[e], 1)
              }
              return a
          }, z = g.getText = function(a) {
              var b, c = "",
                  d = 0,
                  e = a.nodeType;
              if (e) {
                  if (1 === e || 9 === e || 11 === e) {
                      if ("string" == typeof a.textContent) return a.textContent;
                      for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                  } else if (3 === e || 4 === e) return a.nodeValue
              } else
                  for (; b = a[d]; d++) c += z(b);
              return c
          }, y = g.selectors = {
              cacheLength: 50,
              createPseudo: e,
              match: ma,
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
                  ATTR: function(a) {
                      return a[1] = a[1].replace(ua, va), a[3] = (a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                  },
                  CHILD: function(a) {
                      return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]), a
                  },
                  PSEUDO: function(a) {
                      var b, c = !a[5] && a[2];
                      return ma.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && ka.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                  }
              },
              filter: {
                  TAG: function(a) {
                      return "*" === a ? function() {
                          return !0
                      } : (a = a.replace(ua, va).toLowerCase(), function(b) {
                          return b.nodeName && b.nodeName.toLowerCase() === a
                      })
                  },
                  CLASS: function(a) {
                      var b = S[a + " "];
                      return b || (b = RegExp("(^|" + aa + ")" + a + "(" + aa + "|$)")) && S(a, function(a) {
                          return b.test(a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                      })
                  },
                  ATTR: function(a, b, c) {
                      return function(d) {
                          var e = g.attr(d, a);
                          return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                      }
                  },
                  CHILD: function(a, b, c, d, e) {
                      var f = "nth" !== a.slice(0, 3),
                          g = "last" !== a.slice(-4),
                          h = "of-type" === b;
                      return 1 === d && 0 === e ? function(a) {
                          return !!a.parentNode
                      } : function(b, c, i) {
                          var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                              q = b.parentNode,
                              r = h && b.nodeName.toLowerCase(),
                              s = !i && !h;
                          if (q) {
                              if (f) {
                                  for (; p;) {
                                      for (l = b; l = l[p];)
                                          if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                      o = p = "only" === a && !o && "nextSibling"
                                  }
                                  return !0
                              }
                              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                  for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === Q && j[1], m = j[0] === Q && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                      if (1 === l.nodeType && ++m && l === b) {
                                          k[a] = [Q, n, m];
                                          break
                                      }
                              } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === Q) m = j[1];
                              else
                                  for (;
                                      (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [Q, m]), l !== b)););
                              return m -= e, m === d || 0 === m % d && m / d >= 0
                          }
                      }
                  },
                  PSEUDO: function(a, b) {
                      var c, d = y.pseudos[a] || y.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
                      return d[N] ? d(b) : d.length > 1 ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                          for (var e, f = d(a, b), g = f.length; g--;) e = _.call(a, f[g]), a[e] = !(c[e] = f[g])
                      }) : function(a) {
                          return d(a, 0, c)
                      }) : d
                  }
              },
              pseudos: {
                  not: e(function(a) {
                      var b = [],
                          c = [],
                          d = B(a.replace(ga, "$1"));
                      return d[N] ? e(function(a, b, c, e) {
                          for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                      }) : function(a, e, f) {
                          return b[0] = a, d(b, null, f, c), !c.pop()
                      }
                  }),
                  has: e(function(a) {
                      return function(b) {
                          return g(a, b).length > 0
                      }
                  }),
                  contains: e(function(a) {
                      return function(b) {
                          return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                      }
                  }),
                  lang: e(function(a) {
                      return la.test(a || "") || g.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                          function(b) {
                              var c;
                              do
                                  if (c = H ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                              return !1
                          }
                  }),
                  target: function(b) {
                      var c = a.location && a.location.hash;
                      return c && c.slice(1) === b.id
                  },
                  root: function(a) {
                      return a === G
                  },
                  focus: function(a) {
                      return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                  },
                  enabled: function(a) {
                      return a.disabled === !1
                  },
                  disabled: function(a) {
                      return a.disabled === !0
                  },
                  checked: function(a) {
                      var b = a.nodeName.toLowerCase();
                      return "input" === b && !!a.checked || "option" === b && !!a.selected
                  },
                  selected: function(a) {
                      return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                  },
                  empty: function(a) {
                      for (a = a.firstChild; a; a = a.nextSibling)
                          if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                      return !0
                  },
                  parent: function(a) {
                      return !y.pseudos.empty(a)
                  },
                  header: function(a) {
                      return ra.test(a.nodeName)
                  },
                  input: function(a) {
                      return qa.test(a.nodeName)
                  },
                  button: function(a) {
                      var b = a.nodeName.toLowerCase();
                      return "input" === b && "button" === a.type || "button" === b
                  },
                  text: function(a) {
                      var b;
                      return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                  },
                  first: k(function() {
                      return [0]
                  }),
                  last: k(function(a, b) {
                      return [b - 1]
                  }),
                  eq: k(function(a, b, c) {
                      return [0 > c ? c + b : c]
                  }),
                  even: k(function(a, b) {
                      for (var c = 0; b > c; c += 2) a.push(c);
                      return a
                  }),
                  odd: k(function(a, b) {
                      for (var c = 1; b > c; c += 2) a.push(c);
                      return a
                  }),
                  lt: k(function(a, b, c) {
                      for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                      return a
                  }),
                  gt: k(function(a, b, c) {
                      for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                      return a
                  })
              }
          };
          for (w in {
                  radio: !0,
                  checkbox: !0,
                  file: !0,
                  password: !0,
                  image: !0
              }) y.pseudos[w] = i(w);
          for (w in {
                  submit: !0,
                  reset: !0
              }) y.pseudos[w] = j(w);
          B = g.compile = function(a, b) {
              var c, d = [],
                  e = [],
                  f = U[a + " "];
              if (!f) {
                  for (b || (b = l(a)), c = b.length; c--;) f = r(b[c]), f[N] ? d.push(f) : e.push(f);
                  f = U(a, s(e, d))
              }
              return f
          }, y.pseudos.nth = y.pseudos.eq, y.filters = v.prototype = y.pseudos, y.setFilters = new v, E(), g.attr = ia.attr, ia.find = g, ia.expr = g.selectors, ia.expr[":"] = ia.expr.pseudos, ia.unique = g.uniqueSort, ia.text = g.getText, ia.isXMLDoc = g.isXML, ia.contains = g.contains
      }(a);
  var Pa = /Until$/,
      Qa = /^(?:parents|prev(?:Until|All))/,
      Ra = /^.[^:#\[\.,]*$/,
      Sa = ia.expr.match.needsContext,
      Ta = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  ia.fn.extend({
      find: function(a) {
          var b, c, d, e = this.length;
          if ("string" != typeof a) return d = this, this.pushStack(ia(a).filter(function() {
              for (b = 0; e > b; b++)
                  if (ia.contains(d[b], this)) return !0
          }));
          for (c = [], b = 0; e > b; b++) ia.find(a, this[b], c);
          return c = this.pushStack(e > 1 ? ia.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
      },
      has: function(a) {
          var b, c = ia(a, this),
              d = c.length;
          return this.filter(function() {
              for (b = 0; d > b; b++)
                  if (ia.contains(this, c[b])) return !0
          })
      },
      not: function(a) {
          return this.pushStack(l(this, a, !1))
      },
      filter: function(a) {
          return this.pushStack(l(this, a, !0))
      },
      is: function(a) {
          return !!a && ("string" == typeof a ? Sa.test(a) ? ia(a, this.context).index(this[0]) >= 0 : ia.filter(a, this).length > 0 : this.filter(a).length > 0)
      },
      closest: function(a, b) {
          for (var c, d = 0, e = this.length, f = [], g = Sa.test(a) || "string" != typeof a ? ia(a, b || this.context) : 0; e > d; d++)
              for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                  if (g ? g.index(c) > -1 : ia.find.matchesSelector(c, a)) {
                      f.push(c);
                      break
                  }
                  c = c.parentNode
              }
          return this.pushStack(f.length > 1 ? ia.unique(f) : f)
      },
      index: function(a) {
          return a ? "string" == typeof a ? ia.inArray(this[0], ia(a)) : ia.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
          var c = "string" == typeof a ? ia(a, b) : ia.makeArray(a && a.nodeType ? [a] : a),
              d = ia.merge(this.get(), c);
          return this.pushStack(ia.unique(d))
      },
      addBack: function(a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
  }), ia.fn.andSelf = ia.fn.addBack, ia.each({
      parent: function(a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
          return ia.dir(a, "parentNode")
      },
      parentsUntil: function(a, b, c) {
          return ia.dir(a, "parentNode", c)
      },
      next: function(a) {
          return k(a, "nextSibling")
      },
      prev: function(a) {
          return k(a, "previousSibling")
      },
      nextAll: function(a) {
          return ia.dir(a, "nextSibling")
      },
      prevAll: function(a) {
          return ia.dir(a, "previousSibling");
      },
      nextUntil: function(a, b, c) {
          return ia.dir(a, "nextSibling", c)
      },
      prevUntil: function(a, b, c) {
          return ia.dir(a, "previousSibling", c)
      },
      siblings: function(a) {
          return ia.sibling((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
          return ia.sibling(a.firstChild)
      },
      contents: function(a) {
          return ia.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ia.merge([], a.childNodes)
      }
  }, function(a, b) {
      ia.fn[a] = function(c, d) {
          var e = ia.map(this, b, c);
          return Pa.test(a) || (d = c), d && "string" == typeof d && (e = ia.filter(d, e)), e = this.length > 1 && !Ta[a] ? ia.unique(e) : e, this.length > 1 && Qa.test(a) && (e = e.reverse()), this.pushStack(e)
      }
  }), ia.extend({
      filter: function(a, b, c) {
          return c && (a = ":not(" + a + ")"), 1 === b.length ? ia.find.matchesSelector(b[0], a) ? [b[0]] : [] : ia.find.matches(a, b)
      },
      dir: function(a, c, d) {
          for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ia(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
          return e
      },
      sibling: function(a, b) {
          for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
          return c
      }
  });
  var Ua = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Va = / jQuery\d+="(?:null|\d+)"/g,
      Wa = RegExp("<(?:" + Ua + ")[\\s/>]", "i"),
      Xa = /^\s+/,
      Ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Za = /<([\w:]+)/,
      $a = /<tbody/i,
      _a = /<|&#?\w+;/,
      ab = /<(?:script|style|link)/i,
      bb = /^(?:checkbox|radio)$/i,
      cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      db = /^$|\/(?:java|ecma)script/i,
      eb = /^true\/(.*)/,
      fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      gb = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          area: [1, "<map>", "</map>"],
          param: [1, "<object>", "</object>"],
          thead: [1, "<table>", "</table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: ia.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      hb = m(W),
      ib = hb.appendChild(W.createElement("div"));
  gb.optgroup = gb.option, gb.tbody = gb.tfoot = gb.colgroup = gb.caption = gb.thead, gb.th = gb.td, ia.fn.extend({
      text: function(a) {
          return ia.access(this, function(a) {
              return a === b ? ia.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(a))
          }, null, a, arguments.length)
      },
      wrapAll: function(a) {
          if (ia.isFunction(a)) return this.each(function(b) {
              ia(this).wrapAll(a.call(this, b))
          });
          if (this[0]) {
              var b = ia(a, this[0].ownerDocument).eq(0).clone(!0);
              this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                  for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                  return a
              }).append(this)
          }
          return this
      },
      wrapInner: function(a) {
          return ia.isFunction(a) ? this.each(function(b) {
              ia(this).wrapInner(a.call(this, b))
          }) : this.each(function() {
              var b = ia(this),
                  c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a)
          })
      },
      wrap: function(a) {
          var b = ia.isFunction(a);
          return this.each(function(c) {
              ia(this).wrapAll(b ? a.call(this, c) : a)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              ia.nodeName(this, "body") || ia(this).replaceWith(this.childNodes)
          }).end()
      },
      append: function() {
          return this.domManip(arguments, !0, function(a) {
              (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
          })
      },
      prepend: function() {
          return this.domManip(arguments, !0, function(a) {
              (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
          })
      },
      before: function() {
          return this.domManip(arguments, !1, function(a) {
              this.parentNode && this.parentNode.insertBefore(a, this)
          })
      },
      after: function() {
          return this.domManip(arguments, !1, function(a) {
              this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
          })
      },
      remove: function(a, b) {
          for (var c, d = 0; null != (c = this[d]); d++)(!a || ia.filter(a, [c]).length > 0) && (b || 1 !== c.nodeType || ia.cleanData(t(c)), c.parentNode && (b && ia.contains(c.ownerDocument, c) && q(t(c, "script")), c.parentNode.removeChild(c)));
          return this
      },
      empty: function() {
          for (var a, b = 0; null != (a = this[b]); b++) {
              for (1 === a.nodeType && ia.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
              a.options && ia.nodeName(a, "select") && (a.options.length = 0)
          }
          return this
      },
      clone: function(a, b) {
          return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
              return ia.clone(this, a, b)
          })
      },
      html: function(a) {
          return ia.access(this, function(a) {
              var c = this[0] || {},
                  d = 0,
                  e = this.length;
              if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Va, "") : b;
              if (!("string" != typeof a || ab.test(a) || !ia.support.htmlSerialize && Wa.test(a) || !ia.support.leadingWhitespace && Xa.test(a) || gb[(Za.exec(a) || ["", ""])[1].toLowerCase()])) {
                  a = a.replace(Ya, "<$1></$2>");
                  try {
                      for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ia.cleanData(t(c, !1)), c.innerHTML = a);
                      c = 0
                  } catch (f) {}
              }
              c && this.empty().append(a)
          }, null, a, arguments.length)
      },
      replaceWith: function(a) {
          var b = ia.isFunction(a);
          return b || "string" == typeof a || (a = ia(a).not(this).detach()), this.domManip([a], !0, function(a) {
              var b = this.nextSibling,
                  c = this.parentNode;
              c && (ia(this).remove(), c.insertBefore(a, b))
          })
      },
      detach: function(a) {
          return this.remove(a, !0)
      },
      domManip: function(a, c, d) {
          a = ba.apply([], a);
          var e, f, g, h, i, j, k = 0,
              l = this.length,
              m = this,
              q = l - 1,
              r = a[0],
              s = ia.isFunction(r);
          if (s || !(1 >= l || "string" != typeof r || ia.support.checkClone) && cb.test(r)) return this.each(function(e) {
              var f = m.eq(e);
              s && (a[0] = r.call(this, e, c ? f.html() : b)), f.domManip(a, c, d)
          });
          if (l && (j = ia.buildFragment(a, this[0].ownerDocument, !1, this), e = j.firstChild, 1 === j.childNodes.length && (j = e), e)) {
              for (c = c && ia.nodeName(e, "tr"), h = ia.map(t(j, "script"), o), g = h.length; l > k; k++) f = j, k !== q && (f = ia.clone(f, !0, !0), g && ia.merge(h, t(f, "script"))), d.call(c && ia.nodeName(this[k], "table") ? n(this[k], "tbody") : this[k], f, k);
              if (g)
                  for (i = h[h.length - 1].ownerDocument, ia.map(h, p), k = 0; g > k; k++) f = h[k], db.test(f.type || "") && !ia._data(f, "globalEval") && ia.contains(i, f) && (f.src ? ia.ajax({
                      url: f.src,
                      type: "GET",
                      dataType: "script",
                      async: !1,
                      global: !1,
                      "throws": !0
                  }) : ia.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fb, "")));
              j = e = null
          }
          return this
      }
  }), ia.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(a, b) {
      ia.fn[a] = function(a) {
          for (var c, d = 0, e = [], f = ia(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ia(f[d])[b](c), ca.apply(e, c.get());
          return this.pushStack(e)
      }
  }), ia.extend({
      clone: function(a, b, c) {
          var d, e, f, g, h, i = ia.contains(a.ownerDocument, a);
          if (ia.support.html5Clone || ia.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ib.innerHTML = a.outerHTML, ib.removeChild(f = ib.firstChild)), !(ia.support.noCloneEvent && ia.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ia.isXMLDoc(a)))
              for (d = t(f), h = t(a), g = 0; null != (e = h[g]); ++g) d[g] && s(e, d[g]);
          if (b)
              if (c)
                  for (h = h || t(a), d = d || t(f), g = 0; null != (e = h[g]); g++) r(e, d[g]);
              else r(a, f);
          return d = t(f, "script"), d.length > 0 && q(d, !i && t(a, "script")), d = h = e = null, f
      },
      buildFragment: function(a, b, c, d) {
          for (var e, f, g, h, i, j, k, l = a.length, n = m(b), o = [], p = 0; l > p; p++)
              if (f = a[p], f || 0 === f)
                  if ("object" === ia.type(f)) ia.merge(o, f.nodeType ? [f] : f);
                  else if (_a.test(f)) {
              for (h = h || n.appendChild(b.createElement("div")), i = (Za.exec(f) || ["", ""])[1].toLowerCase(), k = gb[i] || gb._default, h.innerHTML = k[1] + f.replace(Ya, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
              if (!ia.support.leadingWhitespace && Xa.test(f) && o.push(b.createTextNode(Xa.exec(f)[0])), !ia.support.tbody)
                  for (f = "table" !== i || $a.test(f) ? "<table>" !== k[1] || $a.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ia.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
              for (ia.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
              h = n.lastChild
          } else o.push(b.createTextNode(f));
          for (h && n.removeChild(h), ia.support.appendChecked || ia.grep(t(o, "input"), u), p = 0; f = o[p++];)
              if ((!d || -1 === ia.inArray(f, d)) && (g = ia.contains(f.ownerDocument, f), h = t(n.appendChild(f), "script"), g && q(h), c))
                  for (e = 0; f = h[e++];) db.test(f.type || "") && c.push(f);
          return h = null, n
      },
      cleanData: function(a, b) {
          for (var c, d, e, f, g = 0, h = ia.expando, i = ia.cache, j = ia.support.deleteExpando, k = ia.event.special; null != (c = a[g]); g++)
              if ((b || ia.acceptData(c)) && (e = c[h], f = e && i[e])) {
                  if (f.events)
                      for (d in f.events) k[d] ? ia.event.remove(c, d) : ia.removeEvent(c, d, f.handle);
                  i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== V ? c.removeAttribute(h) : c[h] = null, _.push(e))
              }
      }
  });
  var jb, kb, lb, mb = /alpha\([^)]*\)/i,
      nb = /opacity\s*=\s*([^)]*)/,
      ob = /^(top|right|bottom|left)$/,
      pb = /^(none|table(?!-c[ea]).+)/,
      qb = /^margin/,
      rb = RegExp("^(" + ja + ")(.*)$", "i"),
      sb = RegExp("^(" + ja + ")(?!px)[a-z%]+$", "i"),
      tb = RegExp("^([+-])=(" + ja + ")", "i"),
      ub = {
          BODY: "block"
      },
      vb = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      wb = {
          letterSpacing: 0,
          fontWeight: 400
      },
      xb = ["Top", "Right", "Bottom", "Left"],
      yb = ["Webkit", "O", "Moz", "ms"];
  ia.fn.extend({
      css: function(a, c) {
          return ia.access(this, function(a, c, d) {
              var e, f, g = {},
                  h = 0;
              if (ia.isArray(c)) {
                  for (f = kb(a), e = c.length; e > h; h++) g[c[h]] = ia.css(a, c[h], !1, f);
                  return g
              }
              return d !== b ? ia.style(a, c, d) : ia.css(a, c)
          }, a, c, arguments.length > 1)
      },
      show: function() {
          return x(this, !0)
      },
      hide: function() {
          return x(this)
      },
      toggle: function(a) {
          var b = "boolean" == typeof a;
          return this.each(function() {
              (b ? a : w(this)) ? ia(this).show(): ia(this).hide()
          })
      }
  }), ia.extend({
      cssHooks: {
          opacity: {
              get: function(a, b) {
                  if (b) {
                      var c = lb(a, "opacity");
                      return "" === c ? "1" : c
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": ia.support.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(a, c, d, e) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
              var f, g, h, i = ia.camelCase(c),
                  j = a.style;
              if (c = ia.cssProps[i] || (ia.cssProps[i] = v(j, i)), h = ia.cssHooks[c] || ia.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
              if (g = typeof d, "string" === g && (f = tb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ia.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ia.cssNumber[i] || (d += "px"), ia.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                  j[c] = d
              } catch (k) {}
          }
      },
      css: function(a, c, d, e) {
          var f, g, h, i = ia.camelCase(c);
          return c = ia.cssProps[i] || (ia.cssProps[i] = v(a.style, i)), h = ia.cssHooks[c] || ia.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lb(a, c, e)), "normal" === g && c in wb && (g = wb[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ia.isNumeric(f) ? f || 0 : g) : g
      },
      swap: function(a, b, c, d) {
          var e, f, g = {};
          for (f in b) g[f] = a.style[f], a.style[f] = b[f];
          e = c.apply(a, d || []);
          for (f in b) a.style[f] = g[f];
          return e
      }
  }), a.getComputedStyle ? (kb = function(b) {
      return a.getComputedStyle(b, null)
  }, lb = function(a, c, d) {
      var e, f, g, h = d || kb(a),
          i = h ? h.getPropertyValue(c) || h[c] : b,
          j = a.style;
      return h && ("" !== i || ia.contains(a.ownerDocument, a) || (i = ia.style(a, c)), sb.test(i) && qb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
  }) : W.documentElement.currentStyle && (kb = function(a) {
      return a.currentStyle
  }, lb = function(a, c, d) {
      var e, f, g, h = d || kb(a),
          i = h ? h[c] : b,
          j = a.style;
      return null == i && j && j[c] && (i = j[c]), sb.test(i) && !ob.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
  }), ia.each(["height", "width"], function(a, c) {
      ia.cssHooks[c] = {
          get: function(a, d, e) {
              return d ? 0 === a.offsetWidth && pb.test(ia.css(a, "display")) ? ia.swap(a, vb, function() {
                  return A(a, c, e)
              }) : A(a, c, e) : b
          },
          set: function(a, b, d) {
              var e = d && kb(a);
              return y(a, b, d ? z(a, c, d, ia.support.boxSizing && "border-box" === ia.css(a, "boxSizing", !1, e), e) : 0)
          }
      }
  }), ia.support.opacity || (ia.cssHooks.opacity = {
      get: function(a, b) {
          return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
      },
      set: function(a, b) {
          var c = a.style,
              d = a.currentStyle,
              e = ia.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
              f = d && d.filter || c.filter || "";
          c.zoom = 1, (b >= 1 || "" === b) && "" === ia.trim(f.replace(mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mb.test(f) ? f.replace(mb, e) : f + " " + e)
      }
  }), ia(function() {
      ia.support.reliableMarginRight || (ia.cssHooks.marginRight = {
          get: function(a, c) {
              return c ? ia.swap(a, {
                  display: "inline-block"
              }, lb, [a, "marginRight"]) : b
          }
      }), !ia.support.pixelPosition && ia.fn.position && ia.each(["top", "left"], function(a, c) {
          ia.cssHooks[c] = {
              get: function(a, d) {
                  return d ? (d = lb(a, c), sb.test(d) ? ia(a).position()[c] + "px" : d) : b
              }
          }
      })
  }), ia.expr && ia.expr.filters && (ia.expr.filters.hidden = function(a) {
      return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !ia.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ia.css(a, "display"))
  }, ia.expr.filters.visible = function(a) {
      return !ia.expr.filters.hidden(a)
  }), ia.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(a, b) {
      ia.cssHooks[a + b] = {
          expand: function(c) {
              for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xb[d] + b] = f[d] || f[d - 2] || f[0];
              return e
          }
      }, qb.test(a) || (ia.cssHooks[a + b].set = y)
  });
  var zb = /%20/g,
      Ab = /\[\]$/,
      Bb = /\r?\n/g,
      Cb = /^(?:submit|button|image|reset|file)$/i,
      Db = /^(?:input|select|textarea|keygen)/i;
  ia.fn.extend({
      serialize: function() {
          return ia.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var a = ia.prop(this, "elements");
              return a ? ia.makeArray(a) : this
          }).filter(function() {
              var a = this.type;
              return this.name && !ia(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !bb.test(a))
          }).map(function(a, b) {
              var c = ia(this).val();
              return null == c ? null : ia.isArray(c) ? ia.map(c, function(a) {
                  return {
                      name: b.name,
                      value: a.replace(Bb, "\r\n")
                  }
              }) : {
                  name: b.name,
                  value: c.replace(Bb, "\r\n")
              }
          }).get()
      }
  }), ia.param = function(a, c) {
      var d, e = [],
          f = function(a, b) {
              b = ia.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
          };
      if (c === b && (c = ia.ajaxSettings && ia.ajaxSettings.traditional), ia.isArray(a) || a.jquery && !ia.isPlainObject(a)) ia.each(a, function() {
          f(this.name, this.value)
      });
      else
          for (d in a) D(d, a[d], c, f);
      return e.join("&").replace(zb, "+")
  }, ia.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
      ia.fn[b] = function(a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
  }), ia.fn.hover = function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
  };
  var Eb, Fb, Gb = ia.now(),
      Hb = /\?/,
      Ib = /#.*$/,
      Jb = /([?&])_=[^&]*/,
      Kb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Lb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mb = /^(?:GET|HEAD)$/,
      Nb = /^\/\//,
      Ob = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Pb = ia.fn.load,
      Qb = {},
      Rb = {},
      Sb = "*/".concat("*");
  try {
      Fb = X.href
  } catch (Tb) {
      Fb = W.createElement("a"), Fb.href = "", Fb = Fb.href
  }
  Eb = Ob.exec(Fb.toLowerCase()) || [], ia.fn.load = function(a, c, d) {
      if ("string" != typeof a && Pb) return Pb.apply(this, arguments);
      var e, f, g, h = this,
          i = a.indexOf(" ");
      return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ia.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ia.ajax({
          url: a,
          type: g,
          dataType: "html",
          data: c
      }).done(function(a) {
          f = arguments, h.html(e ? ia("<div>").append(ia.parseHTML(a)).find(e) : a)
      }).complete(d && function(a, b) {
          h.each(d, f || [a.responseText, b, a])
      }), this
  }, ia.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      ia.fn[b] = function(a) {
          return this.on(b, a)
      }
  }), ia.each(["get", "post"], function(a, c) {
      ia[c] = function(a, d, e, f) {
          return ia.isFunction(d) && (f = f || e, e = d, d = b), ia.ajax({
              url: a,
              type: c,
              dataType: f,
              data: d,
              success: e
          })
      }
  }), ia.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Fb,
          type: "GET",
          isLocal: Lb.test(Eb[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Sb,
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
              text: "responseText"
          },
          converters: {
              "* text": a.String,
              "text html": !0,
              "text json": ia.parseJSON,
              "text xml": ia.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(a, b) {
          return b ? G(G(a, ia.ajaxSettings), b) : G(ia.ajaxSettings, a)
      },
      ajaxPrefilter: E(Qb),
      ajaxTransport: E(Rb),
      ajax: function(a, c) {
          function d(a, c, d, e) {
              var f, l, s, t, v, x = c;
              2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, d && (t = H(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ia.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ia.etag[g] = v)), 204 === a ? (f = !0, x = "nocontent") : 304 === a ? (f = !0, x = "notmodified") : (f = I(m, t), x = f.state, l = f.data, s = f.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ia.active || ia.event.trigger("ajaxStop")))
          }
          "object" == typeof a && (c = a, a = b), c = c || {};
          var e, f, g, h, i, j, k, l, m = ia.ajaxSetup({}, c),
              n = m.context || m,
              o = m.context && (n.nodeType || n.jquery) ? ia(n) : ia.event,
              p = ia.Deferred(),
              q = ia.Callbacks("once memory"),
              r = m.statusCode || {},
              s = {},
              t = {},
              u = 0,
              v = "canceled",
              w = {
                  readyState: 0,
                  getResponseHeader: function(a) {
                      var b;
                      if (2 === u) {
                          if (!l)
                              for (l = {}; b = Kb.exec(h);) l[b[1].toLowerCase()] = b[2];
                          b = l[a.toLowerCase()]
                      }
                      return null == b ? null : b
                  },
                  getAllResponseHeaders: function() {
                      return 2 === u ? h : null
                  },
                  setRequestHeader: function(a, b) {
                      var c = a.toLowerCase();
                      return u || (a = t[c] = t[c] || a, s[a] = b), this
                  },
                  overrideMimeType: function(a) {
                      return u || (m.mimeType = a), this
                  },
                  statusCode: function(a) {
                      var b;
                      if (a)
                          if (2 > u)
                              for (b in a) r[b] = [r[b], a[b]];
                          else w.always(a[w.status]);
                      return this
                  },
                  abort: function(a) {
                      var b = a || v;
                      return k && k.abort(b), d(0, b), this
                  }
              };
          if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fb) + "").replace(Ib, "").replace(Nb, Eb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ia.trim(m.dataType || "*").toLowerCase().match(ka) || [""], null == m.crossDomain && (e = Ob.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Eb[1] && e[2] === Eb[2] && (e[3] || ("http:" === e[1] ? 80 : 443)) == (Eb[3] || ("http:" === Eb[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = ia.param(m.data, m.traditional)), F(Qb, m, c, w), 2 === u) return w;
          j = m.global, j && 0 === ia.active++ && ia.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jb.test(g) ? g.replace(Jb, "$1_=" + Gb++) : g + (Hb.test(g) ? "&" : "?") + "_=" + Gb++)), m.ifModified && (ia.lastModified[g] && w.setRequestHeader("If-Modified-Since", ia.lastModified[g]), ia.etag[g] && w.setRequestHeader("If-None-Match", ia.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : m.accepts["*"]);
          for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
          if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
          v = "abort";
          for (f in {
                  success: 1,
                  error: 1,
                  complete: 1
              }) w[f](m[f]);
          if (k = F(Rb, m, c, w)) {
              w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                  w.abort("timeout")
              }, m.timeout));
              try {
                  u = 1, k.send(s, d)
              } catch (x) {
                  if (!(2 > u)) throw x;
                  d(-1, x)
              }
          } else d(-1, "No Transport");
          return w
      },
      getScript: function(a, c) {
          return ia.get(a, b, c, "script")
      },
      getJSON: function(a, b, c) {
          return ia.get(a, b, c, "json")
      }
  }), ia.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(a) {
              return ia.globalEval(a), a
          }
      }
  }), ia.ajaxPrefilter("script", function(a) {
      a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), ia.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
          var c, d = W.head || ia("head")[0] || W.documentElement;
          return {
              send: function(b, e) {
                  c = W.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                      (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                  }, d.insertBefore(c, d.firstChild)
              },
              abort: function() {
                  c && c.onload(b, !0)
              }
          }
      }
  });
  var Ub = [],
      Vb = /(=)\?(?=&|$)|\?\?/;
  ia.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var a = Ub.pop() || ia.expando + "_" + Gb++;
          return this[a] = !0, a
      }
  }), ia.ajaxPrefilter("json jsonp", function(c, d, e) {
      var f, g, h, i = c.jsonp !== !1 && (Vb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vb.test(c.data) && "data");
      return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ia.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vb, "$1" + f) : c.jsonp !== !1 && (c.url += (Hb.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
          return h || ia.error(f + " was not called"), h[0]
      }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
          h = arguments
      }, e.always(function() {
          a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ub.push(f)), h && ia.isFunction(g) && g(h[0]), h = g = b
      }), "script") : b
  });
  var Wb, Xb, Yb = 0,
      Zb = a.ActiveXObject && function() {
          var a;
          for (a in Wb) Wb[a](b, !0)
      };
  ia.ajaxSettings.xhr = a.ActiveXObject ? function() {
      return !this.isLocal && J() || K()
  } : J, Xb = ia.ajaxSettings.xhr(), ia.support.cors = !!Xb && "withCredentials" in Xb, Xb = ia.support.ajax = !!Xb, Xb && ia.ajaxTransport(function(c) {
      if (!c.crossDomain || ia.support.cors) {
          var d;
          return {
              send: function(e, f) {
                  var g, h, i = c.xhr();
                  if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                      for (h in c.xhrFields) i[h] = c.xhrFields[h];
                  c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                  try {
                      for (h in e) i.setRequestHeader(h, e[h])
                  } catch (j) {}
                  i.send(c.hasContent && c.data || null), d = function(a, e) {
                      var h, j, k, l;
                      try {
                          if (d && (e || 4 === i.readyState))
                              if (d = b, g && (i.onreadystatechange = ia.noop, Zb && delete Wb[g]), e) 4 !== i.readyState && i.abort();
                              else {
                                  l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                  try {
                                      k = i.statusText
                                  } catch (m) {
                                      k = ""
                                  }
                                  h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                              }
                      } catch (n) {
                          e || f(-1, n)
                      }
                      l && f(h, k, l, j)
                  }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yb, Zb && (Wb || (Wb = {}, ia(a).unload(Zb)), Wb[g] = d), i.onreadystatechange = d) : d()
              },
              abort: function() {
                  d && d(b, !0)
              }
          }
      }
  });
  var $b, _b, ac = /^(?:toggle|show|hide)$/,
      bc = RegExp("^(?:([+-])=|)(" + ja + ")([a-z%]*)$", "i"),
      cc = /queueHooks$/,
      dc = [P],
      ec = {
          "*": [function(a, b) {
              var c, d, e = this.createTween(a, b),
                  f = bc.exec(b),
                  g = e.cur(),
                  h = +g || 0,
                  i = 1,
                  j = 20;
              if (f) {
                  if (c = +f[2], d = f[3] || (ia.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                      h = ia.css(e.elem, a, !0) || c || 1;
                      do i = i || ".5", h /= i, ia.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                  }
                  e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
              }
              return e
          }]
      };
  ia.Animation = ia.extend(N, {
      tweener: function(a, b) {
          ia.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
          for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
      },
      prefilter: function(a, b) {
          b ? dc.unshift(a) : dc.push(a)
      }
  }), ia.Tween = Q, Q.prototype = {
      constructor: Q,
      init: function(a, b, c, d, e, f) {
          this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ia.cssNumber[c] ? "" : "px")
      },
      cur: function() {
          var a = Q.propHooks[this.prop];
          return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
      },
      run: function(a) {
          var b, c = Q.propHooks[this.prop];
          return this.pos = b = this.options.duration ? ia.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
      }
  }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
      _default: {
          get: function(a) {
              var b;
              return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ia.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
          },
          set: function(a) {
              ia.fx.step[a.prop] ? ia.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ia.cssProps[a.prop]] || ia.cssHooks[a.prop]) ? ia.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
          }
      }
  }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
      set: function(a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
  }, ia.each(["toggle", "show", "hide"], function(a, b) {
      var c = ia.fn[b];
      ia.fn[b] = function(a, d, e) {
          return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(R(b, !0), a, d, e)
      }
  }), ia.fn.extend({
      fadeTo: function(a, b, c, d) {
          return this.filter(w).css("opacity", 0).show().end().animate({
              opacity: b
          }, a, c, d)
      },
      animate: function(a, b, c, d) {
          var e = ia.isEmptyObject(a),
              f = ia.speed(b, c, d),
              g = function() {
                  var b = N(this, ia.extend({}, a), f);
                  g.finish = function() {
                      b.stop(!0)
                  }, (e || ia._data(this, "finish")) && b.stop(!0)
              };
          return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, c, d) {
          var e = function(a) {
              var b = a.stop;
              delete a.stop, b(d)
          };
          return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
              var b = !0,
                  c = null != a && a + "queueHooks",
                  f = ia.timers,
                  g = ia._data(this);
              if (c) g[c] && g[c].stop && e(g[c]);
              else
                  for (c in g) g[c] && g[c].stop && cc.test(c) && e(g[c]);
              for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
              (b || !d) && ia.dequeue(this, a)
          })
      },
      finish: function(a) {
          return a !== !1 && (a = a || "fx"), this.each(function() {
              var b, c = ia._data(this),
                  d = c[a + "queue"],
                  e = c[a + "queueHooks"],
                  f = ia.timers,
                  g = d ? d.length : 0;
              for (c.finish = !0, ia.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish
          })
      }
  }), ia.each({
      slideDown: R("show"),
      slideUp: R("hide"),
      slideToggle: R("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(a, b) {
      ia.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d)
      }
  }), ia.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? ia.extend({}, a) : {
          complete: c || !c && b || ia.isFunction(a) && a,
          duration: a,
          easing: c && b || b && !ia.isFunction(b) && b
      };
      return d.duration = ia.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ia.fx.speeds ? ia.fx.speeds[d.duration] : ia.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
          ia.isFunction(d.old) && d.old.call(this), d.queue && ia.dequeue(this, d.queue)
      }, d
  }, ia.easing = {
      linear: function(a) {
          return a
      },
      swing: function(a) {
          return .5 - Math.cos(a * Math.PI) / 2
      }
  }, ia.timers = [], ia.fx = Q.prototype.init, ia.fx.tick = function() {
      var a, c = ia.timers,
          d = 0;
      for ($b = ia.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
      c.length || ia.fx.stop(), $b = b
  }, ia.fx.timer = function(a) {
      a() && ia.timers.push(a) && ia.fx.start()
  }, ia.fx.interval = 13, ia.fx.start = function() {
      _b || (_b = setInterval(ia.fx.tick, ia.fx.interval))
  }, ia.fx.stop = function() {
      clearInterval(_b), _b = null
  }, ia.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  }, ia.fx.step = {}, ia.expr && ia.expr.filters && (ia.expr.filters.animated = function(a) {
      return ia.grep(ia.timers, function(b) {
          return a === b.elem
      }).length
  }), ia.fn.offset = function(a) {
      if (arguments.length) return a === b ? this : this.each(function(b) {
          ia.offset.setOffset(this, a, b)
      });
      var c, d, e = {
              top: 0,
              left: 0
          },
          f = this[0],
          g = f && f.ownerDocument;
      return g ? (c = g.documentElement, ia.contains(c, f) ? (typeof f.getBoundingClientRect !== V && (e = f.getBoundingClientRect()), d = S(g), {
          top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
          left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
      }) : e) : void 0
  }, ia.offset = {
      setOffset: function(a, b, c) {
          var d = ia.css(a, "position");
          "static" === d && (a.style.position = "relative");
          var e, f, g = ia(a),
              h = g.offset(),
              i = ia.css(a, "top"),
              j = ia.css(a, "left"),
              k = ("absolute" === d || "fixed" === d) && ia.inArray("auto", [i, j]) > -1,
              l = {},
              m = {};
          k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ia.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
      }
  }, ia.fn.extend({
      position: function() {
          if (this[0]) {
              var a, b, c = {
                      top: 0,
                      left: 0
                  },
                  d = this[0];
              return "fixed" === ia.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ia.nodeName(a[0], "html") || (c = a.offset()), c.top += ia.css(a[0], "borderTopWidth", !0), c.left += ia.css(a[0], "borderLeftWidth", !0)), {
                  top: b.top - c.top - ia.css(d, "marginTop", !0),
                  left: b.left - c.left - ia.css(d, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var a = this.offsetParent || W.documentElement; a && !ia.nodeName(a, "html") && "static" === ia.css(a, "position");) a = a.offsetParent;
              return a || W.documentElement
          })
      }
  }), ia.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(a, c) {
      var d = /Y/.test(c);
      ia.fn[a] = function(e) {
          return ia.access(this, function(a, e, f) {
              var g = S(a);
              return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ia(g).scrollLeft() : f, d ? f : ia(g).scrollTop()) : a[e] = f, b)
          }, a, e, arguments.length, null)
      }
  }), ia.each({
      Height: "height",
      Width: "width"
  }, function(a, c) {
      ia.each({
          padding: "inner" + a,
          content: c,
          "": "outer" + a
      }, function(d, e) {
          ia.fn[e] = function(e, f) {
              var g = arguments.length && (d || "boolean" != typeof e),
                  h = d || (e === !0 || f === !0 ? "margin" : "border");
              return ia.access(this, function(c, d, e) {
                  var f;
                  return ia.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ia.css(c, d, h) : ia.style(c, d, e, h)
              }, c, g ? e : b, g, null)
          }
      })
  }), a.jQuery = a.$ = ia, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
      return ia
  })
}(window);;
! function(a) {
  var b = function(b, c) {
      this.element = a(b), this.picker = a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || c.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
      var d = this.element.data("slider-tooltip") || c.tooltip;
      switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), this.orientation = this.element.data("slider-orientation") || c.orientation, this.orientation) {
          case "vertical":
              this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
              break;
          default:
              this.picker.addClass("slider-horizontal").css("width", this.element.outerWidth()), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
      }
      this.min = this.element.data("slider-min") || c.min, this.max = this.element.data("slider-max") || c.max, this.step = this.element.data("slider-step") || c.step, this.value = this.element.data("slider-value") || c.value, this.value[1] && (this.range = !0), this.selection = this.element.data("slider-selection") || c.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style;
      var e = this.element.data("slider-handle") || c.handle;
      switch (e) {
          case "round":
              this.handle1.addClass("round"), this.handle2.addClass("round");
              break;
          case "triangle":
              this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
      }
      this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = c.formater, this.layout(), this.touchCapable ? this.picker.on({
          touchstart: a.proxy(this.mousedown, this)
      }) : this.picker.on({
          mousedown: a.proxy(this.mousedown, this)
      }), "show" === d ? this.picker.on({
          mouseenter: a.proxy(this.showTooltip, this),
          mouseleave: a.proxy(this.hideTooltip, this)
      }) : this.tooltip.addClass("hide")
  };
  b.prototype = {
      constructor: b,
      over: !1,
      inDrag: !1,
      showTooltip: function() {
          this.tooltip.addClass("in"), this.over = !0
      },
      hideTooltip: function() {
          this.inDrag === !1 && this.tooltip.removeClass("in"), this.over = !1
      },
      layout: function() {
          this.handle1Stype[this.stylePos] = this.percentage[0] + "%", this.handle2Stype[this.stylePos] = this.percentage[1] + "%", "vertical" == this.orientation ? (this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + "%") : (this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
      },
      mousedown: function(b) {
          this.touchCapable && "touchstart" === b.type && (b = b.originalEvent), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
          var c = this.getPercentage(b);
          if (this.range) {
              var d = Math.abs(this.percentage[0] - c),
                  e = Math.abs(this.percentage[1] - c);
              this.dragged = e > d ? 0 : 1
          } else this.dragged = 0;
          this.percentage[this.dragged] = c, this.layout(), this.touchCapable ? a(document).on({
              touchmove: a.proxy(this.mousemove, this),
              touchend: a.proxy(this.mouseup, this)
          }) : a(document).on({
              mousemove: a.proxy(this.mousemove, this),
              mouseup: a.proxy(this.mouseup, this)
          }), this.inDrag = !0;
          var f = this.calculateValue();
          return this.element.trigger({
              type: "slideStart",
              value: f
          }).trigger({
              type: "slide",
              value: f
          }), !1
      },
      mousemove: function(a) {
          this.touchCapable && "touchmove" === a.type && (a = a.originalEvent);
          var b = this.getPercentage(a);
          this.range && (0 === this.dragged && this.percentage[1] < b ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > b && (this.percentage[1] = this.percentage[0], this.dragged = 0)), this.percentage[this.dragged] = b, this.layout();
          var c = this.calculateValue();
          return this.element.trigger({
              type: "slide",
              value: c
          }).data("value", c).prop("value", c), !1
      },
      mouseup: function(b) {
          this.touchCapable ? a(document).off({
              touchmove: this.mousemove,
              touchend: this.mouseup
          }) : a(document).off({
              mousemove: this.mousemove,
              mouseup: this.mouseup
          }), this.inDrag = !1, 0 == this.over && this.hideTooltip(), this.element;
          var c = this.calculateValue();
          return this.element.trigger({
              type: "slideStop",
              value: c
          }).data("value", c).prop("value", c), !1
      },
      calculateValue: function() {
          var a;
          return this.range ? (a = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step], this.value = a) : (a = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.value = [a, this.value[1]]), a
      },
      getPercentage: function(a) {
          this.touchCapable && (a = a.touches[0]);
          var b = 100 * (a[this.mousePos] - this.offset[this.stylePos]) / this.size;
          return b = Math.round(b / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, b))
      },
      getValue: function() {
          return this.range ? this.value : this.value[0]
      },
      setValue: function(a) {
          this.value = a, this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout()
      }
  }, a.fn.slider = function(c, d) {
      return this.each(function() {
          var e = a(this),
              f = e.data("slider"),
              g = "object" == typeof c && c;
          f || e.data("slider", f = new b(this, a.extend({}, a.fn.slider.defaults, g))), "string" == typeof c && f[c](d)
      })
  }, a.fn.slider.defaults = {
      min: 0,
      max: 10,
      step: 1,
      orientation: "horizontal",
      value: 5,
      selection: "before",
      tooltip: "show",
      handle: "round",
      formater: function(a) {
          return a
      }
  }, a.fn.slider.Constructor = b
}(window.jQuery);;
$(function() {
  $("input[type=file]").each(function(a, b) {
      if ("undefined" == typeof $(this).attr("data-bfi-disabled")) {
          var c = "Browse";
          "undefined" != typeof $(this).attr("title") && (c = $(this).attr("title"));
          var d = $("<div>").append($(b).eq(0).clone()).html(),
              e = $(this).attr("class");
          $(b).replaceWith('<a class="file-input-wrapper btn ' + e + '">' + c + d + "</a>")
      }
  }).promise().done(function() {
      $(".file-input-wrapper").mousemove(function(a) {
          var b, c, d, e, f, g, h, i;
          c = $(this), b = c.find("input"), d = c.offset().left, e = c.offset().top, f = b.width(), g = b.height(), h = a.pageX, i = a.pageY, moveInputX = h - d - f + 20, moveInputY = i - e - g / 2, b.css({
              left: moveInputX,
              top: moveInputY
          })
      }), $(".file-input-wrapper input[type=file]").change(function() {
          $(this).parent().next().has("file-input-name").remove(), $(this).parent().after('<span class="file-input-name">' + $(this).val() + "</span>")
      })
  });
  var a = "<style>.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }.file-input-name { margin-left: 8px; }</style>";
  $("link[rel=stylesheet]").eq(0).before(a)
});;
! function(a) {
  a(function() {
      a.support.transition = function() {
          var a = function() {
              var a, b = document.createElement("bootstrap"),
                  c = {
                      WebkitTransition: "webkitTransitionEnd",
                      MozTransition: "transitionend",
                      OTransition: "oTransitionEnd otransitionend",
                      transition: "transitionend"
                  };
              for (a in c)
                  if (void 0 !== b.style[a]) return c[a]
          }();
          return a && {
              end: a
          }
      }()
  })
}(window.jQuery), ! function(a) {
  var b = function(b, c) {
      this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
  };
  b.prototype = {
      constructor: b,
      toggle: function() {
          return this[this.isShown ? "hide" : "show"]()
      },
      show: function() {
          var b = this,
              c = a.Event("show");
          this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
              var c = a.support.transition && b.$element.hasClass("fade");
              b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                  b.$element.focus().trigger("shown")
              }) : b.$element.focus().trigger("shown")
          }))
      },
      hide: function(b) {
          b && b.preventDefault();
          b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
      },
      enforceFocus: function() {
          var b = this;
          a(document).on("focusin.modal", function(a) {
              b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
          })
      },
      escape: function() {
          var a = this;
          this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
              27 == b.which && a.hide()
          }) : this.isShown || this.$element.off("keyup.dismiss.modal")
      },
      hideWithTransition: function() {
          var b = this,
              c = setTimeout(function() {
                  b.$element.off(a.support.transition.end), b.hideModal()
              }, 500);
          this.$element.one(a.support.transition.end, function() {
              clearTimeout(c), b.hideModal()
          })
      },
      hideModal: function() {
          var a = this;
          this.$element.hide(), this.backdrop(function() {
              a.removeBackdrop(), a.$element.trigger("hidden")
          })
      },
      removeBackdrop: function() {
          this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
      },
      backdrop: function(b) {
          var c = this.$element.hasClass("fade") ? "fade" : "";
          if (this.isShown && this.options.backdrop) {
              var d = a.support.transition && c;
              if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
              d ? this.$backdrop.one(a.support.transition.end, b) : b()
          } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
      }
  };
  var c = a.fn.modal;
  a.fn.modal = function(c) {
      return this.each(function() {
          var d = a(this),
              e = d.data("modal"),
              f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
          e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
      })
  }, a.fn.modal.defaults = {
      backdrop: !0,
      keyboard: !0,
      show: !0
  }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
      return a.fn.modal = c, this
  }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
      var c = a(this),
          d = c.attr("href"),
          e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
          f = e.data("modal") ? "toggle" : a.extend({
              remote: !/#/.test(d) && d
          }, e.data(), c.data());
      b.preventDefault(), e.modal(f).one("hide", function() {
          c.focus()
      })
  })
}(window.jQuery), ! function(a) {
  var b = function(a, b) {
      this.init("tooltip", a, b)
  };
  b.prototype = {
      constructor: b,
      init: function(b, c, d) {
          var e, f, g, h, i;
          for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
          this.options.selector ? this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: ""
          }) : this.fixTitle()
      },
      getOptions: function(b) {
          return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
              show: b.delay,
              hide: b.delay
          }), b
      },
      enter: function(b) {
          var c, d = a.fn[this.type].defaults,
              e = {};
          return this._options && a.each(this._options, function(a, b) {
              d[a] != b && (e[a] = b)
          }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
              "in" == c.hoverState && c.show()
          }, c.options.delay.show), void 0) : c.show()
      },
      leave: function(b) {
          var c = a(b.currentTarget)[this.type](this._options).data(this.type);
          return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", void(this.timeout = setTimeout(function() {
              "out" == c.hoverState && c.hide()
          }, c.options.delay.hide))) : c.hide()
      },
      show: function() {
          var b, c, d, e, f, g, h = a.Event("show");
          if (this.hasContent() && this.enabled) {
              if (this.$element.trigger(h), h.isDefaultPrevented()) return;
              switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                      top: 0,
                      left: 0,
                      display: "block"
                  }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                  case "bottom":
                      g = {
                          top: c.top + c.height,
                          left: c.left + c.width / 2 - d / 2
                      };
                      break;
                  case "top":
                      g = {
                          top: c.top - e,
                          left: c.left + c.width / 2 - d / 2
                      };
                      break;
                  case "left":
                      g = {
                          top: c.top + c.height / 2 - e / 2,
                          left: c.left - d
                      };
                      break;
                  case "right":
                      g = {
                          top: c.top + c.height / 2 - e / 2,
                          left: c.left + c.width
                      }
              }
              this.applyPlacement(g, f), this.$element.trigger("shown")
          }
      },
      applyPlacement: function(a, b) {
          var c, d, e, f, g = this.tip(),
              h = g[0].offsetWidth,
              i = g[0].offsetHeight;
          g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a)
      },
      replaceArrow: function(a, b, c) {
          this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
      },
      setContent: function() {
          var a = this.tip(),
              b = this.getTitle();
          a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
      },
      hide: function() {
          function b() {
              var b = setTimeout(function() {
                  c.off(a.support.transition.end).detach()
              }, 500);
              c.one(a.support.transition.end, function() {
                  clearTimeout(b), c.detach()
              })
          }
          var c = this.tip(),
              d = a.Event("hide");
          return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), this)
      },
      fixTitle: function() {
          var a = this.$element;
          (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
      },
      hasContent: function() {
          return this.getTitle()
      },
      getPosition: function() {
          var b = this.$element[0];
          return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
              width: b.offsetWidth,
              height: b.offsetHeight
          }, this.$element.offset())
      },
      getTitle: function() {
          var a, b = this.$element,
              c = this.options;
          return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
      },
      tip: function() {
          return this.$tip = this.$tip || a(this.options.template)
      },
      arrow: function() {
          return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
      },
      validate: function() {
          this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
      },
      enable: function() {
          this.enabled = !0
      },
      disable: function() {
          this.enabled = !1
      },
      toggleEnabled: function() {
          this.enabled = !this.enabled
      },
      toggle: function(b) {
          var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
          c.tip().hasClass("in") ? c.hide() : c.show()
      },
      destroy: function() {
          this.hide().$element.off("." + this.type).removeData(this.type)
      }
  };
  var c = a.fn.tooltip;
  a.fn.tooltip = function(c) {
      return this.each(function() {
          var d = a(this),
              e = d.data("tooltip"),
              f = "object" == typeof c && c;
          e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
      })
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1
  }, a.fn.tooltip.noConflict = function() {
      return a.fn.tooltip = c, this
  }
}(window.jQuery), ! function(a) {
  var b = function(a, b) {
      this.init("popover", a, b)
  };
  b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
      constructor: b,
      setContent: function() {
          var a = this.tip(),
              b = this.getTitle(),
              c = this.getContent();
          a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
      },
      hasContent: function() {
          return this.getTitle() || this.getContent()
      },
      getContent: function() {
          var a, b = this.$element,
              c = this.options;
          return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content")
      },
      tip: function() {
          return this.$tip || (this.$tip = a(this.options.template)), this.$tip
      },
      destroy: function() {
          this.hide().$element.off("." + this.type).removeData(this.type)
      }
  });
  var c = a.fn.popover;
  a.fn.popover = function(c) {
      return this.each(function() {
          var d = a(this),
              e = d.data("popover"),
              f = "object" == typeof c && c;
          e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
      })
  }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), a.fn.popover.noConflict = function() {
      return a.fn.popover = c, this
  }
}(window.jQuery), ! function(a) {
  var b = function(b, c) {
      this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
  };
  b.prototype.setState = function(a) {
      var b = "disabled",
          c = this.$element,
          d = c.data(),
          e = c.is("input") ? "val" : "html";
      a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
          "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
      }, 0)
  }, b.prototype.toggle = function() {
      var a = this.$element.closest('[data-toggle="buttons-radio"]');
      a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
  };
  var c = a.fn.button;
  a.fn.button = function(c) {
      return this.each(function() {
          var d = a(this),
              e = d.data("button"),
              f = "object" == typeof c && c;
          e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
      })
  }, a.fn.button.defaults = {
      loadingText: "loading..."
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
      return a.fn.button = c, this
  }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
      var c = a(b.target);
      c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
  })
}(window.jQuery), ! function(a) {
  var b = function(b, c) {
      this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
  };
  b.prototype = {
      constructor: b,
      dimension: function() {
          var a = this.$element.hasClass("width");
          return a ? "width" : "height"
      },
      show: function() {
          var b, c, d, e;
          if (!this.transitioning && !this.$element.hasClass("in")) {
              if (b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in"), d && d.length) {
                  if (e = d.data("collapse"), e && e.transitioning) return;
                  d.collapse("hide"), e || d.data("collapse", null)
              }
              this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
          }
      },
      hide: function() {
          var b;
          !this.transitioning && this.$element.hasClass("in") && (b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0))
      },
      reset: function(a) {
          var b = this.dimension();
          return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), this
      },
      transition: function(b, c, d) {
          var e = this,
              f = function() {
                  "show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d)
              };
          this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
      },
      toggle: function() {
          this[this.$element.hasClass("in") ? "hide" : "show"]()
      }
  };
  var c = a.fn.collapse;
  a.fn.collapse = function(c) {
      return this.each(function() {
          var d = a(this),
              e = d.data("collapse"),
              f = a.extend({}, a.fn.collapse.defaults, d.data(), "object" == typeof c && c);
          e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]()
      })
  }, a.fn.collapse.defaults = {
      toggle: !0
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
      return a.fn.collapse = c, this
  }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
      var c, d = a(this),
          e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
          f = a(e).data("collapse") ? "toggle" : d.data();
      d[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
  })
}(window.jQuery);;
! function(a, b, c) {
  function d(c, d, e) {
      var f = b.createElement(c);
      return d && (f.id = _ + d), e && (f.style.cssText = e), a(f)
  }

  function e() {
      return c.innerHeight ? c.innerHeight : a(c).height()
  }

  function f(a) {
      var b = y.length,
          c = (Q + a) % b;
      return 0 > c ? b + c : c
  }

  function g(a, b) {
      return Math.round((/%/.test(a) ? ("x" === b ? z.width() : e()) / 100 : 1) * parseInt(a, 10))
  }

  function h(a, b) {
      return a.photo || a.photoRegex.test(b)
  }

  function i(a, b) {
      return a.retinaUrl && c.devicePixelRatio > 1 ? b.replace(a.photoRegex, a.retinaSuffix) : b
  }

  function j(a) {
      "contains" in r[0] && !r[0].contains(a.target) && (a.stopPropagation(), r.focus())
  }

  function k() {
      var b, c = a.data(P, $);
      null == c ? (K = a.extend({}, Z), console && console.log && console.log("Error: cboxElement missing settings object")) : K = a.extend({}, c);
      for (b in K) a.isFunction(K[b]) && "on" !== b.slice(0, 2) && (K[b] = K[b].call(P));
      K.rel = K.rel || P.rel || a(P).data("rel") || "nofollow", K.href = K.href || a(P).attr("href"), K.title = K.title || P.title, "string" == typeof K.href && (K.href = a.trim(K.href))
  }

  function l(c, d) {
      a(b).trigger(c), ha.triggerHandler(c), a.isFunction(d) && d.call(P)
  }

  function m(c) {
      U || (P = c, k(), y = a(P), Q = 0, "nofollow" !== K.rel && (y = a("." + aa).filter(function() {
          var b, c = a.data(this, $);
          return c && (b = a(this).data("rel") || c.rel || this.rel), b === K.rel
      }), Q = y.index(P), -1 === Q && (y = y.add(P), Q = y.length - 1)), q.css({
          opacity: parseFloat(K.opacity),
          cursor: K.overlayClose ? "pointer" : "auto",
          visibility: "visible"
      }).show(), X && r.add(q).removeClass(X), K.className && r.add(q).addClass(K.className), X = K.className, K.closeButton ? I.html(K.close).appendTo(t) : I.appendTo("<div/>"), S || (S = T = !0, r.css({
          visibility: "hidden",
          display: "block"
      }), A = d(ia, "LoadedContent", "width:0; height:0; overflow:hidden"), t.css({
          width: "",
          height: ""
      }).append(A), L = u.height() + x.height() + t.outerHeight(!0) - t.height(), M = v.width() + w.width() + t.outerWidth(!0) - t.width(), N = A.outerHeight(!0), O = A.outerWidth(!0), K.w = g(K.initialWidth, "x"), K.h = g(K.initialHeight, "y"), A.css({
          width: "",
          height: K.h
      }), W.position(), l(ba, K.onOpen), J.add(D).hide(), r.focus(), K.trapFocus && b.addEventListener && (b.addEventListener("focus", j, !0), ha.one(fa, function() {
          b.removeEventListener("focus", j, !0)
      })), K.returnFocus && ha.one(fa, function() {
          a(P).focus()
      })), p())
  }

  function n() {
      !r && b.body && (Y = !1, z = a(c), r = d(ia).attr({
          id: $,
          "class": a.support.opacity === !1 ? _ + "IE" : "",
          role: "dialog",
          tabindex: "-1"
      }).hide(), q = d(ia, "Overlay").hide(), C = a([d(ia, "LoadingOverlay")[0], d(ia, "LoadingGraphic")[0]]), s = d(ia, "Wrapper"), t = d(ia, "Content").append(D = d(ia, "Title"), E = d(ia, "Current"), H = a('<button type="button"/>').attr({
          id: _ + "Previous"
      }), G = a('<button type="button"/>').attr({
          id: _ + "Next"
      }), F = d("button", "Slideshow"), C), I = a('<button type="button"/>').attr({
          id: _ + "Close"
      }), s.append(d(ia).append(d(ia, "TopLeft"), u = d(ia, "TopCenter"), d(ia, "TopRight")), d(ia, !1, "clear:left").append(v = d(ia, "MiddleLeft"), t, w = d(ia, "MiddleRight")), d(ia, !1, "clear:left").append(d(ia, "BottomLeft"), x = d(ia, "BottomCenter"), d(ia, "BottomRight"))).find("div div").css({
          "float": "left"
      }), B = d(ia, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), J = G.add(H).add(E).add(F), a(b.body).append(q, r.append(s, B)))
  }

  function o() {
      function c(a) {
          a.which > 1 || a.shiftKey || a.altKey || a.metaKey || a.ctrlKey || (a.preventDefault(), m(this))
      }
      return r ? (Y || (Y = !0, G.click(function() {
          W.next()
      }), H.click(function() {
          W.prev()
      }), I.click(function() {
          W.close()
      }), q.click(function() {
          K.overlayClose && W.close()
      }), a(b).bind("keydown." + _, function(a) {
          var b = a.keyCode;
          S && K.escKey && 27 === b && (a.preventDefault(), W.close()), S && K.arrowKey && y[1] && !a.altKey && (37 === b ? (a.preventDefault(), H.click()) : 39 === b && (a.preventDefault(), G.click()))
      }), a.isFunction(a.fn.on) ? a(b).on("click." + _, "." + aa, c) : a("." + aa).live("click." + _, c)), !0) : !1
  }

  function p() {
      var e, f, j, m = W.prep,
          n = ++ja;
      T = !0, R = !1, P = y[Q], k(), l(ga), l(ca, K.onLoad), K.h = K.height ? g(K.height, "y") - N - L : K.innerHeight && g(K.innerHeight, "y"), K.w = K.width ? g(K.width, "x") - O - M : K.innerWidth && g(K.innerWidth, "x"), K.mw = K.w, K.mh = K.h, K.maxWidth && (K.mw = g(K.maxWidth, "x") - O - M, K.mw = K.w && K.w < K.mw ? K.w : K.mw), K.maxHeight && (K.mh = g(K.maxHeight, "y") - N - L, K.mh = K.h && K.h < K.mh ? K.h : K.mh), e = K.href, V = setTimeout(function() {
          C.show()
      }, 100), K.inline ? (j = d(ia).hide().insertBefore(a(e)[0]), ha.one(ga, function() {
          j.replaceWith(A.children())
      }), m(a(e))) : K.iframe ? m(" ") : K.html ? m(K.html) : h(K, e) ? (e = i(K, e), R = b.createElement("img"), a(R).addClass(_ + "Photo").bind("error", function() {
          K.title = !1, m(d(ia, "Error").html(K.imgError))
      }).one("load", function() {
          var b;
          n === ja && (a.each(["alt", "longdesc", "aria-describedby"], function(b, c) {
              var d = a(P).attr(c) || a(P).attr("data-" + c);
              d && R.setAttribute(c, d)
          }), K.retinaImage && c.devicePixelRatio > 1 && (R.height = R.height / c.devicePixelRatio, R.width = R.width / c.devicePixelRatio), K.scalePhotos && (f = function() {
              R.height -= R.height * b, R.width -= R.width * b
          }, K.mw && R.width > K.mw && (b = (R.width - K.mw) / R.width, f()), K.mh && R.height > K.mh && (b = (R.height - K.mh) / R.height, f())), K.h && (R.style.marginTop = Math.max(K.mh - R.height, 0) / 2 + "px"), y[1] && (K.loop || y[Q + 1]) && (R.style.cursor = "pointer", R.onclick = function() {
              W.next()
          }), R.style.width = R.width + "px", R.style.height = R.height + "px", setTimeout(function() {
              m(R)
          }, 1))
      }), setTimeout(function() {
          R.src = e
      }, 1)) : e && B.load(e, K.data, function(b, c) {
          n === ja && m("error" === c ? d(ia, "Error").html(K.xhrError) : a(this).contents())
      })
  }
  var q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z = {
          html: !1,
          photo: !1,
          iframe: !1,
          inline: !1,
          transition: "elastic",
          speed: 300,
          fadeOut: 300,
          width: !1,
          initialWidth: "600",
          innerWidth: !1,
          maxWidth: !1,
          height: !1,
          initialHeight: "450",
          innerHeight: !1,
          maxHeight: !1,
          scalePhotos: !0,
          scrolling: !0,
          href: !1,
          title: !1,
          rel: !1,
          opacity: .9,
          preloading: !0,
          className: !1,
          overlayClose: !0,
          escKey: !0,
          arrowKey: !0,
          top: !1,
          bottom: !1,
          left: !1,
          right: !1,
          fixed: !1,
          data: void 0,
          closeButton: !0,
          fastIframe: !0,
          open: !1,
          reposition: !0,
          loop: !0,
          slideshow: !1,
          slideshowAuto: !0,
          slideshowSpeed: 2500,
          slideshowStart: "start slideshow",
          slideshowStop: "stop slideshow",
          photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
          retinaImage: !1,
          retinaUrl: !1,
          retinaSuffix: "@2x.$1",
          current: "image {current} of {total}",
          previous: "previous",
          next: "next",
          close: "close",
          xhrError: "This content failed to load.",
          imgError: "This image failed to load.",
          returnFocus: !0,
          trapFocus: !0,
          onOpen: !1,
          onLoad: !1,
          onComplete: !1,
          onCleanup: !1,
          onClosed: !1
      },
      $ = "colorbox",
      _ = "cbox",
      aa = _ + "Element",
      ba = _ + "_open",
      ca = _ + "_load",
      da = _ + "_complete",
      ea = _ + "_cleanup",
      fa = _ + "_closed",
      ga = _ + "_purge",
      ha = a("<a/>"),
      ia = "div",
      ja = 0,
      ka = {},
      la = function() {
          function a() {
              clearTimeout(g)
          }

          function b() {
              (K.loop || y[Q + 1]) && (a(), g = setTimeout(W.next, K.slideshowSpeed))
          }

          function c() {
              F.html(K.slideshowStop).unbind(i).one(i, d), ha.bind(da, b).bind(ca, a), r.removeClass(h + "off").addClass(h + "on")
          }

          function d() {
              a(), ha.unbind(da, b).unbind(ca, a), F.html(K.slideshowStart).unbind(i).one(i, function() {
                  W.next(), c()
              }), r.removeClass(h + "on").addClass(h + "off")
          }

          function e() {
              f = !1, F.hide(), a(), ha.unbind(da, b).unbind(ca, a), r.removeClass(h + "off " + h + "on")
          }
          var f, g, h = _ + "Slideshow_",
              i = "click." + _;
          return function() {
              f ? K.slideshow || (ha.unbind(ea, e), e()) : K.slideshow && y[1] && (f = !0, ha.one(ea, e), K.slideshowAuto ? c() : d(), F.show())
          }
      }();
  a.colorbox || (a(n), W = a.fn[$] = a[$] = function(b, c) {
      var d = this;
      if (b = b || {}, n(), o()) {
          if (a.isFunction(d)) d = a("<a/>"), b.open = !0;
          else if (!d[0]) return d;
          c && (b.onComplete = c), d.each(function() {
              a.data(this, $, a.extend({}, a.data(this, $) || Z, b))
          }).addClass(aa), (a.isFunction(b.open) && b.open.call(d) || b.open) && m(d[0])
      }
      return d
  }, W.position = function(b, c) {
      function d() {
          u[0].style.width = x[0].style.width = t[0].style.width = parseInt(r[0].style.width, 10) - M + "px", t[0].style.height = v[0].style.height = w[0].style.height = parseInt(r[0].style.height, 10) - L + "px"
      }
      var f, h, i, j = 0,
          k = 0,
          l = r.offset();
      if (z.unbind("resize." + _), r.css({
              top: -9e4,
              left: -9e4
          }), h = z.scrollTop(), i = z.scrollLeft(), K.fixed ? (l.top -= h, l.left -= i, r.css({
              position: "fixed"
          })) : (j = h, k = i, r.css({
              position: "absolute"
          })), k += K.right !== !1 ? Math.max(z.width() - K.w - O - M - g(K.right, "x"), 0) : K.left !== !1 ? g(K.left, "x") : Math.round(Math.max(z.width() - K.w - O - M, 0) / 2), j += K.bottom !== !1 ? Math.max(e() - K.h - N - L - g(K.bottom, "y"), 0) : K.top !== !1 ? g(K.top, "y") : Math.round(Math.max(e() - K.h - N - L, 0) / 2), r.css({
              top: l.top,
              left: l.left,
              visibility: "visible"
          }), s[0].style.width = s[0].style.height = "9999px", f = {
              width: K.w + O + M,
              height: K.h + N + L,
              top: j,
              left: k
          }, b) {
          var m = 0;
          a.each(f, function(a) {
              return f[a] !== ka[a] ? void(m = b) : void 0
          }), b = m
      }
      ka = f, b || r.css(f), r.dequeue().animate(f, {
          duration: b || 0,
          complete: function() {
              d(), T = !1, s[0].style.width = K.w + O + M + "px", s[0].style.height = K.h + N + L + "px", K.reposition && setTimeout(function() {
                  z.bind("resize." + _, W.position)
              }, 1), c && c()
          },
          step: d
      })
  }, W.resize = function(a) {
      var b;
      S && (a = a || {}, a.width && (K.w = g(a.width, "x") - O - M), a.innerWidth && (K.w = g(a.innerWidth, "x")), A.css({
          width: K.w
      }), a.height && (K.h = g(a.height, "y") - N - L), a.innerHeight && (K.h = g(a.innerHeight, "y")), a.innerHeight || a.height || (b = A.scrollTop(), A.css({
          height: "auto"
      }), K.h = A.height()), A.css({
          height: K.h
      }), b && A.scrollTop(b), W.position("none" === K.transition ? 0 : K.speed))
  }, W.prep = function(c) {
      function e() {
          return K.w = K.w || A.width(), K.w = K.mw && K.mw < K.w ? K.mw : K.w, K.w
      }

      function g() {
          return K.h = K.h || A.height(), K.h = K.mh && K.mh < K.h ? K.mh : K.h, K.h
      }
      if (S) {
          var j, k = "none" === K.transition ? 0 : K.speed;
          A.empty().remove(), A = d(ia, "LoadedContent").append(c), A.hide().appendTo(B.show()).css({
              width: e(),
              overflow: K.scrolling ? "auto" : "hidden"
          }).css({
              height: g()
          }).prependTo(t), B.hide(), a(R).css({
              "float": "none"
          }), j = function() {
              function c() {
                  a.support.opacity === !1 && r[0].style.removeAttribute("filter")
              }
              var e, g, j = y.length,
                  m = "frameBorder",
                  n = "allowTransparency";
              S && (g = function() {
                  clearTimeout(V), C.hide(), l(da, K.onComplete)
              }, D.html(K.title).add(A).show(), j > 1 ? ("string" == typeof K.current && E.html(K.current.replace("{current}", Q + 1).replace("{total}", j)).show(), G[K.loop || j - 1 > Q ? "show" : "hide"]().html(K.next), H[K.loop || Q ? "show" : "hide"]().html(K.previous), la(), K.preloading && a.each([f(-1), f(1)], function() {
                  var c, d, e = y[this],
                      f = a.data(e, $);
                  f && f.href ? (c = f.href, a.isFunction(c) && (c = c.call(e))) : c = a(e).attr("href"), c && h(f, c) && (c = i(f, c), d = b.createElement("img"), d.src = c)
              })) : J.hide(), K.iframe ? (e = d("iframe")[0], m in e && (e[m] = 0), n in e && (e[n] = "true"), K.scrolling || (e.scrolling = "no"), a(e).attr({
                  src: K.href,
                  name: (new Date).getTime(),
                  "class": _ + "Iframe",
                  allowFullScreen: !0,
                  webkitAllowFullScreen: !0,
                  mozallowfullscreen: !0
              }).one("load", g).appendTo(A), ha.one(ga, function() {
                  e.src = "//about:blank"
              }), K.fastIframe && a(e).trigger("load")) : g(), "fade" === K.transition ? r.fadeTo(k, 1, c) : c())
          }, "fade" === K.transition ? r.fadeTo(k, 0, function() {
              W.position(0, j)
          }) : W.position(k, j)
      }
  }, W.next = function() {
      !T && y[1] && (K.loop || y[Q + 1]) && (Q = f(1), m(y[Q]))
  }, W.prev = function() {
      !T && y[1] && (K.loop || Q) && (Q = f(-1), m(y[Q]))
  }, W.close = function() {
      S && !U && (U = !0, S = !1, l(ea, K.onCleanup), z.unbind("." + _), q.fadeTo(K.fadeOut || 0, 0), r.stop().fadeTo(K.fadeOut || 0, 0, function() {
          r.add(q).css({
              opacity: 1,
              cursor: "auto"
          }).hide(), l(ga), A.empty().remove(), setTimeout(function() {
              U = !1, l(fa, K.onClosed)
          }, 1)
      }))
  }, W.remove = function() {
      r && (r.stop(), a.colorbox.close(), r.stop().remove(), q.remove(), U = !1, r = null, a("." + aa).removeData($).removeClass(aa), a(b).unbind("click." + _))
  }, W.element = function() {
      return a(P)
  }, W.settings = Z)
}(jQuery, document, window);;
! function(a, b) {
  function c(a) {
      return "" === f ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), f + a)
  }
  var d = Math,
      e = b.createElement("div").style,
      f = function() {
          for (var a, b = "t,webkitT,MozT,msT,OT".split(","), c = 0, d = b.length; d > c; c++)
              if (a = b[c] + "ransform", a in e) return b[c].substr(0, b[c].length - 1);
          return !1
      }(),
      g = f ? "-" + f.toLowerCase() + "-" : "",
      h = c("transform"),
      i = c("transitionProperty"),
      j = c("transitionDuration"),
      k = c("transformOrigin"),
      l = c("transitionTimingFunction"),
      m = c("transitionDelay"),
      n = /android/gi.test(navigator.appVersion),
      o = /iphone|ipad/gi.test(navigator.appVersion),
      p = /hp-tablet/gi.test(navigator.appVersion),
      q = c("perspective") in e,
      r = "ontouchstart" in a && !p,
      s = f !== !1,
      t = c("transition") in e,
      u = "onorientationchange" in a ? "orientationchange" : "resize",
      v = r ? "touchstart" : "mousedown",
      w = r ? "touchmove" : "mousemove",
      x = r ? "touchend" : "mouseup",
      y = r ? "touchcancel" : "mouseup",
      z = function() {
          if (f === !1) return !1;
          var a = {
              "": "transitionend",
              webkit: "webkitTransitionEnd",
              Moz: "transitionend",
              O: "otransitionend",
              ms: "MSTransitionEnd"
          };
          return a[f]
      }(),
      A = function() {
          return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
              return setTimeout(a, 1)
          }
      }(),
      B = function() {
          return a.cancelRequestAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || clearTimeout
      }(),
      C = q ? " translateZ(0)" : "",
      D = function(c, d) {
          var e, f = this;
          f.wrapper = "object" == typeof c ? c : b.getElementById(c), f.wrapper.style.overflow = "hidden", f.scroller = f.wrapper.children[0], f.options = {
              hScroll: !0,
              vScroll: !0,
              x: 0,
              y: 0,
              bounce: !0,
              bounceLock: !1,
              momentum: !0,
              lockDirection: !0,
              useTransform: !0,
              useTransition: !1,
              topOffset: 0,
              checkDOMChanges: !1,
              handleClick: !0,
              hScrollbar: !0,
              vScrollbar: !0,
              fixedScrollbar: n,
              hideScrollbar: o,
              fadeScrollbar: o && q,
              scrollbarClass: "",
              zoom: !1,
              zoomMin: 1,
              zoomMax: 4,
              doubleTapZoom: 2,
              wheelAction: "scroll",
              snap: !1,
              snapThreshold: 1,
              onRefresh: null,
              onBeforeScrollStart: function(a) {
                  a.preventDefault()
              },
              onScrollStart: null,
              onBeforeScrollMove: null,
              onScrollMove: null,
              onBeforeScrollEnd: null,
              onScrollEnd: null,
              onTouchEnd: null,
              onDestroy: null,
              onZoomStart: null,
              onZoom: null,
              onZoomEnd: null
          };
          for (e in d) f.options[e] = d[e];
          f.x = f.options.x, f.y = f.options.y, f.options.useTransform = s && f.options.useTransform, f.options.hScrollbar = f.options.hScroll && f.options.hScrollbar, f.options.vScrollbar = f.options.vScroll && f.options.vScrollbar, f.options.zoom = f.options.useTransform && f.options.zoom, f.options.useTransition = t && f.options.useTransition, f.options.zoom && n && (C = ""), f.scroller.style[i] = f.options.useTransform ? g + "transform" : "top left", f.scroller.style[j] = "0", f.scroller.style[k] = "0 0", f.options.useTransition && (f.scroller.style[l] = "cubic-bezier(0.33,0.66,0.66,1)"), f.options.useTransform ? f.scroller.style[h] = "translate(" + f.x + "px," + f.y + "px)" + C : f.scroller.style.cssText += ";position:absolute;top:" + f.y + "px;left:" + f.x + "px", f.options.useTransition && (f.options.fixedScrollbar = !0), f.refresh(), f._bind(u, a), f._bind(v), r || "none" != f.options.wheelAction && (f._bind("DOMMouseScroll"), f._bind("mousewheel")), f.options.checkDOMChanges && (f.checkDOMTime = setInterval(function() {
              f._checkDOMChanges()
          }, 500))
      };
  D.prototype = {
      enabled: !0,
      x: 0,
      y: 0,
      steps: [],
      scale: 1,
      currPageX: 0,
      currPageY: 0,
      pagesX: [],
      pagesY: [],
      aniTime: null,
      wheelZoomCount: 0,
      handleEvent: function(a) {
          var b = this;
          switch (a.type) {
              case v:
                  if (!r && 0 !== a.button) return;
                  b._start(a);
                  break;
              case w:
                  b._move(a);
                  break;
              case x:
              case y:
                  b._end(a);
                  break;
              case u:
                  b._resize();
                  break;
              case "DOMMouseScroll":
              case "mousewheel":
                  b._wheel(a);
                  break;
              case z:
                  b._transitionEnd(a)
          }
      },
      _checkDOMChanges: function() {
          this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
      },
      _scrollbar: function(a) {
          var c, e = this;
          return e[a + "Scrollbar"] ? (e[a + "ScrollbarWrapper"] || (c = b.createElement("div"), e.options.scrollbarClass ? c.className = e.options.scrollbarClass + a.toUpperCase() : c.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (e.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (e.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), c.style.cssText += ";pointer-events:none;" + g + "transition-property:opacity;" + g + "transition-duration:" + (e.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (e.options.hideScrollbar ? "0" : "1"), e.wrapper.appendChild(c), e[a + "ScrollbarWrapper"] = c, c = b.createElement("div"), e.options.scrollbarClass || (c.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + g + "background-clip:padding-box;" + g + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + g + "border-radius:3px;border-radius:3px"), c.style.cssText += ";pointer-events:none;" + g + "transition-property:" + g + "transform;" + g + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + g + "transition-duration:0;" + g + "transform: translate(0,0)" + C, e.options.useTransition && (c.style.cssText += ";" + g + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), e[a + "ScrollbarWrapper"].appendChild(c), e[a + "ScrollbarIndicator"] = c), "h" == a ? (e.hScrollbarSize = e.hScrollbarWrapper.clientWidth, e.hScrollbarIndicatorSize = d.max(d.round(e.hScrollbarSize * e.hScrollbarSize / e.scrollerW), 8), e.hScrollbarIndicator.style.width = e.hScrollbarIndicatorSize + "px", e.hScrollbarMaxScroll = e.hScrollbarSize - e.hScrollbarIndicatorSize, e.hScrollbarProp = e.hScrollbarMaxScroll / e.maxScrollX) : (e.vScrollbarSize = e.vScrollbarWrapper.clientHeight, e.vScrollbarIndicatorSize = d.max(d.round(e.vScrollbarSize * e.vScrollbarSize / e.scrollerH), 8), e.vScrollbarIndicator.style.height = e.vScrollbarIndicatorSize + "px", e.vScrollbarMaxScroll = e.vScrollbarSize - e.vScrollbarIndicatorSize, e.vScrollbarProp = e.vScrollbarMaxScroll / e.maxScrollY), void e._scrollbarPos(a, !0)) : void(e[a + "ScrollbarWrapper"] && (s && (e[a + "ScrollbarIndicator"].style[h] = ""), e[a + "ScrollbarWrapper"].parentNode.removeChild(e[a + "ScrollbarWrapper"]), e[a + "ScrollbarWrapper"] = null, e[a + "ScrollbarIndicator"] = null))
      },
      _resize: function() {
          var a = this;
          setTimeout(function() {
              a.refresh()
          }, n ? 200 : 0)
      },
      _pos: function(a, b) {
          this.zoomed || (a = this.hScroll ? a : 0, b = this.vScroll ? b : 0, this.options.useTransform ? this.scroller.style[h] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + C : (a = d.round(a), b = d.round(b), this.scroller.style.left = a + "px", this.scroller.style.top = b + "px"), this.x = a, this.y = b, this._scrollbarPos("h"), this._scrollbarPos("v"))
      },
      _scrollbarPos: function(a, b) {
          var c, e = this,
              f = "h" == a ? e.x : e.y;
          e[a + "Scrollbar"] && (f = e[a + "ScrollbarProp"] * f, 0 > f ? (e.options.fixedScrollbar || (c = e[a + "ScrollbarIndicatorSize"] + d.round(3 * f), 8 > c && (c = 8), e[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), f = 0) : f > e[a + "ScrollbarMaxScroll"] && (e.options.fixedScrollbar ? f = e[a + "ScrollbarMaxScroll"] : (c = e[a + "ScrollbarIndicatorSize"] - d.round(3 * (f - e[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), e[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", f = e[a + "ScrollbarMaxScroll"] + (e[a + "ScrollbarIndicatorSize"] - c))), e[a + "ScrollbarWrapper"].style[m] = "0", e[a + "ScrollbarWrapper"].style.opacity = b && e.options.hideScrollbar ? "0" : "1", e[a + "ScrollbarIndicator"].style[h] = "translate(" + ("h" == a ? f + "px,0)" : "0," + f + "px)") + C)
      },
      _start: function(b) {
          var c, e, f, g, i, j = this,
              k = r ? b.touches[0] : b;
          j.enabled && (j.options.onBeforeScrollStart && j.options.onBeforeScrollStart.call(j, b), (j.options.useTransition || j.options.zoom) && j._transitionTime(0), j.moved = !1, j.animating = !1, j.zoomed = !1, j.distX = 0, j.distY = 0, j.absDistX = 0, j.absDistY = 0, j.dirX = 0, j.dirY = 0, j.options.zoom && r && b.touches.length > 1 && (g = d.abs(b.touches[0].pageX - b.touches[1].pageX), i = d.abs(b.touches[0].pageY - b.touches[1].pageY), j.touchesDistStart = d.sqrt(g * g + i * i), j.originX = d.abs(b.touches[0].pageX + b.touches[1].pageX - 2 * j.wrapperOffsetLeft) / 2 - j.x, j.originY = d.abs(b.touches[0].pageY + b.touches[1].pageY - 2 * j.wrapperOffsetTop) / 2 - j.y, j.options.onZoomStart && j.options.onZoomStart.call(j, b)), j.options.momentum && (j.options.useTransform ? (c = getComputedStyle(j.scroller, null)[h].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), f = +(c[13] || c[5])) : (e = +getComputedStyle(j.scroller, null).left.replace(/[^0-9-]/g, ""), f = +getComputedStyle(j.scroller, null).top.replace(/[^0-9-]/g, "")), (e != j.x || f != j.y) && (j.options.useTransition ? j._unbind(z) : B(j.aniTime), j.steps = [], j._pos(e, f), j.options.onScrollEnd && j.options.onScrollEnd.call(j))), j.absStartX = j.x, j.absStartY = j.y, j.startX = j.x, j.startY = j.y, j.pointX = k.pageX, j.pointY = k.pageY, j.startTime = b.timeStamp || (new Date).getTime(), j.options.onScrollStart && j.options.onScrollStart.call(j, b), j._bind(w, a), j._bind(x, a), j._bind(y, a))
      },
      _move: function(a) {
          var b, c, e, f = this,
              g = r ? a.touches[0] : a,
              i = g.pageX - f.pointX,
              j = g.pageY - f.pointY,
              k = f.x + i,
              l = f.y + j,
              m = a.timeStamp || (new Date).getTime();
          return f.options.onBeforeScrollMove && f.options.onBeforeScrollMove.call(f, a), f.options.zoom && r && a.touches.length > 1 ? (b = d.abs(a.touches[0].pageX - a.touches[1].pageX), c = d.abs(a.touches[0].pageY - a.touches[1].pageY), f.touchesDist = d.sqrt(b * b + c * c), f.zoomed = !0, e = 1 / f.touchesDistStart * f.touchesDist * this.scale, e < f.options.zoomMin ? e = .5 * f.options.zoomMin * Math.pow(2, e / f.options.zoomMin) : e > f.options.zoomMax && (e = 2 * f.options.zoomMax * Math.pow(.5, f.options.zoomMax / e)), f.lastScale = e / this.scale, k = this.originX - this.originX * f.lastScale + this.x, l = this.originY - this.originY * f.lastScale + this.y, this.scroller.style[h] = "translate(" + k + "px," + l + "px) scale(" + e + ")" + C, void(f.options.onZoom && f.options.onZoom.call(f, a))) : (f.pointX = g.pageX, f.pointY = g.pageY, (k > 0 || k < f.maxScrollX) && (k = f.options.bounce ? f.x + i / 2 : k >= 0 || f.maxScrollX >= 0 ? 0 : f.maxScrollX), (l > f.minScrollY || l < f.maxScrollY) && (l = f.options.bounce ? f.y + j / 2 : l >= f.minScrollY || f.maxScrollY >= 0 ? f.minScrollY : f.maxScrollY), f.distX += i, f.distY += j, f.absDistX = d.abs(f.distX), f.absDistY = d.abs(f.distY), void(f.absDistX < 6 && f.absDistY < 6 || (f.options.lockDirection && (f.absDistX > f.absDistY + 5 ? (l = f.y, j = 0) : f.absDistY > f.absDistX + 5 && (k = f.x, i = 0)), f.moved = !0, f._pos(k, l), f.dirX = i > 0 ? -1 : 0 > i ? 1 : 0, f.dirY = j > 0 ? -1 : 0 > j ? 1 : 0, m - f.startTime > 300 && (f.startTime = m, f.startX = f.x, f.startY = f.y), f.options.onScrollMove && f.options.onScrollMove.call(f, a))))
      },
      _end: function(c) {
          if (!r || 0 === c.touches.length) {
              var e, f, g, i, k, l, m, n = this,
                  o = r ? c.changedTouches[0] : c,
                  p = {
                      dist: 0,
                      time: 0
                  },
                  q = {
                      dist: 0,
                      time: 0
                  },
                  s = (c.timeStamp || (new Date).getTime()) - n.startTime,
                  t = n.x,
                  u = n.y;
              if (n._unbind(w, a), n._unbind(x, a), n._unbind(y, a), n.options.onBeforeScrollEnd && n.options.onBeforeScrollEnd.call(n, c), n.zoomed) return m = n.scale * n.lastScale, m = Math.max(n.options.zoomMin, m), m = Math.min(n.options.zoomMax, m), n.lastScale = m / n.scale, n.scale = m, n.x = n.originX - n.originX * n.lastScale + n.x, n.y = n.originY - n.originY * n.lastScale + n.y, n.scroller.style[j] = "200ms", n.scroller.style[h] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + ")" + C, n.zoomed = !1, n.refresh(), void(n.options.onZoomEnd && n.options.onZoomEnd.call(n, c));
              if (!n.moved) return r && (n.doubleTapTimer && n.options.zoom ? (clearTimeout(n.doubleTapTimer), n.doubleTapTimer = null, n.options.onZoomStart && n.options.onZoomStart.call(n, c), n.zoom(n.pointX, n.pointY, 1 == n.scale ? n.options.doubleTapZoom : 1), n.options.onZoomEnd && setTimeout(function() {
                  n.options.onZoomEnd.call(n, c)
              }, 200)) : this.options.handleClick && (n.doubleTapTimer = setTimeout(function() {
                  for (n.doubleTapTimer = null, e = o.target; 1 != e.nodeType;) e = e.parentNode;
                  "SELECT" != e.tagName && "INPUT" != e.tagName && "TEXTAREA" != e.tagName && (f = b.createEvent("MouseEvents"), f.initMouseEvent("click", !0, !0, c.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, 0, null), f._fake = !0, e.dispatchEvent(f))
              }, n.options.zoom ? 250 : 0))), n._resetPos(400), void(n.options.onTouchEnd && n.options.onTouchEnd.call(n, c));
              if (300 > s && n.options.momentum && (p = t ? n._momentum(t - n.startX, s, -n.x, n.scrollerW - n.wrapperW + n.x, n.options.bounce ? n.wrapperW : 0) : p, q = u ? n._momentum(u - n.startY, s, -n.y, n.maxScrollY < 0 ? n.scrollerH - n.wrapperH + n.y - n.minScrollY : 0, n.options.bounce ? n.wrapperH : 0) : q, t = n.x + p.dist, u = n.y + q.dist, (n.x > 0 && t > 0 || n.x < n.maxScrollX && t < n.maxScrollX) && (p = {
                      dist: 0,
                      time: 0
                  }), (n.y > n.minScrollY && u > n.minScrollY || n.y < n.maxScrollY && u < n.maxScrollY) && (q = {
                      dist: 0,
                      time: 0
                  })), p.dist || q.dist) return k = d.max(d.max(p.time, q.time), 10), n.options.snap && (g = t - n.absStartX, i = u - n.absStartY, d.abs(g) < n.options.snapThreshold && d.abs(i) < n.options.snapThreshold ? n.scrollTo(n.absStartX, n.absStartY, 200) : (l = n._snap(t, u), t = l.x, u = l.y, k = d.max(l.time, k))), n.scrollTo(d.round(t), d.round(u), k), void(n.options.onTouchEnd && n.options.onTouchEnd.call(n, c));
              if (n.options.snap) return g = t - n.absStartX, i = u - n.absStartY, d.abs(g) < n.options.snapThreshold && d.abs(i) < n.options.snapThreshold ? n.scrollTo(n.absStartX, n.absStartY, 200) : (l = n._snap(n.x, n.y), (l.x != n.x || l.y != n.y) && n.scrollTo(l.x, l.y, l.time)), void(n.options.onTouchEnd && n.options.onTouchEnd.call(n, c));
              n._resetPos(200), n.options.onTouchEnd && n.options.onTouchEnd.call(n, c)
          }
      },
      _resetPos: function(a) {
          var b = this,
              c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
              d = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY : b.y < b.maxScrollY ? b.maxScrollY : b.y;
          return c == b.x && d == b.y ? (b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)), b.hScrollbar && b.options.hideScrollbar && ("webkit" == f && (b.hScrollbarWrapper.style[m] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"), void(b.vScrollbar && b.options.hideScrollbar && ("webkit" == f && (b.vScrollbarWrapper.style[m] = "300ms"), b.vScrollbarWrapper.style.opacity = "0"))) : void b.scrollTo(c, d, a || 0)
      },
      _wheel: function(a) {
          var b, c, d, e, f, g = this;
          if ("wheelDeltaX" in a) b = a.wheelDeltaX / 12, c = a.wheelDeltaY / 12;
          else if ("wheelDelta" in a) b = c = a.wheelDelta / 12;
          else {
              if (!("detail" in a)) return;
              b = c = 3 * -a.detail
          }
          return "zoom" == g.options.wheelAction ? (f = g.scale * Math.pow(2, 1 / 3 * (c ? c / Math.abs(c) : 0)), f < g.options.zoomMin && (f = g.options.zoomMin), f > g.options.zoomMax && (f = g.options.zoomMax), void(f != g.scale && (!g.wheelZoomCount && g.options.onZoomStart && g.options.onZoomStart.call(g, a), g.wheelZoomCount++, g.zoom(a.pageX, a.pageY, f, 400), setTimeout(function() {
              g.wheelZoomCount--, !g.wheelZoomCount && g.options.onZoomEnd && g.options.onZoomEnd.call(g, a)
          }, 400)))) : (d = g.x + b, e = g.y + c, d > 0 ? d = 0 : d < g.maxScrollX && (d = g.maxScrollX), e > g.minScrollY ? e = g.minScrollY : e < g.maxScrollY && (e = g.maxScrollY), void(g.maxScrollY < 0 && g.scrollTo(d, e, 0)))
      },
      _transitionEnd: function(a) {
          var b = this;
          a.target == b.scroller && (b._unbind(z), b._startAni())
      },
      _startAni: function() {
          var a, b, c, e = this,
              f = e.x,
              g = e.y,
              h = (new Date).getTime();
          if (!e.animating) {
              if (!e.steps.length) return void e._resetPos(400);
              if (a = e.steps.shift(), a.x == f && a.y == g && (a.time = 0), e.animating = !0, e.moved = !0, e.options.useTransition) return e._transitionTime(a.time), e._pos(a.x, a.y), e.animating = !1, void(a.time ? e._bind(z) : e._resetPos(0));
              c = function() {
                  var i, j, k = (new Date).getTime();
                  return k >= h + a.time ? (e._pos(a.x, a.y), e.animating = !1, e.options.onAnimationEnd && e.options.onAnimationEnd.call(e), void e._startAni()) : (k = (k - h) / a.time - 1, b = d.sqrt(1 - k * k), i = (a.x - f) * b + f, j = (a.y - g) * b + g, e._pos(i, j), void(e.animating && (e.aniTime = A(c))))
              }, c()
          }
      },
      _transitionTime: function(a) {
          a += "ms", this.scroller.style[j] = a, this.hScrollbar && (this.hScrollbarIndicator.style[j] = a), this.vScrollbar && (this.vScrollbarIndicator.style[j] = a)
      },
      _momentum: function(a, b, c, e, f) {
          var g = 6e-4,
              h = d.abs(a) / b,
              i = h * h / (2 * g),
              j = 0,
              k = 0;
          return a > 0 && i > c ? (k = f / (6 / (i / h * g)), c += k, h = h * c / i, i = c) : 0 > a && i > e && (k = f / (6 / (i / h * g)), e += k, h = h * e / i, i = e), i *= 0 > a ? -1 : 1, j = h / g, {
              dist: i,
              time: d.round(j)
          }
      },
      _offset: function(a) {
          for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
          return a != this.wrapper && (b *= this.scale, c *= this.scale), {
              left: b,
              top: c
          }
      },
      _snap: function(a, b) {
          var c, e, f, g, h, i, j = this;
          for (f = j.pagesX.length - 1, c = 0, e = j.pagesX.length; e > c; c++)
              if (a >= j.pagesX[c]) {
                  f = c;
                  break
              } for (f == j.currPageX && f > 0 && j.dirX < 0 && f--, a = j.pagesX[f], h = d.abs(a - j.pagesX[j.currPageX]), h = h ? d.abs(j.x - a) / h * 500 : 0, j.currPageX = f, f = j.pagesY.length - 1, c = 0; f > c; c++)
              if (b >= j.pagesY[c]) {
                  f = c;
                  break
              } return f == j.currPageY && f > 0 && j.dirY < 0 && f--, b = j.pagesY[f], i = d.abs(b - j.pagesY[j.currPageY]), i = i ? d.abs(j.y - b) / i * 500 : 0, j.currPageY = f, g = d.round(d.max(h, i)) || 200, {
              x: a,
              y: b,
              time: g
          }
      },
      _bind: function(a, b, c) {
          (void 0 == dojo.isIE || dojo.isIE > 8) && (b || this.scroller).addEventListener(a, this, !!c)
      },
      _unbind: function(a, b, c) {
          (void 0 == dojo.isIE || dojo.isIE > 8) && (b || this.scroller).removeEventListener(a, this, !!c)
      },
      destroy: function() {
          var b = this;
          b.scroller.style[h] = "", b.hScrollbar = !1, b.vScrollbar = !1, b._scrollbar("h"), b._scrollbar("v"), b._unbind(u, a), b._unbind(v), b._unbind(w, a), b._unbind(x, a), b._unbind(y, a), b.options.hasTouch || (b._unbind("DOMMouseScroll"), b._unbind("mousewheel")), b.options.useTransition && b._unbind(z), b.options.checkDOMChanges && clearInterval(b.checkDOMTime), b.options.onDestroy && b.options.onDestroy.call(b)
      },
      refresh: function() {
          var a, b, c, e, f = this,
              g = 0,
              h = 0;
          if (f.scale < f.options.zoomMin && (f.scale = f.options.zoomMin), f.wrapperW = f.wrapper.clientWidth || 1, f.wrapperH = f.wrapper.clientHeight || 1, f.minScrollY = -f.options.topOffset || 0, f.scrollerW = d.round(f.scroller.offsetWidth * f.scale), f.scrollerH = d.round((f.scroller.offsetHeight + f.minScrollY) * f.scale), f.maxScrollX = f.wrapperW - f.scrollerW, f.maxScrollY = f.wrapperH - f.scrollerH + f.minScrollY, f.dirX = 0, f.dirY = 0, f.options.onRefresh && f.options.onRefresh.call(f), f.hScroll = f.options.hScroll && f.maxScrollX < 0, f.vScroll = f.options.vScroll && (!f.options.bounceLock && !f.hScroll || f.scrollerH > f.wrapperH), f.hScrollbar = f.hScroll && f.options.hScrollbar, f.vScrollbar = f.vScroll && f.options.vScrollbar && f.scrollerH > f.wrapperH, a = f._offset(f.wrapper), f.wrapperOffsetLeft = -a.left, f.wrapperOffsetTop = -a.top, "string" == typeof f.options.snap)
              for (f.pagesX = [], f.pagesY = [], e = f.scroller.querySelectorAll(f.options.snap), b = 0, c = e.length; c > b; b++) g = f._offset(e[b]), g.left += f.wrapperOffsetLeft, g.top += f.wrapperOffsetTop, f.pagesX[b] = g.left < f.maxScrollX ? f.maxScrollX : g.left * f.scale, f.pagesY[b] = g.top < f.maxScrollY ? f.maxScrollY : g.top * f.scale;
          else if (f.options.snap) {
              for (f.pagesX = []; g >= f.maxScrollX;) f.pagesX[h] = g, g -= f.wrapperW, h++;
              for (f.maxScrollX % f.wrapperW && (f.pagesX[f.pagesX.length] = f.maxScrollX - f.pagesX[f.pagesX.length - 1] + f.pagesX[f.pagesX.length - 1]), g = 0, h = 0, f.pagesY = []; g >= f.maxScrollY;) f.pagesY[h] = g, g -= f.wrapperH, h++;
              f.maxScrollY % f.wrapperH && (f.pagesY[f.pagesY.length] = f.maxScrollY - f.pagesY[f.pagesY.length - 1] + f.pagesY[f.pagesY.length - 1])
          }
          f._scrollbar("h"), f._scrollbar("v"), f.zoomed || (f.scroller.style[j] = "0", f._resetPos(400))
      },
      scrollTo: function(a, b, c, d) {
          var e, f, g = this,
              h = a;
          for (g.stop(), h.length || (h = [{
                  x: a,
                  y: b,
                  time: c,
                  relative: d
              }]), e = 0, f = h.length; f > e; e++) h[e].relative && (h[e].x = g.x - h[e].x, h[e].y = g.y - h[e].y), g.steps.push({
              x: h[e].x,
              y: h[e].y,
              time: h[e].time || 0
          });
          g._startAni()
      },
      scrollToElement: function(a, b) {
          var c, e = this;
          a = a.nodeType ? a : e.scroller.querySelector(a), a && (c = e._offset(a), c.left += e.wrapperOffsetLeft, c.top += e.wrapperOffsetTop, c.left = c.left > 0 ? 0 : c.left < e.maxScrollX ? e.maxScrollX : c.left, c.top = c.top > e.minScrollY ? e.minScrollY : c.top < e.maxScrollY ? e.maxScrollY : c.top, b = void 0 === b ? d.max(2 * d.abs(c.left), 2 * d.abs(c.top)) : b, e.scrollTo(c.left, c.top, b))
      },
      scrollToPage: function(a, b, c) {
          var d, e, f = this;
          c = void 0 === c ? 400 : c, f.options.onScrollStart && f.options.onScrollStart.call(f), f.options.snap ? (a = "next" == a ? f.currPageX + 1 : "prev" == a ? f.currPageX - 1 : a, b = "next" == b ? f.currPageY + 1 : "prev" == b ? f.currPageY - 1 : b, a = 0 > a ? 0 : a > f.pagesX.length - 1 ? f.pagesX.length - 1 : a, b = 0 > b ? 0 : b > f.pagesY.length - 1 ? f.pagesY.length - 1 : b, f.currPageX = a, f.currPageY = b, d = f.pagesX[a], e = f.pagesY[b]) : (d = -f.wrapperW * a, e = -f.wrapperH * b, d < f.maxScrollX && (d = f.maxScrollX), e < f.maxScrollY && (e = f.maxScrollY)), f.scrollTo(d, e, c)
      },
      disable: function() {
          this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(w, a), this._unbind(x, a), this._unbind(y, a)
      },
      enable: function() {
          this.enabled = !0
      },
      stop: function() {
          this.options.useTransition ? this._unbind(z) : B(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
      },
      zoom: function(a, b, c, d) {
          var e = this,
              f = c / e.scale;
          e.options.useTransform && (e.zoomed = !0, d = void 0 === d ? 200 : d, a = a - e.wrapperOffsetLeft - e.x, b = b - e.wrapperOffsetTop - e.y, e.x = a - a * f + e.x, e.y = b - b * f + e.y, e.scale = c, e.refresh(), e.x = e.x > 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x, e.y = e.y > e.minScrollY ? e.minScrollY : e.y < e.maxScrollY ? e.maxScrollY : e.y, e.scroller.style[j] = d + "ms", e.scroller.style[h] = "translate(" + e.x + "px," + e.y + "px) scale(" + c + ")" + C, e.zoomed = !1)
      },
      isReady: function() {
          return !this.moved && !this.zoomed && !this.animating
      }
  }, e = null, "undefined" != typeof exports ? exports.iScroll = D : a.iScroll = D
}(window, document);;
var SwipeView = function(a, b) {
  function c(a) {
      return "" === e ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), e + a)
  }
  var d = b.createElement("div").style,
      e = function() {
          for (var a, b = "t,webkitT,MozT,msT,OT".split(","), c = 0, e = b.length; e > c; c++)
              if (a = b[c] + "ransform", a in d) return b[c].substr(0, b[c].length - 1);
          return !1
      }(),
      f = e ? "-" + e.toLowerCase() + "-" : "",
      g = c("transform"),
      h = c("transitionDuration"),
      i = c("perspective") in d,
      j = "ontouchstart" in a,
      k = (c("transition") in d, i ? " translateZ(0)" : ""),
      l = "onorientationchange" in a ? "orientationchange" : "resize",
      m = j ? "touchstart" : "mousedown",
      n = j ? "touchmove" : "mousemove",
      o = j ? "touchend" : "mouseup",
      p = j ? "touchcancel" : "mouseup",
      q = function() {
          if (e === !1) return !1;
          var a = {
              "": "transitionend",
              webkit: "webkitTransitionEnd",
              Moz: "transitionend",
              O: "oTransitionEnd",
              ms: "MSTransitionEnd"
          };
          return a[e]
      }(),
      r = function(c, d) {
          var g, h, i, j;
          this.wrapper = "string" == typeof c ? b.querySelector(c) : c, this.options = {
              text: null,
              numberOfPages: 3,
              snapThreshold: null,
              hastyPageFlip: !1,
              loop: !0
          };
          for (g in d) this.options[g] = d[g];
          for (this.wrapper.style.overflow = "hidden", this.wrapper.style.position = "relative", this.masterPages = [], h = b.createElement("div"), h.id = "swipeview-slider", h.style.cssText = "position:relative;top:0;height:100%;width:100%;" + f + "transition-duration:0;" + f + "transform:translateZ(0);" + f + "transition-timing-function:ease-out", this.wrapper.appendChild(h), this.slider = h, this.refreshSize(), g = -1; 2 > g; g++) h = b.createElement("div"), h.id = "swipeview-masterpage-" + (g + 1), h.style.cssText = f + "transform:translateZ(0);position:absolute;top:0;height:100%;width:100%;left:" + 100 * g + "%", h.dataset || (h.dataset = {}), j = -1 == g ? this.options.numberOfPages - 1 : g, h.dataset.pageIndex = j, h.dataset.upcomingPageIndex = j, this.options.loop || -1 != g || (h.style.visibility = "hidden"), this.slider.appendChild(h), this.masterPages.push(h);
          i = this.masterPages[1].className, this.masterPages[1].className = i ? i + " swipeview-active" : "swipeview-active", a.addEventListener(l, this, !1), this.wrapper.addEventListener(m, this, !1), this.wrapper.addEventListener(n, this, !1), this.wrapper.addEventListener(o, this, !1), this.slider.addEventListener(q, this, !1), "O" == e && this.slider.addEventListener(q.toLowerCase(), this, !1)
      };
  return r.prototype = {
      currentMasterPage: 1,
      x: 0,
      page: 0,
      pageIndex: 0,
      customEvents: [],
      onFlip: function(a) {
          this.wrapper.addEventListener("swipeview-flip", a, !1), this.customEvents.push(["flip", a])
      },
      onMoveOut: function(a) {
          this.wrapper.addEventListener("swipeview-moveout", a, !1), this.customEvents.push(["moveout", a])
      },
      onMoveIn: function(a) {
          this.wrapper.addEventListener("swipeview-movein", a, !1), this.customEvents.push(["movein", a])
      },
      onTouchStart: function(a) {
          this.wrapper.addEventListener("swipeview-touchstart", a, !1), this.customEvents.push(["touchstart", a])
      },
      destroy: function() {
          for (; this.customEvents.length;) this.wrapper.removeEventListener("swipeview-" + this.customEvents[0][0], this.customEvents[0][1], !1), this.customEvents.shift();
          a.removeEventListener(l, this, !1), this.wrapper.removeEventListener(m, this, !1), this.wrapper.removeEventListener(n, this, !1), this.wrapper.removeEventListener(o, this, !1), this.slider.removeEventListener(q, this, !1)
      },
      refreshSize: function() {
          this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.pageWidth = this.wrapperWidth, this.maxX = -this.options.numberOfPages * this.pageWidth + this.wrapperWidth, this.snapThreshold = null === this.options.snapThreshold ? Math.round(.15 * this.pageWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.pageWidth * this.options.snapThreshold.replace("%", "") / 100) : this.options.snapThreshold
      },
      updatePageCount: function(a) {
          this.options.numberOfPages = a, this.maxX = -this.options.numberOfPages * this.pageWidth + this.wrapperWidth
      },
      goToPage: function(a) {
          var b;
          for (this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, ""), b = 0; 3 > b; b++) className = this.masterPages[b].className, /(^|\s)swipeview-loading(\s|$)/.test(className) || (this.masterPages[b].className = className ? className + " swipeview-loading" : "swipeview-loading");
          a = 0 > a ? 0 : a > this.options.numberOfPages - 1 ? this.options.numberOfPages - 1 : a, this.page = a, this.pageIndex = a, this.slider.style[h] = "0s", this.__pos(-a * this.pageWidth), this.currentMasterPage = this.page + 1 - 3 * Math.floor((this.page + 1) / 3), this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className + " swipeview-active", 0 === this.currentMasterPage ? (this.masterPages[2].style.left = 100 * this.page - 100 + "%", this.masterPages[0].style.left = 100 * this.page + "%", this.masterPages[1].style.left = 100 * this.page + 100 + "%", this.masterPages[2].dataset.upcomingPageIndex = 0 === this.page ? this.options.numberOfPages - 1 : this.page - 1, this.masterPages[0].dataset.upcomingPageIndex = this.page, this.masterPages[1].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1) : 1 == this.currentMasterPage ? (this.masterPages[0].style.left = 100 * this.page - 100 + "%", this.masterPages[1].style.left = 100 * this.page + "%", this.masterPages[2].style.left = 100 * this.page + 100 + "%", this.masterPages[0].dataset.upcomingPageIndex = 0 === this.page ? this.options.numberOfPages - 1 : this.page - 1, this.masterPages[1].dataset.upcomingPageIndex = this.page, this.masterPages[2].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1) : (this.masterPages[1].style.left = 100 * this.page - 100 + "%", this.masterPages[2].style.left = 100 * this.page + "%", this.masterPages[0].style.left = 100 * this.page + 100 + "%", this.masterPages[1].dataset.upcomingPageIndex = 0 === this.page ? this.options.numberOfPages - 1 : this.page - 1, this.masterPages[2].dataset.upcomingPageIndex = this.page, this.masterPages[0].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1), this.__flip()
      },
      next: function() {
          (this.options.loop || this.x != this.maxX) && (this.directionX = -1, this.x -= 1, this.__checkPosition())
      },
      prev: function() {
          (this.options.loop || 0 !== this.x) && (this.directionX = 1, this.x += 1, this.__checkPosition())
      },
      handleEvent: function(a) {
          switch (a.type) {
              case m:
                  this.__start(a);
                  break;
              case n:
                  this.__move(a);
                  break;
              case p:
              case o:
                  this.__end(a);
                  break;
              case l:
                  this.__resize();
                  break;
              case q:
              case "otransitionend":
                  a.target != this.slider || this.options.hastyPageFlip || this.__flip()
          }
      },
      __pos: function(a) {
          this.x = a, this.slider.style[g] = "translate(" + a + "px,0)" + k
      },
      __resize: function() {
          this.refreshSize(), this.slider.style[h] = "0s", this.__pos(-this.page * this.pageWidth)
      },
      __start: function(a) {
          if (!this.initiated) {
              var b = j ? a.touches[0] : a;
              this.initiated = !0, this.moved = !1, this.thresholdExceeded = !1, this.startX = b.pageX, this.startY = b.pageY, this.pointX = b.pageX, this.pointY = b.pageY, this.stepsX = 0, this.stepsY = 0, this.directionX = 0, this.directionLocked = !1, this.slider.style[h] = "0s", this.__event("touchstart")
          }
      },
      __move: function(a) {
          if (this.initiated) {
              var b = j ? a.touches[0] : a,
                  c = b.pageX - this.pointX,
                  d = b.pageY - this.pointY,
                  e = this.x + c,
                  f = Math.abs(b.pageX - this.startX);
              if (this.moved = !0, this.pointX = b.pageX, this.pointY = b.pageY, this.directionX = c > 0 ? 1 : 0 > c ? -1 : 0, this.stepsX += Math.abs(c), this.stepsY += Math.abs(d), !(this.stepsX < 10 && this.stepsY < 10)) {
                  if (!this.directionLocked && this.stepsY > this.stepsX) return void(this.initiated = !1);
                  a.preventDefault(), this.directionLocked = !0, !this.options.loop && (e > 0 || e < this.maxX) && (e = this.x + c / 2), !this.thresholdExceeded && f >= this.snapThreshold ? (this.thresholdExceeded = !0, this.__event("moveout")) : this.thresholdExceeded && f < this.snapThreshold && (this.thresholdExceeded = !1, this.__event("movein")), this.__pos(e)
              }
          }
      },
      __end: function(a) {
          if (this.initiated) {
              var b = j ? a.changedTouches[0] : a,
                  c = Math.abs(b.pageX - this.startX);
              if (this.initiated = !1, this.moved) return !this.options.loop && (this.x > 0 || this.x < this.maxX) && (c = 0, this.__event("movein")), c < this.snapThreshold ? (this.slider.style[h] = Math.floor(300 * c / this.snapThreshold) + "ms", void this.__pos(-this.page * this.pageWidth)) : void this.__checkPosition()
          }
      },
      __checkPosition: function() {
          var a, b, c;
          this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, ""), this.directionX > 0 ? (this.page = -Math.ceil(this.x / this.pageWidth), this.currentMasterPage = this.page + 1 - 3 * Math.floor((this.page + 1) / 3), this.pageIndex = 0 === this.pageIndex ? this.options.numberOfPages - 1 : this.pageIndex - 1, a = this.currentMasterPage - 1, a = 0 > a ? 2 : a, this.masterPages[a].style.left = 100 * this.page - 100 + "%", b = this.page - 1) : (this.page = -Math.floor(this.x / this.pageWidth), this.currentMasterPage = this.page + 1 - 3 * Math.floor((this.page + 1) / 3), this.pageIndex = this.pageIndex == this.options.numberOfPages - 1 ? 0 : this.pageIndex + 1, a = this.currentMasterPage + 1, a = a > 2 ? 0 : a, this.masterPages[a].style.left = 100 * this.page + 100 + "%", b = this.page + 1), c = this.masterPages[this.currentMasterPage].className, /(^|\s)swipeview-active(\s|$)/.test(c) || (this.masterPages[this.currentMasterPage].className = c ? c + " swipeview-active" : "swipeview-active"), c = this.masterPages[a].className, /(^|\s)swipeview-loading(\s|$)/.test(c) || (this.masterPages[a].className = c ? c + " swipeview-loading" : "swipeview-loading"), b -= Math.floor(b / this.options.numberOfPages) * this.options.numberOfPages, this.masterPages[a].dataset.upcomingPageIndex = b, newX = -this.page * this.pageWidth, this.slider.style[h] = Math.floor(500 * Math.abs(this.x - newX) / this.pageWidth) + "ms", this.options.loop || (this.masterPages[a].style.visibility = 0 === newX || newX == this.maxX ? "hidden" : ""), this.x == newX ? this.__flip() : (this.__pos(newX), this.options.hastyPageFlip && this.__flip())
      },
      __flip: function() {
          this.__event("flip");
          for (var a = 0; 3 > a; a++) this.masterPages[a].className = this.masterPages[a].className.replace(/(^|\s)swipeview-loading(\s|$)/, ""), this.masterPages[a].dataset.pageIndex = this.masterPages[a].dataset.upcomingPageIndex
      },
      __event: function(a) {
          var c = b.createEvent("Event");
          c.initEvent("swipeview-" + a, !0, !0), this.wrapper.dispatchEvent(c)
      }
  }, r
}(window, document);;
"object" != typeof JSON && (JSON = {}),
  function() {
      "use strict";

      function f(a) {
          return 10 > a ? "0" + a : a
      }

      function quote(a) {
          return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
              var b = meta[a];
              return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
          }) + '"' : '"' + a + '"'
      }

      function str(a, b) {
          var c, d, e, f, g, h = gap,
              i = b[a];
          switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
              case "string":
                  return quote(i);
              case "number":
                  return isFinite(i) ? String(i) : "null";
              case "boolean":
              case "null":
                  return String(i);
              case "object":
                  if (!i) return "null";
                  if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                      for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                      return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                  }
                  if (rep && "object" == typeof rep)
                      for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                  else
                      for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                  return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
          }
      }
      "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
          return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
      }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
          return this.valueOf()
      });
      var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          gap, indent, meta = {
              "\b": "\\b",
              "	": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
          },
          rep;
      "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
          var d;
          if (gap = "", indent = "", "number" == typeof c)
              for (d = 0; c > d; d += 1) indent += " ";
          else "string" == typeof c && (indent = c);
          if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
              "": a
          });
          throw new Error("JSON.stringify")
      }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
          function walk(a, b) {
              var c, d, e = a[b];
              if (e && "object" == typeof e)
                  for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
              return reviver.call(a, b, e)
          }
          var j;
          if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                  return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
              })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
              "": j
          }, "") : j;
          throw new SyntaxError("JSON.parse")
      })
  }(),
  function(a, b) {
      "use strict";
      var c = a.History = a.History || {};
      if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
      c.Adapter = {
          handlers: {},
          _uid: 1,
          uid: function(a) {
              return a._uid || (a._uid = c.Adapter._uid++)
          },
          bind: function(a, b, d) {
              var e = c.Adapter.uid(a);
              c.Adapter.handlers[e] = c.Adapter.handlers[e] || {}, c.Adapter.handlers[e][b] = c.Adapter.handlers[e][b] || [], c.Adapter.handlers[e][b].push(d), a["on" + b] = function(a, b) {
                  return function(d) {
                      c.Adapter.trigger(a, b, d)
                  }
              }(a, b)
          },
          trigger: function(a, b, d) {
              d = d || {};
              var e, f, g = c.Adapter.uid(a);
              for (c.Adapter.handlers[g] = c.Adapter.handlers[g] || {}, c.Adapter.handlers[g][b] = c.Adapter.handlers[g][b] || [], e = 0, f = c.Adapter.handlers[g][b].length; f > e; ++e) c.Adapter.handlers[g][b][e].apply(this, [d])
          },
          extractEventData: function(a, c) {
              var d = c && c[a] || b;
              return d
          },
          onDomLoad: function(b) {
              var c = a.setTimeout(function() {
                  b()
              }, 2e3);
              a.onload = function() {
                  clearTimeout(c), b()
              }
          }
      }, "undefined" != typeof c.init && c.init()
  }(window),
  function(a, b) {
      "use strict";
      var c = a.document,
          d = a.setTimeout || d,
          e = a.clearTimeout || e,
          f = a.setInterval || f,
          g = a.History = a.History || {};
      if ("undefined" != typeof g.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
      g.initHtml4 = function() {
          return "undefined" != typeof g.initHtml4.initialized ? !1 : (g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function(a) {
              var b, c = g.getHashByIndex();
              return b = a === c
          }, g.isHashEqual = function(a, b) {
              return a = encodeURIComponent(a).replace(/%25/g, "%"), b = encodeURIComponent(b).replace(/%25/g, "%"), a === b
          }, g.saveHash = function(a) {
              return g.isLastHash(a) ? !1 : (g.savedHashes.push(a), !0)
          }, g.getHashByIndex = function(a) {
              var b = null;
              return b = "undefined" == typeof a ? g.savedHashes[g.savedHashes.length - 1] : 0 > a ? g.savedHashes[g.savedHashes.length + a] : g.savedHashes[a]
          }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function(a, b, c) {
              var d, e = g.getHashByState(a);
              return d = {
                  discardedState: a,
                  backState: c,
                  forwardState: b
              }, g.discardedStates[e] = d, !0
          }, g.discardHash = function(a, b, c) {
              var d = {
                  discardedHash: a,
                  backState: c,
                  forwardState: b
              };
              return g.discardedHashes[a] = d, !0
          }, g.discardedState = function(a) {
              var b, c = g.getHashByState(a);
              return b = g.discardedStates[c] || !1
          }, g.discardedHash = function(a) {
              var b = g.discardedHashes[a] || !1;
              return b
          }, g.recycleState = function(a) {
              var b = g.getHashByState(a);
              return g.discardedState(a) && delete g.discardedStates[b], !0
          }, g.emulated.hashChange && (g.hashChangeInit = function() {
              g.checkerFunction = null;
              var b, d, e, h, i = "",
                  j = Boolean(g.getHash());
              return g.isInternetExplorer() ? (b = "historyjs-iframe", d = c.createElement("iframe"), d.setAttribute("id", b), d.setAttribute("src", "#"), d.style.display = "none", c.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), e = "", h = !1, g.checkerFunction = function() {
                  if (h) return !1;
                  h = !0;
                  var b = g.getHash(),
                      c = g.getHash(d.contentWindow.document);
                  return b !== i ? (i = b, c !== b && (e = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = g.escapeHash(b)), g.Adapter.trigger(a, "hashchange")) : c !== e && (e = c, j && "" === c ? g.back() : g.setHash(c, !1)), h = !1, !0
              }) : g.checkerFunction = function() {
                  var b = g.getHash() || "";
                  return b !== i && (i = b, g.Adapter.trigger(a, "hashchange")), !0
              }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
          }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function(b) {
              var c, d = b && b.newURL || g.getLocationHref(),
                  e = g.getHashByUrl(d),
                  f = null,
                  h = null;
              return g.isLastHash(e) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(e), e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (f = g.extractState(g.getFullUrl(e || g.getLocationHref()), !0), g.isLastSavedState(f) ? (g.busy(!1), !1) : (h = g.getHashByState(f), c = g.discardedState(f), c ? (g.getHashByIndex(-2) === g.getHashByState(c.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(f.data, f.title, encodeURI(f.url), !1), !0))))
          }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function(b, c, d, e) {
              if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
              if (e !== !1 && g.busy()) return g.pushQueue({
                  scope: g,
                  callback: g.pushState,
                  args: arguments,
                  queue: e
              }), !1;
              g.busy(!0);
              var f = g.createStateObject(b, c, d),
                  h = g.getHashByState(f),
                  i = g.getState(!1),
                  j = g.getHashByState(i),
                  k = g.getHash(),
                  l = g.expectedStateId == f.id;
              return g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), h === j ? (g.busy(!1), !1) : (g.saveState(f), l || g.Adapter.trigger(a, "statechange"), !g.isHashEqual(h, k) && !g.isHashEqual(h, g.getShortUrl(g.getLocationHref())) && g.setHash(h, !1), g.busy(!1), !0)
          }, g.replaceState = function(b, c, d, e) {
              if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
              if (e !== !1 && g.busy()) return g.pushQueue({
                  scope: g,
                  callback: g.replaceState,
                  args: arguments,
                  queue: e
              }), !1;
              g.busy(!0);
              var f = g.createStateObject(b, c, d),
                  h = g.getHashByState(f),
                  i = g.getState(!1),
                  j = g.getHashByState(i),
                  k = g.getStateByIndex(-2);
              return g.discardState(i, f, k), h === j ? (g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), g.saveState(f), g.Adapter.trigger(a, "statechange"), g.busy(!1)) : g.pushState(f.data, f.title, f.url, !1), !0
          }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
              g.Adapter.trigger(a, "hashchange")
          }), void 0)
      }, "undefined" != typeof g.init && g.init()
  }(window),
  function(a, b) {
      "use strict";
      var c = a.console || b,
          d = a.document,
          e = a.navigator,
          f = !1,
          g = a.setTimeout,
          h = a.clearTimeout,
          i = a.setInterval,
          j = a.clearInterval,
          k = a.JSON,
          l = a.alert,
          m = a.History = a.History || {},
          n = a.history;
      try {
          f = a.sessionStorage, f.setItem("TEST", "1"), f.removeItem("TEST")
      } catch (o) {
          f = !1
      }
      if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, "undefined" != typeof m.init) throw new Error("History.js Core has already been loaded...");
      m.init = function(a) {
          return "undefined" == typeof m.Adapter ? !1 : ("undefined" != typeof m.initCore && m.initCore(), "undefined" != typeof m.initHtml4 && m.initHtml4(), !0)
      }, m.initCore = function(o) {
          if ("undefined" != typeof m.initCore.initialized) return !1;
          if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function() {
                  var a, b = m.intervalList;
                  if ("undefined" != typeof b && null !== b) {
                      for (a = 0; a < b.length; a++) j(b[a]);
                      m.intervalList = null
                  }
              }, m.debug = function() {
                  (m.options.debug || !1) && m.log.apply(m, arguments)
              }, m.log = function() {
                  var a, b, e, f, g, h = "undefined" != typeof c && "undefined" != typeof c.log && "undefined" != typeof c.log.apply,
                      i = d.getElementById("log");
                  for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; e > b; ++b) {
                      if (g = arguments[b], "object" == typeof g && "undefined" != typeof k) try {
                          g = k.stringify(g)
                      } catch (j) {}
                      a += "\n" + g + "\n"
                  }
                  return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
              }, m.getInternetExplorerMajorVersion = function() {
                  var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                      for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                          (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                      return a > 4 ? a : !1
                  }();
                  return a
              }, m.isInternetExplorer = function() {
                  var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                  return a
              }, m.options.html4Mode ? m.emulated = {
                  pushState: !0,
                  hashChange: !0
              } : m.emulated = {
                  pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                  hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
              }, m.enabled = !m.emulated.pushState, m.bugs = {
                  setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                  safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                  ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                  hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
              }, m.isEmptyObject = function(a) {
                  for (var b in a)
                      if (a.hasOwnProperty(b)) return !1;
                  return !0
              }, m.cloneObject = function(a) {
                  var b, c;
                  return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
              }, m.getRootUrl = function() {
                  var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                  return d.location.port && (a += ":" + d.location.port), a += "/"
              }, m.getBaseHref = function() {
                  var a = d.getElementsByTagName("base"),
                      b = null,
                      c = "";
                  return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
              }, m.getBaseUrl = function() {
                  var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                  return a
              }, m.getPageUrl = function() {
                  var a, b = m.getState(!1, !1),
                      c = (b || {}).url || m.getLocationHref();
                  return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                      return /\./.test(a) ? a : a + "/"
                  })
              }, m.getBasePageUrl = function() {
                  var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                      return /[^\/]$/.test(a) ? "" : a
                  }).replace(/\/+$/, "") + "/";
                  return a
              }, m.getFullUrl = function(a, b) {
                  var c = a,
                      d = a.substring(0, 1);
                  return b = "undefined" == typeof b ? !0 : b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
              }, m.getShortUrl = function(a) {
                  var b = a,
                      c = m.getBaseUrl(),
                      d = m.getRootUrl();
                  return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
              }, m.getLocationHref = function(a) {
                  return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : -1 == a.URL.indexOf("#") && -1 != a.location.href.indexOf("#") ? a.location.href : a.URL || a.location.href
              }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                  m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
              }, m.getState = function(a, b) {
                  "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0);
                  var c = m.getLastSavedState();
                  return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
              }, m.getIdByState = function(a) {
                  var b, c = m.extractId(a.url);
                  if (!c)
                      if (b = m.getStateString(a), "undefined" != typeof m.stateToId[b]) c = m.stateToId[b];
                      else if ("undefined" != typeof m.store.stateToId[b]) c = m.store.stateToId[b];
                  else {
                      for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof m.idToState[c] || "undefined" != typeof m.store.idToState[c];);
                      m.stateToId[b] = c, m.idToState[c] = a
                  }
                  return c
              }, m.normalizeState = function(a) {
                  var b, c;
                  return a && "object" == typeof a || (a = {}), "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
              }, m.createStateObject = function(a, b, c) {
                  var d = {
                      data: a,
                      title: b,
                      url: c
                  };
                  return d = m.normalizeState(d)
              }, m.getStateById = function(a) {
                  a = String(a);
                  var c = m.idToState[a] || m.store.idToState[a] || b;
                  return c
              }, m.getStateString = function(a) {
                  var b, c, d;
                  return b = m.normalizeState(a), c = {
                      data: b.data,
                      title: a.title,
                      url: a.url
                  }, d = k.stringify(c)
              }, m.getStateId = function(a) {
                  var b, c;
                  return b = m.normalizeState(a), c = b.id
              }, m.getHashByState = function(a) {
                  var b, c;
                  return b = m.normalizeState(a), c = b.hash
              }, m.extractId = function(a) {
                  var b, c, d, e;
                  return e = -1 != a.indexOf("#") ? a.split("#")[0] : a, c = /(.*)\&_suid=([0-9]+)$/.exec(e), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
              }, m.isTraditionalAnchor = function(a) {
                  var b = !/[\/\?\.]/.test(a);
                  return b
              }, m.extractState = function(a, b) {
                  var c, d, e = null;
                  return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))), e
              }, m.getIdByUrl = function(a) {
                  var c = m.urlToId[a] || m.store.urlToId[a] || b;
                  return c
              }, m.getLastSavedState = function() {
                  return m.savedStates[m.savedStates.length - 1] || b
              }, m.getLastStoredState = function() {
                  return m.storedStates[m.storedStates.length - 1] || b
              }, m.hasUrlDuplicate = function(a) {
                  var b, c = !1;
                  return b = m.extractState(a.url), c = b && b.id !== a.id
              }, m.storeState = function(a) {
                  return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
              }, m.isLastSavedState = function(a) {
                  var b, c, d, e = !1;
                  return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
              }, m.saveState = function(a) {
                  return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
              }, m.getStateByIndex = function(a) {
                  var b = null;
                  return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : 0 > a ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
              }, m.getCurrentIndex = function() {
                  var a = null;
                  return a = m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
              }, m.getHash = function(a) {
                  var b, c = m.getLocationHref(a);
                  return b = m.getHashByUrl(c)
              }, m.unescapeHash = function(a) {
                  var b = m.normalizeHash(a);
                  return b = decodeURIComponent(b)
              }, m.normalizeHash = function(a) {
                  var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                  return b
              }, m.setHash = function(a, b) {
                  var c, e;
                  return b !== !1 && m.busy() ? (m.pushQueue({
                      scope: m,
                      callback: m.setHash,
                      args: arguments,
                      queue: b
                  }), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
              }, m.escapeHash = function(b) {
                  var c = m.normalizeHash(b);
                  return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
              }, m.getHashByUrl = function(a) {
                  var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                  return b = m.unescapeHash(b)
              }, m.setTitle = function(a) {
                  var b, c = a.title;
                  c || (b = m.getStateByIndex(0), b && b.url === a.url && (c = b.title || m.options.initialTitle));
                  try {
                      d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                  } catch (e) {}
                  return d.title = c, m
              }, m.queues = [], m.busy = function(a) {
                  if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                      h(m.busy.timeout);
                      var b = function() {
                          var a, c, d;
                          if (!m.busy.flag)
                              for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                      };
                      m.busy.timeout = g(b, m.options.busyDelay)
                  }
                  return m.busy.flag
              }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                  return a.callback.apply(a.scope || m, a.args || [])
              }, m.pushQueue = function(a) {
                  return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
              }, m.queue = function(a, b) {
                  return "function" == typeof a && (a = {
                      callback: a
                  }), "undefined" != typeof b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
              }, m.clearQueue = function() {
                  return m.busy.flag = !1, m.queues = [], m
              }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                  return m.stateChanged = !0, m.doubleCheckClear(), m
              }, m.doubleCheckClear = function() {
                  return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
              }, m.doubleCheck = function(a) {
                  return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                      return m.doubleCheckClear(), m.stateChanged || a(), !0
                  }, m.options.doubleCheckInterval)), m
              }, m.safariStatePoll = function() {
                  var b, c = m.extractState(m.getLocationHref());
                  return m.isLastSavedState(c) ? void 0 : (b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m)
              }, m.back = function(a) {
                  return a !== !1 && m.busy() ? (m.pushQueue({
                      scope: m,
                      callback: m.back,
                      args: arguments,
                      queue: a
                  }), !1) : (m.busy(!0), m.doubleCheck(function() {
                      m.back(!1)
                  }), n.go(-1), !0)
              }, m.forward = function(a) {
                  return a !== !1 && m.busy() ? (m.pushQueue({
                      scope: m,
                      callback: m.forward,
                      args: arguments,
                      queue: a
                  }), !1) : (m.busy(!0), m.doubleCheck(function() {
                      m.forward(!1)
                  }), n.go(1), !0)
              }, m.go = function(a, b) {
                  var c;
                  if (a > 0)
                      for (c = 1; a >= c; ++c) m.forward(b);
                  else {
                      if (!(0 > a)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                      for (c = -1; c >= a; --c) m.back(b)
                  }
                  return m
              }, m.emulated.pushState) {
              var p = function() {};
              m.pushState = m.pushState || p, m.replaceState = m.replaceState || p
          } else m.onPopState = function(b, c) {
              var d, e, f = !1,
                  g = !1;
              return m.doubleCheckComplete(), d = m.getHash(), d ? (e = m.extractState(d || m.getLocationHref(), !0), e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (f = m.Adapter.extractEventData("state", b, c) || !1, g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()), g || (g = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(g) ? (m.busy(!1), !1) : (m.storeState(g), m.saveState(g), m.setTitle(g), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
          }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
              if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
              if (e !== !1 && m.busy()) return m.pushQueue({
                  scope: m,
                  callback: m.pushState,
                  args: arguments,
                  queue: e
              }), !1;
              m.busy(!0);
              var f = m.createStateObject(b, c, d);
              return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
          }, m.replaceState = function(b, c, d, e) {
              if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
              if (e !== !1 && m.busy()) return m.pushQueue({
                  scope: m,
                  callback: m.replaceState,
                  args: arguments,
                  queue: e
              }), !1;
              m.busy(!0);
              var f = m.createStateObject(b, c, d);
              return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
          };
          if (f) {
              try {
                  m.store = k.parse(f.getItem("History.store")) || {}
              } catch (q) {
                  m.store = {}
              }
              m.normalizeStore()
          } else m.store = {}, m.normalizeStore();
          m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function() {
              var a, b, c;
              try {
                  a = k.parse(f.getItem("History.store")) || {}
              } catch (d) {
                  a = {}
              }
              a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
              for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
              for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
              for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
              m.store = a, m.normalizeStore(), c = k.stringify(a);
              try {
                  f.setItem("History.store", c)
              } catch (e) {
                  if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                  f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
              }
          }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), ("Apple Computer, Inc." === e.vendor || "Mozilla" === (e.appCodeName || "")) && (m.Adapter.bind(a, "hashchange", function() {
              m.Adapter.trigger(a, "popstate")
          }), m.getHash() && m.Adapter.onDomLoad(function() {
              m.Adapter.trigger(a, "hashchange")
          })))
      }, (!m.options || !m.options.delayInit) && m.init()
  }(window);;
! function(a, b) {
  function c(b, c) {
      var e, f, g, h = b.nodeName.toLowerCase();
      return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
  }

  function d(b) {
      return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
          return "hidden" === a.css(this, "visibility")
      }).length
  }
  var e = 0,
      f = /^ui-id-\d+$/;
  a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
      version: "1.10.0",
      keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38
      }
  }), a.fn.extend({
      _focus: a.fn.focus,
      focus: function(b, c) {
          return "number" == typeof b ? this.each(function() {
              var d = this;
              setTimeout(function() {
                  a(d).focus(), c && c.call(d)
              }, b)
          }) : this._focus.apply(this, arguments)
      },
      scrollParent: function() {
          var b;
          return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
              return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
          }).eq(0) : this.parents().filter(function() {
              return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
          }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
      },
      zIndex: function(c) {
          if (c !== b) return this.css("zIndex", c);
          if (this.length)
              for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                  if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                  f = f.parent()
              }
          return 0
      },
      uniqueId: function() {
          return this.each(function() {
              this.id || (this.id = "ui-id-" + ++e)
          })
      },
      removeUniqueId: function() {
          return this.each(function() {
              f.test(this.id) && a(this).removeAttr("id")
          })
      }
  }), a.extend(a.expr[":"], {
      data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
          return function(c) {
              return !!a.data(c, b)
          }
      }) : function(b, c, d) {
          return !!a.data(b, d[3])
      },
      focusable: function(b) {
          return c(b, !isNaN(a.attr(b, "tabindex")))
      },
      tabbable: function(b) {
          var d = a.attr(b, "tabindex"),
              e = isNaN(d);
          return (e || d >= 0) && c(b, !e)
      }
  }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
      function e(b, c, d, e) {
          return a.each(f, function() {
              c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
          }), c
      }
      var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
          g = d.toLowerCase(),
          h = {
              innerWidth: a.fn.innerWidth,
              innerHeight: a.fn.innerHeight,
              outerWidth: a.fn.outerWidth,
              outerHeight: a.fn.outerHeight
          };
      a.fn["inner" + d] = function(c) {
          return c === b ? h["inner" + d].call(this) : this.each(function() {
              a(this).css(g, e(this, c) + "px")
          })
      }, a.fn["outer" + d] = function(b, c) {
          return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
              a(this).css(g, e(this, b, !0, c) + "px")
          })
      }
  }), a.fn.addBack || (a.fn.addBack = function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
      return function(c) {
          return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
      }
  }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
      disableSelection: function() {
          return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
              a.preventDefault()
          })
      },
      enableSelection: function() {
          return this.unbind(".ui-disableSelection")
      }
  }), a.extend(a.ui, {
      plugin: {
          add: function(b, c, d) {
              var e, f = a.ui[b].prototype;
              for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
          },
          call: function(a, b, c) {
              var d, e = a.plugins[b];
              if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                  for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
          }
      },
      hasScroll: function(b, c) {
          if ("hidden" === a(b).css("overflow")) return !1;
          var d = c && "left" === c ? "scrollLeft" : "scrollTop",
              e = !1;
          return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
      }
  }))
}(jQuery),
function(a, b) {
  var c = 0,
      d = Array.prototype.slice,
      e = a.cleanData;
  a.cleanData = function(b) {
      for (var c, d = 0; null != (c = b[d]); d++) try {
          a(c).triggerHandler("remove")
      } catch (f) {}
      e(b)
  }, a.widget = function(b, c, d) {
      var e, f, g, h, i = {},
          j = b.split(".")[0];
      b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
          return !!a.data(b, e)
      }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
          return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
      }, a.extend(g, f, {
          version: d.version,
          _proto: a.extend({}, d),
          _childConstructors: []
      }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
          return a.isFunction(d) ? void(i[b] = function() {
              var a = function() {
                      return c.prototype[b].apply(this, arguments)
                  },
                  e = function(a) {
                      return c.prototype[b].apply(this, a)
                  };
              return function() {
                  var b, c = this._super,
                      f = this._superApply;
                  return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
              }
          }()) : void(i[b] = d)
      }), g.prototype = a.widget.extend(h, {
          widgetEventPrefix: f ? h.widgetEventPrefix : b
      }, i, {
          constructor: g,
          namespace: j,
          widgetName: b,
          widgetFullName: e
      }), f ? (a.each(f._childConstructors, function(b, c) {
          var d = c.prototype;
          a.widget(d.namespace + "." + d.widgetName, g, c._proto)
      }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
  }, a.widget.extend = function(c) {
      for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)
          for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (a.isPlainObject(f) ? c[e] = a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : c[e] = f);
      return c
  }, a.widget.bridge = function(c, e) {
      var f = e.prototype.widgetFullName || c;
      a.fn[c] = function(g) {
          var h = "string" == typeof g,
              i = d.call(arguments, 1),
              j = this;
          return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function() {
              var d, e = a.data(this, f);
              return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
          }) : this.each(function() {
              var b = a.data(this, f);
              b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
          }), j
      }
  }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
          disabled: !1,
          create: null
      },
      _createWidget: function(b, d) {
          d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
              remove: function(a) {
                  a.target === d && this.destroy()
              }
          }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: a.noop,
      _getCreateEventData: a.noop,
      _create: a.noop,
      _init: a.noop,
      destroy: function() {
          this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
      },
      _destroy: a.noop,
      widget: function() {
          return this.element
      },
      option: function(c, d) {
          var e, f, g, h = c;
          if (0 === arguments.length) return a.widget.extend({}, this.options);
          if ("string" == typeof c)
              if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                  for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                  if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                  f[c] = d
              } else {
                  if (d === b) return this.options[c] === b ? null : this.options[c];
                  h[c] = d
              } return this._setOptions(h), this
      },
      _setOptions: function(a) {
          var b;
          for (b in a) this._setOption(b, a[b]);
          return this
      },
      _setOption: function(a, b) {
          return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
      },
      enable: function() {
          return this._setOption("disabled", !1)
      },
      disable: function() {
          return this._setOption("disabled", !0)
      },
      _on: function(b, c, d) {
          var e, f = this;
          "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
              function h() {
                  return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
              }
              "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
              var i = d.match(/^(\w+)\s*(.*)$/),
                  j = i[1] + f.eventNamespace,
                  k = i[2];
              k ? e.delegate(k, j, h) : c.bind(j, h)
          })
      },
      _off: function(a, b) {
          b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
      },
      _delay: function(a, b) {
          function c() {
              return ("string" == typeof a ? d[a] : a).apply(d, arguments)
          }
          var d = this;
          return setTimeout(c, b || 0)
      },
      _hoverable: function(b) {
          this.hoverable = this.hoverable.add(b), this._on(b, {
              mouseenter: function(b) {
                  a(b.currentTarget).addClass("ui-state-hover")
              },
              mouseleave: function(b) {
                  a(b.currentTarget).removeClass("ui-state-hover")
              }
          })
      },
      _focusable: function(b) {
          this.focusable = this.focusable.add(b), this._on(b, {
              focusin: function(b) {
                  a(b.currentTarget).addClass("ui-state-focus")
              },
              focusout: function(b) {
                  a(b.currentTarget).removeClass("ui-state-focus")
              }
          })
      },
      _trigger: function(b, c, d) {
          var e, f, g = this.options[b];
          if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent, f)
              for (e in f) e in c || (c[e] = f[e]);
          return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
      }
  }, a.each({
      show: "fadeIn",
      hide: "fadeOut"
  }, function(b, c) {
      a.Widget.prototype["_" + b] = function(d, e, f) {
          "string" == typeof e && (e = {
              effect: e
          });
          var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
          e = e || {}, "number" == typeof e && (e = {
              duration: e
          }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
              a(this)[b](), f && f.call(d[0]), c()
          })
      }
  })
}(jQuery),
function(a, b) {
  var c = !1;
  a(document).mouseup(function() {
      c = !1
  }), a.widget("ui.mouse", {
      version: "1.10.0",
      options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0
      },
      _mouseInit: function() {
          var b = this;
          this.element.bind("mousedown." + this.widgetName, function(a) {
              return b._mouseDown(a)
          }).bind("click." + this.widgetName, function(c) {
              return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
          }), this.started = !1
      },
      _mouseDestroy: function() {
          this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function(b) {
          if (!c) {
              this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
              var d = this,
                  e = 1 === b.which,
                  f = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
              return e && !f && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                  d.mouseDelayMet = !0
              }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                  return d._mouseMove(a)
              }, this._mouseUpDelegate = function(a) {
                  return d._mouseUp(a)
              }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0)) : !0
          }
      },
      _mouseMove: function(b) {
          return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
      },
      _mouseUp: function(b) {
          return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
      },
      _mouseDistanceMet: function(a) {
          return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function() {
          return this.mouseDelayMet
      },
      _mouseStart: function() {},
      _mouseDrag: function() {},
      _mouseStop: function() {},
      _mouseCapture: function() {
          return !0
      }
  })
}(jQuery),
function(a, b) {
  function c(a, b, c) {
      return a > b && b + c > a
  }
  a.widget("ui.sortable", a.ui.mouse, {
      version: "1.10.0",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null
      },
      _create: function() {
          var a = this.options;
          this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
      },
      _destroy: function() {
          this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
          for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
          return this
      },
      _setOption: function(b, c) {
          "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
      },
      _mouseCapture: function(b, c) {
          var d = null,
              e = !1,
              f = this;
          return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function() {
              return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
          }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d && (!this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
              this === b.target && (e = !0)
          }), e)) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1)
      },
      _mouseStart: function(b, c, d) {
          var e, f = this.options;
          if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                  top: this.offset.top - this.margins.top,
                  left: this.offset.left - this.margins.left
              }, a.extend(this.offset, {
                  click: {
                      left: b.pageX - this.offset.left,
                      top: b.pageY - this.offset.top
                  },
                  parent: this._getParentOffset(),
                  relative: this._getRelativeOffset()
              }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, f.cursorAt && this._adjustOffsetFromHelper(f.cursorAt), this.domPosition = {
                  prev: this.currentItem.prev()[0],
                  parent: this.currentItem.parent()[0]
              }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), f.containment && this._setContainment(), f.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", f.cursor)), f.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", f.opacity)), f.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", f.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
              for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
          return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
      },
      _mouseDrag: function(b) {
          var c, d, e, f, g = this.options,
              h = !1;
          for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
              if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                  if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                  this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                  break
              } return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
      },
      _mouseStop: function(b, c) {
          if (b) {
              if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                  var d = this,
                      e = this.placeholder.offset();
                  this.reverting = !0, a(this.helper).animate({
                      left: e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                      top: e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                  }, parseInt(this.options.revert, 10) || 500, function() {
                      d._clear(b)
                  })
              } else this._clear(b, c);
              return !1
          }
      },
      cancel: function() {
          if (this.dragging) {
              this._mouseUp({
                  target: null
              }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
              for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
          }
          return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null
          }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
      },
      serialize: function(b) {
          var c = this._getItemsAsjQuery(b && b.connected),
              d = [];
          return b = b || {}, a(c).each(function() {
              var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
              c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
          }), !d.length && b.key && d.push(b.key + "="), d.join("&")
      },
      toArray: function(b) {
          var c = this._getItemsAsjQuery(b && b.connected),
              d = [];
          return b = b || {}, c.each(function() {
              d.push(a(b.item || this).attr(b.attribute || "id") || "")
          }), d
      },
      _intersectsWith: function(a) {
          var b = this.positionAbs.left,
              c = b + this.helperProportions.width,
              d = this.positionAbs.top,
              e = d + this.helperProportions.height,
              f = a.left,
              g = f + a.width,
              h = a.top,
              i = h + a.height,
              j = this.offset.click.top,
              k = this.offset.click.left,
              l = d + j > h && i > d + j && b + k > f && g > b + k;
          return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
      },
      _intersectsWithPointer: function(a) {
          var b = "x" === this.options.axis || c(this.positionAbs.top + this.offset.click.top, a.top, a.height),
              d = "y" === this.options.axis || c(this.positionAbs.left + this.offset.click.left, a.left, a.width),
              e = b && d,
              f = this._getDragVerticalDirection(),
              g = this._getDragHorizontalDirection();
          return e ? this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1) : !1
      },
      _intersectsWithSides: function(a) {
          var b = c(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
              d = c(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
              e = this._getDragVerticalDirection(),
              f = this._getDragHorizontalDirection();
          return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && b || "up" === e && !b)
      },
      _getDragVerticalDirection: function() {
          var a = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 !== a && (a > 0 ? "down" : "up")
      },
      _getDragHorizontalDirection: function() {
          var a = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 !== a && (a > 0 ? "right" : "left")
      },
      refresh: function(a) {
          return this._refreshItems(a), this.refreshPositions(), this
      },
      _connectWith: function() {
          var a = this.options;
          return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
      },
      _getItemsAsjQuery: function(b) {
          var c, d, e, f, g = [],
              h = [],
              i = this._connectWith();
          if (i && b)
              for (c = i.length - 1; c >= 0; c--)
                  for (e = a(i[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
          for (h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem
              }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), c = h.length - 1; c >= 0; c--) h[c][0].each(function() {
              g.push(this)
          });
          return a(g)
      },
      _removeCurrentsFromItems: function() {
          var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = a.grep(this.items, function(a) {
              for (var c = 0; c < b.length; c++)
                  if (b[c] === a.item[0]) return !1;
              return !0
          })
      },
      _refreshItems: function(b) {
          this.items = [], this.containers = [this];
          var c, d, e, f, g, h, i, j, k = this.items,
              l = [
                  [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                      item: this.currentItem
                  }) : a(this.options.items, this.element), this]
              ],
              m = this._connectWith();
          if (m && this.ready)
              for (c = m.length - 1; c >= 0; c--)
                  for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                      item: this.currentItem
                  }) : a(f.options.items, f.element), f]), this.containers.push(f));
          for (c = l.length - 1; c >= 0; c--)
              for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                  item: i,
                  instance: g,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0
              })
      },
      refreshPositions: function(b) {
          this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
          var c, d, e, f;
          for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
          if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
          else
              for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
          return this
      },
      _createPlaceholder: function(b) {
          b = b || this;
          var c, d = b.options;
          d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
              element: function() {
                  var d = a(document.createElement(b.currentItem[0].nodeName)).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                  return c || (d.style.visibility = "hidden"), d
              },
              update: function(a, e) {
                  (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
              }
          }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
      },
      _contactContainers: function(b) {
          var c, d, e, f, g, h, i, j, k, l = null,
              m = null;
          for (c = this.containers.length - 1; c >= 0; c--)
              if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                  if (this._intersectsWith(this.containers[c].containerCache)) {
                      if (l && a.contains(this.containers[c].element[0], l.element[0])) continue;
                      l = this.containers[c], m = c
                  } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
          if (l)
              if (1 === this.containers.length) this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1;
              else {
                  for (e = 1e4, f = null, g = this.containers[m].floating ? "left" : "top", h = this.containers[m].floating ? "width" : "height", i = this.positionAbs[g] + this.offset.click[g], d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[m].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (j = this.items[d].item.offset()[g], k = !1, Math.abs(j - i) > Math.abs(j + this.items[d][h] - i) && (k = !0, j += this.items[d][h]), Math.abs(j - i) < e && (e = Math.abs(j - i), f = this.items[d], this.direction = k ? "up" : "down"));
                  if (!f && !this.options.dropOnEmpty) return;
                  this.currentContainer = this.containers[m], f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[m].element, !0), this._trigger("change", b, this._uiHash()), this.containers[m]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1
              }
      },
      _createHelper: function(b) {
          var c = this.options,
              d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
          return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left")
          }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
      },
      _adjustOffsetFromHelper: function(b) {
          "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
              left: +b[0],
              top: +b[1] || 0
          }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
      },
      _getParentOffset: function() {
          this.offsetParent = this.helper.offsetParent();
          var b = this.offsetParent.offset();
          return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
              top: 0,
              left: 0
          }), {
              top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
          }
      },
      _getRelativeOffset: function() {
          if ("relative" === this.cssPosition) {
              var a = this.currentItem.position();
              return {
                  top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                  left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
              }
          }
          return {
              top: 0,
              left: 0
          }
      },
      _cacheMargins: function() {
          this.margins = {
              left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
              top: parseInt(this.currentItem.css("marginTop"), 10) || 0
          }
      },
      _cacheHelperProportions: function() {
          this.helperProportions = {
              width: this.helper.outerWidth(),
              height: this.helper.outerHeight()
          }
      },
      _setContainment: function() {
          var b, c, d, e = this.options;
          "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
      },
      _convertPositionTo: function(b, c) {
          c || (c = this.position);
          var d = "absolute" === b ? 1 : -1,
              e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
              f = /(html|body)/i.test(e[0].tagName);
          return {
              top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
              left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
          }
      },
      _generatePosition: function(b) {
          var c, d, e = this.options,
              f = b.pageX,
              g = b.pageY,
              h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
              i = /(html|body)/i.test(h[0].tagName);
          return "relative" === this.cssPosition && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
              top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
              left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
          }
      },
      _rearrange: function(a, b, c, d) {
          c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
          var e = this.counter;
          this._delay(function() {
              e === this.counter && this.refreshPositions(!d)
          })
      },
      _clear: function(b, c) {
          this.reverting = !1;
          var d, e = [];
          if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
              for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
              this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
          } else this.currentItem.show();
          for (this.fromOutside && !c && e.push(function(a) {
                  this._trigger("receive", a, this._uiHash(this.fromOutside))
              }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !c && e.push(function(a) {
                  this._trigger("update", a, this._uiHash())
              }), this !== this.currentContainer && (c || (e.push(function(a) {
                  this._trigger("remove", a, this._uiHash())
              }), e.push(function(a) {
                  return function(b) {
                      a._trigger("receive", b, this._uiHash(this))
                  }
              }.call(this, this.currentContainer)), e.push(function(a) {
                  return function(b) {
                      a._trigger("update", b, this._uiHash(this))
                  }
              }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) c || e.push(function(a) {
              return function(b) {
                  a._trigger("deactivate", b, this._uiHash(this))
              }
          }.call(this, this.containers[d])), this.containers[d].containerCache.over && (e.push(function(a) {
              return function(b) {
                  a._trigger("out", b, this._uiHash(this))
              }
          }.call(this, this.containers[d])), this.containers[d].containerCache.over = 0);
          if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
              if (!c) {
                  for (this._trigger("beforeStop", b, this._uiHash()), d = 0; d < e.length; d++) e[d].call(this, b);
                  this._trigger("stop", b, this._uiHash())
              }
              return this.fromOutside = !1, !1
          }
          if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
              for (d = 0; d < e.length; d++) e[d].call(this, b);
              this._trigger("stop", b, this._uiHash())
          }
          return this.fromOutside = !1, !0
      },
      _trigger: function() {
          a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
      },
      _uiHash: function(b) {
          var c = b || this;
          return {
              helper: c.helper,
              placeholder: c.placeholder || a([]),
              position: c.position,
              originalPosition: c.originalPosition,
              offset: c.positionAbs,
              item: c.currentItem,
              sender: b ? b.element : null
          }
      }
  })
}(jQuery);;
! function() {
  BinaryFile = function(a, b, c) {
      var d = a,
          e = b || 0,
          f = 0;
      this.getRawData = function() {
          return d
      }, "string" == typeof a ? (f = c || d.length, this.getByteAt = function(a) {
          return 255 & d.charCodeAt(a + e)
      }) : "unknown" == typeof a && (f = c || IEBinary_getLength(d), this.getByteAt = function(a) {
          return IEBinary_getByteAt(d, a + e)
      }), this.getLength = function() {
          return f
      }, this.getSByteAt = function(a) {
          var b = this.getByteAt(a);
          return b > 127 ? b - 256 : b
      }, this.getShortAt = function(a, b) {
          var c = b ? (this.getByteAt(a) << 8) + this.getByteAt(a + 1) : (this.getByteAt(a + 1) << 8) + this.getByteAt(a);
          return 0 > c && (c += 65536), c
      }, this.getSShortAt = function(a, b) {
          var c = this.getShortAt(a, b);
          return c > 32767 ? c - 65536 : c
      }, this.getLongAt = function(a, b) {
          var c = this.getByteAt(a),
              d = this.getByteAt(a + 1),
              e = this.getByteAt(a + 2),
              f = this.getByteAt(a + 3),
              g = b ? (((c << 8) + d << 8) + e << 8) + f : (((f << 8) + e << 8) + d << 8) + c;
          return 0 > g && (g += 4294967296), g
      }, this.getSLongAt = function(a, b) {
          var c = this.getLongAt(a, b);
          return c > 2147483647 ? c - 4294967296 : c
      }, this.getStringAt = function(a, b) {
          for (var c = [], d = a, e = 0; a + b > d; d++, e++) c[e] = String.fromCharCode(this.getByteAt(d));
          return c.join("")
      }, this.getCharAt = function(a) {
          return String.fromCharCode(this.getByteAt(a))
      }, this.toBase64 = function() {
          return window.btoa(d)
      }, this.fromBase64 = function(a) {
          d = window.atob(a)
      }
  };
  var a = function() {
      function a() {
          var a = null;
          return window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP")), a
      }

      function b(b, c, d) {
          var e = a();
          e ? (c && ("undefined" != typeof e.onload ? e.onload = function() {
              "200" == e.status ? c(this) : d && d(), e = null
          } : e.onreadystatechange = function() {
              4 == e.readyState && ("200" == e.status ? c(this) : d && d(), e = null)
          }), e.open("HEAD", b, !0), e.send(null)) : d && d()
      }

      function c(b, c, d, e, f, g) {
          var h = a();
          if (h) {
              var i = 0;
              e && !f && (i = e[0]);
              var j = 0;
              e && (j = e[1] - e[0] + 1), c && ("undefined" != typeof h.onload ? h.onload = function() {
                  "200" == h.status || "206" == h.status || "0" == h.status ? (this.binaryResponse = new BinaryFile(this.responseText, i, j), this.fileSize = g || this.getResponseHeader("Content-Length"), c(this)) : d && d(), h = null
              } : h.onreadystatechange = function() {
                  4 == h.readyState && ("200" == h.status || "206" == h.status || "0" == h.status ? (this.binaryResponse = new BinaryFile(h.responseBody, i, j), this.fileSize = g || this.getResponseHeader("Content-Length"), c(this)) : d && d(), h = null)
              }), h.open("GET", b, !0), h.overrideMimeType && h.overrideMimeType("text/plain; charset=x-user-defined"), e && f && h.setRequestHeader("Range", "bytes=" + e[0] + "-" + e[1]), h.send(null)
          } else d && d()
      }
      return function(a, d, e, f) {
          f ? b(a, function(b) {
              var g, h, i = parseInt(b.getResponseHeader("Content-Length"), 10),
                  j = b.getResponseHeader("Accept-Ranges");
              g = f[0], f[0] < 0 && (g += i), h = g + f[1] - 1, c(a, d, e, [g, h], "bytes" == j, i)
          }) : c(a, d, e)
      }
  }();
  document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n	IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n	IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n</script>\r\n"), EXIF = {},
      function() {
          function b(a) {
              return !!a.exifdata
          }

          function c(b, c) {
              a(b.src, function(a) {
                  var e = d(a.binaryResponse);
                  b.exifdata = e || {}, c && c(b.exifdata)
              })
          }

          function d(a) {
              if (255 != a.getByteAt(0) || 216 != a.getByteAt(1)) return !1;
              for (var b = 2, c = a.getLength(); c > b;) {
                  if (255 != a.getByteAt(b)) return h && console.log("Not a valid marker at offset " + b + ", found: " + a.getByteAt(b)), !1;
                  var d = a.getByteAt(b + 1);
                  if (22400 == d) return h && console.log("Found 0xFFE1 marker"), g(a, b + 4, a.getShortAt(b + 2, !0) - 2);
                  if (225 == d) return h && console.log("Found 0xFFE1 marker"), g(a, b + 4, a.getShortAt(b + 2, !0) - 2);
                  b += 2 + a.getShortAt(b + 2, !0)
              }
          }

          function e(a, b, c, d, e) {
              for (var g = a.getShortAt(c, e), i = {}, j = 0; g > j; j++) {
                  var k = c + 12 * j + 2,
                      l = d[a.getShortAt(k, e)];
                  !l && h && console.log("Unknown tag: " + a.getShortAt(k, e)), i[l] = f(a, k, b, c, e)
              }
              return i
          }

          function f(a, b, c, d, e) {
              var f = a.getShortAt(b + 2, e),
                  g = a.getLongAt(b + 4, e),
                  h = a.getLongAt(b + 8, e) + c;
              switch (f) {
                  case 1:
                  case 7:
                      if (1 == g) return a.getByteAt(b + 8, e);
                      for (var i = g > 4 ? h : b + 8, j = [], k = 0; g > k; k++) j[k] = a.getByteAt(i + k);
                      return j;
                  case 2:
                      var l = g > 4 ? h : b + 8;
                      return a.getStringAt(l, g - 1);
                  case 3:
                      if (1 == g) return a.getShortAt(b + 8, e);
                      for (var i = g > 2 ? h : b + 8, j = [], k = 0; g > k; k++) j[k] = a.getShortAt(i + 2 * k, e);
                      return j;
                  case 4:
                      if (1 == g) return a.getLongAt(b + 8, e);
                      for (var j = [], k = 0; g > k; k++) j[k] = a.getLongAt(h + 4 * k, e);
                      return j;
                  case 5:
                      if (1 == g) return a.getLongAt(h, e) / a.getLongAt(h + 4, e);
                      for (var j = [], k = 0; g > k; k++) j[k] = a.getLongAt(h + 8 * k, e) / a.getLongAt(h + 4 + 8 * k, e);
                      return j;
                  case 9:
                      if (1 == g) return a.getSLongAt(b + 8, e);
                      for (var j = [], k = 0; g > k; k++) j[k] = a.getSLongAt(h + 4 * k, e);
                      return j;
                  case 10:
                      if (1 == g) return a.getSLongAt(h, e) / a.getSLongAt(h + 4, e);
                      for (var j = [], k = 0; g > k; k++) j[k] = a.getSLongAt(h + 8 * k, e) / a.getSLongAt(h + 4 + 8 * k, e);
                      return j
              }
          }

          function g(a, b, c) {
              if ("Exif" != a.getStringAt(b, 4)) return h && console.log("Not valid EXIF data! " + a.getStringAt(b, 4)), !1;
              var d, f = b + 6;
              if (18761 == a.getShortAt(f)) d = !1;
              else {
                  if (19789 != a.getShortAt(f)) return h && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                  d = !0
              }
              if (42 != a.getShortAt(f + 2, d)) return h && console.log("Not valid TIFF data! (no 0x002A)"), !1;
              if (8 != a.getLongAt(f + 4, d)) return h && console.log("Not valid TIFF data! (First offset not 8)", a.getShortAt(f + 4, d)), !1;
              var g = e(a, f, f + 8, EXIF.TiffTags, d);
              if (g.ExifIFDPointer) {
                  var i = e(a, f, f + g.ExifIFDPointer, EXIF.Tags, d);
                  for (var j in i) {
                      switch (j) {
                          case "LightSource":
                          case "Flash":
                          case "MeteringMode":
                          case "ExposureProgram":
                          case "SensingMethod":
                          case "SceneCaptureType":
                          case "SceneType":
                          case "CustomRendered":
                          case "WhiteBalance":
                          case "GainControl":
                          case "Contrast":
                          case "Saturation":
                          case "Sharpness":
                          case "SubjectDistanceRange":
                          case "FileSource":
                              i[j] = EXIF.StringValues[j][i[j]];
                              break;
                          case "ExifVersion":
                          case "FlashpixVersion":
                              i[j] = String.fromCharCode(i[j][0], i[j][1], i[j][2], i[j][3]);
                              break;
                          case "ComponentsConfiguration":
                              i[j] = EXIF.StringValues.Components[i[j][0]] + EXIF.StringValues.Components[i[j][1]] + EXIF.StringValues.Components[i[j][2]] + EXIF.StringValues.Components[i[j][3]]
                      }
                      g[j] = i[j]
                  }
              }
              if (g.GPSInfoIFDPointer) {
                  var k = e(a, f, f + g.GPSInfoIFDPointer, EXIF.GPSTags, d);
                  for (var j in k) {
                      switch (j) {
                          case "GPSVersionID":
                              k[j] = k[j][0] + "." + k[j][1] + "." + k[j][2] + "." + k[j][3]
                      }
                      g[j] = k[j]
                  }
              }
              return g
          }
          var h = !1;
          EXIF.Tags = {
              36864: "ExifVersion",
              40960: "FlashpixVersion",
              40961: "ColorSpace",
              40962: "PixelXDimension",
              40963: "PixelYDimension",
              37121: "ComponentsConfiguration",
              37122: "CompressedBitsPerPixel",
              37500: "MakerNote",
              37510: "UserComment",
              40964: "RelatedSoundFile",
              36867: "DateTimeOriginal",
              36868: "DateTimeDigitized",
              37520: "SubsecTime",
              37521: "SubsecTimeOriginal",
              37522: "SubsecTimeDigitized",
              33434: "ExposureTime",
              33437: "FNumber",
              34850: "ExposureProgram",
              34852: "SpectralSensitivity",
              34855: "ISOSpeedRatings",
              34856: "OECF",
              37377: "ShutterSpeedValue",
              37378: "ApertureValue",
              37379: "BrightnessValue",
              37380: "ExposureBias",
              37381: "MaxApertureValue",
              37382: "SubjectDistance",
              37383: "MeteringMode",
              37384: "LightSource",
              37385: "Flash",
              37396: "SubjectArea",
              37386: "FocalLength",
              41483: "FlashEnergy",
              41484: "SpatialFrequencyResponse",
              41486: "FocalPlaneXResolution",
              41487: "FocalPlaneYResolution",
              41488: "FocalPlaneResolutionUnit",
              41492: "SubjectLocation",
              41493: "ExposureIndex",
              41495: "SensingMethod",
              41728: "FileSource",
              41729: "SceneType",
              41730: "CFAPattern",
              41985: "CustomRendered",
              41986: "ExposureMode",
              41987: "WhiteBalance",
              41988: "DigitalZoomRation",
              41989: "FocalLengthIn35mmFilm",
              41990: "SceneCaptureType",
              41991: "GainControl",
              41992: "Contrast",
              41993: "Saturation",
              41994: "Sharpness",
              41995: "DeviceSettingDescription",
              41996: "SubjectDistanceRange",
              40965: "InteroperabilityIFDPointer",
              42016: "ImageUniqueID"
          }, EXIF.TiffTags = {
              256: "ImageWidth",
              257: "ImageHeight",
              34665: "ExifIFDPointer",
              34853: "GPSInfoIFDPointer",
              40965: "InteroperabilityIFDPointer",
              258: "BitsPerSample",
              259: "Compression",
              262: "PhotometricInterpretation",
              274: "Orientation",
              277: "SamplesPerPixel",
              284: "PlanarConfiguration",
              530: "YCbCrSubSampling",
              531: "YCbCrPositioning",
              282: "XResolution",
              283: "YResolution",
              296: "ResolutionUnit",
              273: "StripOffsets",
              278: "RowsPerStrip",
              279: "StripByteCounts",
              513: "JPEGInterchangeFormat",
              514: "JPEGInterchangeFormatLength",
              301: "TransferFunction",
              318: "WhitePoint",
              319: "PrimaryChromaticities",
              529: "YCbCrCoefficients",
              532: "ReferenceBlackWhite",
              306: "DateTime",
              270: "ImageDescription",
              271: "Make",
              272: "Model",
              305: "Software",
              315: "Artist",
              33432: "Copyright"
          }, EXIF.GPSTags = {
              0: "GPSVersionID",
              1: "GPSLatitudeRef",
              2: "GPSLatitude",
              3: "GPSLongitudeRef",
              4: "GPSLongitude",
              5: "GPSAltitudeRef",
              6: "GPSAltitude",
              7: "GPSTimeStamp",
              8: "GPSSatellites",
              9: "GPSStatus",
              10: "GPSMeasureMode",
              11: "GPSDOP",
              12: "GPSSpeedRef",
              13: "GPSSpeed",
              14: "GPSTrackRef",
              15: "GPSTrack",
              16: "GPSImgDirectionRef",
              17: "GPSImgDirection",
              18: "GPSMapDatum",
              19: "GPSDestLatitudeRef",
              20: "GPSDestLatitude",
              21: "GPSDestLongitudeRef",
              22: "GPSDestLongitude",
              23: "GPSDestBearingRef",
              24: "GPSDestBearing",
              25: "GPSDestDistanceRef",
              26: "GPSDestDistance",
              27: "GPSProcessingMethod",
              28: "GPSAreaInformation",
              29: "GPSDateStamp",
              30: "GPSDifferential"
          }, EXIF.StringValues = {
              ExposureProgram: {
                  0: "Not defined",
                  1: "Manual",
                  2: "Normal program",
                  3: "Aperture priority",
                  4: "Shutter priority",
                  5: "Creative program",
                  6: "Action program",
                  7: "Portrait mode",
                  8: "Landscape mode"
              },
              MeteringMode: {
                  0: "Unknown",
                  1: "Average",
                  2: "CenterWeightedAverage",
                  3: "Spot",
                  4: "MultiSpot",
                  5: "Pattern",
                  6: "Partial",
                  255: "Other"
              },
              LightSource: {
                  0: "Unknown",
                  1: "Daylight",
                  2: "Fluorescent",
                  3: "Tungsten (incandescent light)",
                  4: "Flash",
                  9: "Fine weather",
                  10: "Cloudy weather",
                  11: "Shade",
                  12: "Daylight fluorescent (D 5700 - 7100K)",
                  13: "Day white fluorescent (N 4600 - 5400K)",
                  14: "Cool white fluorescent (W 3900 - 4500K)",
                  15: "White fluorescent (WW 3200 - 3700K)",
                  17: "Standard light A",
                  18: "Standard light B",
                  19: "Standard light C",
                  20: "D55",
                  21: "D65",
                  22: "D75",
                  23: "D50",
                  24: "ISO studio tungsten",
                  255: "Other"
              },
              Flash: {
                  0: "Flash did not fire",
                  1: "Flash fired",
                  5: "Strobe return light not detected",
                  7: "Strobe return light detected",
                  9: "Flash fired, compulsory flash mode",
                  13: "Flash fired, compulsory flash mode, return light not detected",
                  15: "Flash fired, compulsory flash mode, return light detected",
                  16: "Flash did not fire, compulsory flash mode",
                  24: "Flash did not fire, auto mode",
                  25: "Flash fired, auto mode",
                  29: "Flash fired, auto mode, return light not detected",
                  31: "Flash fired, auto mode, return light detected",
                  32: "No flash function",
                  65: "Flash fired, red-eye reduction mode",
                  69: "Flash fired, red-eye reduction mode, return light not detected",
                  71: "Flash fired, red-eye reduction mode, return light detected",
                  73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                  77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                  79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                  89: "Flash fired, auto mode, red-eye reduction mode",
                  93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                  95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
              },
              SensingMethod: {
                  1: "Not defined",
                  2: "One-chip color area sensor",
                  3: "Two-chip color area sensor",
                  4: "Three-chip color area sensor",
                  5: "Color sequential area sensor",
                  7: "Trilinear sensor",
                  8: "Color sequential linear sensor"
              },
              SceneCaptureType: {
                  0: "Standard",
                  1: "Landscape",
                  2: "Portrait",
                  3: "Night scene"
              },
              SceneType: {
                  1: "Directly photographed"
              },
              CustomRendered: {
                  0: "Normal process",
                  1: "Custom process"
              },
              WhiteBalance: {
                  0: "Auto white balance",
                  1: "Manual white balance"
              },
              GainControl: {
                  0: "None",
                  1: "Low gain up",
                  2: "High gain up",
                  3: "Low gain down",
                  4: "High gain down"
              },
              Contrast: {
                  0: "Normal",
                  1: "Soft",
                  2: "Hard"
              },
              Saturation: {
                  0: "Normal",
                  1: "Low saturation",
                  2: "High saturation"
              },
              Sharpness: {
                  0: "Normal",
                  1: "Soft",
                  2: "Hard"
              },
              SubjectDistanceRange: {
                  0: "Unknown",
                  1: "Macro",
                  2: "Close view",
                  3: "Distant view"
              },
              FileSource: {
                  3: "DSC"
              },
              Components: {
                  0: "",
                  1: "Y",
                  2: "Cb",
                  3: "Cr",
                  4: "R",
                  5: "G",
                  6: "B"
              }
          }, EXIF.getData = function(a, d) {
              return a.complete ? (b(a) ? d && d() : c(a, d), !0) : !1
          }, EXIF.getTag = function(a, c) {
              return b(a) ? a.exifdata[c] : void 0
          }, EXIF.getAllTags = function(a) {
              if (!b(a)) return {};
              var c = a.exifdata,
                  d = {};
              for (var e in c) c.hasOwnProperty(e) && (d[e] = c[e]);
              return d
          }, EXIF.pretty = function(a) {
              if (!b(a)) return "";
              var c = a.exifdata,
                  d = "";
              for (var e in c) c.hasOwnProperty(e) && (d += "object" == typeof c[e] ? e + " : [" + c[e].length + " values]\r\n" : e + " : " + c[e] + "\r\n");
              return d
          }, EXIF.readFromBinaryFile = function(a) {
              return d(a)
          }, jQuery.fn.exifLoad = function(a) {
              return this.each(function() {
                  EXIF.getData(this, a)
              })
          }, jQuery.fn.exif = function(a) {
              var b = [];
              return this.each(function() {
                  b.push(EXIF.getTag(this, a))
              }), b
          }, jQuery.fn.exifAll = function() {
              var a = [];
              return this.each(function() {
                  a.push(EXIF.getAllTags(this))
              }), a
          }, jQuery.fn.exifPretty = function() {
              var a = [];
              return this.each(function() {
                  a.push(EXIF.pretty(this))
              }), a
          }
      }()
}();;
! function(a) {
  a.fn.fastClick = function(b) {
      return a(this).each(function() {
          a.FastButton(a(this)[0], b)
      })
  }, a.FastButton = function(b, c) {
      var d, e, f = function() {
              a(b).unbind("touchend"), a("body").unbind("touchmove.fastClick")
          },
          g = function(b) {
              b.stopPropagation(), f(), c.call(this, b), "touchend" === b.type && a.clickbuster.preventGhostClick(d, e)
          },
          h = function(a) {
              (Math.abs(a.originalEvent.touches[0].clientX - d) > 10 || Math.abs(a.originalEvent.touches[0].clientY - e) > 10) && f()
          },
          i = function(c) {
              c.stopPropagation(), a(b).bind("touchend", g), a("body").bind("touchmove.fastClick", h), d = c.originalEvent.touches[0].clientX, e = c.originalEvent.touches[0].clientY
          };
      a(b).bind({
          touchstart: i,
          click: g
      })
  }, a.clickbuster = {
      coordinates: [],
      preventGhostClick: function(b, c) {
          a.clickbuster.coordinates.push(b, c), window.setTimeout(a.clickbuster.pop, 2500)
      },
      pop: function() {
          a.clickbuster.coordinates.splice(0, 2)
      },
      onClick: function(b) {
          var c, d, e;
          for (e = 0; e < a.clickbuster.coordinates.length; e += 2) c = a.clickbuster.coordinates[e], d = a.clickbuster.coordinates[e + 1], Math.abs(b.clientX - c) < 25 && Math.abs(b.clientY - d) < 25 && (b.stopPropagation(), b.preventDefault())
      }
  }, a(function() {
      document.addEventListener ? document.addEventListener("click", a.clickbuster.onClick, !0) : document.attachEvent && document.attachEvent("onclick", a.clickbuster.onClick)
  })
}(jQuery);;
! function(a, b) {
  "use strict";

  function c() {
      if (!d.READY) {
          d.event.determineEventTypes();
          for (var a in d.gestures) d.gestures.hasOwnProperty(a) && d.detection.register(d.gestures[a]);
          d.event.onTouch(d.DOCUMENT, d.EVENT_MOVE, d.detection.detect), d.event.onTouch(d.DOCUMENT, d.EVENT_END, d.detection.detect), d.READY = !0
      }
  }
  var d = function(a, b) {
      return new d.Instance(a, b || {})
  };
  d.defaults = {
      stop_browser_behavior: {
          userSelect: "none",
          touchAction: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
      }
  }, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, d.HAS_TOUCHEVENTS = "ontouchstart" in a, d.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && navigator.userAgent.match(d.MOBILE_REGEX), d.EVENT_TYPES = {}, d.DIRECTION_DOWN = "down", d.DIRECTION_LEFT = "left", d.DIRECTION_UP = "up", d.DIRECTION_RIGHT = "right", d.POINTER_MOUSE = "mouse", d.POINTER_TOUCH = "touch", d.POINTER_PEN = "pen", d.EVENT_START = "start", d.EVENT_MOVE = "move", d.EVENT_END = "end", d.DOCUMENT = document, d.plugins = {}, d.READY = !1, d.Instance = function(a, b) {
      var e = this;
      return c(), this.element = a, this.enabled = !0, this.options = d.utils.extend(d.utils.extend({}, d.defaults), b || {}), this.options.stop_browser_behavior && d.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), d.event.onTouch(a, d.EVENT_START, function(a) {
          e.enabled && d.detection.startDetect(e, a)
      }), this
  }, d.Instance.prototype = {
      on: function(a, b) {
          for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.addEventListener(c[d], b, !1);
          return this
      },
      off: function(a, b) {
          for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.removeEventListener(c[d], b, !1);
          return this
      },
      trigger: function(a, b) {
          var c = d.DOCUMENT.createEvent("Event");
          c.initEvent(a, !0, !0), c.gesture = b;
          var e = this.element;
          return d.utils.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this
      },
      enable: function(a) {
          return this.enabled = a, this
      }
  };
  var e = null,
      f = !1,
      g = !1;
  d.event = {
      bindDom: function(a, b, c) {
          for (var d = b.split(" "), e = 0; d.length > e; e++) a.addEventListener(d[e], c, !1)
      },
      onTouch: function(a, b, c) {
          var h = this;
          this.bindDom(a, d.EVENT_TYPES[b], function(i) {
              var j = i.type.toLowerCase();
              if (!j.match(/mouse/) || !g) {
                  (j.match(/touch/) || j.match(/pointerdown/) || j.match(/mouse/) && 1 === i.which) && (f = !0), j.match(/touch|pointer/) && (g = !0);
                  var k = 0;
                  f && (d.HAS_POINTEREVENTS && b != d.EVENT_END ? k = d.PointerEvent.updatePointer(b, i) : j.match(/touch/) ? k = i.touches.length : g || (k = j.match(/up/) ? 0 : 1), k > 0 && b == d.EVENT_END ? b = d.EVENT_MOVE : k || (b = d.EVENT_END), k || null === e ? e = i : i = e, c.call(d.detection, h.collectEventData(a, b, i)), d.HAS_POINTEREVENTS && b == d.EVENT_END && (k = d.PointerEvent.updatePointer(b, i))), k || (e = null, f = !1, g = !1, d.PointerEvent.reset())
              }
          })
      },
      determineEventTypes: function() {
          var a;
          a = d.HAS_POINTEREVENTS ? d.PointerEvent.getEvents() : d.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], d.EVENT_TYPES[d.EVENT_START] = a[0], d.EVENT_TYPES[d.EVENT_MOVE] = a[1], d.EVENT_TYPES[d.EVENT_END] = a[2]
      },
      getTouchList: function(a) {
          return d.HAS_POINTEREVENTS ? d.PointerEvent.getTouchList() : a.touches ? a.touches : [{
              identifier: 1,
              pageX: a.pageX,
              pageY: a.pageY,
              target: a.target
          }]
      },
      collectEventData: function(a, b, c) {
          var e = this.getTouchList(c, b),
              f = d.POINTER_TOUCH;
          return (c.type.match(/mouse/) || d.PointerEvent.matchType(d.POINTER_MOUSE, c)) && (f = d.POINTER_MOUSE), {
              center: d.utils.getCenter(e),
              timeStamp: (new Date).getTime(),
              target: c.target,
              touches: e,
              eventType: b,
              pointerType: f,
              srcEvent: c,
              preventDefault: function() {
                  this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
              },
              stopPropagation: function() {
                  this.srcEvent.stopPropagation()
              },
              stopDetect: function() {
                  return d.detection.stopDetect()
              }
          }
      }
  }, d.PointerEvent = {
      pointers: {},
      getTouchList: function() {
          var a = this,
              b = [];
          return Object.keys(a.pointers).sort().forEach(function(c) {
              b.push(a.pointers[c])
          }), b
      },
      updatePointer: function(a, b) {
          return a == d.EVENT_END ? this.pointers = {} : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b), Object.keys(this.pointers).length
      },
      matchType: function(a, b) {
          if (!b.pointerType) return !1;
          var c = {};
          return c[d.POINTER_MOUSE] = b.pointerType == b.MSPOINTER_TYPE_MOUSE || b.pointerType == d.POINTER_MOUSE, c[d.POINTER_TOUCH] = b.pointerType == b.MSPOINTER_TYPE_TOUCH || b.pointerType == d.POINTER_TOUCH, c[d.POINTER_PEN] = b.pointerType == b.MSPOINTER_TYPE_PEN || b.pointerType == d.POINTER_PEN, c[a]
      },
      getEvents: function() {
          return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
      },
      reset: function() {
          this.pointers = {}
      }
  }, d.utils = {
      extend: function(a, c, d) {
          for (var e in c) a[e] !== b && d || (a[e] = c[e]);
          return a
      },
      hasParent: function(a, b) {
          for (; a;) {
              if (a == b) return !0;
              a = a.parentNode
          }
          return !1
      },
      getCenter: function(a) {
          for (var b = [], c = [], d = 0, e = a.length; e > d; d++) b.push(a[d].pageX), c.push(a[d].pageY);
          return {
              pageX: (Math.min.apply(Math, b) + Math.max.apply(Math, b)) / 2,
              pageY: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2
          }
      },
      getVelocity: function(a, b, c) {
          return {
              x: Math.abs(b / a) || 0,
              y: Math.abs(c / a) || 0
          }
      },
      getAngle: function(a, b) {
          var c = b.pageY - a.pageY,
              d = b.pageX - a.pageX;
          return 180 * Math.atan2(c, d) / Math.PI
      },
      getDirection: function(a, b) {
          var c = Math.abs(a.pageX - b.pageX),
              e = Math.abs(a.pageY - b.pageY);
          return c >= e ? a.pageX - b.pageX > 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT : a.pageY - b.pageY > 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN
      },
      getDistance: function(a, b) {
          var c = b.pageX - a.pageX,
              d = b.pageY - a.pageY;
          return Math.sqrt(c * c + d * d)
      },
      getScale: function(a, b) {
          return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
      },
      getRotation: function(a, b) {
          return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
      },
      isVertical: function(a) {
          return a == d.DIRECTION_UP || a == d.DIRECTION_DOWN
      },
      stopDefaultBrowserBehavior: function(a, b) {
          var c, d = ["webkit", "khtml", "moz", "ms", "o", ""];
          if (b && a.style) {
              for (var e = 0; d.length > e; e++)
                  for (var f in b) b.hasOwnProperty(f) && (c = f, d[e] && (c = d[e] + c.substring(0, 1).toUpperCase() + c.substring(1)), a.style[c] = b[f]);
              "none" == b.userSelect && (a.onselectstart = function() {
                  return !1
              })
          }
      }
  }, d.detection = {
      gestures: [],
      current: null,
      previous: null,
      stopped: !1,
      startDetect: function(a, b) {
          this.current || (this.stopped = !1, this.current = {
              inst: a,
              startEvent: d.utils.extend({}, b),
              lastEvent: !1,
              name: ""
          }, this.detect(b))
      },
      detect: function(a) {
          if (this.current && !this.stopped) {
              a = this.extendEventData(a);
              for (var b = this.current.inst.options, c = 0, e = this.gestures.length; e > c; c++) {
                  var f = this.gestures[c];
                  if (!this.stopped && b[f.name] !== !1 && f.handler.call(f, a, this.current.inst) === !1) {
                      this.stopDetect();
                      break
                  }
              }
              return this.current && (this.current.lastEvent = a), a.eventType == d.EVENT_END && !a.touches.length - 1 && this.stopDetect(), a
          }
      },
      stopDetect: function() {
          this.previous = d.utils.extend({}, this.current), this.current = null, this.stopped = !0
      },
      extendEventData: function(a) {
          var b = this.current.startEvent;
          if (b && (a.touches.length != b.touches.length || a.touches === b.touches)) {
              b.touches = [];
              for (var c = 0, e = a.touches.length; e > c; c++) b.touches.push(d.utils.extend({}, a.touches[c]))
          }
          var f = a.timeStamp - b.timeStamp,
              g = a.center.pageX - b.center.pageX,
              h = a.center.pageY - b.center.pageY,
              i = d.utils.getVelocity(f, g, h);
          return d.utils.extend(a, {
              deltaTime: f,
              deltaX: g,
              deltaY: h,
              velocityX: i.x,
              velocityY: i.y,
              distance: d.utils.getDistance(b.center, a.center),
              angle: d.utils.getAngle(b.center, a.center),
              direction: d.utils.getDirection(b.center, a.center),
              scale: d.utils.getScale(b.touches, a.touches),
              rotation: d.utils.getRotation(b.touches, a.touches),
              startEvent: b
          }), a
      },
      register: function(a) {
          var c = a.defaults || {};
          return c[a.name] === b && (c[a.name] = !0), d.utils.extend(d.defaults, c, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function(a, b) {
              return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
          }), this.gestures
      }
  }, d.gestures = d.gestures || {}, d.gestures.Hold = {
      name: "hold",
      index: 10,
      defaults: {
          hold_timeout: 500,
          hold_threshold: 1
      },
      timer: null,
      handler: function(a, b) {
          switch (a.eventType) {
              case d.EVENT_START:
                  clearTimeout(this.timer), d.detection.current.name = this.name, this.timer = setTimeout(function() {
                      "hold" == d.detection.current.name && b.trigger("hold", a)
                  }, b.options.hold_timeout);
                  break;
              case d.EVENT_MOVE:
                  a.distance > b.options.hold_threshold && clearTimeout(this.timer);
                  break;
              case d.EVENT_END:
                  clearTimeout(this.timer)
          }
      }
  }, d.gestures.Tap = {
      name: "tap",
      index: 100,
      defaults: {
          tap_max_touchtime: 250,
          tap_max_distance: 10,
          tap_always: !0,
          doubletap_distance: 20,
          doubletap_interval: 300
      },
      handler: function(a, b) {
          if (a.eventType == d.EVENT_END) {
              var c = d.detection.previous,
                  e = !1;
              if (a.deltaTime > b.options.tap_max_touchtime || a.distance > b.options.tap_max_distance) return;
              c && "tap" == c.name && a.timeStamp - c.lastEvent.timeStamp < b.options.doubletap_interval && a.distance < b.options.doubletap_distance && (b.trigger("doubletap", a), e = !0), (!e || b.options.tap_always) && (d.detection.current.name = "tap", b.trigger(d.detection.current.name, a))
          }
      }
  }, d.gestures.Swipe = {
      name: "swipe",
      index: 40,
      defaults: {
          swipe_max_touches: 1,
          swipe_velocity: .7
      },
      handler: function(a, b) {
          if (a.eventType == d.EVENT_END) {
              if (b.options.swipe_max_touches > 0 && a.touches.length > b.options.swipe_max_touches) return;
              (a.velocityX > b.options.swipe_velocity || a.velocityY > b.options.swipe_velocity) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
          }
      }
  }, d.gestures.Drag = {
      name: "drag",
      index: 50,
      defaults: {
          drag_min_distance: 10,
          drag_max_touches: 1,
          drag_block_horizontal: !1,
          drag_block_vertical: !1,
          drag_lock_to_axis: !1,
          drag_lock_min_distance: 25
      },
      triggered: !1,
      handler: function(a, c) {
          if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), this.triggered = !1, b;
          if (!(c.options.drag_max_touches > 0 && a.touches.length > c.options.drag_max_touches)) switch (a.eventType) {
              case d.EVENT_START:
                  this.triggered = !1;
                  break;
              case d.EVENT_MOVE:
                  if (a.distance < c.options.drag_min_distance && d.detection.current.name != this.name) return;
                  d.detection.current.name = this.name, (d.detection.current.lastEvent.drag_locked_to_axis || c.options.drag_lock_to_axis && c.options.drag_lock_min_distance <= a.distance) && (a.drag_locked_to_axis = !0);
                  var e = d.detection.current.lastEvent.direction;
                  a.drag_locked_to_axis && e !== a.direction && (a.direction = d.utils.isVertical(e) ? 0 > a.deltaY ? d.DIRECTION_UP : d.DIRECTION_DOWN : 0 > a.deltaX ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT), this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), c.trigger(this.name + a.direction, a), (c.options.drag_block_vertical && d.utils.isVertical(a.direction) || c.options.drag_block_horizontal && !d.utils.isVertical(a.direction)) && a.preventDefault();
                  break;
              case d.EVENT_END:
                  this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
          }
      }
  }, d.gestures.Transform = {
      name: "transform",
      index: 45,
      defaults: {
          transform_min_scale: .01,
          transform_min_rotation: 1,
          transform_always_block: !1
      },
      triggered: !1,
      handler: function(a, c) {
          if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), this.triggered = !1, b;
          if (!(2 > a.touches.length)) switch (c.options.transform_always_block && a.preventDefault(), a.eventType) {
              case d.EVENT_START:
                  this.triggered = !1;
                  break;
              case d.EVENT_MOVE:
                  var e = Math.abs(1 - a.scale),
                      f = Math.abs(a.rotation);
                  if (c.options.transform_min_scale > e && c.options.transform_min_rotation > f) return;
                  d.detection.current.name = this.name, this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), f > c.options.transform_min_rotation && c.trigger("rotate", a), e > c.options.transform_min_scale && (c.trigger("pinch", a), c.trigger("pinch" + (1 > a.scale ? "in" : "out"), a));
                  break;
              case d.EVENT_END:
                  this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
          }
      }
  }, d.gestures.Touch = {
      name: "touch",
      index: -1 / 0,
      defaults: {
          prevent_default: !1,
          prevent_mouseevents: !1
      },
      handler: function(a, c) {
          return c.options.prevent_mouseevents && a.pointerType == d.POINTER_MOUSE ? (a.stopDetect(), b) : (c.options.prevent_default && a.preventDefault(), a.eventType == d.EVENT_START && c.trigger(this.name, a), b)
      }
  }, d.gestures.Release = {
      name: "release",
      index: 1 / 0,
      handler: function(a, b) {
          a.eventType == d.EVENT_END && b.trigger(this.name, a)
      }
  }, "object" == typeof module && "object" == typeof module.exports ? module.exports = d : (a.Hammer = d, "function" == typeof a.define && a.define.amd && a.define("hammer", [], function() {
      return d
  }))
}(this),
function(a, b) {
  "use strict";
  a !== b && (Hammer.event.bindDom = function(c, d, e) {
      a(c).on(d, function(a) {
          var c = a.originalEvent || a;
          c.pageX === b && (c.pageX = a.pageX, c.pageY = a.pageY), c.target || (c.target = a.target), c.which === b && (c.which = c.button), c.preventDefault || (c.preventDefault = a.preventDefault), c.stopPropagation || (c.stopPropagation = a.stopPropagation), e.call(this, c)
      })
  }, Hammer.Instance.prototype.on = function(b, c) {
      return a(this.element).on(b, c)
  }, Hammer.Instance.prototype.off = function(b, c) {
      return a(this.element).off(b, c)
  }, Hammer.Instance.prototype.trigger = function(b, c) {
      var d = a(this.element);
      return d.has(c.target).length && (d = a(c.target)), d.trigger({
          type: b,
          gesture: c
      })
  }, a.fn.hammer = function(b) {
      return this.each(function() {
          var c = a(this),
              d = c.data("hammer");
          d ? d && b && Hammer.utils.extend(d.options, b) : c.data("hammer", new Hammer(this, b || {}))
      })
  })
}(window.jQuery || window.Zepto);;
! function(a) {
  function b(a, b) {
      if (!(a.originalEvent.touches.length > 1)) {
          a.preventDefault();
          var c = a.originalEvent.changedTouches[0],
              d = document.createEvent("MouseEvents");
          d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
      }
  }
  if (a.support.touch = "ontouchend" in document, a.support.touch) {
      var c, d = a.ui.mouse.prototype,
          e = d._mouseInit;
      d._touchStart = function(a) {
          var d = this;
          !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
      }, d._touchMove = function(a) {
          c && (this._touchMoved = !0, b(a, "mousemove"))
      }, d._touchEnd = function(a) {
          c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1)
      }, d._mouseInit = function() {
          var b = this;
          b.element.bind("touchstart", a.proxy(b, "_touchStart")).bind("touchmove", a.proxy(b, "_touchMove")).bind("touchend", a.proxy(b, "_touchEnd")), e.call(b)
      }
  }
}(jQuery);;
! function() {
  function a(a) {
      var b = a.naturalWidth,
          c = a.naturalHeight;
      if (b * c > 1048576) {
          var d = document.createElement("canvas");
          d.width = d.height = 1;
          var e = d.getContext("2d");
          return e.drawImage(a, -b + 1, 0), 0 === e.getImageData(0, 0, 1, 1).data[3]
      }
      return !1
  }

  function b(a, b, c) {
      var d = document.createElement("canvas");
      d.width = 1, d.height = c;
      var e = d.getContext("2d");
      e.drawImage(a, 0, 0);
      for (var f = e.getImageData(0, 0, 1, c).data, g = 0, h = c, i = c; i > g;) {
          var j = f[4 * (i - 1) + 3];
          0 === j ? h = i : g = i, i = h + g >> 1
      }
      var k = i / c;
      return 0 === k ? 1 : k
  }

  function c(a, b) {
      var c = document.createElement("canvas");
      return d(a, c, b), c.toDataURL("image/jpeg", b.quality || .8)
  }

  function d(c, d, f) {
      var g = c.naturalWidth,
          h = c.naturalHeight,
          i = f.width,
          j = f.height,
          k = d.getContext("2d");
      k.save(), e(d, i, j, f.orientation);
      var l = a(c);
      l && (g /= 2, h /= 2);
      var m = 1024,
          n = document.createElement("canvas");
      n.width = n.height = m;
      for (var o = n.getContext("2d"), p = b(c, g, h), q = Math.ceil(m * i / g), r = Math.ceil(m * j / h / p), s = 0, t = 0; h > s;) {
          for (var u = 0, v = 0; g > u;) o.clearRect(0, 0, m, m), o.drawImage(c, -u, -s), k.drawImage(n, 0, 0, m, m, v, t, q, r), u += m, v += q;
          s += m, t += r
      }
      k.restore(), n = o = null
  }

  function e(a, b, c, d) {
      switch (d) {
          case 5:
          case 6:
          case 7:
          case 8:
              a.width = c, a.height = b;
              break;
          default:
              a.width = b, a.height = c
      }
      var e = a.getContext("2d");
      switch (d) {
          case 2:
              e.translate(b, 0), e.scale(-1, 1);
              break;
          case 3:
              e.translate(b, c), e.rotate(Math.PI);
              break;
          case 4:
              e.translate(0, c), e.scale(1, -1);
              break;
          case 5:
              e.rotate(.5 * Math.PI), e.scale(1, -1);
              break;
          case 6:
              e.rotate(.5 * Math.PI), e.translate(0, -c);
              break;
          case 7:
              e.rotate(.5 * Math.PI), e.translate(b, -c), e.scale(-1, 1);
              break;
          case 8:
              e.rotate(-.5 * Math.PI), e.translate(-b, 0)
      }
  }

  function f(a) {
      if (a instanceof Blob) {
          var b = new Image,
              c = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
          if (!c) throw Error("No createObjectURL function found to create blob url");
          b.src = c.createObjectURL(a), a = b
      }
      if (!a.naturalWidth && !a.naturalHeight) {
          var d = this;
          a.onload = function() {
              var a = d.imageLoadListeners;
              if (a) {
                  d.imageLoadListeners = null;
                  for (var b = 0, c = a.length; c > b; b++) a[b]()
              }
          }, this.imageLoadListeners = []
      }
      this.srcImage = a
  }
  f.prototype.render = function(a, b) {
      if (this.imageLoadListeners) {
          var e = this;
          return void this.imageLoadListeners.push(function() {
              e.render(a, b)
          })
      }
      b = b || {};
      var f = this.srcImage.naturalWidth,
          g = this.srcImage.naturalHeight,
          h = b.width,
          i = b.height,
          j = b.maxWidth,
          k = b.maxHeight;
      h && !i ? i = g * h / f << 0 : i && !h ? h = f * i / g << 0 : (h = f, i = g), j && h > j && (h = j, i = g * h / f << 0), k && i > k && (i = k, h = f * i / g << 0);
      var l = {
          width: h,
          height: i
      };
      for (var m in b) l[m] = b[m];
      var n = a.tagName.toLowerCase();
      "img" === n ? a.src = c(this.srcImage, l) : "canvas" === n && d(this.srcImage, a, l), "function" == typeof this.onrender && this.onrender(a)
  }, this.MegaPixImage = f
}();;
! function(a, b, c) {
  function d(a, b, c) {
      for (var d = [], e = 0; e < a.length; e++) {
          var f = tinycolor(a[e]),
              g = f.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
          g += tinycolor.equals(b, a[e]) ? " sp-thumb-active" : "";
          var h = q ? "background-color:" + f.toRgbString() : "filter:" + f.toFilter();
          d.push('<span title="' + f.toRgbString() + '" data-color="' + f.toRgbString() + '" class="' + g + '"><span class="sp-thumb-inner" style="' + h + ';" /></span>')
      }
      return "<div class='sp-cf " + c + "'>" + d.join("") + "</div>"
  }

  function e() {
      for (var a = 0; a < o.length; a++) o[a] && o[a].hide()
  }

  function f(a, c) {
      var d = b.extend({}, n, a);
      return d.callbacks = {
          move: k(d.move, c),
          change: k(d.change, c),
          show: k(d.show, c),
          hide: k(d.hide, c),
          beforeShow: k(d.beforeShow, c)
      }, d
  }

  function g(g, i) {
      function k() {
          qa.toggleClass("sp-flat", R), qa.toggleClass("sp-input-disabled", !Q.showInput), qa.toggleClass("sp-alpha-enabled", Q.showAlpha), qa.toggleClass("sp-buttons-disabled", !Q.showButtons || R), qa.toggleClass("sp-palette-disabled", !Q.showPalette), qa.toggleClass("sp-palette-only", Q.showPaletteOnly), qa.toggleClass("sp-initial-disabled", !Q.showInitial), qa.addClass(Q.className), L()
      }

      function n() {
          function c(a) {
              return a.data && a.data.ignore ? (E(b(this).data("color")), H()) : (E(b(this).data("color")), K(!0), H(), C()), !1
          }
          if (p && qa.find("*:not(input)").attr("unselectable", "on"), k(), Ea && oa.hide().after(Fa), R ? oa.after(qa).hide() : b(na).append(qa.hide()), T && a.localStorage) {
              try {
                  var d = a.localStorage[T].split(",#");
                  d.length > 1 && (delete a.localStorage[T], b.each(d, function(a, b) {
                      t(b)
                  }))
              } catch (e) {}
              try {
                  ka = a.localStorage[T].split(";")
              } catch (e) {}
          }
          Ga.bind("click.spectrum touchstart.spectrum", function(a) {
              pa || A(), a.stopPropagation(), b(a.target).is("input") || a.preventDefault()
          }), (oa.is(":disabled") || Q.disabled === !0) && P(), qa.click(j), ya.change(z), ya.bind("paste", function() {
              setTimeout(z, 1)
          }), ya.keydown(function(a) {
              13 == a.keyCode && z()
          }), Ba.text(Q.cancelText), Ba.bind("click.spectrum", function(a) {
              a.stopPropagation(), a.preventDefault(), C("cancel")
          }), Ca.text(Q.chooseText), Ca.bind("click.spectrum", function(a) {
              a.stopPropagation(), a.preventDefault(), G() && (K(!0), C())
          }), l(wa, function(a, b, c) {
              ha = a / ba, c.shiftKey && (ha = Math.round(10 * ha) / 10), H()
          }), l(ta, function(a, b) {
              ea = parseFloat(b / _), H()
          }, x, y), l(ra, function(a, b) {
              fa = parseFloat(a / Y), ga = parseFloat((Z - b) / Z), H()
          }, x, y), Ia ? (E(Ia), I(), La = Ka || tinycolor(Ia).format, t(Ia)) : I(), R && B();
          var f = p ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
          za.delegate(".sp-thumb-el", f, c), Aa.delegate(".sp-thumb-el:nth-child(1)", f, {
              ignore: !0
          }, c)
      }

      function t(c) {
          if (S) {
              var d = tinycolor(c).toRgbString();
              if (-1 === b.inArray(d, ka) && ka.push(d), T && a.localStorage) try {
                  a.localStorage[T] = ka.join(";")
              } catch (e) {}
          }
      }

      function u() {
          var a, b = [],
              c = ka,
              d = {};
          if (Q.showPalette) {
              for (var e = 0; e < ja.length; e++)
                  for (var f = 0; f < ja[e].length; f++) a = tinycolor(ja[e][f]).toRgbString(), d[a] = !0;
              for (e = 0; e < c.length; e++) a = tinycolor(c[e]).toRgbString(), d.hasOwnProperty(a) || (b.push(c[e]), d[a] = !0)
          }
          return b.reverse().slice(0, Q.maxSelectionSize)
      }

      function v() {
          var a = F(),
              c = b.map(ja, function(b, c) {
                  return d(b, a, "sp-palette-row sp-palette-row-" + c)
              });
          ka && c.push(d(u(), a, "sp-palette-row sp-palette-row-selection")), za.html(c.join(""))
      }

      function w() {
          if (Q.showInitial) {
              var a = Ja,
                  b = F();
              Aa.html(d([a, b], b, "sp-palette-row-initial"))
          }
      }

      function x() {
          (0 === Z || 0 === Y || 0 === _) && L(), qa.addClass(la)
      }

      function y() {
          qa.removeClass(la)
      }

      function z() {
          var a = tinycolor(ya.val());
          a.ok ? E(a) : ya.addClass("sp-validation-error")
      }

      function A() {
          X ? C() : B()
      }

      function B() {
          return X ? void L() : void(V.beforeShow(F()) !== !1 && (e(), X = !0, b(ma).bind("click.spectrum", C), b(a).bind("resize.spectrum", W), Fa.addClass("sp-active"), qa.show(), Q.showPalette && v(), L(), I(), Ja = F(), w(), V.show(Ja)))
      }

      function C(c) {
          if ((!c || "click" != c.type || 2 != c.button) && X && !R) {
              X = !1, b(ma).unbind("click.spectrum", C), b(a).unbind("resize.spectrum", W), Fa.removeClass("sp-active"), qa.hide();
              var d = !tinycolor.equals(F(), Ja);
              d && (Ma && "cancel" !== c ? K(!0) : D()), V.hide(F())
          }
      }

      function D() {
          E(Ja, !0)
      }

      function E(a, b) {
          if (!tinycolor.equals(a, F())) {
              var c = tinycolor(a),
                  d = c.toHsv();
              ea = d.h, fa = d.s, ga = d.v, ha = d.a, I(), b || (La = Ka || c.format)
          }
      }

      function F() {
          return tinycolor.fromRatio({
              h: ea,
              s: fa,
              v: ga,
              a: Math.round(100 * ha) / 100
          })
      }

      function G() {
          return !ya.hasClass("sp-validation-error")
      }

      function H() {
          I(), V.move(F())
      }

      function I() {
          ya.removeClass("sp-validation-error"), J();
          var a = tinycolor({
              h: ea,
              s: "1.0",
              v: "1.0"
          });
          ra.css("background-color", a.toHexString());
          var b = La;
          1 > ha && ("hex" === b || "name" === b) && (b = "rgb");
          var c = F(),
              d = c.toHexString(),
              e = c.toRgbString();
          if (q || 1 === c.alpha ? Ha.css("background-color", e) : (Ha.css("background-color", "transparent"), Ha.css("filter", c.toFilter())), Q.showAlpha) {
              var f = c.toRgb();
              f.a = 0;
              var g = tinycolor(f).toRgbString(),
                  h = "linear-gradient(left, " + g + ", " + d + ")";
              p ? va.css("filter", tinycolor(g).toFilter({
                  gradientType: 1
              }, d)) : (va.css("background", "-webkit-" + h), va.css("background", "-moz-" + h), va.css("background", "-ms-" + h), va.css("background", h))
          }
          Q.showInput && (1 > ha && ("hex" === b || "name" === b) && (b = "rgb"), ya.val(c.toString(b))), Q.showPalette && v(), w()
      }

      function J() {
          var a = fa,
              b = ga,
              c = a * Y,
              d = Z - b * Z;
          c = Math.max(-$, Math.min(Y - $, c - $)), d = Math.max(-$, Math.min(Z - $, d - $)), sa.css({
              top: d,
              left: c
          });
          var e = ha * ba;
          xa.css({
              left: e - ca / 2
          });
          var f = ea * _;
          ua.css({
              top: f - da
          })
      }

      function K(a) {
          var b = F();
          Da && oa.val(b.toString(La)).change();
          var c = !tinycolor.equals(b, Ja);
          Ja = b, t(b), a && c && V.change(b)
      }

      function L() {
          Y = ra.width(), Z = ra.height(), $ = sa.height(), aa = ta.width(), _ = ta.height(), da = ua.height(), ba = wa.width(), ca = xa.width(), R || qa.offset(h(qa, Ga)), J()
      }

      function M() {
          oa.show(), Ga.unbind("click.spectrum touchstart.spectrum"), qa.remove(), Fa.remove(), o[Na.id] = null
      }

      function N(a, d) {
          return a === c ? b.extend({}, Q) : d === c ? Q[a] : (Q[a] = d, void k())
      }

      function O() {
          pa = !1, oa.attr("disabled", !1), Ga.removeClass("sp-disabled")
      }

      function P() {
          C(), pa = !0, oa.attr("disabled", !0), Ga.addClass("sp-disabled")
      }
      var Q = f(i, g),
          R = Q.flat,
          S = Q.showSelectionPalette,
          T = Q.localStorageKey,
          U = Q.theme,
          V = Q.callbacks,
          W = m(L, 10),
          X = !1,
          Y = 0,
          Z = 0,
          $ = 0,
          _ = 0,
          aa = 0,
          ba = 0,
          ca = 0,
          da = 0,
          ea = 0,
          fa = 0,
          ga = 0,
          ha = 1,
          ia = Q.palette.slice(0),
          ja = b.isArray(ia[0]) ? ia : [ia],
          ka = Q.selectionPalette.slice(0),
          la = "sp-dragging",
          ma = g.ownerDocument,
          na = ma.body,
          oa = b(g),
          pa = !1,
          qa = b(s, ma).addClass(U),
          ra = qa.find(".sp-color"),
          sa = qa.find(".sp-dragger"),
          ta = qa.find(".sp-hue"),
          ua = qa.find(".sp-slider"),
          va = qa.find(".sp-alpha-inner"),
          wa = qa.find(".sp-alpha"),
          xa = qa.find(".sp-alpha-handle"),
          ya = qa.find(".sp-input"),
          za = qa.find(".sp-palette"),
          Aa = qa.find(".sp-initial"),
          Ba = qa.find(".sp-cancel"),
          Ca = qa.find(".sp-choose"),
          Da = oa.is("input"),
          Ea = Da && !R,
          Fa = Ea ? b(r).addClass(U) : b([]),
          Ga = Ea ? Fa : oa,
          Ha = Fa.find(".sp-preview-inner"),
          Ia = Q.color || Da && oa.val(),
          Ja = !1,
          Ka = Q.preferredFormat,
          La = Ka,
          Ma = !Q.showButtons || Q.clickoutFiresChange;
      n();
      var Na = {
          show: B,
          hide: C,
          toggle: A,
          reflow: L,
          option: N,
          enable: O,
          disable: P,
          set: function(a) {
              E(a), K()
          },
          get: F,
          destroy: M,
          container: qa
      };
      return Na.id = o.push(Na) - 1, Na
  }

  function h(a, c) {
      var d = 0,
          e = a.outerWidth(),
          f = a.outerHeight(),
          g = c.outerHeight(),
          h = a[0].ownerDocument,
          i = h.documentElement,
          j = i.clientWidth + b(h).scrollLeft(),
          k = i.clientHeight + b(h).scrollTop(),
          l = c.offset();
      return l.top += g, l.left -= Math.min(l.left, l.left + e > j && j > e ? Math.abs(l.left + e - j) : 0), l.top -= Math.min(l.top, l.top + f > k && k > f ? Math.abs(f + g - d) : d), l
  }

  function i() {}

  function j(a) {
      a.stopPropagation()
  }

  function k(a, b) {
      var c = Array.prototype.slice,
          d = c.call(arguments, 2);
      return function() {
          return a.apply(b, d.concat(c.call(arguments)))
      }
  }

  function l(c, d, e, f) {
      function g(a) {
          a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.returnValue = !1
      }

      function h(a) {
          if (l) {
              if (p && document.documentMode < 9 && !a.button) return j();
              var b = a.originalEvent.touches,
                  e = b ? b[0].pageX : a.pageX,
                  f = b ? b[0].pageY : a.pageY,
                  h = Math.max(0, Math.min(e - m.left, o)),
                  i = Math.max(0, Math.min(f - m.top, n));
              q && g(a), d.apply(c, [h, i, a])
          }
      }

      function i(a) {
          var d = a.which ? 3 == a.which : 2 == a.button;
          a.originalEvent.touches;
          d || l || e.apply(c, arguments) !== !1 && (l = !0, n = b(c).height(), o = b(c).width(), m = b(c).offset(), b(k).bind(r), b(k.body).addClass("sp-dragging"), q || h(a), g(a))
      }

      function j() {
          l && (b(k).unbind(r), b(k.body).removeClass("sp-dragging"), f.apply(c, arguments)), l = !1
      }
      d = d || function() {}, e = e || function() {}, f = f || function() {};
      var k = c.ownerDocument || document,
          l = !1,
          m = {},
          n = 0,
          o = 0,
          q = "ontouchstart" in a,
          r = {};
      r.selectstart = g, r.dragstart = g, r[q ? "touchmove" : "mousemove"] = h, r[q ? "touchend" : "mouseup"] = j, b(c).bind(q ? "touchstart" : "mousedown", i)
  }

  function m(a, b, c) {
      var d;
      return function() {
          var e = this,
              f = arguments,
              g = function() {
                  d = null, a.apply(e, f)
              };
          c && clearTimeout(d), (c || !d) && (d = setTimeout(g, b))
      }
  }
  var n = {
          beforeShow: i,
          move: i,
          change: i,
          show: i,
          hide: i,
          color: !1,
          flat: !1,
          showInput: !1,
          showButtons: !0,
          clickoutFiresChange: !1,
          showInitial: !1,
          showPalette: !1,
          showPaletteOnly: !1,
          showSelectionPalette: !0,
          localStorageKey: !1,
          maxSelectionSize: 7,
          cancelText: "cancel",
          chooseText: "choose",
          preferredFormat: !1,
          className: "",
          showAlpha: !1,
          theme: "sp-light",
          palette: ["fff", "000"],
          selectionPalette: [],
          disabled: !1
      },
      o = [],
      p = !!/msie/i.exec(a.navigator.userAgent),
      q = function() {
          function a(a, b) {
              return !!~("" + a).indexOf(b)
          }
          var b = document.createElement("div"),
              c = b.style;
          return c.cssText = "background-color:rgba(0,0,0,.5)", a(c.backgroundColor, "rgba") || a(c.backgroundColor, "hsla")
      }(),
      r = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
      s = function() {
          var a = "";
          if (p)
              for (var b = 1; 6 >= b; b++) a += "<div class='sp-" + b + "'></div>";
          return ["<div class='sp-container'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", a, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
      }(),
      t = "spectrum.id";
  b.fn.spectrum = function(a, c) {
          if ("string" == typeof a) {
              var d = this,
                  e = Array.prototype.slice.call(arguments, 1);
              return this.each(function() {
                  var c = o[b(this).data(t)];
                  if (c) {
                      var f = c[a];
                      if (!f) throw new Error("Spectrum: no such method: '" + a + "'");
                      "get" == a ? d = c.get() : "container" == a ? d = c.container : "option" == a ? d = c.option.apply(c, e) : "destroy" == a ? (c.destroy(), b(this).removeData(t)) : f.apply(c, e)
                  }
              }), d
          }
          return this.spectrum("destroy").each(function() {
              var c = g(this, a);
              b(this).data(t, c.id)
          })
      }, b.fn.spectrum.load = !0, b.fn.spectrum.loadOpts = {}, b.fn.spectrum.draggable = l, b.fn.spectrum.defaults = n, b.spectrum = {}, b.spectrum.localization = {}, b.spectrum.palettes = {}, b.fn.spectrum.processNativeColorInputs = function() {
          var a = b("<input type='color' value='!' />")[0],
              c = "color" === a.type && "!" != a.value;
          c || b("input[type=color]").spectrum({
              preferredFormat: "hex6"
          })
      },
      function(a) {
          function b(a, d) {
              if ("object" == typeof a && a.hasOwnProperty("_tc_id")) return a;
              var f = c(a),
                  h = f.r,
                  j = f.g,
                  k = f.b,
                  l = z(f.a),
                  m = f.format;
              return {
                  ok: f.ok,
                  format: m,
                  _tc_id: t++,
                  alpha: l,
                  toHsv: function() {
                      var a = g(h, j, k);
                      return {
                          h: a.h,
                          s: a.s,
                          v: a.v,
                          a: l
                      }
                  },
                  toHsvString: function() {
                      var a = g(h, j, k),
                          b = v(360 * a.h),
                          c = v(100 * a.s),
                          d = v(100 * a.v);
                      return 1 == l ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + l + ")"
                  },
                  toHsl: function() {
                      var a = e(h, j, k);
                      return {
                          h: a.h,
                          s: a.s,
                          l: a.l,
                          a: l
                      }
                  },
                  toHslString: function() {
                      var a = e(h, j, k),
                          b = v(360 * a.h),
                          c = v(100 * a.s),
                          d = v(100 * a.l);
                      return 1 == l ? "hsl(" + b + ", " + c + "%, " + d + "%)" : "hsla(" + b + ", " + c + "%, " + d + "%, " + l + ")"
                  },
                  toHex: function() {
                      return i(h, j, k)
                  },
                  toHexString: function(a) {
                      return "#" + i(h, j, k, a)
                  },
                  toRgb: function() {
                      return {
                          r: v(h),
                          g: v(j),
                          b: v(k),
                          a: l
                      }
                  },
                  toRgbString: function() {
                      return 1 == l ? "rgb(" + v(h) + ", " + v(j) + ", " + v(k) + ")" : "rgba(" + v(h) + ", " + v(j) + ", " + v(k) + ", " + l + ")"
                  },
                  toName: function() {
                      return B[i(h, j, k)] || !1
                  },
                  toFilter: function(a, c) {
                      var d = i(h, j, k, !0),
                          e = d,
                          f = Math.round(255 * z(l)).toString(16),
                          g = f,
                          m = a && a.gradientType ? "GradientType = 1, " : "";
                      if (c) {
                          var n = b(c);
                          e = n.toHex(), g = Math.round(255 * z(n.alpha)).toString(16)
                      }
                      return "progid:DXImageTransform.Microsoft.gradient(" + m + "startColorstr=#" + p(f) + d + ",endColorstr=#" + p(g) + e + ")"
                  },
                  toString: function(a) {
                      a = a || this.format;
                      var b = !1;
                      return "rgb" === a && (b = this.toRgbString()), "hex" === a && (b = this.toHexString()), "hex6" === a && (b = this.toHexString(!0)), "name" === a && (b = this.toName()), "hsl" === a && (b = this.toHslString()), "hsv" === a && (b = this.toHsvString()), b || this.toHexString(!0)
                  }
              }
          }

          function c(a) {
              var b = {
                      r: 0,
                      g: 0,
                      b: 0
                  },
                  c = 1,
                  e = !1,
                  g = !1;
              return "string" == typeof a && (a = q(a)), "object" == typeof a && (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b") ? (b = d(a.r, a.g, a.b), e = !0, g = "rgb") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v") ? (b = h(a.h, a.s, a.v), e = !0, g = "hsv") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && (b = f(a.h, a.s, a.l), e = !0, g = "hsl"), a.hasOwnProperty("a") && (c = a.a)), b.r = w(255, x(b.r, 0)), b.g = w(255, x(b.g, 0)), b.b = w(255, x(b.b, 0)), b.r < 1 && (b.r = v(b.r)), b.g < 1 && (b.g = v(b.g)), b.b < 1 && (b.b = v(b.b)), {
                  ok: e,
                  format: a && a.format || g,
                  r: b.r,
                  g: b.g,
                  b: b.b,
                  a: c
              }
          }

          function d(a, b, c) {
              return {
                  r: 255 * k(a, 255),
                  g: 255 * k(b, 255),
                  b: 255 * k(c, 255)
              }
          }

          function e(a, b, c) {
              a = k(a, 255), b = k(b, 255), c = k(c, 255);
              var d, e, f = x(a, b, c),
                  g = w(a, b, c),
                  h = (f + g) / 2;
              if (f == g) d = e = 0;
              else {
                  var i = f - g;
                  switch (e = h > .5 ? i / (2 - f - g) : i / (f + g), f) {
                      case a:
                          d = (b - c) / i + (c > b ? 6 : 0);
                          break;
                      case b:
                          d = (c - a) / i + 2;
                          break;
                      case c:
                          d = (a - b) / i + 4
                  }
                  d /= 6
              }
              return {
                  h: d,
                  s: e,
                  l: h
              }
          }

          function f(a, b, c) {
              function d(a, b, c) {
                  return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + (b - a) * (2 / 3 - c) * 6 : a
              }
              var e, f, g;
              if (a = k(a, 360), b = k(b, 100), c = k(c, 100), 0 === b) e = f = g = c;
              else {
                  var h = .5 > c ? c * (1 + b) : c + b - c * b,
                      i = 2 * c - h;
                  e = d(i, h, a + 1 / 3), f = d(i, h, a), g = d(i, h, a - 1 / 3)
              }
              return {
                  r: 255 * e,
                  g: 255 * f,
                  b: 255 * g
              }
          }

          function g(a, b, c) {
              a = k(a, 255), b = k(b, 255), c = k(c, 255);
              var d, e, f = x(a, b, c),
                  g = w(a, b, c),
                  h = f,
                  i = f - g;
              if (e = 0 === f ? 0 : i / f, f == g) d = 0;
              else {
                  switch (f) {
                      case a:
                          d = (b - c) / i + (c > b ? 6 : 0);
                          break;
                      case b:
                          d = (c - a) / i + 2;
                          break;
                      case c:
                          d = (a - b) / i + 4
                  }
                  d /= 6
              }
              return {
                  h: d,
                  s: e,
                  v: h
              }
          }

          function h(a, b, c) {
              a = 6 * k(a, 360), b = k(b, 100), c = k(c, 100);
              var d = u.floor(a),
                  e = a - d,
                  f = c * (1 - b),
                  g = c * (1 - e * b),
                  h = c * (1 - (1 - e) * b),
                  i = d % 6,
                  j = [c, g, f, f, h, c][i],
                  l = [h, c, c, g, f, f][i],
                  m = [f, f, h, c, c, g][i];
              return {
                  r: 255 * j,
                  g: 255 * l,
                  b: 255 * m
              }
          }

          function i(a, b, c, d) {
              var e = [p(v(a).toString(16)), p(v(b).toString(16)), p(v(c).toString(16))];
              return d || e[0].charAt(0) != e[0].charAt(1) || e[1].charAt(0) != e[1].charAt(1) || e[2].charAt(0) != e[2].charAt(1) ? e.join("") : e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0)
          }

          function j(a) {
              var b = {};
              for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
              return b
          }

          function k(a, b) {
              n(a) && (a = "100%");
              var c = o(a);
              return a = w(b, x(0, z(a))), c && (a *= b / 100), u.abs(a - b) < 1e-6 ? 1 : a >= 1 ? a % b / z(b) : a
          }

          function l(a) {
              return w(1, x(0, a))
          }

          function m(a) {
              return parseInt(a, 16)
          }

          function n(a) {
              return "string" == typeof a && -1 != a.indexOf(".") && 1 === z(a)
          }

          function o(a) {
              return "string" == typeof a && -1 != a.indexOf("%")
          }

          function p(a) {
              return 1 == a.length ? "0" + a : "" + a
          }

          function q(a) {
              a = a.replace(r, "").replace(s, "").toLowerCase();
              var b = !1;
              if (A[a]) a = A[a], b = !0;
              else if ("transparent" == a) return {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 0
              };
              var c;
              return (c = C.rgb.exec(a)) ? {
                  r: c[1],
                  g: c[2],
                  b: c[3]
              } : (c = C.rgba.exec(a)) ? {
                  r: c[1],
                  g: c[2],
                  b: c[3],
                  a: c[4]
              } : (c = C.hsl.exec(a)) ? {
                  h: c[1],
                  s: c[2],
                  l: c[3]
              } : (c = C.hsla.exec(a)) ? {
                  h: c[1],
                  s: c[2],
                  l: c[3],
                  a: c[4]
              } : (c = C.hsv.exec(a)) ? {
                  h: c[1],
                  s: c[2],
                  v: c[3]
              } : (c = C.hex6.exec(a)) ? {
                  r: m(c[1]),
                  g: m(c[2]),
                  b: m(c[3]),
                  format: b ? "name" : "hex"
              } : (c = C.hex3.exec(a)) ? {
                  r: m(c[1] + "" + c[1]),
                  g: m(c[2] + "" + c[2]),
                  b: m(c[3] + "" + c[3]),
                  format: b ? "name" : "hex"
              } : !1
          }
          var r = /^[\s,#]+/,
              s = /\s+$/,
              t = 0,
              u = Math,
              v = u.round,
              w = u.min,
              x = u.max,
              y = u.random,
              z = a.parseFloat;
          b.fromRatio = function(a) {
              if ("object" == typeof a)
                  for (var c in a) 1 === a[c] && (a[c] = "1.0");
              return b(a)
          }, b.equals = function(a, c) {
              return a && c ? b(a).toRgbString() == b(c).toRgbString() : !1
          }, b.random = function() {
              return b.fromRatio({
                  r: y(),
                  g: y(),
                  b: y()
              })
          }, b.desaturate = function(a, c) {
              var d = b(a).toHsl();
              return d.s -= (c || 10) / 100, d.s = l(d.s), b(d)
          }, b.saturate = function(a, c) {
              var d = b(a).toHsl();
              return d.s += (c || 10) / 100, d.s = l(d.s), b(d)
          }, b.greyscale = function(a) {
              return b.desaturate(a, 100)
          }, b.lighten = function(a, c) {
              var d = b(a).toHsl();
              return d.l += (c || 10) / 100, d.l = l(d.l), b(d)
          }, b.darken = function(a, c) {
              var d = b(a).toHsl();
              return d.l -= (c || 10) / 100, d.l = l(d.l), b(d)
          }, b.complement = function(a) {
              var c = b(a).toHsl();
              return c.h = (c.h + .5) % 1, b(c)
          }, b.triad = function(a) {
              var c = b(a).toHsl(),
                  d = 360 * c.h;
              return [b(a), b({
                  h: (d + 120) % 360,
                  s: c.s,
                  l: c.l
              }), b({
                  h: (d + 240) % 360,
                  s: c.s,
                  l: c.l
              })]
          }, b.tetrad = function(a) {
              var c = b(a).toHsl(),
                  d = 360 * c.h;
              return [b(a), b({
                  h: (d + 90) % 360,
                  s: c.s,
                  l: c.l
              }), b({
                  h: (d + 180) % 360,
                  s: c.s,
                  l: c.l
              }), b({
                  h: (d + 270) % 360,
                  s: c.s,
                  l: c.l
              })]
          }, b.splitcomplement = function(a) {
              var c = b(a).toHsl(),
                  d = 360 * c.h;
              return [b(a), b({
                  h: (d + 72) % 360,
                  s: c.s,
                  l: c.l
              }), b({
                  h: (d + 216) % 360,
                  s: c.s,
                  l: c.l
              })]
          }, b.analogous = function(a, c, d) {
              c = c || 6, d = d || 30;
              var e = b(a).toHsl(),
                  f = 360 / d,
                  g = [b(a)];
              for (e.h *= 360, e.h = (e.h - (f * c >> 1) + 720) % 360; --c;) e.h = (e.h + f) % 360, g.push(b(e));
              return g
          }, b.monochromatic = function(a, c) {
              c = c || 6;
              for (var d = b(a).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--;) h.push(b({
                  h: e,
                  s: f,
                  v: g
              })), g = (g + i) % 1;
              return h
          }, b.readable = function(a, c) {
              var d = b(a).toRgb(),
                  e = b(c).toRgb();
              return (e.r - d.r) * (e.r - d.r) + (e.g - d.g) * (e.g - d.g) + (e.b - d.b) * (e.b - d.b) > 10404
          };
          var A = b.names = {
                  aliceblue: "f0f8ff",
                  antiquewhite: "faebd7",
                  aqua: "0ff",
                  aquamarine: "7fffd4",
                  azure: "f0ffff",
                  beige: "f5f5dc",
                  bisque: "ffe4c4",
                  black: "000",
                  blanchedalmond: "ffebcd",
                  blue: "00f",
                  blueviolet: "8a2be2",
                  brown: "a52a2a",
                  burlywood: "deb887",
                  burntsienna: "ea7e5d",
                  cadetblue: "5f9ea0",
                  chartreuse: "7fff00",
                  chocolate: "d2691e",
                  coral: "ff7f50",
                  cornflowerblue: "6495ed",
                  cornsilk: "fff8dc",
                  crimson: "dc143c",
                  cyan: "0ff",
                  darkblue: "00008b",
                  darkcyan: "008b8b",
                  darkgoldenrod: "b8860b",
                  darkgray: "a9a9a9",
                  darkgreen: "006400",
                  darkgrey: "a9a9a9",
                  darkkhaki: "bdb76b",
                  darkmagenta: "8b008b",
                  darkolivegreen: "556b2f",
                  darkorange: "ff8c00",
                  darkorchid: "9932cc",
                  darkred: "8b0000",
                  darksalmon: "e9967a",
                  darkseagreen: "8fbc8f",
                  darkslateblue: "483d8b",
                  darkslategray: "2f4f4f",
                  darkslategrey: "2f4f4f",
                  darkturquoise: "00ced1",
                  darkviolet: "9400d3",
                  deeppink: "ff1493",
                  deepskyblue: "00bfff",
                  dimgray: "696969",
                  dimgrey: "696969",
                  dodgerblue: "1e90ff",
                  firebrick: "b22222",
                  floralwhite: "fffaf0",
                  forestgreen: "228b22",
                  fuchsia: "f0f",
                  gainsboro: "dcdcdc",
                  ghostwhite: "f8f8ff",
                  gold: "ffd700",
                  goldenrod: "daa520",
                  gray: "808080",
                  green: "008000",
                  greenyellow: "adff2f",
                  grey: "808080",
                  honeydew: "f0fff0",
                  hotpink: "ff69b4",
                  indianred: "cd5c5c",
                  indigo: "4b0082",
                  ivory: "fffff0",
                  khaki: "f0e68c",
                  lavender: "e6e6fa",
                  lavenderblush: "fff0f5",
                  lawngreen: "7cfc00",
                  lemonchiffon: "fffacd",
                  lightblue: "add8e6",
                  lightcoral: "f08080",
                  lightcyan: "e0ffff",
                  lightgoldenrodyellow: "fafad2",
                  lightgray: "d3d3d3",
                  lightgreen: "90ee90",
                  lightgrey: "d3d3d3",
                  lightpink: "ffb6c1",
                  lightsalmon: "ffa07a",
                  lightseagreen: "20b2aa",
                  lightskyblue: "87cefa",
                  lightslategray: "789",
                  lightslategrey: "789",
                  lightsteelblue: "b0c4de",
                  lightyellow: "ffffe0",
                  lime: "0f0",
                  limegreen: "32cd32",
                  linen: "faf0e6",
                  magenta: "f0f",
                  maroon: "800000",
                  mediumaquamarine: "66cdaa",
                  mediumblue: "0000cd",
                  mediumorchid: "ba55d3",
                  mediumpurple: "9370db",
                  mediumseagreen: "3cb371",
                  mediumslateblue: "7b68ee",
                  mediumspringgreen: "00fa9a",
                  mediumturquoise: "48d1cc",
                  mediumvioletred: "c71585",
                  midnightblue: "191970",
                  mintcream: "f5fffa",
                  mistyrose: "ffe4e1",
                  moccasin: "ffe4b5",
                  navajowhite: "ffdead",
                  navy: "000080",
                  oldlace: "fdf5e6",
                  olive: "808000",
                  olivedrab: "6b8e23",
                  orange: "ffa500",
                  orangered: "ff4500",
                  orchid: "da70d6",
                  palegoldenrod: "eee8aa",
                  palegreen: "98fb98",
                  paleturquoise: "afeeee",
                  palevioletred: "db7093",
                  papayawhip: "ffefd5",
                  peachpuff: "ffdab9",
                  peru: "cd853f",
                  pink: "ffc0cb",
                  plum: "dda0dd",
                  powderblue: "b0e0e6",
                  purple: "800080",
                  red: "f00",
                  rosybrown: "bc8f8f",
                  royalblue: "4169e1",
                  saddlebrown: "8b4513",
                  salmon: "fa8072",
                  sandybrown: "f4a460",
                  seagreen: "2e8b57",
                  seashell: "fff5ee",
                  sienna: "a0522d",
                  silver: "c0c0c0",
                  skyblue: "87ceeb",
                  slateblue: "6a5acd",
                  slategray: "708090",
                  slategrey: "708090",
                  snow: "fffafa",
                  springgreen: "00ff7f",
                  steelblue: "4682b4",
                  tan: "d2b48c",
                  teal: "008080",
                  thistle: "d8bfd8",
                  tomato: "ff6347",
                  turquoise: "40e0d0",
                  violet: "ee82ee",
                  wheat: "f5deb3",
                  white: "fff",
                  whitesmoke: "f5f5f5",
                  yellow: "ff0",
                  yellowgreen: "9acd32"
              },
              B = b.hexNames = j(A),
              C = function() {
                  var a = "[-\\+]?\\d+%?",
                      b = "[-\\+]?\\d*\\.\\d+%?",
                      c = "(?:" + b + ")|(?:" + a + ")",
                      d = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?",
                      e = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?";
                  return {
                      rgb: new RegExp("rgb" + d),
                      rgba: new RegExp("rgba" + e),
                      hsl: new RegExp("hsl" + d),
                      hsla: new RegExp("hsla" + e),
                      hsv: new RegExp("hsv" + d),
                      hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                      hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                  }
              }();
          a.tinycolor = b
      }(this), b(function() {
          b.fn.spectrum.load && b.fn.spectrum.processNativeColorInputs()
      })
}(window, jQuery);;
! function(a, b) {
  "object" == typeof exports ? module.exports = b() : a.Spinner = b()
}(this, function() {
  "use strict";

  function a(a, b) {
      var c, d = document.createElement(a || "div");
      for (c in b) d[c] = b[c];
      return d
  }

  function b(a) {
      for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
      return a
  }

  function c(a, b, c, d) {
      var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
          f = .01 + c / d * 100,
          g = Math.max(1 - (1 - a) / b * (100 - f), a),
          h = j.substring(0, j.indexOf("Animation")).toLowerCase(),
          i = h && "-" + h + "-" || "";
      return m[e] || (k.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", k.cssRules.length), m[e] = 1), e
  }

  function d(a, b) {
      var c, d, e = a.style;
      if (b = b.charAt(0).toUpperCase() + b.slice(1), void 0 !== e[b]) return b;
      for (d = 0; d < l.length; d++)
          if (c = l[d] + b, void 0 !== e[c]) return c
  }

  function e(a, b) {
      for (var c in b) a.style[d(a, c) || c] = b[c];
      return a
  }

  function f(a) {
      for (var b = 1; b < arguments.length; b++) {
          var c = arguments[b];
          for (var d in c) void 0 === a[d] && (a[d] = c[d])
      }
      return a
  }

  function g(a, b) {
      return "string" == typeof a ? a : a[b % a.length]
  }

  function h(a) {
      this.opts = f(a || {}, h.defaults, n)
  }

  function i() {
      function c(b, c) {
          return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
      }
      k.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function(a, d) {
          function f() {
              return e(c("group", {
                  coordsize: k + " " + k,
                  coordorigin: -j + " " + -j
              }), {
                  width: k,
                  height: k
              })
          }

          function h(a, h, i) {
              b(m, b(e(f(), {
                  rotation: 360 / d.lines * a + "deg",
                  left: ~~h
              }), b(e(c("roundrect", {
                  arcsize: d.corners
              }), {
                  width: j,
                  height: d.scale * d.width,
                  left: d.scale * d.radius,
                  top: -d.scale * d.width >> 1,
                  filter: i
              }), c("fill", {
                  color: g(d.color, a),
                  opacity: d.opacity
              }), c("stroke", {
                  opacity: 0
              }))))
          }
          var i, j = d.scale * (d.length + d.width),
              k = 2 * d.scale * j,
              l = -(d.width + d.length) * d.scale * 2 + "px",
              m = e(f(), {
                  position: "absolute",
                  top: l,
                  left: l
              });
          if (d.shadow)
              for (i = 1; i <= d.lines; i++) h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
          for (i = 1; i <= d.lines; i++) h(i);
          return b(a, m)
      }, h.prototype.opacity = function(a, b, c, d) {
          var e = a.firstChild;
          d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
      }
  }
  var j, k, l = ["webkit", "Moz", "ms", "O"],
      m = {},
      n = {
          lines: 12,
          length: 7,
          width: 5,
          radius: 10,
          scale: 1,
          corners: 1,
          color: "#000",
          opacity: .25,
          rotate: 0,
          direction: 1,
          speed: 1,
          trail: 100,
          fps: 20,
          zIndex: 2e9,
          className: "spinner",
          top: "50%",
          left: "50%",
          shadow: !1,
          hwaccel: !1,
          position: "absolute"
      };
  if (h.defaults = {}, f(h.prototype, {
          spin: function(b) {
              this.stop();
              var c = this,
                  d = c.opts,
                  f = c.el = a(null, {
                      className: d.className
                  });
              if (e(f, {
                      position: d.position,
                      width: 0,
                      zIndex: d.zIndex,
                      left: d.left,
                      top: d.top
                  }), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) {
                  var g, h = 0,
                      i = (d.lines - 1) * (1 - d.direction) / 2,
                      k = d.fps,
                      l = k / d.speed,
                      m = (1 - d.opacity) / (l * d.trail / 100),
                      n = l / d.lines;
                  ! function o() {
                      h++;
                      for (var a = 0; a < d.lines; a++) g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d);
                      c.timeout = c.el && setTimeout(o, ~~(1e3 / k))
                  }()
              }
              return c
          },
          stop: function() {
              var a = this.el;
              return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this
          },
          lines: function(d, f) {
              function h(b, c) {
                  return e(a(), {
                      position: "absolute",
                      width: f.scale * (f.length + f.width) + "px",
                      height: f.scale * f.width + "px",
                      background: b,
                      boxShadow: c,
                      transformOrigin: "left",
                      transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.scale * f.radius + "px,0)",
                      borderRadius: (f.corners * f.scale * f.width >> 1) + "px"
                  })
              }
              for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) i = e(a(), {
                  position: "absolute",
                  top: 1 + ~(f.scale * f.width / 2) + "px",
                  transform: f.hwaccel ? "translate3d(0,0,0)" : "",
                  opacity: f.opacity,
                  animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
              }), f.shadow && b(i, e(h("#000", "0 0 4px #000"), {
                  top: "2px"
              })), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)")));
              return d
          },
          opacity: function(a, b, c) {
              b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
          }
      }), "undefined" != typeof document) {
      k = function() {
          var c = a("style", {
              type: "text/css"
          });
          return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet
      }();
      var o = e(a("group"), {
          behavior: "url(#default#VML)"
      });
      !d(o, "transform") && o.adj ? i() : j = d(o, "animation")
  }
  return h
});;
/*!
* @esri/arcgis-html-sanitizer - v0.5.0 - Thu Jun 21 2018 12:12:11 GMT-0700 (Pacific Daylight Time)
* Copyright (c) 2018 - Environmental Systems Research Institute, Inc.
* Apache-2.0
* 
* js-xss
* Copyright (c) 2012-2017 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
* http://ucdok.com
* MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
* 
* Lodash/isPlainObject
* Copyright (c) JS Foundation and other contributors <https://js.foundation/>
* MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
*/

/*!*******************************************!*\
!*** ./node_modules/cssfilter/lib/css.js ***!
\*******************************************/

/*! no static exports found */

/*! ./default */

/*! ./parser */

/*! ./util */

/*!***********************************************!*\
!*** ./node_modules/cssfilter/lib/default.js ***!
\***********************************************/

/*!*********************************************!*\
!*** ./node_modules/cssfilter/lib/index.js ***!
\*********************************************/

/*! ./css */

/*!**********************************************!*\
!*** ./node_modules/cssfilter/lib/parser.js ***!
\**********************************************/

/*!********************************************!*\
!*** ./node_modules/cssfilter/lib/util.js ***!
\********************************************/

/*!****************************************************!*\
!*** ./node_modules/lodash.isplainobject/index.js ***!
\****************************************************/

/**
* lodash (Custom Build) <https://lodash.com/>
* Build: `lodash modularize exports="npm" -o ./`
* Copyright jQuery Foundation and other contributors <https://jquery.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/

/*!*****************************************!*\
!*** ./node_modules/xss/lib/default.js ***!
\*****************************************/

/*! cssfilter */

/*!***************************************!*\
!*** ./node_modules/xss/lib/index.js ***!
\***************************************/

/*! ./xss */

/*!****************************************!*\
!*** ./node_modules/xss/lib/parser.js ***!
\****************************************/

/*!**************************************!*\
!*** ./node_modules/xss/lib/util.js ***!
\**************************************/

/*!*************************************!*\
!*** ./node_modules/xss/lib/xss.js ***!
\*************************************/

/*!**********************!*\
!*** ./src/index.ts ***!
\**********************/

/*! exports provided: Sanitizer */

/*! lodash.isplainobject */

/*! xss */

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
* Apache-2.0
*
* js-xss
* Copyright (c) 2012-2017 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
* http://ucdok.com
* The MIT License, see
* https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
*
* Lodash/isPlainObject
* Copyright (c) JS Foundation and other contributors <https://js.foundation/>
* MIT License, see https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE for details
* */

/*! isCurrentGraphic ||*/

define("storymaps/ui/loadingIndicator/LoadingIndicator", ["dojo/dom"], function(e) {
      return function(n, r) {
          var i = null,
              s = 0,
              o = e.byId(n),
              u = e.byId(r);
          this.init = function() {
              if (this.spinner != null) return;
              var e = {
                  lines: 16,
                  length: 7,
                  width: 7,
                  radius: 30,
                  rotate: 0,
                  color: "#000",
                  speed: 1.1,
                  trail: 25,
                  shadow: !0,
                  hwaccel: !0,
                  className: "spinner",
                  top: 4,
                  left: 6
              };
              i = (new Spinner(e)).spin(o)
          }, this.start = function() {
              !i && this.init(), this.itemCount || (o.style.visibility = "visible"), s = 1
          }, this.stop = function() {
              s--, s <= 0 && (o.style.visibility = "hidden", s = 0), u && (u.style.visibility = "hidden")
          }, this.setMessage = function(e, t) {
              u && (t && (u.style.marginTop = "-50px"), u.innerHTML = e, u.style.visibility = "visible", u.style.display = "block")
          }, this.forceHide = function() {
              o.style.display = "none", u && (u.style.display = "none")
          }
      }
  }), define("storymaps/utils/Helper", ["dojo/cookie", "dojo/has", "esri/arcgis/utils", "esri/urlUtils", "esri/geometry/webMercatorUtils", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/Polygon", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/OpenStreetMapLayer", "esri/layers/VectorTileLayer"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
      return {
          isMobile: function() {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i)
          },
          isArcGISHosted: function() {
              return /(\/apps\/|\/home\/)(MapTour\/)/.test(document.location.pathname)
          },
          browserSupportHistory: function() {
              return !!window.history && !!history.pushState
          },
          getUrlParams: function() {
              var e = r.urlToObject(document.location.search).query;
              return e ? e : !this.browserSupportHistory() && !e ? r.urlToObject(document.location.hash).query || {} : {}
          },
          getWebmapID: function(e) {
              var t = this.getUrlParams();
              if (configOptions && configOptions.webmap) return configOptions.webmap;
              if (this.isArcGISHosted() || !e) return t.webmap;
              if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) return t.webmap
          },
          getAppID: function(e) {
              var t = this.getUrlParams();
              if (configOptions && configOptions.appid) return configOptions.appid;
              if (this.isArcGISHosted() || !e) return t.appid;
              if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) return t.appid
          },
          getSharingHost: function() {
              var e = this.getUrlParams();
              return e.sharinghost ? "//" + e.sharinghost : ""
          },
          getGraphicsLayerByName: function(e, t) {
              var n;
              for (var r = 0; r < e.graphicsLayerIds.length; r++) {
                  n = e.getLayer(e.graphicsLayerIds[r]);
                  if (n.name == t) return n
              }
              return null
          },
          getWebMapExtentFromItem: function(e) {
              if (!e.extent || e.extent.length != 2) return null;
              var t = i.geographicToWebMercator(new s(e.extent[0][0], e.extent[0][1])),
                  n = i.geographicToWebMercator(new s(e.extent[1][0], e.extent[1][1]));
              return new o({
                  xmax: n.x,
                  xmin: t.x,
                  ymax: n.y,
                  ymin: t.y,
                  spatialReference: {
                      wkid: 102100
                  }
              })
          },
          serializeExtentToItem: function(e) {
              if (!e || !e.spatialReference) return null;
              var t = e.spatialReference.wkid == 4326 ? e : i.webMercatorToGeographic(e);
              return [
                  [Math.round(t.xmin * 1e4) / 1e4, Math.round(t.ymin * 1e4) / 1e4],
                  [Math.round(t.xmax * 1e4) / 1e4, Math.round(t.ymax * 1e4) / 1e4]
              ]
          },
          serializedExtentEquals: function(e, t) {
              return e && t && e.length == t.length && e.length == 2 && e[0][0] == t[0][0] && e[0][1] == t[0][1] && e[1][0] == t[1][0] && e[1][1] == t[1][1]
          },
          cloneLayer: function(e, t) {
              return e.url && e.url.match(/virtualearth\./) ? new f("//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer") : e instanceof f ? new f(e.url) : e instanceof a ? new a(e.url) : e.id == "OpenStreetMap" || e.id == "layer_osm" ? new l : t && t.type == "VectorTileLayer" ? new c(e.url) : new f("//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer")
          },
          extentToPolygon: function(e) {
              var t = new u(e.spatialReference);
              return t.addRing([
                  [e.xmin, e.ymin],
                  [e.xmin, e.ymax],
                  [e.xmax, e.ymax],
                  [e.xmax, e.ymin],
                  [e.xmin, e.ymin]
              ]), t
          },
          getFirstLevelWhereExtentFit: function(e, t) {
              var n = t.width,
                  r = t.height,
                  i = t._params.lods;
              if (!i) return -1;
              for (var s = i.length - 1; s >= 0; s--)
                  if (n * t._params.lods[s].resolution > e.getWidth() && r * t._params.lods[s].resolution > e.getHeight()) return s;
              return -1
          },
          getPortalUser: function() {
              var t = e("esri_auth");
              if (!t) return;
              t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'));
              if (t.urlKey && t.customBaseUrl && (t.urlKey + "." + t.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) return;
              return t ? t.email : null
          },
          getPortalRole: function() {
              var t = e("esri_auth");
              if (!t) return;
              t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'));
              if (t.urlKey && t.customBaseUrl && (t.urlKey + "." + t.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) return;
              return t ? t.role : null
          },
          getMyStoriesURL: function() {
              return app.isPortal ? n.arcgisUrl.split("/sharing/")[0] + "/apps/MyStories/" : "//storymaps.arcgis.com/en/my-stories/"
          },
          getWebmapViewerLinkFromSharingURL: function(e) {
              var t = e.split("/sharing/")[0];
              return t + "/home/webmap/viewer.html"
          },
          getItemURL: function(e, t) {
              var n = e.split("/sharing/")[0];
              return n + "/home/item.html?id=" + t
          },
          getMyContentURL: function(e) {
              return e.split("/sharing/")[0] + "/home/content.html"
          },
          browserSupportAttachementUsingFileReader: function() {
              return !!window.FileReader && !!window.FormData && !!this.browserSupportCanvas() && !!window.Blob
          },
          browserSupportCanvas: function() {
              var e = document.createElement("canvas");
              return !!e.getContext && !!e.getContext("2d")
          },
          browserSupportFileReaderBinaryString: function() {
              if (!window.FileReader) return !1;
              var e = new window.FileReader;
              return "readAsArrayBuffer" in e
          },
          getBinaryStringFromArrayBuffer: function(e) {
              var t = new Uint8Array(e),
                  n = "";
              for (var r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
              return n
          },
          addCSSRule: function(e) {
              if (t("ie") <= 8) return;
              $("<style>").prop("type", "text/css").html(e).appendTo("head")
          },
          hex2rgba: function(e, t) {
              if (!e || e === "") return "";
              var n = e.replace("#", "").match(/../g),
                  r = [],
                  i;
              for (i in n) r.push(parseInt(n[i], 16));
              return r.push(t), "rgba(" + r.join() + ")"
          },
          prependURLHTTP: function(e) {
              return !e || e === "" || e.match(/^mailto:/) ? e : /^(https?:\/\/)|^(\/\/)/i.test(e) ? e : "http://" + e
          }
      }
  }), define("storymaps/maptour/core/Config", [], function() {
      return {
          loadAllWebmapOnInit: !1,
          checkConfigFileIsOK: function() {
              return APPCFG && APPCFG.COLORS && APPCFG.COLORS.length == 3 && APPCFG.POPUP_BACKGROUND_COLOR && APPCFG.POPUP_BORDER_COLOR && APPCFG.POPUP_ARROW_COLOR && APPCFG.COLOR_SCHEMES && APPCFG.DISPLAY_LOCATE_BUTTON !== undefined && APPCFG.DEFAULT_SHARING_URL && APPCFG.DEFAULT_PROXY_URL && APPCFG.MINIMUM_MAP_WIDTH && APPCFG.TIMEOUT_VIEWER_LOAD && APPCFG.TIMEOUT_VIEWER_REQUEST && APPCFG.TIMEOUT_BUILDER_REQUEST && APPCFG.MAX_ALLOWED_POINTS && APPCFG.USE_STATIC_ICON && APPCFG.USE_STATIC_ICON.enabled !== undefined && APPCFG.USE_STATIC_ICON.url && APPCFG.PIN_CFG && APPCFG.PIN_DEFAULT_CFG && APPCFG.PIN_CFG[APPCFG.PIN_DEFAULT_CFG] && APPCFG.ICON_CFG && APPCFG.ICON_CUSTOM_CFG && APPCFG.EMBED !== undefined && APPCFG.HEADER_LOGO_URL !== undefined && APPCFG.HEADER_LOGO_TARGET !== undefined && APPCFG.HEADER_LINK_TEXT !== undefined && APPCFG.HEADER_LINK_URL !== undefined && APPCFG.HEADER_SOCIAL && APPCFG.FIELDS_CANDIDATE && APPCFG.CORS_SERVER && APPCFG.AUTHORIZED_IMPORT_SOURCE && APPCFG.FLICKR_API_KEY && APPCFG.YOUTUBE_DISABLE_ON_PORTAL !== undefined && APPCFG.YOUTUBE_API_KEY && APPCFG.BING_MAPS_KEY !== undefined && APPCFG.HELPER_SERVICES !== undefined && APPCFG.HELPER_SERVICES.geometry !== undefined && APPCFG.HELPER_SERVICES.geocode !== undefined
          }
      }
  }), define("storymaps/maptour/core/FieldConfig", [], function() {
      return function(t) {
          var n = this,
              r = t ? t.fieldID : null,
              i = t ? t.fieldName : null,
              s = t ? t.fieldDescription : null,
              o = t ? t.fieldURL : null,
              u = t ? t.fieldThumb : null,
              a = t ? t.fieldIconColor : null,
              f = t ? t.fieldIsVideo : null;
          this.setIDField = function(e) {
              r = e
          }, this.getIDField = function() {
              return r
          }, this.setNameField = function(e) {
              i = e
          }, this.getNameField = function() {
              return i
          }, this.setDescriptionField = function(e) {
              s = e
          }, this.getDescriptionField = function() {
              return s
          }, this.setURLField = function(e) {
              o = e
          }, this.getURLField = function() {
              return o
          }, this.setThumbField = function(e) {
              u = e
          }, this.getThumbField = function() {
              return u
          }, this.setIconColorField = function(e) {
              a = e
          }, this.getIconColorField = function() {
              return a
          }, this.setIsVideoField = function(e) {
              f = e
          }, this.getIsVideoField = function() {
              return f
          }, this.allFieldsFound = function() {
              return n.getIDField() !== "" && n.getNameField() !== "" && n.getDescriptionField() !== "" && n.getURLField() !== "" && n.getThumbField() !== "" && n.getIconColorField() !== ""
          }, this.allCriticalFieldsFound = function() {
              return n.getNameField() !== "" && n.getDescriptionField() !== "" && n.getIconColorField() !== ""
          }, this.allWebmapLayerMandatoryFieldsFound = function() {
              return n.getIDField() !== "" && n.getNameField() !== "" && n.getDescriptionField() !== "" && n.getURLField() !== "" && n.getThumbField() !== ""
          }, this.serialize = function() {
              return {
                  fieldID: n.getIDField(),
                  fieldName: n.getNameField(),
                  fieldDescription: n.getDescriptionField(),
                  fieldURL: n.getURLField(),
                  fieldThumb: n.getThumbField(),
                  fieldIconColor: n.getIconColorField(),
                  fieldIsVideo: n.getIsVideoField()
              }
          }
      }
  }), define("storymaps/maptour/core/WebApplicationData", ["storymaps/maptour/core/FieldConfig", "dojo/_base/lang"], function(e, t) {
      var n = {},
          r = {
              values: {}
          };
      return {
          set: function(i) {
              n = t.clone(i);
              if (!i || !i.values) return;
              i.values.fieldsOverride && (i.values.fieldsOverride = new e(i.values.fieldsOverride)), r = i
          },
          get: function() {
              var e = t.clone(r);
              return e.values.fieldsOverride && (e.values.fieldsOverride = e.values.fieldsOverride.serialize()), e.values.sourceLayer = app.data.getSourceLayer().id, e.values.template || (e.values.template = "Map Tour"), e.values.templateCreation || (e.values.templateCreation = version), e.values.templateVersion = version, e
          },
          getBlank: function() {
              return {
                  values: {
                      webmap: n.values.webmap
                  }
              }
          },
          cleanWebAppAfterInitialization: function() {
              var e = !1,
                  t = [n, r];
              for (var i = 0; i < t.length; i++) {
                  var s = t[i];
                  s && s.values && (s.values.order && (delete s.values.order, e = !0), s.values.firstRecordAsIntro && (delete s.values.firstRecordAsIntro, e = !0), s.values.fieldsOverride && (delete s.values.fieldsOverride, e = !0), s.values.sourceLayer && (delete s.values.sourceLayer, e = !0))
              }
              return e
          },
          restoreOriginalData: function() {
              this.set(n)
          },
          updateAfterSave: function() {
              n = t.clone(r)
          },
          getDoNotWarnTitle: function() {
              return r.values.doNotWarnTitle || !1
          },
          setDoNotWarnTitle: function(e) {
              r.values.doNotWarnTitle = e
          },
          getWebmap: function() {
              return r.values.webmap
          },
          getSourceLayer: function() {
              return r.values.sourceLayer
          },
          getTitle: function() {
              return r.values.title
          },
          setTitle: function(e) {
              r.values.title = e
          },
          getSubtitle: function() {
              return r.values.subtitle
          },
          setSubtitle: function(e) {
              r.values.subtitle = e
          },
          setFieldsOverride: function(t, n) {
              t ? r.values.fieldsOverride = new e(n) : r.values.fieldsOverride && delete r.values.fieldsOverride
          },
          getFieldsOverride: function() {
              return r.values.fieldsOverride
          },
          getTourPointOrder: function() {
              return r.values.order
          },
          setTourPointOrder: function(e) {
              r.values.order = [];
              for (var t = 0; t < e.length; t++) r.values.order.push({
                  id: e[t].id,
                  visible: e[t].visible
              })
          },
          setColors: function(e, t, n) {
              r.values.colors = e + ";" + t + ";" + n
          },
          getColors: function() {
              return r.values.colors ? r.values.colors.split(";") : APPCFG.COLORS
          },
          setLogoURL: function(e) {
              r.values.logoURL = e
          },
          getLogoURL: function() {
              return r.values.logoURL
          },
          setLogoTarget: function(e) {
              r.values.logoTarget = e
          },
          getLogoTarget: function() {
              return r.values.logoTarget
          },
          setZoomLevel: function(e) {
              r.values.zoomLevel = e
          },
          getZoomLevel: function() {
              return r.values.zoomLevel
          },
          getLayout: function() {
              return r.values.layout
          },
          setLayout: function(e, t) {
              r.values.layout = e, r.values.placardPosition = t
          },
          getPlacardPosition: function() {
              return r.values.placardPosition
          },
          getHeaderLinkText: function() {
              return r.values.headerLinkText
          },
          getHeaderLinkURL: function() {
              return r.values.headerLinkURL
          },
          setHeaderLink: function(e, t) {
              r.values.headerLinkText = e, r.values.headerLinkURL = t
          },
          getFirstRecordAsIntro: function() {
              return r.values.firstRecordAsIntro
          },
          setFirstRecordAsIntro: function(e) {
              r.values.firstRecordAsIntro = e
          },
          getLayerId: function() {
              return r.values.layerId
          },
          setLayerId: function(e) {
              r.values.layerId = e
          },
          getSocial: function() {
              return r.values.social
          },
          setSocial: function(e) {
              r.values.social = e
          },
          getTemplateVersion: function() {
              return r.values.templateVersion
          },
          getTemplateCreation: function() {
              return r.values.templateCreation
          },
          setTemplateCreation: function() {
              r.values.templateCreation = version
          },
          setDisableVideo: function(e) {
              r.values.disableVideo = e
          },
          getDisableVideo: function() {
              return r.values.disableVideo
          },
          getZoomLocationButton: function() {
              return r.values.locationButton
          },
          setZoomLocationButton: function(e) {
              r.values.locationButton = e
          },
          setWebmap: function(e) {
              r.values.webmap = e
          },
          getAllValues: function() {
              return r.values
          }
      }
  }), define("storymaps/maptour/core/MapTourHelper", ["storymaps/maptour/core/WebApplicationData", "esri/symbols/PictureMarkerSymbol"], function(e, t) {
      var n, r, i, s, o;
      return {
          isOnMobileView: function() {
              return $("#headerMobile").css("display") == "block"
          },
          isSupportedImgExt: function(e) {
              return /((\.jp(e)?g)|(.png)|(.gif)|(.bmp))$/i.test(e)
          },
          mediaIsSupportedImg: function(t) {
              return t ? t.indexOf("isVideo") != -1 ? !1 : /((\.jp(e)?g)|(.png)|(.gif)|(.bmp))$/i.test(t) || t.indexOf("isImage") > -1 ? !0 : e.getTemplateCreation() == "2.1" ? e.getDisableVideo() || app.data.sourceIsFS() : !0 : !0
          },
          validateImageURL: function(e) {
              return /^(((ftp|http|https):(\/\/))|(\/\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?((\.jp(e)?g)|(.png)|(.gif)|(.bmp))$/i.test(e) || e.indexOf("#isImage") > -1
          },
          validateURL: function(e) {
              return /^(((ftp|http|https):(\/\/))|(\/\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i.test(e)
          },
          addIsVideoToURL: function(e) {
              var t = e.indexOf("#");
              return t > 0 ? e.slice(0, t) + (e.indexOf("?") ? "&" : "?") + "isVideo" + e.slice(t) : e + "#isVideo"
          },
          getNotFoundMedia: function() {
              return document.location.protocol + "//" + document.location.host + document.location.pathname.split("/").slice(0, -1).join("/") + "/resources/icons/picture-not-available.png"
          },
          encodeText: function(e) {
              if (!app.data.sourceIsFS()) return e;
              var t = "";
              try {
                  t = e.replace(/=([^"])/g, "%3D$1")
              } catch (n) {
                  return e
              }
              return t
          },
          decodeText: function(e) {
              app.data.getAppItem().created > APPCFG.HTML_SANITIZER_DATE && (e = app.sanitizer.sanitize(e));
              if (!app.data.sourceIsFS()) return e;
              var t = "";
              try {
                  t = e.replace(/%3D/g, "=")
              } catch (n) {
                  return e
              }
              return t
          },
          checkVideoURL: function(e) {
              return e.match("youtube.com/embed") && (e.match("wmode=") || (e.match(/\?/) ? e += "&wmode=opaque" : e += "?wmode=opaque")), e
          },
          getSymbolUrl: function(e, t) {
              e = e ? ("" + e).toLowerCase() : "";
              var n = APPCFG.PIN_CFG[e] || APPCFG.PIN_CFG[APPCFG.PIN_DEFAULT_CFG];
              return n.iconPath + t + ".png"
          },
          getSymbolCss: function(e) {
              e = e ? ("" + e).toLowerCase() : "";
              var t = APPCFG.PIN_CFG[e] || APPCFG.PIN_CFG[APPCFG.PIN_DEFAULT_CFG];
              return t.cssClass
          },
          getSymbolColors: function() {
              var e = [];
              for (var t in APPCFG.PIN_CFG) e.push(t);
              return e
          },
          colorExists: function(e) {
              return e = e ? ("" + e).toLowerCase() : "", APPCFG.PIN_CFG[e] ? !0 : !1
          },
          getDefaultColor: function() {
              return APPCFG.PIN_DEFAULT_CFG
          },
          getSymbolConfig: function(e) {
              return $("body").hasClass("side-panel") ? APPCFG.ICON_CUSTOM_CFG[e || "normal"] : APPCFG.ICON_CFG[e || "normal"]
          },
          loadCustomIcon: function() {
              n = document.createElement("canvas"), r = n.getContext("2d"), i = new Image, i.src = APPCFG.PIN_CFG.custom.iconPath, i.onload = function() {
                  r.drawImage(i, 0, 0), r.font = n.width / 3.8 + "pt open_sanssemibold, sans-serif"
              }, s = new Image, s.src = APPCFG.PIN_CFG.custom.iconPath2, o = new Image, o.src = APPCFG.PIN_CFG.custom.iconPath3
          },
          getSymbol: function(e, r, i, u) {
              var a = null;
              e = e && typeof e == "string" ? e.toLowerCase() : "r", i || (i = "normal");
              if ($("body").hasClass("side-panel")) {
                  e != "r" && e != "g" && e != "b" && e != "p" && (e = APPCFG.PIN_DEFAULT_CFG);
                  var f = this.getCustomColor(e || APPCFG.PIN_DEFAULT_CFG, i),
                      l = document.createElement("canvas");
                  l.width = 77, l.height = 120;
                  var c = l.getContext("2d");
                  c.font = l.width / 3 + "pt pt open_sanssemibold, sans-serif", c.drawImage(n, 0, 0);
                  var h = c.getImageData(0, 0, 77, 120);
                  for (var p = 0; p < h.data.length; p += 4) h.data[p] = this.hexToRgb(f).r, h.data[p + 1] = this.hexToRgb(f).g, h.data[p + 2] = this.hexToRgb(f).b;
                  c.putImageData(h, 0, 0), i != "selected" ? c.drawImage(s, 0, 0) : c.drawImage(o, 0, 0);
                  var d = r;
                  c.textAlign = "center", c.fillStyle = "white", r < 10 ? c.fillText(d, l.width / 2.1, l.height / 2.3) : c.fillText(d, l.width / 2, l.height / 2.3), a = new t(l.toDataURL(), 31, 49), a.setOffset(APPCFG.ICON_CUSTOM_CFG.normal.offsetX, APPCFG.ICON_CUSTOM_CFG.normal.offsetY)
              } else {
                  var v = APPCFG.ICON_CFG[i || "normal"],
                      m = !u && APPCFG.USE_STATIC_ICON && APPCFG.USE_STATIC_ICON.enabled;
                  m ? a = new t(APPCFG.USE_STATIC_ICON.url, APPCFG.USE_STATIC_ICON.width || v.width, APPCFG.USE_STATIC_ICON.height || v.height) : a = new t(this.getSymbolUrl(e, r), v.width, v.height), (!m || !APPCFG.USE_STATIC_ICON.width || !APPCFG.USE_STATIC_ICON.height) && a.setOffset(v.offsetX, v.offsetY)
              }
              return a
          },
          hexToRgb: function(e) {
              var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
              e = e.replace(t, function(e, t, n, r) {
                  return t + t + n + n + r + r
              });
              var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return n ? {
                  r: parseInt(n[1], 16),
                  g: parseInt(n[2], 16),
                  b: parseInt(n[3], 16)
              } : null
          },
          getCustomColor: function(e, t) {
              t || (t = "selected");
              if (e == "r" || e == "R") return t == "selected" ? APPCFG.ICON_CUSTOM_SELECTED_COLOR.r : APPCFG.ICON_CUSTOM_COLORS.r;
              if (e == "b" || e == "B") return t == "selected" ? APPCFG.ICON_CUSTOM_SELECTED_COLOR.b : APPCFG.ICON_CUSTOM_COLORS.b;
              if (e == "g" || e == "G") return t == "selected" ? APPCFG.ICON_CUSTOM_SELECTED_COLOR.g : APPCFG.ICON_CUSTOM_COLORS.g;
              if (e == "p" || e == "P") return t == "selected" ? APPCFG.ICON_CUSTOM_SELECTED_COLOR.p : APPCFG.ICON_CUSTOM_COLORS.p;
              return
          },
          getSymbolMobileClip: function() {
              return APPCFG.ICON_CFG.normal.clipRules
          },
          isModernLayout: function() {
              return $("body").hasClass("modern-layout")
          },
          isPanelsLayout: function() {
              return $("body").hasClass("side-panel")
          }
      }
  }), define("storymaps/maptour/core/TourPointAttributes", ["storymaps/maptour/core/WebApplicationData", "dojo/_base/lang", "storymaps/maptour/core/MapTourHelper"], function(e, t, n) {
      var r = null;
      return function(s, o, u, a) {
          function d(e) {
              var t = app.data.getSourceLayer();
              return t.credential && t.credential.token ? e + "?token=" + t.credential.token : e
          }
          var f = t.clone(s.attributes),
              l = s,
              c = o,
              h = u,
              p = !0;
          if (!r || a && !r.allFieldsFound()) r = app.data.electFields(f, c != null);
          f && r && (this[r.getIDField()] = f[r.getIDField()]), this.getID = function() {
              return f && r ? f[r.getIDField()] : null
          }, this.getName = function() {
              if (!f || !r) return null;
              var t = e.getFieldsOverride(),
                  i = t ? t.getNameField() : r.getNameField();
              return n.decodeText(f[i]) || ""
          }, this.getDescription = function() {
              if (!f || !r) return null;
              var t = e.getFieldsOverride(),
                  i = t ? t.getDescriptionField() : r.getDescriptionField();
              return n.decodeText(f[i]) || ""
          }, this.getColor = function() {
              if (!f || !r) return null;
              var t = e.getFieldsOverride(),
                  n = t ? t.getIconColorField() : r.getIconColorField();
              return f[n] && app.data.getAppItem().created > APPCFG.HTML_SANITIZER_DATE && (f[n] = app.sanitizer.sanitize(f[n])), f[n] || ""
          }, this.getURL = function() {
              if (!f || !r) return;
              if (c) return c;
              var t = e.getFieldsOverride(),
                  i = t ? t.getURLField() ? t.getURLField() : r.getURLField() : r.getURLField();
              return app.data.getAppItem().created > APPCFG.HTML_SANITIZER_DATE && (f[i] = app.sanitizer.sanitize(f[i])), d(f[i]) || n.getNotFoundMedia()
          }, this.setURL = function(t) {
              if (c) c = t;
              else {
                  var n = e.getFieldsOverride(),
                      i = n ? n.getURLField() ? n.getURLField() : r.getURLField() : r.getURLField();
                  f[i] = t
              }
          }, this.getThumbURL = function() {
              if (!f || !r) return;
              if (h) return h;
              var t = e.getFieldsOverride(),
                  i = t ? t.getThumbField() ? t.getThumbField() : r.getThumbField() : r.getThumbField();
              return app.data.getAppItem().created > APPCFG.HTML_SANITIZER_DATE && (f[i] = app.sanitizer.sanitize(f[i])), d(f[i]) || n.getNotFoundMedia()
          }, this.setThumbURL = function(t) {
              if (h) h = t;
              else {
                  var n = e.getFieldsOverride(),
                      i = n ? n.getThumbField() ? n.getThumbField() : r.getThumbField() : r.getThumbField();
                  f[i] = t
              }
          }, this.isVideo = function() {
              if (!f || !r) return null;
              var e = f[r.getIsVideoField()];
              return e === !0 || ("" + e).toLowerCase() == "true"
          }, this.setIsVideo = function(e) {
              if (!f || !r) return null;
              if (!r.getIsVideoField()) return;
              f[r.getIsVideoField()] = "" + e
          }, this.getOriginalGraphic = function() {
              return l
          }, this.getIDField = function() {
              return r.getIDField()
          }, this.updateNameAndDescription = function(t, n) {
              var i = e.getFieldsOverride(),
                  s = i ? i.getNameField() : r.getNameField(),
                  o = i ? i.getDescriptionField() : r.getDescriptionField();
              f[s] = t, f[o] = n
          }, this.setColor = function(t) {
              var n = e.getFieldsOverride(),
                  i = n ? n.getIconColorField() : r.getIconColorField();
              f[i] = t
          }, this.hasBeenUpdated = function() {
              var t = e.getFieldsOverride(),
                  n = t ? t.getNameField() : r.getNameField(),
                  i = t ? t.getDescriptionField() : r.getDescriptionField(),
                  s = t ? t.getIconColorField() : r.getIconColorField(),
                  o = t ? t.getURLField() : r.getURLField(),
                  u = t ? t.getThumbField() : r.getThumbField(),
                  a = r.getIsVideoField(),
                  c = f[a] != l.attributes[a];
              return f[n] != l.attributes[n] || f[i] != l.attributes[i] || f[s] != l.attributes[s] || app.data.sourceIsNotFSAttachments() && f[o] != l.attributes[o] || f[u] != l.attributes[u] || c
          }, this.commitUpdate = function() {
              var t = e.getFieldsOverride(),
                  n = t ? t.getNameField() : r.getNameField(),
                  i = t ? t.getDescriptionField() : r.getDescriptionField(),
                  s = t ? t.getIconColorField() : r.getIconColorField(),
                  o = t ? t.getURLField() : r.getURLField(),
                  u = t ? t.getThumbField() : r.getThumbField(),
                  a = r.getIsVideoField();
              l.attributes[n] = f[n], l.attributes[i] = f[i], l.attributes[s] = f[s], a && (l.attributes[a] = f[a]), app.data.sourceIsNotFSAttachments() && (l.attributes[o] = f[o], l.attributes[u] = f[u])
          }, this.restoreOriginal = function() {
              f = t.clone(l.attributes)
          }, this.getFieldsConfig = function() {
              return r
          }, this.getTourVisibility = function() {
              return p
          }, this.setTourVisibility = function(e) {
              p = e
          }
      }
  }), define("storymaps/maptour/builder/FeatureServiceManager", ["esri/request", "dojo/_base/lang"], function(e, t) {
      return {
          restoreFS: function() {
              $.each(app.data.getTourPoints(!0), function(e, t) {
                  t.hasBeenUpdated() && !app.data.hasBeenAdded(t) && t.restoreOriginal()
              })
          },
          saveFS: function(n, r) {
              var i = app.data.getAddedPoints(),
                  s = [],
                  o = [],
                  u = app.data.getDroppedPointsGraphics();
              $.each(app.data.getTourPoints(!0), function(e, t) {
                  t.hasBeenUpdated() && (s.push(t), o.push(t.getUpdatedFeature()))
              });
              var a = t.hitch(this, function() {
                  this.fsApplyEdits(app.data.getSourceLayer(), i, o, u, function(e, t, i) {
                      if (!e || !t || !i) {
                          r();
                          return
                      }
                      var o = !1,
                          u = [].concat(e).concat(t).concat(i);
                      $.each(u, function(e, t) {
                          t.success || (o = !0)
                      });
                      if (o) {
                          $.each(s, function(e, t) {
                              t.setUpdateFailed()
                          }), r();
                          return
                      }
                      $.each(s, function(e, t) {
                          t.cleanUpdateFailed()
                      }), n()
                  }, function(e) {
                      $.each(s, function(e, t) {
                          t.setUpdateFailed()
                      }), r(e)
                  })
              });
              if (i.length > 0 || o.length > 0 || u.length > 0) {
                  var f = app.data.getSourceLayer();
                  if (f && f._params && f._params.resourceInfo && f._params.resourceInfo.hasStaticData) {
                      var l = f.url.split("/");
                      l.length == 10 ? e({
                          url: l.slice(0, 5).join("/") + "/admin/services/" + l[7] + ".FeatureServer/updateDefinition",
                          content: {
                              f: "json",
                              updateDefinition: '{"hasStaticData": false}'
                          },
                          handleAs: "json"
                      }, {
                          usePost: !0
                      }).then(function() {
                          f._params.resourceInfo.hasStaticData = !1, a()
                      }, a) : a()
                  } else a()
              } else n()
          },
          fsApplyEdits: function(e, t, n, r, i, s) {
              var o = e.applyEdits(t, n, r);
              o.then(i, s)
          },
          fsAddAttachment: function(e, t, n, r, i) {
              e.addAttachment(t, document.getElementById(n), r, i)
          },
          addFSNewTourPointUsingData: function(e, t, n, r) {
              var i = this;
              this.fsApplyEdits(app.data.getSourceLayer(), [e], null, null, function(e) {
                  !e || !e[0] || !e[0].success ? r(!1) : i.uploadPictureAndThumbnailUsingData(e[0].objectId, t, n, r)
              }, function(e) {
                  r(!1, e)
              })
          },
          addTemporaryTourPointUsingForm: function(e, t, n) {
              var r = this;
              this.fsApplyEdits(app.data.getSourceLayer(), [e], null, null, function(e) {
                  !e || !e[0] || !e[0].success ? n(!1) : r.uploadPictureUsingForm(e[0].objectId, t, n)
              }, function(e) {
                  n(!1, e)
              })
          },
          saveTemporaryTourPointUsingForm: function(e, t, n, r) {
              var i = this;
              this.fsApplyEdits(app.data.getSourceLayer(), null, [t], null, function(t, s) {
                  !s || !s[0] || !s[0].success ? r(!1) : i.uploadPictureUsingForm(e, n, r)
              }, function(e) {
                  r(!1, e)
              })
          },
          changePicAndThumbUsingData: function(e, t, n, r) {
              var i = this;
              this.deleteAllAttachments(e, function(s) {
                  s ? i.uploadPictureAndThumbnailUsingData(e, t, n, r) : r(!1)
              })
          },
          changeThumbnailUsingData: function(e, t, n) {
              var r = this;
              this.deleteThumbnailAttachment(e, function(i) {
                  i ? r.uploadThumbnailUsingData(e, t, n) : n(!1)
              })
          },
          changePicAndThumbUsingForm: function(e, t, n, r) {
              var i = this;
              this.deleteAllAttachments(e, function(s) {
                  s ? i.uploadPictureAndThumbnailUsingForm(e, t, n, r) : r(!1)
              })
          },
          deleteAllAttachments: function(e, t) {
              app.data.getSourceLayer().queryAttachmentInfos(e, function(n) {
                  var r = !1;
                  $.each(n, function(n, i) {
                      if (r) return;
                      app.data.getSourceLayer().deleteAttachments(e, [i.id], function() {}, function() {
                          r = !0, t(!1)
                      })
                  }), r ? t(!1) : t(!0)
              }, function() {
                  t(!1)
              })
          },
          deleteThumbnailAttachment: function(e, t) {
              app.data.getSourceLayer().queryAttachmentInfos(e, function(n) {
                  var r = [];
                  $.each(n, function(e, t) {
                      r.push(t.id)
                  }), r = r.sort().slice(1);
                  var i = !1;
                  $.each(r, function(t, n) {
                      if (i) return;
                      app.data.getSourceLayer().deleteAttachments(e, [n], function() {}, function() {
                          i = !0
                      })
                  }), i ? t(!1) : t(!0)
              }, function() {
                  t(!1)
              })
          },
          uploadPictureAndThumbnailUsingData: function(e, t, n, r) {
              var i = this,
                  s = this.uploadFeatureAttachmentFromData(app.data.getSourceLayer().url, e, t, "picture.jpg"),
                  o = function() {
                      r(!1)
                  };
              s.then(function(t) {
                  var s = t.addAttachmentResult.objectId,
                      u = i.uploadFeatureAttachmentFromData(app.data.getSourceLayer().url, e, n, "thumbnail.jpg");
                  u.then(function(t) {
                      var n = t.addAttachmentResult.objectId;
                      r(!0, e, s, n)
                  }, o)
              }, o)
          },
          uploadThumbnailUsingData: function(e, t, n) {
              var r = this.uploadFeatureAttachmentFromData(app.data.getSourceLayer().url, e, t, "thumbnail.jpg"),
                  i = function() {
                      n(!1)
                  };
              r.then(function(t) {
                  var r = t.addAttachmentResult.objectId;
                  n(!0, e, r)
              }, i)
          },
          uploadPictureAndThumbnailUsingForm: function(e, t, n, r) {
              var i = this;
              this.uploadPictureUsingForm(e, t, function(t, s, o) {
                  t ? i.uploadPictureUsingForm(e, n, function(e, t, n) {
                      e ? r(!0, s, o, n) : r(!1)
                  }) : r(!1)
              })
          },
          uploadFeatureAttachmentFromData: function(t, n, r, i) {
              var s = new FormData;
              return s.append("attachment", this.dataURItoBlob(r), i), s.append("f", "json"), e({
                  url: t + "/" + n + "/addAttachment",
                  form: s
              }, {
                  usePost: !0
              })
          },
          dataURItoBlob: function(e) {
              var t = atob(e.split(",")[1]),
                  n = new ArrayBuffer(t.length),
                  r = new Uint8Array(n);
              for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
              try {
                  return new Blob([n], {
                      type: "image/jpeg"
                  })
              } catch (s) {
                  window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                  var o = new BlobBuilder;
                  return o.append(n), o.getBlob({
                      type: "image/jpeg"
                  })
              }
          },
          uploadPictureUsingForm: function(e, t, n) {
              this.fsAddAttachment(app.data.getSourceLayer(), e, t, function(t) {
                  !t.success || t.attachmentId == null ? n(!1) : n(!0, e, t.attachmentId)
              }, function() {
                  n(!1)
              })
          }
      }
  }), define("storymaps/utils/WebMapHelper", ["esri/request", "esri/renderers/jsonUtils", "dojo/Deferred", "dojo/_base/lang", "dojo/_base/array"], function(e, t, n, r, i) {
      return {
          findLayerTypeById: function(e, t) {
              var n = "";
              return i.forEach(e.operationalLayers, function(e) {
                  e.id == t && (n = e.type)
              }), n
          },
          saveWebmap: function(e, t) {
              var i = new n;
              this.prepareWebmapItemForCloning(e);
              var s = r.clone(e.item),
                  o = r.clone(e.itemData);
              s.tags = s.tags ? s.tags.join(",") : "", s.typeKeywords = s.typeKeywords ? s.typeKeywords.join(",") : "";
              var u = t.getPortalUser(),
                  a = this.getSharingURL(t);
              a.match("rest/") && (a = a.slice(0, a.match("rest/").index));
              var f = a + "content/users/" + u.credential.userId + (s.ownerFolder ? "/" + s.ownerFolder : "") + "/addItem",
                  l = {
                      item: s.id,
                      title: s.title,
                      tags: s.tags,
                      extent: JSON.stringify(s.extent),
                      text: JSON.stringify(o),
                      type: s.type,
                      typeKeywords: s.typeKeywords,
                      overwrite: !0,
                      thumbnailURL: s.thumbnailURL
                  };
              return this.request(f, l, !0).then(function() {
                  i.resolve()
              }, function() {
                  i.reject()
              }), i
          },
          serializeGraphicsLayerToFeatureCollection: function(e) {
              return this._serializeGraphicsLayerToFeatureCollection(e, e.visible, e.graphics)
          },
          _serializeGraphicsLayerToFeatureCollection: function(e, t, n) {
              var r = {
                  layers: [{
                      featureSet: {
                          features: [],
                          geometryType: e.geometryType
                      },
                      layerDefinition: {
                          geometryType: e.geometryType,
                          objectIdField: e.objectIdField,
                          name: e.name,
                          type: e.type,
                          typeIdField: e.typeIdField,
                          drawingInfo: {
                              renderer: {
                                  type: "simple",
                                  symbol: {
                                      type: "esriPMS",
                                      url: "http://static.arcgis.com/images/Symbols/Basic/RedSphere.png",
                                      imageData: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xTuc4+QAAB3VJREFUeF7tmPlTlEcexnve94U5mANQbgQSbgiHXHINlxpRIBpRI6wHorLERUmIisKCQWM8cqigESVQS1Kx1piNi4mW2YpbcZONrilE140RCTcy3DDAcL/zbJP8CYPDL+9Ufau7uqb7eZ7P+/a8PS8hwkcgIBAQCAgEBAICAYGAQEAgIBAQCAgEBAICAYGAQEAgIBAQCDx/AoowKXFMUhD3lQrioZaQRVRS+fxl51eBTZUTdZ41U1Rox13/0JF9csGJ05Qv4jSz/YPWohtvLmSKN5iTGGqTm1+rc6weICOBRbZs1UVnrv87T1PUeovxyNsUP9P6n5cpHtCxu24cbrmwKLdj+osWiqrVKhI0xzbmZ7m1SpJ+1pFpvE2DPvGTomOxAoNLLKGLscZYvB10cbYYjrJCb7A5mrxleOBqim+cWJRakZY0JfnD/LieI9V1MrKtwokbrAtU4Vm0A3TJnphJD4B+RxD0u0LA7w7FTE4oprOCMbklEGNrfdGf4IqnQTb4wc0MFTYibZqM7JgjO8ZdJkpMln/sKu16pHZGb7IfptIWg389DPp9kcChWODoMuDdBOhL1JgpisbUvghM7AqFbtNiaFP80RLnhbuBdqi0N+1dbUpWGde9gWpuhFi95yL7sS7BA93JAb+Fn8mh4QujgPeTgb9kAZf3Apd2A+fXQ38yHjOHozB1IAJjOSEY2RSIwVUv4dd4X9wJccGHNrJ7CYQ4GGjLeNNfM+dyvgpzQstKf3pbB2A6m97uBRE0/Ergcxr8hyqg7hrwn0vAtRIKIRX6Y2pMl0RhIj8co9nBGFrvh55l3ngU7YObng7IVnFvGS+BYUpmHziY/Ls2zgP9SX50by/G9N5w6I+ogYvpwK1SoOlHQNsGfWcd9Peqof88B/rTyzF9hAIopAByQzC0JQB9ST5oVnvhnt+LOGsprvUhxNIwa0aY7cGR6Cp7tr8+whkjawIxkRWC6YJI6N+lAKq3Qf/Tx+B77oGfaQc/8hB8w2Xwtw9Bf3kzZspXY/JIDEbfpAB2BKLvVV90Jvjgoac9vpRxE8kciTVCBMMkNirJ7k/tRHyjtxwjKV4Yp3t/6s+R4E+/DH3N6+BrS8E314Dvvg2+/Sb4hxfBf5sP/up2TF3ZhonK1zD6dhwGdwail26DzqgX8MRKiq9ZBpkSkmeYOyPM3m9Jjl+1Z9D8AgNtlAq6bZ70qsZi+q+bwV/7I/hbB8D/dAr8Axq89iz474p/G5++koHJy1sx/lkGdBc2YjA3HF0rHNHuboomuQj/5DgclIvOGCGCYRKFFuTMV7YUAD3VDQaLMfyqBcZORGPy01QKYSNm/rYV/Nd/Av9NHvgbueBrsjDzRQamKKDxT9Kgq1iLkbIUDOSHoiNcgnYHgnYZi+9ZExSbiSoMc2eE2flKcuJLa4KGRQz6/U0wlGaP0feiMH4uFpMXEjBVlYjp6lWY+SSZtim0kulYMiYuJEJXuhTDJ9UYPByOvoIwdCxfgE4bAo0Jh39xLAoVpMwIEQyTyFCQvGpLon9sJ0K3J4OBDDcMH1dj9FQsxkrjMPFRPCbOx2GyfLal9VEcxstioTulxjAFNfROJPqLl6Bnfyg6V7ugz5yBhuHwrZjBdiU5YJg7I8wOpifAKoVIW7uQ3rpOBH2b3ekVjYT2WCRG3o+mIGKgO0OrlIaebU/HYOQDNbQnojB4NJyGD0NPfjA0bwTRE6Q7hsUcWhkWN8yZqSQlWWGECAZLmJfJmbrvVSI8taK37xpbdB/wQW8xPee/8xIGjvlj8IQ/hk4G0JbWcX8MHPVDX4kveoq8ocn3xLM33NCZRcPHOGJYZIKfpQyq7JjHS6yJjcHujLHADgkpuC7h8F8zEVqXSNC2awE69lqhs8AamkO26HrbDt2H7dBVQov2NcW26CiwQtu+BWjdY4n2nZboTbfCmKcCnRyDO/YmyLPnDlHvjDH8G6zhS9/wlEnYR7X00fWrFYuWdVI0ZpuhcbcczW/R2qdAcz6t/bRov4mONeaaoYl+p22rHF0bVNAmKtBvweIXGxNcfFH8eNlC4m6wMWMusEnKpn5hyo48pj9gLe4SNG9QoGGLAk8z5XiaJUd99u8122/IpBA2K9BGg2vWWKAvRYVeLzEa7E1R422m2+MsSTem97nSYnfKyN6/mzATv7AUgqcMrUnmaFlLX3ysM0fj+t/b5lQLtK22QEfyAmiSLKFZpUJ7kBRPXKW4HqCYynWVHKSG2LkyZex1uO1mZM9lKem9Tx9jjY5iNEYo0bKMhn7ZAu0r6H5PpLXCAq0rKJClSjSGynE/QIkrQYqBPe6S2X+AJsY2Ped6iWZk6RlL0c2r5szofRsO9R5S1IfQLRCpQL1aifoYFerpsbkuTImaUJXuXIDiH6/Ys8vm3Mg8L2i20YqsO7fItKLcSXyn0kXccclVqv3MS6at9JU/Ox+ouns+SF6Z4cSupz7l8+z1ucs7LF1AQjOdxfGZzmx8Iu1TRcfnrioICAQEAgIBgYBAQCAgEBAICAQEAgIBgYBAQCAgEBAICAQEAv8H44b/6ZiGvGAAAAAASUVORK5CYII=",
                                      contentType: "image/png",
                                      width: 15,
                                      height: 15
                                  }
                              }
                          },
                          fields: [],
                          types: [],
                          capabilities: e.capabilities
                      }
                  }],
                  showLegend: !0
              };
              return $.each(e.fields, function(e, t) {
                  r.layers[0].layerDefinition.fields.push({
                      name: t.name,
                      alias: t.alias,
                      type: t.type,
                      editable: t.editable,
                      domain: null
                  })
              }), $.each(n, function(e, t) {
                  r.layers[0].featureSet.features.push({
                      attributes: t.attributes,
                      geometry: t.geometry
                  })
              }), r
          },
          request: function(t, n, i, s) {
              var o = i || !1;
              return n = n || {}, s = s || "", e({
                  url: t,
                  content: r.mixin(n, {
                      f: "json",
                      token: s
                  }),
                  callbackParamName: "callback",
                  handleAs: "json"
              }, {
                  usePost: o
              })
          },
          prepareWebmapItemForCloning: function(e) {
              var n = {
                  latestWkid: 3857,
                  wkid: 102100
              };
              app.map && app.map.spatialReference && (n = app.map.spatialReference), e.itemData.spatialReference || (e.itemData.spatialReference = n), e.itemData.authoringApp = "StoryMapTour", e.itemData.authoringAppVersion = version, parseFloat(e.itemData.version) < 2.9 && (e.itemData.version = "2.9"), delete e.itemData._ssl, i.forEach(e.itemData.baseMap.baseMapLayers, function(e) {
                  delete e.errors, delete e.layerObject, delete e.resourceInfo, delete e.firstLayer, delete e.baseMapLayer
              }), i.forEach(e.itemData.operationalLayers, function(e) {
                  delete e.errors, delete e.layerObject, delete e.resourceInfo, e.id.indexOf("maptour-layer") >= 0 && !e.layerType && (e.layerType = "ArcGISFeatureLayer"), e.featureCollection && e.featureCollection.layers && i.forEach(e.featureCollection.layers, function(e) {
                      delete e.layerObject
                  }), e.featureCollection && e.featureCollection.featureSet && e.featureCollection.featureSet.features && i.forEach(e.featureCollection.featureSet.features, function(e) {
                      delete e._shape, delete e._graphicsLayer
                  }), e.type == "CSV" && e.featureCollection && delete e.featureCollection, i.forEach(e.layers, function(e) {
                      delete e.drawingInfo, e.layerDefinition && e.layerDefinition.drawingInfo && e.layerDefinition.drawingInfo.renderer && (e.layerDefinition.drawingInfo.renderer = t.fromJson(e.layerDefinition.drawingInfo.renderer).toJson())
                  }), e.layerDefinition && e.layerDefinition.drawingInfo && e.layerDefinition.drawingInfo.renderer && (e.layerDefinition.drawingInfo.renderer = t.fromJson(e.layerDefinition.drawingInfo.renderer).toJson())
              })
          },
          getSharingURL: function(e) {
              var t = e.portalUrl;
              return t.match("/sharing/rest/content/$") ? t = t.split("/").slice(0, -2).join("/") + "/" : t.match("/sharing/rest/content$") ? t = t.split("/").slice(0, -1).join("/") + "/" : t.match("/sharing/rest$") && (t += "/"), t
          }
      }
  }), define("storymaps/maptour/core/TourData", ["storymaps/maptour/core/WebApplicationData", "storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/FieldConfig", "storymaps/maptour/builder/FeatureServiceManager", "storymaps/utils/Helper", "storymaps/maptour/core/MapTourHelper", "storymaps/utils/WebMapHelper", "esri/layers/FeatureLayer", "esri/graphic", "esri/geometry/Point", "dojo/topic"], function(e, t, n, r, i, s, o, u, a, f, l) {
      return function() {
          function L(n, r) {
              var i = new a(n, null, r),
                  s = app.data.getSourceLayer()._nextId;
              i.attributes[h.getFieldsConfig().getIDField()] = s;
              var o = new a(i.geometry, null, new t(i)),
                  u = {
                      id: s,
                      visible: !0
                  };
              y.push(o), app.data.getTourLayer().add(o), E.push(o.attributes.getID()), b = b.concat([u]), e.setTourPointOrder(b), app.data.getSourceLayer()._nextId++
          }

          function A(e, t, n, r) {
              var i = app.data.getSourceLayer().url + "/" + e + "/attachments/" + t,
                  s = app.data.getSourceLayer().url + "/" + e + "/attachments/" + n,
                  o = h.getCurrentAttributes() || h.getIntroData().attributes;
              if (!o) {
                  r(!1);
                  return
              }
              var u = app.data.getSourceLayer();
              !h.isFSWithURLFields() && u.credential && u.credential.token && (i += "?token=" + u.credential.token, s += "?token=" + u.credential.token), o.setURL(i), o.setThumbURL(s);
              if (h.isFSWithURLFields()) {
                  var a = h.getFieldsConfig(),
                      f = h.getFieldsConfig(!0),
                      c = h.getCurrentGraphic() || h.getIntroData(),
                      p = c.getUpdatedFeature();
                  p.attributes[a.getURLField() || f.getURLField()] = i, p.attributes[a.getThumbField() || f.getThumbField()] = s, D(p, function() {
                      r(!0), l.publish("CORE_UPDATE_UI", {
                          editFirstRecord: !h.getCurrentAttributes()
                      })
                  }, function() {
                      r(!1)
                  })
              } else r(!0), l.publish("CORE_UPDATE_UI", {
                  editFirstRecord: !h.getCurrentAttributes()
              })
          }

          function O(e, t, n) {
              var r = app.data.getSourceLayer().url + "/" + e + "/attachments/" + t,
                  i = h.getCurrentAttributes() || h.getIntroData().attributes;
              if (!i) {
                  n(!1);
                  return
              }
              var s = app.data.getSourceLayer();
              !h.isFSWithURLFields() && s.credential && s.credential.token && (r += "?token=" + s.credential.token), i.setThumbURL(r);
              if (h.isFSWithURLFields()) {
                  var o = h.getFieldsConfig(),
                      u = h.getFieldsConfig(!0),
                      a = h.getCurrentGraphic() || h.getIntroData(),
                      f = a.getUpdatedFeature();
                  f.attributes[o.getThumbField() || u.getThumbField()] = r, D(f, function() {
                      n(!0), l.publish("CORE_UPDATE_UI", {
                          editFirstRecord: !h.getCurrentAttributes()
                      })
                  }, function() {
                      n(!1)
                  })
              } else n(!0), l.publish("CORE_UPDATE_UI", {
                  editFirstRecord: !h.getCurrentAttributes()
              })
          }

          function M(e, n, r, i, s, o) {
              var u = h.getFieldsConfig(),
                  f = h.getFieldsConfig(!0),
                  l = app.data.getSourceLayer().url + "/" + e + "/attachments/" + r,
                  c = app.data.getSourceLayer().url + "/" + e + "/attachments/" + i;
              n.attributes[u.getIDField()] = e;
              if (h.isFSWithURLFields()) n.attributes[u.getURLField() || f.getURLField()] = l, n.attributes[u.getThumbField() || f.getThumbField()] = c, D(new a(n.geometry, null, n.attributes), function() {
                  n.attributes = new t(n), _(e, n, s)
              }, o);
              else {
                  var p = app.data.getSourceLayer();
                  p.credential && p.credential.token && (l += "?token=" + p.credential.token, c += "?token=" + p.credential.token), n.attributes = new t(n, l, c), _(e, n, s)
              }
          }

          function _(t, n, r) {
              y.push(n);
              var i = {
                  id: t,
                  visible: !0
              };
              app.data.getTourLayer().add(n), e.setTourPointOrder(b.concat(i)), j(H()), app.data.setCurrentPointByGraphic(n), l.publish("BUILDER_INCREMENT_COUNTER", 1), l.publish("CORE_UPDATE_UI"), r()
          }

          function D(e, t, n) {
              r.fsApplyEdits(app.data.getSourceLayer(), [], [e], [], t, n)
          }

          function P() {
              var e = [];
              return $.each(y, function(t, n) {
                  e.push({
                      id: n.attributes.getID(),
                      index: t,
                      order: t,
                      visible: !0
                  })
              }), e = e.sort(function(e, t) {
                  return e.id - t.id
              }), e
          }

          function H() {
              var t = e.getTourPointOrder();
              return B(t)
          }

          function B(e) {
              var t = [];
              return $.each(y, function(n, r) {
                  var i = r.attributes.getID(),
                      s = -1;
                  $.each(e, function(e, t) {
                      if (t.id == i) return s = e, !0
                  }), s > -1 && t.push({
                      id: i,
                      index: n,
                      order: s,
                      visible: e[s].visible
                  })
              }), t = t.sort(function(e, t) {
                  return e.order - t.order
              }), t
          }

          function j(t) {
              b = t, w = [], $.each(b, function(e, t) {
                  y[t.index].attributes.setTourVisibility(t.visible), w.push(y[t.index])
              }), e.setTourPointOrder(b)
          }

          function F(e, t) {
              for (var n = 0; n < t.length; n++)
                  for (var r in e)
                      if (r.toLowerCase().trim() == t[n].toLowerCase().trim()) return r;
              return ""
          }

          function I(e, t) {
              for (var n = 0; n < t.length; n++)
                  for (var r = 0; r < e.length; r++)
                      if (e[r].name.toLowerCase().trim() == t[n].toLowerCase().trim()) return e[r].name;
              return ""
          }

          function q(e, t) {
              for (var n = 0; n < t.length; n++)
                  for (var r = 0; r < e.length; r++)
                      if (e[r].toLowerCase().trim() == t[n].toLowerCase().trim()) return e[r];
              return ""
          }
          var h = this,
              p = null,
              d = null,
              v = null,
              m = null,
              g = null,
              y = null,
              b = null,
              w = null,
              E = [],
              S = [],
              x = null,
              T = -1,
              N = null,
              C = !1,
              k = !1;
          this.initialExtentHasBeenEdited = !1, this.getWebMapItem = function() {
              return p
          }, this.setWebMapItem = function(e) {
              p = e
          }, this.getAppItem = function() {
              return d || {}
          }, this.setAppItem = function(e) {
              d = e
          }, this.getAppProxies = function() {
              return v
          }, this.setAppProxies = function(e) {
              v = e
          }, this.getSourceLayer = function() {
              return m
          }, this.setSourceLayer = function(e) {
              m = e
          }, this.getFSSourceLayerItemId = function() {
              var e = null;
              return this.sourceIsFS() ? ($.each(p.itemData.operationalLayers, function(t, n) {
                  n.id == m.id && (e = n.itemId)
              }), e) : e
          }, this.getTourLayer = function() {
              return g
          }, this.setTourLayer = function(e) {
              g = e
          }, this.getTourPoints = function(e) {
              return e ? this.getIntroData() ? [this.getIntroData()].concat(w) : w : $.grep(w, function(e) {
                  return e.attributes.getTourVisibility()
              })
          }, this.getOrder = function() {
              return b
          }, this.getAllFeatures = function() {
              var e = $.grep(y, function(e) {
                  var t = $.grep(S, function(t) {
                      return t.attributes.getID() == e.attributes.getID()
                  });
                  return w.indexOf(e) == -1 && !t.length
              });
              return $.each(e, function(e, t) {
                  t.attributes.setTourVisibility(!1)
              }), e.length && e[0] == N ? (e = e.slice(1), [N].concat(w).concat(e)) : w.concat(e)
          }, this.setTourPoints = function(t) {
              y = t, !e.getTourPointOrder() || this.sourceIsNotEditable() ? j(P()) : j(H())
          }, this.resetPointsOrderAndHidden = function() {
              j(P())
          }, this.getCurrentGraphic = function() {
              return x
          }, this.getCurrentIndex = function() {
              return T
          }, this.getCurrentAttributes = function() {
              return x ? x.attributes : null
          }, this.getCurrentId = function() {
              return x ? x.attributes.getID() : null
          }, this.setCurrentPointByGraphic = function(e) {
              var t = $.inArray(e, this.getTourPoints(!1));
              l.publish("maptour-point-change-before", T, t), x = e, T = t
          }, this.setCurrentPointByIndex = function(e) {
              l.publish("maptour-point-change-before", T, e), x = this.getTourPoints(!1)[e], T = e
          }, this.setIntroData = function(e) {
              N = e
          }, this.getIntroData = function() {
              return N
          }, this.hasIntroRecord = function() {
              return N != null
          }, this.setIsEditingFirstRecord = function(e) {
              C = e
          }, this.isEditingFirstRecord = function() {
              return C
          }, this.setFirstPointAsIntroRecord = function() {
              var e = this.getTourPoints(!0)[0];
              this.setIntroData(e), w = w.slice(1)
          }, this.restoreIntroRecordAsPoint = function() {
              w.splice(0, null, this.getIntroData()), this.setIntroData(null)
          }, this.updateIntroRecord = function(e, t) {
              N.attributes.updateNameAndDescription(e, t)
          }, this.setMaxAllowedFeatureReached = function(e) {
              k = e
          }, this.getMaxAllowedFeatureReached = function() {
              return k
          }, this.getFeatureIDField = function() {
              return y && y[0] ? y[0].attributes.getIDField() : this.sourceIsFS() ? app.data.getSourceLayer().objectIdField : this.sourceIsWebmap() ? app.data.getSourceLayer().objectIdField || "__OBJECTID" : null
          }, this.getNbPoints = function() {
              return this.getTourPoints(!1).length
          }, this.sourceIsFS = function() {
              return m instanceof u && m.url != null && !m.id.match(/^csv_/)
          }, this.sourceIsWebmap = function() {
              return m instanceof u && (m.url == null || m.updating === !1 && m.id.match(/^csv_/))
          }, this.sourceIsNotFSAttachments = function() {
              return this.sourceIsWebmap() || this.sourceIsFS() && !m.hasAttachments
          }, this.sourceIsNotEditable = function() {
              return m instanceof u && /^csv_/.test(m.id) && o.findLayerTypeById(app.data.getWebMapItem().itemData, m.id) == "CSV"
          }, this.sourceIsEditable = function() {
              return !this.sourceIsNotEditable()
          }, this.hasBeenAdded = function(e) {
              return E.indexOf(e.attributes.getID()) != -1
          }, this.pointsAdded = function() {
              return this.getAddedPoints().length !== 0
          }, this.getAddedPoints = function() {
              var e = [];
              return $.each(y, function(t, n) {
                  E.indexOf(n.attributes.getID()) != -1 && e.push(n.attributes.getOriginalGraphic())
              }), e
          }, this.getDroppedPoints = function() {
              return S
          }, this.getDroppedPointsGraphics = function() {
              var e = [];
              return $.each(this.getDroppedPoints(), function(t, n) {
                  e.push(n.attributes.getOriginalGraphic())
              }), e
          }, this.userIsAppOwner = function() {
              var e = app.portal ? app.portal.getPortalUser() : null;
              return e && e.username == this.getAppItem().owner || i.getPortalUser() != null && i.getPortalUser() == this.getAppItem().owner || e && e.privileges && $.inArray("portal:admin:updateItems", e.privileges) > -1 || this.getAppItem().itemControl == "admin" || this.getAppItem().itemControl == "update"
          }, this.checkUserItemPrivileges = function() {
              var e = app.portal ? app.portal.getPortalUser() : null;
              return e && !e.orgId && !e.privileges || e && e.privileges && $.inArray("portal:user:createItem", e.privileges) > -1
          }, this.userIsOrgaPublisher = function() {
              var e = app.portal ? app.portal.getPortalUser() : null;
              return !e || !e.orgId ? !1 : $.inArray("portal:publisher:publishFeatures", e.privileges) != -1 && $.inArray("portal:user:createItem", e.privileges) != -1 ? !0 : !1
          }, this.isOrga = function() {
              return !app.portal || !app.portal.getPortalUser() ? !1 : !!app.portal.getPortalUser().orgId
          }, this.addTourPointUsingData = function(e, t, n, i, s, o, u, f) {
              if (e == null || !t || !i || !s || !o) return;
              var l = this.getFieldsConfig(),
                  c = {};
              c[l.getNameField()] = t, c[l.getDescriptionField()] = n, c[l.getIconColorField()] = i, app.data.layerHasVideoField() && (c[l.getIsVideoField()] = "false");
              var h = new a(e, null, c);
              r.addFSNewTourPointUsingData(h, s, o, function(e, t, n, r) {
                  e ? M(t, h, n, r, u, f) : f(t)
              })
          }, this.addTourPointUsingAttributes = function(e, t, n, r, i, s, o, u) {
              if (e == null || !t || !r || !i || !s) return;
              var a = this.getFieldsConfig(),
                  f = {};
              f[a.getNameField()] = t, f[a.getDescriptionField()] = n, f[a.getIconColorField()] = r, f[a.getURLField()] = i, f[a.getThumbField()] = s, app.data.layerHasVideoField() && (f[a.getIsVideoField()] = "" + o), L(e, f), j(H()), app.data.setCurrentPointByIndex(this.getTourPoints(!1).length - 1), l.publish("BUILDER_INCREMENT_COUNTER", 1), l.publish("CORE_UPDATE_UI"), u()
          }, this.importTourPoints = function(e) {
              var t = this.getTourPoints(!1).length;
              $.each(e.featureSet.features, function(e, t) {
                  L(new f(t.geometry), t.attributes)
              }), j(H()), app.data.setCurrentPointByIndex(t), l.publish("BUILDER_INCREMENT_COUNTER", e.featureSet.features.length), l.publish("CORE_UPDATE_UI")
          }, this.addTemporaryTourPointUsingForm = function(e, t, n) {
              var i = this.getFieldsConfig(),
                  s = {};
              s[i.getNameField()] = "", s[i.getDescriptionField()] = "", s[i.getIconColorField()] = "", r.addTemporaryTourPointUsingForm(new a(new f(0, 0), null, s), e, function(e, r, i) {
                  e ? t(r, i, app.data.getSourceLayer().url + "/" + r + "/attachments/" + i) : n(r)
              })
          }, this.saveTemporaryTourPointUsingForm = function(e, t, n, i, s, o, u, f, l) {
              if (e == null || t == null || !n || !s || !u) return;
              var c = this.getFieldsConfig(),
                  h = {};
              h[c.getIDField()] = e, h[c.getNameField()] = n, h[c.getDescriptionField()] = i, h[c.getIconColorField()] = s, app.data.layerHasVideoField() && (h[c.getIsVideoField()] = "false");
              var p = new a(t, null, h);
              r.saveTemporaryTourPointUsingForm(e, p, u, function(e, t, n) {
                  e ? M(t, p, o, n, f, l) : l(t)
              })
          }, this.changeCurrentPointPicAndThumbUsingData = function(e, t, n) {
              var i = this.getCurrentAttributes() || this.getIntroData().attributes;
              if (!i) {
                  n(!1);
                  return
              }
              r.changePicAndThumbUsingData(i.getID(), e, t, function(e, t, r, i) {
                  e ? A(t, r, i, n) : n(!1)
              })
          }, this.changeCurrentPointThumbnailUsingData = function(e, t) {
              var n = this.getCurrentAttributes() || this.getIntroData().attributes;
              if (!n) {
                  t(!1);
                  return
              }
              r.changeThumbnailUsingData(n.getID(), e, function(e, n, r) {
                  e ? O(n, r, t) : t(!1)
              })
          }, this.changeCurrentPointPicAndThumbUsingForm = function(e, t, n) {
              var i = this.getCurrentAttributes() || this.getIntroData().attributes;
              if (!i) {
                  n(!1);
                  return
              }
              r.changePicAndThumbUsingForm(i.getID(), e, t, function(e, t, r, i) {
                  e ? A(t, r, i, n) : n(!1)
              })
          }, this.changeCurrentPointPicURL = function(e, t, n) {
              var r = h.getCurrentAttributes() || h.getIntroData().attributes;
              e == "picture" ? r.setURL(t) : r.setThumbURL(t), app.data.layerHasVideoField() && r.setIsVideo(n), l.publish("BUILDER_INCREMENT_COUNTER", 1), l.publish("CORE_UPDATE_UI", {
                  editFirstRecord: !h.getCurrentAttributes()
              })
          }, this.updateTourPointsOrder = function(e) {
              var t = [],
                  n = $.grep(e, function(e) {
                      var n = $.grep(b, function(t) {
                          return t.id == e.id
                      });
                      return t.push(e), e.visible && !n.length
                  });
              $.each(n, function(e, t) {
                  var n = $.grep(y, function(e) {
                      return e.attributes.getID() == t.id
                  });
                  n && app.data.getTourLayer().add(n[0])
              }), j(B(t)), this.getTourPoints().length === 0 && app.data.setCurrentPointByIndex(-1), l.publish("CORE_UPDATE_UI")
          }, this.dropTourPoints = function(e) {
              w = $.grep(w, function(t) {
                  return e.indexOf(t.attributes.getID()) > -1 ? (e.splice(e.indexOf(t.attributes.getID()), 1), S.push(t), !1) : !0
              }), $.each(e, function(e, t) {
                  $.each(y, function(e, n) {
                      t == n.attributes.getID() && S.push(n)
                  })
              })
          }, this.discardChanges = function() {
              w = $.grep(w, function(e) {
                  return E.indexOf(e.attributes.getID()) == -1
              }), j(H())
          }, this.updateAfterSave = function() {
              e.updateAfterSave(), y = $.grep(y, function(e) {
                  return S.indexOf(e) == -1
              }), S = [], E = [], j(H()), app.data.initialExtentHasBeenEdited = !1
          }, this.updateCurrentTourPoint = function(e, t) {
              x.attributes.updateNameAndDescription(e, t), l.publish("CORE_SELECTED_TOURPOINT_UPDATE", {
                  index: T,
                  name: s.decodeText(e),
                  description: s.decodeText(t),
                  color: x.attributes.getColor()
              })
          }, this.updateCurrentTourPointColor = function(e) {
              x.attributes.setColor(e), l.publish("CORE_SELECTED_TOURPOINT_UPDATE", {
                  index: T,
                  color: x.attributes.getColor()
              })
          }, this.detectDataAddedOutsideOfBuilder = function() {
              var t = 0,
                  n = e.getTourPointOrder() || [];
              return $.each(y, function(e, r) {
                  var i = r.attributes.getID(),
                      s = -1;
                  $.each(n, function(e, t) {
                      if (t.id == i) return s = e, !0
                  }), s == -1 && t++
              }), t
          }, this.electFields = function(e) {
              return console.log("TourData - electFields"), new n({
                  fieldID: F(e, APPCFG.FIELDS_CANDIDATE.objectid) || app.data.getSourceLayer().objectIdField,
                  fieldName: F(e, APPCFG.FIELDS_CANDIDATE.name),
                  fieldDescription: F(e, APPCFG.FIELDS_CANDIDATE.description),
                  fieldURL: F(e, APPCFG.FIELDS_CANDIDATE.pic_url),
                  fieldThumb: F(e, APPCFG.FIELDS_CANDIDATE.thumb_url),
                  fieldIconColor: F(e, APPCFG.FIELDS_CANDIDATE.color),
                  fieldIsVideo: F(e, APPCFG.FIELDS_CANDIDATE.is_video)
              })
          }, this.electFieldsFromFieldsList = function(e) {
              return console.log("TourData - electFields"), new n({
                  fieldID: I(e, APPCFG.FIELDS_CANDIDATE.objectid) || app.data.getSourceLayer().objectIdField,
                  fieldName: I(e, APPCFG.FIELDS_CANDIDATE.name),
                  fieldDescription: I(e, APPCFG.FIELDS_CANDIDATE.description),
                  fieldURL: I(e, APPCFG.FIELDS_CANDIDATE.pic_url),
                  fieldThumb: I(e, APPCFG.FIELDS_CANDIDATE.thumb_url),
                  fieldIconColor: I(e, APPCFG.FIELDS_CANDIDATE.color),
                  fieldIsVideo: I(e, APPCFG.FIELDS_CANDIDATE.is_video)
              })
          }, this.getFieldsConfig = function(t) {
              if (!t && e.getFieldsOverride()) return e.getFieldsOverride();
              var n = this.getTourPoints()[0];
              if (n && n.attributes) return n.attributes.getFieldsConfig();
              if (app.data.getSourceLayer().templates[0]) return this.electFields(app.data.getSourceLayer().templates[0].prototype.attributes);
              if (app.data.getSourceLayer().fields) return this.electFieldsFromFieldsList(app.data.getSourceLayer().fields)
          }, this.isFSWithURLFields = function() {
              var e = app.data.getSourceLayer().fields;
              return I(e, APPCFG.FIELDS_CANDIDATE.pic_url) !== "" && I(e, APPCFG.FIELDS_CANDIDATE.thumb_url) !== ""
          }, this.lookForMatchingFields = function(e) {
              var t = {
                  fieldName: q(e, APPCFG.FIELDS_CANDIDATE.name),
                  fieldDescription: q(e, APPCFG.FIELDS_CANDIDATE.description),
                  fieldURL: q(e, APPCFG.FIELDS_CANDIDATE.pic_url),
                  fieldThumb: q(e, APPCFG.FIELDS_CANDIDATE.thumb_url),
                  fieldVideo: q(e, APPCFG.FIELDS_CANDIDATE.is_video)
              };
              return {
                  allFieldsFound: t.fieldName && t.fieldDescription && t.fieldURL && t.fieldThumb,
                  fields: t
              }
          }, this.layerHasVideoField = function() {
              if (!app.data.getSourceLayer()) return;
              var e = app.data.getSourceLayer().fields;
              return I(e, APPCFG.FIELDS_CANDIDATE.is_video) !== ""
          }, this.getWebAppData = function() {
              return e.get()
          }
      }
  }), define("storymaps/ui/inlineFieldEdit/InlineFieldEdit", ["dojo/has"], function(e) {
      return function(n, r, i) {
          function o(e, t, n) {
              if (!e || !t || !n) return;
              typeof r == "function" && r(), s = n, t.parent().parent().addClass("isEditing"), t.hide(), e.hide(), n.val(t.html()), n.show(), n.select()
          }

          function u(t) {
              if (!t || !t.get(0)) return;
              s = null, $("body").hasClass("side-panel") && $(this).parent().find(".pencilIconDiv").show();
              var n = t.get(0).value,
                  r = t.parent().find(".text_edit_label"),
                  o = t.parent().find(".text_edit_icon"),
                  u = r.parent().first();
              n === "" && (n = i18n.viewer.headerJS.editMe), !app.data.getAppItem().created || app.data.getAppItem().created > APPCFG.HTML_SANITIZER_DATE ? n = app.sanitizer.sanitize(n) : n = n.replace(/<\/?script>/g, ""), r.parent().parent().removeClass("isEditing"), r.html(n), r.show(), r.find("a:not([target])").attr("target", "_blank"), t.hide(), o.css("display", "inline-block"), e("ios") && document.activeElement.blur(), typeof i == "function" && i(u, n)
          }
          var s = null;
          $(n + " .text_edit_icon").click(function() {
              o($(this), $(this).parent().find(".text_edit_label"), $(this).parent().find(".text_edit_input"))
          }), $(n + " .text_edit_label").click(function() {
              $("body").hasClass("side-panel") && $(this).parent().find(".pencilIconDiv").hide(), o($(this).parent().find(".text_edit_icon"), $(this), $(this).parent().find(".text_edit_input"))
          }), $("body").hasClass("side-panel") && $(n + " .fa-pencil").click(function() {
              o($(this).parent().parent().find(".pencilIconDiv"), $(this).parent().parent().find(".text_edit_label"), $(this).parent().parent().find(".text_edit_input"))
          }), $(n + " .text_edit_input").blur(function() {
              $("body").hasClass("side-panel") && $(this).parent().find(".pencilIconDiv").show(), u($(this))
          }), e("ios") && $("body").bind("touchstart", function(e) {
              s && e.target != s.get(0) && u(s)
          }), $(n + " .text_edit_input").keypress(function(e) {
              var t = e.keyCode ? e.keyCode : e.which;
              t == "13" && u($(this))
          })
      }
  }), define("storymaps/ui/header/Header", ["storymaps/ui/inlineFieldEdit/InlineFieldEdit", "storymaps/utils/Helper", "dojo/has", "dojo/topic", "esri/urlUtils"], function(e, t, n, r, i) {
      return function(o, u) {
          function l() {
              var e = d(document.location.href);
              if ($(this).hasClass("disabled")) return;
              window.open("http://www.facebook.com/sharer/sharer.php?u=" + e, "", "toolbar=0,status=0,width=626,height=436")
          }

          function c() {
              var e = "text=" + encodeURIComponent($(o + " #headerMobile .title").text()) + "&url=" + d(document.location.href) + "&related=EsriStoryMaps" + "&hashtags=StoryMaps";
              if ($(this).hasClass("disabled")) return;
              window.open("https://twitter.com/intent/tweet?" + e, "", "toolbar=0,status=0,width=626,height=436")
          }

          function h() {
              if ($(this).hasClass("disabled")) return;
              $(o).find(".share_bitly").popover({
                  trigger: "manual",
                  placement: "left",
                  html: !0,
                  content: '<div style="width:150px; min-height: 60px; text-align: center"> <div id="bitlyLoad" style="position:absolute; top: 16px; left: 24px; width:130px; text-align:center;">  <img src="resources/icons/loader-upload.gif" alt="Loading" /> </div> <input id="bitlyInput" type="text" value="" style="display:none; width: 130px; margin-bottom: 0px;"/> <div style="font-size: 0.8em; margin-top: 2px; margin-bottom: -1px; position: absolute; top: 40px; width: 100%; left: 0px; text-align: center;">  <input id="bitlyStartIndex" type="checkbox" style="width: 10px; vertical-align: -2px;" ' + f + "/> " + i18n.viewer.desktopHTML.bitlyStartIndex + " </div>" + ' <div class="autoplay-container" style="font-size: 0.8em; margin-top: 2px; margin-bottom: -1px; position: absolute; top: 57px; width: 100%; left: 0px; text-align: center;">' + '   <input type="checkbox" class="autoplay-checkbox" value="autoplay" style="width: 10px; vertical-align: -2px;" /> ' + i18n.viewer.desktopHTML.autoplayLabel + '  <a class="autoplay-help"><img src="resources/icons/builder-help.png" style="vertical-align: -4px;"/></a>' + " </div>" + "</div>" + "<script>" + ' $(document).on("click touchstart", function(src) { if( ! src || ! src.target || ! $(src.target).parents(".popover").length ){ $(".share_bitly").popover("hide"); $(document).off("click"); } });' + ' $("#bitlyStartIndex").change(app.requestBitly); ' + "</script>"
              }).popover("toggle"), $(o).find(".autoplay-help").popover({
                  content: "<div style='width: 150px'>" + i18n.viewer.desktopHTML.autoplayExplain1 + "<br /><br />" + i18n.viewer.desktopHTML.autoplayExplain2,
                  placement: "bottom",
                  html: !0
              }), $(o).find(".autoplay-checkbox").change(p), p()
          }

          function p() {
              var e = "https://arcg.is/prod/shorten?callback=?",
                  n = t.getUrlParams(),
                  r = app.data.getCurrentIndex() + 1,
                  i = document.location.href;
              $("#bitlyStartIndex").is(":checked") && (n.index ? i = i.replace(/index\=[0-9]+/, "index=" + r) : i = document.location.origin + document.location.pathname + (!n || $.isEmptyObject(n) ? "?" : document.location.search + "&") + "index=" + r + document.location.hash), i = d(i, !0), $(".autoplay-checkbox").is(":checked") && (i += i.match(/\?/) ? "&" : "?", i += "autoplay"), f = $("#bitlyStartIndex").is(":checked") ? "checked" : "", $.getJSON(e, {
                  format: "json",
                  apiKey: APPCFG.HEADER_SOCIAL.bitly.key,
                  login: APPCFG.HEADER_SOCIAL.bitly.login,
                  longUrl: i
              }, function(e) {
                  if (!e || !e || !e.data.url) return;
                  $("#bitlyLoad").fadeOut(), $("#bitlyInput").fadeIn(), $("#bitlyInput").val(e.data.url), $("#bitlyInput").select()
              })
          }

          function d(e, t) {
              var n = i.urlToObject(e),
                  r = n.path;
              return n.query && (delete n.query.edit, delete n.query.locale, delete n.query.folderId, delete n.query.webmap, delete n.query.autoplay, $.each(Object.keys(n.query), function(e, t) {
                  e === 0 ? r += "?" : r += "&", n.query[t] !== undefined && n.query[t] !== "" ? r += t + "=" + n.query[t] : r += t
              })), t ? r : encodeURIComponent(r)
          }

          function v(e) {
              $(o + " #headerMobile .banner").slideDown(e === !0 ? 0 : 250)
          }

          function m() {
              a || $(o + " #builderPanel").fadeOut("fast"), a = !1
          }

          function g(e, t) {
              a = !0, setTimeout(function() {
                  a && $(o + " #builderPanel").fadeIn("fast"), a = !1
              }, n("ios") || n("ie") >= 10 ? 500 : 100), setTimeout(function() {
                  r.publish("HEADER_EDITED", {
                      src: $(e).attr("class"),
                      value: t
                  }), $(o + " #headerMobile .banner ." + $(e).attr("class")).html(t)
              }, n("ios") || n("ie") >= 10 ? 700 : 0), app.builder.hideSaveConfirmation()
          }
          var a = !1,
              f = "";
          this.init = function(t, n, r, i, s, a, f, l, c, h) {
              this.setColor(i), this.setLogoInfo(s, a), t && $(o).addClass("hideDesktop"), $(o + " #headerMobile .title").html(n).find("a:not([target])").attr("target", "_blank"), $(o + " #headerMobile .subtitle").html(r).find("a:not([target])").attr("target", "_blank"), u && ($(o).addClass("isBuilder"), n = "<div class='text_edit_label'>" + (n || i18n.viewer.headerJS.editMe) + "</div>", $("body").hasClass("side-panel") ? n += "<div class='text_edit_icon pencilIconDiv'><i class='fa fa-pencil' title='" + i18n.viewer.headerJS.templateTitle + "'></i></div>" : n += "<div class='text_edit_icon'><i class='fa fa-pencil' title='" + i18n.viewer.headerJS.templateTitle + "'></i></div>", n += "<textarea rows='1' class='text_edit_input' type='text' spellcheck='true'></textarea>", r = "<span class='text_edit_label'>" + (r || i18n.viewer.headerJS.editMe) + "</span>", r += "<div class='text_edit_icon' title='" + i18n.viewer.headerJS.templateSubtitle + "'></div>", r += "<textarea rows='2' class='text_edit_input' type='text' spellcheck='true'></textarea>"), $(o + " #headerDesktop .title").html(n).find("a:not([target])").attr("target", "_blank"), $(o + " #headerDesktop .subtitle").html(r).find("a:not([target])").attr("target", "_blank"), $("body").hasClass("side-panel") && $("#headerDesktop").prepend($(".logo")), u && new e(o, m, g), !u && !r && !$("body").hasClass("side-panel") && ($(o + " #headerDesktop .title").css("margin-top", 40), $(o + " #headerDesktop .subtitle").css("height", 32).attr("tabindex", "-1")), $(window).scroll(this.hideMobileBanner), $(o + " #headerMobile .banner").fastClick(this.hideMobileBanner), $(o + " #openHeaderMobile").fastClick(v), $(".navBar span").fastClick(function() {
                  $(this).hasClass("current") || (location.hash = $(this).data("viewid"))
              }), f && ($(o + " .fa-cog, .editLabel").fastClick(this.switchToBuilder), $("#header .editLabel").fastClick(this.switchToBuilder), $(o + " .switch-builder-close").click(this.closeEditButton), $(o + " .switchBuilder").show()), v(!0), this.setTopRightLink(l, c), this.setSocial(h, !0), $(o).css("display", "block"), app.requestBitly = p
          }, this.resize = function(e) {
              if ($("body").hasClass("side-panel")) $(".textArea").width(e - $(".logo img").width() - $(".rightArea").outerWidth() - (app.data.userIsAppOwner() ? 45 : 15));
              else {
                  var t = Math.max($(o + " #headerDesktop .headerLogoImg").outerWidth() + 50, $(o + " #headerDesktop .rightArea").outerWidth() + 20);
                  $(o + " #headerDesktop .textArea").width(e - t - 15)
              }
          }, this.hideMobileBanner = function(e) {
              $(o + " #headerMobile .banner").slideUp(e === !0 ? 0 : 250), $(o + " #openHeaderMobile").css("top", "40px"), $(o + " #headerMobile").removeClass("firstDisplay")
          }, this.mobileHeaderIsInFirstState = function() {
              return $(o + " #headerMobile").hasClass("firstDisplay")
          }, this.setColor = function(e) {
              $(o).css("background-color", e), $(o).css("background-color", e), $(o + " #builderPanel").css("background-color", e), $(o + " #headerMobile").css("background-color", e), $("#openHeaderMobile").css("background-color", e)
          }, this.setLogoInfo = function(e, t) {
              if (!e || e == "NO_LOGO") $(o + " .logo img").hide();
              else {
                  if ($("body").hasClass("side-panel")) {
                      var n = new Image;
                      n.onload = function() {
                          $(".logo img").css("display") == "block" ? $(".textArea").css("left", $(".logo img").width() + 12) : $(".textArea").css("left", $(".logo").width() + 12)
                      }, n.src = e
                  }
                  $(o + " .logo img").attr("src", e), $(".scroll-layout-banner .mobile-scroll-logo").attr("src", e), t ? ($(o + " .logo img").closest("a").css("cursor", "pointer").attr("href", t).attr("tabindex", "-1"), $(".scroll-layout-banner .mobile-scroll-logo-link").css("cursor", "pointer").attr("href", t).attr("tabindex", "-1")) : $(o + " .logo img").closest("a").css("cursor", "default"), $(".scroll-layout-banner .mobile-scroll-logoLink").css("cursor", "default"), $(o + " .logo img").show()
              }
          }, this.setTopRightLink = function(e, t) {
              t ? ($(o + " .social .msLink").html(e ? '<a href="' + t + '" target="_blank" tabindex="-1">' + e + "</a>" : ""), $(".scroll-layout-banner .mobile-scroll-story-tag-link").attr("href", t).html(e || "")) : e ? ($(o + " .social .msLink").html("<span>" + e + "</a>"), $(".scroll-layout-banner .mobile-scroll-story-tag-link").html(e)) : $(o + " .social .msLink").html("")
          }, this.setTitleAndSubtitle = function(e, t) {
              $(o + " #headerMobile .title").html(e), $(o + " #headerMobile .subtitle").html(t);
              var n = u ? i18n.viewer.headerJS.editMe : "";
              $(o + " #headerDesktop .title" + (u ? " .text_edit_label" : "")).html(e || n), $(o + " #headerDesktop .subtitle" + (u ? " .text_edit_label" : "")).html(t || n)
          }, this.setSocial = function(e, t) {
              $(o + " .share_facebook").toggle(APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.facebook && (!e || e.facebook)), $(o + " .share_twitter").toggle(APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.twitter && (!e || e.twitter)), $(o + " .share_bitly").toggle(APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.bitly && APPCFG.HEADER_SOCIAL.bitly.enable && APPCFG.HEADER_SOCIAL.bitly.login && APPCFG.HEADER_SOCIAL.bitly.key && (!e || e.bitly)), t && ($(o + " .share_facebook").unbind("click"), $(o + " .share_twitter").unbind("click"), $(o + " .share_bitly").unbind("click"), $(o + " .share_facebook").fastClick(l), $(o + " .share_twitter").fastClick(c), $(o + " .share_bitly").fastClick(h), $(o).find(".shareIcon").off("keypress").keypress(function(e) {
                  if (e.which == 13) return $(this).click(), !1
              }))
          }, this.enableAutoplay = function() {
              $(o + " .shareIcon").attr("title", ""), $(o + " .shareIcon").toggleClass("disabled", !0).popover({
                  trigger: "hover",
                  content: '<div style="font-size: 12px">' + i18n.viewer.desktopHTML.tooltipAutoplayDisabled + "</div>",
                  placement: "bottom",
                  html: !0
              })
          }, this.closeEditButton = function() {
              $(".switchBuilder").hide()
          }, this.switchToBuilder = function() {
              document.location.search.match(/appid/) ? document.location = d(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search, !0) + "&edit" + document.location.hash : document.location.search.slice(-1) == "?" ? document.location = d(document.location.protocol + "//" + document.location.host + document.location.pathname, !0) + "?edit" + document.location.hash : document.location = d(document.location.protocol + "//" + document.location.host + document.location.pathname, !0) + "?edit" + document.location.hash
          }, this.initLocalization = function() {
              $(o + " #closeHeaderMobile").html(i18n.viewer.mobileHTML.hideIntro), $(o + " #openHeaderMobile").html(i18n.viewer.mobileHTML.showIntro), $(o + " #listViewLink").html(i18n.viewer.mobileHTML.navList), $(o + " #mapViewLink").html(i18n.viewer.mobileHTML.navMap), $(o + " #infoViewLink").html(i18n.viewer.mobileHTML.navInfo), $(o + " .msLink").html(i18n.viewer.desktopHTML.storymapsText), $(o + " .switchBuilder .editLabel").text(i18n.viewer.headerJS.edit), $(o + " .share_facebook").attr("title", i18n.viewer.desktopHTML.facebookTooltip), $(o + " .share_twitter").attr("title", i18n.viewer.desktopHTML.twitterTooltip), $(o + " .share_bitly").attr("title", i18n.viewer.desktopHTML.bitlyTooltip)
          }
      }
  }), define("storymaps/ui/mapCommand/MapCommand", ["dojo/has", "esri/geometry/Point", "dojo/on", "esri/symbols/PictureMarkerSymbol", "esri/layers/GraphicsLayer", "esri/graphic", "esri/config"], function(e, t, n, r, i, s, o) {
      return function(a, f, l, c) {
          function m(e) {
              if (e) $(a.container).find(".mapCommandHomeBtn").addClass("loading"), h = Date.now();
              else {
                  var t = Date.now() - h,
                      n = 0;
                  t < 450 && (n = 450 - t), setTimeout(function() {
                      $(a.container).find(".mapCommandHomeBtn").removeClass("loading"), h = 0
                  }, n)
              }
          }

          function g() {
              console.log("getDeviceLocation");
              var e = 1e4,
                  n = !1;
              setTimeout(function() {
                  n || $(a.container).find(".mapCommandLocation").addClass("loading")
              }, 300), navigator.geolocation.getCurrentPosition(function(e) {
                  n = !0, $(a.container).find(".mapCommandLocation").removeClass("loading");
                  var r = new t(e.coords.longitude, e.coords.latitude);
                  l && typeof l == "function" && l(!0, r, e);
                  if (a.spatialReference.wkid != 102100 && a.spatialReference.wkid != 4326) {
                      o.defaults.geometryService.project([r], a.spatialReference, function(e) {
                          if (!e || !e[0]) return;
                          y(e[0])
                      });
                      return
                  }
                  y(r)
              }, function(e) {
                  n = !0, b(e)
              }, {
                  enableHighAccuracy: !0,
                  maximumAge: 12e4,
                  timeout: e
              }), setTimeout(function() {
                  n || b()
              }, e)
          }

          function y(e) {
              v.clear(), v.add(new s(e, d)), setTimeout(function() {
                  $("#locateLayer_layer image").fadeOut({
                      duration: 800
                  })
              }, 1e4)
          }

          function b(e) {
              console.log("getDeviceLocationError", e), $(a.container).find(".mapCommandLocation").removeClass("loading"), l(!1, null)
          }
          var h = 0,
              p = $('<div class="esriSimpleSliderIncrementButton"><div class="mapCommandHomeBtn"></div></div>'),
              d = new r("resources/icons/mapcommand-location-marker.png", 21, 21),
              v = new i({
                  id: "locateLayer"
              });
          p.fastClick(function() {
              if (h !== 0 && $("body").hasClass("mobile-view")) return;
              f && typeof f == "function" ? f(a._params.extent) : a.setExtent(a._params.extent)
          }), $(a.container).find(".esriSimpleSlider div:nth-child(1)").after(p), n(a, "update-start", function() {
              h === 0 && m(!0)
          }), n(a, "update-end", function() {
              m(!1)
          }), this.setMobile = function(e) {
              $(".esriSimpleSlider, .mapCommandHomeBtn", a.container).toggleClass("touch", e)
          }, this.destroy = function() {
              $(a.container).find(".esriSimpleSliderIncrementButton").remove(), $(a.container).find("#mainMap_zoom_location").remove()
          }, this.startLoading = function() {
              m(!0)
          }, this.stopLoading = function() {
              m(!1)
          }, this.enableLocationButton = function(e) {
              $(".esriSimpleSlider, .mapCommandHomeBtn", a.container).toggleClass("hidden", !e)
          }, navigator && navigator.geolocation && (window.top !== window.self ? !1 : window.location.protocol.search("https") >= 0) && ($(".esriSimpleSlider", a.container).after('<div id="mainMap_zoom_location" class="esriSimpleSlider esriSimpleSliderVertical mapCommandLocation"><div><img src="resources/icons/mapcommand-location.png"></div></div>'), $("#mainMap_zoom_location div", a.container).fastClick(g), this.enableLocationButton(c), a.addLayer(v)), e("touch") && this.setMobile(!0)
      }
  }), define("storymaps/maptour/builder/MapTourBuilderHelper", ["dojo/_base/lang"], function(e) {
      return {
          getNewLayerJSON: function(e) {
              return {
                  id: "maptour-layer" + (new Date).getTime(),
                  title: "Map Tour layer",
                  visibility: !0,
                  opacity: 1,
                  layerType: "ArcGISFeatureLayer",
                  featureCollection: {
                      layers: [e],
                      showLegend: !0
                  }
              }
          },
          getFeatureCollectionTemplate: function(e) {
              var t = {
                  layerDefinition: null,
                  featureSet: {
                      features: [],
                      geometryType: "esriGeometryPoint"
                  }
              };
              return t.layerDefinition = {
                  geometryType: "esriGeometryPoint",
                  objectIdField: "__OBJECTID",
                  name: "Map-Tour-layer",
                  type: "Feature Layer",
                  typeIdField: "",
                  drawingInfo: {
                      renderer: {
                          type: "simple",
                          symbol: {
                              type: "esriPMS",
                              url: "http://static.arcgis.com/images/Symbols/Basic/RedSphere.png",
                              imageData: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xTuc4+QAAB3VJREFUeF7tmPlTlEcexnve94U5mANQbgQSbgiHXHINlxpRIBpRI6wHorLERUmIisKCQWM8cqigESVQS1Kx1piNi4mW2YpbcZONrilE140RCTcy3DDAcL/zbJP8CYPDL+9Ufau7uqb7eZ7P+/a8PS8hwkcgIBAQCAgEBAICAYGAQEAgIBAQCAgEBAICAYGAQEAgIBAQCDx/AoowKXFMUhD3lQrioZaQRVRS+fxl51eBTZUTdZ41U1Rox13/0JF9csGJ05Qv4jSz/YPWohtvLmSKN5iTGGqTm1+rc6weICOBRbZs1UVnrv87T1PUeovxyNsUP9P6n5cpHtCxu24cbrmwKLdj+osWiqrVKhI0xzbmZ7m1SpJ+1pFpvE2DPvGTomOxAoNLLKGLscZYvB10cbYYjrJCb7A5mrxleOBqim+cWJRakZY0JfnD/LieI9V1MrKtwokbrAtU4Vm0A3TJnphJD4B+RxD0u0LA7w7FTE4oprOCMbklEGNrfdGf4IqnQTb4wc0MFTYibZqM7JgjO8ZdJkpMln/sKu16pHZGb7IfptIWg389DPp9kcChWODoMuDdBOhL1JgpisbUvghM7AqFbtNiaFP80RLnhbuBdqi0N+1dbUpWGde9gWpuhFi95yL7sS7BA93JAb+Fn8mh4QujgPeTgb9kAZf3Apd2A+fXQ38yHjOHozB1IAJjOSEY2RSIwVUv4dd4X9wJccGHNrJ7CYQ4GGjLeNNfM+dyvgpzQstKf3pbB2A6m97uBRE0/Ergcxr8hyqg7hrwn0vAtRIKIRX6Y2pMl0RhIj8co9nBGFrvh55l3ngU7YObng7IVnFvGS+BYUpmHziY/Ls2zgP9SX50by/G9N5w6I+ogYvpwK1SoOlHQNsGfWcd9Peqof88B/rTyzF9hAIopAByQzC0JQB9ST5oVnvhnt+LOGsprvUhxNIwa0aY7cGR6Cp7tr8+whkjawIxkRWC6YJI6N+lAKq3Qf/Tx+B77oGfaQc/8hB8w2Xwtw9Bf3kzZspXY/JIDEbfpAB2BKLvVV90Jvjgoac9vpRxE8kciTVCBMMkNirJ7k/tRHyjtxwjKV4Yp3t/6s+R4E+/DH3N6+BrS8E314Dvvg2+/Sb4hxfBf5sP/up2TF3ZhonK1zD6dhwGdwail26DzqgX8MRKiq9ZBpkSkmeYOyPM3m9Jjl+1Z9D8AgNtlAq6bZ70qsZi+q+bwV/7I/hbB8D/dAr8Axq89iz474p/G5++koHJy1sx/lkGdBc2YjA3HF0rHNHuboomuQj/5DgclIvOGCGCYRKFFuTMV7YUAD3VDQaLMfyqBcZORGPy01QKYSNm/rYV/Nd/Av9NHvgbueBrsjDzRQamKKDxT9Kgq1iLkbIUDOSHoiNcgnYHgnYZi+9ZExSbiSoMc2eE2flKcuJLa4KGRQz6/U0wlGaP0feiMH4uFpMXEjBVlYjp6lWY+SSZtim0kulYMiYuJEJXuhTDJ9UYPByOvoIwdCxfgE4bAo0Jh39xLAoVpMwIEQyTyFCQvGpLon9sJ0K3J4OBDDcMH1dj9FQsxkrjMPFRPCbOx2GyfLal9VEcxstioTulxjAFNfROJPqLl6Bnfyg6V7ugz5yBhuHwrZjBdiU5YJg7I8wOpifAKoVIW7uQ3rpOBH2b3ekVjYT2WCRG3o+mIGKgO0OrlIaebU/HYOQDNbQnojB4NJyGD0NPfjA0bwTRE6Q7hsUcWhkWN8yZqSQlWWGECAZLmJfJmbrvVSI8taK37xpbdB/wQW8xPee/8xIGjvlj8IQ/hk4G0JbWcX8MHPVDX4kveoq8ocn3xLM33NCZRcPHOGJYZIKfpQyq7JjHS6yJjcHujLHADgkpuC7h8F8zEVqXSNC2awE69lqhs8AamkO26HrbDt2H7dBVQov2NcW26CiwQtu+BWjdY4n2nZboTbfCmKcCnRyDO/YmyLPnDlHvjDH8G6zhS9/wlEnYR7X00fWrFYuWdVI0ZpuhcbcczW/R2qdAcz6t/bRov4mONeaaoYl+p22rHF0bVNAmKtBvweIXGxNcfFH8eNlC4m6wMWMusEnKpn5hyo48pj9gLe4SNG9QoGGLAk8z5XiaJUd99u8122/IpBA2K9BGg2vWWKAvRYVeLzEa7E1R422m2+MsSTem97nSYnfKyN6/mzATv7AUgqcMrUnmaFlLX3ysM0fj+t/b5lQLtK22QEfyAmiSLKFZpUJ7kBRPXKW4HqCYynWVHKSG2LkyZex1uO1mZM9lKem9Tx9jjY5iNEYo0bKMhn7ZAu0r6H5PpLXCAq0rKJClSjSGynE/QIkrQYqBPe6S2X+AJsY2Ped6iWZk6RlL0c2r5szofRsO9R5S1IfQLRCpQL1aifoYFerpsbkuTImaUJXuXIDiH6/Ys8vm3Mg8L2i20YqsO7fItKLcSXyn0kXccclVqv3MS6at9JU/Ox+ouns+SF6Z4cSupz7l8+z1ucs7LF1AQjOdxfGZzmx8Iu1TRcfnrioICAQEAgIBgYBAQCAgEBAICAQEAgIBgYBAQCAgEBAICAQEAv8H44b/6ZiGvGAAAAAASUVORK5CYII=",
                              contentType: "image/png",
                              width: 15,
                              height: 15
                          }
                      }
                  },
                  fields: [{
                      name: "__OBJECTID",
                      alias: "__OBJECTID",
                      type: "esriFieldTypeOID",
                      editable: !1,
                      domain: null
                  }],
                  types: [],
                  capabilities: "Query"
              }, e ? t.layerDefinition.fields = [{
                  name: "__OBJECTID",
                  alias: "__OBJECTID",
                  type: "esriFieldTypeOID",
                  editable: !1,
                  domain: null
              }, {
                  name: "name",
                  type: "esriFieldTypeString",
                  alias: "Name",
                  domain: null,
                  editable: !0,
                  nullable: !0,
                  length: 254
              }, {
                  name: "description",
                  type: "esriFieldTypeString",
                  alias: "Description",
                  domain: null,
                  editable: !0,
                  nullable: !0,
                  length: 1e3
              }, {
                  name: "icon_color",
                  type: "esriFieldTypeString",
                  alias: "Icon color",
                  domain: null,
                  editable: !0,
                  nullable: !0,
                  length: 254
              }, {
                  name: "pic_url",
                  type: "esriFieldTypeString",
                  alias: "Picture URL",
                  domain: null,
                  editable: !0,
                  nullable: !0,
                  length: 254
              }, {
                  name: "thumb_url",
                  type: "esriFieldTypeString",
                  alias: "Thumbnail URL",
                  domain: null,
                  editable: !0,
                  nullable: !0,
                  length: 254
              }, {
                  name: "is_video",
                  type: "esriFieldTypeString",
                  alias: "Is Video",
                  domain: null,
                  editable: !0,
                  nullable: !0,
                  length: 5
              }] : t.layerDefinition.fields = [{
                  name: "__OBJECTID",
                  alias: "__OBJECTID",
                  type: "esriFieldTypeOID",
                  editable: !1,
                  domain: null
              }], t
          },
          getBlankAppJSON: function() {
              return {
                  itemType: "text",
                  guid: null,
                  name: null,
                  type: "Web Mapping Application",
                  typeKeywords: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map", "Story Maps", "Map Tour", "MapTour"],
                  description: null,
                  tags: ["Story Map", "Map Tour"],
                  snippet: null,
                  thumbnail: "thumbnail/ago_downloaded.png",
                  documentation: null,
                  extent: [],
                  lastModified: -1,
                  spatialReference: null,
                  accessInformation: null,
                  licenseInfo: null,
                  culture: "en-us",
                  properties: null,
                  size: 116,
                  appCategories: [],
                  industries: [],
                  languages: [],
                  largeThumbnail: null,
                  banner: null,
                  screenshots: [],
                  listed: !1,
                  ownerFolder: null,
                  commentsEnabled: !0,
                  numComments: 0,
                  numRatings: 0,
                  avgRating: 0,
                  numViews: 1
              }
          },
          getBlankWebmapJSON: function() {
              var t = {
                  latestWkid: 3857,
                  wkid: 102100
              };
              return app.map && app.map.spatialReference && (t = app.map.spatialReference), {
                  item: {
                      id: "",
                      guid: null,
                      name: null,
                      type: "Web Map",
                      typeKeywords: ["ArcGIS Online", "Explorer Web Map", "Map", "Online Map", "Web Map", "Story Maps", "Map Tour"],
                      description: null,
                      tags: ["map"],
                      snippet: null,
                      thumbnail: "thumbnail/ago_downloaded.png",
                      documentation: null,
                      extent: [
                          [-180, -90],
                          [180, 90]
                      ],
                      spatialReference: null,
                      accessInformation: null,
                      licenseInfo: null,
                      culture: "en-us",
                      properties: null,
                      url: null,
                      size: 233,
                      appCategories: [],
                      industries: [],
                      languages: [],
                      largeThumbnail: null,
                      banner: null,
                      screenshots: [],
                      listed: !1,
                      ownerFolder: null,
                      commentsEnabled: !0,
                      numComments: 0,
                      numRatings: 0,
                      avgRating: 0,
                      numViews: 1
                  },
                  itemData: {
                      operationalLayers: [],
                      baseMap: e.clone(app.defaultBasemap),
                      spatialReference: t,
                      version: "2.9"
                  }
              }
          }
      }
  }),
  function(t, n) {
      typeof exports == "object" && typeof module == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define("storymaps/utils/arcgis-html-sanitizer", [], n) : typeof exports == "object" ? exports.Sanitizer = n() : t.Sanitizer = n()
  }(window, function() {
      return function(e) {
          function n(r) {
              if (t[r]) return t[r].exports;
              var i = t[r] = {
                  i: r,
                  l: !1,
                  exports: {}
              };
              return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
          }
          var t = {};
          return n.m = e, n.c = t, n.d = function(e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: r
              })
          }, n.r = function(e) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
              }), Object.defineProperty(e, "__esModule", {
                  value: !0
              })
          }, n.t = function(e, t) {
              t & 1 && (e = n(e));
              if (t & 8) return e;
              if (t & 4 && typeof e == "object" && e && e.__esModule) return e;
              var r = Object.create(null);
              n.r(r), Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
              });
              if (t & 2 && typeof e != "string")
                  for (var i in e) n.d(r, i, function(t) {
                      return e[t]
                  }.bind(null, i));
              return r
          }, n.n = function(e) {
              var t = e && e.__esModule ? function() {
                  return e["default"]
              } : function() {
                  return e
              };
              return n.d(t, "a", t), t
          }, n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }, n.p = "", n(n.s = "./src/index.ts")
      }({
          "./node_modules/cssfilter/lib/css.js": function(e, t, n) {
              function o(e) {
                  return e === undefined || e === null
              }

              function u(e) {
                  var t = {};
                  for (var n in e) t[n] = e[n];
                  return t
              }

              function a(e) {
                  e = u(e || {}), e.whiteList = e.whiteList || r.whiteList, e.onAttr = e.onAttr || r.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || r.safeAttrValue, this.options = e
              }
              var r = n("./node_modules/cssfilter/lib/default.js"),
                  i = n("./node_modules/cssfilter/lib/parser.js"),
                  s = n("./node_modules/cssfilter/lib/util.js");
              a.prototype.process = function(e) {
                  e = e || "", e = e.toString();
                  if (!e) return "";
                  var t = this,
                      n = t.options,
                      r = n.whiteList,
                      s = n.onAttr,
                      u = n.onIgnoreAttr,
                      a = n.safeAttrValue,
                      f = i(e, function(e, t, n, i, f) {
                          var l = r[n],
                              c = !1;
                          l === !0 ? c = l : typeof l == "function" ? c = l(i) : l instanceof RegExp && (c = l.test(i)), c !== !0 && (c = !1), i = a(n, i);
                          if (!i) return;
                          var h = {
                              position: t,
                              sourcePosition: e,
                              source: f,
                              isWhite: c
                          };
                          if (c) {
                              var p = s(n, i, h);
                              return o(p) ? n + ":" + i : p
                          }
                          var p = u(n, i, h);
                          if (!o(p)) return p
                      });
                  return f
              }, e.exports = a
          },
          "./node_modules/cssfilter/lib/default.js": function(e, t) {
              function n() {
                  var e = {};
                  return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, e["float"] = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, e["writing-mode"] = !1, e["z-index"] = !1, e
              }

              function r(e, t, n) {}

              function i(e, t, n) {}

              function o(e, t) {
                  return s.test(t) ? "" : t
              }
              var s = /javascript\s*\:/img;
              t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = i, t.safeAttrValue = o
          },
          "./node_modules/cssfilter/lib/index.js": function(e, t, n) {
              function s(e, t) {
                  var n = new i(t);
                  return n.process(e)
              }
              var r = n("./node_modules/cssfilter/lib/default.js"),
                  i = n("./node_modules/cssfilter/lib/css.js");
              t = e.exports = s, t.FilterCSS = i;
              for (var o in r) t[o] = r[o];
              typeof window != "undefined" && (window.filterCSS = e.exports)
          },
          "./node_modules/cssfilter/lib/parser.js": function(e, t, n) {
              function i(e, t) {
                  function a() {
                      if (!i) {
                          var n = r.trim(e.slice(s, o)),
                              a = n.indexOf(":");
                          if (a !== -1) {
                              var f = r.trim(n.slice(0, a)),
                                  l = r.trim(n.slice(a + 1));
                              if (f) {
                                  var c = t(s, u.length, f, l, n);
                                  c && (u += c + "; ")
                              }
                          }
                      }
                      s = o + 1
                  }
                  e = r.trimRight(e), e[e.length - 1] !== ";" && (e += ";");
                  var n = e.length,
                      i = !1,
                      s = 0,
                      o = 0,
                      u = "";
                  for (; o < n; o++) {
                      var f = e[o];
                      if (f === "/" && e[o + 1] === "*") {
                          var l = e.indexOf("*/", o + 2);
                          if (l === -1) break;
                          o = l + 1, s = o + 1, i = !1
                      } else f === "(" ? i = !0 : f === ")" ? i = !1 : f === ";" ? i || a() : f === "\n" && a()
                  }
                  return r.trim(u)
              }
              var r = n("./node_modules/cssfilter/lib/util.js");
              e.exports = i
          },
          "./node_modules/cssfilter/lib/util.js": function(e, t) {
              e.exports = {
                  indexOf: function(e, t) {
                      var n, r;
                      if (Array.prototype.indexOf) return e.indexOf(t);
                      for (n = 0, r = e.length; n < r; n++)
                          if (e[n] === t) return n;
                      return -1
                  },
                  forEach: function(e, t, n) {
                      var r, i;
                      if (Array.prototype.forEach) return e.forEach(t, n);
                      for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
                  },
                  trim: function(e) {
                      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                  },
                  trimRight: function(e) {
                      return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
                  }
              }
          },
          "./node_modules/lodash.isplainobject/index.js": function(e, t) {
              function r(e) {
                  var t = !1;
                  if (e != null && typeof e.toString != "function") try {
                      t = !!(e + "")
                  } catch (n) {}
                  return t
              }

              function i(e, t) {
                  return function(n) {
                      return e(t(n))
                  }
              }

              function h(e) {
                  return !!e && typeof e == "object"
              }

              function p(e) {
                  if (!h(e) || l.call(e) != n || r(e)) return !1;
                  var t = c(e);
                  if (t === null) return !0;
                  var i = a.call(t, "constructor") && t.constructor;
                  return typeof i == "function" && i instanceof i && u.call(i) == f
              }
              var n = "[object Object]",
                  s = Function.prototype,
                  o = Object.prototype,
                  u = s.toString,
                  a = o.hasOwnProperty,
                  f = u.call(Object),
                  l = o.toString,
                  c = i(Object.getPrototypeOf, Object);
              e.exports = p
          },
          "./node_modules/xss/lib/default.js": function(e, t, n) {
              function o() {
                  return {
                      a: ["target", "href", "title"],
                      abbr: ["title"],
                      address: [],
                      area: ["shape", "coords", "href", "alt"],
                      article: [],
                      aside: [],
                      audio: ["autoplay", "controls", "loop", "preload", "src"],
                      b: [],
                      bdi: ["dir"],
                      bdo: ["dir"],
                      big: [],
                      blockquote: ["cite"],
                      br: [],
                      caption: [],
                      center: [],
                      cite: [],
                      code: [],
                      col: ["align", "valign", "span", "width"],
                      colgroup: ["align", "valign", "span", "width"],
                      dd: [],
                      del: ["datetime"],
                      details: ["open"],
                      div: [],
                      dl: [],
                      dt: [],
                      em: [],
                      font: ["color", "size", "face"],
                      footer: [],
                      h1: [],
                      h2: [],
                      h3: [],
                      h4: [],
                      h5: [],
                      h6: [],
                      header: [],
                      hr: [],
                      i: [],
                      img: ["src", "alt", "title", "width", "height"],
                      ins: ["datetime"],
                      li: [],
                      mark: [],
                      nav: [],
                      ol: [],
                      p: [],
                      pre: [],
                      s: [],
                      section: [],
                      small: [],
                      span: [],
                      sub: [],
                      sup: [],
                      strong: [],
                      table: ["width", "border", "align", "valign"],
                      tbody: ["align", "valign"],
                      td: ["width", "rowspan", "colspan", "align", "valign"],
                      tfoot: ["align", "valign"],
                      th: ["width", "rowspan", "colspan", "align", "valign"],
                      thead: ["align", "valign"],
                      tr: ["rowspan", "align", "valign"],
                      tt: [],
                      u: [],
                      ul: [],
                      video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
                  }
              }

              function a(e, t, n) {}

              function f(e, t, n) {}

              function l(e, t, n) {}

              function c(e, t, n) {}

              function h(e) {
                  return e.replace(d, "&lt;").replace(v, "&gt;")
              }

              function p(e, t, n, r) {
                  n = _(n);
                  if (t === "href" || t === "src") {
                      n = s.trim(n);
                      if (n === "#") return "#";
                      if (n.substr(0, 7) !== "http://" && n.substr(0, 8) !== "https://" && n.substr(0, 7) !== "mailto:" && n.substr(0, 4) !== "tel:" && n[0] !== "#" && n[0] !== "/") return ""
                  } else if (t === "background") {
                      S.lastIndex = 0;
                      if (S.test(n)) return ""
                  } else if (t === "style") {
                      N.lastIndex = 0;
                      if (N.test(n)) return "";
                      C.lastIndex = 0;
                      if (C.test(n)) {
                          S.lastIndex = 0;
                          if (S.test(n)) return ""
                      }
                      r !== !1 && (r = r || u, n = r.process(n))
                  }
                  return n = D(n), n
              }

              function k(e) {
                  return e.replace(m, "&quot;")
              }

              function L(e) {
                  return e.replace(g, '"')
              }

              function A(e) {
                  return e.replace(y, function(t, n) {
                      return n[0] === "x" || n[0] === "X" ? String.fromCharCode(parseInt(n.substr(1), 16)) : String.fromCharCode(parseInt(n, 10))
                  })
              }

              function O(e) {
                  return e.replace(b, ":").replace(w, " ")
              }

              function M(e) {
                  var t = "";
                  for (var n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
                  return s.trim(t)
              }

              function _(e) {
                  return e = L(e), e = A(e), e = O(e), e = M(e), e
              }

              function D(e) {
                  return e = k(e), e = h(e), e
              }

              function P() {
                  return ""
              }

              function H(e, t) {
                  function r(t) {
                      return n ? !0 : s.indexOf(e, t) !== -1
                  }
                  typeof t != "function" && (t = function() {});
                  var n = !Array.isArray(e),
                      i = [],
                      o = !1;
                  return {
                      onIgnoreTag: function(e, n, s) {
                          if (r(e)) {
                              if (s.isClosing) {
                                  var u = "[/removed]",
                                      a = s.position + u.length;
                                  return i.push([o !== !1 ? o : s.position, a]), o = !1, u
                              }
                              return o || (o = s.position), "[removed]"
                          }
                          return t(e, n, s)
                      },
                      remove: function(e) {
                          var t = "",
                              n = 0;
                          return s.forEach(i, function(r) {
                              t += e.slice(n, r[0]), n = r[1]
                          }), t += e.slice(n), t
                      }
                  }
              }

              function B(e) {
                  return e.replace(j, "")
              }

              function F(e) {
                  var t = e.split("");
                  return t = t.filter(function(e) {
                      var t = e.charCodeAt(0);
                      return t === 127 ? !1 : t <= 31 ? t === 10 || t === 13 ? !0 : !1 : !0
                  }), t.join("")
              }
              var r = n("./node_modules/cssfilter/lib/index.js").FilterCSS,
                  i = n("./node_modules/cssfilter/lib/index.js").getDefaultWhiteList,
                  s = n("./node_modules/xss/lib/util.js"),
                  u = new r,
                  d = /</g,
                  v = />/g,
                  m = /"/g,
                  g = /&quot;/g,
                  y = /&#([a-zA-Z0-9]*);?/gim,
                  b = /&colon;?/gim,
                  w = /&newline;?/gim,
                  E = /\/\*|\*\//gm,
                  S = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
                  x = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi,
                  T = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi,
                  N = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                  C = /u\s*r\s*l\s*\(.*/gi,
                  j = /<!--[\s\S]*?-->/g;
              t.whiteList = o(), t.getDefaultWhiteList = o, t.onTag = a, t.onIgnoreTag = f, t.onTagAttr = l, t.onIgnoreTagAttr = c, t.safeAttrValue = p, t.escapeHtml = h, t.escapeQuote = k, t.unescapeQuote = L, t.escapeHtmlEntities = A, t.escapeDangerHtml5Entities = O, t.clearNonPrintableCharacter = M, t.friendlyAttrValue = _, t.escapeAttrValue = D, t.onIgnoreTagStripAll = P, t.StripTagBody = H, t.stripCommentTag = B, t.stripBlankChar = F, t.cssFilter = u, t.getDefaultCSSWhiteList = i
          },
          "./node_modules/xss/lib/index.js": function(e, t, n) {
              function o(e, t) {
                  var n = new s(t);
                  return n.process(e)
              }
              var r = n("./node_modules/xss/lib/default.js"),
                  i = n("./node_modules/xss/lib/parser.js"),
                  s = n("./node_modules/xss/lib/xss.js");
              t = e.exports = o, t.FilterXSS = s;
              for (var u in r) t[u] = r[u];
              for (var u in i) t[u] = i[u];
              typeof window != "undefined" && (window.filterXSS = e.exports)
          },
          "./node_modules/xss/lib/parser.js": function(e, t, n) {
              function i(e) {
                  var t = r.spaceIndex(e);
                  if (t === -1) var n = e.slice(1, -1);
                  else var n = e.slice(1, t + 1);
                  return n = r.trim(n).toLowerCase(), n.slice(0, 1) === "/" && (n = n.slice(1)), n.slice(-1) === "/" && (n = n.slice(0, -1)), n
              }

              function s(e) {
                  return e.slice(0, 2) === "</"
              }

              function o(e, t, n) {
                  "user strict";
                  var r = "",
                      o = 0,
                      u = !1,
                      a = !1,
                      f = 0,
                      l = e.length,
                      c = "",
                      h = "";
                  for (f = 0; f < l; f++) {
                      var p = e.charAt(f);
                      if (u === !1) {
                          if (p === "<") {
                              u = f;
                              continue
                          }
                      } else if (a === !1) {
                          if (p === "<") {
                              r += n(e.slice(o, f)), u = f, o = f;
                              continue
                          }
                          if (p === ">") {
                              r += n(e.slice(o, u)), h = e.slice(u, f + 1), c = i(h), r += t(u, r.length, c, h, s(h)), o = f + 1, u = !1;
                              continue
                          }
                          if ((p === '"' || p === "'") && e.charAt(f - 1) === "=") {
                              a = p;
                              continue
                          }
                      } else if (p === a) {
                          a = !1;
                          continue
                      }
                  }
                  return o < e.length && (r += n(e.substr(o))), r
              }

              function a(e, t) {
                  "user strict";

                  function a(e, n) {
                      e = r.trim(e), e = e.replace(u, "").toLowerCase();
                      if (e.length < 1) return;
                      var s = t(e, n || "");
                      s && i.push(s)
                  }
                  var n = 0,
                      i = [],
                      s = !1,
                      o = e.length;
                  for (var c = 0; c < o; c++) {
                      var p = e.charAt(c),
                          d, v;
                      if (s === !1 && p === "=") {
                          s = e.slice(n, c), n = c + 1;
                          continue
                      }
                      if (s !== !1 && c === n && (p === '"' || p === "'") && e.charAt(c - 1) === "=") {
                          v = e.indexOf(p, c + 1);
                          if (v === -1) break;
                          d = r.trim(e.slice(n + 1, v)), a(s, d), s = !1, c = v, n = c + 1;
                          continue
                      }
                      if (/\s|\n|\t/.test(p)) {
                          e = e.replace(/\s|\n|\t/g, " ");
                          if (s === !1) {
                              v = f(e, c);
                              if (v === -1) {
                                  d = r.trim(e.slice(n, c)), a(d), s = !1, n = c + 1;
                                  continue
                              }
                              c = v - 1;
                              continue
                          }
                          v = l(e, c - 1);
                          if (v === -1) {
                              d = r.trim(e.slice(n, c)), d = h(d), a(s, d), s = !1, n = c + 1;
                              continue
                          }
                          continue
                      }
                  }
                  return n < e.length && (s === !1 ? a(e.slice(n)) : a(s, h(r.trim(e.slice(n))))), r.trim(i.join(" "))
              }

              function f(e, t) {
                  for (; t < e.length; t++) {
                      var n = e[t];
                      if (n === " ") continue;
                      return n === "=" ? t : -1
                  }
              }

              function l(e, t) {
                  for (; t > 0; t--) {
                      var n = e[t];
                      if (n === " ") continue;
                      return n === "=" ? t : -1
                  }
              }

              function c(e) {
                  return e[0] === '"' && e[e.length - 1] === '"' || e[0] === "'" && e[e.length - 1] === "'" ? !0 : !1
              }

              function h(e) {
                  return c(e) ? e.substr(1, e.length - 2) : e
              }
              var r = n("./node_modules/xss/lib/util.js"),
                  u = /[^a-zA-Z0-9_:\.\-]/gim;
              t.parseTag = o, t.parseAttr = a
          },
          "./node_modules/xss/lib/util.js": function(e, t) {
              e.exports = {
                  indexOf: function(e, t) {
                      var n, r;
                      if (Array.prototype.indexOf) return e.indexOf(t);
                      for (n = 0, r = e.length; n < r; n++)
                          if (e[n] === t) return n;
                      return -1
                  },
                  forEach: function(e, t, n) {
                      var r, i;
                      if (Array.prototype.forEach) return e.forEach(t, n);
                      for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
                  },
                  trim: function(e) {
                      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                  },
                  spaceIndex: function(e) {
                      var t = /\s|\n|\t/,
                          n = t.exec(e);
                      return n ? n.index : -1
                  }
              }
          },
          "./node_modules/xss/lib/xss.js": function(e, t, n) {
              function f(e) {
                  return e === undefined || e === null
              }

              function l(e) {
                  var t = a.spaceIndex(e);
                  if (t === -1) return {
                      html: "",
                      closing: e[e.length - 2] === "/"
                  };
                  e = a.trim(e.slice(t + 1, -1));
                  var n = e[e.length - 1] === "/";
                  return n && (e = a.trim(e.slice(0, -1))), {
                      html: e,
                      closing: n
                  }
              }

              function c(e) {
                  var t = {};
                  for (var n in e) t[n] = e[n];
                  return t
              }

              function h(e) {
                  e = c(e || {}), e.stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = i.onIgnoreTagStripAll), e.whiteList = e.whiteList || i.whiteList, e.onTag = e.onTag || i.onTag, e.onTagAttr = e.onTagAttr || i.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || i.safeAttrValue, e.escapeHtml = e.escapeHtml || i.escapeHtml, this.options = e, e.css === !1 ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new r(e.css))
              }
              var r = n("./node_modules/cssfilter/lib/index.js").FilterCSS,
                  i = n("./node_modules/xss/lib/default.js"),
                  s = n("./node_modules/xss/lib/parser.js"),
                  o = s.parseTag,
                  u = s.parseAttr,
                  a = n("./node_modules/xss/lib/util.js");
              h.prototype.process = function(e) {
                  e = e || "", e = e.toString();
                  if (!e) return "";
                  var t = this,
                      n = t.options,
                      r = n.whiteList,
                      s = n.onTag,
                      c = n.onIgnoreTag,
                      h = n.onTagAttr,
                      p = n.onIgnoreTagAttr,
                      d = n.safeAttrValue,
                      v = n.escapeHtml,
                      m = t.cssFilter;
                  n.stripBlankChar && (e = i.stripBlankChar(e)), n.allowCommentTag || (e = i.stripCommentTag(e));
                  var g = !1;
                  if (n.stripIgnoreTagBody) {
                      var g = i.StripTagBody(n.stripIgnoreTagBody, c);
                      c = g.onIgnoreTag
                  }
                  var y = o(e, function(e, t, n, i, o) {
                      var g = {
                              sourcePosition: e,
                              position: t,
                              isClosing: o,
                              isWhite: r.hasOwnProperty(n)
                          },
                          y = s(n, i, g);
                      if (!f(y)) return y;
                      if (g.isWhite) {
                          if (g.isClosing) return "</" + n + ">";
                          var b = l(i),
                              w = r[n],
                              E = u(b.html, function(e, t) {
                                  var r = a.indexOf(w, e) !== -1,
                                      i = h(n, e, t, r);
                                  if (!f(i)) return i;
                                  if (r) return t = d(n, e, t, m), t ? e + '="' + t + '"' : e;
                                  var i = p(n, e, t, r);
                                  if (!f(i)) return i;
                                  return
                              }),
                              i = "<" + n;
                          return E && (i += " " + E), b.closing && (i += " /"), i += ">", i
                      }
                      var y = c(n, i, g);
                      return f(y) ? v(i) : y
                  }, v);
                  return g && (y = g.remove(y)), y
              }, e.exports = h
          },
          "./src/index.ts": function(e, t, n) {
              n.r(t), n.d(t, "Sanitizer", function() {
                  return u
              });
              var r = n("./node_modules/lodash.isplainobject/index.js"),
                  i = n.n(r),
                  s = n("./node_modules/xss/lib/index.js"),
                  o = n.n(s),
                  u = function() {
                      function e(e, t) {
                          var n = this;
                          this.arcgisWhiteList = {
                              a: ["href", "target", "style"],
                              img: ["src", "width", "height", "border", "alt", "style"],
                              video: ["autoplay", "controls", "height", "loop", "muted", "poster", "preload", "src", "width"],
                              audio: ["autoplay", "controls", "loop", "muted", "preload", "src"],
                              span: ["style"],
                              table: ["width", "height", "cellpadding", "cellspacing", "border", "style"],
                              div: ["style", "class"],
                              font: ["size", "color", "style"],
                              tr: ["height", "valign", "align", "style"],
                              td: ["height", "width", "valign", "align", "colspan", "rowspan", "nowrap", "style"],
                              th: ["height", "width", "valign", "align", "colspan", "rowspan", "nowrap", "style"],
                              p: ["style"],
                              b: [],
                              strong: [],
                              i: [],
                              em: [],
                              br: [],
                              li: [],
                              ul: [],
                              tbody: []
                          }, this.arcgisFilterOptions = {
                              allowCommentTag: !0
                          };
                          var r;
                          e && !t ? r = e : e && t ? (r = Object.create(this.arcgisFilterOptions), Object.keys(e).forEach(function(t) {
                              t === "whiteList" ? r.whiteList = n._extendObjectOfArrays([n.arcgisWhiteList, e.whiteList || {}]) : r[t] = e[t]
                          })) : (r = Object.create(this.arcgisFilterOptions), r.whiteList = this.arcgisWhiteList), this.xssFilterOptions = r, this._xssFilter = new o.a.FilterXSS(r)
                      }
                      return e.prototype.sanitize = function(e) {
                          switch (typeof e) {
                              case "number":
                                  if (isNaN(e) || !isFinite(e)) return null;
                                  return e;
                              case "boolean":
                                  return e;
                              case "string":
                                  return this._xssFilter.process(e);
                              case "object":
                                  return this._iterateOverObject(e);
                              default:
                                  return null
                          }
                      }, e.prototype.validate = function(e) {
                          var t = this.sanitize(e);
                          return {
                              isValid: e === t,
                              sanitized: t
                          }
                      }, e.prototype._extendObjectOfArrays = function(e) {
                          var t = {};
                          return e.forEach(function(e) {
                              Object.keys(e).forEach(function(n) {
                                  Array.isArray(e[n]) && Array.isArray(t[n]) ? t[n] = t[n].concat(e[n]) : t[n] = e[n]
                              })
                          }), t
                      }, e.prototype._iterateOverObject = function(e) {
                          var t = this;
                          try {
                              var n = !1,
                                  r = void 0;
                              if (Array.isArray(e)) r = e.reduce(function(e, r) {
                                  var i = t.validate(r);
                                  return i.isValid ? e.concat([r]) : (n = !0, e.concat([i.sanitized]))
                              }, []);
                              else {
                                  if (!i()(e)) return null;
                                  var s = Object.keys(e);
                                  r = s.reduce(function(r, i) {
                                      var s = e[i],
                                          o = t.validate(s);
                                      return o.isValid ? r[i] = s : (n = !0, r[i] = o.sanitized), r
                                  }, {})
                              }
                              return n ? r : e
                          } catch (o) {
                              return null
                          }
                      }, e
                  }()
          }
      }).Sanitizer
  }), define("storymaps/core/Core", ["esri/map", "esri/arcgis/Portal", "esri/arcgis/utils", "storymaps/utils/Helper", "esri/urlUtils", "storymaps/maptour/core/Config", "storymaps/maptour/core/TourData", "storymaps/maptour/core/WebApplicationData", "storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/MapTourHelper", "storymaps/ui/header/Header", "storymaps/ui/mapCommand/MapCommand", "storymaps/maptour/builder/MapTourBuilderHelper", "dojo/has", "esri/IdentityManager", "esri/arcgis/OAuthInfo", "esri/config", "esri/tasks/GeometryService", "esri/request", "esri/renderers/UniqueValueRenderer", "dojo/topic", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/_base/kernel", "dojo/Deferred", "dojo/DeferredList", "dojo/query", "esri/geometry/Extent", "storymaps/utils/arcgis-html-sanitizer"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A) {
      function _(e, t) {
          var a = r.getUrlParams(),
              f = !1,
              c = !1,
              h = !1,
              p = r.getSharingHost();
          console.log("maptour.core.Core - init", t), M = e, ot(), t != null && (c = a.fromScratch != null || a.fromscratch != null, f = c || r.getAppID(ut()), h = a.fromGallery != null), (c || h) && u.setLayout("side-panel"), !r.browserSupportHistory() && (c || h) && a.ieredirected == "undefined" && (window.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "#" + document.location.search + "&ieredirected");
          if (r.isArcGISHosted() || !ut()) configOptions = {
              proxyurl: configOptions.proxyurl,
              sharingurl: configOptions.sharingurl,
              oAuthAppId: configOptions.oAuthAppId
          };
          if (!s.checkConfigFileIsOK()) {
              z("invalidConfig");
              return
          }
          app = {
              map: null,
              portal: null,
              data: new o,
              mapTips: null,
              builder: t,
              isInBuilderMode: f,
              isDirectCreation: c,
              isGalleryCreation: h,
              isDirectCreationFirstSave: c,
              builderMovableGraphic: null,
              isCreatingFS: !1,
              mapCommand: null,
              header: new l("#header", f),
              isLoading: !0,
              loadingTimeout: null,
              isFirstUserAction: !1,
              filterMouseHoverEvent: !1,
              config: {
                  thumbnailMaxWidth: 140,
                  thumbnailMaxHeight: 93,
                  picRecommendedWidth: 1090,
                  picRecommendedHeight: 725
              },
              userCanEdit: !1,
              sanitizer: new A({
                  whiteList: {
                      hr: [],
                      source: ["src", "type"]
                  }
              }, !0)
          };
          if (!M.init(this)) return;
          rt();
          if (p) configOptions.sharingurl = p;
          else if (!configOptions.sharingurl) {
              var v = document.location.pathname.indexOf("/apps/");
              v == -1 && (v = document.location.pathname.indexOf("/home/"));
              if (v != -1) {
                  var g = location.pathname.substr(0, v);
                  configOptions.sharingurl = "//" + location.host + g + "/sharing/rest/content/items", configOptions.proxyurl = "//" + location.host + g + "/sharing/proxy"
              } else configOptions.sharingurl = APPCFG.DEFAULT_SHARING_URL
          }
          n.arcgisUrl = location.protocol + configOptions.sharingurl, configOptions.proxyurl || (configOptions.proxyurl = APPCFG.DEFAULT_PROXY_URL), m.defaults.io.proxyUrl = location.protocol + configOptions.proxyurl, d && d.setProtocolErrorHandler(function() {
              return !0
          }), f && APPCFG.CORS_SERVER && $.each(APPCFG.CORS_SERVER, function(e, t) {
              m.defaults.io.corsEnabledServers.push(t)
          }), APPCFG.PROXY_RULES && APPCFG.PROXY_RULES.length && $.each(APPCFG.PROXY_RULES, function(e, t) {
              t && t.urlPrefix && t.proxyUrl && i.addProxyRule(t)
          }), m.defaults.io.timeout = f ? APPCFG.TIMEOUT_BUILDER_REQUEST : APPCFG.TIMEOUT_VIEWER_REQUEST, $.fn.modal.Constructor.prototype.enforceFocus = function() {}, $(document).ready(S.hitch(this, D))
      }

      function D() {
          console.log("maptour.core.Core - initStep2"), y({
              url: n.arcgisUrl.split("/sharing/")[0] + "/sharing/portals/self",
              content: {
                  f: "json"
              },
              callbackParamName: "callback"
          }).then(S.hitch(this, function(e) {
              var t;
              if (e.authorizedCrossOriginDomains && e.authorizedCrossOriginDomains.length > 0)
                  for (var n = 0; n < e.authorizedCrossOriginDomains.length; n++) t = e.authorizedCrossOriginDomains[n], esri.isDefined(t) && t.length > 0 && m.defaults.io.corsEnabledServers.push({
                      host: t,
                      withCredentials: !0
                  });
              !APPCFG.HELPER_SERVICES.geocode.length && e.helperServices && e.helperServices.geocode && e.helperServices.geocode.length && e.helperServices.geocode[0].url && $.each(e.helperServices.geocode, function(e, t) {
                  APPCFG.HELPER_SERVICES.geocode.push(t)
              });
              var r;
              APPCFG.HELPER_SERVICES.geometry && APPCFG.HELPER_SERVICES.geometry.url ? r = APPCFG.HELPER_SERVICES.geometry.url : e.helperServices.geometry && e.helperServices.geometry.url && (r = e.helperServices.geometry.url), m.defaults.geometryService = new g(r), !APPCFG.BING_MAPS_KEY && e.bingKey && (APPCFG.BING_MAPS_KEY = e.bingKey), e.isPortal && !e.supportsSceneServices && !e.supportsHostedServices && (APPCFG.AUTHORIZED_IMPORT_SOURCE.featureService = !1), e.isPortal && !e.hasRelationalArcGISDataStore && (APPCFG.AUTHORIZED_IMPORT_SOURCE.featureService = !1);
              if (e.defaultBasemap) {
                  var i = S.clone(e.defaultBasemap);
                  delete i.id, delete i.operationalLayers, $.each(i.baseMapLayers, function(e, t) {
                      delete t.resourceInfo, t.id || (t.id = "defaultBasemap"), t.layerType || (t.layerType = "ArcGISTiledMapServiceLayer"), t.opacity || (t.opacity = 1), t.visibility === undefined && (t.visibility = !0)
                  }), app.defaultBasemap = i, window.location.protocol == "https:" && app.defaultBasemap && app.defaultBasemap.baseMapLayers && app.defaultBasemap.baseMapLayers.length && app.defaultBasemap.baseMapLayers[0].url && (app.defaultBasemap.baseMapLayers[0].url = app.defaultBasemap.baseMapLayers[0].url.replace("http://", "https://"))
              }
              app.isPortal = !!e.isPortal;
              if (app.isPortal && e.helpBase && e.portalHostname) {
                  var s = e.portalHostname.split("/")[0];
                  APPCFG.HELP_URL_PORTAL = "//" + s + e.helpBase + APPCFG.HELP_URL_PORTAL
              }
              P()
          }), function() {
              z("portalSelf")
          })
      }

      function P() {
          console.log("maptour.core.Core - initStep3");
          var e = r.getAppID(ut()),
              t = r.getWebmapID(ut());
          app.header.initLocalization(), M.initLocalization(), $(window).resize(J), $("form").bind("keydown", function(e) {
              if (e.keyCode == 13) return !1
          }), E(d, "dialog-create", K), w.subscribe("CORE_UPDATE_UI", V), w.subscribe("CORE_RESIZE", J), loadingIndicator.setMessage(i18n.viewer.loading.step2), r.addCSSRule(".tpIcon {" + f.getSymbolMobileClip() + "}"), e ? H(e) : t && (r.isArcGISHosted() || at()) ? Y() : t ? I(t) : app.isDirectCreation && ut() && !r.getPortalUser() ? Z() : app.isDirectCreation ? F().then(function() {
              var e = new v({
                  appId: "storymaps",
                  portalUrl: "https:" + configOptions.sharingurl.split("/sharing")[0],
                  popup: !0
              });
              d.registerOAuthInfos([e]), d.checkAppAccess("https:" + configOptions.sharingurl, "storymaps").then(function(e) {
                  if (e && e.code && e.code === "IdentityManagerBase.1") {
                      z("notAuthorizedBuilder");
                      return
                  }
                  if (e.viewOnly) {
                      z("viewOnlyLicense");
                      return
                  }
                  I(h.getBlankWebmapJSON())
              }, function() {
                  z("notAuthorizedBuilder");
                  return
              })
          }) : r.isArcGISHosted() ? Y() : ut() ? z("invalidConfigNoWebmap") : z("invalidConfigNoAppDev")
      }

      function H(e) {
          console.log("maptour.core.Core - loadWebMappingApp - appId:", e);
          var n = r.getUrlParams(),
              i = n.forceLogin !== undefined,
              s = window.top !== window.self || APPCFG.EMBED || n.embed || n.embed === "";
          s && $("body").addClass("isEmbed"), app.org = new t.Portal(configOptions.sharingurl.split("/sharing/")[0]), app.org.on("load", function(e) {
              app.isPortal = !!e.isPortal
          }), d.checkSignInStatus(app.org.url + "/sharing/rest/");
          if (configOptions.oAuthAppId) {
              var o = new v({
                  appId: configOptions.oAuthAppId,
                  popup: !1,
                  portalUrl: "https:" + configOptions.sharingurl.split("/sharing/")[0]
              });
              d.registerOAuthInfos([o]), d.checkSignInStatus(o.portalUrl).then(function() {
                  app.isInBuilderMode ? F().then(function() {
                      B(e)
                  }) : F().then(function() {
                      B(e)
                  })
              }, function() {
                  app.isInBuilderMode ? F().then(function() {
                      B(e)
                  }) : B(e)
              })
          } else i || app.isInBuilderMode ? F().then(function() {
              B(e)
          }, function() {
              z("notAuthorized")
          }) : B(e)
      }

      function B(e) {
          var t = y({
                  url: configOptions.sharingurl + "/" + e + "",
                  content: {
                      f: "json"
                  },
                  callbackParamName: "callback",
                  load: function(e) {
                      app.data.setAppItem(e)
                  },
                  error: function() {}
              }),
              n = y({
                  url: configOptions.sharingurl + "/" + e + "/data",
                  content: {
                      f: "json"
                  },
                  callbackParamName: "callback",
                  load: function(e) {
                      if (app.data.getAppItem().created > APPCFG.HTML_SANITIZER_DATE) {
                          var t = app.sanitizer.sanitize(e);
                          u.set(t)
                      } else u.set(e);
                      app.data.webAppData = u
                  },
                  error: function() {}
              }),
              r = new C([t, n]);
          r.then(function() {
              if (!n.results || !n.results[0] || !t.results || !t.results[0]) {
                  t.results && t.results[1] && t.results[1] && t.results[1].httpCode == 403 ? z("notAuthorized") : z("invalidApp");
                  return
              }
              var e = new v({
                  appId: "storymaps",
                  portalUrl: "https:" + configOptions.sharingurl.split("/sharing")[0],
                  popup: !0
              });
              d.registerOAuthInfos([e]), t.results[0].access !== "public" || app.isInBuilderMode ? d.checkAppAccess("https:" + configOptions.sharingurl, "storymaps").then(function(e) {
                  if (e && e.code && e.code === "IdentityManagerBase.1") {
                      z("notAuthorizedLicense");
                      return
                  }
                  if (app.isInBuilderMode && e.viewOnly) {
                      z("viewOnlyLicense");
                      return
                  }
                  j(t)
              }) : j(t)
          })
      }

      function j(e) {
          app.userCanEdit = app.data.userIsAppOwner(), !app.isInBuilderMode && !app.userCanEdit && (document.__defineGetter__ ? (document.__defineGetter__("cookie", function() {
              return ""
          }), document.__defineSetter__("cookie", function() {})) : Object.defineProperty(document, "cookie", {
              get: function() {
                  return ""
              },
              set: function() {
                  return !0
              }
          }));
          if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) {
              var t = !1;
              e.results[0].owner && (t = $.inArray(e.results[0].owner, configOptions.authorizedOwners) != -1), !t && configOptions.authorizedOwners[0] == "*" && (t = !0);
              if (!t) {
                  z("invalidConfigOwner");
                  return
              }
          }
          if (e.results[0] && e.results[0].appProxies) {
              var n = x.map(e.results[0].appProxies, function(e) {
                  return {
                      url: e.sourceUrl,
                      mixin: {
                          url: e.proxyUrl
                      }
                  }
              });
              app.data.setAppProxies(n)
          }
          if (app.isInBuilderMode && ut() && !app.userCanEdit) {
              z("notAuthorized");
              return
          }
          var i = u.getWebmap() || r.getWebmapID(ut());
          i ? I(i) : app.isGalleryCreation ? (u.setTitle(app.data.getAppItem().title), u.setSubtitle(app.data.getAppItem().description), u.setLayout("side-panel"), I(h.getBlankWebmapJSON())) : r.getPortalUser() || !ut() ? et() : z("invalidApp")
      }

      function F() {
          var e = new N,
              n = configOptions.sharingurl.split("/sharing/")[0];
          return app.portal = new t.Portal(n), E(d, "dialog-create", Q), app.portal.on("load", function() {
              app.portal.signIn().then(function() {
                  if (app.isInBuilderMode && !app.data.checkUserItemPrivileges()) {
                      z("notAuthorizedBuilder");
                      return
                  }!APPCFG.BING_MAPS_KEY && app.portal.bingKey && (APPCFG.BING_MAPS_KEY = app.portal.bingKey), app.userCanEdit = app.data.userIsAppOwner(), e.resolve()
              }, function() {
                  e.reject()
              })
          }), e
      }

      function I(e) {
          console.log("maptour.core.Core - loadWebMap - webmapId:", e), p("chrome") && (m.defaults.map.zoomDuration = 5), n.createMap(e, "mainMap", {
              mapOptions: {
                  slider: !0,
                  autoResize: !1,
                  extent: new L({
                      xmax: 180,
                      xmin: -180,
                      ymax: 90,
                      ymin: -90,
                      spatialReference: {
                          wkid: 4326
                      }
                  }),
                  showAttribution: !0,
                  wrapAround180: !1,
                  smartNavigation: !1
              },
              ignorePopups: !0,
              bingMapsKey: APPCFG.BING_MAPS_KEY,
              layerMixins: app.data.getAppProxies()
          }).then(S.hitch(this, function(e) {
              q(e)
          }), S.hitch(this, function() {
              z("createMap")
          }))
      }

      function q(e) {
          console.log("maptour.core.Core - webMapInitCallback");
          if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) {
              var t = !1;
              e.itemInfo.item.owner && (t = $.inArray(e.itemInfo.item.owner, configOptions.authorizedOwners) != -1), !t && configOptions.authorizedOwners[0] == "*" && (t = !0);
              if (!t) {
                  z("invalidConfigOwner");
                  return
              }
          }
          app.map = e.map, app.data.setWebMapItem(e.itemInfo), app.map.disableKeyboardNavigation();
          var n = configOptions.title || u.getTitle() || app.data.getAppItem().title || e.itemInfo.item.title,
              i = configOptions.subtitle || u.getSubtitle() || e.itemInfo.item.snippet;
          app.data.webAppData && app.data.webAppData.setTitle(n);
          var s = u.getLayout() || configOptions.layout || (Object.keys(app.data.webAppData.getAllValues()).length == 1 ? "side-panel" : "three-panel") || (!app.isGalleryCreation && !app.isDirectCreation ? "three-panel" : "side-panel");
          u.getLayout() || u.setLayout(s), X(s, f.isOnMobileView());
          var o = r.getUrlParams(),
              a = u.getColors(),
              l = u.getLogoURL() || APPCFG.HEADER_LOGO_URL,
              c = l == APPCFG.HEADER_LOGO_URL ? APPCFG.HEADER_LOGO_TARGET : u.getLogoTarget();
          app.header.init(!app.isInBuilderMode && (APPCFG.EMBED || o.embed || o.embed === ""), n, i, a[0], l, c, !app.isInBuilderMode && (!ut() && r.getAppID(ut()) || ut() && app.userCanEdit) && !o.preview, u.getHeaderLinkText() === undefined ? APPCFG.HEADER_LINK_TEXT : u.getHeaderLinkText(), u.getHeaderLinkURL() === undefined ? APPCFG.HEADER_LINK_URL : u.getHeaderLinkURL(), u.getSocial()), document.title = n ? $("<div>" + n + "</div>").text() : "Map Tour", M.webmapLoaded()
      }

      function R() {
          console.log("maptour.core.Core - initMap"), app.mapCommand = new c(app.map, function() {
              M.setMapExtent(r.getWebMapExtentFromItem(app.data.getWebMapItem().item))
          }, M.zoomToDeviceLocation, APPCFG.DISPLAY_LOCATE_BUTTON || u.getZoomLocationButton()), $("body").hasClass("side-panel") && ($(".mapCommandHomeBtn").addClass("esri-icon esri-icon-home"), $("#mainMap_zoom_location div").addClass("esri-icon esri-icon-locate"), $(".mapCommandHomeBtn").parent().append($("mainMap_container"))), J(), location.hash && r.browserSupportHistory() && (location.hash = "map"), window.onhashchange = function() {
              if (!(location.hash !== "" && location.hash !== "#" || !app.data.getIntroData())) return;
              app.data.getIntroData() && app.data.getCurrentIndex() == null && w.publish("PIC_PANEL_NEXT"), M.prepareMobileViewSwitch(), location.hash == "#map" ? ($("#mapViewLink").addClass("current"), nt()) : M.onHashChange()
          }, M.appInitComplete(), app.builder && app.builder.appInitComplete(), document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/) && document.location.search.match(/^\?appid=/) && (!p("ie") || p("ie") >= 10) && History.replaceState({}, "", "index.html" + document.location.search + document.location.hash)
      }

      function U() {
          $("#loadingOverlay, #loadingIndicator, #loadingMessage").fadeOut(), setTimeout(function() {
              app.isLoading = !1
          }, 50)
      }

      function z(e, t, n) {
          tt(), it(), $("#loadingIndicator, #loadingMessage").hide();
          if (e == "noLayerView") {
              loadingIndicator.setMessage(i18n.viewer.errors[e], !0);
              return
          }
          if (e == "notAuthorizedLicense") {
              var i = i18n.viewer.licenseChange2018.noAccess,
                  s = r.getPortalUser() ? r.getPortalUser() : app.portal && app.portal.getPortalUser() && app.portal.getPortalUser().username ? app.portal.getPortalUser().username : "";
              i = i.replace(/%USER_NAME%/g, s), $("#fatalError .error-msg").html(i), $("#fatalError").show();
              return
          }
          if (e == "viewOnlyLicense") {
              var o = i18n.viewer.storyTellerUserType.notCreatorError,
                  u = r.getPortalUser() ? r.getPortalUser() : app.portal && app.portal.getPortalUser() && app.portal.getPortalUser().username ? app.portal.getPortalUser().username : "";
              o = o.replace(/%USER_NAME%/g, u), $("#fatalError .error-msg").html(o), $("#fatalError").show();
              return
          }
          $("#fatalError .error-msg").html(i18n.viewer.errors[e]), n || $("#fatalError").show()
      }

      function W(e) {
          $("#fatalError .error-msg").html(i18n.viewer.errors[e])
      }

      function X(e, t) {
          !e && app.isLoading && app.isGalleryCreation && (e = "side-panel"), app.isInBuilderMode && app.data.sourceIsFS() && e != "side-panel" && ($(".editPictureButtons .modernBrowserWay a").width("120px"), $(".editPictureButtons .modernBrowserWay a").css("margin-top", 0), $(".editPictureButtons .modernBrowserWay a").css("opacity", 1), $(".editPictureButtons .modernBrowserWay .btn-picture").height("auto"), $(".editPictureButtons .modernBrowserWay .btn-thumbnail").height("auto"), $(".editPictureButtons .modernBrowserWay").show()), e == "integrated" ? ($("body").removeClass("side-panel"), $(".member-image img").css("opacity", "1"), $(".member-image").css("background-image", "none"), $("body").removeClass("mobile-layout-scroll"), $("body").addClass("modern-layout"), $("#contentPanel").append($("#mapPanel")), $("#cfader").append($("#placardContainer")), $("#picturePanel").css("right", "4px"), $("#picturePanel").css("left", "auto"), $(".rightArea").append($(".logo")), $(".textArea").css("padding-left", "25px"), $("#basemapChooser .dijitTitlePaneTextNode").html(i18n.viewer.builderJS.switchBM), $(".dijitTitlePaneTextNode").removeClass("fa fa-2x fa-th-large"), $("#headerDesktop .text_edit_icon").removeClass("pencilIconDiv"), $(".member-image.current").after($(".btn-fullscreen")), $(".mapCommandHomeBtn").parent().append($("mainMap_zoom_slider")), $(".mapCommandHomeBtn").removeClass("sidePanelHome"), $(".mapCommandHomeBtn").removeClass("esri-icon esri-icon-home"), $("#mainMap_zoom_location div").removeClass("esri-icon esri-icon-locate"), $("#mainMap_zoom_location img").show(), $(".builderImageTarget").hide(), $("#leftPanel").height(0)) : e == "side-panel" && !t ? ($("body").removeClass("modern-layout"), $("body").removeClass("mobile-layout-scroll"), $("body").addClass("side-panel"), "objectFit" in document.documentElement.style == 0 && $(".side-panel .member-image.current").css("background-image", "url(" + $(".side-panel .member-image.current img").attr("src") + ")"), $("#headerDesktop").prepend($(".logo")), $("#placardContainer").css({
              top: 0
          }), $("#placardContainer").css({
              bottom: 0
          }), $("#placardContainer").css({
              left: 0
          }), $("#picturePanel").width($("body").width() * (2 / 3)), $("#picturePanel").css("left", $("#leftPanel").width()), $("#contentPanel").prepend($(".btn-fullscreen")), $(".dijitTitlePaneTextNode").empty(), $(".dijitTitlePaneTextNode").addClass("fa fa-2x fa-th-large"), $("#headerDesktop .text_edit_icon").addClass("pencilIconDiv"), $("#arrowPrev").appendTo($("#placard-bg")), $("#arrowNext").appendTo($("#placard-bg")), $("#arrowPrev").attr("src", "resources/icons/picturepanel-left-grey-crushed.png"), $("#arrowNext").attr("src", "resources/icons/picturepanel-right-grey-crushed.png"), $("#placard-bg").css("max-height", "none"), $(".member-image.current").css("left", 0), $(".mapCommandHomeBtn").addClass("esri-icon esri-icon-home"), $("#mainMap_zoom_location div").addClass("esri-icon esri-icon-locate"), $("#mainMap_zoom_location img").hide(), $(".mapCommandHomeBtn").parent().append($("mainMap_container")), $("#placardContainer").removeClass("placardUnder"), $(".textArea").css("padding-left", "0px"), $(".logo img").css("display") == "block" || $(".logo img").css("display") == "inline" ? setTimeout(function() {
              $(".textArea").css("left", $(".logo img").width() + 12)
          }, 0) : setTimeout(function() {
              $(".textArea").css("left", $(".logo").width() + 12)
          }, 0), $("#leftPanel").append($("#mapPanel")), $("#leftPanel").append($("#placardContainer")), app.isInBuilderMode && app.data.sourceIsFS() && e == "side-panel" && ($(".file-input-name").hide(), $(".builderImageTarget .file-input-wrapper").height($(".builderImageTarget").height()), $(".builderImageTarget .file-input-wrapper").width($(".builderImageTarget").width()), $(".builderImageTarget .file-input-wrapper").css("margin-top", "-30px"), $(".builderImageTarget .file-input-wrapper").css("opacity", 0))) : e == "side-panel" && t ? ($("body").removeClass("modern-layout"), $("body").addClass("side-panel"), $(".member-image img").css("opacity", "1"), $(".member-image").css("background-image", "none"), $("body").addClass("mobile-layout-scroll"), $("#mobile-scroll-story-contenthand").before($("#mapPanel")), $("#cfader").append($("#placardContainer")), $("#picturePanel").prepend($("#arrowPrev")), $("#picturePanel").css("left", 0), $("#picturePanel").append($(".btn-fullscreen")), $("#arrowPrev").css("position", "absolute"), $("#picturePanel").append($("#arrowNext")), $(".rightArea").append($(".logo")), $("#basemapChooser .dijitTitlePaneTextNode").html(i18n.viewer.builderJS.switchBM), $(".dijitTitlePaneTextNode").removeClass("fa fa-2x fa-th-large"), $("#headerDesktop .text_edit_icon").removeClass("pencilIconDiv"), $(".mapCommandHomeBtn").addClass("esri-icon esri-icon-home"), $("#mainMap_zoom_location img").hide(), $("#mainMap_zoom_location div").addClass("esri-icon esri-icon-locate"), $(".mapCommandHomeBtn").parent().append($("mainMap_container")), $("#leftPanel").height("35%"), $("#leftPanel").width($("body").width() * (1 / 3))) : ($("body").removeClass("modern-layout"), $("body").removeClass("side-panel"), $(".member-image img").css("opacity", "1"), $(".member-image").css("background-image", "none"), $("body").removeClass("mobile-layout-scroll"), $("#contentPanel").append($("#mapPanel")), $("#cfader").append($("#placardContainer")), $("#picturePanel").prepend($("#arrowPrev")), $("#picturePanel").css("left", 0), $(".member-image.current").after($(".btn-fullscreen")), $("#arrowPrev").css("position", "absolute"), $("#arrowPrev").attr("src", "resources/icons/picturepanel-left.png"), $("#arrowNext").attr("src", "resources/icons/picturepanel-right.png"), $("#picturePanel").append($("#arrowNext")), $(".rightArea").append($(".logo")), $(".textArea").css("padding-left", "25px"), $("#basemapChooser .dijitTitlePaneTextNode").html(i18n.viewer.builderJS.switchBM), $(".dijitTitlePaneTextNode").removeClass("fa fa-2x fa-th-large"), $("#headerDesktop .text_edit_icon").removeClass("pencilIconDiv"), $(".mapCommandHomeBtn").parent().append($("mainMap_zoom_slider")), $(".mapCommandHomeBtn").removeClass("sidePanelHome"), $(".mapCommandHomeBtn").removeClass("esri-icon esri-icon-home"), $("#mainMap_zoom_location div").removeClass("esri-icon esri-icon-locate"), $("#mainMap_zoom_location img").show(), $(".builderImageTarget").hide(), $("#leftPanel").height(0), $("#leftPanel").width($("body").width() * (1 / 3))), app.isInBuilderMode && (app.data.sourceIsNotFSAttachments() ? ($(".editPictureButtons .attributesWay", $("#picturePanel")).show(), $(".editPictureButtons .modernBrowserWay", $("#picturePanel")).hide(), $(".editPictureButtons .oldBrowserWay", $("#picturePanel")).hide()) : r.browserSupportAttachementUsingFileReader() ? ($(".editPictureButtons .modernBrowserWay", $("#picturePanel")).show(), $(".editPictureButtons .attributesWay", $("#picturePanel")).hide()) : ($(".editPictureButtons .oldBrowserWay", $("#picturePanel")).show(), $(".editPictureButtons .attributesWay", $("#picturePanel")).hide())), !app.isLoading
      }

      function V(e) {
          console.log("maptour.core.Core - updateUI");
          var t = app.data.getTourPoints(),
              n = u.getColors(),
              r = e && e.editFirstRecord;
          X(u.getLayout()), app.header.setTitleAndSubtitle(u.getTitle() || app.data.getWebMapItem().item.title, u.getSubtitle() || app.data.getWebMapItem().item.snippet), app.header.setColor(n[0]);
          var i = u.getLogoURL() || APPCFG.HEADER_LOGO_URL;
          app.header.setLogoInfo(i, i == APPCFG.HEADER_LOGO_URL ? APPCFG.HEADER_LOGO_TARGET : u.getLogoTarget()), app.header.setTopRightLink(u.getHeaderLinkText() === undefined ? APPCFG.HEADER_LINK_TEXT : u.getHeaderLinkText(), u.getHeaderLinkURL() === undefined ? APPCFG.HEADER_LINK_URL : u.getHeaderLinkURL()), app.header.setSocial(u.getSocial()), M.updateUI(t, n, r), J()
      }

      function J() {
          var e = f.isOnMobileView(),
              t = $("#mapViewLink").hasClass("current");
          e ? $("body").addClass("mobile-view") : $("body").removeClass("mobile-view"), (!e && $("body").hasClass("mobile-layout-scroll") || e && $("body").hasClass("side-panel")) && X(u.getLayout() || configOptions.layout, e);
          var n = $("body").width(),
              r = $("body").height(),
              i = $("#header").height(),
              s = $("#footer").height(),
              o = r - (i + s);
          app.header.resize(n), M.resize({
              isMobileView: e,
              isOnMobileMapView: t,
              width: n,
              height: o
          }), app.initScreenIsOpen || $("#contentPanel").height($("body").hasClass("mobile-view") && $("body").hasClass("mobile-layout-scroll") ? "100%" : o + (e ? 0 : f.isModernLayout() ? s : 0)), app.embedBar && app.embedBar.initiated && $("#contentPanel").height($("#contentPanel").height() - 26), $("#contentPanel").width(n), app.isInBuilderMode || $("#placard .description").css("overflow-y", "auto"), $("body").hasClass("side-panel") ? ($(".logo img").css("display") == "block" || $(".logo img").css("display") == "inline" ? setTimeout(function() {
              $(".textArea").css("left", $(".logo img").width() + 12)
          }, 0) : setTimeout(function() {
              $(".textArea").css("left", $(".logo").width() + 12)
          }, 0), $("body").hasClass("mobile-layout-scroll") ? ($("#leftPanel").width("100%"), $("#mapPanel").width("100%")) : $("body").hasClass("builder-mode") ? ((n - 60) * (1 / 3) > 500 ? ($("#leftPanel").width((n - 60) * (1 / 3)), $("#mapPanel").width((n - 60) * (1 / 3)), $("#placardContainer").width((n - 60) * (1 / 3)), $("#placard").css("max-width", (n - 60) * (1 / 3)), $("#picturePanel").width((n - 60) * (2 / 3)), $("#picturePanel").css("left", $("#leftPanel").width() + 60)) : ($("#leftPanel").width(500), $("#mapPanel").width(500), $("#placardContainer").width(500), $("#placard").css("max-width", "500px"), $("#picturePanel").width($("body").width() - 560)), app.data.hasIntroRecord() && ($("#arrowPrev").css("top", "60px"), $("#arrowNext").css("top", "60px"))) : (n * (1 / 3) <= 400 ? ($("#leftPanel").width(400), $("#mapPanel").width(400), $("#placardContainer").width(400), $("#picturePanel").width(n - 400)) : ($("#leftPanel").width(n * (1 / 3)), $("#mapPanel").width(n * (1 / 3)), $("#placardContainer").width(n * (1 / 3)), $("#picturePanel").width(n * (2 / 3))), $("#picturePanel").css("left", $("#leftPanel").width()), $("#arrowPrev").css("top", "20px"), $("#arrowNext").css("top", "20px")), app.data.hasIntroRecord() && !$("body").hasClass("builder-mode") && $("#splashText").css("max-height", $(window).height() - 375 - .1 * $(window).height())) : ($("#mapPanel").width(n - $("#picturePanel").width()), $("#placard").css("max-width", "none")), app.isInBuilderMode && app.builder.resize({
              isMobileView: e
          });
          if (app.map && (!e || e && t)) try {
              app.map.resize(!0)
          } catch (a) {}
          e ? $("#mainMap .esriControlsBR > div").first().removeClass("logo-med").addClass("logo-sm") : $("#mainMap .esriControlsBR > div").first().removeClass("logo-sm").addClass("logo-med")
      }

      function K() {
          $(".esriSignInDialog td label").siblings("br").css("display", "none"), $(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css("display", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("padding", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("margin-bottom", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("border", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitValidationContainer").css("display", "none"), $(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px"), $(".esriSignInDialog").find(".dijitDialogTitleBar").find(".dijitDialogTitle").first().html("Authentication is required"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>Please sign in with an account on <a href='http://" + d._arcgisUrl + "' title='" + d._arcgisUrl + "' target='_blank'>" + d._arcgisUrl + "</a> to access the application.</div>")
      }

      function Q() {
          $(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").css("display", "none"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaAtlasLoginText'>Please sign in with an account on <a href='http://" + d._arcgisUrl + "' title='" + d._arcgisUrl + "' target='_blank'>" + d._arcgisUrl + "</a> to configure this application.</div>")
      }

      function G() {
          $("#mainMap_root").remove(), $("#header").css("display", "inherit"), $(".mobileView").css("display", "inherit"), $("#footer").css("display", "inherit"), $("#fatalError").css("display", "none"), $("#loadingOverlay").css("top", "0px"), $("#loadingIndicator").show(), loadingIndicator.setMessage(i18n.viewer.loading.step2), rt(), J()
      }

      function Y() {
          window.location = app.isPortal && APPCFG.HELP_URL_PORTAL ? APPCFG.HELP_URL_PORTAL : APPCFG.HELP_URL
      }

      function Z() {
          loadingIndicator.setMessage(i18n.viewer.loading.redirectSignIn + "<br />" + i18n.viewer.loading.redirectSignIn2), setTimeout(function() {
              window.location = n.arcgisUrl.split("/sharing/rest/")[0] + "/home/signin.html?returnUrl=" + encodeURIComponent(document.location.href)
          }, 2e3)
      }

      function et() {
          loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder), setTimeout(function() {
              window.location = document.location.href + "&fromGallery"
          }, 1200)
      }

      function tt() {
          $("#header").hide(), $(".mobileView").hide(), $("#footer").hide(), $(".modal").hide()
      }

      function nt() {
          $("#contentPanel").show(), $("#footerMobile").show(), $("#mapPanel").show(), app.mobileCarousel.setSelectedPoint(app.data.getCurrentIndex()), J()
      }

      function rt() {
          app.loadingTimeout = setTimeout(st, APPCFG.TIMEOUT_VIEWER_LOAD)
      }

      function it() {
          typeof app != "undefined" && app.loadingTimeout && (clearTimeout(app.loadingTimeout), app.loadingTimeout = null)
      }

      function st() {
          if (d && d.dialog && d.dialog._alreadyInitialized && !d.loadingTimeoutAlreadyFired) {
              clearTimeout(app.loadingTimeout), rt(), d._busy || (d.loadingTimeoutAlreadyFired = !0);
              return
          }
          $("#loadingIndicator, #loadingMessage").hide(), loadingIndicator.setMessage(i18n.viewer.loading.fail + '<br /><button type="button" class="btn btn-medium btn-info" style="margin-top: 5px;" onclick="document.location.reload()">' + i18n.viewer.loading.failButton + "</button>", !0), app.map && app.map.destroy()
      }

      function ot() {
          document.documentElement.lang = T.locale, k("#fatalError .error-title")[0].innerHTML = i18n.viewer.errors.boxTitle
      }

      function ut() {
          return O.environment != ["TPL", "ENV", "DEV"].join("_")
      }

      function at() {
          return O.forcePreviewScreen == ["TPL", "PREVIEW", "TRUE"].join("_")
      }
      var O = {
              forcePreviewScreen: "TPL_PREVIEW_FALSE",
              environment: "TPL_ENV_PRODUCTION"
          },
          M = null;
      return typeof String.prototype.trim != "function" && (String.prototype.trim = function() {
          return this.replace(/^\s+|\s+$/g, "")
      }), Date.now || (Date.now = function() {
          return (new Date).valueOf()
      }), {
          init: _,
          isProd: ut,
          appInitComplete: R,
          displayApp: U,
          cleanLoadingTimeout: it,
          initError: z,
          handleWindowResize: J,
          prepareAppForWebmapReload: G,
          loadWebMap: I,
          replaceInitErrorMessage: W,
          portalLogin: F
      }
  }), define("storymaps/maptour/core/FeatureServiceManager", ["storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/MapTourHelper", "esri/graphic", "esri/geometry/Point", "dojo/topic"], function(e, t, n, r, i) {
      return function() {
          function f(e, t, n) {
              n.geometry != null && (u++, e.queryAttachmentInfos(n.attributes[t], function(e) {
                  l(n, e)
              }, function(e) {
                  c(n, e)
              }))
          }

          function l(i, s) {
              a++;
              if (s && s.length >= 2) {
                  var f = s[0].id < s[1].id ? s[0] : s[1],
                      l = s[0].id > s[1].id ? s[0] : s[1];
                  if (t.isSupportedImgExt(f.name) && t.isSupportedImgExt(l.name)) {
                      var c = new n(new r(i.geometry.x, i.geometry.y, i.geometry.spatialReference), null, new e(i, f.url, l.url));
                      o.push(c)
                  }
              }
              a == u && h()
          }

          function c(e) {
              console.error(i18n.viewer.errors.featureServiceLoad, e, a, u), a++, a == u && h()
          }

          function h() {
              setTimeout(function() {
                  i.publish("FS_MANAGER_LAYER_LOADED", {
                      graphics: o
                  })
              }, 0)
          }
          var o = [],
              u = 0,
              a = 0;
          this.process = function(t, i) {
              var s;
              if (i || !t.hasAttachments) {
                  for (s = 0; s < t.graphics.length; s++) {
                      var u = t.graphics[s],
                          a = new n(new r(u.geometry.x, u.geometry.y, u.geometry.spatialReference), null, new e(u));
                      o.push(a)
                  }
                  h()
              } else {
                  for (s = 0; s < t.graphics.length; s++) f(t, app.data.getSourceLayer().objectIdField, t.graphics[s]);
                  t.graphics.length === 0 && h()
              }
          }
      }
  }), define("storymaps/ui/multiTips/MultiTips", ["dojo/dom-style", "dojo/dom-construct", "dojo/_base/lang", "dojo/on", "dojo/_base/array", "dojo/query", "dojo/dom", "dojo/has"], function(e, t, n, r, i, s, o, u) {
      return function(f) {
          function p(e) {
              l = n.mixin({
                  pointArray: [],
                  map: null,
                  attributeLabelField: "",
                  content: "",
                  zoomToPoints: !1,
                  backgroundColor: "#000000",
                  borderColor: "#000000",
                  pointerColor: "#000000",
                  textColor: "#ffffff",
                  minWidth: "",
                  labelDirection: "auto",
                  offsetTop: 8,
                  offsetSide: 3,
                  offsetBottom: 8,
                  mapAuthorizedWidth: -1,
                  mapAuthorizedHeight: -1,
                  visible: !0
              }, e), e.mapAuthorizedWidth == -1 && (l.mapAuthorizedWidth = l.map.width), e.mapAuthorizedHeight == -1 && (l.mapAuthorizedHeight = l.map.height), d(e.map.container)
          }

          function d(n, o) {
              v();
              var u = r(l.map, "zoom-start", function() {
                      y()
                  }),
                  a = r(l.map, "zoom-end", function(e) {
                      c || m(e.extent, !0)
                  }),
                  f = r(l.map, "pan", function(e) {
                      if (!e || !e.delta.x && !e.delta.y) return;
                      c || g(e.extent, e.delta)
                  }),
                  p = r(l.map, "extent-change", function(e) {
                      if (e && e.delta && e.delta.x === 0 && e.delta.y === 0) return;
                      c || m(e.extent, !0)
                  });
              o && (l.visible = !0), i.forEach(l.pointArray, function(r, i) {
                  t.place("<div id='arrow" + i + "' class='mtArrow'></div><div id='multiTip" + i + "' tabindex='-1' class='multiTip'></div>", n, "last"), s("#multiTip" + i)[0].innerHTML = l.content, e.set("multiTip" + i, {
                      backgroundColor: l.backgroundColor,
                      borderColor: l.borderColor,
                      color: l.textColor,
                      padding: "5px",
                      position: "absolute"
                  }), l.minWidth && e.set("multiTip" + i, "minWidth", l.minWidth + "px"), e.set("arrow" + i, {
                      position: "absolute",
                      width: "0px",
                      height: "0px"
                  });
                  if (l.map.extent.contains(r.geometry)) {
                      var o = l.map.toScreen(r.geometry);
                      E(o, i, l)
                  }
              }), h = [u, a, f, p]
          }

          function v() {
              c = !1, i.forEach(h, function(e) {
                  e.remove()
              }), s(".multiTip").forEach(t.destroy), s(".mtArrow").forEach(t.destroy)
          }

          function m(e, t) {
              i.forEach(l.pointArray, function(n, r) {
                  e.contains(n.geometry) && (w(r) || t) ? E(l.map.toScreen(n.geometry), r, l) : b(r)
              })
          }

          function g(e, t) {
              i.forEach(l.pointArray, function(n, r) {
                  if (e.contains(n.geometry)) {
                      var i = l.map.toScreen(n.geometry);
                      i.x += t.x, i.y += t.y, E(i, r, l)
                  } else b(r)
              })
          }

          function y() {
              s(".multiTip, .mtArrow").forEach(function(e) {
                  e.style.display = "none"
              })
          }

          function b(t) {
              if (e.get(o.byId("multiTip" + t), "display") == "none") return;
              e.set(o.byId("multiTip" + t), "display", "none"), e.set(o.byId("arrow" + t), "display", "none")
          }

          function w(t) {
              return e.get(o.byId("multiTip" + t), "display") == "block"
          }

          function E(t, n, r) {
              if (t.x > r.mapAuthorizedWidth || t.y > r.mapAuthorizedHeight) {
                  b(n);
                  return
              }
              var i = e.get("multiTip" + n, "width"),
                  s = e.get("multiTip" + n, "height");
              u("ie") == 8 && (i -= 7, s -= 14);
              if (!i || !s) e.set(o.byId("multiTip" + n), "display", r.visible ? "block" : "none"), e.set(o.byId("arrow" + n), "display", r.visible ? "block" : "none"), i = e.get("multiTip" + n, "width"), s = e.get("multiTip" + n, "height");
              r.minWidth && i < r.minWidth && (i = r.minWidth);
              if (r.labelDirection != "auto") r.labelDirection == "left" ? N(t, n, r, i, s) : r.labelDirection == "right" ? T(t, n, r, i, s) : r.labelDirection == "down" ? S(t, n, r, i, s) : x(t, n, r, i, s);
              else if (t.x < i / 2 + 25 + r.offsetSide + r.topLeftNotAuthorizedArea[0] && t.y < r.topLeftNotAuthorizedArea[1] + s) {
                  if (t.y < s - 15 || t.x < 35 + r.topLeftNotAuthorizedArea[0] && t.y < r.topLeftNotAuthorizedArea[1]) {
                      b(n);
                      return
                  }
                  T(t, n, r, i, s)
              } else if (t.x < i / 2 + 25 + r.offsetSide) {
                  if (t.y < s - 15 || t.y > r.mapAuthorizedHeight - s / 2 - 10) {
                      b(n);
                      return
                  }
                  T(t, n, r, i, s)
              } else if (t.x > r.mapAuthorizedWidth - i / 2 - 10) {
                  if (t.y < s - 15 || t.y > r.mapAuthorizedHeight - s / 2 - 10) {
                      b(n);
                      return
                  }
                  N(t, n, r, i, s)
              } else t.y > s + 25 + r.offsetTop ? x(t, n, r, i, s) : S(t, n, r, i, s);
              e.set(o.byId("multiTip" + n), "display", r.visible ? "block" : "none"), e.set(o.byId("arrow" + n), "display", r.visible ? "block" : "none")
          }

          function S(t, n, r, i) {
              e.set("multiTip" + n, {
                  top: t.y + 10 + r.offsetBottom + "px",
                  left: t.x - i / 2 - 5 + "px"
              }), e.set("arrow" + n, {
                  left: t.x - 10 + "px",
                  top: t.y + r.offsetBottom + "px",
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderBottom: "10px solid",
                  borderBottomColor: r.pointerColor,
                  borderTop: "none"
              })
          }

          function x(t, n, r, i, s) {
              e.set("multiTip" + n, {
                  top: t.y - s - 24 - r.offsetTop + "px",
                  left: t.x - i / 2 - 5 + "px"
              }), e.set("arrow" + n, {
                  left: t.x - 10 + "px",
                  top: t.y - 10 - r.offsetTop + "px",
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "10px solid",
                  borderTopColor: r.pointerColor,
                  borderBottom: "none"
              })
          }

          function T(t, n, r, i, s) {
              e.set("multiTip" + n, {
                  top: t.y - 12 - (s - 10) / 2 + "px",
                  left: t.x + 10 + r.offsetSide + "px"
              }), e.set("arrow" + n, {
                  left: t.x + r.offsetSide + "px",
                  top: t.y - 10 + "px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: "10px solid",
                  borderRightColor: r.pointerColor,
                  borderLeft: "none"
              })
          }

          function N(t, n, r, i, s) {
              e.set("multiTip" + n, {
                  top: t.y - 12 - (s - 10) / 2 + "px",
                  left: t.x - 24 - i - r.offsetSide + "px"
              }), e.set("arrow" + n, {
                  left: t.x - 10 - r.offsetSide + "px",
                  top: t.y - 10 + "px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid",
                  borderLeftColor: r.pointerColor,
                  borderRight: "none"
              })
          }
          var l = null,
              c = !1,
              h = [];
          p(f), this.current = function() {
              return l.pointArray
          }, this.clean = function() {
              l = null, v()
          }, this.hide = function() {
              c = !0, y()
          }, this.show = function() {
              if (!l) return;
              c = !1, l.visible = !0, m(l.map.extent, !0)
          }
      }
  }), define("storymaps/maptour/ui/desktop/Carousel", ["dojo/has", "storymaps/utils/Helper", "storymaps/maptour/core/MapTourHelper", "dojo/topic"], function(e, t, n, r) {
      return function(s) {
          function d(t) {
              f = -1, u = n.isModernLayout() ? 156 : 161, $(s + " .carouselScroller").css("width", t.length * u + "px"), $(s + " .carouselWrapper").mousemove(function(e) {
                  h.onMove[0] = e.screenX, h.onMove[1] = e.screenY
              }), a = new iScroll($(s + " .carouselWrapper")[0], {
                  hideScrollbar: !0,
                  vScroll: !1,
                  onBeforeScrollMove: function(e) {
                      if (Math.abs(h.onScroll[0] - e.screenX) > 5 || Math.abs(h.onScroll[1] - e.screenY) > 5) c = !0;
                      b(), x()
                  },
                  onScrollStart: function() {
                      h.onScroll = [h.onMove[0], h.onMove[1]]
                  },
                  onBeforeScrollEnd: function() {
                      e("touch") && (c = !1)
                  },
                  onScrollEnd: function() {
                      b(), x()
                  }
              }), b(), $(s + " .carouselScroller ul").html(v(t)).removeAttr("aria-hidden"), $(s + " .carousel-item-div").focus(function(e) {
                  var t = $(s + " .carousel-item-div.selected").parents("li").index(),
                      n = $(this).parents("li").index();
                  t != n && (r.publish("CAROUSEL_CLICK", n), p = !0)
              }), $(s + " .carousel-item-div").on("keydown", function(e) {
                  var t = $(s + " .carousel-item-div.selected").parents("li").index(),
                      n = $(this).parents("li").index();
                  if (e.keyCode === 9 && !event.shiftKey && t == n && t == $(".carousel-item-div").length - 1) return window != window.top ? !0 : ($("#headerDesktop .msLink *, #headerDesktop .shareIcon").attr("tabindex", "0"), $("#headerDesktop .msLink a").length ? $("#headerDesktop .msLink a")[0].focus() : $("#headerDesktop .msLink span").length ? $("#headerDesktop .msLink span")[0].focus() : $("#headerDesktop .shareIcon:visible").length ? $("#headerDesktop .shareIcon")[0].focus() : $("#headerDesktop .title")[0].focus(), !1)
              }), f = 14, $(s + " .carouselScroller ul img").slice(0, f).each(function(e, t) {
                  app.org && app.org.allSSL && app.data.isFSWithURLFields() && $(t).data("src").slice(0, 5) != "https" ? $(t).attr("src", "https:" + $(t).data("src").slice(5)) : $(t).attr("src", $(t).data("src"))
              }), l != null && (o.setSelectedIndex(l), l = null)
          }

          function v(e) {
              var t = "";
              return $(e).each(function(e, r) {
                  var i = n.getSymbolCss(r.attributes.getColor());
                  t += "<li>", t += ' <div class="carousel-item-div" tabindex="0">', t += '  <span class="' + i + '"><img data-src="' + r.attributes.getThumbURL() + '" onerror="mediaNotFoundHandler(this)" /></span>', t += "  <div>" + $("<div>" + r.attributes.getName() + "</div>").html() + "</div>", t += '  <div style="height: 0;">.</div><div style="height: 0;">.</div>', t += '  <div style="height: 0;">' + $("<div>" + r.attributes.getDescription() + "</div>").text() + "</div>", t += " </div>", t += "</li>"
              }), t
          }

          function m() {
              $(s).click(g), r.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", w)
          }

          function g(e) {
              if (!e || !e.target) return;
              e.target.className == "arrowLeft" ? E(-1) : e.target.className == "arrowRight" ? E(1) : setTimeout(function() {
                  y(e)
              }, 50)
          }

          function y(e) {
              var t = $(e.target).closest("li").index();
              !c && t != -1 && r.publish("CAROUSEL_CLICK", t), c = !1
          }

          function b() {
              if (!a) return;
              if (a.x == a.maxScrollX || a.x === 0) c = !1;
              a.x > -25 ? $(s + " .arrowLeft").addClass("disabled") : $(s + " .arrowLeft").removeClass("disabled").attr("src", "resources/icons/carousel-left.png"), a.scrollerW + a.x - a.wrapperW < 25 ? $(s + " .arrowRight").addClass("disabled") : $(s + " .arrowRight").removeClass("disabled").attr("src", "resources/icons/carousel-right.png")
          }

          function w(e) {
              var t = $(s + " .carouselScroller li:nth-child(" + (e.index + 1) + ")");
              t.find(".carousel-item-div > div").html(e.name), t.find(".carousel-item-div > span").attr("class", n.getSymbolCss(e.color))
          }

          function E(e) {
              var t = Math.floor(a.wrapperW / u) + 1;
              T(a.x - e * t * u, t)
          }

          function S(e) {
              if (!a || e == null) return;
              x();
              var t = Math.ceil(Math.abs(a.x / u)) + 1,
                  n = Math.floor(Math.abs((a.x - a.wrapperW - 15) / u));
              if (e + 1 >= t && e + 1 <= n) return;
              t == 1 && n === 0 ? ($(s + " .carousel-item-div").css("visibility", "hidden"), setTimeout(function() {
                  T(Math.max(-e * u), Math.abs(t - e), !0), $(s + " .carousel-item-div").css("visibility", "visible")
              }, 0)) : T(Math.max(-e * u), Math.abs(t - e))
          }

          function x() {
              var e = Math.floor(Math.abs((a.x - a.wrapperW - 15) / u)),
                  t = e + 10;
              if (f >= t) return;
              $(s + " .carouselScroller ul img").slice(f, t).each(function(e, t) {
                  t = $(t), t.attr("src", t.data("src"))
              }), f = t
          }

          function T(e, t, n) {
              var r = Math.max(Math.min(0, e), a.maxScrollX);
              a.scrollerW + e - u > 0 && (r = Math.ceil(r / u) * u), a.scrollTo(r, 0, n ? 0 : Math.min(2e3, Math.max(500, t * 150)))
          }

          function N(e, r) {
              $("#footer, #builderPanel2, #builderPanel3").css("background-color", t.hex2rgba(e, n.isModernLayout() ? .85 : 1)), r != "rgb(125, 125, 125)" && t.addCSSRule(".carouselScroller.no-touch .carousel-item-div:not(.selected):hover { background-color: " + r + " !important; }")
          }
          var o = this,
              u = 161,
              a = null,
              f = -1,
              l = null,
              c = !1,
              h = {
                  onMove: [-1, -1],
                  onScroll: [-1, -1]
              },
              p = !1;
          this.init = function(t, n, r) {
              N(n, r), d(t), m(), e("touch") || $(s + " .carouselScroller").addClass("no-touch")
          }, this.update = function(e, t, n) {
              N(t, n), a && a.destroy(), d(e)
          }, this.resize = function() {
              b()
          }, this.iefix = function() {
              setTimeout(function() {
                  $(s).width("100%"), setTimeout(function() {
                      $(s).css("width", "inherit")
                  }, 500)
              }, 0)
          }, this.setSelectedIndex = function(e) {
              if (e == null || e == -1) return;
              $(".carousel-item-div").length || (l = e), $(s + " .carousel-item-div").removeClass("selected"), $(s + " .carousel-item-div").eq(e).addClass("selected");
              if (!app.isLoading) {
                  var t = !!$(":focus").parents("#footerDesktop").length;
                  $(":focus").blur(), (p || t) && $(s + " .carousel-item-div").eq(e).focus(), p = !1
              }
              S(e), b()
          }, this.checkItemIsVisible = function(e) {
              if (!a) return;
              S(e)
          }
      }
  }), define("storymaps/ui/crossfader/CrossFader", ["storymaps/ui/inlineFieldEdit/InlineFieldEdit", "storymaps/ui/loadingIndicator/LoadingIndicator", "storymaps/maptour/core/MapTourHelper", "dojo/topic", "dojo/has"], function(e, t, n, r, i) {
      return function(o, u) {
          function D() {
              A = $(S).find("img")[0].naturalWidth, O = $(S).find("img")[0].naturalHeight;
              if (A == null) {
                  var e = new Image;
                  e.src = $(S).find("img").eq(0).attr("src"), A = e.width, O = e.height
              }
              P(), B(), j(M, _), r.publish("CROSSFADER_CHANGE", [A, O])
          }

          function P() {
              var e = $(f).width() - 6,
                  t = $(f).height();
              if (n.isPanelsLayout()) {
                  $(S).width(e + 6), $(S).height(t), $(".member-image").css({
                      top: 0
                  });
                  return
              }
              c && (t -= 70);
              var r = A / O,
                  i = e / t;
              r > i ? ($(S).width(e), $(S).height(e / r)) : ($(S).height(t), $(S).width(t * r)), $("body").hasClass("side-panel") || $(S).css("left", (e - $(S).width()) / 2), $(S).css("top", Math.floor((t - $(S).height()) / 2)), H(), b.css("right", (e - $(S).width()) / 2 + 6), b.css("top", parseFloat($("#cfader > .current").first().css("top")) + 5)
          }

          function H() {
              if (n.isPanelsLayout()) return;
              if (c) {
                  $(C).addClass("placardUnder"), $(C).css("height", "auto");
                  var e = $(f).height() - $(S).height(),
                      t = $("#placardContainer")[0].scrollHeight,
                      r, s, o, u;
                  $(C).find("#placard-bg").css("display", "block"), t > e - 40 ? (r = 0, s = Math.max(e - 30, 50), o = "auto", u = 0) : (r = (e - t - 25) / 2, s = "auto", o = $(S).height() + r + 25, u = "auto"), $(C).css("height", s), $(C).css("top", o), $(C).css("bottom", u), $(S).css("top", r)
              } else $(C).removeClass("placardUnder"), $("#toggle").toggle(!n.isPanelsLayout()), $(C).css("height", "auto"), $(C).css("top", "auto"), $(C).css("bottom", Math.ceil(($(f).outerHeight() - a.currentHeight()) / 2));
              l ? ($(C).css("left", ($(f).width() - a.currentWidth()) / 2 - 1), $(C).css("width", a.currentWidth() - 2)) : ($(C).css("left", ($(f).width() - a.currentWidth()) / 2 + 3), $(C).css("width", a.currentWidth() - 6)), (i("ie") == 7 || i("ie") == 8) && $(C).css("left", parseInt($(C).css("left"), 10) - 3 + (l ? 3 : 0))
          }

          function B() {
              $(S).addClass("current"), $(x).removeClass("current"), $(S).fadeTo("slow", 1), $(x).fadeTo("slow", 0, function() {
                  $(x).hide()
              }), setTimeout(function() {
                  T.stop()
              }, 100)
          }

          function j(t, r) {
              var i = app.data.sourceIsFS() ? 254 : 1e3,
                  s = 1e3;
              u ? ($.each(app.data.getSourceLayer().fields, function(e, t) {
                  t.name == app.data.getFieldsConfig().getNameField() && (i = t.length || i), t.name == app.data.getFieldsConfig().getDescriptionField() && (s = t.length || s)
              }), t = "<div class='text_edit_label'>" + (t || i18n.viewer.headerJS.editMe) + "</div>", $("body").hasClass("side-panel") ? t += "<div class='pencilIconDiv'><i class='fa fa-pencil' title='" + i18n.viewer.crossFaderJS.setPicture + "'></i></div>" : t += "<div class='text_edit_icon' title='" + i18n.viewer.crossFaderJS.setPicture + "'></div>", t += "<textarea rows='3' class='text_edit_input' type='text' spellcheck='true'" + (i ? "maxlength='" + (i - (t.match(/=/g) || []).length) + "'" : "") + "></textarea>", r = "<div class='text_edit_label'>" + (r || i18n.viewer.headerJS.editMe) + "</div>", $("body").hasClass("side-panel") ? r += "<div class='pencilIconDiv'><i class='fa fa-pencil' title='" + i18n.viewer.crossFaderJS.setCaption + "'></i></div>" : r += "<div class='text_edit_icon' title='" + i18n.viewer.crossFaderJS.setCaption + "'></div>", r += "<textarea rows='6' class='text_edit_input' type='text' spellcheck='true'" + (s ? "maxlength='" + (s - (r.match(/=/g) || []).length) + "'" : "") + "></textarea>") : ($(C).toggleClass("no-description", r === ""), $(C).toggleClass("force-hidden", !$("body").hasClass("side-panel") && t === "" && r === ""));
              var o = "tabindex='-1' aria-hidden='true'";
              app.isLoading && app.data.hasIntroRecord() && (o = "tabindex='0'"), $(N).empty();
              if ($("body").hasClass("side-panel")) {
                  app.data.hasIntroRecord() && (app.data.getCurrentIndex() == null || app.data.getCurrentIndex() == -1) && ($(N).append("<div class='cover-builder'><div class='cover-config'>" + i18n.viewer.builderHTML.coverBuilder + "<i class='fa fa-small fa-question-circle cover-builder-tooltip' title='" + i18n.viewer.builderHTML.coverPreview + "'></i></div></div>"), $(N).append("<div class='feature-id'></div>"), $(N).append("<div class='name' " + o + ">" + t + "</div>"), $("body").hasClass("builder-mode") && ($("#arrowPrev").hide(), app.data.hasIntroRecord() && !app.data.getIntroData().attributes.isVideo() && n.mediaIsSupportedImg(app.data.getIntroData().attributes.getURL()) && $(".cover-novideo-tooltip").hide()));
                  if (app.data.getCurrentIndex() > -1 && app.data.getCurrentIndex() != null) {
                      $("body").hasClass("builder-mode") && (app.data.getCurrentIndex() > 0 && !n.isModernLayout() ? $("#arrowPrev").show() : $("#arrowPrev").hide(), $(N).append("<div class='cover-builder' style='background-color: white;'><div class='btn btn-primary coverRecordButton'>" + i18n.viewer.builderHTML.cover + "</div><i class='fa fa-small fa-exclamation-circle cover-novideo-tooltip' title='" + i18n.viewer.builderHTML.coverNoVideo + "'></i></div>"), $(".cover-novideo-tooltip").css("margin-left", $(".coverRecordButton").width() + 57), app.data.hasIntroRecord() && !app.data.getIntroData().attributes.isVideo() && n.mediaIsSupportedImg(app.data.getIntroData().attributes.getURL()) ? $(".cover-novideo-tooltip").hide() : $(".cover-novideo-tooltip").show());
                      var a = app.data.getCurrentAttributes().getColor() || APPCFG.PIN_DEFAULT_CFG;
                      a = a && typeof a == "string" ? a.toLowerCase() : "r", a != "r" && a != "g" && a != "b" && a != "p" && (a = APPCFG.PIN_DEFAULT_CFG);
                      var f = n.getCustomColor(a);
                      app.data.getCurrentIndex() + 1 < 10 ? ($(N).append("<div class='feature-id' style='margin-left: 25px; width: 25px; color:" + f + ";'>" + (app.data.getCurrentIndex() + 1) + "</div>"), $(N).append("<div style='margin-left: 15px' class='name' " + o + ">" + t + "</div>")) : ($(N).append("<div class='feature-id' style='letter-spacing: -2px; color:" + f + ";'>" + (app.data.getCurrentIndex() + 1) + "</div>"), $(N).append("<div class='name' " + o + ">" + t + "</div>"))
                  }
                  $("#contentPanel").prepend($(".btn-fullscreen")), app.data.hasIntroRecord() && app.isInBuilderMode ? ($(".cover-builder").show(), $("#placard .name .fa-pencil").css("top", "73px"), $(".side-panel.builder-mode #arrowPrev").css("top", "60px"), $(".side-panel.builder-mode #arrowNext").css("top", "60px")) : ($(".cover-builder").hide(), $("#placard .name .fa-pencil").css("top", "33px"), $(".side-panel.builder-mode #arrowPrev").css("top", "30px"), $(".side-panel.builder-mode #arrowNext").css("top", "30px"))
              } else $(N).append("<div class='name' " + o + ">" + t + "</div>"), $("body").hasClass("builder-mode") && (app.data.getCurrentIndex() > 0 && !n.isModernLayout() ? $("#arrowPrev").show() : $("#arrowPrev").hide());
              $(N).append("<div class='description' " + o + "'>" + r + "</div>");
              if ($("body").hasClass("side-panel")) {
                  var l = $("#placard-bg").height() - $(".cover-builder").height() - $(".name").height();
                  $(".description").height(l - 70), app.data.hasIntroRecord() && app.isInBuilderMode && $("#placard .description").css("margin-top", "-60px")
              }
              $(N).find("a:not([target])").attr("target", "_blank"), app.isInBuilderMode || $(N).find("a").attr("tabindex", "-1"), u && (app.data.hasIntroRecord() || $(".coverRecordButton").toggle(), $(".coverRecordButton").click(F), new e("#placard", function() {
                  E = !0
              }, q), I(), $(N).find(".name .text_edit_input").keyup(function() {
                  var e = ($(this).val().match(/=/g) || []).length;
                  $(this).attr("maxlength", i - e)
              }), $(N).find(".description .text_edit_input").keyup(function() {
                  var e = ($(this).val().match(/=/g) || []).length;
                  $(this).attr("maxlength", s - e)
              }))
          }

          function F() {
              app.data.setCurrentPointByGraphic(app.data.getIntroData()), r.publish("CORE_UPDATE_UI", {
                  editFirstRecord: !0
              }), $("#arrowPrev").addClass("disabled")
          }

          function I() {
              if (c) {
                  var e = $(N).find(".name .text_edit_label")[0].scrollHeight,
                      t = $(N).find(".description .text_edit_label")[0].scrollHeight;
                  $(N).find(".name .text_edit_input").css("height", e < 96 ? "50px" : "auto"), $(N).find(".description .text_edit_input").css("height", t < 96 ? "50px" : "auto")
              }
          }

          function q() {
              r.publish("CROSSFADER_DATA_UPDATE"), setTimeout(function() {
                  E = !1
              }, 250)
          }
          var a = this,
              f = $(o),
              l = !1,
              c = !1,
              h = !0,
              p, d, v, m, g, y, b, w = !1,
              E = !1,
              S, x, T = new t("pictureLoadingIndicator"),
              N, C, k, L, A = 1,
              O = 1,
              M, _;
          p = document.createElement("div"), $(p).addClass("member-image"), v = document.createElement("img"), $(v).attr("ondragstart", "return false"), $(v).error(function() {
              mediaNotFoundHandler(this)
          }), g = document.createElement("iframe"), d = document.createElement("div"), $(d).addClass("member-image"), m = document.createElement("img"), $(m).attr("ondragstart", "return false"), $(m).error(function() {
              mediaNotFoundHandler(this)
          }), y = document.createElement("iframe"), b = $('<span class="btn-fullscreen disabled"></span>'), $(document).bind("cbox_complete", function() {
              $("#cboxLoadedContent img").click(function() {
                  if (w) return;
                  $.colorbox.close()
              })
          }), k = $("<div id='placard-bg'></div>"), N = $("<div id='placard'></div>"), k.append(N), L = $("<div id='toggle'></div>"), C = $("<div id='placardContainer'></div>"), C.append(L), C.append(k), $(p).append(v).append(g), $(d).append(m).append(y), n.isPanelsLayout() ? ($("#placardContainer").length && ($("#arrowPrev").appendTo($("#leftPanel")), $("#arrowNext").appendTo($("#leftPanel")), $("#placardContainer").remove()), $(f).append(p).append(d), $("#contentPanel").append(b), $(C).insertAfter($("#mapPanel")), $("#arrowPrev").appendTo($("#placard-bg")), $("#arrowNext").appendTo($("#placard-bg")), $("#toggle").hide()) : $(f).append(p).append(d).append(b).append(C), $(v).load(D), $(m).load(D), $(".member-image img, .member-image iframe").hover(function(e) {
              if (!$(e.target).parent().hasClass("current")) return;
              var t;
              $("body").hasClass("side-panel") ? t = e.type == "mouseenter" || $(e.relatedTarget).hasClass("btn-fullscreen") : t = e.type == "mouseenter" || $(e.relatedTarget).hasClass("modern-layout-control") || $(e.relatedTarget).hasClass("btn-fullscreen") || $(e.relatedTarget).is("#placardContainer") || $(e.relatedTarget).parents("#placardContainer").length || $(e.relatedTarget).hasClass("editPictureButtons") || $(e.relatedTarget).parents(".editPictureButtons").length, b.toggleClass("hover", !!t), l && $(".modern-layout-control").toggleClass("hover", !!t)
          }), $("#placardContainer").hover(function(e) {
              if ($(e.relatedTarget).hasClass("modern-layout-control") || $("body").hasClass("side-panel")) return;
              b.toggleClass("hover", e.type != "mouseleave"), l && $(".modern-layout-control").toggleClass("hover", e.type != "mouseleave")
          }), $(L).fastClick(function() {
              $(L).toggleClass("closed", $(k).css("display") != "none"), $(k).slideToggle()
          }), !app.isInBuilderMode && !$("body").hasClass("side-panel") && $(window).keyup(function(e) {
              if ($("#placardContainer").hasClass("placardUnder")) return;
              $(L).toggleClass("closed", e.keyCode == 40), e.keyCode == 40 ? $(k).slideUp() : e.keyCode == 38 && $(k).slideDown()
          }), S = p, this.clean = function() {
              $(N).empty(), $(S).fadeTo("slow", 0), $(x).fadeTo("slow", 0), S = null, x = null, $("#placardContainer").fadeOut()
          }, this.setSource = function(e, t, i, s, o, a) {
              l = s, c = o, h = a, M = t, _ = i;
              var f = e;
              f = f, $(S).find("iframe").attr("src", ""), $("body").hasClass("side-panel") && $("body").hasClass("builder-mode") && $(".builderImageTarget").show(), S = S == p ? d : p, x = S == p ? d : p;
              var v = $(S).find(a ? "img" : "iframe");
              $(S).children().hide(), v.show(), a || (e = n.checkVideoURL(e));
              if (v.attr("src") == e && "objectFit" in document.documentElement.style == 1) D();
              else {
                  var m = e;
                  app.org && app.org.allSSL && app.data.isFSWithURLFields() && e.slice(0, 5) != "https" && (m = "https:" + e.slice(5), v.attr("src", "https:" + e.slice(5))), "objectFit" in document.documentElement.style == 0 ? (v.parent().css({
                      backgroundImage: "url(" + m + ")"
                  }), v.parent().attr("alt", ""), v.attr("src", m)) : v.attr("src", m), v.attr("alt", ""), app.isLoading || T.start()
              }
              h || ($(C).toggleClass("force-hidden", !$("body").hasClass("side-panel") && !u && t === "" && i === ""), A = 800, O = 400, $("body").hasClass("side-panel") && app.data.hasIntroRecord() && (app.data.getCurrentIndex() == -1 || app.data.getCurrentIndex() == null) && ($(S).find("img").attr("src", ""), v.attr("src", ""), setTimeout(function() {
                  $(".builderImageTarget").popover("show")
              }, 500)), setTimeout(function() {
                  B(), j(t, i), r.publish("CROSSFADER_CHANGE", [A, O])
              }, 800)), $("#placardContainer").fadeIn(), b.unbind("click").click(this.fullScreen)
          }, this.invalidate = function() {
              $("#pictureLoadingIndicator").css("padding-top", $(f).height() / 2 - (l || $("body").hasClass("side-panel") ? 30 : 26)), $("#pictureLoadingIndicator").css("padding-left", $(f).width() / 2 - (l || $("body").hasClass("side-panel") ? 54 : 6)), P()
          }, this.currentWidth = function() {
              return $(S).outerWidth()
          }, this.currentHeight = function() {
              return $(S).outerHeight()
          }, this.fullScreen = function() {
              if (E) return;
              w = !0, h ? $.colorbox({
                  href: $(".member-image.current img").attr("src"),
                  photo: !0,
                  title: M,
                  scalePhotos: !0,
                  maxWidth: "90%",
                  maxHeight: "90%"
              }) : $.colorbox({
                  href: $(".member-image.current iframe"),
                  inline: !0,
                  title: M,
                  width: "80%",
                  height: "80%"
              }), setTimeout(function() {
                  w = !1
              }, 800)
          }, this.firstDisplayCheck = function() {
              u && I(), H(), $("body").hasClass("side-panel") || b.css("top", parseFloat($("#cfader > .current").first().css("top")) + 5)
          }, this.exitBuilderMode = function() {
              u = !1;
              var e = $(N).find(".name .text_edit_label").html(),
                  t = $(N).find(".description .text_edit_label").html();
              $(N).empty(), $(N).append("<div class='name'>" + e + "<div/>"), $(N).append("<div class='description'>" + t + "<div/>")
          }, this.invalidate()
      }
  }), define("storymaps/utils/ResamplePicture", ["dojo/has"], function(e) {
      return {
          resample: function(t, n, r, i, s, o, u) {
              if (!t || !n || !r || !i || !s || !o) return !1;
              var a = t.getContext("2d");
              s = Math.min(r, s), o = Math.min(i, o);
              var f = r / i,
                  l = f >= 1 ? s : r / (i / o),
                  c = f < 1 ? o : i / (r / s);
              return c > o ? (l /= c / o, c = o) : l > s && (c /= l / s, l = s), l = parseInt(l, 10), c = parseInt(c, 10), e("ios") && u === 0 ? (t.width = c, t.height = l, a.translate(c, 0), a.rotate(90 * Math.PI / 180)) : e("ios") && u == 180 ? (t.width = c, t.height = l, a.translate(0, l), a.rotate(2 * Math.PI / 180)) : e("ios") && u == -90 ? (t.width = l, t.height = c, a.translate(l, c), a.rotate(180 * Math.PI / 180)) : (t.width = l, t.height = c), a.drawImage(n.get(0), 0, 0, l, c), [l, c]
          }
      }
  }), define("storymaps/maptour/ui/desktop/PicturePanel", ["storymaps/ui/crossfader/CrossFader", "storymaps/maptour/core/MapTourHelper", "storymaps/maptour/core/WebApplicationData", "storymaps/utils/Helper", "storymaps/utils/ResamplePicture", "dojo/topic", "dojo/query"], function(e, t, n, r, i, s, o) {
      return function(a, f) {
          function O(n, r, i) {
              D(), $(a + " #cfader").empty(), this.update(n, i), v = new e(a + " #cfader", f), s.subscribe("CROSSFADER_CHANGE", function(e, t) {
                  m = [e, t], g = !0, s.publish("CORE_RESIZE")
              }), l || ($("#arrowPrev, .modern-layout-control.left").fastClick(function() {
                  s.publish("PIC_PANEL_PREV", null)
              }), $("#arrowNext, .modern-layout-control.right").fastClick(function() {
                  s.publish("PIC_PANEL_NEXT", null)
              }), t.isPanelsLayout() && ($("#arrowPrev").appendTo($("#placard-bg")), $("#arrowNext").appendTo($("#placard-bg"))));
              var o = document.getElementById("picturePanel");
              Hammer(o).off("swipeleft").on("swipeleft", function() {
                  s.publish("PIC_PANEL_NEXT", null)
              }), Hammer(o).off("swiperight").on("swiperight", function() {
                  s.publish("PIC_PANEL_PREV", null)
              }), Hammer(o).off("tap").on("tap", function(e) {
                  if (!e || !e.target) return;
                  if (e.gesture && e.gesture.srcEvent && e.gesture.srcEvent.buttons !== undefined && e.gesture.srcEvent.buttons != 1) return;
                  var t = $(e.target);
                  if (!t.is("img") || !t.parent().hasClass("current")) return;
                  s.publish("PIC_PANEL_NEXT", null)
              }), f && U(r), s.subscribe("CROSSFADER_DATA_UPDATE", function() {
                  s.publish("CORE_RESIZE"), W()
              }), $("body").hasClass("side-panel") && ($("#arrowPrev").attr("src", "resources/icons/picturepanel-left-grey-crushed.png"), $("#arrowNext").attr("src", "resources/icons/picturepanel-right-grey-crushed.png")), l = !0
          }

          function M(e, n) {
              var r = t.isPanelsLayout();
              !n && !r ? c.css("background-color", e) : c.css("background-color", "inherit"), n ? ($("#picturePanel").css("top", $("#header").height()), $("#cfader").css("margin-left", 0), $("#arrowPrev, #arrowNext").addClass("disabled")) : r ? $("#picturePanel").css("top", "auto") : ($("#picturePanel").css("top", "auto"), $("#cfader").css("margin-left", h), $("#cfader").css("margin-top", p), $(".modern-layout-control").addClass("disabled"))
          }

          function _() {
              f = !1, v.exitBuilderMode()
          }

          function D() {
              v && v.clean(), $("#arrowPrev, #arrowNext, .modern-layout-control").addClass("disabled"), $(".btn-fullscreen", c).addClass("disabled")
          }

          function P() {
              v && v.firstDisplayCheck(), R(), f && app.data.getCurrentAttributes() == null && $(".editPictureButtons", c).hide()
          }

          function H(e, t, n, r, i, s, o, u) {
              y = s, w = u, b = !s && (o || !u), v && v.setSource(e, t, n, y, b, w), i.left && y ? $(".modern-layout-control.left").removeClass("disabled") : i.left ? $("#arrowPrev").removeClass("disabled") : $("#arrowPrev, .modern-layout-control.left").addClass("disabled"), i.right && y ? $(".modern-layout-control.right").removeClass("disabled") : i.right ? $("#arrowNext").removeClass("disabled") : $("#arrowNext, .modern-layout-control.right").addClass("disabled"), f && ($(".editPictureButtons", c).show(), J(e, r)), $("body").hasClass("side-panel") && $(".btn-fullscreen").removeClass("disabled"), $(".btn-fullscreen", c).removeClass("disabled"), $(".member-image", c).css("cursor", i.right ? "pointer" : "default")
          }

          function B(e, n) {
              y ? (F(e - APPCFG.MINIMUM_MAP_WIDTH, n), $("#picturePanel").css("top", $("#header").height())) : t.isPanelsLayout() ? j(e - ($("body").hasClass("builder-mode") ? 60 : 0) - $("#leftPanel").width(), n) : I(e - APPCFG.MINIMUM_MAP_WIDTH, n), q()
          }

          function j(e, t) {
              $("#cfader").width($("body").width() * (2 / 3)), $("#cfader").height(t), $("#cfader").css("margin", 0), c.width(e), c.height(t)
          }

          function F(e, t) {
              var n, r, i = e - 2 * h;
              i *= .95, t -= 10;
              var s = t - 2 * p;
              r = s, n = Math.min(parseInt(s * 4 / 3, 10), i);
              var o = r < s ? s : r;
              $("#cfader").width(n), $("#cfader").height(o);
              var u = n,
                  a = r + 2 * p;
              a = a < t ? t : a, c.width(u), c.height(a), $("#cfader").css("margin-top", (a - s) / 2), setTimeout(function() {
                  var e = $(".member-image.current").position().top + $(".member-image.current").height() / 2 - 6;
                  $(".modern-layout-control").css("top", e), $(".modern-layout-control.left").css("left", (c.width() - $(".member-image.current").width()) / 2 + 2), $(".modern-layout-control.right").css("right", (c.width() - $(".member-image.current").width()) / 2 + 6)
              }, 50)
          }

          function I(e, t) {
              var n, r, i = e - 2 * h,
                  s = t - 2 * p;
              r = s, n = Math.min(parseInt(s * 4 / 3, 10), i);
              var o = r < s ? s : r;
              $("#cfader").width(n), $("#cfader").height(o);
              var u = n + 2 * h,
                  a = r + 2 * p;
              a = a < t ? t : a, c.width(u), c.height(a), $("#arrowPrev").css("top", c.height() / 2 - 22), $("#arrowNext").css("top", c.height() / 2 - 22)
          }

          function q() {
              v && v.invalidate(), $("#placard").removeClass("one-line-layout");
              var e = $("#cfader .current").height();
              $("body").hasClass("side-panel") || (!f && e && $("#placardContainer .description").css("max-height", "inherit"), $("#placardContainer")[0].scrollHeight > e / 1.5 && !b && ($("#placard").addClass("one-line-layout"), !f && e && $("#placardContainer .description").css("max-height", e / 3))), $("body").hasClass("side-panel") || $("#placard-bg").css("max-height", e - 10 - (y ? 3 : 0)), R(), g && (g = !1, ($("body").hasClass("mobile-layout-scroll") || !$("body").hasClass("side-panel") || app.isInBuilderMode || !app.data.hasIntroRecord() || app.data.hasIntroRecord() && app.data.getCurrentIndex() != -1 && app.data.getCurrentIndex() != null) && s.publish("CORE_PICTURE_CHANGED"))
          }

          function R() {
              if (f && (app.data.getCurrentIndex() != -1 || app.data.isEditingFirstRecord())) {
                  var e = Math.max($(".editPictureButtons .modernBrowserWay a").eq(0).width(), $(".editPictureButtons .modernBrowserWay a").eq(1).width());
                  e && $(".editPictureButtons .modernBrowserWay a").width(e), $(".editPictureButtons").css("width", $("#cfader .current").width()), y ? $(".editPictureButtons").css("margin-left", o("#cfader .current").length ? o("#cfader .current").position()[0].x - o("#cfader").position()[0].x : 0) : $(".editPictureButtons").css("margin-left", o("#cfader .current").length ? o("#cfader .current").position()[0].x : 0), $(".editPictureButtons").css("display", "block"), $("#picturePanel").width() < $(".editPictureButtons > div").width() ? $(".editPictureButtons > div").css("display", "none") : $(".editPictureButtons > div").css("display", "inline-block"), $(".editPictureButtons").css("top", parseFloat($("#cfader > .current").first().css("top")) + 24)
              } else $(".editPictureButtons").css("display", "none")
          }

          function U(e) {
              ot(), $(".editPictureButtons > div > span", c).hide(), e ? r.browserSupportAttachementUsingFileReader() ? Q() : tt() : V()
          }

          function z() {
              if (!f) return;
              var e, t;
              $("body").hasClass("side-panel") ? (e = $("#placard .name .text_edit_input").css("display") == "inline-block" ? $("#placard .name .text_edit_input").val() : $("#placard .name .text_edit_label").html(), t = $("#placard .description .text_edit_input").css("display") == "inline-block" ? $("#placard .description .text_edit_input").val() : $("#placard .description .text_edit_label").html()) : (e = $(a + " .name .text_edit_input").css("display") == "inline-block" ? $(a + " .name .text_edit_input").val() : $(a + " .name .text_edit_label").html(), t = $(a + " .description .text_edit_input").css("display") == "inline-block" ? $(a + " .description .text_edit_input").val() : $(a + " .description .text_edit_label").html()), X(e, t)
          }

          function W() {
              console.log("maptour.ui.PicturePanel - saveEdits");
              var e, t;
              $("body").hasClass("side-panel") ? (e = $("#placard .name .text_edit_label").html(), t = $("#placard .description .text_edit_label").html()) : (e = $(a + " .name .text_edit_label").html(), t = $(a + " .description .text_edit_label").html()), X(e, t)
          }

          function X(e, n) {
              e == i18n.viewer.headerJS.editMe && (e = ""), n == i18n.viewer.headerJS.editMe && (n = ""), e = t.encodeText(e), n = t.encodeText(n), s.publish("PIC_PANEL_EDIT", {
                  title: e,
                  description: n
              })
          }

          function V() {
              $(".editPictureButtons .attributesWay", c).show(), $(".builderImageTarget").addClass("attributesWay")
          }

          function J(e, t) {
              if (!$(".editPictureButtons .attributesWay form").is(":visible") && !$(".builderImageTarget").hasClass("attributesWay")) return;
              $("body").hasClass("side-panel") ? ($(".builderImageTarget form").remove(), c.find(".builderImageTarget").popover("destroy"), !app.data.hasIntroRecord() || app.data.getCurrentIndex() != null && app.data.getCurrentIndex() != -1 ? c.find(".builderImageTarget").popover({
                  trigger: "click",
                  placement: function() {
                      var e = $(".builderImageTarget").width() / 2 - 189 + "px";
                      setTimeout(function() {
                          $("#picturePanel .popover").css({
                              left: e
                          })
                      }, 0)
                  },
                  html: !0,
                  content: '<script>$(".builderImageTarget").next(".popover").addClass("edit-attr-popover");</script><div style="margin-bottom: 5px; margin-top: -5px;"> <input type="radio" name="editType" value="image" />&nbsp;' + i18n.viewer.builderHTML.addLabelPicUrl + "&nbsp;&nbsp;" + ' <input type="radio" name="editType" value="video"' + (n.getDisableVideo() ? " disabled" : "") + "/>&nbsp;" + i18n.viewer.builderHTML.addLabelVideo + ' <a id="changePictureVideoTooltip"><img src="resources/icons/builder-help.png" style="vertical-align: -4px;"/></a>' + "</div>" + '<input type="text" value="' + e + '"/>' + '<button type="button" class="btn btn-small btn-primary" onClick="app.desktopPicturePanel.editPointURL(0, true)">' + i18n.viewer.builderHTML.modalApply + "</button>" + '<button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.editPointURL(0, false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + '<div class="error">' + i18n.viewer.addPopupJS.errorInvalidPicUrl + "</div>" + "<script>" + ' $("input[name=editType]").eq(' + (w ? 0 : 1) + ").click();" + " $('#changePictureVideoTooltip').popover({ 												trigger: 'hover', 												placement: 'bottom', 												html: true, 												content: '<div style=\"font-size: 14px; margin-bottom: 2px;\">" + i18n.viewer.builderHTML.addMediaVideoHelpTooltip4.replace(/'/g, "\\'") + '</div><img src="resources/icons/builder-picturepanel-tooltip-youtube.png" width="245px" />\'});' + "</script>"
              }) : c.find(".builderImageTarget").popover({
                  trigger: "click",
                  placement: function() {
                      var e = $(".builderImageTarget").width() / 2 - 189 + "px";
                      setTimeout(function() {
                          $("#picturePanel .popover").css({
                              left: e
                          })
                      }, 0)
                  },
                  html: !0,
                  content: '<script>$(".builderImageTarget").next(".popover").addClass("edit-attr-popover");</script><div style="margin-bottom: 5px; margin-top: -5px;"> <input type="radio" name="editType" value="image" />&nbsp;' + i18n.viewer.builderHTML.addLabelPicUrl + "&nbsp;&nbsp;" + ' <input type="radio" name="editType" value="video" disabled />&nbsp;' + i18n.viewer.builderHTML.addLabelVideo + ' <a id="changePictureVideoTooltip"><img src="resources/icons/builder-help.png" style="vertical-align: -4px;"/></a>' + "</div>" + '<input type="text" value="' + e + '"/>' + '<button type="button" class="btn btn-small btn-primary disabled" onClick="app.desktopPicturePanel.editPointURL(0, true)">' + i18n.viewer.builderHTML.modalApply + "</button>" + '<button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.editPointURL(0, false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + '<div class="error">' + i18n.viewer.addPopupJS.errorInvalidPicUrl + "</div>" + "<script>" + ' $("input[name=editType]").eq(' + (w ? 0 : 1) + ").click();" + " $('#changePictureVideoTooltip').popover({ 													trigger: 'hover', 													placement: 'bottom', 													html: true, 													content: '<div style=\"font-size: 14px; margin-bottom: 2px;\">" + i18n.viewer.builderHTML.coverNoVideo.replace(/'/g, "\\'") + "</div>'});" + "</script>"
              })) : (c.find(".editPictureButtons .attributesWay .btn-picture").popover("destroy"), c.find(".editPictureButtons .attributesWay .btn-picture").popover({
                  trigger: "click",
                  placement: "bottom",
                  html: !0,
                  content: '<script>$(".editPictureButtons .attributesWay .btn-picture").next(".popover").addClass("edit-attr-popover");$(".editPictureButtons .attributesWay .btn-thumbnail").popover("hide");</script><div style="margin-bottom: 5px; margin-top: -5px;"> <input type="radio" name="editType" value="image" />&nbsp;' + i18n.viewer.builderHTML.addLabelPicUrl + "&nbsp;&nbsp;" + ' <input type="radio" name="editType" value="video"' + (n.getDisableVideo() ? " disabled" : "") + "/>&nbsp;" + i18n.viewer.builderHTML.addLabelVideo + ' <a id="changePictureVideoTooltip"><img src="resources/icons/builder-help.png" style="vertical-align: -4px;"/></a>' + "</div>" + '<input type="text" value="' + e + '"/>' + '<button type="button" class="btn btn-small btn-primary" onClick="app.desktopPicturePanel.editPointURL(0, true)">' + i18n.viewer.builderHTML.modalApply + "</button>" + '<button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.editPointURL(0, false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + '<div class="error">' + i18n.viewer.addPopupJS.errorInvalidPicUrl + "</div>" + "<script>" + ' $("input[name=editType]").eq(' + (w ? 0 : 1) + ").click();" + " $('#changePictureVideoTooltip').popover({ 											trigger: 'hover', 											placement: 'bottom', 											html: true, 											content: '<div style=\"font-size: 14px; margin-bottom: 2px;\">" + i18n.viewer.builderHTML.addMediaVideoHelpTooltip4.replace(/'/g, "\\'") + '</div><img src="resources/icons/builder-picturepanel-tooltip-youtube.png" width="245px" />\'});' + "</script>"
              })), c.find(".editPictureButtons .attributesWay .btn-thumbnail").popover("destroy"), c.find(".editPictureButtons .attributesWay .btn-thumbnail").popover({
                  trigger: "click",
                  placement: "bottom",
                  html: !0,
                  content: '<script>$(".editPictureButtons .attributesWay .btn-thumbnail").next(".popover").addClass("edit-attr-popover");$(".editPictureButtons .attributesWay .btn-picture").popover("hide");</script><input type="text" value="' + t + '"/>' + '<button type="button" class="btn btn-small btn-primary" onClick="app.desktopPicturePanel.editPointURL(1, true)">' + i18n.viewer.builderHTML.modalApply + "</button>" + '<button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.editPointURL(1,false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + '<div class="error">' + i18n.viewer.addPopupJS.errorInvalidThumbUrl + "</div>"
              })
          }

          function K(e, n) {
              var r;
              $("body").hasClass("side-panel") ? r = $(".builderImageTarget") : r = ".editPictureButtons .attributesWay " + (e === 0 ? ".btn-picture" : ".btn-thumbnail");
              var i = $(r).next(".popover").find("input[type=text]").val(),
                  s = t.validateURL(i),
                  o = e === 0 && $("input[name=editType]:checked").val() == "video";
              if (n) {
                  s || (o ? $(r).next(".popover").find(".error").html(i18n.viewer.addPopupJS.errorInvalidVideoUrl) : e === 0 && $(r).next(".popover").find(".error").html(i18n.viewer.addPopupJS.errorInvalidPicUrl)), $(r).next(".popover").find(".error").toggle(!s);
                  if (!s) return;
                  o && !app.data.layerHasVideoField() && i.indexOf("isVideo") == -1 && (i = t.addIsVideoToURL(i)), app.data.changeCurrentPointPicURL(e === 0 ? "picture" : "thumbnail", i, o)
              }
              $(r).popover("hide")
          }

          function Q() {
              c.find(".builderImageTarget").popover({
                  placement: function() {
                      var e = $(".builderImageTarget").width() / 2 - 189 + "px";
                      setTimeout(function() {
                          $("#picturePanel .popover").css({
                              left: e
                          })
                      }, 0)
                  },
                  trigger: "manual",
                  html: !0,
                  content: '<script> $(".builderImageTarget").next(".popover").addClass("picturePanelPicturePopoverFR"); function closeMe(){$(".builderImageTarget").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningPicAndThumb + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.pictureConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.pictureConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadingPhoto + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button>" + "</div>"
              }), $(".editPictureButtons .modernBrowserWay", c).show(), $(".editPictureButtons .modernBrowserWay a.btn-picture").popover({
                  placement: "bottom",
                  trigger: "manual",
                  html: !0,
                  content: '<script> $(".editPictureButtons").find(".btn-picture").next(".popover").addClass("picturePanelPicturePopoverFR"); function closeMe(){$(".editPictureButtons").find(".btn-picture").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningPicAndThumb + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.pictureConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.pictureConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadingPhoto + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button>" + "</div>"
              }), $(".side-panel-upload input").change(function() {
                  $(".builderImageTarget").popover("show")
              }), $(".editPictureButtons .modernBrowserWay input").change(function() {
                  $(".editPictureButtons .modernBrowserWay a.btn-picture").popover("show")
              }), N.popover({
                  placement: "bottom",
                  trigger: "manual",
                  html: !0,
                  content: '<script>$(".editPictureButtons").find(".btn-thumbnail").next(".popover").addClass("picturePanelThumbnailPopover");function closeMe(){$(".editPictureButtons").find(".btn-thumbnail").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningThumb + " " + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.thumbnailConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.thumbnailConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadingThumbnail + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button> " + "</div>"
              }), N && N.change(function() {
                  N.popover("show")
              })
          }

          function G(e) {
              var t;
              $("body").hasClass("side-panel") ? (t = $(".side-panel-upload input").get(0).files[0], x = $(".builderImageTarget")) : (t = $(".editPictureButtons .modernBrowserWay input").get(0).files[0], x = $(".editPictureButtons .modernBrowserWay a.btn-picture"));
              if (!e || !t) {
                  Y(), x.popover("hide");
                  return
              }
              var n = x.next(".popover");
              n.find(".confirmationStep").css("display", "none"), n.find(".waitStep").css("display", "block");
              if (t.type === "image/jpeg") {
                  var r = new FileReader;
                  r.onloadend = function() {
                      var e = this.result;
                      E.off("load").load(function(t) {
                          i.resample(S.get(0), E, t.currentTarget.naturalWidth, t.currentTarget.naturalHeight, app.config.thumbnailMaxWidth, app.config.thumbnailMaxHeight, window.orientation), app.data.changeCurrentPointPicAndThumbUsingData(e, S.get(0).toDataURL("image/jpeg"), function(e) {
                              e ? (n.find(".waitStep").css("display", "none"), n.find(".loadedStep").css("display", "block"), setTimeout(function() {
                                  x.popover("hide")
                              }, d)) : (n.find(".waitStep").css("display", "none"), n.find(".errorStep").css("display", "block"))
                          }), Y()
                      }), E.attr("src", e)
                  }, r.readAsDataURL(t)
              } else alert(i18n.viewer.addPopupJS.notJpg), n.hide()
          }

          function Y() {
              $("body").hasClass("side-panel") ? $(".side-panel-upload input").closest("form").get(0).reset() : $(".editPictureButtons .modernBrowserWay input").closest("form").get(0).reset()
          }

          function Z(e) {
              var t = C.get(0).files[0];
              if (!e || !t) {
                  et(), N.popover("hide");
                  return
              }
              var n = N.next(".popover");
              n.find(".confirmationStep").css("display", "none"), n.find(".waitStep").css("display", "block");
              if (t.type === "image/jpeg") {
                  var r = new FileReader;
                  r.onloadend = function() {
                      app.data.changeCurrentPointThumbnailUsingData(this.result, function(e) {
                          e ? (n.find(".waitStep").css("display", "none"), n.find(".loadedStep").css("display", "block"), setTimeout(function() {
                              N.popover("hide")
                          }, d)) : (n.find(".waitStep").css("display", "none"), n.find(".errorStep").css("display", "block"))
                      }), et()
                  }, r.readAsDataURL(t)
              } else alert(i18n.viewer.addPopupJS.notJpg), n.hide()
          }

          function et() {
              C.closest("form").get(0).reset()
          }

          function tt() {
              $(".editPictureButtons .oldBrowserWay", c).show(), k.change(nt), L.change(nt), A.popover({
                  placement: "bottom",
                  html: !0,
                  content: '<script>$(".editPictureButtons .oldBrowserWay").find(".btn-upload").next(".popover").addClass("picturePanelPicturePopoverOLD");function closeMe(){$(".editPictureButtons .oldBrowserWay").find(".btn-upload").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningPicAndThumb + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.formConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.formConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none">' + " " + i18n.viewer.picturePanelJS.popoverUploadingPhoto + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button> " + "</div>"
              })
          }

          function nt() {
              $(k[0]).val() && $(L[0]).val() ? A.removeAttr("disabled") : A.attr("disabled", "true")
          }

          function rt(e) {
              if (!e || !$(k[0]).val() || !$(L[0]).val()) {
                  A.popover("hide");
                  return
              }
              var t = A.next(".popover");
              t.find(".confirmationStep").css("display", "none"), t.find(".waitStep").css("display", "block"), app.data.changeCurrentPointPicAndThumbUsingForm("ppOldBrowserWayPicForm", "ppOldBrowserWayThumbForm", function(e) {
                  e ? (it(), t.find(".waitStep").css("display", "none"), t.find(".loadedStep").css("display", "block"), setTimeout(function() {
                      A.popover("hide")
                  }, d)) : (t.find(".waitStep").css("display", "none"), t.find(".errorStep").css("display", "block"))
              })
          }

          function it() {
              k.closest("form").get(0).reset(), L.closest("form").get(0).reset(), A.attr("disabled", "true")
          }

          function st() {
              $("#arrowPrev").attr("src", "resources/icons/picturepanel-left.png"), $("#arrowNext").attr("src", "resources/icons/picturepanel-right.png")
          }

          function ot() {
              var e = $(".editPictureButtons .modernBrowserWay");
              e.find("a.btn-picture").html(e.find("a.btn-picture").html().replace("Browse", i18n.viewer.picturePanelJS.changePicAndThumb)), e.find("a.btn-thumbnail").html(e.find("a.btn-thumbnail").html().replace("Browse", i18n.viewer.picturePanelJS.changeThumb)), $("body").hasClass("side-panel") ? ($(".builderImageTarget .file-input-name").hide(), $(".builderImageTarget .file-input-wrapper").height($(".builderImageTarget").height()), $(".builderImageTarget .file-input-wrapper").width($(".builderImageTarget").width()), $(".builderImageTarget .file-input-wrapper").css("margin-top", "-30px"), $(".builderImageTarget .file-input-wrapper").css("opacity", 0)) : (x = e.find("a.btn-picture"), T = e.find(".btn-picture input")), N = e.find("a.btn-thumbnail"), C = e.find(".btn-thumbnail input");
              var t = $(".editPictureButtons .oldBrowserWay");
              t.find("a.btn-picture").html(t.find("a.btn-picture").html().replace("Browse", i18n.viewer.picturePanelJS.selectPic)), t.find("a.btn-thumbnail").html(t.find("a.btn-thumbnail").html().replace("Browse", i18n.viewer.picturePanelJS.selectThumb)), t.find(".btn-upload").html(i18n.viewer.picturePanelJS.uploadPicAndThumb), k = t.find(".btn-picture input"), L = t.find(".btn-thumbnail input"), A = t.find(".btn-upload"), $(".editPictureButtons .attributesWay .btn-picture").html(i18n.viewer.picturePanelJS.selectPic), $(".editPictureButtons .attributesWay .btn-thumbnail").html(i18n.viewer.picturePanelJS.selectThumb)
          }
          var l = !1,
              c = $(a),
              h = 45,
              p = 20,
              d = 2e3,
              v = null,
              m = [],
              g = !1,
              y = !1,
              b = !1,
              w = !0,
              E = $('<img src=""/>'),
              S = $('<canvas width="140px" height="93px">'),
              x = null,
              T = null,
              N = null,
              C = null,
              k = null,
              L = null,
              A = null;
          return {
              init: O,
              initLocalization: st,
              updatePicture: H,
              clean: D,
              resize: B,
              saveEdits: W,
              forceSaveEdits: z,
              update: M,
              pictureConfirmation: G,
              thumbnailConfirmation: Z,
              formConfirmation: rt,
              editPointURL: K,
              exitBuilderMode: _,
              firstDisplayCheck: P
          }
      }
  }), define("storymaps/ui/autoplay/Autoplay", ["dojo/topic", "dojo/has", "storymaps/utils/Helper", "storymaps/maptour/core/MapTourHelper"], function(e, t, n, r) {
      var i = 6e3,
          s = 10;
      return function(o, u) {
          function p(e, t) {
              console.log("Autoplay: start, delay:", e, "immediate:", t), a = !0, f && clearTimeout(f), t ? v(e) : f = setTimeout(function() {
                  v(e)
              }, e)
          }

          function d() {
              if (!a) return;
              console.log("Autoplay: pause"), a = !1, f && clearTimeout(f)
          }

          function v(e) {
              l = u(), f = setTimeout(function() {
                  v(e)
              }, e)
          }

          function m() {
              return o.find(".btn-play-container").hasClass("status-play")
          }

          function g(e) {
              o.find(".btn-play-container").removeClass("status-play status-pause"), o.find(".btn-play").removeClass("autoplay-icon-play autoplay-icon-pause"), o.find(".btn-play-container").addClass(e ? "status-play" : "status-pause"), o.find(".btn-play").addClass(e ? "autoplay-icon-pause" : "autoplay-icon-play")
          }

          function y() {
              var e = !m();
              e ? b(!0) : d(), g(e)
          }

          function b(e) {
              var t = o.find(".slider input").slider("getValue").val() || s;
              p(t * 1e3, e)
          }

          function w() {
              var e = Date.now();
              c > Date.now() - 150 && o.removeClass("fade"), c = e
          }

          function E() {
              !h && Date.now() > c + i && o.addClass("fade")
          }

          function S() {
              o.find(".btn-play-container").click(y), o.find(".slider-container input").slider({
                  min: 5,
                  max: 60,
                  value: s,
                  formater: function(e) {
                      return e + "s"
                  }
              }), o.find(".slider-container input").on("slideStop", function() {
                  m() && b(!1)
              }), t("touch") || (c = Date.now(), o.hover(function() {
                  h = !0
              }, function() {
                  h = !1, E()
              }), $(window).mousemove(w), setInterval(E, 1e3))
          }
          var a = !1,
              f = null,
              l = null,
              c = null,
              h = !1;
          (!o || !u || typeof u != "function") && console.log("Autoplay: failed to initialize"), o.show(), S(), this.init = function(e) {
              if (!e) return;
              e.color && (e.useBackdrop ? (o.find(".backdrop").css({
                  backgroundColor: e.color,
                  display: "block"
              }), o.find(".autoplay-container").css({
                  backgroundColor: "inherit"
              })) : o.find(".autoplay-container").css({
                  backgroundColor: n.hex2rgba(e.color, r.isModernLayout() ? .85 : 1)
              })), e.themeMajor && o.addClass("theme-" + e.themeMajor)
          }, this.start = function() {
              b(!1), g(!0)
          }, this.stop = function() {
              d(), g(!1)
          }, this.onNavigationEvent = function(e) {
              m() && e != l && y()
          }
      }
  }), define("storymaps/ui/EmbedBar/EmbedBar", [], function() {
      "use strict";
      return function(e) {
          function v() {
              var t = "https://arcg.is/prod/shorten?callback=?",
                  n = document.location.href;
              $.getJSON(t, {
                  format: "json",
                  apiKey: e.bitlyCreds[0],
                  login: e.bitlyCreds[1],
                  longUrl: n
              }, function(e) {
                  if (!e || !e || !e.data.url) return;
                  document.querySelector(".embed-bitlylink").value = e.data.url
              })
          }
          this.initiated = !1;
          if (e.isBuilder || e.classicEmbedMode || e.appCreationDate < e.june2018ReleaseDate) return;
          window.app.isEsriStoryMap = !0;
          if (window.top === window.self) return;
          try {
              parent.window.app.isEsriStoryMap && (window.app.isEmbeddedInEsriStoryMap = !0)
          } catch (t) {
              window.app.isEmbeddedInEsriStoryMap = !1
          }
          if (window.app.isEmbeddedInEsriStoryMap) return;
          var n = '      <style type="text/css">        .embed-bar {          visibility: hidden;          position: absolute;          bottom: 0;          left: 0;          width: 100%;          height: 26px;          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;          background-color: #f1f1f1;          color: #505050;          z-index: 99999;          line-height: normal;        }        .embed-left {          position: absolute;          left: 10px;          margin-top: 5px;        }        .embed-right {          position: absolute;          right: 10px;          margin-top: 4px;        }        .embedLogoImg {          position: absolute;          top: 50%;          bottom: 50%;          left: 0px;          max-width: 250px;          max-height: 20px;          margin: auto 0;        }        .esri-tagline-embed {          margin-left: 70px;        }        .esri-tagline-embed :hover{          color: #036765;        }        .esri-tagline-embed a {          font-size: 15px;          font-weight: normal;          color: #505050;        }        .share-embed {          position: absolute;          top: 2px;          right: 22px;          padding-right: 8px;          outline: none;          cursor: pointer;        }        .open-newtab-embed {          position: absolute;          top: 2px;          right: 0px;          outline: none;        }        .fullscreen-embed {          position: absolute;          top: 2px;          right: 0px;          outline: none;          cursor: pointer;        }        .fullScreen {          width: 100%;          height: 100%;          position: absolute;          top: 0;          left: 0;        }        .embed-right svg {          width: 16px;          height: 16px;          cursor: pointer;        }        svg:hover #shareIcon,        svg:hover #newTabIcon,        svg:hover #fullscreenIcon,        svg:hover #compressIcon {          fill: #036765;        }      </style>    ',
              r = '      <div class="embed-left">        <div class="esri-logo-embed">          <a target="_blank" href="https://www.esri.com">						<img alt="Esri logo" class="embedLogoImg" src=' + e.logoPath + ' style="outline: none;">          </a>        </div>        <div class="esri-tagline-embed"><a href="https://storymaps.arcgis.com" target="_blank">' + e.strings.tagline + '</a></div>      </div>      <div class="embed-right">        <div class="share-embed" title="' + e.strings.share + '">          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="shareIcon" fill="#505050" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/></svg>        </div>        <div class="open-newtab-embed" title="' + e.strings.newTab + '">          <a href=' + window.location.href + ' target="_blank">            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577 512"><path id="newTabIcon" fill="#505050" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>          </a>        </div>        <div class="fullscreen-embed " title="' + e.strings.fullScreen + '">          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="fullscreenIcon" fill="#505050" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"/></svg>          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="compressIcon" fill="#505050" d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"/></svg>        </div>      </div>    ',
              i = '      <style type="text/css">        .embed-share-modal {          display: none;          position: fixed;          z-index: 999;          left: 0;          top: 0;          width: 100%;          height: 100%;          overflow: auto;          background-color: rgba(0,0,0, 0.4);        }        .embed-modal-content {          background-color: #fff;          margin: 15% auto;          padding: 20px;          border: 1px solid #888;          width: 80%;          max-width: 500px;          display: flex;          flex-direction: column;        }        .embed-modal-logo {          margin-top: -40px;          margin-left: -40px;          width: 40px;          height: 40px;          border: 4px solid #FFF;          border-radius: 24px;          background-color: #196fa6;          color: white;          font-size: 16px;          box-sizing: content-box;        }        .embed-modal-logo i{          margin-left: 8px;          margin-top: 7px;          font-size: 24px;        }        .embed-modal-header {          padding-bottom: 15px;        }        .embed-modal-title {          line-height: 1.1;          font-size: 19px;          font-weight: 200;          margin-top: -4px;        }        .embed-modal-body {          height: 60px;        }        .embed-share-url-social {          font-size: 10px;        }        .embed-share-social-container {          font-size: 2.5em;          color: #4c4c4c;        }        .embed-share-social-container i:hover {          cursor: pointer;          color: #036765;        }        .embed-share-facebook {          float: left;        }        .embed-share-twitter {          margin-left: 5px;          float: left;        }        #embed-bitlylink {          display: inline-block;          height: 38px;          width: 240px;          text-align: left;          font-size: 20px;          cursor: text;          padding: 0 0 0 10px;          line-height: 20px;          border: 1px solid #959595;          border-radius: 0;          background-color: #f8f8f8;          opacity: 1;        }        .embed-bar-btn {          background-image: none;          border: 1px solid transparent;          padding: 6px 12px;          font-size: 15px;          line-height: 1.5;          border-radius: 0;          margin-bottom: 0;          font-weight: 400;        }        .btn-bitlylink-open {          margin-top: 1px;          margin-bottom: 11px;          margin-left: 10px;          color: #fff;          background-color: #196fa6;          border-color: #166090;          text-transform: uppercase;        }        .btn-bitlylink-open:hover {          background-color: #005e95;          border-color: #005e95;        }        .embed-modal-footer {          margin-left: auto;          text-align: right;        }        .embed-modal-footer .btn-close {          background-color: #eee;          color: #6e6e6e;          margin-top: 20px;        }        .embed-modal-footer .btn-close:hover {          background-color: #ccc;          color: #6e6e6e;        }        .embed-modal-body svg {          width: 36px;          height: 36px;          cursor: pointer;        }        svg:hover #facebookIcon,        svg:hover #twitterIcon {          fill: #036765;        }        .embed-modal-logo svg  {          width: 24px;          height: 24px;          margin-top: 8px;          margin-left: 6px;        }        @media(max-width: 530px) {          .embed-share-url-container {            display: flex;            justify-content: flex-start;            align-items: stretch;            margin-bottom: 11px;          }          #embed-bitlylink {            width: auto;            min-width: 0;            max-width: 200px;            flex-grow: 1;            flex-shrink: 1;            flex-basis: 0;            padding-right: 10px;          }          .btn-bitlylink-open {            flex: 0 0 auto;          }        }      </style>    ',
              s = '      <div class="embed-share-modal">        <div class="embed-modal-content">          <div class="embed-modal-logo">            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="shareIconLogo" fill="#fff" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/></svg>          </div>          <div class="embed-modal-header">            <h4 class="embed-modal-title">' + e.strings.share + '</h4>          </div>          <div class="embed-modal-body">            <div class="embed-share-url-social">              <div class="embed-share-url-panel">                <div class="embed-share-url-container">                  <input type="text" id="embed-bitlylink" class="form-control embed-bitlylink" aria-label="bitly link">                  <a class="btn embed-bar-btn btn-primary btn-bitlylink-open" target="_blank" href="' + window.location.href + '">' + e.strings.open + '</a>                </div>              </div>            </div>            <div class="embed-share-social-container">              <div class="social-icon embed-share-facebook" title="' + e.strings.shareFacebook + '" aria-label="Share on Facebook button">                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="facebookIcon" fill="#505050" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"/></svg>              </div>              <div class="social-icon embed-share-twitter" title="' + e.strings.shareTwitter + '" aria-label="Share on Twitter button">                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="twitterIcon" fill="#505050" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>              </div>            </div>          </div>          <div class="embed-modal-footer">            <button type="button" class="btn embed-bar-btn btnCancel btn-naked btn-close" data-dismiss="modal">' + e.strings.close + "</button>          </div>        </div>      </div>    ",
              o = function() {
                  document.querySelector("body").appendChild(g), document.querySelector("body").appendChild(b), !document.fullscreenEnabled && !document.webkitFullscreenEnabled && !document.mozFullScreenEnabled && !document.msFullscreenEnabled ? document.querySelector(".fullscreen-embed").style.display = "none" : document.querySelector(".open-newtab-embed").style.display = "none", u(), a()
              },
              u = function() {
                  if (e.isEsriLogo)
                      for (var t = 0; t < e.logoElements.length; t++) document.querySelector(e.logoElements[t].selector).style.display = "none";
                  for (var n = 0; n < e.shareElements.length; n++)
                      if (e.shareElements[n].length > 1)
                          for (var r = 0; r < e.shareElements[n].length; r++) e.shareElements[n][r].style.display = "none";
                      else document.querySelector(e.shareElements[n].selector).style.display = "none";
                  for (var i = 0; i < e.taglineElements.length; i++)
                      if (e.taglineElements[i].length > 1)
                          for (var s = 0; s < e.taglineElements[i].length; s++) e.taglineElements[i][s].textContent && e.taglineElements[i][s].textContent.toLowerCase() == "a story map" && (e.taglineElements[i][s].style.display = "none");
                      else e.taglineElements[i].text() && e.taglineElements[i].text().toLowerCase() == "a story map" && (document.querySelector(e.taglineElements[i].selector).style.display = "none")
              },
              a = function() {
                  document.querySelector(".fullscreen-embed").addEventListener("click", l), document.querySelector(".share-embed").addEventListener("click", c), document.querySelector(".embed-modal-footer .btn-close").addEventListener("click", h), document.querySelector(".embed-share-facebook").addEventListener("click", p), document.querySelector(".embed-share-twitter").addEventListener("click", d), window.addEventListener("fullscreenchange", f), window.addEventListener("webkitfullscreenchange", f), window.addEventListener("mozfullscreenchange", f), window.addEventListener("msfullscreenchange", f)
              },
              f = function() {
                  if (document.fullscreenEnabled && !document.fullscreenElement || document.webkitFullscreenEnabled && !document.webkitFullscreenElement || document.mozFullScreenEnabled && !document.mozFullScreenElement || document.msFullscreenEnabled && !document.msFullscreenElement) document.querySelector("body").classList.contains("fullscreen") && document.querySelector("body").classList.toggle("fullscreen"), document.querySelectorAll(".fullscreen-embed svg")[0].style.display = "block", document.querySelectorAll(".fullscreen-embed svg")[1].style.display = "none"
              },
              l = function() {
                  var t = document.querySelector("body");
                  document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled ? t.classList.contains("fullscreen") ? (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), document.querySelector(".fullscreen-embed").title = e.strings.fullScreen, document.querySelectorAll(".fullscreen-embed svg")[0].style.display = "block", document.querySelectorAll(".fullscreen-embed svg")[1].style.display = "none") : (t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen(), t.classList.toggle("fullscreen"), document.querySelector(".fullscreen-embed").title = e.strings.exitFullScreen, document.querySelectorAll(".fullscreen-embed svg")[1].style.display = "block", document.querySelectorAll(".fullscreen-embed svg")[0].style.display = "none") : (document.querySelector(".fullscreen-embed").style.display = "none", document.querySelector(".open-newtab-embed").style.display = "block", console.log("Full screen not available"))
              },
              c = function() {
                  document.querySelector(".embed-share-modal").style.display == "block" ? document.querySelector(".embed-share-modal").style.display = "none" : document.querySelector(".embed-share-modal").style.display = "block", v()
              },
              h = function() {
                  document.querySelector(".embed-share-modal").style.display = "none"
              },
              p = function() {
                  window.open("http://www.facebook.com/sharer/sharer.php?u=" + document.location.href, "", "toolbar=0,status=0,width=626,height=436")
              },
              d = function() {
                  var t = "text=" + e.appTitle + "&url=" + document.location.href + "&related=EsriStoryMaps" + "&hashtags=StoryMaps";
                  window.open("https://twitter.com/intent/tweet?" + t, "", "toolbar=0,status=0,width=626,height=436")
              },
              m = n + r,
              g = document.createElement("div");
          g.className = "embed-bar", g.innerHTML = m;
          var y = i + s,
              b = document.createElement("div");
          b.className = "embedbar-share-modal", b.innerHTML = y, setTimeout(function() {
              o()
          }, 0), this.initiated = !0
      }
  }), define("storymaps/maptour/ui/mobile/IntroView", ["storymaps/maptour/core/MapTourHelper", "dojo/topic"], function(e, t) {
      return function() {
          this.init = function(n, r) {
              $(".navBar span").removeClass("current"), app.header.hideMobileBanner(!0), location.hash = "";
              var i = function(e, t) {
                      var n = $("<p>" + e + "</p>").text().length;
                      return n === 0 ? "hidden" : t && n < 15 || !t && n < 40 ? "text-size-1" : t && n < 25 || !t && n < 90 ? "text-size-2" : t && n < 50 || !t && n < 150 ? "text-size-3" : "text-size-4"
                  },
                  s = n.attributes.getURL(),
                  o = document.createElement("img");
              o.src = app.data.getIntroData().attributes.getURL();
              if (app.data.getIntroData().attributes.getURL().indexOf("'")) {
                  var u = [];
                  for (var a = 0; a < app.data.getIntroData().attributes.getURL().length; a++) app.data.getIntroData().attributes.getURL()[a] === "'" && u.push(a);
                  u.length && $.each(u, function(e, t) {
                      s = [app.data.getIntroData().attributes.getURL().slice(0, t), "\\", app.data.getIntroData().attributes.getURL().slice(t)].join("")
                  })
              }
              var f = '<div class="slide scroll-layout" alt="" style="background-image: ' + (!n.attributes.isVideo() && e.mediaIsSupportedImg(n.attributes.getURL()) ? "url(" + s + ")" : "none") + '">' + '<div class="text-wrapper">' + ' <h2 class="tourPointName ' + i(n.attributes.getName(), !0) + '">' + $("<div>" + n.attributes.getName() + "</div>").html() + "</h2>" + ' <p class="tourPointDescription ' + i(n.attributes.getDescription()) + '">' + n.attributes.getDescription() + "</p></div>" + '<button type="button" class="reset-btn icon-down-open-big scroll-indicator start-button"></button>' + "</div>",
                  l = '<div class="slide classic"> <h2 class="tourPointName">' + $("<div>" + n.attributes.getName() + "</div>").html() + "</h2>" + ' <p class="tourPointDescription">' + n.attributes.getDescription() + "</p>" + (!n.attributes.isVideo() && e.mediaIsSupportedImg(n.attributes.getURL()) ? '<img class="tourPointImg" src="' + n.attributes.getURL() + '" />' : '<iframe class="tourPointIframe" src="' + n.attributes.getURL() + '"></iframe>') + " <br /><br />" + ' <button class="btn btn-large btn-primary start-button">' + i18n.viewer.mobileHTML.introStartBtn + "</button>" + "</div>";
              $("#introPanel").html(f + l), n.attributes.getName().length || $("#introPanel .scroll-layout .text-wrapper").hide();
              var c = !0,
                  h = function() {
                      c ? (c = !1, t.publish("PIC_PANEL_NEXT")) : ($("#introPanel").addClass("hiding-intro"), setTimeout(function() {
                          $("#introPanel").removeClass("hiding-intro"), $("#introPanel").hide()
                      }, 600)), $("#splashPanel").css("bottom", "2000px")
                  };
              $("#introPanel .start-button").fastClick(h), $("#introPanel .slide .text-wrapper").on("scroll", function(e) {
                  e.stopPropagation()
              }), $("#introPanel").on("touchstart touchmove scroll", function(e) {
                  e.preventDefault()
              });
              var p = document.getElementById("introPanel");
              Hammer(p).on("swipeup", h);
              var d = function() {
                  if ($("body").hasClass("mobile-layout-scroll")) {
                      var e = $(document).height() - $("#headerMobile").outerHeight() - $("#introPanel .scroll-indicator").outerHeight() - 50,
                          t = $("#introPanel .slide .text-wrapper").outerHeight() > e ? e : undefined,
                          n = t === undefined ? (e - $("#introPanel .slide .text-wrapper").outerHeight()) / 2 + $("#headerMobile").outerHeight() + 20 : $("#headerMobile").outerHeight() + 20;
                      $("#introPanel .slide .text-wrapper").css({
                          height: t,
                          maxHeight: e,
                          marginTop: n
                      })
                  } else(!app.embedBar || !app.embedBar.initiated) && $("#introPanel").css("height", $("#infoPanel").height() - 40)
              };
              $("#introPanel").css("background-color", r), $("#introPanel").show(), d(), $(window).on("resize", d)
          }, this.hide = function() {
              $("#introPanel").find(".tourPointIframe").attr("src", ""), $("#mapViewLink").addClass("current"), $("#introPanel").addClass("hiding-intro"), setTimeout(function() {
                  $("#introPanel").removeClass("hiding-intro"), $("#introPanel").hide()
              }, 600)
          }
      }
  }), define("storymaps/maptour/ui/mobile/ListView", ["storymaps/maptour/core/MapTourHelper", "dojo/topic", "dojo/has", "dojo/debounce"], function(e, t, n, r) {
      return function(s) {
          function p(r, i) {
              var h = function() {
                      if (!$("body").hasClass("mobile-layout-scroll")) return;
                      app.data.webAppData && app.data.webAppData.getFirstRecordAsIntro && !app.data.webAppData.getFirstRecordAsIntro() && $("#mobile-scroll-story-content").append('<div class="title-content text-wrapper"><h1 class="tour-title">' + app.data.webAppData.getTitle() + "</h1>" + "</div>");
                      var n = function(e) {
                          typeof e != "string" && (e = "r");
                          var t = e.toLowerCase();
                          switch (t) {
                              case "b":
                                  return "blue";
                              case "g":
                                  return "green";
                              case "p":
                                  return "purple";
                              default:
                                  return "red"
                          }
                      };
                      if ($("body").hasClass("mobile-layout-scroll"))
                          for (var s = 0; s < r.length; s++) {
                              var o = r[s],
                                  u = s === 0 || s == 1 ? o.attributes.getURL() : "",
                                  a = s <= 2 ? o.attributes.getURL() : "",
                                  f = $('<div class="tour-point-content"><div class="media">' + (!o.attributes.isVideo() && e.mediaIsSupportedImg(o.attributes.getURL()) ? '<img alt="";  src="' + a + '" />' : '<iframe class="mobile-layout-scroll-video" src="' + u + '"></iframe>') + "</div>" + '<div class="text-wrapper">' + "<table>" + "<tr>" + '<td><p class="tpNumberScroll ' + n(o.attributes.getColor()) + '">' + (s + 1) + "</p></td>" + '<td><h2 class="tpNameScroll">' + o.attributes.getName() + "</h2></td>" + "</tr>" + "</table>" + '<p class="tpDescriptionScroll">' + o.attributes.getDescription() + "</p>" + "</div>" + "</div>");
                              $("#mobile-scroll-story-content").append(f), $(".mobile-layout-scroll-video").css({
                                  height: $(".mobile-layout-scroll-video").outerWidth() * .5625
                              }), s > 3 && $(".tour-point-content .media img").eq(s).css({
                                  "min-height": $(".tour-point-content .media img").outerWidth() * .5625
                              }), i && x()
                          }
                      if (i) {
                          var l = $(".tour-point-content .media").eq(i - 1).height();
                          $("#mobile-scroll-story-content").animate({
                              scrollTop: $(".tour-point-content").eq(i - 1).offset().top - l
                          }, 0), setTimeout(function() {
                              t.publish("SELECT_BY_SCROLL", i - 1), app.mobileIntroView.hide()
                          }, 750)
                      }
                      $("body").append('<button type="button" id="mobile-scroll-top-btn" class="reset-btn icon-up-open-big back-to-top hidden"></button>')
                  },
                  p = function() {
                      f = new iScroll($(s + " .listWrapper")[0], {
                          onBeforeScrollMove: function(e) {
                              if (Math.abs(c.onScroll[0] - e.screenX) > 5 || Math.abs(c.onScroll[1] - e.screenY) > 5) l = !0;
                              if (f.y == f.maxScrollY || f.y === 0) l = !1
                          },
                          onScrollStart: function() {
                              c.onScroll = [c.onMove[0], c.onMove[1]]
                          },
                          onBeforeScrollEnd: function() {
                              n("touch") && (l = !1)
                          },
                          onScrollEnd: function() {
                              if (f.y == f.maxScrollY || f.y === 0) l = !1
                          }
                      }), $(s + " .listScroller").css("height", r.length * o + "px"), app.embedBar && app.embedBar.initiated && $(s + " .listScroller").height($(s + " .listScroller").height() + 26);
                      var t = document.createDocumentFragment();
                      a = !0, $.each(r, function(n, r) {
                          var i = r.attributes,
                              s = document.createElement("div");
                          s.className = "listItem", s.style.backgroundColor = u;
                          var o = document.createElement("div");
                          o.className = "tpImgPane", s.appendChild(o);
                          var a = document.createElement("div");
                          a.className = "tpImgContainer", o.appendChild(a);
                          var f = document.createElement("img");
                          f.setAttribute(location.hash == "#list" ? "src" : "data-src", i.getThumbURL()), a.appendChild(f);
                          var l = document.createElement("img");
                          l.className = "tpIcon", l.src = e.getSymbolUrl(i.getColor(), n + 1), s.appendChild(l);
                          var c = document.createElement("div");
                          c.className = "tpTextPane", s.appendChild(c);
                          var h = document.createElement("h4");
                          h.className = "tpName", h.innerHTML = i.getName(), c.appendChild(h);
                          var p = document.createElement("p");
                          p.className = "tpDescription", p.innerHTML = i.getDescription(), c.appendChild(p), t.appendChild(s)
                      }), $(s + " #listPanelScroller").empty(), document.getElementById("listPanelScroller").appendChild(t)
                  };
              $("body").hasClass("side-panel") ? h() : p()
          }

          function d() {
              var e = document.querySelectorAll("#mobile-scroll-story-content .tour-point-content"),
                  n = app.data.getCurrentIndex();
              if (h.previousScrollTop <= e[0].offsetTop) n = 0;
              else
                  for (var r = 0; r < e.length; r++) v(e[r]) && (n = r);
              h.selectedIndex = n, t.publish("SELECT_BY_SCROLL", n)
          }

          function v(e) {
              var t = 20;
              return e.offsetTop - h.previousScrollTop <= t ? !0 : e.offsetTop > h.previousScrollTop + t && h.previousScrollTop + h.containerHeight + t >= e.offsetTop + e.offsetHeight ? !0 : !1
          }

          function m() {
              h.controlsVisible = !0, $("#headerMobile").removeClass("hidden"), $("#mobile-scroll-top-btn").addClass("hidden"), h.goToTop = !0, t.publish("SELECT_BY_SCROLL", 0), app.data.getIntroData() && ($("#introPanel").show(), $("#introPanel").addClass("showing-intro"), setTimeout(function() {
                  $("#introPanel").removeClass("showing-intro")
              }, 600))
          }

          function g() {
              $(window).on("resize", function() {
                  $(".mobile-layout-scroll-video").css({
                      height: $(".mobile-layout-scroll-video").outerWidth() * .5625
                  }), h.containerHeight = $("#mobile-scroll-story-content").outerHeight()
              }), h.containerHeight = $("#mobile-scroll-story-content").outerHeight(), t.subscribe("maptour-point-change-before", function(t, n) {
                  if ($("body").hasClass("mobile-layout-scroll") && h.selectedIndex !== n) {
                      h.selectedIndex = n;
                      if (!app.data.getTourPoints()[n].attributes.isVideo() && e.mediaIsSupportedImg(app.data.getTourPoints()[n].attributes.getURL()))
                          if (!document.querySelectorAll("#mobile-scroll-story-content .tour-point-content .media img")[n].getAttribute("src")) {
                              var r = new Image;
                              r.newIndex = n, r.addEventListener("load", function() {
                                  $("#mobile-scroll-story-content").animate({
                                      scrollTop: h.goToTop ? 0 : document.querySelectorAll("#mobile-scroll-story-content .tour-point-content")[this.newIndex].offsetTop
                                  }), h.goToTop = !1
                              }), r.src = app.data.getTourPoints()[n].attributes.getURL()
                          } else $("#mobile-scroll-story-content").animate({
                              scrollTop: h.goToTop ? 0 : document.querySelectorAll("#mobile-scroll-story-content .tour-point-content")[n].offsetTop
                          }), h.goToTop = !1;
                      else document.querySelectorAll("#mobile-scroll-story-content .tour-point-content .media")[n].src = app.data.getTourPoints()[n].attributes.getURL(), $("#mobile-scroll-story-content").animate({
                          scrollTop: h.goToTop ? 0 : document.querySelectorAll("#mobile-scroll-story-content .tour-point-content")[n].offsetTop
                      }), h.goToTop = !1
                  }
              }), $("#mobile-scroll-top-btn").on("click", m);
              var n = r(d, 100);
              document.querySelector("#mobile-scroll-story-content").addEventListener("scroll", function() {
                  y(), n()
              }), $(s).click(b), t.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", E)
          }

          function y() {
              var e = 20,
                  t = document.querySelector("#mobile-scroll-story-content").scrollTop;
              h.direction = t > h.previousScrollTop ? "down" : "up", h.previousScrollTop = t, t === 0 ? (h.controlsVisible = !0, $("#headerMobile").removeClass("hidden"), $("#mobile-scroll-top-btn").addClass("hidden")) : h.direction === "down" && h.controlsVisible === !0 && h.scrollDelta > e ? (h.controlsVisible = !1, $("#headerMobile").addClass("hidden"), $("#mobile-scroll-top-btn").addClass("hidden")) : h.direction === "up" && h.controlsVisible === !1 && h.scrollDelta < -e ? (h.controlsVisible = !0, $("#headerMobile").removeClass("hidden"), $("#mobile-scroll-top-btn").removeClass("hidden")) : h.direction === "down" ? (h.scrollDelta < 0 && (h.scrollDelta = 0), ++h.scrollDelta) : (h.scrollDelta > 0 && (h.scrollDelta = 0), --h.scrollDelta)
          }

          function b(e) {
              if (!e || !e.target) return;
              setTimeout(function() {
                  w(e)
              }, 50)
          }

          function w(e) {
              var n = $(e.target).closest(".listItem").index();
              !l && n != -1 && t.publish("OPEN_MOBILE_INFO", n), l = !1
          }

          function E(t) {
              var n = $(s + " .listItem:nth-child(" + (t.index + 1) + ")");
              n.find(".tpName").html(t.name), n.find(".tpDescription").html(t.description), n.find(".tpIcon").attr("src", e.getSymbolUrl(t.color, t.index + 1))
          }

          function S(e) {
              $(s).css("background-color", e), $(s + " .listItem").css("background-color", e), u = e
          }

          function x() {
              var t;
              for (t = app.data.getCurrentIndex() >= 3 ? -2 : app.data.getCurrentIndex() == 2 ? -2 : 0; t < 4; t++) {
                  var n = app.data.getCurrentIndex() + t;
                  if (n > app.data.getTourPoints().length - 1) return;
                  var r = app.data.getTourPoints()[n].attributes,
                      i = $(".tour-point-content .media").eq(n);
                  r.isVideo() || !e.mediaIsSupportedImg(r.getURL()) ? i.find(".mobile-layout-scroll-video").attr("src") || i.find(".mobile-layout-scroll-video").attr("src", r.getURL()) : i.find("img").attr("src") || ("objectFit" in document.documentElement.style == 0 ? i.find("img").parent().css({
                      backgroundImage: "url(" + r.getURL() + ")"
                  }) : i.find("img").attr("src", r.getURL()))
              }
          }
          var o = 101,
              u = "",
              a = !0,
              f = null,
              l = !1,
              c = {
                  onMove: [-1, -1],
                  onScroll: [-1, -1]
              },
              h = {
                  previousScrollTop: 0,
                  scrollDelta: 0,
                  controlsVisible: !0,
                  rateLimit: !0
              };
          this.init = function(e, t, n) {
              $(s + " .listWrapper").mousemove(function(e) {
                  c.onMove[0] = e.screenX, c.onMove[1] = e.screenY
              }), S(t), p(e, n), g()
          }, this.update = function(e, t) {
              S(t), f && f.destroy(), p(e)
          }, this.show = function() {
              $(s).show(), a && ($(s).find(".tpImgPane img").each(function(e, t) {
                  $(t).attr("src", $(t).data("src"))
              }), a = !1), f && f.maxScrollY == 1 && f.refresh();
              if (f && f.maxScrollY < 0) {
                  var e = Math.min(app.data.getCurrentIndex() * o, -f.maxScrollY);
                  f.scrollTo(0, -e), f.refresh()
              }
          }
      }
  }), define("storymaps/maptour/ui/mobile/InfoView", ["storymaps/maptour/core/MapTourHelper", "dojo/topic"], function(e, t) {
      return function(r) {
          function o(t) {
              s = !0, i = new SwipeView(r, {
                  numberOfPages: t.length
              });
              var n = Math.min(3, Math.max(3, t.length));
              for (var o = 0; o < n; o++) {
                  var u = t.length == 1 ? 0 : o === 0 ? t.length - 1 : o - 1,
                      a = t[u];
                  if (!a) continue;
                  var f = t[u].attributes,
                      l = document.createElement("div");
                  l.className = "tourPoint", l.id = "tourPoint" + u;
                  var c = document.createElement("div");
                  c.className = "iconHolder", l.appendChild(c);
                  var h = document.createElement("img");
                  h.className = "tourPointIcon", h.src = e.getSymbolUrl(f.getColor(), u + 1), c.appendChild(h);
                  var p = document.createElement("h2");
                  p.className = "tourPointName", p.innerHTML = f.getName(), l.appendChild(p);
                  var d = document.createElement("p");
                  d.className = "tourPointDescription", d.innerHTML = f.getDescription(), l.appendChild(d);
                  var v = document.createElement("img");
                  v.className = "tourPointImg";
                  var m = document.createElement("iframe");
                  m.className = "tourPointIframe", !f.isVideo() && e.mediaIsSupportedImg(f.getURL()) ? (v.setAttribute(location.hash == "#info" ? "src" : "data-src", f.getURL()), m.setAttribute("style", "display:none")) : (m.setAttribute("src", e.checkVideoURL(f.getURL())), v.setAttribute("style", "display:none")), l.appendChild(v), l.appendChild(m), i.masterPages[o].appendChild(l)
              }
          }

          function u(n) {
              i.onTouchStart(function() {
                  app.header.hideMobileBanner()
              }), i.onFlip(function() {
                  var s = Math.min(3, n.length);
                  for (var o = 0; o < s; o++) {
                      var u = i.masterPages[o],
                          f = u.dataset.upcomingPageIndex;
                      if (!n[f]) continue;
                      var l = n[f].attributes;
                      if (i.pageIndex != u.dataset.pageIndex && f == u.dataset.pageIndex) {
                          var c = u.querySelector(".tourPointIframe");
                          c && c.src && $(c).attr("src", c.src)
                      }
                      if (f != u.dataset.pageIndex) {
                          var h = u.querySelector(".tourPointIcon");
                          h.src = e.getSymbolUrl(l.getColor(), parseInt(f, 10) + 1);
                          var p = u.querySelector(".tourPointImg"),
                              d = u.querySelector(".tourPointIframe"),
                              v = !l.isVideo() && e.mediaIsSupportedImg(l.getURL());
                          v ? p.src = l.getURL() : d.src != l.getURL() && (d.src = e.checkVideoURL(l.getURL())), $(p).toggle(v), $(d).toggle(!v);
                          var m = u.querySelector(".tourPointName");
                          m.innerHTML = l.getName();
                          var g = u.querySelector(".tourPointDescription");
                          g.innerHTML = l.getDescription()
                      }
                  }
                  $("body").scrollTop(0), a(), t.publish("MOBILE_INFO_SWIPE", i.pageIndex), $(r).parent().find(".embed-btn-left").toggleClass("disabled", !i.pageIndex), $(r).parent().find(".embed-btn-right").toggleClass("disabled", i.pageIndex === n.length - 1)
              }), i.onMoveOut(function() {
                  clearTimeout(i.delayedFlipEvent), app.header.hideMobileBanner()
              }), $(r).parent().find(".embed-btn").off("click").click(function() {
                  var e = $(this).parent();
                  e.hasClass("disabled") || (e.hasClass("embed-btn-left") ? t.publish("PIC_PANEL_PREV", null) : t.publish("PIC_PANEL_NEXT", null), i.refreshSize(), i.goToPage(e.hasClass("embed-btn-left") ? i.pageIndex - 1 : i.pageIndex + 1))
              }), a()
          }

          function a() {
              var e = i.masterPages[i.currentMasterPage].querySelector(".tourPointImg");
              if (e) {
                  var t = new Image;
                  t.onload = function() {
                      $("#infoCarousel").height(i.masterPages[i.currentMasterPage].childNodes[0].clientHeight + 15)
                  }, t.src = e.src || e.getAttribute("data-src")
              }
          }

          function f(t) {
              var n = $(r + " .swipeview-active");
              n.find(".tourPointName").html(t.name), n.find(".tourPointDescription").html(t.description), n.find(".tourPointIcon").attr("src", e.getSymbolUrl(t.color, t.index + 1))
          }

          function l(e) {
              $("#infoPanel").css("background-color", e)
          }
          var i = null,
              s = !0;
          this.init = function(e, n) {
              l(n), o(e), u(e), t.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", f), $("body").hasClass("hasTouch") || $(r).parent().addClass("hasDesktopBtn")
          }, this.update = function(e, t) {
              l(t), i && i.destroy(), $(r).empty(), o(e), u(e)
          }, this.show = function() {
              $("#infoPanel").show(), s && ($(r).find(".tourPoint img").each(function(e, t) {
                  $(t).attr("src", $(t).data("src"))
              }), s = !1), i.refreshSize(), /iPhone|iPad|iPod/i.test(navigator.userAgent) || $("#tourPoint" + app.data.getCurrentIndex()).css("height", $("#infoPanel").height() - 40 - (app.embedBar && app.embedBar.initiated ? 26 : 0)), i.goToPage(app.data.getCurrentIndex())
          }, this.getCurrentPoint = function() {
              return i && i.pageIndex
          }
      }
  }), define("storymaps/maptour/ui/mobile/Carousel", ["storymaps/maptour/core/MapTourHelper", "dojo/topic"], function(e, t) {
      return function(r, i) {
          function a(t) {
              s = new SwipeView(r + " .carousel", {
                  numberOfPages: t.length
              });
              var n = Math.min(3, Math.max(3, t.length));
              for (var i = 0; i < n; i++) {
                  var o = t.length == 1 ? 0 : i === 0 ? t.length - 1 : i - 1,
                      u = t[o];
                  if (!u) continue;
                  var a = u.attributes,
                      f = document.createElement("div");
                  f.className = "tpPreview";
                  var l = document.createElement("div");
                  l.className = "tpImgPane", f.appendChild(l);
                  var c = document.createElement("div");
                  c.className = "tpImgContainer", l.appendChild(c);
                  var p = document.createElement("img");
                  p.src = a.getThumbURL(), c.appendChild(p);
                  var d = document.createElement("img");
                  d.className = "tpIcon", d.src = e.getSymbolUrl(a.getColor(), o + 1), f.appendChild(d);
                  var v = document.createElement("div");
                  v.className = "tpTextPane", f.appendChild(v);
                  var m = document.createElement("h4");
                  m.className = "tpName", m.innerHTML = h(a.getName()), v.appendChild(m);
                  var g = document.createElement("p");
                  g.className = "tpDescription previewDescription", g.innerHTML = h(a.getDescription()), v.appendChild(g), s.masterPages[i].appendChild(f)
              }
          }

          function f(n) {
              $(".tpPreview").click(function(e) {
                  Math.abs(e.clientX - u[0]) < 10 && Math.abs(e.clientY - u[1]) < 10 && t.publish("OPEN_MOBILE_INFO", null)
              }), $(r + " .carousel").mousedown(function(e) {
                  u = [e.clientX, e.clientY]
              }), s.onFlip(function() {
                  var r = Math.min(3, n.length);
                  for (var i = 0; i < r; i++) {
                      var u = s.masterPages[i],
                          a = u.dataset.upcomingPageIndex;
                      if (!n[a]) return;
                      var f = n[a].attributes;
                      if (a != u.dataset.pageIndex) {
                          var l = u.querySelector(".tpImgPane img");
                          l.src = f.getThumbURL();
                          var c = u.querySelector(".tpIcon");
                          c.src = e.getSymbolUrl(f.getColor(), parseInt(a, 10) + 1);
                          var p = u.querySelector(".tpName");
                          p.innerHTML = h(f.getName());
                          var d = u.querySelector(".tpDescription");
                          d.innerHTML = h(f.getDescription())
                      }
                  }
                  app.data.getCurrentIndex() != -1 && app.data.getCurrentIndex() != s.pageIndex && (o = !0, t.publish("CAROUSEL_SWIPE", s.pageIndex))
              }), $(r).find(".embed-btn").off("click").click(function() {
                  var e = $(this).parent();
                  e.hasClass("disabled") || (e.hasClass("embed-btn-left") ? t.publish("PIC_PANEL_PREV", null) : t.publish("PIC_PANEL_NEXT", null))
              })
          }

          function l(t) {
              var n = $(r + " .carousel .swipeview-active");
              n.find(".tpName").html(t.name), n.find(".tpDescription").html(t.description), n.find(".tpIcon").attr("src", e.getSymbolUrl(t.color, t.index + 1))
          }

          function c(e) {
              $(r).css("background-color", e), $(r + " .builderMobile").css("background-color", e)
          }

          function h(e) {
              var t = $("<div>" + e + "</div>");
              return t.find("a").attr("tabindex", "-1"), t.html()
          }
          var s = null,
              o = !1,
              u = [0, 0];
          this.init = function(e, n) {
              i && $(r + " .builderMobileContainer").css("display", "block"), c(n), a(e), f(e), t.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", l), $("body").hasClass("hasTouch") || $(r).addClass("hasDesktopBtn")
          }, this.update = function(e, t) {
              c(t), s && s.destroy(), $(r + " .carousel").empty(), a(e), f(e)
          }, this.setSelectedPoint = function(e) {
              if (!s) return;
              o ? o = !1 : (s.refreshSize(), s.goToPage(e)), $(r).find(".embed-btn-left").toggleClass("disabled", !e), $(r).find(".embed-btn-right").toggleClass("disabled", e === s.options.numberOfPages - 1)
          }
      }
  }), define("storymaps/utils/FlickrConnector", ["dojo/Deferred", "dojo/_base/lang"], function(e, t) {
      return function(r) {
          function s() {
              return f("flickr.tags.getListUser", {
                  user_id: i
              })
          }

          function o() {
              return f("flickr.photosets.getList", {
                  user_id: i
              })
          }

          function u(n, r) {
              var s = new e;
              r.photoSize = r.photoSize || "b", r.thumbSize = r.thumbSize || "m";
              var o = t.mixin({
                  extras: "geo,description"
              }, {
                  user_id: i
              }, r);
              return f(n, o).done(function(e) {
                  (!e || e.stat != "ok") && s.reject();
                  var t = [],
                      n = e.photos ? e.photos.photo : e.photoset.photo;
                  $.each(n, function(e, n) {
                      t.push({
                          name: n.title || "",
                          description: n.description ? n.description._content || "" : "",
                          pic_url: a(n, r.photoSize),
                          thumb_url: a(n, r.thumbSize),
                          lat: n.latitude || "",
                          lng: n.longitude || "",
                          is_video: !1
                      })
                  }), s.resolve(t)
              }), s
          }

          function a(e, t) {
              return "https://farm" + e.farm + ".static.flickr.com/" + e.server + "/" + e.id + "_" + e.secret + "_" + t + ".jpg"
          }

          function f(e, t) {
              var n = "https://api.flickr.com/services/rest/?method=" + e + "&format=json" + "&api_key=" + r + (t ? "&" + $.param(t) : "") + "&jsoncallback=?";
              return $.getJSON(n)
          }
          var i = null;
          if (!r) {
              console.error("Flickr initialization error - missing apiKey parameter");
              return
          }
          this.connect = function(t) {
              var n = new e;
              return f("flickr.people.findByUsername", {
                  username: t
              }).done(function(e) {
                  e && e.stat == "ok" ? (i = e.user.id, $.when(s(), o()).done(function(e, t) {
                      n.resolve({
                          tags: e[0].who.tags.tag,
                          sets: t[0].photosets.photoset
                      })
                  })) : n.reject()
              }), n
          }, this.getPicturesInSet = function(e, n) {
              return u("flickr.photosets.getPhotos", t.mixin({
                  photoset_id: e
              }, n))
          }, this.getPicturesByTag = function(e, n) {
              return u("flickr.photos.search", t.mixin({
                  tags: e
              }, n))
          }, this.getSizes = function(t, n) {
              var r = t.slice(t.lastIndexOf("/") + 1, t.indexOf("_")),
                  i = new e;
              return f("flickr.photos.getSizes", {
                  photo_id: r
              }).done(function(e) {
                  n > -1 && (e.elemId = n), i.resolve(e)
              }), i
          }, this.getInfo = function(e) {
              var t = e.slice(e.lastIndexOf("/") + 1, e.indexOf("_"));
              f("flickr.photos.getInfo", {
                  api_key: "750b36a2ac65a72e03cf9cef06d79f45",
                  photo_id: t
              }).done(function(e) {
                  console.log("RESULT = ", e)
              })
          }
      }
  }), define("storymaps/maptour/core/MainView", ["storymaps/maptour/core/WebApplicationData", "storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/FeatureServiceManager", "storymaps/maptour/core/MapTourHelper", "storymaps/ui/multiTips/MultiTips", "storymaps/maptour/ui/desktop/Carousel", "storymaps/maptour/ui/desktop/PicturePanel", "storymaps/ui/autoplay/Autoplay", "storymaps/ui/EmbedBar/EmbedBar", "storymaps/maptour/ui/mobile/IntroView", "storymaps/maptour/ui/mobile/ListView", "storymaps/maptour/ui/mobile/InfoView", "storymaps/maptour/ui/mobile/Carousel", "storymaps/utils/Helper", "storymaps/utils/FlickrConnector", "dojo/has", "esri/tasks/query", "esri/layers/GraphicsLayer", "esri/renderers/UniqueValueRenderer", "esri/graphic", "esri/geometry/Point", "esri/geometry/Extent", "esri/config", "esri/geometry/webMercatorUtils", "dojo/topic", "dojo/Deferred", "dojo/dom", "dojo/on", "dojo/_base/connect", "dojo/_base/lang", "dojo/query", "dojo/dom-geometry"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M) {
      return function() {
          function H(t) {
              console.log("maptour.core.Core - tourPointLayerLoaded");
              if (app.isInBuilderMode && !app.data.sourceIsNotFSAttachments() && v("ie") == 10 && navigator.userAgent.match("Windows NT 6.1")) {
                  D.initError("ie10Win7Explain");
                  return
              }
              D.cleanLoadingTimeout(), app.data.getSourceLayer() && app.data.getSourceLayer().setVisibility(!1), D.handleWindowResize(), P.setMapExtent(p.getWebMapExtentFromItem(app.data.getWebMapItem().item)).then(function() {
                  var n = esri.urlToObject(document.location.search).query || {},
                      i = parseInt(n.index, 10);
                  app.data.setTourPoints(t.graphics.slice(0, APPCFG.MAX_ALLOWED_POINTS)), i && (isNaN(i) || i < 0 || i > app.data.getTourPoints().length) && (i = null), i && (app.isFirstUserAction = !0), (configOptions.firstRecordAsIntro || e.getFirstRecordAsIntro()) && t.graphics.length > 1 ? (app.data.setFirstPointAsIntroRecord(), i ? (app.data.setCurrentPointByIndex(i - 1), $("body").hasClass("side-panel") && $("#splashPanel").css("bottom", "2000px")) : app.data.setCurrentPointByIndex(null), app.isInBuilderMode && $("#builderPanel3").toggle(app.data.hasIntroRecord())) : i ? app.data.setCurrentPointByIndex(i - 1) : app.data.setCurrentPointByIndex(t.graphics.length ? 0 : -1), t.graphics.length >= APPCFG.MAX_ALLOWED_POINTS && app.data.setMaxAllowedFeatureReached(!0);
                  var s = app.data.getTourPoints(),
                      o = new g({
                          id: "mapTourGraphics"
                      }),
                      u = app.data.getTourPoints(!0);
                  $(u).each(function(e, t) {
                      o.add(t)
                  });
                  var a = new y(null, app.data.getFeatureIDField());
                  $(s).each(function(e, t) {
                      a.addValue({
                          value: t.attributes.getID(),
                          symbol: r.getSymbol(t.attributes.getColor(), e + 1)
                      })
                  }), o.setRenderer(a), app.map.addLayer(o), L.connect(o, "onMouseOver", q), L.connect(o, "onMouseOut", R), k(o, "click", I), k(app.map, "click", F), app.data.setTourLayer(o), app.map.loaded ? D.appInitComplete() : k(app.map, "load", function() {
                      app.map._bingLogo ? k.once(app.map, "update-end", function() {
                          P.setMapExtent(p.getWebMapExtentFromItem(app.data.getWebMapItem().item)).then(D.appInitComplete)
                      }) : D.appInitComplete()
                  })
              })
          }

          function B() {
              var t = e.getColors(),
                  n = app.data.getTourPoints();
              if (!$("body").hasClass("side-panel") || app.isInBuilderMode) app.desktopCarousel.init(n, t[2], t[1]), T.subscribe("CAROUSEL_CLICK", et);
              if (v("ie") === undefined || v("ie") > 8) {
                  $("body").hasClass("side-panel") || (app.mobileCarousel.init(n, t[2]), T.subscribe("CAROUSEL_SWIPE", et)), T.subscribe("SELECT_BY_SCROLL", et);
                  var r = p.getUrlParams(),
                      i = parseInt(r.index, 10);
                  app.mobileListView.init(n, t[2], i, APPCFG.FLICKR_API_KEY), !$("body").hasClass("side-panel") && !app.isInBuilderMode && app.mobileInfoView.init(app.data.getTourPoints(), t[2]), T.subscribe("OPEN_MOBILE_INFO", ot), T.subscribe("MOBILE_INFO_SWIPE", et)
              }
              app.autoplay && app.autoplay.init({
                  color: t[2],
                  themeMajor: "white2",
                  useBackdrop: !1
              })
          }

          function j() {
              v("chrome") && (app.map.getLevel() > 0 ? app.map.setZoom(app.map.getLevel() - 1).then(function() {
                  S.defaults.map.zoomDuration = 50, app.map.setZoom(app.map.getLevel() + 1).then(function() {
                      S.defaults.map.zoomDuration = 500
                  })
              }) : S.defaults.map.zoomDuration = 500), app.data.getIntroData() && (app.data.getCurrentIndex() == null || $("body").hasClass("side-panel")) && (!v("ie") || v("ie") > 8) && app.mobileIntroView.init(app.data.getIntroData(), e.getColors()[2]), D.displayApp(), setTimeout(app.desktopPicturePanel.firstDisplayCheck, 50), app.isFirstUserAction = !0, T.publish("maptour-ready")
          }

          function F(e) {
              !e.graphic && !app.isInBuilderMode && app.mapTips && app.mapTips.hide(), !e.graphic && !app.isInBuilderMode && $("body").hasClass("side-panel") && (P.selected.hidden = !0, app.mapTips && app.mapTips.clean(!0))
          }

          function I(e) {
              e.graphic != app.data.getCurrentGraphic() || app.data.getCurrentGraphic().hidden ? (app.filterMouseHoverEvent = !0, J(), app.data.setCurrentPointByGraphic(e.graphic), K(), setTimeout(function() {
                  app.filterMouseHoverEvent = !1
              }, 1500)) : V()
          }

          function q(e) {
              if (p.isMobile() || app.filterMouseHoverEvent) return;
              app.map.setMapCursor("pointer");
              var t = e.graphic,
                  n = t == app.data.getCurrentGraphic();
              if (!n) rt(t, "hover");
              else if (!$("body").hasClass("side-panel")) return;
              if ($("body").hasClass("builder-mode") && $("body").hasClass("side-panel")) {
                  U(t);
                  return
              }!$("body").hasClass("side-panel") && (!n || !app.isInBuilderMode && !r.isOnMobileView() && !$(".multiTip").is(":visible")) ? U(t) : !app.isInBuilderMode && !r.isOnMobileView() && !$(".multiTip").is(":visible") && W(t)
          }

          function R(e) {
              if (app.filterMouseHoverEvent && P.selected) return;
              app.map.setMapCursor("default"), z();
              if ($("body").hasClass("builder-mode") && $("body").hasClass("side-panel")) return;
              $("body").hasClass("side-panel") && X();
              var t = e.graphic;
              t != app.data.getCurrentGraphic() && rt(t, "normal")
          }

          function U(e) {
              var t = app.map.toScreen(e.geometry),
                  n = t.x,
                  r = t.y;
              if (!e.attributes.getName()) return;
              $("#hoverInfo").html(e.attributes.getName()), n <= $("#mainMap").width() - 230 ? $("#hoverInfo").css("left", n + 15) : $("#hoverInfo").css("left", n - 25 - $("#hoverInfo").width()), r >= $("#hoverInfo").height() + 50 ? $("#hoverInfo").css("top", r - 35 - $("#hoverInfo").height()) : $("#hoverInfo").css("top", r - 15 + $("#hoverInfo").height()), $("#hoverInfo").show()
          }

          function z() {
              $("#hoverInfo").hide()
          }

          function W(e) {
              if (app.mapTips && $("body").hasClass("mobile-view")) {
                  app.mapTips.clean(!0);
                  return
              }
              app.mapTips && app.mapTips.clean(), app.mapTips = new i({
                  map: app.map,
                  content: e.attributes.getName(),
                  selected: null,
                  pointArray: [e],
                  labelDirection: "auto",
                  backgroundColor: APPCFG.HOVER_POPUP_BACKGROUND_COLOR,
                  borderColor: APPCFG.HOVER_POPUP_BORDER_COLOR,
                  pointerColor: APPCFG.HOVER_POPUP_ARROW_COLOR,
                  textColor: "#ffffff",
                  offsetTop: e.symbol.height / 2 + e.symbol.yoffset,
                  offsetBottom: $("body").hasClass("side-panel") ? 0 : 8,
                  topLeftNotAuthorizedArea: v("touch") ? [40, 180] : [30, 150],
                  mapAuthorizedWidth: r.isModernLayout() ? O("#picturePanel").position()[0].x : -1,
                  mapAuthorizedHeight: r.isModernLayout() ? O("#footerDesktop").position()[0].y - O("#header").position()[0].h : -1,
                  visible: !r.isOnMobileView() && e.attributes.getName() !== ""
              })
          }

          function X() {
              app.mapTips && app.mapTips.clean()
          }

          function V() {
              !app.isInBuilderMode && !r.isOnMobileView() && !$(".multiTip").is(":visible") && app.data.getCurrentGraphic().attributes.getName() !== "" && (z(), app.mapTips && app.mapTips.show())
          }

          function J() {
              app.mapCommand.startLoading(), rt(app.data.getCurrentGraphic(), "normal"), app.mapTips && app.mapTips.hide(), app.header.mobileHeaderIsInFirstState() && app.header.hideMobileBanner(), app.isInBuilderMode && (app.desktopPicturePanel.forceSaveEdits(), app.builderMoveEvents && app.builderMoveEvents.clean())
          }

          function K(t) {
              console.log("maptour.core.Core - selectedPointChange_after");
              var n = t ? t.attributes : app.data.getCurrentAttributes();
              if ($("body").hasClass("mobile-layout-scroll")) {
                  var i;
                  for (i = app.data.getCurrentIndex() >= 3 ? -2 : app.data.getCurrentIndex() == 2 ? -2 : 0; i < 4; i++) {
                      var s = app.data.getCurrentIndex() + i;
                      if (s > app.data.getTourPoints().length - 1) break;
                      var o = app.data.getTourPoints()[s].attributes,
                          u = $(".tour-point-content .media").eq(s);
                      o.isVideo() || !r.mediaIsSupportedImg(o.getURL()) ? u.find("iframe").attr("src") || u.find("iframe").attr("src", o.getURL()) : u.find("img").attr("src") || ("objectFit" in document.documentElement.style == 0 ? u.find("img").parent().css({
                          backgroundImage: "url(" + o.getURL() + ")"
                      }) : u.find("img").attr("src", o.getURL()))
                  }
              }
              app.data.setIsEditingFirstRecord(!!t);
              if (!n) {
                  if ($("body").hasClass("builder-mode") && $("body").hasClass("side-panel") && app.data.hasIntroRecord() && (app.data.getCurrentIndex() == null || app.data.getCurrentIndex() == -1)) {
                      app.data.setCurrentPointByGraphic(app.data.getIntroData()), T.publish("CORE_UPDATE_UI", {
                          editFirstRecord: !0
                      }), $("#arrowPrev").addClass("disabled");
                      return
                  }
                  console.error("selectedPointChange_after - invalid point"), D.handleWindowResize(), Q(), app.desktopPicturePanel.clean();
                  return
              }
              app.desktopPicturePanel.updatePicture(n.getURL(), n.getName(), n.getDescription(), n.getThumbURL(), G(), r.isModernLayout(), e.getPlacardPosition() === "under" || configOptions.placardPosition === "under", !n.isVideo() && r.mediaIsSupportedImg(n.getURL()))
          }

          function Q(t) {
              console.log("selectedPointChange_afterStep2");
              var n = app.data.getCurrentIndex();
                  r = app.data.getCurrentGraphic();
              z(), app.mapTips && app.mapTips.clean(!0), $("body").hasClass("side-panel") && r && P.centerMap(r.geometry);
              if (app.isFirstUserAction && !t) {
                  app.isFirstUserAction = !1;
                  var i = parseInt(e.getZoomLevel() !== "" && e.getZoomLevel() !== undefined ? e.getZoomLevel() : configOptions.zoomLevel, 10);
                  if (i !== "" && i != -1 && "" + i != "NaN" && i != app.map.getZoom()) try {
                      i > app.map.getMaxZoom() && (i = app.map.getMaxZoom()), P.centerMap(r.geometry, i), k.once(app.map, "extent-change", function() {
                          nt(r)
                      })
                  } catch (s) {} else nt(r)
              } else nt(r);
              app.desktopCarousel.setSelectedIndex(n), app.mobileCarousel.setSelectedPoint(n), $(".swipeview-active").children()[0] && $(".swipeview-active").children()[0].id && (/iPhone|iPad|iPod/i.test(navigator.userAgent) || $("#" + $(".swipeview-active").children()[0].id).css("height", $("#infoPanel").height() - 40 - (app.embedBar && app.embedBar.initiated ? 26 : 0)), setTimeout(function() {
                  $("#" + $(".swipeview-active").children()[0].id).scrollTop()
              }, 0)), app.mapCommand.stopLoading(), T.publish("maptour-point-change-after", n), app.isLoading && j()
          }

          function G() {
              var e = app.data.getCurrentIndex();
              return {
                  left: !!e,
                  right: e != app.data.getNbPoints() - 1
              }
          }

          function Y() {
              var e = app.data.getCurrentIndex();
              if (!e) return;
              J(), app.data.setCurrentPointByIndex(e - 1), K()
          }

          function Z() {
              var e = app.data.getCurrentIndex();
              e == null && (app.mobileIntroView.hide(), e = -1);
              if (e == app.data.getNbPoints() - 1) return;
              J(), app.data.setCurrentPointByIndex(e + 1), K()
          }

          function et(e) {
              app.data.getCurrentIndex() == null && app.mobileIntroView.hide();
              if (e != app.data.getCurrentIndex()) J(), app.data.setCurrentPointByIndex(e), K();
              else {
                  var t = app.data.getCurrentGraphic();
                  ut(t.geometry) || P.centerMap(t.geometry), V()
              }
          }

          function tt(e) {
              var t = app.data.getCurrentGraphic();
              if (e.name !== undefined || !e.color) return;
              P.updateRenderer(), rt(t, "selected"), it(t)
          }

          function nt(e) {
              if (!app.map || !e) return;
              rt(e, "selected"), app.isInBuilderMode && app.data.sourceIsEditable() && app.builder.updateBuilderMoveable(e)
          }

          function rt(e, t) {
              if (!e) return;
              var n = e.getLayer().renderer.getSymbol(e),
                  i = app.data.getTourPoints(!1),
                  s = $.map(i, function(t, n) {
                      if (t.attributes.getID() == e.attributes.getID()) return n
                  }),
                  o = e.attributes.getColor();
              n = r.getSymbol(o, s[0] + 1, t), e.setSymbol(n);
              var u;
              $("body").hasClass("side-panel") ? u = APPCFG.ICON_CUSTOM_CFG[t] : u = APPCFG.ICON_CFG[t];
              if (!u) return;
              t == "selected" && setTimeout(function() {
                  it(e)
              }, 0);
              if (APPCFG.USE_STATIC_ICON && APPCFG.USE_STATIC_ICON.enabled && APPCFG.USE_STATIC_ICON.width && APPCFG.USE_STATIC_ICON.height) return;
              n.setWidth(u.width).setHeight(u.height).setOffset(u.offsetX, u.offsetY), e.draw()
          }

          function it(e) {
              !ut(e.geometry) || $("body").hasClass("mobile-layout-scroll") ? (k.once(app.map, "extent-change", function() {
                  st(e)
              }), P.centerMap(e.geometry)) : !app.loadingTimeout && (!app.isInBuilderMode || !$(".multiTip").length) && st(e)
          }

          function st(e) {
              P.selected = null, P.selected = e;
              try {
                  e.getDojoShape().moveToFront()
              } catch (t) {}
              if (app.isInBuilderMode) app.data.sourceIsEditable() && app.builder.createPinPopup(e, app.data.getCurrentIndex(), !r.isOnMobileView());
              else {
                  app.mapTips && app.mapTips.clean(!0);
                  if ($("body").hasClass("side-panel")) return;
                  app.mapTips = new i({
                      map: app.map,
                      content: e.attributes.getName(),
                      selected: e,
                      pointArray: [e],
                      labelDirection: "auto",
                      backgroundColor: APPCFG.POPUP_BACKGROUND_COLOR,
                      borderColor: APPCFG.POPUP_BORDER_COLOR,
                      pointerColor: APPCFG.POPUP_ARROW_COLOR,
                      textColor: "#ffffff",
                      offsetTop: e.symbol.height / 2 + e.symbol.yoffset,
                      offsetBottom: $("body").hasClass("side-panel") ? 0 : 8,
                      topLeftNotAuthorizedArea: v("touch") ? [40, 180] : [30, 150],
                      mapAuthorizedWidth: r.isModernLayout() ? O("#picturePanel").position()[0].x : -1,
                      mapAuthorizedHeight: r.isModernLayout() ? O("#footerDesktop").position()[0].y - O("#header").position()[0].h : -1,
                      visible: !r.isOnMobileView() && e.attributes.getName() !== ""
                  })
              }
          }

          function ot(e) {
              e != null && et(e), location.hash = "#info"
          }

          function ut(e) {
              var t = r.isModernLayout() && !r.isOnMobileView();
              if (!t) return app.map.extent.contains(e);
              var n = new E(app.map.extent.xmin, app.map.extent.ymin + (10 + M.position(C.byId("footer")).h) * app.map.getResolution(), app.map.extent.xmin + M.position(C.byId("picturePanel")).x * app.map.getResolution(), app.map.extent.ymax, app.map.extent.spatialReference);
              return n.contains(e)
          }

          function at(e) {
              var t = r.isModernLayout() && !r.isOnMobileView();
              if (!t) return app.map.setExtent(e, !0);
              var n = 10 + M.position(C.byId("picturePanel")).w,
                  i = 10 + M.position(C.byId("footer")).h,
                  s = e.getWidth() / app.map.width,
                  o = e.getHeight() / app.map.height,
                  u = new E({
                      xmin: e.xmin,
                      ymin: e.ymin - o * i,
                      xmax: e.xmax + s * n,
                      ymax: e.ymax,
                      spatialReference: e.spatialReference
                  }),
                  a = app.map._params.lods,
                  f = p.getFirstLevelWhereExtentFit(u, app.map);
              if (f != -1) {
                  var l = new w(e.getCenter().x + (app.map.width / 2 - M.position(C.byId("picturePanel")).x / 2) * a[f].resolution, e.getCenter().y - (10 + M.position(C.byId("footer")).h / 2) * a[f].resolution, e.spatialReference);
                  return app.map.centerAndZoom(l, f)
              }
              return app.map.setExtent(u)
          }

          function ft() {
              b.prototype.hasBeenUpdated = function() {
                  var e = this.attributes.getOriginalGraphic().geometry;
                  return this.attributes.hasBeenUpdated() || this.geometry.x != e.x || this.geometry.y != e.y || this.commitFailed
              }, b.prototype.getUpdatedFeature = function() {
                  this.attributes.commitUpdate();
                  var e = this.attributes.getOriginalGraphic().geometry;
                  return e.x = this.geometry.x, e.y = this.geometry.y, this.attributes.getOriginalGraphic()
              }, b.prototype.restoreOriginal = function() {
                  this.attributes.restoreOriginal();
                  var e = this.attributes.getOriginalGraphic().geometry;
                  this.geometry.x = e.x, this.geometry.y = e.y
              }, b.prototype.setUpdateFailed = function() {
                  this.commitFailed = !0
              }, b.prototype.cleanUpdateFailed = function() {
                  this.commitFailed && delete this.commitFailed
              }
          }
          var D = null,
              P = this;
          this.init = function(e) {
              D = e;
              if (app.isInBuilderMode && v("ie") && v("ie") < 9) return D.initError("noBuilderIE8"), !1;
              var t = p.getUrlParams();
              return configOptions.sourceLayerTitle = (t.sourceLayerTitle ? unescape(t.sourceLayerTitle) : null) || configOptions.sourceLayerTitle, configOptions.firstRecordAsIntro = t.firstRecordAsIntro ? t.firstRecordAsIntro == "true" : configOptions.firstRecordAsIntro, configOptions.zoomLevel = t.zoomLevel || configOptions.zoomLevel, app.desktopCarousel = new s("#footerDesktop .carousel", app.isInBuilderMode), app.desktopPicturePanel = new o("#picturePanel", app.isInBuilderMode), app.mobileIntroView = new f("#introPanel"), app.mobileListView = new l("#listPanel"), app.mobileInfoView = new c("#infoCarousel"), app.mobileCarousel = new h("#footerMobile", app.isInBuilderMode), app.flickr = new d(APPCFG.FLICKR_API_KEY), !app.isInBuilderMode && t.autoplay !== undefined && t.autoplay !== "false" && (app.autoplay = new u($("#autoplay"), function() {
                  var e = 0;
                  return app.data.getCurrentIndex() != app.data.getNbPoints() - 1 && (e = app.data.getCurrentIndex() + 1), app.data.getCurrentIndex() === null && app.data.getNbPoints() >= 1 && (e = 0, $("body").hasClass("side-panel") && $("#splashPanel").animate({
                      bottom: "2000px"
                  }, 900)), setTimeout(function() {
                      et(e)
                  }, 50), e
              }), T.subscribe("maptour-ready", function() {
                  $("body").hasClass("mobile-view") || app.autoplay.start()
              }), T.subscribe("maptour-point-change-after", function(e) {
                  app.autoplay.onNavigationEvent(e)
              })), r.loadCustomIcon(), ft(), T.subscribe("CORE_UPDATE_EXTENT", this.setMapExtent), T.subscribe("CORE_PICTURE_CHANGED", Q), T.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", tt), T.subscribe("PIC_PANEL_PREV", Y), T.subscribe("PIC_PANEL_NEXT", Z), window.mediaNotFoundHandler = function(e) {
                  e.src = r.getNotFoundMedia(), $("body").hasClass("side-panel") && setTimeout(function() {
                      $(e).css("object-fit", "contain")
                  }, 500), e.onerror = ""
              }, app.isInBuilderMode || $(window).keyup(function(e) {
                  e.keyCode == 13 || e.keyCode == 39 || e.keyCode == 34 ? Z() : (e.keyCode == 37 || e.keyCode == 33) && Y()
              }), v("touch") && $(document).bind("touchmove", function(e) {
                  !$(e.target).parents("#helpPopup, #placardContainer, #introPanel, #infoPanel, #popupViewGeoTag, #mobile-scroll-story-content").length && !$(e.target).hasClass("subtitle") && e.preventDefault()
              }), $("body").on("mousedown", "*", function(e) {
                  ($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none" && $(this).css("outline", "none").on("blur", function() {
                      $(this).off("blur").css("outline", "")
                  }), $(this).parents("#placard > div").length ? $(this).parents("#placard > div").css("outline", "none").on("blur", function() {
                      $(this).off("blur").css("outline", "")
                  }) : $(this).parents("#headerDesktop .title").length ? $(this).parents("#headerDesktop .title").css("outline", "none").on("blur", function() {
                      $(this).off("blur").css("outline", "")
                  }) : $(this).parents("#headerDesktop .subtitle").length && $(this).parents("#headerDesktop .subtitle").css("outline", "none").on("blur", function() {
                      $(this).off("blur").css("outline", "")
                  })
              }), v("touch") && $("body").addClass("hasTouch"), APPCFG.USE_STATIC_ICON && APPCFG.USE_STATIC_ICON.enabled && $("body").addClass("notNumbered"), !0
          }, this.webmapLoaded = function() {
              var i, s, o, u;
              if (configOptions.sourceLayerTitle) {
                  var f = app.data.getWebMapItem() && app.data.getWebMapItem().itemData ? app.data.getWebMapItem().itemData.operationalLayers : [];
                  for (i = app.map.graphicsLayerIds.length - 1; i >= 0; i--) {
                      s = app.map.graphicsLayerIds[i], u = app.map._layers[s], s.split("_").length == 3 ? s = s.split("_").slice(0, 2).join("_") : s.split("_").length == 2 && (s = s.split("_").slice(0, 1).join("_"));
                      if (s.match(/^mapNotes_/) || u.geometryType != "esriGeometryPoint") continue;
                      for (var l = 0; l < f.length; l++)
                          if (f[l].id == s && f[l].title.toUpperCase() == configOptions.sourceLayerTitle.toUpperCase()) {
                              app.data.setSourceLayer(u);
                              break
                          } if (app.data.getSourceLayer()) break
                  }
              } else
                  for (i = app.map.graphicsLayerIds.length - 1; i >= 0; i--) {
                      o = app.map.graphicsLayerIds[i], u = app.map._layers[o];
                      if ((u.visible || u.visible === undefined) && (u.type == "Feature Layer" || u._collection) && u.geometryType == "esriGeometryPoint" && !o.match(/^mapNotes_/)) {
                          if (!!u.url) {
                              app.data.setSourceLayer(u);
                              break
                          }
                          var c = app.data.electFieldsFromFieldsList(u.fields);
                          if (c && c.allWebmapLayerMandatoryFieldsFound()) {
                              app.data.setSourceLayer(u);
                              break
                          }
                      }
                  }
              var h = esri.urlToObject(document.location.search).query || {},
                  d = h.classicEmbedMode ? !0 : h.classicEmbedMode === "" ? !0 : h.classicembedmode ? !0 : h.classicembedmode === "" ? !0 : !1,
                  g = i18n.viewer.embedBar;
              A.mixin(g, {
                  open: i18n.viewer.share.shareLinkOpen,
                  close: i18n.viewer.bannerNotification.close,
                  shareFacebook: i18n.viewer.desktopHTML.facebookTooltip,
                  shareTwitter: i18n.viewer.desktopHTML.twitterTooltip
              }), app.embedBar = new a({
                  classicEmbedMode: d,
                  strings: g,
                  appCreationDate: app.data.getAppItem().created,
                  june2018ReleaseDate: APPCFG.JUNE_CREATED_DATE,
                  isBuilder: app.isInBuilderMode,
                  isMobile: !1,
                  isEsriLogo: e.getLogoURL() ? !1 : !0,
                  logoPath: "resources/icons/esri-logo-black.png",
                  logoElements: [$(".headerLogoImg"), $(".scroll-layout-banner")],
                  taglineElements: [$(".msLink"), $(".mobile-scroll-story-tag-link")],
                  shareElements: [$(".share_facebook"), $(".share_twitter"), $(".share_bitly")],
                  appTitle: e.getTitle(),
                  bitlyCreds: [APPCFG.HEADER_SOCIAL.bitly.key, APPCFG.HEADER_SOCIAL.bitly.login]
              }), app.desktopPicturePanel.init(e.getColors()[1], !app.data.sourceIsNotFSAttachments(), r.isModernLayout()), r.isPanelsLayout() && ($("#leftPanel").append($("#mapPanel")), $("#leftPanel").append($("#placardContainer")));
              if (app.data.sourceIsFS()) {
                  app.isInBuilderMode && (app.data.getSourceLayer().setUserIsAdmin(!0), app.data.getSourceLayer().credential || app.data.getSourceLayer()._forceIdentity(function() {}));
                  var y = function() {
                      loadingIndicator.setMessage(i18n.viewer.loading.step3);
                      var e = new n;
                      T.subscribe("FS_MANAGER_LAYER_LOADED", function(e) {
                          if (app.isInBuilderMode || !p.getAppID(D.isProd())) {
                              var t = new m;
                              t.where = "1=1", app.data.getSourceLayer().queryCount(t, function(t) {
                                  app.data.getSourceLayer().graphics.length != t, H(e)
                              }, function() {
                                  H(e)
                              }), app.data.sourceIsNotFSAttachments() && app.data.getSourceLayer().graphics.length && (app.data.getSourceLayer()._nextId = app.data.getSourceLayer().graphics.slice(-1)[0].attributes[app.data.getSourceLayer().objectIdField] + 1)
                          } else H(e)
                      }), e.process(app.data.getSourceLayer(), app.data.isFSWithURLFields())
                  };
                  v("ie") > 0 && v("ie") < 9 ? setTimeout(y, 1e3) : k.once(app.map, "update-end", function() {
                      y()
                  })
              } else if (app.data.sourceIsWebmap()) {
                  loadingIndicator.setMessage(i18n.viewer.loading.step3);
                  var E = [];
                  $(app.data.getSourceLayer().graphics).each(function(e, n) {
                      E.push(new b(new w(n.geometry.x, n.geometry.y, n.geometry.spatialReference), null, new t(n, null, null, !0)))
                  }), H({
                      graphics: E
                  })
              } else app.isInBuilderMode ? D.isProd() ? this.showInitPopup() : D.portalLogin().then(this.showInitPopup, function() {
                  D.initError("noLayerNoHostedFS")
              }) : p.getAppID(D.isProd()) ? app.userCanEdit ? (loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder), setTimeout(function() {
                  app.header.switchToBuilder()
              }, 1200)) : D.initError("noLayerView") : D.initError("noLayer")
          }, this.appInitComplete = function() {
              k.once(app.map, "extent-change", function() {
                  app.header.hideMobileBanner()
              }), k(app.map, "extent-change", function(e) {
                  var t = app.data.getCurrentGraphic();
                  if (t && e.extent.contains(t.geometry)) try {
                      t.getDojoShape().moveToFront()
                  } catch (n) {}
              }), $.each(app.map.graphicsLayerIds, function(e, t) {
                  t != app.data.getSourceLayer().id && $('g[id="' + t + '_layer"]').css("visibility", "visible")
              }), app.data.getTourPoints().length && K(app.data.getCurrentGraphic() || app.data.getIntroData()), setTimeout(B, 0), app.isInBuilderMode && e.getSourceLayer() && app.data.getSourceLayer().id != e.getSourceLayer() ? app.builder.setDataWarning(i18n.viewer.builderHTML.dataSourceWarning, !0) : app.isInBuilderMode && app.data.detectDataAddedOutsideOfBuilder() && app.builder.setOrganizeWarning(), app.isInBuilderMode && app.data.sourceIsNotFSAttachments() && app.builder.checkPicturesExtension(!1), app.isInBuilderMode && app.data.getFieldsConfig() && !app.data.getFieldsConfig().allCriticalFieldsFound() && app.builder.openFieldsSettingOnStartup(), app.isInBuilderMode && !app.data.sourceIsNotFSAttachments() && !p.browserSupportAttachementUsingFileReader() && app.builder.showBrowserWarning(), app.data.sourceIsNotFSAttachments() || ($("#importPopupButton").attr("disabled", "disabled"), $("#importPopupButton").attr("title", i18n.viewer.builderHTML.buttonImportDisabled), $("#importPopupButton2").attr("disabled", "disabled"), $("#importPopupButton2").addClass("disabled"), $("#importPopupButton2").attr("title", i18n.viewer.builderHTML.buttonImportDisabled)), app.data.getTourPoints().length || Q(), (v("ie") || v("trident")) && app.desktopCarousel.iefix(), app.autoplay && app.header.enableAutoplay();
              if (!$("body").hasClass("builder-mode") && $("body").hasClass("side-panel"))
                  if (app.data.hasIntroRecord()) {
                      var t = document.createElement("img"),
                          n = app.data.getIntroData().attributes.getURL();
                      if (app.data.getIntroData().attributes.isVideo() || !r.mediaIsSupportedImg(app.data.getIntroData().attributes.getURL())) t.src = r.getNotFoundMedia();
                      else {
                          t.src = app.data.getIntroData().attributes.getURL();
                          if (app.data.getIntroData().attributes.getURL().indexOf("'") > -1) {
                              var i = [];
                              for (var s = 0; s < app.data.getIntroData().attributes.getURL().length; s++) app.data.getIntroData().attributes.getURL()[s] === "'" && i.push(s);
                              i.length && $.each(i, function(e, t) {
                                  n = [app.data.getIntroData().attributes.getURL().slice(0, t), "\\", app.data.getIntroData().attributes.getURL().slice(t)].join("")
                              })
                          }
                      }
                      t.onload = function() {
                          $("#splashPanel").css("background-image", "url(" + n + ")"), app.data.getIntroData().attributes.getName() ? ($("#splashTitle").html(app.data.getIntroData().attributes.getName()), $("#splashText").css("max-height", $(window).height() - 375 - .1 * $(window).height()), $("#splashPanel").attr("alt", "")) : $("#splashText").hide(), app.data.getIntroData().attributes.getDescription() && $("#splashSubtitle").html(app.data.getIntroData().attributes.getDescription()), $("#takeTourText").text(i18n.viewer.desktopHTML.takeTourText), $(".cover-start").on("click", function() {
                              app.isFirstUserAction ? (T.subscribe("maptour-point-change-after", function() {
                                  setTimeout(function() {
                                      $("#splashPanel").animate({
                                          bottom: "2000px"
                                      }, 900)
                                  }, 150)
                              }), T.publish("SELECT_BY_SCROLL", 0)) : (setTimeout(function() {
                                  $("#splashPanel").animate({
                                      bottom: "2000px"
                                  }, 900)
                              }, 150), T.publish("SELECT_BY_SCROLL", 0))
                          }), app.data.getCurrentIndex() == null && ($("body").hasClass("mobile-layout-scroll") || ($("#splashPanel").show(), setTimeout(function() {
                              var e = !0;
                              Q(e)
                          }, 50)))
                      }, $("#headerDesktop .title").css("cursor", "pointer"), $("#headerDesktop .title").on("click", function() {
                          $("#splashPanel").show(), $("#splashPanel").animate({
                              bottom: app.embedBar && app.embedBar.initiated ? 26 : 0
                          }, 700)
                      })
                  } else $("#headerDesktop .title").css("cursor", "pointer"), $("#headerDesktop .title").on("click", function() {
                      T.publish("SELECT_BY_SCROLL", 0)
                  })
          }, this.onHashChange = function() {
              location.hash == "#list" ? ($("#listViewLink").addClass("current"), app.mobileListView.show()) : location.hash == "#info" && ($("#infoViewLink").addClass("current"), app.mobileInfoView.show())
          }, this.updateUI = function(t, n, i) {
              this.updateRenderer(i), app.desktopCarousel.update(t, n[2], n[1]), app.mobileCarousel.update(t, n[2]), app.mobileListView.update(t, n[2]), app.mobileInfoView.update(t, n[2]), app.desktopPicturePanel.update(n[1], r.isModernLayout()), app.mapCommand.enableLocationButton(e.getZoomLocationButton()), K(i ? app.data.getIntroData() : null)
          }, this.resize = function(e) {
              app.embedBar && app.embedBar.initiated && (e.height -= 26, $("#introPanel").css("min-height", 0), $("#infoPanel .embed-btn-container").css("bottom", "26px"), $(".tourPoint").height($(".tourPoint").height() - $("#header").height() - $(".embed-bar").height())), app.initScreenIsOpen && ($("#loadingOverlay").css("top", e.isMobileView ? "0px" : $("#header").height()), $("#loadingOverlay").css("height", e.isMobileView ? $("body").height() : $("body").height() - $("#header").height()), $("#header").css("display", e.isMobileView ? "none" : "block"), $("#fatalError").css("display", e.isMobileView ? "block" : "none")), e.isMobileView && e.isOnMobileMapView ? $("#footerMobile").show() : $("#footerMobile").hide(), app.desktopPicturePanel.resize(e.width, e.height);
              if (!r.isPanelsLayout()) app.desktopCarousel.resize();
              else {
                  $("#leftPanel").width(e.width * (1 / 3)), $("#mapPanel").width(e.width * (1 / 3)), $("#placardContainer").width(e.width * (1 / 3)), $("#picturePanel").width(e.width * (2 / 3)), $("#picturePanel").css("left", $("#leftPanel").width()), $("#leftPanel").width() == 400 && $("#placard .name").width("235px");
                  var t = !app.data.hasIntroRecord() || app.data.getCurrentIndex() != -1 && app.data.getCurrentIndex() != null ? "" : app.data.getIntroData().attributes.getURL();
                  "objectFit" in document.documentElement.style == 1 ? $(".side-panel .member-image img").css("object-fit", "cover") : ($(".side-panel .member-image img").css("opacity", "0"), $(".side-panel .member-image").css({
                      backgroundPositionX: "center",
                      backgroundPositionY: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundImage: t ? t : app.data.getCurrentAttributes() && app.data.getCurrentAttributes().getURL() ? "url(" + app.data.getCurrentAttributes().getURL() + ");" : 'url("");'
                  }), $(".tour-point-content .media img").css("opacity", "0"), $(".tour-point-content .media").css({
                      backgroundPositionX: "center",
                      backgroundPositionY: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundImage: t ? t : app.data.getCurrentAttributes() && app.data.getCurrentAttributes().getURL() ? "url(" + app.data.getCurrentAttributes().getURL() + ");" : 'url("");'
                  })), $(".member-image.current").css("left", 0), setTimeout(function() {
                      var e = $("#placard-bg").height() - $(".name").height();
                      $(".description").height(e - 70)
                  }, 0), $("body").hasClass("mobile-layout-scroll") ? ($(".scroll-layout").height(e.height), $("#leftPanel").height("35%")) : $("#leftPanel").height(e.height), app.data.hasIntroRecord() && !e.isMobileView && !app.isInBuilderMode ? $("#splashPanel").show() : app.data.hasIntroRecord() && e.isMobileView && $("#splashPanel").hide()
              }
              app.mapTips && (e.isMobileView ? app.mapTips.hide() : app.isInBuilderMode ? app.mapTips.show() : app.data.getCurrentGraphic().attributes.getName() !== "" && app.mapTips.show()), e.isMobileView || app.desktopCarousel.checkItemIsVisible(app.data.getCurrentIndex()), r.isModernLayout() && $("#autoplay").css({
                  left: "25%",
                  bottom: 160
              }), app.embedBar && app.embedBar.initiated && !$("body").hasClass("mobile-layout-scroll") && $("#footer").css("bottom", "26px"), e.isMobileView && $("body").hasClass("mobile-layout-scroll") && !$(".tour-point-content").length && !app.isLoading && app.mobileListView.update(app.data.getTourPoints()), e.isMobileView && app.autoplay && app.autoplay.stop()
          }, this.showInitPopup = function() {
              var t = "noLayerMobile";
              D.cleanLoadingTimeout(), app.isInitializing = !0, app.initScreenIsOpen = !0, v("touch") && p.isMobile() && (window.innerHeight > window.innerWidth ? window.innerHeight > 768 && (t = "noLayerMobile2") : window.innerWidth > 768 && (t = "noLayerMobile2")), D.initError(t, null, !0), D.handleWindowResize();
              var n = app.builder.presentInitPopup(app.portal, app.data.getWebMapItem());
              n.then(function(t) {
                  $("#initPopup").modal("hide"), app.initScreenIsOpen = !1;
                  var n = e.cleanWebAppAfterInitialization();
                  n && T.publish("BUILDER_INCREMENT_COUNTER", 1), D.prepareAppForWebmapReload(), $("#loadingOverlay").css("height", "100%"), app.isDirectCreation ? (e.setTitle(t), D.loadWebMap(app.data.getWebMapItem()), T.publish("BUILDER_INCREMENT_COUNTER", 1)) : app.isGalleryCreation ? (D.loadWebMap(app.data.getWebMapItem()), T.publish("BUILDER_INCREMENT_COUNTER", 1)) : D.loadWebMap(app.data.getWebMapItem().item.id)
              }, function() {
                  D.replaceInitErrorMessage("noLayerView"), $("#loadingOverlay").css("top", "0px"), $("#header").css("display", "inherit"), $("#fatalError").css("display", "block"), app.initScreenIsOpen = !1, D.handleWindowResize()
              })
          }, this.updateRenderer = function(e) {
              var t = app.data.getTourPoints(),
                  n = app.data.getCurrentId(),
                  i = -1,
                  s = new y(null, app.data.getFeatureIDField());
              $(t).each(function(e, t) {
                  s.addValue({
                      value: t.attributes.getID(),
                      symbol: r.getSymbol(t.attributes.getColor(), e + 1)
                  }), t.attributes.getID() == n && (i = e), t.setSymbol(null)
              }), $.each(app.data.getTourPoints(!0), function(e, t) {
                  t.setSymbol(null)
              }), app.data.getTourLayer().setRenderer(s), app.data.getTourLayer().refresh(), !e && i == -1 && t.length > 0 && (i = 0), app.data.setCurrentPointByIndex(i)
          }, this.prepareMobileViewSwitch = function() {
              $("#infoViewLink").hasClass("current") && $("#infoCarousel .swipeview-active").find("iframe").attr("src", ""), $(".mobileView").hide(), $("#footerMobile").hide(), $(".navBar span").removeClass("current"), app.header.hideMobileBanner()
          }, this.centerMap = function(e, t) {
              var n = r.isModernLayout() && !r.isOnMobileView();
              if (t === undefined && (!n || !app.map.__LOD)) app.map.centerAt(e);
              else if (t !== undefined && (!n || !app.map.__LOD)) app.map.centerAndZoom(e, t);
              else {
                  var i = e,
                      s = 20 + M.position(C.byId("picturePanel")).x / 2,
                      o = 10 + M.position(C.byId("footer")).h / 2;
                  if (e.spatialReference.wkid == 4326 && app.map.spatialReference.wkid == 102100) i = x.geographicToWebMercator(e);
                  else if (e.spatialReference.wkid == 102100 && app.map.spatialReference.wkid == 4326) i = x.webMercatorToGeographic(e);
                  else if (e.spatialReference.wkid != app.map.spatialReference.wkid) return;
                  t ? app.map.centerAndZoom(i.offset(s * app.map._params.lods[t].resolution, -o * app.map._params.lods[t].resolution), t) : app.map.centerAt(i.offset(s * app.map.getResolution(), -o * app.map.getResolution()))
              }
          }, this.setMapExtent = function(e) {
              if (!e || !e.spatialReference || !app.map || !app.map.extent.spatialReference || !app.map.spatialReference) {
                  var t = new N;
                  return t.resolve(), t
              }
              if (app.map.spatialReference.wkid == e.spatialReference.wkid) return at(e);
              var n = new N;
              return S.defaults.geometryService.project([e], app.map.spatialReference, function(e) {
                  if (!e || !e[0]) return;
                  at(e[0]), n.resolve()
              }), n
          }, this.zoomToDeviceLocation = function(e, t) {
              e ? app.map.spatialReference.wkid != 102100 && app.map.spatialReference.wkid != 4326 ? S.defaults.geometryService.project([t], app.map.spatialReference, function(e) {
                  if (!e || !e[0]) return;
                  ut(e[0]) || P.centerMap(e[0])
              }) : ut(t) || P.centerMap(t) : ($("#mapPanel .mapLocationMsg").html(i18n.viewer.locator.error), $("#mapPanel .mapLocationError").fadeIn(), setTimeout(function() {
                  $("#mapPanel .mapLocationError").fadeOut()
              }, 5e3))
          }, this.initLocalization = function() {
              app.desktopPicturePanel.initLocalization()
          }
      }
  }), require(["storymaps/ui/loadingIndicator/LoadingIndicator", "storymaps/core/Core", "storymaps/maptour/core/MainView"], function() {}), define("storymaps/maptour/BuildConfigViewer", function() {});
