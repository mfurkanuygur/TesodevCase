import { useState } from "react";
import SliderImg from "../../assets/images/SliderImg.png"
import leftArrow from "../../assets/images/leftArrow.svg"
import rightArrow from "../../assets/images/rightArrow.svg"

const datas = [
    { id: 1, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 2, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 3, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 4, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 5, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },
    { id: 6, img: SliderImg, text: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate", writer: "1h ago · by Troy Corlson" },

];

const Slider = () => {
    const [sliderNumber, setSliderNumber] = useState(0)
    const prev = () => {
        sliderNumber == 0 ? setSliderNumber(3) : setSliderNumber(sliderNumber - 3)
    }
    const next = () => {
        sliderNumber == 3 ? setSliderNumber(0) : setSliderNumber(sliderNumber + 3)
    }
    return (
        <section className="carousel">
            <div className="carousel-contents">
                {datas.slice(sliderNumber, sliderNumber + 3).map(data =>
                    <div key={data?.id}>
                        <p>{data.id}</p>
                        <img src={SliderImg} alt="slider-img" />
                        <p>{data?.text}</p>
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


