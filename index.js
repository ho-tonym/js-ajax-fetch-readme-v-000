const app = "I don't do much.";
const token = '750d0a5ed8993c1d82b415f56ddc95f00d17b577'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json)) 
