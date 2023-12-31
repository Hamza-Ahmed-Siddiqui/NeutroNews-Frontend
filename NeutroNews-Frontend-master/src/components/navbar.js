import React, { useState, useContext, useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom";
import {UserContext} from '../api/context';

function Navbar() {





    const {news, scrapeNews, isScrape} = useContext(UserContext)
    const [text, setText]=useState('');
    const [searchedNews, setSearchedNews] = useState([]);
    const navigate = useNavigate();





    const [theme, setTheme] = useState(
            localStorage.getItem('theme') || 'light'
          );
          const toggleTheme = () => {
            if (theme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
          };
          useEffect(() => {
            localStorage.setItem('theme', theme);
            document.body.className = theme;
          }, [theme]);






    const submitSearch=(e)=>{
        e.preventDefault();
        setSearchedNews([]);

        news?.forEach(element => {
            const title = element.newsTitle.toLowerCase();
            const searchtext = text.toLowerCase();
            if(title.includes(searchtext.charAt(0) + searchtext.slice(1))){
                searchedNews.push(element);
            }
            else if(title.includes(searchtext)){
                searchedNews.push(element);
            }
            navigateToSearchedNews();
            setText('');
        })
    }
    const navigateToSearchedNews=()=>{
        if(searchedNews.length !== 0 || searchedNews !== []){
            navigate("/searched-news",{state:{searchedNews,text}});
        }
        else{
            alert("No news found.");
        }
    }
  return (
    <div>
        <div className="top d-flex justify-content-around align-items-center">
            <img className="FUUAST-logo" src="../static/images/federal-urdu-university-logo.png" alt="FUUAST logo" />
            <img className="NN-logo" src="../static/images/NNlogoFinal.png" alt="NeutroNews" />
            <>.</>
        </div>
    
        {/* <nav>
            <input type="checkbox" id="nav-toggle"/>
            <ul className="unor">
                <li><a href="#">HOME</a></li>
                <li><a href="#">LATEST NEWS</a></li>
                <li><a href="#">PAKISTAN</a></li>
                <li> <a href="#">POLITICS</a> </li>
                <li> <a href="#">BUSINESS</a> </li>
                <li> <a href="#">SPORTS</a> </li>
                <div className="right">
                    <form style={{display: 'flex', alignItems:'center'}} onSubmit={submitSearch}>
                        <input type="text" name="news" value={text} onChange={e=>setText(e.target.value)} placeholder="Search News.." style={{margin:'0 5px 0 0', padding: '0 0 0 5px', height: '34px', width: '250px'}}/>
                        <button type="submit" style={{background: 'transparent', border: 'none'}} className="btn-submit_news">
                            <img className="search-icon" src="../static/images/search-icon.png" alt="search icon"/>
                        </button>
                    </form>
                </div>
            </ul>
            <label className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav> */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="myHeader">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto nav_initial" style={{alignItems:'center'}}>
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/'}>Home</Link>
                    </li>
                    <li>
                        <button className="btn btn-secondary btn-sm" disabled={isScrape ? true : false} type="button" onClick={scrapeNews}>
                            {isScrape ?
                            <span>
                            <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                            Scraping...
                            </span>
                            : <span>Scrape</span>
                            }
                        </button>
                    </li>



                    <li>

                    <div > {/*className={`App ${theme}`}>*/}
                    <label class="tswitch">
                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                      
                        <span class="tslider"></span>
                       
                    </label>
                    </div>
                    </li>



                </ul>
                <span>
                    <form className='d-flex align-items-center mr-3' onSubmit={submitSearch}>
                        <input type="text" name="news" value={text} onChange={e=>setText(e.target.value)} placeholder="Search News.." style={{margin:'0 5px 0 0', padding: '0 0 0 5px', height: '34px', width: '300px'}}/>
                        <button type="submit" style={{background: 'transparent', border: 'none'}} className="btn-submit_news">
                            <img className="search-icon" src="../static/images/search-icon.png" alt="search icon"/>
                        </button>
                    </form>
                </span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar