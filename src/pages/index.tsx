import { useState } from 'react';
import { Button, Heading, Input, Tag, Text, TextArea } from '../components';
import Rating from '../components/rating/rating';
import Card from '../components/card/card';
import { withLayout } from '../layout/layout';
import { GetServerSideProps } from 'next';
import axios from 'axios';



const Index = () => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Heading tag='h2'>Heading</Heading>
			<Text size='s'>Text</Text>
			<Tag size='s' color='red'>
				Red
			</Tag>
			<Tag size='m' color='green'>
				Green
			</Tag>
			<br />
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				Arrow
			</Button>
			<Button appearance='primary' arrow='down'>
				Down
			</Button>
			<br />
			<Input placeholder='Enter' />
			<div>
				<TextArea placeholder='Massage' />
			</div>
			<br />
			<Rating rating={rating} isEditabled={true} setRating={setRating} />
			<Card color='primary' style={{ marginTop: '30px' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt delectus ipsum accusantium. Quaerat necessitatibus
				laborum cum quis veniam. Eveniet?
			</Card>
			<Card color='primary' style={{ marginTop: '30px' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt delectus ipsum accusantium. Quaerat necessitatibus
				laborum cum quis veniam. Eveniet?
			</Card>
		</>
	);
};
export default withLayout (Index);


export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.post('http://localhost:8100/page-find', { firstCategory: 1 });

	return {
		props: {
			data,
		},
	};
};
