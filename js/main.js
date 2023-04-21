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

class Main {
    element;
    articleMain
    placeToRenderMain;
  

    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.element = document.createElement("mainHappiness");
        this.element.classList = ("mainHappiness");

        this.articleMain = document.createElement("section");
        this.articleMain.classList = ("MainContent")

        this.render();
    }
    render() {
        this.placeToRenderMain.appendChild(this.element);
        this.element.appendChild(this.articleMain);
    }
}

class leftSection {
    placeToRenderLLeftSection;
    HappinessArticleLeftSection;
    LeftSectionUl;
    ArticleBeginRight
    
    constructor(placeToRenderLLeftSection, ArticleBeginRight) {
        this.ArticleBeginRight = ArticleBeginRight;
        this.placeToRenderLLeftSection = placeToRenderLLeftSection;

        this.HappinessArticleLeftSection = document.createElement("artcile");
        this.HappinessArticleLeftSection.classList = ("LeftSection");

        this.LeftSectionUl = document.createElement("__LeftSectionUl");
        this.LeftSectionUl.classList = ("LeftSection__LeftSectionUl");
    } 
    //Elk keer random data + nieuwe foto:
    makeCardsFromData(data) {
        let randomnummer1 = Math.floor(Math.random() * 4);
        let randomnummer2 = randomnummer1 + 4;
        for (let i = randomnummer1; i < randomnummer2; i++) {

            this.listLeftArticle = document.createElement("LeftSectionLi");
            this.listLeftArticle.classList = "LeftSection__LeftSectionLi";

            this.listLeftImageArticle = document.createElement("img");
            this.listLeftImageArticle.classList = "LeftSection__LeftSectionImage";

            this.datumLeftArticle = document.createElement("p");
            this.datumLeftArticle.classList = "LeftSection__LeftSectionDatum";

            this.titleLeftArticle = document.createElement("h3");
            this.titleLeftArticle.classList = "LeftSection__LeftSectionTitle";

            //Datum, titel en image weergave van de left section:
            this.datumLeftArticle.innerHTML = data[i]["date (dd-mm-yyyy)"];
            this.titleLeftArticle.innerHTML = data[i]["title"];
            this.listLeftImageArticle.src = data[i]["image"];

            this.LeftSectionUl.appendChild(this.listLeftArticle);
            this.listLeftArticle.appendChild(this.listLeftImageArticle);
            this.listLeftArticle.appendChild(this.datumLeftArticle);
            this.listLeftArticle.appendChild(this.titleLeftArticle);

            //Bij klikken op foto van de json bestand veranderd de onderstaande:
            this.listLeftArticle.onclick = () => {
                this.ArticleBeginRight.titleDetail.innerHTML = data[i]["title"];
                this.ArticleBeginRight.datumDetail.innerHTML = data[i]["date (dd-mm-yyyy)"];
                this.ArticleBeginRight.imageDetail.src = data[i]["image"];
                this.ArticleBeginRight.paragraphDetail.innerHTML = data[i]["summary"];
                this.ArticleBeginRight.link.href = data[i]["url"];
                this.ArticleBeginRight.audio.src = data[i]["audio"];
            };
        }

        this.render();
    }

    render() {
        this.placeToRenderLLeftSection.appendChild(this.HappinessArticleLeftSection);
        this.HappinessArticleLeftSection.appendChild(this.LeftSectionUl);
    }

}

class RightSection {
    placeToRenderRightPanel;
    SectionRight;
    SectionRight__SectionRightDiv;
    SectionRight__SectionRightDatum;
    titleDetail;
    paragraphDetail;
    imageDetail;
    buttonDetail;
    audio;
    link;
    constructor(placeToRenderRightPanel) {
        this.placeToRenderRightPanel = placeToRenderRightPanel;

        this.SectionRight = document.createElement("article");
        this.SectionRight.classList = "SectionRight";

        this.SectionRight__SectionRightDiv = document.createElement("__SectionRightDiv");
        this.SectionRight__SectionRightDiv.classList = "SectionRight__SectionRightDiv";

        this.imageDetail = document.createElement("img");
        this.imageDetail.classList = "SectionRight__SectionRightImage";

        this.datumDetail = document.createElement("h3");
        this.datumDetail.classList = "SectionRight__SectionRightDatum";

        this.titleDetail = document.createElement("h3");
        this.titleDetail.classList = "SectionRightSectionRightTitle";

        this.paragraphDetail = document.createElement("p");
        this.paragraphDetail.classList = "SectionRight__SectionRightContent";

        this.buttonDetail = document.createElement("__SectionRightDiv");
        this.buttonDetail.classList = "SectionRight__SectionRightBtn";

        this.audio = document.createElement("audio");
        this.audio.classList = "SectionRight__audio";
        this.audio.setAttribute("controls", true)

        this.link = document.createElement("a");
        this.link.classList = ("SectionRight__SectionRightSource");
        

        this.render();
    }

    render() {
        this.placeToRenderRightPanel.appendChild(this.SectionRight);

        this.SectionRight.appendChild(this.SectionRight__SectionRightDiv);
        this.SectionRight.appendChild(this.paragraphDetail);
        this.SectionRight.appendChild(this.buttonDetail);

        this.SectionRight__SectionRightDiv.appendChild(this.imageDetail);
        this.SectionRight__SectionRightDiv.appendChild(this.datumDetail);
        this.SectionRight__SectionRightDiv.appendChild(this.titleDetail);

        this.buttonDetail.appendChild(this.audio);
        this.buttonDetail.appendChild(this.link);
    }

    Contentrender(data) {
        //header
        this.imageDetail.src = data[0]["image"];
        this.datumDetail.innerHTML = data[0]["date (dd-mm-yyyy)"];
        this.titleDetail.innerHTML = data[0]["title"];
        //text
        this.paragraphDetail.innerHTML = data[0]["summary"];
        //audio
        this.audio.src = data[0]["audio"];
        //link
        this.link.innerHTML = "source";
        this.link.href = data[0]["url"];
    }

}
