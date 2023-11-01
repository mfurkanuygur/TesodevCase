import { useState } from "react";
import SliderImg from "../../assets/images/SliderImg.png"
import Test from "../../assets/images/test.jpg"
import leftArrow from "../../assets/images/leftArrow.svg"
import rightArrow from "../../assets/images/rightArrow.svg"

const datas = [
    { id: 1, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 2, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 3, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 4, img: Test, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 5, img: Test, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 6, img: Test, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },

];

const Slider = () => {
    const [sliderContentCount, setSliderContentCount] = useState(0)
    const prev = () => {
        sliderContentCount == 0 ? setSliderContentCount(3) : setSliderContentCount(sliderContentCount - 3)
    }
    const next = () => {
        sliderContentCount == 3 ? setSliderContentCount(0) : setSliderContentCount(sliderContentCount + 3)
    }
    return (
        <section className="carousel">
            <h3>Top News</h3>
            <div className="carousel-contents">
                {datas.slice(sliderContentCount, sliderContentCount + 3).map(data =>
                    <div key={data?.id}>
                        <img src={data.img} alt="slider-img" />
                        <p> {data.id}/{data?.text}</p>
                        <p>{data?.writer}</p>
                    </div>
                )}
            </div>
            <div className="carousel-buttons">
                <button onClick={() => prev()}><img src={leftArrow} alt="left" /></button>
                <button onClick={() => next()} ><img src={rightArrow} alt="right" /></button>
            </div>
        </section>
    );
}
export default Slider


