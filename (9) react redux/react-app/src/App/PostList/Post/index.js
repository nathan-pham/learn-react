import "./style.css"

const HeartIcon = ({ filled }) => 
    filled
        ? <svg xmlns="http://www.w3.org/2000/svg" className="heart filled" viewBox="0 0 512 512"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" /></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" className="heart" viewBox="0 0 512 512"><title>Heart</title><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>

const Post = ({ title, like, onClick }) => (
    <article className="post">
        <div className="body-wrapper">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGPVc6OH9Z25A/profile-displayphoto-shrink_200_200/0/1602999352112?e=1623283200&v=beta&t=PfcaM5JLCjL-4Uw8ZGMfTa2mZdE7K0guQreozriiOaQ" alt="profile picture" />
            <div className="body">
                <h3 className="username">Nathan Pham <span className="handle">@phamn23</span></h3>
                <p>{ title }</p>
            </div>
        </div>
        <div className="options">
            <span onClick={ onClick }>
                <HeartIcon filled={ like } />
            </span>
        </div>
    </article>

)

export default Post