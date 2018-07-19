/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

jQuery.extend({
    browser: function () {
        var
            rwebkit = /(webkit)\/([\w.]+)/,
            ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            rmsie = /(msie) ([\w.]+)/,
            rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,
            browser = {},
            ua = window.navigator.userAgent,
            browserMatch = uaMatch(ua);

        if (browserMatch.browser) {
            browser[browserMatch.browser] = true;
            browser.version = browserMatch.version;
        }
        return { browser: browser };
    },
});

function uaMatch(ua) {
    ua = ua.toLowerCase();

    var match = rwebkit.exec(ua)
        || ropera.exec(ua)
        || rmsie.exec(ua)
        || ua.indexOf("compatible") < 0 && rmozilla.exec(ua)
        || [];

    return {
        browser: match[1] || "",
        version: match[2] || "0"
    };
}
/**
 * 整理：胡尐睿丶
 * 联系：hooray@hoorayos.com
 */

/**
 * ie6 png透明修正
 * DD_belatedPNG.fix('.png_bg');
 * DD_belatedPNG.fixPng( someNode );
 * http://www.dillerdesign.com/experiment/DD_belatedPNG/
 */
if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
	var DD_belatedPNG = {
		ns: "DD_belatedPNG",
		imgSize: {},
		delay: 10,
		nodesFixed: 0,
		createVmlNameSpace: function () {
			if (document.namespaces && !document.namespaces[this.ns]) {
				document.namespaces.add(this.ns, "urn:schemas-microsoft-com:vml");
			}
		},
		createVmlStyleSheet: function () {
			var b, a;
			b = document.createElement("style");
			b.setAttribute("media", "screen");
			document.documentElement.firstChild.insertBefore(b, document.documentElement.firstChild.firstChild);
			if (b.styleSheet) {
				b = b.styleSheet;
				b.addRule(this.ns + "\\:*", "{behavior:url(#default#VML)}");
				b.addRule(this.ns + "\\:shape", "position:absolute;");
				b.addRule("img." + this.ns + "_sizeFinder", "behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;");
				this.screenStyleSheet = b;
				a = document.createElement("style");
				a.setAttribute("media", "print");
				document.documentElement.firstChild.insertBefore(a, document.documentElement.firstChild.firstChild);
				a = a.styleSheet;
				a.addRule(this.ns + "\\:*", "{display: none !important;}");
				a.addRule("img." + this.ns + "_sizeFinder", "{display: none !important;}");
			}
		},
		readPropertyChange: function () {
			var b, c, a;
			b = event.srcElement;
			if (!b.vmlInitiated) {
				return;
			}
			if (event.propertyName.search("background") != -1 || event.propertyName.search("border") != -1) {
				DD_belatedPNG.applyVML(b);
			}
			if (event.propertyName == "style.display") {
				c = (b.currentStyle.display == "none") ? "none" : "block";
				for (a in b.vml) {
					if (b.vml.hasOwnProperty(a)) {
						b.vml[a].shape.style.display = c;
					}
				}
			}
			if (event.propertyName.search("filter") != -1) {
				DD_belatedPNG.vmlOpacity(b);
			}
		},
		vmlOpacity: function (b) {
			if (b.currentStyle.filter.search("lpha") != -1) {
				var a = b.currentStyle.filter;
				a = parseInt(a.substring(a.lastIndexOf("=") + 1, a.lastIndexOf(")")), 10) / 100;
				b.vml.color.shape.style.filter = b.currentStyle.filter;
				b.vml.image.fill.opacity = a;
			}
		},
		handlePseudoHover: function (a) {
			setTimeout(function () {
				DD_belatedPNG.applyVML(a);
			},
				1);
		},
		fix: function (a) {
			if (this.screenStyleSheet) {
				var c, b;
				c = a.split(",");
				for (b = 0; b < c.length; b++) {
					this.screenStyleSheet.addRule(c[b], "behavior:expression(DD_belatedPNG.fixPng(this))");
				}
			}
		},
		applyVML: function (a) {
			a.runtimeStyle.cssText = "";
			this.vmlFill(a);
			this.vmlOffsets(a);
			this.vmlOpacity(a);
			if (a.isImg) {
				this.copyImageBorders(a);
			}
		},
		attachHandlers: function (i) {
			var d, c, g, e, b, f;
			d = this;
			c = {
				resize: "vmlOffsets",
				move: "vmlOffsets"
			};
			if (i.nodeName == "A") {
				e = {
					mouseleave: "handlePseudoHover",
					mouseenter: "handlePseudoHover",
					focus: "handlePseudoHover",
					blur: "handlePseudoHover"
				};
				for (b in e) {
					if (e.hasOwnProperty(b)) {
						c[b] = e[b];
					}
				}
			}
			for (f in c) {
				if (c.hasOwnProperty(f)) {
					g = function () {
						d[c[f]](i);
					};
					i.attachEvent("on" + f, g);
				}
			}
			i.attachEvent("onpropertychange", this.readPropertyChange);
		},
		giveLayout: function (a) {
			a.style.zoom = 1;
			if (a.currentStyle.position == "static") {
				a.style.position = "relative";
			}
		},
		copyImageBorders: function (b) {
			var c, a;
			c = {
				borderStyle: true,
				borderWidth: true,
				borderColor: true
			};
			for (a in c) {
				if (c.hasOwnProperty(a)) {
					b.vml.color.shape.style[a] = b.currentStyle[a];
				}
			}
		},
		vmlFill: function (e) {
			if (!e.currentStyle) {
				return;
			} else {
				var d, f, g, b, a, c;
				d = e.currentStyle;
			}
			for (b in e.vml) {
				if (e.vml.hasOwnProperty(b)) {
					e.vml[b].shape.style.zIndex = d.zIndex;
				}
			}
			e.runtimeStyle.backgroundColor = "";
			e.runtimeStyle.backgroundImage = "";
			f = true;
			if (d.backgroundImage != "none" || e.isImg) {
				if (!e.isImg) {
					e.vmlBg = d.backgroundImage;
					e.vmlBg = e.vmlBg.substr(5, e.vmlBg.lastIndexOf('")') - 5);
				} else {
					e.vmlBg = e.src;
				}
				g = this;
				if (!g.imgSize[e.vmlBg]) {
					a = document.createElement("img");
					g.imgSize[e.vmlBg] = a;
					a.className = g.ns + "_sizeFinder";
					a.runtimeStyle.cssText = "behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;";
					c = function () {
						this.width = this.offsetWidth;
						this.height = this.offsetHeight;
						g.vmlOffsets(e);
					};
					a.attachEvent("onload", c);
					a.src = e.vmlBg;
					a.removeAttribute("width");
					a.removeAttribute("height");
					document.body.insertBefore(a, document.body.firstChild);
				}
				e.vml.image.fill.src = e.vmlBg;
				f = false;
			}
			e.vml.image.fill.on = !f;
			e.vml.image.fill.color = "none";
			e.vml.color.shape.style.backgroundColor = d.backgroundColor;
			e.runtimeStyle.backgroundImage = "none";
			e.runtimeStyle.backgroundColor = "transparent";
		},
		vmlOffsets: function (d) {
			var h, n, a, e, g, m, f, l, j, i, k;
			h = d.currentStyle;
			n = {
				W: d.clientWidth + 1,
				H: d.clientHeight + 1,
				w: this.imgSize[d.vmlBg].width,
				h: this.imgSize[d.vmlBg].height,
				L: d.offsetLeft,
				T: d.offsetTop,
				bLW: d.clientLeft,
				bTW: d.clientTop
			};
			a = (n.L + n.bLW == 1) ? 1 : 0;
			e = function (b, p, q, c, s, u) {
				b.coordsize = c + "," + s;
				b.coordorigin = u + "," + u;
				b.path = "m0,0l" + c + ",0l" + c + "," + s + "l0," + s + " xe";
				b.style.width = c + "px";
				b.style.height = s + "px";
				b.style.left = p + "px";
				b.style.top = q + "px";
			};
			e(d.vml.color.shape, (n.L + (d.isImg ? 0 : n.bLW)), (n.T + (d.isImg ? 0 : n.bTW)), (n.W - 1), (n.H - 1), 0);
			e(d.vml.image.shape, (n.L + n.bLW), (n.T + n.bTW), (n.W), (n.H), 1);
			g = {
				X: 0,
				Y: 0
			};
			if (d.isImg) {
				g.X = parseInt(h.paddingLeft, 10) + 1;
				g.Y = parseInt(h.paddingTop, 10) + 1;
			} else {
				for (j in g) {
					if (g.hasOwnProperty(j)) {
						this.figurePercentage(g, n, j, h["backgroundPosition" + j]);
					}
				}
			}
			d.vml.image.fill.position = (g.X / n.W) + "," + (g.Y / n.H);
			m = h.backgroundRepeat;
			f = {
				T: 1,
				R: n.W + a,
				B: n.H,
				L: 1 + a
			};
			l = {
				X: {
					b1: "L",
					b2: "R",
					d: "W"
				},
				Y: {
					b1: "T",
					b2: "B",
					d: "H"
				}
			};
			if (m != "repeat" || d.isImg) {
				i = {
					T: (g.Y),
					R: (g.X + n.w),
					B: (g.Y + n.h),
					L: (g.X)
				};
				if (m.search("repeat-") != -1) {
					k = m.split("repeat-")[1].toUpperCase();
					i[l[k].b1] = 1;
					i[l[k].b2] = n[l[k].d];
				}
				if (i.B > n.H) {
					i.B = n.H;
				}
				d.vml.image.shape.style.clip = "rect(" + i.T + "px " + (i.R + a) + "px " + i.B + "px " + (i.L + a) + "px)";
			} else {
				d.vml.image.shape.style.clip = "rect(" + f.T + "px " + f.R + "px " + f.B + "px " + f.L + "px)";
			}
		},
		figurePercentage: function (d, c, f, a) {
			var b, e;
			e = true;
			b = (f == "X");
			switch (a) {
				case "left":
				case "top":
					d[f] = 0;
					break;
				case "center":
					d[f] = 0.5;
					break;
				case "right":
				case "bottom":
					d[f] = 1;
					break;
				default:
					if (a.search("%") != -1) {
						d[f] = parseInt(a, 10) / 100;
					} else {
						e = false;
					}
			}
			d[f] = Math.ceil(e ? ((c[b ? "W" : "H"] * d[f]) - (c[b ? "w" : "h"] * d[f])) : parseInt(a, 10));
			if (d[f] % 2 === 0) {
				d[f]++;
			}
			return d[f];
		},
		fixPng: function (c) {
			c.style.behavior = "none";
			var g, b, f, a, d;
			if (c.nodeName == "BODY" || c.nodeName == "TD" || c.nodeName == "TR") {
				return;
			}
			c.isImg = false;
			if (c.nodeName == "IMG") {
				if (c.src.toLowerCase().search(/\.png$/) != -1) {
					c.isImg = true;
					c.style.visibility = "hidden";
				} else {
					return;
				}
			} else {
				if (c.currentStyle.backgroundImage.toLowerCase().search(".png") == -1) {
					return;
				}
			}
			g = DD_belatedPNG;
			c.vml = {
				color: {},
				image: {}
			};
			b = {
				shape: {},
				fill: {}
			};
			for (a in c.vml) {
				if (c.vml.hasOwnProperty(a)) {
					for (d in b) {
						if (b.hasOwnProperty(d)) {
							f = g.ns + ":" + d;
							c.vml[a][d] = document.createElement(f);
						}
					}
					c.vml[a].shape.stroked = false;
					c.vml[a].shape.appendChild(c.vml[a].fill);
					c.parentNode.insertBefore(c.vml[a].shape, c);
				}
			}
			c.vml.image.shape.fillcolor = "none";
			c.vml.image.fill.type = "tile";
			c.vml.color.fill.on = false;
			g.attachHandlers(c);
			g.giveLayout(c);
			g.giveLayout(c.offsetParent);
			c.vmlInitiated = true;
			g.applyVML(c);
		}
	};
	try {
		document.execCommand("BackgroundImageCache", false, true);
	} catch (r) { }
	DD_belatedPNG.createVmlNameSpace();
	DD_belatedPNG.createVmlStyleSheet();
}

/**
 * SWFObject v2.2
 * http://code.google.com/p/swfobject/
 * swfobject.embedSWF("test.swf", "myContent", "300", "120", "9.0.0", "expressInstall.swf");
 */
var swfobject = function () {
	var D = "undefined",
		r = "object",
		S = "Shockwave Flash",
		W = "ShockwaveFlash.ShockwaveFlash",
		q = "application/x-shockwave-flash",
		R = "SWFObjectExprInst",
		x = "onreadystatechange",
		O = window,
		j = document,
		t = navigator,
		T = false,
		U = [h],
		o = [],
		N = [],
		I = [],
		l,
		Q,
		E,
		B,
		J = false,
		a = false,
		n,
		G,
		m = true,
		M = function () {
			var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
				ah = t.userAgent.toLowerCase(),
				Y = t.platform.toLowerCase(),
				ae = Y ? /win/.test(Y) : /win/.test(ah),
				ac = Y ? /mac/.test(Y) : /mac/.test(ah),
				af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
				X = !+"\v1",
				ag = [0, 0, 0],
				ab = null;
			if (typeof t.plugins != D && typeof t.plugins[S] == r) {
				ab = t.plugins[S].description;
				if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
					T = true;
					X = false;
					ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
					ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
					ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
					ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
				}
			} else {
				if (typeof O.ActiveXObject != D) {
					try {
						var ad = new ActiveXObject(W);
						if (ad) {
							ab = ad.GetVariable("$version");
							if (ab) {
								X = true;
								ab = ab.split(" ")[1].split(",");
								ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)];
							}
						}
					} catch (Z) { }
				}
			}
			return {
				w3: aa,
				pv: ag,
				wk: af,
				ie: X,
				win: ae,
				mac: ac
			};
		}(),
		k = function () {
			if (!M.w3) {
				return;
			}
			if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
				f();
			}
			if (!J) {
				if (typeof j.addEventListener != D) {
					j.addEventListener("DOMContentLoaded", f, false);
				}
				if (M.ie && M.win) {
					j.attachEvent(x,
						function () {
							if (j.readyState == "complete") {
								j.detachEvent(x, arguments.callee);
								f();
							}
						});
					if (O == top) {
						(function () {
							if (J) {
								return;
							}
							try {
								j.documentElement.doScroll("left");
							} catch (X) {
								setTimeout(arguments.callee, 0);
								return;
							}
							f();
						})();
					}
				}
				if (M.wk) {
					(function () {
						if (J) {
							return;
						}
						if (!/loaded|complete/.test(j.readyState)) {
							setTimeout(arguments.callee, 0);
							return;
						}
						f();
					})();
				}
				s(f);
			}
		}();
	function f() {
		if (J) {
			return;
		}
		try {
			var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
			Z.parentNode.removeChild(Z);
		} catch (aa) {
			return;
		}
		J = true;
		var X = U.length;
		for (var Y = 0; Y < X; Y++) {
			U[Y]();
		}
	}
	function K(X) {
		if (J) {
			X();
		} else {
			U[U.length] = X;
		}
	}
	function s(Y) {
		if (typeof O.addEventListener != D) {
			O.addEventListener("load", Y, false);
		} else {
			if (typeof j.addEventListener != D) {
				j.addEventListener("load", Y, false);
			} else {
				if (typeof O.attachEvent != D) {
					i(O, "onload", Y);
				} else {
					if (typeof O.onload == "function") {
						var X = O.onload;
						O.onload = function () {
							X();
							Y();
						};
					} else {
						O.onload = Y;
					}
				}
			}
		}
	}
	function h() {
		if (T) {
			V();
		} else {
			H();
		}
	}
	function V() {
		var X = j.getElementsByTagName("body")[0];
		var aa = C(r);
		aa.setAttribute("type", q);
		var Z = X.appendChild(aa);
		if (Z) {
			var Y = 0; (function () {
				if (typeof Z.GetVariable != D) {
					var ab = Z.GetVariable("$version");
					if (ab) {
						ab = ab.split(" ")[1].split(",");
						M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)];
					}
				} else {
					if (Y < 10) {
						Y++;
						setTimeout(arguments.callee, 10);
						return;
					}
				}
				X.removeChild(aa);
				Z = null;
				H();
			})();
		} else {
			H();
		}
	}
	function H() {
		var ag = o.length;
		if (ag > 0) {
			for (var af = 0; af < ag; af++) {
				var Y = o[af].id;
				var ab = o[af].callbackFn;
				var aa = {
					success: false,
					id: Y
				};
				if (M.pv[0] > 0) {
					var ae = c(Y);
					if (ae) {
						if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
							w(Y, true);
							if (ab) {
								aa.success = true;
								aa.ref = z(Y);
								ab(aa);
							}
						} else {
							if (o[af].expressInstall && A()) {
								var ai = {};
								ai.data = o[af].expressInstall;
								ai.width = ae.getAttribute("width") || "0";
								ai.height = ae.getAttribute("height") || "0";
								if (ae.getAttribute("class")) {
									ai.styleclass = ae.getAttribute("class");
								}
								if (ae.getAttribute("align")) {
									ai.align = ae.getAttribute("align");
								}
								var ah = {};
								var X = ae.getElementsByTagName("param");
								var ac = X.length;
								for (var ad = 0; ad < ac; ad++) {
									if (X[ad].getAttribute("name").toLowerCase() != "movie") {
										ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value");
									}
								}
								P(ai, ah, Y, ab);
							} else {
								p(ae);
								if (ab) {
									ab(aa);
								}
							}
						}
					}
				} else {
					w(Y, true);
					if (ab) {
						var Z = z(Y);
						if (Z && typeof Z.SetVariable != D) {
							aa.success = true;
							aa.ref = Z;
						}
						ab(aa);
					}
				}
			}
		}
	}
	function z(aa) {
		var X = null;
		var Y = c(aa);
		if (Y && Y.nodeName == "OBJECT") {
			if (typeof Y.SetVariable != D) {
				X = Y;
			} else {
				var Z = Y.getElementsByTagName(r)[0];
				if (Z) {
					X = Z;
				}
			}
		}
		return X;
	}
	function A() {
		return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312);
	}
	function P(aa, ab, X, Z) {
		a = true;
		E = Z || null;
		B = {
			success: false,
			id: X
		};
		var ae = c(X);
		if (ae) {
			if (ae.nodeName == "OBJECT") {
				l = g(ae);
				Q = null;
			} else {
				l = ae;
				Q = X;
			}
			aa.id = R;
			if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
				aa.width = "310";
			}
			if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
				aa.height = "137";
			}
			j.title = j.title.slice(0, 47) + " - Flash Player Installation";
			var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
				ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
			if (typeof ab.flashvars != D) {
				ab.flashvars += "&" + ac;
			} else {
				ab.flashvars = ac;
			}
			if (M.ie && M.win && ae.readyState != 4) {
				var Y = C("div");
				X += "SWFObjectNew";
				Y.setAttribute("id", X);
				ae.parentNode.insertBefore(Y, ae);
				ae.style.display = "none"; (function () {
					if (ae.readyState == 4) {
						ae.parentNode.removeChild(ae);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			}
			u(aa, ab, X);
		}
	}
	function p(Y) {
		if (M.ie && M.win && Y.readyState != 4) {
			var X = C("div");
			Y.parentNode.insertBefore(X, Y);
			X.parentNode.replaceChild(g(Y), X);
			Y.style.display = "none"; (function () {
				if (Y.readyState == 4) {
					Y.parentNode.removeChild(Y);
				} else {
					setTimeout(arguments.callee, 10);
				}
			})();
		} else {
			Y.parentNode.replaceChild(g(Y), Y);
		}
	}
	function g(ab) {
		var aa = C("div");
		if (M.win && M.ie) {
			aa.innerHTML = ab.innerHTML;
		} else {
			var Y = ab.getElementsByTagName(r)[0];
			if (Y) {
				var ad = Y.childNodes;
				if (ad) {
					var X = ad.length;
					for (var Z = 0; Z < X; Z++) {
						if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
							aa.appendChild(ad[Z].cloneNode(true));
						}
					}
				}
			}
		}
		return aa;
	}
	function u(ai, ag, Y) {
		var X, aa = c(Y);
		if (M.wk && M.wk < 312) {
			return X;
		}
		if (aa) {
			if (typeof ai.id == D) {
				ai.id = Y;
			}
			if (M.ie && M.win) {
				var ah = "";
				for (var ae in ai) {
					if (ai[ae] != Object.prototype[ae]) {
						if (ae.toLowerCase() == "data") {
							ag.movie = ai[ae];
						} else {
							if (ae.toLowerCase() == "styleclass") {
								ah += ' class="' + ai[ae] + '"';
							} else {
								if (ae.toLowerCase() != "classid") {
									ah += " " + ae + '="' + ai[ae] + '"';
								}
							}
						}
					}
				}
				var af = "";
				for (var ad in ag) {
					if (ag[ad] != Object.prototype[ad]) {
						af += '<param name="' + ad + '" value="' + ag[ad] + '" />';
					}
				}
				aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
				N[N.length] = ai.id;
				X = c(ai.id);
			} else {
				var Z = C(r);
				Z.setAttribute("type", q);
				for (var ac in ai) {
					if (ai[ac] != Object.prototype[ac]) {
						if (ac.toLowerCase() == "styleclass") {
							Z.setAttribute("class", ai[ac]);
						} else {
							if (ac.toLowerCase() != "classid") {
								Z.setAttribute(ac, ai[ac]);
							}
						}
					}
				}
				for (var ab in ag) {
					if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
						e(Z, ab, ag[ab]);
					}
				}
				aa.parentNode.replaceChild(Z, aa);
				X = Z;
			}
		}
		return X;
	}
	function e(Z, X, Y) {
		var aa = C("param");
		aa.setAttribute("name", X);
		aa.setAttribute("value", Y);
		Z.appendChild(aa);
	}
	function y(Y) {
		var X = c(Y);
		if (X && X.nodeName == "OBJECT") {
			if (M.ie && M.win) {
				X.style.display = "none"; (function () {
					if (X.readyState == 4) {
						b(Y);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				X.parentNode.removeChild(X);
			}
		}
	}
	function b(Z) {
		var Y = c(Z);
		if (Y) {
			for (var X in Y) {
				if (typeof Y[X] == "function") {
					Y[X] = null;
				}
			}
			Y.parentNode.removeChild(Y);
		}
	}
	function c(Z) {
		var X = null;
		try {
			X = j.getElementById(Z);
		} catch (Y) { }
		return X;
	}
	function C(X) {
		return j.createElement(X);
	}
	function i(Z, X, Y) {
		Z.attachEvent(X, Y);
		I[I.length] = [Z, X, Y];
	}
	function F(Z) {
		var Y = M.pv,
			X = Z.split(".");
		X[0] = parseInt(X[0], 10);
		X[1] = parseInt(X[1], 10) || 0;
		X[2] = parseInt(X[2], 10) || 0;
		return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false;
	}
	function v(ac, Y, ad, ab) {
		if (M.ie && M.mac) {
			return;
		}
		var aa = j.getElementsByTagName("head")[0];
		if (!aa) {
			return;
		}
		var X = (ad && typeof ad == "string") ? ad : "screen";
		if (ab) {
			n = null;
			G = null;
		}
		if (!n || G != X) {
			var Z = C("style");
			Z.setAttribute("type", "text/css");
			Z.setAttribute("media", X);
			n = aa.appendChild(Z);
			if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
				n = j.styleSheets[j.styleSheets.length - 1];
			}
			G = X;
		}
		if (M.ie && M.win) {
			if (n && typeof n.addRule == r) {
				n.addRule(ac, Y);
			}
		} else {
			if (n && typeof j.createTextNode != D) {
				n.appendChild(j.createTextNode(ac + " {" + Y + "}"));
			}
		}
	}
	function w(Z, X) {
		if (!m) {
			return;
		}
		var Y = X ? "visible" : "hidden";
		if (J && c(Z)) {
			c(Z).style.visibility = Y;
		} else {
			v("#" + Z, "visibility:" + Y);
		}
	}
	function L(Y) {
		var Z = /[\\\"<>\.;]/;
		var X = Z.exec(Y) != null;
		return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y;
	}
	var d = function () {
		if (M.ie && M.win) {
			window.attachEvent("onunload",
				function () {
					var ac = I.length;
					for (var ab = 0; ab < ac; ab++) {
						I[ab][0].detachEvent(I[ab][1], I[ab][2]);
					}
					var Z = N.length;
					for (var aa = 0; aa < Z; aa++) {
						y(N[aa]);
					}
					for (var Y in M) {
						M[Y] = null;
					}
					M = null;
					for (var X in swfobject) {
						swfobject[X] = null;
					}
					swfobject = null;
				});
		}
	}();
	return {
		registerObject: function (ab, X, aa, Z) {
			if (M.w3 && ab && X) {
				var Y = {};
				Y.id = ab;
				Y.swfVersion = X;
				Y.expressInstall = aa;
				Y.callbackFn = Z;
				o[o.length] = Y;
				w(ab, false);
			} else {
				if (Z) {
					Z({
						success: false,
						id: ab
					});
				}
			}
		},
		getObjectById: function (X) {
			if (M.w3) {
				return z(X);
			}
		},
		embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
			var X = {
				success: false,
				id: ah
			};
			if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
				w(ah, false);
				K(function () {
					ae += "";
					ag += "";
					var aj = {};
					if (af && typeof af === r) {
						for (var al in af) {
							aj[al] = af[al];
						}
					}
					aj.data = ab;
					aj.width = ae;
					aj.height = ag;
					var am = {};
					if (ad && typeof ad === r) {
						for (var ak in ad) {
							am[ak] = ad[ak];
						}
					}
					if (Z && typeof Z === r) {
						for (var ai in Z) {
							if (typeof am.flashvars != D) {
								am.flashvars += "&" + ai + "=" + Z[ai];
							} else {
								am.flashvars = ai + "=" + Z[ai];
							}
						}
					}
					if (F(Y)) {
						var an = u(aj, am, ah);
						if (aj.id == ah) {
							w(ah, true);
						}
						X.success = true;
						X.ref = an;
					} else {
						if (aa && A()) {
							aj.data = aa;
							P(aj, am, ah, ac);
							return;
						} else {
							w(ah, true);
						}
					}
					if (ac) {
						ac(X);
					}
				});
			} else {
				if (ac) {
					ac(X);
				}
			}
		},
		switchOffAutoHideShow: function () {
			m = false;
		},
		ua: M,
		getFlashPlayerVersion: function () {
			return {
				major: M.pv[0],
				minor: M.pv[1],
				release: M.pv[2]
			};
		},
		hasFlashPlayerVersion: F,
		createSWF: function (Z, Y, X) {
			if (M.w3) {
				return u(Z, Y, X);
			} else {
				return undefined;
			}
		},
		showExpressInstall: function (Z, aa, X, Y) {
			if (M.w3 && A()) {
				P(Z, aa, X, Y);
			}
		},
		removeSWF: function (X) {
			if (M.w3) {
				y(X);
			}
		},
		createCSS: function (aa, Z, Y, X) {
			if (M.w3) {
				v(aa, Z, Y, X);
			}
		},
		addDomLoadEvent: K,
		addLoadEvent: s,
		getQueryParamValue: function (aa) {
			var Z = j.location.search || j.location.hash;
			if (Z) {
				if (/\?/.test(Z)) {
					Z = Z.split("?")[1];
				}
				if (aa == null) {
					return L(Z);
				}
				var Y = Z.split("&");
				for (var X = 0; X < Y.length; X++) {
					if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
						return L(Y[X].substring((Y[X].indexOf("=") + 1)));
					}
				}
			}
			return "";
		},
		expressInstallCallback: function () {
			if (a) {
				var X = c(R);
				if (X && l) {
					X.parentNode.replaceChild(l, X);
					if (Q) {
						w(Q, true);
						if (M.ie && M.win) {
							l.style.display = "block";
						}
					}
					if (E) {
						E(B);
					}
				}
				a = false;
			}
		}
	};
}();

/**
 * jQuery JSON plugin 2.4.0
 * https://code.google.com/p/jquery-json/
 */
(function ($) {
	var escape = /["\\\x00-\x1f\x7f-\x9f]/g,
		meta = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		hasOwn = Object.prototype.hasOwnProperty;
	$.toJSON = typeof JSON === "object" && JSON.stringify ? JSON.stringify : function (o) {
		if (o === null) {
			return "null";
		}
		var pairs, k, name, val, type = $.type(o);
		if (type === "undefined") {
			return undefined;
		}
		if (type === "number" || type === "boolean") {
			return String(o);
		}
		if (type === "string") {
			return $.quoteString(o);
		}
		if (typeof o.toJSON === "function") {
			return $.toJSON(o.toJSON());
		}
		if (type === "date") {
			var month = o.getUTCMonth() + 1,
				day = o.getUTCDate(),
				year = o.getUTCFullYear(),
				hours = o.getUTCHours(),
				minutes = o.getUTCMinutes(),
				seconds = o.getUTCSeconds(),
				milli = o.getUTCMilliseconds();
			if (month < 10) {
				month = "0" + month;
			}
			if (day < 10) {
				day = "0" + day;
			}
			if (hours < 10) {
				hours = "0" + hours;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			if (milli < 100) {
				milli = "0" + milli;
			}
			if (milli < 10) {
				milli = "0" + milli;
			}
			return '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"';
		}
		pairs = [];
		if ($.isArray(o)) {
			for (k = 0; k < o.length; k++) {
				pairs.push($.toJSON(o[k]) || "null");
			}
			return "[" + pairs.join(",") + "]";
		}
		if (typeof o === "object") {
			for (k in o) {
				if (hasOwn.call(o, k)) {
					type = typeof k;
					if (type === "number") {
						name = '"' + k + '"';
					} else {
						if (type === "string") {
							name = $.quoteString(k);
						} else {
							continue;
						}
					}
					type = typeof o[k];
					if (type !== "function" && type !== "undefined") {
						val = $.toJSON(o[k]);
						pairs.push(name + ":" + val);
					}
				}
			}
			return "{" + pairs.join(",") + "}";
		}
	};
	$.evalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function (str) {
		return eval("(" + str + ")");
	};
	$.secureEvalJSON = typeof JSON === "object" && JSON.parse ? JSON.parse : function (str) {
		var filtered = str.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
		if (/^[\],:{}\s]*$/.test(filtered)) {
			return eval("(" + str + ")");
		}
		throw new SyntaxError("Error parsing JSON, source is not valid.");
	};
	$.quoteString = function (str) {
		if (str.match(escape)) {
			return '"' + str.replace(escape,
				function (a) {
					var c = meta[a];
					if (typeof c === "string") {
						return c;
					}
					c = a.charCodeAt();
					return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
				}) + '"';
		}
		return '"' + str + '"';
	};
}(jQuery));

/**
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 */
(function (a) {
	a.fn.zclip = function (c) {
		if (typeof c == "object" && !c.length) {
			var b = a.extend({
				path: "ZeroClipboard.swf",
				copy: null,
				beforeCopy: null,
				afterCopy: null,
				clickAfter: true,
				setHandCursor: true,
				setCSSEffects: true
			},
				c);
			return this.each(function () {
				var e = a(this);
				if (e.is(":visible") && (typeof b.copy == "string" || a.isFunction(b.copy))) {
					ZeroClipboard.setMoviePath(b.path);
					var d = new ZeroClipboard.Client();
					if (a.isFunction(b.copy)) {
						e.bind("zClip_copy", b.copy);
					}
					if (a.isFunction(b.beforeCopy)) {
						e.bind("zClip_beforeCopy", b.beforeCopy);
					}
					if (a.isFunction(b.afterCopy)) {
						e.bind("zClip_afterCopy", b.afterCopy);
					}
					d.setHandCursor(b.setHandCursor);
					d.setCSSEffects(b.setCSSEffects);
					d.addEventListener("mouseOver",
						function (f) {
							e.trigger("mouseenter");
						});
					d.addEventListener("mouseOut",
						function (f) {
							e.trigger("mouseleave");
						});
					d.addEventListener("mouseDown",
						function (f) {
							e.trigger("mousedown");
							if (!a.isFunction(b.copy)) {
								d.setText(b.copy);
							} else {
								d.setText(e.triggerHandler("zClip_copy"));
							}
							if (a.isFunction(b.beforeCopy)) {
								e.trigger("zClip_beforeCopy");
							}
						});
					d.addEventListener("complete",
						function (f, g) {
							if (a.isFunction(b.afterCopy)) {
								e.trigger("zClip_afterCopy");
							} else {
								if (g.length > 500) {
									g = g.substr(0, 500) + "...\n\n(" + (g.length - 500) + " characters not shown)";
								}
								e.removeClass("hover");
								alert("Copied text to clipboard:\n\n " + g);
							}
							if (b.clickAfter) {
								e.trigger("click");
							}
						});
					d.glue(e[0], e.parent()[0]);
					a(window).bind("load resize",
						function () {
							d.reposition();
						});
				}
			});
		} else {
			if (typeof c == "string") {
				return this.each(function () {
					var f = a(this);
					c = c.toLowerCase();
					var e = f.data("zclipId");
					var d = a("#" + e + ".zclip");
					if (c == "remove") {
						d.remove();
						f.removeClass("active hover");
					} else {
						if (c == "hide") {
							d.hide();
							f.removeClass("active hover");
						} else {
							if (c == "show") {
								d.show();
							}
						}
					}
				});
			}
		}
	};
})(jQuery);
var ZeroClipboard = {
	version: "1.0.7",
	clients: {},
	moviePath: "ZeroClipboard.swf",
	nextId: 1,
	$: function (a) {
		if (typeof (a) == "string") {
			a = document.getElementById(a);
		}
		if (!a.addClass) {
			a.hide = function () {
				this.style.display = "none";
			};
			a.show = function () {
				this.style.display = "";
			};
			a.addClass = function (b) {
				this.removeClass(b);
				this.className += " " + b;
			};
			a.removeClass = function (d) {
				var e = this.className.split(/\s+/);
				var b = -1;
				for (var c = 0; c < e.length; c++) {
					if (e[c] == d) {
						b = c;
						c = e.length;
					}
				}
				if (b > -1) {
					e.splice(b, 1);
					this.className = e.join(" ");
				}
				return this;
			};
			a.hasClass = function (b) {
				return !!this.className.match(new RegExp("\\s*" + b + "\\s*"));
			};
		}
		return a;
	},
	setMoviePath: function (a) {
		this.moviePath = a;
	},
	dispatch: function (d, b, c) {
		var a = this.clients[d];
		if (a) {
			a.receiveEvent(b, c);
		}
	},
	register: function (b, a) {
		this.clients[b] = a;
	},
	getDOMObjectPosition: function (c, a) {
		var b = {
			left: 0,
			top: 0,
			width: c.width ? c.width : c.offsetWidth,
			height: c.height ? c.height : c.offsetHeight
		};
		if (c && (c != a)) {
			b.left += c.offsetLeft;
			b.top += c.offsetTop;
		}
		return b;
	},
	Client: function (a) {
		this.handlers = {};
		this.id = ZeroClipboard.nextId++;
		this.movieId = "ZeroClipboardMovie_" + this.id;
		ZeroClipboard.register(this.id, this);
		if (a) {
			this.glue(a);
		}
	}
};
ZeroClipboard.Client.prototype = {
	id: 0,
	ready: false,
	movie: null,
	clipText: "",
	handCursorEnabled: true,
	cssEffects: true,
	handlers: null,
	glue: function (d, b, e) {
		this.domElement = ZeroClipboard.$(d);
		var f = 99;
		if (this.domElement.style.zIndex) {
			f = parseInt(this.domElement.style.zIndex, 10) + 1;
		}
		if (typeof (b) == "string") {
			b = ZeroClipboard.$(b);
		} else {
			if (typeof (b) == "undefined") {
				b = document.getElementsByTagName("body")[0];
			}
		}
		var c = ZeroClipboard.getDOMObjectPosition(this.domElement, b);
		this.div = document.createElement("div");
		this.div.className = "zclip";
		this.div.id = "zclip-" + this.movieId;
		$(this.domElement).data("zclipId", "zclip-" + this.movieId);
		var a = this.div.style;
		a.position = "absolute";
		a.left = "" + c.left + "px";
		a.top = "" + c.top + "px";
		a.width = "" + c.width + "px";
		a.height = "" + c.height + "px";
		a.zIndex = f;
		if (typeof (e) == "object") {
			for (addedStyle in e) {
				a[addedStyle] = e[addedStyle];
			}
		}
		b.appendChild(this.div);
		this.div.innerHTML = this.getHTML(c.width, c.height);
	},
	getHTML: function (d, a) {
		var c = "";
		var b = "id=" + this.id + "&width=" + d + "&height=" + a;
		if (navigator.userAgent.match(/MSIE/)) {
			var e = location.href.match(/^https/i) ? "https://" : "http://";
			c += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + e + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + d + '" height="' + a + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + b + '"/><param name="wmode" value="transparent"/></object>';
		} else {
			c += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + d + '" height="' + a + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + b + '" wmode="transparent" />';
		}
		return c;
	},
	hide: function () {
		if (this.div) {
			this.div.style.left = "-2000px";
		}
	},
	show: function () {
		this.reposition();
	},
	destroy: function () {
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = "";
			var a = document.getElementsByTagName("body")[0];
			try {
				a.removeChild(this.div);
			} catch (b) { }
			this.domElement = null;
			this.div = null;
		}
	},
	reposition: function (c) {
		if (c) {
			this.domElement = ZeroClipboard.$(c);
			if (!this.domElement) {
				this.hide();
			}
		}
		if (this.domElement && this.div) {
			var b = ZeroClipboard.getDOMObjectPosition(this.domElement);
			var a = this.div.style;
			a.left = "" + b.left + "px";
			a.top = "" + b.top + "px";
		}
	},
	setText: function (a) {
		this.clipText = a;
		if (this.ready) {
			this.movie.setText(a);
		}
	},
	addEventListener: function (a, b) {
		a = a.toString().toLowerCase().replace(/^on/, "");
		if (!this.handlers[a]) {
			this.handlers[a] = [];
		}
		this.handlers[a].push(b);
	},
	setHandCursor: function (a) {
		this.handCursorEnabled = a;
		if (this.ready) {
			this.movie.setHandCursor(a);
		}
	},
	setCSSEffects: function (a) {
		this.cssEffects = !!a;
	},
	receiveEvent: function (d, f) {
		d = d.toString().toLowerCase().replace(/^on/, "");
		switch (d) {
			case "load":
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					var c = this;
					setTimeout(function () {
						c.receiveEvent("load", null);
					},
						1);
					return;
				}
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					var c = this;
					setTimeout(function () {
						c.receiveEvent("load", null);
					},
						100);
					this.ready = true;
					return;
				}
				this.ready = true;
				try {
					this.movie.setText(this.clipText);
				} catch (h) { }
				try {
					this.movie.setHandCursor(this.handCursorEnabled);
				} catch (h) { }
				break;
			case "mouseover":
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass("hover");
					if (this.recoverActive) {
						this.domElement.addClass("active");
					}
				}
				break;
			case "mouseout":
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass("active")) {
						this.domElement.removeClass("active");
						this.recoverActive = true;
					}
					this.domElement.removeClass("hover");
				}
				break;
			case "mousedown":
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass("active");
				}
				break;
			case "mouseup":
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass("active");
					this.recoverActive = false;
				}
				break;
		}
		if (this.handlers[d]) {
			for (var b = 0,
				a = this.handlers[d].length; b < a; b++) {
				var g = this.handlers[d][b];
				if (typeof (g) == "function") {
					g(this, f);
				} else {
					if ((typeof (g) == "object") && (g.length == 2)) {
						g[0][g[1]](this, f);
					} else {
						if (typeof (g) == "string") {
							window[g](this, f);
						}
					}
				}
			}
		}
	}
};

/**
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * t: current time, b: begInnIng value, c: change In value, d: duration
 */
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
	},
	easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a;
	},
	easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a;
	},
	easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a;
		}
		return -h / 2 * ((--f) * (f - 2) - 1) + a;
	},
	easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a;
	},
	easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a;
	},
	easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a;
		}
		return h / 2 * ((f -= 2) * f * f + 2) + a;
	},
	easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a;
	},
	easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a;
	},
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a;
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
	},
	easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a;
	},
	easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
	},
	easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a;
		}
		return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
	},
	easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
	},
	easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a;
	},
	easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
	},
	easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
	},
	easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
	},
	easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a;
		}
		if (f == g) {
			return a + h;
		}
		if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
		}
		return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
	},
	easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
	},
	easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
	},
	easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
		}
		return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
	},
	easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e;
		}
		if ((h /= k) == 1) {
			return e + l;
		}
		if (!j) {
			j = k * 0.3;
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4;
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g);
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
	},
	easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e;
		}
		if ((h /= k) == 1) {
			return e + l;
		}
		if (!j) {
			j = k * 0.3;
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4;
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g);
		}
		return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
	},
	easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e;
		}
		if ((h /= k / 2) == 2) {
			return e + l;
		}
		if (!j) {
			j = k * (0.3 * 1.5);
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4;
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g);
		}
		if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
	},
	easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158;
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a;
	},
	easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158;
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
	},
	easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158;
		}
		if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a;
		}
		return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a;
	},
	easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
	},
	easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a;
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a;
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a;
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a;
				}
			}
		}
	},
	easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
	}
});

/**
 * jQuery Cookie v1.4.1
 * https://github.com/carhartl/jquery-cookie
 * $.cookie('the_cookie'); //读取Cookie值
 * $.cookie('the_cookie', 'the_value'); //设置cookie的值
 * $.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true, raw: true});
 * expires：有效期，以天数为单位
 * path：默认情况，只有设置cookie的网页才能读取该cookie
 * domain：创建cookie的网页所拥有的域名
 * secure：如果为true，cookie的传输需要使用安全协议（HTTPS）
 * raw：读取和写入的时候自动进行编码，要关闭这功能设置为true即可
 */
!
	function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery);
	}(function (a) {
		function c(a) {
			return h.raw ? a : encodeURIComponent(a);
		}
		function d(a) {
			return h.raw ? a : decodeURIComponent(a);
		}
		function e(a) {
			return c(h.json ? JSON.stringify(a) : String(a));
		}
		function f(a) {
			0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
			try {
				return a = decodeURIComponent(a.replace(b, " ")),
					h.json ? JSON.parse(a) : a;
			} catch (c) { }
		}
		function g(b, c) {
			var d = h.raw ? b : f(b);
			return a.isFunction(c) ? c(d) : d;
		}
		var b = /\+/g,
			h = a.cookie = function (b, f, i) {
				if (arguments.length > 1 && !a.isFunction(f)) {
					if (i = a.extend({},
						h.defaults, i), "number" == typeof i.expires) {
						var j = i.expires,
							k = i.expires = new Date;
						k.setTime(+k + 864e5 * j);
					}
					return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
				}
				for (var l = b ? void 0 : {},
					m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
					var p = m[n].split("="),
						q = d(p.shift()),
						r = p.join("=");
					if (b && b === q) {
						l = g(r, f);
						break;
					}
					b || void 0 === (r = g(r)) || (l[q] = r);
				}
				return l;
			};
		h.defaults = {},
			a.removeCookie = function (b, c) {
				return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({},
					c, {
						expires: -1
					})), !a.cookie(b));
			};
	});

/**
 * 快捷键 mousetrap v1.4.6
 * http://craig.is/killing/mice
 */
(function (J, r, f) {
	function s(a, b, d) {
		a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent("on" + b, d);
	}
	function A(a) {
		if ("keypress" == a.type) {
			var b = String.fromCharCode(a.which);
			a.shiftKey || (b = b.toLowerCase());
			return b;
		}
		return h[a.which] ? h[a.which] : B[a.which] ? B[a.which] : String.fromCharCode(a.which).toLowerCase();
	}
	function t(a) {
		a = a || {};
		var b = !1,
			d;
		for (d in n) a[d] ? b = !0 : n[d] = 0;
		b || (u = !1);
	}
	function C(a, b, d, c, e, v) {
		var g, k, f = [],
			h = d.type;
		if (!l[a]) return [];
		"keyup" == h && w(a) && (b = [a]);
		for (g = 0; g < l[a].length; ++g) if (k = l[a][g], !(!c && k.seq && n[k.seq] != k.level || h != k.action || ("keypress" != h || d.metaKey || d.ctrlKey) && b.sort().join(",") !== k.modifiers.sort().join(","))) {
			var m = c && k.seq == c && k.level == v; (!c && k.combo == e || m) && l[a].splice(g, 1);
			f.push(k);
		}
		return f;
	}
	function K(a) {
		var b = [];
		a.shiftKey && b.push("shift");
		a.altKey && b.push("alt");
		a.ctrlKey && b.push("ctrl");
		a.metaKey && b.push("meta");
		return b;
	}
	function x(a, b, d, c) {
		m.stopCallback(b, b.target || b.srcElement, d, c) || !1 !== a(b, d) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0);
	}
	function y(a) {
		"number" !== typeof a.which && (a.which = a.keyCode);
		var b = A(a);
		b && ("keyup" == a.type && z === b ? z = !1 : m.handleKey(b, K(a), a));
	}
	function w(a) {
		return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a;
	}
	function L(a, b, d, c) {
		function e(b) {
			return function () {
				u = b; ++n[a];
				clearTimeout(D);
				D = setTimeout(t, 1E3);
			};
		}
		function v(b) {
			x(d, b, a);
			"keyup" !== c && (z = A(b));
			setTimeout(t, 10);
		}
		for (var g = n[a] = 0; g < b.length; ++g) {
			var f = g + 1 === b.length ? v : e(c || E(b[g + 1]).action);
			F(b[g], f, c, a, g);
		}
	}
	function E(a, b) {
		var d, c, e, f = [];
		d = "+" === a ? ["+"] : a.split("+");
		for (e = 0; e < d.length; ++e) c = d[e],
			G[c] && (c = G[c]),
			b && "keypress" != b && H[c] && (c = H[c], f.push("shift")),
			w(c) && f.push(c);
		d = c;
		e = b;
		if (!e) {
			if (!p) {
				p = {};
				for (var g in h) 95 < g && 112 > g || h.hasOwnProperty(g) && (p[h[g]] = g);
			}
			e = p[d] ? "keydown" : "keypress";
		}
		"keypress" == e && f.length && (e = "keydown");
		return {
			key: c,
			modifiers: f,
			action: e
		};
	}
	function F(a, b, d, c, e) {
		q[a + ":" + d] = b;
		a = a.replace(/\s+/g, " ");
		var f = a.split(" ");
		1 < f.length ? L(a, f, b, d) : (d = E(a, d), l[d.key] = l[d.key] || [], C(d.key, d.modifiers, {
			type: d.action
		},
			c, a, e), l[d.key][c ? "unshift" : "push"]({
				callback: b,
				modifiers: d.modifiers,
				action: d.action,
				seq: c,
				level: e,
				combo: a
			}));
	}
	var h = {
		8: "backspace",
		9: "tab",
		13: "enter",
		16: "shift",
		17: "ctrl",
		18: "alt",
		20: "capslock",
		27: "esc",
		32: "space",
		33: "pageup",
		34: "pagedown",
		35: "end",
		36: "home",
		37: "left",
		38: "up",
		39: "right",
		40: "down",
		45: "ins",
		46: "del",
		91: "meta",
		93: "meta",
		224: "meta"
	},
		B = {
			106: "*",
			107: "+",
			109: "-",
			110: ".",
			111: "/",
			186: ";",
			187: "=",
			188: ",",
			189: "-",
			190: ".",
			191: "/",
			192: "`",
			219: "[",
			220: "\\",
			221: "]",
			222: "'"
		},
		H = {
			"~": "`",
			"!": "1",
			"@": "2",
			"#": "3",
			$: "4",
			"%": "5",
			"^": "6",
			"&": "7",
			"*": "8",
			"(": "9",
			")": "0",
			_: "-",
			"+": "=",
			":": ";",
			'"': "'",
			"<": ",",
			">": ".",
			"?": "/",
			"|": "\\"
		},
		G = {
			option: "alt",
			command: "meta",
			"return": "enter",
			escape: "esc",
			mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
		},
		p,
		l = {},
		q = {},
		n = {},
		D,
		z = !1,
		I = !1,
		u = !1;
	for (f = 1; 20 > f; ++f) h[111 + f] = "f" + f;
	for (f = 0; 9 >= f; ++f) h[f + 96] = f;
	s(r, "keypress", y);
	s(r, "keydown", y);
	s(r, "keyup", y);
	var m = {
		bind: function (a, b, d) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; ++c) F(a[c], b, d);
			return this;
		},
		unbind: function (a, b) {
			return m.bind(a,
				function () { },
				b);
		},
		trigger: function (a, b) {
			if (q[a + ":" + b]) q[a + ":" + b]({},
				a);
			return this;
		},
		reset: function () {
			l = {};
			q = {};
			return this;
		},
		stopCallback: function (a, b) {
			return -1 < (" " + b.className + " ").indexOf(" mousetrap ") ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable;
		},
		handleKey: function (a, b, d) {
			var c = C(a, b, d),
				e;
			b = {};
			var f = 0,
				g = !1;
			for (e = 0; e < c.length; ++e) c[e].seq && (f = Math.max(f, c[e].level));
			for (e = 0; e < c.length; ++e) c[e].seq ? c[e].level == f && (g = !0, b[c[e].seq] = 1, x(c[e].callback, d, c[e].combo, c[e].seq)) : g || x(c[e].callback, d, c[e].combo);
			c = "keypress" == d.type && I;
			d.type != u || w(a) || c || t(b);
			I = g && "keydown" == d.type;
		}
	};
	J.Mousetrap = m;
	"function" === typeof define && define.amd && define(m);
})(window, document);

/**
 * jquery.mousewheel 3.1.12
 * https://github.com/brandonaaron/jquery-mousewheel/
 */
!
	function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery);
	}(function (a) {
		function b(b) {
			var g = b || window.event,
				h = i.call(arguments, 1),
				j = 0,
				l = 0,
				m = 0,
				n = 0,
				o = 0,
				p = 0;
			if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
				if (1 === g.deltaMode) {
					var q = a.data(this, "mousewheel-line-height");
					j *= q,
						m *= q,
						l *= q;
				} else if (2 === g.deltaMode) {
					var r = a.data(this, "mousewheel-page-height");
					j *= r,
						m *= r,
						l *= r;
				}
				if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
					var s = this.getBoundingClientRect();
					o = b.clientX - s.left,
						p = b.clientY - s.top;
				}
				return b.deltaX = l,
					b.deltaY = m,
					b.deltaFactor = f,
					b.offsetX = o,
					b.offsetY = p,
					b.deltaMode = 0,
					h.unshift(b, j, l, m),
					e && clearTimeout(e),
					e = setTimeout(c, 200),
					(a.event.dispatch || a.event.handle).apply(this, h);
			}
		}
		function c() {
			f = null;
		}
		function d(a, b) {
			return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
		}
		var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			i = Array.prototype.slice;
		if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
		var k = a.event.special.mousewheel = {
			version: "3.1.12",
			setup: function () {
				if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
				else this.onmousewheel = b;
				a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
					a.data(this, "mousewheel-page-height", k.getPageHeight(this));
			},
			teardown: function () {
				if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
				else this.onmousewheel = null;
				a.removeData(this, "mousewheel-line-height"),
					a.removeData(this, "mousewheel-page-height");
			},
			getLineHeight: function (b) {
				var c = a(b),
					d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
				return d.length || (d = a("body")),
					parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
			},
			getPageHeight: function (b) {
				return a(b).height();
			},
			settings: {
				adjustOldDeltas: !0,
				normalizeOffset: !0
			}
		};
		a.fn.extend({
			mousewheel: function (a) {
				return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
			},
			unmousewheel: function (a) {
				return this.unbind("mousewheel", a);
			}
		});
	});

/**
 * 分页插件 jquery_pagination 修改版
 * http://hooray.github.com/jquery.pagination/
 */
(function ($) {
	$.PaginationCalculator = function (maxentries, opts) {
		this.maxentries = maxentries;
		this.opts = opts;
	};
	$.extend($.PaginationCalculator.prototype, {
		numPages: function () {
			return Math.ceil(this.maxentries / this.opts.items_per_page);
		},
		getInterval: function (current_page) {
			var ne_half = Math.floor(this.opts.num_display_entries / 2);
			var np = this.numPages();
			var upper_limit = np - this.opts.num_display_entries;
			var start = current_page > ne_half ? Math.max(Math.min(current_page - ne_half, upper_limit), 0) : 0;
			var end = current_page > ne_half ? Math.min(current_page + ne_half + (this.opts.num_display_entries % 2), np) : Math.min(this.opts.num_display_entries, np);
			return {
				start: start,
				end: end
			};
		}
	});
	$.PaginationRenderers = {};
	$.PaginationRenderers.defaultRenderer = function (maxentries, opts) {
		this.maxentries = maxentries;
		this.opts = opts;
		this.pc = new $.PaginationCalculator(maxentries, opts);
	};
	$.extend($.PaginationRenderers.defaultRenderer.prototype, {
		createLink: function (page_id, current_page, appendopts) {
			var lnk, np = this.pc.numPages();
			page_id = page_id < 0 ? 0 : (page_id < np ? page_id : np - 1);
			appendopts = $.extend({
				text: page_id + 1,
				classes: ""
			},
				appendopts || {});
			if (page_id == current_page) {
				if (isNaN(appendopts.text)) {
					lnk = $("<li class='disabled'><a>" + appendopts.text + "</a></li>");
				} else {
					lnk = $("<li class='active'><a>" + appendopts.text + "</a></li>");
				}
			} else {
				lnk = $("<li><a href='" + this.opts.link_to.replace(/__id__/, page_id) + "'>" + appendopts.text + "</a></li>");
			}
			if (appendopts.classes) {
				lnk.addClass(appendopts.classes);
			}
			lnk.data("page_id", page_id);
			return lnk;
		},
		appendRange: function (container, current_page, start, end, opts) {
			var i;
			for (i = start; i < end; i++) {
				this.createLink(i, current_page, opts).appendTo(container);
			}
		},
		getLinks: function (current_page, eventHandler) {
			current_page = parseInt(current_page);
			var begin, end, interval = this.pc.getInterval(current_page),
				np = this.pc.numPages(),
				fragment = $("<ul></ul>");
			if (this.opts.prev_text && (current_page > 0 || this.opts.prev_show_always)) {
				fragment.append(this.createLink(current_page - 1, current_page, {
					text: this.opts.prev_text,
					classes: "prev"
				}));
			}
			if (interval.start > 0 && this.opts.num_edge_entries > 0) {
				end = Math.min(this.opts.num_edge_entries, interval.start);
				this.appendRange(fragment, current_page, 0, end, {
					classes: "sp"
				});
				if (this.opts.num_edge_entries < interval.start && this.opts.ellipse_text) {
					$("<li class='disabled'><a>" + this.opts.ellipse_text + "</a></li>").appendTo(fragment);
				}
			}
			this.appendRange(fragment, current_page, interval.start, interval.end);
			if (interval.end < np && this.opts.num_edge_entries > 0) {
				if (np - this.opts.num_edge_entries > interval.end && this.opts.ellipse_text) {
					$("<li class='disabled'><a>" + this.opts.ellipse_text + "</a></li>").appendTo(fragment);
				}
				begin = Math.max(np - this.opts.num_edge_entries, interval.end);
				this.appendRange(fragment, current_page, begin, np, {
					classes: "ep"
				});
			}
			if (this.opts.next_text && (current_page < np - 1 || this.opts.next_show_always)) {
				fragment.append(this.createLink(current_page + 1, current_page, {
					text: this.opts.next_text,
					classes: "next"
				}));
			}
			$("li:not(.disabled, .active) a", fragment).click(eventHandler);
			return fragment;
		}
	});
	$.fn.pagination = function (maxentries, opts) {

		opts = $.extend({
			items_per_page: 10,
			num_display_entries: 11,
			current_page: 0,
			num_edge_entries: 0,
			link_to: "javascript:;",
			prev_text: "Prev",
			next_text: "Next",
			ellipse_text: "...",
			prev_show_always: true,
			next_show_always: true,
			renderer: "defaultRenderer",
			load_first_page: false,
			callback: function () {
				return false;
			}
		},
			opts || {});
		var containers = this,
			renderer, links, current_page;
		function paginationClickHandler(evt) {
			var links, new_current_page = $(evt.target).parent().data("page_id"),
				continuePropagation = selectPage(new_current_page);
			if (!continuePropagation) {
				evt.stopPropagation();
			}
			return continuePropagation;
		}
		function selectPage(new_current_page) {
			containers.data("current_page", new_current_page);
			links = renderer.getLinks(new_current_page, paginationClickHandler);
			containers.empty();
			links.appendTo(containers);
			var continuePropagation = opts.callback(new_current_page, containers);
			return continuePropagation;
		}
		current_page = opts.current_page;
		containers.data("current_page", current_page);
		maxentries = (!maxentries || maxentries < 0) ? 1 : maxentries;
		opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0) ? 1 : opts.items_per_page;
		if (!$.PaginationRenderers[opts.renderer]) {
			throw new ReferenceError("Pagination renderer '" + opts.renderer + "' was not found in jQuery.PaginationRenderers object.");
		}
		renderer = new $.PaginationRenderers[opts.renderer](maxentries, opts);
		var pc = new $.PaginationCalculator(maxentries, opts);
		var np = pc.numPages();
		containers.off("setPage").on("setPage", {
			numPages: np
		},
			function (evt, page_id) {
				if (page_id >= 0 && page_id < evt.data.numPages) {
					selectPage(page_id);
					return false;
				}
			});
		containers.off("prevPage").on("prevPage",
			function (evt) {
				var current_page = $(this).data("current_page");
				if (current_page > 0) {
					selectPage(current_page - 1);
				}
				return false;
			});
		containers.off("nextPage").on("nextPage", {
			numPages: np
		},
			function (evt) {
				var current_page = $(this).data("current_page");
				if (current_page < evt.data.numPages - 1) {
					selectPage(current_page + 1);
				}
				return false;
			});
		containers.off("currentPage").on("currentPage",
			function () {
				var current_page = $(this).data("current_page");
				selectPage(current_page);
				return false;
			});
		links = renderer.getLinks(current_page, paginationClickHandler);
		containers.empty();
		links.appendTo(containers);
		if (opts.load_first_page) {
			opts.callback(current_page, containers);
		}
	};
})(jQuery);

/**
 * 腾讯UED提示信息
 * NewCrm.msgbox.show("服务器繁忙，请稍后再试。", 1, 2000);
 * NewCrm.msgbox.show("设置成功！", 4, 2000);
 * NewCrm.msgbox.show("数据拉取失败", 5, 2000);
 * NewCrm.msgbox.show("正在加载中，请稍后...", 6,8000);
 */
window.NewCrm = window.NewCrm || {};
NewCrm.dom = {
	getById: function (id) {
		return document.getElementById(id);
	}, get: function (e) {
		return (typeof (e) == "string") ? document.getElementById(e) : e;
	}, createElementIn: function (tagName, elem, insertFirst, attrs) {
		var _e = (elem = NewCrm.dom.get(elem) || document.body).ownerDocument.createElement(tagName || "div"), k;
		if (typeof (attrs) == 'object') {
			for (k in attrs) {
				if (k == "class") {
					_e.className = attrs[k];
				} else if (k == "style") {
					_e.style.cssText = attrs[k];
				} else {
					_e[k] = attrs[k];
				}
			}
		}
		insertFirst ? elem.insertBefore(_e, elem.firstChild) : elem.appendChild(_e);
		return _e;
	}, getStyle: function (el, property) {
		el = NewCrm.dom.get(el);
		if (!el || el.nodeType == 9) {
			return null;
		}
		var w3cMode = document.defaultView && document.defaultView.getComputedStyle, computed = !w3cMode ? null : document.defaultView.getComputedStyle(el, ''), value = "";
		switch (property) {
			case "float":
				property = w3cMode ? "cssFloat" : "styleFloat";
				break;
			case "opacity":
				if (!w3cMode) {
					var val = 100;
					try {
						val = el.filters['DXImageTransform.Microsoft.Alpha'].opacity;
					} catch (e) {
						try {
							val = el.filters('alpha').opacity;
						} catch (e) {
						}
					}
					return val / 100;
				} else {
					return parseFloat((computed || el.style)[property]);
				}
				break;
			case "backgroundPositionX":
				if (w3cMode) {
					property = "backgroundPosition";
					return ((computed || el.style)[property]).split(" ")[0];
				}
				break;
			case "backgroundPositionY":
				if (w3cMode) {
					property = "backgroundPosition";
					return ((computed || el.style)[property]).split(" ")[1];
				}
				break;
		}
		if (w3cMode) {
			return (computed || el.style)[property];
		} else {
			return (el.currentStyle[property] || el.style[property]);
		}
	}, setStyle: function (el, properties, value) {
		if (!(el = NewCrm.dom.get(el)) || el.nodeType != 1) {
			return false;
		}
		var tmp, bRtn = true, w3cMode = (tmp = document.defaultView) && tmp.getComputedStyle, rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i;
		if (typeof (properties) == 'string') {
			tmp = properties;
			properties = {};
			properties[tmp] = value;
		}
		for (var prop in properties) {
			value = properties[prop];
			if (prop == 'float') {
				prop = w3cMode ? "cssFloat" : "styleFloat";
			} else if (prop == 'opacity') {
				if (!w3cMode) {
					prop = 'filter';
					value = value >= 1 ? '' : ('alpha(opacity=' + Math.round(value * 100) + ')');
				}
			} else if (prop == 'backgroundPositionX' || prop == 'backgroundPositionY') {
				tmp = prop.slice(-1) == 'X' ? 'Y' : 'X';
				if (w3cMode) {
					var v = NewCrm.dom.getStyle(el, "backgroundPosition" + tmp);
					prop = 'backgroundPosition';
					typeof (value) == 'number' && (value = value + 'px');
					value = tmp == 'Y' ? (value + " " + (v || "top")) : ((v || 'left') + " " + value);
				}
			}
			if (typeof el.style[prop] != "undefined") {
				el.style[prop] = value + (typeof value === "number" && !rexclude.test(prop) ? 'px' : '');
				bRtn = bRtn && true;
			} else {
				bRtn = bRtn && false;
			}
		}
		return bRtn;
	}, getScrollTop: function (doc) {
		var _doc = doc || document;
		return Math.max(_doc.documentElement.scrollTop, _doc.body.scrollTop);
	}, getClientHeight: function (doc) {
		var _doc = doc || document;
		return _doc.compatMode == "CSS1Compat" ? _doc.documentElement.clientHeight : _doc.body.clientHeight;
	}
};
NewCrm.string = {
	RegExps: { trim: /^\s+|\s+$/g, ltrim: /^\s+/, rtrim: /\s+$/, nl2br: /\n/g, s2nb: /[\x20]{2}/g, URIencode: /[\x09\x0A\x0D\x20\x21-\x29\x2B\x2C\x2F\x3A-\x3F\x5B-\x5E\x60\x7B-\x7E]/g, escHTML: { re_amp: /&/g, re_lt: /</g, re_gt: />/g, re_apos: /\x27/g, re_quot: /\x22/g }, escString: { bsls: /\\/g, sls: /\//g, nl: /\n/g, rt: /\r/g, tab: /\t/g }, restXHTML: { re_amp: /&amp;/g, re_lt: /&lt;/g, re_gt: /&gt;/g, re_apos: /&(?:apos|#0?39);/g, re_quot: /&quot;/g }, write: /\{(\d{1,2})(?:\:([xodQqb]))?\}/g, isURL: /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i, cut: /[\x00-\xFF]/, getRealLen: { r0: /[^\x00-\xFF]/g, r1: /[\x00-\xFF]/g }, format: /\{([\d\w\.]+)\}/g }, commonReplace: function (s, p, r) {
		return s.replace(p, r);
	}, format: function (str) {
		var args = Array.prototype.slice.call(arguments), v;
		str = String(args.shift());
		if (args.length == 1 && typeof (args[0]) == 'object') {
			args = args[0];
		}
		NewCrm.string.RegExps.format.lastIndex = 0;
		return str.replace(NewCrm.string.RegExps.format, function (m, n) {
			v = NewCrm.object.route(args, n);
			return v === undefined ? m : v;
		});
	}
};
NewCrm.object = {
	routeRE: /([\d\w_]+)/g,
	route: function (obj, path) {
		obj = obj || {};
		path = String(path);
		var r = NewCrm.object.routeRE, m;
		r.lastIndex = 0;
		while ((m = r.exec(path)) !== null) {
			obj = obj[m[0]];
			if (obj === undefined || obj === null) {
				break;
			}
		}
		return obj;
	}
};
var ua = NewCrm.userAgent = {}, agent = navigator.userAgent;
ua.ie = 9 - ((agent.indexOf('Trident/5.0') > -1) ? 0 : 1) - (window.XDomainRequest ? 0 : 1) - (window.XMLHttpRequest ? 0 : 1);

if (typeof (NewCrm.msgbox) == 'undefined') {
	NewCrm.msgbox = {};
}
NewCrm.msgbox._timer = null;
NewCrm.msgbox.loadingAnimationPath = NewCrm.msgbox.loadingAnimationPath || ("loading.gif");
NewCrm.msgbox.show = function (msgHtml, type, timeout, opts) {
	if (typeof (opts) == 'number') {
		opts = { topPosition: opts };
	}
	opts = opts || {};
	var _s = NewCrm.msgbox,
		template = '<span class="zeng_msgbox_layer zeng_msgbox_layer_{layerStyle}" style="display:none;z-index:10000;" id="mode_tips_v2"><span class="gtl_ico_{type}"></span>{loadIcon}{msgHtml}<span class="gtl_end"></span></span>', loading = '<span class="gtl_ico_loading"></span>', typeClass = [0, 0, 0, 0, "succ", "fail", "clear"], mBox, tips;
	_s._loadCss && _s._loadCss(opts.cssPath);
	mBox = NewCrm.dom.get("q_Msgbox") || NewCrm.dom.createElementIn("div", document.body, false, { className: "zeng_msgbox_layer_wrap" });
	mBox.id = "q_Msgbox";
	mBox.style.display = "";
	mBox.innerHTML = NewCrm.string.format(template, { type: typeClass[type] || "hits", msgHtml: msgHtml || "", loadIcon: type == 6 ? loading : "", layerStyle: type == 6 ? 'loading' : "normal" });
	_s._setPosition(mBox, timeout, opts.topPosition);
};
NewCrm.msgbox._setPosition = function (tips, timeout, topPosition) {
	timeout = timeout || 5000;
	var _s = NewCrm.msgbox, bt = NewCrm.dom.getScrollTop(), ch = NewCrm.dom.getClientHeight(), t = Math.floor(ch / 2) - 40;
	NewCrm.dom.setStyle(tips, "top", ((document.compatMode == "BackCompat" || NewCrm.userAgent.ie < 7) ? bt : 0) + ((typeof (topPosition) == "number") ? topPosition : t) + "px");

	clearTimeout(_s._timer);
	tips.firstChild.style.display = "";
	timeout && (_s._timer = setTimeout(_s._hide, timeout));
};

NewCrm.msgbox._hide = function () {
	var _mBox = NewCrm.dom.get("q_Msgbox"), _s = NewCrm.msgbox;
	clearTimeout(_s._timer);
	if (_mBox) {
		var _tips = _mBox.firstChild;
		NewCrm.dom.setStyle(_mBox, "display", "none");
	}
};

if (typeof define === "function") {
	// AMD. Register as an anonymous module.
	module.exports = NewCrm;
} else {
	window.NewCrm = NewCrm;
}

NewCrm.msgbox.info = function (msg, timeout) {
	NewCrm.msgbox.show(msg, 1, timeout || 2000);
};
NewCrm.msgbox.success = function (msg, timeout) {
	NewCrm.msgbox.show(msg, 4, timeout || 2000);
};
NewCrm.msgbox.fail = function (msg, timeout) {
	NewCrm.msgbox.show(msg || '出现未知错误，请重试', 5, timeout || 2000);
};
NewCrm.msgbox.loading = function (msg) {
	NewCrm.msgbox.show(msg, 6, 10000);
};
NewCrm.msgbox.close = function () {
	NewCrm.msgbox._hide()
};

/**
 * 全屏插件
 * http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/
 */
(function () {
	var d = {
		supportsFullScreen: false,
		isFullScreen: function () {
			return false;
		},
		requestFullScreen: function () { },
		cancelFullScreen: function () { },
		fullScreenEventName: "",
		prefix: ""
	},
		c = "webkit moz o ms khtml".split(" ");
	if (typeof document.cancelFullScreen != "undefined") {
		d.supportsFullScreen = true;
	} else {
		for (var b = 0,
			a = c.length; b < a; b++) {
			d.prefix = c[b];
			if (typeof document[d.prefix + "CancelFullScreen"] != "undefined") {
				d.supportsFullScreen = true;
				break;
			}
		}
	}
	if (d.supportsFullScreen) {
		d.fullScreenEventName = d.prefix + "fullscreenchange";
		d.isFullScreen = function () {
			switch (this.prefix) {
				case "":
					return document.fullScreen;
				case "webkit":
					return document.webkitIsFullScreen;
				default:
					return document[this.prefix + "FullScreen"];
			}
		};
		d.requestFullScreen = function (e) {
			return (this.prefix === "") ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]();
		};
		d.cancelFullScreen = function (e) {
			return (this.prefix === "") ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]();
		};
	}
	if (typeof jQuery != "undefined") {
		jQuery.fn.requestFullScreen = function () {
			return this.each(function () {
				if (d.supportsFullScreen) {
					d.requestFullScreen(this);
				}
			});
		};
	}
	window.fullScreenApi = d;
})();

/**
 * artTemplate 3.0 - Template Engine
 * https://github.com/aui/artTemplate
 */
!
	function () {
		function a(a) {
			return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y);
		}
		function b(a) {
			return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
		}
		function c(c, d) {
			function e(a) {
				return m += a.split(/\n/).length - 1,
					k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")),
					a && (a = s[1] + b(a) + s[2] + "\n"),
					a;
			}
			function f(b) {
				var c = m;
				if (j ? b = j(b, d) : g && (b = b.replace(/\n/g,
					function () {
						return m++ ,
							"$line=" + m + ";";
					})), 0 === b.indexOf("=")) {
					var e = l && !/^=[=#]/.test(b);
					if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
						var f = b.replace(/\s*\([^\)]+\)/, "");
						n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")");
					} else b = "$string(" + b + ")";
					b = s[1] + b + s[2];
				}
				return g && (b = "$line=" + c + ";" + b),
					r(a(b),
						function (a) {
							if (a && !p[a]) {
								var b;
								b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a,
									w += a + "=" + b + ",",
									p[a] = !0;
							}
						}),
					b + "\n";
			}
			var g = d.debug,
				h = d.openTag,
				i = d.closeTag,
				j = d.parser,
				k = d.compress,
				l = d.escape,
				m = 1,
				p = {
					$data: 1,
					$filename: 1,
					$utils: 1,
					$helpers: 1,
					$out: 1,
					$line: 1
				},
				q = "".trim,
				s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
				t = q ? "$out+=text;return $out;" : "$out.push(text);",
				u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
				v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
				w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
				x = s[0],
				y = "return new String(" + s[3] + ");";
			r(c.split(h),
				function (a) {
					a = a.split(i);
					var b = a[0],
						c = a[1];
					1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)));
				});
			var z = w + x + y;
			g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
			try {
				var A = new Function("$data", "$filename", z);
				return A.prototype = n,
					A;
			} catch (B) {
				throw B.temp = "function anonymous($data,$filename) {" + z + "}",
				B;
			}
		}
		var d = function (a, b) {
			return "string" == typeof b ? q(b, {
				filename: a
			}) : g(a, b);
		};
		d.version = "3.0.0",
			d.config = function (a, b) {
				e[a] = b;
			};
		var e = d.defaults = {
			openTag: "<%",
			closeTag: "%>",
			escape: !0,
			cache: !0,
			compress: !1,
			parser: null
		},
			f = d.cache = {};
		d.render = function (a, b) {
			return q(a, b);
		};
		var g = d.renderFile = function (a, b) {
			var c = d.get(a) || p({
				filename: a,
				name: "Render Error",
				message: "Template not found"
			});
			return b ? c(b) : c;
		};
		d.get = function (a) {
			var b;
			if (f[a]) b = f[a];
			else if ("object" == typeof document) {
				var c = document.getElementById(a);
				if (c) {
					var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
					b = q(d, {
						filename: a
					});
				}
			}
			return b;
		};
		var h = function (a, b) {
			return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""),
				a;
		},
			i = {
				"<": "&#60;",
				">": "&#62;",
				'"': "&#34;",
				"'": "&#39;",
				"&": "&#38;"
			},
			j = function (a) {
				return i[a];
			},
			k = function (a) {
				return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j);
			},
			l = Array.isArray ||
				function (a) {
					return "[object Array]" === {}.toString.call(a);
				},
			m = function (a, b) {
				var c, d;
				if (l(a)) for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);
				else for (c in a) b.call(a, a[c], c);
			},
			n = d.utils = {
				$helpers: {},
				$include: g,
				$string: h,
				$escape: k,
				$each: m
			};
		d.helper = function (a, b) {
			o[a] = b;
		};
		var o = d.helpers = n.$helpers;
		d.onerror = function (a) {
			var b = "Template Error\n\n";
			for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n";
			"object" == typeof console && console.error(b);
		};
		var p = function (a) {
			return d.onerror(a),
				function () {
					return "{Template Error}";
				};
		},
			q = d.compile = function (a, b) {
				function d(c) {
					try {
						return new i(c, h) + "";
					} catch (d) {
						return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c));
					}
				}
				b = b || {};
				for (var g in e) void 0 === b[g] && (b[g] = e[g]);
				var h = b.filename;
				try {
					var i = c(a, b);
				} catch (j) {
					return j.filename = h || "anonymous",
						j.name = "Syntax Error",
						p(j);
				}
				return d.prototype = i.prototype,
					d.toString = function () {
						return i.toString();
					},
					h && b.cache && (f[h] = d),
					d;
			},
			r = n.$each,
			s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
			t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
			u = /[^\w$]+/g,
			v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
			w = /^\d[^,]*|,\d[^,]*/g,
			x = /^,+|,+$/g,
			y = /^$|,+/;
		"function" == typeof define ? define(function () {
			return d;
		}) : "undefined" != typeof exports ? module.exports = d : this.template = d;
	}();

//https://github.com/h5bp/html5-boilerplate
(function () {
	var method;
	var noop = function () { };
	var methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
	var length = methods.length;
	var console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());


/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*
 *  Sugar Library v1.4.1
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2013 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function () {
    function aa(a) { return function () { return a } }
    var m = Object, p = Array, q = RegExp, r = Date, s = String, t = Number, u = Math, ba = "undefined" !== typeof global ? global : this, v = m.prototype.toString, da = m.prototype.hasOwnProperty, ea = m.defineProperty && m.defineProperties, fa = "function" === typeof q(), ga = !("0" in new s("a")), ia = {}, ja = /^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/, w = "Boolean Number String Array Date RegExp Function".split(" "), la = ka("boolean", w[0]), y = ka("number", w[1]), z = ka("string", w[2]), A = ma(w[3]), C = ma(w[4]), D = ma(w[5]), F = ma(w[6]);
    function ma(a) { var b = "Array" === a && p.isArray || function (b, d) { return (d || v.call(b)) === "[object " + a + "]" }; return ia[a] = b } function ka(a, b) { function c(c) { return G(c) ? v.call(c) === "[object " + b + "]" : typeof c === a } return ia[b] = c }
    function na(a) { a.SugarMethods || (oa(a, "SugarMethods", {}), H(a, !1, !0, { extend: function (b, c, d) { H(a, !1 !== d, c, b) }, sugarRestore: function () { return pa(this, a, arguments, function (a, c, d) { oa(a, c, d.method) }) }, sugarRevert: function () { return pa(this, a, arguments, function (a, c, d) { d.existed ? oa(a, c, d.original) : delete a[c] }) } })) } function H(a, b, c, d) { var e = b ? a.prototype : a; na(a); I(d, function (d, f) { var h = e[d], l = J(e, d); F(c) && h && (f = qa(h, f, c)); !1 === c && h || oa(e, d, f); a.SugarMethods[d] = { method: f, existed: l, original: h, instance: b } }) }
    function K(a, b, c, d, e) { var g = {}; d = z(d) ? d.split(",") : d; d.forEach(function (a, b) { e(g, a, b) }); H(a, b, c, g) } function pa(a, b, c, d) { var e = 0 === c.length, g = L(c), f = !1; I(b.SugarMethods, function (b, c) { if (e || -1 !== g.indexOf(b)) f = !0, d(c.instance ? a.prototype : a, b, c) }); return f } function qa(a, b, c) { return function (d) { return c.apply(this, arguments) ? b.apply(this, arguments) : a.apply(this, arguments) } } function oa(a, b, c) { ea ? m.defineProperty(a, b, { value: c, configurable: !0, enumerable: !1, writable: !0 }) : a[b] = c }
    function L(a, b, c) { var d = []; c = c || 0; var e; for (e = a.length; c < e; c++)d.push(a[c]), b && b.call(a, a[c], c); return d } function sa(a, b, c) { var d = a[c || 0]; A(d) && (a = d, c = 0); L(a, b, c) } function ta(a) { if (!a || !a.call) throw new TypeError("Callback is not callable"); } function M(a) { return void 0 !== a } function N(a) { return void 0 === a } function J(a, b) { return !!a && da.call(a, b) } function G(a) { return !!a && ("object" === typeof a || fa && D(a)) } function ua(a) { var b = typeof a; return null == a || "string" === b || "number" === b || "boolean" === b }
    function va(a, b) { b = b || v.call(a); try { if (a && a.constructor && !J(a, "constructor") && !J(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } return !!a && "[object Object]" === b && "hasOwnProperty" in a } function I(a, b) { for (var c in a) if (J(a, c) && !1 === b.call(a, c, a[c], a)) break } function wa(a, b) { for (var c = 0; c < a; c++)b(c) } function xa(a, b) { I(b, function (c) { a[c] = b[c] }); return a } function ya(a) { ua(a) && (a = m(a)); if (ga && z(a)) for (var b = a, c = 0, d; d = b.charAt(c);)b[c++] = d; return a } function O(a) { xa(this, ya(a)) }
    O.prototype.constructor = m; var P = u.abs, za = u.pow, Aa = u.ceil, Q = u.floor, R = u.round, Ca = u.min, S = u.max; function Da(a, b, c) { var d = za(10, P(b || 0)); c = c || R; 0 > b && (d = 1 / d); return c(a * d) / d } var Ea = 48, Fa = 57, Ga = 65296, Ha = 65305, Ia = ".", Ja = "", Ka = {}, La; function Ma() { return "\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff" } function Na(a, b) { var c = ""; for (a = a.toString(); 0 < b;)if (b & 1 && (c += a), b >>= 1) a += a; return c }
    function Oa(a, b) { var c, d; c = a.replace(La, function (a) { a = Ka[a]; a === Ia && (d = !0); return a }); return d ? parseFloat(c) : parseInt(c, b || 10) } function T(a, b, c, d) { d = P(a).toString(d || 10); d = Na("0", b - d.replace(/\.\d+/, "").length) + d; if (c || 0 > a) d = (0 > a ? "-" : "+") + d; return d } function Pa(a) { if (11 <= a && 13 >= a) return "th"; switch (a % 10) { case 1: return "st"; case 2: return "nd"; case 3: return "rd"; default: return "th" } }
    function Qa(a, b) { function c(a, c) { if (a || -1 < b.indexOf(c)) d += c } var d = ""; b = b || ""; c(a.multiline, "m"); c(a.ignoreCase, "i"); c(a.global, "g"); c(a.u, "y"); return d } function Ra(a) { z(a) || (a = s(a)); return a.replace(/([\\/\'*+?|()\[\]{}.^$])/g, "\\$1") } function U(a, b) { return a["get" + (a._utc ? "UTC" : "") + b]() } function Sa(a, b, c) { return a["set" + (a._utc && "ISOWeek" != b ? "UTC" : "") + b](c) }
    function Ta(a, b) { var c = typeof a, d, e, g, f, h, l, n; if ("string" === c) return a; g = v.call(a); d = va(a, g); e = A(a, g); if (null != a && d || e) { b || (b = []); if (1 < b.length) for (l = b.length; l--;)if (b[l] === a) return "CYC"; b.push(a); d = a.valueOf() + s(a.constructor); f = e ? a : m.keys(a).sort(); l = 0; for (n = f.length; l < n; l++)h = e ? l : f[l], d += h + Ta(a[h], b); b.pop() } else d = -Infinity === 1 / a ? "-0" : s(a && a.valueOf ? a.valueOf() : a); return c + g + d } function Ua(a, b) { return a === b ? 0 !== a || 1 / a === 1 / b : Va(a) && Va(b) ? Ta(a) === Ta(b) : !1 }
    function Va(a) { var b = v.call(a); return ja.test(b) || va(a, b) } function Wa(a, b, c) { var d, e = a.length, g = b.length, f = !1 !== b[g - 1]; if (!(g > (f ? 1 : 2))) return Xa(a, e, b[0], f, c); d = []; L(b, function (b) { if (la(b)) return !1; d.push(Xa(a, e, b, f, c)) }); return d } function Xa(a, b, c, d, e) { d && (c %= b, 0 > c && (c = b + c)); return e ? a.charAt(c) : a[c] } function Ya(a, b) { K(b, !0, !1, a, function (a, b) { a[b + ("equal" === b ? "s" : "")] = function () { return m[b].apply(null, [this].concat(L(arguments))) } }) } na(m); I(w, function (a, b) { na(ba[b]) }); var Za, $a;
    for ($a = 0; 9 >= $a; $a++)Za = s.fromCharCode($a + Ga), Ja += Za, Ka[Za] = s.fromCharCode($a + Ea); Ka[","] = ""; Ka["\uff0e"] = Ia; Ka[Ia] = Ia; La = q("[" + Ja + "\uff0e," + Ia + "]", "g");
    "use strict"; H(m, !1, !1, { keys: function (a) { var b = []; if (!G(a) && !D(a) && !F(a)) throw new TypeError("Object required"); I(a, function (a) { b.push(a) }); return b } });
    function ab(a, b, c, d) { var e = a.length, g = -1 == d, f = g ? e - 1 : 0; c = isNaN(c) ? f : parseInt(c >> 0); 0 > c && (c = e + c); if (!g && 0 > c || g && c >= e) c = f; for (; g && 0 <= c || !g && c < e;) { if (a[c] === b) return c; c += d } return -1 } function bb(a, b, c, d) { var e = a.length, g = 0, f = M(c); ta(b); if (0 != e || f) f || (c = a[d ? e - 1 : g], g++); else throw new TypeError("Reduce called on empty array with no initial value"); for (; g < e;)f = d ? e - g - 1 : g, f in a && (c = b(c, a[f], f, a)), g++; return c } function cb(a) { if (0 === a.length) throw new TypeError("First argument must be defined"); } H(p, !1, !1, { isArray: function (a) { return A(a) } });
    H(p, !0, !1, {
        every: function (a, b) { var c = this.length, d = 0; for (cb(arguments); d < c;) { if (d in this && !a.call(b, this[d], d, this)) return !1; d++ } return !0 }, some: function (a, b) { var c = this.length, d = 0; for (cb(arguments); d < c;) { if (d in this && a.call(b, this[d], d, this)) return !0; d++ } return !1 }, map: function (a, b) { b = arguments[1]; var c = this.length, d = 0, e = Array(c); for (cb(arguments); d < c;)d in this && (e[d] = a.call(b, this[d], d, this)), d++; return e }, filter: function (a) {
            var b = arguments[1], c = this.length, d = 0, e = []; for (cb(arguments); d < c;)d in
                this && a.call(b, this[d], d, this) && e.push(this[d]), d++; return e
        }, indexOf: function (a, b) { return z(this) ? this.indexOf(a, b) : ab(this, a, b, 1) }, lastIndexOf: function (a, b) { return z(this) ? this.lastIndexOf(a, b) : ab(this, a, b, -1) }, forEach: function (a, b) { var c = this.length, d = 0; for (ta(a); d < c;)d in this && a.call(b, this[d], d, this), d++ }, reduce: function (a, b) { return bb(this, a, b) }, reduceRight: function (a, b) { return bb(this, a, b, !0) }
    });
    H(Function, !0, !1, { bind: function (a) { var b = this, c = L(arguments, null, 1), d; if (!F(this)) throw new TypeError("Function.prototype.bind called on a non-function"); d = function () { return b.apply(b.prototype && this instanceof b ? this : a, c.concat(L(arguments))) }; d.prototype = this.prototype; return d } }); H(r, !1, !1, { now: function () { return (new r).getTime() } });
    (function () { var a = Ma().match(/^\s+$/); try { s.prototype.trim.call([1]) } catch (b) { a = !1 } H(s, !0, !a, { trim: function () { return this.toString().trimLeft().trimRight() }, trimLeft: function () { return this.replace(q("^[" + Ma() + "]+"), "") }, trimRight: function () { return this.replace(q("[" + Ma() + "]+$"), "") } }) })();
    (function () { var a = new r(r.UTC(1999, 11, 31)), a = a.toISOString && "1999-12-31T00:00:00.000Z" === a.toISOString(); K(r, !0, !a, "toISOString,toJSON", function (a, c) { a[c] = function () { return T(this.getUTCFullYear(), 4) + "-" + T(this.getUTCMonth() + 1, 2) + "-" + T(this.getUTCDate(), 2) + "T" + T(this.getUTCHours(), 2) + ":" + T(this.getUTCMinutes(), 2) + ":" + T(this.getUTCSeconds(), 2) + "." + T(this.getUTCMilliseconds(), 3) + "Z" } }) })();
    "use strict"; function db(a) { a = q(a); return function (b) { return a.test(b) } }
    function eb(a) { var b = a.getTime(); return function (a) { return !(!a || !a.getTime) && a.getTime() === b } } function fb(a) { return function (b, c, d) { return b === a || a.call(this, b, c, d) } } function gb(a) { return function (b, c, d) { return b === a || a.call(d, c, b, d) } } function hb(a, b) { var c = {}; return function (d, e, g) { var f; if (!G(d)) return !1; for (f in a) if (c[f] = c[f] || ib(a[f], b), !1 === c[f].call(g, d[f], e, g)) return !1; return !0 } } function jb(a) { return function (b) { return b === a || Ua(b, a) } }
    function ib(a, b) { if (!ua(a)) { if (D(a)) return db(a); if (C(a)) return eb(a); if (F(a)) return b ? gb(a) : fb(a); if (va(a)) return hb(a, b) } return jb(a) } function kb(a, b, c, d) { return b ? b.apply ? b.apply(c, d || []) : F(a[b]) ? a[b].call(a) : a[b] : a } function V(a, b, c, d) { var e = +a.length; 0 > c && (c = a.length + c); c = isNaN(c) ? 0 : c; for (!0 === d && (e += c); c < e;) { d = c % a.length; if (!(d in a)) { lb(a, b, c); break } if (!1 === b.call(a, a[d], d, a)) break; c++ } }
    function lb(a, b, c) { var d = [], e; for (e in a) e in a && (e >>> 0 == e && 4294967295 != e) && e >= c && d.push(parseInt(e)); d.sort().each(function (c) { return b.call(a, a[c], c, a) }) } function mb(a, b, c, d, e, g) { var f, h, l; 0 < a.length && (l = ib(b), V(a, function (b, c) { if (l.call(g, b, c, a)) return f = b, h = c, !1 }, c, d)); return e ? h : f } function nb(a, b) { var c = [], d = {}, e; V(a, function (g, f) { e = b ? kb(g, b, a, [g, f, a]) : g; ob(d, e) || c.push(g) }); return c }
    function pb(a, b, c) { var d = [], e = {}; b.each(function (a) { ob(e, a) }); a.each(function (a) { var b = Ta(a), h = !Va(a); if (qb(e, b, a, h) !== c) { var l = 0; if (h) for (b = e[b]; l < b.length;)b[l] === a ? b.splice(l, 1) : l += 1; else delete e[b]; d.push(a) } }); return d } function rb(a, b, c) { b = b || Infinity; c = c || 0; var d = []; V(a, function (a) { A(a) && c < b ? d = d.concat(rb(a, b, c + 1)) : d.push(a) }); return d } function sb(a) { var b = []; L(a, function (a) { b = b.concat(a) }); return b } function qb(a, b, c, d) { var e = b in a; d && (a[b] || (a[b] = []), e = -1 !== a[b].indexOf(c)); return e }
    function ob(a, b) { var c = Ta(b), d = !Va(b), e = qb(a, c, b, d); d ? a[c].push(b) : a[c] = b; return e } function tb(a, b, c, d) { var e, g, f, h = [], l = "max" === c, n = "min" === c, x = p.isArray(a); for (e in a) if (a.hasOwnProperty(e)) { c = a[e]; f = kb(c, b, a, x ? [c, parseInt(e), a] : []); if (N(f)) throw new TypeError("Cannot compare with undefined"); if (f === g) h.push(c); else if (N(g) || l && f > g || n && f < g) h = [c], g = f } x || (h = rb(h, 1)); return d ? h : h[0] }
    function ub(a, b) { var c, d, e, g, f = 0, h = 0; c = p[xb]; d = p[yb]; var l = p[zb], n = p[Ab], x = p[Bb]; a = Cb(a, c, d); b = Cb(b, c, d); do c = a.charAt(f), e = l[c] || c, c = b.charAt(f), g = l[c] || c, c = e ? n.indexOf(e) : null, d = g ? n.indexOf(g) : null, -1 === c || -1 === d ? (c = a.charCodeAt(f) || null, d = b.charCodeAt(f) || null, x && ((c >= Ea && c <= Fa || c >= Ga && c <= Ha) && (d >= Ea && d <= Fa || d >= Ga && d <= Ha)) && (c = Oa(a.slice(f)), d = Oa(b.slice(f)))) : (e = e !== a.charAt(f), g = g !== b.charAt(f), e !== g && 0 === h && (h = e - g)), f += 1; while (null != c && null != d && c === d); return c === d ? h : c - d }
    function Cb(a, b, c) { z(a) || (a = s(a)); c && (a = a.toLowerCase()); b && (a = a.replace(b, "")); return a } var Ab = "AlphanumericSortOrder", xb = "AlphanumericSortIgnore", yb = "AlphanumericSortIgnoreCase", zb = "AlphanumericSortEquivalents", Bb = "AlphanumericSortNatural"; H(p, !1, !0, { create: function () { var a = []; L(arguments, function (b) { if (!ua(b) && "length" in b && ("[object Arguments]" === v.call(b) || b.callee) || !ua(b) && "length" in b && !z(b) && !va(b)) b = p.prototype.slice.call(b, 0); a = a.concat(b) }); return a } });
    H(p, !0, !1, { find: function (a, b) { ta(a); return mb(this, a, 0, !1, !1, b) }, findIndex: function (a, b) { var c; ta(a); c = mb(this, a, 0, !1, !0, b); return N(c) ? -1 : c } });
    H(p, !0, !0, {
        findFrom: function (a, b, c) { return mb(this, a, b, c) }, findIndexFrom: function (a, b, c) { b = mb(this, a, b, c, !0); return N(b) ? -1 : b }, findAll: function (a, b, c) { var d = [], e; 0 < this.length && (e = ib(a), V(this, function (a, b, c) { e(a, b, c) && d.push(a) }, b, c)); return d }, count: function (a) { return N(a) ? this.length : this.findAll(a).length }, removeAt: function (a, b) { if (N(a)) return this; N(b) && (b = a); this.splice(a, b - a + 1); return this }, include: function (a, b) { return this.clone().add(a, b) }, exclude: function () {
            return p.prototype.remove.apply(this.clone(),
                arguments)
        }, clone: function () { return xa([], this) }, unique: function (a) { return nb(this, a) }, flatten: function (a) { return rb(this, a) }, union: function () { return nb(this.concat(sb(arguments))) }, intersect: function () { return pb(this, sb(arguments), !1) }, subtract: function (a) { return pb(this, sb(arguments), !0) }, at: function () { return Wa(this, arguments) }, first: function (a) { if (N(a)) return this[0]; 0 > a && (a = 0); return this.slice(0, a) }, last: function (a) { return N(a) ? this[this.length - 1] : this.slice(0 > this.length - a ? 0 : this.length - a) },
        from: function (a) { return this.slice(a) }, to: function (a) { N(a) && (a = this.length); return this.slice(0, a) }, min: function (a, b) { return tb(this, a, "min", b) }, max: function (a, b) { return tb(this, a, "max", b) }, least: function (a, b) { return tb(this.groupBy.apply(this, [a]), "length", "min", b) }, most: function (a, b) { return tb(this.groupBy.apply(this, [a]), "length", "max", b) }, sum: function (a) { a = a ? this.map(a) : this; return 0 < a.length ? a.reduce(function (a, c) { return a + c }) : 0 }, average: function (a) {
            a = a ? this.map(a) : this; return 0 < a.length ? a.sum() /
                a.length : 0
        }, inGroups: function (a, b) { var c = 1 < arguments.length, d = this, e = [], g = Aa(this.length / a); wa(a, function (a) { a *= g; var h = d.slice(a, a + g); c && h.length < g && wa(g - h.length, function () { h = h.add(b) }); e.push(h) }); return e }, inGroupsOf: function (a, b) { var c = [], d = this.length, e = this, g; if (0 === d || 0 === a) return e; N(a) && (a = 1); N(b) && (b = null); wa(Aa(d / a), function (d) { for (g = e.slice(a * d, a * d + a); g.length < a;)g.push(b); c.push(g) }); return c }, isEmpty: function () { return 0 == this.compact().length }, sortBy: function (a, b) {
            var c = this.clone();
            c.sort(function (d, e) { var g, f; g = kb(d, a, c, [d]); f = kb(e, a, c, [e]); return (z(g) && z(f) ? ub(g, f) : g < f ? -1 : g > f ? 1 : 0) * (b ? -1 : 1) }); return c
        }, randomize: function () { for (var a = this.concat(), b = a.length, c, d; b;)c = u.random() * b | 0, d = a[--b], a[b] = a[c], a[c] = d; return a }, zip: function () { var a = L(arguments); return this.map(function (b, c) { return [b].concat(a.map(function (a) { return c in a ? a[c] : null })) }) }, sample: function (a) { var b = this.randomize(); return 0 < arguments.length ? b.slice(0, a) : b[0] }, each: function (a, b, c) { V(this, a, b, c); return this },
        add: function (a, b) { if (!y(t(b)) || isNaN(b)) b = this.length; p.prototype.splice.apply(this, [b, 0].concat(a)); return this }, remove: function () { var a = this; L(arguments, function (b) { var c = 0; for (b = ib(b); c < a.length;)b(a[c], c, a) ? a.splice(c, 1) : c++ }); return a }, compact: function (a) { var b = []; V(this, function (c) { A(c) ? b.push(c.compact()) : a && c ? b.push(c) : a || (null == c || c.valueOf() !== c.valueOf()) || b.push(c) }); return b }, groupBy: function (a, b) {
            var c = this, d = {}, e; V(c, function (b, f) { e = kb(b, a, c, [b, f, c]); d[e] || (d[e] = []); d[e].push(b) });
            b && I(d, b); return d
        }, none: function () { return !this.any.apply(this, arguments) }
    }); H(p, !0, !0, { all: p.prototype.every, any: p.prototype.some, insert: p.prototype.add }); function Db(a, b) { K(m, !1, !0, a, function (a, d) { a[d] = function (a, c, f) { var h = m.keys(ya(a)), l; b || (l = ib(c, !0)); f = p.prototype[d].call(h, function (d) { var f = a[d]; return b ? kb(f, c, a, [d, f, a]) : l(f, d, a) }, f); A(f) && (f = f.reduce(function (b, c) { b[c] = a[c]; return b }, {})); return f } }); Ya(a, O) }
    H(m, !1, !0, { map: function (a, b) { var c = {}, d, e; for (d in a) J(a, d) && (e = a[d], c[d] = kb(e, b, a, [d, e, a])); return c }, reduce: function (a) { var b = m.keys(ya(a)).map(function (b) { return a[b] }); return b.reduce.apply(b, L(arguments, null, 1)) }, each: function (a, b) { ta(b); I(a, b); return a }, size: function (a) { return m.keys(ya(a)).length } }); var Eb = "any all none count find findAll isEmpty".split(" "), Fb = "sum average min max least most".split(" "), Gb = ["map", "reduce", "size"], Hb = Eb.concat(Fb).concat(Gb);
    (function () { function a() { var a = arguments; return 0 < a.length && !F(a[0]) } var b = p.prototype.map; K(p, !0, a, "every,all,some,filter,any,none,find,findIndex", function (a, b) { var e = p.prototype[b]; a[b] = function (a) { var b = ib(a); return e.call(this, function (a, c) { return b(a, c, this) }) } }); H(p, !0, a, { map: function (a) { return b.call(this, function (b, e) { return kb(b, a, this, [b, e, this]) }) } }) })();
    (function () {
    p[Ab] = "A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function (a) { return a + a.toLowerCase() }).join(""); var a = {}; V("A\u00c1\u00c0\u00c2\u00c3\u00c4 C\u00c7 E\u00c9\u00c8\u00ca\u00cb I\u00cd\u00cc\u0130\u00ce\u00cf O\u00d3\u00d2\u00d4\u00d5\u00d6 S\u00df U\u00da\u00d9\u00db\u00dc".split(" "),
        function (b) { var c = b.charAt(0); V(b.slice(1).split(""), function (b) { a[b] = c; a[b.toLowerCase()] = c.toLowerCase() }) }); p[Bb] = !0; p[yb] = !0; p[zb] = a
    })(); Db(Eb); Db(Fb, !0); Ya(Gb, O); p.AlphanumericSort = ub;
    "use strict";
    var W, Ib, Jb = "ampm hour minute second ampm utc offset_sign offset_hours offset_minutes ampm".split(" "), Kb = "({t})?\\s*(\\d{1,2}(?:[,.]\\d+)?)(?:{h}([0-5]\\d(?:[,.]\\d+)?)?{m}(?::?([0-5]\\d(?:[,.]\\d+)?){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))", Lb = {}, Mb, Nb, Ob, Pb = [], Qb = {}, X = {
        yyyy: function (a) { return U(a, "FullYear") }, yy: function (a) { return U(a, "FullYear") % 100 }, ord: function (a) { a = U(a, "Date"); return a + Pa(a) }, tz: function (a) { return a.getUTCOffset() }, isotz: function (a) { return a.getUTCOffset(!0) },
        Z: function (a) { return a.getUTCOffset() }, ZZ: function (a) { return a.getUTCOffset().replace(/(\d{2})$/, ":$1") }
    }, Rb = [{ name: "year", method: "FullYear", k: !0, b: function (a) { return 864E5 * (365 + (a ? a.isLeapYear() ? 1 : 0 : 0.25)) } }, { name: "month", error: 0.919, method: "Month", k: !0, b: function (a, b) { var c = 30.4375, d; a && (d = a.daysInMonth(), b <= d.days() && (c = d)); return 864E5 * c } }, { name: "week", method: "ISOWeek", b: aa(6048E5) }, { name: "day", error: 0.958, method: "Date", k: !0, b: aa(864E5) }, { name: "hour", method: "Hours", b: aa(36E5) }, {
        name: "minute",
        method: "Minutes", b: aa(6E4)
    }, { name: "second", method: "Seconds", b: aa(1E3) }, { name: "millisecond", method: "Milliseconds", b: aa(1) }], Sb = {}; function Tb(a) { xa(this, a); this.g = Pb.concat() }
    Tb.prototype = {
        getMonth: function (a) { return y(a) ? a - 1 : this.months.indexOf(a) % 12 }, getWeekday: function (a) { return this.weekdays.indexOf(a) % 7 }, addFormat: function (a, b, c, d, e) {
            var g = c || [], f = this, h; a = a.replace(/\s+/g, "[,. ]*"); a = a.replace(/\{([^,]+?)\}/g, function (a, b) {
                var d, e, h, B = b.match(/\?$/); h = b.match(/^(\d+)\??$/); var k = b.match(/(\d)(?:-(\d))?/), E = b.replace(/[^a-z]+$/, ""); h ? d = f.tokens[h[1]] : f[E] ? d = f[E] : f[E + "s"] && (d = f[E + "s"], k && (e = [], d.forEach(function (a, b) {
                    var c = b % (f.units ? 8 : d.length); c >= k[1] && c <= (k[2] ||
                        k[1]) && e.push(a)
                }), d = e), d = Ub(d)); h ? h = "(?:" + d + ")" : (c || g.push(E), h = "(" + d + ")"); B && (h += "?"); return h
            }); b ? (b = Vb(f, e), e = ["t", "[\\s\\u3000]"].concat(f.timeMarker), h = a.match(/\\d\{\d,\d\}\)+\??$/), Wb(f, "(?:" + b + ")[,\\s\\u3000]+?" + a, Jb.concat(g), d), Wb(f, a + "(?:[,\\s]*(?:" + e.join("|") + (h ? "+" : "*") + ")" + b + ")?", g.concat(Jb), d)) : Wb(f, a, g, d)
        }
    };
    function Xb(a, b, c) { var d, e, g = b[0], f = b[1], h = b[2]; b = a[c] || a.relative; if (F(b)) return b.call(a, g, f, h, c); e = a.units[8 * (a.plural && 1 < g ? 1 : 0) + f] || a.units[f]; a.capitalizeUnit && (e = Yb(e)); d = a.modifiers.filter(function (a) { return "sign" == a.name && a.value == (0 < h ? 1 : -1) })[0]; return b.replace(/\{(.*?)\}/g, function (a, b) { switch (b) { case "num": return g; case "unit": return e; case "sign": return d.src } }) } function Zb(a, b) { b = b || a.code; return "en" === b || "en-US" === b ? !0 : a.variant }
    function $b(a, b) { return b.replace(q(a.num, "g"), function (b) { return ac(a, b) || "" }) } function ac(a, b) { var c; return y(b) ? b : b && -1 !== (c = a.numbers.indexOf(b)) ? (c + 1) % 10 : 1 } function Y(a, b) { var c; z(a) || (a = ""); c = Sb[a] || Sb[a.slice(0, 2)]; if (!1 === b && !c) throw new TypeError("Invalid locale."); return c || Ib }
    function bc(a, b) {
        function c(a) { var b = h[a]; z(b) ? h[a] = b.split(",") : b || (h[a] = []) } function d(a, b) { a = a.split("+").map(function (a) { return a.replace(/(.+):(.+)$/, function (a, b, c) { return c.split("|").map(function (a) { return b + a }).join("|") }) }).join("|"); a.split("|").forEach(b) } function e(a, b, c) { var e = []; h[a].forEach(function (a, f) { b && (a += "+" + a.slice(0, 3)); d(a, function (a, b) { e[b * c + f] = a.toLowerCase() }) }); h[a] = e } function g(a, b, c) { a = "\\d{" + a + "," + b + "}"; c && (a += "|(?:" + Ub(h.numbers) + ")+"); return a } function f(a, b) {
        h[a] =
            h[a] || b
        } var h, l; h = new Tb(b); c("modifiers"); "months weekdays units numbers articles tokens timeMarker ampm timeSuffixes dateParse timeParse".split(" ").forEach(c); l = !h.monthSuffix; e("months", l, 12); e("weekdays", l, 7); e("units", !1, 8); e("numbers", !1, 10); f("code", a); f("date", g(1, 2, h.digitDate)); f("year", "'\\d{2}|" + g(4, 4)); f("num", function () { var a = ["-?\\d+"].concat(h.articles); h.numbers && (a = a.concat(h.numbers)); return Ub(a) }()); (function () {
            var a = []; h.i = {}; h.modifiers.push({ name: "day", src: "yesterday", value: -1 });
            h.modifiers.push({ name: "day", src: "today", value: 0 }); h.modifiers.push({ name: "day", src: "tomorrow", value: 1 }); h.modifiers.forEach(function (b) { var c = b.name; d(b.src, function (d) { var e = h[c]; h.i[d] = b; a.push({ name: c, src: d, value: b.value }); h[c] = e ? e + "|" + d : d }) }); h.day += "|" + Ub(h.weekdays); h.modifiers = a
        })(); h.monthSuffix && (h.month = g(1, 2), h.months = "1 2 3 4 5 6 7 8 9 10 11 12".split(" ").map(function (a) { return a + h.monthSuffix })); h.full_month = g(1, 2) + "|" + Ub(h.months); 0 < h.timeSuffixes.length && h.addFormat(Vb(h), !1, Jb);
        h.addFormat("{day}", !0); h.addFormat("{month}" + (h.monthSuffix || "")); h.addFormat("{year}" + (h.yearSuffix || "")); h.timeParse.forEach(function (a) { h.addFormat(a, !0) }); h.dateParse.forEach(function (a) { h.addFormat(a) }); return Sb[a] = h
    } function Wb(a, b, c, d) { a.g.unshift({ r: d, locale: a, q: q("^" + b + "$", "i"), to: c }) } function Yb(a) { return a.slice(0, 1).toUpperCase() + a.slice(1) } function Ub(a) { return a.filter(function (a) { return !!a }).join("|") } function cc() { var a = r.SugarNewDate; return a ? a() : new r }
    function dc(a, b) { var c; if (G(a[0])) return a; if (y(a[0]) && !y(a[1])) return [a[0]]; if (z(a[0]) && b) return [ec(a[0]), a[1]]; c = {}; Nb.forEach(function (b, e) { c[b.name] = a[e] }); return [c] } function ec(a) { var b, c = {}; if (a = a.match(/^(\d+)?\s?(\w+?)s?$/i)) N(b) && (b = parseInt(a[1]) || 1), c[a[2].toLowerCase()] = b; return c } function fc(a, b, c) { var d; N(c) && (c = Ob.length); for (b = b || 0; b < c && (d = Ob[b], !1 !== a(d.name, d, b)); b++); }
    function gc(a, b) { var c = {}, d, e; b.forEach(function (b, f) { d = a[f + 1]; N(d) || "" === d || ("year" === b && (c.t = d.replace(/'/, "")), e = parseFloat(d.replace(/'/, "").replace(/,/, ".")), c[b] = isNaN(e) ? d.toLowerCase() : e) }); return c } function hc(a) { a = a.trim().replace(/^just (?=now)|\.+$/i, ""); return ic(a) }
    function ic(a) { return a.replace(Mb, function (a, c, d) { var e = 0, g = 1, f, h; if (c) return a; d.split("").reverse().forEach(function (a) { a = Lb[a]; var b = 9 < a; b ? (f && (e += g), g *= a / (h || 1), h = a) : (!1 === f && (g *= 10), e += g * a); f = b }); f && (e += g); return e }) }
    function jc(a, b, c, d) {
        function e(a) { vb.push(a) } function g() { vb.forEach(function (a) { a.call() }) } function f() { var a = n.getWeekday(); n.setWeekday(7 * (k.num - 1) + (a > Ba ? Ba + 7 : Ba)) } function h() { var a = B.i[k.edge]; fc(function (a) { if (M(k[a])) return E = a, !1 }, 4); if ("year" === E) k.e = "month"; else if ("month" === E || "week" === E) k.e = "day"; n[(0 > a.value ? "endOf" : "beginningOf") + Yb(E)](); -2 === a.value && n.reset() } function l() {
            var a; fc(function (b, c, d) {
            "day" === b && (b = "date"); if (M(k[b])) {
                if (d >= wb) return n.setTime(NaN), !1; a = a || {}; a[b] = k[b];
                delete k[b]
            }
            }); a && e(function () { n.set(a, !0) })
        } var n, x, ha, vb, B, k, E, wb, Ba, ra, ca; n = cc(); vb = []; n.utc(d); C(a) ? n.utc(a.isUTC()).setTime(a.getTime()) : y(a) ? n.setTime(a) : G(a) ? (n.set(a, !0), k = a) : z(a) && (ha = Y(b), a = hc(a), ha && I(ha.o ? [ha.o].concat(ha.g) : ha.g, function (c, d) {
            var g = a.match(d.q); if (g) {
                B = d.locale; k = gc(g, d.to); B.o = d; k.utc && n.utc(); if (k.timestamp) return k = k.timestamp, !1; d.r && (!z(k.month) && (z(k.date) || Zb(ha, b))) && (ca = k.month, k.month = k.date, k.date = ca); k.year && 2 === k.t.length && (k.year = 100 * R(U(cc(), "FullYear") /
                    100) - 100 * R(k.year / 100) + k.year); k.month && (k.month = B.getMonth(k.month), k.shift && !k.unit && (k.unit = B.units[7])); k.weekday && k.date ? delete k.weekday : k.weekday && (k.weekday = B.getWeekday(k.weekday), k.shift && !k.unit && (k.unit = B.units[5])); k.day && (ca = B.i[k.day]) ? (k.day = ca.value, n.reset(), x = !0) : k.day && -1 < (Ba = B.getWeekday(k.day)) && (delete k.day, k.num && k.month ? (e(f), k.day = 1) : k.weekday = Ba); k.date && !y(k.date) && (k.date = $b(B, k.date)); k.ampm && k.ampm === B.ampm[1] && 12 > k.hour ? k.hour += 12 : k.ampm === B.ampm[0] && 12 === k.hour &&
                        (k.hour = 0); if ("offset_hours" in k || "offset_minutes" in k) n.utc(), k.offset_minutes = k.offset_minutes || 0, k.offset_minutes += 60 * k.offset_hours, "-" === k.offset_sign && (k.offset_minutes *= -1), k.minute -= k.offset_minutes; k.unit && (x = !0, ra = ac(B, k.num), wb = B.units.indexOf(k.unit) % 8, E = W.units[wb], l(), k.shift && (ra *= (ca = B.i[k.shift]) ? ca.value : 0), k.sign && (ca = B.i[k.sign]) && (ra *= ca.value), M(k.weekday) && (n.set({ weekday: k.weekday }, !0), delete k.weekday), k[E] = (k[E] || 0) + ra); k.edge && e(h); "-" === k.year_sign && (k.year *= -1); fc(function (a,
                            b, c) { b = k[a]; var d = b % 1; d && (k[Ob[c - 1].name] = R(d * ("second" === a ? 1E3 : 60)), k[a] = Q(b)) }, 1, 4); return !1
            }
        }), k ? x ? n.advance(k) : (n._utc && n.reset(), kc(n, k, !0, !1, c)) : ("now" !== a && (n = new r(a)), d && n.addMinutes(-n.getTimezoneOffset())), g(), n.utc(!1)); return { c: n, set: k }
    } function lc(a) { var b, c = P(a), d = c, e = 0; fc(function (a, f, h) { b = Q(Da(c / f.b(), 1)); 1 <= b && (d = b, e = h) }, 1); return [d, e, a] }
    function mc(a) { var b = lc(a.millisecondsFromNow()); if (6 === b[1] || 5 === b[1] && 4 === b[0] && a.daysFromNow() >= cc().daysInMonth()) b[0] = P(a.monthsFromNow()), b[1] = 6; return b } function nc(a, b, c) { function d(a, c) { var d = U(a, "Month"); return Y(c).months[d + 12 * b] } Z(a, d, c); Z(Yb(a), d, c, 1) } function Z(a, b, c, d) { X[a] = function (a, g) { var f = b(a, g); c && (f = f.slice(0, c)); d && (f = f.slice(0, d).toUpperCase() + f.slice(d)); return f } }
    function oc(a, b, c) { X[a] = b; X[a + a] = function (a, c) { return T(b(a, c), 2) }; c && (X[a + a + a] = function (a, c) { return T(b(a, c), 3) }, X[a + a + a + a] = function (a, c) { return T(b(a, c), 4) }) } function pc(a) { var b = a.match(/(\{\w+\})|[^{}]+/g); Qb[a] = b.map(function (a) { a.replace(/\{(\w+)\}/, function (b, e) { a = X[e] || e; return e }); return a }) }
    function qc(a, b, c, d) { var e; if (!a.isValid()) return "Invalid Date"; Date[b] ? b = Date[b] : F(b) && (e = mc(a), b = b.apply(a, e.concat(Y(d)))); if (!b && c) return e = e || mc(a), 0 === e[1] && (e[1] = 1, e[0] = 1), a = Y(d), Xb(a, e, 0 < e[2] ? "future" : "past"); b = b || "long"; if ("short" === b || "long" === b || "full" === b) b = Y(d)[b]; Qb[b] || pc(b); var g, f; e = ""; b = Qb[b]; g = 0; for (c = b.length; g < c; g++)f = b[g], e += F(f) ? f(a, d) : f; return e }
    function rc(a, b, c, d, e) { var g, f, h, l = 0, n = 0, x = 0; g = jc(b, c, null, e); 0 < d && (n = x = d, f = !0); if (!g.c.isValid()) return !1; if (g.set && g.set.e) { Rb.forEach(function (b) { b.name === g.set.e && (l = b.b(g.c, a - g.c) - 1) }); b = Yb(g.set.e); if (g.set.edge || g.set.shift) g.c["beginningOf" + b](); "month" === g.set.e && (h = g.c.clone()["endOf" + b]().getTime()); !f && (g.set.sign && "millisecond" != g.set.e) && (n = 50, x = -50) } f = a.getTime(); b = g.c.getTime(); h = sc(a, b, h || b + l); return f >= b - n && f <= h + x }
    function sc(a, b, c) { b = new r(b); a = (new r(c)).utc(a.isUTC()); 23 !== U(a, "Hours") && (b = b.getTimezoneOffset(), a = a.getTimezoneOffset(), b !== a && (c += (a - b).minutes())); return c }
    function kc(a, b, c, d, e) {
        function g(a) { return M(b[a]) ? b[a] : b[a + "s"] } function f(a) { return M(g(a)) } var h; if (y(b) && d) b = { milliseconds: b }; else if (y(b)) return a.setTime(b), a; M(b.date) && (b.day = b.date); fc(function (d, e, g) { var l = "day" === d; if (f(d) || l && f("weekday")) return b.e = d, h = +g, !1; !c || ("week" === d || l && f("week")) || Sa(a, e.method, l ? 1 : 0) }); Rb.forEach(function (c) {
            var e = c.name; c = c.method; var h; h = g(e); N(h) || (d ? ("week" === e && (h = (b.day || 0) + 7 * h, c = "Date"), h = h * d + U(a, c)) : "month" === e && f("day") && Sa(a, "Date", 15), Sa(a, c, h),
                d && "month" === e && (e = h, 0 > e && (e = e % 12 + 12), e % 12 != U(a, "Month") && Sa(a, "Date", 0)))
        }); d || (f("day") || !f("weekday")) || a.setWeekday(g("weekday")); var l; a: { switch (e) { case -1: l = a > cc(); break a; case 1: l = a < cc(); break a }l = void 0 } l && fc(function (b, c) { if ((c.k || "week" === b && f("weekday")) && !(f(b) || "day" === b && f("weekday"))) return a[c.j](e), !1 }, h + 1); return a
    }
    function Vb(a, b) { var c = Kb, d = { h: 0, m: 1, s: 2 }, e; a = a || W; return c.replace(/{([a-z])}/g, function (c, f) { var h = [], l = "h" === f, n = l && !b; if ("t" === f) return a.ampm.join("|"); l && h.push(":"); (e = a.timeSuffixes[d[f]]) && h.push(e + "\\s*"); return 0 === h.length ? "" : "(?:" + h.join("|") + ")" + (n ? "" : "?") }) } function tc(a, b, c) { var d, e; y(a[1]) ? d = dc(a)[0] : (d = a[0], e = a[1]); return jc(d, e, b, c).c }
    H(r, !1, !0, { create: function () { return tc(arguments) }, past: function () { return tc(arguments, -1) }, future: function () { return tc(arguments, 1) }, addLocale: function (a, b) { return bc(a, b) }, setLocale: function (a) { var b = Y(a, !1); Ib = b; a && a != b.code && (b.code = a); return b }, getLocale: function (a) { return a ? Y(a, !1) : Ib }, addFormat: function (a, b, c) { Wb(Y(c), a, b) } });
    H(r, !0, !0, {
        set: function () { var a = dc(arguments); return kc(this, a[0], a[1]) }, setWeekday: function (a) { if (!N(a)) return Sa(this, "Date", U(this, "Date") + a - U(this, "Day")) }, setISOWeek: function (a) { var b = U(this, "Day") || 7; if (!N(a)) return this.set({ month: 0, date: 4 }), this.set({ weekday: 1 }), 1 < a && this.addWeeks(a - 1), 1 !== b && this.advance({ days: b - 1 }), this.getTime() }, getISOWeek: function () { var a; a = this.clone(); var b = U(a, "Day") || 7; a.addDays(4 - b).reset(); return 1 + Q(a.daysSince(a.clone().beginningOfYear()) / 7) }, beginningOfISOWeek: function () {
            var a =
                this.getDay(); 0 === a ? a = -6 : 1 !== a && (a = 1); this.setWeekday(a); return this.reset()
        }, endOfISOWeek: function () { 0 !== this.getDay() && this.setWeekday(7); return this.endOfDay() }, getUTCOffset: function (a) { var b = this._utc ? 0 : this.getTimezoneOffset(), c = !0 === a ? ":" : ""; return !b && a ? "Z" : T(Q(-b / 60), 2, !0) + c + T(P(b % 60), 2) }, utc: function (a) { oa(this, "_utc", !0 === a || 0 === arguments.length); return this }, isUTC: function () { return !!this._utc || 0 === this.getTimezoneOffset() }, advance: function () {
            var a = dc(arguments, !0); return kc(this, a[0], a[1],
                1)
        }, rewind: function () { var a = dc(arguments, !0); return kc(this, a[0], a[1], -1) }, isValid: function () { return !isNaN(this.getTime()) }, isAfter: function (a, b) { return this.getTime() > r.create(a).getTime() - (b || 0) }, isBefore: function (a, b) { return this.getTime() < r.create(a).getTime() + (b || 0) }, isBetween: function (a, b, c) { var d = this.getTime(); a = r.create(a).getTime(); var e = r.create(b).getTime(); b = Ca(a, e); a = S(a, e); c = c || 0; return b - c < d && a + c > d }, isLeapYear: function () { var a = U(this, "FullYear"); return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400 },
        daysInMonth: function () { return 32 - U(new r(U(this, "FullYear"), U(this, "Month"), 32), "Date") }, format: function (a, b) { return qc(this, a, !1, b) }, relative: function (a, b) { z(a) && (b = a, a = null); return qc(this, a, !0, b) }, is: function (a, b, c) {
            var d, e; if (this.isValid()) {
                if (z(a)) switch (a = a.trim().toLowerCase(), e = this.clone().utc(c), !0) {
                    case "future" === a: return this.getTime() > cc().getTime(); case "past" === a: return this.getTime() < cc().getTime(); case "weekday" === a: return 0 < U(e, "Day") && 6 > U(e, "Day"); case "weekend" === a: return 0 ===
                        U(e, "Day") || 6 === U(e, "Day"); case -1 < (d = W.weekdays.indexOf(a) % 7): return U(e, "Day") === d; case -1 < (d = W.months.indexOf(a) % 12): return U(e, "Month") === d
                }return rc(this, a, null, b, c)
            }
        }, reset: function (a) { var b = {}, c; a = a || "hours"; "date" === a && (a = "days"); c = Rb.some(function (b) { return a === b.name || a === b.name + "s" }); b[a] = a.match(/^days?/) ? 1 : 0; return c ? this.set(b, !0) : this }, clone: function () { var a = new r(this.getTime()); a.utc(!!this._utc); return a }
    });
    H(r, !0, !0, { iso: function () { return this.toISOString() }, getWeekday: r.prototype.getDay, getUTCWeekday: r.prototype.getUTCDay }); function uc(a, b) { function c() { return R(this * b) } function d() { return tc(arguments)[a.j](this) } function e() { return tc(arguments)[a.j](-this) } var g = a.name, f = {}; f[g] = c; f[g + "s"] = c; f[g + "Before"] = e; f[g + "sBefore"] = e; f[g + "Ago"] = e; f[g + "sAgo"] = e; f[g + "After"] = d; f[g + "sAfter"] = d; f[g + "FromNow"] = d; f[g + "sFromNow"] = d; t.extend(f) } H(t, !0, !0, { duration: function (a) { a = Y(a); return Xb(a, lc(this), "duration") } });
    W = Ib = r.addLocale("en", {
        plural: !0, timeMarker: "at", ampm: "am,pm", months: "January,February,March,April,May,June,July,August,September,October,November,December", weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday", units: "millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s", numbers: "one,two,three,four,five,six,seven,eight,nine,ten", articles: "a,an,the", tokens: "the,st|nd|rd|th,of", "short": "{Month} {d}, {yyyy}", "long": "{Month} {d}, {yyyy} {h}:{mm}{tt}", full: "{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",
        past: "{num} {unit} {sign}", future: "{num} {unit} {sign}", duration: "{num} {unit}", modifiers: [{ name: "sign", src: "ago|before", value: -1 }, { name: "sign", src: "from now|after|from|in|later", value: 1 }, { name: "edge", src: "last day", value: -2 }, { name: "edge", src: "end", value: -1 }, { name: "edge", src: "first day|beginning", value: 1 }, { name: "shift", src: "last", value: -1 }, { name: "shift", src: "the|this", value: 0 }, { name: "shift", src: "next", value: 1 }], dateParse: ["{month} {year}", "{shift} {unit=5-7}", "{0?} {date}{1}", "{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],
        timeParse: "{num} {unit} {sign};{sign} {num} {unit};{0} {num}{1} {day} of {month} {year?};{weekday?} {month} {date}{1?} {year?};{date} {month} {year};{date} {month};{shift} {weekday};{shift} week {weekday};{weekday} {2?} {shift} week;{num} {unit=4-5} {sign} {day};{0?} {date}{1} of {month};{0?}{month?} {date?}{1?} of {shift} {unit=6-7}".split(";")
    }); Ob = Rb.concat().reverse(); Nb = Rb.concat(); Nb.splice(2, 1);
    K(r, !0, !0, Rb, function (a, b, c) {
        function d(a) { a /= f; var c = a % 1, d = b.error || 0.999; c && P(c % 1) > d && (a = R(a)); return 0 > a ? Aa(a) : Q(a) } var e = b.name, g = Yb(e), f = b.b(), h, l; b.j = "add" + g + "s"; h = function (a, b) { return d(this.getTime() - r.create(a, b).getTime()) }; l = function (a, b) { return d(r.create(a, b).getTime() - this.getTime()) }; a[e + "sAgo"] = l; a[e + "sUntil"] = l; a[e + "sSince"] = h; a[e + "sFromNow"] = h; a[b.j] = function (a, b) { var c = {}; c[e] = a; return this.advance(c, b) }; uc(b, f); 3 > c && ["Last", "This", "Next"].forEach(function (b) {
        a["is" + b + g] = function () {
            return rc(this,
                b + " " + e, "en")
        }
        }); 4 > c && (a["beginningOf" + g] = function () { var a = {}; switch (e) { case "year": a.year = U(this, "FullYear"); break; case "month": a.month = U(this, "Month"); break; case "day": a.day = U(this, "Date"); break; case "week": a.weekday = 0 }return this.set(a, !0) }, a["endOf" + g] = function () { var a = { hours: 23, minutes: 59, seconds: 59, milliseconds: 999 }; switch (e) { case "year": a.month = 11; a.day = 31; break; case "month": a.day = this.daysInMonth(); break; case "week": a.weekday = 6 }return this.set(a, !0) })
    });
    W.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?", !0, ["year_sign", "year", "month", "date"], !1, !0); W.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?", !0, ["date", "month", "year"], !0); W.addFormat("{full_month}[-.](\\d{4,4})", !1, ["month", "year"]); W.addFormat("\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/", !1, ["timestamp"]); W.addFormat(Vb(W), !1, Jb); Pb = W.g.slice(0, 7).reverse(); W.g = W.g.slice(7).concat(Pb); oc("f", function (a) { return U(a, "Milliseconds") }, !0);
    oc("s", function (a) { return U(a, "Seconds") }); oc("m", function (a) { return U(a, "Minutes") }); oc("h", function (a) { return U(a, "Hours") % 12 || 12 }); oc("H", function (a) { return U(a, "Hours") }); oc("d", function (a) { return U(a, "Date") }); oc("M", function (a) { return U(a, "Month") + 1 }); (function () { function a(a, c) { var d = U(a, "Hours"); return Y(c).ampm[Q(d / 12)] || "" } Z("t", a, 1); Z("tt", a); Z("T", a, 1, 1); Z("TT", a, null, 2) })();
    (function () { function a(a, c) { var d = U(a, "Day"); return Y(c).weekdays[d] } Z("dow", a, 3); Z("Dow", a, 3, 1); Z("weekday", a); Z("Weekday", a, null, 1) })(); nc("mon", 0, 3); nc("month", 0); nc("month2", 1); nc("month3", 2); X.ms = X.f; X.milliseconds = X.f; X.seconds = X.s; X.minutes = X.m; X.hours = X.h; X["24hr"] = X.H; X["12hr"] = X.h; X.date = X.d; X.day = X.d; X.year = X.yyyy; K(r, !0, !0, "short,long,full", function (a, b) { a[b] = function (a) { return qc(this, b, !1, a) } });
    "\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07".split("").forEach(function (a, b) { 9 < b && (b = za(10, b - 9)); Lb[a] = b }); xa(Lb, Ka); Mb = q("([\u671f\u9031\u5468])?([\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07" + Ja + "]+)(?!\u6628)", "g");
    (function () { var a = W.weekdays.slice(0, 7), b = W.months.slice(0, 12); K(r, !0, !0, "today yesterday tomorrow weekday weekend future past".split(" ").concat(a).concat(b), function (a, b) { a["is" + Yb(b)] = function (a) { return this.is(b, 0, a) } }) })(); r.utc || (r.utc = { create: function () { return tc(arguments, 0, !0) }, past: function () { return tc(arguments, -1, !0) }, future: function () { return tc(arguments, 1, !0) } });
    H(r, !1, !0, { RFC1123: "{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}", RFC1036: "{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}", ISO8601_DATE: "{yyyy}-{MM}-{dd}", ISO8601_DATETIME: "{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}" });
    "use strict"; function Range(a, b) { this.start = vc(a); this.end = vc(b) } function vc(a) { return C(a) ? new r(a.getTime()) : null == a ? a : C(a) ? a.getTime() : a.valueOf() } function wc(a) { a = null == a ? a : C(a) ? a.getTime() : a.valueOf(); return !!a || 0 === a }
    function xc(a, b) { var c, d, e, g; if (y(b)) return new r(a.getTime() + b); c = b[0]; d = b[1]; e = U(a, d); g = new r(a.getTime()); Sa(g, d, e + c); return g } function yc(a, b) { return s.fromCharCode(a.charCodeAt(0) + b) } function zc(a, b) { return a + b } Range.prototype.toString = function () { return this.isValid() ? this.start + ".." + this.end : "Invalid Range" };
    H(Range, !0, !0, {
        isValid: function () { return wc(this.start) && wc(this.end) && typeof this.start === typeof this.end }, span: function () { return this.isValid() ? P((z(this.end) ? this.end.charCodeAt(0) : this.end) - (z(this.start) ? this.start.charCodeAt(0) : this.start)) + 1 : NaN }, contains: function (a) { return null == a ? !1 : a.start && a.end ? a.start >= this.start && a.start <= this.end && a.end >= this.start && a.end <= this.end : a >= this.start && a <= this.end }, every: function (a, b) {
            var c, d = this.start, e = this.end, g = e < d, f = d, h = 0, l = []; F(a) && (b = a, a = null); a =
                a || 1; y(d) ? c = zc : z(d) ? c = yc : C(d) && (c = a, y(c) ? a = c : (d = c.toLowerCase().match(/^(\d+)?\s?(\w+?)s?$/i), c = parseInt(d[1]) || 1, d = d[2].slice(0, 1).toUpperCase() + d[2].slice(1), d.match(/hour|minute|second/i) ? d += "s" : "Year" === d ? d = "FullYear" : "Day" === d && (d = "Date"), a = [c, d]), c = xc); for (g && 0 < a && (a *= -1); g ? f >= e : f <= e;)l.push(f), b && b(f, h), f = c(f, a), h++; return l
        }, union: function (a) { return new Range(this.start < a.start ? this.start : a.start, this.end > a.end ? this.end : a.end) }, intersect: function (a) {
            return a.start > this.end || a.end < this.start ?
                new Range(NaN, NaN) : new Range(this.start > a.start ? this.start : a.start, this.end < a.end ? this.end : a.end)
        }, clone: function () { return new Range(this.start, this.end) }, clamp: function (a) { var b = this.start, c = this.end, d = c < b ? c : b, b = b > c ? b : c; return vc(a < d ? d : a > b ? b : a) }
    });[t, s, r].forEach(function (a) { H(a, !1, !0, { range: function (b, c) { a.create && (b = a.create(b), c = a.create(c)); return new Range(b, c) } }) });
    H(t, !0, !0, { upto: function (a, b, c) { return t.range(this, a).every(c, b) }, clamp: function (a, b) { return (new Range(a, b)).clamp(this) }, cap: function (a) { return this.clamp(void 0, a) } }); H(t, !0, !0, { downto: t.prototype.upto }); H(p, !1, function (a) { return a instanceof Range }, { create: function (a) { return a.every() } });
    "use strict"; function Ac(a, b, c, d, e) { Infinity !== b && (a.timers || (a.timers = []), y(b) || (b = 1), a.n = !1, a.timers.push(setTimeout(function () { a.n || c.apply(d, e || []) }, b))) }
    H(Function, !0, !0, {
        lazy: function (a, b, c) { function d() { g.length < c - (f && b ? 1 : 0) && g.push([this, arguments]); f || (f = !0, b ? h() : Ac(d, l, h)); return x } var e = this, g = [], f = !1, h, l, n, x; a = a || 1; c = c || Infinity; l = Aa(a); n = R(l / a) || 1; h = function () { var a = g.length, b; if (0 != a) { for (b = S(a - n, 0); a > b;)x = Function.prototype.apply.apply(e, g.shift()), a--; Ac(d, l, function () { f = !1; h() }) } }; return d }, throttle: function (a) { return this.lazy(a, !0, 1) }, debounce: function (a) { function b() { b.cancel(); Ac(b, a, c, this, arguments) } var c = this; return b }, delay: function (a) {
            var b =
                L(arguments, null, 1); Ac(this, a, this, this, b); return this
        }, every: function (a) { function b() { c.apply(c, d); Ac(c, a, b) } var c = this, d = arguments, d = 1 < d.length ? L(d, null, 1) : []; Ac(c, a, b); return c }, cancel: function () { var a = this.timers, b; if (A(a)) for (; b = a.shift();)clearTimeout(b); this.n = !0; return this }, after: function (a) { var b = this, c = 0, d = []; if (!y(a)) a = 1; else if (0 === a) return b.call(), b; return function () { var e; d.push(L(arguments)); c++; if (c == a) return e = b.call(this, d), c = 0, d = [], e } }, once: function () {
            return this.throttle(Infinity,
                !0)
        }, fill: function () { var a = this, b = L(arguments); return function () { var c = L(arguments); b.forEach(function (a, b) { (null != a || b >= c.length) && c.splice(b, 0, a) }); return a.apply(this, c) } }
    });
    "use strict"; function Bc(a, b, c, d, e, g) { var f = a.toFixed(20), h = f.search(/\./), f = f.search(/[1-9]/), h = h - f; 0 < h && (h -= 1); e = S(Ca(Q(h / 3), !1 === e ? c.length : e), -d); d = c.charAt(e + d - 1); -9 > h && (e = -3, b = P(h) - 9, d = c.slice(0, 1)); c = g ? za(2, 10 * e) : za(10, 3 * e); return Da(a / c, b || 0).format() + d.trim() }
    H(t, !1, !0, { random: function (a, b) { var c, d; 1 == arguments.length && (b = a, a = 0); c = Ca(a || 0, N(b) ? 1 : b); d = S(a || 0, N(b) ? 1 : b) + 1; return Q(u.random() * (d - c) + c) } });
    H(t, !0, !0, {
        log: function (a) { return u.log(this) / (a ? u.log(a) : 1) }, abbr: function (a) { return Bc(this, a, "kmbt", 0, 4) }, metric: function (a, b) { return Bc(this, a, "n\u03bcm kMGTPE", 4, N(b) ? 1 : b) }, bytes: function (a, b) { return Bc(this, a, "kMGTPE", 0, N(b) ? 4 : b, !0) + "B" }, isInteger: function () { return 0 == this % 1 }, isOdd: function () { return !isNaN(this) && !this.isMultipleOf(2) }, isEven: function () { return this.isMultipleOf(2) }, isMultipleOf: function (a) { return 0 === this % a }, format: function (a, b, c) {
            var d, e, g, f = ""; N(b) && (b = ","); N(c) && (c = "."); d =
                (y(a) ? Da(this, a || 0).toFixed(S(a, 0)) : this.toString()).replace(/^-/, "").split("."); e = d[0]; g = d[1]; for (d = e.length; 0 < d; d -= 3)d < e.length && (f = b + f), f = e.slice(S(0, d - 3), d) + f; g && (f += c + Na("0", (a || 0) - g.length) + g); return (0 > this ? "-" : "") + f
        }, hex: function (a) { return this.pad(a || 1, !1, 16) }, times: function (a) { if (a) for (var b = 0; b < this; b++)a.call(this, b); return this.toNumber() }, chr: function () { return s.fromCharCode(this) }, pad: function (a, b, c) { return T(this, a, b, c) }, ordinalize: function () {
            var a = P(this), a = parseInt(a.toString().slice(-2));
            return this + Pa(a)
        }, toNumber: function () { return parseFloat(this, 10) }
    }); (function () { function a(a) { return function (c) { return c ? Da(this, c, a) : a(this) } } H(t, !0, !0, { ceil: a(Aa), round: a(R), floor: a(Q) }); K(t, !0, !0, "abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt", function (a, c) { a[c] = function (a, b) { return u[c](this, a, b) } }) })();
    "use strict"; var Cc = ["isObject", "isNaN"], Dc = "keys values select reject each merge clone equal watch tap has toQueryString".split(" ");
    function Ec(a, b, c, d) { var e, g, f; (g = b.match(/^(.+?)(\[.*\])$/)) ? (f = g[1], b = g[2].replace(/^\[|\]$/g, "").split("]["), b.forEach(function (b) { e = !b || b.match(/^\d+$/); !f && A(a) && (f = a.length); J(a, f) || (a[f] = e ? [] : {}); a = a[f]; f = b }), !f && e && (f = a.length.toString()), Ec(a, f, c, d)) : a[b] = d && "true" === c ? !0 : d && "false" === c ? !1 : c } function Fc(a, b) { var c; return A(b) || G(b) && b.toString === v ? (c = [], I(b, function (b, e) { a && (b = a + "[" + b + "]"); c.push(Fc(b, e)) }), c.join("&")) : a ? Gc(a) + "=" + (C(b) ? b.getTime() : Gc(b)) : "" }
    function Gc(a) { return a || !1 === a || 0 === a ? encodeURIComponent(a).replace(/%20/g, "+") : "" } function Hc(a, b, c) { var d, e = a instanceof O ? new O : {}; I(a, function (a, f) { d = !1; sa(b, function (b) { (D(b) ? b.test(a) : G(b) ? b[a] === f : a === s(b)) && (d = !0) }, 1); d === c && (e[a] = f) }); return e } H(m, !1, !0, { watch: function (a, b, c) { if (ea) { var d = a[b]; m.defineProperty(a, b, { enumerable: !0, configurable: !0, get: function () { return d }, set: function (e) { d = c.call(a, b, d, e) } }) } } });
    H(m, !1, function () { return 1 < arguments.length }, { keys: function (a, b) { var c = m.keys(a); c.forEach(function (c) { b.call(a, c, a[c]) }); return c } });
    H(m, !1, !0, {
        isObject: function (a) { return va(a) }, isNaN: function (a) { return y(a) && a.valueOf() !== a.valueOf() }, equal: function (a, b) { return Ua(a, b) }, extended: function (a) { return new O(a) }, merge: function (a, b, c, d) { var e, g, f, h, l, n, x; if (a && "string" !== typeof b) for (e in b) if (J(b, e) && a) { h = b[e]; l = a[e]; n = M(l); g = G(h); f = G(l); x = n && !1 === d ? l : h; n && F(d) && (x = d.call(b, e, l, h)); if (c && (g || f)) if (C(h)) x = new r(h.getTime()); else if (D(h)) x = new q(h.source, Qa(h)); else { f || (a[e] = p.isArray(h) ? [] : {}); m.merge(a[e], h, c, d); continue } a[e] = x } return a },
        values: function (a, b) { var c = []; I(a, function (d, e) { c.push(e); b && b.call(a, e) }); return c }, clone: function (a, b) { var c; if (!G(a)) return a; c = v.call(a); if (C(a, c) && a.clone) return a.clone(); if (C(a, c) || D(a, c)) return new a.constructor(a); if (a instanceof O) c = new O; else if (A(a, c)) c = []; else if (va(a, c)) c = {}; else throw new TypeError("Clone must be a basic data type."); return m.merge(c, a, b) }, fromQueryString: function (a, b) {
            var c = m.extended(); a = a && a.toString ? a.toString() : ""; a.replace(/^.*?\?/, "").split("&").forEach(function (a) {
                a =
                a.split("="); 2 === a.length && Ec(c, a[0], decodeURIComponent(a[1]), b)
            }); return c
        }, toQueryString: function (a, b) { return Fc(b, a) }, tap: function (a, b) { var c = b; F(b) || (c = function () { if (b) a[b]() }); c.call(a, a); return a }, has: function (a, b) { return J(a, b) }, select: function (a) { return Hc(a, arguments, !0) }, reject: function (a) { return Hc(a, arguments, !1) }
    }); K(m, !1, !0, w, function (a, b) { var c = "is" + b; Cc.push(c); a[c] = ia[b] });
    H(m, !1, function () { return 0 === arguments.length }, { extend: function () { var a = Cc.concat(Dc); "undefined" !== typeof Hb && (a = a.concat(Hb)); Ya(a, m) } }); Ya(Dc, O);
    "use strict"; H(q, !1, !0, { escape: function (a) { return Ra(a) } }); H(q, !0, !0, { getFlags: function () { return Qa(this) }, setFlags: function (a) { return q(this.source, a) }, addFlag: function (a) { return this.setFlags(Qa(this, a)) }, removeFlag: function (a) { return this.setFlags(Qa(this).replace(a, "")) } });
    "use strict";
    function Ic(a) { a = +a; if (0 > a || Infinity === a) throw new RangeError("Invalid number"); return a } function Jc(a, b) { return Na(M(b) ? b : " ", a) } function Kc(a, b, c, d, e) { var g; if (a.length <= b) return a.toString(); d = N(d) ? "..." : d; switch (c) { case "left": return a = e ? Lc(a, b, !0) : a.slice(a.length - b), d + a; case "middle": return c = Aa(b / 2), g = Q(b / 2), b = e ? Lc(a, c) : a.slice(0, c), a = e ? Lc(a, g, !0) : a.slice(a.length - g), b + d + a; default: return b = e ? Lc(a, b) : a.slice(0, b), b + d } }
    function Lc(a, b, c) { if (c) return Lc(a.reverse(), b).reverse(); c = q("(?=[" + Ma() + "])"); var d = 0; return a.split(c).filter(function (a) { d += a.length; return d <= b }).join("") } function Mc(a, b, c) { z(b) && (b = a.indexOf(b), -1 === b && (b = c ? a.length : 0)); return b } var Nc, Oc; H(s, !0, !1, { repeat: function (a) { a = Ic(a); return Na(this, a) } });
    H(s, !0, function (a) { return D(a) || 2 < arguments.length }, { startsWith: function (a) { var b = arguments, c = b[1], b = b[2], d = this; c && (d = d.slice(c)); N(b) && (b = !0); c = D(a) ? a.source.replace("^", "") : Ra(a); return q("^" + c, b ? "" : "i").test(d) }, endsWith: function (a) { var b = arguments, c = b[1], b = b[2], d = this; M(c) && (d = d.slice(0, c)); N(b) && (b = !0); c = D(a) ? a.source.replace("$", "") : Ra(a); return q(c + "$", b ? "" : "i").test(d) } });
    H(s, !0, !0, {
        escapeRegExp: function () { return Ra(this) }, escapeURL: function (a) { return a ? encodeURIComponent(this) : encodeURI(this) }, unescapeURL: function (a) { return a ? decodeURI(this) : decodeURIComponent(this) }, escapeHTML: function () { return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2f;") }, unescapeHTML: function () {
            return this.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#x2f;/g,
                "/").replace(/&amp;/g, "&")
        }, encodeBase64: function () { return Nc(unescape(encodeURIComponent(this))) }, decodeBase64: function () { return decodeURIComponent(escape(Oc(this))) }, each: function (a, b) { var c, d, e; F(a) ? (b = a, a = /[\s\S]/g) : a ? z(a) ? a = q(Ra(a), "gi") : D(a) && (a = q(a.source, Qa(a, "g"))) : a = /[\s\S]/g; c = this.match(a) || []; if (b) for (d = 0, e = c.length; d < e; d++)c[d] = b.call(this, c[d], d, c) || c[d]; return c }, shift: function (a) { var b = ""; a = a || 0; this.codes(function (c) { b += s.fromCharCode(c + a) }); return b }, codes: function (a) {
            var b = [],
            c, d; c = 0; for (d = this.length; c < d; c++) { var e = this.charCodeAt(c); b.push(e); a && a.call(this, e, c) } return b
        }, chars: function (a) { return this.each(a) }, words: function (a) { return this.trim().each(/\S+/g, a) }, lines: function (a) { return this.trim().each(/^.*$/gm, a) }, paragraphs: function (a) { var b = this.trim().split(/[\r\n]{2,}/); return b = b.map(function (b) { if (a) var d = a.call(b); return d ? d : b }) }, isBlank: function () { return 0 === this.trim().length }, has: function (a) { return -1 !== this.search(D(a) ? a : Ra(a)) }, add: function (a, b) {
            b = N(b) ?
                this.length : b; return this.slice(0, b) + a + this.slice(b)
        }, remove: function (a) { return this.replace(a, "") }, reverse: function () { return this.split("").reverse().join("") }, compact: function () { return this.trim().replace(/([\r\n\s\u3000])+/g, function (a, b) { return "\u3000" === b ? b : " " }) }, at: function () { return Wa(this, arguments, !0) }, from: function (a) { return this.slice(Mc(this, a, !0)) }, to: function (a) { N(a) && (a = this.length); return this.slice(0, Mc(this, a)) }, dasherize: function () { return this.underscore().replace(/_/g, "-") }, underscore: function () {
            return this.replace(/[-\s]+/g,
                "_").replace(s.Inflector && s.Inflector.acronymRegExp, function (a, b) { return (0 < b ? "_" : "") + a.toLowerCase() }).replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase()
        }, camelize: function (a) { return this.underscore().replace(/(^|_)([^_]+)/g, function (b, c, d, e) { b = (b = s.Inflector) && b.acronyms[d]; b = z(b) ? b : void 0; e = !1 !== a || 0 < e; return b ? e ? b : b.toLowerCase() : e ? d.capitalize() : d }) }, spacify: function () { return this.underscore().replace(/_/g, " ") }, stripTags: function () {
            var a = this; sa(0 < arguments.length ?
                arguments : [""], function (b) { a = a.replace(q("</?" + Ra(b) + "[^<>]*>", "gi"), "") }); return a
        }, removeTags: function () { var a = this; sa(0 < arguments.length ? arguments : ["\\S+"], function (b) { b = q("<(" + b + ")[^<>]*(?:\\/>|>.*?<\\/\\1>)", "gi"); a = a.replace(b, "") }); return a }, truncate: function (a, b, c) { return Kc(this, a, b, c) }, truncateOnWord: function (a, b, c) { return Kc(this, a, b, c, !0) }, pad: function (a, b) { var c, d; a = Ic(a); c = S(0, a - this.length) / 2; d = Q(c); c = Aa(c); return Jc(d, b) + this + Jc(c, b) }, padLeft: function (a, b) {
            a = Ic(a); return Jc(S(0, a -
                this.length), b) + this
        }, padRight: function (a, b) { a = Ic(a); return this + Jc(S(0, a - this.length), b) }, first: function (a) { N(a) && (a = 1); return this.substr(0, a) }, last: function (a) { N(a) && (a = 1); return this.substr(0 > this.length - a ? 0 : this.length - a) }, toNumber: function (a) { return Oa(this, a) }, capitalize: function (a) { var b; return this.toLowerCase().replace(a ? /[^']/g : /^\S/, function (a) { var d = a.toUpperCase(), e; e = b ? a : d; b = d !== a; return e }) }, assign: function () {
            var a = {}; sa(arguments, function (b, c) { G(b) ? xa(a, b) : a[c + 1] = b }); return this.replace(/\{([^{]+?)\}/g,
                function (b, c) { return J(a, c) ? a[c] : b })
        }
    }); H(s, !0, !0, { insert: s.prototype.add });
    (function (a) {
        if (ba.btoa) Nc = ba.btoa, Oc = ba.atob; else {
            var b = /[^A-Za-z0-9\+\/\=]/g; Nc = function (b) { var d = "", e, g, f, h, l, n, x = 0; do e = b.charCodeAt(x++), g = b.charCodeAt(x++), f = b.charCodeAt(x++), h = e >> 2, e = (e & 3) << 4 | g >> 4, l = (g & 15) << 2 | f >> 6, n = f & 63, isNaN(g) ? l = n = 64 : isNaN(f) && (n = 64), d = d + a.charAt(h) + a.charAt(e) + a.charAt(l) + a.charAt(n); while (x < b.length); return d }; Oc = function (c) {
                var d = "", e, g, f, h, l, n = 0; if (c.match(b)) throw Error("String contains invalid base64 characters"); c = c.replace(/[^A-Za-z0-9\+\/\=]/g, ""); do e = a.indexOf(c.charAt(n++)),
                    g = a.indexOf(c.charAt(n++)), h = a.indexOf(c.charAt(n++)), l = a.indexOf(c.charAt(n++)), e = e << 2 | g >> 4, g = (g & 15) << 4 | h >> 2, f = (h & 3) << 6 | l, d += s.fromCharCode(e), 64 != h && (d += s.fromCharCode(g)), 64 != l && (d += s.fromCharCode(f)); while (n < c.length); return d
            }
        }
    })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
})();
/// <reference path="../jquery-3.2.1.min.js" />
var version = '3.2.0';        //版本号
var ajaxUrl = '';     //所有ajax操作指向页面
var TEMP = {};
var HROS = {};

HROS.CONFIG = {
	website: 'http://' + location.hostname + location.pathname, //网站地址，用于分享应用时调用。一般无需修改
	sinaweiboAppkey: '',       //新浪微博appkey。首页加载会自动初始化，一般无需修改
	tweiboAppkey: '',       //腾讯微博appkey。首页加载会自动初始化，一般无需修改
	memberID: 0,        //用户id
	lockPwdAndLoginPwd: false,
	desk: 1,        //当前显示桌面
	dockPos: '',       //应用码头位置，参数有：top,left,right
	appXY: '',       //应用排列方式，参数有：x,y
	appSize: '',       //图标显示尺寸，参数有：s,m
	appButtonTop: 20,       //快捷方式top初始位置
	appButtonLeft: 20,       //快捷方式left初始位置
	windowIndexid: 10000,    //窗口z-index初始值
	widgetIndexid: 1,        //挂件z-index初始值
	windowMinWidth: 215,      //窗口最小宽度
	windowMinHeight: 59,       //窗口最小高度
	wallpaperState: 1,        //1系统壁纸,2自定义壁纸,3网络壁纸
	wallpaper: '',       //壁纸
	wallpaperType: '',       //壁纸显示类型，参数有：tianchong,shiying,pingpu,lashen,juzhong
	wallpaperWidth: 0,        //壁纸宽度
	wallpaperHeight: 0,         //壁纸高度
	appVerticalSpacing: 0,//应用垂直间距
	appHorizontalSpacing: 0,//应用水平间距
	deskCount: 0,//当前用户拥有的桌面数量
	timeOutPrompt: '会话过期,请重新登陆！',
	loadingPrompt: '正在载入中，请稍后...'
};

HROS.VAR = {
	zoomLevel: 1,
	isAppMoving: false,    //桌面应用是否正在移动中，也就是ajax操作是否正在执行中
	dock: [],
	desk1: [],
	desk2: [],
	desk3: [],
	desk4: [],
	desk5: [],
	desk6: [],
	desk7: [],
	desk8: [],
	desk9: [],
	desk10: [],
	folder: []
};//桌面应用
var appbtnTemp = template.compile(
	'<div id="<%=id%>" class="appbtn" title="<%=title%>" appid="<%=appid%>" realappid="<%=realappid%>" type="<%=type%>">' +
	'<img src="<%=imgsrc%>" alt="<%=title%>" style="width:<%=appsize%>px;height:<%=appsize%>px;">' +
	'<span style="width:<%=appsize+10%>px;"><%=title%></span>' +
	'</div>'
);
//桌面"添加应用"应用
var addbtnTemp = template.compile(
	'<div class="appbtn add">' +
	'<div><img src="/images/ui/addicon.png"></div>' +
	'<span style="width:<%=appsize+10%>px;">添加应用</span>' +
	'</div>'
);
//任务栏
var taskTemp = template.compile(
	'<a id="<%=id%>" class="task-item task-item-current" title="<%=title%>" appid="<%=appid%>" realappid="<%=realappid%>" type="<%=type%>">' +
	'<div class="task-item-icon">' +
	'<img src="<%=imgsrc%>" alt="<%=title%>">' +
	'</div>' +
	'<div class="task-item-txt"><%=title%></div>' +
	'</a>'
);
//小挂件
var widgetWindowTemp = template.compile(
	'<div id="<%=id%>" class="widget" appid="<%=appid%>" realappid="<%=realappid%>" type="<%=type%>" style="z-index:<%=zIndex%>;width:<%=width%>px;height:<%=height%>px;top:<%=top%>px;right:<%=right%>px">' +
	'<div class="move">' +
	'<a class="ha-close" href="javascript:;" title="关闭"></a>' +
	'<% if(issetbar){ %>' +
	'<a class="ha-star" href="javascript:;" title="评分"></a>' +
	'<a class="ha-share" href="javascript:;" title="分享"></a>' +
	'<% } %>' +
	'</div>' +
	'<div class="frame">' +
	'<iframe src="<%=url%>" frameborder="0" allowtransparency="true"></iframe>' +
	'</div>' +
	'</div>'
);
//应用窗口
var windowTemp = template.compile(
	'<div id="<%=id%>" class="window-container window-current<% if(isflash){ %> window-container-flash<% } %>" appid="<%=appid%>" realappid="<%=realappid%>" type="<%=type%>" state="show" style="<% if(isopenmax){ %>width:100%;height:100%;<% }else{ %>width:<%=width%>px;height:<%=height%>px;<% } %>z-index:<%=zIndex%>" ismax="<% if(isopenmax){ %>1<% }else{ %>0<% } %>">' +
	'<div style="height:100%">' +
	'<div class="title-bar">' +
	'<img class="icon" src="<%=imgsrc%>" alt="<%=title%>"><span class="title"><%=title%></span>' +
	'<div class="title-handle">' +
	'<a class="ha-hide" btn="hide" href="javascript:;" title="最小化"><b class="hide-b"></b></a>' +
	'<% if(istitlebar){ %>' +
	'<a class="ha-max" btn="max" href="javascript:;" title="最大化" <% if(isopenmax){ %>style="display:none"<% } %>><b class="max-b"></b></a>' +
	'<a class="ha-revert" btn="revert" href="javascript:;" title="还原" <% if(!isopenmax){ %>style="display:none"<% } %>><b class="revert-b"></b><b class="revert-t"></b></a>' +
	'<% } %>' +
	'<% if(istitlebarFullscreen){ %>' +
	'<a class="ha-fullscreen" btn="fullscreen" href="javascript:;" title="全屏">+</a>' +
	'<% } %>' +
	'<a class="ha-close" btn="close" href="javascript:;" title="关闭">×</a>' +
	'</div>' +
	'</div>' +
	'<div class="window-frame">' +
	'<% if(isflash){ %>' +
	'<div class="window-mask"><div class="maskbg"></div><div>运行中，点击恢复显示 :)</div></div>' +
	'<% }else{ %>' +
	'<div class="window-mask window-mask-noflash"></div>' +
	'<% } %>' +
	'<div class="window-loading"></div>' +
	'<iframe id="<%=id%>_iframe" frameborder="0" src="<%=url%>"></iframe>' +
	'</div>' +
	'<div class="set-bar"><div class="fr">' +
	'<% if(issetbar){ %>' +
	'<a class="btn share"><i class="icon icon104"></i><span class="btn-con">分享</span></a>' +
	'<a class="btn star"><i class="icon icon177"></i><span class="btn-con">评分</span></a>' +
	'<a class="btn detail"><i class="icon icon120"></i><span class="btn-con">详情</span></a>' +
	'<% } %>' +
	'<a class="btn refresh"><i class="icon icon158"></i><span class="btn-con">刷新</span></a>' +
	'</div></div>' +
	'</div>' +
	'<% if(isresize){ %>' +
	'<div class="window-resize window-resize-t" resize="t"></div>' +
	'<div class="window-resize window-resize-r" resize="r"></div>' +
	'<div class="window-resize window-resize-b" resize="b"></div>' +
	'<div class="window-resize window-resize-l" resize="l"></div>' +
	'<div class="window-resize window-resize-rt" resize="rt"></div>' +
	'<div class="window-resize window-resize-rb" resize="rb"></div>' +
	'<div class="window-resize window-resize-lt" resize="lt"></div>' +
	'<div class="window-resize window-resize-lb" resize="lb"></div>' +
	'<% } %>' +
	'</div>'
);
//文件夹窗口
var folderWindowTemp = template.compile(
	'<div id="<%=id%>" class="folder-window window-container window-current" appid="<%=appid%>" realappid="<%=realappid%>" type="<%=type%>" state="show" style="width:<%=width%>px;height:<%=height%>px;z-index:<%=zIndex%>">' +
	'<div style="height:100%">' +
	'<div class="title-bar">' +
	'<img class="icon" src="<%=imgsrc%>" alt="<%=title%>"><span class="title"><%=title%></span>' +
	'<div class="title-handle">' +
	'<a class="ha-hide" btn="hide" href="javascript:;" title="最小化"><b class="hide-b"></b></a>' +
	'<% if(istitlebar){ %>' +
	'<a class="ha-max" btn="max" href="javascript:;" title="最大化"><b class="max-b"></b></a>' +
	'<a class="ha-revert" btn="revert" href="javascript:;" title="还原" style="display:none"><b class="revert-b"></b><b class="revert-t"></b></a>' +
	'<% } %>' +
	'<a class="ha-close" btn="close" href="javascript:;" title="关闭">×</a>' +
	'</div>' +
	'</div>' +
	'<div class="window-frame">' +
	'<div class="folder_body"></div>' +
	'</div>' +
	'<div class="set-bar"><div class="fr">' +
	'<a class="btn refresh"><i class="icon icon158"></i><span class="btn-con">刷新</span></a>' +
	'</div></div>' +
	'</div>' +
	'<% if(isresize){ %>' +
	'<div class="window-resize window-resize-t" resize="t"></div>' +
	'<div class="window-resize window-resize-r" resize="r"></div>' +
	'<div class="window-resize window-resize-b" resize="b"></div>' +
	'<div class="window-resize window-resize-l" resize="l"></div>' +
	'<div class="window-resize window-resize-rt" resize="rt"></div>' +
	'<div class="window-resize window-resize-rb" resize="rb"></div>' +
	'<div class="window-resize window-resize-lt" resize="lt"></div>' +
	'<div class="window-resize window-resize-lb" resize="lb"></div>' +
	'<% } %>' +
	'</div>'
);
//文件夹预览
var folderViewTemp = template.compile(
	'<div id="<%=id%>" class="quick_view_container" appid="<%=appid%>" realappid="<%=realappid%>" style="top:<%=top%>px;left:<%=left%>px">' +
	'<div class="perfect_nine_box">' +
	'<div class="perfect_nine_t">' +
	'<div class="perfect_nine_t_m"></div>' +
	'</div>' +
	'<span class="perfect_nine_t_l"></span>' +
	'<span class="perfect_nine_t_r"></span>' +
	'<div class="perfect_nine_middle">' +
	'<span class="perfect_nine_m_l">' +
	'<div class="perfect_nine_m_l_t" style="top:0px;height:<%=mlt%>px"></div>' +
	'<div class="perfect_nine_m_l_m" style="top:<%=mlt%>px;height:20px;display:<% if(mlm){ %>block<% }else{ %>none<% } %>"></div>' +
	'<div class="perfect_nine_m_l_b" style="top:<% if(mlm){ %><%=mlt+20%><% }else{ %><%=mlt%><% } %>px;height:<%=mlb%>px"></div>' +
	'</span>' +
	'<span class="perfect_nine_m_r">' +
	'<div class="perfect_nine_m_r_t" style="top:0px;height:<%=mrt%>px"></div>' +
	'<div class="perfect_nine_m_r_m" style="top:<%=mrt%>px;height:20px;display:<% if(mrm){ %>block<% }else{ %>none<% } %>"></div>' +
	'<div class="perfect_nine_m_r_b" style="top:<% if(mrm){ %><%=mrt+20%><% }else{ %><%=mrt%><% } %>px;height:<%=mrb%>px"></div>' +
	'</span>' +
	'<div class="perfect_nine_context">' +
	'<div class="quick_view_container_control">' +
	'<a href="javascript:;" class="quick_view_container_open">打开</a>' +
	'</div>' +
	'<div class="quick_view_container_list" id="quick_view_container_list_<%=appid%>" realid="<%=appid%>">' +
	'<div class="quick_view_container_list_in" id="quick_view_container_list_in_<%=appid%>" style="height:<%=height%>px">' +
	'<%==apps%>' +
	'</div>' +
	'<div class="scrollBar"></div>' +
	'<div class="scrollBar_bgc"></div>' +
	'</div>' +
	'</div>' +
	'</div>' +
	'<div class="perfect_nine_b">' +
	'<div class="perfect_nine_b_m"></div>' +
	'</div>' +
	'<span class="perfect_nine_b_l"></span>' +
	'<span class="perfect_nine_b_r"></span>' +
	'</div>' +
	'</div>'
);
//文件下载
var fileDownloadTemp = template.compile(
	'<iframe src="filedownload.php?appid=<%=appid%>" frameborder="0" style="display:none"></iframe>'
);
//搜索结果列表
var suggestTemp = template.compile(
	'<li class="resultList" appid="<%=appid%>" realappid="<%=realappid%>" type="<%=type%>">' +
	'<a href="javascript:;"><div><%=name%></div></a>' +
	'</li>'
);
//新建&修改文件夹窗口
var editFolderDialogTemp = template.compile(
	'<div id="addfolder">' +
	'<a class="folderSelector"><img src="<%=src%>"></a>' +
	'<div class="folderNameTxt">请输入文件夹名称：</div>' +
	'<div class="folderInput"><input type="text" class="folderName" id="folderName" value="<%=name%>"></div>' +
	'<div class="folderNameError">文件夹名称不能只包含空字符</div>' +
	'<div class="fcDropdown">' +
	'<a class="fcDropdown_item" title="默认"><img class="fcDropdown_img" src="~/images/ui/folder_default.png"></a>' +
	'<a class="fcDropdown_item" title="文本"><img class="fcDropdown_img" src="~/images/ui/folder_doc.png"></a>' +
	'<a class="fcDropdown_item" title="游戏"><img class="fcDropdown_img" src="~/images/ui/folder_game.png"></a>' +
	'<a class="fcDropdown_item" title="生活"><img class="fcDropdown_img" src="~/images/ui/folder_life.png"></a>' +
	'<a class="fcDropdown_item" title="音乐"><img class="fcDropdown_img" src="~/images/ui/folder_music.png"></a>' +
	'<a class="fcDropdown_item" title="工具"><img class="fcDropdown_img" src="~/images/ui/folder_tool.png"></a>' +
	'<a class="fcDropdown_item" title="视频"><img class="fcDropdown_img" src="~/images/ui/folder_video.png"></a>' +
	'</div>' +
	'</div>'
);
//应用评分
var starDialogTemp = template.compile(
	'<div id="star" realappid="<%=realappid%>">' +
	'<div class="grade-box">' +
	'<div class="star-num"><%=point%></div>' +
	'<div class="star-box">' +
	'<div>打分：</div>' +
	'<i style="width:<%=realpoint%>%"></i>' +
	'<ul>' +
	'<li class="grade-1" num="1"><a href="javascript:;"><em>很不好用</em></a></li>' +
	'<li class="grade-2" num="2"><a href="javascript:;"><em>体验一般般</em></a></li>' +
	'<li class="grade-3" num="3"><a href="javascript:;"><em>比较好用</em></a></li>' +
	'<li class="grade-4" num="4"><a href="javascript:;"><em>很好用</em></a></li>' +
	'<li class="grade-5" num="5"><a href="javascript:;"><em>棒极了，推荐</em></a></li>' +
	'</ul>' +
	'</div>' +
	'</div>' +
	'</div>'
);
//锁定
var lockTemp = template.compile(
	'<div id="lock">' +
	'<div class="title">' +
	'<div class="time"></div>' +
	'<div class="week"></div>' +
	'</div>' +
	'<div id="lock-info">' +
	'<div class="img"><img src="<%=avatar%>" title="<%=accountname%>" alt="<%=accountname%>"></img></div>' +
	'<div class="text"><input type="password" class="mousetrap" id="lockpassword" placeholder="请输入解锁密码"></div>' +
	'<div class="text-tip"></div>' +
	'<div class="text"><input type="button" id="lockbtn" value="解 锁"></div>' +
	'</div>' +
	'<div class="tip">点击屏幕，开启解锁</div>' +
	'</div>'
);
/*
**  应用
*/
HROS.app = (function () {
	return {
        /*
		**  初始化桌面应用
		*/
		init: function () {
			//绑定'应用市场'点击事件
			$('#desk').on('click', '.add', function () {
				HROS.window.createTemp({
					appid: 'hoorayos-yysc',
					title: '应用市场',
					url: '/AppMarket/Index',
					width: 800,
					height: 484,
					isflash: false
				});
			});
			//绑定应用拖动事件
			HROS.app.move();
			//绑定滚动条拖动事件
			HROS.app.moveScrollbar();
			//绑定应用右击事件
			$('body').on('contextmenu', '.appbtn:not(.add)', function (e) {
				HROS.popupMenu.hide();
				var popupmenu;
				switch ($(this).attr('type')) {
					case 'app':
					case 'widget':
						popupmenu = HROS.popupMenu.app($(this));
						break;
					case 'pwindow':
					case 'pwidget':
						popupmenu = HROS.popupMenu.papp($(this));
						break;
					case 'folder':
						popupmenu = HROS.popupMenu.folder($(this));
						break;
					case 'file':
						popupmenu = HROS.popupMenu.file($(this));
						break;
				}
				var l = ($(window).width() - e.clientX) < popupmenu.width() ? (e.clientX - popupmenu.width()) : e.clientX;
				var t = ($(window).height() - e.clientY) < popupmenu.height() ? (e.clientY - popupmenu.height()) : e.clientY;
				popupmenu.css({
					left: l,
					top: t
				}).show();
				return false;
			});
			//应用窗口上的评分、分享按钮事件
			$('body').on('click', '#star ul li', function () {
				var num = $(this).attr('num');
				if (!isNaN(num) && /^[1-5]$/.test(num)) {
					if (HROS.base.checkLogin()) {
						//待修改
						$.ajax({
							type: 'POST',
							url: ajaxUrl,
							data: 'ac=updateAppStar&id=' + $('#star').attr('realappid') + '&starnum=' + num
						}).done(function (responseText) {
							$.dialog.list['star'].close();
							if (responseText.IsSuccess) {
								NewCrm.msgbox.success("打分成功！");
							} else {
								NewCrm.msgbox.fail("你已经打过分了！");
							}
						});
					} else {
						HROS.base.login();
					}
				}
			}).on('click', '#share a', function () {
				$.dialog.list['share'].close();
			});
			//获取桌面应用数据
			HROS.app.get();
		},
        /*
		**  更新应用排列方式
		*/
		updateXY: function (i) {
			if (HROS.CONFIG.appXY !== i) {
				if (HROS.base.checkLogin()) {
					HROS.request.post('/Desk/ModifyXy', { appXy: i }, function (responseText) {
						if (responseText.IsSuccess) {
							HROS.CONFIG.appXY = i.toLowerCase();
							HROS.deskTop.resize();
							NewCrm.msgbox.success('图标排列方向更新成功');
						} else {
							NewCrm.msgbox.fail('图标排列方向更新失败');
						}
					});
				}
			}
		},
        /*
		**  更新应用显示尺寸
		*/
		updateSize: function (i) {
			if (HROS.CONFIG.appSize !== i) {
				HROS.CONFIG.appSize = i;
				HROS.deskTop.resize();
				if (HROS.base.checkLogin()) {
					HROS.request.post('/Desk/ModifySize', { appSize: i }, function (responseText) {
						if (responseText.IsSuccess) {
							NewCrm.msgbox.success('更新应用显示尺寸成功');
						} else {
							NewCrm.msgbox.fail('更新应用显示尺寸失败');
						}
					});
				}
			}
		},

        /*
		**  更新应用垂直间距
		*/
		updateVertical: function (i) {
			if (HROS.CONFIG.appVerticalSpacing != i) {
				HROS.CONFIG.appVerticalSpacing = i;
				HROS.deskTop.resize();
				if (HROS.base.checkLogin()) {
					HROS.request.post('/Desk/ModifyVerticalSpace', { appVertical: i }, function (responseText) {
						if (responseText.IsSuccess) {
							NewCrm.msgbox.success('更新应用垂直间距成功');
						} else {
							NewCrm.msgbox.fail('更新应用垂直间距失败');
						}
					});
				}
			}
		},
        /*
		**  更新应用水平间距
		*/
		updateHorizontal: function (i) {
			if (HROS.CONFIG.appHorizontalSpacing != i) {
				HROS.CONFIG.appHorizontalSpacing = i;
				HROS.deskTop.resize();
				if (HROS.base.checkLogin()) {
					HROS.request.post('/Desk/ModifyHorizontalSpace', { appHorizontal: i }, function (responseText) {
						if (responseText.IsSuccess) {
							NewCrm.msgbox.success('更新应用水平间距成功');
						} else {
							NewCrm.msgbox.fail('更新应用水平间距失败');
						}
					});
				}
			}
		},

        /*
		**  获取桌面应用数据
		*/
		get: function () {
			HROS.VAR.isAppMoving = true;
			HROS.request.get('/Desk/GetAccountDeskMembers', {}, function (responseText) {
				if (responseText.IsSuccess) {
					HROS.VAR.isAppMoving = false;
					if (typeof responseText === 'object') {
						var folders = [], docks = [];
						$.each(responseText.Model, function (k, v) {
							var apps = [];
							$.each(v, function (a, b) {
								if (b.type === 'folder') {
									folders.push(b)
								}
								if (b.isOnDock === true) {
									docks.push(b)
								} else {
									apps.push(b);
								}
							});
							eval('HROS.VAR.desk' + k + '=apps');
						});

						HROS.VAR.folder = folders;
						HROS.VAR.dock = docks;
					}
					//输出桌面应用
					HROS.app.set();
				}
			})
		},
        /*
		**  渲染桌面，输出应用
		*/
		set: function () {
			//加载应用码头应用
			var dock_append = '';
			if (HROS.VAR.dock != null && HROS.VAR.dock !== '') {
				$(HROS.VAR.dock).each(function () {
					dock_append += appbtnTemp({
						'title': this.name,
						'type': this.type,
						'id': 'd_' + this.memberId,
						'appid': this.memberId,
						'realappid': this.appId == 0 ? this.memberId : this.appId,
						'imgsrc': this.icon,
						'appsize': 48
					});
				});
			}
			$('#dock-bar .dock-applist .appbtn').remove();
			$('#dock-bar .dock-applist').append(dock_append);

			//加载桌面应用
			for (var j = 1; j <= HROS.CONFIG.deskCount; j++) {
				var desk_append = '';
				var desk = eval('HROS.VAR.desk' + j);
				if (typeof desk !== 'undefined' && desk !== '') {
					$(desk).each(function () {
						desk_append += appbtnTemp({
							'title': this.name,
							'type': this.type,
							'id': 'd_' + this.memberId,
							'appid': this.memberId,
							'realappid': this.appId == 0 ? this.memberId : this.appId,
							'imgsrc': this.icon,
							'appsize': HROS.CONFIG.appSize
						});
					});
				}

				desk_append += addbtnTemp({
					'appsize': HROS.CONFIG.appSize
				});

				$('#desk-' + j + ' .desktop-apps-container .appbtn').remove();
				$('#desk-' + j + ' .desktop-apps-container').append(desk_append);
			}

			HROS.app.setPos(false);
			//如果文件夹预览面板为显示状态，则进行更新
			$('body .quick_view_container').each(function () {
				HROS.folderView.get($('#d_' + $(this).attr('appid')));
			});
			//如果文件夹窗口为显示状态，则进行更新
			$('#desk .folder-window').each(function () {
				HROS.window.updateFolder($(this).attr('appid'));
			});
			//加载滚动条
			HROS.app.getScrollbar();
		},

		setPos: function (isAnimate) {
			$('i.addicon').width(HROS.CONFIG.appSize).height(HROS.CONFIG.appSize);
			$('#desk .desktop-container .appbtn img ').width(HROS.CONFIG.appSize).height(HROS.CONFIG.appSize);
			$('#desk .desktop-container .appbtn span').width(Number(HROS.CONFIG.appSize) + 10);
			isAnimate = isAnimate == null ? true : isAnimate;
			var grid = HROS.grid.getAppGrid(), dockGrid = HROS.grid.getDockAppGrid();
			$('#dock-bar .dock-applist .appbtn').each(function (i) {
				$(this).css({
					'top': HROS.CONFIG.dockPos === 'top' ? dockGrid[i]['startY'] : dockGrid[i]['startY'] + 5,
					'left': HROS.CONFIG.dockPos === 'top' ? dockGrid[i]['startX'] + 5 : dockGrid[i]['startX']
				}).attr('top', $(this).offset().top).attr('left', $(this).offset().left);
			});
			for (var j = 1; j <= 5; j++) {
				$('#desk-' + j + ' .appbtn').each(function (i) {
					var offsetTop = HROS.CONFIG.appVerticalSpacing / 2;
					var offsetLeft = HROS.CONFIG.appHorizontalSpacing / 2;
					var top = grid[i]['startY'] + offsetTop;
					var left = grid[i]['startX'] + offsetLeft;
					$(this).stop(true, false).animate({
						'top': top,
						'left': left
					}, isAnimate ? 500 : 0);
					switch (HROS.CONFIG.dockPos) {
						case 'top':
							$(this).attr('left', left).attr('top', top + $('#dock-bar').height());
							break;
						case 'left':
							$(this).attr('left', left + $('#dock-bar').width()).attr('top', top);
							break;
						default:
							$(this).attr('left', left).attr('top', top);
					}
				});
			}
			//更新滚动条
			HROS.app.getScrollbar();
		},
        /*
		**  添加应用
		*/
		add: function (id, callback) {
			function done() {
				callback && callback();
			}
			if (HROS.base.checkLogin()) {
				HROS.request.post('/AppMarket/Install', { appId: id, deskNum: HROS.CONFIG.desk }, function (responseText) {
					if (responseText.IsSuccess) {
						done();
					} else {
						NewCrm.msgbox.fail(responseText.Message);
					}
				})

			} else {
				done();
			}
		},
        /*
		**  删除应用
		*/
		remove: function (id, callback) {
			function done() {
				HROS.widget.removeCookie(id);
				callback && callback();
			}
			if (HROS.base.checkLogin()) {
				HROS.request.post('/Desk/Uninstall', { memberId: parseInt(id) }, function (responseText) {
					if (responseText.IsSuccess) {
						done();
						NewCrm.msgbox.success('移除成功，刷新后查看')
					} else {
						NewCrm.msgbox.fail(responseText.Message);
					}
				})
			} else {
				done();
			}
		},
        /*
		**  应用拖动、打开
		**  这块代码略多，主要处理了9种情况下的拖动，分别是：
		**  桌面拖动到应用码头、桌面拖动到文件夹内、当前桌面上拖动(排序)
		**  应用码头拖动到桌面、应用码头拖动到文件夹内、应用码头上拖动(排序)
		**  文件夹内拖动到桌面、文件夹内拖动到应用码头、不同文件夹之间拖动
		*/
		move: function () {
			//应用码头应用拖动
			$('#dock-bar .dock-applist').on('mousedown', '.appbtn', function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (e.button === 0 || e.button === 1) {
					var oldobj = $(this);
					var obj = $('<div id="shortcut_shadow">' + oldobj.html() + '</div>');
					var dx = e.clientX;
					var dy = e.clientY;
					var cx = e.clientX;
					var cy = e.clientY;
					var x = dx - oldobj.offset().left;
					var y = dy - oldobj.offset().top;
					var lay = HROS.maskBox.desk();
					//绑定鼠标移动事件
					$(document).on('mousemove', function (e) {
						$('body').append(obj);
						lay.show();
						cx = e.clientX <= 0 ? 0 : e.clientX >= $(window).width() ? $(window).width() : e.clientX;
						cy = e.clientY <= 0 ? 0 : e.clientY >= $(window).height() ? $(window).height() : e.clientY;
						if (dx !== cx || dy !== cy) {
							obj.css({
								left: cx - x,
								top: cy - y
							}).show();
						}
					}).on('mouseup', function () {

						$(document).off('mousemove').off('mouseup');
						obj.remove();
						lay.hide();
						//判断是否移动应用，如果没有则判断为click事件

						if (dx === cx && dy === cy) {
							switch (oldobj.attr('type')) {
								case 'window':
								case 'pwindow':
								case 'file':

									HROS.window.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'widget':
								case 'pwidget':
									HROS.widget.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'folder':
									HROS.folderView.get(oldobj);
									break;
							}
							return false;
						}
						var movegrid = HROS.grid.searchFolderGrid(cx, cy);
						if (movegrid !== null) {
							if (oldobj.hasClass('folder') === false) {
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;

								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataDockToFolder(id, from, to)) {
											HROS.request.post('/Desk/MemberMove', { moveType: 'dock-folder', memberId: id, from: from, to: to }, function (responseText) {
												if (responseText.IsSuccess) {
													HROS.VAR.isAppMoving = false;
												} else {
													NewCrm.msgbox.fail(responseText.Message);
												}
											})
										}
									}
								} else {
									HROS.app.dataDockToFolder(id, from, to);
								}
							}
						} else {
							var dock_w = HROS.CONFIG.dockPos === 'left' ? 0 : HROS.CONFIG.dockPos === 'top' ? ($(window).width() - $('#dock-container').width() + 20) / 2 : $(window).width() - $('#dock-container').width();
							var dock_h = HROS.CONFIG.dockPos === 'top' ? 0 : ($(window).height() - $('#dock-container').height() + 20) / 2;
							var movegrid = HROS.grid.searchDockAppGrid(cx - dock_w, cy - dock_h);
							if (movegrid !== null) {
								if (movegrid !== oldobj.index()) {
									var movegrid2 = HROS.grid.searchDockAppGrid2(cx - dock_w, cy - dock_h);
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var boa = movegrid2 % 2 === 0 ? 'b' : 'a';
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataDockToDock(id, from, to, boa)) {
												//待修改
												$.ajax({
													type: 'POST',
													url: ajaxUrl,
													data: 'ac=moveMyApp&movetype=dock-dock&id=' + id + '&from=' + from + '&to=' + to + '&boa=' + boa
												}).done(function (responseText) {
													HROS.VAR.isAppMoving = false;
												});
											}
										}
									} else {
										HROS.app.dataDockToDock(id, from, to, boa);
									}
								}
							} else {
								var dock_w = HROS.CONFIG.dockPos === 'left' ? $('#dock-bar').width() : 0;
								var dock_h = HROS.CONFIG.dockPos === 'top' ? $('#dock-bar').height() : 0;
								var deskScrollLeft = $('#desk-' + HROS.CONFIG.desk + ' .desktop-apps-container').scrollLeft();
								var deskScrollTop = $('#desk-' + HROS.CONFIG.desk + ' .desktop-apps-container').scrollTop();
								var movegrid = HROS.grid.searchAppGrid(cx - dock_w + deskScrollLeft, cy - dock_h + deskScrollTop);
								if (movegrid !== null) {
									var movegrid2 = HROS.grid.searchAppGrid2(cx - dock_w + deskScrollLeft, cy - dock_h + deskScrollTop);
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var boa = movegrid2 % 2 === 0 ? 'b' : 'a';
									var desk = HROS.CONFIG.desk;
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataDockToDesk(id, from, to, boa, desk)) {
												HROS.request.post('/Desk/MemberMove', { moveType: 'dock-desk', memberId: id, from: from, to: desk }, function (responseText) {
													if (responseText.IsSuccess) {
														HROS.VAR.isAppMoving = false;
													} else {
														NewCrm.msgbox.fail(responseText.Message);
													}
												})
											}
										}
									} else {
										HROS.app.dataDockToDesk(id, from, to, boa, desk);
									}
								}
							}
						}
					});
				}
			});
			//桌面应用拖动
			$('#desktop .desktop-apps-container').on('mousedown', '.appbtn:not(.add)', function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (e.button === 0 || e.button === 1) {
					var oldobj = $(this);
					var obj = $('<div id="shortcut_shadow">' + oldobj.html() + '</div>');
					var dx = e.clientX;
					var dy = e.clientY;
					var cx = e.clientX;
					var cy = e.clientY;
					var x = dx - oldobj.offset().left;
					var y = dy - oldobj.offset().top;
					var lay = HROS.maskBox.desk();
					//绑定鼠标移动事件
					$(document).on('mousemove', function (e) {
						$('body').append(obj);
						lay.show();
						cx = e.clientX <= 0 ? 0 : e.clientX >= $(window).width() ? $(window).width() : e.clientX;
						cy = e.clientY <= 0 ? 0 : e.clientY >= $(window).height() ? $(window).height() : e.clientY;
						if (dx !== cx || dy !== cy) {
							obj.css({
								left: cx - x,
								top: cy - y
							}).show();
						}
					}).on('mouseup', function () {

						$(document).off('mousemove').off('mouseup');
						obj.remove();
						lay.hide();
						//判断是否移动应用，如果没有则判断为click事件

						if (dx === cx && dy === cy) {
							switch (oldobj.attr('type')) {
								case 'app':
								case 'pwindow':
								case 'file':

									HROS.window.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'widget':
								case 'pwidget':
									HROS.widget.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'folder':
									HROS.folderView.get(oldobj);
									break;
							}
							return false;
						}
						var movegrid = HROS.grid.searchFolderGrid(cx, cy);
						if (movegrid !== null) {
							if (oldobj.attr('type') !== 'folder') {
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;
								var desk = HROS.CONFIG.desk;

								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataDeskToFolder(id, from, to, desk)) {
											HROS.request.post('/Desk/MemberMove', { moveType: 'desk-folder', memberId: id, from: from, to: to }, function (responseText) {
												if (responseText.IsSuccess) {
													HROS.VAR.isAppMoving = false;
												} else {
													NewCrm.msgbox.fail(responseText.Message);
												}
											})
										}
									}
								} else {
									HROS.app.dataDeskToFolder(id, from, to, desk);
								}
							}
						} else {
							var dock_w = HROS.CONFIG.dockPos === 'left' ? 0 : HROS.CONFIG.dockPos === 'top' ? ($(window).width() - $('#dock-container').width() + 20) / 2 : $(window).width() - $('#dock-container').width();
							var dock_h = HROS.CONFIG.dockPos === 'top' ? 0 : ($(window).height() - $('#dock-container').height() + 20) / 2;
							var movegrid = HROS.grid.searchDockAppGrid(cx - dock_w, cy - dock_h);
							if (movegrid !== null) {
								var movegrid2 = HROS.grid.searchDockAppGrid2(cx - dock_w, cy - dock_h);
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;
								var boa = movegrid2 % 2 === 0 ? 'b' : 'a';
								var desk = HROS.CONFIG.desk;
								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataDeskToDock(id, from, to, boa, desk)) {
											HROS.request.post('/Desk/MemberMove', { moveType: 'desk-dock', memberId: id, from: from, to: to }, function (responseText) {
												if (responseText.IsSuccess) {
													HROS.VAR.isAppMoving = false;
												} else {
													NewCrm.msgbox.fail(responseText.Message);
												}
											})
										}
									}
								} else {
									HROS.app.dataDeskToDock(id, from, to, boa, desk);
								}
							} else {
								var dock_w = HROS.CONFIG.dockPos === 'left' ? $('#dock-bar').width() : 0;
								var dock_h = HROS.CONFIG.dockPos === 'top' ? $('#dock-bar').height() : 0;
								var deskScrollLeft = $('#desk-' + HROS.CONFIG.desk + ' .desktop-apps-container').scrollLeft();
								var deskScrollTop = $('#desk-' + HROS.CONFIG.desk + ' .desktop-apps-container').scrollTop();
								var movegrid = HROS.grid.searchAppGrid(cx - dock_w + deskScrollLeft, cy - dock_h + deskScrollTop);
								if (movegrid !== null && movegrid !== oldobj.index()) {
									var movegrid2 = HROS.grid.searchAppGrid2(cx - dock_w + deskScrollLeft, cy - dock_h + deskScrollTop);
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var boa = movegrid2 % 2 === 0 ? 'b' : 'a';
									var desk = HROS.CONFIG.desk;
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataDeskToDesk(id, from, to, boa, desk)) {
												//待修改
												$.ajax({
													type: 'POST',
													url: ajaxUrl,
													data: 'ac=moveMyApp&movetype=desk-desk&id=' + id + '&from=' + from + '&to=' + to + '&boa=' + boa + '&desk=' + desk
												}).done(function (responseText) {
													HROS.VAR.isAppMoving = false;
												});
											}
										}
									} else {
										HROS.app.dataDeskToDesk(id, from, to, boa, desk);
									}
								}
							}
						}
					});
				}
			});
			//文件夹内应用拖动
			$('body').on('mousedown', '.folder_body .appbtn, .quick_view_container .appbtn', function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (e.button === 0 || e.button === 1) {
					var oldobj = $(this);
					var obj = $('<div id="shortcut_shadow">' + oldobj.html() + '</div>');
					var dx = e.clientX;
					var dy = e.clientY;
					var cx = e.clientX;
					var cy = e.clientY;
					var x = dx - oldobj.offset().left;
					var y = dy - oldobj.offset().top;
					var lay = HROS.maskBox.desk();
					//绑定鼠标移动事件
					$(document).on('mousemove', function (e) {
						$('body').append(obj);
						lay.show();
						cx = e.clientX <= 0 ? 0 : e.clientX >= $(window).width() ? $(window).width() : e.clientX;
						cy = e.clientY <= 0 ? 0 : e.clientY >= $(window).height() ? $(window).height() : e.clientY;
						if (dx !== cx || dy !== cy) {
							obj.css({
								left: cx - x,
								top: cy - y
							}).show();
						}
					}).on('mouseup', function () {

						$(document).off('mousemove').off('mouseup');
						obj.remove();
						lay.hide();
						//判断是否移动应用，如果没有则判断为click事件

						if (dx === cx && dy === cy) {
							switch (oldobj.attr('type')) {
								case 'app':
								case 'window':
								case 'pwindow':
								case 'file':

									HROS.window.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'widget':
								case 'pwidget':
									HROS.widget.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
							}
							return false;
						}
						var movegrid = HROS.grid.searchFolderGrid(cx, cy);
						if (movegrid !== null) {
							if (oldobj.parents('.folder-window').attr('appid') !== movegrid) {
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;
								var fromFolderId = oldobj.parents('.folder-window').attr('appid') || oldobj.parents('.quick_view_container').attr('appid');
								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataFolderToFolder(id, from, to, fromFolderId)) {
											HROS.request.post('/Desk/MemberMove', { moveType: 'folder-folder', memberId: id, from: from, to: to }, function (responseText) {
												if (responseText.IsSuccess) {
													HROS.VAR.isAppMoving = false;
												} else {
													NewCrm.msgbox.fail(responseText.Message);
												}
											})
										}
									}
								} else {
									HROS.app.dataFolderToFolder(id, from, to, fromFolderId);
								}
							}
						} else {
							var dock_w = HROS.CONFIG.dockPos === 'left' ? 0 : HROS.CONFIG.dockPos === 'top' ? ($(window).width() - $('#dock-container').width() + 20) / 2 : $(window).width() - $('#dock-container').width();
							var dock_h = HROS.CONFIG.dockPos === 'top' ? 0 : ($(window).height() - $('#dock-container').height() + 20) / 2;
							var movegrid = HROS.grid.searchDockAppGrid(cx - dock_w, cy - dock_h);
							if (movegrid !== null) {

								var movegrid2 = HROS.grid.searchDockAppGrid2(cx - dock_w, cy - dock_h);
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;
								var fromFolderId = oldobj.parents('.folder-window').attr('appid') || oldobj.parents('.quick_view_container').attr('appid');
								var boa = movegrid2 % 2 === 0 ? 'b' : 'a';
								var desk = HROS.CONFIG.desk;
								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataFolderToDock(id, from, to, fromFolderId, boa, desk)) {
											HROS.request.post('/Desk/MemberMove', { moveType: 'folder-dock', memberId: id, from: from, to: to }, function (responseText) {
												if (responseText.IsSuccess) {
													HROS.VAR.isAppMoving = false;
												} else {
													NewCrm.msgbox.fail(responseText.Message);
												}
											})
										}
									}
								} else {
									HROS.app.dataFolderToDock(id, from, to, fromFolderId, boa, desk);
								}
							} else {
								var dock_w = HROS.CONFIG.dockPos === 'left' ? $('#dock-bar').width() : 0;
								var dock_h = HROS.CONFIG.dockPos === 'top' ? $('#dock-bar').height() : 0;
								var deskScrollLeft = $('#desk-' + HROS.CONFIG.desk + ' .desktop-apps-container').scrollLeft();
								var deskScrollTop = $('#desk-' + HROS.CONFIG.desk + ' .desktop-apps-container').scrollTop();
								var movegrid = HROS.grid.searchAppGrid(cx - dock_w + deskScrollLeft, cy - dock_h + deskScrollTop);
								if (movegrid !== null) {
									var movegrid2 = HROS.grid.searchAppGrid2(cx - dock_w + deskScrollLeft, cy - dock_h + deskScrollTop);
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var fromFolderId = oldobj.parents('.folder-window').attr('appid') || oldobj.parents('.quick_view_container').attr('appid');
									var boa = movegrid2 % 2 === 0 ? 'b' : 'a';
									var desk = HROS.CONFIG.desk;
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataFolderToDesk(id, from, to, fromFolderId, boa, desk)) {
												HROS.request.post('/Desk/MemberMove', { moveType: 'folder-desk', memberId: id, from: from, to: desk }, function (responseText) {
													if (responseText.IsSuccess) {
														HROS.VAR.isAppMoving = false;
													} else {
														NewCrm.msgbox.fail(responseText.Message);
													}
												})
											}
										}
									} else {
										HROS.app.dataFolderToDesk(id, from, to, fromFolderId, boa, desk);
									}
								}
							}
						}
					});
				}
			});
		},
        /*
		**  加载滚动条
		*/
		getScrollbar: function () {
			setTimeout(function () {
				$('#desk .desktop-container').each(function () {
					var desk = $(this).children('.desktop-apps-container'), scrollbar = $(this).children('.scrollbar');
					var scrollbarLeft = desk.nextAll('.scrollbar-x').position().left, scrollbarTop = desk.nextAll('.scrollbar-y').position().top;
					//先清空所有附加样式
					scrollbar.hide();
					desk.scrollLeft(0).scrollTop(0);
                    /*
					**  判断应用排列方式
					**  横向排列超出屏幕则出现纵向滚动条，纵向排列超出屏幕则出现横向滚动条
					*/

					if (HROS.CONFIG.appXY === 'x') {
                        /*
						**  获得桌面应用定位好后的实际高度
						**  因为显示的高度是固定的，而实际的高度是根据应用个数会变化
						*/
						var deskH = parseInt(desk.children('.add').css('top')) + 108;
                        /*
						**  计算滚动条高度
						**  高度公式（应用纵向排列计算滚动条宽度以此类推）：
						**  滚动条实际高度 = 桌面显示高度 / 桌面实际高度 * 滚动条总高度(桌面显示高度)
						**  如果“桌面显示高度 / 桌面实际高度 >= 1”说明应用个数未能超出桌面，则不需要出现滚动条
						*/
						if (desk.height() / deskH < 1) {
							desk.nextAll('.scrollbar-y').height(desk.height() / deskH * desk.height());
							scrollbarTop = scrollbarTop + desk.nextAll('.scrollbar-y').height() > desk.height() ? desk.height() - desk.nextAll('.scrollbar-y').height() : scrollbarTop;
							desk.nextAll('.scrollbar-y').css('top', scrollbarTop).show();
							desk.scrollTop(scrollbarTop / desk.height() * deskH);
						}
					} else {
						var deskW = parseInt(desk.children('.add').css('left')) + 106;
						if (desk.width() / deskW < 1) {
							desk.nextAll('.scrollbar-x').width(desk.width() / deskW * desk.width());
							scrollbarLeft = scrollbarLeft + desk.nextAll('.scrollbar-x').width() > desk.width() ? desk.width() - desk.nextAll('.scrollbar-w').width() : scrollbarLeft;
							desk.nextAll('.scrollbar-x').css('left', scrollbarLeft).show();
							desk.scrollLeft(scrollbarLeft / desk.width() * deskW);
						}
					}
				});
			}, 500);
		},
        /*
		**  移动滚动条
		*/
		moveScrollbar: function () {
            /*
			**  手动拖动
			*/
			$('#desk .scrollbar').on('mousedown', function (e) {
				var x, y, cx, cy, deskrealw, deskrealh, movew, moveh;
				var scrollbar = $(this), desk = scrollbar.prevAll('.desktop-apps-container');
				deskrealw = parseInt(desk.children('.add').css('left')) + 106;
				deskrealh = parseInt(desk.children('.add').css('top')) + 108;
				movew = desk.width() - scrollbar.width();
				moveh = desk.height() - scrollbar.height();
				if (scrollbar.hasClass('scrollbar-x')) {
					x = e.clientX - scrollbar.position().left;
				} else {
					y = e.clientY - scrollbar.position().top;
				}
				$(document).on('mousemove', function (e) {
					if (scrollbar.hasClass('scrollbar-x')) {
						cx = e.clientX - x < 0 ? 0 : e.clientX - x > movew ? movew : e.clientX - x;
						scrollbar.css('left', cx);
						desk.scrollLeft(cx / desk.width() * deskrealw);
					} else {
						cy = e.clientY - y < 0 ? 0 : e.clientY - y > moveh ? moveh : e.clientY - y;
						scrollbar.css('top', cy);
						desk.scrollTop(cy / desk.height() * deskrealh);
					}
				}).on('mouseup', function () {
					$(this).off('mousemove').off('mouseup');
				});
			});
            /*
			**  鼠标滚动
			*/
			for (var i = 1; i <= 5; i++) {
				$('#desk-' + i).on('mousewheel', function (event, delta) {
					var desk = $(this).find('.desktop-apps-container');

					if (HROS.CONFIG.appXY === 'x') {
						var deskrealh = parseInt(desk.find('.add').css('top')) + 108, scrollupdown;
                        /*
						**  delta === -1   往下
						**  delta === 1    往上
						**  200px 是鼠标滚轮每滚一次的距离
						*/
						if (delta < 0) {
							scrollupdown = desk.scrollTop() + 200 > deskrealh - desk.height() ? deskrealh - desk.height() : desk.scrollTop() + 200;
						} else {
							scrollupdown = desk.scrollTop() - 200 < 0 ? 0 : desk.scrollTop() - 200;
						}
						desk.stop(false, true).animate({ scrollTop: scrollupdown }, 300);
						desk.nextAll('.scrollbar-y').stop(false, true).animate({
							top: scrollupdown / deskrealh * desk.height()
						}, 300);
					} else {
						var deskrealw = parseInt(desk.find('.add').css('left')) + 106, scrollleftright;
						if (delta < 0) {
							scrollleftright = desk.scrollLeft() + 200 > deskrealw - desk.width() ? deskrealw - desk.width() : desk.scrollLeft() + 200;
						} else {
							scrollleftright = desk.scrollLeft() - 200 < 0 ? 0 : desk.scrollLeft() - 200;
						}
						desk.stop(false, true).animate({ scrollLeft: scrollleftright }, 300);
						desk.nextAll('.scrollbar-x').stop(false, true).animate({
							left: scrollleftright / deskrealw * desk.width()
						}, 300);
					}
				});
			}
		},
		checkIsMoving: function () {
			var rtn = false;
			if (HROS.VAR.isAppMoving) {
				$.dialog({
					title: '温馨提示',
					icon: 'warning',
					content: '数据正在处理中，请稍后。',
					ok: true
				});
				rtn = true;
			} else {
				HROS.VAR.isAppMoving = true;
			}
			return rtn;
		},
		dataWarning: function () {
			$.dialog({
				title: '温馨提示',
				icon: 'warning',
				content: '数据错误，请刷新后重试。',
				ok: true
			});
		},
		dataDockToFolder: function (id, from, to) {
			var rtn = false;

			$(HROS.VAR.dock).each(function (i) {
				if (this.memberId === parseInt(id)) {

					$(HROS.VAR.folder).each(function (j) {
						if (this.memberId === parseInt(to)) {
							HROS.VAR.folder[j].apps.push(HROS.VAR.dock[i]);
							HROS.VAR.folder[j].apps = HROS.VAR.folder[j].apps.sortBy(function (n) {
								return n.memberId;
							}, true);
							HROS.VAR.dock.splice(i, 1);
							rtn = true;
							return false;
						}
					});
					return false;
				}
			});
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDockToDock: function (id, from, to, boa) {
			var rtn = false;

			if (HROS.VAR.dock[from] !== null) {
				if (to === 0) {
					if (boa === 'b') {
						HROS.VAR.dock.splice(0, 0, HROS.VAR.dock[from]);
					} else {
						HROS.VAR.dock.splice(1, 0, HROS.VAR.dock[from]);
					}
				} else {
					if (boa === 'b') {
						HROS.VAR.dock.splice(to, 0, HROS.VAR.dock[from]);
					} else {
						HROS.VAR.dock.splice(to + 1, 0, HROS.VAR.dock[from]);
					}
				}
				if (from > to) {
					HROS.VAR.dock.splice(from + 1, 1);
				} else {
					HROS.VAR.dock.splice(from, 1);
				}
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDockToDesk: function (id, from, to, boa, desk) {
			var rtn = false;
			desk = eval('HROS.VAR.desk' + desk);
			if (HROS.VAR.dock[from] !== null) {
				if (to === 0) {
					if (boa === 'b') {
						desk.splice(0, 0, HROS.VAR.dock[from]);
					} else {
						desk.splice(1, 0, HROS.VAR.dock[from]);
					}
				} else {
					if (boa === 'b') {
						desk.splice(to, 0, HROS.VAR.dock[from]);
					} else {
						desk.splice(to + 1, 0, HROS.VAR.dock[from]);
					}
				}
				HROS.VAR.dock.splice(from, 1);
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDockToOtherdesk: function (id, from, todesk) {
			var rtn = false;
			todesk = eval('HROS.VAR.desk' + todesk);
			if (HROS.VAR.dock[from] !== null) {
				todesk.push(HROS.VAR.dock[from]);
				HROS.VAR.dock.splice(from, 1);
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDockToDelete: function (id, from) {
			var rtn = false;
			if (HROS.VAR.dock[from] !== null) {
				HROS.VAR.dock.splice(from, 1);
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDeskToFolder: function (id, from, to, desk) {
			var rtn = false;
			desk = eval('HROS.VAR.desk' + desk);

			$(HROS.VAR.folder).each(function (i) {
				if (this.memberId === parseInt(to) && desk[from] !== null) {
					HROS.VAR.folder[i].apps.push(desk[from]);
					HROS.VAR.folder[i].apps = HROS.VAR.folder[i].apps.sortBy(function (n) {
						return n.memberId;
					}, true);
					desk.splice(from, 1);
					rtn = true;
					return false;
				}
			});
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDeskToDock: function (id, from, to, boa, desk) {
			var rtn = false;
			desk = eval('HROS.VAR.desk' + desk);
			if (desk[from] !== null) {
				if (to === 0) {
					if (boa === 'b') {
						HROS.VAR.dock.splice(0, 0, desk[from]);
					} else {
						HROS.VAR.dock.splice(1, 0, desk[from]);
					}
				} else {
					if (boa === 'b') {
						HROS.VAR.dock.splice(to, 0, desk[from]);
					} else {
						HROS.VAR.dock.splice(to + 1, 0, desk[from]);
					}
				}
				desk.splice(from, 1);
				if (HROS.VAR.dock.length > 7) {
					desk.push(HROS.VAR.dock[7]);
					HROS.VAR.dock.splice(7, 1);
				}
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDeskToDesk: function (id, from, to, boa, desk) {
			var rtn = false;
			desk = eval('HROS.VAR.desk' + desk);
			if (desk[from] !== null) {
				if (to === 0) {
					if (boa === 'b') {
						desk.splice(0, 0, desk[from]);
					} else {
						desk.splice(1, 0, desk[from]);
					}
				} else {
					if (boa === 'b') {
						desk.splice(to, 0, desk[from]);
					} else {
						desk.splice(to + 1, 0, desk[from]);
					}
				}
				if (from > to) {
					desk.splice(from + 1, 1);
				} else {
					desk.splice(from, 1);
				}
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataDeskToOtherdesk: function (id, from, to, boa, todesk, fromdesk) {

			var rtn = false;
			fromdesk = eval('HROS.VAR.desk' + fromdesk);
			todesk = eval('HROS.VAR.desk' + todesk);
			if (fromdesk[from] !== null) {
				if (to === 0) {
					if (boa === 'b') {
						todesk.splice(0, 0, fromdesk[from]);
					} else {
						todesk.splice(1, 0, fromdesk[from]);
					}
				} else {
					if (boa === 'b') {
						todesk.splice(to, 0, fromdesk[from]);
					} else {
						todesk.splice(to + 1, 0, fromdesk[from]);
					}
				}
				fromdesk.splice(from, 1);
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataFolderToFolder: function (id, from, to, fromFolderId) {
			var rtn = false, flags = 0, fromKey, toKey;

			$(HROS.VAR.folder).each(function (i) {
				if (this.memberId === parseInt(fromFolderId) && HROS.VAR.folder[i].apps[from] !== null) {
					fromKey = i;
					flags += 1;
				}
				if (this.memberId === parseInt(to)) {
					toKey = i;
					flags += 1;
				}
			});
			if (flags === 2) {
				HROS.VAR.folder[toKey].apps.push(HROS.VAR.folder[fromKey].apps[from]);
				HROS.VAR.folder[toKey].apps = HROS.VAR.folder[toKey].apps.sortBy(function (n) {
					return n.appid;
				}, true);
				HROS.VAR.folder[fromKey].apps.splice(from, 1);
				rtn = true;
			}
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataFolderToDock: function (id, from, to, fromFolderId, boa, desk) {
			var rtn = false;
			desk = eval('HROS.VAR.desk' + desk);

			$(HROS.VAR.folder).each(function (i) {
				if (this.memberId === parseInt(fromFolderId) && HROS.VAR.folder[i].apps[from] !== null) {
					if (to === 0) {
						if (boa === 'b') {
							HROS.VAR.dock.splice(0, 0, HROS.VAR.folder[i].apps[from]);
						} else {
							HROS.VAR.dock.splice(1, 0, HROS.VAR.folder[i].apps[from]);
						}
					} else {
						if (boa === 'b') {
							HROS.VAR.dock.splice(to, 0, HROS.VAR.folder[i].apps[from]);
						} else {
							HROS.VAR.dock.splice(to + 1, 0, HROS.VAR.folder[i].apps[from]);
						}
					}
					HROS.VAR.folder[i].apps.splice(from, 1);
					if (HROS.VAR.dock.length > 7) {
						desk.push(HROS.VAR.dock[7]);
						HROS.VAR.dock.splice(7, 1);
					}
					rtn = true;
					return false;
				}
			});
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataFolderToDesk: function (id, from, to, fromFolderId, boa, desk) {
			var rtn = false;
			desk = eval('HROS.VAR.desk' + desk);

			$(HROS.VAR.folder).each(function (i) {
				if (this.memberId === parseInt(fromFolderId) && HROS.VAR.folder[i].apps[from] !== null) {
					if (to === 0) {
						if (boa === 'b') {
							desk.splice(0, 0, HROS.VAR.folder[i].apps[from]);
						} else {
							desk.splice(1, 0, HROS.VAR.folder[i].apps[from]);
						}
					} else {
						if (boa === 'b') {
							desk.splice(to, 0, HROS.VAR.folder[i].apps[from]);
						} else {
							desk.splice(to + 1, 0, HROS.VAR.folder[i].apps[from]);
						}
					}
					HROS.VAR.folder[i].apps.splice(from, 1);
					rtn = true;
					return false;
				}
			});
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataFolderToOtherdesk: function (id, from, todesk, fromFolderId) {
			var rtn = false;
			todesk = eval('HROS.VAR.desk' + todesk);

			$(HROS.VAR.folder).each(function (i) {
				if (this.memberId === parseInt(fromFolderId) && HROS.VAR.folder[i].apps[from] !== null) {
					todesk.push(HROS.VAR.folder[i].apps[from]);
					HROS.VAR.folder[i].apps.splice(from, 1);
					rtn = true;
					return false;
				}
			});
			if (rtn) {
				if ($('#desktop').is(':visible')) {
					HROS.app.set();
				} else {
					HROS.appmanage.set();
				}
			} else {
				HROS.app.dataWarning();
			}
			return rtn;
		},
		dataAllDockToDesk: function (desk) {
			desk = eval('HROS.VAR.desk' + desk);
			$(HROS.VAR.dock).each(function (i) {
				desk.push(HROS.VAR.dock[i]);
			});
			HROS.VAR.dock.splice(0, HROS.VAR.dock.length);
		},
		dataDeleteByAppid: function (appid) {
			$(HROS.VAR.dock).each(function (i) {
				if (this.appid === appid) {
					HROS.VAR.dock.splice(i, 1);
					return false;
				}
			});

			for (var i = 1; i <= 5; i++) {

				var desk = eval('HROS.VAR.desk' + i);
				$(desk).each(function (j) {
					if (this.appid === appid) {
						desk.splice(j, 1);
						if (this.type === 'folder') {
							$(HROS.VAR.folder).each(function (k) {
								if (this.appid === appid) {
									HROS.VAR.folder.splice(k, 1);
									return false;
								}
							});
						}
						return false;
					}
				});
			}
			$(HROS.VAR.folder).each(function (i) {
				$(this.apps).each(function (j) {
					if (this.appid === appid) {
						HROS.VAR.folder[i].apps.splice(j, 1);
						return false;
					}
				});
			});
		}
	}
})();/*
**  全局视图
*/
HROS.appmanage = (function () {
	return {
        /*
		**  初始化
		*/
		init: function () {
			$('#appmanage .amg_close').off('click').on('click', function () {
				HROS.appmanage.close();
			});
			$('#amg_folder_container').on('contextmenu', '.appbtn', function () {
				return false;
			});
			HROS.appmanage.move();
			HROS.appmanage.moveScrollbar();
		},
		set: function () {
			$('#desktop').hide();
			$('#appmanage').show();
			$('#amg_folder_container .folderItem').show().addClass('folderItem_turn');
			$('#amg_folder_container .folderInner').height($(window).height() - 80);
			//加载应用码头应用
			var dockAppend = '';
			if (HROS.VAR.dock !== '') {

				$(HROS.VAR.dock).each(function (i) {
					dockAppend += appbtnTemp({
						'title': this.name,
						'type': this.type,
						'id': 'd_' + this.memberId,
						'appid': this.memberId,
						'realappid': this.appId == 0 ? this.memberId : this.appId,
						'imgsrc': this.icon
					});
				});
			}
			$('#amg_dock_container').html(dockAppend);
			//加载桌面应用
			for (var j = 0; j < HROS.CONFIG.deskCount; j++) {
				var desk_append = '', desk = eval('HROS.VAR.desk' + (j + 1));
				if (desk !== '') {
					$(desk).each(function (i) {
						desk_append += appbtnTemp({
							'title': this.name,
							'type': this.type,
							'id': 'd_' + this.memberId,
							'appid': this.memberId,
							'realappid': this.appId == 0 ? this.memberId : this.appId,
							'imgsrc': this.icon,
							'appsize': 26
						});
					});
				}
				$('#amg_folder_container .folderItem:eq(' + j + ') .folderInner .appbtn').remove();
				$('#amg_folder_container .folderItem:eq(' + j + ') .folderInner').append(desk_append);
			}
			HROS.appmanage.setPos();
			HROS.appmanage.getScrollbar();
		},
		setPos: function () {
			var manageDockGrid = HROS.grid.getManageDockAppGrid(), manageAppGrid = HROS.grid.getManageAppGrid();
			$('#amg_dock_container .appbtn').each(function (i) {
				$(this).css({
					top: 10,
					left: manageDockGrid[i]['startX'] + 6
				});
			});
			for (var j = 0; j < 5; j++) {
				$('#amg_folder_container .folderItem:eq(' + j + ') .folderInner .appbtn').each(function (i) {
					$(this).css({
						top: manageAppGrid[i]['startY'] + 5,
						left: 0
					});
				});
			}
		},
		move: function () {
			$('#amg_dock_container').on('mousedown', '.appbtn', function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (e.button === 0 || e.button === 1) {
					var oldobj = $(this);
					var obj = $('<div id="shortcut_shadow">' + oldobj.html() + '</div>');
					var dx = e.clientX;
					var dy = e.clientY;
					var cx = e.clientX;
					var cy = e.clientY;
					var x = dx - oldobj.offset().left;
					var y = dy - oldobj.offset().top;
					var lay = HROS.maskBox.desk();
					//绑定鼠标移动事件
					$(document).on('mousemove', function (e) {
						$('body').append(obj);
						lay.show();
						cx = e.clientX <= 0 ? 0 : e.clientX >= $(window).width() ? $(window).width() : e.clientX;
						cy = e.clientY <= 0 ? 0 : e.clientY >= $(window).height() ? $(window).height() : e.clientY;
						if (dx !== cx || dy !== cy) {
							obj.css({
								left: cx - x,
								top: cy - y
							}).show();
						}
					}).on('mouseup', function () {

						$(document).off('mousemove').off('mouseup');
						obj.remove();
						lay.hide();
						//判断是否移动应用，如果没有则判断为click事件

						if (dx === cx && dy === cy) {
							HROS.appmanage.close();
							switch (oldobj.attr('type')) {
								case 'widget':
								case 'pwidget':
									HROS.widget.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'window':
								case 'pwindow':
								case 'folder':

									HROS.window.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
							}
							return false;
						}
						if (cy <= 80) {
							var movegrid = HROS.grid.searchManageDockAppGrid(cx);
							if (movegrid != null && movegrid != oldobj.index()) {
								var movegrid2 = HROS.grid.searchManageDockAppGrid2(cx);
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;
								var boa = movegrid2 % 2 == 0 ? 'b' : 'a';
								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataDockToDock(id, from, to, boa)) {
											//待修改
											$.ajax({
												type: 'POST',
												url: ajaxUrl,
												data: 'ac=moveMyApp&movetype=dock-dock&id=' + id + '&from=' + from + '&to=' + to + '&boa=' + boa
											}).done(function (responseText) {
												HROS.VAR.isAppMoving = false;
											});
										}
									}
								} else {
									HROS.app.dataDockToDock(id, from, to, boa);
								}
							}
						} else {
							var movedesk = parseInt(cx / ($(window).width() / 5));
							var movegrid = HROS.grid.searchManageAppGrid(cy - 80 + $('#amg_folder_container .folderItem:eq(' + movedesk + ') .folderInner').scrollTop());
							if (movegrid != null) {
								var movegrid2 = HROS.grid.searchManageAppGrid2(cy - 80 + $('#amg_folder_container .folderItem:eq(' + movedesk + ') .folderInner').scrollTop());
								var id = oldobj.attr('appid');
								var from = oldobj.index();
								var to = movegrid;
								var boa = movegrid2 % 2 == 0 ? 'b' : 'a';
								var desk = movedesk + 1;
								if (HROS.base.checkLogin()) {
									if (!HROS.app.checkIsMoving()) {
										if (HROS.app.dataDockToDesk(id, from, to, boa, desk)) {
											HROS.request.post('/Desk/MemberMove', { moveType: 'dock-desk', memberId: id, from: from, to: desk }, function (responseText) {
												if (responseText.IsSuccess) {
													HROS.VAR.isAppMoving = false;
												} else {
													NewCrm.msgbox.fail(responseText.Message);
												}
											})
										}
									}
								} else {
									HROS.app.dataDockToDesk(id, from, to, boa, desk);
								}
							}
						}
					});
				}
				return false;
			});
			$('#amg_folder_container').on('mousedown', '.appbtn:not(.add)', function (e) {
				e.preventDefault();
				e.stopPropagation();
				if (e.button == 0 || e.button == 1) {
					var oldobj = $(this);
					var obj = $('<div id="shortcut_shadow2">' + oldobj.html() + '</div>');
					var dx = e.clientX;
					var dy = e.clientY;
					var cx = e.clientX;
					var cy = e.clientY;
					var x = dx - oldobj.offset().left;
					var y = dy - oldobj.offset().top;
					var lay = HROS.maskBox.desk();
					//绑定鼠标移动事件
					$(document).on('mousemove', function (e) {
						$('body').append(obj);
						lay.show();
						cx = e.clientX <= 0 ? 0 : e.clientX >= $(window).width() ? $(window).width() : e.clientX;
						cy = e.clientY <= 0 ? 0 : e.clientY >= $(window).height() ? $(window).height() : e.clientY;
						if (dx != cx || dy != cy) {
							obj.css({
								left: cx - x,
								top: cy - y
							}).show();
						}
					}).on('mouseup', function () {

						$(document).off('mousemove').off('mouseup');
						obj.remove();
						lay.hide();
						//判断是否移动应用，如果没有则判断为click事件

						if (dx == cx && dy == cy) {
							HROS.appmanage.close();
							switch (oldobj.attr('type')) {
								case 'app':

									HROS.window.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'widget':
								case 'pwidget':
									HROS.widget.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
								case 'window':
								case 'pwindow':
								case 'folder':

									HROS.window.create(oldobj.attr('realappid'), oldobj.attr('type'));
									break;
							}
							return false;
						}
						if (cy <= 80) {
							function next() {
								var movegrid = HROS.grid.searchManageDockAppGrid(cx);
								if (movegrid != null) {
									var movegrid2 = HROS.grid.searchManageDockAppGrid2(cx);
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var boa = movegrid2 % 2 == 0 ? 'b' : 'a';
									var desk = oldobj.parent().attr('desk');
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataDeskToDock(id, from, to, boa, desk)) {
												//待修改
												$.ajax({
													type: 'POST',
													url: ajaxUrl,
													data: 'ac=moveMyApp&movetype=desk-dock&id=' + id + '&from=' + from + '&to=' + to + '&boa=' + boa + '&desk=' + desk
												}).done(function (responseText) {
													HROS.VAR.isAppMoving = false;
												});
											}
										}
									} else {
										HROS.app.dataDeskToDock(id, from, to, boa, desk);
									}
								}
							}
							if (HROS.CONFIG.dockPos == 'none') {
								$.dialog({
									title: '温馨提示',
									icon: 'warning',
									content: '当前应用码头处于停用状态，是否开启？',
									ok: function () {
										HROS.dock.updatePos('top');
										next();
									},
									cancel: true
								});
							} else {
								next();
							}
						} else {
							var movedesk = parseInt(cx / ($(window).width() / 5));
							var movegrid = HROS.grid.searchManageAppGrid(cy - 80 + $('#amg_folder_container .folderItem:eq(' + movedesk + ') .folderInner').scrollTop());
							//判断是在同一桌面移动，还是跨桌面移动
							if (movedesk + 1 == oldobj.parent().attr('desk')) {
								if (movegrid != null && movegrid != oldobj.index()) {
									var movegrid2 = HROS.grid.searchManageAppGrid2(cy - 80 + $('#amg_folder_container .folderItem:eq(' + movedesk + ') .folderInner').scrollTop());
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var boa = movegrid2 % 2 == 0 ? 'b' : 'a';
									var desk = movedesk + 1;
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataDeskToDesk(id, from, to, boa, desk)) {
												//待修改
												$.ajax({
													type: 'POST',
													url: ajaxUrl,
													data: 'ac=moveMyApp&movetype=desk-desk&id=' + id + '&from=' + from + '&to=' + to + '&boa=' + boa + '&desk=' + desk
												}).done(function (responseText) {
													HROS.VAR.isAppMoving = false;
												});
											}
										}
									} else {
										HROS.app.dataDeskToDesk(id, from, to, boa, desk);
									}
								}
							} else {
								if (movegrid != null) {
									var movegrid2 = HROS.grid.searchManageAppGrid2(cy - 80 + $('#amg_folder_container .folderItem:eq(' + movedesk + ') .folderInner').scrollTop());
									var id = oldobj.attr('appid');
									var from = oldobj.index();
									var to = movegrid;
									var boa = movegrid2 % 2 == 0 ? 'b' : 'a';
									var todesk = movedesk + 1;
									var fromdesk = oldobj.parent().attr('desk');
									if (HROS.base.checkLogin()) {
										if (!HROS.app.checkIsMoving()) {
											if (HROS.app.dataDeskToOtherdesk(id, from, to, boa, todesk, fromdesk)) {
												HROS.request.post('/Desk/MemberMove', { moveType: 'desk-desk', memberId: id, from: from, to: todesk }, function (responseText) {
													if (responseText.IsSuccess) {
														HROS.VAR.isAppMoving = false;
													} else {
														NewCrm.msgbox.fail(responseText.Message);
													}
												})
											}
										}
									} else {
										HROS.app.dataDeskToOtherdesk(id, from, to, boa, todesk, fromdesk);
									}
								}
							}
						}
					});
				}
				return false;
			});
		},
		getScrollbar: function () {
			$('#amg_folder_container .folderInner').height($(window).height() - 80);
			$('#amg_folder_container .folderItem').each(function () {
				var desk = $(this).find('.folderInner'), deskrealh = parseInt(desk.children('.appbtn:last').css('top')) + 41, scrollbar = desk.next('.scrollBar');
				//记录下滚动条更新前的位置，用于更新后的复原
				var scrollbarTop = scrollbar.position().top;
				//先清空所有附加样式
				scrollbar.hide();
				desk.scrollTop(0);
				if (desk.height() / deskrealh < 1) {
					scrollbar.height(desk.height() / deskrealh * desk.height());
					scrollbarTop = scrollbarTop + scrollbar.height() > desk.height() ? desk.height() - scrollbar.height() : scrollbarTop;
					scrollbar.css('top', scrollbarTop).show();
					desk.scrollTop(scrollbarTop / desk.height() * deskrealh);
				}
			});
		},
		moveScrollbar: function () {
            /*
			**  手动拖动
			*/
			$('.scrollBar').on('mousedown', function (e) {
				var y, cy, deskrealh, moveh;
				var scrollbar = $(this), desk = scrollbar.prev('.folderInner');
				deskrealh = parseInt(desk.children('.appbtn:last').css('top')) + 41;
				moveh = desk.height() - scrollbar.height();
				y = e.clientY - scrollbar.offset().top;
				$(document).on('mousemove', function (e) {
					//减80px是因为顶部dock区域的高度为80px，所以计算移动距离需要先减去80px
					cy = e.clientY - y - 80 < 0 ? 0 : e.clientY - y - 80 > moveh ? moveh : e.clientY - y - 80;
					scrollbar.css('top', cy);
					desk.scrollTop(cy / desk.height() * deskrealh);
				}).on('mouseup', function () {
					$(this).off('mousemove').off('mouseup');
				});
			});
            /*
			**  鼠标滚轮
			*/
			$('#amg_folder_container .folderInner').on('mousewheel', function (event, delta) {
				var desk = $(this), deskrealh = parseInt(desk.children('.appbtn:last').css('top')) + 41, scrollupdown;
                /*
				**  delta == -1   往下
				**  delta == 1    往上
				*/
				if (delta < 0) {
					scrollupdown = desk.scrollTop() + 120 > deskrealh - desk.height() ? deskrealh - desk.height() : desk.scrollTop() + 120;
				} else {
					scrollupdown = desk.scrollTop() - 120 < 0 ? 0 : desk.scrollTop() - 120;
				}
				desk.stop(false, true).animate({
					scrollTop: scrollupdown
				}, 300);
				desk.next('.scrollBar').stop(false, true).animate({
					top: scrollupdown / deskrealh * desk.height()
				}, 300);
			});
		},
		resize: function () {
			HROS.appmanage.getScrollbar();
		},
		close: function () {

			$('#amg_dock_container').html('');
			$('#amg_folder_container .folderInner').html('');
			$('#desktop').show();
			$('#appmanage').hide();
			$('#amg_folder_container .folderItem').removeClass('folderItem_turn');
			HROS.app.set();
			HROS.deskTop.resize();
		}
	}
})();/*
**  一个不属于其他模块的模块
*/
HROS.base = (function () {
	return {
        /*
		**	系统初始化
		*/
		init: function () {
			//配置artDialog全局默认参数
			(function (config) {
				config['lock'] = true;
				config['fixed'] = true;
				config['resize'] = false;
				config['background'] = '#000';
				config['opacity'] = 0.5;
				config['skin'] = 'default';
			})($.dialog.defaults);
			//更新当前用户ID
			HROS.CONFIG.memberID = $.parseJSON($.cookie('Account')).Id;
			//阻止弹出浏览器默认右键菜单
			$('body').on('contextmenu', function () {
				return false;
			});
			//加载皮肤
			HROS.base.getSkin(undefined, function (arg) {
				HROS.base.setSkin(arg, null);
			});
			//版权信息初始化并显示
			HROS.copyright.init();

			//用于判断网页是否缩放
			HROS.zoom.init();

			//桌面(容器)初始化
			HROS.deskTop.init();

			//初始化壁纸
			HROS.wallpaper.init();

			//初始化搜索栏
			HROS.searchbar.init();

			//初始化开始菜单
			HROS.startmenu.init();

			//初始化任务栏
			HROS.taskbar.init();

			//初始化应用码头
			HROS.dock.init();

			//初始化桌面应用
			HROS.app.init();

			//初始化widget模块
			HROS.widget.init();

			//初始化窗口模块
			HROS.window.init();

			//初始化文件夹预览
			HROS.folderView.init();

			//初始化全局视图
			HROS.appmanage.init();

			//初始化右键菜单
			HROS.popupMenu.init();

			//初始化锁屏
			HROS.lock.init();

			//初始化快捷键
			HROS.hotkey.init();

			//页面加载后运行
			HROS.base.run();

			//绑定ajax全局验证
			$(document).ajaxStart(function () {

			});

			//监听表单提交
			$(document).on('submit', function () {
				if (!$.cookie('Account')) {
					NewCrm.msgbox.fail('会话过期,请重新登陆！');
					return false
				}
			})
		},
		login: function () {
			$('.login').animate({
				top: 0
			}, 500, function () {
				changeTabindex('login');
			});
		},
		logout: function () {
			HROS.request.post('/Desk/Logout', {}, function (responseText) {
				location.reload();
			})
		},
		checkLogin: function () {
			return parseInt(HROS.CONFIG.memberID) !== 0 ? true : false;
		},
		getSkin: function (objSkin, callback) {
			if (objSkin === undefined) {
				HROS.request.get('/Desk/GetSkin', {}, function (responseText) {
					if (responseText.IsSuccess) {
						if (typeof (callback) === 'function') {
							callback && callback(responseText.Model);
						}
					}
				})
			} else {
				this.setSkin(objSkin, callback);
			}
		},

		setSkin: function (skin, callback) {
			function styleOnload(node, callback) {
				// for IE6-9 and Opera
				if (node.attachEvent) {
					node.attachEvent('onload', callback);
					// NOTICE:
					// 1. "onload" will be fired in IE6-9 when the file is 404, but in
					// this situation, Opera does nothing, so fallback to timeout.
					// 2. "onerror" doesn't fire in any browsers!
				}
				// polling for Firefox, Chrome, Safari
				else {
					setTimeout(function () {
						poll(node, callback);
					}, 0); // for cache
				}
			}
			function poll(node, callback) {
				if (callback.isCalled) {
					return;
				}
				var isLoaded = false;
				//webkit
				if (/webkit/i.test(navigator.userAgent)) {
					if (node['sheet']) {
						isLoaded = true;
					}
				}
				// for Firefox
				else if (node['sheet']) {
					try {
						if (node['sheet'].cssRules) {
							isLoaded = true;
						}
					} catch (ex) {
						// NS_ERROR_DOM_SECURITY_ERR
						if (ex.code === 1000) {
							isLoaded = true;
						}
					}
				}
				if (isLoaded) {
					// give time to render.
					setTimeout(function () {
						callback();
					}, 1);
				} else {
					setTimeout(function () {
						poll(node, callback);
					}, 1);
				}
			}
			//将原样式修改id，并载入新样式
			$('#window-skin').attr('id', 'window-skin-ready2remove');
			var css = document.createElement('link');
			css.href = '../images/skins/' + skin + '.css?' + version;
			css.rel = 'stylesheet'
			css.id = 'window-skin';
			document.getElementsByTagName('head')[0].appendChild(css);
			//新样式载入完毕后清空原样式
			//方法为参考seajs源码并改编，文章地址：http://www.blogjava.net/Hafeyang/archive/2011/10/08/360183.html
			styleOnload(css, function () {
				$('#window-skin-ready2remove').remove();
				HROS.CONFIG.skin = skin;
				callback && callback();
			});
		},
		help: function () {
			if (!$.browser.msie || ($.browser.msie && $.browser.version < 9)) {
				$('body').append(helpTemp);
				//IE6,7,8基本就告别新手帮助了
				$('#step1').show();
				$('.close').on('click', function () {
					$('#help').remove();
				});
				$('.next').on('click', function () {
					var obj = $(this).parents('.step');
					var step = obj.attr('step');
					obj.hide();
					$('#step' + (parseInt(step) + 1)).show();
				});
				$('.over').on('click', function () {
					$('#help').remove();
				});
			}
		},
		run: function () {
			var url = location.search;
			var request = new Object();
			if (url.indexOf("?") !== -1) {
				var str = url.substr(1);
				var strs = str.split("&");
				for (var i = 0; i < strs.length; i++) {
					request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			}
			if (typeof (request['run']) != 'undefined' && typeof (request['type']) != 'undefined') {

				if (request['type'] === 'app') {
					HROS.window.create(request['run']);
				} else {
					//判断挂件是否存在cookie中，因为如果存在则自动会启动
					if (!HROS.widget.checkCookie(request['run'], request['type'])) {
						HROS.widget.create(request['run']);
					}
				}
			}
		}
	};
})();/*
**  版权信息
*/
HROS.copyright = (function () {
	return {
        /*
		**	初始化
		*/
		init: function () {
			$('#copyright .close').on('click', function () {
				HROS.copyright.hide();
			});
		},
		show: function () {
			var mask = HROS.maskBox.copyright();
			mask.show();
			$('#copyright').show();
		},
		hide: function () {
			var mask = HROS.maskBox.copyright();
			mask.hide();
			$('#copyright').hide();
		}
	}
})();/*
**  桌面
*/
HROS.deskTop = (function () {
	return {
		init: function () {
			//绑定浏览器resize事件
			$(window).on('resize', function () {
				HROS.deskTop.resize();
			});
			$('body').on('click', '#desktop', function () {
				HROS.popupMenu.hide();
				HROS.folderView.hide();
				HROS.searchbar.hide();
				HROS.startmenu.hide();
			}).on('contextmenu', '#desktop', function (e) {
				HROS.popupMenu.hide();
				HROS.folderView.hide();
				HROS.searchbar.hide();
				HROS.startmenu.hide();
				var popupmenu = HROS.popupMenu.desk();
				var l = ($(window).width() - e.clientX) < popupmenu.width() ? (e.clientX - popupmenu.width()) : e.clientX;
				var t = ($(window).height() - e.clientY) < popupmenu.height() ? (e.clientY - popupmenu.height()) : e.clientY;
				popupmenu.css({
					left: l,
					top: t
				}).show();
				return false;
			});
		},
        /*
		**  处理浏览器改变大小后的事件
		*/
		resize: function () {
			if ($('#desktop').is(':visible')) {
				HROS.dock.setPos();
				//更新应用定位

				HROS.app.setPos();
				//更新窗口定位
				HROS.window.setPos();
				//更新文件夹预览定位
				HROS.folderView.setPos();
			} else {
				HROS.appmanage.resize();
			}
			HROS.wallpaper.set(false);
		},
		updateDefaultDesk: function (i) {
			if (HROS.base.checkLogin()) {
				HROS.request.post('/Desk/ModifyDefaultDesk', { deskNum: i }, function (responseText) {
					if (responseText.IsSuccess) {
						NewCrm.msgbox.success('默认桌面更新成功');
						$('.dock-pagination').find('a').each(function (k, v) {
							if (parseInt(i) === (k + 1)) {
								$(this).trigger('click');
							}
						});
					} else {
						NewCrm.msgbox.fail('默认桌面更新失败');
					}
				});
			}
		},
		modifyWallpaperSource: function (value) {
			if (HROS.base.checkLogin()) {
				HROS.request.post('/Desk/ModifyWallpaperSource', { source: value }, function (responseText) {
					if (responseText.IsSuccess) {
						HROS.wallpaper.get(function () { HROS.wallpaper.set() });
					} else {
						NewCrm.msgbox.fail(responseText.Message);
					}
				})
			}
		}
	};
})();/*
**  应用码头
*/
HROS.dock = (function () {
	return {
        /*
		**	初始化
		*/
		init: function () {
			HROS.dock.getPos(function () {
				HROS.dock.setPos();
			});
			//绑定应用码头拖动事件
			HROS.dock.move();
			var dockShowtopFunc;
			$('#dock-container').on('mouseenter', function () {
				dockShowtopFunc = setTimeout(function () {
					$('#dock-container').addClass('showtop');
				}, 300);
			}).on('mouseleave', function () {
				clearInterval(dockShowtopFunc);
				$(this).removeClass('showtop');
			});
			$('body').on('contextmenu', '#dock-container', function (e) {
				HROS.popupMenu.hide();
				HROS.folderView.hide();
				HROS.searchbar.hide();
				HROS.startmenu.hide();
				var popupmenu = HROS.popupMenu.dock();
				var l = ($(window).width() - e.clientX) < popupmenu.width() ? (e.clientX - popupmenu.width()) : e.clientX;
				var t = ($(window).height() - e.clientY) < popupmenu.height() ? (e.clientY - popupmenu.height()) : e.clientY;
				popupmenu.css({
					left: l,
					top: t
				}).show();
				return false;
			});
			//绑定应用码头上各个按钮的点击事件
			$('#dock-bar .dock-tool-setting').on('mousedown', function () {
				return false;
			}).on('click', function () {
				if (HROS.base.checkLogin()) {

					HROS.window.createTemp({
						appid: 'hoorayos-zmsz',
						title: '桌面设置',
						url: '/Desk/ConfigDesk',
						width: 750,
						height: 450,
						isflash: false
					});
				} else {
					HROS.base.login();
				}
			});
			$('#dock-bar .dock-tool-style').on('mousedown', function () {
				return false;
			}).on('click', function () {
				if (HROS.base.checkLogin()) {
					HROS.window.createTemp({
						appid: 'hoorayos-ztsz',
						title: '主题设置',
						url: '/Desk/SystemWallPaper',
						width: 580,
						height: 520,
						isflash: false
					});
				} else {
					HROS.base.login();
				}
			});
			$('#dock-bar .dock-tool-appmanage').on('mousedown', function () {
				return false;
			}).on('click', function () {

				HROS.appmanage.set();

			});
			$('#dock-bar .dock-tool-search').on('mousedown', function () {
				return false;
			}).on('click', function (e) {
				e.stopPropagation();
				HROS.searchbar.get();
			});
			$('#dock-bar .pagination').on('mousedown', function () {
				return false;
			}).on('click', function () {
				HROS.dock.switchDesk($(this).attr('index'));
			});
			$('#dock-bar .dock-tool-start').on('mousedown', function () {
				return false;
			}).on('click', function () {
				HROS.startmenu.show();
				return false;
			});
		},
		setPos: function () {
			HROS.dock.switchDesk(HROS.CONFIG.desk);
			var desktop = $('#desk-' + HROS.CONFIG.desk), desktops = $('#desk .desktop-container');
			var deskW = desktop.css('width', '100%').width(), deskH = desktop.css('height', '100%').height();
			//清除dock位置样式
			$('#dock-container').removeClass('dock-top dock-left dock-right');
			$('#dock-bar').removeClass('top-bar left-bar right-bar').hide();
			if (HROS.CONFIG.dockPos === 'top') {
				$('#dock-bar').addClass('top-bar').children('#dock-container').addClass('dock-top');
				desktops.css({
					'width': deskW,
					'height': deskH - $('#task-bar').height() - $('#dock-bar').height(),
					'left': deskW,
					'top': $('#dock-bar').height()
				});
				desktop.css({
					'left': 0
				});
				$('#dock-bar').show();
			} else if (HROS.CONFIG.dockPos === 'left') {
				$('#dock-bar').addClass('left-bar').children('#dock-container').addClass('dock-left');
				desktops.css({
					'width': deskW - $('#dock-bar').width(),
					'height': deskH - $('#task-bar').height(),
					'left': deskW + $('#dock-bar').width(),
					'top': 0
				});
				desktop.css({
					'left': $('#dock-bar').width()
				});
				$('#dock-bar').show();
			} else if (HROS.CONFIG.dockPos === 'right') {
				$('#dock-bar').addClass('right-bar').children('#dock-container').addClass('dock-right');
				desktops.css({
					'width': deskW - $('#dock-bar').width(),
					'height': deskH - $('#task-bar').height(),
					'left': deskW,
					'top': 0
				});
				desktop.css({
					'left': 0
				});
				$('#dock-bar').show();
			} else if (HROS.CONFIG.dockPos === 'none') {
				desktops.css({
					'width': deskW,
					'height': deskH - $('#task-bar').height(),
					'left': deskW,
					'top': 0
				});
				desktop.css({
					'left': 0
				});
			}
			HROS.taskbar.resize();
			HROS.folderView.setPos();
		},
		updatePos: function (pos) {
			if (pos !== HROS.CONFIG.dockPos && typeof (pos) != 'undefined') {
				HROS.CONFIG.dockPos = pos;
				if (pos === 'none') {
					HROS.app.dataAllDockToDesk(HROS.CONFIG.desk);
				}
				if (HROS.base.checkLogin()) {
					HROS.request.post('/Desk/ModifyDockPosition', { pos: pos, deskNum: HROS.CONFIG.desk }, function (responseText) {
						if (responseText.IsSuccess) {
							NewCrm.msgbox.success('应用码头位置更新成功');
							//更新码头位置
							HROS.dock.setPos();
							//更新桌面应用
							HROS.app.set();
						} else {
							NewCrm.msgbox.fail('应用码头位置更新失败');
						}
					});
				}
			}
		},
		move: function () {
			$('#dock-container').on('mousedown', function (e) {
				if (e.button === 0 || e.button === 1) {
					var lay = HROS.maskBox.dock(), location;
					$(document).on('mousemove', function (e) {
						lay.show();
						if (e.clientY < lay.height() * 0.2) {
							location = 'top';
						} else if (e.clientX < lay.width() * 0.5) {
							location = 'left';
						} else {
							location = 'right';
						}
						$('.dock_drap_effect').removeClass('hover');
						$('.dock_drap_effect_' + location).addClass('hover');
					}).on('mouseup', function () {
						$(document).off('mousemove').off('mouseup');
						lay.hide();
						HROS.dock.updatePos(location);
					});
				}
			});
		},
        /*
		**  切换桌面
		*/
		switchDesk: function (deskNumber) {
			//验证传入的桌面号是否为1-5的正整数
			var r = /^\+?[1-5]*$/;
			deskNumber = r.test(deskNumber) ? deskNumber : 1;
			var pagination = $('#dock-bar .dock-pagination'),
				currindex = HROS.CONFIG.desk,
				switchindex = deskNumber,
				currleft = $('#desk-' + currindex).offset().left,
				switchleft = $('#desk-' + switchindex).offset().left;
			if (currindex !== switchindex) {
				if (!$('#desk-' + switchindex).hasClass('animated') && !$('#desk-' + currindex).hasClass('animated')) {
					$('#desk-' + currindex).addClass('animated').animate({
						left: switchleft
					}, 500, 'easeInOutCirc', function () {
						$(this).removeClass('animated');
					});
					$('#desk-' + switchindex).addClass('animated').animate({
						left: currleft
					}, 500, 'easeInOutCirc', function () {
						$(this).removeClass('animated');
						pagination.removeClass('current-pagination-' + currindex).addClass('current-pagination-' + switchindex);
						HROS.CONFIG.desk = switchindex;
					});
				}
			} else {
				pagination.removeClass('current-pagination-' + currindex).addClass('current-pagination-' + switchindex);
			}
		},
		getPos: function (callback) {
			HROS.request.get('/Desk/GetDockPos', {}, function (responseText) {
				if (responseText.IsSuccess) {
					HROS.CONFIG.dockPos = responseText.Model;
					if (typeof (callback) === 'function') {
						callback && callback();
					}
				}
			})
		}
	};
})();
HROS.folderView = (function () {
	return {
		init: function () {
			$('body').on('click', '.quick_view_container', function () {
				HROS.popupMenu.hide();
			}).on('click', '.quick_view_container_open', function () {

				HROS.window.create($(this).parents('.quick_view_container').attr('appid'), 'folder');
				HROS.folderView.hide();
			}).on('click', '.appbtn', function () {
				HROS.popupMenu.hide();
				HROS.folderView.hide();
				HROS.searchbar.hide();
				HROS.startmenu.hide();
			});
			HROS.folderView.moveScrollbar();
		},
		get: function (obj) {
			setTimeout(function () {
				//判断文件夹窗口是否已打开
				var iswindowopen = false;
				$('body .quick_view_container').each(function () {
					if ($(this).attr('realappid') == obj.attr('realappid')) {
						iswindowopen = true;
						return false;
					}
				});
				if (iswindowopen) {
					var folderViewId = '#qv_' + obj.attr('appid');
				} else {
					HROS.folderView.hide();
				}

				var sc = '';
				$(HROS.VAR.folder).each(function () {
					if (this.memberId == parseInt(obj.attr('appid'))) {
						sc = this.apps;
						return false;
					}
				});
				var folderViewHtml = '', height = 0;
				if (sc != '') {
					$(sc).each(function () {
						folderViewHtml += appbtnTemp({
							'title': this.name,
							'type': this.type,
							'id': 'd_' + this.memberId,
							'appid': this.memberId,
							'realappid': this.appId == 0 ? this.memberId : this.appId,
							'imgsrc': this.icon
						});
					});
					if (sc.length % 4 == 0) {
						height += Math.floor(sc.length / 4) * 60;
					} else {
						height += (Math.floor(sc.length / 4) + 1) * 60;
					}
				} else {
					folderViewHtml = '文件夹为空';
					height += 30;
				}
				//判断是桌面上的文件夹，还是应用码头上的文件夹
				var left, top;
				if (obj.parent('div').hasClass('dock-applist')) {
					left = parseInt(obj.attr('left')) + obj.width();
					top = parseInt(obj.attr('top'));
				} else {
					left = parseInt(obj.attr('left')) + obj.width();
					top = parseInt(obj.attr('top')) - 20;
				}
				//判断预览面板是否有超出屏幕
				var isScrollbar = false;
				if (height + top + 44 > $(window).height()) {
					var outH = height + top + 44 - $(window).height();
					if (outH <= top) {
						top -= outH;
					} else {
						height -= outH - top;
						top = 0;
						isScrollbar = true;
					}
				}
				if (left + 330 > $(window).width()) {
					left -= (330 + obj.width());
					//预览居左
					if (iswindowopen) {
						$(folderViewId + ' .quick_view_container_list_in').html('').append(folderViewHtml);
						$(folderViewId).stop(true, false).animate({ 'left': left, 'top': top }, 500);
						$(folderViewId + ' .perfect_nine_m_l_t').stop(true, false).animate({ 'top': 0, 'height': Math.ceil((height + 24) / 2) }, 200);
						$(folderViewId + ' .perfect_nine_m_l_m').stop(true, false).animate({ 'top': Math.ceil((height + 24) / 2) }, 200).hide();
						$(folderViewId + ' .perfect_nine_m_l_b').stop(true, false).animate({ 'top': Math.ceil((height + 24) / 2), 'height': Math.ceil((height + 24) / 2) + 20 }, 200);
						$(folderViewId + ' .perfect_nine_m_r_t').stop(true, false).animate({ 'top': 0, 'height': obj.offset().top - top }, 200);
						$(folderViewId + ' .perfect_nine_m_r_m').stop(true, false).animate({ 'top': parseInt(obj.attr('top')) - top }, 200).show();
						$(folderViewId + ' .perfect_nine_m_r_b').stop(true, false).animate({ 'top': parseInt(obj.attr('top')) - top + 20, 'height': height + 24 - (parseInt(obj.attr('top')) - top) - 20 + 20 }, 200);
						$(folderViewId + ' .quick_view_container_list_in').stop(true, false).animate({ 'height': height }, 200);
					} else {
						$('body').append(folderViewTemp({
							'id': 'qv_' + obj.attr('appid'),
							'appid': obj.attr('appid'),
							'realappid': obj.attr('realappid'),
							'apps': folderViewHtml,
							'top': top,
							'left': left,
							'height': height,
							'mlt': Math.ceil((height + 24) / 2),
							'mlm': false,
							'mlb': Math.ceil((height + 24) / 2),
							'mrt': obj.offset().top - top,
							'mrm': true,
							'mrb': height + 24 - (obj.offset().top - top) - 20
						}));
					}
				} else {
					//预览居右
					if (iswindowopen) {
						$(folderViewId + ' .quick_view_container_list_in').html('').append(folderViewHtml);
						$(folderViewId).stop(true, false).animate({ 'left': left, 'top': top }, 500);
						$(folderViewId + ' .perfect_nine_m_l_t').stop(true, false).animate({ 'top': 0, 'height': parseInt(obj.attr('top')) - top }, 200);
						$(folderViewId + ' .perfect_nine_m_l_m').stop(true, false).animate({ 'top': parseInt(obj.attr('top')) - top }, 200).show();
						$(folderViewId + ' .perfect_nine_m_l_b').stop(true, false).animate({ 'top': parseInt(obj.attr('top')) - top + 20, 'height': height + 24 - (parseInt(obj.attr('top')) - top) - 20 }, 200);
						$(folderViewId + ' .perfect_nine_m_r_t').stop(true, false).animate({ 'top': 0, 'height': Math.ceil((height + 24) / 2) }, 200);
						$(folderViewId + ' .perfect_nine_m_r_m').stop(true, false).animate({ 'top': Math.ceil((height + 24) / 2) }, 200).hide();
						$(folderViewId + ' .perfect_nine_m_r_b').stop(true, false).animate({ 'top': Math.ceil((height + 24) / 2), 'height': Math.ceil((height + 24) / 2) }, 200);
						$(folderViewId + ' .quick_view_container_list_in').stop(true, false).animate({ 'height': height }, 200);
					} else {
						$('body').append(folderViewTemp({
							'id': 'qv_' + obj.attr('appid'),
							'appid': obj.attr('appid'),
							'realappid': obj.attr('realappid'),
							'apps': folderViewHtml,
							'top': top,
							'left': left,
							'height': height,
							'mlt': obj.offset().top - top,
							'mlm': true,
							'mlb': height + 24 - (obj.offset().top - top) - 20,
							'mrt': Math.ceil((height + 24) / 2),
							'mrm': false,
							'mrb': Math.ceil((height + 24) / 2)
						}));
					}
				}
				var view = '#quick_view_container_list_in_' + obj.attr('appid');
				var scrollbar = '#quick_view_container_list_' + obj.attr('appid') + ' .scrollBar';
				$('#quick_view_container_list_' + obj.attr('appid') + ' .scrollBar_bgc').hide();
				$(scrollbar).hide().height(0);
				if (isScrollbar) {
					$('#quick_view_container_list_' + obj.attr('appid') + ' .scrollBar_bgc').show();
					$(scrollbar).show().height($(view).height() / (Math.ceil($(view).children().length / 4) * 60) * $(view).height());
				}
			}, 0);
		},
		setPos: function () {
			$('body .quick_view_container').each(function () {
				HROS.folderView.get($('#d_' + $(this).attr('appid')));
			});
		},
		moveScrollbar: function () {
            /*
			**  手动拖动
			*/
			$('body').on('mousedown', '.quick_view_container .quick_view_container_list .scrollBar', function (e) {
				var scrollbar = $(this), container = scrollbar.prev('.quick_view_container_list_in');
				var offsetTop = container.offset().top;
				var y, cy, containerrealh, moveh;
				containerrealh = Math.ceil(container.children().length / 4) * 60;
				moveh = container.height() - scrollbar.height();
				y = e.clientY - scrollbar.offset().top;
				$(document).on('mousemove', function (e) {
					cy = e.clientY - y - offsetTop < 0 ? 0 : e.clientY - y - offsetTop > moveh ? moveh : e.clientY - y - offsetTop;
					scrollbar.css('top', cy);
					container.scrollTop(cy / container.height() * containerrealh);
				}).on('mouseup', function () {
					$(this).off('mousemove').off('mouseup');
				});
			});
            /*
			**  鼠标滚轮
			*/
			$('body').on('mousewheel', '.quick_view_container_list_in', function (event, delta) {
				var desk = $(this), deskrealh = Math.ceil($(this).children().length / 4) * 60, scrollupdown;
                /*
				**  delta == -1   往下
				**  delta == 1    往上
				*/
				if (delta < 0) {
					scrollupdown = desk.scrollTop() + 40 > deskrealh - desk.height() ? deskrealh - desk.height() : desk.scrollTop() + 40;
				} else {
					scrollupdown = desk.scrollTop() - 40 < 0 ? 0 : desk.scrollTop() - 40;
				}
				desk.stop(false, true).animate({
					scrollTop: scrollupdown
				}, 300);
				$(this).next('.scrollBar').stop(false, true).animate({
					top: scrollupdown / deskrealh * desk.height()
				}, 300);
			});
		},
		hide: function () {
			$('.quick_view_container').remove();
		}
	}
})();/*
**  应用布局格子
**  这篇文章里有简单说明格子的作用
**  http://hooray.cnblogs.com/p/3480087.html
*/
HROS.grid = (function () {
	return {
		getAppGrid: function () {
			var width = $('#desk-' + HROS.CONFIG.desk).width() - HROS.CONFIG.appButtonLeft;
			var height = $('#desk-' + HROS.CONFIG.desk).height() - HROS.CONFIG.appButtonTop;
			var top = HROS.CONFIG.appButtonTop;
			var left = HROS.CONFIG.appButtonLeft;
			var appGrid = [];
			var offsetTop = HROS.CONFIG.appSize == 's' ? 80 : 100;
			var offsetLeft = HROS.CONFIG.appSize == 's' ? 100 : 120;
			for (var i = 0; i < 10000; i++) {
				appGrid.push({
					startY: top,
					endY: top + offsetTop,
					startX: left,
					endX: left + offsetLeft
				});

				if (HROS.CONFIG.appXY == 'x') {
					left += offsetLeft;
					if (left + offsetLeft > width) {
						top += offsetTop;
						left = HROS.CONFIG.appButtonLeft;
					}
				} else {
					top += offsetTop;
					if (top + offsetTop > height) {
						top = HROS.CONFIG.appButtonTop;
						left += offsetLeft;
					}
				}
			}
			return appGrid;
		},
		searchAppGrid: function (x, y) {
			var grid = HROS.grid.getAppGrid();
			var flag = null;
			for (var i = 0; i < grid.length; i++) {
				if (x >= grid[i].startX && x <= grid[i].endX && y >= grid[i].startY && y <= grid[i].endY) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		searchAppGrid2: function (x, y) {
			var grid = HROS.grid.getAppGrid();
			var grid2 = [];
			for (var i = 0; i < grid.length; i++) {
				var height = grid[i].endY - grid[i].startY;
				var width = grid[i].endX - grid[i].startX;
				var halfH = height / 2;
				var halfW = width / 2;

				if (HROS.CONFIG.appXY == 'x') {
					grid2.push({
						startY: grid[i].startY,
						endY: grid[i].startY + height,
						startX: grid[i].startX,
						endX: grid[i].startX + halfW
					}, {
							startY: grid[i].startY,
							endY: grid[i].startY + height,
							startX: grid[i].startX + halfW,
							endX: grid[i].endX
						});
				} else {
					grid2.push({
						startY: grid[i].startY,
						endY: grid[i].startY + halfH,
						startX: grid[i].startX,
						endX: grid[i].startX + width
					}, {
							startY: grid[i].startY + halfH,
							endY: grid[i].endY,
							startX: grid[i].startX,
							endX: grid[i].startX + width
						});
				}
			}
			var flag = null;
			for (var i = 0; i < grid2.length; i++) {
				if (x >= grid2[i].startX && x <= grid2[i].endX && y >= grid2[i].startY && y <= grid2[i].endY) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		getDockAppGrid: function () {
			var height = $('#dock-bar .dock-applist').height();
			var dockAppGrid = [];
			var top = 0;
			var left = 0;
			var offsetTop = 68;
			var offsetLeft = 68;
			for (var i = 0; i < 7; i++) {
				dockAppGrid.push({
					startY: top,
					endY: top + offsetTop,
					startX: left,
					endX: left + offsetLeft
				});
				top += offsetTop;
				if (top + offsetTop > height) {
					top = 0;
					left += offsetLeft;
				}
			}
			return dockAppGrid;
		},
		searchDockAppGrid: function (x, y) {
			var grid = HROS.grid.getDockAppGrid();
			var flag = null;
			for (var i = 0; i < grid.length; i++) {
				if (x >= grid[i].startX && x <= grid[i].endX && y >= grid[i].startY && y <= grid[i].endY) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		searchDockAppGrid2: function (x, y) {
			var grid = HROS.grid.getDockAppGrid();
			var grid2 = [];
			for (var i = 0; i < grid.length; i++) {
				var height = grid[i].endY - grid[i].startY;
				var width = grid[i].endX - grid[i].startX;
				var halfH = height / 2;
				var halfW = width / 2;
				if (HROS.CONFIG.dockPos == 'top') {
					grid2.push({
						startY: grid[i].startY,
						endY: grid[i].startY + height,
						startX: grid[i].startX,
						endX: grid[i].startX + halfW
					}, {
							startY: grid[i].startY,
							endY: grid[i].startY + height,
							startX: grid[i].startX + halfW,
							endX: grid[i].endX
						});
				} else {
					grid2.push({
						startY: grid[i].startY,
						endY: grid[i].startY + halfH,
						startX: grid[i].startX,
						endX: grid[i].startX + width
					}, {
							startY: grid[i].startY + halfH,
							endY: grid[i].endY,
							startX: grid[i].startX,
							endX: grid[i].startX + width
						});
				}
			}
			var flag = null;
			for (var i = 0; i < grid2.length; i++) {
				if (x >= grid2[i].startX && x <= grid2[i].endX && y >= grid2[i].startY && y <= grid2[i].endY) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		getFolderGrid: function () {

			var folderGrid = [];
			$('.quick_view_container, .folder-window:visible').each(function () {
				folderGrid.push({
					zIndex: $(this).css('z-index'),
					id: $(this).attr('appid'),
					startY: $(this).offset().top,
					endY: $(this).offset().top + $(this).height(),
					startX: $(this).offset().left,
					endX: $(this).offset().left + $(this).width()
				});
			});
			folderGrid.sort(function (x, y) {
				return y['zIndex'] - x['zIndex'];
			});
			return folderGrid;
		},
		searchFolderGrid: function (x, y) {
			var folderGrid = HROS.grid.getFolderGrid();
			var flag = null;
			for (var i = 0; i < folderGrid.length; i++) {
				if (x >= folderGrid[i].startX && x <= folderGrid[i].endX && y >= folderGrid[i].startY && y <= folderGrid[i].endY) {
					flag = folderGrid[i]['id'];
					break;
				}
			}

			return flag;
		},
		getManageDockAppGrid: function () {
			var manageDockAppGrid = [];
			var left = 20;
			for (var i = 0; i < 100; i++) {
				manageDockAppGrid.push({
					startX: left,
					endX: left + 70
				});
				left += 70;
			}
			return manageDockAppGrid;
		},
		searchManageDockAppGrid: function (x) {
			var grid = HROS.grid.getManageDockAppGrid();
			var flag = null;
			for (var i = 0; i < grid.length; i++) {
				if (x >= grid[i].startX && x <= grid[i].endX) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		searchManageDockAppGrid2: function (x) {
			var grid = HROS.grid.getManageDockAppGrid();
			var grid2 = [];
			for (var i = 0; i < grid.length; i++) {
				var width = grid[i].endX - grid[i].startX;
				var halfW = width / 2;
				grid2.push({
					startX: grid[i].startX,
					endX: grid[i].startX + halfW
				}, {
						startX: grid[i].startX + halfW,
						endX: grid[i].endX
					});
			}
			var flag = null;
			for (var i = 0; i < grid2.length; i++) {
				if (x >= grid2[i].startX && x <= grid2[i].endX) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		getManageAppGrid: function () {
			var manageAppGrid = [];
			var top = 0;
			for (var i = 0; i < 10000; i++) {
				manageAppGrid.push({
					startY: top,
					endY: top + 40
				});
				top += 40;
			}
			return manageAppGrid;
		},
		searchManageAppGrid: function (y) {
			var grid = HROS.grid.getManageAppGrid();
			var flag = null;
			for (var i = 0; i < grid.length; i++) {
				if (y >= grid[i].startY && y <= grid[i].endY) {
					flag = i;
					break;
				}
			}
			return flag;
		},
		searchManageAppGrid2: function (y) {
			var grid = HROS.grid.getManageAppGrid();
			var grid2 = [];
			for (var i = 0; i < grid.length; i++) {
				var height = grid[i].endY - grid[i].startY;
				var width = grid[i].endX - grid[i].startX;
				var halfH = height / 2;
				grid2.push({
					startY: grid[i].startY,
					endY: grid[i].startY + halfH
				}, {
						startY: grid[i].startY + halfH,
						endY: grid[i].endY
					});
			}
			var flag = null;
			for (var i = 0; i < grid2.length; i++) {
				if (y >= grid2[i].startY && y <= grid2[i].endY) {
					flag = i;
					break;
				}
			}
			return flag;
		}
	}
})();
HROS.hotkey = (function () {
	return {
		init: function () {
			Mousetrap.bind(['backspace'], function () {
				return false;
			});
			//显示桌面（最小化所有窗口）
			Mousetrap.bind(['alt+d'], function () {
				HROS.window.hideAll();
				return false;
			});
			//显示全局视图
			Mousetrap.bind(['ctrl+up', 'command+up'], function () {
				HROS.appmanage.set();
				return false;
			});
			//调出查询栏
			Mousetrap.bind(['ctrl+f', 'command+f'], function () {
				HROS.searchbar.get();
				return false;
			});
			Mousetrap.bind(['ctrl+1', 'command+1'], function () {
				HROS.dock.switchDesk(1);
				return false;
			});
			Mousetrap.bind(['ctrl+2', 'command+2'], function () {
				HROS.dock.switchDesk(2);
				return false;
			});
			Mousetrap.bind(['ctrl+3', 'command+3'], function () {
				HROS.dock.switchDesk(3);
				return false;
			});
			Mousetrap.bind(['ctrl+4', 'command+4'], function () {
				HROS.dock.switchDesk(4);
				return false;
			});
			Mousetrap.bind(['ctrl+5', 'command+5'], function () {
				HROS.dock.switchDesk(5);
				return false;
			});
			Mousetrap.bind(['ctrl+left', 'command+left'], function () {
				if (parseInt(HROS.CONFIG.desk) - 1 < 1) {
					HROS.dock.switchDesk(5);
				} else {
					HROS.dock.switchDesk(parseInt(HROS.CONFIG.desk) - 1);
				}
				return false;
			});
			Mousetrap.bind(['ctrl+right', 'command+right'], function () {
				if (parseInt(HROS.CONFIG.desk) + 1 > 5) {
					HROS.dock.switchDesk(1);
				} else {
					HROS.dock.switchDesk(parseInt(HROS.CONFIG.desk) + 1);
				}
				return false;
			});
			//锁定
			Mousetrap.bind(['ctrl+l', 'command+l'], function () {
				HROS.lock.show();
				return false;
			});
		}
	}
})();
HROS.lock = (function () {
	return {
		init: function () {
			Mousetrap.bind(['space'], function () {
				$('#lock').click();
				return false;
			});
			$('body').on('click', '#lock', function () {
				if ($('#lock-info').is(':visible')) {
					$('#lock .title').animate({
						top: '10%'
					}, 500);
					$('#lock .tip').animate({
						top: '80%'
					}, 500);
					$('#lock-info').fadeOut();
					Mousetrap.bind(['space'], function () {
						$('#lock').click();
						return false;
					});
					Mousetrap.unbind('esc');
				} else {
					$('#lock .title').animate({
						top: '-200px'
					}, 500);
					$('#lock .tip').animate({
						top: '100%'
					}, 500);
					$('#lock-info').fadeIn();
					$('#lockpassword').val('').focus();
					$('#lock-info .text-tip').text('');
					Mousetrap.bind(['esc'], function () {
						$('#lock').click();
						return false;
					});
					Mousetrap.unbind('space');
				}
			});
			$('body').on('click', '#lock-info', function () {
				return false;
			});
			$('body').on('click', '#lockbtn', function () {
				if ($('#lockpassword').val() !== '') {
					HROS.request.post('/Desk/UnlockScreen', { unlockPassword: $('#lockpassword').val() }, function (responseText) {
						if (responseText.IsSuccess) {
							HROS.lock.hide();
						} else {
							$('#lockpassword').val('').focus();
							$('#lock-info .text-tip').text('解锁密码错误');
						}
					})
				} else {
					$('#lock-info .text-tip').text('请输入解锁密码');
				}
			});
			$('body').on('keydown', '#lockpassword', function (e) {
				if (e.keyCode == '13') {
					$('#lockbtn').click();
				}
			});
		},
		show: function () {
			if ($('#lock').length == 0) {
				if (!HROS.base.checkLogin()) {
					$.dialog({
						title: '温馨提示',
						icon: 'warning',
						content: '锁定功能需要登录后才能使用，为了更好的操作，是否登录？',
						ok: function () {
							HROS.base.login();
						}
					});
				} else {
					var lock = function () {
						$('#desktop').hide();
						var accountinfo = $.parseJSON($.cookie('Account'));
						$('body').append(lockTemp({
							'avatar': accountinfo.AccountFace,
							'accountinfoname': accountinfo.Name
						}));
						//时间，日期，星期信息的显示
						var getTimeDateWeek = function () {
							var time = new Date();
							$('#lock .time').text((time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()));
							var date = time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate() + '，星期';
							switch (time.getDay()) {
								case '1': date += '一'; break;
								case '1': date += '二'; break;
								case '1': date += '三'; break;
								case '1': date += '四'; break;
								case '1': date += '五'; break;
								case '1': date += '六'; break;
								default: date += '日';
							}
							$('#lock .week').text(date);
						};
						getTimeDateWeek();
						lockFunc = setInterval(function () {
							//检查是否有恶意修改源程序绕过锁屏界面
							var iswarning = false;
							if ($('#desktop').is(':visible')) {
								iswarning = true;
							}
							if ($('#lock').length == 0) {
								iswarning = true;
							}
							if ($('#lock').is(':hidden')) {
								iswarning = true;
							}
							//如果有则重新载入锁屏
							if (iswarning) {
								clearInterval(lockFunc);
								$('#lock').remove();
								HROS.lock.show();
							}
							getTimeDateWeek();
						}, 1000);
					};
					if (parseInt(HROS.CONFIG.lockPwdAndLoginPwd)) {
						$.dialog({
							title: '温馨提示',
							icon: 'warning',
							content: '解锁密码默认为登录密码，是否要先进行修改？',
							button: [
								{
									name: '继续锁定',
									callback: function () {
										lock();
									},
									focus: true
								},
								{
									name: '修改解锁密码',
									callback: function () {
										HROS.window.createTemp({
											appid: 'zhsz',
											title: '账号设置',
											url: '/AccountSetting/Index?target=accountsafe',
											width: 550,
											height: 580
										});
									}
								}
							]
						});
					} else {
						lock();
					}
				}
			}
		},
		hide: function () {
			clearInterval(lockFunc);
			$('#lock').remove();
			$('#desktop').show();
		}
	}
})();/*
**  透明遮罩层
**  当拖动应用、窗口等一切可拖动的对象时，会加载一个遮罩层
**  避免拖动时触发或选中一些不必要的操作，安全第一
*/
HROS.maskBox = (function () {
	return {
		desk: function () {
			if (!TEMP.maskBoxDesk) {
				TEMP.maskBoxDesk = $('<div id="maskbox"></div>');
				$('body').append(TEMP.maskBoxDesk);
			}
			return TEMP.maskBoxDesk;
		},
		dock: function () {
			if (!TEMP.maskBoxDock) {
				TEMP.maskBoxDock = $('<div id="maskbox-dockdrap"><div id="docktop" class="dock_drap_effect dock_drap_effect_top"></div><div id="dockleft" class="dock_drap_effect dock_drap_effect_left"></div><div id="dockright" class="dock_drap_effect dock_drap_effect_right"></div><div id="dockmask" class="dock_drap_mask"><div class="dock_drop_region_top"><div class="text">拖放至顶部</div></div><div class="dock_drop_region_left"><div class="text">拖放至左侧</div></div><div class="dock_drop_region_right"><div class="text">拖放至右侧</div></div></div></div>');
				$('body').append(TEMP.maskBoxDock);
			}
			return TEMP.maskBoxDock;
		},
		copyright: function () {
			if (!TEMP.maskBoxCopyright) {
				TEMP.maskBoxCopyright = $('<div id="maskbox-copyright"></div>');
				$('body').append(TEMP.maskBoxCopyright);
			}
			return TEMP.maskBoxCopyright;
		}
	}
})();/*
**  右键菜单
*/
HROS.popupMenu = (function () {
	return {
		init: function () {
			$('.popup-menu').on('contextmenu', function () {
				return false;
			});
			//动态控制多级菜单的显示位置
			$('body').on('mouseenter', '.popup-menu li', function () {
				if ($(this).children('.popup-menu').length == 1) {
					$(this).children('a').addClass('focus');
					$(this).children('.popup-menu').show();
					if ($(this).parents('.popup-menu').offset().left + $(this).parents('.popup-menu').width() * 2 + 10 < $(window).width()) {
						$(this).children('.popup-menu').css({
							left: $(this).parents('.popup-menu').width() - 5,
							top: 0
						});
					} else {
						$(this).children('.popup-menu').css({
							left: -1 * $(this).parents('.popup-menu').width(),
							top: 0
						});
					}
					if ($(this).children('.popup-menu').offset().top + $(this).children('.popup-menu').height() + 10 > $(window).height()) {
						$(this).children('.popup-menu').css({
							top: $(window).height() - $(this).children('.popup-menu').height() - $(this).children('.popup-menu').offset().top - 10
						});
					}
				}
			}).on('mouseleave', '.popup-menu li', function () {
				$(this).children('a').removeClass('focus');
				$(this).children('.popup-menu').hide();
			});
		},
        /*
		**  应用右键
		*/
		app: function (obj) {

			HROS.window.show2under();
			if (!TEMP.popupMenuApp) {
				var internalHtml = '';
				internalHtml += '<div class="popup-menu app-menu"><ul>'
				internalHtml += '<li style="border-bottom:1px solid #F0F0F0"><a menu="open" href="javascript:;">打开</a></li>'
				internalHtml += '<li>'
				internalHtml += '<a menu="move" href="javascript:;">移动到<b class="arrow">»</b></a>'
				internalHtml += '<div class="popup-menu"><ul>'
				for (var i = 1; i <= HROS.CONFIG.deskCount; i++) {
					internalHtml += '<li><a menu="moveto" desk="' + i + '" href="javascript:;">桌面' + i + '</a></li>'
				}
				internalHtml += '</ul></div>'
				internalHtml += '</li>'
				internalHtml += '<li><a menu="edit" href="javascript:;"><b class="edit"></b>编辑</a></li>'
				internalHtml += '<li><a menu="del" href="javascript:;"><b class="uninstall"></b>卸载</a></li>'
				internalHtml += '</ul></div>'
				TEMP.popupMenuApp = $(
					internalHtml
					//'<div class="popup-menu app-menu"><ul>' +
					//	'<li style="border-bottom:1px solid #F0F0F0"><a menu="open" href="javascript:;">打开</a></li>' +
					//	'<li>' +
					//		'<a menu="move" href="javascript:;">移动到<b class="arrow">»</b></a>' +
					//		'<div class="popup-menu"><ul>' +  
					//			'<li><a menu="moveto" desk="1" href="javascript:;">桌面1</a></li>' +
					//			'<li><a menu="moveto" desk="2" href="javascript:;">桌面2</a></li>' +
					//			'<li><a menu="moveto" desk="3" href="javascript:;">桌面3</a></li>' +
					//			'<li><a menu="moveto" desk="4" href="javascript:;">桌面4</a></li>' +
					//			'<li><a menu="moveto" desk="5" href="javascript:;">桌面5</a></li>' +
					//		'</ul></div>' +
					//	'</li>' +
					//	'<li><a menu="edit" href="javascript:;"><b class="edit"></b>编辑</a></li>' +
					//	'<li><a menu="del" href="javascript:;"><b class="uninstall"></b>卸载</a></li>' +
					//'</ul></div>'
				);
				$('body').append(TEMP.popupMenuApp);
			}
			$('.app-menu a[menu="moveto"]').removeClass('disabled');
			if (obj.parent().hasClass('desktop-apps-container')) {
				$('.app-menu a[menu="moveto"]').each(function () {
					if ($(this).attr('desk') == HROS.CONFIG.desk) {
						$(this).addClass('disabled');
					}
				});
			}
			//绑定事件
			$('.app-menu a[menu="moveto"]').off('click').on('click', function () {

				var id = obj.attr('appid'),
					from = obj.index(),
					to = 99999,
					todesk = $(this).attr('desk'),
					fromdesk = HROS.CONFIG.desk,
					fromfolderid = obj.parents('.folder-window').attr('appid') || obj.parents('.quick_view_container').attr('appid');
				if (HROS.base.checkLogin()) {
					if (!HROS.app.checkIsMoving()) {
						var rtn = false;
						if (obj.parent().hasClass('dock-applist')) {
							if (HROS.app.dataDockToOtherdesk(id, from, todesk)) {
								HROS.request.post('/Desk/MemberMove', { moveType: 'desk-desk', memberId: id, from: from, to: todesk }, function (responseText) {
									if (responseText.IsSuccess) {
										HROS.VAR.isAppMoving = false;
									} else {
										NewCrm.msgbox.fail(responseText.Message);
									}
								})
							}
						} else if (obj.parent().hasClass('desktop-apps-container')) {
							if (HROS.app.dataDeskToOtherdesk(id, from, to, 'a', todesk, fromdesk)) {
								HROS.request.post('/Desk/MemberMove', { moveType: 'desk-desk', memberId: id, from: from, to: todesk }, function (responseText) {
									if (responseText.IsSuccess) {
										HROS.VAR.isAppMoving = false;
									} else {
										NewCrm.msgbox.fail(responseText.Message);
									}
								})
							}
						} else {
							if (HROS.app.dataFolderToOtherdesk(id, from, todesk, fromfolderid)) {
								HROS.request.post('/Desk/MemberMove', { moveType: 'folder-desk', memberId: id, from: from, to: todesk }, function (responseText) {
									if (responseText.IsSuccess) {
										HROS.VAR.isAppMoving = false;
									} else {
										NewCrm.msgbox.fail(responseText.Message);
									}
								})
							}
						}
					}
				} else {
					if (obj.parent().hasClass('dock-applist')) {
						HROS.app.dataDockToOtherdesk(id, from, todesk);
					} else if (obj.parent().hasClass('desktop-apps-container')) {
						HROS.app.dataDeskToOtherdesk(id, from, to, 'a', todesk, fromdesk);
					} else {
						HROS.app.dataFolderToOtherdesk(id, from, todesk, fromfolderid);
					}
				}
				$('.popup-menu').hide();
			});
			$('.app-menu a[menu="open"]').off('click').on('click', function () {

				HROS.window.create(obj.attr('realappid'), obj.attr('type'));
				$('.popup-menu').hide();
			});

			$('.app-menu a[menu="edit"]').off('click').on('click', function () {
				if (HROS.base.checkLogin()) {
					$.dialog.open('/Desk/ConfigMember?memberId=' + obj.attr('realappid'), {
						id: 'editdialog',
						title: '编辑应用“' + obj.children('span').text() + '”',
						width: 600,
						height: 350
					});
				} else {
					HROS.base.login();
				}
				$('.popup-menu').hide();
			});
			$('.app-menu a[menu="del"]').off('click').on('click', function () {
				HROS.app.dataDeleteByAppid(obj.attr('appid'));
				HROS.widget.removeCookie(obj.attr('realappid'), obj.attr('type'));
				HROS.app.remove(obj.attr('appid'), function () {
					obj.find('img, span').show().animate({
						opacity: 'toggle',
						width: 0,
						height: 0
					}, 500, function () {
						obj.remove();
						HROS.deskTop.resize();
					});
				});
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuApp;
		},
		papp: function (obj) {
			HROS.window.show2under();
			if (!TEMP.popupMenuPapp) {

				var internalHtml = '';
				internalHtml += '<div class="popup-menu papp-menu"><ul>'
				internalHtml += '<li style="border-bottom:1px solid #F0F0F0"><a menu="open" href="javascript:;">打开</a></li>'
				internalHtml += '<li>'
				internalHtml += '<a menu="move" href="javascript:;">移动到<b class="arrow">»</b></a>'
				internalHtml += '<div class="popup-menu"><ul>'
				for (var i = 1; i <= HROS.CONFIG.deskCount; i++) {
					internalHtml += '<li><a menu="moveto" desk="' + i + '" href="javascript:;">桌面' + i + '</a></li>'
				}
				internalHtml += '</ul></div>'
				internalHtml += '</li>'
				internalHtml += '<li><a menu="edit" href="javascript:;"><b class="edit"></b>编辑</a></li>'
				internalHtml += '<li><a menu="del" href="javascript:;"><b class="del"></b>删除</a></li>'
				internalHtml += '</ul></div>'


				TEMP.popupMenuPapp = $(
					internalHtml
					//'<div class="popup-menu papp-menu"><ul>' +
					//	'<li style="border-bottom:1px solid #F0F0F0"><a menu="open" href="javascript:;">打开</a></li>' +
					//	'<li>' +
					//		'<a menu="move" href="javascript:;">移动到<b class="arrow">»</b></a>' +
					//		'<div class="popup-menu"><ul>' +
					//			'<li><a menu="moveto" desk="1" href="javascript:;">桌面1</a></li>' +
					//			'<li><a menu="moveto" desk="2" href="javascript:;">桌面2</a></li>' +
					//			'<li><a menu="moveto" desk="3" href="javascript:;">桌面3</a></li>' +
					//			'<li><a menu="moveto" desk="4" href="javascript:;">桌面4</a></li>' +
					//			'<li><a menu="moveto" desk="5" href="javascript:;">桌面5</a></li>' +
					//		'</ul></div>' +
					//	'</li>' +
					//	'<li><a menu="edit" href="javascript:;"><b class="edit"></b>编辑</a></li>' +
					//	'<li><a menu="del" href="javascript:;"><b class="del"></b>删除</a></li>' +
					//'</ul></div>'
				);
				$('body').append(TEMP.popupMenuPapp);
			}
			$('.papp-menu a[menu="moveto"]').removeClass('disabled');
			if (obj.parent().hasClass('desktop-apps-container')) {
				$('.papp-menu a[menu="moveto"]').each(function () {
					if ($(this).attr('desk') == HROS.CONFIG.desk) {
						$(this).addClass('disabled');
					}
				});
			}
			//绑定事件
			$('.papp-menu a[menu="moveto"]').off('click').on('click', function () {
				var id = obj.attr('appid'),
					from = obj.index(),
					to = 99999,
					todesk = $(this).attr('desk'),
					fromdesk = HROS.CONFIG.desk,
					fromfolderid = obj.parents('.folder-window').attr('appid') || obj.parents('.quick_view_container').attr('appid');
				if (HROS.base.checkLogin()) {
					var rtn = false;
					if (obj.parent().hasClass('dock-applist')) {
						if (HROS.app.dataDockToOtherdesk(id, from, todesk)) {
							HROS.request.post('/Desk/MemberMove', { moveType: 'dock-otherdesk', memberId: id, from: from, to: todesk }, function (responseText) {
								if (responseText.IsSuccess) {
									HROS.VAR.isAppMoving = false;
								} else {
									NewCrm.msgbox.fail(responseText.Message);
								}
							})
						}
					} else if (obj.parent().hasClass('desktop-apps-container')) {
						if (HROS.app.dataDeskToOtherdesk(id, from, to, 'a', todesk, fromdesk)) {
							HROS.request.post('/Desk/MemberMove', { moveType: 'desk-desk', memberId: id, from: from, to: todesk }, function (responseText) {
								if (responseText.IsSuccess) {
									HROS.VAR.isAppMoving = false;
								} else {
									NewCrm.msgbox.fail(responseText.Message);
								}
							})
						}
					} else {
						if (HROS.app.dataFolderToOtherdesk(id, from, todesk, fromfolderid)) {
							//待修改
							$.ajax({
								type: 'POST',
								url: ajaxUrl,
								data: 'ac=moveMyApp&movetype=folder-otherdesk&id=' + id + '&from=' + from + '&todesk=' + todesk + '&fromfolderid=' + fromfolderid
							}).done(function (responseText) {
								HROS.VAR.isAppMoving = false;
							});
						}
					}
				} else {
					if (obj.parent().hasClass('dock-applist')) {
						HROS.app.dataDockToOtherdesk(id, from, todesk);
					} else if (obj.parent().hasClass('desktop-apps-container')) {
						HROS.app.dataDeskToOtherdesk(id, from, to, 'a', todesk, fromdesk);
					} else {
						HROS.app.dataFolderToOtherdesk(id, from, todesk, fromfolderid);
					}
				}
				$('.popup-menu').hide();
			});
			$('.papp-menu a[menu="open"]').off('click').on('click', function () {

				switch (obj.attr('type')) {
					case 'papp':
						HROS.window.create(obj.attr('realappid'), obj.attr('type'));
						break;
					case 'pwidget':
						HROS.widget.create(obj.attr('realappid'), obj.attr('type'));
						break;
				}
				$('.popup-menu').hide();
			});
			$('.papp-menu a[menu="edit"]').off('click').on('click', function () {
				if (HROS.base.checkLogin()) {
					$.dialog.open('sysapp/dialog/papp.php?id=' + obj.attr('appid'), {
						id: 'editdialog',
						title: '编辑私人应用“' + obj.children('span').text() + '”',
						width: 600,
						height: 450
					});
				} else {
					HROS.base.login();
				}
				$('.popup-menu').hide();
			});
			$('.papp-menu a[menu="del"]').off('click').on('click', function () {
				HROS.app.dataDeleteByAppid(obj.attr('appid'));
				HROS.widget.removeCookie(obj.attr('realappid'), obj.attr('type'));
				HROS.app.remove(obj.attr('appid'), function () {
					obj.find('img, span').show().animate({
						opacity: 'toggle',
						width: 0,
						height: 0
					}, 500, function () {
						obj.remove();
						HROS.deskTop.resize();
					});
				});
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuPapp;
		},
        /*
		**  文件夹右键
		*/
		folder: function (obj) {

			HROS.window.show2under();
			if (!TEMP.popupMenuFolder) {
				var internalHtml = '';
				internalHtml += '<div class="popup-menu folder-menu"><ul><li><a menu="view" href="javascript:;">预览</a></li>'
				internalHtml += '<li style="border-bottom:1px solid #F0F0F0"><a menu="open" href="javascript:;">打开</a></li>'
				internalHtml += '<li>'
				internalHtml += '<a menu="move" href="javascript:;">移动到<b class="arrow">»</b></a>'
				internalHtml += '<div class="popup-menu"><ul>'
				for (var i = 1; i <= HROS.CONFIG.deskCount; i++) {
					internalHtml += '<li><a menu="moveto" desk="' + i + '" href="javascript:;">桌面' + i + '</a></li>'
				}
				internalHtml += '</ul></div>'
				internalHtml += '</li>'
				internalHtml += '<li><a menu="rename" href="javascript:;"><b class="edit"></b>重命名</a></li>'
				internalHtml += '<li><a menu="del" href="javascript:;"><b class="del"></b>删除</a></li>'
				internalHtml += '</ul></div>'




				TEMP.popupMenuFolder = $(
					internalHtml
					//'<div class="popup-menu folder-menu"><ul>' +
					//	'<li><a menu="view" href="javascript:;">预览</a></li>' +
					//	'<li style="border-bottom:1px solid #F0F0F0"><a menu="open" href="javascript:;">打开</a></li>' +
					//	'<li>' +
					//		'<a menu="move" href="javascript:;">移动到<b class="arrow">»</b></a>' +
					//		'<div class="popup-menu"><ul>' +
					//			'<li><a menu="moveto" desk="1" href="javascript:;">桌面1</a></li>' +
					//			'<li><a menu="moveto" desk="2" href="javascript:;">桌面2</a></li>' +
					//			'<li><a menu="moveto" desk="3" href="javascript:;">桌面3</a></li>' +
					//			'<li><a menu="moveto" desk="4" href="javascript:;">桌面4</a></li>' +
					//			'<li><a menu="moveto" desk="5" href="javascript:;">桌面5</a></li>' +
					//		'</ul></div>' +
					//	'</li>' +
					//	'<li><a menu="rename" href="javascript:;"><b class="edit"></b>重命名</a></li>' +
					//	'<li><a menu="del" href="javascript:;"><b class="del"></b>删除</a></li>' +
					//'</ul></div>'
				);
				$('body').append(TEMP.popupMenuFolder);
			}
			$('.folder-menu a[menu="moveto"]').removeClass('disabled');
			if (obj.parent().hasClass('desktop-apps-container')) {
				$('.folder-menu a[menu="moveto"]').each(function () {
					if ($(this).attr('desk') == HROS.CONFIG.desk) {
						$(this).addClass('disabled');
					}
				});
			}
			//绑定事件
			$('.folder-menu a[menu="view"]').off('click').on('click', function () {
				HROS.folderView.get(obj);
				$('.popup-menu').hide();
			});
			$('.folder-menu a[menu="open"]').off('click').on('click', function () {

				HROS.window.create(obj.attr('realappid'), obj.attr('type'));
				$('.popup-menu').hide();
			});
			$('.folder-menu a[menu="moveto"]').off('click').on('click', function () {
				var id = obj.attr('appid'),
					from = obj.index(),
					to = 99999,
					todesk = $(this).attr('desk'),
					fromdesk = HROS.CONFIG.desk,
					fromfolderid = obj.parents('.folder-window').attr('appid') || obj.parents('.quick_view_container').attr('appid');
				if (HROS.base.checkLogin()) {
					var rtn = false;
					if (obj.parent().hasClass('dock-applist')) {
						if (HROS.app.dataDockToOtherdesk(id, from, todesk)) {
							HROS.request.post('/Desk/MemberMove', { moveType: 'dock-otherdesk', memberId: id, from: from, to: todesk }, function (responseText) {
								if (responseText.IsSuccess) {
									HROS.VAR.isAppMoving = false;
								} else {
									NewCrm.msgbox.fail(responseText.Message);
								}
							})

						}
					} else if (obj.parent().hasClass('desktop-apps-container')) {
						if (HROS.app.dataDeskToOtherdesk(id, from, to, 'a', todesk, fromdesk)) {
							HROS.request.post('/Desk/MemberMove', { moveType: 'desk-desk', memberId: id, from: from, to: todesk }, function (responseText) {
								if (responseText.IsSuccess) {
									HROS.VAR.isAppMoving = false;
								} else {
									NewCrm.msgbox.fail(responseText.Message);
								}
							})
						}
					} else {
						if (HROS.app.dataFolderToOtherdesk(id, from, todesk, fromfolderid)) {
							//待修改
							$.ajax({
								type: 'POST',
								url: ajaxUrl,
								data: 'ac=moveMyApp&movetype=folder-otherdesk&id=' + id + '&from=' + from + '&todesk=' + todesk + '&fromfolderid=' + fromfolderid
							}).done(function (responseText) {
								HROS.VAR.isAppMoving = false;
							});
						}
					}
				} else {
					if (obj.parent().hasClass('dock-applist')) {
						HROS.app.dataDockToOtherdesk(id, from, todesk);
					} else if (obj.parent().hasClass('desktop-apps-container')) {
						HROS.app.dataDeskToOtherdesk(id, from, to, 'a', todesk, fromdesk);
					} else {
						HROS.app.dataFolderToOtherdesk(id, from, todesk, fromfolderid);
					}
				}
				$('.popup-menu').hide();
			});
			$('.folder-menu a[menu="rename"]').off('click').on('click', function () {
				if (HROS.base.checkLogin()) {
					$.dialog({
						id: 'addfolder',
						title: '重命名“' + obj.find('span').text() + '”文件夹',
						padding: 0,
						content: editFolderDialogTemp({
							'name': obj.find('span').text(),
							'src': obj.find('img').attr('src')
						}),
						ok: function () {
							if ($('#folderName').val() != '') {
								HROS.request.post('/Desk/ModifyFolderInfo', { name: $('#folderName').val(), icon: $('.folderSelector img').attr('src'), memberId: parseInt(obj.attr('appid')) }, function (responseText) {
									if (responseText.IsSuccess) {
										HROS.app.get();
									}
								})

							} else {
								$('.folderNameError').show();
								return false;
							}
						},
						cancel: true
					});
					$('.folderSelector').off('click').on('click', function () {
						$('.fcDropdown').show();
					});
					$('.fcDropdown_item').off('click').on('click', function () {
						$('.folderSelector img').attr('src', $(this).children('img').attr('src')).attr('idx', $(this).children('img').attr('idx'));
						$('.fcDropdown').hide();
					});
				} else {
					HROS.base.login();
				}
				$('.popup-menu').hide();
			});
			$('.folder-menu a[menu="del"]').off('click').on('click', function () {
				$.dialog({
					id: 'delfolder',
					title: '删除“' + obj.find('span').text() + '”文件夹',
					content: '删除文件夹会将文件夹内的应用移出到桌面',
					icon: 'warning',
					ok: function () {
						HROS.app.remove(obj.attr('appid'), function () {
							HROS.app.dataDeleteByAppid(obj.attr('appid'));
							obj.find('img, span').show().animate({
								opacity: 'toggle',
								width: 0,
								height: 0
							}, 500, function () {
								obj.remove();
								HROS.deskTop.resize();
							});
						});
					},
					cancel: true
				});
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuFolder;
		},
        /*
		**  文件右键
		*/
		file: function (obj) {
			HROS.window.show2under();
			if (!TEMP.popupMenuFile) {
				TEMP.popupMenuFile = $(
					'<div class="popup-menu file-menu"><ul>' +
					'<li style="border-bottom:1px solid #F0F0F0"><a menu="download" href="javascript:;">下载</a></li>' +
					'<li><a menu="del" href="javascript:;"><b class="del"></b>删除</a></li>' +
					'</ul></div>'
				);
				$('body').append(TEMP.popupMenuFile);
			}
			//绑定事件
			$('.file-menu a[menu="download"]').off('click').on('click', function () {
				$('body').append(fileDownloadTemp({
					appid: obj.attr('appid')
				}));
				$('.popup-menu').hide();
			});
			$('.file-menu a[menu="del"]').off('click').on('click', function () {
				HROS.app.dataDeleteByAppid(obj.attr('appid'));
				HROS.app.remove(obj.attr('appid'), function () {
					obj.find('img, span').show().animate({
						opacity: 'toggle',
						width: 0,
						height: 0
					}, 500, function () {
						obj.remove();
						HROS.deskTop.resize();
					});
				});
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuFile;
		},
        /*
		**  应用码头右键
		*/
		dock: function () {
			HROS.window.show2under();
			if (!TEMP.popupMenuDock) {
				TEMP.popupMenuDock = $(
					'<div class="popup-menu dock-menu"><ul>' +
					'<li><a menu="dockPos" pos="top" href="javascript:;"><b class="hook"></b>向上停靠</a></li>' +
					'<li><a menu="dockPos" pos="left" href="javascript:;"><b class="hook"></b>向左停靠</a></li>' +
					'<li><a menu="dockPos" pos="right" href="javascript:;"><b class="hook"></b>向右停靠</a></li>' +
					'<li><a menu="dockPos" pos="none" href="javascript:;">隐藏</a></li>' +
					'</ul></div>'
				);
				$('body').append(TEMP.popupMenuDock);
				//绑定事件
				$('.dock-menu a[menu="dockPos"]').on('click', function () {
					if ($(this).attr('pos') == 'none') {
						$.dialog({
							title: '温馨提示',
							icon: 'warning',
							content: '<p>如果应用码头存在应用，隐藏后会将应用转移到当前桌面。</p><p>若需要再次开启，可在桌面空白处点击右键，进入「 桌面设置 」里开启。</p>',
							ok: function () {
								HROS.dock.updatePos('none');
							},
							cancel: true
						});
					} else {
						HROS.dock.updatePos($(this).attr('pos'));
					}
					$('.popup-menu').hide();
				});
			}
			$('.dock-menu a[menu="dockPos"]').each(function () {
				$(this).children('.hook').hide();
				if ($(this).attr('pos') == HROS.CONFIG.dockPos) {
					$(this).children('.hook').show();
				}
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuDock;
		},
        /*
		**  任务栏右键
		*/
		task: function (obj) {
			HROS.window.show2under();
			if (!TEMP.popupMenuTask) {
				TEMP.popupMenuTask = $(
					'<div class="popup-menu task-menu"><ul>' +
					'<li><a menu="max" href="javascript:;">最大化</a></li>' +
					'<li style="border-bottom:1px solid #F0F0F0"><a menu="hide" href="javascript:;">最小化</a></li>' +
					'<li><a menu="close" href="javascript:;">关闭</a></li>' +
					'</ul></div>'
				);
				$('body').append(TEMP.popupMenuTask);
			}
			//绑定事件
			$('.task-menu a[menu="max"]').off('click').on('click', function () {
				HROS.window.max(obj.attr('appid'), obj.attr('type'));
				$('.popup-menu').hide();
			});
			$('.task-menu a[menu="hide"]').off('click').on('click', function () {
				HROS.window.hide(obj.attr('appid'), obj.attr('type'));
				$('.popup-menu').hide();
			});
			$('.task-menu a[menu="close"]').off('click').on('click', function () {
				HROS.window.close(obj.attr('appid'), obj.attr('type'));
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuTask;
		},
        /*
		**  桌面右键
		*/
		desk: function () {
			HROS.window.show2under();
			if (!TEMP.popupMenuDesk) {
				TEMP.popupMenuDesk = $(
					'<div class="popup-menu desk-menu"><ul>' +
					'<li><a menu="hideall" href="javascript:;">显示桌面</a></li>' +
					'<li style="border-bottom:1px solid #F0F0F0"><a menu="closeall" href="javascript:;">关闭所有窗口</a></li>' +
					'<li>' +
					'<a href="javascript:;">新建<b class="arrow">»</b></a>' +
					'<div class="popup-menu"><ul>' +
					'<li><a menu="addfolder" href="javascript:;"><b class="folder"></b>新建文件夹</a></li>' +
					'<li><a menu="addpapp" href="javascript:;"><b class="customapp"></b>新建私人应用</a></li>' +
					'</ul></div>' +
					'</li>' +
					'<li style="border-bottom:1px solid #F0F0F0"><b class="upload"></b><a menu="uploadfile" href="javascript:;">上传文件</a></li>' +
					'<li><a menu="themes" href="javascript:;"><b class="themes"></b>主题设置</a></li>' +
					'<li><a menu="setting" href="javascript:;"><b class="setting"></b>桌面设置</a></li>' +
					'<li style="border-bottom:1px solid #F0F0F0">' +
					'<a href="javascript:;">图标设置<b class="arrow">»</b></a>' +
					'<div class="popup-menu"><ul>' +
					'<li>' +
					'<a href="javascript:;">排列<b class="arrow">»</b></a>' +
					'<div class="popup-menu"><ul>' +
					'<li><a menu="orderby" orderby="x" href="javascript:;"><b class="hook"></b>横向排列</a></li>' +
					'<li><a menu="orderby" orderby="y" href="javascript:;"><b class="hook"></b>纵向排列</a></li>' +
					'</ul></div>' +
					'</li>' +
					'<li>' +
					'<a href="javascript:;">尺寸<b class="arrow">»</b></a>' +
					'<div class="popup-menu"><ul>' +
					'<li><a menu="size" size="32" href="javascript:;"><b class="hook"></b>小图标</a></li>' +
					'<li><a menu="size" size="48" href="javascript:;"><b class="hook"></b>常规图标</a></li>' +
					'<li><a menu="size" size="64" href="javascript:;"><b class="hook"></b>大图标</a></li>' +
					'</ul></div>' +
					'</li>' +
					'</ul></div>' +
					'</li>' +
					'<li><a menu="lock" href="javascript:;">锁定</a></li>' +
					'<li><a menu="logout" href="javascript:;">注销</a></li>' +
					'</ul></div>'
				);
				$('body').append(TEMP.popupMenuDesk);
				if (!HROS.base.checkLogin()) {
					$('body .desk-menu li a[menu="logout"]').parent().remove();
				}
				//绑定事件
				$('.desk-menu a[menu="orderby"]').on('click', function () {
					HROS.app.updateXY($(this).attr('orderby'));
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="size"]').on('click', function () {
					HROS.app.updateSize($(this).attr('size'));
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="hideall"]').on('click', function () {
					HROS.window.hideAll();
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="closeall"]').on('click', function () {
					HROS.window.closeAll();
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="addfolder"]').on('click', function () {
					if (HROS.base.checkLogin()) {
						$.dialog({
							id: 'addfolder',
							title: '新建文件夹',
							padding: 0,
							content: editFolderDialogTemp({
								'name': '新建文件夹',
								'src': '~/images/ui/folder_default.png'
							}),
							ok: function () {
								if ($('#folderName').val() != '') {
									HROS.request.post('/Desk/CreateFolder', {
										folderName: $('#folderName').val(),
										folderImg: $('.folderSelector img').attr('src'),
										deskId: HROS.CONFIG.desk
									}, function (responseText) {
										HROS.app.get();
									})
								} else {
									$('.folderNameError').show();
									return false;
								}
							},
							cancel: true
						});
						$('.folderSelector').on('click', function () {
							$('#addfolder .fcDropdown').show();
							return false;
						});
						$(document).click(function () {
							$('#addfolder .fcDropdown').hide();
						});
						$('.fcDropdown_item').on('click', function () {
							$('.folderSelector img').attr('src', $(this).children('img').attr('src')).attr('idx', $(this).children('img').attr('idx'));
							$('#addfolder .fcDropdown').hide();
						});
					} else {
						HROS.base.login();
					}
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="addpapp"]').on('click', function () {
					if (HROS.base.checkLogin()) {
						$.dialog.open('sysapp/dialog/papp.php?desk=' + HROS.CONFIG.desk, {
							id: 'editdialog',
							title: '新建私人应用',
							width: 600,
							height: 450
						});
					} else {
						HROS.base.login();
					}
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="uploadfile"]').on('click', function () {
					NewCrm.msgbox.info("正在开发中....")
					//HROS.window.createTemp({
					//    appid: 'hoorayos-scwj',
					//    title: '上传文件',
					//    url: 'sysapp/upload/index.php',
					//    width: 750,
					//    height: 600,
					//    isflash: false
					//});
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="themes"]').on('click', function () {
					if (HROS.base.checkLogin()) {
						HROS.window.createTemp({
							appid: 'hoorayos-ztsz',
							title: '主题设置',
							url: '/Desk/SystemWallPaper',
							width: 580,
							height: 520,
							isflash: false
						});
					} else {
						HROS.base.login();
					}
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="setting"]').on('click', function () {
					if (HROS.base.checkLogin()) {
						HROS.window.createTemp({
							appid: 'hoorayos-zmsz',
							title: '桌面设置',
							url: '/Desk/ConfigDesk',
							width: 750,
							height: 450,
							isflash: false
						});
					} else {
						HROS.base.login();
					}
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="lock"]').on('click', function () {
					HROS.lock.show();
					$('.popup-menu').hide();
				});
				$('.desk-menu a[menu="logout"]').on('click', function () {
					HROS.base.logout();
					$('.popup-menu').hide();
				});
			}
			$('.desk-menu a[menu="orderby"]').each(function () {
				$(this).children('.hook').hide();

				if ($(this).attr('orderby') == HROS.CONFIG.appXY) {
					$(this).children('.hook').show();
				}
				$('.popup-menu').hide();
			});
			$('.desk-menu a[menu="size"]').each(function () {
				$(this).children('.hook').hide();
				if ($(this).attr('size') == HROS.CONFIG.appSize) {
					$(this).children('.hook').show();
				}
				$('.popup-menu').hide();
			});
			return TEMP.popupMenuDesk;
		},
		hide: function () {
			$('.popup-menu').hide();
		}
	}
})();/*
**  搜索栏
*/
HROS.searchbar = (function () {
	return {
        /*
		**  初始化
		*/
		init: function () {
			$('#pageletSearchInput').on('click', function () {
				return false;
			});
			$('#search-suggest .resultBox').on('click', 'li', function () {

				switch ($(this).attr('type')) {
					case 'window':
						HROS.window.create($(this).attr('realappid'), $(this).attr('type'));
						break;
					case 'widget':
						HROS.widget.create($(this).attr('realappid'), $(this).attr('type'));
						break;
				}
			});
			$('#search-suggest .openAppMarket a, #pageletSearchButton').on('click', function () {
				HROS.searchbar.openAppMarket($('#pageletSearchInput').val());
			});
			$('#pageletSearchInput').on('keydown', function (e) {
				if (e.keyCode == '13') {
					if ($('#search-suggest .resultBox .resultList a.selected').length == 0 && $('#search-suggest > .resultList a.selected').length == 0) {

						HROS.searchbar.openAppMarket($(this).val());
					} else {
						$('#search-suggest .resultList a.selected').click();
					}
				}
			});
		},
		get: function () {
			var oldSearchVal = '';
			searchFunc = setInterval(function () {
				var searchVal = $('#pageletSearchInput').val();
				if (searchVal != '') {
					$('#search-suggest').show();
					if (searchVal != oldSearchVal) {
						oldSearchVal = searchVal;
						HROS.searchbar.getSuggest(searchVal);
					}
					$('#search-bar').removeClass('above').addClass('above');
				} else {
					$('#search-suggest').hide();
					$('#search-bar').removeClass('above');
				}
			}, 1000);
			HROS.searchbar.set();
			Mousetrap.bind(['up'], function () {
				if ($('#search-suggest .resultBox .resultList a.selected').length == 0 && $('#search-suggest > .resultList a.selected').length == 0) {
					$('#search-suggest > .resultList:last a').addClass('selected');
				} else {
					if ($('#search-suggest .resultBox .resultList:first a').hasClass('selected')) {
						$('#search-suggest .resultList a').removeClass('selected');
					} else {
						if ($('#search-suggest > .resultList a.selected').length != 0) {
							var i = $('#search-suggest > .resultList a.selected').parent('.resultList').index();
							$('#search-suggest .resultList a').removeClass('selected');
							if (i > 1) {
								$('#search-suggest > .resultList:eq(' + (i - 1) + ') a').addClass('selected');
							} else {
								$('#search-suggest .resultBox .resultList:last a').addClass('selected');
							}
						} else {
							var i = $('#search-suggest .resultBox .resultList a.selected').parent('.resultList').index();
							$('#search-suggest .resultList a').removeClass('selected');
							if (i > 0) {
								$('#search-suggest .resultBox .resultList:eq(' + (i - 1) + ') a').addClass('selected');
							}
						}
					}
				}
				return false;
			});
			Mousetrap.bind(['down'], function () {
				if ($('#search-suggest .resultBox .resultList a.selected').length == 0 && $('#search-suggest > .resultList a.selected').length == 0) {
					if ($('#search-suggest .resultBox .resultList').length == 0) {
						$('#search-suggest > .resultList:first a').addClass('selected');
					} else {
						$('#search-suggest .resultBox .resultList:first a').addClass('selected');
					}
				} else {
					if ($('#search-suggest > .resultList:last a').hasClass('selected')) {
						$('#search-suggest .resultList a').removeClass('selected');
					} else {
						if ($('#search-suggest .resultBox .resultList a.selected').length != 0) {
							var i = $('#search-suggest .resultBox .resultList a.selected').parent('.resultList').index();
							$('#search-suggest .resultList a').removeClass('selected');
							if (i < $('#search-suggest .resultBox .resultList').length - 1) {
								$('#search-suggest .resultBox .resultList:eq(' + (i + 1) + ') a').addClass('selected');
							} else {
								$('#search-suggest > .resultList:first a').addClass('selected');
							}
						} else {
							var i = $('#search-suggest > .resultList a.selected').parent('.resultList').index();
							$('#search-suggest .resultList a').removeClass('selected');
							if (i < $('#search-suggest > .resultList').length - 1) {
								$('#search-suggest > .resultList:eq(' + (i + 1) + ') a').addClass('selected');
							} else {
								$('#search-suggest .resultBox .resultList:first a').addClass('selected');
							}
						}
					}
				}
				return false;
			});
			Mousetrap.bind(['backspace'], function () { });
		},
		set: function () {
			$('#search-bar').show();
			$('#search-suggest .resultList a').removeClass('selected');
			$('#pageletSearchInput').focus();
		},
		getSuggest: function (val) {
			var apps = [];
			$(HROS.VAR.dock).each(function () {
				if ($.inArray(this.type, ['window', 'widget']) >= 0) {
					apps.push(this);
				}
			});
			for (var i = 1; i <= 5; i++) {
				var desk = eval('HROS.VAR.desk' + i);
				$(desk).each(function () {
					if ($.inArray(this.type, ['window', 'widget']) >= 0) {
						apps.push(this);
					}
				});
			}

			$(HROS.VAR.folder).each(function () {
				$(this.apps).each(function () {
					if ($.inArray(this.type, ['window', 'widget']) >= 0) {
						apps.push(this);
					}
				});
			});
			var suggest = '';
			$(apps).each(function () {
				if (this.name.indexOf(val) >= 0) {
					suggest += suggestTemp({
						'name': this.name,
						'appid': this.appid,
						'realappid': this.realappid,
						'type': this.type
					});
				}
			});
			$('#search-suggest .resultBox').html(suggest);
			if (suggest == '') {
				$('#search-suggest .resultBox').hide();
			} else {
				$('#search-suggest .resultBox').show();
			}
			HROS.searchbar.set();
		},
		openAppMarket: function (searchkey) {
			if (searchkey != '') {
				HROS.window.createTemp({
					appid: 'hoorayos-yysc',
					title: '大资本市场',
					url: '/AppMarket/Index?searchText=' + searchkey,
					width: 800,
					height: 484,
					isflash: false,
					refresh: true
				});
			}
			HROS.searchbar.hide();
		},
		hide: function () {
			if (typeof (searchFunc) != 'undefined') {
				clearInterval(searchFunc);
			}
			$('#search-bar').removeClass('above');
			$('#search-bar, #search-suggest').hide();
			$('#pageletSearchInput').val('');
			$('#search-suggest .resultBox').html('');
			Mousetrap.unbind(['up', 'down']);
		}
	}
})();/*
**  开始菜单
*/
HROS.startmenu = (function () {
	return {
        /*
		**	初始化
		*/
		init: function () {
			//HROS.startmenu.getAvatar();
			$('#startmenu-container').on('mousedown', function (e) {
				e.preventDefault();
			});
			$('#startmenu-container .startmenu-nick a, #startmenu-container .startmenu-avatar img').on('click', function () {
				HROS.startmenu.openAccount();
			});
			$('#startmenu-container .startmenu-exit a').on('click', function () {
				HROS.base.logout();
			});
			$('#startmenu-container .startmenu-lock').on('click', function () {

				HROS.lock.show();
			});
			$('#startmenu-container .startmenu-feedback').on('click', function () {
				HROS.window.createTemp({
					appid: 'hoorayos-feedback',
					title: '反馈',
					url: 'about:blank',
					width: 700,
					height: 500,
					isflash: false
				});
			});
			$('#startmenu-container .startmenu a').on('click', function () {
				switch ($(this).attr('class')) {
					case 'help':
						HROS.base.help();
						break;
					case 'about':
						HROS.copyright.show();
						break;
				}
			});
		},
        /*
		**  获取头像
		*/
		getAvatar: function () {
			HROS.request.get('/Desk/GetAccountFace', {}, function (responseText) {
				if (responseText.IsSuccess) {
					$('#startmenu-container .startmenu-avatar img').attr('src', responseText.Model);
				}
			});
		},
        /*
		**  账号设置窗口
		*/
		openAccount: function () {
			if (HROS.CONFIG.memberID != 0) {
				HROS.window.createTemp({
					appid: 'zhsz',
					title: '账号设置',
					url: '/AccountSetting/Index',
					width: 800,
					height: 600
				});
			} else {
				HROS.base.login();
			}
		},
		show: function () {
			HROS.popupMenu.hide();
			HROS.folderView.hide();
			HROS.searchbar.hide();
			$('#startmenu-container').css({
				top: 'auto',
				left: 'auto',
				right: 'auto',
				bottom: 'auto'
			}).show();
			switch (HROS.CONFIG.dockPos) {
				case 'top':
					$('#startmenu-container').css({
						top: $('#dock-container').height() - 1,
						right: $('#dock-container').offset().left
					});
					break;
				case 'left':
					$('#startmenu-container').css({
						bottom: $('#dock-container').offset().top,
						left: $('#dock-container').width() - 1
					});
					break;
				case 'right':
					$('#startmenu-container').css({
						bottom: $('#dock-container').offset().top,
						right: $('#dock-container').width() - 1
					});
					break;
			}
		},
		hide: function () {
			$('#startmenu-container').hide();
		}
	}
})();/*
**  任务栏
*/
HROS.taskbar = (function () {
	return {
        /*
		**  初始化
		*/
		init: function () {
			//当浏览器窗口改变大小时，任务栏的显示也需进行刷新
			$(window).on('resize', function () {
				HROS.taskbar.resize();
			});
			//绑定任务栏点击事件
			HROS.taskbar.click();
			//绑定任务栏前进后退按钮事件
			HROS.taskbar.pageClick();
		},
		click: function () {
			$('#task-content-inner').on('click', 'a.task-item', function () {

				if ($(this).hasClass('task-item-current')) {
					HROS.window.hide($(this).attr('appid'));
				} else {
					HROS.window.show2top($(this).attr('appid'));
				}
			}).on('contextmenu', 'a.task-item', function (e) {
				$('.popup-menu').hide();
				$('.quick_view_container').remove();
				var popupmenu = HROS.popupMenu.task($(this));
				var l = $(window).width() - e.clientX < popupmenu.width() ? e.clientX - popupmenu.width() : e.clientX;
				var t = e.clientY - popupmenu.height();
				popupmenu.css({
					left: l,
					top: t
				}).show();
				return false;
			});
		},
		pageClick: function () {
			$('#task-next-btn').on('click', function () {
				if ($(this).hasClass('disable') == false) {
					var w = $('#task-bar').width(), realW = $('#task-content-inner .task-item').length * 114, showW = w - 112, overW = realW - showW;
					var marginL = parseInt($('#task-content-inner').css('margin-left')) - 114;
					if (marginL <= overW * -1) {
						marginL = overW * -1;
						$('#task-next a').addClass('disable');
					}
					$('#task-pre a').removeClass('disable');
					$('#task-content-inner').animate({
						marginLeft: marginL
					}, 200);
				}
			});
			$('#task-pre-btn').on('click', function () {
				if ($(this).hasClass('disable') == false) {
					var marginL = parseInt($('#task-content-inner').css('margin-left')) + 114;
					if (marginL >= 0) {
						marginL = 0;
						$('#task-pre a').addClass('disable');
					}
					$('#task-next a').removeClass('disable');
					$('#task-content-inner').animate({
						marginLeft: marginL
					}, 200);
				}
			});
		},
		resize: function () {
			$('#task-content-inner').removeClass('fl');
			if (HROS.CONFIG.dockPos == 'left') {
				$('#task-bar').css({
					'left': $('#dock-bar').width(),
					'right': 0
				});
			} else if (HROS.CONFIG.dockPos == 'right') {
				$('#task-bar').css({
					'left': 0,
					'right': $('#dock-bar').width()
				});
				$('#task-content-inner').addClass('fl');
			} else {
				$('#task-bar').css({
					'left': 0,
					'right': 0
				});
			}
			var w = $('#task-bar').width(), realW = $('#task-content-inner .task-item').length * 114, showW = w - 112;
			$('#task-content-inner').css('width', realW);
			if (realW >= showW) {
				$('#task-next, #task-pre').show();
				$('#task-content').css('width', showW);
				$('#task-content-inner').addClass('fl').stop(true, false).animate({
					marginLeft: 0
				}, 200);
				$('#task-next a').removeClass('disable');
				$('#task-pre a').addClass('disable');
			} else {
				$('#task-next, #task-pre').hide();
				$('#task-content').css('width', '100%');
				$('#task-content-inner').css({
					'margin-left': 0,
					'margin-right': 0
				});
			}
		}
	}
})();/*
**  壁纸
*/
HROS.wallpaper = (function () {
	return {
        /*
		**	初始化
		*/
		init: function () {
			HROS.wallpaper.get(function () {
				HROS.wallpaper.set();
			});
		},
        /*
		**	获得壁纸
		**	通过ajax到后端获取壁纸信息，同时设置壁纸
		*/
		get: function (callback) {
			HROS.request.get('/Desk/GetWallpaper', {}, function (responseText) {
				if (responseText.IsSuccess) {
					var values = responseText.Model;
					HROS.CONFIG.wallpaperState = values.WallpaperSource;
					switch (HROS.CONFIG.wallpaperState) {
						case 'upload':
						case 'system':
							HROS.CONFIG.wallpaper = values.WallpaperUrl;
							HROS.CONFIG.wallpaperType = values.WallpaperMode;
							HROS.CONFIG.wallpaperWidth = values.WallpaperWidth;
							HROS.CONFIG.wallpaperHeight = values.WallpaperHeigth;
							break;
						case 'bing':
						case 'web':
							HROS.CONFIG.wallpaperType = values.WallpaperMode;
							HROS.CONFIG.wallpaper = values.WallpaperUrl;
							break;
					}
					if (typeof (callback) === 'function') {
						callback && callback();
					}
				}
			});
		},
        /*
		**	设置壁纸
		**	平铺和居中可直接用css样式background解决
		**	而填充、适应和拉伸则需要进行模拟
		*/
		set: function (isreload) {
            /*
			**  判断壁纸是否需要重新载入
			**  比如当浏览器尺寸改变时，只需更新壁纸，而无需重新载入
			*/
			isreload = typeof (isreload) == 'undefined' ? true : isreload;

			if (isreload) {
				$('#zoomWallpaperGrid').attr('id', 'zoomWallpaperGrid-ready2remove').css('zIndex', -11);
				setTimeout(function () {
					$('#zoomWallpaperGrid-ready2remove').remove();
					$('#zoomWallpaperGrid').removeClass('radi');
				}, 1500);
			}
			var w = $(window).width(), h = $(window).height();
			switch (HROS.CONFIG.wallpaperState) {
				case 'upload':
				case 'system':
					var t;
					var l;
					switch (HROS.CONFIG.wallpaperType) {
						//平铺
						case 'tile':
							if (isreload) {
								$('body').append('<div id="zoomWallpaperGrid" class="radi" style="position:absolute;z-index:-10;top:0;left:0;height:100%;width:100%;background:#fff url(' + HROS.CONFIG.wallpaper + ') repeat"></div>');
							}
							break;
						//居中
						case 'center':
							if (isreload) {
								$('body').append('<div id="zoomWallpaperGrid" class="radi" style="position:absolute;z-index:-10;top:0;left:0;height:100%;width:100%;background:#fff url(' + HROS.CONFIG.wallpaper + ') no-repeat 50% 50%"></div>');
							}
							break;
						//填充
						case 'fill':
							t = (h - HROS.CONFIG.wallpaperHeight) / 2;
							l = (w - HROS.CONFIG.wallpaperWidth) / 2;
							if (isreload) {
								$('body').append('<div id="zoomWallpaperGrid" class="radi" style="position:absolute;z-index:-10;left:0;top:0;overflow:hidden;height:' + h + 'px;width:' + w + 'px;background:#fff"><img id="zoomWallpaper" src="' + HROS.CONFIG.wallpaper + '" style="position:absolute;height:' + HROS.CONFIG.wallpaperHeight + 'px;width:' + HROS.CONFIG.wallpaperWidth + 'px;top:' + t + 'px;left:' + l + 'px"><div style="position:absolute;height:' + h + 'px;width:' + w + 'px;background:#fff;opacity:0;filter:alpha(opacity=0)"></div></div>');
							} else {
								$('#zoomWallpaperGrid, #zoomWallpaperGrid div').css({
									height: h + 'px',
									width: w + 'px'
								});
								$('#zoomWallpaper').css({
									top: t + 'px',
									left: l + 'px'
								});
							}
							break;
						//适应
						case 'adapted':
							var imgH, imgW;
							if (HROS.CONFIG.wallpaperHeight / HROS.CONFIG.wallpaperWidth > h / w) {
								imgH = h;
								imgW = HROS.CONFIG.wallpaperWidth * (h / HROS.CONFIG.wallpaperHeight);
								t = 0;
								l = (w - imgW) / 2;
							} else if (HROS.CONFIG.wallpaperHeight / HROS.CONFIG.wallpaperWidth < h / w) {
								imgW = w;
								imgH = HROS.CONFIG.wallpaperHeight * (w / HROS.CONFIG.wallpaperWidth);
								l = 0;
								t = (h - imgH) / 2;
							} else {
								imgH = HROS.CONFIG.wallpaperHeight;
								imgW = HROS.CONFIG.wallpaperWidth;
								t = l = 0;
							}
							if (isreload) {
								$('body').append('<div id="zoomWallpaperGrid" class="radi" style="position:absolute;z-index:-10;left:0;top:0;overflow:hidden;height:' + h + 'px;width:' + w + 'px;background:#fff"><img id="zoomWallpaper" src="' + HROS.CONFIG.wallpaper + '" style="position:absolute;height:' + imgH + 'px;width:' + imgW + 'px;top:' + t + 'px;left:' + l + 'px"><div style="position:absolute;height:' + h + 'px;width:' + w + 'px;background:#fff;opacity:0;filter:alpha(opacity=0)"></div></div>');
							} else {
								$('#zoomWallpaperGrid, #zoomWallpaperGrid div').css({
									height: h + 'px',
									width: w + 'px'
								});
								$('#zoomWallpaper').css({
									height: imgH + 'px',
									width: imgW + 'px',
									top: t + 'px',
									left: l + 'px'
								});
							}
							break;
						//拉伸
						case 'draw':
							if (isreload) {
								$('body').append('<div id="zoomWallpaperGrid" class="radi" style="position:absolute;z-index:-10;left:0;top:0;overflow:hidden;height:' + h + 'px;width:' + w + 'px;background:#fff"><img id="zoomWallpaper" src="' + HROS.CONFIG.wallpaper + '" style="position:absolute;height:' + h + 'px;width:' + w + 'px;top:0;left:0"><div style="position:absolute;height:' + h + 'px;width:' + w + 'px;background:#fff;opacity:0;filter:alpha(opacity=0)"></div></div>');
							} else {
								$('#zoomWallpaperGrid').css({
									height: h + 'px',
									width: w + 'px'
								}).children('#zoomWallpaper, div').css({
									height: h + 'px',
									width: w + 'px'
								});
							}
							break;
					}
					break;
				case 'bing':
				case 'web':
					if (isreload) {
						$('body').append('<div id="zoomWallpaperGrid" class="radi" style="position:absolute;z-index:-10;top:0;left:0;height:100%;width:100%;overflow:hidden"><div></div><iframe id="iframeWallpaper" frameborder="no" border="0" scrolling="no" class="iframeWallpaper" style="position:absolute;left:0;top:0;overflow:hidden;width:100%;height:100%" src="' + HROS.CONFIG.wallpaper + '"></iframe></div>');
					}
					break;
			}
		},
        /*
		**	更新壁纸
		**	通过ajax到后端进行更新，同时获得壁纸
		*/
		update: function (wallpaperShowType, wallpaperId) {
			function done() {
				HROS.wallpaper.get(function () {
					HROS.wallpaper.set();
				});
			}
			if (HROS.base.checkLogin()) {
				if (wallpaperId === '') {
					HROS.request.post('/Desk/ModifyDisplayModel', { wallPaperShowType: wallpaperShowType }, function (responseText) {
						if (responseText.IsSuccess) {
							NewCrm.msgbox.success("壁纸显示模式设置成功！")
							done();
						}
					})
				} else {
					HROS.request.post('/Desk/ModifyWallpaper', { wallpaperId: wallpaperId }, function (responseText) {
						if (responseText.IsSuccess) {
							NewCrm.msgbox.success("壁纸设置成功！")
							done();
						}
					})
				}
			} else {
				NewCrm.msgbox.success("壁纸设置成功！")
				done();
			}
		}
	};
})();/*
**  小挂件
*/
HROS.widget = (function () {
	return {
		init: function () {
			//挂件上各个按钮
			HROS.widget.handle();
			//挂件移动
			HROS.widget.move();
			//还原上次退出系统时widget的状态
			HROS.widget.reduction();
			$('#desk').on('mouseover', '.widget', function () {
				$(this).children('.move').show();
			}).on('mouseout', '.widget', function () {
				$(this).children('.move').hide();
			});
		},
        /*
		**  创建挂件
		**  自定义挂件：HROS.widget.createTemp({url,width,height,top,right});
		**       示例：HROS.widget.createTemp({url:"http://www.baidu.com",width:800,height:400,top:100,right:100});
		*/
		createTemp: function (obj) {
			var appid = obj.appid == null ? Date.parse(new Date()) : obj.appid;
			//判断窗口是否已打开
			var iswidgetopen = false;
			$('#desk .widget').each(function () {
				if ($(this).attr('appid') == appid) {
					iswidgetopen = true;
					return false;
				}
			});
			//如果没有打开，则进行创建
			if (!iswidgetopen) {
				function nextDo(options) {
					$('#desk').append(widgetWindowTemp({
						'width': options.width,
						'height': options.height,
						'type': 'widgetTemp',
						'id': 'w_' + options.appid,
						'appid': options.appid,
						'realappid': options.appid,
						'top': options.top,
						'right': options.right,
						'url': options.url,
						'zIndex': HROS.CONFIG.widgetIndexid,
						'issetbar': 0
					}));
					HROS.CONFIG.widgetIndexid += 1;
				}
				nextDo({
					appid: appid,
					url: obj.url,
					width: obj.width,
					height: obj.height,
					top: obj.top == null ? 0 : obj.top,
					right: obj.right == null ? 0 : obj.right
				});
			}
		},
		create: function (appid, type, realappid) {
			var type = type == null ? 'widget' : type;
			//判断窗口是否已打开
			var iswidgetopen = false;
			$('#desk .widget').each(function () {
				if ($(this).attr('appid') == appid) {
					iswidgetopen = true;
					return false;
				}
			});
			//如果没有打开，则进行创建
			if (!iswidgetopen && $('#d_' + appid).attr('opening') != 1) {
				$('#d_' + appid).attr('opening', 1);
				function nextDo(options) {
					var widgetId = '#w_' + options.appid;
					if (HROS.widget.checkCookie(appid, type)) {
						var widgetState = $.parseJSON($.cookie('widgetState' + HROS.CONFIG.memberID));
						$(widgetState).each(function () {
							if (this.appid == options.appid && this.type == options.type) {
								options.top = this.top;
								options.right = this.right;
							}
						});
					} else {
						HROS.widget.addCookie(options.appid, options.type, 0, 0);
					}
					TEMP.widgetTemp = {
						'title': options.title,
						'width': options.width,
						'height': options.height,
						'type': options.type,
						'id': 'w_' + options.appid,
						'appid': options.appid,
						'realappid': options.realappid == 0 ? options.appid : options.realappid,
						'top': typeof (options.top) == 'undefined' ? 0 : options.top,
						'right': typeof (options.right) == 'undefined' ? 0 : options.right,
						'url': options.url,
						'zIndex': HROS.CONFIG.widgetIndexid,
						'issetbar': 1
					};
					$('#desk').append(widgetWindowTemp(TEMP.widgetTemp));
					$(widgetId).data('info', TEMP.widgetTemp);
					HROS.CONFIG.widgetIndexid += 1;
				}

				//待修改
				$.ajax({
					data: 'ac=getMyAppById&id=' + appid + '&type=' + type,
					dataType: 'json'
				}).done(function (widget) {
					if (widget != null) {
						if (widget['error'] == 'ERROR_NOT_FOUND') {
							NewCrm.msgbox.fail('小挂件不存在，建议删除');
							HROS.widget.removeCookie(appid, type);
						} else if (widget['error'] == 'ERROR_NOT_INSTALLED') {
							HROS.window.createTemp({
								appid: 'hoorayos-yysc',
								title: '大资本市场',
								url: '/AppMarket/Index?id=' + (realappid == null ? $('#d_' +
									appid).attr('realappid') : realappid),
								width: 800,
								height: 484,
								isflash: false,
								refresh: true
							});
							HROS.widget.removeCookie(appid, type);
						} else {
							nextDo({
								appid: widget['appid'],
								realappid: widget['realappid'],
								title: widget['name'],
								url: widget['url'],
								type: widget['type'],
								width: widget['width'],
								height: widget['height'],
								top: 0,
								right: 0
							});
						}
					} else {
						NewCrm.msgbox.fail('小挂件加载失败');
					}
					$('#d_' + appid).attr('opening', 0);
				});
			}
		},
		//还原上次退出系统时widget的状态
		reduction: function () {
			if (typeof $.cookie('widgetState' + HROS.CONFIG.memberID) !== 'undefined') {
				var widgetState = $.parseJSON($.cookie('widgetState' + HROS.CONFIG.memberID));
				$(widgetState).each(function () {
					HROS.widget.create(this.appid, this.type);
				});
			}
		},
		//根据id验证是否存在cookie中
		checkCookie: function (appid, type) {

			var flag = false, widgetState = $.parseJSON($.cookie('widgetState' + HROS.CONFIG.memberID));
			$(widgetState).each(function () {
				if (this.appid == appid && this.type == type) {
					flag = true;
				}
			});
			return flag;
		},
        /*
		**  以下2个方法：addCookie、removeCookie
		**  用于记录widget打开状态以及摆放位置
		**  实现用户再次登入系统时，还原上次widget的状态
		*/
		addCookie: function (appid, type, top, right) {
			if (type == 'widget' || type == 'pwidget') {
				var widgetState = $.parseJSON($.cookie('widgetState' + HROS.CONFIG.memberID));
				//检查是否存在，如果存在则更新，反之则添加
				if (HROS.widget.checkCookie(appid, type)) {
					$(widgetState).each(function () {
						if (this.appid == appid && this.type == type) {
							this.top = top;
							this.right = right;
						}
					});
				} else {
					if (widgetState == null) {
						widgetState = [];
					}
					widgetState.push({
						appid: appid,
						type: type,
						top: top,
						right: right
					});
				}
				$.cookie('widgetState' + HROS.CONFIG.memberID, $.toJSON(widgetState), { expires: 95 });
			}
		},
		removeCookie: function (appid, type) {
			if (type == 'widget' || type == 'pwidget') {
				if (HROS.widget.checkCookie(appid, type)) {
					var widgetState = $.parseJSON($.cookie('widgetState' + HROS.CONFIG.memberID));
					$(widgetState).each(function (i) {
						if (this.appid == appid && this.type == type) {
							widgetState.splice(i, 1);
							return false;
						}
					});
					$.cookie('widgetState' + HROS.CONFIG.memberID, $.toJSON(widgetState), { expires: 95 });
				}
			}
		},
		move: function () {
			$('#desk').on('mousedown', '.widget .move', function (e) {
				var obj = $(this).parents('.widget');
				HROS.widget.show2top(obj.attr('appid'));
				var x = e.clientX - obj.offset().left;
				var y = e.clientY - obj.offset().top;
				var lay;
				var t;
				var r;
				//绑定鼠标移动事件
				$(document).on('mousemove', function (e) {
					lay = HROS.maskBox.desk();
					lay.show();
					t = e.clientY - y < 0 ? 0 : e.clientY - y;
					r = $(window).width() - obj.width() - (e.clientX - x);
					obj.css({
						top: t,
						right: r
					});
				}).on('mouseup', function () {
					$(this).off('mousemove').off('mouseup');
					if (typeof (lay) !== 'undefined') {
						lay.hide();
					}
					if (obj.attr('type') != 'widgetTemp') {
						HROS.widget.addCookie(obj.attr('appid'), obj.attr('type'), t, r);
					}
				});
			});
		},
		close: function (appid) {
			var widgetId = '#w_' + appid;
			HROS.widget.removeCookie($(widgetId).attr('appid'), $(widgetId).attr('type'));
			$(widgetId).html('').remove();
		},
		show2top: function (appid) {
			var widgetId = '#w_' + appid;
			$(widgetId).css('z-index', HROS.CONFIG.widgetIndexid);
			HROS.CONFIG.widgetIndexid += 1;
		},
		handle: function () {
			$('#desk').on('mousedown', '.widget a', function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$('#desk').on('click', '.widget .ha-close', function (e) {
				var obj = $(this).parents('.widget');
				HROS.widget.close(obj.attr('appid'));
			}).on('click', '.widget .ha-star', function () {
				var obj = $(this).parents('.widget');
				//待修改
				$.ajax({
					data: 'ac=getAppStar&id=' + obj.data('info').realappid
				}).done(function (starnum) {
					starnum = starnum['starnum']
					$.dialog({
						title: '给“' + obj.data('info').title + '”打分',
						width: 300,
						id: 'star',
						content: starDialogTemp({
							'realappid': obj.data('info').realappid,
							'point': Math.floor(starnum),
							'realpoint': starnum * 20
						})
					});
				});
			}).on('click', '.widget .ha-share', function () {
				var obj = $(this).parents('.widget');
				$.dialog({
					title: '分享应用',
					width: 370,
					id: 'share',
					content: shareDialogTemp({
						'sinaweiboAppkey': HROS.CONFIG.sinaweiboAppkey == '' ? '1197457869' :
							HROS.CONFIG.sinaweiboAppkey,
						'tweiboAppkey': HROS.CONFIG.tweiboAppkey == '' ? '801356816' : HROS.CONFIG.tweiboAppkey,
						'title': '我正在使用 %23HoorayOS%23 中的 %23' + obj.data('info').title + '%23 应用，很不错哦，推荐你也来试试！',
						'url': HROS.CONFIG.website + '?run=' + obj.data('info').realappid + '%26type=widget'
					})
				});
			});
		}
	}
})();/*
**  应用窗口
*/
HROS.window = (function () {
	return {
		init: function () {
			//窗口上各个按钮
			HROS.window.handle();
			//窗口移动
			HROS.window.move();
			//窗口拉伸
			HROS.window.resize();
			//绑定窗口遮罩层点击事件
			$('#desk').on('click', '.window-container .window-mask, .window-container .folder_body', function () {
				HROS.window.show2top($(this).parents('.window-container').attr('appid'), true);
			});
			//屏蔽窗口右键
			$('#desk').on('contextmenu', '.window-container', function () {
				return false;
			});
			//绑定文件夹内事件
			$('#desk').on('click', '.folder_body li', function () {
				return false;
			}).on('contextmenu', '.folder_body .appbtn', function (e) {
				$('.popup-menu').hide();
				$('.quick_view_container').remove();
				switch ($(this).attr('type')) {
					case 'app':
					case 'window':
					case 'widget':
						var popupmenu = HROS.popupMenu.app($(this));
						break;
					case 'pwindow':
					case 'pwidget':
						var popupmenu = HROS.popupMenu.papp($(this));
						break;
				}
				var l = ($(window).width() - e.clientX) < popupmenu.width() ? (e.clientX - popupmenu.width()) : e.clientX;
				var t = ($(window).height() - e.clientY) < popupmenu.height() ? (e.clientY - popupmenu.height()) : e.clientY;
				popupmenu.css({
					left: l,
					top: t
				}).show();
				return false;
			});
		},
        /*
		**  创建窗口
		**  自定义窗口：HROS.window.createTemp({title,url,width,height,resize,isflash});
		**      后面参数依次为：标题、地址、宽、高、是否可拉伸、是否打开默认最大化、是否为flash
		**      示例：HROS.window.createTemp({title:"百度",url:"http://www.baidu.com",width:800,height:400,isresize:false,isopenmax:false,isflash:false});
		*/
		createTemp: function (obj) {

			var type = 'window', appid = obj.appid == null ? Date.parse(new Date()) : obj.appid;
			//判断窗口是否已打开
			var iswindowopen = false;
			$('#task-content-inner a.task-item').each(function () {

				if ($(this).attr('appid') == appid) {

					iswindowopen = true;
					HROS.window.show2top($(this).attr('appid'));
					return false;
				}
			});
			//如果没有打开，则进行创建
			if (!iswindowopen) {
				function nextDo(options) {
					var windowId = '#w_' + options.appid;
					//新增任务栏
					$('#task-content-inner').prepend(taskTemp({
						'type': options.type,
						'id': 't_' + options.appid,
						'appid': options.appid,
						'realappid': options.appid,
						'title': options.title,
						'imgsrc': options.imgsrc
					}));
					HROS.taskbar.resize();
					//新增窗口
					TEMP.windowTemp = {
						'top': ($(window).height() - options.height) / 2 <= 0 ? 0 : ($(window).height() - options.height) / 2,
						'left': ($(window).width() - options.width) / 2 <= 0 ? 0 : ($(window).width() - options.width) / 2,
						'emptyW': $(window).width() - options.width,
						'emptyH': $(window).height() - options.height,
						'width': options.width,
						'height': options.height,
						'zIndex': HROS.CONFIG.windowIndexid,
						'type': options.type,
						'id': 'w_' + options.appid,
						'appid': options.appid,
						'realappid': options.appid,
						'title': options.title,
						'url': options.url,
						'imgsrc': options.imgsrc,
						'isresize': options.isresize,
						'isopenmax': options.isopenmax,
						'istitlebar': options.isresize,
						'istitlebarFullscreen': options.isresize ? window.fullScreenApi.supportsFullScreen == true ? true : false : false,
						'issetbar': options.issetbar,
						'isflash': options.isflash
					};

					$('#desk').append(windowTemp(TEMP.windowTemp));
					$(windowId).data('info', TEMP.windowTemp);
					HROS.CONFIG.windowIndexid += 1;
					HROS.window.setPos(false);
					//iframe加载完毕后，隐藏loading遮罩层
					$(windowId + ' iframe').on('load', function () {
						$(windowId + ' .window-frame').children('div').eq(1).fadeOut();
					});
					HROS.window.show2top(options.appid);
				}
				nextDo({
					type: type,
					appid: appid,
					realappid: appid,
					imgsrc: '../images/ui/default_icon.png',
					title: obj.title,
					url: obj.url,
					width: obj.width,
					height: obj.height,
					isresize: typeof (obj.isresize) == 'undefined' ? false : obj.isresize,
					isopenmax: typeof (obj.isopenmax) == 'undefined' ? false : obj.isopenmax,
					issetbar: false,
					isflash: typeof (obj.isflash) == 'undefined' ? true : obj.isflash
				});
			} else {
				//如果设置强制刷新
				if (obj.refresh) {
					var windowId = '#w_' + appid;
					$(windowId).find('iframe').attr('src', obj.url);
				}
			}
		},
        /*
		**  创建窗口
		**  系统窗口：HROS.window.create(realappid, [type]);
		**      示例：HROS.window.create(12);
		*/
		create: function (realappid, type) {
			var type = type == null ? 'window' : type, appid;
			//判断窗口是否已打开
			var iswindowopen = false;
			$('#task-content-inner a.task-item').each(function () {
				if ($(this).attr('realappid') == realappid) {
					iswindowopen = true;
					appid = $(this).attr('appid');

					HROS.window.show2top(appid);
					return false;
				}
			});
			//如果没有打开，则进行创建
			if (!iswindowopen && $('#d_' + realappid).attr('opening') != 1) {
				$('#d_' + appid).attr('opening', 1);
				function nextDo(options) {

					var windowId = '#w_' + options.appid;
					var top = ($(window).height() - options.height) / 2 <= 0 ? 0 : ($(window).height() - options.height) / 2;
					var left = ($(window).width() - options.width) / 2 <= 0 ? 0 : ($(window).width() - options.width) / 2;
					switch (options.type) {
						case 'app':
						case 'pwindow':
							//新增任务栏
							$('#task-content-inner').prepend(taskTemp({
								'type': options.type,
								'id': 't_' + options.appid,
								'appid': options.appid,
								'realappid': options.realappid,
								'title': options.title,
								'imgsrc': options.imgsrc
							}));
							HROS.taskbar.resize();
							//新增窗口
							TEMP.windowTemp = {
								'top': top,
								'left': left,
								'emptyW': $(window).width() - options.width,
								'emptyH': $(window).height() - options.height,
								'width': options.width,
								'height': options.height,
								'zIndex': HROS.CONFIG.windowIndexid,
								'type': options.type,
								'id': 'w_' + options.appid,
								'appid': options.appid,
								'realappid': options.realappid,
								'title': options.title,
								'url': options.url,
								'imgsrc': options.imgsrc,
								'isresize': options.isresize/* == 1 ? true : false*/,
								'isopenmax': options.isresize ? (options.isopenmax ? true : false) : false,
								'istitlebar': options.isresize/* == 1 ? true : false*/,
								'istitlebarFullscreen': options.isresize /*== 1*/ ? window.fullScreenApi.supportsFullScreen == true ? true : false : false,
								'issetbar': options.issetbar == 1 ? true : false,
								'isflash': options.isflash == 1 ? true : false
							};
							$('#desk').append(windowTemp(TEMP.windowTemp));
							$(windowId).data('info', TEMP.windowTemp);
							HROS.CONFIG.windowIndexid += 1;
							HROS.window.setPos(false);
							//iframe加载完毕后，隐藏loading遮罩层
							$(windowId + ' iframe').on('load', function () {
								$(windowId + ' .window-frame').children('div').fadeOut();
							});

							HROS.window.show2top(options.appid);
							break;
						case 'folder':
							//新增任务栏
							$('#task-content-inner').prepend(taskTemp({
								'type': options.type,
								'id': 't_' + options.appid,
								'appid': options.appid,
								'realappid': options.realappid,
								'title': options.title,
								'imgsrc': options.imgsrc
							}));
							HROS.taskbar.resize();
							//新增窗口
							TEMP.folderWindowTemp = {
								'top': top,
								'left': left,
								'emptyW': $(window).width() - options.width,
								'emptyH': $(window).height() - options.height,
								'width': options.width,
								'height': options.height,
								'zIndex': HROS.CONFIG.windowIndexid,
								'type': options.type,
								'id': 'w_' + options.appid,
								'appid': options.appid,
								'realappid': options.realappid,
								'title': options.title,
								'imgsrc': options.imgsrc
							};
							$('#desk').append(folderWindowTemp(TEMP.folderWindowTemp));
							$(windowId).data('info', TEMP.folderWindowTemp);
							HROS.CONFIG.windowIndexid += 1;
							HROS.window.setPos(false);
							//载入文件夹内容

							var sc = '';
							$(HROS.VAR.folder).each(function () {
								if (this.memberId == options.appid) {
									sc = this.apps;
									return false;
								}
							});
							if (sc != '') {
								var folder_append = '';
								$(sc).each(function () {
									folder_append += appbtnTemp({
										'title': this.name,
										'type': this.type,
										'id': 'd_' + this.memberId,
										'appid': this.memberId,
										'realappid': this.appId == 0 ? this.memberId : this.appId,
										'imgsrc': this.icon
									});
								});
								$(windowId).find('.folder_body').append(folder_append);
							}

							HROS.window.show2top(options.appid);
							break;
						case 'file':
							TEMP.fileWindowTemp = {
								'top': top,
								'left': left,
								'emptyW': $(window).width() - options.width,
								'emptyH': $(window).height() - options.height,
								'width': options.width,
								'height': options.height,
								'zIndex': HROS.CONFIG.windowIndexid,
								'type': options.type,
								'id': 'w_' + options.appid,
								'appid': options.appid,
								'realappid': options.realappid,
								'title': options.title,
								'imgsrc': options.imgsrc
							};
							$('body').append(fileDownloadTemp(TEMP.fileWindowTemp));
							break;
					}
				}

				HROS.request.get('/Desk/CreateWindow', { id: realappid, type: type }, function (responseText) {
					if (responseText.IsSuccess) {
						var app = responseText.Model;
						nextDo({
							type: app.type,
							appid: app.memberId,
							realappid: app.appId,
							title: app.name,
							imgsrc: app.icon,
							url: app.url,
							width: app.width,
							height: app.height,
							isresize: app.isResize,
							isopenmax: app.isOpenMax,
							issetbar: app.isSetbar
						});
						$('#d_' + appid).attr('opening', 0);
					} else {
						NewCrm.msgbox.fail(responseText.Message)
					}
				})
			}
		},
		setPos: function (isAnimate) {
			isAnimate = isAnimate == null ? true : isAnimate;
			$('#desk .window-container').each(function () {
				var windowdata = $(this).data('info');
				var currentW = $(window).width() - $(this).width();
				var currentH = $(window).height() - $(this).height();
				var left = windowdata['left'] / windowdata['emptyW'] * currentW >= currentW ? currentW : windowdata['left'] / windowdata['emptyW'] * currentW;
				left = left <= 0 ? 0 : left;
				var top = windowdata['top'] / windowdata['emptyH'] * currentH >= currentH ? currentH : windowdata['top'] / windowdata['emptyH'] * currentH;
				top = top <= 0 ? 0 : top;
				if ($(this).attr('state') != 'hide') {
					$(this).stop(true, false).animate({
						'left': left,
						'top': top
					}, isAnimate ? 500 : 0, function () {
						windowdata['left'] = left;
						windowdata['top'] = top;
						windowdata['emptyW'] = $(window).width() - $(this).width();
						windowdata['emptyH'] = $(window).height() - $(this).height();
					});
				} else {
					windowdata['left'] = left;
					windowdata['top'] = top;
					windowdata['emptyW'] = $(window).width() - $(this).width();
					windowdata['emptyH'] = $(window).height() - $(this).height();
				}
			});
		},
		close: function (appid) {
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			$(windowId).removeData('info').html('').remove();
			$('#task-content-inner ' + taskId).html('').remove();
			$('#task-content-inner').css('width', $('#task-content-inner .task-item').length * 114);
			$('#task-bar, #nav-bar').removeClass('min-zIndex');
			HROS.taskbar.resize();
		},
		closeAll: function () {
			$('#desk .window-container').each(function () {
				HROS.window.close($(this).attr('appid'));
			});
		},
		hide: function (appid) {
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			$(windowId).css('left', -10000).attr('state', 'hide');
			$('#task-content-inner ' + taskId).removeClass('task-item-current');
			if ($(windowId).attr('ismax') == 1) {
				$('#task-bar, #nav-bar').removeClass('min-zIndex');
			}
		},
		hideAll: function () {
			$('#task-content-inner a.task-item').removeClass('task-item-current');
			$('#desk-' + HROS.CONFIG.desk).nextAll('div.window-container').css('left', -10000).attr('state', 'hide');
		},
		max: function (appid) {
			HROS.window.show2top(appid);
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			$(windowId + ' .title-handle .ha-max').hide().next(".ha-revert").show();
			$(windowId).addClass('window-maximize').attr('ismax', 1).animate({
				width: '100%',
				height: '100%',
				top: 0,
				left: 0
			}, 200);
			$('#task-bar, #nav-bar').addClass('min-zIndex');
		},
		revert: function (appid) {
			HROS.window.show2top(appid);
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			$(windowId + ' .title-handle .ha-revert').hide().prev('.ha-max').show();
			var obj = $(windowId), windowdata = obj.data('info');
			obj.removeClass('window-maximize').attr('ismax', 0).animate({
				width: windowdata['width'],
				height: windowdata['height'],
				left: windowdata['left'],
				top: windowdata['top']
			}, 500);
			$('#task-bar, #nav-bar').removeClass('min-zIndex');
		},
		refresh: function (appid) {
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			//判断是应用窗口，还是文件夹窗口
			if ($(windowId + '_iframe').length != 0) {
				$(windowId + '_iframe').attr('src', $(windowId + '_iframe').attr('src'));
			} else {
				HROS.window.updateFolder(appid);
			}
		},
		show2top: function (appid, isAnimate) {
			isAnimate = isAnimate == null ? false : isAnimate;
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			var windowdata = $(windowId).data('info');
			var arr = [];
			function show() {
				HROS.window.show2under();
				//改变当前任务栏样式
				$('#task-content-inner ' + taskId).addClass('task-item-current');
				if ($(windowId).attr('ismax') == 1) {
					$('#task-bar, #nav-bar').addClass('min-zIndex');
				}
				//改变当前窗口样式
				$(windowId).addClass('window-current').css({
					'z-index': HROS.CONFIG.windowIndexid,
					'left': windowdata['left'],
					'top': windowdata['top']
				}).attr('state', 'show');
				//如果窗口最小化前是最大化状态的，则坐标位置设为0
				if ($(windowId).attr('ismax') == 1) {
					$(windowId).css({
						'left': 0,
						'top': 0
					});
				}
				//改变当前窗口遮罩层样式
				$(windowId + ' .window-mask').hide();
				//改变当前iframe显示
				$(windowId + ' iframe').show();
				HROS.CONFIG.windowIndexid += 1;
			}
			if (isAnimate) {
				var baseStartX = $(windowId).offset().left, baseEndX = baseStartX + $(windowId).width();
				var baseStartY = $(windowId).offset().top, baseEndY = baseStartY + $(windowId).height();
				var baseCenterX = baseStartX + ($(windowId).width() / 2), baseCenterY = baseStartY + ($(windowId).height() / 2);
				var baseZIndex = parseInt($(windowId).css('zIndex'));
				$('#desk .window-container:not(' + windowId + ')').each(function () {
					var thisStartX = $(this).offset().left, thisEndX = thisStartX + $(this).width();
					var thisStartY = $(this).offset().top, thisEndY = thisStartY + $(this).height();
					var thisCenterX = thisStartX + ($(this).width() / 2), thisCenterY = thisStartY + ($(this).height() / 2);
					var thisZIndex = parseInt($(this).css('zIndex'));
					var flag = '';
					if (thisZIndex > baseZIndex) {
						//  常规情况，只要有一个角处于区域内，则可以判断窗口有覆盖
						//   _______            _______        _______    _______
						//  |    ___|___    ___|       |   ___|___    |  |       |___
						//  |   |       |  |   |       |  |       |   |  |       |   |
						//  |___|       |  |   |_______|  |       |___|  |_______|   |
						//      |_______|  |_______|      |_______|          |_______|
						if (
							(thisStartX >= baseStartX && thisStartX <= baseEndX && thisStartY >= baseStartY && thisStartY <= baseEndY)
							||
							(thisStartX >= baseStartX && thisStartX <= baseEndX && thisEndY >= baseStartY && thisEndY <= baseEndY)
							||
							(thisEndX >= baseStartX && thisEndX <= baseEndX && thisStartY >= baseStartY && thisStartY <= baseEndY)
							||
							(thisEndX >= baseStartX && thisEndX <= baseEndX && thisEndY >= baseStartY && thisEndY <= baseEndY)
						) {
							flag = 'x';
						}
						//  非常规情况
						//       _______    _______          _____
						//   ___|       |  |       |___    _|     |___
						//  |   |       |  |       |   |  | |     |   |
						//  |___|       |  |       |___|  |_|     |___|
						//      |_______|  |_______|        |_____|
						if (
							(thisStartX >= baseStartX && thisStartX <= baseEndX && thisStartY < baseStartY && thisEndY > baseEndY)
							||
							(thisEndX >= baseStartX && thisEndX <= baseEndX && thisStartY < baseStartY && thisEndY > baseEndY)
						) {
							flag = 'x';
						}
						//      _____       ___________      _____
						//   __|_____|__   |           |   _|_____|___
						//  |           |  |           |  |           |
						//  |           |  |___________|  |___________|
						//  |___________|     |_____|       |_____|
						if (
							(thisStartY >= baseStartY && thisStartY <= baseEndY && thisStartX < baseStartX && thisEndX > baseEndX)
							||
							(thisEndY >= baseStartY && thisEndY <= baseEndY && thisStartX < baseStartX && thisEndX > baseEndX)
						) {
							flag = 'y';
						}
						//  两个角处于区域内，另外两种情况不用处理，因为这两种情况下，被移动的窗口是需要进行上下滑动，而非左右
						//      _____       ___________
						//   __|     |__   |   _____   |
						//  |  |     |  |  |  |     |  |
						//  |  |_____|  |  |__|     |__|
						//  |___________|     |_____|
						if (
							(thisStartX >= baseStartX && thisStartX <= baseEndX && thisEndY >= baseStartY && thisEndY <= baseEndY)
							&&
							(thisEndX >= baseStartX && thisEndX <= baseEndX && thisEndY >= baseStartY && thisEndY <= baseEndY)
							||
							(thisStartX >= baseStartX && thisStartX <= baseEndX && thisStartY >= baseStartY && thisStartY <= baseEndY)
							&&
							(thisEndX >= baseStartX && thisEndX <= baseEndX && thisStartY >= baseStartY && thisStartY <= baseEndY)
						) {
							flag = 'y';
						}
					}
					if (flag != '') {
						var direction, distance;
						if (flag == 'x') {
							if (thisCenterX > baseCenterX) {
								direction = 'right';
								distance = baseEndX - thisStartX + 30;
							} else {
								direction = 'left';
								distance = thisEndX - baseStartX + 30;
							}
						} else {
							if (thisCenterY > baseCenterY) {
								direction = 'bottom';
								distance = baseEndY - thisStartY + 30;
							} else {
								direction = 'top';
								distance = thisEndY - baseStartY + 30;
							}
						}
						arr.push({
							id: $(this).attr('id'),
							direction: direction, //移动方向
							distance: distance //移动距离
						});
					}
				});
				//开始移动
				var delayTime = 0;
				for (var i = 0; i < arr.length; i++) {
					var baseLeft = $('#' + arr[i].id).offset().left, baseTop = $('#' + arr[i].id).offset().top;
					if (arr[i].direction == 'left') {
						$('#' + arr[i].id).delay(delayTime).animate({
							left: baseLeft - arr[i].distance
						}, 300).animate({
							left: baseLeft
						}, 300);
					} else if (arr[i].direction == 'right') {
						$('#' + arr[i].id).delay(delayTime).animate({
							left: baseLeft + arr[i].distance
						}, 300).animate({
							left: baseLeft
						}, 300);
					} else if (arr[i].direction == 'top') {
						$('#' + arr[i].id).delay(delayTime).animate({
							top: baseTop - arr[i].distance
						}, 300).animate({
							top: baseTop
						}, 300);
					} else if (arr[i].direction == 'bottom') {
						$('#' + arr[i].id).delay(delayTime).animate({
							top: baseTop + arr[i].distance
						}, 300).animate({
							top: baseTop
						}, 300);
					}
					delayTime += 100;
				}
				setTimeout(show, delayTime + 100);
			} else {
				show();
			}
		},
		show2under: function () {
			//改变任务栏样式
			$('#task-content-inner a.task-item').removeClass('task-item-current');
			//改变窗口样式
			$('#desk .window-container').removeClass('window-current');
			//改变窗口遮罩层样式
			$('#desk .window-container .window-mask').show();
			//改变iframe显示
			$('#desk .window-container-flash iframe').hide();
		},
		updateFolder: function (appid) {
			var windowId = '#w_' + appid, taskId = '#t_' + appid;
			var sc = '';

			$(HROS.VAR.folder).each(function () {
				if (this.memberId == parseInt(appid)) {
					sc = this.apps;
					return false;
				}
			});

			if (sc != null) {
				var folder_append = '';
				for (var i = 0; i < sc.length; i++) {
					folder_append += appbtnTemp({
						'top': 0,
						'left': 0,
						'title': sc[i]['name'],
						'type': sc[i]['type'],
						'id': 'd_' + sc[i]['memberId'],
						'appid': sc[i]['memberId'],
						'realappid': sc[i]['appId'],
						'imgsrc': sc[i]['icon']
					});
				}
				$(windowId).find('.folder_body').html('').append(folder_append).on('contextmenu', '.appbtn', function (e) {
					$('.popup-menu').hide();
					$('.quick_view_container').remove();
					TEMP.AppRight = HROS.popupMenu.app($(this));
					var l = ($(window).width() - e.clientX) < TEMP.AppRight.width() ? (e.clientX - TEMP.AppRight.width()) : e.clientX;
					var t = ($(window).height() - e.clientY) < TEMP.AppRight.height() ? (e.clientY - TEMP.AppRight.height()) : e.clientY;
					TEMP.AppRight.css({
						left: l,
						top: t
					}).show();
					return false;
				});
			}
		},
		handle: function () {
			$('#desk').on('mousedown', '.window-container .title-bar .title-handle a', function (e) {
				e.preventDefault();
				e.stopPropagation();
			});
			$('#desk').on('dblclick', '.window-container .title-bar', function (e) {
				var obj = $(this).parents('.window-container');
				//判断当前窗口是否已经是最大化
				if (obj.find('.ha-max').is(':hidden')) {
					obj.find('.ha-revert').click();
				} else {
					obj.find('.ha-max').click();
				}
			}).on('click', '.window-container .ha-hide', function () {
				var obj = $(this).parents('.window-container');
				HROS.window.hide(obj.attr('appid'));
			}).on('click', '.window-container .ha-max', function () {
				var obj = $(this).parents('.window-container');
				HROS.window.max(obj.attr('appid'));
			}).on('click', '.window-container .ha-revert', function () {
				var obj = $(this).parents('.window-container');
				HROS.window.revert(obj.attr('appid'));
			}).on('click', '.window-container .ha-fullscreen', function () {
				var obj = $(this).parents('.window-container');
				window.fullScreenApi.requestFullScreen(document.getElementById(obj.find('iframe').attr('id')));
			}).on('click', '.window-container .ha-close', function () {
				var obj = $(this).parents('.window-container');
				HROS.window.close(obj.attr('appid'));
			}).on('click', '.window-container .refresh', function () {
				var obj = $(this).parents('.window-container');
				HROS.window.refresh(obj.attr('appid'));
			}).on('click', '.window-container .detail', function () {
				var obj = $(this).parents('.window-container');
				if (obj.attr('realappid') !== 0) {
					HROS.window.createTemp({
						appid: 'hoorayos-yysc',
						title: '大资本市场',
						url: '/AppMarket/Index?id=' + obj.attr('realappid'),
						width: 800,
						height: 484,
						isflash: false,
						refresh: true
					});
				} else {
					NewCrm.msgbox.info('对不起，该应用没有任何详细介绍');
				}
			}).on('click', '.window-container .star', function () {
				var obj = $(this).parents('.window-container');
				//待修改
				$.ajax({
					type: 'POST',
					url: ajaxUrl,
					data: 'ac=getAppStar&id=' + obj.data('info').realappid
				}).done(function (point) {
					$.dialog({
						title: '给“' + obj.data('info').title + '”打分',
						width: 250,
						id: 'star',
						content: starDialogTemp({
							'realappid': obj.data('info').realappid,
							'point': point,
							'realpoint': point * 20
						})
					});
				});
			}).on('click', '.window-container .share', function () {
				var obj = $(this).parents('.window-container');
				$.dialog({
					title: '分享应用',
					width: 370,
					id: 'share',
					content: shareDialogTemp({
						'sinaweiboAppkey': HROS.CONFIG.sinaweiboAppkey == '' ? '1197457869' : HROS.CONFIG.sinaweiboAppkey,
						'tweiboAppkey': HROS.CONFIG.tweiboAppkey == '' ? '801356816' : HROS.CONFIG.tweiboAppkey,
						'title': '我正在使用 %23HoorayOS%23 中的 %23' + obj.data('info').title + '%23 应用，很不错哦，推荐你也来试试！',
						'url': HROS.CONFIG.website + '?run=' + obj.data('info').realappid + '%26type=app'
					})
				});
			}).on('contextmenu', '.window-container', function () {
				$('.popup-menu').hide();
				$('.quick_view_container').remove();
				return false;
			});
		},
		move: function () {
			$('#desk').on('mousedown', '.window-container .title-bar', function (e) {
				var obj = $(this).parents('.window-container');
				if (obj.attr('ismax') == 1) {
					return false;
				}
				HROS.window.show2top(obj.attr('appid'));
				var windowdata = obj.data('info');
				var x = e.clientX - obj.offset().left;
				var y = e.clientY - obj.offset().top;
				var lay;
				//绑定鼠标移动事件
				$(document).on('mousemove', function (e) {
					lay = HROS.maskBox.desk();
					lay.show();
					//强制把右上角还原按钮隐藏，最大化按钮显示
					obj.find('.ha-revert').hide().prev('.ha-max').show();
					obj.css({
						width: windowdata['width'],
						height: windowdata['height'],
						left: e.clientX - x,
						top: e.clientY - y <= 10 ? 0 : e.clientY - y >= lay.height() - 30 ? lay.height() - 30 : e.clientY - y
					});
					obj.data('info').left = obj.offset().left;
					obj.data('info').top = obj.offset().top;
				}).on('mouseup', function () {
					$(this).off('mousemove').off('mouseup');
					if (typeof (lay) !== 'undefined') {
						lay.hide();
					}
				});
			});
		},
		resize: function (obj) {
			$('#desk').on('mousedown', '.window-container .window-resize', function (e) {
				var obj = $(this).parents('.window-container');
				var resizeobj = $(this);
				var lay;
				var x = e.clientX;
				var y = e.clientY;
				var w = obj.width();
				var h = obj.height();
				$(document).on('mousemove', function (e) {
					lay = HROS.maskBox.desk();
					lay.show();
					//当拖动到屏幕边缘时，自动贴屏
					var _x = e.clientX <= 10 ? 0 : e.clientX >= (lay.width() - 12) ? (lay.width() - 2) : e.clientX;
					var _y = e.clientY <= 10 ? 0 : e.clientY >= (lay.height() - 12) ? lay.height() : e.clientY;
					switch (resizeobj.attr('resize')) {
						case 't':
							h + y - _y > HROS.CONFIG.windowMinHeight ? obj.css({
								height: h + y - _y,
								top: _y
							}) : obj.css({
								height: HROS.CONFIG.windowMinHeight
							});
							break;
						case 'r':
							w - x + _x > HROS.CONFIG.windowMinWidth ? obj.css({
								width: w - x + _x
							}) : obj.css({
								width: HROS.CONFIG.windowMinWidth
							});
							break;
						case 'b':
							h - y + _y > HROS.CONFIG.windowMinHeight ? obj.css({
								height: h - y + _y
							}) : obj.css({
								height: HROS.CONFIG.windowMinHeight
							});
							break;
						case 'l':
							w + x - _x > HROS.CONFIG.windowMinWidth ? obj.css({
								width: w + x - _x,
								left: _x
							}) : obj.css({
								width: HROS.CONFIG.windowMinWidth
							});
							break;
						case 'rt':
							h + y - _y > HROS.CONFIG.windowMinHeight ? obj.css({
								height: h + y - _y,
								top: _y
							}) : obj.css({
								height: HROS.CONFIG.windowMinHeight
							});
							w - x + _x > HROS.CONFIG.windowMinWidth ? obj.css({
								width: w - x + _x
							}) : obj.css({
								width: HROS.CONFIG.windowMinWidth
							});
							break;
						case 'rb':
							w - x + _x > HROS.CONFIG.windowMinWidth ? obj.css({
								width: w - x + _x
							}) : obj.css({
								width: HROS.CONFIG.windowMinWidth
							});
							h - y + _y > HROS.CONFIG.windowMinHeight ? obj.css({
								height: h - y + _y
							}) : obj.css({
								height: HROS.CONFIG.windowMinHeight
							});
							break;
						case 'lt':
							w + x - _x > HROS.CONFIG.windowMinWidth ? obj.css({
								width: w + x - _x,
								left: _x
							}) : obj.css({
								width: HROS.CONFIG.windowMinWidth
							});
							h + y - _y > HROS.CONFIG.windowMinHeight ? obj.css({
								height: h + y - _y,
								top: _y
							}) : obj.css({
								height: HROS.CONFIG.windowMinHeight
							});
							break;
						case 'lb':
							w + x - _x > HROS.CONFIG.windowMinWidth ? obj.css({
								width: w + x - _x,
								left: _x
							}) : obj.css({
								width: HROS.CONFIG.windowMinWidth
							});
							h - y + _y > HROS.CONFIG.windowMinHeight ? obj.css({
								height: h - y + _y
							}) : obj.css({
								height: HROS.CONFIG.windowMinHeight
							});
							break;
					}
				}).on('mouseup', function () {
					if (typeof (lay) !== 'undefined') {
						lay.hide();
					}
					obj.data('info').width = obj.width();
					obj.data('info').height = obj.height();
					obj.data('info').left = obj.offset().left;
					obj.data('info').top = obj.offset().top;
					obj.data('info').emptyW = $(window).width() - obj.width();
					obj.data('info').emptyH = $(window).height() - obj.height();
					$(this).off('mousemove').off('mouseup');
				});
			});
		}
	}
})();/*
**  该功能是从QQ空间里提取出来的
**  用于判断页面是否处于缩放状态中，并给予提示
**  可在浏览页时按住ctrl+鼠标滚轮进行测试预览
*/
HROS.zoom = (function () {
	return {
        /*
		**  初始化
		**  其实也不用初始化，可以直接把object代码写在页面上
		**  需要注意的是onchange参数，调用的是HROS.zoom.check方法
		*/
		init: function () {
			$('body').append('<div id="zoombox"></div>');
            /*
			**  使用SWFObject.js插入flash
			**  http://www.cnblogs.com/wuxinxi007/archive/2009/10/27/1590709.html
			*/
			swfobject.embedSWF('/js/hooray/zoom.swf?onchange=HROS.zoom.check', 'zoombox', '10', '10', '6.0.0', 'expressInstall.swf', '', { allowScriptAccess: 'always', wmode: 'transparent', scale: 'noScale' }, { id: 'accessory_zoom', name: 'zoom_detect' });
		},
        /*
		**  为什么会有个参数o？其实我也不知道
		**  o.scale的值是数字，当o.scale大于1时，页面处于放大状态，反之则为缩小状态
		*/
		check: function (o) {
			var s = o.scale, m = s > 1 ? '放大' : '缩小';
			if (s != 1) {
				HROS.VAR.zoomLevel = s;
				$('#zoom-tip').show().find('span').text('您的浏览器目前处于' + m + '状态，会导致显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态！');
			} else {
				if (s != HROS.VAR.zoomLevel) {
					$('#zoom-tip').fadeOut();
				}
			}
		},
        /*
		**  关闭，其实是删除，如果想做关闭，把代码改成hide()即可
		*/
		close: function () {
			$('#zoom-tip').remove();
		}
	}
})();

HROS.request = (function () {
	return {
		get: function (url, parameter, callback) {
			HROS.request.internalRequset(url, 'GET', parameter, callback)
		},
		post: function (url, parameter, callback) {
			HROS.request.internalRequset(url, 'POST', parameter, callback)
		},
		internalRequset: function (url, method, parameter, callback) {
			var cookie = $.cookie('Account');
			if (cookie) {
				$.ajax({
					type: method,
					url: url,
					data: Object.keys(parameter).length ? parameter : null,
					beforeSend: function () {
						NewCrm.msgbox.loading(HROS.CONFIG.loadingPrompt)
					},
					success: function (responseText) {
						NewCrm.msgbox.close()
						if (callback) {
							callback && callback(responseText)
						}
					}
				});
			} else {
				NewCrm.msgbox.fail(HROS.CONFIG.timeOutPrompt);
			}
		}
	}
})();
/*
    Validform version 5.3.2
	By sean during April 7, 2010 - March 26, 2013
	For more information, please visit http://validform.rjboy.cn
	Validform is available under the terms of the MIT license.
*/

(function(d,f,b){var g=null,j=null,i=true;var e={tit:"提示信息",w:{"*":"不能为空！","*6-16":"请填写6到16位任意字符！","n":"请填写数字！","n6-16":"请填写6到16位数字！","s":"不能输入特殊字符！","s6-18":"请填写6到18位字符！","p":"请填写邮政编码！","m":"请填写手机号码！","e":"邮箱地址格式不对！","url":"请填写网址！"},def:"请填写正确信息！",undef:"datatype未定义！",reck:"两次输入的内容不一致！",r:"通过信息验证！",c:"正在检测信息…",s:"请{填写|选择}{0|信息}！",v:"所填信息没有经过验证，请稍后…",p:"正在提交数据…"};d.Tipmsg=e;var a=function(l,n,k){var n=d.extend({},a.defaults,n);n.datatype&&d.extend(a.util.dataType,n.datatype);var m=this;m.tipmsg={w:{}};m.forms=l;m.objects=[];if(k===true){return false}l.each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var p=this;p.settings=d.extend({},n);var o=d(p);p.validform_status="normal";o.data("tipmsg",m.tipmsg);o.delegate("[datatype]","blur",function(){var q=arguments[1];a.util.check.call(this,o,q)});o.delegate(":text","keypress",function(q){if(q.keyCode==13&&o.find(":submit").length==0){o.submit()}});a.util.enhance.call(o,p.settings.tiptype,p.settings.usePlugin,p.settings.tipSweep);p.settings.btnSubmit&&o.find(p.settings.btnSubmit).bind("click",function(){o.trigger("submit");return false});o.submit(function(){var q=a.util.submitForm.call(o,p.settings);q===b&&(q=true);return q});o.find("[type='reset']").add(o.find(p.settings.btnReset)).bind("click",function(){a.util.resetForm.call(o)})});if(n.tiptype==1||(n.tiptype==2||n.tiptype==3)&&n.ajaxPost){c()}};a.defaults={tiptype:1,tipSweep:false,showAllError:false,postonce:false,ajaxPost:false};a.util={dataType:{"*":/[\w\W]+/,"*6-16":/^[\w\W]{6,16}$/,n:/^\d+$/,"n6-16":/^\d{6,16}$/,s:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,p:/^[0-9]{6}$/,m:/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,e:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,url:/^(\w+:\/\/)?\w+(\.\w+)+.*$/},toString:Object.prototype.toString,isEmpty:function(k){return k===""||k===d.trim(this.attr("tip"))},getValue:function(m){var l,k=this;if(m.is(":radio")){l=k.find(":radio[name='"+m.attr("name")+"']:checked").val();l=l===b?"":l}else{if(m.is(":checkbox")){l="";k.find(":checkbox[name='"+m.attr("name")+"']:checked").each(function(){l+=d(this).val()+","});l=l===b?"":l}else{l=m.val()}}l=d.trim(l);return a.util.isEmpty.call(m,l)?"":l},enhance:function(l,m,n,k){var o=this;o.find("[datatype]").each(function(){if(l==2){if(d(this).parent().next().find(".Validform_checktip").length==0){d(this).parent().next().append("<span class='Validform_checktip' />");d(this).siblings(".Validform_checktip").remove()}}else{if(l==3||l==4){if(d(this).siblings(".Validform_checktip").length==0){d(this).parent().append("<span class='Validform_checktip' />");d(this).parent().next().find(".Validform_checktip").remove()}}}});o.find("input[recheck]").each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var q=d(this);var p=o.find("input[name='"+d(this).attr("recheck")+"']");p.bind("keyup",function(){if(p.val()==q.val()&&p.val()!=""){if(p.attr("tip")){if(p.attr("tip")==p.val()){return false}}q.trigger("blur")}}).bind("blur",function(){if(p.val()!=q.val()&&q.val()!=""){if(q.attr("tip")){if(q.attr("tip")==q.val()){return false}}q.trigger("blur")}})});o.find("[tip]").each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var q=d(this).attr("tip");var p=d(this).attr("altercss");d(this).focus(function(){if(d(this).val()==q){d(this).val("");if(p){d(this).removeClass(p)}}}).blur(function(){if(d.trim(d(this).val())===""){d(this).val(q);if(p){d(this).addClass(p)}}})});o.find(":checkbox[datatype],:radio[datatype]").each(function(){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";var q=d(this);var p=q.attr("name");o.find("[name='"+p+"']").filter(":checkbox,:radio").bind("click",function(){setTimeout(function(){q.trigger("blur")},0)})});o.find("select[datatype][multiple]").bind("click",function(){var p=d(this);setTimeout(function(){p.trigger("blur")},0)});a.util.usePlugin.call(o,m,l,n,k)},usePlugin:function(o,l,n,r){var s=this,o=o||{};if(s.find("input[plugin='swfupload']").length&&typeof(swfuploadhandler)!="undefined"){var k={custom_settings:{form:s,showmsg:function(v,t,u){a.util.showmsg.call(s,v,l,{obj:s.find("input[plugin='swfupload']"),type:t,sweep:n})}}};k=d.extend(true,{},o.swfupload,k);s.find("input[plugin='swfupload']").each(function(t){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";d(this).val("");swfuploadhandler.init(k,t)})}if(s.find("input[plugin='datepicker']").length&&d.fn.datePicker){o.datepicker=o.datepicker||{};if(o.datepicker.format){Date.format=o.datepicker.format;delete o.datepicker.format}if(o.datepicker.firstDayOfWeek){Date.firstDayOfWeek=o.datepicker.firstDayOfWeek;delete o.datepicker.firstDayOfWeek}s.find("input[plugin='datepicker']").each(function(t){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";o.datepicker.callback&&d(this).bind("dateSelected",function(){var u=new Date(d.event._dpCache[this._dpId].getSelected()[0]).asString(Date.format);o.datepicker.callback(u,this)});d(this).datePicker(o.datepicker)})}if(s.find("input[plugin*='passwordStrength']").length&&d.fn.passwordStrength){o.passwordstrength=o.passwordstrength||{};o.passwordstrength.showmsg=function(u,v,t){a.util.showmsg.call(s,v,l,{obj:u,type:t,sweep:n})};s.find("input[plugin='passwordStrength']").each(function(t){if(this.validform_inited=="inited"){return true}this.validform_inited="inited";d(this).passwordStrength(o.passwordstrength)})}if(r!="addRule"&&o.jqtransform&&d.fn.jqTransSelect){if(s[0].jqTransSelected=="true"){return}s[0].jqTransSelected="true";var m=function(t){var u=d(".jqTransformSelectWrapper ul:visible");u.each(function(){var v=d(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);if(!(t&&v.oLabel&&v.oLabel.get(0)==t.get(0))){d(this).hide()}})};var p=function(t){if(d(t.target).parents(".jqTransformSelectWrapper").length===0){m(d(t.target))}};var q=function(){d(document).mousedown(p)};if(o.jqtransform.selector){s.find(o.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton();s.find(o.jqtransform.selector).filter("input:text, input:password").jqTransInputText();s.find(o.jqtransform.selector).filter("input:checkbox").jqTransCheckBox();s.find(o.jqtransform.selector).filter("input:radio").jqTransRadio();s.find(o.jqtransform.selector).filter("textarea").jqTransTextarea();if(s.find(o.jqtransform.selector).filter("select").length>0){s.find(o.jqtransform.selector).filter("select").jqTransSelect();q()}}else{s.jqTransform()}s.find(".jqTransformSelectWrapper").find("li a").click(function(){d(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur")})}},getNullmsg:function(o){var n=this;var m=/[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g;var k;var l=o[0].settings.label||".Validform_label";l=n.siblings(l).eq(0).text()||n.siblings().find(l).eq(0).text()||n.parent().siblings(l).eq(0).text()||n.parent().siblings().find(l).eq(0).text();l=l.replace(/\s(?![a-zA-Z])/g,"").match(m);l=l?l.join(""):[""];m=/\{(.+)\|(.+)\}/;k=o.data("tipmsg").s||e.s;if(l!=""){k=k.replace(/\{0\|(.+)\}/,l);if(n.attr("recheck")){k=k.replace(/\{(.+)\}/,"");n.attr("nullmsg",k);return k}}else{k=n.is(":checkbox,:radio,select")?k.replace(/\{0\|(.+)\}/,""):k.replace(/\{0\|(.+)\}/,"$1")}k=n.is(":checkbox,:radio,select")?k.replace(m,"$2"):k.replace(m,"$1");n.attr("nullmsg",k);return k},getErrormsg:function(s,n,u){var o=/^(.+?)((\d+)-(\d+))?$/,m=/^(.+?)(\d+)-(\d+)$/,l=/(.*?)\d+(.+?)\d+(.*)/,q=n.match(o),t,r;if(u=="recheck"){r=s.data("tipmsg").reck||e.reck;return r}var p=d.extend({},e.w,s.data("tipmsg").w);if(q[0] in p){return s.data("tipmsg").w[q[0]]||e.w[q[0]]}for(var k in p){if(k.indexOf(q[1])!=-1&&m.test(k)){r=(s.data("tipmsg").w[k]||e.w[k]).replace(l,"$1"+q[3]+"$2"+q[4]+"$3");s.data("tipmsg").w[q[0]]=r;return r}}return s.data("tipmsg").def||e.def},_regcheck:function(t,n,u,A){var A=A,y=null,v=false,o=/\/.+\//g,k=/^(.+?)(\d+)-(\d+)$/,l=3;if(o.test(t)){var s=t.match(o)[0].slice(1,-1);var r=t.replace(o,"");var q=RegExp(s,r);v=q.test(n)}else{if(a.util.toString.call(a.util.dataType[t])=="[object Function]"){v=a.util.dataType[t](n,u,A,a.util.dataType);if(v===true||v===b){v=true}else{y=v;v=false}}else{if(!(t in a.util.dataType)){var m=t.match(k),z;if(!m){v=false;y=A.data("tipmsg").undef||e.undef}else{for(var B in a.util.dataType){z=B.match(k);if(!z){continue}if(m[1]===z[1]){var w=a.util.dataType[B].toString(),r=w.match(/\/[mgi]*/g)[1].replace("/",""),x=new RegExp("\\{"+z[2]+","+z[3]+"\\}","g");w=w.replace(/\/[mgi]*/g,"/").replace(x,"{"+m[2]+","+m[3]+"}").replace(/^\//,"").replace(/\/$/,"");a.util.dataType[t]=new RegExp(w,r);break}}}}if(a.util.toString.call(a.util.dataType[t])=="[object RegExp]"){v=a.util.dataType[t].test(n)}}}if(v){l=2;y=u.attr("sucmsg")||A.data("tipmsg").r||e.r;if(u.attr("recheck")){var p=A.find("input[name='"+u.attr("recheck")+"']:first");if(n!=p.val()){v=false;l=3;y=u.attr("errormsg")||a.util.getErrormsg.call(u,A,t,"recheck")}}}else{y=y||u.attr("errormsg")||a.util.getErrormsg.call(u,A,t);if(a.util.isEmpty.call(u,n)){y=u.attr("nullmsg")||a.util.getNullmsg.call(u,A)}}return{passed:v,type:l,info:y}},regcheck:function(n,s,m){var t=this,k=null,l=false,r=3;if(m.attr("ignore")==="ignore"&&a.util.isEmpty.call(m,s)){if(m.data("cked")){k=""}return{passed:true,type:4,info:k}}m.data("cked","cked");var u=a.util.parseDatatype(n);var q;for(var p=0;p<u.length;p++){for(var o=0;o<u[p].length;o++){q=a.util._regcheck(u[p][o],s,m,t);if(!q.passed){break}}if(q.passed){break}}return q},parseDatatype:function(r){var q=/\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,o=r.match(q),p=r.replace(q,"").replace(/\s*/g,"").split(""),l=[],k=0;l[0]=[];l[0].push(o[0]);for(var s=0;s<p.length;s++){if(p[s]=="|"){k++;l[k]=[]}l[k].push(o[s+1])}return l},showmsg:function(n,l,m,k){if(n==b){return}if(k=="bycheck"&&m.sweep&&(m.obj&&!m.obj.is(".Validform_error")||typeof l=="function")){return}d.extend(m,{curform:this});if(typeof l=="function"){l(n,m,a.util.cssctl);return}if(l==1||k=="byajax"&&l!=4){j.find(".Validform_info").html(n)}if(l==1&&k!="bycheck"&&m.type!=2||k=="byajax"&&l!=4){i=false;j.find(".iframe").css("height",j.outerHeight());j.show();h(j,100)}if(l==2&&m.obj){m.obj.parent().next().find(".Validform_checktip").html(n);a.util.cssctl(m.obj.parent().next().find(".Validform_checktip"),m.type)}if((l==3||l==4)&&m.obj){m.obj.siblings(".Validform_checktip").html(n);a.util.cssctl(m.obj.siblings(".Validform_checktip"),m.type)}},cssctl:function(l,k){switch(k){case 1:l.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");break;case 2:l.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");break;case 4:l.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");break;default:l.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong")}},check:function(v,t,n){var o=v[0].settings;var t=t||"";var k=a.util.getValue.call(v,d(this));if(o.ignoreHidden&&d(this).is(":hidden")||d(this).data("dataIgnore")==="dataIgnore"){return true}if(o.dragonfly&&!d(this).data("cked")&&a.util.isEmpty.call(d(this),k)&&d(this).attr("ignore")!="ignore"){return false}var s=a.util.regcheck.call(v,d(this).attr("datatype"),k,d(this));if(k==this.validform_lastval&&!d(this).attr("recheck")&&t==""){return s.passed?true:false}this.validform_lastval=k;var r;g=r=d(this);if(!s.passed){a.util.abort.call(r[0]);if(!n){a.util.showmsg.call(v,s.info,o.tiptype,{obj:d(this),type:s.type,sweep:o.tipSweep},"bycheck");!o.tipSweep&&r.addClass("Validform_error")}return false}var q=d(this).attr("ajaxurl");if(q&&!a.util.isEmpty.call(d(this),k)&&!n){var m=d(this);if(t=="postform"){m[0].validform_subpost="postform"}else{m[0].validform_subpost=""}if(m[0].validform_valid==="posting"&&k==m[0].validform_ckvalue){return"ajax"}m[0].validform_valid="posting";m[0].validform_ckvalue=k;a.util.showmsg.call(v,v.data("tipmsg").c||e.c,o.tiptype,{obj:m,type:1,sweep:o.tipSweep},"bycheck");a.util.abort.call(r[0]);var u=d.extend(true,{},o.ajaxurl||{});var p={type:"POST",cache:false,url:q,data:"param="+encodeURIComponent(k)+"&name="+encodeURIComponent(d(this).attr("name")),success:function(x){if(d.trim(x.status)==="y"){m[0].validform_valid="true";x.info&&m.attr("sucmsg",x.info);a.util.showmsg.call(v,m.attr("sucmsg")||v.data("tipmsg").r||e.r,o.tiptype,{obj:m,type:2,sweep:o.tipSweep},"bycheck");r.removeClass("Validform_error");g=null;if(m[0].validform_subpost=="postform"){v.trigger("submit")}}else{m[0].validform_valid=x.info;a.util.showmsg.call(v,x.info,o.tiptype,{obj:m,type:3,sweep:o.tipSweep});r.addClass("Validform_error")}r[0].validform_ajax=null},error:function(x){if(x.status=="200"){if(x.responseText=="y"){u.success({status:"y"})}else{u.success({status:"n",info:x.responseText})}return false}if(x.statusText!=="abort"){var y="status: "+x.status+"; statusText: "+x.statusText;a.util.showmsg.call(v,y,o.tiptype,{obj:m,type:3,sweep:o.tipSweep});r.addClass("Validform_error")}m[0].validform_valid=x.statusText;r[0].validform_ajax=null;return true}};if(u.success){var w=u.success;u.success=function(x){p.success(x);w(x,m)}}if(u.error){var l=u.error;u.error=function(x){p.error(x)&&l(x,m)}}u=d.extend({},p,u,{dataType:"json"});r[0].validform_ajax=d.ajax(u);return"ajax"}else{if(q&&a.util.isEmpty.call(d(this),k)){a.util.abort.call(r[0]);r[0].validform_valid="true"}}if(!n){a.util.showmsg.call(v,s.info,o.tiptype,{obj:d(this),type:s.type,sweep:o.tipSweep},"bycheck");r.removeClass("Validform_error")}g=null;return true},submitForm:function(o,l,k,r,t){var w=this;if(w[0].validform_status==="posting"){return false}if(o.postonce&&w[0].validform_status==="posted"){return false}var v=o.beforeCheck&&o.beforeCheck(w);if(v===false){return false}var s=true,n;w.find("[datatype]").each(function(){if(l){return false}if(o.ignoreHidden&&d(this).is(":hidden")||d(this).data("dataIgnore")==="dataIgnore"){return true}var z=a.util.getValue.call(w,d(this)),A;g=A=d(this);n=a.util.regcheck.call(w,d(this).attr("datatype"),z,d(this));if(!n.passed){a.util.showmsg.call(w,n.info,o.tiptype,{obj:d(this),type:n.type,sweep:o.tipSweep});A.addClass("Validform_error");if(!o.showAllError){A.focus();s=false;return false}s&&(s=false);return true}if(d(this).attr("ajaxurl")&&!a.util.isEmpty.call(d(this),z)){if(this.validform_valid!=="true"){var y=d(this);a.util.showmsg.call(w,w.data("tipmsg").v||e.v,o.tiptype,{obj:y,type:3,sweep:o.tipSweep});A.addClass("Validform_error");y.trigger("blur",["postform"]);if(!o.showAllError){s=false;return false}s&&(s=false);return true}}else{if(d(this).attr("ajaxurl")&&a.util.isEmpty.call(d(this),z)){a.util.abort.call(this);this.validform_valid="true"}}a.util.showmsg.call(w,n.info,o.tiptype,{obj:d(this),type:n.type,sweep:o.tipSweep});A.removeClass("Validform_error");g=null});if(o.showAllError){w.find(".Validform_error:first").focus()}if(s){var q=o.beforeSubmit&&o.beforeSubmit(w);if(q===false){return false}w[0].validform_status="posting";if(o.ajaxPost||r==="ajaxPost"){var u=d.extend(true,{},o.ajaxpost||{});u.url=k||u.url||o.url||w.attr("action");a.util.showmsg.call(w,w.data("tipmsg").p||e.p,o.tiptype,{obj:w,type:1,sweep:o.tipSweep},"byajax");if(t){u.async=false}else{if(t===false){u.async=true}}if(u.success){var x=u.success;u.success=function(y){o.callback&&o.callback(y);w[0].validform_ajax=null;if(d.trim(y.status)==="y"){w[0].validform_status="posted"}else{w[0].validform_status="normal"}x(y,w)}}if(u.error){var m=u.error;u.error=function(y){o.callback&&o.callback(y);w[0].validform_status="normal";w[0].validform_ajax=null;m(y,w)}}var p={type:"POST",async:true,data:w.serializeArray(),success:function(y){if(d.trim(y.status)==="y"){w[0].validform_status="posted";a.util.showmsg.call(w,y.info,o.tiptype,{obj:w,type:2,sweep:o.tipSweep},"byajax")}else{w[0].validform_status="normal";a.util.showmsg.call(w,y.info,o.tiptype,{obj:w,type:3,sweep:o.tipSweep},"byajax")}o.callback&&o.callback(y);w[0].validform_ajax=null},error:function(y){var z="status: "+y.status+"; statusText: "+y.statusText;a.util.showmsg.call(w,z,o.tiptype,{obj:w,type:3,sweep:o.tipSweep},"byajax");o.callback&&o.callback(y);w[0].validform_status="normal";w[0].validform_ajax=null}};u=d.extend({},p,u,{dataType:"json"});w[0].validform_ajax=d.ajax(u)}else{if(!o.postonce){w[0].validform_status="normal"}var k=k||o.url;if(k){w.attr("action",k)}return o.callback&&o.callback(w)}}return false},resetForm:function(){var k=this;k.each(function(){this.reset&&this.reset();this.validform_status="normal"});k.find(".Validform_right").text("");k.find(".passwordStrength").children().removeClass("bgStrength");k.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading");k.find(".Validform_error").removeClass("Validform_error");k.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function(){this.validform_lastval=null});k.eq(0).find("input:first").focus()},abort:function(){if(this.validform_ajax){this.validform_ajax.abort()}}};d.Datatype=a.util.dataType;a.prototype={dataType:a.util.dataType,eq:function(l){var k=this;if(l>=k.forms.length){return null}if(!(l in k.objects)){k.objects[l]=new a(d(k.forms[l]).get(),{},true)}return k.objects[l]},resetStatus:function(){var k=this;d(k.forms).each(function(){this.validform_status="normal"});return this},setStatus:function(k){var l=this;d(l.forms).each(function(){this.validform_status=k||"posting"});return this},getStatus:function(){var l=this;var k=d(l.forms)[0].validform_status;return k},ignore:function(k){var l=this;var k=k||"[datatype]";d(l.forms).find(k).each(function(){d(this).data("dataIgnore","dataIgnore").removeClass("Validform_error")});return this},unignore:function(k){var l=this;var k=k||"[datatype]";d(l.forms).find(k).each(function(){d(this).removeData("dataIgnore")});return this},addRule:function(n){var m=this;var n=n||[];for(var l=0;l<n.length;l++){var p=d(m.forms).find(n[l].ele);for(var k in n[l]){k!=="ele"&&p.attr(k,n[l][k])}}d(m.forms).each(function(){var o=d(this);a.util.enhance.call(o,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep,"addRule")});return this},ajaxPost:function(k,m,l){var n=this;d(n.forms).each(function(){if(this.settings.tiptype==1||this.settings.tiptype==2||this.settings.tiptype==3){c()}a.util.submitForm.call(d(n.forms[0]),this.settings,k,l,"ajaxPost",m)});return this},submitForm:function(k,l){var m=this;d(m.forms).each(function(){var n=a.util.submitForm.call(d(this),this.settings,k,l);n===b&&(n=true);if(n===true){this.submit()}});return this},resetForm:function(){var k=this;a.util.resetForm.call(d(k.forms));return this},abort:function(){var k=this;d(k.forms).each(function(){a.util.abort.call(this)});return this},check:function(m,k){var k=k||"[datatype]",o=this,n=d(o.forms),l=true;n.find(k).each(function(){a.util.check.call(this,n,"",m)||(l=false)});return l},config:function(k){var l=this;k=k||{};d(l.forms).each(function(){var m=d(this);this.settings=d.extend(true,this.settings,k);a.util.enhance.call(m,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep)});return this}};d.fn.Validform=function(k){return new a(this,k)};function h(n,m){var l=(d(window).width()-n.outerWidth())/2,k=(d(window).height()-n.outerHeight())/2,k=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(k>0?k:0);n.css({left:l}).animate({top:k},{duration:m,queue:false})}function c(){if(d("#Validform_msg").length!==0){return false}j=d('<div id="Validform_msg"><div class="Validform_title">'+e.tit+'<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body");j.find("a.Validform_close").click(function(){j.hide();i=true;if(g){g.focus().addClass("Validform_error")}return false}).focus(function(){this.blur()});d(window).bind("scroll resize",function(){!i&&h(j,400)})}d.Showmsg=function(k){c();a.util.showmsg.call(f,k,1,{})};d.Hidemsg=function(){j.hide();i=true}})(jQuery,window);

/*! WebUploader 0.1.5 */


/**
 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
 *
 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
 */
(function( root, factory ) {
    var modules = {},

        // 内部require, 简单不完全实现。
        // https://github.com/amdjs/amdjs-api/wiki/require
        _require = function (deps, callback) {
            var args, len, i;

            // 如果deps不是数组，则直接返回指定module
            if ( typeof deps === 'string' ) {
                return getModule( deps );
            } else {
                args = [];
                for( len = deps.length, i = 0; i < len; i++ ) {
                    args.push( getModule( deps[ i ] ) );
                }

                return callback.apply( null, args );
            }
        },

        // 内部define，暂时不支持不指定id.
        _define = function (id, deps, factory) {
              
            if ( arguments.length === 2 ) {
                factory = deps;
                deps = null;
            }

            _require( deps || [], function() {
                setModule( id, factory, arguments );
            });
        },

        // 设置module, 兼容CommonJs写法。
        setModule = function (id, factory, args) {
                
              
            var module = {
                    exports: factory
                },
                returned;

            if ( typeof factory === 'function' ) {
                args.length || (args = [ _require, module.exports, module ]);
                returned = factory.apply( null, args );
                returned !== undefined && (module.exports = returned);
            }

            modules[ id ] = module.exports;
        },

        // 根据id获取module
        getModule = function (id) {
             
            var module = modules[ id ] || root[ id ];

            if (!module) {
                throw new Error( '`' + id + '` is undefined' );
            }

            return module;
        },

        // 将所有modules，将路径ids装换成对象。
        exportsTo = function( obj ) {
            var key, host, parts, part, last, ucFirst;

            // make the first character upper case.
            ucFirst = function( str ) {
                return str && (str.charAt( 0 ).toUpperCase() + str.substr( 1 ));
            };

            for ( key in modules ) {
                host = obj;

                if ( !modules.hasOwnProperty( key ) ) {
                    continue;
                }

                parts = key.split('/');
                last = ucFirst( parts.pop() );

                while( (part = ucFirst( parts.shift() )) ) {
                    host[ part ] = host[ part ] || {};
                    host = host[ part ];
                }

                host[ last ] = modules[ key ];
            }

            return obj;
        },

        makeExport = function( dollar ) {
            root.__dollar = dollar;
              
            // exports every module.
            return exportsTo( factory( root, _define, _require ) );
        },

        origin;

    if ( typeof module === 'object' && typeof module.exports === 'object' ) {

        // For CommonJS and CommonJS-like environments where a proper window is present,
        module.exports = makeExport();
    } else if ( typeof define === 'function' && define.amd ) {

        // Allow using this built library as an AMD module
        // in another project. That other project will only
        // see this AMD call, not the internal modules in
        // the closure below.
        define([ 'jquery' ], makeExport );
    } else {

        // Browser globals case. Just assign the
        // result to a property on the global.
        origin = root.WebUploader;
        root.WebUploader = makeExport();
        root.WebUploader.noConflict = function() {
            root.WebUploader = origin;
        };
    }
})( window, function( window, define, require ) {


    /**
     * @fileOverview jQuery or Zepto
     */
    define('dollar-third',[],function() {
        var $ = window.__dollar || window.jQuery || window.Zepto;
    
        if ( !$ ) {
            throw new Error('jQuery or Zepto not found!');
        }
    
        return $;
    });
    /**
     * @fileOverview Dom 操作相关
     */
    define('dollar',[
        'dollar-third'
    ], function( _ ) {
        return _;
    });
    /**
     * @fileOverview 使用jQuery的Promise
     */
    define('promise-third',[
        'dollar'
    ], function( $ ) {
        return {
            Deferred: $.Deferred,
            when: $.when,
    
            isPromise: function( anything ) {
                return anything && typeof anything.then === 'function';
            }
        };
    });
    /**
     * @fileOverview Promise/A+
     */
    define('promise',[
        'promise-third'
    ], function( _ ) {
        return _;
    });
    /**
     * @fileOverview 基础类方法。
     */
    
    /**
     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
     *
     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
     *
     * * module `base`：WebUploader.Base
     * * module `file`: WebUploader.File
     * * module `lib/dnd`: WebUploader.Lib.Dnd
     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
     *
     *
     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
     * @module WebUploader
     * @title WebUploader API文档
     */
    define('base',[
        'dollar',
        'promise'
    ], function( $, promise ) {
    
        var noop = function() {},
            call = Function.call;
    
        // http://jsperf.com/uncurrythis
        // 反科里化
        function uncurryThis( fn ) {
            return function() {
                return call.apply( fn, arguments );
            };
        }
    
        function bindFn( fn, context ) {
            return function() {
                return fn.apply( context, arguments );
            };
        }
    
        function createObject( proto ) {
            var f;
    
            if ( Object.create ) {
                return Object.create( proto );
            } else {
                f = function() {};
                f.prototype = proto;
                return new f();
            }
        }
    
    
        /**
         * 基础类，提供一些简单常用的方法。
         * @class Base
         */
        return {
    
            /**
             * @property {string} version 当前版本号。
             */
            version: '0.1.5',
    
            /**
             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
             */
            $: $,
    
            Deferred: promise.Deferred,
    
            isPromise: promise.isPromise,
    
            when: promise.when,
    
            /**
             * @description  简单的浏览器检查结果。
             *
             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
             *
             * @property {Object} [browser]
             */
            browser: (function( ua ) {
                var ret = {},
                    webkit = ua.match( /WebKit\/([\d.]+)/ ),
                    chrome = ua.match( /Chrome\/([\d.]+)/ ) ||
                        ua.match( /CriOS\/([\d.]+)/ ),
    
                    ie = ua.match( /MSIE\s([\d\.]+)/ ) ||
                        ua.match( /(?:trident)(?:.*rv:([\w.]+))?/i ),
                    firefox = ua.match( /Firefox\/([\d.]+)/ ),
                    safari = ua.match( /Safari\/([\d.]+)/ ),
                    opera = ua.match( /OPR\/([\d.]+)/ );
    
                webkit && (ret.webkit = parseFloat( webkit[ 1 ] ));
                chrome && (ret.chrome = parseFloat( chrome[ 1 ] ));
                ie && (ret.ie = parseFloat( ie[ 1 ] ));
                firefox && (ret.firefox = parseFloat( firefox[ 1 ] ));
                safari && (ret.safari = parseFloat( safari[ 1 ] ));
                opera && (ret.opera = parseFloat( opera[ 1 ] ));
    
                return ret;
            })( navigator.userAgent ),
    
            /**
             * @description  操作系统检查结果。
             *
             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
             * @property {Object} [os]
             */
            os: (function( ua ) {
                var ret = {},
    
                    // osx = !!ua.match( /\(Macintosh\; Intel / ),
                    android = ua.match( /(?:Android);?[\s\/]+([\d.]+)?/ ),
                    ios = ua.match( /(?:iPad|iPod|iPhone).*OS\s([\d_]+)/ );
    
                // osx && (ret.osx = true);
                android && (ret.android = parseFloat( android[ 1 ] ));
                ios && (ret.ios = parseFloat( ios[ 1 ].replace( /_/g, '.' ) ));
    
                return ret;
            })( navigator.userAgent ),
    
            /**
             * 实现类与类之间的继承。
             * @method inherits
             * @grammar Base.inherits( super ) => child
             * @grammar Base.inherits( super, protos ) => child
             * @grammar Base.inherits( super, protos, statics ) => child
             * @param  {Class} super 父类
             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
             * @param  {Object} [statics] 静态属性或方法。
             * @return {Class} 返回子类。
             * @example
             * function Person() {
             *     console.log( 'Super' );
             * }
             * Person.prototype.hello = function() {
             *     console.log( 'hello' );
             * };
             *
             * var Manager = Base.inherits( Person, {
             *     world: function() {
             *         console.log( 'World' );
             *     }
             * });
             *
             * // 因为没有指定构造器，父类的构造器将会执行。
             * var instance = new Manager();    // => Super
             *
             * // 继承子父类的方法
             * instance.hello();    // => hello
             * instance.world();    // => World
             *
             * // 子类的__super__属性指向父类
             * console.log( Manager.__super__ === Person );    // => true
             */
            inherits: function( Super, protos, staticProtos ) {
                var child;
    
                if ( typeof protos === 'function' ) {
                    child = protos;
                    protos = null;
                } else if ( protos && protos.hasOwnProperty('constructor') ) {
                    child = protos.constructor;
                } else {
                    child = function() {
                        return Super.apply( this, arguments );
                    };
                }
    
                // 复制静态方法
                $.extend( true, child, Super, staticProtos || {} );
    
                /* jshint camelcase: false */
    
                // 让子类的__super__属性指向父类。
                child.__super__ = Super.prototype;
    
                // 构建原型，添加原型方法或属性。
                // 暂时用Object.create实现。
                child.prototype = createObject( Super.prototype );
                protos && $.extend( true, child.prototype, protos );
    
                return child;
            },
    
            /**
             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
             * @method noop
             */
            noop: noop,
    
            /**
             * 返回一个新的方法，此方法将已指定的`context`来执行。
             * @grammar Base.bindFn( fn, context ) => Function
             * @method bindFn
             * @example
             * var doSomething = function() {
             *         console.log( this.name );
             *     },
             *     obj = {
             *         name: 'Object Name'
             *     },
             *     aliasFn = Base.bind( doSomething, obj );
             *
             *  aliasFn();    // => Object Name
             *
             */
            bindFn: bindFn,
    
            /**
             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
             * @grammar Base.log( args... ) => undefined
             * @method log
             */
            log: (function() {
                if ( window.console ) {
                    return bindFn( console.log, console );
                }
                return noop;
            })(),
    
            nextTick: (function() {
    
                return function( cb ) {
                    setTimeout( cb, 1 );
                };
    
                // @bug 当浏览器不在当前窗口时就停了。
                // var next = window.requestAnimationFrame ||
                //     window.webkitRequestAnimationFrame ||
                //     window.mozRequestAnimationFrame ||
                //     function( cb ) {
                //         window.setTimeout( cb, 1000 / 60 );
                //     };
    
                // // fix: Uncaught TypeError: Illegal invocation
                // return bindFn( next, window );
            })(),
    
            /**
             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
             * 将用来将非数组对象转化成数组对象。
             * @grammar Base.slice( target, start[, end] ) => Array
             * @method slice
             * @example
             * function doSomthing() {
             *     var args = Base.slice( arguments, 1 );
             *     console.log( args );
             * }
             *
             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
             */
            slice: uncurryThis( [].slice ),
    
            /**
             * 生成唯一的ID
             * @method guid
             * @grammar Base.guid() => string
             * @grammar Base.guid( prefx ) => string
             */
            guid: (function() {
                var counter = 0;
    
                return function( prefix ) {
                    var guid = (+new Date()).toString( 32 ),
                        i = 0;
    
                    for ( ; i < 5; i++ ) {
                        guid += Math.floor( Math.random() * 65535 ).toString( 32 );
                    }
    
                    return (prefix || 'wu_') + guid + (counter++).toString( 32 );
                };
            })(),
    
            /**
             * 格式化文件大小, 输出成带单位的字符串
             * @method formatSize
             * @grammar Base.formatSize( size ) => string
             * @grammar Base.formatSize( size, pointLength ) => string
             * @grammar Base.formatSize( size, pointLength, units ) => string
             * @param {Number} size 文件大小
             * @param {Number} [pointLength=2] 精确到的小数点数。
             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
             * @example
             * console.log( Base.formatSize( 100 ) );    // => 100B
             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
             */
            formatSize: function( size, pointLength, units ) {
                var unit;
    
                units = units || [ 'B', 'K', 'M', 'G', 'TB' ];
    
                while ( (unit = units.shift()) && size > 1024 ) {
                    size = size / 1024;
                }
    
                return (unit === 'B' ? size : size.toFixed( pointLength || 2 )) +
                        unit;
            }
        };
    });
    /**
     * 事件处理类，可以独立使用，也可以扩展给对象使用。
     * @fileOverview Mediator
     */
    define('mediator',[
        'base'
    ], function( Base ) {
        var $ = Base.$,
            slice = [].slice,
            separator = /\s+/,
            protos;
    
        // 根据条件过滤出事件handlers.
        function findHandlers( arr, name, callback, context ) {
            return $.grep( arr, function( handler ) {
                return handler &&
                        (!name || handler.e === name) &&
                        (!callback || handler.cb === callback ||
                        handler.cb._cb === callback) &&
                        (!context || handler.ctx === context);
            });
        }
    
        function eachEvent( events, callback, iterator ) {
            // 不支持对象，只支持多个event用空格隔开
            $.each( (events || '').split( separator ), function( _, key ) {
                iterator( key, callback );
            });
        }
    
        function triggerHanders( events, args ) {
            var stoped = false,
                i = -1,
                len = events.length,
                handler;
    
            while ( ++i < len ) {
                handler = events[ i ];
    
                if ( handler.cb.apply( handler.ctx2, args ) === false ) {
                    stoped = true;
                    break;
                }
            }
    
            return !stoped;
        }
    
        protos = {
    
            /**
             * 绑定事件。
             *
             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
             * ```javascript
             * var obj = {};
             *
             * // 使得obj有事件行为
             * Mediator.installTo( obj );
             *
             * obj.on( 'testa', function( arg1, arg2 ) {
             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
             * });
             *
             * obj.trigger( 'testa', 'arg1', 'arg2' );
             * ```
             *
             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
             * 切会影响到`trigger`方法的返回值，为`false`。
             *
             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
             * ```javascript
             * obj.on( 'all', function( type, arg1, arg2 ) {
             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
             * });
             * ```
             *
             * @method on
             * @grammar on( name, callback[, context] ) => self
             * @param  {string}   name     事件名，支持多个事件用空格隔开
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             * @class Mediator
             */
            on: function( name, callback, context ) {
                var me = this,
                    set;
    
                if ( !callback ) {
                    return this;
                }
    
                set = this._events || (this._events = []);
    
                eachEvent( name, callback, function( name, callback ) {
                    var handler = { e: name };
    
                    handler.cb = callback;
                    handler.ctx = context;
                    handler.ctx2 = context || me;
                    handler.id = set.length;
    
                    set.push( handler );
                });
    
                return this;
            },
    
            /**
             * 绑定事件，且当handler执行完后，自动解除绑定。
             * @method once
             * @grammar once( name, callback[, context] ) => self
             * @param  {string}   name     事件名
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            once: function( name, callback, context ) {
                var me = this;
    
                if ( !callback ) {
                    return me;
                }
    
                eachEvent( name, callback, function( name, callback ) {
                    var once = function() {
                            me.off( name, once );
                            return callback.apply( context || me, arguments );
                        };
    
                    once._cb = callback;
                    me.on( name, once, context );
                });
    
                return me;
            },
    
            /**
             * 解除事件绑定
             * @method off
             * @grammar off( [name[, callback[, context] ] ] ) => self
             * @param  {string}   [name]     事件名
             * @param  {Function} [callback] 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            off: function( name, cb, ctx ) {
                var events = this._events;
    
                if ( !events ) {
                    return this;
                }
    
                if ( !name && !cb && !ctx ) {
                    this._events = [];
                    return this;
                }
    
                eachEvent( name, cb, function( name, cb ) {
                    $.each( findHandlers( events, name, cb, ctx ), function() {
                        delete events[ this.id ];
                    });
                });
    
                return this;
            },
    
            /**
             * 触发事件
             * @method trigger
             * @grammar trigger( name[, args...] ) => self
             * @param  {string}   type     事件名
             * @param  {*} [...] 任意参数
             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
             */
            trigger: function( type ) {
                var args, events, allEvents;
    
                if ( !this._events || !type ) {
                    return this;
                }
    
                args = slice.call( arguments, 1 );
                events = findHandlers( this._events, type );
                allEvents = findHandlers( this._events, 'all' );
    
                return triggerHanders( events, args ) &&
                        triggerHanders( allEvents, arguments );
            }
        };
    
        /**
         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
         * 主要目的是负责模块与模块之间的合作，降低耦合度。
         *
         * @class Mediator
         */
        return $.extend({
    
            /**
             * 可以通过这个接口，使任何对象具备事件功能。
             * @method installTo
             * @param  {Object} obj 需要具备事件行为的对象。
             * @return {Object} 返回obj.
             */
            installTo: function( obj ) {
                return $.extend( obj, protos );
            }
    
        }, protos );
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('uploader',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$;
    
        /**
         * 上传入口类。
         * @class Uploader
         * @constructor
         * @grammar new Uploader( opts ) => Uploader
         * @example
         * var uploader = WebUploader.Uploader({
         *     swf: 'path_of_swf/Uploader.swf',
         *
         *     // 开起分片上传。
         *     chunked: true
         * });
         */
        function Uploader( opts ) {
            this.options = $.extend( true, {}, Uploader.options, opts );
            this._init( this.options );
        }
    
        // default Options
        // widgets中有相应扩展
        Uploader.options = {};
        Mediator.installTo( Uploader.prototype );
    
        // 批量添加纯命令式方法。
        $.each({
            upload: 'start-upload',
            stop: 'stop-upload',
            getFile: 'get-file',
            getFiles: 'get-files',
            addFile: 'add-file',
            addFiles: 'add-file',
            sort: 'sort-files',
            removeFile: 'remove-file',
            cancelFile: 'cancel-file',
            skipFile: 'skip-file',
            retry: 'retry',
            isInProgress: 'is-in-progress',
            makeThumb: 'make-thumb',
            md5File: 'md5-file',
            getDimension: 'get-dimension',
            addButton: 'add-btn',
            predictRuntimeType: 'predict-runtime-type',
            refresh: 'refresh',
            disable: 'disable',
            enable: 'enable',
            reset: 'reset'
        }, function( fn, command ) {
            Uploader.prototype[ fn ] = function() {
                return this.request( command, arguments );
            };
        });
    
        $.extend( Uploader.prototype, {
            state: 'pending',
    
            _init: function( opts ) {
                var me = this;
    
                me.request( 'init', opts, function() {
                    me.state = 'ready';
                    me.trigger('ready');
                });
            },
    
            /**
             * 获取或者设置Uploader配置项。
             * @method option
             * @grammar option( key ) => *
             * @grammar option( key, val ) => self
             * @example
             *
             * // 初始状态图片上传前不会压缩
             * var uploader = new WebUploader.Uploader({
             *     compress: null;
             * });
             *
             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
             * uploader.option( 'compress', {
             *     width: 1600,
             *     height: 1600
             * });
             */
            option: function( key, val ) {
                var opts = this.options;
    
                // setter
                if ( arguments.length > 1 ) {
    
                    if ( $.isPlainObject( val ) &&
                            $.isPlainObject( opts[ key ] ) ) {
                        $.extend( opts[ key ], val );
                    } else {
                        opts[ key ] = val;
                    }
    
                } else {    // getter
                    return key ? opts[ key ] : opts;
                }
            },
    
            /**
             * 获取文件统计信息。返回一个包含一下信息的对象。
             * * `successNum` 上传成功的文件数
             * * `progressNum` 上传中的文件数
             * * `cancelNum` 被删除的文件数
             * * `invalidNum` 无效的文件数
             * * `uploadFailNum` 上传失败的文件数
             * * `queueNum` 还在队列中的文件数
             * * `interruptNum` 被暂停的文件数
             * @method getStats
             * @grammar getStats() => Object
             */
            getStats: function() {
                // return this._mgr.getStats.apply( this._mgr, arguments );
                var stats = this.request('get-stats');
    
                return stats ? {
                    successNum: stats.numOfSuccess,
                    progressNum: stats.numOfProgress,
    
                    // who care?
                    // queueFailNum: 0,
                    cancelNum: stats.numOfCancel,
                    invalidNum: stats.numOfInvalid,
                    uploadFailNum: stats.numOfUploadFailed,
                    queueNum: stats.numOfQueue,
                    interruptNum: stats.numofInterrupt
                } : {};
            },
    
            // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
            trigger: function( type/*, args...*/ ) {
                var args = [].slice.call( arguments, 1 ),
                    opts = this.options,
                    name = 'on' + type.substring( 0, 1 ).toUpperCase() +
                        type.substring( 1 );
    
                if (
                        // 调用通过on方法注册的handler.
                        Mediator.trigger.apply( this, arguments ) === false ||
    
                        // 调用opts.onEvent
                        $.isFunction( opts[ name ] ) &&
                        opts[ name ].apply( this, args ) === false ||
    
                        // 调用this.onEvent
                        $.isFunction( this[ name ] ) &&
                        this[ name ].apply( this, args ) === false ||
    
                        // 广播所有uploader的事件。
                        Mediator.trigger.apply( Mediator,
                        [ this, type ].concat( args ) ) === false ) {
    
                    return false;
                }
    
                return true;
            },
    
            /**
             * 销毁 webuploader 实例
             * @method destroy
             * @grammar destroy() => undefined
             */
            destroy: function() {
                this.request( 'destroy', arguments );
                this.off();
            },
    
            // widgets/widget.js将补充此方法的详细文档。
            request: Base.noop
        });
    
        /**
         * 创建Uploader实例，等同于new Uploader( opts );
         * @method create
         * @class Base
         * @static
         * @grammar Base.create( opts ) => Uploader
         */
        Base.create = Uploader.create = function( opts ) {
            return new Uploader( opts );
        };
    
        // 暴露Uploader，可以通过它来扩展业务逻辑。
        Base.Uploader = Uploader;
    
        return Uploader;
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/runtime',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$,
            factories = {},
    
            // 获取对象的第一个key
            getFirstKey = function( obj ) {
                for ( var key in obj ) {
                    if ( obj.hasOwnProperty( key ) ) {
                        return key;
                    }
                }
                return null;
            };
    
        // 接口类。
        function Runtime( options ) {
            this.options = $.extend({
                container: document.body
            }, options );
            this.uid = Base.guid('rt_');
        }
    
        $.extend( Runtime.prototype, {
    
            getContainer: function() {
                var opts = this.options,
                    parent, container;
    
                if ( this._container ) {
                    return this._container;
                }
    
                parent = $( opts.container || document.body );
                container = $( document.createElement('div') );
    
                container.attr( 'id', 'rt_' + this.uid );
                container.css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden'
                });
    
                parent.append( container );
                parent.addClass('webuploader-container');
                this._container = container;
                this._parent = parent;
                return container;
            },
    
            init: Base.noop,
            exec: Base.noop,
    
            destroy: function() {
                this._container && this._container.remove();
                this._parent && this._parent.removeClass('webuploader-container');
                this.off();
            }
        });
    
        Runtime.orders = 'html5,flash';
    
    
        /**
         * 添加Runtime实现。
         * @param {string} type    类型
         * @param {Runtime} factory 具体Runtime实现。
         */
        Runtime.addRuntime = function( type, factory ) {
            factories[ type ] = factory;
        };
    
        Runtime.hasRuntime = function( type ) {
            return !!(type ? factories[ type ] : getFirstKey( factories ));
        };
    
        Runtime.create = function( opts, orders ) {
            var type, runtime;
    
            orders = orders || Runtime.orders;
            $.each( orders.split( /\s*,\s*/g ), function() {
                if ( factories[ this ] ) {
                    type = this;
                    return false;
                }
            });
    
            type = type || getFirstKey( factories );
    
            if ( !type ) {
                throw new Error('Runtime Error');
            }
    
            runtime = new factories[ type ]( opts );
            return runtime;
        };
    
        Mediator.installTo( Runtime.prototype );
        return Runtime;
    });
    
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/client',[
        'base',
        'mediator',
        'runtime/runtime'
    ], function( Base, Mediator, Runtime ) {
    
        var cache;
    
        cache = (function() {
            var obj = {};
    
            return {
                add: function( runtime ) {
                    obj[ runtime.uid ] = runtime;
                },
    
                get: function( ruid, standalone ) {
                    var i;
    
                    if ( ruid ) {
                        return obj[ ruid ];
                    }
    
                    for ( i in obj ) {
                        // 有些类型不能重用，比如filepicker.
                        if ( standalone && obj[ i ].__standalone ) {
                            continue;
                        }
    
                        return obj[ i ];
                    }
    
                    return null;
                },
    
                remove: function( runtime ) {
                    delete obj[ runtime.uid ];
                }
            };
        })();
    
        function RuntimeClient( component, standalone ) {
            var deferred = Base.Deferred(),
                runtime;
    
            this.uid = Base.guid('client_');
    
            // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
            this.runtimeReady = function( cb ) {
                return deferred.done( cb );
            };
    
            this.connectRuntime = function( opts, cb ) {
    
                // already connected.
                if ( runtime ) {
                    throw new Error('already connected!');
                }
    
                deferred.done( cb );
    
                if ( typeof opts === 'string' && cache.get( opts ) ) {
                    runtime = cache.get( opts );
                }
    
                // 像filePicker只能独立存在，不能公用。
                runtime = runtime || cache.get( null, standalone );
    
                // 需要创建
                if ( !runtime ) {
                    runtime = Runtime.create( opts, opts.runtimeOrder );
                    runtime.__promise = deferred.promise();
                    runtime.once( 'ready', deferred.resolve );
                    runtime.init();
                    cache.add( runtime );
                    runtime.__client = 1;
                } else {
                    // 来自cache
                    Base.$.extend( runtime.options, opts );
                    runtime.__promise.then( deferred.resolve );
                    runtime.__client++;
                }
    
                standalone && (runtime.__standalone = standalone);
                return runtime;
            };
    
            this.getRuntime = function() {
                return runtime;
            };
    
            this.disconnectRuntime = function() {
                if ( !runtime ) {
                    return;
                }
    
                runtime.__client--;
    
                if ( runtime.__client <= 0 ) {
                    cache.remove( runtime );
                    delete runtime.__promise;
                    runtime.destroy();
                }
    
                runtime = null;
            };
    
            this.exec = function() {
                if ( !runtime ) {
                    return;
                }
    
                var args = Base.slice( arguments );
                component && args.unshift( component );
    
                return runtime.exec.apply( this, args );
            };
    
            this.getRuid = function() {
                return runtime && runtime.uid;
            };
    
            this.destroy = (function( destroy ) {
                return function() {
                    destroy && destroy.apply( this, arguments );
                    this.trigger('destroy');
                    this.off();
                    this.exec('destroy');
                    this.disconnectRuntime();
                };
            })( this.destroy );
        }
    
        Mediator.installTo( RuntimeClient.prototype );
        return RuntimeClient;
    });
    /**
     * @fileOverview 错误信息
     */
    define('lib/dnd',[
        'base',
        'mediator',
        'runtime/client'
    ], function( Base, Mediator, RuntimeClent ) {
    
        var $ = Base.$;
    
        function DragAndDrop( opts ) {
            opts = this.options = $.extend({}, DragAndDrop.options, opts );
    
            opts.container = $( opts.container );
    
            if ( !opts.container.length ) {
                return;
            }
    
            RuntimeClent.call( this, 'DragAndDrop' );
        }
    
        DragAndDrop.options = {
            accept: null,
            disableGlobalDnd: false
        };
    
        Base.inherits( RuntimeClent, {
            constructor: DragAndDrop,
    
            init: function() {
                var me = this;
    
                me.connectRuntime( me.options, function() {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });
    
        Mediator.installTo( DragAndDrop.prototype );
    
        return DragAndDrop;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/widget',[
        'base',
        'uploader'
    ], function( Base, Uploader ) {
    
        var $ = Base.$,
            _init = Uploader.prototype._init,
            _destroy = Uploader.prototype.destroy,
            IGNORE = {},
            widgetClass = [];
    
        function isArrayLike( obj ) {
            if ( !obj ) {
                return false;
            }
    
            var length = obj.length,
                type = $.type( obj );
    
            if ( obj.nodeType === 1 && length ) {
                return true;
            }
    
            return type === 'array' || type !== 'function' && type !== 'string' &&
                    (length === 0 || typeof length === 'number' && length > 0 &&
                    (length - 1) in obj);
        }
    
        function Widget( uploader ) {
            this.owner = uploader;
            this.options = uploader.options;
        }
    
        $.extend( Widget.prototype, {
    
            init: Base.noop,
    
            // 类Backbone的事件监听声明，监听uploader实例上的事件
            // widget直接无法监听事件，事件只能通过uploader来传递
            invoke: function( apiName, args ) {
    
                /*
                    {
                        'make-thumb': 'makeThumb'
                    }
                 */
                var map = this.responseMap;
    
                // 如果无API响应声明则忽略
                if ( !map || !(apiName in map) || !(map[ apiName ] in this) ||
                        !$.isFunction( this[ map[ apiName ] ] ) ) {
    
                    return IGNORE;
                }
    
                return this[ map[ apiName ] ].apply( this, args );
    
            },
    
            /**
             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
             * @method request
             * @grammar request( command, args ) => * | Promise
             * @grammar request( command, args, callback ) => Promise
             * @for  Uploader
             */
            request: function() {
                return this.owner.request.apply( this.owner, arguments );
            }
        });
    
        // 扩展Uploader.
        $.extend( Uploader.prototype, {
    
            /**
             * @property {string | Array} [disableWidgets=undefined]
             * @namespace options
             * @for Uploader
             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
             */
    
            // 覆写_init用来初始化widgets
            _init: function() {
                var me = this,
                    widgets = me._widgets = [],
                    deactives = me.options.disableWidgets || '';
    
                $.each( widgetClass, function( _, klass ) {
                    (!deactives || !~deactives.indexOf( klass._name )) &&
                        widgets.push( new klass( me ) );
                });
    
                return _init.apply( me, arguments );
            },
    
            request: function( apiName, args, callback ) {
                var i = 0,
                    widgets = this._widgets,
                    len = widgets && widgets.length,
                    rlts = [],
                    dfds = [],
                    widget, rlt, promise, key;
    
                args = isArrayLike( args ) ? args : [ args ];
    
                for ( ; i < len; i++ ) {
                    widget = widgets[ i ];
                    rlt = widget.invoke( apiName, args );
    
                    if ( rlt !== IGNORE ) {
    
                        // Deferred对象
                        if ( Base.isPromise( rlt ) ) {
                            dfds.push( rlt );
                        } else {
                            rlts.push( rlt );
                        }
                    }
                }
    
                // 如果有callback，则用异步方式。
                if ( callback || dfds.length ) {
                    promise = Base.when.apply( Base, dfds );
                    key = promise.pipe ? 'pipe' : 'then';
    
                    // 很重要不能删除。删除了会死循环。
                    // 保证执行顺序。让callback总是在下一个 tick 中执行。
                    return promise[ key ](function() {
                                var deferred = Base.Deferred(),
                                    args = arguments;
    
                                if ( args.length === 1 ) {
                                    args = args[ 0 ];
                                }
    
                                setTimeout(function() {
                                    deferred.resolve( args );
                                }, 1 );
    
                                return deferred.promise();
                            })[ callback ? key : 'done' ]( callback || Base.noop );
                } else {
                    return rlts[ 0 ];
                }
            },
    
            destroy: function() {
                _destroy.apply( this, arguments );
                this._widgets = null;
            }
        });
    
        /**
         * 添加组件
         * @grammar Uploader.register(proto);
         * @grammar Uploader.register(map, proto);
         * @param  {object} responseMap API 名称与函数实现的映射
         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
         * @method Uploader.register
         * @for Uploader
         * @example
         * Uploader.register({
         *     'make-thumb': 'makeThumb'
         * }, {
         *     init: function( options ) {},
         *     makeThumb: function() {}
         * });
         *
         * Uploader.register({
         *     'make-thumb': function() {
         *         
         *     }
         * });
         */
        Uploader.register = Widget.register = function( responseMap, widgetProto ) {
            var map = { init: 'init', destroy: 'destroy', name: 'anonymous' },
                klass;
    
            if ( arguments.length === 1 ) {
                widgetProto = responseMap;
    
                // 自动生成 map 表。
                $.each(widgetProto, function(key) {
                    if ( key[0] === '_' || key === 'name' ) {
                        key === 'name' && (map.name = widgetProto.name);
                        return;
                    }
    
                    map[key.replace(/[A-Z]/g, '-$&').toLowerCase()] = key;
                });
    
            } else {
                map = $.extend( map, responseMap );
            }
    
            widgetProto.responseMap = map;
            klass = Base.inherits( Widget, widgetProto );
            klass._name = map.name;
            widgetClass.push( klass );
    
            return klass;
        };
    
        /**
         * 删除插件，只有在注册时指定了名字的才能被删除。
         * @grammar Uploader.unRegister(name);
         * @param  {string} name 组件名字
         * @method Uploader.unRegister
         * @for Uploader
         * @example
         *
         * Uploader.register({
         *     name: 'custom',
         *     
         *     'make-thumb': function() {
         *         
         *     }
         * });
         *
         * Uploader.unRegister('custom');
         */
        Uploader.unRegister = Widget.unRegister = function( name ) {
            if ( !name || name === 'anonymous' ) {
                return;
            }
            
            // 删除指定的插件。
            for ( var i = widgetClass.length; i--; ) {
                if ( widgetClass[i]._name === name ) {
                    widgetClass.splice(i, 1)
                }
            }
        };
    
        return Widget;
    });
    /**
     * @fileOverview DragAndDrop Widget。
     */
    define('widgets/filednd',[
        'base',
        'uploader',
        'lib/dnd',
        'widgets/widget'
    ], function( Base, Uploader, Dnd ) {
        var $ = Base.$;
    
        Uploader.options.dnd = '';
    
        /**
         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
         * @namespace options
         * @for Uploader
         */
        
        /**
         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
         * @namespace options
         * @for Uploader
         */
    
        /**
         * @event dndAccept
         * @param {DataTransferItemList} items DataTransferItem
         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
         * @for  Uploader
         */
        return Uploader.register({
            name: 'dnd',
            
            init: function( opts ) {
    
                if ( !opts.dnd ||
                        this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        disableGlobalDnd: opts.disableGlobalDnd,
                        container: opts.dnd,
                        accept: opts.accept
                    }),
                    dnd;
    
                this.dnd = dnd = new Dnd( options );
    
                dnd.once( 'ready', deferred.resolve );
                dnd.on( 'drop', function( files ) {
                    me.request( 'add-file', [ files ]);
                });
    
                // 检测文件是否全部允许添加。
                dnd.on( 'accept', function( items ) {
                    return me.owner.trigger( 'dndAccept', items );
                });
    
                dnd.init();
    
                return deferred.promise();
            },
    
            destroy: function() {
                this.dnd && this.dnd.destroy();
            }
        });
    });
    
    /**
     * @fileOverview 错误信息
     */
    define('lib/filepaste',[
        'base',
        'mediator',
        'runtime/client'
    ], function( Base, Mediator, RuntimeClent ) {
    
        var $ = Base.$;
    
        function FilePaste( opts ) {
            opts = this.options = $.extend({}, opts );
            opts.container = $( opts.container || document.body );
            RuntimeClent.call( this, 'FilePaste' );
        }
    
        Base.inherits( RuntimeClent, {
            constructor: FilePaste,
    
            init: function() {
                var me = this;
    
                me.connectRuntime( me.options, function() {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });
    
        Mediator.installTo( FilePaste.prototype );
    
        return FilePaste;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/filepaste',[
        'base',
        'uploader',
        'lib/filepaste',
        'widgets/widget'
    ], function( Base, Uploader, FilePaste ) {
        var $ = Base.$;
    
        /**
         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
         * @namespace options
         * @for Uploader
         */
        return Uploader.register({
            name: 'paste',
            
            init: function( opts ) {
    
                if ( !opts.paste ||
                        this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        container: opts.paste,
                        accept: opts.accept
                    }),
                    paste;
    
                this.paste = paste = new FilePaste( options );
    
                paste.once( 'ready', deferred.resolve );
                paste.on( 'paste', function( files ) {
                    me.owner.request( 'add-file', [ files ]);
                });
                paste.init();
    
                return deferred.promise();
            },
    
            destroy: function() {
                this.paste && this.paste.destroy();
            }
        });
    });
    /**
     * @fileOverview Blob
     */
    define('lib/blob',[
        'base',
        'runtime/client'
    ], function( Base, RuntimeClient ) {
    
        function Blob( ruid, source ) {
            var me = this;
    
            me.source = source;
            me.ruid = ruid;
            this.size = source.size || 0;
    
            // 如果没有指定 mimetype, 但是知道文件后缀。
            if ( !source.type && this.ext &&
                    ~'jpg,jpeg,png,gif,bmp'.indexOf( this.ext ) ) {
                this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
            } else {
                this.type = source.type || 'application/octet-stream';
            }
    
            RuntimeClient.call( me, 'Blob' );
            this.uid = source.uid || this.uid;
    
            if ( ruid ) {
                me.connectRuntime( ruid );
            }
        }
    
        Base.inherits( RuntimeClient, {
            constructor: Blob,
    
            slice: function( start, end ) {
                return this.exec( 'slice', start, end );
            },
    
            getSource: function() {
                return this.source;
            }
        });
    
        return Blob;
    });
    /**
     * 为了统一化Flash的File和HTML5的File而存在。
     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
     * @fileOverview File
     */
    define('lib/file',[
        'base',
        'lib/blob'
    ], function( Base, Blob ) {
    
        var uid = 1,
            rExt = /\.([^.]+)$/;
    
        function File( ruid, file ) {
            var ext;
    
            this.name = file.name || ('untitled' + uid++);
            ext = rExt.exec( file.name ) ? RegExp.$1.toLowerCase() : '';
    
            // todo 支持其他类型文件的转换。
            // 如果有 mimetype, 但是文件名里面没有找出后缀规律
            if ( !ext && file.type ) {
                ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec( file.type ) ?
                        RegExp.$1.toLowerCase() : '';
                this.name += '.' + ext;
            }
    
            this.ext = ext;
            this.lastModifiedDate = file.lastModifiedDate ||
                    (new Date()).toLocaleString();
    
            Blob.apply( this, arguments );
        }
    
        return Base.inherits( Blob, File );
    });
    
    /**
     * @fileOverview 错误信息
     */
    define('lib/filepicker',[
        'base',
        'runtime/client',
        'lib/file'
    ], function( Base, RuntimeClent, File ) {
    
        var $ = Base.$;
    
        function FilePicker( opts ) {
            opts = this.options = $.extend({}, FilePicker.options, opts );
    
            opts.container = $( opts.id );
    
            if ( !opts.container.length ) {
                throw new Error('按钮指定错误');
            }
    
            opts.innerHTML = opts.innerHTML || opts.label ||
                    opts.container.html() || '';
    
            opts.button = $( opts.button || document.createElement('div') );
            opts.button.html( opts.innerHTML );
            opts.container.html( opts.button );
    
            RuntimeClent.call( this, 'FilePicker', true );
        }
    
        FilePicker.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: true,
            accept: null,
            name: 'file'
        };
    
        Base.inherits( RuntimeClent, {
            constructor: FilePicker,
    
            init: function() {
                var me = this,
                    opts = me.options,
                    button = opts.button;
    
                button.addClass('webuploader-pick');
    
                me.on( 'all', function( type ) {
                    var files;
    
                    switch ( type ) {
                        case 'mouseenter':
                            button.addClass('webuploader-pick-hover');
                            break;
    
                        case 'mouseleave':
                            button.removeClass('webuploader-pick-hover');
                            break;
    
                        case 'change':
                            files = me.exec('getFiles');
                            me.trigger( 'select', $.map( files, function( file ) {
                                file = new File( me.getRuid(), file );
    
                                // 记录来源。
                                file._refer = opts.container;
                                return file;
                            }), opts.container );
                            break;
                    }
                });
    
                me.connectRuntime( opts, function() {
                    me.refresh();
                    me.exec( 'init', opts );
                    me.trigger('ready');
                });
    
                this._resizeHandler = Base.bindFn( this.refresh, this );
                $( window ).on( 'resize', this._resizeHandler );
            },
    
            refresh: function() {
                var shimContainer = this.getRuntime().getContainer(),
                    button = this.options.button,
                    width = button.outerWidth ?
                            button.outerWidth() : button.width(),
    
                    height = button.outerHeight ?
                            button.outerHeight() : button.height(),
    
                    pos = button.offset();
    
                width && height && shimContainer.css({
                    bottom: 'auto',
                    right: 'auto',
                    width: width + 'px',
                    height: height + 'px'
                }).offset( pos );
            },
    
            enable: function() {
                var btn = this.options.button;
    
                btn.removeClass('webuploader-pick-disable');
                this.refresh();
            },
    
            disable: function() {
                var btn = this.options.button;
    
                this.getRuntime().getContainer().css({
                    top: '-99999px'
                });
    
                btn.addClass('webuploader-pick-disable');
            },
    
            destroy: function() {
                var btn = this.options.button;
                $( window ).off( 'resize', this._resizeHandler );
                btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' +
                    'webuploader-pick');
            }
        });
    
        return FilePicker;
    });
    
    /**
     * @fileOverview 文件选择相关
     */
    define('widgets/filepicker',[
        'base',
        'uploader',
        'lib/filepicker',
        'widgets/widget'
    ], function( Base, Uploader, FilePicker ) {
        var $ = Base.$;
    
        $.extend( Uploader.options, {
    
            /**
             * @property {Selector | Object} [pick=undefined]
             * @namespace options
             * @for Uploader
             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
             *
             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
             * * `label` {string} 请采用 `innerHTML` 代替
             * * `innerHTML` {string} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
             */
            pick: null,
    
            /**
             * @property {Arroy} [accept=null]
             * @namespace options
             * @for Uploader
             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
             *
             * * `title` {string} 文字描述
             * * `extensions` {string} 允许的文件后缀，不带点，多个用逗号分割。
             * * `mimeTypes` {string} 多个用逗号分割。
             *
             * 如：
             *
             * ```
             * {
             *     title: 'Images',
             *     extensions: 'gif,jpg,jpeg,bmp,png',
             *     mimeTypes: 'image/*'
             * }
             * ```
             */
            accept: null/*{
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }*/
        });
    
        return Uploader.register({
            name: 'picker',
    
            init: function( opts ) {
                this.pickers = [];
                return opts.pick && this.addBtn( opts.pick );
            },
    
            refresh: function() {
                $.each( this.pickers, function() {
                    this.refresh();
                });
            },
    
            /**
             * @method addButton
             * @for Uploader
             * @grammar addButton( pick ) => Promise
             * @description
             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
             * @example
             * uploader.addButton({
             *     id: '#btnContainer',
             *     innerHTML: '选择文件'
             * });
             */
            addBtn: function( pick ) {
                var me = this,
                    opts = me.options,
                    accept = opts.accept,
                    promises = [];
    
                if ( !pick ) {
                    return;
                }
    
                $.isPlainObject( pick ) || (pick = {
                    id: pick
                });
    
                $( pick.id ).each(function() {
                    var options, picker, deferred;
    
                    deferred = Base.Deferred();
    
                    options = $.extend({}, pick, {
                        accept: $.isPlainObject( accept ) ? [ accept ] : accept,
                        swf: opts.swf,
                        runtimeOrder: opts.runtimeOrder,
                        id: this
                    });
    
                    picker = new FilePicker( options );
    
                    picker.once( 'ready', deferred.resolve );
                    picker.on( 'select', function( files ) {
                        me.owner.request( 'add-file', [ files ]);
                    });
                    picker.init();
    
                    me.pickers.push( picker );
    
                    promises.push( deferred.promise() );
                });
    
                return Base.when.apply( Base, promises );
            },
    
            disable: function() {
                $.each( this.pickers, function() {
                    this.disable();
                });
            },
    
            enable: function() {
                $.each( this.pickers, function() {
                    this.enable();
                });
            },
    
            destroy: function() {
                $.each( this.pickers, function() {
                    this.destroy();
                });
                this.pickers = null;
            }
        });
    });
    /**
     * @fileOverview Image
     */
    define('lib/image',[
        'base',
        'runtime/client',
        'lib/blob'
    ], function( Base, RuntimeClient, Blob ) {
        var $ = Base.$;
    
        // 构造器。
        function Image( opts ) {
            this.options = $.extend({}, Image.options, opts );
            RuntimeClient.call( this, 'Image' );
    
            this.on( 'load', function() {
                this._info = this.exec('info');
                this._meta = this.exec('meta');
            });
        }
    
        // 默认选项。
        Image.options = {
    
            // 默认的图片处理质量
            quality: 90,
    
            // 是否裁剪
            crop: false,
    
            // 是否保留头部信息
            preserveHeaders: false,
    
            // 是否允许放大。
            allowMagnify: false
        };
    
        // 继承RuntimeClient.
        Base.inherits( RuntimeClient, {
            constructor: Image,
    
            info: function( val ) {
    
                // setter
                if ( val ) {
                    this._info = val;
                    return this;
                }
    
                // getter
                return this._info;
            },
    
            meta: function( val ) {
    
                // setter
                if ( val ) {
                    this._meta = val;
                    return this;
                }
    
                // getter
                return this._meta;
            },
    
            loadFromBlob: function( blob ) {
                var me = this,
                    ruid = blob.getRuid();
    
                this.connectRuntime( ruid, function() {
                    me.exec( 'init', me.options );
                    me.exec( 'loadFromBlob', blob );
                });
            },
    
            resize: function() {
                var args = Base.slice( arguments );
                return this.exec.apply( this, [ 'resize' ].concat( args ) );
            },
    
            crop: function() {
                var args = Base.slice( arguments );
                return this.exec.apply( this, [ 'crop' ].concat( args ) );
            },
    
            getAsDataUrl: function( type ) {
                return this.exec( 'getAsDataUrl', type );
            },
    
            getAsBlob: function( type ) {
                var blob = this.exec( 'getAsBlob', type );
    
                return new Blob( this.getRuid(), blob );
            }
        });
    
        return Image;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/image',[
        'base',
        'uploader',
        'lib/image',
        'widgets/widget'
    ], function( Base, Uploader, Image ) {
    
        var $ = Base.$,
            throttle;
    
        // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
        throttle = (function( max ) {
            var occupied = 0,
                waiting = [],
                tick = function() {
                    var item;
    
                    while ( waiting.length && occupied < max ) {
                        item = waiting.shift();
                        occupied += item[ 0 ];
                        item[ 1 ]();
                    }
                };
    
            return function( emiter, size, cb ) {
                waiting.push([ size, cb ]);
                emiter.once( 'destroy', function() {
                    occupied -= size;
                    setTimeout( tick, 1 );
                });
                setTimeout( tick, 1 );
            };
        })( 5 * 1024 * 1024 );
    
        $.extend( Uploader.options, {
    
            /**
             * @property {Object} [thumb]
             * @namespace options
             * @for Uploader
             * @description 配置生成缩略图的选项。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 110,
             *     height: 110,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 70,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: true,
             *
             *     // 是否允许裁剪。
             *     crop: true,
             *
             *     // 为空的话则保留原有图片格式。
             *     // 否则强制转换成指定的类型。
             *     type: 'image/jpeg'
             * }
             * ```
             */
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: true,
                crop: true,
                preserveHeaders: false,
    
                // 为空的话则保留原有图片格式。
                // 否则强制转换成指定的类型。
                // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
                // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
                type: 'image/jpeg'
            },
    
            /**
             * @property {Object} [compress]
             * @namespace options
             * @for Uploader
             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 1600,
             *     height: 1600,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 90,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: false,
             *
             *     // 是否允许裁剪。
             *     crop: false,
             *
             *     // 是否保留头部meta信息。
             *     preserveHeaders: true,
             *
             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
             *     // 此属性可能会影响图片自动纠正功能
             *     noCompressIfLarger: false,
             *
             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
             *     compressSize: 0
             * }
             * ```
             */
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: false,
                crop: false,
                preserveHeaders: true
            }
        });
    
        return Uploader.register({
    
            name: 'image',
    
    
            /**
             * 生成缩略图，此过程为异步，所以需要传入`callback`。
             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
             *
             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
             *
             * `callback`中可以接收到两个参数。
             * * 第一个为error，如果生成缩略图有错误，此error将为真。
             * * 第二个为ret, 缩略图的Data URL值。
             *
             * **注意**
             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
             *
             * @method makeThumb
             * @grammar makeThumb( file, callback ) => undefined
             * @grammar makeThumb( file, callback, width, height ) => undefined
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.makeThumb( file, function( error, ret ) {
             *         if ( error ) {
             *             $li.text('预览错误');
             *         } else {
             *             $li.append('<img alt="" src="' + ret + '" />');
             *         }
             *     });
             *
             * });
             */
            makeThumb: function( file, cb, width, height ) {
                var opts, image;
    
                file = this.request( 'get-file', file );
    
                // 只预览图片格式。
                if ( !file.type.match( /^image/ ) ) {
                    cb( true );
                    return;
                }
    
                opts = $.extend({}, this.options.thumb );
    
                // 如果传入的是object.
                if ( $.isPlainObject( width ) ) {
                    opts = $.extend( opts, width );
                    width = null;
                }
    
                width = width || opts.width;
                height = height || opts.height;
    
                image = new Image( opts );
    
                image.once( 'load', function() {
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();
    
                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if ( width <= 1 && width > 0 ) {
                        width = file._info.width * width;
                    }
    
                    // 同样的规则应用于 height
                    if ( height <= 1 && height > 0 ) {
                        height = file._info.height * height;
                    }
    
                    image.resize( width, height );
                });
    
                // 当 resize 完后
                image.once( 'complete', function() {
                    cb( false, image.getAsDataUrl( opts.type ) );
                    image.destroy();
                });
    
                image.once( 'error', function( reason ) {
                    cb( reason || true );
                    image.destroy();
                });
    
                throttle( image, file.source.size, function() {
                    file._info && image.info( file._info );
                    file._meta && image.meta( file._meta );
                    image.loadFromBlob( file.source );
                });
            },
    
            beforeSendFile: function( file ) {
                var opts = this.options.compress || this.options.resize,
                    compressSize = opts && opts.compressSize || 0,
                    noCompressIfLarger = opts && opts.noCompressIfLarger || false,
                    image, deferred;
    
                file = this.request( 'get-file', file );
    
                // 只压缩 jpeg 图片格式。
                // gif 可能会丢失针
                // bmp png 基本上尺寸都不大，且压缩比比较小。
                if ( !opts || !~'image/jpeg,image/jpg'.indexOf( file.type ) ||
                        file.size < compressSize ||
                        file._compressed ) {
                    return;
                }
    
                opts = $.extend({}, opts );
                deferred = Base.Deferred();
    
                image = new Image( opts );
    
                deferred.always(function() {
                    image.destroy();
                    image = null;
                });
                image.once( 'error', deferred.reject );
                image.once( 'load', function() {
                    var width = opts.width,
                        height = opts.height;
    
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();
    
                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if ( width <= 1 && width > 0 ) {
                        width = file._info.width * width;
                    }
    
                    // 同样的规则应用于 height
                    if ( height <= 1 && height > 0 ) {
                        height = file._info.height * height;
                    }
    
                    image.resize( width, height );
                });
    
                image.once( 'complete', function() {
                    var blob, size;
    
                    // 移动端 UC / qq 浏览器的无图模式下
                    // ctx.getImageData 处理大图的时候会报 Exception
                    // INDEX_SIZE_ERR: DOM Exception 1
                    try {
                        blob = image.getAsBlob( opts.type );
    
                        size = file.size;
    
                        // 如果压缩后，比原来还大则不用压缩后的。
                        if ( !noCompressIfLarger || blob.size < size ) {
                            // file.source.destroy && file.source.destroy();
                            file.source = blob;
                            file.size = blob.size;
    
                            file.trigger( 'resize', blob.size, size );
                        }
    
                        // 标记，避免重复压缩。
                        file._compressed = true;
                        deferred.resolve();
                    } catch ( e ) {
                        // 出错了直接继续，让其上传原始图片
                        deferred.resolve();
                    }
                });
    
                file._info && image.info( file._info );
                file._meta && image.meta( file._meta );
    
                image.loadFromBlob( file.source );
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview 文件属性封装
     */
    define('file',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$,
            idPrefix = 'WU_FILE_',
            idSuffix = 0,
            rExt = /\.([^.]+)$/,
            statusMap = {};
    
        function gid() {
            return idPrefix + idSuffix++;
        }
    
        /**
         * 文件类
         * @class File
         * @constructor 构造函数
         * @grammar new File( source ) => File
         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
         */
        function WUFile( source ) {
    
            /**
             * 文件名，包括扩展名（后缀）
             * @property name
             * @type {string}
             */
            this.name = source.name || 'Untitled';
    
            /**
             * 文件体积（字节）
             * @property size
             * @type {uint}
             * @default 0
             */
            this.size = source.size || 0;
    
            /**
             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
             * @property type
             * @type {string}
             * @default 'application/octet-stream'
             */
            this.type = source.type || 'application/octet-stream';
    
            /**
             * 文件最后修改日期
             * @property lastModifiedDate
             * @type {int}
             * @default 当前时间戳
             */
            this.lastModifiedDate = source.lastModifiedDate || (new Date() * 1);
    
            /**
             * 文件ID，每个对象具有唯一ID，与文件名无关
             * @property id
             * @type {string}
             */
            this.id = gid();
    
            /**
             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
             * @property ext
             * @type {string}
             */
            this.ext = rExt.exec( this.name ) ? RegExp.$1 : '';
    
    
            /**
             * 状态文字说明。在不同的status语境下有不同的用途。
             * @property statusText
             * @type {string}
             */
            this.statusText = '';
    
            // 存储文件状态，防止通过属性直接修改
            statusMap[ this.id ] = WUFile.Status.INITED;
    
            this.source = source;
            this.loaded = 0;
    
            this.on( 'error', function( msg ) {
                this.setStatus( WUFile.Status.ERROR, msg );
            });
        }
    
        $.extend( WUFile.prototype, {
    
            /**
             * 设置状态，状态变化时会触发`change`事件。
             * @method setStatus
             * @grammar setStatus( status[, statusText] );
             * @param {File.Status|string} status [文件状态值](#WebUploader:File:File.Status)
             * @param {string} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
             */
            setStatus: function( status, text ) {
    
                var prevStatus = statusMap[ this.id ];
    
                typeof text !== 'undefined' && (this.statusText = text);
    
                if ( status !== prevStatus ) {
                    statusMap[ this.id ] = status;
                    /**
                     * 文件状态变化
                     * @event statuschange
                     */
                    this.trigger( 'statuschange', status, prevStatus );
                }
    
            },
    
            /**
             * 获取文件状态
             * @return {File.Status}
             * @example
                     文件状态具体包括以下几种类型：
                     {
                         // 初始化
                        INITED:     0,
                        // 已入队列
                        QUEUED:     1,
                        // 正在上传
                        PROGRESS:     2,
                        // 上传出错
                        ERROR:         3,
                        // 上传成功
                        COMPLETE:     4,
                        // 上传取消
                        CANCELLED:     5
                    }
             */
            getStatus: function() {
                return statusMap[ this.id ];
            },
    
            /**
             * 获取文件原始信息。
             * @return {*}
             */
            getSource: function() {
                return this.source;
            },
    
            destroy: function() {
                this.off();
                delete statusMap[ this.id ];
            }
        });
    
        Mediator.installTo( WUFile.prototype );
    
        /**
         * 文件状态值，具体包括以下几种类型：
         * * `inited` 初始状态
         * * `queued` 已经进入队列, 等待上传
         * * `progress` 上传中
         * * `complete` 上传完成。
         * * `error` 上传出错，可重试
         * * `interrupt` 上传中断，可续传。
         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
         * * `cancelled` 文件被移除。
         * @property {Object} Status
         * @namespace File
         * @class File
         * @static
         */
        WUFile.Status = {
            INITED:     'inited',    // 初始状态
            QUEUED:     'queued',    // 已经进入队列, 等待上传
            PROGRESS:   'progress',    // 上传中
            ERROR:      'error',    // 上传出错，可重试
            COMPLETE:   'complete',    // 上传完成。
            CANCELLED:  'cancelled',    // 上传取消。
            INTERRUPT:  'interrupt',    // 上传中断，可续传。
            INVALID:    'invalid'    // 文件不合格，不能重试上传。
        };
    
        return WUFile;
    });
    
    /**
     * @fileOverview 文件队列
     */
    define('queue',[
        'base',
        'mediator',
        'file'
    ], function( Base, Mediator, WUFile ) {
    
        var $ = Base.$,
            STATUS = WUFile.Status;
    
        /**
         * 文件队列, 用来存储各个状态中的文件。
         * @class Queue
         * @extends Mediator
         */
        function Queue() {
    
            /**
             * 统计文件数。
             * * `numOfQueue` 队列中的文件数。
             * * `numOfSuccess` 上传成功的文件数
             * * `numOfCancel` 被取消的文件数
             * * `numOfProgress` 正在上传中的文件数
             * * `numOfUploadFailed` 上传错误的文件数。
             * * `numOfInvalid` 无效的文件数。
             * * `numofDeleted` 被移除的文件数。
             * @property {Object} stats
             */
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            };
    
            // 上传队列，仅包括等待上传的文件
            this._queue = [];
    
            // 存储所有文件
            this._map = {};
        }
    
        $.extend( Queue.prototype, {
    
            /**
             * 将新文件加入对队列尾部
             *
             * @method append
             * @param  {File} file   文件对象
             */
            append: function( file ) {
                this._queue.push( file );
                this._fileAdded( file );
                return this;
            },
    
            /**
             * 将新文件加入对队列头部
             *
             * @method prepend
             * @param  {File} file   文件对象
             */
            prepend: function( file ) {
                this._queue.unshift( file );
                this._fileAdded( file );
                return this;
            },
    
            /**
             * 获取文件对象
             *
             * @method getFile
             * @param  {string} fileId   文件ID
             * @return {File}
             */
            getFile: function( fileId ) {
                if ( typeof fileId !== 'string' ) {
                    return fileId;
                }
                return this._map[ fileId ];
            },
    
            /**
             * 从队列中取出一个指定状态的文件。
             * @grammar fetch( status ) => File
             * @method fetch
             * @param {string} status [文件状态值](#WebUploader:File:File.Status)
             * @return {File} [File](#WebUploader:File)
             */
            fetch: function( status ) {
                var len = this._queue.length,
                    i, file;
    
                status = status || STATUS.QUEUED;
    
                for ( i = 0; i < len; i++ ) {
                    file = this._queue[ i ];
    
                    if ( status === file.getStatus() ) {
                        return file;
                    }
                }
    
                return null;
            },
    
            /**
             * 对队列进行排序，能够控制文件上传顺序。
             * @grammar sort( fn ) => undefined
             * @method sort
             * @param {Function} fn 排序方法
             */
            sort: function( fn ) {
                if ( typeof fn === 'function' ) {
                    this._queue.sort( fn );
                }
            },
    
            /**
             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
             * @grammar getFiles( [status1[, status2 ...]] ) => Array
             * @method getFiles
             * @param {string} [status] [文件状态值](#WebUploader:File:File.Status)
             */
            getFiles: function() {
                var sts = [].slice.call( arguments, 0 ),
                    ret = [],
                    i = 0,
                    len = this._queue.length,
                    file;
    
                for ( ; i < len; i++ ) {
                    file = this._queue[ i ];
    
                    if ( sts.length && !~$.inArray( file.getStatus(), sts ) ) {
                        continue;
                    }
    
                    ret.push( file );
                }
    
                return ret;
            },
    
            /**
             * 在队列中删除文件。
             * @grammar removeFile( file ) => Array
             * @method removeFile
             * @param {File} 文件对象。
             */
            removeFile: function( file ) {
                var me = this,
                    existing = this._map[ file.id ];
    
                if ( existing ) {
                    delete this._map[ file.id ];
                    file.destroy();
                    this.stats.numofDeleted++;
                }
            },
    
            _fileAdded: function( file ) {
                var me = this,
                    existing = this._map[ file.id ];
    
                if ( !existing ) {
                    this._map[ file.id ] = file;
    
                    file.on( 'statuschange', function( cur, pre ) {
                        me._onFileStatusChange( cur, pre );
                    });
                }
            },
    
            _onFileStatusChange: function( curStatus, preStatus ) {
                var stats = this.stats;
    
                switch ( preStatus ) {
                    case STATUS.PROGRESS:
                        stats.numOfProgress--;
                        break;
    
                    case STATUS.QUEUED:
                        stats.numOfQueue --;
                        break;
    
                    case STATUS.ERROR:
                        stats.numOfUploadFailed--;
                        break;
    
                    case STATUS.INVALID:
                        stats.numOfInvalid--;
                        break;
    
                    case STATUS.INTERRUPT:
                        stats.numofInterrupt--;
                        break;
                }
    
                switch ( curStatus ) {
                    case STATUS.QUEUED:
                        stats.numOfQueue++;
                        break;
    
                    case STATUS.PROGRESS:
                        stats.numOfProgress++;
                        break;
    
                    case STATUS.ERROR:
                        stats.numOfUploadFailed++;
                        break;
    
                    case STATUS.COMPLETE:
                        stats.numOfSuccess++;
                        break;
    
                    case STATUS.CANCELLED:
                        stats.numOfCancel++;
                        break;
    
    
                    case STATUS.INVALID:
                        stats.numOfInvalid++;
                        break;
    
                    case STATUS.INTERRUPT:
                        stats.numofInterrupt++;
                        break;
                }
            }
    
        });
    
        Mediator.installTo( Queue.prototype );
    
        return Queue;
    });
    /**
     * @fileOverview 队列
     */
    define('widgets/queue',[
        'base',
        'uploader',
        'queue',
        'file',
        'lib/file',
        'runtime/client',
        'widgets/widget'
    ], function( Base, Uploader, Queue, WUFile, File, RuntimeClient ) {
    
        var $ = Base.$,
            rExt = /\.\w+$/,
            Status = WUFile.Status;
    
        return Uploader.register({
            name: 'queue',
    
            init: function( opts ) {
                var me = this,
                    deferred, len, i, item, arr, accept, runtime;
    
                if ( $.isPlainObject( opts.accept ) ) {
                    opts.accept = [ opts.accept ];
                }
    
                // accept中的中生成匹配正则。
                if ( opts.accept ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        item = opts.accept[ i ].extensions;
                        item && arr.push( item );
                    }
    
                    if ( arr.length ) {
                        accept = '\\.' + arr.join(',')
                                .replace( /,/g, '$|\\.' )
                                .replace( /\*/g, '.*' ) + '$';
                    }
    
                    me.accept = new RegExp( accept, 'i' );
                }
    
                me.queue = new Queue();
                me.stats = me.queue.stats;
    
                // 如果当前不是html5运行时，那就算了。
                // 不执行后续操作
                if ( this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                // 创建一个 html5 运行时的 placeholder
                // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
                deferred = Base.Deferred();
                this.placeholder = runtime = new RuntimeClient('Placeholder');
                runtime.connectRuntime({
                    runtimeOrder: 'html5'
                }, function() {
                    me._ruid = runtime.getRuid();
                    deferred.resolve();
                });
                return deferred.promise();
            },
    
    
            // 为了支持外部直接添加一个原生File对象。
            _wrapFile: function( file ) {
                if ( !(file instanceof WUFile) ) {
    
                    if ( !(file instanceof File) ) {
                        if ( !this._ruid ) {
                            throw new Error('Can\'t add external files.');
                        }
                        file = new File( this._ruid, file );
                    }
    
                    file = new WUFile( file );
                }
    
                return file;
            },
    
            // 判断文件是否可以被加入队列
            acceptFile: function( file ) {
                var invalid = !file || !file.size || this.accept &&
    
                        // 如果名字中有后缀，才做后缀白名单处理。
                        rExt.exec( file.name ) && !this.accept.test( file.name );
    
                return !invalid;
            },
    
    
            /**
             * @event beforeFileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
             * @for  Uploader
             */
    
            /**
             * @event fileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列以后触发。
             * @for  Uploader
             */
    
            _addFile: function( file ) {
                var me = this;
    
                file = me._wrapFile( file );
    
                // 不过类型判断允许不允许，先派送 `beforeFileQueued`
                if ( !me.owner.trigger( 'beforeFileQueued', file ) ) {
                    return;
                }
    
                // 类型不匹配，则派送错误事件，并返回。
                if ( !me.acceptFile( file ) ) {
                    me.owner.trigger( 'error', 'Q_TYPE_DENIED', file );
                    return;
                }
    
                me.queue.append( file );
                me.owner.trigger( 'fileQueued', file );
                return file;
            },
    
            getFile: function( fileId ) {
                return this.queue.getFile( fileId );
            },
    
            /**
             * @event filesQueued
             * @param {File} files 数组，内容为原始File(lib/File）对象。
             * @description 当一批文件添加进队列以后触发。
             * @for  Uploader
             */
            
            /**
             * @property {Boolean} [auto=false]
             * @namespace options
             * @for Uploader
             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
             * 
             */
    
            /**
             * @method addFiles
             * @grammar addFiles( file ) => undefined
             * @grammar addFiles( [file1, file2 ...] ) => undefined
             * @param {Array of File or File} [files] Files 对象 数组
             * @description 添加文件到队列
             * @for  Uploader
             */
            addFile: function( files ) {
                var me = this;
    
                if ( !files.length ) {
                    files = [ files ];
                }
    
                files = $.map( files, function( file ) {
                    return me._addFile( file );
                });
    
                me.owner.trigger( 'filesQueued', files );
    
                if ( me.options.auto ) {
                    setTimeout(function() {
                        me.request('start-upload');
                    }, 20 );
                }
            },
    
            getStats: function() {
                return this.stats;
            },
    
            /**
             * @event fileDequeued
             * @param {File} file File对象
             * @description 当文件被移除队列后触发。
             * @for  Uploader
             */
    
             /**
             * @method removeFile
             * @grammar removeFile( file ) => undefined
             * @grammar removeFile( id ) => undefined
             * @grammar removeFile( file, true ) => undefined
             * @grammar removeFile( id, true ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.removeFile( file );
             * })
             */
            removeFile: function( file, remove ) {
                var me = this;
    
                file = file.id ? file : me.queue.getFile( file );
    
                this.request( 'cancel-file', file );
    
                if ( remove ) {
                    this.queue.removeFile( file );
                }
            },
    
            /**
             * @method getFiles
             * @grammar getFiles() => Array
             * @grammar getFiles( status1, status2, status... ) => Array
             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
             * @for  Uploader
             * @example
             * console.log( uploader.getFiles() );    // => all files
             * console.log( uploader.getFiles('error') )    // => all error files.
             */
            getFiles: function() {
                return this.queue.getFiles.apply( this.queue, arguments );
            },
    
            fetchFile: function() {
                return this.queue.fetch.apply( this.queue, arguments );
            },
    
            /**
             * @method retry
             * @grammar retry() => undefined
             * @grammar retry( file ) => undefined
             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
             * @for  Uploader
             * @example
             * function retry() {
             *     uploader.retry();
             * }
             */
            retry: function( file, noForceStart ) {
                var me = this,
                    files, i, len;
    
                if ( file ) {
                    file = file.id ? file : me.queue.getFile( file );
                    file.setStatus( Status.QUEUED );
                    noForceStart || me.request('start-upload');
                    return;
                }
    
                files = me.queue.getFiles( Status.ERROR );
                i = 0;
                len = files.length;
    
                for ( ; i < len; i++ ) {
                    file = files[ i ];
                    file.setStatus( Status.QUEUED );
                }
    
                me.request('start-upload');
            },
    
            /**
             * @method sort
             * @grammar sort( fn ) => undefined
             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
             * @for  Uploader
             */
            sortFiles: function() {
                return this.queue.sort.apply( this.queue, arguments );
            },
    
            /**
             * @event reset
             * @description 当 uploader 被重置的时候触发。
             * @for  Uploader
             */
    
            /**
             * @method reset
             * @grammar reset() => undefined
             * @description 重置uploader。目前只重置了队列。
             * @for  Uploader
             * @example
             * uploader.reset();
             */
            reset: function() {
                this.owner.trigger('reset');
                this.queue = new Queue();
                this.stats = this.queue.stats;
            },
    
            destroy: function() {
                this.reset();
                this.placeholder && this.placeholder.destroy();
            }
        });
    
    });
    /**
     * @fileOverview 添加获取Runtime相关信息的方法。
     */
    define('widgets/runtime',[
        'uploader',
        'runtime/runtime',
        'widgets/widget'
    ], function( Uploader, Runtime ) {
    
        Uploader.support = function() {
            return Runtime.hasRuntime.apply( Runtime, arguments );
        };
    
        /**
         * @property {Object} [runtimeOrder=html5,flash]
         * @namespace options
         * @for Uploader
         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
         *
         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
         */
    
        return Uploader.register({
            name: 'runtime',
    
            init: function() {
                if ( !this.predictRuntimeType() ) {
                    throw Error('Runtime Error');
                }
            },
    
            /**
             * 预测Uploader将采用哪个`Runtime`
             * @grammar predictRuntimeType() => string
             * @method predictRuntimeType
             * @for  Uploader
             */
            predictRuntimeType: function() {
                var orders = this.options.runtimeOrder || Runtime.orders,
                    type = this.type,
                    i, len;
    
                if ( !type ) {
                    orders = orders.split( /\s*,\s*/g );
    
                    for ( i = 0, len = orders.length; i < len; i++ ) {
                        if ( Runtime.hasRuntime( orders[ i ] ) ) {
                            this.type = type = orders[ i ];
                            break;
                        }
                    }
                }
    
                return type;
            }
        });
    });
    /**
     * @fileOverview Transport
     */
    define('lib/transport',[
        'base',
        'runtime/client',
        'mediator'
    ], function( Base, RuntimeClient, Mediator ) {
    
        var $ = Base.$;
    
        function Transport( opts ) {
            var me = this;
    
            opts = me.options = $.extend( true, {}, Transport.options, opts || {} );
            RuntimeClient.call( this, 'Transport' );
    
            this._blob = null;
            this._formData = opts.formData || {};
            this._headers = opts.headers || {};
    
            this.on( 'progress', this._timeout );
            this.on( 'load error', function() {
                me.trigger( 'progress', 1 );
                clearTimeout( me._timer );
            });
        }
    
        Transport.options = {
            server: '',
            method: 'POST',
    
            // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
            withCredentials: false,
            fileVal: 'file',
            timeout: 2 * 60 * 1000,    // 2分钟
            formData: {},
            headers: {},
            sendAsBinary: false
        };
    
        $.extend( Transport.prototype, {
    
            // 添加Blob, 只能添加一次，最后一次有效。
            appendBlob: function( key, blob, filename ) {
                var me = this,
                    opts = me.options;
    
                if ( me.getRuid() ) {
                    me.disconnectRuntime();
                }
    
                // 连接到blob归属的同一个runtime.
                me.connectRuntime( blob.ruid, function() {
                    me.exec('init');
                });
    
                me._blob = blob;
                opts.fileVal = key || opts.fileVal;
                opts.filename = filename || opts.filename;
            },
    
            // 添加其他字段
            append: function( key, value ) {
                if ( typeof key === 'object' ) {
                    $.extend( this._formData, key );
                } else {
                    this._formData[ key ] = value;
                }
            },
    
            setRequestHeader: function( key, value ) {
                if ( typeof key === 'object' ) {
                    $.extend( this._headers, key );
                } else {
                    this._headers[ key ] = value;
                }
            },
    
            send: function( method ) {
                this.exec( 'send', method );
                this._timeout();
            },
    
            abort: function() {
                clearTimeout( this._timer );
                return this.exec('abort');
            },
    
            destroy: function() {
                this.trigger('destroy');
                this.off();
                this.exec('destroy');
                this.disconnectRuntime();
            },
    
            getResponse: function() {
                return this.exec('getResponse');
            },
    
            getResponseAsJson: function() {
                return this.exec('getResponseAsJson');
            },
    
            getStatus: function() {
                return this.exec('getStatus');
            },
    
            _timeout: function() {
                var me = this,
                    duration = me.options.timeout;
    
                if ( !duration ) {
                    return;
                }
    
                clearTimeout( me._timer );
                me._timer = setTimeout(function() {
                    me.abort();
                    me.trigger( 'error', 'timeout' );
                }, duration );
            }
    
        });
    
        // 让Transport具备事件功能。
        Mediator.installTo( Transport.prototype );
    
        return Transport;
    });
    /**
     * @fileOverview 负责文件上传相关。
     */
    define('widgets/upload',[
        'base',
        'uploader',
        'file',
        'lib/transport',
        'widgets/widget'
    ], function( Base, Uploader, WUFile, Transport ) {
    
        var $ = Base.$,
            isPromise = Base.isPromise,
            Status = WUFile.Status;
    
        // 添加默认配置项
        $.extend( Uploader.options, {
    
    
            /**
             * @property {Boolean} [prepareNextFile=false]
             * @namespace options
             * @for Uploader
             * @description 是否允许在文件传输时提前把下一个文件准备好。
             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
             */
            prepareNextFile: false,
    
            /**
             * @property {Boolean} [chunked=false]
             * @namespace options
             * @for Uploader
             * @description 是否要分片处理大文件上传。
             */
            chunked: false,
    
            /**
             * @property {Boolean} [chunkSize=5242880]
             * @namespace options
             * @for Uploader
             * @description 如果要分片，分多大一片？ 默认大小为5M.
             */
            chunkSize: 5 * 1024 * 1024,
    
            /**
             * @property {Boolean} [chunkRetry=2]
             * @namespace options
             * @for Uploader
             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
             */
            chunkRetry: 2,
    
            /**
             * @property {Boolean} [threads=3]
             * @namespace options
             * @for Uploader
             * @description 上传并发数。允许同时最大上传进程数。
             */
            threads: 3,
    
    
            /**
             * @property {Object} [formData={}]
             * @namespace options
             * @for Uploader
             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
             */
            formData: {}
    
            /**
             * @property {Object} [fileVal='file']
             * @namespace options
             * @for Uploader
             * @description 设置文件上传域的name。
             */
    
            /**
             * @property {Object} [method='POST']
             * @namespace options
             * @for Uploader
             * @description 文件上传方式，`POST`或者`GET`。
             */
    
            /**
             * @property {Object} [sendAsBinary=false]
             * @namespace options
             * @for Uploader
             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
             * 其他参数在$_GET数组中。
             */
        });
    
        // 负责将文件切片。
        function CuteFile( file, chunkSize ) {
            var pending = [],
                blob = file.source,
                total = blob.size,
                chunks = chunkSize ? Math.ceil( total / chunkSize ) : 1,
                start = 0,
                index = 0,
                len, api;
    
            api = {
                file: file,
    
                has: function() {
                    return !!pending.length;
                },
    
                shift: function() {
                    return pending.shift();
                },
    
                unshift: function( block ) {
                    pending.unshift( block );
                }
            };
    
            while ( index < chunks ) {
                len = Math.min( chunkSize, total - start );
    
                pending.push({
                    file: file,
                    start: start,
                    end: chunkSize ? (start + len) : total,
                    total: total,
                    chunks: chunks,
                    chunk: index++,
                    cuted: api
                });
                start += len;
            }
    
            file.blocks = pending.concat();
            file.remaning = pending.length;
    
            return api;
        }
    
        Uploader.register({
            name: 'upload',
    
            init: function() {
                var owner = this.owner,
                    me = this;
    
                this.runing = false;
                this.progress = false;
    
                owner
                    .on( 'startUpload', function() {
                        me.progress = true;
                    })
                    .on( 'uploadFinished', function() {
                        me.progress = false;
                    });
    
                // 记录当前正在传的数据，跟threads相关
                this.pool = [];
    
                // 缓存分好片的文件。
                this.stack = [];
    
                // 缓存即将上传的文件。
                this.pending = [];
    
                // 跟踪还有多少分片在上传中但是没有完成上传。
                this.remaning = 0;
                this.__tick = Base.bindFn( this._tick, this );
    
                owner.on( 'uploadComplete', function( file ) {
    
                    // 把其他块取消了。
                    file.blocks && $.each( file.blocks, function( _, v ) {
                        v.transport && (v.transport.abort(), v.transport.destroy());
                        delete v.transport;
                    });
    
                    delete file.blocks;
                    delete file.remaning;
                });
            },
    
            reset: function() {
                this.request( 'stop-upload', true );
                this.runing = false;
                this.pool = [];
                this.stack = [];
                this.pending = [];
                this.remaning = 0;
                this._trigged = false;
                this._promise = null;
            },
    
            /**
             * @event startUpload
             * @description 当开始上传流程时触发。
             * @for  Uploader
             */
    
            /**
             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
             *
             * 可以指定开始某一个文件。
             * @grammar upload() => undefined
             * @grammar upload( file | fileId) => undefined
             * @method upload
             * @for  Uploader
             */
            startUpload: function(file) {
                var me = this;
    
                // 移出invalid的文件
                $.each( me.request( 'get-files', Status.INVALID ), function() {
                    me.request( 'remove-file', this );
                });
    
                // 如果指定了开始某个文件，则只开始指定文件。
                if ( file ) {
                    file = file.id ? file : me.request( 'get-file', file );
    
                    if (file.getStatus() === Status.INTERRUPT) {
                        $.each( me.pool, function( _, v ) {
    
                            // 之前暂停过。
                            if (v.file !== file) {
                                return;
                            }
    
                            v.transport && v.transport.send();
                        });
    
                        file.setStatus( Status.QUEUED );
                    } else if (file.getStatus() === Status.PROGRESS) {
                        return;
                    } else {
                        file.setStatus( Status.QUEUED );
                    }
                } else {
                    $.each( me.request( 'get-files', [ Status.INITED ] ), function() {
                        this.setStatus( Status.QUEUED );
                    });
                }
    
                if ( me.runing ) {
                    return;
                }
    
                me.runing = true;
    
                var files = [];
    
                // 如果有暂停的，则续传
                $.each( me.pool, function( _, v ) {
                    var file = v.file;
    
                    if ( file.getStatus() === Status.INTERRUPT ) {
                        files.push(file);
                        me._trigged = false;
                        v.transport && v.transport.send();
                    }
                });
    
                var file;
                while ( (file = files.shift()) ) {
                    file.setStatus( Status.PROGRESS );
                }
    
                file || $.each( me.request( 'get-files',
                        Status.INTERRUPT ), function() {
                    this.setStatus( Status.PROGRESS );
                });
    
                me._trigged = false;
                Base.nextTick( me.__tick );
                me.owner.trigger('startUpload');
            },
    
            /**
             * @event stopUpload
             * @description 当开始上传流程暂停时触发。
             * @for  Uploader
             */
    
            /**
             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
             *
             * 如果第一个参数是文件，则只暂停指定文件。
             * @grammar stop() => undefined
             * @grammar stop( true ) => undefined
             * @grammar stop( file ) => undefined
             * @method stop
             * @for  Uploader
             */
            stopUpload: function( file, interrupt ) {
                var me = this;
    
                if (file === true) {
                    interrupt = file;
                    file = null;
                }
    
                if ( me.runing === false ) {
                    return;
                }
    
                // 如果只是暂停某个文件。
                if ( file ) {
                    file = file.id ? file : me.request( 'get-file', file );
    
                    if ( file.getStatus() !== Status.PROGRESS &&
                            file.getStatus() !== Status.QUEUED ) {
                        return;
                    }
    
                    file.setStatus( Status.INTERRUPT );
                    $.each( me.pool, function( _, v ) {
    
                        // 只 abort 指定的文件。
                        if (v.file !== file) {
                            return;
                        }
    
                        v.transport && v.transport.abort();
                        me._putback(v);
                        me._popBlock(v);
                    });
    
                    return Base.nextTick( me.__tick );
                }
    
                me.runing = false;
    
                if (this._promise && this._promise.file) {
                    this._promise.file.setStatus( Status.INTERRUPT );
                }
    
                interrupt && $.each( me.pool, function( _, v ) {
                    v.transport && v.transport.abort();
                    v.file.setStatus( Status.INTERRUPT );
                });
    
                me.owner.trigger('stopUpload');
            },
    
            /**
             * @method cancelFile
             * @grammar cancelFile( file ) => undefined
             * @grammar cancelFile( id ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 标记文件状态为已取消, 同时将中断文件传输。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.cancelFile( file );
             * })
             */
            cancelFile: function( file ) {
                file = file.id ? file : this.request( 'get-file', file );
    
                // 如果正在上传。
                file.blocks && $.each( file.blocks, function( _, v ) {
                    var _tr = v.transport;
    
                    if ( _tr ) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });
    
                file.setStatus( Status.CANCELLED );
                this.owner.trigger( 'fileDequeued', file );
            },
    
            /**
             * 判断`Uplaode`r是否正在上传中。
             * @grammar isInProgress() => Boolean
             * @method isInProgress
             * @for  Uploader
             */
            isInProgress: function() {
                return !!this.progress;
            },
    
            _getStats: function() {
                return this.request('get-stats');
            },
    
            /**
             * 掉过一个文件上传，直接标记指定文件为已上传状态。
             * @grammar skipFile( file ) => undefined
             * @method skipFile
             * @for  Uploader
             */
            skipFile: function( file, status ) {
                file = file.id ? file : this.request( 'get-file', file );
    
                file.setStatus( status || Status.COMPLETE );
                file.skipped = true;
    
                // 如果正在上传。
                file.blocks && $.each( file.blocks, function( _, v ) {
                    var _tr = v.transport;
    
                    if ( _tr ) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });
    
                this.owner.trigger( 'uploadSkip', file );
            },
    
            /**
             * @event uploadFinished
             * @description 当所有文件上传结束时触发。
             * @for  Uploader
             */
            _tick: function() {
                var me = this,
                    opts = me.options,
                    fn, val;
    
                // 上一个promise还没有结束，则等待完成后再执行。
                if ( me._promise ) {
                    return me._promise.always( me.__tick );
                }
    
                // 还有位置，且还有文件要处理的话。
                if ( me.pool.length < opts.threads && (val = me._nextBlock()) ) {
                    me._trigged = false;
    
                    fn = function( val ) {
                        me._promise = null;
    
                        // 有可能是reject过来的，所以要检测val的类型。
                        val && val.file && me._startSend( val );
                        Base.nextTick( me.__tick );
                    };
    
                    me._promise = isPromise( val ) ? val.always( fn ) : fn( val );
    
                // 没有要上传的了，且没有正在传输的了。
                } else if ( !me.remaning && !me._getStats().numOfQueue &&
                    !me._getStats().numofInterrupt ) {
                    me.runing = false;
    
                    me._trigged || Base.nextTick(function() {
                        me.owner.trigger('uploadFinished');
                    });
                    me._trigged = true;
                }
            },
    
            _putback: function(block) {
                var idx;
    
                block.cuted.unshift(block);
                idx = this.stack.indexOf(block.cuted);
    
                if (!~idx) {
                    this.stack.unshift(block.cuted);
                }
            },
    
            _getStack: function() {
                var i = 0,
                    act;
    
                while ( (act = this.stack[ i++ ]) ) {
                    if ( act.has() && act.file.getStatus() === Status.PROGRESS ) {
                        return act;
                    } else if (!act.has() ||
                            act.file.getStatus() !== Status.PROGRESS &&
                            act.file.getStatus() !== Status.INTERRUPT ) {
    
                        // 把已经处理完了的，或者，状态为非 progress（上传中）、
                        // interupt（暂停中） 的移除。
                        this.stack.splice( --i, 1 );
                    }
                }
    
                return null;
            },
    
            _nextBlock: function() {
                var me = this,
                    opts = me.options,
                    act, next, done, preparing;
    
                // 如果当前文件还有没有需要传输的，则直接返回剩下的。
                if ( (act = this._getStack()) ) {
    
                    // 是否提前准备下一个文件
                    if ( opts.prepareNextFile && !me.pending.length ) {
                        me._prepareNextFile();
                    }
    
                    return act.shift();
    
                // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
                } else if ( me.runing ) {
    
                    // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
                    if ( !me.pending.length && me._getStats().numOfQueue ) {
                        me._prepareNextFile();
                    }
    
                    next = me.pending.shift();
                    done = function( file ) {
                        if ( !file ) {
                            return null;
                        }
    
                        act = CuteFile( file, opts.chunked ? opts.chunkSize : 0 );
                        me.stack.push(act);
                        return act.shift();
                    };
    
                    // 文件可能还在prepare中，也有可能已经完全准备好了。
                    if ( isPromise( next) ) {
                        preparing = next.file;
                        next = next[ next.pipe ? 'pipe' : 'then' ]( done );
                        next.file = preparing;
                        return next;
                    }
    
                    return done( next );
                }
            },
    
    
            /**
             * @event uploadStart
             * @param {File} file File对象
             * @description 某个文件开始上传前触发，一个文件只会触发一次。
             * @for  Uploader
             */
            _prepareNextFile: function() {
                var me = this,
                    file = me.request('fetch-file'),
                    pending = me.pending,
                    promise;
    
                if ( file ) {
                    promise = me.request( 'before-send-file', file, function() {
    
                        // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
                        if ( file.getStatus() === Status.PROGRESS ||
                            file.getStatus() === Status.INTERRUPT ) {
                            return file;
                        }
    
                        return me._finishFile( file );
                    });
    
                    me.owner.trigger( 'uploadStart', file );
                    file.setStatus( Status.PROGRESS );
    
                    promise.file = file;
    
                    // 如果还在pending中，则替换成文件本身。
                    promise.done(function() {
                        var idx = $.inArray( promise, pending );
    
                        ~idx && pending.splice( idx, 1, file );
                    });
    
                    // befeore-send-file的钩子就有错误发生。
                    promise.fail(function( reason ) {
                        file.setStatus( Status.ERROR, reason );
                        me.owner.trigger( 'uploadError', file, reason );
                        me.owner.trigger( 'uploadComplete', file );
                    });
    
                    pending.push( promise );
                }
            },
    
            // 让出位置了，可以让其他分片开始上传
            _popBlock: function( block ) {
                var idx = $.inArray( block, this.pool );
    
                this.pool.splice( idx, 1 );
                block.file.remaning--;
                this.remaning--;
            },
    
            // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
            _startSend: function( block ) {
                var me = this,
                    file = block.file,
                    promise;
    
                // 有可能在 before-send-file 的 promise 期间改变了文件状态。
                // 如：暂停，取消
                // 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
                if ( file.getStatus() !== Status.PROGRESS ) {
    
                    // 如果是中断，则还需要放回去。
                    if (file.getStatus() === Status.INTERRUPT) {
                        me._putback(block);
                    }
    
                    return;
                }
    
                me.pool.push( block );
                me.remaning++;
    
                // 如果没有分片，则直接使用原始的。
                // 不会丢失content-type信息。
                block.blob = block.chunks === 1 ? file.source :
                        file.source.slice( block.start, block.end );
    
                // hook, 每个分片发送之前可能要做些异步的事情。
                promise = me.request( 'before-send', block, function() {
    
                    // 有可能文件已经上传出错了，所以不需要再传输了。
                    if ( file.getStatus() === Status.PROGRESS ) {
                        me._doSend( block );
                    } else {
                        me._popBlock( block );
                        Base.nextTick( me.__tick );
                    }
                });
    
                // 如果为fail了，则跳过此分片。
                promise.fail(function() {
                    if ( file.remaning === 1 ) {
                        me._finishFile( file ).always(function() {
                            block.percentage = 1;
                            me._popBlock( block );
                            me.owner.trigger( 'uploadComplete', file );
                            Base.nextTick( me.__tick );
                        });
                    } else {
                        block.percentage = 1;
                        me.updateFileProgress( file );
                        me._popBlock( block );
                        Base.nextTick( me.__tick );
                    }
                });
            },
    
    
            /**
             * @event uploadBeforeSend
             * @param {Object} object
             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
             * @param {Object} headers 可以扩展此对象来控制上传头部。
             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
             * @for  Uploader
             */
    
            /**
             * @event uploadAccept
             * @param {Object} object
             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
             * @for  Uploader
             */
    
            /**
             * @event uploadProgress
             * @param {File} file File对象
             * @param {Number} percentage 上传进度
             * @description 上传过程中触发，携带上传进度。
             * @for  Uploader
             */
    
    
            /**
             * @event uploadError
             * @param {File} file File对象
             * @param {string} reason 出错的code
             * @description 当文件上传出错时触发。
             * @for  Uploader
             */
    
            /**
             * @event uploadSuccess
             * @param {File} file File对象
             * @param {Object} response 服务端返回的数据
             * @description 当文件上传成功时触发。
             * @for  Uploader
             */
    
            /**
             * @event uploadComplete
             * @param {File} [file] File对象
             * @description 不管成功或者失败，文件上传完成时触发。
             * @for  Uploader
             */
    
            // 做上传操作。
            _doSend: function( block ) {
                var me = this,
                    owner = me.owner,
                    opts = me.options,
                    file = block.file,
                    tr = new Transport( opts ),
                    data = $.extend({}, opts.formData ),
                    headers = $.extend({}, opts.headers ),
                    requestAccept, ret;
    
                block.transport = tr;
    
                tr.on( 'destroy', function() {
                    delete block.transport;
                    me._popBlock( block );
                    Base.nextTick( me.__tick );
                });
    
                // 广播上传进度。以文件为单位。
                tr.on( 'progress', function( percentage ) {
                    block.percentage = percentage;
                    me.updateFileProgress( file );
                });
    
                // 用来询问，是否返回的结果是有错误的。
                requestAccept = function( reject ) {
                    var fn;
    
                    ret = tr.getResponseAsJson() || {};
                    ret._raw = tr.getResponse();
                    fn = function( value ) {
                        reject = value;
                    };
    
                    // 服务端响应了，不代表成功了，询问是否响应正确。
                    if ( !owner.trigger( 'uploadAccept', block, ret, fn ) ) {
                        reject = reject || 'server';
                    }
    
                    return reject;
                };
    
                // 尝试重试，然后广播文件上传出错。
                tr.on( 'error', function( type, flag ) {
                    block.retried = block.retried || 0;
    
                    // 自动重试
                    if ( block.chunks > 1 && ~'http,abort'.indexOf( type ) &&
                            block.retried < opts.chunkRetry ) {
    
                        block.retried++;
                        tr.send();
    
                    } else {
    
                        // http status 500 ~ 600
                        if ( !flag && type === 'server' ) {
                            type = requestAccept( type );
                        }
    
                        file.setStatus( Status.ERROR, type );
                        owner.trigger( 'uploadError', file, type );
                        owner.trigger( 'uploadComplete', file );
                    }
                });
    
                // 上传成功
                tr.on( 'load', function() {
                    var reason;
    
                    // 如果非预期，转向上传出错。
                    if ( (reason = requestAccept()) ) {
                        tr.trigger( 'error', reason, true );
                        return;
                    }
    
                    // 全部上传完成。
                    if ( file.remaning === 1 ) {
                        me._finishFile( file, ret );
                    } else {
                        tr.destroy();
                    }
                });
    
                // 配置默认的上传字段。
                data = $.extend( data, {
                    id: file.id,
                    name: file.name,
                    type: file.type,
                    lastModifiedDate: file.lastModifiedDate,
                    size: file.size
                });
    
                block.chunks > 1 && $.extend( data, {
                    chunks: block.chunks,
                    chunk: block.chunk
                });
    
                // 在发送之间可以添加字段什么的。。。
                // 如果默认的字段不够使用，可以通过监听此事件来扩展
                owner.trigger( 'uploadBeforeSend', block, data, headers );
    
                // 开始发送。
                tr.appendBlob( opts.fileVal, block.blob, file.name );
                tr.append( data );
                tr.setRequestHeader( headers );
                tr.send();
            },
    
            // 完成上传。
            _finishFile: function( file, ret, hds ) {
                var owner = this.owner;
    
                return owner
                        .request( 'after-send-file', arguments, function() {
                            file.setStatus( Status.COMPLETE );
                            owner.trigger( 'uploadSuccess', file, ret, hds );
                        })
                        .fail(function( reason ) {
    
                            // 如果外部已经标记为invalid什么的，不再改状态。
                            if ( file.getStatus() === Status.PROGRESS ) {
                                file.setStatus( Status.ERROR, reason );
                            }
    
                            owner.trigger( 'uploadError', file, reason );
                        })
                        .always(function() {
                            owner.trigger( 'uploadComplete', file );
                        });
            },
    
            updateFileProgress: function(file) {
                var totalPercent = 0,
                    uploaded = 0;
    
                if (!file.blocks) {
                    return;
                }
    
                $.each( file.blocks, function( _, v ) {
                    uploaded += (v.percentage || 0) * (v.end - v.start);
                });
    
                totalPercent = uploaded / file.size;
                this.owner.trigger( 'uploadProgress', file, totalPercent || 0 );
            }
    
        });
    });
    /**
     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
     */
    
    define('widgets/validator',[
        'base',
        'uploader',
        'file',
        'widgets/widget'
    ], function( Base, Uploader, WUFile ) {
    
        var $ = Base.$,
            validators = {},
            api;
    
        /**
         * @event error
         * @param {string} type 错误类型。
         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
         *
         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
         * @for  Uploader
         */
    
        // 暴露给外面的api
        api = {
    
            // 添加验证器
            addValidator: function( type, cb ) {
                validators[ type ] = cb;
            },
    
            // 移除验证器
            removeValidator: function( type ) {
                delete validators[ type ];
            }
        };
    
        // 在Uploader初始化的时候启动Validators的初始化
        Uploader.register({
            name: 'validator',
    
            init: function() {
                var me = this;
                Base.nextTick(function() {
                    $.each( validators, function() {
                        this.call( me.owner );
                    });
                });
            }
        });
    
        /**
         * @property {int} [fileNumLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总数量, 超出则不允许加入队列。
         */
        api.addValidator( 'fileNumLimit', function() {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt( opts.fileNumLimit, 10 ),
                flag = true;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
    
                if ( count >= max && flag ) {
                    flag = false;
                    this.trigger( 'error', 'Q_EXCEED_NUM_LIMIT', max, file );
                    setTimeout(function() {
                        flag = true;
                    }, 1 );
                }
    
                return count >= max ? false : true;
            });
    
            uploader.on( 'fileQueued', function() {
                count++;
            });
    
            uploader.on( 'fileDequeued', function() {
                count--;
            });
    
            uploader.on( 'reset', function() {
                count = 0;
            });
        });
    
    
        /**
         * @property {int} [fileSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator( 'fileSizeLimit', function() {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt( opts.fileSizeLimit, 10 ),
                flag = true;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
                var invalid = count + file.size > max;
    
                if ( invalid && flag ) {
                    flag = false;
                    this.trigger( 'error', 'Q_EXCEED_SIZE_LIMIT', max, file );
                    setTimeout(function() {
                        flag = true;
                    }, 1 );
                }
    
                return invalid ? false : true;
            });
    
            uploader.on( 'fileQueued', function( file ) {
                count += file.size;
            });
    
            uploader.on( 'fileDequeued', function( file ) {
                count -= file.size;
            });
    
            uploader.on( 'reset', function() {
                count = 0;
            });
        });
    
        /**
         * @property {int} [fileSingleSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator( 'fileSingleSizeLimit', function() {
            var uploader = this,
                opts = uploader.options,
                max = opts.fileSingleSizeLimit;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
    
                if ( file.size > max ) {
                    file.setStatus( WUFile.Status.INVALID, 'exceed_size' );
                    this.trigger( 'error', 'F_EXCEED_SIZE', max, file );
                    return false;
                }
    
            });
    
        });
    
        /**
         * @property {Boolean} [duplicate=undefined]
         * @namespace options
         * @for Uploader
         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
         */
        api.addValidator( 'duplicate', function() {
            var uploader = this,
                opts = uploader.options,
                mapping = {};
    
            if ( opts.duplicate ) {
                return;
            }
    
            function hashString( str ) {
                var hash = 0,
                    i = 0,
                    len = str.length,
                    _char;
    
                for ( ; i < len; i++ ) {
                    _char = str.charCodeAt( i );
                    hash = _char + (hash << 6) + (hash << 16) - hash;
                }
    
                return hash;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
                var hash = file.__hash || (file.__hash = hashString( file.name +
                        file.size + file.lastModifiedDate ));
    
                // 已经重复了
                if ( mapping[ hash ] ) {
                    this.trigger( 'error', 'F_DUPLICATE', file );
                    return false;
                }
            });
    
            uploader.on( 'fileQueued', function( file ) {
                var hash = file.__hash;
    
                hash && (mapping[ hash ] = true);
            });
    
            uploader.on( 'fileDequeued', function( file ) {
                var hash = file.__hash;
    
                hash && (delete mapping[ hash ]);
            });
    
            uploader.on( 'reset', function() {
                mapping = {};
            });
        });
    
        return api;
    });
    
    /**
     * @fileOverview Md5
     */
    define('lib/md5',[
        'runtime/client',
        'mediator'
    ], function( RuntimeClient, Mediator ) {
    
        function Md5() {
            RuntimeClient.call( this, 'Md5' );
        }
    
        // 让 Md5 具备事件功能。
        Mediator.installTo( Md5.prototype );
    
        Md5.prototype.loadFromBlob = function( blob ) {
            var me = this;
    
            if ( me.getRuid() ) {
                me.disconnectRuntime();
            }
    
            // 连接到blob归属的同一个runtime.
            me.connectRuntime( blob.ruid, function() {
                me.exec('init');
                me.exec( 'loadFromBlob', blob );
            });
        };
    
        Md5.prototype.getResult = function() {
            return this.exec('getResult');
        };
    
        return Md5;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/md5',[
        'base',
        'uploader',
        'lib/md5',
        'lib/blob',
        'widgets/widget'
    ], function( Base, Uploader, Md5, Blob ) {
    
        return Uploader.register({
            name: 'md5',
    
    
            /**
             * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
             *
             *
             * @method md5File
             * @grammar md5File( file[, start[, end]] ) => promise
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.md5File( file )
             *
             *         // 及时显示进度
             *         .progress(function(percentage) {
             *             console.log('Percentage:', percentage);
             *         })
             *
             *         // 完成
             *         .then(function(val) {
             *             console.log('md5 result:', val);
             *         });
             *
             * });
             */
            md5File: function( file, start, end ) {
                var md5 = new Md5(),
                    deferred = Base.Deferred(),
                    blob = (file instanceof Blob) ? file :
                        this.request( 'get-file', file ).source;
    
                md5.on( 'progress load', function( e ) {
                    e = e || {};
                    deferred.notify( e.total ? e.loaded / e.total : 1 );
                });
    
                md5.on( 'complete', function() {
                    deferred.resolve( md5.getResult() );
                });
    
                md5.on( 'error', function( reason ) {
                    deferred.reject( reason );
                });
    
                if ( arguments.length > 1 ) {
                    start = start || 0;
                    end = end || 0;
                    start < 0 && (start = blob.size + start);
                    end < 0 && (end = blob.size + end);
                    end = Math.min( end, blob.size );
                    blob = blob.slice( start, end );
                }
    
                md5.loadFromBlob( blob );
    
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/compbase',[],function() {
    
        function CompBase( owner, runtime ) {
    
            this.owner = owner;
            this.options = owner.options;
    
            this.getRuntime = function() {
                return runtime;
            };
    
            this.getRuid = function() {
                return runtime.uid;
            };
    
            this.trigger = function() {
                return owner.trigger.apply( owner, arguments );
            };
        }
    
        return CompBase;
    });
    /**
     * @fileOverview Html5Runtime
     */
    define('runtime/html5/runtime',[
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function( Base, Runtime, CompBase ) {
    
        var type = 'html5',
            components = {};
    
        function Html5Runtime() {
            var pool = {},
                me = this,
                destroy = this.destroy;
    
            Runtime.apply( me, arguments );
            me.type = type;
    
    
            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function( comp, fn/*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice( arguments, 2 ),
                    instance;
    
                if ( components[ comp ] ) {
                    instance = pool[ uid ] = pool[ uid ] ||
                            new components[ comp ]( client, me );
    
                    if ( instance[ fn ] ) {
                        return instance[ fn ].apply( instance, args );
                    }
                }
            };
    
            me.destroy = function() {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply( this, arguments );
            };
        }
    
        Base.inherits( Runtime, {
            constructor: Html5Runtime,
    
            // 不需要连接其他程序，直接执行callback
            init: function() {
                var me = this;
                setTimeout(function() {
                    me.trigger('ready');
                }, 1 );
            }
    
        });
    
        // 注册Components
        Html5Runtime.register = function( name, component ) {
            var klass = components[ name ] = Base.inherits( CompBase, component );
            return klass;
        };
    
        // 注册html5运行时。
        // 只有在支持的前提下注册。
        if ( window.Blob && window.FileReader && window.DataView ) {
            Runtime.addRuntime( type, Html5Runtime );
        }
    
        return Html5Runtime;
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/html5/blob',[
        'runtime/html5/runtime',
        'lib/blob'
    ], function( Html5Runtime, Blob ) {
    
        return Html5Runtime.register( 'Blob', {
            slice: function( start, end ) {
                var blob = this.owner.source,
                    slice = blob.slice || blob.webkitSlice || blob.mozSlice;
    
                blob = slice.call( blob, start, end );
    
                return new Blob( this.getRuid(), blob );
            }
        });
    });
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/dnd',[
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function( Base, Html5Runtime, File ) {
    
        var $ = Base.$,
            prefix = 'webuploader-dnd-';
    
        return Html5Runtime.register( 'DragAndDrop', {
            init: function() {
                var elem = this.elem = this.options.container;
    
                this.dragEnterHandler = Base.bindFn( this._dragEnterHandler, this );
                this.dragOverHandler = Base.bindFn( this._dragOverHandler, this );
                this.dragLeaveHandler = Base.bindFn( this._dragLeaveHandler, this );
                this.dropHandler = Base.bindFn( this._dropHandler, this );
                this.dndOver = false;
    
                elem.on( 'dragenter', this.dragEnterHandler );
                elem.on( 'dragover', this.dragOverHandler );
                elem.on( 'dragleave', this.dragLeaveHandler );
                elem.on( 'drop', this.dropHandler );
    
                if ( this.options.disableGlobalDnd ) {
                    $( document ).on( 'dragover', this.dragOverHandler );
                    $( document ).on( 'drop', this.dropHandler );
                }
            },
    
            _dragEnterHandler: function( e ) {
                var me = this,
                    denied = me._denied || false,
                    items;
    
                e = e.originalEvent || e;
    
                if ( !me.dndOver ) {
                    me.dndOver = true;
    
                    // 注意只有 chrome 支持。
                    items = e.dataTransfer.items;
    
                    if ( items && items.length ) {
                        me._denied = denied = !me.trigger( 'accept', items );
                    }
    
                    me.elem.addClass( prefix + 'over' );
                    me.elem[ denied ? 'addClass' :
                            'removeClass' ]( prefix + 'denied' );
                }
    
                e.dataTransfer.dropEffect = denied ? 'none' : 'copy';
    
                return false;
            },
    
            _dragOverHandler: function( e ) {
                // 只处理框内的。
                var parentElem = this.elem.parent().get( 0 );
                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
                    return false;
                }
    
                clearTimeout( this._leaveTimer );
                this._dragEnterHandler.call( this, e );
    
                return false;
            },
    
            _dragLeaveHandler: function() {
                var me = this,
                    handler;
    
                handler = function() {
                    me.dndOver = false;
                    me.elem.removeClass( prefix + 'over ' + prefix + 'denied' );
                };
    
                clearTimeout( me._leaveTimer );
                me._leaveTimer = setTimeout( handler, 100 );
                return false;
            },
    
            _dropHandler: function( e ) {
                var me = this,
                    ruid = me.getRuid(),
                    parentElem = me.elem.parent().get( 0 ),
                    dataTransfer, data;
    
                // 只处理框内的。
                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
                    return false;
                }
    
                e = e.originalEvent || e;
                dataTransfer = e.dataTransfer;
    
                // 如果是页面内拖拽，还不能处理，不阻止事件。
                // 此处 ie11 下会报参数错误，
                try {
                    data = dataTransfer.getData('text/html');
                } catch( err ) {
                }
    
                if ( data ) {
                    return;
                }
    
                me._getTansferFiles( dataTransfer, function( results ) {
                    me.trigger( 'drop', $.map( results, function( file ) {
                        return new File( ruid, file );
                    }) );
                });
    
                me.dndOver = false;
                me.elem.removeClass( prefix + 'over' );
                return false;
            },
    
            // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
            _getTansferFiles: function( dataTransfer, callback ) {
                var results  = [],
                    promises = [],
                    items, files, file, item, i, len, canAccessFolder;
    
                items = dataTransfer.items;
                files = dataTransfer.files;
    
                canAccessFolder = !!(items && items[ 0 ].webkitGetAsEntry);
    
                for ( i = 0, len = files.length; i < len; i++ ) {
                    file = files[ i ];
                    item = items && items[ i ];
    
                    if ( canAccessFolder && item.webkitGetAsEntry().isDirectory ) {
    
                        promises.push( this._traverseDirectoryTree(
                                item.webkitGetAsEntry(), results ) );
                    } else {
                        results.push( file );
                    }
                }
    
                Base.when.apply( Base, promises ).done(function() {
    
                    if ( !results.length ) {
                        return;
                    }
    
                    callback( results );
                });
            },
    
            _traverseDirectoryTree: function( entry, results ) {
                var deferred = Base.Deferred(),
                    me = this;
    
                if ( entry.isFile ) {
                    entry.file(function( file ) {
                        results.push( file );
                        deferred.resolve();
                    });
                } else if ( entry.isDirectory ) {
                    entry.createReader().readEntries(function( entries ) {
                        var len = entries.length,
                            promises = [],
                            arr = [],    // 为了保证顺序。
                            i;
    
                        for ( i = 0; i < len; i++ ) {
                            promises.push( me._traverseDirectoryTree(
                                    entries[ i ], arr ) );
                        }
    
                        Base.when.apply( Base, promises ).then(function() {
                            results.push.apply( results, arr );
                            deferred.resolve();
                        }, deferred.reject );
                    });
                }
    
                return deferred.promise();
            },
    
            destroy: function() {
                var elem = this.elem;
    
                // 还没 init 就调用 destroy
                if (!elem) {
                    return;
                }
                
                elem.off( 'dragenter', this.dragEnterHandler );
                elem.off( 'dragover', this.dragOverHandler );
                elem.off( 'dragleave', this.dragLeaveHandler );
                elem.off( 'drop', this.dropHandler );
    
                if ( this.options.disableGlobalDnd ) {
                    $( document ).off( 'dragover', this.dragOverHandler );
                    $( document ).off( 'drop', this.dropHandler );
                }
            }
        });
    });
    
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/filepaste',[
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function( Base, Html5Runtime, File ) {
    
        return Html5Runtime.register( 'FilePaste', {
            init: function() {
                var opts = this.options,
                    elem = this.elem = opts.container,
                    accept = '.*',
                    arr, i, len, item;
    
                // accetp的mimeTypes中生成匹配正则。
                if ( opts.accept ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        item = opts.accept[ i ].mimeTypes;
                        item && arr.push( item );
                    }
    
                    if ( arr.length ) {
                        accept = arr.join(',');
                        accept = accept.replace( /,/g, '|' ).replace( /\*/g, '.*' );
                    }
                }
                this.accept = accept = new RegExp( accept, 'i' );
                this.hander = Base.bindFn( this._pasteHander, this );
                elem.on( 'paste', this.hander );
            },
    
            _pasteHander: function( e ) {
                var allowed = [],
                    ruid = this.getRuid(),
                    items, item, blob, i, len;
    
                e = e.originalEvent || e;
                items = e.clipboardData.items;
    
                for ( i = 0, len = items.length; i < len; i++ ) {
                    item = items[ i ];
    
                    if ( item.kind !== 'file' || !(blob = item.getAsFile()) ) {
                        continue;
                    }
    
                    allowed.push( new File( ruid, blob ) );
                }
    
                if ( allowed.length ) {
                    // 不阻止非文件粘贴（文字粘贴）的事件冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    this.trigger( 'paste', allowed );
                }
            },
    
            destroy: function() {
                this.elem.off( 'paste', this.hander );
            }
        });
    });
    
    /**
     * @fileOverview FilePicker
     */
    define('runtime/html5/filepicker',[
        'base',
        'runtime/html5/runtime'
    ], function( Base, Html5Runtime ) {
    
        var $ = Base.$;
    
        return Html5Runtime.register( 'FilePicker', {
            init: function() {
                var container = this.getRuntime().getContainer(),
                    me = this,
                    owner = me.owner,
                    opts = me.options,
                    label = this.label = $( document.createElement('label') ),
                    input =  this.input = $( document.createElement('input') ),
                    arr, i, len, mouseHandler;
    
                input.attr( 'type', 'file' );
                input.attr( 'name', opts.name );
                input.addClass('webuploader-element-invisible');
    
                label.on( 'click', function() {
                    input.trigger('click');
                });
    
                label.css({
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    cursor: 'pointer',
                    background: '#ffffff'
                });
    
                if ( opts.multiple ) {
                    input.attr( 'multiple', 'multiple' );
                }
    
                // @todo Firefox不支持单独指定后缀
                if ( opts.accept && opts.accept.length > 0 ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        arr.push( opts.accept[ i ].mimeTypes );
                    }
    
                    input.attr( 'accept', arr.join(',') );
                }
    
                container.append( input );
                container.append( label );
    
                mouseHandler = function( e ) {
                    owner.trigger( e.type );
                };
    
                input.on( 'change', function( e ) {
                    var fn = arguments.callee,
                        clone;
    
                    me.files = e.target.files;
    
                    // reset input
                    clone = this.cloneNode( true );
                    clone.value = null;
                    this.parentNode.replaceChild( clone, this );
    
                    input.off();
                    input = $( clone ).on( 'change', fn )
                            .on( 'mouseenter mouseleave', mouseHandler );
    
                    owner.trigger('change');
                });
    
                label.on( 'mouseenter mouseleave', mouseHandler );
    
            },
    
    
            getFiles: function() {
                return this.files;
            },
    
            destroy: function() {
                this.input.off();
                this.label.off();
            }
        });
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/util',[
        'base'
    ], function( Base ) {
    
        var urlAPI = window.createObjectURL && window ||
                window.URL && URL.revokeObjectURL && URL ||
                window.webkitURL,
            createObjectURL = Base.noop,
            revokeObjectURL = createObjectURL;
    
        if ( urlAPI ) {
    
            // 更安全的方式调用，比如android里面就能把context改成其他的对象。
            createObjectURL = function() {
                return urlAPI.createObjectURL.apply( urlAPI, arguments );
            };
    
            revokeObjectURL = function() {
                return urlAPI.revokeObjectURL.apply( urlAPI, arguments );
            };
        }
    
        return {
            createObjectURL: createObjectURL,
            revokeObjectURL: revokeObjectURL,
    
            dataURL2Blob: function( dataURI ) {
                var byteStr, intArray, ab, i, mimetype, parts;
    
                parts = dataURI.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    byteStr = atob( parts[ 1 ] );
                } else {
                    byteStr = decodeURIComponent( parts[ 1 ] );
                }
    
                ab = new ArrayBuffer( byteStr.length );
                intArray = new Uint8Array( ab );
    
                for ( i = 0; i < byteStr.length; i++ ) {
                    intArray[ i ] = byteStr.charCodeAt( i );
                }
    
                mimetype = parts[ 0 ].split(':')[ 1 ].split(';')[ 0 ];
    
                return this.arrayBufferToBlob( ab, mimetype );
            },
    
            dataURL2ArrayBuffer: function( dataURI ) {
                var byteStr, intArray, i, parts;
    
                parts = dataURI.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    byteStr = atob( parts[ 1 ] );
                } else {
                    byteStr = decodeURIComponent( parts[ 1 ] );
                }
    
                intArray = new Uint8Array( byteStr.length );
    
                for ( i = 0; i < byteStr.length; i++ ) {
                    intArray[ i ] = byteStr.charCodeAt( i );
                }
    
                return intArray.buffer;
            },
    
            arrayBufferToBlob: function( buffer, type ) {
                var builder = window.BlobBuilder || window.WebKitBlobBuilder,
                    bb;
    
                // android不支持直接new Blob, 只能借助blobbuilder.
                if ( builder ) {
                    bb = new builder();
                    bb.append( buffer );
                    return bb.getBlob( type );
                }
    
                return new Blob([ buffer ], type ? { type: type } : {} );
            },
    
            // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
            // 你得到的结果是png.
            canvasToDataUrl: function( canvas, type, quality ) {
                return canvas.toDataURL( type, quality / 100 );
            },
    
            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            parseMeta: function( blob, callback ) {
                callback( false, {});
            },
    
            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            updateImageHead: function( data ) {
                return data;
            }
        };
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/imagemeta',[
        'runtime/html5/util'
    ], function( Util ) {
    
        var api;
    
        api = {
            parsers: {
                0xffe1: []
            },
    
            maxMetaDataSize: 262144,
    
            parse: function( blob, cb ) {
                var me = this,
                    fr = new FileReader();
    
                fr.onload = function() {
                    cb( false, me._parse( this.result ) );
                    fr = fr.onload = fr.onerror = null;
                };
    
                fr.onerror = function( e ) {
                    cb( e.message );
                    fr = fr.onload = fr.onerror = null;
                };
    
                blob = blob.slice( 0, me.maxMetaDataSize );
                fr.readAsArrayBuffer( blob.getSource() );
            },
    
            _parse: function( buffer, noParse ) {
                if ( buffer.byteLength < 6 ) {
                    return;
                }
    
                var dataview = new DataView( buffer ),
                    offset = 2,
                    maxOffset = dataview.byteLength - 4,
                    headLength = offset,
                    ret = {},
                    markerBytes, markerLength, parsers, i;
    
                if ( dataview.getUint16( 0 ) === 0xffd8 ) {
    
                    while ( offset < maxOffset ) {
                        markerBytes = dataview.getUint16( offset );
    
                        if ( markerBytes >= 0xffe0 && markerBytes <= 0xffef ||
                                markerBytes === 0xfffe ) {
    
                            markerLength = dataview.getUint16( offset + 2 ) + 2;
    
                            if ( offset + markerLength > dataview.byteLength ) {
                                break;
                            }
    
                            parsers = api.parsers[ markerBytes ];
    
                            if ( !noParse && parsers ) {
                                for ( i = 0; i < parsers.length; i += 1 ) {
                                    parsers[ i ].call( api, dataview, offset,
                                            markerLength, ret );
                                }
                            }
    
                            offset += markerLength;
                            headLength = offset;
                        } else {
                            break;
                        }
                    }
    
                    if ( headLength > 6 ) {
                        if ( buffer.slice ) {
                            ret.imageHead = buffer.slice( 2, headLength );
                        } else {
                            // Workaround for IE10, which does not yet
                            // support ArrayBuffer.slice:
                            ret.imageHead = new Uint8Array( buffer )
                                    .subarray( 2, headLength );
                        }
                    }
                }
    
                return ret;
            },
    
            updateImageHead: function( buffer, head ) {
                var data = this._parse( buffer, true ),
                    buf1, buf2, bodyoffset;
    
    
                bodyoffset = 2;
                if ( data.imageHead ) {
                    bodyoffset = 2 + data.imageHead.byteLength;
                }
    
                if ( buffer.slice ) {
                    buf2 = buffer.slice( bodyoffset );
                } else {
                    buf2 = new Uint8Array( buffer ).subarray( bodyoffset );
                }
    
                buf1 = new Uint8Array( head.byteLength + 2 + buf2.byteLength );
    
                buf1[ 0 ] = 0xFF;
                buf1[ 1 ] = 0xD8;
                buf1.set( new Uint8Array( head ), 2 );
                buf1.set( new Uint8Array( buf2 ), head.byteLength + 2 );
    
                return buf1.buffer;
            }
        };
    
        Util.parseMeta = function() {
            return api.parse.apply( api, arguments );
        };
    
        Util.updateImageHead = function() {
            return api.updateImageHead.apply( api, arguments );
        };
    
        return api;
    });
    /**
     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
     * 暂时项目中只用了orientation.
     *
     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
     * @fileOverview EXIF解析
     */
    
    // Sample
    // ====================================
    // Make : Apple
    // Model : iPhone 4S
    // Orientation : 1
    // XResolution : 72 [72/1]
    // YResolution : 72 [72/1]
    // ResolutionUnit : 2
    // Software : QuickTime 7.7.1
    // DateTime : 2013:09:01 22:53:55
    // ExifIFDPointer : 190
    // ExposureTime : 0.058823529411764705 [1/17]
    // FNumber : 2.4 [12/5]
    // ExposureProgram : Normal program
    // ISOSpeedRatings : 800
    // ExifVersion : 0220
    // DateTimeOriginal : 2013:09:01 22:52:51
    // DateTimeDigitized : 2013:09:01 22:52:51
    // ComponentsConfiguration : YCbCr
    // ShutterSpeedValue : 4.058893515764426
    // ApertureValue : 2.5260688216892597 [4845/1918]
    // BrightnessValue : -0.3126686601998395
    // MeteringMode : Pattern
    // Flash : Flash did not fire, compulsory flash mode
    // FocalLength : 4.28 [107/25]
    // SubjectArea : [4 values]
    // FlashpixVersion : 0100
    // ColorSpace : 1
    // PixelXDimension : 2448
    // PixelYDimension : 3264
    // SensingMethod : One-chip color area sensor
    // ExposureMode : 0
    // WhiteBalance : Auto white balance
    // FocalLengthIn35mmFilm : 35
    // SceneCaptureType : Standard
    define('runtime/html5/imagemeta/exif',[
        'base',
        'runtime/html5/imagemeta'
    ], function( Base, ImageMeta ) {
    
        var EXIF = {};
    
        EXIF.ExifMap = function() {
            return this;
        };
    
        EXIF.ExifMap.prototype.map = {
            'Orientation': 0x0112
        };
    
        EXIF.ExifMap.prototype.get = function( id ) {
            return this[ id ] || this[ this.map[ id ] ];
        };
    
        EXIF.exifTagTypes = {
            // byte, 8-bit unsigned int:
            1: {
                getValue: function( dataView, dataOffset ) {
                    return dataView.getUint8( dataOffset );
                },
                size: 1
            },
    
            // ascii, 8-bit byte:
            2: {
                getValue: function( dataView, dataOffset ) {
                    return String.fromCharCode( dataView.getUint8( dataOffset ) );
                },
                size: 1,
                ascii: true
            },
    
            // short, 16 bit int:
            3: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint16( dataOffset, littleEndian );
                },
                size: 2
            },
    
            // long, 32 bit int:
            4: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint32( dataOffset, littleEndian );
                },
                size: 4
            },
    
            // rational = two long values,
            // first is numerator, second is denominator:
            5: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint32( dataOffset, littleEndian ) /
                        dataView.getUint32( dataOffset + 4, littleEndian );
                },
                size: 8
            },
    
            // slong, 32 bit signed int:
            9: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getInt32( dataOffset, littleEndian );
                },
                size: 4
            },
    
            // srational, two slongs, first is numerator, second is denominator:
            10: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getInt32( dataOffset, littleEndian ) /
                        dataView.getInt32( dataOffset + 4, littleEndian );
                },
                size: 8
            }
        };
    
        // undefined, 8-bit byte, value depending on field:
        EXIF.exifTagTypes[ 7 ] = EXIF.exifTagTypes[ 1 ];
    
        EXIF.getExifValue = function( dataView, tiffOffset, offset, type, length,
                littleEndian ) {
    
            var tagType = EXIF.exifTagTypes[ type ],
                tagSize, dataOffset, values, i, str, c;
    
            if ( !tagType ) {
                Base.log('Invalid Exif data: Invalid tag type.');
                return;
            }
    
            tagSize = tagType.size * length;
    
            // Determine if the value is contained in the dataOffset bytes,
            // or if the value at the dataOffset is a pointer to the actual data:
            dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32( offset + 8,
                    littleEndian ) : (offset + 8);
    
            if ( dataOffset + tagSize > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid data offset.');
                return;
            }
    
            if ( length === 1 ) {
                return tagType.getValue( dataView, dataOffset, littleEndian );
            }
    
            values = [];
    
            for ( i = 0; i < length; i += 1 ) {
                values[ i ] = tagType.getValue( dataView,
                        dataOffset + i * tagType.size, littleEndian );
            }
    
            if ( tagType.ascii ) {
                str = '';
    
                // Concatenate the chars:
                for ( i = 0; i < values.length; i += 1 ) {
                    c = values[ i ];
    
                    // Ignore the terminating NULL byte(s):
                    if ( c === '\u0000' ) {
                        break;
                    }
                    str += c;
                }
    
                return str;
            }
            return values;
        };
    
        EXIF.parseExifTag = function( dataView, tiffOffset, offset, littleEndian,
                data ) {
    
            var tag = dataView.getUint16( offset, littleEndian );
            data.exif[ tag ] = EXIF.getExifValue( dataView, tiffOffset, offset,
                    dataView.getUint16( offset + 2, littleEndian ),    // tag type
                    dataView.getUint32( offset + 4, littleEndian ),    // tag length
                    littleEndian );
        };
    
        EXIF.parseExifTags = function( dataView, tiffOffset, dirOffset,
                littleEndian, data ) {
    
            var tagsNumber, dirEndOffset, i;
    
            if ( dirOffset + 6 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid directory offset.');
                return;
            }
    
            tagsNumber = dataView.getUint16( dirOffset, littleEndian );
            dirEndOffset = dirOffset + 2 + 12 * tagsNumber;
    
            if ( dirEndOffset + 4 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid directory size.');
                return;
            }
    
            for ( i = 0; i < tagsNumber; i += 1 ) {
                this.parseExifTag( dataView, tiffOffset,
                        dirOffset + 2 + 12 * i,    // tag offset
                        littleEndian, data );
            }
    
            // Return the offset to the next directory:
            return dataView.getUint32( dirEndOffset, littleEndian );
        };
    
        // EXIF.getExifThumbnail = function(dataView, offset, length) {
        //     var hexData,
        //         i,
        //         b;
        //     if (!length || offset + length > dataView.byteLength) {
        //         Base.log('Invalid Exif data: Invalid thumbnail data.');
        //         return;
        //     }
        //     hexData = [];
        //     for (i = 0; i < length; i += 1) {
        //         b = dataView.getUint8(offset + i);
        //         hexData.push((b < 16 ? '0' : '') + b.toString(16));
        //     }
        //     return 'data:image/jpeg,%' + hexData.join('%');
        // };
    
        EXIF.parseExifData = function( dataView, offset, length, data ) {
    
            var tiffOffset = offset + 10,
                littleEndian, dirOffset;
    
            // Check for the ASCII code for "Exif" (0x45786966):
            if ( dataView.getUint32( offset + 4 ) !== 0x45786966 ) {
                // No Exif data, might be XMP data instead
                return;
            }
            if ( tiffOffset + 8 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid segment size.');
                return;
            }
    
            // Check for the two null bytes:
            if ( dataView.getUint16( offset + 8 ) !== 0x0000 ) {
                Base.log('Invalid Exif data: Missing byte alignment offset.');
                return;
            }
    
            // Check the byte alignment:
            switch ( dataView.getUint16( tiffOffset ) ) {
                case 0x4949:
                    littleEndian = true;
                    break;
    
                case 0x4D4D:
                    littleEndian = false;
                    break;
    
                default:
                    Base.log('Invalid Exif data: Invalid byte alignment marker.');
                    return;
            }
    
            // Check for the TIFF tag marker (0x002A):
            if ( dataView.getUint16( tiffOffset + 2, littleEndian ) !== 0x002A ) {
                Base.log('Invalid Exif data: Missing TIFF marker.');
                return;
            }
    
            // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
            dirOffset = dataView.getUint32( tiffOffset + 4, littleEndian );
            // Create the exif object to store the tags:
            data.exif = new EXIF.ExifMap();
            // Parse the tags of the main image directory and retrieve the
            // offset to the next directory, usually the thumbnail directory:
            dirOffset = EXIF.parseExifTags( dataView, tiffOffset,
                    tiffOffset + dirOffset, littleEndian, data );
    
            // 尝试读取缩略图
            // if ( dirOffset ) {
            //     thumbnailData = {exif: {}};
            //     dirOffset = EXIF.parseExifTags(
            //         dataView,
            //         tiffOffset,
            //         tiffOffset + dirOffset,
            //         littleEndian,
            //         thumbnailData
            //     );
    
            //     // Check for JPEG Thumbnail offset:
            //     if (thumbnailData.exif[0x0201]) {
            //         data.exif.Thumbnail = EXIF.getExifThumbnail(
            //             dataView,
            //             tiffOffset + thumbnailData.exif[0x0201],
            //             thumbnailData.exif[0x0202] // Thumbnail data length
            //         );
            //     }
            // }
        };
    
        ImageMeta.parsers[ 0xffe1 ].push( EXIF.parseExifData );
        return EXIF;
    });
    /**
     * 这个方式性能不行，但是可以解决android里面的toDataUrl的bug
     * android里面toDataUrl('image/jpege')得到的结果却是png.
     *
     * 所以这里没辙，只能借助这个工具
     * @fileOverview jpeg encoder
     */
    define('runtime/html5/jpegencoder',[], function( require, exports, module ) {
    
        /*
          Copyright (c) 2008, Adobe Systems Incorporated
          All rights reserved.
    
          Redistribution and use in source and binary forms, with or without
          modification, are permitted provided that the following conditions are
          met:
    
          * Redistributions of source code must retain the above copyright notice,
            this list of conditions and the following disclaimer.
    
          * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
    
          * Neither the name of Adobe Systems Incorporated nor the names of its
            contributors may be used to endorse or promote products derived from
            this software without specific prior written permission.
    
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
        /*
        JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
    
        Basic GUI blocking jpeg encoder
        */
    
        function JPEGEncoder(quality) {
          var self = this;
            var fround = Math.round;
            var ffloor = Math.floor;
            var YTable = new Array(64);
            var UVTable = new Array(64);
            var fdtbl_Y = new Array(64);
            var fdtbl_UV = new Array(64);
            var YDC_HT;
            var UVDC_HT;
            var YAC_HT;
            var UVAC_HT;
    
            var bitcode = new Array(65535);
            var category = new Array(65535);
            var outputfDCTQuant = new Array(64);
            var DU = new Array(64);
            var byteout = [];
            var bytenew = 0;
            var bytepos = 7;
    
            var YDU = new Array(64);
            var UDU = new Array(64);
            var VDU = new Array(64);
            var clt = new Array(256);
            var RGB_YUV_TABLE = new Array(2048);
            var currentQuality;
    
            var ZigZag = [
                     0, 1, 5, 6,14,15,27,28,
                     2, 4, 7,13,16,26,29,42,
                     3, 8,12,17,25,30,41,43,
                     9,11,18,24,31,40,44,53,
                    10,19,23,32,39,45,52,54,
                    20,22,33,38,46,51,55,60,
                    21,34,37,47,50,56,59,61,
                    35,36,48,49,57,58,62,63
                ];
    
            var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
            var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
            var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
            var std_ac_luminance_values = [
                    0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
                    0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
                    0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
                    0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
                    0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
                    0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
                    0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
                    0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
                    0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
                    0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
                    0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
                    0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
                    0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
                    0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
                    0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
                    0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
                    0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
                    0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
                    0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
                    0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
                    0xf9,0xfa
                ];
    
            var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
            var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
            var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
            var std_ac_chrominance_values = [
                    0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
                    0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
                    0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
                    0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
                    0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
                    0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
                    0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
                    0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
                    0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
                    0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
                    0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
                    0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
                    0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
                    0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
                    0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
                    0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
                    0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
                    0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
                    0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
                    0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
                    0xf9,0xfa
                ];
    
            function initQuantTables(sf){
                    var YQT = [
                        16, 11, 10, 16, 24, 40, 51, 61,
                        12, 12, 14, 19, 26, 58, 60, 55,
                        14, 13, 16, 24, 40, 57, 69, 56,
                        14, 17, 22, 29, 51, 87, 80, 62,
                        18, 22, 37, 56, 68,109,103, 77,
                        24, 35, 55, 64, 81,104,113, 92,
                        49, 64, 78, 87,103,121,120,101,
                        72, 92, 95, 98,112,100,103, 99
                    ];
    
                    for (var i = 0; i < 64; i++) {
                        var t = ffloor((YQT[i]*sf+50)/100);
                        if (t < 1) {
                            t = 1;
                        } else if (t > 255) {
                            t = 255;
                        }
                        YTable[ZigZag[i]] = t;
                    }
                    var UVQT = [
                        17, 18, 24, 47, 99, 99, 99, 99,
                        18, 21, 26, 66, 99, 99, 99, 99,
                        24, 26, 56, 99, 99, 99, 99, 99,
                        47, 66, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99
                    ];
                    for (var j = 0; j < 64; j++) {
                        var u = ffloor((UVQT[j]*sf+50)/100);
                        if (u < 1) {
                            u = 1;
                        } else if (u > 255) {
                            u = 255;
                        }
                        UVTable[ZigZag[j]] = u;
                    }
                    var aasf = [
                        1.0, 1.387039845, 1.306562965, 1.175875602,
                        1.0, 0.785694958, 0.541196100, 0.275899379
                    ];
                    var k = 0;
                    for (var row = 0; row < 8; row++)
                    {
                        for (var col = 0; col < 8; col++)
                        {
                            fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                            fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                            k++;
                        }
                    }
                }
    
                function computeHuffmanTbl(nrcodes, std_table){
                    var codevalue = 0;
                    var pos_in_table = 0;
                    var HT = new Array();
                    for (var k = 1; k <= 16; k++) {
                        for (var j = 1; j <= nrcodes[k]; j++) {
                            HT[std_table[pos_in_table]] = [];
                            HT[std_table[pos_in_table]][0] = codevalue;
                            HT[std_table[pos_in_table]][1] = k;
                            pos_in_table++;
                            codevalue++;
                        }
                        codevalue*=2;
                    }
                    return HT;
                }
    
                function initHuffmanTbl()
                {
                    YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
                    UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
                    YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
                    UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
                }
    
                function initCategoryNumber()
                {
                    var nrlower = 1;
                    var nrupper = 2;
                    for (var cat = 1; cat <= 15; cat++) {
                        //Positive numbers
                        for (var nr = nrlower; nr<nrupper; nr++) {
                            category[32767+nr] = cat;
                            bitcode[32767+nr] = [];
                            bitcode[32767+nr][1] = cat;
                            bitcode[32767+nr][0] = nr;
                        }
                        //Negative numbers
                        for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
                            category[32767+nrneg] = cat;
                            bitcode[32767+nrneg] = [];
                            bitcode[32767+nrneg][1] = cat;
                            bitcode[32767+nrneg][0] = nrupper-1+nrneg;
                        }
                        nrlower <<= 1;
                        nrupper <<= 1;
                    }
                }
    
                function initRGBYUVTable() {
                    for(var i = 0; i < 256;i++) {
                        RGB_YUV_TABLE[i]            =  19595 * i;
                        RGB_YUV_TABLE[(i+ 256)>>0]  =  38470 * i;
                        RGB_YUV_TABLE[(i+ 512)>>0]  =   7471 * i + 0x8000;
                        RGB_YUV_TABLE[(i+ 768)>>0]  = -11059 * i;
                        RGB_YUV_TABLE[(i+1024)>>0]  = -21709 * i;
                        RGB_YUV_TABLE[(i+1280)>>0]  =  32768 * i + 0x807FFF;
                        RGB_YUV_TABLE[(i+1536)>>0]  = -27439 * i;
                        RGB_YUV_TABLE[(i+1792)>>0]  = - 5329 * i;
                    }
                }
    
                // IO functions
                function writeBits(bs)
                {
                    var value = bs[0];
                    var posval = bs[1]-1;
                    while ( posval >= 0 ) {
                        if (value & (1 << posval) ) {
                            bytenew |= (1 << bytepos);
                        }
                        posval--;
                        bytepos--;
                        if (bytepos < 0) {
                            if (bytenew == 0xFF) {
                                writeByte(0xFF);
                                writeByte(0);
                            }
                            else {
                                writeByte(bytenew);
                            }
                            bytepos=7;
                            bytenew=0;
                        }
                    }
                }
    
                function writeByte(value)
                {
                    byteout.push(clt[value]); // write char directly instead of converting later
                }
    
                function writeWord(value)
                {
                    writeByte((value>>8)&0xFF);
                    writeByte((value   )&0xFF);
                }
    
                // DCT & quantization core
                function fDCTQuant(data, fdtbl)
                {
                    var d0, d1, d2, d3, d4, d5, d6, d7;
                    /* Pass 1: process rows. */
                    var dataOff=0;
                    var i;
                    var I8 = 8;
                    var I64 = 64;
                    for (i=0; i<I8; ++i)
                    {
                        d0 = data[dataOff];
                        d1 = data[dataOff+1];
                        d2 = data[dataOff+2];
                        d3 = data[dataOff+3];
                        d4 = data[dataOff+4];
                        d5 = data[dataOff+5];
                        d6 = data[dataOff+6];
                        d7 = data[dataOff+7];
    
                        var tmp0 = d0 + d7;
                        var tmp7 = d0 - d7;
                        var tmp1 = d1 + d6;
                        var tmp6 = d1 - d6;
                        var tmp2 = d2 + d5;
                        var tmp5 = d2 - d5;
                        var tmp3 = d3 + d4;
                        var tmp4 = d3 - d4;
    
                        /* Even part */
                        var tmp10 = tmp0 + tmp3;    /* phase 2 */
                        var tmp13 = tmp0 - tmp3;
                        var tmp11 = tmp1 + tmp2;
                        var tmp12 = tmp1 - tmp2;
    
                        data[dataOff] = tmp10 + tmp11; /* phase 3 */
                        data[dataOff+4] = tmp10 - tmp11;
    
                        var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
                        data[dataOff+2] = tmp13 + z1; /* phase 5 */
                        data[dataOff+6] = tmp13 - z1;
    
                        /* Odd part */
                        tmp10 = tmp4 + tmp5; /* phase 2 */
                        tmp11 = tmp5 + tmp6;
                        tmp12 = tmp6 + tmp7;
    
                        /* The rotator is modified from fig 4-8 to avoid extra negations. */
                        var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
                        var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
                        var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
                        var z3 = tmp11 * 0.707106781; /* c4 */
    
                        var z11 = tmp7 + z3;    /* phase 5 */
                        var z13 = tmp7 - z3;
    
                        data[dataOff+5] = z13 + z2; /* phase 6 */
                        data[dataOff+3] = z13 - z2;
                        data[dataOff+1] = z11 + z4;
                        data[dataOff+7] = z11 - z4;
    
                        dataOff += 8; /* advance pointer to next row */
                    }
    
                    /* Pass 2: process columns. */
                    dataOff = 0;
                    for (i=0; i<I8; ++i)
                    {
                        d0 = data[dataOff];
                        d1 = data[dataOff + 8];
                        d2 = data[dataOff + 16];
                        d3 = data[dataOff + 24];
                        d4 = data[dataOff + 32];
                        d5 = data[dataOff + 40];
                        d6 = data[dataOff + 48];
                        d7 = data[dataOff + 56];
    
                        var tmp0p2 = d0 + d7;
                        var tmp7p2 = d0 - d7;
                        var tmp1p2 = d1 + d6;
                        var tmp6p2 = d1 - d6;
                        var tmp2p2 = d2 + d5;
                        var tmp5p2 = d2 - d5;
                        var tmp3p2 = d3 + d4;
                        var tmp4p2 = d3 - d4;
    
                        /* Even part */
                        var tmp10p2 = tmp0p2 + tmp3p2;  /* phase 2 */
                        var tmp13p2 = tmp0p2 - tmp3p2;
                        var tmp11p2 = tmp1p2 + tmp2p2;
                        var tmp12p2 = tmp1p2 - tmp2p2;
    
                        data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
                        data[dataOff+32] = tmp10p2 - tmp11p2;
    
                        var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
                        data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
                        data[dataOff+48] = tmp13p2 - z1p2;
    
                        /* Odd part */
                        tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
                        tmp11p2 = tmp5p2 + tmp6p2;
                        tmp12p2 = tmp6p2 + tmp7p2;
    
                        /* The rotator is modified from fig 4-8 to avoid extra negations. */
                        var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
                        var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
                        var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
                        var z3p2 = tmp11p2 * 0.707106781; /* c4 */
    
                        var z11p2 = tmp7p2 + z3p2;  /* phase 5 */
                        var z13p2 = tmp7p2 - z3p2;
    
                        data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
                        data[dataOff+24] = z13p2 - z2p2;
                        data[dataOff+ 8] = z11p2 + z4p2;
                        data[dataOff+56] = z11p2 - z4p2;
    
                        dataOff++; /* advance pointer to next column */
                    }
    
                    // Quantize/descale the coefficients
                    var fDCTQuant;
                    for (i=0; i<I64; ++i)
                    {
                        // Apply the quantization and scaling factor & Round to nearest integer
                        fDCTQuant = data[i]*fdtbl[i];
                        outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
                        //outputfDCTQuant[i] = fround(fDCTQuant);
    
                    }
                    return outputfDCTQuant;
                }
    
                function writeAPP0()
                {
                    writeWord(0xFFE0); // marker
                    writeWord(16); // length
                    writeByte(0x4A); // J
                    writeByte(0x46); // F
                    writeByte(0x49); // I
                    writeByte(0x46); // F
                    writeByte(0); // = "JFIF",'\0'
                    writeByte(1); // versionhi
                    writeByte(1); // versionlo
                    writeByte(0); // xyunits
                    writeWord(1); // xdensity
                    writeWord(1); // ydensity
                    writeByte(0); // thumbnwidth
                    writeByte(0); // thumbnheight
                }
    
                function writeSOF0(width, height)
                {
                    writeWord(0xFFC0); // marker
                    writeWord(17);   // length, truecolor YUV JPG
                    writeByte(8);    // precision
                    writeWord(height);
                    writeWord(width);
                    writeByte(3);    // nrofcomponents
                    writeByte(1);    // IdY
                    writeByte(0x11); // HVY
                    writeByte(0);    // QTY
                    writeByte(2);    // IdU
                    writeByte(0x11); // HVU
                    writeByte(1);    // QTU
                    writeByte(3);    // IdV
                    writeByte(0x11); // HVV
                    writeByte(1);    // QTV
                }
    
                function writeDQT()
                {
                    writeWord(0xFFDB); // marker
                    writeWord(132);    // length
                    writeByte(0);
                    for (var i=0; i<64; i++) {
                        writeByte(YTable[i]);
                    }
                    writeByte(1);
                    for (var j=0; j<64; j++) {
                        writeByte(UVTable[j]);
                    }
                }
    
                function writeDHT()
                {
                    writeWord(0xFFC4); // marker
                    writeWord(0x01A2); // length
    
                    writeByte(0); // HTYDCinfo
                    for (var i=0; i<16; i++) {
                        writeByte(std_dc_luminance_nrcodes[i+1]);
                    }
                    for (var j=0; j<=11; j++) {
                        writeByte(std_dc_luminance_values[j]);
                    }
    
                    writeByte(0x10); // HTYACinfo
                    for (var k=0; k<16; k++) {
                        writeByte(std_ac_luminance_nrcodes[k+1]);
                    }
                    for (var l=0; l<=161; l++) {
                        writeByte(std_ac_luminance_values[l]);
                    }
    
                    writeByte(1); // HTUDCinfo
                    for (var m=0; m<16; m++) {
                        writeByte(std_dc_chrominance_nrcodes[m+1]);
                    }
                    for (var n=0; n<=11; n++) {
                        writeByte(std_dc_chrominance_values[n]);
                    }
    
                    writeByte(0x11); // HTUACinfo
                    for (var o=0; o<16; o++) {
                        writeByte(std_ac_chrominance_nrcodes[o+1]);
                    }
                    for (var p=0; p<=161; p++) {
                        writeByte(std_ac_chrominance_values[p]);
                    }
                }
    
                function writeSOS()
                {
                    writeWord(0xFFDA); // marker
                    writeWord(12); // length
                    writeByte(3); // nrofcomponents
                    writeByte(1); // IdY
                    writeByte(0); // HTY
                    writeByte(2); // IdU
                    writeByte(0x11); // HTU
                    writeByte(3); // IdV
                    writeByte(0x11); // HTV
                    writeByte(0); // Ss
                    writeByte(0x3f); // Se
                    writeByte(0); // Bf
                }
    
                function processDU(CDU, fdtbl, DC, HTDC, HTAC){
                    var EOB = HTAC[0x00];
                    var M16zeroes = HTAC[0xF0];
                    var pos;
                    var I16 = 16;
                    var I63 = 63;
                    var I64 = 64;
                    var DU_DCT = fDCTQuant(CDU, fdtbl);
                    //ZigZag reorder
                    for (var j=0;j<I64;++j) {
                        DU[ZigZag[j]]=DU_DCT[j];
                    }
                    var Diff = DU[0] - DC; DC = DU[0];
                    //Encode DC
                    if (Diff==0) {
                        writeBits(HTDC[0]); // Diff might be 0
                    } else {
                        pos = 32767+Diff;
                        writeBits(HTDC[category[pos]]);
                        writeBits(bitcode[pos]);
                    }
                    //Encode ACs
                    var end0pos = 63; // was const... which is crazy
                    for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
                    //end0pos = first element in reverse order !=0
                    if ( end0pos == 0) {
                        writeBits(EOB);
                        return DC;
                    }
                    var i = 1;
                    var lng;
                    while ( i <= end0pos ) {
                        var startpos = i;
                        for (; (DU[i]==0) && (i<=end0pos); ++i) {}
                        var nrzeroes = i-startpos;
                        if ( nrzeroes >= I16 ) {
                            lng = nrzeroes>>4;
                            for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
                                writeBits(M16zeroes);
                            nrzeroes = nrzeroes&0xF;
                        }
                        pos = 32767+DU[i];
                        writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
                        writeBits(bitcode[pos]);
                        i++;
                    }
                    if ( end0pos != I63 ) {
                        writeBits(EOB);
                    }
                    return DC;
                }
    
                function initCharLookupTable(){
                    var sfcc = string.fromCharCode;
                    for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
                        clt[i] = sfcc(i);
                    }
                }
    
                this.encode = function(image,quality) // image data object
                {
                    // var time_start = new Date().getTime();
    
                    if(quality) setQuality(quality);
    
                    // Initialize bit writer
                    byteout = new Array();
                    bytenew=0;
                    bytepos=7;
    
                    // Add JPEG headers
                    writeWord(0xFFD8); // SOI
                    writeAPP0();
                    writeDQT();
                    writeSOF0(image.width,image.height);
                    writeDHT();
                    writeSOS();
    
    
                    // Encode 8x8 macroblocks
                    var DCY=0;
                    var DCU=0;
                    var DCV=0;
    
                    bytenew=0;
                    bytepos=7;
    
    
                    this.encode.displayName = "_encode_";
    
                    var imageData = image.data;
                    var width = image.width;
                    var height = image.height;
    
                    var quadWidth = width*4;
                    var tripleWidth = width*3;
    
                    var x, y = 0;
                    var r, g, b;
                    var start,p, col,row,pos;
                    while(y < height){
                        x = 0;
                        while(x < quadWidth){
                        start = quadWidth * y + x;
                        p = start;
                        col = -1;
                        row = 0;
    
                        for(pos=0; pos < 64; pos++){
                            row = pos >> 3;// /8
                            col = ( pos & 7 ) * 4; // %8
                            p = start + ( row * quadWidth ) + col;
    
                            if(y+row >= height){ // padding bottom
                                p-= (quadWidth*(y+1+row-height));
                            }
    
                            if(x+col >= quadWidth){ // padding right
                                p-= ((x+col) - quadWidth +4)
                            }
    
                            r = imageData[ p++ ];
                            g = imageData[ p++ ];
                            b = imageData[ p++ ];
    
    
                            /* // calculate YUV values dynamically
                            YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                            UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                            VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                            */
    
                            // use lookup table (slightly faster)
                            YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
                            UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
                            VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;
    
                        }
    
                        DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                        DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                        DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                        x+=32;
                        }
                        y+=8;
                    }
    
    
                    ////////////////////////////////////////////////////////////////
    
                    // Do the bit alignment of the EOI marker
                    if ( bytepos >= 0 ) {
                        var fillbits = [];
                        fillbits[1] = bytepos+1;
                        fillbits[0] = (1<<(bytepos+1))-1;
                        writeBits(fillbits);
                    }
    
                    writeWord(0xFFD9); //EOI
    
                    var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
    
                    byteout = [];
    
                    // benchmarking
                    // var duration = new Date().getTime() - time_start;
                    // console.log('Encoding time: '+ currentQuality + 'ms');
                    //
    
                    return jpegDataUri
            }
    
            function setQuality(quality){
                if (quality <= 0) {
                    quality = 1;
                }
                if (quality > 100) {
                    quality = 100;
                }
    
                if(currentQuality == quality) return // don't recalc if unchanged
    
                var sf = 0;
                if (quality < 50) {
                    sf = Math.floor(5000 / quality);
                } else {
                    sf = Math.floor(200 - quality*2);
                }
    
                initQuantTables(sf);
                currentQuality = quality;
                // console.log('Quality set to: '+quality +'%');
            }
    
            function init(){
                // var time_start = new Date().getTime();
                if(!quality) quality = 50;
                // Create tables
                initCharLookupTable()
                initHuffmanTbl();
                initCategoryNumber();
                initRGBYUVTable();
    
                setQuality(quality);
                // var duration = new Date().getTime() - time_start;
                // console.log('Initialization '+ duration + 'ms');
            }
    
            init();
    
        };
    
        JPEGEncoder.encode = function( data, quality ) {
            var encoder = new JPEGEncoder( quality );
    
            return encoder.encode( data );
        }
    
        return JPEGEncoder;
    });
    /**
     * @fileOverview Fix android canvas.toDataUrl bug.
     */
    define('runtime/html5/androidpatch',[
        'runtime/html5/util',
        'runtime/html5/jpegencoder',
        'base'
    ], function( Util, encoder, Base ) {
        var origin = Util.canvasToDataUrl,
            supportJpeg;
    
        Util.canvasToDataUrl = function( canvas, type, quality ) {
            var ctx, w, h, fragement, parts;
    
            // 非android手机直接跳过。
            if ( !Base.os.android ) {
                return origin.apply( null, arguments );
            }
    
            // 检测是否canvas支持jpeg导出，根据数据格式来判断。
            // JPEG 前两位分别是：255, 216
            if ( type === 'image/jpeg' && typeof supportJpeg === 'undefined' ) {
                fragement = origin.apply( null, arguments );
    
                parts = fragement.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    fragement = atob( parts[ 1 ] );
                } else {
                    fragement = decodeURIComponent( parts[ 1 ] );
                }
    
                fragement = fragement.substring( 0, 2 );
    
                supportJpeg = fragement.charCodeAt( 0 ) === 255 &&
                        fragement.charCodeAt( 1 ) === 216;
            }
    
            // 只有在android环境下才修复
            if ( type === 'image/jpeg' && !supportJpeg ) {
                w = canvas.width;
                h = canvas.height;
                ctx = canvas.getContext('2d');
    
                return encoder.encode( ctx.getImageData( 0, 0, w, h ), quality );
            }
    
            return origin.apply( null, arguments );
        };
    });
    /**
     * @fileOverview Image
     */
    define('runtime/html5/image',[
        'base',
        'runtime/html5/runtime',
        'runtime/html5/util'
    ], function( Base, Html5Runtime, Util ) {
    
        var BLANK = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';
    
        return Html5Runtime.register( 'Image', {
    
            // flag: 标记是否被修改过。
            modified: false,
    
            init: function() {
                var me = this,
                    img = new Image();
    
                img.onload = function() {
    
                    me._info = {
                        type: me.type,
                        width: this.width,
                        height: this.height
                    };
    
                    // 读取meta信息。
                    if ( !me._metas && 'image/jpeg' === me.type ) {
                        Util.parseMeta( me._blob, function( error, ret ) {
                            me._metas = ret;
                            me.owner.trigger('load');
                        });
                    } else {
                        me.owner.trigger('load');
                    }
                };
    
                img.onerror = function() {
                    me.owner.trigger('error');
                };
    
                me._img = img;
            },
    
            loadFromBlob: function( blob ) {
                var me = this,
                    img = me._img;
    
                me._blob = blob;
                me.type = blob.type;
                img.src = Util.createObjectURL( blob.getSource() );
                me.owner.once( 'load', function() {
                    Util.revokeObjectURL( img.src );
                });
            },
    
            resize: function( width, height ) {
                var canvas = this._canvas ||
                        (this._canvas = document.createElement('canvas'));
    
                this._resize( this._img, canvas, width, height );
                this._blob = null;    // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger( 'complete', 'resize' );
            },
    
            crop: function( x, y, w, h, s ) {
                var cvs = this._canvas ||
                        (this._canvas = document.createElement('canvas')),
                    opts = this.options,
                    img = this._img,
                    iw = img.naturalWidth,
                    ih = img.naturalHeight,
                    orientation = this.getOrientation();
    
                s = s || 1;
    
                // todo 解决 orientation 的问题。
                // values that require 90 degree rotation
                // if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
    
                //     switch ( orientation ) {
                //         case 6:
                //             tmp = x;
                //             x = y;
                //             y = iw * s - tmp - w;
                //             console.log(ih * s, tmp, w)
                //             break;
                //     }
    
                //     (w ^= h, h ^= w, w ^= h);
                // }
    
                cvs.width = w;
                cvs.height = h;
    
                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
                this._renderImageToCanvas( cvs, img, -x, -y, iw * s, ih * s );
    
                this._blob = null;    // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger( 'complete', 'crop' );
            },
    
            getAsBlob: function( type ) {
                var blob = this._blob,
                    opts = this.options,
                    canvas;
    
                type = type || this.type;
    
                // blob需要重新生成。
                if ( this.modified || this.type !== type ) {
                    canvas = this._canvas;
    
                    if ( type === 'image/jpeg' ) {
    
                        blob = Util.canvasToDataUrl( canvas, type, opts.quality );
    
                        if ( opts.preserveHeaders && this._metas &&
                                this._metas.imageHead ) {
    
                            blob = Util.dataURL2ArrayBuffer( blob );
                            blob = Util.updateImageHead( blob,
                                    this._metas.imageHead );
                            blob = Util.arrayBufferToBlob( blob, type );
                            return blob;
                        }
                    } else {
                        blob = Util.canvasToDataUrl( canvas, type );
                    }
    
                    blob = Util.dataURL2Blob( blob );
                }
    
                return blob;
            },
    
            getAsDataUrl: function( type ) {
                var opts = this.options;
    
                type = type || this.type;
    
                if ( type === 'image/jpeg' ) {
                    return Util.canvasToDataUrl( this._canvas, type, opts.quality );
                } else {
                    return this._canvas.toDataURL( type );
                }
            },
    
            getOrientation: function() {
                return this._metas && this._metas.exif &&
                        this._metas.exif.get('Orientation') || 1;
            },
    
            info: function( val ) {
    
                // setter
                if ( val ) {
                    this._info = val;
                    return this;
                }
    
                // getter
                return this._info;
            },
    
            meta: function( val ) {
    
                // setter
                if ( val ) {
                    this._meta = val;
                    return this;
                }
    
                // getter
                return this._meta;
            },
    
            destroy: function() {
                var canvas = this._canvas;
                this._img.onload = null;
    
                if ( canvas ) {
                    canvas.getContext('2d')
                            .clearRect( 0, 0, canvas.width, canvas.height );
                    canvas.width = canvas.height = 0;
                    this._canvas = null;
                }
    
                // 释放内存。非常重要，否则释放不了image的内存。
                this._img.src = BLANK;
                this._img = this._blob = null;
            },
    
            _resize: function( img, cvs, width, height ) {
                var opts = this.options,
                    naturalWidth = img.width,
                    naturalHeight = img.height,
                    orientation = this.getOrientation(),
                    scale, w, h, x, y;
    
                // values that require 90 degree rotation
                if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
    
                    // 交换width, height的值。
                    width ^= height;
                    height ^= width;
                    width ^= height;
                }
    
                scale = Math[ opts.crop ? 'max' : 'min' ]( width / naturalWidth,
                        height / naturalHeight );
    
                // 不允许放大。
                opts.allowMagnify || (scale = Math.min( 1, scale ));
    
                w = naturalWidth * scale;
                h = naturalHeight * scale;
    
                if ( opts.crop ) {
                    cvs.width = width;
                    cvs.height = height;
                } else {
                    cvs.width = w;
                    cvs.height = h;
                }
    
                x = (cvs.width - w) / 2;
                y = (cvs.height - h) / 2;
    
                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
    
                this._renderImageToCanvas( cvs, img, x, y, w, h );
            },
    
            _rotate2Orientaion: function( canvas, orientation ) {
                var width = canvas.width,
                    height = canvas.height,
                    ctx = canvas.getContext('2d');
    
                switch ( orientation ) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        canvas.width = height;
                        canvas.height = width;
                        break;
                }
    
                switch ( orientation ) {
                    case 2:    // horizontal flip
                        ctx.translate( width, 0 );
                        ctx.scale( -1, 1 );
                        break;
    
                    case 3:    // 180 rotate left
                        ctx.translate( width, height );
                        ctx.rotate( Math.PI );
                        break;
    
                    case 4:    // vertical flip
                        ctx.translate( 0, height );
                        ctx.scale( 1, -1 );
                        break;
    
                    case 5:    // vertical flip + 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.scale( 1, -1 );
                        break;
    
                    case 6:    // 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.translate( 0, -height );
                        break;
    
                    case 7:    // horizontal flip + 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.translate( width, -height );
                        ctx.scale( -1, 1 );
                        break;
    
                    case 8:    // 90 rotate left
                        ctx.rotate( -0.5 * Math.PI );
                        ctx.translate( -width, 0 );
                        break;
                }
            },
    
            // https://github.com/stomita/ios-imagefile-megapixel/
            // blob/master/src/megapix-image.js
            _renderImageToCanvas: (function() {
    
                // 如果不是ios, 不需要这么复杂！
                if ( !Base.os.ios ) {
                    return function( canvas ) {
                        var args = Base.slice( arguments, 1 ),
                            ctx = canvas.getContext('2d');
    
                        ctx.drawImage.apply( ctx, args );
                    };
                }
    
                /**
                 * Detecting vertical squash in loaded image.
                 * Fixes a bug which squash image vertically while drawing into
                 * canvas for some images.
                 */
                function detectVerticalSquash( img, iw, ih ) {
                    var canvas = document.createElement('canvas'),
                        ctx = canvas.getContext('2d'),
                        sy = 0,
                        ey = ih,
                        py = ih,
                        data, alpha, ratio;
    
    
                    canvas.width = 1;
                    canvas.height = ih;
                    ctx.drawImage( img, 0, 0 );
                    data = ctx.getImageData( 0, 0, 1, ih ).data;
    
                    // search image edge pixel position in case
                    // it is squashed vertically.
                    while ( py > sy ) {
                        alpha = data[ (py - 1) * 4 + 3 ];
    
                        if ( alpha === 0 ) {
                            ey = py;
                        } else {
                            sy = py;
                        }
    
                        py = (ey + sy) >> 1;
                    }
    
                    ratio = (py / ih);
                    return (ratio === 0) ? 1 : ratio;
                }
    
                // fix ie7 bug
                // http://stackoverflow.com/questions/11929099/
                // html5-canvas-drawimage-ratio-bug-ios
                if ( Base.os.ios >= 7 ) {
                    return function( canvas, img, x, y, w, h ) {
                        var iw = img.naturalWidth,
                            ih = img.naturalHeight,
                            vertSquashRatio = detectVerticalSquash( img, iw, ih );
    
                        return canvas.getContext('2d').drawImage( img, 0, 0,
                                iw * vertSquashRatio, ih * vertSquashRatio,
                                x, y, w, h );
                    };
                }
    
                /**
                 * Detect subsampling in loaded image.
                 * In iOS, larger images than 2M pixels may be
                 * subsampled in rendering.
                 */
                function detectSubsampling( img ) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        canvas, ctx;
    
                    // subsampling may happen overmegapixel image
                    if ( iw * ih > 1024 * 1024 ) {
                        canvas = document.createElement('canvas');
                        canvas.width = canvas.height = 1;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage( img, -iw + 1, 0 );
    
                        // subsampled image becomes half smaller in rendering size.
                        // check alpha channel value to confirm image is covering
                        // edge pixel or not. if alpha value is 0
                        // image is not covering, hence subsampled.
                        return ctx.getImageData( 0, 0, 1, 1 ).data[ 3 ] === 0;
                    } else {
                        return false;
                    }
                }
    
    
                return function( canvas, img, x, y, width, height ) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        ctx = canvas.getContext('2d'),
                        subsampled = detectSubsampling( img ),
                        doSquash = this.type === 'image/jpeg',
                        d = 1024,
                        sy = 0,
                        dy = 0,
                        tmpCanvas, tmpCtx, vertSquashRatio, dw, dh, sx, dx;
    
                    if ( subsampled ) {
                        iw /= 2;
                        ih /= 2;
                    }
    
                    ctx.save();
                    tmpCanvas = document.createElement('canvas');
                    tmpCanvas.width = tmpCanvas.height = d;
    
                    tmpCtx = tmpCanvas.getContext('2d');
                    vertSquashRatio = doSquash ?
                            detectVerticalSquash( img, iw, ih ) : 1;
    
                    dw = Math.ceil( d * width / iw );
                    dh = Math.ceil( d * height / ih / vertSquashRatio );
    
                    while ( sy < ih ) {
                        sx = 0;
                        dx = 0;
                        while ( sx < iw ) {
                            tmpCtx.clearRect( 0, 0, d, d );
                            tmpCtx.drawImage( img, -sx, -sy );
                            ctx.drawImage( tmpCanvas, 0, 0, d, d,
                                    x + dx, y + dy, dw, dh );
                            sx += d;
                            dx += dw;
                        }
                        sy += d;
                        dy += dh;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;
                };
            })()
        });
    });
    /**
     * @fileOverview Transport
     * @todo 支持chunked传输，优势：
     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
     */
    define('runtime/html5/transport',[
        'base',
        'runtime/html5/runtime'
    ], function( Base, Html5Runtime ) {
    
        var noop = Base.noop,
            $ = Base.$;
    
        return Html5Runtime.register( 'Transport', {
            init: function() {
                this._status = 0;
                this._response = null;
            },
    
            send: function() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    formData, binary, fr;
    
                if ( opts.sendAsBinary ) {
                    server += (/\?/.test( server ) ? '&' : '?') +
                            $.param( owner._formData );
    
                    binary = blob.getSource();
                } else {
                    formData = new FormData();
                    $.each( owner._formData, function( k, v ) {
                        formData.append( k, v );
                    });
    
                    formData.append( opts.fileVal, blob.getSource(),
                            opts.filename || owner._formData.name || '' );
                }
    
                if ( opts.withCredentials && 'withCredentials' in xhr ) {
                    xhr.open( opts.method, server, true );
                    xhr.withCredentials = true;
                } else {
                    xhr.open( opts.method, server );
                }
    
                this._setRequestHeader( xhr, opts.headers );
    
                if ( binary ) {
                    // 强制设置成 content-type 为文件流。
                    xhr.overrideMimeType &&
                            xhr.overrideMimeType('application/octet-stream');
    
                    // android直接发送blob会导致服务端接收到的是空文件。
                    // bug详情。
                    // https://code.google.com/p/android/issues/detail?id=39882
                    // 所以先用fileReader读取出来再通过arraybuffer的方式发送。
                    if ( Base.os.android ) {
                        fr = new FileReader();
    
                        fr.onload = function() {
                            xhr.send( this.result );
                            fr = fr.onload = null;
                        };
    
                        fr.readAsArrayBuffer( binary );
                    } else {
                        xhr.send( binary );
                    }
                } else {
                    xhr.send( formData );
                }
            },
    
            getResponse: function() {
                return this._response;
            },
    
            getResponseAsJson: function() {
                return this._parseJson( this._response );
            },
    
            getStatus: function() {
                return this._status;
            },
    
            abort: function() {
                var xhr = this._xhr;
    
                if ( xhr ) {
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    xhr.abort();
    
                    this._xhr = xhr = null;
                }
            },
    
            destroy: function() {
                this.abort();
            },
    
            _initAjax: function() {
                var me = this,
                    xhr = new XMLHttpRequest(),
                    opts = this.options;
    
                if ( opts.withCredentials && !('withCredentials' in xhr) &&
                        typeof XDomainRequest !== 'undefined' ) {
                    xhr = new XDomainRequest();
                }
    
                xhr.upload.onprogress = function( e ) {
                    var percentage = 0;
    
                    if ( e.lengthComputable ) {
                        percentage = e.loaded / e.total;
                    }
    
                    return me.trigger( 'progress', percentage );
                };
    
                xhr.onreadystatechange = function() {
    
                    if ( xhr.readyState !== 4 ) {
                        return;
                    }
    
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    me._xhr = null;
                    me._status = xhr.status;
    
                    if ( xhr.status >= 200 && xhr.status < 300 ) {
                        me._response = xhr.responseText;
                        return me.trigger('load');
                    } else if ( xhr.status >= 500 && xhr.status < 600 ) {
                        me._response = xhr.responseText;
                        return me.trigger( 'error', 'server' );
                    }
    
    
                    return me.trigger( 'error', me._status ? 'http' : 'abort' );
                };
    
                me._xhr = xhr;
                return xhr;
            },
    
            _setRequestHeader: function( xhr, headers ) {
                $.each( headers, function( key, val ) {
                    xhr.setRequestHeader( key, val );
                });
            },
    
            _parseJson: function( str ) {
                var json;
    
                try {
                    json = JSON.parse( str );
                } catch ( ex ) {
                    json = {};
                }
    
                return json;
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/html5/md5',[
        'runtime/html5/runtime'
    ], function( FlashRuntime ) {
    
        /*
         * Fastest md5 implementation around (JKM md5)
         * Credits: Joseph Myers
         *
         * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
         * @see http://jsperf.com/md5-shootout/7
         */
    
        /* this function is much faster,
          so if possible we use it. Some IEs
          are the only ones I know of that
          need the idiotic second function,
          generated by an if clause.  */
        var add32 = function (a, b) {
            return (a + b) & 0xFFFFFFFF;
        },
    
        cmn = function (q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32((a << s) | (a >>> (32 - s)), b);
        },
    
        ff = function (a, b, c, d, x, s, t) {
            return cmn((b & c) | ((~b) & d), a, b, x, s, t);
        },
    
        gg = function (a, b, c, d, x, s, t) {
            return cmn((b & d) | (c & (~d)), a, b, x, s, t);
        },
    
        hh = function (a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        },
    
        ii = function (a, b, c, d, x, s, t) {
            return cmn(c ^ (b | (~d)), a, b, x, s, t);
        },
    
        md5cycle = function (x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];
    
            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);
    
            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);
    
            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);
    
            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);
    
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        },
    
        /* there needs to be support for Unicode here,
           * unless we pretend that we can redefine the MD-5
           * algorithm for multi-byte characters (perhaps
           * by adding every four 16-bit characters and
           * shortening the sum to 32 bits). Otherwise
           * I suggest performing MD-5 as if every character
           * was two bytes--e.g., 0040 0025 = @%--but then
           * how will an ordinary MD-5 sum be matched?
           * There is no way to standardize text to something
           * like UTF-8 before transformation; speed cost is
           * utterly prohibitive. The JavaScript standard
           * itself needs to look at this: it should start
           * providing access to Strings as preformed UTF-8
           * 8-bit unsigned value arrays.
           */
        md5blk = function (s) {
            var md5blks = [],
                i; /* Andy King said do it this way. */
    
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        },
    
        md5blk_array = function (a) {
            var md5blks = [],
                i; /* Andy King said do it this way. */
    
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        },
    
        md51 = function (s) {
            var n = s.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
    
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            length = s.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
            }
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
    
            md5cycle(state, tail);
            return state;
        },
    
        md51_array = function (a) {
            var n = a.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
    
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
            }
    
            // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
            // containing the last element of the parent array if the sub array specified starts
            // beyond the length of the parent array - weird.
            // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
            a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);
    
            length = a.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << ((i % 4) << 3);
            }
    
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
    
            md5cycle(state, tail);
    
            return state;
        },
    
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
    
        rhex = function (n) {
            var s = '',
                j;
            for (j = 0; j < 4; j += 1) {
                s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
            }
            return s;
        },
    
        hex = function (x) {
            var i;
            for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
            }
            return x.join('');
        },
    
        md5 = function (s) {
            return hex(md51(s));
        },
    
    
    
        ////////////////////////////////////////////////////////////////////////////
    
        /**
         * SparkMD5 OOP implementation.
         *
         * Use this class to perform an incremental md5, otherwise use the
         * static methods instead.
         */
        SparkMD5 = function () {
            // call reset to init the instance
            this.reset();
        };
    
    
        // In some cases the fast add32 function cannot be used..
        if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
            add32 = function (x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                    msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            };
        }
    
    
        /**
         * Appends a string.
         * A conversion will be applied if an utf8 string is detected.
         *
         * @param {string} str The string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.append = function (str) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
    
            // then append as binary
            this.appendBinary(str);
    
            return this;
        };
    
        /**
         * Appends a binary string.
         *
         * @param {string} contents The binary string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.appendBinary = function (contents) {
            this._buff += contents;
            this._length += contents.length;
    
            var length = this._buff.length,
                i;
    
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
            }
    
            this._buff = this._buff.substr(i - 64);
    
            return this;
        };
    
        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {string|Array} The result
         */
        SparkMD5.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                i,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ret;
    
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
            }
    
            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);
    
            this.reset();
    
            return ret;
        };
    
        /**
         * Finish the final calculation based on the tail.
         *
         * @param {Array}  tail   The tail (will be modified)
         * @param {Number} length The length of the remaining buffer
         */
        SparkMD5.prototype._finish = function (tail, length) {
            var i = length,
                tmp,
                lo,
                hi;
    
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(this._state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Do the final computation based on the tail and length
            // Beware that the final length may not fit in 32 bits so we take care of that
            tmp = this._length * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
            md5cycle(this._state, tail);
        };
    
        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.reset = function () {
            this._buff = "";
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];
    
            return this;
        };
    
        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.prototype.destroy = function () {
            delete this._state;
            delete this._buff;
            delete this._length;
        };
    
    
        /**
         * Performs the md5 hash on a string.
         * A conversion will be applied if utf8 string is detected.
         *
         * @param {string}  str The string
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {string|Array} The result
         */
        SparkMD5.hash = function (str, raw) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
    
            var hash = md51(str);
    
            return !!raw ? hash : hex(hash);
        };
    
        /**
         * Performs the md5 hash on a binary string.
         *
         * @param {string}  content The binary string
         * @param {Boolean} raw     True to get the raw result, false to get the hex result
         *
         * @return {string|Array} The result
         */
        SparkMD5.hashBinary = function (content, raw) {
            var hash = md51(content);
    
            return !!raw ? hash : hex(hash);
        };
    
        /**
         * SparkMD5 OOP implementation for array buffers.
         *
         * Use this class to perform an incremental md5 ONLY for array buffers.
         */
        SparkMD5.ArrayBuffer = function () {
            // call reset to init the instance
            this.reset();
        };
    
        ////////////////////////////////////////////////////////////////////////////
    
        /**
         * Appends an array buffer.
         *
         * @param {ArrayBuffer} arr The array to be appended
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.append = function (arr) {
            // TODO: we could avoid the concatenation here but the algorithm would be more complex
            //       if you find yourself needing extra performance, please make a PR.
            var buff = this._concatArrayBuffer(this._buff, arr),
                length = buff.length,
                i;
    
            this._length += arr.byteLength;
    
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
            }
    
            // Avoids IE10 weirdness (documented above)
            this._buff = (i - 64) < length ? buff.subarray(i - 64) : new Uint8Array(0);
    
            return this;
        };
    
        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {string|Array} The result
         */
        SparkMD5.ArrayBuffer.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i,
                ret;
    
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << ((i % 4) << 3);
            }
    
            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);
    
            this.reset();
    
            return ret;
        };
    
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    
        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.reset = function () {
            this._buff = new Uint8Array(0);
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];
    
            return this;
        };
    
        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    
        /**
         * Concats two array buffers, returning a new one.
         *
         * @param  {ArrayBuffer} first  The first array buffer
         * @param  {ArrayBuffer} second The second array buffer
         *
         * @return {ArrayBuffer} The new array buffer
         */
        SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function (first, second) {
            var firstLength = first.length,
                result = new Uint8Array(firstLength + second.byteLength);
    
            result.set(first);
            result.set(new Uint8Array(second), firstLength);
    
            return result;
        };
    
        /**
         * Performs the md5 hash on an array buffer.
         *
         * @param {ArrayBuffer} arr The array buffer
         * @param {Boolean}     raw True to get the raw result, false to get the hex result
         *
         * @return {string|Array} The result
         */
        SparkMD5.ArrayBuffer.hash = function (arr, raw) {
            var hash = md51_array(new Uint8Array(arr));
    
            return !!raw ? hash : hex(hash);
        };
        
        return FlashRuntime.register( 'Md5', {
            init: function() {
                // do nothing.
            },
    
            loadFromBlob: function( file ) {
                var blob = file.getSource(),
                    chunkSize = 2 * 1024 * 1024,
                    chunks = Math.ceil( blob.size / chunkSize ),
                    chunk = 0,
                    owner = this.owner,
                    spark = new SparkMD5.ArrayBuffer(),
                    me = this,
                    blobSlice = blob.mozSlice || blob.webkitSlice || blob.slice,
                    loadNext, fr;
    
                fr = new FileReader();
    
                loadNext = function() {
                    var start, end;
    
                    start = chunk * chunkSize;
                    end = Math.min( start + chunkSize, blob.size );
    
                    fr.onload = function( e ) {
                        spark.append( e.target.result );
                        owner.trigger( 'progress', {
                            total: file.size,
                            loaded: end
                        });
                    };
    
                    fr.onloadend = function() {
                        fr.onloadend = fr.onload = null;
    
                        if ( ++chunk < chunks ) {
                            setTimeout( loadNext, 1 );
                        } else {
                            setTimeout(function(){
                                owner.trigger('load');
                                me.result = spark.end();
                                loadNext = file = blob = spark = null;
                                owner.trigger('complete');
                            }, 50 );
                        }
                    };
    
                    fr.readAsArrayBuffer( blobSlice.call( blob, start, end ) );
                };
    
                loadNext();
            },
    
            getResult: function() {
                return this.result;
            }
        });
    });
    /**
     * @fileOverview FlashRuntime
     */
    define('runtime/flash/runtime',[
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function( Base, Runtime, CompBase ) {
    
        var $ = Base.$,
            type = 'flash',
            components = {};
    
    
        function getFlashVersion() {
            var version;
    
            try {
                version = navigator.plugins[ 'Shockwave Flash' ];
                version = version.description;
            } catch ( ex ) {
                try {
                    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                            .GetVariable('$version');
                } catch ( ex2 ) {
                    version = '0.0';
                }
            }
            version = version.match( /\d+/g );
            return parseFloat( version[ 0 ] + '.' + version[ 1 ], 10 );
        }
    
        function FlashRuntime() {
            var pool = {},
                clients = {},
                destroy = this.destroy,
                me = this,
                jsreciver = Base.guid('webuploader_');
    
            Runtime.apply( me, arguments );
            me.type = type;
    
    
            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function( comp, fn/*, args...*/ ) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice( arguments, 2 ),
                    instance;
    
                clients[ uid ] = client;
    
                if ( components[ comp ] ) {
                    if ( !pool[ uid ] ) {
                        pool[ uid ] = new components[ comp ]( client, me );
                    }
    
                    instance = pool[ uid ];
    
                    if ( instance[ fn ] ) {
                        return instance[ fn ].apply( instance, args );
                    }
                }
    
                return me.flashExec.apply( client, arguments );
            };
    
            function handler( evt, obj ) {
                var type = evt.type || evt,
                    parts, uid;
    
                parts = type.split('::');
                uid = parts[ 0 ];
                type = parts[ 1 ];
    
                // console.log.apply( console, arguments );
    
                if ( type === 'Ready' && uid === me.uid ) {
                    me.trigger('ready');
                } else if ( clients[ uid ] ) {
                    clients[ uid ].trigger( type.toLowerCase(), evt, obj );
                }
    
                // Base.log( evt, obj );
            }
    
            // flash的接受器。
            window[ jsreciver ] = function() {
                var args = arguments;
    
                // 为了能捕获得到。
                setTimeout(function() {
                    handler.apply( null, args );
                }, 1 );
            };
    
            this.jsreciver = jsreciver;
    
            this.destroy = function() {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply( this, arguments );
            };
    
            this.flashExec = function( comp, fn ) {
                var flash = me.getFlash(),
                    args = Base.slice( arguments, 2 );
    
                return flash.exec( this.uid, comp, fn, args );
            };
    
            // @todo
        }
    
        Base.inherits( Runtime, {
            constructor: FlashRuntime,
    
            init: function() {
                var container = this.getContainer(),
                    opts = this.options,
                    html;
    
                // if not the minimal height, shims are not initialized
                // in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
                container.css({
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    width: '9px',
                    height: '9px',
                    overflow: 'hidden'
                });
    
                // insert flash object
                html = '<object id="' + this.uid + '" type="application/' +
                        'x-shockwave-flash" data="' +  opts.swf + '" ';
    
                if ( Base.browser.ie ) {
                    html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                }
    
                html += 'width="100%" height="100%" style="outline:0">'  +
                    '<param name="movie" value="' + opts.swf + '" />' +
                    '<param name="flashvars" value="uid=' + this.uid +
                    '&jsreciver=' + this.jsreciver + '" />' +
                    '<param name="wmode" value="transparent" />' +
                    '<param name="allowscriptaccess" value="always" />' +
                '</object>';
    
                container.html( html );
            },
    
            getFlash: function() {
                if ( this._flash ) {
                    return this._flash;
                }
    
                this._flash = $( '#' + this.uid ).get( 0 );
                return this._flash;
            }
    
        });
    
        FlashRuntime.register = function( name, component ) {
            component = components[ name ] = Base.inherits( CompBase, $.extend({
    
                // @todo fix this later
                flashExec: function() {
                    var owner = this.owner,
                        runtime = this.getRuntime();
    
                    return runtime.flashExec.apply( owner, arguments );
                }
            }, component ) );
    
            return component;
        };
    
        if ( getFlashVersion() >= 11.4 ) {
            Runtime.addRuntime( type, FlashRuntime );
        }
    
        return FlashRuntime;
    });
    /**
     * @fileOverview FilePicker
     */
    define('runtime/flash/filepicker',[
        'base',
        'runtime/flash/runtime'
    ], function( Base, FlashRuntime ) {
        var $ = Base.$;
    
        return FlashRuntime.register( 'FilePicker', {
            init: function( opts ) {
                var copy = $.extend({}, opts ),
                    len, i;
    
                // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.
                len = copy.accept && copy.accept.length;
                for (  i = 0; i < len; i++ ) {
                    if ( !copy.accept[ i ].title ) {
                        copy.accept[ i ].title = 'Files';
                    }
                }
    
                delete copy.button;
                delete copy.id;
                delete copy.container;
    
                this.flashExec( 'FilePicker', 'init', copy );
            },
    
            destroy: function() {
                this.flashExec( 'FilePicker', 'destroy' );
            }
        });
    });
    /**
     * @fileOverview 图片压缩
     */
    define('runtime/flash/image',[
        'runtime/flash/runtime'
    ], function( FlashRuntime ) {
    
        return FlashRuntime.register( 'Image', {
            // init: function( options ) {
            //     var owner = this.owner;
    
            //     this.flashExec( 'Image', 'init', options );
            //     owner.on( 'load', function() {
            //          ;
            //     });
            // },
    
            loadFromBlob: function( blob ) {
                var owner = this.owner;
    
                owner.info() && this.flashExec( 'Image', 'info', owner.info() );
                owner.meta() && this.flashExec( 'Image', 'meta', owner.meta() );
    
                this.flashExec( 'Image', 'loadFromBlob', blob.uid );
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/flash/transport',[
        'base',
        'runtime/flash/runtime',
        'runtime/client'
    ], function( Base, FlashRuntime, RuntimeClient ) {
        var $ = Base.$;
    
        return FlashRuntime.register( 'Transport', {
            init: function() {
                this._status = 0;
                this._response = null;
                this._responseJson = null;
            },
    
            send: function() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    binary;
    
                xhr.connectRuntime( blob.ruid );
    
                if ( opts.sendAsBinary ) {
                    server += (/\?/.test( server ) ? '&' : '?') +
                            $.param( owner._formData );
    
                    binary = blob.uid;
                } else {
                    $.each( owner._formData, function( k, v ) {
                        xhr.exec( 'append', k, v );
                    });
    
                    xhr.exec( 'appendBlob', opts.fileVal, blob.uid,
                            opts.filename || owner._formData.name || '' );
                }
    
                this._setRequestHeader( xhr, opts.headers );
                xhr.exec( 'send', {
                    method: opts.method,
                    url: server,
                    forceURLStream: opts.forceURLStream,
                    mimeType: 'application/octet-stream'
                }, binary );
            },
    
            getStatus: function() {
                return this._status;
            },
    
            getResponse: function() {
                return this._response || '';
            },
    
            getResponseAsJson: function() {
                return this._responseJson;
            },
    
            abort: function() {
                var xhr = this._xhr;
    
                if ( xhr ) {
                    xhr.exec('abort');
                    xhr.destroy();
                    this._xhr = xhr = null;
                }
            },
    
            destroy: function() {
                this.abort();
            },
    
            _initAjax: function() {
                var me = this,
                    xhr = new RuntimeClient('XMLHttpRequest');
    
                xhr.on( 'uploadprogress progress', function( e ) {
                    var percent = e.loaded / e.total;
                    percent = Math.min( 1, Math.max( 0, percent ) );
                    return me.trigger( 'progress', percent );
                });
    
                xhr.on( 'load', function() {
                    var status = xhr.exec('getStatus'),
                        readBody = false,
                        err = '',
                        p;
    
                    xhr.off();
                    me._xhr = null;
    
                    if ( status >= 200 && status < 300 ) {
                        readBody = true;
                    } else if ( status >= 500 && status < 600 ) {
                        readBody = true;
                        err = 'server';
                    } else {
                        err = 'http';
                    }
    
                    if ( readBody ) {
                        me._response = xhr.exec('getResponse');
                        me._response = decodeURIComponent( me._response );
    
                        // flash 处理可能存在 bug, 没辙只能靠 js 了
                        // try {
                        //     me._responseJson = xhr.exec('getResponseAsJson');
                        // } catch ( error ) {
                            
                        p = window.JSON && window.JSON.parse || function( s ) {
                            try {
                                return new Function('return ' + s).call();
                            } catch ( err ) {
                                return {};
                            }
                        };
                        me._responseJson  = me._response ? p(me._response) : {};
                            
                        // }
                    }
                    
                    xhr.destroy();
                    xhr = null;
    
                    return err ? me.trigger( 'error', err ) : me.trigger('load');
                });
    
                xhr.on( 'error', function() {
                    xhr.off();
                    me._xhr = null;
                    me.trigger( 'error', 'http' );
                });
    
                me._xhr = xhr;
                return xhr;
            },
    
            _setRequestHeader: function( xhr, headers ) {
                $.each( headers, function( key, val ) {
                    xhr.exec( 'setRequestHeader', key, val );
                });
            }
        });
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/flash/blob',[
        'runtime/flash/runtime',
        'lib/blob'
    ], function( FlashRuntime, Blob ) {
    
        return FlashRuntime.register( 'Blob', {
            slice: function( start, end ) {
                var blob = this.flashExec( 'Blob', 'slice', start, end );
    
                return new Blob( blob.uid, blob );
            }
        });
    });
    /**
     * @fileOverview  Md5 flash实现
     */
    define('runtime/flash/md5',[
        'runtime/flash/runtime'
    ], function( FlashRuntime ) {
        
        return FlashRuntime.register( 'Md5', {
            init: function() {
                // do nothing.
            },
    
            loadFromBlob: function( blob ) {
                return this.flashExec( 'Md5', 'loadFromBlob', blob.uid );
            }
        });
    });
    /**
     * @fileOverview 完全版本。
     */
    define('preset/all',[
        'base',
    
        // widgets
        'widgets/filednd',
        'widgets/filepaste',
        'widgets/filepicker',
        'widgets/image',
        'widgets/queue',
        'widgets/runtime',
        'widgets/upload',
        'widgets/validator',
        'widgets/md5',
    
        // runtimes
        // html5
        'runtime/html5/blob',
        'runtime/html5/dnd',
        'runtime/html5/filepaste',
        'runtime/html5/filepicker',
        'runtime/html5/imagemeta/exif',
        'runtime/html5/androidpatch',
        'runtime/html5/image',
        'runtime/html5/transport',
        'runtime/html5/md5',
    
        // flash
        'runtime/flash/filepicker',
        'runtime/flash/image',
        'runtime/flash/transport',
        'runtime/flash/blob',
        'runtime/flash/md5'
    ], function( Base ) {
        return Base;
    });
    /**
     * @fileOverview 日志组件，主要用来收集错误信息，可以帮助 webuploader 更好的定位问题和发展。
     *
     * 如果您不想要启用此功能，请在打包的时候去掉 log 模块。
     *
     * 或者可以在初始化的时候通过 options.disableWidgets 属性禁用。
     *
     * 如：
     * WebUploader.create({
     *     ...
     *
     *     disableWidgets: 'log',
     *
     *     ...
     * })
     */
    define('widgets/log',[
        'base',
        'uploader',
        'widgets/widget'
    ], function( Base, Uploader ) {
        var $ = Base.$,
            logUrl = ' http://static.tieba.baidu.com/tb/pms/img/st.gif??',
            product = (location.hostname || location.host || 'protected').toLowerCase(),
    
            // 只针对 baidu 内部产品用户做统计功能。
            enable = product && /baidu/i.exec(product),
            base;
    
        if (!enable) {
            return;
        }
    
        base = {
            dv: 3,
            master: 'webuploader',
            online: /test/.exec(product) ? 0 : 1,
            module: '',
            product: product,
            type: 0
        };
    
        function send(data) {
            var obj = $.extend({}, base, data),
                url = logUrl.replace(/^(.*)\?/, '$1' + $.param( obj )),
                image = new Image();
    
            image.src = url;
        }
    
        return Uploader.register({
            name: 'log',
    
            init: function() {
                var owner = this.owner,
                    count = 0,
                    size = 0;
    
                owner
                    .on('error', function(code) {
                        send({
                            type: 2,
                            c_error_code: code
                        });
                    })
                    .on('uploadError', function(file, reason) {
                        send({
                            type: 2,
                            c_error_code: 'UPLOAD_ERROR',
                            c_reason: '' + reason
                        });
                    })
                    .on('uploadComplete', function(file) {
                        count++;
                        size += file.size;
                    }).
                    on('uploadFinished', function() {
                        send({
                            c_count: count,
                            c_size: size
                        });
                        count = size = 0;
                    });
    
                send({
                    c_usage: 1
                });
            }
        });
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('webuploader',[
        'preset/all',
        'widgets/log'
    ], function( preset ) {
        return preset;
    });
    return require('webuploader');
});

/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
(function(e,t,n){e.noop=e.noop||function(){};var r,i,s,o,u=0,a=e(t),f=e(document),l=e("html"),c=document.documentElement,h=t.VBArray&&!t.XMLHttpRequest,p="createTouch"in document&&!("onmousemove"in c)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),d="artDialog"+ +(new Date),v=function(t,i,s){t=t||{};if(typeof t=="string"||t.nodeType===1)t={content:t,fixed:!p};var o,a=v.defaults,f=t.follow=this.nodeType===1&&this||t.follow;for(var l in a)t[l]===n&&(t[l]=a[l]);return e.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(e,r){t[e]=t[e]!==n?t[e]:t[r]}),typeof f=="string"&&(f=e(f)[0]),t.id=f&&f[d+"follow"]||t.id||d+u,o=v.list[t.id],f&&o?o.follow(f).zIndex().focus():o?o.zIndex().focus():(p&&(t.fixed=!1),e.isArray(t.button)||(t.button=t.button?[t.button]:[]),i!==n&&(t.ok=i),s!==n&&(t.cancel=s),t.ok&&t.button.push({name:t.okVal,callback:t.ok,focus:!0}),t.cancel&&t.button.push({name:t.cancelVal,callback:t.cancel}),v.defaults.zIndex=t.zIndex,u++,v.list[t.id]=r?r._init(t):new v.fn._init(t))};v.fn=v.prototype={version:"4.1.7",closed:!0,_init:function(e){var n=this,i,s=e.icon,o=s&&(h?{png:"icons/"+s+".png"}:{backgroundImage:"url('"+e.path+"/skins/icons/"+s+".png')"});return n.closed=!1,n.config=e,n.DOM=i=n.DOM||n._getDOM(),i.wrap.addClass(e.skin),i.close[e.cancel===!1?"hide":"show"](),i.icon[0].style.display=s?"":"none",i.iconBg.css(o||{background:"none"}),i.se.css("cursor",e.resize?"se-resize":"auto"),i.title.css("cursor",e.drag?"move":"auto"),i.content.css("padding",e.padding),n[e.show?"show":"hide"](!0),n.button(e.button).title(e.title).content(e.content,!0).size(e.width,e.height).time(e.time),e.follow?n.follow(e.follow):n.position(e.left,e.top),n.zIndex().focus(),e.lock&&n.lock(),n._addEvent(),n._ie6PngFix(),r=null,e.init&&e.init.call(n,t),n},content:function(e){var t,r,i,s,o=this,u=o.DOM,a=u.wrap[0],f=a.offsetWidth,l=a.offsetHeight,c=parseInt(a.style.left),h=parseInt(a.style.top),p=a.style.width,d=u.content,v=d[0];return o._elemBack&&o._elemBack(),a.style.width="auto",e===n?v:(typeof e=="string"?d.html(e):e&&e.nodeType===1&&(s=e.style.display,t=e.previousSibling,r=e.nextSibling,i=e.parentNode,o._elemBack=function(){t&&t.parentNode?t.parentNode.insertBefore(e,t.nextSibling):r&&r.parentNode?r.parentNode.insertBefore(e,r):i&&i.appendChild(e),e.style.display=s,o._elemBack=null},d.html(""),v.appendChild(e),e.style.display="block"),arguments[1]||(o.config.follow?o.follow(o.config.follow):(f=a.offsetWidth-f,l=a.offsetHeight-l,c-=f/2,h-=l/2,a.style.left=Math.max(c,0)+"px",a.style.top=Math.max(h,0)+"px"),p&&p!=="auto"&&(a.style.width=a.offsetWidth+"px"),o._autoPositionType()),o._ie6SelectFix(),o._runScript(v),o)},title:function(e){var t=this.DOM,r=t.wrap,i=t.title,s="aui_state_noTitle";return e===n?i[0]:(e===!1?(i.hide().html(""),r.addClass(s)):(i.show().html(e||""),r.removeClass(s)),this)},position:function(e,t){var r=this,i=r.config,s=r.DOM.wrap[0],o=h?!1:i.fixed,u=h&&r.config.fixed,l=f.scrollLeft(),c=f.scrollTop(),p=o?0:l,d=o?0:c,v=a.width(),m=a.height(),g=s.offsetWidth,y=s.offsetHeight,b=s.style;if(e||e===0)r._left=e.toString().indexOf("%")!==-1?e:null,e=r._toNumber(e,v-g),typeof e=="number"?(e=u?e+=l:e+p,b.left=Math.max(e,p)+"px"):typeof e=="string"&&(b.left=e);if(t||t===0)r._top=t.toString().indexOf("%")!==-1?t:null,t=r._toNumber(t,m-y),typeof t=="number"?(t=u?t+=c:t+d,b.top=Math.max(t,d)+"px"):typeof t=="string"&&(b.top=t);return e!==n&&t!==n&&(r._follow=null,r._autoPositionType()),r},size:function(e,t){var n,r,i,s,o=this,u=o.config,f=o.DOM,l=f.wrap,c=f.main,h=l[0].style,p=c[0].style;return e&&(o._width=e.toString().indexOf("%")!==-1?e:null,n=a.width()-l[0].offsetWidth+c[0].offsetWidth,i=o._toNumber(e,n),e=i,typeof e=="number"?(h.width="auto",p.width=Math.max(o.config.minWidth,e)+"px",h.width=l[0].offsetWidth+"px"):typeof e=="string"&&(p.width=e,e==="auto"&&l.css("width","auto"))),t&&(o._height=t.toString().indexOf("%")!==-1?t:null,r=a.height()-l[0].offsetHeight+c[0].offsetHeight,s=o._toNumber(t,r),t=s,typeof t=="number"?p.height=Math.max(o.config.minHeight,t)+"px":typeof t=="string"&&(p.height=t)),o._ie6SelectFix(),o},follow:function(t){var n,r=this,i=r.config;if(typeof t=="string"||t&&t.nodeType===1)n=e(t),t=n[0];if(!t||!t.offsetWidth&&!t.offsetHeight)return r.position(r._left,r._top);var s=d+"follow",o=a.width(),u=a.height(),l=f.scrollLeft(),c=f.scrollTop(),p=n.offset(),v=t.offsetWidth,m=t.offsetHeight,g=h?!1:i.fixed,y=g?p.left-l:p.left,b=g?p.top-c:p.top,w=r.DOM.wrap[0],E=w.style,S=w.offsetWidth,x=w.offsetHeight,T=y-(S-v)/2,N=b+m,C=g?0:l,k=g?0:c;return T=T<C?y:T+S>o&&y-S>C?y-S+v:T,N=N+x>u+k&&b-x>k?b-x:N,E.left=T+"px",E.top=N+"px",r._follow&&r._follow.removeAttribute(s),r._follow=t,t[s]=i.id,r._autoPositionType(),r},button:function(){var t=this,r=arguments,i=t.DOM,s=i.buttons,o=s[0],u="aui_state_highlight",a=t._listeners=t._listeners||{},f=e.isArray(r[0])?r[0]:[].slice.call(r);return r[0]===n?o:(e.each(f,function(n,r){var i=r.name,s=!a[i],f=s?document.createElement("button"):a[i].elem;a[i]||(a[i]={}),r.callback&&(a[i].callback=r.callback),r.className&&(f.className=r.className),r.focus&&(t._focus&&t._focus.removeClass(u),t._focus=e(f).addClass(u),t.focus()),f.setAttribute("type","button"),f[d+"callback"]=i,f.disabled=!!r.disabled,s&&(f.innerHTML=i,a[i].elem=f,o.appendChild(f))}),s[0].style.display=f.length?"":"none",t._ie6SelectFix(),t)},show:function(){return this.DOM.wrap.show(),!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show(),this},hide:function(){return this.DOM.wrap.hide(),!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide(),this},close:function(){if(this.closed)return this;var e=this,n=e.DOM,i=n.wrap,s=v.list,o=e.config.close,u=e.config.follow;e.time();if(typeof o=="function"&&o.call(e,t)===!1)return e;e.unlock(),e._elemBack&&e._elemBack(),i[0].className=i[0].style.cssText="",n.title.html(""),n.content.html(""),n.buttons.html(""),v.focus===e&&(v.focus=null),u&&u.removeAttribute(d+"follow"),delete s[e.config.id],e._removeEvent(),e.hide(!0)._setAbsolute();for(var a in e)e.hasOwnProperty(a)&&a!=="DOM"&&delete e[a];return r?i.remove():r=e,e},time:function(e){var t=this,n=t.config.cancelVal,r=t._timer;return r&&clearTimeout(r),e&&(t._timer=setTimeout(function(){t._click(n)},1e3*e)),t},focus:function(){try{if(this.config.focus){var e=this._focus&&this._focus[0]||this.DOM.close[0];e&&e.focus()}}catch(t){}return this},zIndex:function(){var e=this,t=e.DOM,n=t.wrap,r=v.focus,i=v.defaults.zIndex++;return n.css("zIndex",i),e._lockMask&&e._lockMask.css("zIndex",i-1),r&&r.DOM.wrap.removeClass("aui_state_focus"),v.focus=e,n.addClass("aui_state_focus"),e},lock:function(){if(this._lock)return this;var t=this,n=v.defaults.zIndex-1,r=t.DOM.wrap,i=t.config,s=f.width(),o=f.height(),u=t._lockMaskWrap||e(document.body.appendChild(document.createElement("div"))),a=t._lockMask||e(u[0].appendChild(document.createElement("div"))),l="(document).documentElement",c=p?"width:"+s+"px;height:"+o+"px":"width:100%;height:100%",d=h?"position:absolute;left:expression("+l+".scrollLeft);top:expression("+l+".scrollTop);width:expression("+l+".clientWidth);height:expression("+l+".clientHeight)":"";return t.zIndex(),r.addClass("aui_state_lock"),u[0].style.cssText=c+";position:fixed;z-index:"+n+";top:0;left:0;overflow:hidden;"+d,a[0].style.cssText="height:100%;background:"+i.background+";filter:alpha(opacity=0);opacity:0",h&&a.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>'),a.stop(),a.bind("click",function(){t._reset()}).bind("dblclick",function(){t._click(t.config.cancelVal)}),i.duration===0?a.css({opacity:i.opacity}):a.animate({opacity:i.opacity},i.duration),t._lockMaskWrap=u,t._lockMask=a,t._lock=!0,t},unlock:function(){var e=this,t=e._lockMaskWrap,n=e._lockMask;if(!e._lock)return e;var i=t[0].style,s=function(){h&&(i.removeExpression("width"),i.removeExpression("height"),i.removeExpression("left"),i.removeExpression("top")),i.cssText="display:none",r&&t.remove()};return n.stop().unbind(),e.DOM.wrap.removeClass("aui_state_lock"),e.config.duration?n.animate({opacity:0},e.config.duration,s):s(),e._lock=!1,e},_getDOM:function(){var t=document.createElement("div"),n=document.body;t.style.cssText="position:absolute;left:0;top:0",t.innerHTML=v._templates,n.insertBefore(t,n.firstChild);var r,i=0,s={wrap:e(t)},o=t.getElementsByTagName("*"),u=o.length;for(;i<u;i++)r=o[i].className.split("aui_")[1],r&&(s[r]=e(o[i]));return s},_toNumber:function(e,t){if(!e&&e!==0||typeof e=="number")return e;var n=e.length-1;return e.lastIndexOf("px")===n?e=parseInt(e):e.lastIndexOf("%")===n&&(e=parseInt(t*e.split("%")[0]/100)),e},_ie6PngFix:h?function(){var e=0,t,n,r,i,s=v.defaults.path+"/skins/",o=this.DOM.wrap[0].getElementsByTagName("*");for(;e<o.length;e++)t=o[e],n=t.currentStyle.png,n&&(r=s+n,i=t.runtimeStyle,i.backgroundImage="none",i.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+r+"',sizingMethod='crop')")}:e.noop,_ie6SelectFix:h?function(){var e=this.DOM.wrap,t=e[0],n=d+"iframeMask",r=e[n],i=t.offsetWidth,s=t.offsetHeight;i+="px",s+="px",r?(r.style.width=i,r.style.height=s):(r=t.appendChild(document.createElement("iframe")),e[n]=r,r.src="about:blank",r.style.cssText="position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:"+i+";height:"+s)}:e.noop,_runScript:function(e){var t,n=0,r=0,i=e.getElementsByTagName("script"),s=i.length,o=[];for(;n<s;n++)i[n].type==="text/dialog"&&(o[r]=i[n].innerHTML,r++);o.length&&(o=o.join(""),t=new Function(o),t.call(this))},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:function(){return h&&e(function(){var t="backgroundAttachment";l.css(t)!=="fixed"&&e("body").css(t)!=="fixed"&&l.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}),function(){var e=this.DOM.wrap,t=e[0].style;if(h){var n=parseInt(e.css("left")),r=parseInt(e.css("top")),i=f.scrollLeft(),s=f.scrollTop(),o="(document.documentElement)";this._setAbsolute(),t.setExpression("left","eval("+o+".scrollLeft + "+(n-i)+') + "px"'),t.setExpression("top","eval("+o+".scrollTop + "+(r-s)+') + "px"')}else t.position="fixed"}}(),_setAbsolute:function(){var e=this.DOM.wrap[0].style;h&&(e.removeExpression("left"),e.removeExpression("top")),e.position="absolute"},_click:function(e){var n=this,r=n._listeners[e]&&n._listeners[e].callback;return typeof r!="function"||r.call(n,t)!==!1?n.close():n},_reset:function(e){var t,n=this,r=n._winSize||a.width()*a.height(),i=n._follow,s=n._width,o=n._height,u=n._left,f=n._top;if(e){t=n._winSize=a.width()*a.height();if(r===t)return}(s||o)&&n.size(s,o),i?n.follow(i):(u||f)&&n.position(u,f)},_addEvent:function(){var e,n=this,r=n.config,i="CollectGarbage"in t,s=n.DOM;n._winResize=function(){e&&clearTimeout(e),e=setTimeout(function(){n._reset(i)},40)},a.bind("resize",n._winResize),s.wrap.bind("click",function(e){var t=e.target,i;if(t.disabled)return!1;if(t===s.close[0])return n._click(r.cancelVal),!1;i=t[d+"callback"],i&&n._click(i),n._ie6SelectFix()}).bind("mousedown",function(){n.zIndex()})},_removeEvent:function(){var e=this,t=e.DOM;t.wrap.unbind(),a.unbind("resize",e._winResize)}},v.fn._init.prototype=v.fn,e.fn.dialog=e.fn.artDialog=function(){var e=arguments;return this[this.live?"live":"bind"]("click",function(){return v.apply(this,e),!1}),this},v.focus=null,v.get=function(e){return e===n?v.list:v.list[e]},v.list={},f.bind("keydown",function(e){var t=e.target,n=t.nodeName,r=/^INPUT|TEXTAREA$/,i=v.focus,s=e.keyCode;if(!i||!i.config.esc||r.test(n))return;s===27&&i._click(i.config.cancelVal)}),o=t._artDialog_path||function(e,t,n){for(t in e)e[t].src&&e[t].src.indexOf("artDialog")!==-1&&(n=e[t]);return i=n||e[e.length-1],n=i.src.replace(/\\/g,"/"),n.lastIndexOf("/")<0?".":n.substring(0,n.lastIndexOf("/"))}(document.getElementsByTagName("script")),s=i.src.split("skin=")[1];if(s){var m=document.createElement("link");m.rel="stylesheet",m.href=o+"/skins/"+s+".css?"+v.fn.version,i.parentNode.insertBefore(m,i)}a.bind("load",function(){setTimeout(function(){if(u)return;v({left:"-9999em",time:9,fixed:!1,lock:!1,focus:!1})},150)});try{document.execCommand("BackgroundImageCache",!1,!0)}catch(g){}v._templates='<div class="aui_outer"><table class="aui_border"><tbody><tr><td class="aui_nw"></td><td class="aui_n"></td><td class="aui_ne"></td></tr><tr><td class="aui_w"></td><td class="aui_c"><div class="aui_inner"><table class="aui_dialog"><tbody><tr><td colspan="2" class="aui_header"><div class="aui_titleBar"><div class="aui_title"></div><a class="aui_close" href="javascript:/*artDialog*/;">\u00d7</a></div></td></tr><tr><td class="aui_icon"><div class="aui_iconBg"></div></td><td class="aui_main"><div class="aui_content"></div></td></tr><tr><td colspan="2" class="aui_footer"><div class="aui_buttons"></div></td></tr></tbody></table></div></td><td class="aui_e"></td></tr><tr><td class="aui_sw"></td><td class="aui_s"></td><td class="aui_se"></td></tr></tbody></table></div>',v.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"\u6d88\u606f",button:null,ok:null,cancel:null,init:null,close:null,okVal:"\u786e\u5b9a",cancelVal:"\u53d6\u6d88",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:!0,focus:!0,show:!0,follow:null,path:o,lock:!1,background:"#000",opacity:.7,duration:300,fixed:!1,left:"50%",top:"38.2%",zIndex:1987,resize:!0,drag:!0},t.artDialog=e.dialog=e.artDialog=v})(this.art||this.jQuery&&(this.art=jQuery),this),function(e){var t,n,r=e(window),i=e(document),s=document.documentElement,o=!("minWidth"in s.style),u="onlosecapture"in s,a="setCapture"in s;artDialog.dragEvent=function(){var e=this,t=function(t){var n=e[t];e[t]=function(){return n.apply(e,arguments)}};t("start"),t("move"),t("end")},artDialog.dragEvent.prototype={onstart:e.noop,start:function(e){return i.bind("mousemove",this.move).bind("mouseup",this.end),this._sClientX=e.clientX,this._sClientY=e.clientY,this.onstart(e.clientX,e.clientY),!1},onmove:e.noop,move:function(e){return this._mClientX=e.clientX,this._mClientY=e.clientY,this.onmove(e.clientX-this._sClientX,e.clientY-this._sClientY),!1},onend:e.noop,end:function(e){return i.unbind("mousemove",this.move).unbind("mouseup",this.end),this.onend(e.clientX,e.clientY),!1}},n=function(e){var n,s,f,l,c,h,p=artDialog.focus,d=p.DOM,v=d.wrap,m=d.title,g=d.main,y="getSelection"in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(e){}};t.onstart=function(e,n){h?(s=g[0].offsetWidth,f=g[0].offsetHeight):(l=v[0].offsetLeft,c=v[0].offsetTop),i.bind("dblclick",t.end),!o&&u?m.bind("losecapture",t.end):r.bind("blur",t.end),a&&m[0].setCapture(),v.addClass("aui_state_drag"),p.focus()},t.onmove=function(e,t){if(h){var r=v[0].style,i=g[0].style,o=e+s,u=t+f;r.width="auto",i.width=Math.max(0,o)+"px",r.width=v[0].offsetWidth+"px",i.height=Math.max(0,u)+"px"}else{var i=v[0].style,a=Math.max(n.minX,Math.min(n.maxX,e+l)),d=Math.max(n.minY,Math.min(n.maxY,t+c));i.left=a+"px",i.top=d+"px"}y(),p._ie6SelectFix()},t.onend=function(e,n){i.unbind("dblclick",t.end),!o&&u?m.unbind("losecapture",t.end):r.unbind("blur",t.end),a&&m[0].releaseCapture(),o&&!p.closed&&p._autoPositionType(),v.removeClass("aui_state_drag")},h=e.target===d.se[0]?!0:!1,n=function(){var e,t,n=p.DOM.wrap[0],s=n.style.position==="fixed",o=n.offsetWidth,u=n.offsetHeight,a=r.width(),f=r.height(),l=s?0:i.scrollLeft(),c=s?0:i.scrollTop(),e=a-o+l;return t=f-u+c,{minX:l,minY:c,maxX:e,maxY:t}}(),t.start(e)},i.bind("mousedown",function(e){var r=artDialog.focus;if(!r)return;var i=e.target,s=r.config,o=r.DOM;if(s.drag!==!1&&i===o.title[0]||s.resize!==!1&&i===o.se[0])return t=t||new artDialog.dragEvent,n(e),!1})}(this.art||this.jQuery&&(this.art=jQuery))

/*!
 * artDialog iframeTools
 * Date: 2011-12-08 1:32
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
eval(function(B,D,A,G,E,F){function C(A){return A<62?String.fromCharCode(A+=A<26?65:A<52?71:-4):A<63?'_':A<64?'$':C(A>>6)+C(A&63)}while(A>0)E[C(G--)]=D[--A];return B.replace(/[\w\$]+/g,function(A){return E[A]==F[A]?A:E[A]})}('(6(E,C,D,A){c B,X,W,J="@_.DATA",K="@_.OPEN",H="@_.OPENER",I=C.k=C.k||"@_.WINNAME"+(Bd Bo).Be(),F=C.VBArray&&!C.XMLHttpRequest;E(6(){!C.Bu&&7.BY==="B0"&&Br("9 Error: 7.BY === \\"B0\\"")});c G=D.d=6(){c W=C,X=6(A){f{c W=C[A].7;W.BE}u(X){v!V}v C[A].9&&W.BE("frameset").length===U};v X("d")?W=C.d:X("BB")&&(W=C.BB),W}();D.BB=G,B=G.9,W=6(){v B.BW.w},D.m=6(C,B){c W=D.d,X=W[J]||{};W[J]=X;b(B!==A)X[C]=B;else v X[C];v X},D.BQ=6(W){c X=D.d[J];X&&X[W]&&1 X[W]},D.through=X=6(){c X=B.BR(i,BJ);v G!==C&&(D.B4[X.0.Z]=X),X},G!==C&&E(C).BN("unload",6(){c A=D.B4,W;BO(c X BS A)A[X]&&(W=A[X].0,W&&(W.duration=U),A[X].s(),1 A[X])}),D.p=6(B,O,BZ){O=O||{};c N,L,M,Bc,T,S,R,Q,BF,P=D.d,Ba="8:BD;n:-Bb;d:-Bb;Bp:o U;Bf:transparent",BI="r:g%;x:g%;Bp:o U";b(BZ===!V){c BH=(Bd Bo).Be(),BG=B.replace(/([?&])W=[^&]*/,"$1_="+BH);B=BG+(BG===B?(/\\?/.test(B)?"&":"?")+"W="+BH:"")}c G=6(){c B,C,W=L.2.B2(".aui_loading"),A=N.0;M.addClass("Bi"),W&&W.hide();f{Q=T.$,R=E(Q.7),BF=Q.7.Bg}u(X){T.q.5=BI,A.z?N.z(A.z):N.8(A.n,A.d),O.j&&O.j.l(N,Q,P),O.j=By;v}B=A.r==="Bt"?R.r()+(F?U:parseInt(E(BF).Bv("marginLeft"))):A.r,C=A.x==="Bt"?R.x():A.x,setTimeout(6(){T.q.5=BI},U),N.Bk(B,C),A.z?N.z(A.z):N.8(A.n,A.d),O.j&&O.j.l(N,Q,P),O.j=By},I={w:W(),j:6(){N=i,L=N.h,Bc=L.BM,M=L.2,T=N.BK=P.7.Bn("BK"),T.Bx=B,T.k="Open"+N.0.Z,T.q.5=Ba,T.BX("frameborder",U,U),T.BX("allowTransparency",!U),S=E(T),N.2().B3(T),Q=T.$;f{Q.k=T.k,D.m(T.k+K,N),D.m(T.k+H,C)}u(X){}S.BN("BC",G)},s:6(){S.Bv("4","o").unbind("BC",G);b(O.s&&O.s.l(i,T.$,P)===!V)v!V;M.removeClass("Bi"),S[U].Bx="about:blank",S.remove();f{D.BQ(T.k+K),D.BQ(T.k+H)}u(X){}}};Bq O.Y=="6"&&(I.Y=6(){v O.Y.l(N,T.$,P)}),Bq O.y=="6"&&(I.y=6(){v O.y.l(N,T.$,P)}),1 O.2;BO(c J BS O)I[J]===A&&(I[J]=O[J]);v X(I)},D.p.Bw=D.m(I+K),D.BT=D.m(I+H)||C,D.p.origin=D.BT,D.s=6(){c X=D.m(I+K);v X&&X.s(),!V},G!=C&&E(7).BN("mousedown",6(){c X=D.p.Bw;X&&X.w()}),D.BC=6(C,D,B){B=B||!V;c G=D||{},H={w:W(),j:6(A){c W=i,X=W.0;E.ajax({url:C,success:6(X){W.2(X),G.j&&G.j.l(W,A)},cache:B})}};1 D.2;BO(c F BS G)H[F]===A&&(H[F]=G[F]);v X(H)},D.Br=6(B,A){v X({Z:"Alert",w:W(),BL:"warning",t:!U,BA:!U,2:B,Y:!U,s:A})},D.confirm=6(C,A,B){v X({Z:"Confirm",w:W(),BL:"Bm",t:!U,BA:!U,3:U.V,2:C,Y:6(X){v A.l(i,X)},y:6(X){v B&&B.l(i,X)}})},D.prompt=6(D,B,C){C=C||"";c A;v X({Z:"Prompt",w:W(),BL:"Bm",t:!U,BA:!U,3:U.V,2:["<e q=\\"margin-bottom:5px;font-Bk:12px\\">",D,"</e>","<e>","<Bl B1=\\"",C,"\\" q=\\"r:18em;Bh:6px 4px\\" />","</e>"].join(""),j:6(){A=i.h.2.B2("Bl")[U],A.select(),A.BP()},Y:6(X){v B&&B.l(i,A.B1,X)},y:!U})},D.tips=6(B,A){v X({Z:"Tips",w:W(),title:!V,y:!V,t:!U,BA:!V}).2("<e q=\\"Bh: U 1em;\\">"+B+"</e>").time(A||V.B6)},E(6(){c A=D.dragEvent;b(!A)v;c B=E(C),X=E(7),W=F?"BD":"t",H=A.prototype,I=7.Bn("e"),G=I.q;G.5="4:o;8:"+W+";n:U;d:U;r:g%;x:g%;"+"cursor:move;filter:alpha(3=U);3:U;Bf:#FFF",7.Bg.B3(I),H.Bj=H.Bs,H.BV=H.Bz,H.Bs=6(){c E=D.BP.h,C=E.BM[U],A=E.2[U].BE("BK")[U];H.Bj.BR(i,BJ),G.4="block",G.w=D.BW.w+B5,W==="BD"&&(G.r=B.r()+"a",G.x=B.x()+"a",G.n=X.scrollLeft()+"a",G.d=X.scrollTop()+"a"),A&&C.offsetWidth*C.offsetHeight>307200&&(C.q.BU="hidden")},H.Bz=6(){c X=D.BP;H.BV.BR(i,BJ),G.4="o",X&&(X.h.BM[U].q.BU="visible")}})})(i.art||i.Bu,i,i.9)','P|R|T|U|V|W|0|1|_|$|ok|id|px|if|var|top|div|try|100|DOM|this|init|name|call|data|left|none|open|style|width|close|fixed|catch|return|zIndex|height|cancel|follow|config|delete|content|opacity|display|cssText|function|document|position|artDialog|ARTDIALOG|contentWindow|lock|parent|load|absolute|getElementsByTagName|S|Y|Z|a|arguments|iframe|icon|main|bind|for|focus|removeData|apply|in|opener|visibility|_end|defaults|setAttribute|compatMode|O|Q|9999em|X|new|getTime|background|body|padding|aui_state_full|_start|size|input|question|createElement|Date|border|typeof|alert|start|auto|jQuery|css|api|src|null|end|BackCompat|value|find|appendChild|list|3|5'.split('|'),109,122,{},{}))