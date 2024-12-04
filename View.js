import React from "react";
import "./View.css";

const View = () => {
  return (
    <div className="view-container">
      <h1>Viewer Content</h1>
      
      <section className="report-section">
        <h2>Recent Report</h2>
        <p>
         Owl city is a masterpiece
        </p>
        <a href="https://www.ebay.com/sch/i.html?_nkw=owl%20city%20albums&norover=1&mkevt=1&mkrid=711-34001-13078-0&mkcid=2&mkscid=102&keyword=owl%20city%20albums&crlp=_&MT_ID=&geo_id=&rlsatarget=kwd-76622552721608:loc-90&adpos=&device=c&mktype=&loc=143821&poi=&abcId=&cmpgn=418333415&sitelnk=&adgroupid=1225956478483137&network=o&matchtype=e&msclkid=9667cbba381c1d2c2e96acf5da82a695" className="view-link">View Full Report</a>
      </section>
      
      <section className="image-gallery">
        <h2>Image Gallery</h2>
        <div className="gallery">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c0/ef/b6/c0efb659-f814-c87c-da6c-112609f5b110/5054526493100_1.jpg/1200x1200bf-60.jpg"
            alt="Sample 1"
            className="gallery-image"
          />
          <img
            src="https://skream.jp/news/assets_c/2013/07/Album_All_Things_Bright_and_Beautiful_Cover-thumb-1200xauto-1238.jpg"
            alt="Sample 2"
            className="gallery-image"
          />
          <img
            src="http://vignette3.wikia.nocookie.net/owlcity/images/1/1c/Owlcityoceaneyesdeluxeedition.jpg/revision/latest?cb=20150109212359"
            alt="Sample 3"
            className="gallery-image"
          />
        </div>
      </section>

      <section className="description-section">
        <h2>Description</h2>
        <p>
          This is viewer area of the owl city fandome
        </p>
      </section>
    </div>
  );
};

export default View;
