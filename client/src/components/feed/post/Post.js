import {
	Add,
	Circle,
	Comment,
	MoreHoriz,
	Public,
	Repeat,
	Send,
	ThumbUpOffAlt,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import InputOption from '../inputOption/InputOption';
import './Post.css';

function Post({
	name,
	description,
	message,
	photoUrl,
	profilePic,
	likes,
	comment,
	repost,
}) {
	const [first, setFirst] = useState(false);
	return (
		<div className='post_container'>
			{!first && (
				<div className='post_top'>
					<Avatar sx={{ width: '20px', height: '20px' }} />
					<p>
						<span>Lynios Komlavani</span> commented on this
					</p>
					<span className='post_more_horizon'>
						<MoreHoriz sx={{ color: '#7f7f7f' }} fontSize='medium' />
					</span>
				</div>
			)}

			{/* header */}
			<div className='post_header'>
				<div className='post_header_account'>
					<Avatar sx={{ width: '50px', height: '50px' }} />
					<div className='post_header_account_left'>
						<div className='post_header_account_left_description_top'>
							<h1>{name}</h1> <Circle sx={{ fontSize: '4px', color: 'gray' }} />
							<h6>3rd+</h6>
						</div>
						<p className='post_header_account_left_description_middle'>
							Consultant | Product Manager | Olympian
						</p>
						<div className='post_header_account_left_description_bottom'>
							<h4>3h</h4>{' '}
							<Circle
								sx={{ fontSize: '3px', color: 'gray', margin: '0px 5px' }}
							/>
							<Public sx={{ fontSize: '15px', color: 'gray' }} />
						</div>
					</div>
					<div className='post_header_account_right'>
						{first ? (
							<span className='post_more_horizon'>
								<MoreHoriz sx={{ color: '#7f7f7f' }} fontSize='medium' />
							</span>
						) : (
							<span>
								<Add />
								<h6>Follow</h6>
							</span>
						)}
					</div>
				</div>
				<div className='post_header_message'>
					<p>{message}</p>
				</div>
			</div>
			<div className='post_large_files'>
				{/* Image  */}
				{photoUrl ? (
					photoUrl?.length > 1 ? (
						<div className=''>
							{photoUrl.map((photo) => (
								<img src={photo} alt='some_post' />
							))}
						</div>
					) : photoUrl.length == 1 ? (
						<img src={photoUrl[0]} alt='some_post' />
					) : (
						<></>
					)
				) : (
					<></>
				)}
			</div>
			{/* Interactions */}
			<div className='post_interaction'>
				<div className='post_interaction_reaction'>
					<div className='post_interaction_avatar'>
						<Avatar sx={{ width: '15px', height: '15px' }} />
					</div>
					<p className='post_interaction_people'>
						Gabriel Eyo and 1,209 others
					</p>
				</div>

				<div className='post_interaction_stat'>
					<span>{comment} comment</span>
					<Circle sx={{ fontSize: '3px', color: 'gray', margin: '0px 5px' }} />
					<span>{repost} reposts</span>
				</div>
			</div>
			{/* Reaction */}
			<div className='post_reaction_container'>
				<InputOption title='Like' Icon={ThumbUpOffAlt} />
				<InputOption title='Comment' Icon={Comment} />
				<InputOption title='Repost' Icon={Repeat} />
				<InputOption title='Send' Icon={Send} />
			</div>
		</div>
	);
}

export default Post;
