var socket = new JsSIP.WebSocketInterface('wss://edge.sip.onsip.com');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:tmmgn@sip.linphone.org',
  password : 'Systemmeltdown',
  register : true,
};

var userAgent = new JsSIP.UA(configuration);


userAgent.on('connected', function(e){ console.log('connected') });

userAgent.on('disconnected', function(e){ console.log('disconnected') });

userAgent.on('newRTCSession', function(e){ console.log('newRTCSession') });

userAgent.start();

var eventHandlers = {
  'progress': function(e) {
    console.log('call is in progress');
  },
  'failed': function(e) {
    console.log('call failed with cause: '+ JSON.stringify(e));
  },
  'ended': function(e) {
    console.log('call ended with cause: '+ e);
  },
  'confirmed': function(e) {
    console.log('call confirmed');
  }
};

var options = {
  'eventHandlers'    : eventHandlers,
  'mediaConstraints' : { 'audio': true, 'video': false }
};


document.getElementById("startCall").onclick = function(){
   userAgent.call('sip:tmmgn@dpsoft.onsip.com', options)
}

document.getElementById("endCall").onclick = function(){
   userAgent.terminateSessions()
}
