import {useState} from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { selectCars } from '../feature/car/carSlice'
import { useSelector } from 'react-redux'

export const Container = styled.div`
	top:0;
	left:0;
	right:0;
	max-height:60px;
	position:fixed;
	display:flex;
	align-items: center;
	justify-content:space-between;
	padding:20px 20px;
	z-index:1;
`;

export const Menu = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	flex:1;
	a{
		font-weight:600;
		text-transform:uppercase;
		padding:0 10px;
		flex-wrap: nowrap;
	}
	@media(max-width:768px){
		display:none;
	}
`;

export const RightMenu = styled.div`
	display:flex;
	align-items:center;
	a{
		font-weight:600;
		text-transform:uppercase;
		margin-right:10px;
		flex-wrap: nowrap;
	}
`;

export const CustomMenu = styled(MenuOutlinedIcon)`
	cursor:pointer;
`;

export const BurgerNav = styled.div`
	position:fixed;
	top:0;
	bottom:0;
	right:0;
	background:white;
	width:300px;
	z-index:16;
	list-style:none;
	padding:20px;
	display:flex;
	flex-direction:column;
	transform:${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
	trannsition:transform 0.2s;
	li{
		padding:15px 0;
		border-bottom:1px solid rgba(0,0,0,0.2);
	}

	a{
		
		font-weight:600;
	}
`
export const CloseWrapper = styled.div`
	display:flex;
	justify-content: flex-end;
`

export const CustomClose =  styled(CloseOutlinedIcon)`
	cursor:pointer;
`

function Header(){
	const [burgerStatus, setburgerStatus] = useState(false)
	const cars = useSelector(selectCars)
	
	return(
		<Container>
			<a href="">
				<img src="images/logo.svg" />
			</a>

			<Menu>
				{cars && cars.map((car, index)=>(
					<a key={index} href="#">{car}</a>
				))}
			</Menu>

			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<CustomMenu onClick={()=>setburgerStatus(true)}/>
			</RightMenu>

			<BurgerNav show = {burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={()=>setburgerStatus(false)} />
				</CloseWrapper>
				{cars && cars.map((car, index)=>(
					<li key={index}><a href="#" >{car}</a></li>
				))}
				<li><a href="#" >Trade-in</a></li>
				<li><a href="#" >CyberTruck </a></li>
				<li><a href="#" >Roadaster</a></li>
				<li><a href="#" >Existing Inventory </a></li>
				<li><a href="#" >Used Inventory </a></li>
				<li><a href="#" >Existing Inventory </a></li>
				<li><a href="#" >Existing Inventory </a></li>
			</BurgerNav>
		</Container>
	)
}

export default Header

