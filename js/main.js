class DataFromApi {
    data;

    async GetData() {
        await fetch("./data/data.json").then(function (response) {
            return response.json();
        }).then((data) => {
            this.data = data.episodes;
        });
        return this.data;
    }
}

class Header {
    placeToRenderHeader;
    header;
    headerFigure;
    headerImage;
    headerHeading;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.header = document.createElement("HappinesHeader");
        this.header.classList = ("HappinesHeader");
        this.headerFigure = document.createElement("headerfigure");
        this.headerFigure.classList = ("HappinesHeader__headerfigure");
        this.headerImage = document.createElement("img");
        this.headerImage.classList = ("HappinesHeader__headerimage");
        this.headerImage.src = "./images/Logo.webp"
        this.headerHeading = document.createElement("h1");
        this.headerHeading.classList = ("HappinesHeader__title");
        this.headerHeading.innerHTML = "Collection of Amsterdam";
        this.render();
    }

    render() {
        this.placeToRenderHeader.appendChild(this.header);
        this.header.appendChild(this.headerFigure);
        this.header.appendChild(this.headerHeading);
        this.headerFigure.appendChild(this.headerImage);
    }
}