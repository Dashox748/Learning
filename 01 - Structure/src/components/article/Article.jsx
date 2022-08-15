import './article.css';

const Article = ({imgurl,date,title}) =>{
    return (
        <div className="article__container">
            <div className="article__container-thumbnail">
                <img src={imgurl} alt=""/>
            </div>
            <div className="article__container-text">
                <div className="article__container-text-description">
                <p>{date}</p>
                <h1>{title}</h1>
                </div>
                <div className="article__container-text-read">
                    <p>Read Full Article</p>
                </div>
            </div>
        </div>

    )
}
export default Article