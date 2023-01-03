import { Component } from "react";
import {fetchArticlesByTopic} from "../services/api";
import ArticleList from "./ArticleList";


class App extends Component {
  state = {
    articles: [],
    topic: "react",
    isLoading: false,
    error: null
  };

  async componentDidMount() {
    this.setState({ isLoading: true })
    
    try {
      const articles = await fetchArticlesByTopic(this.state.topic)
         this.setState({articles, isLoading:false})
    } catch (error) {
      console.log("error: ", error)
      this.setState({error})
    } finally {
      this.setState({isLoading:false})
    }
  }

  updateArticles = (topic) => {
    console.log("updatedArticles: ", topic)
    this.setState({ topic, isLoading: true }, async () => {
      const articles = await fetchArticlesByTopic(this.state.topic)
      this.setState({ articles, isLoading: false });
    })
  }
  render() {
    const { articles, isLoading, error} = this.state;
    return (
      <>
        <h1>Hello!!!</h1>

        <button onClick={() => this.updateArticles("react")}>React</button>
        <button onClick={()=> this.updateArticles("css")}>CSS</button>

        {error && <div>Something went wrong... :( </div>}
        
        {isLoading ? (
          <p>Please wait....</p>
        ) : (
            <div>
              {articles.length > 0 && (
                <ArticleList articles={articles} />
              )}
            </div>
        )};
        
       
      </>
    );
  }
}

export default App;
