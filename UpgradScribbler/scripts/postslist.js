//function to open post for editing
function openPost(author, heading, content) {
        const locurl = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
                author.innerText
        )}&content=${encodeURIComponent(content.innerText)}`;
        window.location.href = locurl;
}





