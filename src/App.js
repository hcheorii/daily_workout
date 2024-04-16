import New from "./pages/New";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";
//1. "/" : 모든 일기를 조회하는 Home 페이지
//2. "/new" : 새로운 일기를 작성하는 New 페이지
//3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
    return (
        <>
            <Header
                title={"Header"}
                leftChild={<Button text={"Left"} />}
                rightChild={<Button text={"Right"} />}
            />
            <Button
                text={"123"}
                onClick={() => {
                    console.log("클릭");
                }}
            ></Button>
            <Button
                text={"123"}
                onClick={() => {
                    console.log("클릭");
                }}
                type={"NEGATIVE"}
            ></Button>
            <Button
                text={"123"}
                onClick={() => {
                    console.log("클릭");
                }}
                type={"POSITIVE"}
            ></Button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="*" element={<Notfound />} />
                {/* 위의 세 페이지의 url이 아니라면 여기로 */}
            </Routes>
        </>
    );
}

export default App;
