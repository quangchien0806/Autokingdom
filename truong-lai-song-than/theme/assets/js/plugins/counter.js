"use strict";!function(f){f.fn.countTo=function(u){return u=u||{},f(this).each(function(){var e=f.extend({},f.fn.countTo.defaults,{from:f(this).data("from"),to:f(this).data("to"),speed:f(this).data("speed"),refreshInterval:f(this).data("refresh-interval"),decimals:f(this).data("decimals")},u),t=Math.ceil(e.speed/e.refreshInterval),n=(e.to-e.from)/t,o=this,a=f(this),r=0,i=e.from,l=a.data("countTo")||{};function c(t){t=e.formatter.call(o,t,e);a.html(t)}a.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(function(){r++,c(i+=n),"function"==typeof e.onUpdate&&e.onUpdate.call(o,i);t<=r&&(a.removeData("countTo"),clearInterval(l.interval),i=e.to,"function"==typeof e.onComplete&&e.onComplete.call(o,i))},e.refreshInterval),c(i)})},f.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null}}(jQuery),jQuery(function(n){n(".count-number").data("countToOptions",{formatter:function(t,e){return t.toFixed(e.decimals).replace(/\B(?=(?:\d{0})+(?!\d))/g,",")}}),n(".timer").each(function(t){var e=n(this);t=n.extend({},t||{},e.data("countToOptions")||{}),e.countTo(t)})});