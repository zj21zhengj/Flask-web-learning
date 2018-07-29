if (!document.createElement("canvas").getContext) {
    (function() {
        var ab = Math;
        var n = ab.round;
        var l = ab.sin;
        var A = ab.cos;
        var H = ab.abs;
        var N = ab.sqrt;
        var d = 10;
        var f = d / 2;
        var z = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];

        function y() {
            return this.context_ || (this.context_ = new D(this))
        }
        var t = Array.prototype.slice;

        function g(j, m, p) {
            var i = t.call(arguments, 2);
            return function() {
                return j.apply(m, i.concat(t.call(arguments)))
            }
        }

        function af(i) {
            return String(i).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }

        function Y(m, j, i) {
            if (!m.namespaces[j]) {
                m.namespaces.add(j, i, "#default#VML")
            }
        }

        function R(j) {
            Y(j, "g_vml_", "urn:schemas-microsoft-com:vml");
            Y(j, "g_o_", "urn:schemas-microsoft-com:office:office");
            if (!j.styleSheets.ex_canvas_) {
                // var i = j.createStyleSheet();
                // i.owningElement.id = "ex_canvas_";
                // i.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
                // 2015-06-26 为兼容ie 8/9改动
                var style = j.createElement('style');
                style.type = 'text/css';
                var i = style.styleSheet;
                i.owningElement.id = "ex_canvas_";
                i.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
            }
        }
        R(document);
        var e = {
            init: function(i) {
                var j = i || document;
                j.createElement("canvas");
                j.attachEvent("onreadystatechange", g(this.init_, this, j))
            },
            init_: function(p) {
                var m = p.getElementsByTagName("canvas");
                for (var j = 0; j < m.length; j++) {
                    this.initElement(m[j])
                }
            },
            initElement: function(j) {
                if (!j.getContext) {
                    j.getContext = y;
                    R(j.ownerDocument);
                    j.innerHTML = "";
                    j.attachEvent("onpropertychange", x);
                    j.attachEvent("onresize", W);
                    var i = j.attributes;
                    if (i.width && i.width.specified) {
                        j.style.width = i.width.nodeValue + "px"
                    } else {
                        j.width = j.clientWidth
                    }
                    if (i.height && i.height.specified) {
                        j.style.height = i.height.nodeValue + "px"
                    } else {
                        j.height = j.clientHeight
                    }
                }
                return j
            }
        };

        function x(j) {
            var i = j.srcElement;
            switch (j.propertyName) {
                case "width":
                    i.getContext().clearRect();
                    i.style.width = i.attributes.width.nodeValue + "px";
                    i.firstChild.style.width = i.clientWidth + "px";
                    break;
                case "height":
                    i.getContext().clearRect();
                    i.style.height = i.attributes.height.nodeValue + "px";
                    i.firstChild.style.height = i.clientHeight + "px";
                    break
            }
        }

        function W(j) {
            var i = j.srcElement;
            if (i.firstChild) {
                i.firstChild.style.width = i.clientWidth + "px";
                i.firstChild.style.height = i.clientHeight + "px"
            }
        }
        e.init();
        var k = [];
        for (var ae = 0; ae < 16; ae++) {
            for (var ad = 0; ad < 16; ad++) {
                k[ae * 16 + ad] = ae.toString(16) + ad.toString(16)
            }
        }

        function B() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ]
        }

        function J(p, m) {
            var j = B();
            for (var i = 0; i < 3; i++) {
                for (var ah = 0; ah < 3; ah++) {
                    var Z = 0;
                    for (var ag = 0; ag < 3; ag++) {
                        Z += p[i][ag] * m[ag][ah]
                    }
                    j[i][ah] = Z
                }
            }
            return j
        }

        function v(j, i) {
            i.fillStyle = j.fillStyle;
            i.lineCap = j.lineCap;
            i.lineJoin = j.lineJoin;
            i.lineWidth = j.lineWidth;
            i.miterLimit = j.miterLimit;
            i.shadowBlur = j.shadowBlur;
            i.shadowColor = j.shadowColor;
            i.shadowOffsetX = j.shadowOffsetX;
            i.shadowOffsetY = j.shadowOffsetY;
            i.strokeStyle = j.strokeStyle;
            i.globalAlpha = j.globalAlpha;
            i.font = j.font;
            i.textAlign = j.textAlign;
            i.textBaseline = j.textBaseline;
            i.arcScaleX_ = j.arcScaleX_;
            i.arcScaleY_ = j.arcScaleY_;
            i.lineScale_ = j.lineScale_
        }
        var b = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        };

        function M(j) {
            var p = j.indexOf("(", 3);
            var i = j.indexOf(")", p + 1);
            var m = j.substring(p + 1, i).split(",");
            if (m.length != 4 || j.charAt(3) != "a") {
                m[3] = 1
            }
            return m
        }

        function c(i) {
            return parseFloat(i) / 100
        }

        function r(j, m, i) {
            return Math.min(i, Math.max(m, j))
        }

        function I(ag) {
            var i, ai, aj, ah, ak, Z;
            ah = parseFloat(ag[0]) / 360 % 360;
            if (ah < 0) {
                ah++
            }
            ak = r(c(ag[1]), 0, 1);
            Z = r(c(ag[2]), 0, 1);
            if (ak == 0) {
                i = ai = aj = Z
            } else {
                var j = Z < 0.5 ? Z * (1 + ak) : Z + ak - Z * ak;
                var m = 2 * Z - j;
                i = a(m, j, ah + 1 / 3);
                ai = a(m, j, ah);
                aj = a(m, j, ah - 1 / 3)
            }
            return "#" + k[Math.floor(i * 255)] + k[Math.floor(ai * 255)] + k[Math.floor(aj * 255)]
        }

        function a(j, i, m) {
            if (m < 0) {
                m++
            }
            if (m > 1) {
                m--
            }
            if (6 * m < 1) {
                return j + (i - j) * 6 * m
            } else {
                if (2 * m < 1) {
                    return i
                } else {
                    if (3 * m < 2) {
                        return j + (i - j) * (2 / 3 - m) * 6
                    } else {
                        return j
                    }
                }
            }
        }
        var C = {};

        function F(j) {
            if (j in C) {
                return C[j]
            }
            var ag, Z = 1;
            j = String(j);
            if (j.charAt(0) == "#") {
                ag = j
            } else {
                if (/^rgb/.test(j)) {
                    var p = M(j);
                    var ag = "#",
                        ah;
                    for (var m = 0; m < 3; m++) {
                        if (p[m].indexOf("%") != -1) {
                            ah = Math.floor(c(p[m]) * 255)
                        } else {
                            ah = +p[m]
                        }
                        ag += k[r(ah, 0, 255)]
                    }
                    Z = +p[3]
                } else {
                    if (/^hsl/.test(j)) {
                        var p = M(j);
                        ag = I(p);
                        Z = p[3]
                    } else {
                        ag = b[j] || j
                    }
                }
            }
            return C[j] = {
                color: ag,
                alpha: Z
            }
        }
        var o = {
            style: "normal",
            variant: "normal",
            weight: "normal",
            size: 10,
            family: "sans-serif"
        };
        var L = {};

        function E(i) {
            if (L[i]) {
                return L[i]
            }
            var p = document.createElement("div");
            var m = p.style;
            try {
                m.font = i
            } catch (j) {}
            return L[i] = {
                style: m.fontStyle || o.style,
                variant: m.fontVariant || o.variant,
                weight: m.fontWeight || o.weight,
                size: m.fontSize || o.size,
                family: m.fontFamily || o.family
            }
        }

        function u(m, j) {
            var i = {};
            for (var ah in m) {
                i[ah] = m[ah]
            }
            var ag = parseFloat(j.currentStyle.fontSize),
                Z = parseFloat(m.size);
            if (typeof m.size == "number") {
                i.size = m.size
            } else {
                if (m.size.indexOf("px") != -1) {
                    i.size = Z
                } else {
                    if (m.size.indexOf("em") != -1) {
                        i.size = ag * Z
                    } else {
                        if (m.size.indexOf("%") != -1) {
                            i.size = (ag / 100) * Z
                        } else {
                            if (m.size.indexOf("pt") != -1) {
                                i.size = Z / 0.75
                            } else {
                                i.size = ag
                            }
                        }
                    }
                }
            }
            i.size *= 0.981;
            return i
        }

        function ac(i) {
            return i.style + " " + i.variant + " " + i.weight + " " + i.size + "px " + i.family
        }
        var s = {
            butt: "flat",
            round: "round"
        };

        function S(i) {
            return s[i] || "square"
        }

        function D(i) {
            this.m_ = B();
            this.mStack_ = [];
            this.aStack_ = [];
            this.currentPath_ = [];
            this.strokeStyle = "#000";
            this.fillStyle = "#000";
            this.lineWidth = 1;
            this.lineJoin = "miter";
            this.lineCap = "butt";
            this.miterLimit = d * 1;
            this.globalAlpha = 1;
            this.font = "10px sans-serif";
            this.textAlign = "left";
            this.textBaseline = "alphabetic";
            this.canvas = i;
            var m = "width:" + i.clientWidth + "px;height:" + i.clientHeight + "px;overflow:hidden;position:absolute";
            var j = i.ownerDocument.createElement("div");
            j.style.cssText = m;
            i.appendChild(j);
            var p = j.cloneNode(false);
            p.style.backgroundColor = "red";
            p.style.filter = "alpha(opacity=0)";
            i.appendChild(p);
            this.element_ = j;
            this.arcScaleX_ = 1;
            this.arcScaleY_ = 1;
            this.lineScale_ = 1
        }
        var q = D.prototype;
        q.clearRect = function() {
            if (this.textMeasureEl_) {
                this.textMeasureEl_.removeNode(true);
                this.textMeasureEl_ = null
            }
            this.element_.innerHTML = ""
        };
        q.beginPath = function() {
            this.currentPath_ = []
        };
        q.moveTo = function(j, i) {
            var m = V(this, j, i);
            this.currentPath_.push({
                type: "moveTo",
                x: m.x,
                y: m.y
            });
            this.currentX_ = m.x;
            this.currentY_ = m.y
        };
        q.lineTo = function(j, i) {
            var m = V(this, j, i);
            this.currentPath_.push({
                type: "lineTo",
                x: m.x,
                y: m.y
            });
            this.currentX_ = m.x;
            this.currentY_ = m.y
        };
        q.bezierCurveTo = function(m, j, ak, aj, ai, ag) {
            var i = V(this, ai, ag);
            var ah = V(this, m, j);
            var Z = V(this, ak, aj);
            K(this, ah, Z, i)
        };

        function K(i, Z, m, j) {
            i.currentPath_.push({
                type: "bezierCurveTo",
                cp1x: Z.x,
                cp1y: Z.y,
                cp2x: m.x,
                cp2y: m.y,
                x: j.x,
                y: j.y
            });
            i.currentX_ = j.x;
            i.currentY_ = j.y
        }
        q.quadraticCurveTo = function(ai, m, j, i) {
            var ah = V(this, ai, m);
            var ag = V(this, j, i);
            var aj = {
                x: this.currentX_ + 2 / 3 * (ah.x - this.currentX_),
                y: this.currentY_ + 2 / 3 * (ah.y - this.currentY_)
            };
            var Z = {
                x: aj.x + (ag.x - this.currentX_) / 3,
                y: aj.y + (ag.y - this.currentY_) / 3
            };
            K(this, aj, Z, ag)
        };
        q.arc = function(al, aj, ak, ag, j, m) {
            ak *= d;
            var ap = m ? "at" : "wa";
            var am = al + A(ag) * ak - f;
            var ao = aj + l(ag) * ak - f;
            var i = al + A(j) * ak - f;
            var an = aj + l(j) * ak - f;
            if (am == i && !m) {
                am += 0.125
            }
            var Z = V(this, al, aj);
            var ai = V(this, am, ao);
            var ah = V(this, i, an);
            this.currentPath_.push({
                type: ap,
                x: Z.x,
                y: Z.y,
                radius: ak,
                xStart: ai.x,
                yStart: ai.y,
                xEnd: ah.x,
                yEnd: ah.y
            })
        };
        q.rect = function(m, j, i, p) {
            this.moveTo(m, j);
            this.lineTo(m + i, j);
            this.lineTo(m + i, j + p);
            this.lineTo(m, j + p);
            this.closePath()
        };
        q.strokeRect = function(m, j, i, p) {
            var Z = this.currentPath_;
            this.beginPath();
            this.moveTo(m, j);
            this.lineTo(m + i, j);
            this.lineTo(m + i, j + p);
            this.lineTo(m, j + p);
            this.closePath();
            this.stroke();
            this.currentPath_ = Z
        };
        q.fillRect = function(m, j, i, p) {
            var Z = this.currentPath_;
            this.beginPath();
            this.moveTo(m, j);
            this.lineTo(m + i, j);
            this.lineTo(m + i, j + p);
            this.lineTo(m, j + p);
            this.closePath();
            this.fill();
            this.currentPath_ = Z
        };
        q.createLinearGradient = function(j, p, i, m) {
            var Z = new U("gradient");
            Z.x0_ = j;
            Z.y0_ = p;
            Z.x1_ = i;
            Z.y1_ = m;
            return Z
        };
        q.createRadialGradient = function(p, ag, m, j, Z, i) {
            var ah = new U("gradientradial");
            ah.x0_ = p;
            ah.y0_ = ag;
            ah.r0_ = m;
            ah.x1_ = j;
            ah.y1_ = Z;
            ah.r1_ = i;
            return ah
        };
        q.drawImage = function(aq, m) {
            var aj, ah, al, ay, ao, am, at, aA;
            var ak = aq.runtimeStyle.width;
            var ap = aq.runtimeStyle.height;
            aq.runtimeStyle.width = "auto";
            aq.runtimeStyle.height = "auto";
            var ai = aq.width;
            var aw = aq.height;
            aq.runtimeStyle.width = ak;
            aq.runtimeStyle.height = ap;
            if (arguments.length == 3) {
                aj = arguments[1];
                ah = arguments[2];
                ao = am = 0;
                at = al = ai;
                aA = ay = aw
            } else {
                if (arguments.length == 5) {
                    aj = arguments[1];
                    ah = arguments[2];
                    al = arguments[3];
                    ay = arguments[4];
                    ao = am = 0;
                    at = ai;
                    aA = aw
                } else {
                    if (arguments.length == 9) {
                        ao = arguments[1];
                        am = arguments[2];
                        at = arguments[3];
                        aA = arguments[4];
                        aj = arguments[5];
                        ah = arguments[6];
                        al = arguments[7];
                        ay = arguments[8]
                    } else {
                        throw Error("Invalid number of arguments")
                    }
                }
            }
            var az = V(this, aj, ah);
            var p = at / 2;
            var j = aA / 2;
            var ax = [];
            var i = 10;
            var ag = 10;
            ax.push(" <g_vml_:group", ' coordsize="', d * i, ",", d * ag, '"', ' coordorigin="0,0"', ' style="width:', i, "px;height:", ag, "px;position:absolute;");
            if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
                var Z = [];
                Z.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", n(az.x / d), ",", "Dy=", n(az.y / d), "");
                var av = az;
                var au = V(this, aj + al, ah);
                var ar = V(this, aj, ah + ay);
                var an = V(this, aj + al, ah + ay);
                av.x = ab.max(av.x, au.x, ar.x, an.x);
                av.y = ab.max(av.y, au.y, ar.y, an.y);
                ax.push("padding:0 ", n(av.x / d), "px ", n(av.y / d), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", Z.join(""), ", sizingmethod='clip');")
            } else {
                ax.push("top:", n(az.y / d), "px;left:", n(az.x / d), "px;")
            }
            ax.push(' ">', '<g_vml_:image src="', aq.src, '"', ' style="width:', d * al, "px;", " height:", d * ay, 'px"', ' cropleft="', ao / ai, '"', ' croptop="', am / aw, '"', ' cropright="', (ai - ao - at) / ai, '"', ' cropbottom="', (aw - am - aA) / aw, '"', " />", "</g_vml_:group>");
            this.element_.insertAdjacentHTML("BeforeEnd", ax.join(""))
        };
        q.stroke = function(ao) {
            var Z = 10;
            var ap = 10;
            var ag = 5000;
            var ai = {
                x: null,
                y: null
            };
            var an = {
                x: null,
                y: null
            };
            for (var aj = 0; aj < this.currentPath_.length; aj += ag) {
                var am = [];
                var ah = false;
                am.push("<g_vml_:shape", ' filled="', !!ao, '"', ' style="position:absolute;width:', Z, "px;height:", ap, 'px;"', ' coordorigin="0,0"', ' coordsize="', d * Z, ",", d * ap, '"', ' stroked="', !ao, '"', ' path="');
                var aq = false;
                for (var ak = aj; ak < Math.min(aj + ag, this.currentPath_.length); ak++) {
                    if (ak % ag == 0 && ak > 0) {
                        am.push(" m ", n(this.currentPath_[ak - 1].x), ",", n(this.currentPath_[ak - 1].y))
                    }
                    var m = this.currentPath_[ak];
                    var al;
                    switch (m.type) {
                        case "moveTo":
                            al = m;
                            am.push(" m ", n(m.x), ",", n(m.y));
                            break;
                        case "lineTo":
                            am.push(" l ", n(m.x), ",", n(m.y));
                            break;
                        case "close":
                            am.push(" x ");
                            m = null;
                            break;
                        case "bezierCurveTo":
                            am.push(" c ", n(m.cp1x), ",", n(m.cp1y), ",", n(m.cp2x), ",", n(m.cp2y), ",", n(m.x), ",", n(m.y));
                            break;
                        case "at":
                        case "wa":
                            am.push(" ", m.type, " ", n(m.x - this.arcScaleX_ * m.radius), ",", n(m.y - this.arcScaleY_ * m.radius), " ", n(m.x + this.arcScaleX_ * m.radius), ",", n(m.y + this.arcScaleY_ * m.radius), " ", n(m.xStart), ",", n(m.yStart), " ", n(m.xEnd), ",", n(m.yEnd));
                            break
                    }
                    if (m) {
                        if (ai.x == null || m.x < ai.x) {
                            ai.x = m.x
                        }
                        if (an.x == null || m.x > an.x) {
                            an.x = m.x
                        }
                        if (ai.y == null || m.y < ai.y) {
                            ai.y = m.y
                        }
                        if (an.y == null || m.y > an.y) {
                            an.y = m.y
                        }
                    }
                }
                am.push(' ">');
                if (!ao) {
                    w(this, am)
                } else {
                    G(this, am, ai, an)
                }
                am.push("</g_vml_:shape>");
                this.element_.insertAdjacentHTML("beforeEnd", am.join(""))
            }
        };

        function w(m, ag) {
            var j = F(m.strokeStyle);
            var p = j.color;
            var Z = j.alpha * m.globalAlpha;
            var i = m.lineScale_ * m.lineWidth;
            if (i < 1) {
                Z *= i
            }
            ag.push("<g_vml_:stroke", ' opacity="', Z, '"', ' joinstyle="', m.lineJoin, '"', ' miterlimit="', m.miterLimit, '"', ' endcap="', S(m.lineCap), '"', ' weight="', i, 'px"', ' color="', p, '" />')
        }

        function G(aq, ai, aK, ar) {
            var aj = aq.fillStyle;
            var aB = aq.arcScaleX_;
            var aA = aq.arcScaleY_;
            var j = ar.x - aK.x;
            var p = ar.y - aK.y;
            if (aj instanceof U) {
                var an = 0;
                var aF = {
                    x: 0,
                    y: 0
                };
                var ax = 0;
                var am = 1;
                if (aj.type_ == "gradient") {
                    var al = aj.x0_ / aB;
                    var m = aj.y0_ / aA;
                    var ak = aj.x1_ / aB;
                    var aM = aj.y1_ / aA;
                    var aJ = V(aq, al, m);
                    var aI = V(aq, ak, aM);
                    var ag = aI.x - aJ.x;
                    var Z = aI.y - aJ.y;
                    an = Math.atan2(ag, Z) * 180 / Math.PI;
                    if (an < 0) {
                        an += 360
                    }
                    if (an < 0.000001) {
                        an = 0
                    }
                } else {
                    var aJ = V(aq, aj.x0_, aj.y0_);
                    aF = {
                        x: (aJ.x - aK.x) / j,
                        y: (aJ.y - aK.y) / p
                    };
                    j /= aB * d;
                    p /= aA * d;
                    var aD = ab.max(j, p);
                    ax = 2 * aj.r0_ / aD;
                    am = 2 * aj.r1_ / aD - ax
                }
                var av = aj.colors_;
                av.sort(function(aN, i) {
                    return aN.offset - i.offset
                });
                var ap = av.length;
                var au = av[0].color;
                var at = av[ap - 1].color;
                var az = av[0].alpha * aq.globalAlpha;
                var ay = av[ap - 1].alpha * aq.globalAlpha;
                var aE = [];
                for (var aH = 0; aH < ap; aH++) {
                    var ao = av[aH];
                    aE.push(ao.offset * am + ax + " " + ao.color)
                }
                ai.push('<g_vml_:fill type="', aj.type_, '"', ' method="none" focus="100%"', ' color="', au, '"', ' color2="', at, '"', ' colors="', aE.join(","), '"', ' opacity="', ay, '"', ' g_o_:opacity2="', az, '"', ' angle="', an, '"', ' focusposition="', aF.x, ",", aF.y, '" />')
            } else {
                if (aj instanceof T) {
                    if (j && p) {
                        var ah = -aK.x;
                        var aC = -aK.y;
                        ai.push("<g_vml_:fill", ' position="', ah / j * aB * aB, ",", aC / p * aA * aA, '"', ' type="tile"', ' src="', aj.src_, '" />')
                    }
                } else {
                    var aL = F(aq.fillStyle);
                    var aw = aL.color;
                    var aG = aL.alpha * aq.globalAlpha;
                    ai.push('<g_vml_:fill color="', aw, '" opacity="', aG, '" />')
                }
            }
        }
        q.fill = function() {
            this.stroke(true)
        };
        q.closePath = function() {
            this.currentPath_.push({
                type: "close"
            })
        };

        function V(j, Z, p) {
            var i = j.m_;
            return {
                x: d * (Z * i[0][0] + p * i[1][0] + i[2][0]) - f,
                y: d * (Z * i[0][1] + p * i[1][1] + i[2][1]) - f
            }
        }
        q.save = function() {
            var i = {};
            v(this, i);
            this.aStack_.push(i);
            this.mStack_.push(this.m_);
            this.m_ = J(B(), this.m_)
        };
        q.restore = function() {
            if (this.aStack_.length) {
                v(this.aStack_.pop(), this);
                this.m_ = this.mStack_.pop()
            }
        };

        function h(i) {
            return isFinite(i[0][0]) && isFinite(i[0][1]) && isFinite(i[1][0]) && isFinite(i[1][1]) && isFinite(i[2][0]) && isFinite(i[2][1])
        }

        function aa(j, i, p) {
            if (!h(i)) {
                return
            }
            j.m_ = i;
            if (p) {
                var Z = i[0][0] * i[1][1] - i[0][1] * i[1][0];
                j.lineScale_ = N(H(Z))
            }
        }
        q.translate = function(m, j) {
            var i = [
                [1, 0, 0],
                [0, 1, 0],
                [m, j, 1]
            ];
            aa(this, J(i, this.m_), false)
        };
        q.rotate = function(j) {
            var p = A(j);
            var m = l(j);
            var i = [
                [p, m, 0],
                [-m, p, 0],
                [0, 0, 1]
            ];
            aa(this, J(i, this.m_), false)
        };
        q.scale = function(m, j) {
            this.arcScaleX_ *= m;
            this.arcScaleY_ *= j;
            var i = [
                [m, 0, 0],
                [0, j, 0],
                [0, 0, 1]
            ];
            aa(this, J(i, this.m_), true)
        };
        q.transform = function(Z, p, ah, ag, j, i) {
            var m = [
                [Z, p, 0],
                [ah, ag, 0],
                [j, i, 1]
            ];
            aa(this, J(m, this.m_), true)
        };
        q.setTransform = function(ag, Z, ai, ah, p, j) {
            var i = [
                [ag, Z, 0],
                [ai, ah, 0],
                [p, j, 1]
            ];
            aa(this, i, true)
        };
        q.drawText_ = function(am, ak, aj, ap, ai) {
            var ao = this.m_,
                at = 1000,
                j = 0,
                ar = at,
                ah = {
                    x: 0,
                    y: 0
                },
                ag = [];
            var i = u(E(this.font), this.element_);
            var p = ac(i);
            var au = this.element_.currentStyle;
            var Z = this.textAlign.toLowerCase();
            switch (Z) {
                case "left":
                case "center":
                case "right":
                    break;
                case "end":
                    Z = au.direction == "ltr" ? "right" : "left";
                    break;
                case "start":
                    Z = au.direction == "rtl" ? "right" : "left";
                    break;
                default:
                    Z = "left"
            }
            switch (this.textBaseline) {
                case "hanging":
                case "top":
                    ah.y = i.size / 1.75;
                    break;
                case "middle":
                    break;
                default:
                case null:
                case "alphabetic":
                case "ideographic":
                case "bottom":
                    ah.y = -i.size / 2.25;
                    break
            }
            switch (Z) {
                case "right":
                    j = at;
                    ar = 0.05;
                    break;
                case "center":
                    j = ar = at / 2;
                    break
            }
            var aq = V(this, ak + ah.x, aj + ah.y);
            ag.push('<g_vml_:line from="', -j, ' 0" to="', ar, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !ai, '" stroked="', !!ai, '" style="position:absolute;width:1px;height:1px;">');
            if (ai) {
                w(this, ag)
            } else {
                G(this, ag, {
                    x: -j,
                    y: 0
                }, {
                    x: ar,
                    y: i.size
                })
            }
            var an = ao[0][0].toFixed(3) + "," + ao[1][0].toFixed(3) + "," + ao[0][1].toFixed(3) + "," + ao[1][1].toFixed(3) + ",0,0";
            var al = n(aq.x / d) + "," + n(aq.y / d);
            ag.push('<g_vml_:skew on="t" matrix="', an, '" ', ' offset="', al, '" origin="', j, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', af(am), '" style="v-text-align:', Z, ";font:", af(p), '" /></g_vml_:line>');
            this.element_.insertAdjacentHTML("beforeEnd", ag.join(""))
        };
        q.fillText = function(m, i, p, j) {
            this.drawText_(m, i, p, j, false)
        };
        q.strokeText = function(m, i, p, j) {
            this.drawText_(m, i, p, j, true)
        };
        q.measureText = function(m) {
            if (!this.textMeasureEl_) {
                var i = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
                this.element_.insertAdjacentHTML("beforeEnd", i);
                this.textMeasureEl_ = this.element_.lastChild
            }
            var j = this.element_.ownerDocument;
            this.textMeasureEl_.innerHTML = "";
            this.textMeasureEl_.style.font = this.font;
            this.textMeasureEl_.appendChild(j.createTextNode(m));
            return {
                width: this.textMeasureEl_.offsetWidth
            }
        };
        q.clip = function() {};
        q.arcTo = function() {};
        q.createPattern = function(j, i) {
            return new T(j, i)
        };

        function U(i) {
            this.type_ = i;
            this.x0_ = 0;
            this.y0_ = 0;
            this.r0_ = 0;
            this.x1_ = 0;
            this.y1_ = 0;
            this.r1_ = 0;
            this.colors_ = []
        }
        U.prototype.addColorStop = function(j, i) {
            i = F(i);
            this.colors_.push({
                offset: j,
                color: i.color,
                alpha: i.alpha
            })
        };

        function T(j, i) {
            Q(j);
            switch (i) {
                case "repeat":
                case null:
                case "":
                    this.repetition_ = "repeat";
                    break;
                case "repeat-x":
                case "repeat-y":
                case "no-repeat":
                    this.repetition_ = i;
                    break;
                default:
                    O("SYNTAX_ERR")
            }
            this.src_ = j.src;
            this.width_ = j.width;
            this.height_ = j.height
        }

        function O(i) {
            throw new P(i)
        }

        function Q(i) {
            if (!i || i.nodeType != 1 || i.tagName != "IMG") {
                O("TYPE_MISMATCH_ERR")
            }
            if (i.readyState != "complete") {
                O("INVALID_STATE_ERR")
            }
        }

        function P(i) {
            this.code = this[i];
            this.message = i + ": DOM Exception " + this.code
        }
        var X = P.prototype = new Error;
        X.INDEX_SIZE_ERR = 1;
        X.DOMSTRING_SIZE_ERR = 2;
        X.HIERARCHY_REQUEST_ERR = 3;
        X.WRONG_DOCUMENT_ERR = 4;
        X.INVALID_CHARACTER_ERR = 5;
        X.NO_DATA_ALLOWED_ERR = 6;
        X.NO_MODIFICATION_ALLOWED_ERR = 7;
        X.NOT_FOUND_ERR = 8;
        X.NOT_SUPPORTED_ERR = 9;
        X.INUSE_ATTRIBUTE_ERR = 10;
        X.INVALID_STATE_ERR = 11;
        X.SYNTAX_ERR = 12;
        X.INVALID_MODIFICATION_ERR = 13;
        X.NAMESPACE_ERR = 14;
        X.INVALID_ACCESS_ERR = 15;
        X.VALIDATION_ERR = 16;
        X.TYPE_MISMATCH_ERR = 17;
        G_vmlCanvasManager = e;
        CanvasRenderingContext2D = D;
        CanvasGradient = U;
        CanvasPattern = T;
        DOMException = P
    })()
};