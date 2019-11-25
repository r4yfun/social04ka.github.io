import React from 'react';
import s from './ProfileInfo.module.scss'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfoInner}>
                <div>
                    <img className={s.avatar} src={props.profile.photos.large} alt="avatar"/>
                </div>
                <div className={s.info}>
                    <div className={s.name}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.description}>
                        {props.profile.aboutMe}
                    </div>
                    <div className={s.contacts} >
                        <div className={s.item}>
                            <span className={s.itemName} >facebook:</span> {props.profile.contacts.facebook}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >website:</span> {props.profile.contacts.website}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >vk:</span> {props.profile.contacts.vk}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >twitter:</span> {props.profile.contacts.twitter}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >instagram:</span> {props.profile.contacts.instagram}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >youtube:</span> {props.profile.contacts.youtube}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >github:</span> {props.profile.contacts.github}
                        </div>
                        <div className={s.item}>
                            <span className={s.itemName} >mainLink:</span> {props.profile.contacts.mainLink}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;