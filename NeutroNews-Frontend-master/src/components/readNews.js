import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import alternateimage from '../static/images/news-image.jpg'


function ReadNews() {
  const location = useLocation();
  const {state:{state, courtesy}} = location;

  const GoTheSource = (url) => {
    window.open(url, '_blank', 'noreferrer');
    
  };




  return (
    



    <div className='container mt-5'>
      
      <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
      <div className='d-flex justify-content-between align-items-center'>
        <button className="btn_reload mb-2" style={{border: 'none',fontSize: '25px',padding: '0 12px 0 12px',background: 'steelBlue', borderRadius: '8px'}}>
          
          <Link to='/' style={{color:'#ffff'}}>
            

            {'<<'}
          </Link>
        </button>
        <button onClick={() => GoTheSource(state?.newsUrl)} className='btn btn-sm btn-secondary'>
          Go to Source
        </button>
        
      </div>
      
      <div className='mb-3'>
        <h2>{state?.newsTitle}</h2>
      </div>
      <div>
        <img 
        src={state?.newsImage}
        style={{width: '700px', maxWidth: '100%'}}
        alt="newsimage"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src=alternateimage;
        }}
        />
      </div>
      <div className='mt-2 d-flex justify-content-between align-items-center' style={{width: '700px', maxWidth: '100%'}}>
        <span style={{color:'grey'}}><span style={{fontWeight:500}}>Author:</span> Web Desk</span>
        <span style={{ padding:'4px', border:'1px solid', opacity: 0.8, margin:'2px' }}>{state?.sentiment}</span>
        {courtesy!=undefined || courtesy!=null ?<span style={{color:'grey'}}><span style={{fontWeight:500}}>Courtesy:</span> {courtesy}</span> : null}
      </div>
      <div className='mt-3' style={{width: '800px', maxWidth: '98%'}}><p>{state?.newsText}</p></div>
    </div>
    
  )
}

export default ReadNews