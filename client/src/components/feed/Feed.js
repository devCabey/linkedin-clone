import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Feed.css';
import { Avatar } from '@mui/material';
import InputOption from './inputOption/InputOption';
import Post from './post/Post';
import Sidebar from '../sidebar/Sidebar';
import {
	CalendarToday,
	ExpandMore,
	Notes,
	PhotoSizeSelectActual,
	SmartDisplay,
} from '@mui/icons-material';
import { selectPosts, updatePosts } from '../../redux/postsSlice';
import { getPosts } from '../../api';

function Feed() {
	const postsData = useSelector(selectPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		getPosts().then((data) => {
			const { posts, message } = data;
			dispatch(updatePosts(posts));
		});
	}, []);

	return (
		<div className='feed'>
			<div className='feed_profile_hide'>
				<Sidebar />
			</div>
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<Avatar
						sx={{ width: '40px', height: '40px' }}
						src='https://media.istockphoto.com/id/1179588723/photo/close-up-portrait-of-his-he-nice-attractive-funny-confused-brunet-bearded-guy-wearing-pink.jpg?s=612x612&w=0&k=20&c=nhgnEZKvA1yxYhnSQ-hD4fHFQr7xGn2TwJnatCdssK4='
					/>
					<div className='feed_input_form'>
						<p>Start a post</p>
					</div>
				</div>
				<div className='feed_inputOptions'>
					<InputOption
						title='Photo'
						Icon={PhotoSizeSelectActual}
						color='#0388fc'
					/>
					<InputOption title='Video' Icon={SmartDisplay} color='#3b8f42' />
					<InputOption title='Event' Icon={CalendarToday} color='#a15c03' />
					<InputOption title='Write article' Icon={Notes} color='#f56302' />
				</div>
			</div>
			<div className='feed_post_sort'>
				<span></span>
				<div className='feed_post_sort_content'>
					Sort by:
					<span>
						Top <ExpandMore />
					</span>
				</div>
			</div>
			{/* Posts */}
			<div className='feed_post_wrapper'>
				{postsData?.length > 0 ? (
					postsData.map((post) => (
						<Post
							key={post._id}
							name={`${post.owner.firstName} ${post.owner.lastName}`}
							// description={post.owner}
							message={post.description}
							photoUrl={post.picture}
							// profilePic={post.owner}
							likes={post.likes?.length}
							comment={post.comments.length}
							repost={post.reposts.length}
						/>
					))
				) : (
					<div className=''>
						<h1>Nothing</h1>
					</div>
				)}
			</div>
		</div>
	);
}

export default Feed;
