(function() {
    $(function() {
        var t, n, e, a, i, r, o, c, l, d, u, s;
        return l = l, l || (l = window), t = l.$, n = l.Modernizr, a = l.bootbox, u = l.open, d = l.location, r = l.confirm, i = t("#disclaimerscript").attr("cancel"), s = t("#disclaimerscript").attr("proceed"), o = l.defaultDisclaimerMessage, o || (o = "You will be linking to another website not owned or operated by " + d.hostname + ". " + d.hostname + " is not responsible for the availability or content of this website and does not represent either the linked website or you, should you enter into a transaction. We encourage you to review their privacy and security policies which may differ from " + d.hostname + "."), t.expr[":"].external || (t.expr[":"].external = function(t) {
            return !(t.href.match(/^mailto\:/) || t.hostname === d.hostname || t.href.match(/^javascript/) || t.href.match(/^tel\:/) || t.href.match(/^https\:\/\/pass\.t8webware\.com/))
        }), l.com || (l.com = {}), (e = l.com).banno || (e.banno = {}), c = t.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/_/api/disclaimer",
            timeout: 2e3
        }), l.com.banno.watchDisclaimers = function(e) {
            var l, d, m, f, h, p, v, b, w, g, x, y;
            if (e ? (t(".banno-location-map-container a:not([data-disclaimer-id])").attr("data-disclaimer-id", "disclaimer"), m = t(".banno-location-map-container a[data-disclaimer-id]:not([data-disclaimer-handled])")) : m = t("a[data-disclaimer-id]"), 0 !== m.length) return m.map(function(n, e) {
                var a, i, r;
                if (null != (null != (r = t._data(e, "events")) ? r.click : void 0)) return i = t.map(t._data(e, "events").click, function(t, n) {
                    if (-1 === t.handler.toString().indexOf("bootbox.confirm") && -1 === t.handler.toString().indexOf("#speedbump") && -1 === t.handler.toString().indexOf("popDisclaimer")) return t.handler
                }), a = t(e), a.off("click"), t.map(i, function(t, n) {
                    return a.on("click", t)
                })
            }), b = function(n) {
                return t(n).attr("href")
            }, w = function(t, n) {
                return t(r(n))
            }, l = function(t, n, e) {
                var r;
                try {
                    return r = null != e ? "<h4>" + e + "</h4>" + n : n, a.hideAll(), a.confirm(r, i, s, t)
                } catch (e) {
                    return e, w(t, n)
                }
            }, d = function(t, e, a) {
                return (null != n && "function" == typeof n.mq ? n.mq("only all and (max-width: 767px)") : void 0) ? w(t, e) : l(t, e, a)
            }, y = function(n, e, a, i) {
                return i = null != i ? i : "_self", d(function(e) {
                    if (e) return u(n, i), t(".modal-backdrop").hide()
                }, e, a)
            }, h = function(n) {
                return function(e) {
                    var a, i, r, c, l, d;
                    for (a = null, c = o, d = null, i = 0, r = n.length; i < r; i++) l = n[i], l.id === t(e).attr("data-disclaimer-id") && (a = l.header, c = l.message, d = t(e).attr("target"));
                    return null != a && (a = f(a)), c = f(c), y(b(e), c, a, d)
                }
            }, p = function(n, e, a) {
                var i;
                return i = h(n), m.map(function(n, e) {
                    return t(e).removeAttr("data-disclaimer-handled")
                }), m.map(function(n, e) {
                    var a;
                    return a = t(e), "null" !== a.attr("data-disclaimer-id") && void 0 === a.attr("data-disclaimer-handled") && (a.attr("data-disclaimer-handled", ""), t(e).on("click", function(t) {
                        return t.preventDefault(), "popDisclaimer", i(this)
                    })), e
                })
            }, v = function(n, e, a) {
                var i, r;
                return i = f(defaultDisclaimerMessage), r = h([{
                    id: "default",
                    title: "Default",
                    header: null,
                    message: i
                }]), m.map(function(n, e) {
                    var a;
                    return a = t(e), "null" !== a.attr("data-disclaimer-id") && t(e).attr("data-disclaimer-id", "default").on("click", function(t) {
                        return t.preventDefault(), "popDisclaimer", r(this)
                    }), e
                })
            }, g = function(t, n) {
                var e, a, i;
                i = t;
                for (a in n) e = n[a], i = i.replace(e, a);
                return i
            }, x = {
                "&": /\&amp;/g
            }, f = function(n) {
                return g(t("<div>").text(n).html(), x)
            }, c.done(p).fail(v)
        }, l.com.banno.watchDisclaimers(!1)
    })
}).call(this);