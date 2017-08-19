const axios = require('axios')

const urlTypeCollection = {
  latest: 'https://x.bw2.me/api/topics/latest.json',
  hot: 'https://x.bw2.me/api/topics/hot.json',
  nodeAll: 'https://x.bw2.me/api/nodes/all.json',
  node: 'https://x.bw2.me/api/topics/show.json?node_name=',
  user: 'https://x.bw2.me/api/topics/show.json?username=',
  comm: 'https://x.bw2.me/api/replies/show.json?topic_id=',
  article: 'https://x.bw2.me/api/topics/show.json?id=',
}
const config = {
  isFinish: false,
  getData(urlType, params, callback){
    if (urlType in urlTypeCollection) {
      const that = this
      let url = urlTypeCollection[urlType]
      const urlLen = url.length
      url[urlLen - 1] === '=' && (url += params)
      axios.get(url)
      .then((res)=>{
        callback(res.data)
        that.setFinished()
      }).catch((err)=>{
        console.log(err)
      })
    }
    else {
      return false
    }
  },
  setFinished(){
    this.isFinish = true
  }
}

export default config;