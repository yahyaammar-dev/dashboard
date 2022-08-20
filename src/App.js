import React from 'react'
import styled from 'styled-components'
import DashboardIcon from "@mui/icons-material/Dashboard";
import'./App.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const App = () => {


  
const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 200,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];


  return (
		<Container>
			<Row>
				<Column>
					<VerticalContainer>
						<ul>
							<li>
								<CustomIcon />
							</li>
							<li>
								<CustomIcon />
							</li>
							<li>
								<CustomIcon />
							</li>
							<li>
								<CustomIcon />
							</li>
							<li>
								<CustomIcon />
							</li>
							<li>
								<CustomIcon />
							</li>
						</ul>
					</VerticalContainer>
				</Column>
				<RightColumn>
					<h1>Good Morning, Yahya</h1>
					<RightColumnContainer>
						<Card>
							<CustomIconBlue />
							<h1>Account</h1>
							<p>paragrapgh</p>
						</Card>
						<Card>
							<CustomIconBlue />
							<h1>Account</h1>
							<p>paragrapgh</p>
						</Card>
						<Card>
							<CustomIconBlue />
							<h1>Account</h1>
							<p>paragrapgh</p>
						</Card>
					</RightColumnContainer>
				</RightColumn>
			</Row>
			<Row>
				<Leftspace>
					<ResponsiveContainer height={400} width={1200}>
						<AreaChart
							data={data}
							margin={{
								top: 10,
								right: 30,
								left: 0,
								bottom: 0,
							}}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
						</AreaChart>
					</ResponsiveContainer>
				</Leftspace>
			</Row>
		</Container>
	);
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;
  padding: 1rem;
`
const Row = styled.div`
  display: flex;
`

const Column = styled.div`
`

const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: #6495ed;
	height: ;
	border-radius: 1.2rem;
  position: fixed;
	ul {
		list-style-type: none;
		padding: 0;
		li {
			margin: 2rem 1.5rem;
		}
	}
`;

const CustomIcon = styled(DashboardIcon)`
  color: white;
  cursor: pointer;
`;

const RightColumn = styled(Column)`
  padding: 0 2rem;
  margin-left: 5rem;
  width: 100%;
`

const RightColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 1 auto;
  justify-content: space-between;
`

const Card = styled.div`
	padding: 1rem;
	box-shadow: 0 0 10px #bdbdbd;
	border-radius: 1rem;
	flex: 1;
	margin: 0 1rem;
`;

const CustomIconBlue = styled(CustomIcon)`
	color: #6495ed;
	font-size: 50px !important;
`;

const Leftspace = styled.div`
  margin-left: 5rem;
  margin-top: 2rem;
`