import Link from "next/link"
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
        <ul>
          {links.map(({label, route}) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))
          }
        </ul>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: red;

`
 