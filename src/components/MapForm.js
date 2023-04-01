
export default function MapForm() {
    return (
        <form className="mapform-css">
            <div>
                <input
                    className="location"
                    placeholder='Where do you want to go?'
                    type="text"
                // name="location"
                // id="location"
                // value={location}
                />
            </div>
            <p className="post-button btn-no-back">Please enter the coordinates now:</p>
            <div className="lnglat-container">
                <div>
                    <input
                        className="lng"
                        type="text"
                        placeholder='Longitude'
                    // name="lng"
                    // id="lng"
                    // value={lng}
                    />
                </div>
                <div>
                    <input
                        className="lat"
                        type="text"
                        placeholder='Latitude'
                    // name="location"
                    // id="location"
                    // value={location}
                    />
                </div>
            </div>
            <button className="search-map">Search the Map!</button>
        </form>
    )
}