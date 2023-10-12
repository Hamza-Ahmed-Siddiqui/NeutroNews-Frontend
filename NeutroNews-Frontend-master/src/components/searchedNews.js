import React from 'react';
import { useLocation, Link } from "react-router-dom";
import alternateimage from '../static/images/news-image.jpg';
import blogcard from './card.js';
 import aryicon from '../static/images/aryicon.png'
 import geoicon from '../static/images/geoicon.png'
 import aajicon from '../static/images/aajicon.png'
 import dunyaicon from '../static/images/dunyaicon.png'
 import samaaicon from '../static/images/samaaicon.png'




// function blogcard(element){
//     return (
//         <div className="post-module body-div1" key={element.id}>
//           <div className="pic1">
//             <img height="200px" width="300px" src={element.newsImage} id={element.id}/>
//           </div>
//           <div className="post-content">
//             <div className="category">{element.category}</div>
//             <h3 className="title_text">{element.newsTitle}</h3>
//             {/* <span style={{ padding:'4px', border:'1px solid', opacity: 0.8, margin:'2px' }}> */}
//             <span>
//               <b> Updated 6 mins ago </b>
//             </span>
//           </div>
//         </div>
//       );


// }





function SearchedNews() {
    const { state } = useLocation();
    const { searchedNews,text } = state
    console.log(state, text);
  return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center mt-3'>
            <div>
                <h3 style={{fontWeight: 300}}>Searches for <b style={{fontWeight: 500}}>{text}</b></h3>
            </div>
            <div>
                <button className="btn_reload" style={{border: 'none',fontSize: '25px',padding: '0 12px 0 12px',background: 'steelBlue', borderRadius: '8px'}}>
                    <Link to='/' style={{color:'#ffff'}}>
                        {'<<'}
                    </Link>
                </button>
            </div>
        </div>

        {searchedNews?.length != 0 ?
            <div>
                <div className="body-div0">
                    <span style={{width:'8px', background:'maroon'}}></span>
                    <h2>
                        ARY NEWS    
                    </h2>
                </div>
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('arynews') ?
                        <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'ARY News'}}
                        key={element.id}
                        >
                        {blogcard(element, 'arynews', aryicon, 'ARY NEWS')}
                        </Link>
                        //   <div className="body-div1" key={element.id}>
                        //      <div className="pic1">
                        //          <img 
                        //          src={element.newsImage} 
                        //          id={element.id} 
                        //          onError={({ currentTarget }) => {
                        //              currentTarget.onerror = null;
                        //              currentTarget.src=alternateimage;
                        //          }}/>
                        //      </div>
                        //      <h6 className='title_text'>{element.newsTitle}</h6>
                        //  </div> 
                        
                        :
                        null
                    ))}
                </div>

                <div className="body-div0">
                    <span style={{width:'8px', background:'orange'}}></span>
                    <h2>
                        GEO NEWS
                    </h2>
                </div>
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('geo.tv') ?
                        <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'GEO News'}}
                        key={element.id}
                        >
                        {blogcard(element, 'geo.tv', geoicon, 'GEO NEWS')}
                        </Link>
                        // <div className="body-div1" key={element.id}>
                        //     <div className="pic1">
                        //         <img 
                        //         src={element.newsImage} 
                        //         id={element.id} 
                        //         onError={({ currentTarget }) => {
                        //             currentTarget.onerror = null;
                        //             currentTarget.src=alternateimage;
                        //         }}/>

                        //     </div>
                        //     <h6 className='title_text'>{element.newsTitle}</h6>
                        // </div>
                        :
                        null
                    ))}
                </div>

                <div className="body-div0">
                    <span style={{width:'8px', background:'red'}}></span>
                    <h2>
                        AAJ NEWS
                    </h2>
                </div>        
                <div className="headwith-3divs">
                {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('aajenglish.tv') ?
                        <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'AAJ News'}}
                        key={element.id}
                        >
                        {blogcard(element, 'aajenglish.tv', aajicon, 'AAJ NEWS')}
                        </Link>
                        // <div className="body-div1" key={element.id}>
                        //     <div className="pic1">
                        //         <img 
                        //         src={element.newsImage} 
                        //         id={element.id} 
                        //         onError={({ currentTarget }) => {
                        //             currentTarget.onerror = null;
                        //             currentTarget.src=alternateimage;
                        //         }}/>

                        //     </div>
                        //     <h6 className='title_text'>{element.newsTitle}</h6>
                        // </div>
                        :
                        null
                ))}
                </div>

                <div className="body-div0">
                    <span style={{width:'8px', background:'steelBlue'}}></span>
                    <h2>
                        DUNYA NEWS
                    </h2>
                </div>        
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('dunyanews.tv') ?
                        <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'DUNYA News'}}
                        key={element.id}
                        >
                        {blogcard(element, 'dunyanews.tv', dunyaicon, 'DUNYA NEWS')}
                        </Link>
                        // <div className="body-div1" key={element.id}>
                        //     <div className="pic1">
                        //         <img 
                        //         src={element.newsImage} 
                        //         id={element.id} 
                        //         onError={({ currentTarget }) => {
                        //             currentTarget.onerror = null;
                        //             currentTarget.src=alternateimage;
                        //         }}/>

                        //     </div>
                        //     <h6 className='title_text'>{element.newsTitle}</h6>
                        // </div>
                        :
                        null
                    ))}
                </div>

                <div className="body-div0">
                    <span style={{width:'8px', background:'blue'}}></span>
                    <h2>
                        SAMAA NEWS
                    </h2>
                </div>
                <div className="headwith-3divs">
                    {searchedNews?.map(element => (
                        element.newsUrl.toString().includes('samaaenglish') ?
                        <Link 
                        to={`/read-news/${element.id}`}
                        state= {{state:element, courtesy:'SAMAA News'}}
                        key={element.id}
                        >
                        {blogcard(element, 'samaaenglish', samaaicon, 'SAMAA NEWS')}
                        </Link>
                        // <div className="body-div1" key={element.id}>
                        //     <div className="pic1">
                        //         <img 
                        //         src={element.newsImage} 
                        //         id={element.id} 
                        //         onError={({ currentTarget }) => {
                        //             currentTarget.onerror = null;
                        //             currentTarget.src=alternateimage;
                        //         }}/>
                        //     </div>
                        //     <h6 className='title_text'>{element.newsTitle}</h6>
                        // </div>
                        :
                        null
                    ))}
                </div>
            </div>
        :
        <div style={{textAlign: 'center',fontSize: '20px',color: 'brown',fontWeight: 600}}>No News Found.</div>
    }
    </div>
  )
}

export default SearchedNews