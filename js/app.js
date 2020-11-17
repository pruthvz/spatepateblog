 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAxIgTL9cS7E-yhta29698mn7w2Dkta6K0",
    authDomain: "pruthvi-15ecc.firebaseapp.com",
    databaseURL: "https://pruthvi-15ecc.firebaseio.com",
    projectId: "pruthvi-15ecc",
    storageBucket: "pruthvi-15ecc.appspot.com",
    messagingSenderId: "651540600444",
    appId: "1:651540600444:web:3c56799cfa3a9153b61bf9"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection")
const db = firebase.firestore();

// create post
function createPost(author,title,time,content){
    let div = document.createElement("div");
    div.setAttribute("class", "card card-body m-2");
    div.style.width = "25rem"

    let h2 = document.createElement("h2")
    h2.setAttribute("class", "card-title")
    let h6 = document.createElement("h6")
    h6.setAttribute("class", "card-subtitle text-muted mb-2")
    let p = document.createElement("p")
    p.setAttribute("class", "card-text")
    let small = document.createElement("small")

   
    h2.textContent = title;
    h6.textContent = author;
    small.textContent = time;
    p.textContent = content;

    div.appendChild(h2)
    div.appendChild(h6)
    div.appendChild(p)
    div.appendChild(small)



    postCollection.appendChild(div);
}

//   Get post function
function getPosts(){
    db.collection("posts").get().then(snapshot =>{
        snapshot.docs.forEach(docs =>{
            createPost(
                docs.data().author,
                docs.data().postName,
                docs.data().createdAt,
                docs.data().postContent,
            )
        })
    }).catch(err =>{
        console.log(err);
    })
}
getPosts();