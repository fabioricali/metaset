parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;t(this,n),this.window=e,console.log("this")}return e(n,[{key:"query",value:function(e){return this.window.document.head.querySelector(e)}},{key:"createEl",value:function(e){return this.window.document.createElement(e)}},{key:"append",value:function(e){return this.window.document.head.appendChild(e)}},{key:"setTitle",value:function(e){this.window.document.title=e}},{key:"getTitle",value:function(){return this.window.document.title}},{key:"setMeta",value:function(e,t,n){var i=this.query("meta["+e+'="'+t+'"]');i||(i=this.createEl("meta"),this.append(i)),i.setAttribute(e,t),n&&i.setAttribute("content",n)}},{key:"getMeta",value:function(e,t){var n=void 0;if(void 0===t){if(n=this.query("meta["+e+"]"))return n.getAttribute(e)}else if(n=this.query("meta["+e+'="'+t+'"]'))return n.getAttribute("content")}},{key:"setMetaName",value:function(e,t){this.setMeta("name",e,t)}},{key:"getMetaName",value:function(e){return this.getMeta("name",e)}},{key:"setMetaProperty",value:function(e,t){this.setMeta("property",e,t)}},{key:"getMetaProperty",value:function(e){return this.getMeta("property",e)}}]),n}();module.exports=n;
},{}]},{},["Focm"], "metaset")