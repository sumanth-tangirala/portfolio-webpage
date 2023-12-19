import React, {memo} from 'react';

import cx from "classnames";
import _map from "lodash/map";

import text from 'text';

import styles from './Skills.module.scss';
import {SECTION_TYPE_VS_NAME} from "../../../../constants";
import {parse} from "helpers";

function Skill({
    title,
    description,
    imgPath,
    imgStyle,
}) {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.skillImgContainer}>
                <img src={imgPath} className={styles.skillImg} style={imgStyle} alt=""/>
            </div>
            <span className={styles.skillTitle}>{parse(title)}</span>
            <span className={styles.skillDescription}>{parse(description)}</span>
        </div>
    )
}

function Skills({className, sectionRef, sectionHeadingClassName}) {
    return (
        <div className={cx(styles.container, className)} ref={sectionRef}>
            <div className={cx(sectionHeadingClassName, styles.sectionHeading)}>
                {SECTION_TYPE_VS_NAME['SKILLS']}
            </div>
            <div className={styles.skillsGrid}>
                {_map(text.skills, (skill, idx) => (
                <Skill
                    key={idx}
                    {...skill}
                />
            ))}
            </div>
        </div>
    );
}

Skills.propTypes = {};

export default memo(Skills);