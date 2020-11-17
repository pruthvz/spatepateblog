document.querySelector("#submitBtn").addEventListener("click",
function(){
    let postAuthor = document.querySelector("#author").value;
    let postTitle = document.querySelector("#postTitle").value;
    let postContent = document.querySelector("#postContent").value;
    let postDate = document.querySelector("#postDate").value;

    if(
        postAuthor === "" ||
        postTitle === "" ||
        postContent === "" ||
        postDate === ""
    ){
        alert("failed!")
    }else{
        db.collection("posts").doc().set({
            author: postAuthor,
            createdAt: postDate,
            postName: postTitle,
            postContent: postContent
        })
        clear();
        console.log("blog posted!");
    }
})


function clear(){
    document.getElementById('author').value = '';
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('postDate').value = '';

}