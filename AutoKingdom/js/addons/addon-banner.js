const addonBanner = () => {
    $(".addon__banner").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        adaptiveHeight: true,
        lazyLoad: "ondemand",
        pauseOnDotsHover: false,
    });
};
export default addonBanner;