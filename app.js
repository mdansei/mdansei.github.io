import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router'
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom'

const Home = () => (

    <div>
        <p>اسمي عبدالرحمن سليمان الدويغري، طالب علوم حاسب في جامعة القصيم.</p>
        <p>احب التعلم عموما، وخصوصاً في العلوم الطبيعية واحب التأمل والتفكير.</p>
        <p>
            احترم الاشخاص العصاميين والذين يعرفون مايريدون من انفسهم ومن الناس حولهم وايضا يعرفون ماذا يريدون في المستقبل او على الاقل
            حاولوا ذلك. ايضا احب الإتقان في العمل عموماً على قدر الاستطاعة والمعرفة. اقرأ بشكل شبه يومي، اعمل على تطوير ذاتي
            في جميع المجالات. اؤمن بقدرة الانسان على التغيير للأفضل.

            </p>
        <br />


        <div>
            <a href="https://twitter.com/MaddoDev" target="_blank">
                <i className="fab fa-twitter" style={{ color: "#1da1f2" }}></i>
            </a>

            <a href="https://github.com/mdansei" target="_blank">
                <i className="fab fa-github" style={{ color: "black" }}></i>
            </a>
        </div>
    </div>

)

const Poems = () => (
    <div>
        <q className="quote">
            <p>عَلى قَدْرِ أهْلِ العَزْم تأتي العَزائِمُ&#160; &#160; &#160; &#160; وَتأتي علَى قَدْرِ الكِرامِ المَكارمُ
                <br />وَتَعْظُمُ في عَينِ الصّغيرِ صغارُها&#160; &#160; &#160; &#160; وَتَصْغُرُ في عَين العَظيمِ العَظائِمُ</p>
        </q>
        <br/>
        <br/>
        <q className="quote">
            <p>وَمَنْ يَجِدُ الطّرِيقَ إلى المَعَالي&#160; &#160; &#160; &#160; فَلا يَذَرُ المَطيَّ بِلا سَنَامِ
                <br />وَلم أرَ في عُيُوبِ النّاسِ شَيْئاً&#160; &#160; &#160; &#160; كَنَقصِ القادِرِينَ على التّمَامِ</p>
        </q>
        <br/>
        <br/>
        <q className="quote" >
            <p>سَيعْلَمُ الجَمعُ ممّنْ ضَمّ مَجلِسُنا&#160; &#160; &#160; &#160; بأنّني خَيرُ مَنْ تَسْعَى بهِ قَدَمُ
                <br />أنَا الذي نَظَرَ الأعْمَى إلى أدَبي&#160; &#160; &#160; &#160;وَأسْمَعَتْ كَلِماتي مَنْ بهِ صَمَمُ</p>
        </q>
    </div>

)

const Menu = () => (
    <div>
        <ul className="menu">
            <li><Link to="/">الصفحة الرئيسية</Link></li>
            <li><Link to="/poems">ابيات شعر</Link></li>
        </ul>
    </div>
)




ReactDOM.render(
    <Router>
        <div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/poems" component={Poems} />

            </Switch>
        </div>
    </Router>
    , document.getElementById('app'))