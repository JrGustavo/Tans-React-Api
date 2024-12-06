
import axios from 'axios'

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
      //Todo: APi key de github
    }
})


githubApi.get('/labels').then((r) => {
  console.log(r.data)
}
)
