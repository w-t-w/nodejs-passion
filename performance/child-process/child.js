process.on('message', message => {
    console.log(`child received message ${message}~`);
    const child_message = 'hehehehehehehehehehe';
    console.log(`child send message ${child_message}~`);
    process.send(child_message);
});
