import { useEffect, useRef, useState,Fragment } from 'react';

interface Message {
    id: number;
    user: string;
    text: string;
    timestamp: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [text, setText] = useState('');
    const [user] = useState('User1'); // 실제 로그인 사용자로 대체 가능
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:4100');

        ws.current.onopen = () => console.log('WebSocket Connected');

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'init') {
                setMessages(message.data);
            } else if (message.type === 'new') {
                setMessages((prev) => [...prev, message.data]);
            }
        };

        ws.current.onclose = () => console.log('WebSocket Disconnected');

        return () => {
            ws.current?.close();
        };
    }, []);

    const handleSend = () => {
        if (ws.current && text.trim()) {
            ws.current.send(JSON.stringify({ user, text }));
            setText('');
        }
    };

    return (
        <Fragment>
            <div className="breadcumb-area" style={{"backgroundImage": "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>채팅</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        <table className={"table"}>
                            <tr>
                                <td>
                                    <div style={{ width: 450,height: 300, overflowY: 'scroll' }}>
                                        {messages?.map((msg) => (
                                            <div key={msg.id}>
                                                <strong>{msg.user}:</strong> {msg.text}
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Enter your message"
                                    className={"input-sm"}
                                    size={50}
                                    style={{"float":"left"}}
                                />
                                <button onClick={handleSend} className={"btn-sm btn-primary"}>Send</button>
                            </tr>
                        </table>



                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Chat;