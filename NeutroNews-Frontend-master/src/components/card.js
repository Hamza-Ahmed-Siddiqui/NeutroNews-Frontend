import React from 'react';
import alternateimage from '../static/images/news-image.jpg'




//IMPORT THE FOLLOWING FILES IN THE CODE WHERE YOU WANT TO CALL THE POSTCARD FUNCTION


// import aryicon from '../static/images/aryicon.png'
// import geoicon from '../static/images/geoicon.png'
// import aajicon from '../static/images/aajicon.png'
// import dunyaicon from '../static/images/dunyaicon.png'
// import samaaicon from '../static/images/samaaicon.png'




function nsource(element, linkhas, newsicon, newsname){
    
  return(
  <div className='news-info-container'>    
     {
      element.newsUrl.toString().includes(linkhas) ?
      <div className='news-icon-container'>
          <div className='news-icon'>
              <img height="25px" width="27px" src={newsicon} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src=alternateimage;}}/>
          </div>
          <div className='news-text'>
              {newsname}
          </div>
      </div>
                
      :
      
      <div className='news-icon-container'>
          <div className='news-icon'>
              <img height="25px" width="27px" src={alternateimage}/>
          </div>
          <div className='news-text'>
              News
          </div>
      </div>

     }
  </div>

  );
     }


function blogcard(element, linkhas, newsicon, newsname){
  return (
      <div className="post-module body-div1" key={element.id}>
        <div className="pic1">
          <img height="200px" width="300px" 
              src={element.newsImage} 
              id={element.id}
              onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src=alternateimage;}}
          />
        </div>
        <div className="post-content">
          <div className="category">{element.category}</div>
          <div className='title-container'>
          <h3 className="title_text">{element.newsTitle}</h3>
          </div>
          {/* <span style={{ padding:'4px', border:'1px solid', opacity: 0.8, margin:'2px' }}> */}
          <span>
            <b> {nsource(element, linkhas, newsicon, newsname)} </b>
          </span>
        </div>
      </div>
    );


}

export default blogcard;