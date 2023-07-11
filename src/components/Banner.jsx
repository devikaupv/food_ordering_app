import Button from "./elements/Button";
const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Order your cravings now!
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                   Try this out!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-green-500 hover:text-green-600 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={require("../assets/images/pizza_banner.png")} alt="banner" className="max-h-95 rounded-full" />
            </div>
        </div>
    )
}
export default Banner;