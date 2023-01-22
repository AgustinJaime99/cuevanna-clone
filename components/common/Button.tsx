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

`
