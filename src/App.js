import New from "./pages/New";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import { Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import { useReducer, useRef, createContext } from "react";

const mockData = [
    {
        id: 1,
        createdDate: new Date("2024-02-19").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2024-04-20").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 3,
        createdDate: new Date("2024-01-07").getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
    },
    {
        id: 4,
        createdDate: new Date("2024-04-18").getTime(),
        emotionId: 4,
        content: "4번 일기 내용",
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            console.log(action.data);
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
        case "DELETE":
            return state.filter(
                (item) => String(item.id) !== String(action.id)
            );
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createdDate, emotionId, content) => {
        //일기 추가
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        console.log(id);
        dispatch({
            type: "UPDATE",
            data: {
                id: id,
                createdDate: createdDate,
                emotionId: emotionId,
                content: content,
            },
        });
        console.log(id);
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider
                value={{ onCreate, onDelete, onUpdate }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/diary/:id" element={<Diary />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="*" element={<Notfound />} />
                    {/* 위의 세 페이지의 url이 아니라면 여기로 */}
                </Routes>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;
