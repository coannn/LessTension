import * as React from 'react';
import DASH from '../../image/DASH.png'
import number from '../../image/number.png'
import exercise from '../../image/exercise.png'
import Carousel from 'react-bootstrap/Carousel';


function CarouselMain(props) {
  
  return (

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<Carousel>
        <Carousel.Item>
        <img class="testimonials-pic d-block w-100" src={number} alt="Number"></img>
          <Carousel.Caption>
            <a href='https://www.cdc.gov/bloodpressure/about.htm'><h1>Pressure Levels</h1></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img class="testimonials-pic" src={DASH} alt="DASH-Diet"></img>
          <Carousel.Caption>
          <a href="https://www.uaex.uada.edu/counties/miller/news/fcs/meal-prep-healthy-eating/Lowering-Your-Blood-Pressure-with-the-DASH-Eating-Plan.aspx"><h1>DASH Diet</h1></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img class="testimonials-pic" src={exercise} alt="exercise"></img>
          <Carousel.Caption>
          <a href="https://www.honorhealth.com/healthy-living/6-best-exercises-control-high-blood-pressure"><h1>The 6 best exercises to control high blood pressure</h1></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
    // <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    // <div class="carousel-inner">
    //     <div class="carousel-item active">
    //         <h1> Pressure Levels </h1>
    //         <img class="testimonials-pic d-block w-100" src={number} alt="Number"></img>
    //     </div>
    //     <div class="carousel-item">
    //         <a href="https://www.uaex.uada.edu/counties/miller/news/fcs/meal-prep-healthy-eating/Lowering-Your-Blood-Pressure-with-the-DASH-Eating-Plan.aspx"><h1>DASH Diet</h1></a>
    //         <img class="testimonials-pic d-block w-100" src={DASH} alt="DASH-Diet"></img>
    //     </div>
    // </div>
    // <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    // <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    // <span class="visually-hidden">Previous</span>
    // </button>
    // <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    // <span class="carousel-control-next-icon" aria-hidden="true"></span>
    // <span class="visually-hidden">Next</span>
    // </button>
    // </div>
);
}
export default CarouselMain;