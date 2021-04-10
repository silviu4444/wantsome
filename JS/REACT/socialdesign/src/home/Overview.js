import React from 'react';
import style from '../style/Overview.module.scss';
import iconFacebook from '../media/icons/iconFacebook.svg';
import iconInstagram from '../media/icons/iconInstagram.svg';
import iconTwitter from '../media/icons/iconTwitter.svg';
import iconYoutube from '../media/icons/iconYoutube.svg';
import iconUp from '../media/icons/iconUp.svg';
import iconDown from '../media/icons/iconDown.svg';

const renderSwitch = (param) => {
    switch (param) {
        case 'facebook':
            return <img className={style.fix} src={iconFacebook} />
            break;
        case 'instagram':
            return <img className={style.fix} src={iconInstagram} />
            break;
        case 'twitter':
            return <img className={style.fix} src={iconTwitter} />
            break;
        case 'youtube':
            return <img className={style.fix} src={iconYoutube} />
            break;
        default:
        // code block
    }
}
const Overview = ({action, grade, number, socialMedia}) => {
    return (
        <div className={style.flexC}>
            <div className={style.flex}>
                <p>{action}</p>
                    {
                        renderSwitch(socialMedia)
                        }
            </div>
            <div className={style.flex}>
                <h1>{number}</h1>
                <div>
                {
                    grade.up ?
                        <div className={style.icon}>
                            <img src={iconUp}/>
                            <span className={style.upRank}>{grade.percent}</span>
                        </div>
                        :
                        <div className={style.icon}>
                            <img src={iconDown}/>
                            <span className={style.downRank}>{grade.percent}</span>
                        </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Overview;