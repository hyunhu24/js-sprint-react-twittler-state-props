import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(el => el.username === 'parkhacker');

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          {filteredTweets.length > 0 ? (
            <>
              <div className="myInfo__profile">
                <img src={filteredTweets[0].picture} alt="Profile" />
              </div>
              <div className="myInfo__detail">
                <p className="myInfo__detailName">{filteredTweets[0].username}</p>
                <p>28 팔로워 100 팔로잉</p>
              </div>
            </>
          ): null}
        </div>
      </div>
      <ul className="tweets__mypage">
        {filteredTweets.map(el => (
          <Tweet key={el.id} tweet={el} />
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
