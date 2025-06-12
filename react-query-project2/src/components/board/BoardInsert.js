import {useState,useRef} from 'react'
import {useQuery,useMutation} from "@tanstack/react-query";
import apiClient from "../../http-commons";
import {useNavigate} from "react-router-dom";
function BoardInsert() {
    // 태그 제어 => input
    const nameRef = useRef(null);
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const pwdRef = useRef(null);
    // input 태그의 입력값 받기
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [pwd, setPwd] = useState("");
    const [content, setContent] = useState("");
    const [result, setResult] = useState(null);
    const nav=useNavigate();
    /*
      useQuery : SELECT
      useMutation : INSERT / UPDATE / DELETE
     */
    const {mutate:boardInsert}=useMutation({
        mutationFn: async () => {
            return await apiClient.post("/board/insert", {
                name: name,
                subject: subject,
                content: content,
                pwd: pwd
            })
        },
        onSuccess: (res) => {
            console.log(res)
            if (res.data.msg === 'yes') {
                window.location.href="/board/list"
            } else {
                alert(res.data.msg)
            }

        },
        onError: (err) => {
            console.log(err);
        }
    })

    const insert=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus();
            return;
        }
        if(subject.trim()==="")
        {
            subjectRef.current.focus();
            return;
        }
        if(content.trim()==="")
        {
            contentRef.current.focus();
            return;
        }
        if(pwd.trim()==="")
        {
            pwdRef.current.focus();
            return;
        }
        boardInsert()
    }
    const cancel=()=>{
        nav(-1) //history.back()
    }
    return (
        <div className={"container"}>
            <div className={"row"}>
                <h3 className={"text-center"}>글쓰기</h3>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <th className="text-center" width={"15%"}>이름</th>
                        <td width={"85%"}>
                            <input type={"text"} size={"15"} className={"input-group-sm"}
                                   ref={nameRef}
                                   onChange={(e) => setName(e.target.value)}
                                   value={name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center" width={"15%"}>제목</th>
                        <td width={"85%"}>
                            <input type={"text"} size={"50"} className={"input-group-sm"}
                                   ref={subjectRef}
                                   onChange={(e) => setSubject(e.target.value)}
                                   value={subject}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center" width={"15%"}>내용</th>
                        <td width={"85%"}>
                                         <textarea rows={"10"} cols={"50"} ref={contentRef}
                                                   onChange={(e) => setContent(e.target.value)}
                                                   value={content}
                                         ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center" width={"15%"}>비밀번호</th>
                        <td width={"85%"}>
                            <input type={"password"} size={"15"} className={"input-group-sm"}
                                   ref={pwdRef}
                                   onChange={(e) => setPwd(e.target.value)}
                                   value={pwd}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"2"} className={"text-center"}>
                            <button className={"btn btn-primary btn-sm"} onClick={insert}>글쓰기</button>
                            <button className={"btn btn-primary btn-sm"} onClick={cancel}>취소</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default BoardInsert;