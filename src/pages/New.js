import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    const onSubmit = (input) => {
        //새 일기쓰기 페이지에서 전달받은 데이터들로 일기데이터를 만드는 과정
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav("/", { replace: true });
    };
    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
                }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;
