import React from 'react'
import profileImg from '../../assets/profile_img.svg'
import varifiedIcon from '../../assets/varifiedIcon.svg'
import likeIcon from '../../assets/loveIcon.svg'
import commnetIcon from '../../assets/comment.svg'
import otherUserIcon from '../../assets/otherUserIcon.svg'
import './Comments.css'

const Comments = () => {
    return (
        <main>
            <div className="com_user_info comment_user">
                <section className="comment_profile_section">
                    <div className="com_post_profile_img">
                        <img src={profileImg} alt="" />
                    </div>
                    <div>
                        <div className="com_name_section">
                            <h5 className='com_post_user_name'>안녕 나 응애 </h5>
                            <img src={varifiedIcon} alt="" />
                            <p className="com_post_time com_light_font">1일전</p>
                        </div>
                    </div>
                </section>
                <section>
                    <p style={{ fontSize: '14px', fontWeight: 'bolder' }}>. . .</p>
                </section>
            </div>
            <div className="user_comment" >
                <p>
                    어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                    우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                    아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                    괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                    꼭 봐주세용~!
                </p>
            </div>
            <div className=" comment_actions">
                <div className="com_post_like com_comment_like">
                    <img src={likeIcon} alt="" />
                    <p>5</p>
                </div>
                <div className="post_comment com_comment_like">
                    <img src={commnetIcon} alt="" />
                    <p>3</p>
                </div>
            </div>
            {/*  comment reply*/}
            <div className="comment_reply">
                <div className="com_user_info">
                    <section className="comment_profile_section">
                        <div className="com_post_profile_img">
                            <img src={otherUserIcon} alt="" />
                        </div>
                        <div>
                            <div className="com_name_section">
                                <h5 className='com_post_user_name'>ㅇㅅㅇ </h5>
                                <img src={varifiedIcon} alt="" />
                                <p className="com_post_time com_light_font">1일전</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <p style={{ fontSize: '14px', fontWeight: 'bolder' }}>. . .</p>
                    </section>
                </div>
                <div className="user_comment" >
                    <p>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>
                </div>
                <div className=" comment_actions">
                    <div className="com_post_like com_comment_like">
                        <img src={likeIcon} alt="" />
                        <p>5</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Comments