import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

export const Integration = () => {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem("role"));
    const [socket, setSocket] = useState(null);
    const [code, setCode] = useState('');
    const videoRef = useRef(null);

    useEffect(() => {
        // Establish WebSocket connection
        const socketInstance = io('http://localhost:8000');  // Replace with your server URL
        setSocket(socketInstance);

        return () => {
            // Cleanup on component unmount
            socketInstance.disconnect();
        };
    }, []);

    // Add your WebSocket event listeners here
    useEffect(() => {
        if (socket) {
            socket.on('webrtcData', (data) => {
                console.log('Received WebRTC data:', data);
                // Handle the received WebRTC data as needed
            });
        }
    }, [socket]);

    const handleCodeSubmit = () => {
        if (socket) {
            // Emit a 'webrtcData' message to the server
            socket.emit('webrtcData', { code });
        }
    };

    return (
        <div className='DicsussDIV'>
            <h2>Integration</h2>
            <div>
                <div>
                    <h1>Welcome, {username && username.split('@')[0]}!</h1>
                    <p>Role: {role}</p>
                </div>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Code'
                    name='code'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button onClick={handleCodeSubmit}>Submit</button>
            </div>
            <div>
                <video ref={videoRef} autoPlay playsInline muted />
            </div>
        </div>
    );
};
