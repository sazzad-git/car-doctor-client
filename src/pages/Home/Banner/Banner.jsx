import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  const bannerDescription = (
    <>
      <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="w-1/2 pl-12 text-white space-y-7">
          <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="mr-5 btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="w-full carousel h-[600px]">
      <div id="slide1" className="relative w-full carousel-item">
        <img src={img1} className="w-full rounded-xl" />
        {bannerDescription}
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide4" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img src={img2} className="w-full rounded-xl" />
        {bannerDescription}
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img src={img3} className="w-full rounded-xl" />
        {bannerDescription}
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide2" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img src={img4} className="w-full rounded-xl" />
        {bannerDescription}
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide3" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="relative w-full carousel-item">
        <img src={img5} className="w-full rounded-xl" />
        {bannerDescription}
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide4" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="relative w-full carousel-item">
        <img src={img6} className="w-full rounded-xl" />
        {bannerDescription}
        <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
          <a href="#slide5" className="mr-5 btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
