import React from 'react';
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfoInner}>
                <div>
                    <img className={s.avatar} src="https://kushvsporte.ru/images/avatar/25280_3a2bc54d0e288f38eafb947e593051d9.jpg" alt="avatar"/>
                </div>
                <div className={s.info}>
                    <div className={s.name}>
                        Rafael Valiullov
                    </div>
                    <div className={s.description}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sequi, tempora, quis ea ipsum quod perferendis obcaecati, 
                        sapiente in autem magnam porro vel illum quae iure cupiditate commodi? 
                        Facere, quidem quo.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;