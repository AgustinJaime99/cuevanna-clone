import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"



const links = [
  {
    label: 'Anime',
    route: "/anime"
  },
  {
    label: 'Series',
    route: '/series'
  },
  {
    label: 'Películas',
    route: '/películas'
  }
]

export const Navbar = () => {
  return (
    <>
      <Nav>
        <div>
        <Image src="/images/logo.png" width={200} height={60} alt={"logo"} />
        </div>
      
        <Ul>
          {links.map(({label, route}) => (
            <Tex key={route}>
              <Link href={route}>{label}</Link>
            </Tex>
          ))
          }
        </Ul>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  display: flex;
  padding-left: 130px;
  width: 1909px;
  height: 80px;
  justify-content: left;
  align-items: center;
  background-color: #141a32;
`
const Tex = styled.li`
  color: white;
  font-size: 16px;
  padding:25px;
  
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row
`
 