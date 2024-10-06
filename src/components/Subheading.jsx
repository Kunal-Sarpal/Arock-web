function Subheading() {
    return (
        <div className="container flex justify-between items-top w-full ">
            <div className="left-section">
                <button className="play-btn flex items-center space-x-3">
                    <div className="play-icon flex items-center justify-center">
                        <div className="border-[1px] rounded-full w-12 h-12 flex justify-center items-center text-lg md:text-xl">
                            ►
                        </div>
                    </div>
                    <div className="text-left leading-tight text-xs md:text-base lg:text-sm">
                        PLAY <br /> THE FILM
                    </div>
                </button>
            </div>
            <div className="right-section flex gap-8 text-sm md:text-base lg:text-lg">
                <div className="right-text text-right text-sm">
                    CREATOR <br /> CURATOR
                </div>
                <div className="right-text text-right text-sm">
                    NEW YORK <br /> LOS ANGELES
                </div>
            </div>
        </div>
    );
}

export default Subheading;
