import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get_stringed_date";
import usePageTitle from "../hooks/usePageTitle";
const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기`);
    const curDiaryItem = useDiary(params.id);
    if (!curDiaryItem) {
        return <div>데이터 로딩중 ...!</div>;
    }
    const createdDate = curDiaryItem.createdDate;
    const emotionId = curDiaryItem.emotionId;
    const content = curDiaryItem.content;

    const title = getStringedDate(new Date(createdDate));
    return (
        <div>
            <Header
                title={`${title} 기록`}
                leftChild={
                    <Button
                        text={"< 뒤로 가기"}
                        onClick={() => {
                            nav(-1);
                        }}
                    />
                }
                rightChild={
                    <Button
                        text={"수정하기"}
                        onCLick={() => nav(`/edit/${params.id}`)}
                    />
                }
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;
