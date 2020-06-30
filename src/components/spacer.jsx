import styled from "styled-components"

const StyledSpacer = styled.div`
  display: inline-block;
  height: ${({height}) => height ? `${height}px`: `1rem`};
  width: ${({width}) => width ? `${width}px`: `100%`};
`

export default StyledSpacer