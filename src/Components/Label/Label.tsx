type LabelPropsT = {
  text: string
  size?: string
}

const Label: React.FC<LabelPropsT> = ({ text, size }) => {
  return <label style={{ fontSize: size }}>{text}</label>
}

export default Label
