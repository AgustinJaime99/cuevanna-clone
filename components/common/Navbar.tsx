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
          <Link href='/'>
          <Image src="/images/logo.png" width={232} height={71} alt={"logo"} />
          </Link>
        </div>
      
        <Ul>
          {links.map(({label, route}) => (
            <Text key={route}>
              <Link href={route}>{label}</Link>
            </Text>
          ))
          }
        </Ul>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  display: flex;
  padding-left: 190px;
  width: 100%;
  height: 80px;
  justify-content: left;
  align-items: center;
  background-color: #141a32;
`
const Text = styled.li`
  color: #fff;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serifl;
  padding:20px;
  &:hover {
    color: #007aff
  }
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 14px;
`
 