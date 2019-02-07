//let userAgent = new SIP.UA('tmmgn@dpsoft.onsip.com');

// let userAgent = new SIP.UA({
//   uri: 'tmmgn@sip.linphone.org',
//   password: 'Systemmeltdown',
//   register: true
// });

var userAgent = new SIP.UA({
       uri: 'tmmgn@sip.linphone.org',
       authorizationUser: 'tmmgn',
       password: 'Systemmeltdown'
});

userAgent.on('registered', function () {
  alert('pizdocs')
})


userAgent.on('invite', function(session) {
  alert('nihooya sebe')
  let options =  {
                    sessionDescriptionHandlerOptions: {
                        constraints: {
                            audio: true,
                            video: false
                        }
                    }
                };

                session.accept(options);
  //session.accept();
});
