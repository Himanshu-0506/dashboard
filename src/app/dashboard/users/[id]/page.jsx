import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Himanshu
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">UserName</label>
          <input type="text" name="username" placeholder="UserName" />
          <label htmlFor="">Email</label>
          <input type="Email" name="Email" placeholder="Example@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" name="Password" placeholder="Password" />
          <label htmlFor="">Phone</label>
          <input type="phone" name="Phone" placeholder="Phone" />
          <label htmlFor="">Address</label>
          <textarea
            type="text"
            name="address"
            id=""
            placeholder="Address"
          ></textarea>
          <label htmlFor="">isAdmin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="">isActive</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
