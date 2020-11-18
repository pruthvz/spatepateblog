 <!-- My blogs update here -->

    <div class="my-blogs container">
        <h3></h3><!-- Start BawkBox Code--><script data-sil-id="5fb40eb3fb5c3d001dfad726">var loadWidget = function() { var d = document, w = window, l = window.location,p = l.protocol == "file:" ? "http://" : "//"; if (!w.WS) w.WS = {}; c = w.WS; var m=function(t, o){ var e = d.getElementsByTagName("script"); e=e[e.length-1]; var n = d.createElement(t); if (t=="script") {n.async=true;} for (k in o) n[k] = o[k]; e.parentNode.insertBefore(n, e)}; m("script", { src: p + "bawkbox.com/widget/blog/5fb40eb3fb5c3d001dfad726?page=" +encodeURIComponent(l+''), type: 'text/javascript' }); c.load_net = m; }; if(window.Squarespace){ document.addEventListener('DOMContentLoaded', loadWidget); setTimeOut(function(){ document.addEventListener('DOMContentLoaded', loadWidget); }, 3000) } else { loadWidget() } </script><div class="sil-widget-blog sil-widget" id="sil-widget-5fb40eb3fb5c3d001dfad726"><a href="//bawkbox.com/install/blog"></a></div><!-- End BawkBox Code-->
    </div>
    <!-- My blogs update here -->

/_ SECTION STYLING _/
.section {
padding: 100px 0;
position: relative;
}
.gray-bg {
background-color: #f5f5f5;
}
img {
max-width: 100%;
}
img {
vertical-align: middle;
border-style: none;
}
/_ About Me
---------------------_/
.about-text h3 {
font-size: 45px;
font-weight: 700;
margin: 0 0 6px;
}
/_ RESPONSIVENESS _/
@media (max-width: 767px) {
.about-text h3 {
font-size: 35px;
}
}
.about-text h6 {
font-weight: 600;
margin-bottom: 15px;
}
@media (max-width: 767px) {
.about-text h6 {
font-size: 18px;
}
.section {
height: auto !important;
}
}
/_ RESPONSIVENESS _/

.about-text p {
font-size: 18px;
max-width: 500px;
}
.about-text p mark {
font-weight: 600;
color: #20247b;
}

.about-list {
padding-top: 10px;
}
.about-list .media {
padding: 5px 0;
}
.about-list label {
color: #20247b;
font-weight: 600;
width: 88px;
margin: 0;
position: relative;
}
.about-list label:after {
content: "";
position: absolute;
top: 0;
bottom: 0;
right: 11px;
width: 1px;
height: 12px;
background: #20247b;
-moz-transform: rotate(15deg);
-o-transform: rotate(15deg);
-ms-transform: rotate(15deg);
-webkit-transform: rotate(15deg);
transform: rotate(15deg);
margin: auto;
opacity: 0.5;
}
.about-list p {
margin: 0;
font-size: 15px;
}

mark {
background-image: linear-gradient(
rgba(252, 83, 86, 0.6),
rgba(252, 83, 86, 0.6)
);
background-size: 100% 3px;
background-repeat: no-repeat;
background-position: 0 bottom;
background-color: transparent;
padding: 0;
color: currentColor;
}
.theme-color {
color: #fc5356;
}
.dark-color {
color: #20247b;
}

/_ SECTION HEIGHT _/
.section {
height: 100vh;
}
