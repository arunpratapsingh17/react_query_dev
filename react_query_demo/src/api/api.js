export const fetchPosts =  async() => {
    console.log("debugger ftehposts")
    const resp = await fetch('http://localhost:3000/posts?_sort=-id');
    const postData = await resp.json();
    return postData
}