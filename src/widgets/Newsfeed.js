
const baseUrl = 'https://widgets.cryptocompare.com/';

var scripts = document.getElementsByTagName("script");
var embedder = scripts[ scripts.length - 1 ];

// var cccTheme = {'PoweredBy':{'textColor':'#fff',"linkColor":"#fff"},"Data":{"borderColor":"#f7931a"},"Chart":{"fillColor":"#f7931a","borderColor":"#f7931a"},"Trend":{"colorUp":"#f7931a"}};

(function (){ 

var appName = encodeURIComponent(window.location.hostname);
    if(appName==""){appName='local';}
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true; 
    var theUrl = baseUrl+'serve/v1/coin/feed?fsym=BTC&tsym=USD';
    s.src = theUrl + ( theUrl.indexOf('?') >= 0 ? '&' : '?') + 'app=' + appName;
    // embedder.parentNode.appendChild(s); uncomment to show 
 
})();