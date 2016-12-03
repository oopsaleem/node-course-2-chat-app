var socket = io();

socket.on('connect', function () {
  console.log('Connected to server.');

  socket.emit('createMessage', {
    from: 'Khaled',
    text: 'Yep, that was me.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server.');
});

socket.on('newEmail', function(email){
  console.log('New email from:', email);
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
})
