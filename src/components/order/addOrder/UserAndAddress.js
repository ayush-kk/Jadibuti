import React, { useState } from "react";

import styles from "./addorder.module.css";
function UserAndAddress() {
    return (<>
        <div className={styles.leftAlign}>
            <div className={styles.left1}>
                <div className="name-text">
                    <p>Shipping to:- Rajat Kumar</p>
                </div>
            </div>
            <div className={styles.left2}>
                <p>VPO Mangala, Dist. & Teh. Sirsa, Haryana(125055)</p>
            </div>
        </div>
    </>
    );
}
export default UserAndAddress;