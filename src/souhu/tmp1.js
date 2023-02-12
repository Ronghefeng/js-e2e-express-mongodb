// 完整的 md5 加密

var l = {
    extend: function () {
        var e, t, n, i, r = arguments[0] || {}, a = arguments.length;
        for (e = 1; e < a; e++)
            if (null !== (n = arguments[e]))
                for (t in n)
                    void 0 !== (i = n[t]) && (r[t] = i);
        return r
    },
    inArray: function (e, t) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e)
                return n;
        return -1
    },
    isString: function (e) {
        return "string" == typeof e
    },
    isFunction: function (e) {
        return "function" == typeof e
    },
    isBool: function (e) {
        return "boolean" == typeof e
    },
    bind: function (e, t) {
        return function () {
            e.apply(t, arguments)
        }
    },
    trim: function (e) {
        return this.isString(e) ? e.replace(/^\s+/, "").replace(/\s+$/, "") : e
    },
    param: function (e) {
        var t = [];
        for (var n in e)
            t.push(n + "=" + e[n]);
        return t.join("&")
    },
    url: function (e, t) {
        return e + (/\?/.test(e) ? "&" : "?") + this.param(t)
    },
    md5: function (e) {
        function t(e, t, n, i, r, a) {
            return s((o = s(s(t, e), s(i, a))) << (c = r) | o >>> 32 - c, n);
            var o, c
        }
        function n(e, n, i, r, a, s, o) {
            return t(n & i | ~n & r, e, n, a, s, o)
        }
        function i(e, n, i, r, a, s, o) {
            return t(n & r | i & ~r, e, n, a, s, o)
        }
        function r(e, n, i, r, a, s, o) {
            return t(n ^ i ^ r, e, n, a, s, o)
        }
        function a(e, n, i, r, a, s, o) {
            return t(i ^ (n | ~r), e, n, a, s, o)
        }
        function s(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        var o, c = 0, l = 8;
        return function (e) {
            for (var t = c ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * e.length; i++)
                n += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
            return n
        }(function (e, t) {
            e[t >> 5] |= 128 << t % 32,
                e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var o = 1732584193, c = -271733879, l = -1732584194, u = 271733878, d = 0; d < e.length; d += 16) {
                var h = o
                    , p = c
                    , f = l
                    , g = u;
                o = n(o, c, l, u, e[d + 0], 7, -680876936),
                    u = n(u, o, c, l, e[d + 1], 12, -389564586),
                    l = n(l, u, o, c, e[d + 2], 17, 606105819),
                    c = n(c, l, u, o, e[d + 3], 22, -1044525330),
                    o = n(o, c, l, u, e[d + 4], 7, -176418897),
                    u = n(u, o, c, l, e[d + 5], 12, 1200080426),
                    l = n(l, u, o, c, e[d + 6], 17, -1473231341),
                    c = n(c, l, u, o, e[d + 7], 22, -45705983),
                    o = n(o, c, l, u, e[d + 8], 7, 1770035416),
                    u = n(u, o, c, l, e[d + 9], 12, -1958414417),
                    l = n(l, u, o, c, e[d + 10], 17, -42063),
                    c = n(c, l, u, o, e[d + 11], 22, -1990404162),
                    o = n(o, c, l, u, e[d + 12], 7, 1804603682),
                    u = n(u, o, c, l, e[d + 13], 12, -40341101),
                    l = n(l, u, o, c, e[d + 14], 17, -1502002290),
                    o = i(o, c = n(c, l, u, o, e[d + 15], 22, 1236535329), l, u, e[d + 1], 5, -165796510),
                    u = i(u, o, c, l, e[d + 6], 9, -1069501632),
                    l = i(l, u, o, c, e[d + 11], 14, 643717713),
                    c = i(c, l, u, o, e[d + 0], 20, -373897302),
                    o = i(o, c, l, u, e[d + 5], 5, -701558691),
                    u = i(u, o, c, l, e[d + 10], 9, 38016083),
                    l = i(l, u, o, c, e[d + 15], 14, -660478335),
                    c = i(c, l, u, o, e[d + 4], 20, -405537848),
                    o = i(o, c, l, u, e[d + 9], 5, 568446438),
                    u = i(u, o, c, l, e[d + 14], 9, -1019803690),
                    l = i(l, u, o, c, e[d + 3], 14, -187363961),
                    c = i(c, l, u, o, e[d + 8], 20, 1163531501),
                    o = i(o, c, l, u, e[d + 13], 5, -1444681467),
                    u = i(u, o, c, l, e[d + 2], 9, -51403784),
                    l = i(l, u, o, c, e[d + 7], 14, 1735328473),
                    o = r(o, c = i(c, l, u, o, e[d + 12], 20, -1926607734), l, u, e[d + 5], 4, -378558),
                    u = r(u, o, c, l, e[d + 8], 11, -2022574463),
                    l = r(l, u, o, c, e[d + 11], 16, 1839030562),
                    c = r(c, l, u, o, e[d + 14], 23, -35309556),
                    o = r(o, c, l, u, e[d + 1], 4, -1530992060),
                    u = r(u, o, c, l, e[d + 4], 11, 1272893353),
                    l = r(l, u, o, c, e[d + 7], 16, -155497632),
                    c = r(c, l, u, o, e[d + 10], 23, -1094730640),
                    o = r(o, c, l, u, e[d + 13], 4, 681279174),
                    u = r(u, o, c, l, e[d + 0], 11, -358537222),
                    l = r(l, u, o, c, e[d + 3], 16, -722521979),
                    c = r(c, l, u, o, e[d + 6], 23, 76029189),
                    o = r(o, c, l, u, e[d + 9], 4, -640364487),
                    u = r(u, o, c, l, e[d + 12], 11, -421815835),
                    l = r(l, u, o, c, e[d + 15], 16, 530742520),
                    o = a(o, c = r(c, l, u, o, e[d + 2], 23, -995338651), l, u, e[d + 0], 6, -198630844),
                    u = a(u, o, c, l, e[d + 7], 10, 1126891415),
                    l = a(l, u, o, c, e[d + 14], 15, -1416354905),
                    c = a(c, l, u, o, e[d + 5], 21, -57434055),
                    o = a(o, c, l, u, e[d + 12], 6, 1700485571),
                    u = a(u, o, c, l, e[d + 3], 10, -1894986606),
                    l = a(l, u, o, c, e[d + 10], 15, -1051523),
                    c = a(c, l, u, o, e[d + 1], 21, -2054922799),
                    o = a(o, c, l, u, e[d + 8], 6, 1873313359),
                    u = a(u, o, c, l, e[d + 15], 10, -30611744),
                    l = a(l, u, o, c, e[d + 6], 15, -1560198380),
                    c = a(c, l, u, o, e[d + 13], 21, 1309151649),
                    o = a(o, c, l, u, e[d + 4], 6, -145523070),
                    u = a(u, o, c, l, e[d + 11], 10, -1120210379),
                    l = a(l, u, o, c, e[d + 2], 15, 718787259),
                    c = a(c, l, u, o, e[d + 9], 21, -343485551),
                    o = s(o, h),
                    c = s(c, p),
                    l = s(l, f),
                    u = s(u, g)
            }
            return Array(o, c, l, u)
        }(function (e) {
            for (var t = Array(), n = (1 << l) - 1, i = 0; i < e.length * l; i += l)
                t[i >> 5] |= (e.charCodeAt(i / l) & n) << i % 32;
            return t
        }(o = e), o.length * l))
    }
}