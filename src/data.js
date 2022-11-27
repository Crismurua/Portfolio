import * as icon  from 'react-icons/si'

const profile = {
	name: 'Cristian Murua',
	role: 'Full Stack Developer',
	description: 'Soy un reciente desarrollador web con inicios de estudios sobre programación durante la pandemia. Con facilidad y preferencia para trabajar en equipo. Soltura en Server y React. Gran predisposición para el continuo aprendizaje y ambición por el perfeccionamiento personal.Actualmente sigo aprendiendo Python para sumar a mi stack y tengo como meta ampliar mis conocimientos en idioma (Ingles: intermedio, Alemán: intermedio).',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/Crismurua' },
	{ icon: icon.SiLinkedin, link: 'https://www.linkedin.com/in/crismurua/' },
];

const brand = 'Singleton'


const work = [
	
	{
		name: 'Calathea Market',
		description: 'E-commerce realizado como proyecto grupal en la academia Henry: Utilizamos la temática de vivero (tienda de plantas e insumos para la jardinería) luego de realizar un breve estudio de mercado en la zona de Rosario, Santa Fe.',
		stack: [
			{ icon: icon.SiFirebase, name: 'Firebase' },
			{ icon: icon.SiExpress, name: 'ExpressJS' },
			{ icon: icon.SiRedux, name: 'Redux' },
			{ icon: icon.SiReact, name: 'ReactJS' },
			{ icon: icon.SiMaterialui, name: 'MaterialUI' },
			{ icon: icon.SiReacttable, name: 'React Table' },
		],
		linkProject: 'https://api-plants-b6153.web.app/',
		linkGithub: 'https://github.com/Crismurua/Proyecto-Final',
	},
	// {
	// 	name: 'E-Commerce - Calathea Market',
	// 	description: 'Nullam id mauris auctor, sollicitudin sapien id, sagittis turpis proin et nunc sempe, venenatis erat.',
	// 	stack: [
	// 		{ icon: icon.SiHtml5, name: 'HTML' },
	// 		{ icon: icon.SiCss3, name: 'CSS' },
	// 		{ icon: icon.SiJavascript, name: 'Javascript' },
	// 		{ icon: icon.SiReact, name: 'ReactJS' },
	// 	],
	// 	linkProject: 'https://example.com',
	// 	linkGithub: 'https://github.com',
	// },
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiLess, name: 'Less', },
			{ icon: icon.SiMaterialui, name: 'MaterialUI', },
			{ icon: icon.SiStyledcomponents, name: 'Styled components', },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
			{ icon: icon.SiRedux, name: 'Redux', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiExpress, name: 'ExpressJS' },
			{ icon: icon.SiSequelize, name: 'Sequelize', },
			{ icon: icon.SiPostgresql, name: 'PostgreSQL', },
			{ icon: icon.SiMysql, name: 'mySQL', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
			{ icon: icon.SiPython, name: 'Python', },
			{ icon: icon.SiDjango, name: 'Django', },
		],
	},
]

const contact = {
	description: 'Contáctame!',
	email: 'cristianmurua1995@gmail.com'
}

export { profile, social, work, stack, contact, brand }