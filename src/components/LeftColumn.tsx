import { Splitter } from '@ark-ui/react';
import { Group, Text } from '@parkui/components/ui';
import { GridItem } from 'styled-system/jsx';
import { SiteCard } from './SiteCard';

export const LeftColumn = () => {
	return (
		<GridItem colSpan={{ base: 12, md: 8 }}>
			<Group orientation='vertical'>
				<SiteCard title='About Me'>
					<img src='IMG_2923_cropped.jpg' id='portrait' alt='SelfPortrait.jpg' />
					<Text>
						I'm a Full-Stack software developer based in Waterloo, Ontario, with a
						passion for building intuitive, accessible, and performant user interfaces.
						I have experience working on multiple different products, and I enjoy
						staying current with modern frameworks, tools, and best practices.
					</Text>
				</SiteCard>
				<SiteCard title='Work History'>
					<Splitter.Root
						panels={[{ id: 'Independently' }, { id: 'Alaunus' }]}
						orientation='vertical'
					>
						<Splitter.Panel id='Independently'>
							<h3>Independently</h3>
							<p>
								At Independently, I worked as a full-stack developer on a SaaS
								platform that helps organizations manage independent contractors. My
								main focus was building responsive, intuitive, and user-friendly
								interfaces using React and Next.js. I collaborated closely with
								other developers to implement features that improved usability and
								performance. I also contributed to backend development with NestJS
								and MongoDB, particularly around structuring and managing entity
								schemas, creating API endpoints, and managing user role permissions.
							</p>
						</Splitter.Panel>
						<Splitter.ResizeTrigger id='Independently:Alaunus' />
						<Splitter.Panel id='Alaunus'>
							<h3>Alaunus</h3>
							<p>
								At Alaunus, I worked as a front-end developer on a healthcare SaaS
								platform. My work primarily involved developing and maintaining
								user-facing features using AngularJS. I collaborated closely with
								the backend developers to deliver a seamless user experience,
								contributed to improving UI performance, and helped ensure the app's
								responsiveness and accessibility across devices.
							</p>
						</Splitter.Panel>
					</Splitter.Root>
				</SiteCard>
			</Group>
		</GridItem>
	);
};
