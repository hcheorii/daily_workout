import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState } from "react";
import { useContext } from "react";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date( //1일 0시0분0초 데이터(달의 시작날)
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(), //이전 달의 마지막 날 구하기 (3월의 0일 => 2월의 마지막날)
        pivotDate.getMonth() + 1,
        0,
        2,
        59,
        59
    );
    return data.filter(
        (item) => beginTime <= item.createdDate && item.createdDate <= endTime
    );
};
const Home = () => {
    const data = useContext(DiaryStateContext); //일기 데이터 가져오기
    const [pivotDate, setPivotDate] = useState(new Date());
    const monthlyData = getMonthlyData(pivotDate, data);

    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };
    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${
                    pivotDate.getMonth() + 1
                }월`}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={monthlyData} />
        </div>
    );
};

export default Home;
