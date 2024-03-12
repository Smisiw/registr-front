'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {IProfileInfo} from "@/entities/Profile/model/IProfileInfo";
import {getProfileInfo} from "@/entities/Profile/api/getProfileInfo";
import styles from "./ProfileLink.module.css"

const ProfileLink = () => {
    const [profileInfo, setProfileInfo] = useState<IProfileInfo>()
    const [isLoading, setIsLoading] = useState<boolean>()
    useEffect(() => {
        getProfileInfo(setProfileInfo, setIsLoading)
    }, []);
    return (
        <a className={styles.profileLink}>
          <Image className={styles.avatar} src={profileInfo?.avatar || ""} alt="Avatar" width={42} height={42}/>
          <div>
              <p className={styles.fullName}>{profileInfo?.fullName}</p>
              <p className={styles.jobTitle}>{profileInfo?.jobTitle}</p>
          </div>
        </a>
    );
};

export default ProfileLink;