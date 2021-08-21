import Boxes from './Boxes.tsx'
import React from 'react'
import styled from 'styled-components'
export default function HtmlToReact() {
  return (
    <BoxWrapper>
      <H1>25 Years of JavaScript</H1>
      <Boxes />
      <Block>
        <h2>May 1995: The Birth</h2>
        <p>
          On December 4, 1995, Netscape, in cooperation with Sun Microsystems, announced a new
          programming language called JavaScript, which was intended as an open and
          platform-independent language specifically for use on the internet. One of the main goals
          from the start was to create a language that was simple but also powerful.
        </p>
      </Block>

      <Block>
        <h2>June 1997: ECMAscript 1</h2>
        <p>
          Netscape has submitted JavaScript to ECMA for standardization at an early stage. In June
          1997, the language specification ECMAScript appeared.
        </p>
      </Block>

      <Block>
        <h2>December 1999: ECMAscript 3</h2>
        <p>
          In December 1999, the third edition of the language was released with enhancements like:
        </p>
      </Block>

      <Block>
        <h2>April 2001: JSON</h2>
        <p>
          “Douglas Crockford specified JSON (JavaScript Object Notation), a lightweight
          data-interchange format based on a subset of JavaScript. JSON data is easier to load and
          work with in the frontend, and by the end of the decade would supersede XML as a
          data-interchange format on the Web.” — js25.org
        </p>
      </Block>

      <Block>
        <h2>2016–2020: Asynchronous Programming</h2>
        <p>
          After planning to follow an annual publication cycle, ECMAScript has appeared in versions
          2016, 2017, 2018, 2019, and 2020. The biggest change in this period was the introduction
          of the two keywords async and await, which have contributed to a significant
          simplification of asynchronous programming.
        </p>
      </Block>
    </BoxWrapper>
  )
}
const Block = styled.div`
  margin: 2rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 1rem 2rem;
  position: relative;
  z-index: 1;
  transition: clip 600ms ease-out;
`
const BoxWrapper = styled.div`
  padding: 1rem;
`
const H1 = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
  padding: 20px;
`
