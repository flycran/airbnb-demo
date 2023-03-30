export const hoverBoxShadow = `
& {
  border-radius: 24px;
  border: 1px solid rgb(221, 221, 221);
  transition: 0.2s box-shadow ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.18) 0 2px 4px;
  }
}
`
