import "./css/blogSection.css";
const ArticleCard = ({
  title,
  icons = [],
  author,
  butterflyImage,
  description,
  articleImage,
  datetime,
  stats = {},
}) => {
  return (
    <div className="article-info-container">
      {title && <h2>{title}</h2>}
      <hr />

      <div className="beat-container">
        {/* Icons */}
        {icons.length > 0 && (
          <div className="beat-icon-container">
            {icons.map((icon, i) => (
              <a key={i} href={icon.link} className="beat-icon">
                {icon.element}
              </a>
            ))}
          </div>
        )}

        <div className="beat-content">
          <div className="auth-container">
            <div className="auth-info">
              {/* Author */}
              {author && (
                <div className="article-header-main-container">
                  <div className="article-header">
                    {author.image && (
                      <img src={author.image} alt="" className="auth-image" />
                    )}
                    <div className="auth-content">
                      <p className="auth-name">{author.name}</p>
                      <p className="auth-title">{author.title}</p>
                    </div>
                  </div>
                  {butterflyImage && (
                    <img
                      src={butterflyImage}
                      alt=""
                      className="butterfly-image"
                    />
                  )}
                </div>
              )}

              {/* Description */}
              {description && (
                <div className="blog-article-description">
                  <p>{description}</p>
                </div>
              )}

              {/* Article Image */}
              {articleImage && (
                <div className="blog-article-image-container">
                  <img src={articleImage} alt="" />
                </div>
              )}

              {/* Datetime */}
              {datetime && (
                <div className="datetime">
                  <a href="#">{datetime}</a>
                </div>
              )}

              <hr />

              {/* Likes / Comments / Replies */}
              {(stats.likes || stats.comments || stats.replies) && (
                <div className="like-comment-reply-main-container">
                  <div className="like-comment-container">
                    {stats.likes && (
                      <div className="like">
                        <p className="likecount">{stats.likes}</p>
                      </div>
                    )}
                    {stats.comments && (
                      <div className="like">
                        <p className="likecount">{stats.comments}</p>
                      </div>
                    )}
                    {stats.replies && (
                      <div className="like">
                        <p className="likecount">{stats.replies}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
{
  /* <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 1L14.59 7.26L21.5 8.27L16.5 13.14L17.68 20.02L11.5 16.77L5.32 20.02L6.5 13.14L1.5 8.27L8.41 7.26L11.5 1Z" fill="#F09E14" stroke="#F09E14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg> */
}
