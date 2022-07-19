import React, { useEffect, useState } from 'react';
import {
	Button,
	Close,
	Container,
	Desc,
	Input,
	Label,
	Title,
	Wrapper,
} from './styles';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase-config.js';
import { axiosJWTInstance } from '../../axios-config';
import { useNavigate } from 'react-router-dom';

const Upload = ({ setOpenDialog }) => {
	const [img, setImg] = useState(null);
	const [video, setVideo] = useState(null);
	const [imgPerc, setImgPerc] = useState(0);
	const [videoPerc, setVideoPerc] = useState(0);
	const [inputs, setInputs] = useState({});
	const [tags, setTags] = useState([]);
	const navigate = useNavigate();

	const handleTags = (e) => {
		setTags(e.target.value.split(',').map((item) => item.trim()));
	};

	const uploadFile = (file, urlType) => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				urlType === 'imgUrl'
					? setImgPerc(Math.round(progress))
					: setVideoPerc(Math.round(progress));
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
						break;
				}
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setInputs((prev) => {
						return { ...prev, [urlType]: downloadURL };
					});
				});
			},
		);
	};

	const handleInputs = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	// Upload after imidiatelly choosed
	useEffect(() => {
		video && uploadFile(video, 'videoUrl');
	}, [video]);

	useEffect(() => {
		img && uploadFile(img, 'imgUrl');
	}, [img]);

	// upload
	const handleUpload = async (e) => {
		e.preventDefault();

		const res = await axiosJWTInstance.post(`/videos`, { ...inputs, tags });

		setOpenDialog(false);

		res.status === 200 && navigate(`/video/${res.data._id}`);
	};

	return (
		<Container>
			<Wrapper>
				<Close onClick={() => setOpenDialog(false)}>X</Close>
				<Title>Upload a New Video</Title>
				<Label>Video: </Label>
				{videoPerc > 0 ? (
					'Uploading: ' + videoPerc + '%'
				) : (
					<Input
						type='file'
						accept='video/*'
						onChange={(e) => setVideo(e.target.files[0])}
					/>
				)}
				<Input
					type='text'
					onChange={handleInputs}
					name='title'
					placeholder='Title'
				/>
				<Desc
					onChange={handleInputs}
					placeholder='Description'
					name='desc'
					rows={8}
				/>
				<Input
					type='text'
					placeholder='Seperate the tags with commas'
					onChange={handleTags}
					rows={8}
				/>
				<Label>Image: </Label>
				{imgPerc > 0 ? (
					'Uploading: ' + imgPerc + '%'
				) : (
					<Input
						type='file'
						accept='image/*'
						onChange={(e) => setImg(e.target.files[0])}
					/>
				)}

				<Button onClick={handleUpload}>Upload</Button>
			</Wrapper>
		</Container>
	);
};

export default Upload;
