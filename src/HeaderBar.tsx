import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

const pages = [
	{
		title: 'Intro',
		id: '#intro',
	},
	{
		title: 'History of Me',
		id: '#history',
	},
	{
		title: 'Contact',
		id: '#contact',
	},
];

export const HeaderBar = () => {
	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button>
								<Link
									key={page.title}
									href={page.id}
									sx={{
										color: 'white',
										textDecoration: 'none',
									}}
								>
									{page.title}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
