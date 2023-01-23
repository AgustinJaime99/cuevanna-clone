import styled from "styled-components"
import Link from "next/link"

interface Props {
  url?: string;
  children: string;
}

export const Button = ({ url, children }: Props) => {

  return (
    <>
      {url ?
        <Link passHref href={url}>
          <Btn>{children}</Btn>
        </Link>
        :
        <Btn>{children}</Btn>
      }
    </>
  )
}

const Btn = styled.button`
  padding: 1rem 2rem;
  border: none;
  line-height: 2rem;
  border-radius: 3rem;
  cursor: pointer;
  width: 100%;
  color: var(--white);
  background-color: var(--secondaryColor1);
  transition: all ease-in-out 0.3s;
  &:hover {
    background-color: var(--primaryColor1);
  }
`
