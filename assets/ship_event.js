$(window).ready(function() {
  
  $('head script[async][src*="analytics"]').on('load', function() {
    window._shipScout = window._shipScout || [];
    _shipScout.push(function (response) {
      window.ga('send', 'event', 'threshold', `${response.freeShippingThresholdCents}`);
    }); 
  });
});