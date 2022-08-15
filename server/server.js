const io = require('socket.io');

io(3001, {
    cors: {
        origin: 'https//localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    console.log('connected');
})