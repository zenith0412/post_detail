import React from 'react'
import profileImg from '../../assets/profile_img.svg'
import varifiedIcon from '../../assets/varifiedIcon.svg'
import postImage from '../../assets/postImg.jpg'
import likeIcon from '../../assets/loveIcon.svg'
import commnetIcon from '../../assets/comment.svg'
import saveIcon from '../../assets/saveIcon.svg'
import './Post.css'

const Post = () => {
    const tags = ['2023', 'TODAYISMONDAY', 'TOP', 'POPS!', 'WOW', 'ROW']
    return (
        <main>
            <div className="com_user_info">
                <section className="post_profile_section">
                    <div className="com_post_profile_img">
                        <img src={profileImg} alt="" />
                    </div>
                    <div>
                        <div className="com_name_section">
                            <h5 className='com_post_user_name'>안녕 나 응애 </h5>
                            <img src={varifiedIcon} alt="" />
                            <p className="com_post_time com_light_font">1일전</p>
                        </div>
                        <div>
                            <p className='com_light_font'>165cm . 53kg</p>
                        </div>
                    </div>
                </section>
                <section>
                    <button className="com_btn">
                        팔로우
                    </button>
                </section>
            </div>
            <div className="post_main_content">
                <h3 className="post_h3_content">
                    지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
                </h3>
                <div className="post_p_content">
                    <p>
                        지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
                        혹시 어떤 상품이 제일 괜찮았어?
                    </p>
                    <p>
                        후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
                        제일 재밌었다던데 맞아???
                    </p>
                    <p>
                        올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
                        아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
                        있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
                    </p>
                </div>
                <div className="post_tags_list">
                    {
                        tags.map((tag, index) => {
                            return (
                                <p className='post_tag' key={index}>#{tag}</p>
                            )
                        })
                    }
                </div>
                <div className="post_image">
                    <img src={postImage} alt="post image" />
                </div>
                <div className="post_actions">
                    <div className="com_post_like">
                        <img src={likeIcon} alt="" />
                        <p>5</p>
                    </div>
                    <div className="com_comment_like">
                        <img src={commnetIcon} alt="" />
                        <p>3</p>
                    </div>
                    <div className="post_save">
                        <img src={saveIcon} alt="" />
                        <p>...</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Post