import React, { useEffect, useState } from "react";
import {
  collection,
  getDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore/lite";

import {
  CalendarToday,
  ExpandMore,
  Notes,
  PhotoSizeSelectActual,
  SmartDisplay,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

import "./Feed.css";
import InputOption from "./inputOption/InputOption";
import Post from "./post/Post";

import { db } from "../../firebase";

const sendPost = async (e) => {
  e.preventDefault();
  await addDoc(collection(db, "posts"), {
    name: "Caleb Okyere",
    decription: "This is a test",
    message: "input",
    photo: "",
    timestamp: serverTimestamp(),
  });
};

const getPost = async (setPosts) => {
  const postRef = await getDoc(collection(db, "posts"));
  const querySnapshot = query(postRef, orderBy("timestamp"));
  setPosts(querySnapshot.map((doc) => ({ id: doc.id, data: doc.data() })));
};

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Avatar
            sx={{ width: "40px", height: "40px" }}
            src="https://media.istockphoto.com/id/1179588723/photo/close-up-portrait-of-his-he-nice-attractive-funny-confused-brunet-bearded-guy-wearing-pink.jpg?s=612x612&w=0&k=20&c=nhgnEZKvA1yxYhnSQ-hD4fHFQr7xGn2TwJnatCdssK4="
          />
          <div className="feed_input_form">
            <p>Start a post</p>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption
            title="Photo"
            Icon={PhotoSizeSelectActual}
            color="#0388fc"
          />
          <InputOption title="Video" Icon={SmartDisplay} color="#3b8f42" />
          <InputOption title="Event" Icon={CalendarToday} color="#a15c03" />
          <InputOption title="Write article" Icon={Notes} color="#f56302" />
        </div>
      </div>
      <div className="feed_post_sort">
        <span></span>
        <div className="feed_post_sort_content">
          Sort by:
          <span>
            Top <ExpandMore />
          </span>
        </div>
      </div>
      {/* Posts */}
      <div className="feed_post_wrapper">
        {posts && posts.map((post) => <Post key="heres" />)}
      </div>
    </div>
  );
}

export default Feed;
